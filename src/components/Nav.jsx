import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link>
                </li>
                <li>
                    <Link to="/contact">Nous contacter</Link>
                </li>
                <li>
                    <Link to="datetime">Date et Heure</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;