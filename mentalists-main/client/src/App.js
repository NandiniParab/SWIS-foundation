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
import Allinone from "./pages/Allinone";
import New from "./pages/New";
import COC from "./pages/coc";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SkillDevelopment from "./pages/SkillDevelopment";

// Import the TypeScript Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <RoutesWithNavbar />
    </BrowserRouter>
  );
}

const RoutesWithNavbar = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/landing"; // optional

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div style={{ paddingTop: '64px' }}> {/* offset for fixed navbar */}
        <Routes>
          <Route path="/anushka" element={<Anushka />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/founderchairman" element={<FounderChairman />} />
          <Route path="/ccae" element={<CCAE />} />
          <Route path="/csaa" element={<CSAA />} />
          <Route path="/csii" element={<CSII />} />
          <Route path="/member" element={<Member />} />
          <Route path="/allinone" element={<Allinone />} />
          <Route path="/new" element={<New />} />
          <Route path="/coc" element={<COC />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/SkillDevelopment" element={<SkillDevelopment />} />
        </Routes>
      </div>
    </>
  );
};

export default App;