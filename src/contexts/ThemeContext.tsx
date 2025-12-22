import { useContext, createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { themeType } from "../types";

interface IthemeContext {
  themeMode: themeType | null,
  applyTheme: (theme: themeType) => void
}

const ThemeContext = createContext<IthemeContext | null>(null)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<themeType | null>(localStorage.getItem('theme') as themeType ?? null);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.remove('light-theme', 'dark-theme');
    if (!themeMode) {
      const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemDarkMode ? 'dark' : 'light';

      rootElement.classList.add(initialTheme === 'dark' ? 'dark-theme' : 'light-theme');
      setThemeMode(initialTheme);
    } else {
      rootElement.classList.add(themeMode === 'dark' ? 'dark-theme' : 'light-theme');
    }
  }, [themeMode]);

  const applyTheme = (theme: themeType) => {
    setThemeMode(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ themeMode, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export default ThemeProvider