import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="nav-wrapper">
      <nav>
        <img id="nav-logo" src="./images/nav-logo.png" alt="Navbar-logo" />
        <div className="nav-links">
          <Link to="/">
            <span className="link">Home</span>
          </Link>
          <Link to="/places-to-stay">
            <span className="link">Place to stay</span>
          </Link>
          <a>
            <span className="link">NFTs</span>
          </a>
          <a>
            <span className="link">Community</span>
          </a>
        </div>
        <button onClick={toggleModal} id="nav-wallet">
          Connect wallet
        </button>
      </nav>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="first-content">
              <h3>Connect wallet</h3>
              <p onClick={toggleModal} className="close-modal">
                &#9587;
              </p>
            </div>

            <hr />
            <div className="last-content">
              <p id="wallet-text">Choose your preferred wallet</p>
              <button className="wallet-btn">
                <img
                  src="./images/metamask.png"
                  className="wallet-img"
                  alt="metamask"
                />
                <p className="btn-text" id="metamask">Metamask</p> &#62;
              </button>
              <button className="wallet-btn">
                <img
                  src="./images/connectWallet.png"
                  className="wallet-img"
                  alt="metamask"
                />
                <p className="btn-text">WalletConnect</p> &#62;
              </button>
            </div>
          </div>
          {/* <div className="modal-content"> */}

          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
