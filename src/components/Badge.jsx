// Badges utilisés dans PortfolioArticle

const BADGES = {
  "Identité visuelle": null,
  "WordPress": null,
  "Webdesign": "en",
  "Design graphique": null,
  "Community Management": "en",
  "Intégration": null,
  "Coordination d'équipe": null,
  "UI design": "en",
  "Éco-conception": null,
};

function Badge({ label }) {
  const lang = BADGES[label];
  return (
    <span className="badge" {...(lang ? { lang } : {})}>
      {label}
    </span>
  );
}

export default Badge