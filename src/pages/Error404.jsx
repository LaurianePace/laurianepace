// Page Erreur 404

import { NavLink } from "react-router"

function Error404() {
    return (
        <div className="container hero">
            <h1>Erreur 404</h1>
            <div className="text">
                <p>Désolée, la page que vous cherchez n'existe pas.</p>
                <div className="btn-group">
                    <NavLink to="/" className="button"><span>Revenir à l'accueil</span></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Error404