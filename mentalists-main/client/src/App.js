import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Anushka from "./pages/Anushka";
import Homepage from "./pages/Start";
import History from "./pages/History";


function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesWeb />
      </BrowserRouter>
    </>
  );
}

const RoutesWeb = () => {
  const location = useLocation(); // Get the current route
  const hideLayout = location.pathname === "/landing";

  return (
    

      <Routes>
        
        <Route path="/anushka" element={<Anushka/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/history" element={<History/>} />

      </Routes>
      
    
  );
};

export default App;
