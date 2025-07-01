import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


import Anushka from "./pages/Anushka";






function App() {
  return (
    <BrowserRouter>
      <RoutesWeb />
    </BrowserRouter>
  );
}

const RoutesWeb = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/landing";

  return (
    <Routes>
      <Route path="/anushka" element={<Anushka />} />
      
     
    </Routes>
  );
};

export default App;
