// Page Aide et accessibilité

import Breadcrumb from '../components/Breadcrumb';

function Accessibilite() {
    return (
        <div className="container hero">
            <Breadcrumb
                items={[
                    { label: "Accessibilité", path: "/accessibilite" }
                ]}
            />

            <div className="grid grid-cols-3 legals-gap">
                <h1>Aide et accessibilité</h1>
                <div className="col-span-2 text">
                    <section>
                        <h2>Qu’est-ce que l’accessibilité numérique&nbsp;?</h2>
                        <p>
                            L’accessibilité numérique est un ensemble de règles et de bonnes pratiques qui couvrent notamment les aspects fonctionnels, graphiques, techniques et éditoriaux.
                        </p>
                        <p>
                            Le suivi de ces règles et bonnes pratiques permet de s’assurer que les supports numériques (sites web, applications mobiles, documents PDF, etc.) sont <strong>accessibles aux personnes handicapées</strong>.
                        </p>
                        <p>
                            Un site accessible permet par exemple de&nbsp;:
                        </p>
                        <ul className="list">
                            <li>
                                Personnaliser son affichage via le système d’exploitation et/ou le navigateur (agrandissement ou rétrécissement des caractères, changement de la typographie, modification des couleurs, arrêt des animations, etc.).
                            </li>
                            <li>
                                Naviguer à l’aide de technologies d’assistance comme une synthèse vocale ou une plage braille.
                            </li>
                            <li>
                                Naviguer sans utiliser la souris, avec le clavier uniquement, des contacteurs ou via un écran tactile.
                            </li>
                            <li>
                                Consulter les vidéos et les contenus audio à l’aide de sous-titres et/ou de transcriptions.
                            </li>
                            <li>
                                Etc...
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Retour d’information et contact</h2>
                        <p>
                            J'ai fait de mon mieux pour rendre ce site accessible au plus grand nombre. Si toutefois vous n'arrivez pas à accéder à un contenu, contactez-moi&nbsp;!
                        </p>
                        <p>
                            Email&nbsp;: <a href="mailto:contact@laurianepace.fr" className="link" title="Envoyer un email à contact@laurianepace.fr">contact@laurianepace.fr</a>
                        </p>
                    </section>
                    <section>
                        <h2>Aide à la navigation dans le site</h2>
                        <p><strong>Lien d'accès rapide</strong></p>
                        <p>
                            Le premier lien disponible dans chaque page de ce site est «&nbsp;Aller au contenu&nbsp;». Ce lien permet d’aller directement à la zone de contenu principal sans passer par l’en-tête du site afin d’accélérer la navigation si vous naviguez au clavier.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Accessibilite