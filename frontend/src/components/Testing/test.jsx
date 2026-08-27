import React from "react";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Target,
    Users,
} from "lucide-react";

import aboutMainImage from "../../assets/images/hero/d803bac0dbc9823dc0a7f8ecb61eade7.jpg";
import aboutMainImage2 from "../../assets/images/hero/3a8e62fd-8eff-4476-a6e5-53bdac5fc420.jpg";


import "./test.css";

const test = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">

                {/*  LEFT VISUAL
                ================================================= */}

                <div className="about-visual">

                    {/* Main Image */}
                    <div className="about-image-main">
                        <img
                            src={aboutMainImage}
                            alt="Digital marketing professional working on lead generation strategy"
                            loading="lazy"
                        />
                    </div>

                    {/* Secondary Image Block */}
                    <div className="about-image-secondary">
                        <img
                            src={aboutMainImage2}
                            alt="Digital marketing analytics and campaign strategy"
                            loading="lazy"
                        />
                    </div>

                    {/* =================================================
                    MARKETING ORBIT CIRCLE*/}

                    <div className="about-marketing-orbit" aria-label="247 Leads Express marketing services">

                        {/* Center Donut */}
                        <div className="about-orbit-center">
                            <div className="about-orbit-center-inner">
                                <span>247</span>
                                <strong>LEADS</strong>
                                <small>EXPRESS</small>
                            </div>
                        </div>

                        {/* Orbit Ring */}
                        <div className="about-orbit-ring">

                            {/* Google Ads */}
                            <div className="about-orbit-item about-orbit-google">
                                <div className="about-orbit-icon">
                                    <span className="google-g">G</span>
                                </div>
                                <span>Google Ads</span>
                            </div>

                            {/* Meta */}
                            <div className="about-orbit-item about-orbit-meta">
                                <div className="about-orbit-icon">
                                    <span className="meta-symbol">∞</span>
                                </div>
                                <span>Meta Ads</span>
                            </div>

                            {/* Affiliate Marketing */}
                            <div className="about-orbit-item about-orbit-affiliate">
                                <div className="about-orbit-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="21"
                                        height="21"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </div>
                                <span>Affiliate</span>
                            </div>

                            {/* Email Marketing */}
                            <div className="about-orbit-item about-orbit-email">
                                <div className="about-orbit-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="21"
                                        height="21"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="3"
                                            y="5"
                                            width="18"
                                            height="14"
                                            rx="2"
                                        />
                                        <path d="m3 7 9 6 9-6" />
                                    </svg>
                                </div>
                                <span>Email Marketing</span>
                            </div>

                            {/* Lead Generation */}
                            <div className="about-orbit-item about-orbit-leads">
                                <div className="about-orbit-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="21"
                                        height="21"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="9" />
                                        <circle cx="12" cy="12" r="4" />
                                        <path d="M12 3v5" />
                                        <path d="M21 12h-5" />
                                        <path d="M12 21v-5" />
                                        <path d="M3 12h5" />
                                    </svg>
                                </div>
                                <span>Lead Generation</span>
                            </div>

                            {/* Tracking */}
                            <div className="about-orbit-item about-orbit-tracking">
                                <div className="about-orbit-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="21"
                                        height="21"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 3v18h18" />
                                        <path d="m7 15 4-4 3 2 5-6" />
                                        <path d="M16 7h3v3" />
                                    </svg>
                                </div>
                                <span>Tracking</span>
                            </div>

                        </div>
                    </div>

                    {/* =================================================
    ANIMATED DIGITAL GROWTH NETWORK
================================================= */}

                    <div className="about-growth-network" aria-hidden="true">

                        <div className="growth-network-glow"></div>

                        <div className="growth-network-ring growth-network-ring-1"></div>
                        <div className="growth-network-ring growth-network-ring-2"></div>

                        <svg
                            className="growth-network-lines"
                            viewBox="0 0 260 180"
                            preserveAspectRatio="none"
                        >
                            <path d="M130 90 L48 42" />
                            <path d="M130 90 L212 42" />
                            <path d="M130 90 L42 137" />
                            <path d="M130 90 L218 137" />
                        </svg>

                        {/* Google */}
                        <div className="growth-node growth-node-google">
                            <span>G</span>
                        </div>

                        {/* Meta */}
                        <div className="growth-node growth-node-meta">
                            <span>∞</span>
                        </div>

                        {/* Lead */}
                        <div className="growth-node growth-node-lead">
                            <span>↗</span>
                        </div>

                        {/* Email */}
                        <div className="growth-node growth-node-email">
                            <span>✉</span>
                        </div>

                        {/* Center */}
                        <div className="growth-network-core">
                            <div className="growth-network-core-inner">
                                <span>247</span>
                                <small>LEADS</small>
                            </div>
                        </div>

                    </div>

                    {/* Small Decorative Element */}
                    <div
                        className="about-visual-accent"
                        aria-hidden="true"
                    />
                </div>


                {/* =================================================
                    RIGHT CONTENT
                ================================================= */}

                <div className="about-content">

                    {/* Eyebrow */}
                    <span className="about-eyebrow">
                        <span className="about-eyebrow-line" />
                        ABOUT 247 LEADS EXPRESS
                    </span>


                    {/* Heading */}
                    <h2 className="about-title">
                        Turning Digital
                        <span> Attention Into </span>
                        Real Business Growth
                    </h2>


                    {/* Description */}
                    <p className="about-description">
                        We help businesses attract the right audience,
                        generate qualified leads, and turn digital
                        marketing into a measurable growth channel.
                        Our strategies are built around your goals,
                        your customers, and the results that matter.
                    </p>


                    {/* Feature List */}
                    <div className="about-features">

                        <div className="about-feature">
                            <div className="about-feature-icon">
                                <Target size={19} />
                            </div>

                            <div>
                                <h3>Targeted Strategy</h3>
                                <p>
                                    Reach the right audience with
                                    data-driven campaigns.
                                </p>
                            </div>
                        </div>


                        <div className="about-feature">
                            <div className="about-feature-icon">
                                <BarChart3 size={19} />
                            </div>

                            <div>
                                <h3>Measurable Results</h3>
                                <p>
                                    Track performance, leads, and
                                    growth with clear insights.
                                </p>
                            </div>
                        </div>


                        <div className="about-feature">
                            <div className="about-feature-icon">
                                <Users size={19} />
                            </div>

                            <div>
                                <h3>Growth Focused</h3>
                                <p>
                                    Strategies designed to convert
                                    attention into customers.
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* Proof / Stats */}
                    <div className="about-proof">

                        <div className="about-proof-card">
                            <div className="about-proof-icon">
                                <CheckCircle2 size={17} />
                            </div>

                            <div>
                                <strong>98%</strong>
                                <span>Client Retention</span>
                            </div>
                        </div>


                        <div className="about-proof-card">
                            <div className="about-proof-icon">
                                <Target size={17} />
                            </div>

                            <div>
                                <strong>340+</strong>
                                <span>Brands Served</span>
                            </div>
                        </div>


                        <div className="about-proof-card">
                            <div className="about-proof-icon">
                                <BarChart3 size={17} />
                            </div>

                            <div>
                                <strong>2.4x</strong>
                                <span>Avg. Lead Growth</span>
                            </div>
                        </div>

                    </div>


                    {/* CTA */}
                    <a
                        href="#contact"
                        className="about-cta"
                    >
                        Learn More About Us
                        <ArrowRight
                            size={17}
                            aria-hidden="true"
                        />
                    </a>

                </div>




                {/* =================================================
    DIGITAL GROWTH VISUAL
================================================= */}

                <div className="about-growth-visual" aria-hidden="true">
                    <div className="about-growth-visual-header">
                        <span className="about-growth-visual-dot"></span>
                        <span>GROWTH</span>
                    </div>

                    <div className="about-growth-chart">
                        <svg
                            viewBox="0 0 260 105"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient
                                    id="growthArea"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#d90000"
                                        stopOpacity="0.28"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#d90000"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>

                            {/* Area */}
                            <path
                                className="about-growth-area"
                                d="M0 88
                   C25 82, 35 78, 55 81
                   C76 84, 83 62, 105 67
                   C126 72, 137 54, 155 57
                   C177 61, 184 39, 202 43
                   C221 47, 234 23, 260 12
                   L260 105
                   L0 105 Z"
                            />

                            {/* Main Growth Line */}
                            <path
                                className="about-growth-line"
                                d="M0 88
                   C25 82, 35 78, 55 81
                   C76 84, 83 62, 105 67
                   C126 72, 137 54, 155 57
                   C177 61, 184 39, 202 43
                   C221 47, 234 23, 260 12"
                            />

                            {/* End Point */}
                            <circle
                                className="about-growth-point"
                                cx="260"
                                cy="12"
                                r="4"
                            />
                        </svg>
                    </div>

                    <div className="about-growth-visual-footer">
                        <span>Digital</span>
                        <span>Growth</span>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default test;