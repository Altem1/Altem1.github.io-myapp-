import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/head.css";
import AltemF from '../img/Altem.png';

const name = "Altem Site";
const ver = "responsive-bar";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-left">
                <img src={AltemF} alt="Logo" className="logo" />
                <Link to="/" className="site-title">
                    <h4>{name}</h4>
                </Link>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`${ver} ${isMenuOpen ? "open" : ""}`}>
                <ol>
                    {isMenuOpen && (
                        <li className="menu-legend">Menu</li>
                    )}

                    <li>
                        <Link to="/" className="btn">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/proyectos" className="btn">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/acercade" className="btn">Acerca de mí</Link>
                    </li>
                    <li>
                        <Link to="/contactame" className="btn">Contactame</Link>
                    </li>
                </ol>
            </nav>
        </header>
    );
};

export default Header;