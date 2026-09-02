import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./hero.css";

import heroImage from "../../assets/images/hero/hero-main.png";

import {
    ArrowRight,
    Target,
    Users,
    Sparkles,
} from "lucide-react";

const Hero = () => {
    const heroRef = useRef(null);
    const headingRef = useRef(null);
    const badgeRef = useRef(null);
    const paraRef = useRef(null);
    const buttonsRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.from(badgeRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.6,
            })
                .from(
                    headingRef.current.children,
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.15,
                    },
                    "-=0.3"
                )
                .from(
                    paraRef.current,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.4"
                )
                .from(
                    buttonsRef.current.children,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.1,
                    },
                    "-=0.3"
                )
                .from(
                    ".hero-ring",
                    {
                        scale: 0.6,
                        opacity: 0,
                        duration: 0.9,
                        stagger: 0.1,
                        ease: "power3.out",
                    },
                    "-=0.6"
                )
                .from(
                    imageRef.current,
                    {
                        y: 140,
                        opacity: 0,
                        duration: 1.1,
                        ease: "power4.out",
                    },
                    "-=0.5"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="hero"
            ref={heroRef}
            aria-labelledby="hero-title"
        >
            <div className="hero-container">

                {/* LEFT CONTENT */}
                <div className="hero-content">

                    <div className="hero-copy">

                        <span className="hero-badge" ref={badgeRef}>
                            <span className="hero-badge-icon">
                                <Sparkles size={14} aria-hidden="true" />
                            </span>

                            <span>
                                Grow your business with smart marketing
                            </span>

                            <span className="hero-badge-dot"></span>
                        </span>

                        <h1 id="hero-title" ref={headingRef}>
                            <span className="hero-heading-line">
                                Turn Traffic Into
                            </span>

                            <span className="hero-heading-accent">
                                Qualified Leads
                                <span className="hero-heading-underline"></span>
                            </span>
                        </h1>

                        <p ref={paraRef}>
                            We help businesses attract, engage, and convert
                            their ideal customers through
                            <strong>
                                {" "}
                                result-driven digital marketing strategies.
                            </strong>
                        </p>

                    </div>

                    {/* TRUST STATS */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-number">2.4x</span>
                            <span className="hero-stat-label">avg lead growth</span>
                        </div>

                        <div className="hero-stat-divider" />

                        <div className="hero-stat">
                            <span className="hero-stat-number">340+</span>
                            <span className="hero-stat-label">brands served</span>
                        </div>

                        <div className="hero-stat-divider" />

                        <div className="hero-stat">
                            <span className="hero-stat-number">98%</span>
                            <span className="hero-stat-label">client retention</span>
                        </div>
                    </div>

                    {/* CTA BUTTONS */}
                    <div className="hero-buttons" ref={buttonsRef}>
                        <a href="/contact" className="hero-btn-primary">
                            <span>Get Started Now</span>
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>

                        <a href="#services" className="hero-btn-outline">
                            <span>Explore Services</span>
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>
                    </div>

                    {/* SOCIAL PROOF */}
                    <div className="hero-trust">

                        <div className="hero-avatars">
                            <img
                                src="https://i.pravatar.cc/100?img=47"
                                alt="Client"
                                className="hero-avatar"
                            />

                            <img
                                src="https://i.pravatar.cc/100?img=12"
                                alt="Client"
                                className="hero-avatar"
                            />

                            <img
                                src="https://i.pravatar.cc/100?img=32"
                                alt="Client"
                                className="hero-avatar"
                            />

                            <div className="hero-avatar-more">
                                +50
                            </div>
                        </div>

                        <div className="hero-trust-content">

                            <div className="hero-stars">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>

                            <div className="hero-trust-text">
                                <strong>Trusted by 340+</strong>
                                <span>growing teams</span>
                            </div>

                        </div>

                        <div className="hero-verified">
                            <span>✓</span>
                            Verified
                        </div>

                    </div>

                </div>

                {/* RIGHT VISUAL */}
                <div className="hero-visual">

                    <div
                        className="hero-circle"
                        aria-hidden="true"
                    />

                    <div
                        className="hero-ring hero-ring--1"
                        aria-hidden="true"
                    />

                    <div
                        className="hero-ring hero-ring--2"
                        aria-hidden="true"
                    />

                    <div
                        className="hero-ring hero-ring--3"
                        aria-hidden="true"
                    />

                    <img
                        ref={imageRef}
                        src={heroImage}
                        alt="Marketing professional reviewing lead generation analytics on a laptop"
                        className="hero-image"
                        loading="eager"
                        fetchPriority="high"
                        width="360"
                        height="500"
                    />

                    {/* TARGET */}
                    <div className="target-icon" aria-hidden="true">
                        <Target size={34} color="#dc0000" />
                    </div>

                    {/* USERS */}
                    <div className="users-icon" aria-hidden="true">
                        <Users size={26} color="#dc0000" />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;