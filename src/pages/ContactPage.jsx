import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-page section">
      <div className="container contact-wrap">
        <h1 className="contact-main-title">Contact Us</h1>
        <div className="contact-main-rule" />

        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-map-card">
              <iframe
                title="Nissanol location map"
                src="https://maps.google.com/maps?q=20.388084,72.899544&z=12&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <h2 className="contact-left-title">CONTACT US</h2>
            <div className="contact-left-rule" />

            <div className="contact-detail-list">
              <p>
                <FaMapMarkerAlt aria-hidden="true" />
                Survey No. 2357, Vapi Ambach State Highway, Vapi - 396145, Gujarat, India
              </p>
              <p>
                <FaPhoneAlt aria-hidden="true" />
                <a href="tel:+919558026993">95580 26993</a>
              </p>
              <p>
                <FaWhatsapp aria-hidden="true" />
                <a href="https://wa.me/919537339993" target="_blank" rel="noreferrer">95373 39993</a>
              </p>
              <p>
                <MdEmail aria-hidden="true" />
                <a href="mailto:info@nissanol.in">info@nissanol.in</a>
              </p>
            </div>
          </div>

          <div className="contact-form-block">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Your name *</span>
                <input type="text" name="name" autoComplete="name" />
              </label>

              <label>
                <span>Your email *</span>
                <input type="email" name="email" autoComplete="email" />
              </label>

              <label>
                <span>Phone Number *</span>
                <input type="tel" name="phone" placeholder="+91XXXXXXXXXX" autoComplete="tel" />
              </label>

              <label>
                <span>Enquiry For</span>
                <select name="enquiryFor" defaultValue="Distributorship">
                  <option value="Distributorship">Distributorship</option>
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="General Support">General Support</option>
                </select>
              </label>

              <label>
                <span>Subject *</span>
                <input type="text" name="subject" />
              </label>

              <label>
                <span>Your message (optional)</span>
                <textarea name="message" rows="8" />
              </label>

              <button type="submit" className="contact-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
