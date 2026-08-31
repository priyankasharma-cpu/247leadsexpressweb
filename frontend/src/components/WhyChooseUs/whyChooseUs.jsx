import { useEffect, useRef, useState } from "react";
import whyChooseUsData from "../../data/whyChooseUsData";
import logo from "../../assets/images/weblogo.jpg";

import "./whyChooseUs.css";

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;

            if (!section) return;

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            /*
             * Section ke andar progress.
             *
             * 0 = section start
             * 1 = section end
             */
            const scrollableDistance =
                section.offsetHeight - viewportHeight;

            if (scrollableDistance <= 0) return;

            const progress = Math.min(
                1,
                Math.max(0, -rect.top / scrollableDistance)
            );

            /*
             * 6 cards ko gradually activate karna.
             */
            const calculatedIndex = Math.min(
                whyChooseUsData.length - 1,
                Math.floor(progress * whyChooseUsData.length)
            );

            setActiveIndex(calculatedIndex);

            /*
             * Slow smooth rotation.
             */
            setRotation(progress * 180);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const leftCards = whyChooseUsData.filter(
        (item) => item.side === "left"
    );

    const rightCards = whyChooseUsData.filter(
        (item) => item.side === "right"
    );

    return (
        <section
            ref={sectionRef}
            className="why-section"
            id="why-us"
        >
            <div className="why-sticky">

                {/* =========================================
                    HEADER
                ========================================= */}

                <div className="why-header">

                    <span className="why-eyebrow">
                        WHY CHOOSE US
                    </span>

                    <h2>
                        Your Growth,
                        <span> Our Commitment</span>
                    </h2>

                    <p>
                        We combine data-driven strategies,
                        innovative tools, and industry expertise
                        to deliver measurable results and help
                        your business grow faster.
                    </p>

                </div>


                {/* =========================================
                    MAIN CONTENT
                ========================================= */}

                <div className="why-layout">

                    {/* =====================================
                        LEFT CARDS
                    ===================================== */}

                    <div className="why-cards why-cards-left">

                        {leftCards.map((item) => {

                            const Icon = item.icon;

                            const originalIndex =
                                whyChooseUsData.findIndex(
                                    (card) => card.id === item.id
                                );

                            const isActive =
                                originalIndex === activeIndex;

                            return (
                                <div
                                    key={item.id}
                                    className={`why-card ${isActive
                                        ? "why-card-active"
                                        : ""
                                        }`}
                                >

                                    <div className="why-number">
                                        {item.number}
                                    </div>

                                    <div className="why-card-icon">
                                        <Icon size={23} strokeWidth={1.8} />
                                    </div>

                                    <div className="why-card-content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                    <div className="why-card-line">
                                        <span className="line-dot"></span>
                                    </div>

                                </div>
                            );
                        })}

                    </div>


                    {/* =====================================
                        CENTER
                    ===================================== */}

                    <div className="why-center">

                        <div
                            className="why-ring"
                            style={{
                                transform: `rotate(${rotation}deg)`,
                            }}
                        >

                            <div className="why-ring-dot dot-1"></div>
                            <div className="why-ring-dot dot-2"></div>
                            <div className="why-ring-dot dot-3"></div>
                            <div className="why-ring-dot dot-4"></div>

                        </div>


                        <div className="why-ring-inner">

                            <div className="why-logo-wrapper">
                                <img
                                    src={logo}
                                    alt="247 Leads Express"
                                />
                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        RIGHT CARDS
                    ===================================== */}

                    <div className="why-cards why-cards-right">

                        {rightCards.map((item) => {

                            const Icon = item.icon;

                            const originalIndex =
                                whyChooseUsData.findIndex(
                                    (card) => card.id === item.id
                                );

                            const isActive =
                                originalIndex === activeIndex;

                            return (
                                <div
                                    key={item.id}
                                    className={`why-card ${isActive
                                        ? "why-card-active"
                                        : ""
                                        }`}
                                >

                                    <div className="why-number">
                                        {item.number}
                                    </div>

                                    <div className="why-card-icon">
                                        <Icon size={23} strokeWidth={1.8} />
                                    </div>

                                    <div className="why-card-content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                    <div className="why-card-line">
                                        <span className="line-dot"></span>
                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>


                {/* =========================================
                    SCROLL INDICATOR
                ========================================= */}

                <div className="why-scroll-indicator">

                    <div className="why-scroll-arrows">
                        ↓
                    </div>

                    <span>
                        Scroll to explore
                    </span>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;