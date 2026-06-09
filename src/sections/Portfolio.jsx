// Section Portfolio

import '../styles/portfolio.css';
import PortfolioArticle from '../components/PortfolioArticle';

// ExServ
import exserv from '../assets/projects/exserv.webp';
import exservMobile from '../assets/projects/exserv-mobile.webp';
import exservWP from '../assets/projects/exserv-wp.webp';

// Ludistart
import ludistartHP from '../assets/projects/ludistart_v2.webp';
import ludistartBranding from '../assets/projects/ludistart-branding.webp';
import ludistartAlbi from '../assets/projects/ludistart-expo-retro_gaming-albi.webp';
import ludistartPressPlay from '../assets/projects/pressplay24.webp';
import ludistartInsta from '../assets/projects/ludistart_insta.webp';
import ludistartExpo from '../assets/projects/ludistart_expo.webp';

// PQP
import ackermann from '../assets/projects/pqp-ackermann.webp';
import b2nElec from '../assets/projects/pqp-b2n_elec.webp';
import destinest from '../assets/projects/pqp-destinest.webp';
import jordi from '../assets/projects/pqp-jordi.webp';
import lorraineVeranda from '../assets/projects/pqp-lorraine_veranda.webp';
import metzger from '../assets/projects/pqp-metzger.webp';
import mieuxRenover from '../assets/projects/pqp-mieux_renover.webp';
import oPunaise from '../assets/projects/pqp-opunaise.webp';
import pouchelon from '../assets/projects/pqp-pouchelon.webp';
import regalon from '../assets/projects/pqp-regalon.webp';

// Mon CGPI
import monCgpiHP from '../assets/projects/moncgpi.webp';
import monCgpiLogo from '../assets/projects/moncgpi-logo.webp';
import monCgpiIdentite from '../assets/projects/moncgpi-typo-couleurs.webp';

// Enchères Immo
import encheresImmoHP from '../assets/projects/encheres-immo.webp';
import encheresImmoDashboard from '../assets/projects/encheresimmo-dashboard.webp';
import encheresImmoWidget from '../assets/projects/encheresimmo-widget.webp';

// Modèles
import azalee from '../assets/projects/azalee.webp';
import poinsettia from '../assets/projects/poinsettia.webp';
import yeuse from '../assets/projects/yeuse.webp';

// Balma Boxing Club
import boxeHP from '../assets/projects/boxe.webp';
import boxeFlyer from '../assets/projects/boxe-flyer.webp';
import boxeLogo from '../assets/projects/boxe-logo.webp';

// Cocagne
import alimenTerre from '../assets/projects/cat.webp';
import cocagneBio from '../assets/projects/cbio.webp';
import cocagneHG from '../assets/projects/cocagne.webp';
import tzcld from '../assets/projects/tzcld.webp';
import espacesVertsEco from '../assets/projects/eve.webp';

// Autres
import apc from '../assets/projects/apc.webp';
import ftg from '../assets/projects/ftg.webp';
import tgd from '../assets/projects/tgd.webp';
import boulangerie from '../assets/projects/boulangerie.webp';

function Portfolio () {
    return (
        <div id="work" className="container">
            <h2 className="section-title">Projets</h2>
            <div className="grid grid-cols-2 work">
                <PortfolioArticle
                    title="ExServ"
                    colSpan2
                    badges={["WordPress","Webdesign","Intégration"]}
                    description={
                        <>
                            <p>
                                Benoit Reinier (aka ExServ) est consultant en <span lang="en">game design</span>. À l'occasion d'un événement professionnel, il avait besoin d'un site one-page multilingue pour mettre en avant ses services et toucher une clientèle internationale.
                            </p>
                            <p>
                                Il disposait déjà d'une identité visuelle bien établie, notamment à travers sa chaîne YouTube, incluant des illustrations personnalisées et un univers graphique fort. Mon travail a consisté à m'approprier cet univers pour le transposer fidèlement sur le web, en assurant une cohérence avec ses autres supports.
                                J'ai conçu et intégré le site sous WordPress en développant un thème enfant Divi 5 sur mesure, pour un site personnalisé, plus accessible et facilement maintenable.
                            </p>                            
                        </>
                    }
                    images={[
                        { src: exserv, colSpan: 2 },
                        { src: exservMobile, colSpan: 2 },
                        { src: exservWP, colSpan: 2 },
                    ]}
                />

                <PortfolioArticle
                    title="Ludistart"
                    rowSpan2
                    colSpan2
                    badges={["Identité visuelle","WordPress","Webdesign","Design graphique","Community Management","Intégration"]}
                    description={
                        <>
                            <p>
                                Ludistart est une <strong>association</strong> qui accompagne les médiathèques, musées, salles d'exposition, dans la <strong>valorisation du jeu vidéo 
                                comme objet culturel, artistique et social</strong>. Depuis le lancement du projet en 2022, je travaille régulièrement avec eux sur la plupart de leurs 
                                supports visuels.
                            </p>
                            <p>
                                J’ai conçu leur identité visuelle complète, incluant la charte graphique, le logo, le webdesign, ainsi que l’intégration du site sous WordPress avec <strong>Divi</strong>. 
                                L’objectif principal était de structurer une plateforme claire et cohérente, capable de valoriser la diversité des actions menées 
                                (formations, expositions, animations, ressources), tout en assurant une <strong>navigation fluide et intuitive</strong>.
                            </p>
                            <p>
                                En parallèle, j’ai produit de nombreux <strong>supports de communication imprimés et numériques</strong>&nbsp;: fiches explicatives, panneaux décoratifs, infographies, etc. 
                                Je suis également en charge de la gestion du compte <strong>Instagram</strong>, de la création des visuels à leur publication, dans une logique de valorisation continue 
                                des projets menés.
                            </p>
                        </>
                    }
                    images={[
                        { src: ludistartHP, colSpan: 2 },
                        { src: ludistartBranding, colSpan: 2 },
                        { src: ludistartAlbi },
                        { src: ludistartPressPlay },
                        { src: ludistartInsta },
                        { src: ludistartExpo },
                    ]}
                    button={{
                        href: "https://ludistart.fr/",
                        label: "Voir le site",
                        title: "Voir le site de Ludistart | Nouvelle fenêtre",
                    }}
                />
                
                <PortfolioArticle
                    title="Plus Que Pro"
                    rowSpan2
                    colSpan2
                    badges={["Webdesign","Intégration","Coordination d'équipe"]}
                    description={
                        <>
                            <p>
                                <strong>Intégratrice webdesigner</strong> chez Plus Que Pro pendant 9 mois, j’ai contribué à la réalisation de <strong>plus de 200 sites</strong> pour 
                                les adhérents à la solution. Les sites étaient conçus à partir d’une structure commune afin de garantir une cohérence globale, puis intégrés 
                                via un thème maison sur le <strong>CMS interne</strong> (Laravel Nova). Chaque projet était ensuite personnalisé avec CSS et <strong>Tailwind&nbsp;CSS</strong>, 
                                en s’appuyant sur la charte graphique de l’adhérent. 
                            </p>
                            <p>
                                J’ai ainsi travaillé en étroite collaboration avec les référenceurs, les rédacteurs, les chargés de contenus visuels et les responsables du suivi, 
                                ainsi qu’avec les développeurs pour faire évoluer l’outil. L’utilisation quotidienne de <strong>ClickUp</strong> m’a permis de gérer efficacement 
                                mon temps et les différentes tâches parallèles afin de suivre la cadence soutenue. 
                            </p>
                            <p>
                                En tant que <strong>coordinatrice de l’équipe</strong> intégration, j’ai eu le rôle de référente pour assurer la liaison avec les autres pôles du département, 
                                la coordination des activités ainsi que le suivi global des projets. J'étais également en charge de la gestion des ressources et de la rédaction de la 
                                documentation. 
                            </p>
                        </>
                    }
                    images={[
                        { src: pouchelon, colSpan: 2 },
                        { src: ackermann, colSpan: 2 },
                        { src: b2nElec },
                        { src: destinest },
                        { src: jordi },
                        { src: lorraineVeranda },
                        { src: oPunaise },
                        { src: metzger },
                        { src: regalon },
                        { src: mieuxRenover },
                    ]}
                />

                <PortfolioArticle
                    title="Mon CGPI"
                    colSpan2
                    badges={["Identité visuelle","WordPress","Webdesign"]}
                    description={
                        <>
                            <p>
                                Ngoc-Minh, <strong>conseiller en gestion de patrimoine indépendant</strong>, m’a confié la création de son identité visuelle ainsi que la conception 
                                de son site one&#8209;⁠page.
                            </p>
                            <p>
                                L’objectif&nbsp;: refléter une image moderne, chaleureuse et professionnelle, fidèle à son approche humaine et accessible du métier.  
                            </p>
                            <p>
                                J’ai conçu une <strong>identité graphique cohérente</strong> et un <strong>site web clair et structuré</strong>, pensé pour instaurer un climat de 
                                confiance et mettre en valeur son accompagnement. 
                            </p>
                        </>
                    }
                    images={[
                        { src: monCgpiHP, colSpan: 2 },
                        { src: monCgpiLogo, colSpan: 2 },
                        { src: monCgpiIdentite, colSpan: 2 },
                    ]}
                />

                <PortfolioArticle
                    title="Enchères Immo"
                    colSpan2
                    badges={["UI design","Intégration"]}
                    description={
                        <>
                            <p>
                                <strong>Intégratrice web</strong> pendant près de deux ans chez Enchères&nbsp;Immo, plateforme d’enchères immobilières interactives, j'ai participé au 
                                redesign complet de la plateforme afin de la rendre plus moderne, accessible et performante.  
                            </p>
                            <p>
                                Mes missions incluaient l’intégration du site public, du tableau de bord et du widget avec HTML, CSS, <strong>Tailwind&nbsp;CSS</strong> et <strong>Surface&nbsp;UI</strong>, 
                                ainsi que le (re)design de newsletters via <strong>Brevo</strong> (anciennement Sendinblue), l’usage quotidien de <strong>GitHub</strong> pour le travail en équipe et l’intégration de vidéos YouTube avec <strong>API&nbsp;Rest</strong>.
                            </p>
                        </>
                    }
                    images={[
                        { src: encheresImmoHP, colSpan: 2 },
                        { src: encheresImmoDashboard, colSpan: 2 },
                        { src: encheresImmoWidget, colSpan: 2 },
                    ]}
                />

                <PortfolioArticle
                    title="Modèles de sites"
                    colSpan2
                    badges={["WordPress","Webdesign"]}
                    description={
                        <>
                            <p>
                                Création de modèles de sites WordPress avec un <strong>thème enfant Divi</strong>, en collaboration avec des professionnels de différents secteurs&nbsp;: 
                                architecte, institut de beauté et photographe.
                            </p>
                            <p>
                                Ces <strong>templates personnalisables</strong> sont pensés pour répondre à des besoins réels, tout en étant esthétiques, faciles à prendre en main 
                                et abordables.
                            </p>
                        </>
                    }
                    images={[
                        { src: azalee, colSpan: 2 },
                        { src: poinsettia, colSpan: 2 },
                        { src: yeuse, colSpan: 2 },
                    ]}
                />

                <PortfolioArticle
                    title="Balma Boxing Club"
                    colSpan2
                    badges={["Identité visuelle","WordPress","Webdesign"]}
                    description={
                        <>
                            <p>
                                Pour ce <strong>club de boxe</strong>, j’ai conçu l’identité visuelle, le site web, un flyer et une illustration, en m’adaptant à leur budget restreint. 
                            </p>
                            <p>
                                Résultat&nbsp;: une communication claire et dynamique qui a contribué à doubler le nombre d’inscriptions.
                            </p>
                        </>
                    }
                    images={[
                        { src: boxeHP, colSpan: 2 },
                        { src: boxeLogo, colSpan: 2 },
                        { src: boxeFlyer, colSpan: 2 },
                    ]}
                />

                <PortfolioArticle
                    title="Cocagne Haute-Garonne"
                    colSpan2
                    badges={["WordPress","Webdesign","Éco-conception"]}
                    description={
                        <>
                            <p>
                                Durant mon alternance en tant que <strong>web manager</strong> au sein du groupement associatif solidaire Gestes, j’ai créé cinq sites vitrines de 
                                Cocagne Haute&#8209;Garonne et TZCLD, en veillant à respecter la charte graphique du groupe et l’harmonie avec les sites existants. 
                            </p>
                            <p>
                                Mes missions incluaient également l’optimisation du <strong>référencement naturel</strong> (SEO), la gestion des fiches d’établissement Google, la 
                                création et l'intégration de cartes sur GoGoCarto, une veille concurrentielle et sur l’<strong>éco&#8209;⁠conception</strong>, ainsi que la formation et 
                                l’accompagnement des équipes à l’utilisation des sites. 
                            </p>
                        </>
                    }
                    images={[
                        { src: cocagneHG, colSpan: 2 },
                        { src: cocagneBio },
                        { src: espacesVertsEco },
                        { src: alimenTerre },
                        { src: tzcld },
                    ]}
                />

                <article className="col-span-full">
                    <h3>Et bien d'autres...</h3>
                    <div className="grid grid-cols-2 pt-1">
                        <img className="thumbnail" src={apc} alt="" />
                        <img className="thumbnail" src={ftg} alt="" />
                        <img className="thumbnail" src={tgd} alt="" />
                        <img className="thumbnail" src={boulangerie} alt="" />
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Portfolio