import { useState } from "react";

import {
    ArrowRight,
    Clock3,
    Mail,
    MapPin,
    Phone,
    Send,
    ShieldCheck,
} from "lucide-react";

import "./contact.css";
import { submitContact } from "../../services/api";
import { getStoredTrackingParams } from "../../utils/tracking";

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("FORM SUBMIT RUNNING");
        setLoading(true);
        setSuccess("");
        setError("");

        try {
            const trackingData = getStoredTrackingParams();
            console.log("Tracking Data:", trackingData);
            const response = await submitContact({
                name: `${formData.firstName} ${formData.lastName}`.trim(),
                email: formData.email,
                phone: formData.phone,
                subject: formData.service,
                message: formData.message,
                ...trackingData,
            });

            if (response.success) {
                setSuccess("Your message has been submitted successfully.");

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <main className="contact-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="contact-hero">

                <div className="contact-hero-content">

                    <span className="contact-eyebrow">
                        LET'S CONNECT
                    </span>

                    <span className="contact-line"></span>

                    <h1>
                        Let's Grow Your Business,
                        <span> Together.</span>
                    </h1>

                    <p>
                        Have a project in mind, need more leads, or want to
                        improve your digital marketing? Tell us what you're
                        looking for and our team will get back to you.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CONTACT MAIN
            ===================================================== */}

            <section className="contact-section">

                <div className="contact-container">


                    {/* =================================================
                        LEFT INFO
                    ================================================= */}

                    <div className="contact-info">

                        <div className="contact-info-heading">

                            <span>GET IN TOUCH</span>

                            <h2>
                                We’re here to
                                <strong> help.</strong>
                            </h2>

                            <p>
                                Whether you're looking for high-quality leads,
                                a new website, or a complete digital marketing
                                solution, let's start the conversation.
                            </p>

                        </div>


                        <div className="contact-details">

                            <a
                                href="tel:+10000000000"
                                className="contact-detail"
                            >
                                <div className="contact-detail-icon">
                                    <Phone size={21} />
                                </div>

                                <div>
                                    <small>CALL US</small>
                                    <strong>+1 (000) 000-0000</strong>
                                </div>

                            </a>


                            <a
                                href="mailto:info@247leadsexpress.com"
                                className="contact-detail"
                            >
                                <div className="contact-detail-icon">
                                    <Mail size={21} />
                                </div>

                                <div>
                                    <small>EMAIL US</small>
                                    <strong>
                                        info@247leadsexpress.com
                                    </strong>
                                </div>

                            </a>


                            <div className="contact-detail">

                                <div className="contact-detail-icon">
                                    <MapPin size={21} />
                                </div>

                                <div>
                                    <small>LOCATION</small>
                                    <strong>
                                        Serving Clients Nationwide
                                    </strong>
                                </div>

                            </div>


                            <div className="contact-detail">

                                <div className="contact-detail-icon">
                                    <Clock3 size={21} />
                                </div>

                                <div>
                                    <small>AVAILABILITY</small>
                                    <strong>
                                        Monday – Friday
                                    </strong>
                                </div>

                            </div>

                        </div>


                        {/* TRUST BOX */}

                        <div className="contact-trust">

                            <div className="contact-trust-icon">
                                <ShieldCheck size={22} />
                            </div>

                            <div>
                                <strong>Your information is secure.</strong>

                                <p>
                                    We respect your privacy and never share
                                    your information without permission.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        FORM
                    ================================================= */}

                    <div className="contact-form-card">

                        <div className="contact-form-header">

                            <span>START A CONVERSATION</span>

                            <h2>
                                Tell us about your
                                <em> project.</em>
                            </h2>

                            <p>
                                Fill out the form below and we'll get in touch
                                with you shortly.
                            </p>

                        </div>


                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-form-row">

                                <div className="contact-field">
                                    <label>First Name</label>

                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Your first name"
                                        required
                                    />
                                </div>


                                <div className="contact-field">
                                    <label>Last Name</label>

                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Your last name"
                                        required
                                    />
                                </div>

                            </div>


                            <div className="contact-form-row">

                                <div className="contact-field">
                                    <label>Email Address</label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>


                                <div className="contact-field">
                                    <label>Phone Number</label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (000) 000-0000"
                                    />
                                </div>

                            </div>


                            <div className="contact-field">

                                <label>What can we help you with?</label>

                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>

                                    <option>
                                        Lead Generation
                                    </option>

                                    <option>
                                        Website Development
                                    </option>

                                    <option>
                                        SMS Marketing
                                    </option>

                                    <option>
                                        Email Marketing
                                    </option>

                                    <option>
                                        Affiliate Marketing
                                    </option>

                                    <option>
                                        Other
                                    </option>

                                </select>

                            </div>


                            <div className="contact-field">

                                <label>Tell us about your project</label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell us a little about your goals..."
                                    required
                                ></textarea>

                            </div>


                            <button
                                type="submit"
                                className="contact-submit"
                                disabled={loading}
                            >
                                <span>
                                    {loading ? "Sending..." : "Send Message"}
                                </span>

                                <ArrowRight size={19} />
                            </button>

                            {success && (
                                <p className="contact-success">
                                    {success}
                                </p>
                            )}

                            {error && (
                                <p className="contact-error">
                                    {error}
                                </p>
                            )}

                            <div className="contact-form-note">

                                <ShieldCheck size={15} />

                                <span>
                                    Your information is kept private and secure.
                                </span>

                            </div>

                        </form>

                    </div>

                </div>

            </section>


            {/* =====================================================
                BOTTOM CTA
            ===================================================== */}

            <section className="contact-bottom">

                <div>

                    <span>READY TO GET STARTED?</span>

                    <h2>
                        Your next growth opportunity
                        <strong> starts here.</strong>
                    </h2>

                </div>

                <a href="/services">
                    Explore Our Services
                    <Send size={17} />
                </a>

            </section>

        </main>
    );
};

export default Contact;