import { FaMapMarkerAlt } from 'react-icons/fa';

export default function GlobalPresencePage() {
  return (
    <section className="global-page section">
      <div className="container global-wrap">
        <h1 className="global-main-title">Nissanol Distribution Network All Over The World</h1>
        <p className="global-main-copy">
          Globally trusted, Nissanol delivers quality lubricants across continents. With a strong
          international footprint, Nissanol partners with clients in over 28 countries.
        </p>

        <div className="global-india-grid">
          <article className="global-india-card">
            <div className="global-chip blue">Market Served National</div>
            <p>
              <strong>Nissanol</strong> is proudly marketed across <strong>25 states &amp; 6 union territory</strong> in India
              through a strong network of over <strong>250 distributors</strong>, and extends its reach to more than
              <strong> 28 countries </strong>worldwide.
            </p>
            <p>
              Our growing presence reflects our commitment to quality, reliability, and global
              customer trust.
            </p>
            <div className="global-chip green">Already Distributor Partner Challan</div>
            <div className="global-address-rule" />
            <p className="global-address">
              <FaMapMarkerAlt aria-hidden="true" />
              Survey No. 2357, Ambach State Highway, Vapi, Gujarat, India.
            </p>
          </article>

          <div className="global-india-map-wrap">
            <img src="/assets/global/india-map-only.jpg" alt="Nissanol distribution network across India" />
          </div>
        </div>

        <div className="global-world-block">
          <h2>Nissanol Distribution Network All Over The World</h2>
          <div className="global-world-map-wrap">
            <img src="/assets/home/map_section_professional.jpg" alt="Nissanol overseas business network" />
          </div>
          <p>
            Globally trusted, Nissanol delivers quality chemicals across continents. With a strong
            international footprint, Nissanol partners with clients in over 28 countries.
          </p>
        </div>
      </div>
    </section>
  );
}
