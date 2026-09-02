import React, { useEffect, useRef, useState } from "react";
import {
    Search,
    Target,
    PenTool,
    Rocket,
    BarChart3,
} from "lucide-react";
import "./WorkProcess.css";

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Understand Your Goals",
        description:
            "Deep dive into your business metrics, target audience, and current growth bottlenecks.",
        icon: Search,
    },
    {
        number: "02",
        title: "Build the Strategy",
        description:
            "Data-driven roadmap focused on high-intent lead generation and scalable ROI.",
        icon: Target,
    },
    {
        number: "03",
        title: "Create & Launch",
        description:
            "High-converting landing pages, ads, and performance marketing infrastructure.",
        icon: PenTool,
    },
    {
        number: "04",
        title: "Optimize & Scale",
        description:
            "Continuous tracking, A/B testing, and campaign scaling to maximize efficiency.",
        icon: Rocket,
    },
    {
        number: "05",
        title: "Measure Growth",
        description:
            "Transparent multi-touch attribution reporting and real-time ROI tracking.",
        icon: BarChart3,
    },
];

const WorkProcess = () => {
    const [visibleSteps, setVisibleSteps] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute("data-index"));
                        setVisibleSteps((prev) =>
                            prev.includes(index) ? prev : [...prev, index]
                        );
                    }
                });
            },
            { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
        );

        const stepElements = sectionRef.current?.querySelectorAll(".process-step");
        stepElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="work-process-section" ref={sectionRef}>
            {/* HEADER */}
            <header className="work-process-header">
                <div className="eyebrow-badge">
                    <span className="eyebrow-dot"></span>
                    <span>OUR WORK PROCESS</span>
                </div>

                <h2>
                    From Strategy to <span className="highlight-text">Growth</span>
                </h2>

                <p>
                    A battle-tested 5-step growth engine built to deliver predictable acquisition and measurable enterprise revenue.
                </p>
            </header>

            {/* ROADMAP CONTAINER */}
            <div className="work-process-roadmap">
                <div className="roadmap-line" aria-hidden="true" />
                <div
                    className="roadmap-progress"
                    style={{
                        height: `${(visibleSteps.length / PROCESS_STEPS.length) * 100}%`,
                    }}
                    aria-hidden="true"
                />

                {PROCESS_STEPS.map((step, index) => {
                    const IconComponent = step.icon;
                    const isLeft = index % 2 === 0;
                    const isVisible = visibleSteps.includes(index);

                    return (
                        <div
                            key={step.number}
                            data-index={index}
                            className={`process-step ${isLeft ? "step-left" : "step-right"} ${isVisible ? "is-visible" : ""
                                }`}
                        >
                            {/* CARD CONTAINER */}
                            <article className="process-card">
                                <div className="process-card-header">
                                    <div className="process-icon-wrapper">
                                        <IconComponent size={18} strokeWidth={2.2} />
                                    </div>
                                    <span className="process-number">STEP {step.number}</span>
                                </div>

                                <div className="process-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </article>

                            {/* CONNECTOR LINE */}
                            <div className="process-connector" aria-hidden="true" />

                            {/* CENTER TIMELINE NODE */}
                            <div className="process-node" aria-hidden="true">
                                <span className="node-dot"></span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* FOOTER CALLOUT */}
            <footer className="process-bottom">
                <div className="bottom-arrow" aria-hidden="true">↓</div>
                <p>Ready to accelerate your business?</p>
            </footer>
        </section>
    );
};

export default WorkProcess;