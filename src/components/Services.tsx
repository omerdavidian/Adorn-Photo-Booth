import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Wedding Photo Booth',
      description: 'Make your special day even more memorable with our elegant wedding photo booth setup.',
      features: ['Custom backdrop', 'Wedding props', 'Guest book option', 'Instant prints'],
      icon: '💒'
    },
    {
      title: 'Corporate Events',
      description: 'Professional photo booth services for corporate parties, team building, and company celebrations.',
      features: ['Branded backdrop', 'Professional setup', 'Digital sharing', 'Custom props'],
      icon: '🏢'
    },
    {
      title: 'Birthday Parties',
      description: 'Fun and colorful photo booth experience perfect for birthday celebrations of all ages.',
      features: ['Themed props', 'Colorful backdrops', 'Party favors', 'Digital gallery'],
      icon: '🎂'
    },
    {
      title: 'Special Events',
      description: 'Custom photo booth solutions for graduations, anniversaries, and other special occasions.',
      features: ['Custom themes', 'Flexible setup', 'Professional quality', 'Memory keepsakes'],
      icon: '🎉'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-subtitle">
          We offer comprehensive photo booth services tailored to make your event unforgettable
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;