import { FaDownload, FaPhoneAlt } from 'react-icons/fa';
import { productCategories, oemPartners, testimonials, globalStats } from '../data/homeData';

function initials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function HomePage() {
  return (
    <>
      <section className="hero-video reveal">
        <div className="hero-video-media" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="hero-tag">Nissanol Corporate Film</p>
          <h1>Delivering High-Performance Lubricants with Trusted Service</h1>
          <p>
            Engineered for automotive and industrial reliability, Nissanol combines quality blending,
            nationwide distribution, and responsive support.
          </p>
        </div>
      </section>

      <section className="section about-section reveal delay-1">
        <div className="container split-two">
          <article>
            <h2>Welcome to Nissanol - A Brand Built for Performance</h2>
            <p>
              Established by lubrication experts with deep industry roots, <strong>Nissanol</strong> is focused on
              reliability, innovation, and consistent product quality for both automotive and industrial use.
            </p>
            <p>
              With a fully automated production process and strict quality control, we manufacture engine oils,
              greases, brake fluids, coolants, and industrial lubricants that perform in demanding environments.
            </p>
            <p>
              <strong>Nissanol</strong> is trusted by distributors, dealers, and OEM partners for durable
              products and dependable service support.
            </p>
            <div className="cta-row">
              <a href="/about-us" className="btn primary">Read More</a>
              <a href="/contact-us" className="btn secondary">Get A Free Quote</a>
            </div>
          </article>

          <div className="about-visual-wrap">
            <div className="about-ring" />
            <img src="/assets/categories/car-engine-oils.jpg" alt="Nissanol car engine oils" className="about-product" />
            <img src="/assets/logo.jpeg" alt="Nissanol badge" className="about-logo" />
          </div>
        </div>
      </section>

      <section className="section sales-section reveal delay-2">
        <div className="container split-two sales-layout">
          <div className="brochure-card">
            <img src="/assets/home/brochure-cover.jpg" alt="Nissanol brochure cover" />
            <a href="/assets/Brochure.pdf" target="_blank" rel="noreferrer" className="brochure-download">
              <FaDownload aria-hidden="true" /> Download Brochure
            </a>
          </div>

          <article>
            <h2>40+ Sales and Service Experts - Nissanol Means Performance with Support</h2>
            <p className="subhead">Your reliable partner in lubricants and technical expertise.</p>
            <p>
              Our sales and service team helps clients select the right lubricant grade, optimize machinery
              efficiency, and reduce downtime through practical product recommendations.
            </p>
            <p>
              From bike oils to industrial lubrication programs, Nissanol provides on-site support, quick response,
              and sustained value for distributors and end users.
            </p>
            <p>
              <strong>Choose Nissanol - Where Quality Meets Commitment.</strong>
            </p>
          </article>
        </div>
      </section>

      <section className="section products-section reveal delay-3">
        <div className="container">
          <h2 className="section-heading">Product Categories</h2>
          <div className="products-grid">
            {productCategories.map((category) => (
              <a href={`/products/${category.slug}`} key={category.title} className="product-card">
                <div className="product-image-wrap">
                  <img src={category.image} alt={category.title} />
                </div>
                <div className="product-label">{category.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section oem-section reveal delay-4">
        <div className="container">
          <h2 className="section-heading">Delivering Excellence to 14+ Top OEMs with Industry-Leading Lubricants</h2>
          <p className="section-copy">
            We are proud to be the trusted lubricant partner for leading OEMs across India through quality,
            innovation, and consistent service.
          </p>
          <div className="oem-row" role="list" aria-label="OEM partners">
            {oemPartners.map((partner) => (
              <div key={partner} className="oem-logo-box" role="listitem">
                {partner}
              </div>
            ))}
          </div>
          <div className="dots" aria-hidden="true">
            <span className="active" />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="section help-section reveal">
        <div className="container help-content">
          <h2>We are here to help you !</h2>
          <p>
            Our team is here for product questions, order support, and company information. Connect with Nissanol by
            phone, email, or contact form for fast and reliable assistance.
          </p>
          <div className="cta-row center">
            <a href="tel:+919558026993" className="btn light">
              <FaPhoneAlt aria-hidden="true" /> 95580 26993
            </a>
            <a href="/contact-us" className="btn light">Contact Us</a>
          </div>
        </div>
      </section>

      <section className="section world-section reveal delay-1">
        <div className="container">
          <h2 className="section-heading">We Spread Around The World</h2>
          <p className="section-copy">
            Nissanol is marketed across 25 states and 6 union territories in India through over 250 distributors,
            with exports to multiple countries worldwide.
          </p>
          <h3 className="world-subheading">Nissanol Distribution Network All Over The World</h3>
          <img src="/assets/home/map_section_professional.jpg" alt="Nissanol world distribution map" className="world-map" />
          <div className="stats-grid">
            {globalStats.map((item) => (
              <div key={item.label} className="stat-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section reveal delay-2">
        <div className="container">
          <h2 className="section-heading">Testimonials</h2>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <p>{item.message}</p>
                <div className="testimonial-author">
                  <div className="avatar">{initials(item.name)}</div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
