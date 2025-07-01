import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Anushka from "./pages/Anushka";
import Homepage from "./pages/Start";
import History from "./pages/History";
import FounderChairman from "./pages/FounderChairman";
import CCAE from "./pages/ccae"; 
import CSAA from "./pages/csaa"; 
import CSII from "./pages/csii"; 
import Member from "./pages/Member"; 
import SkillDevelopment from "./pages/SkillDevelopment"; 
import COC from "./pages/coc";

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
      <Route path="/FounderChairman" element={<FounderChairman />} />
      <Route path="/ccae" element={<CCAE />} /> 
      <Route path="/csaa" element={<CSAA />} /> 
      <Route path="/csii" element={<CSII />} /> 
      <Route path="/Member" element={<Member />} /> 
      <Route path="/SkillDevelopment" element={<SkillDevelopment />} /> 
      <Route path="/coc" element={<COC />} />
    </Routes>
  );
};

export default App;