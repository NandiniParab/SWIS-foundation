import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Anushka from "./pages/Anushka";
import Homepage from "./pages/Start";
import History from "./pages/History";
import FounderChairman from "./pages/FounderChairman";
import New from "./pages/New";


function App() {
  return (
    <BrowserRouter>
      <RoutesWeb />
    </BrowserRouter>
  );
}

const RoutesWeb = () => {
  return (
    <Routes>

      <Route path="/anushka" element={<Anushka />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/history" element={<History />} />
      <Route path="/founder" element={<FounderChairman />} />
      <Route path="/new" element={<New />} />
      
    </Routes>
  );
};

export default App;