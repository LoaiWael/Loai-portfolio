import { useContext, createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { themeType } from "../types";

interface themeContext {
  themeMode: themeType | null,
  applyTheme: (theme: themeType) => void
}

const ThemeContext = createContext<themeContext | null>(null)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<themeType | null>(localStorage.getItem('theme') as themeType ?? null);

  useEffect(() => {
    if (!themeMode) {
      const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(systemDarkMode ? 'dark' : 'light');
    }
    else {
      applyTheme(themeMode);
    }
  }, [themeMode])

  function applyTheme(theme: themeType) {
    const rootElement = document.documentElement;
    rootElement.classList.remove('light-theme', 'dark-theme');

    if (theme === 'dark') {
      rootElement.classList.add('dark-theme');
    } else {
      rootElement.classList.add('light-theme');
    }
    setThemeMode(theme)
    localStorage.setItem('theme', theme);
  }

  return (
    <ThemeContext.Provider value={{ themeMode, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider