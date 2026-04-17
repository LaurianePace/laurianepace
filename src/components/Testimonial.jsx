// Avis client pour la section Recommandations

import defaultPicture from '../assets/testimonials/user-circle-solid.svg';

function Testimonial ({ picture = defaultPicture, author, details, quote }) {
    return (
        <figure>
            <figcaption>
                <img src={picture || defaultPicture} alt="" onError={(e) => (e.target.src = defaultPicture)} />
                <div className="author">
                    <p>{author}</p>
                    <p className="text-xs">{details}</p>
                </div>
            </figcaption>
            <blockquote>
                <p className="quote">{quote}</p>
            </blockquote>
        </figure>
    );
}

export default Testimonial