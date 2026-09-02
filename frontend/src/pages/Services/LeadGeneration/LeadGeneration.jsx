import { ArrowRight, CheckCircle2, Target, Users, TrendingUp } from "lucide-react";
import "./LeadGeneration.css";

const LeadGeneration = () => {
    return (
        <main className="lead-generation-page">

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="lead-generation-hero">

                <div className="lead-generation-hero-content">

                    <span className="lead-generation-eyebrow">
                        LEAD GENERATION
                    </span>

                    <h1>
                        Turn Traffic Into
                        <span> Qualified Leads</span>
                    </h1>

                    <p>
                        We help businesses attract the right audience,
                        capture high-quality leads, and build scalable
                        lead generation systems that support real growth.
                    </p>

                    <div className="lead-generation-hero-actions">
                        <a href="/contact" className="lead-generation-primary-btn">
                            Get Started
                            <ArrowRight size={18} />
                        </a>

                        <a href="#lead-generation-offer" className="lead-generation-secondary-btn">
                            Explore Our Approach
                        </a>
                    </div>

                </div>

                {/* Hero visual */}
                <div className="lead-generation-hero-visual">

                    <div className="lead-generation-orbit orbit-one"></div>
                    <div className="lead-generation-orbit orbit-two"></div>

                    <div className="lead-generation-center-card">
                        <Target size={42} />

                        <strong>Quality Leads</strong>

                        <span>
                            Built for Growth
                        </span>
                    </div>

                    <div className="lead-generation-floating-card card-one">
                        <Users size={20} />
                        <div>
                            <strong>Audience</strong>
                            <span>Targeted</span>
                        </div>
                    </div>

                    <div className="lead-generation-floating-card card-two">
                        <TrendingUp size={20} />
                        <div>
                            <strong>Growth</strong>
                            <span>Scalable</span>
                        </div>
                    </div>

                </div>

            </section>


            {/* =====================================================
                WHAT WE OFFER
            ===================================================== */}
            <section
                className="lead-generation-offer"
                id="lead-generation-offer"
            >

                <div className="lead-generation-section-heading">

                    <span>WHAT WE DO</span>

                    <h2>
                        A Smarter Approach To
                        <span> Lead Generation</span>
                    </h2>

                    <p>
                        From attracting potential customers to converting
                        them into actionable opportunities, we build
                        lead generation strategies around your business goals.
                    </p>

                </div>


                <div className="lead-generation-offer-grid">

                    <article className="lead-generation-offer-card">
                        <div className="offer-icon">
                            <Target size={24} />
                        </div>

                        <h3>Targeted Lead Acquisition</h3>

                        <p>
                            Reach the right audience through carefully
                            planned digital campaigns and targeted
                            acquisition strategies.
                        </p>
                    </article>


                    <article className="lead-generation-offer-card">
                        <div className="offer-icon">
                            <Users size={24} />
                        </div>

                        <h3>Qualified Prospects</h3>

                        <p>
                            Focus on prospects that match your ideal
                            customer profile and have stronger potential
                            to convert.
                        </p>
                    </article>


                    <article className="lead-generation-offer-card">
                        <div className="offer-icon">
                            <TrendingUp size={24} />
                        </div>

                        <h3>Scalable Growth</h3>

                        <p>
                            Build a repeatable lead generation system
                            that can grow alongside your business.
                        </p>
                    </article>

                </div>

            </section>


            {/* =====================================================
                BENEFITS
            ===================================================== */}
            <section className="lead-generation-benefits">

                <div className="lead-generation-benefits-content">

                    <span className="lead-generation-eyebrow">
                        WHY LEAD GENERATION
                    </span>

                    <h2>
                        More Than Just
                        <span> Website Traffic</span>
                    </h2>

                    <p>
                        Getting visitors is only the beginning. Our focus
                        is turning attention into meaningful business
                        opportunities through a structured lead generation
                        process.
                    </p>


                    <div className="lead-generation-check-list">

                        <div>
                            <CheckCircle2 size={20} />
                            <span>Reach the right audience</span>
                        </div>

                        <div>
                            <CheckCircle2 size={20} />
                            <span>Generate high-intent prospects</span>
                        </div>

                        <div>
                            <CheckCircle2 size={20} />
                            <span>Improve conversion opportunities</span>
                        </div>

                        <div>
                            <CheckCircle2 size={20} />
                            <span>Build scalable acquisition systems</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="lead-generation-cta">

                <div>

                    <span>READY TO GROW?</span>

                    <h2>
                        Let's Build Your
                        <strong> Lead Generation Engine.</strong>
                    </h2>

                    <p>
                        Tell us about your business and let's discuss
                        how we can help you generate better opportunities.
                    </p>

                    <a href="/contact" className="lead-generation-primary-btn">
                        Talk To Our Team
                        <ArrowRight size={18} />
                    </a>

                </div>

            </section>

        </main>
    );
};

export default LeadGeneration;