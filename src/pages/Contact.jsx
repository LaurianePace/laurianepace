// Page Contact

import Breadcrumb from '../components/Breadcrumb';

function Contact() {
    return (
        <div className="container hero">
            <Breadcrumb
                items={[
                    { label: "Contact", path: "/contact" }
                ]}
            />

            <h1>Travaillons ensemble</h1>
            <div className="text">
                <p>Vous souhaitez me confier votre projet web&nbsp;? Discutons-en&nbsp;!</p>
                <p>
                    Email&nbsp;: <a href="mailto:contact@laurianepace.fr" className="link" title="Envoyer un email à contact@laurianepace.fr">contact@laurianepace.fr</a>
                </p>
                <div className="btn-group">
                    <a href="https://calendly.com/laurianepace/appel-decouverte?month=2025-02" target="_blank" className="button external" title="Prendre rendez-vous avec Calendly | Nouvelle fenêtre"><span>Prendre rendez-vous</span></a>
                </div>
            </div>
        </div>
    )
}

export default Contact