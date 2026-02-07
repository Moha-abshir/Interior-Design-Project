import { FaPlus, FaBuilding, FaGlassMartiniAlt, FaTools, FaShower } from "react-icons/fa";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import './services.css'
import service1 from '../assets/service.jpg'
import service2 from '../assets/service2.jpg'
import pfp1 from '../assets/pfp1.jpg'
import { MdOutlineMeetingRoom, MdOutlinePlumbing } from 'react-icons/md';
import { GiOfficeChair, GiWindow } from 'react-icons/gi';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const ServiceCard = ({ icon, serviceName, description }) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-slide-up");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentCard = cardRef.current;
        if (currentCard) {
            observer.observe(currentCard);
        }

        return () => {
            if (currentCard) observer.unobserve(currentCard);
        };
    }, []);

    return (
        <div className="main-service-card" ref={cardRef}>
            <div className="icon-wrapper">
               {icon}
            </div>
            <h3>{serviceName}</h3>
            <p className={`service-desc-text ${isExpanded ? 'expanded' : ''}`}>
                {description}
            </p>
            <button className="read-more" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="plus-circle"><FaPlus /></div> {t('services_page.services.read_more')}
            </button>
        </div>
    );
};

export default function Services() {
    const { t } = useTranslation();
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const h2 = entry.target.querySelector("h2");
                        const p = entry.target.querySelector("p");
                        if (h2) h2.classList.add("animate-slide-in-left");
                        if (p) p.classList.add("animate-slide-in-right");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentHeader = headerRef.current;
        if (currentHeader) {
            observer.observe(currentHeader);
        }

        return () => {
             if (currentHeader) observer.unobserve(currentHeader);
        };
    }, []);

    const services = [
  {
    icon: <GiWindow size={40} />,
    serviceName: t('services_page.services.glass_solutions.title'),
    description: t('services_page.services.glass_solutions.description')
  },
  {
    icon: <FaGlassMartiniAlt size={40} />,
    serviceName: t('services_page.services.frameless_glass.title'),
    description: t('services_page.services.frameless_glass.description')
  },
  {
    icon: <MdOutlineMeetingRoom size={40} />,
    serviceName: t('services_page.services.office_partitions.title'),
    description: t('services_page.services.office_partitions.description')
  },
  {
    icon: <FaTools size={40} />,
    serviceName: t('services_page.services.aluminium_fabrication.title'),
    description: t('services_page.services.aluminium_fabrication.description')
  },
  {
    icon: <FaBuilding size={40} />,
    serviceName: t('services_page.services.curtain_wall.title'),
    description: t('services_page.services.curtain_wall.description')
  },
  {
    icon: <MdOutlinePlumbing size={40} />,
    serviceName: t('services_page.services.pvc_plumbing.title'),
    description: t('services_page.services.pvc_plumbing.description')
  },
  {
    icon: <FaShower size={40} />,
    serviceName: t('services_page.services.shower_cubicle.title'),
    description: t('services_page.services.shower_cubicle.description')
  },
  {
    icon: <BsGrid3X3GapFill size={40} />,
    serviceName: t('services_page.services.alucol_cladding.title'),
    description: t('services_page.services.alucol_cladding.description')
  },
  {
    icon: <FaBuilding size={40} />,
    serviceName: t('services_page.services.commercial_systems.title'),
    description: t('services_page.services.commercial_systems.description')
  },
  {
    icon: <FaTools size={40} />,
    serviceName: t('services_page.services.custom_fabrication.title'),
    description: t('services_page.services.custom_fabrication.description')
  },
  {
    icon: <FaBuilding size={40} />,
    serviceName: t('services_page.services.building_envelope.title'),
    description: t('services_page.services.building_envelope.description')
  },
  {
    icon: <GiWindow size={40} />,
    serviceName: t('services_page.services.structural_glazing.title'),
    description: t('services_page.services.structural_glazing.description')
  }
];

    return (
        <>
            <Nav />
            <section className="services-hero">
                <div className="services-top">
                    <div className="services-title">
                        <span className="breadcrumb">{t('services_page.hero.breadcrumb')}</span>
                        <h1>
                            <Trans i18nKey="services_page.hero.title" components={{ 1: <span className="highlight" /> }} />
                        </h1>
                    </div>
                    <div className="services-desc">
                        <p>{t('services_page.hero.description')}</p>
                        <button className="get-started-btn">{t('services_page.hero.cta')}</button>
                    </div>
                </div>

                <div className="services-grid">
                    <div className="service-card image-card">
                        <img src={service1} alt="Interior Design" />
                    </div>
                    
                    <div className="service-card stat-card">
                        <h3 dangerouslySetInnerHTML={{ __html: t('services_page.hero.satisfied_customers') }}></h3>
                        <h2>100+</h2>
                        <div className="profile-pile">
                            <img src={pfp1} alt="Client" />
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Client" />
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Client" />
                            <div className="add-button">
                                <FaPlus />
                            </div>
                        </div>
                    </div>

                    <div className="service-card image-card">
                        <img src={service2} alt="Interior Design" />
                    </div>
                </div>
            </section>
            {/*End of hero section */}
            {/*Start of services section */}
            <section className="services">
                <div className="services-container">
                    <div className="services-header" ref={headerRef}>
                        <h2>
                            <Trans i18nKey="services_page.header.title" components={{ 1: <span className="highlight" /> }} />
                        </h2>
                        <p>{t('services_page.header.description')}</p>
                    </div>
                    <div className="main-services-grid">
                        {services.map((service, index) => (
                            <ServiceCard 
                                key={index}
                                icon={service.icon}
                                serviceName={service.serviceName}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/*End of services section */}
            {/*Start of conclusion section */}
            <section className="conclusion">
                <div className="conclusion-container">
                    <span className="conclusion-label">{t('services_page.conclusion.label')}</span>
                    <h2>{t('services_page.conclusion.title')} <span className="arrow-icon">→</span></h2>
                    <p>{t('services_page.conclusion.description')}</p>
                    <button className="consultation-btn">{t('services_page.conclusion.cta')}</button>
                </div>
            </section>
            {/*End of conclusion section */}
            {/*Start of Footer section */}
            <Footer />
            {/*End of Footer section */}
        </>
    );
}