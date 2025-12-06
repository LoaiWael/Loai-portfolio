import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import NavBar from "./components/NavBar.js";
import App from "./App.jsx";

window.addEventListener("load", () => {
  const loadingElem = document.querySelector(".loading-warper") as HTMLElement;
  loadingElem.style.opacity = '0';

  document.documentElement.style.overflow = 'auto';
  setTimeout(() => {
    document.body.removeChild(loadingElem);
  }, 350);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
    </BrowserRouter>
  </StrictMode>
);
