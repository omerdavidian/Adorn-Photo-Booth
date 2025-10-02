import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Real photo booth images from events
  const galleryImages = [
    '/photos/AdobeStock_100647292.webp',
    '/photos/20190320_200453_085__MG_6214.webp',
    '/photos/_MG_0005.webp',
    '/photos/AdobeStock_75068225.webp',
    '/photos/20170415_153038_646.webp',
    '/photos/_MG_0007.webp',
    '/photos/AdobeStock_115289842.webp',
    '/photos/20190320_214612_568__MG_6233.webp',
    '/photos/20170416_140104_801.webp',
    '/photos/AdobeStock_73296077.webp',
    '/photos/20200205_193543_712.webp',
    '/photos/_MG_9985.webp'
  ];

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Photo Gallery</h2>
        <p className="gallery-subtitle">
          Take a look at the joy and memories we've captured at previous events
        </p>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(image, index)}
            >
              <img 
                src={image} 
                alt={`Photo booth memory ${index + 1}`}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-cta">
          <p>Want to see your event featured here?</p>
          <button className="gallery-button">
            Book Your Photo Booth
          </button>
        </div>
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Gallery view" />
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={prevImage}>‹</button>
            <button className="lightbox-next" onClick={nextImage}>›</button>
            <div className="lightbox-counter">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;