"use client";


import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Header/Navbar";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";
// import "./IntroPage.css";

const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "REST APIs",
    "Responsive UI",
    "SEO",
];

const testimonials = [
    {
        name: "Development Client",
        role: "Website Development",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        message:
            "The development experience was smooth and professional. The website structure and responsive layout made the project easy to use.",
    },
    {
        name: "Property Buyer",
        role: "Real Estate Assistance",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        message:
            "The property search process was clear and well organized. Having the details explained properly helped us understand our options.",
    },
    {
        name: "Business Client",
        role: "Digital Solutions",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
        message:
            "A professional approach, clear communication and attention to the details that matter for an online business.",
    },
];

export default function IntroPage() {
    return (
      <>
      <Navbar />
        <main className="intro-page">
            {/* Hero */}
            <section className="intro-hero">
                <motion.div
                    className="intro-hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                >
                    <motion.span className="intro-eyebrow" variants={fadeUp}>
                        INTRODUCING MY PROFESSIONAL WORLD
                    </motion.span>

                    <motion.h1 variants={fadeUp}>
                        Technology Meets
                        <span> Real Estate</span>
                    </motion.h1>

                    <motion.p variants={fadeUp}>
                        I combine modern web development with real estate
                        services to create digital experiences and help people
                        explore property opportunities with confidence.
                    </motion.p>

                    <motion.div className="intro-hero-buttons" variants={fadeUp}>
                        <Link href="#developer" className="intro-btn intro-btn-gold">
                            Explore Developer Profile
                        </Link>

                        <a href="#real-estate" className="intro-btn intro-btn-outline">
                            Explore Real Estate
                        </a>
                    </motion.div>

                    <motion.div className="intro-stats" variants={fadeUp}>
                        <div>
                            <strong>01</strong>
                            <span>Web Development</span>
                        </div>

                        <div>
                            <strong>02</strong>
                            <span>Property Services</span>
                        </div>

                        <div>
                            <strong>100%</strong>
                            <span>Focus on Quality</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* MERN Developer */}
            <section className="intro-section" id="developer">
                <motion.div
                    className="intro-profile-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.18 },
                        },
                    }}
                >
                    <motion.div className="intro-image-wrap" variants={fadeUp}>
                        <div className="intro-image-frame">
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85"
                                alt="Web developer working on a laptop"
                                loading="lazy"
                            />
                        </div>

                        <div className="intro-image-tag">
                            <span className="intro-status-dot"></span>
                            MERN STACK DEVELOPER
                        </div>
                    </motion.div>

                    <motion.div className="intro-profile-content" variants={fadeUp}>
                        <span className="intro-eyebrow">01 / TECHNOLOGY</span>

                        <h2>
                            Building Digital
                            <span> Experiences</span>
                        </h2>

                        <p>
                            I am a MERN Stack Developer focused on creating
                            responsive, user-friendly and performance-oriented
                            web applications. From attractive frontend
                            interfaces to functional backend systems, I work
                            across the complete development process.
                        </p>

                        <p>
                            My goal is to turn ideas into practical digital
                            products with clean code, modern UI and reliable
                            functionality.
                        </p>

                        <h3 className="intro-small-title">TECHNOLOGIES I WORK WITH</h3>

                        <div className="intro-skills">
                            {skills.map((skill) => (
                                <span key={skill} className="intro-skill">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="intro-services">
                            <div>
                                <span className="intro-service-number">01</span>
                                <div>
                                    <h4>Frontend Development</h4>
                                    <p>React, responsive layouts and animations.</p>
                                </div>
                            </div>

                            <div>
                                <span className="intro-service-number">02</span>
                                <div>
                                    <h4>Backend Development</h4>
                                    <p>APIs, authentication and database integration.</p>
                                </div>
                            </div>

                            <div>
                                <span className="intro-service-number">03</span>
                                <div>
                                    <h4>Business Websites</h4>
                                    <p>Modern websites designed around business goals.</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/projects" className="intro-text-link">
                            Explore My Work <span>↗</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Real Estate */}
            <section className="intro-section intro-real-estate" id="real-estate">
                <motion.div
                    className="intro-profile-grid intro-property-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.18 },
                        },
                    }}
                >
                    <motion.div className="intro-profile-content" variants={fadeUp}>
                        <span className="intro-eyebrow">02 / REAL ESTATE</span>

                        <h2>
                            Find a Property
                            <span> That Feels Right</span>
                        </h2>

                        <p>
                            Alongside technology, I work in real estate,
                            helping buyers and investors explore property
                            opportunities based on their needs and preferences.
                        </p>

                        <p>
                            Whether you are looking for a home, considering
                            an investment or exploring available properties,
                            my focus is on clear communication and helping
                            you understand your options.
                        </p>

                        <div className="intro-property-services">
                            <div>
                                <span className="intro-property-icon">⌂</span>
                                <div>
                                    <h4>Residential Properties</h4>
                                    <p>Explore flats, apartments and homes.</p>
                                </div>
                            </div>

                            <div>
                                <span className="intro-property-icon">◇</span>
                                <div>
                                    <h4>Property Investment</h4>
                                    <p>Discuss available opportunities and requirements.</p>
                                </div>
                            </div>

                            <div>
                                <span className="intro-property-icon">↗</span>
                                <div>
                                    <h4>Buyer Assistance</h4>
                                    <p>Understand property details and next steps.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={whatsappLink(
                                "Hi Dutt Properties, I am looking for a property in Ghaziabad / Delhi NCR."
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="intro-btn intro-btn-gold"
                        >
                            Discuss a Property
                        </a>
                    </motion.div>

                    <motion.div className="intro-image-wrap" variants={fadeUp}>
                        <div className="intro-image-frame">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85"
                                alt="Modern residential property"
                                loading="lazy"
                            />
                        </div>

                        <div className="intro-image-tag">
                            <span className="intro-status-dot"></span>
                            REAL ESTATE SERVICES
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Testimonials */}
            <section className="intro-testimonials">
                <motion.div
                    className="intro-section-heading"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <span className="intro-eyebrow">CLIENT EXPERIENCES</span>
                    <h2>
                        Words That <span>Matter</span>
                    </h2>
                    <p>
                        Trust is built through communication, attention to
                        detail and a professional approach.
                    </p>
                </motion.div>

                <div className="intro-testimonial-grid">
                    {testimonials.map((item, index) => (
                        <motion.article
                            className="intro-testimonial-card"
                            key={item.name}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            whileHover={{ y: -7 }}
                        >
                            <span className="intro-quote-mark">“</span>

                            <p>{item.message}</p>

                            <div className="intro-testimonial-person">
                                <img
                                    src={item.image}
                                    alt=""
                                    loading="lazy"
                                />

                                <div>
                                    <h3>{item.name}</h3>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <p className="intro-testimonial-disclaimer">
                    Note: The testimonial text and profile names above are
                    sample content for layout purposes. Replace them with
                    genuine client feedback before publishing.
                </p>
            </section>

            {/* Contact CTA */}
            <motion.section
                className="intro-contact"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
            >
                <span className="intro-eyebrow">LET&apos;S CONNECT</span>

                <h2>
                    Have an Idea or a
                    <span> Property in Mind?</span>
                </h2>

                <p>
                    Let&apos;s discuss your website project, business requirements
                    or real estate goals.
                </p>

                <a href="/contact" className="intro-btn intro-btn-gold">
                    Get in Touch <span>↗</span>
                </a>
            </motion.section>
        </main>
        </>
    );
}
