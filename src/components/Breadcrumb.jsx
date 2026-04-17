// Fil d'Arianne

import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
    return (
        <nav role="navigation" aria-label="Fil d'Ariane">
            <ul className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Accueil</Link>
                </li>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="breadcrumb-item">
                            {!isLast ? (
                                <Link to={item.path}>{item.label}</Link>
                            ) : (
                                <span aria-current="page">{item.label}</span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Breadcrumb