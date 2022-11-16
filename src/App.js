import React from "react";
import Navbar from "./Components/Navbar";
import Airbnb from "./Components/Airbnb";
import Footer from "./Components/Footer";
import Places from "./Components/Places";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./Components/Modal";

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
          <Routes>  
            <Route path='/' element={<Airbnb />} />
            <Route path='/places-to-stay' element={<Places />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
