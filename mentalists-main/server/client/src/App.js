import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Homepage from "./pages/Start"; // Updated from "./pages/Start"
import History from "./pages/History";
import FounderChairman from "./pages/FounderChairman";
import CCAE from "./pages/ccae";
import CSAA from "./pages/csaa";
import CSII from "./pages/csii";
import Member from "./pages/Member";
import WorkingAtSwis from "./pages/WorkingAtSwis";
import COC from "./pages/coc";
import Nutrition from "./pages/Nutrition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SkillDevelopment from "./pages/SkillDevelopment";
import Careers from "./pages/Careers";
import Education from "./pages/Education";

// Components
import Footer from "./components/Footer";
import ScrollHeader from "./components/ScrollHeader";
import ContactPage from "./components/ContactPage";
import JoinUs from "./components/JoinUs";
import FileUploadTest from "./components/FileUploadTest"

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <RoutesWithNavbar />
    </BrowserRouter>
  );
}

const RoutesWithNavbar = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/landing";

  return (
    <>
      {!hideNavbar && <ScrollHeader />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/history" element={<History />} />
        <Route path="/founderchairman" element={<FounderChairman />} />
        <Route path="/ccae" element={<CCAE />} />
        <Route path="/csaa" element={<CSAA />} />
        <Route path="/csii" element={<CSII />} />
        <Route path="/member" element={<Member />} />
        <Route path="/WorkingAtSwis" element={<WorkingAtSwis />} />
        <Route path="/coc" element={<COC />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/SkillDevelopment" element={<SkillDevelopment />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/FileUploadTest" element={<FileUploadTest />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        {/* Optional: Redirect unmatched routes to homepage */}
        <Route path="*" element={<Homepage />} />
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
};

export default App;