// AdBanner.js
import React, { useState, useEffect } from 'react';
import './AdBanner.css';

const images = [
  { id: 1, url: '/ele.png', alt: 'Electronics Sale' },
  { id: 2, url: '/fashion.png', alt: 'Fashion Deals' },
  { id: 3, url: '/home.avif', alt: 'Home Appliances' },
  { id: 4, url: '/flight.png', alt: 'Books & Media' },
  { id: 5, url: '/grocery.png', alt: 'Groceries & Essentials' },
  { id: 6, url: '/kids.png', alt: 'Kids & Toys' },
  { id: 7, url: '/beauty.png', alt: 'Beauty Products' },
  { id: 8, url: '/sports.png', alt: 'Sports & Outdoors' },
  { id: 9, url: '/ele.png', alt: 'Travel Offers' },
];

function AdBanner() { // Changed function name from Adbanner to AdBanner for consistency
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadingImage, setLoadingImage] = useState(true);
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    setLoadingImage(true); // Reset loading state when image index changes
    // Auto-advance carousel
    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 5 seconds
    return () => clearTimeout(timer); // Clear timeout on unmount or re-render
  }, [currentImageIndex]); // Depend on currentImageIndex to re-run effect for auto-advance

  const goToPreviousAd = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextAd = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="adBanner-carousel-container">
      <section className="adBanner-carousel__section">
        <div className="adBanner-carousel__wrapper">
          <button onClick={goToPreviousAd} className="adBanner-carousel__nav-button adBanner-carousel__nav-button--left">
            &#8592; {/* Left arrow */}
          </button>

          <div className="adBanner-carousel__image-area">
            {loadingImage && (
              <div className="adBanner-carousel__spinner-overlay">
                {/* Pure CSS Spinner */}
                <div className="adBanner-carousel__spinner"></div>
              </div>
            )}
            
            {/* The image will fade in/out using CSS transitions */}
            <img
              key={currentImage.id} // Key is crucial for React to remount the image and trigger transitions
              src={currentImage.url}
              alt={currentImage.alt}
              className={`adBanner-carousel__image ${loadingImage ? 'adBanner-carousel__image--loading' : ''}`}
              onLoad={() => setLoadingImage(false)}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1200x600?text=Image+Not+Found'; // Fallback image
                setLoadingImage(false);
              }}
            />
          </div>

          <button onClick={goToNextAd} className="adBanner-carousel__nav-button adBanner-carousel__nav-button--right">
            &#8594; {/* Right arrow */}
          </button>
        </div>
        {/* Optional: Add content below the carousel like "Deals for your everyday needs!" */}
        {/*
        <div className="adBanner__content">
          <h2>Deals for your everyday needs!</h2>
          <p>Shop top categories like electronics, home goods, fashion, and more. Limited-time offers!</p>
          <button className="adBanner__button">Shop All Deals</button>
        </div>
        */}
      </section>
    </div>
  );
}

export default AdBanner;