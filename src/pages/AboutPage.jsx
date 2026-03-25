import { FaAngleDoubleRight } from 'react-icons/fa';

const whyChoosePoints = [
  'Nissanol offers a comprehensive range of 78+ grades for automotive and industrial applications, aligned with API, SAE, JASO, and NLGI standards.',
  'Our quality control and R&D laboratory follows international testing practices including appearance, viscosity at 40°C and 100°C, total base number, wear metals, oxidation, and nitration.',
  'In-house formulations meet and exceed API CK-4+, API CI-4+, API SN, API SM, JASO MA2, and JASO MB requirements, with industry recognition including Best Quality Award 2017/2018.',
  'With a customer-first approach and focus on value-added service, we keep improving product life, machine efficiency, and sustainability for our partners.',
];

const certificateItems = [
  {
    title: 'Quality Achievement',
    image: '/assets/about/certificate-achievement.jpg',
  },
  {
    title: 'Accreditation Council',
    image: '/assets/about/accreditation-egac.jpg',
  },
  {
    title: 'ISO 9001:2015 Certified Company',
    image: '/assets/about/certificate-iso-company.jpg',
  },
];

export default function AboutPage() {
  return (
    <section className="about-page section">
      <div className="container about-page-wrap">
        <h1 className="about-main-title">About Us</h1>
        <div className="about-main-rule" />

        <div className="about-company-grid">
          <article>
            <h2>About Our Company</h2>
            <p>
              <strong>Nissanol (Napson Lubricants Private Limited)</strong> is a trusted name in lubricants and
              greases across India and international markets, with more than 24 years of industry experience.
            </p>
            <p>
              Our portfolio covers 78+ grades across automotive and industrial segments, developed to satisfy
              evolving performance needs while maintaining consistency and reliability.
            </p>
            <p>
              The philosophy behind Nissanol is partnership. We treat customers as long-term growth partners and
              continuously work toward better products, longer equipment life, and environment-friendly performance.
            </p>
          </article>

          <div className="about-company-image">
            <img src="/assets/about/facility-collage.jpg" alt="Nissanol manufacturing and R&D facilities" />
          </div>
        </div>

        <div className="about-text-block">
          <p>
            Our quality assurance process is backed by a dedicated QC and R&D setup. Tests are carried out as per
            recognized standards including API, ASTM, IS, and JASO to ensure every batch delivers dependable quality.
          </p>
          <p>
            From high-performance engine oils to hydraulic oils and specialty formulations, Nissanol continues to
            innovate in-house products that meet and exceed strict international specification requirements.
          </p>
        </div>

        <section className="about-subsection">
          <h2 className="about-sub-title">WHY CHOOSE US ?</h2>
          <div className="about-sub-rule" />
          <ul className="about-why-list">
            {whyChoosePoints.map((point) => (
              <li key={point}>
                <FaAngleDoubleRight aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-subsection about-who-we-are">
          <h2 className="about-sub-title">Who We Are?</h2>
          <div className="about-sub-rule" />
          <p>
            We are a quality-focused lubricant manufacturer serving distributors, OEM partners, workshops, and
            industrial users with a broad and dependable product range.
          </p>
          <h3>OUR VISION</h3>
          <p>
            To take Nissanol to a next-generation brand level by delivering integrated lubrication solutions for
            evolving automotive and industrial requirements.
          </p>
          <h3>OUR MISSION</h3>
          <p>
            We seek to create and innovate high-quality products with diligence and commitment, while delivering
            services with integrity, safety, and long-term value for people and stakeholders.
          </p>
          <h3>OUR FOCUS</h3>
          <p>
            Consistent product quality, advanced formulation practices, customer-centric support, and sustainable
            growth through value-added lubrication solutions.
          </p>
        </section>

        <section className="about-subsection about-certificates">
          <h2 className="about-sub-title">Approval & Accreditation Certificates</h2>
          <p className="certificate-intro">
            Nissanol is an ISO 9001:2015 certified company and follows stringent quality systems. Our certifications,
            accreditations, and industry recognitions reflect our commitment to reliable performance and technical excellence.
          </p>

          <div className="certificate-grid">
            {certificateItems.map((item) => (
              <article key={item.title} className="certificate-card">
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
