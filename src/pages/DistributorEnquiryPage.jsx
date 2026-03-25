import { FaFileSignature, FaPhoneAlt } from 'react-icons/fa';

export default function DistributorEnquiryPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="distributor-page section">
      <div className="container distributor-wrap">
        <h1 className="distributor-main-title">Distributor Enquiry</h1>
        <div className="distributor-main-rule" />

        <div className="distributor-intro-grid">
          <div className="distributor-intro-image">
            <img src="/assets/distributor/distributor-road-clean.jpg" alt="Nissanol distributor network" />
          </div>

          <article className="distributor-intro-copy">
            <h2>Join The Nissanol Family.</h2>
            <p>
              Nissanol is inviting distributors to become a part of its expanding network now covering
              25 Indian states and 6 union territories. We manufacture a comprehensive range of
              premium-quality lubricants for automotive and industrial applications.
            </p>
            <p>
              With a strong base of over 250 distributors, Nissanol provides continuous support through
              technical guidance, marketing assistance, and product training.
            </p>
            <p>
              To explore distributorship opportunities, submit your request on this distributor enquiry form.
            </p>
          </article>
        </div>

        <section className="distributor-form-block">
          <h2>Become a Part Of Our Family</h2>
          <p>Fill out below form and our Sales Department will reach you soon.</p>

          <form className="distributor-form" onSubmit={handleSubmit}>
            <div className="form-grid-two">
              <label>
                <span>Your name</span>
                <input type="text" name="name" autoComplete="name" />
              </label>

              <label>
                <span>Your email</span>
                <input type="email" name="email" autoComplete="email" />
              </label>

              <label>
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="+91XXXXXXXXXX" autoComplete="tel" />
              </label>

              <label>
                <span>Company Name</span>
                <input type="text" name="company" autoComplete="organization" />
              </label>

              <label>
                <span>Existing Dealer Ship</span>
                <input type="text" name="dealership" />
              </label>

              <label>
                <span>Enter Total Work Experiance</span>
                <input type="text" name="experience" />
              </label>
            </div>

            <label className="message-field">
              <span>Your message (optional)</span>
              <textarea name="message" rows="8" />
            </label>

            <button type="submit" className="distributor-submit-btn">Submit</button>
          </form>
        </section>
      </div>

      <section className="help-section distributor-help">
        <div className="container help-content">
          <h2>We are here to help you !</h2>
          <p>
            Our team is here to help with product questions, order support, and company-related information.
            Connect with Nissanol by phone, email, or through the enquiry form for quick assistance.
          </p>
          <div className="cta-row center">
            <a href="tel:+919558026993" className="btn light">
              <FaPhoneAlt aria-hidden="true" /> 95580 26993
            </a>
            <a href="/contact-us" className="btn light">
              <FaFileSignature aria-hidden="true" /> Get A Free Quote
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
