import React from 'react'

const Footer = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footer