import React, {useState, useEffect} from "react";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventMonth: string;
  eventDay: string;
  eventYear: string;
  eventType: string;
  guests: string;
  package: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventMonth: "",
    eventDay: "",
    eventYear: "",
    eventType: "",
    guests: "",
    package: "",
    message: "",
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if user was redirected back from Formspree with success hash
    if (window.location.hash === "#contact-success") {
      setShowSuccess(true);
      // Clear the hash from URL after showing success message
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    // Clear any existing error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    // Validate guests field
    if (name === "guests" && value !== "") {
      const guestCount = parseInt(value);
      if (guestCount < 0) {
        setErrors({
          ...errors,
          guests: "Number of guests cannot be negative",
        });
        return;
      }
    }

    // Clear any date validation errors when user changes date fields
    if ((name === "eventMonth" || name === "eventDay" || name === "eventYear") && errors.eventDate) {
      setErrors({
        ...errors,
        eventDate: "",
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Validate event date on form submission
    if (formData.eventMonth && formData.eventDay && formData.eventYear) {
      const selectedDate = new Date(parseInt(formData.eventYear), parseInt(formData.eventMonth) - 1, parseInt(formData.eventDay));
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        e.preventDefault();
        setErrors({
          ...errors,
          eventDate: "Event date cannot be in the past",
        });
        return;
      }
    }

    // If validation passes, let the form submit naturally to Formspree
    // Formspree will handle the submission and redirect to their success page
  };

  if (showSuccess) {
    return (
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="success-message">
            <h2>🎉 Thank You!</h2>
            <p>Your message has been sent successfully. We'll get back to you soon to discuss your event details.</p>
            <button onClick={() => setShowSuccess(false)} className="success-button">
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">Ready to book your photo booth? Fill out the form below and we'll get back to you with a custom quote.</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>417-448-4362</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@adornphotobooth.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Service Area</h4>
                <p>Based in Denver and Summit County CO.</p>
                <p>Serving events throughout Colorado</p>
              </div>
            </div>
          </div>

          <form className="contact-form" action="https://formspree.io/f/myznybke" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="_next" value="https://adornphotobooth.com#contact-success" />
            <input type="hidden" name="eventDate" value={formData.eventMonth && formData.eventDay && formData.eventYear ? `${formData.eventMonth}/${formData.eventDay}/${formData.eventYear}` : ""} />
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventMonth">Event Date</label>
                <div className="date-inputs">
                  <select id="eventMonth" name="eventMonth" value={formData.eventMonth} onChange={handleChange} className={errors.eventDate ? "error" : ""}>
                    <option value="">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select id="eventDay" name="eventDay" value={formData.eventDay} onChange={handleChange} className={errors.eventDate ? "error" : ""}>
                    <option value="">Day</option>
                    {Array.from({length: 31}, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select id="eventYear" name="eventYear" value={formData.eventYear} onChange={handleChange} className={errors.eventDate ? "error" : ""}>
                    <option value="">Year</option>
                    {Array.from({length: 10}, (_, i) => new Date().getFullYear() + i).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.eventDate && <div className="error-message">{errors.eventDate}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="eventType">Event Type</label>
                <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="graduation">Graduation</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="guests">Expected Number of Guests</label>
                <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} placeholder="e.g., 50" min="0" className={errors.guests ? "error" : ""} />
                {errors.guests && <div className="error-message">{errors.guests}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="package">Preferred Package</label>
                <select id="package" name="package" value={formData.package} onChange={handleChange}>
                  <option value="">Select a package</option>
                  <option value="basic">Basic Package - $800</option>
                  <option value="premium">Premium Package - $1100</option>
                  <option value="deluxe">Deluxe Package - $1400</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Details</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us more about your event, special requests, or questions..."></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
