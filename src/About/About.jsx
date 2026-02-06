import { useState, useEffect, useRef } from "react";
import Nav from "../Nav/Nav";
import './about.css'
import { FaArrowDownLong, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import mission from '../assets/mission.jpg';
import vision from '../assets/vision.jpg';
import motive from '../assets/motive.jpg';
import inspire from '../assets/inspire.jpg';

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const introH3Ref = useRef(null);
    const introPRef = useRef(null);
    const gridRef = useRef(null);
    const trustRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2, // Trigger when 20% visible
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
                    }
                }
            });
        }, observerOptions);

        if (introH3Ref.current) observer.observe(introH3Ref.current);
        if (introPRef.current) observer.observe(introPRef.current);
        if (gridRef.current) observer.observe(gridRef.current);
        if (trustRef.current) observer.observe(trustRef.current);

        return () => observer.disconnect();
    }, []);

    const journey = [
        {
            year: '2014-2017',
            title: "The Foundation",
            description: "Every journey begins with intention. During these early years, the vision was shaped, skills were refined, and a passion for transforming spaces began to take form. What started as creative exploration quickly evolved into purposeful design driven by detail and dedication."
        },
        {
            year: '2017-2020',
            title: "Building Momentum",
            description: "With growing confidence and experience, projects expanded in scale and complexity. Each completed space strengthened our reputation for precision, creativity, and client-centered design. This period marked the transition from promise to proven excellence."
        },
        {
            year: '2020-2023',
            title: "Refining the Craft",
            description: "Innovation met maturity. Design philosophy became clearer, processes more structured, and collaborations more meaningful. These years were defined by bold concepts, elevated execution, and interiors that blended functionality with distinctive elegance."
        },
        {
            year: '2023-2026',
            title: "Elevating the Vision",
            description: "Today, the studio stands as a refined creative force. With a growing portfolio and an unwavering commitment to quality, we continue to design environments that reflect sophistication, intention, and timeless appeal — always pushing boundaries while honoring our core values."
        }
    ]

    const trustContent = [
        {
            id: 1,
            title: "Our Mission",
            message: "We strive to offer professional, reliable, and flexible virtual assistant services that enhance efficiency and productivity.",
            image: mission 
        },
        {
            id: 2,
            title: "Our Vision",
            message: "To be the leading provider of innovative interior solutions, transforming ordinary spaces into extraordinary experiences through creativity and dedication.",
            image: vision
        },
        {
            id: 3,
            title: "Our Motive",
            message: "Driven by the desire to create harmony and beauty, we believe that design should not only look good but feel good, improving the quality of life for everyone.",
            image: motive
        },
        {
            id: 4,
            title: "Our Inspiration",
            message: "Nature, art, and the unique stories of our clients inspire every project. We find beauty in details and translate them into timeless designs.",
            image: inspire
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === trustContent.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? trustContent.length - 1 : prev - 1));
    };

    return (
        <>
            <Nav />
            <section className="about-hero">
                <div className="hero-intro">
                    <h2>Designing Beyond Aesthetics, Building <span className="highlight">Lasting</span> Impressions</h2>
                    <p>Every project is shaped by creativity, precision, and collaboration. We don’t just design spaces — we curate experiences that reflect personality and elevate everyday living.</p>
                </div>
                <div>
                    <button className="btn1">Schedule a Consultation</button>
                </div>
                <div className='arrow'><FaArrowDownLong /></div>
            </section>
            {/*End of Hero Section */}
            {/*Start of About Section */}
            <section className="about-section">
                <div className="about-intro">
                    <h3 ref={introH3Ref}>How Our Interior Design Journey Started</h3>
                    <p ref={introPRef}>From humble beginnings to becoming a recognized name in interior design, our journey is a testament to passion, perseverance, and a relentless pursuit of excellence.</p>
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
        </>
    );
}