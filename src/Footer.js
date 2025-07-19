// Footer.jsx
import React from 'react';
import './Footer.css'; // Link to the CSS file

function Footer() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  };

  return (
    <footer className="footer"> {/* Use semantic <footer /> tag */}
      {/* Back to Top Section */}
      <div className="footer__backToTop" onClick={scrollToTop}>
        <span>Back to top</span>
      </div>

      {/* Main Footer Links Sections */}
      <div className="footer__main">
        <div className="footer__column">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#">Sell on Clam-Zone</a></li> {/* Updated to Clam-Zone */}
            <li><a href="#">Sell under Clam-Zone Accelerator</a></li> {/* Updated */}
            <li><a href="#">Protect and Build Your Brand</a></li>
            <li><a href="#">Clam-Zone Global Selling</a></li> {/* Updated */}
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Fulfilment by Clam-Zone</a></li> {/* Updated */}
            <li><a href="#">Advertise Your Products</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Clam-Zone Payment Products</h3> {/* Updated */}
          <ul>
            <li><a href="#">Clam-Zone Business Card</a></li> {/* Updated */}
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">Clam-Zone Currency Converter</a></li> {/* Updated */}
          </ul>
        </div>

        <div className="footer__column">
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="#">COVID-19 and Clam-Zone</a></li> {/* Updated */}
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Returns Centre</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">Clam-Zone App Download</a></li> {/* Updated */}
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer - Logo & Legal */}
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <img
            className="footer__logo"
            src="/banner0.png" /* Assuming /banner0.png is your logo */
            alt="Clam-Zone Logo" // Added specific alt text
          />
          <div className="footer__language-currency">
              {/* Dummy language selector */}
              <select className="footer__select">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="hi">हिन्दी</option>
              </select>
              {/* Dummy currency selector */}
              <select className="footer__select">
                  <option value="USD">$ USD - U.S. Dollar</option>
                  <option value="EUR">€ EUR - Euro</option>
                  <option value="INR">₹ INR - Indian Rupee</option>
              </select>
          </div>
        </div>
        
        <div className="footer__legal">
          <ul>
            <li><a href="#">Conditions of Use</a></li>
            <li><a href="#">Privacy Notice</a></li>
            <li><a href="#">Your Ads Privacy Choices</a></li>
          </ul>
          <p>&copy; 1996-2025, Clam-Zone.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;