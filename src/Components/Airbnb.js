import React from "react";
import Places from "./Places";

const Airbnb = () => {
  return (
    <div className="metabnb">
      <div className="metaverse">
        <div className="left-text">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <input type="text" placeholder="Search for a location" />
          <button>Search</button>
        </div>
        <div className="right-images">
          <div className="groupimg1">
            <img src="./images/house-img1.png" alt="house1" />
            <img src="./images/house-img2.png" alt="house2" />
          </div>
          <div className="groupimg2">
            <img src="./images/house-img3.png" alt="house3" />
            <img src="./images/house-img4.png" alt="house4" />
          </div>
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
      <div className="footer">
        <div className="left-footer">
          <img src="./images/footer-logo.png" alt="footer-logo"/>
          <div className="social-media">
          <img src="./images/fb.png" alt="facebook" />
          <img src="./images/insta.png" alt="instagram" />
          <img src="./images/twitter.png" alt="twitter" />
          </div>
          <h6>&copy; 2022 metabnb </h6>
        </div>
        <div className="right-footer">
          <div>
            <h3>Community</h3>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landords</p>
            <p>Discord</p>
          </div>
          <div>
            <h3>Places</h3>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
          </div>
          <div>
            <h3>About us</h3>
            <p>Road map</p>
            <p>Creators</p>
            <p>Carrer</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
      <Places />
    </div>
    
  );
};

export default Airbnb;
