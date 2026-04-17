// En-tête avec menu burger sur mobile et navigation principale

import { useState, useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/logo-header.svg';
import cv from '../assets/lauriane_pace_apergis-cv.pdf';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    // Remet le focus sur le bouton burger
    const buttonRef = useRef(null);

    // Ferme le menu quand on clique sur un lien
    const closeMenu = () => setIsOpen(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        // Ferme le menu au clic en dehors du header
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Ferme le menu avec Echap
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <header role="banner">
            <NavLink to="/" rel="home">
                <span className="sr-only">Lauriane Pace | Accueil</span>
                <img className="logo" src={logo} alt="" />
            </NavLink>

            <nav ref={navRef} role="navigation" aria-label="Menu principal" className={`navbar ${isOpen ? "open" : ""}`} id="navbar">

                {/* Mobile menu button */}
                <button className="navbar-toggler" aria-expanded={isOpen} aria-controls="tm-navbar" onClick={toggleMenu} ref={buttonRef}>

                    {/* Icon open */}
                    {!isOpen && (
                        <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            {/* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                            <path fill="#ffffff" d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z"/>
                        </svg>
                    )}

                    {/* Icon close */}
                    {isOpen && (
                        <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            {/* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                            <path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    )}

                    <span className="sr-only">Menu</span>
                </button>

                {/* Menu */}
                <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/#work" onClick={closeMenu} className="nav-link"><span>Projets</span></a>
                        </li>
                        <li className="nav-item">
                            <a href={cv} onClick={closeMenu} title="Télécharger mon CV | Nouvelle fenêtre" target="_blank" className="nav-link external"><span>Mon CV</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="/#testimonials" onClick={closeMenu} className="nav-link"><span>Recommandations</span></a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" onClick={closeMenu} className="button nav-link"><span>Me contacter</span></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header