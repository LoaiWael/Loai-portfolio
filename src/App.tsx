import { Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import WorkshopPage from "./pages/WorkshopPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/workshop" element={<WorkshopPage />} />
    </Routes>
  );
}

export default App;