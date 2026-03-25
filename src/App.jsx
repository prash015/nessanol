import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import FloatingHelpButton from './components/FloatingHelpButton';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import AboutPage from './pages/AboutPage';
import DistributorEnquiryPage from './pages/DistributorEnquiryPage';
import GlobalPresencePage from './pages/GlobalPresencePage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <SiteHeader currentPath={location.pathname} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about-us"
            element={<AboutPage />}
          />
          <Route
            path="/products"
            element={<Navigate to="/products/bike-engine-oils" replace />}
          />
          <Route path="/products/:categorySlug" element={<ProductsPage />} />
          <Route
            path="/distributor-enquiry"
            element={<DistributorEnquiryPage />}
          />
          <Route
            path="/global-presence"
            element={<GlobalPresencePage />}
          />
          <Route
            path="/contact-us"
            element={<ContactPage />}
          />
          <Route path="/download-brochure" element={<Navigate to="/assets/Brochure.pdf" replace />} />
          <Route
            path="/privacy-policy"
            element={
              <ContentPage
                title="Privacy Policy"
                subtitle="Privacy policy page shell is ready. Share your policy content and I will add it here."
              />
            }
          />
          <Route
            path="*"
            element={
              <ContentPage
                title="Page Not Found"
                subtitle="The page you requested does not exist yet. Please use the main menu to continue browsing."
              />
            }
          />
        </Routes>
      </main>
      <SiteFooter />
      <FloatingHelpButton />
    </div>
  );
}
