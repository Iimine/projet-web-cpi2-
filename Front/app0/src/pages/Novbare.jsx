import React from "react";
import { Link } from "react-router-dom";
import "../css/style.scss";

function Novbare() {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://img.freepik.com/photos-premium/logo_780593-1478.jpg?w=740" alt="logo" />
            </div>
            <div className="links">
                <Link to="#">Accueil</Link>
                <Link to="#">Art</Link>
                <Link to="#">Technologie</Link>
                <Link to="#">Science</Link>
                <Link to="#">Cinéma</Link>
                <Link to="#">Imen</Link>
                <Link to="#">Logout</Link>
                <Link to="#">Aide</Link>
            </div>
            <div className="extras">
                <ul>
                    <li>Liens sociaux</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Novbare;
