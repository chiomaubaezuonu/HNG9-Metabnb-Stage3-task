import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Places = () => {
  return (
    <div>
      <Navbar />
      <div className="locations">
        <p className="place">Restaurant</p>
        <p className="place">Cottage</p>
        <p className="place">Castle</p>
        <p className="place">fantastic city</p>
        <p className="place">Beach</p>
        <p className="place">Cabins</p>
        <p className="place">Off-grid</p>
        <p className="place">Farm </p>
        <img src="./images/location-btn.png" id="location-btn" alt="place"/>
      </div>
      <div className="site">
        <div className="places-img">
          <img
            src="./images/feature-img5.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/feature-img6.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/feature-img7.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/feature-img8.png"
            className="location-img"
            alt="place-to-go"
          />
        </div>
        <div className="places-img">
          <img
            src="./images/feature-img1.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/feature-img2.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/feature-img3.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/feature-img4.png"
            className="location-img"
            alt="place-to-go"
          />
        </div>

        <div className="places-img">
          <img
            src="./images/place-img1.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/place-img2.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/place-img3.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/place-img4.png"
            className="location-img"
            alt="place-to-go"
          />
        </div>
        <div className="places-img">
          <img
            src="./images/place-img5.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/place-img6.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/place-img7.png"
            className="location-img"
            alt="place-to-go"
          />
          <img
            src="./images/place-img8.png"
            className="location-img"
            alt="place-to-go"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Places;
