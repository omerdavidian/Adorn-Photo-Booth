import React from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic Package',
      price: '$800',
      duration: '2 hours',
      features: [
        'Professional photo booth setup',
        'Instant photo prints',
        'Basic prop collection',
        'Digital photo gallery',
        'Setup and breakdown'
      ],
      popular: false
    },
    {
      name: 'Premium Package',
      price: '$1100',
      duration: '4 hours',
      features: [
        'Everything in Basic Package',
        'Extended prop collection',
        'Custom backdrop options',
        'Photo booth attendant',
        'Social media sharing',
        'Custom photo templates'
      ],
      popular: true
    },
    {
      name: 'Deluxe Package',
      price: '$1400',
      duration: '6 hours',
      features: [
        'Everything in Premium Package',
        'Unlimited photos',
        'Custom branded prints',
        'Magnetic Photo Prints',
        'Premium backdrop selection',
        'Green screen technology option'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="pricing-subtitle">
          Choose the perfect package for your event. All packages include professional setup and support.
        </p>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="duration">/ {plan.duration}</span>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <button
                className="plan-button"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = 80;
                    const elementPosition = element.offsetTop - headerHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Book This Package
              </button>
            </div>
          ))}
        </div>
        
        <div className="pricing-note">
          <p>* Travel fees may apply for locations outside our service area. Contact us for custom packages and pricing.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;