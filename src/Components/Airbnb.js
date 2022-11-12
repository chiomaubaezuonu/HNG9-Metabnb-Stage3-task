import React from "react";

const Airbnb = () => {
  return (
    <div>
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
    </div>
  );
};

export default Airbnb;
