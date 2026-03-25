import { FaChevronRight, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Global Presence', href: '/global-presence' },
  { label: 'Download Brochure', href: '/assets/Brochure.pdf', newTab: true },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top-pattern" />
      <div className="container footer-grid">
        <section className="footer-brand">
          <img src="/assets/logo.jpeg" alt="Nissanol" className="footer-logo" />
          <p className="footer-tagline">Blended as per international standard.</p>
          <div className="social-row">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://x.com" aria-label="X" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </section>

        <section className="footer-links">
          <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.newTab ? (
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <FaChevronRight aria-hidden="true" /> {link.label}
                    </a>
                  ) : (
                    <Link to={link.href}>
                      <FaChevronRight aria-hidden="true" /> {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
        </section>

        <section className="footer-contact">
          <h3>Address</h3>
          <p>
            <FaMapMarkerAlt aria-hidden="true" />
            Survey No. 2357, Vapi Ambach State Highway, Vapi - 396145, Gujarat, India
          </p>
          <p>
            <FaPhoneAlt aria-hidden="true" />
            <a href="tel:+919558026993">+91 95580 26993</a>
          </p>
          <p>
            <FaWhatsapp aria-hidden="true" />
            <a href="https://wa.me/919558026993" target="_blank" rel="noreferrer">+91 95580 26993</a>
          </p>
          <p>
            <MdEmail aria-hidden="true" />
            <a href="mailto:info@nissanol.in">info@nissanol.in</a>
          </p>
        </section>
      </div>
      <div className="footer-copyright">
        Copyright © 2026 Nissanol. Developed by Drishvi Creatix.
      </div>
    </footer>
  );
}
