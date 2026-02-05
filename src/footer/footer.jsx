import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaChevronUp } from "react-icons/fa6";
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import './footer.css'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-column brand-column">
                    <NavLink to="/" className="footer-logo">
                        <img src={logo} alt="Mwama Graziers" />
                        <span>Mwama Graziers</span>
                    </NavLink>
                    <p className="footer-tagline">
                        Empowering clients with visionary interiors that blend architectural soul with modern functionality.
                    </p>
                    <div className="social-media">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                    <button className="back-to-top-btn" onClick={scrollToTop}>
                        <FaChevronUp /> Back to Top
                    </button>
                </div>

                <div className="footer-links-group">
                    <div className="footer-column">
                        <h3>Site Map</h3>
                        <ul>
                            <li><NavLink to="/">Homepage</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms">Terms of Services</NavLink></li>
                            <li><NavLink to="/legal">Legal Notice</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="copyright-bar">
                <p>Copyright © {new Date().getFullYear()}, Mwama Graziers. All Rights Reserved.</p>
            </div>
        </footer>
    );
}