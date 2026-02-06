import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomePage.css'
import bedroom from '../assets/categories/Three-bedroom.jpg'
import office from '../assets/categories/office-design.jpg'
import hotel from '../assets/categories/hotel.jpg'
import clinics from '../assets/categories/clinics.jpg'
import restaurant from '../assets/categories/restaurant.jpg'
import retailDesign from '../assets/categories/retail-design.jpg'
import school from '../assets/categories/school.jpg';
import p1 from '../assets/Portfolio/p1.jpg'
import p2 from '../assets/Portfolio/p2.jpg'
import p3 from '../assets/Portfolio/p3.jpg'
import p4 from '../assets/Portfolio/p4.jpg'
import profile from '../assets/pfp1.jpg'
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowRightLong, FaQuoteLeft, FaChevronDown } from "react-icons/fa6";
import Nav   from '../Nav/Nav'
import Footer from '../footer/footer'

const Counter = ({ target, duration = 2000, start }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTimestamp = null;
        const match = target.toString().match(/^(\d+)(.*)$/);
        const end = match ? parseInt(match[1], 10) : 0;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [target, duration, start]);

    const match = target.toString().match(/^(\d+)(.*)$/);
    const suffix = match ? match[2] : '';

    return <span>{count}{suffix}</span>;
};

export default function HomePage() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [isArchieveVisible, setIsArchieveVisible] = useState(false);
    const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
    const categoryRef = useRef(null);
    const archieveRef = useRef(null);
    const portfolioRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === categoryRef.current) {
                            setIsVisible(true);
                        } else if (entry.target === archieveRef.current) {
                            setIsArchieveVisible(true);
                        } else if (entry.target === portfolioRef.current) {
                            setIsPortfolioVisible(true);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentCategoryRef = categoryRef.current;
        const currentArchieveRef = archieveRef.current;
        const currentPortfolioRef = portfolioRef.current;

        if (currentCategoryRef) observer.observe(currentCategoryRef);
        if (currentArchieveRef) observer.observe(currentArchieveRef);
        if (currentPortfolioRef) observer.observe(currentPortfolioRef);

        return () => {
            if (currentCategoryRef) observer.unobserve(currentCategoryRef);
            if (currentArchieveRef) observer.unobserve(currentArchieveRef);
            if (currentPortfolioRef) observer.unobserve(currentPortfolioRef);
        };
    }, []);
    const categories = [
        {
            id: 1,
            title: t('categories.residential'),
            image: bedroom,
        },
        {
            id: 2,
            title: t('categories.commercial'),
            image: office
        },
        {
            id: 3,
            title: t('categories.hotel'),
            image: hotel,
        },
        {
            id: 4,
            title: t('categories.clinics'),
            image: clinics,
        },
        {
            id: 5,
            title: t('categories.restaurant'),
            image: restaurant,
        },
        {
            id: 6,
            title: t('categories.retail'),
            image: retailDesign,
        },
        {
            id: 7,
            title: t('categories.school'),
            image: school,
        },
    ];
    const archieve = [
        {
            id: 1,
            numbers: '80+',
            name: t('achievements.completed'),
            description: t('achievements.completed_desc')
        },
        {
            id: 2,
            numbers: '15+',
            name: t('achievements.experience'),
            description: t('achievements.experience_desc')
        },
        {
            id: 3,
            numbers: '100+',
            name: t('achievements.clients'),
            description: t('achievements.clients_desc')
        },
        {
            id: 4,
            numbers: '99%',
            name: t('achievements.success'),
            description: t('achievements.success_desc')
        }
    ]
    const methodology = [
        {
            id: 1,
            step: '01',
            title: t('methodology.steps.consultation'),
            description: t('methodology.steps.consultation_desc')
        },
        {
            id: 2,
            step: '02',
            title: t('methodology.steps.concept'),
            description: t('methodology.steps.concept_desc')
        },
        {
            id: 3,
            step: '03',
            title: t('methodology.steps.execution'),
            description: t('methodology.steps.execution_desc')
        },
        {
            id: 4,
            step: '04',
            title: t('methodology.steps.reveal'),
            description: t('methodology.steps.reveal_desc')
        },
    ];
    
    const testimonials = [
        {
            id: 1,
            name: 'Wanjiku Mwangi',
            handle: 'wanjiku_designs',
            image: profile,
            description: "If you're looking for a team that truly understands modern aesthetics, look no further. My living room has been completely transformed!"
        },
        {
            id: 2,
            name: 'Ochieng Otieno',
            handle: 'ochieng_o_88',
            image: profile,
            description: "The attention to detail is unmatched. They handled everything from procurement to the final reveal with absolute professionalism."
        },
        {
            id: 3,
            name: 'Amina Abdi',
            handle: 'amina_interiors',
            image: profile,
            description: "I was blown away by the concept phase. The moodboards were exactly what I had centered in my mind but couldn't articulate."
        },
        {
            id: 4,
            name: 'Kamau Njoroge',
            handle: 'kamau_arch',
            image: profile,
            description: "A seamless journey from start to finish. The 'Execution' phase was stress-free, and the results speak for themselves."
        },
        {
            id: 5,
            name: 'Zainab Ahmed',
            handle: 'zainab_style',
            image: profile,
            description: "Their distinctive approach to lighting and texture made my small apartment feel spacious and incredibly luxurious."
        },
        {
            id: 6,
            name: 'Juma Kevin',
            handle: 'juma_k_biz',
            image: profile,
            description: "Professional, creative, and timely. The best investment I've made for my corporate office space."
        },
        {
            id: 7,
            name: 'Njeri Kibet',
            handle: 'njeri_k_99',
            image: profile,
            description: "Every corner of my home now tells a story. Thank you for making my dream home a reality!"
        },
        {
            id: 8,
            name: 'Omari Hassan',
            handle: 'omari_dev',
            image: profile,
            description: "The methodology they use really works. I felt involved at every step, yet they did all the heavy lifting."
        },
        {
            id: 9,
            name: 'Fatuma Ali',
            handle: 'fatuma_art',
            image: profile,
            description: "Stunning color palettes and furniture selection. I can't stop showing off my new dining area to guests."
        },
        {
            id: 10,
            name: 'Peter Kiplagat',
            handle: 'peter_k_ceo',
            image: profile,
            description: "Top-tier service. They managed to blend functionality with high-end design perfectly for our hotel lobby."
        },
    ];
    
    const faqs = [
        {
            id: 1,
            question: t('faq.q1'),
            answer: t('faq.a1')
        },
        {
            id: 2,
            question: t('faq.q2'),
            answer: t('faq.a2')
        },
        {
            id: 3,
            question: t('faq.q3'),
            answer: t('faq.a3')
        },
        {
            id: 4,
            question: t('faq.q4'),
            answer: t('faq.a4')
        },
        {
            id: 5,
            question: t('faq.q5'),
            answer: t('faq.a5')
        },
        {
            id: 6,
            question: t('faq.q6'),
            answer: t('faq.a6')
        }
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    const [scrollProgress, setScrollProgress] = useState(0);
    const methodologyRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!methodologyRef.current) return;
            const rect = methodologyRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;
            
            // Start animating when the top of the section hits the middle of viewport
            // and end when the bottom of the section leaves the viewport mostly
            // This logic can be tuned. Let's aim for: 
            // 0% when section top is at window bottom (starts entering)
            // 100% when section bottom is at window bottom (fully scrolled through)
            // But user specifically wants "as user scrolls... progress bar moves" 
            
            // Let's try: Progress 0% when section top is at center of screen, 
            // 100% when users have scrolled past enough.
            
            const start = windowHeight * 0.8; 
            const end = -elementHeight * 0.2; 
            
            // Calculate progress based on rect.top (distance from top of viewport)
            // rect.top goes from +windowHeight (entering from bottom) to -elementHeight (exiting top)
            
            // We want 0% when rect.top is around windowHeight/2 (center)
            // 100% when rect.top is around -elementHeight/2 (scrolled past it)
             
            const totalScrollDistance = start - end;
            const currentScroll = start - rect.top;
            
            let progress = (currentScroll / totalScrollDistance) * 100;
            progress = Math.max(0, Math.min(progress, 100));
            
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>  
            <Nav />
            {/*Start of Hero Section.*/}
            <section className='hero' id='hero'>
                <div className='hero-content'>
                    <h2>{t('hero.title')}</h2>
                    <p>{t('hero.description')}</p>
                    <div className="button-holder">
                        <button className='btn'>{t('hero.explore')}</button>
                        <button className='btn-visit-store'>{t('hero.visit')}</button>
                    </div>
                </div>
                <div className='arrow'><FaArrowDownLong /></div>
            </section>
            {/*End of Hero Section.*/}
            {/*Start of About Section.*/}
            <section className="categories" ref={categoryRef}>
                <div className={`category-intro ${isVisible ? 'animate' : ''}`}>
                    <div className='cat-header'>
                        <h4>{t('categories.header')}</h4>
                        <h3>{t('categories.title')}</h3>
                    </div>
                    <p>{t('categories.description')}</p>
                </div> 
                <div className="category-scroller">
                    <div className="category-grid category-track">
                        {/* First set of items */}
                        {categories.map((category) => (
                            <div key={category.id} className="category">
                                <img src={category.image} alt={category.title} />
                                <figcaption>{category.title}</figcaption>
                            </div>
                        ))}
                        {/* Second set of items for infinite loop */}
                        {categories.map((category) => (
                            <div key={`${category.id}-dup`} className="category">
                                <img src={category.image} alt={category.title} />
                                <figcaption>{category.title}</figcaption>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*End of About Section.*/}
            {/*Start of archievements Section.*/}
            <section className="archieve" ref={archieveRef}>
                <div className={`archieve-intro ${isArchieveVisible ? 'animate' : ''}`}>
                    <div className='archieve-header'>
                        <h4 className='archieve-title'>{t('achievements.header')}</h4>
                        <h3>{t('achievements.title')}</h3>
                    </div>
                    <p>{t('achievements.description')}</p>
                </div>
                <div className="archieve-grid">
                    {archieve.map((item) => (
                        <div key={item.id} className="archieve-item">
                            <div className="archieve-number">
                                <Counter target={item.numbers} start={isArchieveVisible} />
                            </div>
                            <div className="archieve-name">{item.name}</div>
                            <div className="archieve-description">{item.description}</div>
                        </div>
                    ))}
                </div>
            </section>
            {/*End of archievements Section.*/}
            {/*Start of Portfolio */}
            <section className='Portfolio' ref={portfolioRef}>
                <div className="portfolio-about">
                    <div className={`portfolio-intro ${isPortfolioVisible ? 'animate' : ''}`}>
                        <div className="portfolio-header">
                            <h4>{t('portfolio.header')}</h4>
                            <h3>{t('portfolio.title')}</h3>
                        </div>
                        <p>{t('portfolio.description')}</p>
                    </div>
                    <div className="masonry-Gallery">
                        <div className="masonry-item">
                            <img src={p1} alt="" />
                        </div>
                        <div className="masonry-item">
                            <img src={p2} alt="" />
                        </div>
                        <div className="masonry-item">
                            <img src={p3} alt="" />
                        </div>
                        <div className="masonry-item">
                            <img src={p4} alt="" />
                        </div>
                    </div>
                    <div className="view-more">
                        <Link to="/portfolio">{t('portfolio.view_more')}</Link>
                        <FaArrowRightLong className="svg"/>
                    </div>
                </div>
            </section>
            {/*End of Portfolio */}
            {/*Start of Methodology */}
            <section className="methodology" ref={methodologyRef}>
                <div className="methodology-intro">
                    <h3>{t('methodology.header')}</h3>
                    <h4>{t('methodology.title')}</h4>
                </div>
                <div className="progress-container">
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${scrollProgress}%` }}></div>
                    </div>
                    <div className="steps-container">
                        {methodology.map((item, index) => {
                            // Calculate if this step is active based on progress
                            // 4 steps, roughly 0%, 33%, 66%, 100% distribution points
                            // Let's activate slightly before the progress bar hits it visually
                            const isActive = scrollProgress >= (index / (methodology.length - 1)) * 100 - 5;
                            
                            return (
                                <div key={item.id} className={`step-item ${isActive ? 'active' : ''}`}>
                                    <div className="step-circle">
                                        <span className="step-number">{item.step}</span>
                                    </div>
                                    <div className="step-content">
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="book-a-call">
                        <a
                            href="https://wa.me/254714731331?text=Hello%20I%20would%20like%20to%20book%20a%20call%20regarding%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>{t('methodology.book_call')}</button>
                        </a>
                </div>
            </section>
            {/*End of Methodology */}
            {/*Start of Testimonials */}
            <section className="testimonials">
                <div className="testimonial-intro">
                    <h1>{t('testimonials.header')}</h1>
                    <p>{t('testimonials.description')}</p>
                </div>
                <div className="testimonial-scroller">
                    <div className="testimonial-track">
                        {/* First set of testimonials */}
                        {testimonials.map((item) => (
                            <div key={item.id} className="testimonial-card">
                                <div className="profile">
                                    <div className="profile-img-placeholder">{/* Placeholder for {item.image} */}</div>
                                    <div className="profile-info">
                                        <h5>{item.name}</h5>
                                        <span>@{item.handle}</span>
                                    </div>
                                </div>
                                <p className="testimonial-text">{item.description}</p>
                                <FaQuoteLeft className="quote-icon"/>
                            </div>
                        ))}
                        {/* Duplicated set for infinite loop */}
                        {testimonials.map((item) => (
                            <div key={`${item.id}-dup`} className="testimonial-card">
                                <div className="profile">
                                    <div className="profile-img-placeholder">{/* Placeholder for {item.image} */}</div>
                                    <div className="profile-info">
                                        <h5>{item.name}</h5>
                                        <span>@{item.handle}</span>
                                    </div>
                                </div>
                                <p className="testimonial-text">{item.description}</p>
                                <FaQuoteLeft className="quote-icon"/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*End of Testimonials */}
            {/*Start of FAQ */}
            <section className="faq">
                <div className="faq-intro">
                    <h3>{t('faq.header')}</h3>
                    <p>{t('faq.description')}</p>
                </div>
                <div className="faq-container">
                    {faqs.map((faq) => (
                        <div 
                            key={faq.id} 
                            className={`faq-item ${openFaq === faq.id ? 'active' : ''}`}
                            onClick={() => toggleFaq(faq.id)}
                        >
                            <div className="faq-question">
                                <h5>{faq.question}</h5>
                                <FaChevronDown className="faq-icon" />
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/*End of FAQ */}
            {/*Start of Footer */}
            <Footer />
            {/*End of Footer */}
        </>
    );
}       