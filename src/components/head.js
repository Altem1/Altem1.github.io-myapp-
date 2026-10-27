import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../css/head.css";
import AltemF from '../img/Altem.png';

const name = "Altem Site";

const enlaces = [
    { to: "/", texto: "Inicio" },
    { to: "/proyectos", texto: "Proyectos" },
    { to: "/acercade", texto: "Acerca de mí" },
    { to: "/contactame", texto: "Contáctame" }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Cierra el menú móvil al cambiar de página
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <header className="nav wrap">
            <div className="glass nav-bar">
                <Link to="/" className="brand">
                    <img src={AltemF} alt="Logo" />
                    <span>{name}</span>
                </Link>

                <button
                    className="hamburger"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menú"
                    aria-expanded={isMenuOpen}
                >
                    <span></span><span></span><span></span>
                </button>

                <nav className={`links ${isMenuOpen ? "open" : ""}`}>
                    {enlaces.map((e) => (
                        <NavLink key={e.to} to={e.to} end className="link">
                            {e.texto}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
