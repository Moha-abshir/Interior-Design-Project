import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import ReactCountryFlag from "react-country-flag"
import logo from '../assets/logo.png'
import './Nav.css'

export default function Nav() {
   const { t, i18n } = useTranslation();
   const [showNav, setShowNav] = useState(true);
   const lastScrollY = useRef(0);

   useEffect(() => {
      const controlNavbar = () => {
         if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            
            // Hide if scrolling down and past 100px
            // Show if scrolling up
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
               setShowNav(false);
            } else {
               setShowNav(true);
            }

            lastScrollY.current = currentScrollY;
         }
      };

      window.addEventListener('scroll', controlNavbar);

      return () => {
         window.removeEventListener('scroll', controlNavbar);
      };
   }, []);

   const isSwahili = i18n.language.startsWith('sw');

   const toggleLanguage = () => {
      // Check if language starts with 'sw' to handle 'sw-KE' etc.
      // const isSwahili = i18n.language.startsWith('sw'); // Already calculated above
      const newLang = isSwahili ? 'en' : 'sw';
      i18n.changeLanguage(newLang);
   };

   return (
      <nav className={!showNav ? 'nav-hidden' : ''}>
         <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
            <p>Mwama Graziers</p>
         </NavLink>
         <ul>
               <li><NavLink to="/">{t('nav.home')}</NavLink></li>   
               <li><NavLink to="/about">{t('nav.about')}</NavLink></li>
               <li><NavLink to="/services">{t('nav.services')}</NavLink></li>
               <li><NavLink to="/portfolio">{t('nav.portfolio')}</NavLink></li>
         </ul>
         
         <div className={`lang-toggle ${isSwahili ? 'sw-active' : ''}`} onClick={toggleLanguage}>
             <div className="toggle-text-en">English</div>
             <div className="toggle-text-sw">Kiswahili</div>
             <div className="toggle-thumb">
                <ReactCountryFlag 
                    countryCode={isSwahili ? 'KE' : 'US'} 
                    svg 
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
             </div>
         </div>

         <div className="contact">
               <button>{t('nav.contact')}</button>
         </div>
      </nav>
   )
}

