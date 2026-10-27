import React from "react";
import "../css/footer.css";

const Footer = () => {
    return (
        <footer className="wrap">
            <div className="glass footer-social">
                <a href="https://facebook.com/Altem.J" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                </a>
                <a href="https://instagram.com/jos_antonio06" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                    <span>Instagram</span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
