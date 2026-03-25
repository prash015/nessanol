import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { productCategories } from '../data/productCatalog';

const productMenuItems = productCategories;

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Products', path: '/products' },
  { label: 'Distributor Enquiry', path: '/distributor-enquiry' },
  { label: 'Global Presence', path: '/global-presence' },
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Download Brochure', path: '/assets/Brochure.pdf', newTab: true },
];

function isActive(pathname, path) {
  if (path.startsWith('/assets/')) {
    return false;
  }
  if (path === '/') {
    return pathname === '/';
  }
  return pathname.startsWith(path);
}

export default function SiteHeader({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const isMobileViewport = () =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches;

  const closeMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  const handleProductsClick = (event) => {
    if (isMobileViewport()) {
      event.preventDefault();
      setProductsOpen((prev) => !prev);
      return;
    }
    closeMenus();
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand-link" aria-label="Nissanol Home">
          <img src="/assets/logo.jpeg" alt="Nissanol" className="brand-logo" />
        </a>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setProductsOpen(false);
          }}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => {
            if (item.path === '/products') {
              return (
                <div
                  key={item.path}
                  className={`nav-item has-dropdown ${productsOpen ? 'open' : ''}`}
                  onMouseEnter={() => {
                    if (!isMobileViewport()) {
                      setProductsOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
  if (!isMobileViewport()) {
    setTimeout(() => {
      setProductsOpen(false);
    }, 300); // 🔥 adjust delay here (300–500 best)
  }
}}
                >
                  <a
                    href={item.path}
                    className={`nav-link ${isActive(currentPath, item.path) ? 'active' : ''}`}
                    onClick={handleProductsClick}
                    aria-haspopup="menu"
                    aria-expanded={productsOpen}
                  >
                    {item.label}
                  </a>
                  <div className="products-dropdown" role="menu" aria-label="Product categories">
                    {productMenuItems.map((category) => (
                      <a
                        key={category.slug}
                        href={`/products/${category.slug}`}
                        className="products-dropdown-link"
                        role="menuitem"
                        onClick={closeMenus}
                      >
                        {category.title}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={item.path} className="nav-item">
                <a
                  href={item.path}
                  className={`nav-link ${isActive(currentPath, item.path) ? 'active' : ''}`}
                  target={item.newTab ? '_blank' : undefined}
                  rel={item.newTab ? 'noreferrer' : undefined}
                  onClick={closeMenus}
                >
                  {item.label}
                </a>
              </div>
            );
          })}
        </nav>

        <div className="header-actions">
          <a href="tel:+919558026993" className="pill-btn">
            <FaPhoneAlt aria-hidden="true" /> +91 95580 26993
          </a>
          <a href="/contact-us" className="pill-btn ghost">
            Get A Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
