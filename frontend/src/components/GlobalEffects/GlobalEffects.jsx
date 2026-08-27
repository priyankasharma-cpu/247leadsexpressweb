import { useEffect } from "react";
import gsap from "gsap";
import "./GlobalEffects.css";

const INTERACTIVE_SELECTOR = [
    ".hero",
    ".hero-badge",
    ".hero-stats",
    ".hero-btn-primary",
    ".hero-btn-outline",
    ".hero-trust",
    ".hero-visual",
    ".service-card",
    ".testimonial-card",
    ".portfolio-card",
    ".work-card",
    ".feature-card",
    ".benefit-card",
    ".process-card",
    ".contact-card",
].join(",");

const GlobalEffects = () => {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const isTouchDevice = window.matchMedia(
            "(hover: none), (pointer: coarse)"
        ).matches;

        if (prefersReducedMotion) {
            document.documentElement.classList.add(
                "reduced-motion"
            );

            return () => {
                document.documentElement.classList.remove(
                    "reduced-motion"
                );
            };
        }

        /* =====================================================
           SCROLL REVEAL
        ===================================================== */

        const revealElements = document.querySelectorAll(
            ".scroll-reveal"
        );

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px",
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });


        /* =====================================================
           MOUSE LIGHT + HOVER EFFECT
        ===================================================== */

        if (!isTouchDevice) {
            const interactiveElements = document.querySelectorAll(
                INTERACTIVE_SELECTOR
            );

            const cleanups = [];

            interactiveElements.forEach((element) => {
                const handleMouseEnter = () => {
                    element.classList.add("is-hovered");
                };

                const handleMouseLeave = () => {
                    element.classList.remove("is-hovered");

                    element.style.setProperty(
                        "--light-x",
                        "50%"
                    );

                    element.style.setProperty(
                        "--light-y",
                        "50%"
                    );
                };

                const handleMouseMove = (event) => {
                    const rect = element.getBoundingClientRect();

                    const x =
                        ((event.clientX - rect.left) /
                            rect.width) *
                        100;

                    const y =
                        ((event.clientY - rect.top) /
                            rect.height) *
                        100;

                    element.style.setProperty(
                        "--light-x",
                        `${x}%`
                    );

                    element.style.setProperty(
                        "--light-y",
                        `${y}%`
                    );
                };

                element.addEventListener(
                    "mouseenter",
                    handleMouseEnter
                );

                element.addEventListener(
                    "mouseleave",
                    handleMouseLeave
                );

                element.addEventListener(
                    "mousemove",
                    handleMouseMove,
                    { passive: true }
                );

                cleanups.push(() => {
                    element.removeEventListener(
                        "mouseenter",
                        handleMouseEnter
                    );

                    element.removeEventListener(
                        "mouseleave",
                        handleMouseLeave
                    );

                    element.removeEventListener(
                        "mousemove",
                        handleMouseMove
                    );
                });
            });


            /* =================================================
               CLEANUP
            ================================================= */

            return () => {
                revealObserver.disconnect();

                cleanups.forEach((cleanup) => cleanup());
            };
        }


        return () => {
            revealObserver.disconnect();
        };
    }, []);

    return null;
};

export default GlobalEffects;