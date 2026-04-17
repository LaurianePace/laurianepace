// Page d'accueil

import Tool from '../../src/components/Tool';
import Portfolio from '../../src/sections/Portfolio';
import Testimonials from '../../src/sections/Testimonials';

function Home() {
    return (
        <>
            {/* Hero */}
            <div className="container hero">
                <h1><span className="bold">Lauriane Pace</span> | <span lang="en">Webdesigner</span> & intégratrice web</h1>
                <div className="text shifted-text">
                    <p>
                    Je conçois <strong>des sites intuitifs, accessibles et esthétiques.</strong><br />
                    Sensible aux enjeux de l’<strong>inclusion numérique</strong>, je suis formée à l’accessibilité et engagée dans la conception d’interfaces utilisables par le plus grand nombre.
                    Mon approche mêle la <strong>technique</strong>, le sens de l’<strong>ergonomie</strong> et une <strong>sensibilité visuelle</strong>, enrichie par une formation initiale en arts plastiques.
                    </p>
                    <p>Ouverte à de nouvelles opportunités, je suis prête à collaborer sur vos projets ou à intégrer votre équipe. Contactez-moi pour en discuter !</p>
                    <p className="localisation">
                    Strasbourg, France
                    </p>
                </div>
            </div>

            {/* Outils */}
            <div className="container">
                <h2 className="section-title">Ce que j'utilise</h2>
                <div className="grid grid-cols-4 tools">
                    <Tool name="RGAA 4" description="Accessibilité" logo="assets/universal-access.svg"/>
                    <Tool name="Figma" description="UI Design" logo="assets/figma.svg"/>
                    <Tool name="WordPress" description="CMS" logo="assets/wordpress.svg"/>
                    <Tool name="Divi" description="Constructeur de pages" logo="assets/divi.svg"/>
                    <Tool name="Affinity" description="Design graphique" logo="assets/affinity.svg"/>
                    <Tool name="Tailwind CSS" description="Framework" logo="assets/tailwind-css.svg"/>
                    <Tool name="Brevo" description="Newsletters" logo="assets/brevo.svg"/>
                    <Tool name="Github" description="Gestion de projet" logo="assets/github.svg"/>
                </div>
            </div>

            <Portfolio />
            <Testimonials />
        </>
    )
}

export default Home