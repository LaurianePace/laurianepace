// Section Recommandations

import { useState, useRef, useEffect } from 'react';
import '../styles/testimonials.css';
import Testimonial from '../components/Testimonial';
import fabrice from '../assets/testimonials/fabrice.webp';
import minh from '../assets/testimonials/minh.webp';
import goulven from '../assets/testimonials/goulven.webp';
import paulB from '../assets/testimonials/paul-b.webp';
import niki from '../assets/testimonials/niki.webp';
import kevin from '../assets/testimonials/kevin.webp';

function Testimonials() {
    const [expanded, setExpanded] = useState(false);
    const wrapperRef = useRef(null);
    const buttonRef = useRef(null);
    const COLLAPSED_HEIGHT = '36rem';

    const handleToggle = () => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        if (!expanded) {
            const fullHeight = wrapper.scrollHeight;
            wrapper.style.maxHeight = `${fullHeight}px`;

            const onEnd = () => {
                wrapper.style.maxHeight = 'none';
                wrapper.removeEventListener('transitionend', onEnd);
            };
            wrapper.addEventListener('transitionend', onEnd);
        } else {
            const fullHeight = wrapper.scrollHeight;
            wrapper.style.maxHeight = `${fullHeight}px`;
            wrapper.getBoundingClientRect();
            wrapper.style.maxHeight = COLLAPSED_HEIGHT;

            buttonRef.current?.focus();
        }

        setExpanded(v => !v);
    };

    return (
        <div className="container" id="testimonials">
            <h2 className="section-title">Recommandations</h2>
            <div
                ref={wrapperRef}
                className={`testimonials-wrapper${expanded ? ' expanded' : ''}`}
                style={{ maxHeight: COLLAPSED_HEIGHT }}
                aria-expanded={expanded}
            >
                <div className="testimonials">
                    <Testimonial 
                        picture={fabrice} author="Fabrice" details="Responsable de production&nbsp;| Plus&nbsp;Que&nbsp;Pro"
                        quote="J’ai eu le plaisir de manager Lauriane chez Plus que pro et la recommande sans hésitation.
                        Lauriane est une collaboratrice fiable et constante, avec un vrai sens du livrable. Elle allie rigueur d’exécution et souci du détail en maintenant un niveau de qualité élevé, y compris dans un environnement contraint avec des délais serrés.
                        Côté technique, elle maîtrise parfaitement l’intégration web avec une attention particulière portée à la qualité, à la structuration sémantique et à la maintenabilité. Elle est à l’aise sur les enjeux d’accessibilité et veille à produire des interfaces robustes et inclusives.
                        Sa double compétence en design graphique est un vrai différenciateur. Elle comprend les logiques UI/UX, sait traduire une charte graphique en interface fonctionnelle et a fait le lien efficacement entre les différents pôles du département.
                        Au-delà de ses compétences, Lauriane se distingue par son approche orientée solution. Elle a toujours anticipé les problèmes, proposé des alternatives et contribué à fluidifier les projets.
                        Lauriane est définitivement une collaboratrice solide, impliquée et précieuse dans une équipe."
                    />
                    <Testimonial 
                        picture={minh} author="Ngoc-Minh" details="Mon&nbsp;CGPI"
                        quote="Je profite de ce message pour te remercier pour ce que tu as fait pour moi en 2024. 
                        Ce fut un plaisir et tu as participé aux débuts de l'aventure Mon&nbsp;CGPI&nbsp;!"
                    />
                    <Testimonial 
                        picture={goulven} author="Goulven" details="Lead développeur&nbsp;| Enchères&nbsp;Immo"
                        quote="J'ai eu la chance d'encadrer Lauriane pendant deux ans chez Enchères Immo, où elle a contribué au redesign de notre plateforme, amélioré son accessibilité, et optimisé les pages les plus lourdes. Toujours agréable en équipe, intéréssée par les questions de design, Lauriane est proactive et à l'affût de nouveaux projets pour apprendre et se perfectionner. 
                        Je la recommande vivement pour toute équipe recherchant une intégratrice web motivée."
                    />
                    <Testimonial 
                        picture={niki} author="Niki" details="Administrateur&nbsp;| Ludistart"
                        quote="Lauriane a fait preuve d'écoute lors de l'élaboration du projet, et a proposé des réponses techniques et créatives pertinentes et efficaces. Elle a fait preuve d'initiative quand il le fallait, ce qui était très appréciable. Au plaisir de travailler à nouveau ensemble&nbsp;!"
                    />
                    <Testimonial 
                        picture={paulB} author="Paul" details="Co-fondateur & COO&nbsp;| Enchères&nbsp;Immo"
                        quote="J’ai eu le plaisir de travailler avec Lauriane Pace lors de son passage chez Enchères Immo en tant qu’intégratrice web. Elle a brillamment mené ses projets, contribuant à l’optimisation de notre plateforme avec rigueur et précision.
                        Lauriane se distingue par son souci du détail, et son professionnalisme. Toujours prête à aider, elle a été un véritable atout pour notre équipe.
                        Je la recommande sans réserve pour ses compétences et son attitude positive&nbsp;!"
                    />
                    <Testimonial 
                        author="Éric" details="Trésorier&nbsp;| USAL Cardio-Boxing"
                        quote="Lauriane a été au-delà de nos attentes&nbsp;! Elle a répondu à nos besoins, a été force de proposition, et a un sens poussé de l’esthétique. À recommander&nbsp;!"
                    />
                    <Testimonial 
                        picture={kevin} author="Kévin" details="Chanteur & guitariste&nbsp;| Feel&nbsp;The&nbsp;Gravity"
                        quote="Lauriane a su respecter ce que nous attendions pour mettre en avant notre groupe. Nous lui avons fait confiance pour la partie créative et le rendu correspond parfaitement à notre univers&nbsp;!
                        Si notre projet se développe, nous sommes certains de faire appel à elle&nbsp;!"
                    />
                </div>
            </div>

            <div className={`testimonials-footer${expanded ? ' expanded' : ''}`}>
                {!expanded && <div className="testimonials-fade" aria-hidden="true" />}
                <button
                    ref={buttonRef}
                    className="testimonials-toggle button"
                    onClick={handleToggle}
                    aria-controls="testimonials"
                    aria-expanded={expanded}
                >
                    {expanded ? 'Réduire' : 'Voir plus'}
                    <span className="sr-only">
                        {expanded ? ' les recommandations' : ' de recommandations'}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Testimonials