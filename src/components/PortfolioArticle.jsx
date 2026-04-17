// Articles de la section Portfolio

import Badge from '../components/Badge';

function PortfolioArticle({ title, badges, description, images, button, rowSpan2, colSpan2 }) {
  return (
    <article className="col-span-full grid grid-cols-4">
        <div className={`${colSpan2 ? "col-span-2" : ""} project-desc ${rowSpan2 ? "row-span-2" : ""}`}>
            <div>
                <h3>{title}</h3>
                <div className="meta">
                    {badges.map((label) => (
                        <Badge key={label} label={label} />
                    ))}
                </div>
                <div className="text">
                    {description}
                </div>
            </div>
            {button && (
                <div className="btn-group self-end">
                    <a href={button.href} target="_blank" className="button external" title={button.title}>
                    <span>{button.label}</span>
                    </a>
                </div>
            )}
        </div>
        {images.map(({ src, colSpan }, i) => (
            <img
                key={i}
                className={`thumbnail${colSpan ? ` col-span-${colSpan}` : ""}`}
                src={src}
                alt=""
            />
        ))}
    </article>
  );
}

export default PortfolioArticle