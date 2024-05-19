import React from "react";
import { Link } from "react-router-dom";
import "../css/style.scss";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src="https://img.freepik.com/photos-premium/logo_780593-1478.jpg?w=740" alt="Logo" />
                    <p>blogo</p>
                </div>
                <div className="links">
                    <Link to="#">Retour à React.js</Link>
                    <Link to="#">À propos</Link>
                    <Link to="#">Contact</Link>
                    {/* Ajoutez d'autres liens ici */}
                </div>
                <div className="additional-info">
                    <p>Contactez-nous</p>
                    <p>Politique de confidentialité</p>
                    {/* Ajoutez d'autres informations ici */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
