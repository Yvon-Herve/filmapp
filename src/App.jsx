import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Favoris from "./pages/Favoris";

const App = () => {
  return (
    // <div className="bg-slate-700">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
};

export default App;
