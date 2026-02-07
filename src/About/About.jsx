import { useState, useEffect, useRef } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './about.css'
import { FaArrowDownLong, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook, FaWhatsapp, FaRegLightbulb, FaLeaf, FaUsers, FaArrowRight } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import mission from '../assets/mission.jpg';
import vision from '../assets/vision.jpg';
import motive from '../assets/motive.jpg';
import inspire from '../assets/inspire.jpg';
import { useTranslation, Trans } from 'react-i18next';

export default function About() {
    const { t, i18n } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const introH3Ref = useRef(null);
    const introPRef = useRef(null);
    const gridRef = useRef(null);
    const trustRef = useRef(null);
    const teamIntroH3Ref = useRef(null);
    const teamIntroPRef = useRef(null);
    const teamGridRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === introH3Ref.current) {
                        entry.target.classList.add('slide-in-left');
                        observer.unobserve(entry.target);
                    } else if (entry.target === introPRef.current) {
                        entry.target.classList.add('slide-in-right');
                        observer.unobserve(entry.target);
                    } else if (entry.target === gridRef.current) {
                        entry.target.classList.add('slide-up');
                        observer.unobserve(entry.target);
                    } else if (entry.target === trustRef.current) {
                        entry.target.classList.add('slide-up');
                        observer.unobserve(entry.target);
                    } else if (entry.target === teamIntroH3Ref.current) {
                        entry.target.classList.add('slide-in-left');
                        observer.unobserve(entry.target);
                    } else if (entry.target === teamIntroPRef.current) {
                        entry.target.classList.add('slide-in-right');
                        observer.unobserve(entry.target);
                    } else if (entry.target === teamGridRef.current) {
                        entry.target.classList.add('slide-up');
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        if (introH3Ref.current) observer.observe(introH3Ref.current);
        if (introPRef.current) observer.observe(introPRef.current);
        if (gridRef.current) observer.observe(gridRef.current);
        if (trustRef.current) observer.observe(trustRef.current);
        if (teamIntroH3Ref.current) observer.observe(teamIntroH3Ref.current);
        if (teamIntroPRef.current) observer.observe(teamIntroPRef.current);
        if (teamGridRef.current) observer.observe(teamGridRef.current);

        return () => observer.disconnect();
    }, []);

    const journey = [
        {
            year: '2014-2017',
            title: t('about.journey.foundation.title'),
            description: t('about.journey.foundation.description')
        },
        {
            year: '2017-2020',
            title: t('about.journey.momentum.title'),
            description: t('about.journey.momentum.description')
        },
        {
            year: '2020-2023',
            title: t('about.journey.craft.title'),
            description: t('about.journey.craft.description')
        },
        {
            year: '2023-2026',
            title: t('about.journey.vision.title'),
            description: t('about.journey.vision.description')
        }
    ]

    const trustContent = [
        {
            id: 1,
            title: t('about.trust.mission.title'),
            message: t('about.trust.mission.message'),
            image: mission 
        },
        {
            id: 2,
            title: t('about.trust.vision.title'),
            message: t('about.trust.vision.message'),
            image: vision
        },
        {
            id: 3,
            title: t('about.trust.motive.title'),
            message: t('about.trust.motive.message'),
            image: motive
        },
        {
            id: 4,
            title: t('about.trust.inspiration.title'),
            message: t('about.trust.inspiration.message'),
            image: inspire
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === trustContent.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? trustContent.length - 1 : prev - 1));
    };

    const teamMembers = [
        {
            name: "Kamau Njoroge",
            position: "Lead Interior Designer",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", // Placeholder
            whatsapp: "123456789",
            facebook: "#"
        },
        {
            name: "Amani Wanjiku",
            position: "Project Manager",
            image: "https://images.unsplash.com/photo-1573496359-136d47552640?auto=format&fit=crop&q=80&w=400",
            whatsapp: "123456789",
            facebook: "#"
        },
        {
            name: "Ochieng Odhiambo",
            position: "Senior Architect",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
            whatsapp: "123456789",
            facebook: "#"
        },
        {
            name: "Zainab Ahmed",
            position: "Client Relations",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
            whatsapp: "123456789",
            facebook: "#"
        },
        {
            name: "Juma Otieno",
            position: "3D Visualizer",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
            whatsapp: "123456789",
            facebook: "#"
        },
        {
            name: "Wangari Kibet",
            position: "Procurement Officer",
            image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400",
            whatsapp: "123456789",
            facebook: "#"
        }
    ];

    return (
        <>
            <Nav />
            <section className="about-hero">
                <div className="hero-intro">
                    <h2><Trans i18nKey="about.hero.title" key={i18n.language} components={{ 1: <span className="highlight" /> }} /></h2>
                    <p>{t('about.hero.description')}</p>
                </div>
                <div>
                    <button className="btn1">{t('about.hero.cta')}</button>
                </div>
                <div className='arrow'><FaArrowDownLong /></div>
            </section>
            {/*End of Hero Section */}
            {/*Start of About Section */}
            <section className="about-section">
                <div className="about-intro">
                    <h3 ref={introH3Ref}>{t('about.intro.title')}</h3>
                    <p ref={introPRef}>{t('about.intro.description')}</p>
                </div>
                <div className="journey-grid" ref={gridRef}>
                    {journey.map((item, index) => (
                        <div className="journey-item" key={index}>
                            <div className="journey-year">{item.year}</div>
                            <div className="journey-title">{item.title}</div>
                            <div className="journey-description">{item.description}</div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Start of Trust Section */}
            <section className="trust-section" ref={trustRef} style={{ backgroundImage: `url(${trustContent[currentSlide].image})` }}> 
                <div className="trust-overlay">
                    <div className="trust-content">
                        <h3>{trustContent[currentSlide].title}</h3>
                        <p>{trustContent[currentSlide].message}</p>
                    </div>
                    <div className="trust-nav">
                        <button className="nav-btn left" onClick={prevSlide}><FaArrowLeftLong /></button>
                        <button className="nav-btn right" onClick={nextSlide}><FaArrowRightLong /></button>
                    </div>
                </div>
            </section>
            {/* End of Trust Section */}

            {/*Start of the team section */}
            <section className="team-section">
                <div className="team-intro">
                    <h3 ref={teamIntroH3Ref}>{t('about.team.title')}</h3>
                    <p ref={teamIntroPRef}>{t('about.team.description')}</p>
                </div>
                <div className="team-grid" ref={teamGridRef}>
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="team-image">
                                <img src={member.image} alt={member.name}/>
                            </div>
                            <div className="team-info">
                                <div className="team-details">
                                    <h4>{member.name}</h4>
                                    <span>{member.position}</span>
                                </div>
                                <div className="team-socials">
                                    <a href={member.facebook} target="_blank" rel="noreferrer"><FaFacebook /></a>
                                    <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>  
            {/*End of the team section */}
            {/*Start of why choose us section */}
            <section className="why-choose-us">
                <div className="why-header">
                    <span className="pill">{t('about.why_choose_us.pill')}</span>
                    <h2><Trans i18nKey="about.why_choose_us.title" key={i18n.language} components={{ 1: <span className="highlight" /> }} /></h2>
                </div>
                
                <div className="why-grid">
                    <div className="why-card card-1">
                        <div className="icon-circle"><FaRegLightbulb /></div>
                        <h3>{t('about.why_choose_us.cards.visionary.title')}</h3>
                        <p>{t('about.why_choose_us.cards.visionary.description')}</p>
                    </div>

                    <div className="why-card card-2">
                        <div className="icon-circle"><FaLeaf /></div>
                        <h3>{t('about.why_choose_us.cards.sustainable.title')}</h3>
                        <p>{t('about.why_choose_us.cards.sustainable.description')}</p>
                    </div>

                    <div className="why-card card-3 featured">
                        <div className="icon-circle"><FaUsers /></div>
                        <h3>{t('about.why_choose_us.cards.client_centric.title')}</h3>
                        <p>{t('about.why_choose_us.cards.client_centric.description')}</p>
                        <button className="why-btn">{t('about.why_choose_us.cards.client_centric.cta')} <FaArrowRight /></button>
                    </div>

                    <div className="why-card card-4 wide">
                        <div className="icon-circle"><FaTasks /></div>
                        <h3>{t('about.why_choose_us.cards.comprehensive.title')}</h3>
                        <p>{t('about.why_choose_us.cards.comprehensive.description')}</p>
                    </div>
                </div>
            </section>
            {/*End of why choose us section */}
            <Footer/>
        </>
    );
}