import React from "react";
import Navbar from "./Components/Navbar";
import Airbnb from "./Components/Airbnb";
import Footer from "./Components/Footer";
import Places from "./Components/Places";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectWallet from "./Components/ConnectWallet";

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
          <Routes>  
            <Route path='/' element={<Airbnb />} />
            <Route path='/place to stay' element={<Places />} />
            <Route path='/connectwallet' element={<ConnectWallet />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
