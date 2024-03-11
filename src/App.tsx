import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FabricEcom from "./pages/FabricEcom";
import Consisto from "./pages/Consisto";
import Netflix from "./pages/Netflix";
import Checklist from "./pages/Checklist";
import Foodwagon from "./pages/Foodwagon";
import Spotlight from "./pages/Spotlight";
import About from "./pages/About";
import Home from "./pages/Home";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/ecommerce" element={<FabricEcom />} />
      <Route path="/consisto" element={<Consisto />} />
      <Route path="/netflix" element={<Netflix />} />
      <Route path="/checklist" element={<Checklist />} />
      <Route path="/foodwagon" element={<Foodwagon />} />
      <Route path="/spotlight" element={<Spotlight />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
