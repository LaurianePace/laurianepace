// Outil pour la section "Ce que j'utilise"

function Tool ({ name, description, logo}) {
    return (
        <div className="tool">
            <div className="tool-icon">
                <img src={logo} alt="" className="icon" />
            </div>
            <div className="tool-name">
                <p>{name}</p>
                <p className="text-xs">{description}</p>
            </div>
        </div>
    );
}

export default Tool