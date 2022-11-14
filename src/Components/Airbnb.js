import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"

const Airbnb = () => {
  return (
    <div className="metabnb">
    <Navbar />  
      <div className="hero-section">
        <div className="left-text">
          <h1 id="hero-msg">
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p id="hero-text">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <input type="text" id="hero-input" placeholder="Search for a location" />
          <button id="hero-btn">Search</button>
        </div>
        <div className="hero-img">
            <img src="./images/hero-img.png" id="heroImg"alt="hero-images"/>
        </div>
      </div>
      <img src="./images/meta-links.png" className="metalinks1" alt="links" />
      <h1 id="inspiration-title">Inspiration for your next adventure</h1>
      <div className="inspiration-images">
        <div className="feature-img-row1">
          <img src="./images/feature-img1.png" className="feature" alt="features"/>
          <img src="./images/feature-img2.png" className="feature" alt="features"/>
          <img src="./images/feature-img3.png" className="feature" alt="features"/>
          <img src="./images/feature-img4.png" className="feature" alt="features"/>
        </div>
        <div className="feature-img-row2">
        <img src="./images/feature-img5.png" className="feature" alt="features"/>
        <img src="./images/feature-img6.png" className="feature" alt="features"/>
        <img src="./images/feature-img7.png" className="feature" alt="features"/>
        <img src="./images/feature-img8.png" className="feature" alt="features"/>
        </div>
      </div>
      <div className="nfts">
        <div className="nfts-text">
          <h1 id="nfts-title">Metabnb NFTs</h1>
          <p id="nft-msg">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          <button id="nfts-btn">Learn more</button>
        </div>
        <div className="nfts-images">
          <img src="./images/nfts-images.png" id="nft-img" alt="nft" />
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Airbnb;
