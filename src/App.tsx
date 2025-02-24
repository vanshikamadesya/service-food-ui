import "./App.css";
import "./index.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section1 from "./components/HomeContent/BgImage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Section1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
