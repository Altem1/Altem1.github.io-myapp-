import React from "react";
import "../css/footer.css";

const Footer = () => {
    return (
        <div> 
            <div className="footer-social">
                <div className="facebook">
                    <a href="https://facebook.com/Altem.J" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i> {/* Ícono de Font Awesome */}
                    </a>
                    <p>Facebook</p>
                </div>
                <div className="instagram">
                    <a href="https://instagram.com/jos_antonio06" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> {/* Ícono de Font Awesome */}
                    </a>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
