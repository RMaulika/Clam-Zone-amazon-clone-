import React from 'react';
import './AdBanner.css'; // Make sure to create this CSS file

function Adbanner() { // Changed function name from Adbanner to AdBanner for consistency
  return (
    <div className="adBanner">
      <div className="adBanner__content">
        <h2>Deals for your everyday needs!</h2>
        <p>Shop top categories like electronics, home goods, fashion, and more. Limited-time offers!</p>
        <button className="adBanner__button">Shop All Deals</button>
      </div>
      <div className="adBanner__imageContainer">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Electronics/Category/Gateway/Updated/V2/XCM_Manual_1478140_5037149_IN_IN_ELECTRONICS_V2_379x304_1660639908_jpg._SY304_CB630594833_.jpg"
          alt="Ad Promotion"
          className="adBanner__image" // Added a class name to the image for potential future styling if needed
        />
      </div>
    </div>
  );
}

export default Adbanner; // Exporting as AdBanner