import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <img id="nav-logo" src="./images/nav-logo.png" alt="Navbar-logo" />
        <div className="nav-links">
          <Link to={"/Place to stay"}>
            <span className="link">Place to stay</span>
          </Link>
          <Link to={"/Home"}>
            <span className="link">Home</span>
          </Link>
          <a>
            <span className="link">NFTs</span>
          </a>
          <a>
            <span className="link">Community</span>
          </a>
        </div>

        <img id="nav-wallet" src="./images/connect-wallet.png" alt="connect" />
      </nav>
    </div>
  );
};

export default Navbar;
