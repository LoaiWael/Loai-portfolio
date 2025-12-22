import { RouterProvider } from "react-router-dom";
import router from "./router";
import ThemeProvider from "./contexts/ThemeContext";
import WorkProvider from "./contexts/WorkContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <WorkProvider>
        <RouterProvider router={router} />
      </WorkProvider>
    </ThemeProvider>
  );
}

export default App;