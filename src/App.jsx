import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import QRPage from './pages/QRPage.jsx'
import CompanyPage from "./pages/companypage";

const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<CompanyPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
