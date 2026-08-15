function Icon({ type }) {
  const paths = {
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    design: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 15l3-3 2 2 3-4" /></>,
    app: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 7h6M9 11h6M10 17h4" /></>,
    business: <><path d="M4 20V8l8-4 8 4v12" /><path d="M8 20v-6h8v6M10 10h.01M14 10h.01" /></>,
    landing: <><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h5M8 16h3" /></>,
    seo: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></>,
    support: <><path d="M4 13a8 8 0 0 1 16 0v3a2 2 0 0 1-2 2h-2v-6h4" /><path d="M4 14H2v2a2 2 0 0 0 2 2h2v-6H4" /></>
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{paths[type] || paths.code}</svg>;
}

export default function ServiceCard({ number, title, text, icon }) {
  return (
    <article className="service-card">
      <div className="card-top">
        <span className="card-number">{number}</span>
        <span className="service-icon"><Icon type={icon} /></span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="card-arrow">↗</span>
    </article>
  );
}