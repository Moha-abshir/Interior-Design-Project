import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaChevronUp } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import './footer.css'

export default function Footer() {
    const { t } = useTranslation();

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
                        {t('footer.tagline')}
                    </p>
                    <div className="social-media">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                    <button className="back-to-top-btn" onClick={scrollToTop}>
                        <FaChevronUp /> {t('footer.back_to_top')}
                    </button>
                </div>

                <div className="footer-links-group">
                    <div className="footer-column">
                        <h3>{t('footer.sitemap')}</h3>
                        <ul>
                            <li><NavLink to="/">{t('footer.links.home')}</NavLink></li>
                            <li><NavLink to="/about">{t('footer.links.about')}</NavLink></li>
                            <li><NavLink to="/services">{t('footer.links.services')}</NavLink></li>
                            <li><NavLink to="/portfolio">{t('footer.links.portfolio')}</NavLink></li>
                            <li><NavLink to="/contact">{t('footer.links.contact')}</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>{t('footer.legal')}</h3>
                        <ul>
                            <li><NavLink to="/privacy">{t('footer.legal_links.privacy')}</NavLink></li>
                            <li><NavLink to="/terms">{t('footer.legal_links.terms')}</NavLink></li>
                            <li><NavLink to="/legal">{t('footer.legal_links.notice')}</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="copyright-bar">
                <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            </div>
        </footer>
    );
}