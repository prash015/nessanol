export default function ContentPage({ title, subtitle, children }) {
  return (
    <section className="inner-page-wrap">
      <div className="container inner-page-card">
        <p className="inner-kicker">Nissanol Lubricants</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children ? <div className="inner-extra">{children}</div> : null}
      </div>
    </section>
  );
}
