import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/weblogo.jpg";
import "./Navbar.css";


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const services = [
        { name: "Lead Generation", path: "/services/lead-generation" },
        { name: "Website Development", path: "/services/website-development" },
        { name: "SMS Marketing", path: "/services/sms-marketing" },
        { name: "Email Marketing", path: "/services/email-marketing" },
        { name: "Affiliate Marketing", path: "/services/affiliate-marketing" },
    ];

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Updated Image Logo */}
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="247 Leads Express Logo" className="logo-img" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="#about" className="nav-link">About Us</Link>

                    {/* Services Dropdown */}
                    <div
                        className="services-dropdown"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button
                            type="button"
                            className="nav-link services-button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services
                            <ChevronDown size={16} />
                        </button>

                        {servicesOpen && (
                            <div className="dropdown-menu">
                                {services.map((service) => (
                                    <Link
                                        key={service.path}
                                        to={service.path}
                                        className="dropdown-item"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/why-us" className="nav-link">Why Us</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                {/* Desktop CTA */}
                <Link to="/contact" className="navbar-cta">
                    Get Started <span>→</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="mobile-menu-button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="mobile-nav">
                    <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

                    <div className="mobile-services">
                        <button
                            type="button"
                            className="mobile-nav-link mobile-services-button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services
                            <ChevronDown size={17} />
                        </button>

                        {servicesOpen && (
                            <div className="mobile-dropdown">
                                {services.map((service) => (
                                    <Link
                                        key={service.path}
                                        to={service.path}
                                        className="mobile-dropdown-item"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/why-us" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Why Us</Link>
                    <Link to="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <Link to="/contact" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>
                        Get Started →
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;