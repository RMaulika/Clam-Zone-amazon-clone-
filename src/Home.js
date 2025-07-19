import React from 'react';
import "./Home.css";
import Product from './Product';
import Adbanner from './Adbanner'; // RE-ADD: Import Adbanner here

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        {/* RE-ADD: Place Adbanner here, specifically for the Home page */}
        <Adbanner /> 
        
        {/* Your existing product rows */}
        <div className="home__row">
          <Product id="12321341" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={11.89} image="/banner2.jpg" rating={5}/>
          <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} rating={4} image="/banner3.jpg"/>
        </div>

        <div className="home__row">
          <Product id="4903850" title="Fastrack Men Dual Time Quartz Analog Black Dial Silicone Strap Watch for Guys" price={79.09} rating={3} image="/banner4.webp"/>
          <Product id="23445930" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} rating={5} image="/banner5.jpg"/>
          <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (6th Generation)" price={898.99} rating={4} image="/banner6.jpg"/>
        </div>

        <div className="home__row">
          <Product id="90829332" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1097.89} rating={4} image="/banner7.jpg"/> 
        </div>
      </div>
    </div>
  );
}

export default Home;