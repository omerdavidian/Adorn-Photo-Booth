import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-background-images">
        <img src="/photos/20170415_153038_646.webp" alt="Event Photo" className="bg-photo bg-1" />
        <img src="/photos/AdobeStock_73296077.webp" alt="Party Photo" className="bg-photo bg-2" />
      </div>
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Adorn Photo Booth</h2>
          <div className="about-grid">
            <div className="about-text">
              <p className="about-description">
                We specialize in creating magical moments and capturing authentic joy at your special events.
                Our premium photo booth experience combines professional photography with fun, interactive elements
                that get your guests laughing and creating memories they'll treasure forever.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Events Covered</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50k+</span>
                  <span className="stat-label">Photos Taken</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="about-features">
              <div className="feature-card">
                <h3>Professional Setup</h3>
                <p>High-quality cameras, lighting, and instant printing for perfect shots every time.</p>
              </div>
              <div className="feature-card">
                <h3>Creative Props</h3>
                <p>Extensive collection of fun props and customizable backdrops to match your theme.</p>
              </div>
              <div className="feature-card">
                <h3>Instant Memories</h3>
                <p>Guests receive instant prints and digital copies to share on social media.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;