import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
        <img id="nav-logo" src="./images/nav-logo.png" alt="Navbar-logo" />
        <div className="nav-text">
        <a><span>Home</span></a>
        <span>Place to stay</span>
        <span>NFTs</span>
        <span>Community</span>
        </div>
        
        <img id="nav-wallet" src="./images/connect-wallet.png" alt="connect"/>
        </nav>
    </div>
  )
}

export default Navbar