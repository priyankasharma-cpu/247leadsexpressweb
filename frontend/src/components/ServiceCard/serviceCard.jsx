import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import services from "../../data/services";
import "./serviceCard.css";

const ServiceCard = () => {
    return (
        <section className="services-section">

            {/* Decorative background */}
            <div className="services-bg-grid"></div>

            <div className="services-container">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="services-header">

                    <div className="services-heading">

                        <div className="services-eyebrow">
                            <span className="eyebrow-line"></span>
                            OUR SERVICES
                        </div>

                        <h2>
                            Solutions that turn
                            <span> attention into growth.</span>
                        </h2>

                    </div>

                    <div className="services-header-right">

                        <span className="services-count">
                            05
                        </span>

                        <p>
                            Powerful digital solutions designed
                            to help your business generate,
                            connect and grow.
                        </p>

                    </div>

                </div>


                {/* =================================================
                    SERVICES LAYOUT
                ================================================= */}

                <div className="services-layout">

                    {/* =============================================
                        FEATURED SERVICE
                    ============================================= */}

                    {services
                        .filter((service) => service.featured)
                        .map((service) => {

                            const Icon = service.icon;

                            return (
                                <Link
                                    to={service.path}
                                    className="service-featured"
                                    key={service.id}
                                >

                                    <div className="featured-glow"></div>

                                    <div className="featured-top">

                                        <span className="service-number">
                                            {service.number}
                                        </span>

                                        <span className="service-tag">
                                            {service.tag}
                                        </span>

                                    </div>


                                    <div className="featured-icon">
                                        <Icon
                                            size={34}
                                            strokeWidth={1.6}
                                        />
                                    </div>


                                    <div className="featured-content">

                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.description}
                                        </p>

                                    </div>


                                    <div className="featured-bottom">

                                        <span>
                                            Explore Service
                                        </span>

                                        <span className="featured-arrow">
                                            <ArrowUpRight
                                                size={22}
                                            />
                                        </span>

                                    </div>


                                    <div className="featured-decoration">
                                        01
                                    </div>

                                </Link>
                            );
                        })}


                    {/* =============================================
                        OTHER SERVICES
                    ============================================= */}

                    <div className="services-list">

                        {services
                            .filter((service) => !service.featured)
                            .map((service) => {

                                const Icon = service.icon;

                                return (
                                    <Link
                                        to={service.path}
                                        className="service-item"
                                        key={service.id}
                                    >

                                        <div className="service-item-left">

                                            <span className="service-item-number">
                                                {service.number}
                                            </span>

                                            <div className="service-item-icon">
                                                <Icon
                                                    size={22}
                                                    strokeWidth={1.7}
                                                />
                                            </div>

                                            <div className="service-item-content">

                                                <div className="service-item-title-row">

                                                    <h3>
                                                        {service.title}
                                                    </h3>

                                                    <span className="service-item-tag">
                                                        {service.tag}
                                                    </span>

                                                </div>

                                                <p>
                                                    {service.description}
                                                </p>

                                            </div>

                                        </div>


                                        <div className="service-item-arrow">
                                            <MoveUpRight size={20} />
                                        </div>

                                    </Link>
                                );
                            })}

                    </div>

                </div>


                {/* =================================================
                    BOTTOM STATEMENT
                ================================================= */}

                <div className="services-bottom">

                    <div className="services-bottom-line"></div>

                    <p>
                        One partner.
                        <strong> Multiple growth solutions.</strong>
                    </p>

                    <Link
                        to="/services"
                        className="view-all-services"
                    >
                        View All Services
                        <ArrowUpRight size={17} />
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default ServiceCard;