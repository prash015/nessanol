import { Navigate, useParams } from 'react-router-dom';
import { FaFileSignature, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { productCategories, productsByCategory } from '../data/productCatalog';

const heroImages = {
  'bike-engine-oils': '/assets/categories/bike-engine-oils.jpg',
  'fork-oil': '/assets/categories/fork-oil.jpg',
  'brake-clutch-fluid': '/assets/categories/brake-clutch-fluid.jpg',
  'car-engine-oils': '/assets/categories/car-engine-oils.jpg',
  coolants: '/assets/categories/coolants.jpg',
  'truck-engine-oils': '/assets/categories/truck-engine-oils.jpg',
  'tractor-engine-oils': '/assets/categories/tractor-engine-oils.jpg',
  'gear-oils': '/assets/categories/gear-oils.jpg',
  'aerosols-car-care': '/assets/categories/bike-care.jpg',
  'cng-engine-oil': '/assets/categories/cng-oil.jpg',
  'industrial-lubricants': '/assets/categories/industrial-oils.jpg',
  grease: '/assets/categories/grease.jpg',
};

const categoryBySlug = Object.fromEntries(
  productCategories.map((category) => [category.slug, category]),
);

export default function ProductsPage() {
  const { categorySlug = '' } = useParams();
  const currentCategory = categoryBySlug[categorySlug];

  if (!currentCategory) {
    return <Navigate to="/products/bike-engine-oils" replace />;
  }

  const items = productsByCategory[categorySlug] || [];
  const heroImage = heroImages[categorySlug] || '/assets/categories/truck-engine-oils.jpg';

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="products-page">
        <header className="products-hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="products-hero-shade" />
          <div className="container products-hero-inner">
            <div className="products-hero-chip">{currentCategory.banner}</div>
          </div>
        </header>

        <div className="container products-breadcrumb">
          <a href="/">Home</a> / <span>{currentCategory.title}</span>
        </div>

        <div className="container products-layout">
          <aside className="products-sidebar">
            <h2>Our Categories</h2>
            <ul>
              {productCategories.map((category) => (
                <li key={category.slug} className={category.slug === categorySlug ? 'active' : ''}>
                  <a href={`/products/${category.slug}`}>{category.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          <section className="products-content">
            <h1>{currentCategory.title}</h1>
            <div className="products-card-grid">
              {items.map((item) => (
                <article key={item.image} className="products-item-card">
                  <div className="products-item-image-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(event) => {
                        if (event.currentTarget.dataset.fallbackApplied === '1') {
                          return;
                        }
                        event.currentTarget.dataset.fallbackApplied = '1';
                        event.currentTarget.src = heroImage;
                      }}
                    />
                  </div>
                  <h3>{item.name}</h3>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="help-section products-help-section">
        <div className="container help-content">
          <h2>We are here to help you !</h2>
          <p>
            Our team is here to help with product questions, order support, and company-related information.
            Connect with Nissanol by phone, email, or through the contact form below for quick assistance.
          </p>
          <div className="cta-row center">
            <a href="tel:+919558026993" className="btn light">
              <FaPhoneAlt aria-hidden="true" /> 95580 26993
            </a>
            <a href="/contact-us" className="btn light">
              <FaFileSignature aria-hidden="true" /> Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="products-contact-section">
        <div className="container contact-grid">
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
      </section>
    </>
  );
}
