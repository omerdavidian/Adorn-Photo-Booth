import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <a href="/" className="footer-logo-link">
                <img src="/Logo-full.webp" alt="Adorn Photo Booth" className="footer-logo-img" />
              </a>
            </div>
            <p className="footer-description">
              Creating unforgettable memories through fun, creative photo booth experiences for all your special events.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('pricing')}>Pricing</button></li>
              <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>Wedding Photo Booths</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Special Occasions</li>
              <li>Custom Packages</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>📞 417-448-4362</p>
              <p>✉️ info@adornphotobooth.com</p>
              <p>📍 Denver area, Summit County Area</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Adorn Photo Booth. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <a className='bi bi-facebook' href="https://www.facebook.com/AdornPhotoBooth/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"></a>
            <a className='bi bi-instagram' href="https://www.instagram.com/adornphotobooth" aria-label="Instagram" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;