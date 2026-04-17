// Page Mentions légales

import Breadcrumb from '../components/Breadcrumb';

function MentionsLegales() {
    return (
        <div className="container hero">
            <Breadcrumb
                items={[
                    { label: "Mentions légales", path: "/mentions-legales" }
                ]}
            />

            <div className="grid grid-cols-3 legals-gap">
                <h1>Mentions légales</h1>
                <div className="col-span-2 text">
                    <section>
                        <h2>Développement & conception graphique</h2>
                        <p><strong>Lauriane Pace Apergis</strong> – Entrepreneur individuel</p>
                        <p>
                            6 rue des Corroyeurs, 67200 Strasbourg <br />
                            +33(0)6 71 03 85 44
                        </p>
                        <p>
                            <strong>SIRET</strong> : 909 795 361 00031 <br />
                            <strong>Code APE</strong> : 7410Z Activités spécialisées de design
                        </p>
                        <p>
                            <strong>Directeur de la publication</strong> : Lauriane Pace Apergis<br />
                            <strong>Email</strong> : <a href="mailto:contact@laurianepace.fr" className="link" title="Envoyer un email à contact@laurianepace.fr">contact@laurianepace.fr</a><br />
                        </p>
                    </section>
                    <section>
                        <h2>Hébergement</h2>
                        <p><strong>OVH</strong></p>
                        <p>
                            2 rue Kellermann – BP 80157 <br />
                            59053 Roubaix Cedex 1
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default MentionsLegales