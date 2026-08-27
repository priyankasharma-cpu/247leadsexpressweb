import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "../../assets/images/weblogo.jpg";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1: Brand / Logo Info */}
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <img src={logo} alt="247 Leads Express" className="footer-logo-img" />
                    </Link>
                    <p className="footer-description">
                        We help businesses attract, engage, and convert their ideal customers through result-driven digital marketing strategies.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/why-us">Why Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Our Services */}
                <div className="footer-col">
                    <h4 className="footer-heading">Our Services</h4>
                    <ul className="footer-links">
                        <li><Link to="/services/lead-generation">Lead Generation</Link></li>
                        <li><Link to="/services/website-development">Website Development</Link></li>
                        <li><Link to="/services/sms-marketing">SMS Marketing</Link></li>
                        <li><Link to="/services/email-marketing">Email Marketing</Link></li>
                        <li><Link to="/services/affiliate-marketing">Affiliate Marketing</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div className="footer-col">
                    <h4 className="footer-heading">Contact Info</h4>
                    <div className="footer-contact">
                        <p><Mail size={16} /> info@247leadsexpress.com</p>
                        <p><Phone size={16} /> +1 (555) 000-0000</p>
                        <p><MapPin size={16} /> 123 Business Street, Suite 100</p>
                    </div>

                    <Link to="/contact" className="footer-cta">
                        Get In Touch <ArrowRight size={14} />
                    </Link>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>© {new Date().getFullYear()} 247 Leads Express. All Rights Reserved.</p>
                    <div className="footer-legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span>•</span>
                        <Link to="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;