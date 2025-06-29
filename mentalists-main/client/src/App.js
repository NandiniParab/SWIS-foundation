import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Anushka from "./pages/Anushka";
import Homepage from "./pages/Start";
import History from "./pages/History";
import FounderChairman from "./pages/founder";
import CCAE from "./pages/ccae"; 
import CSAA from "./pages/csaa"; 
import CSII from "./pages/csii"; 

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
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/history" element={<History />} />
      <Route path="/founder" element={<FounderChairman />} />
      <Route path="/ccae" element={<CCAE />} /> 
      <Route path="/csaa" element={<CSAA />} /> 
      <Route path="/csii" element={<CSII />} /> 
    </Routes>
  );
};

export default App;
