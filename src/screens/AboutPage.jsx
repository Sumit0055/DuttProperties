"use client"
import React from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import Link from "next/link";
import Navbar from "../Components/Header/Navbar";
import bg from "../assets/images/1.jpg"
import FloatingSocial from "../Components/FloatingSocial/FloatingSocial";
import { whatsappLink } from "@/lib/site";

const services = [
  {
    number: "01",
    title: "Residential Properties",
    description:
      "Explore residential property options based on your preferred location, budget, family requirements and lifestyle.",
    icon: "⌂",
  },
  {
    number: "02",
    title: "Commercial Properties",
    description:
      "Discover commercial property opportunities for business requirements, subject to availability and project details.",
    icon: "▦",
  },
  {
    number: "03",
    title: "Investment Assistance",
    description:
      "Compare available property options, understand project details and make decisions aligned with your investment goals.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Channel Partner Services",
    description:
      "Get assistance with property enquiries, project information, site visit coordination and communication with relevant project teams.",
    icon: "◇",
  },
];

const values = [
  {
    title: "Transparency",
    text: "Clear communication about available information, pricing details and project terms.",
  },
  {
    title: "Client First",
    text: "Understanding individual requirements before sharing relevant property options.",
  },
  {
    title: "Informed Decisions",
    text: "Encouraging clients to verify project approvals, documents and terms before committing.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <FloatingSocial />

      <main className="real-about">
        {/* Decorative background */}
        <div className="about-orb about-orb-one" />
        <div className="about-orb about-orb-two" />

        {/* HERO SECTION */}
        <section className="about-hero">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-eyebrow">
              INDEPENDENT REAL ESTATE CONSULTANT
            </span>

            <h1>
              About <span>Us</span>
            </h1>

            <div className="about-gold-line" />

            <p className="about-hero-description">
              Connecting people with property opportunities through
              personalized guidance, transparent communication and
              professional channel partner services.
            </p>

            <a href="#about-services" className="about-gold-button">
              Explore Our Services <span>↗</span>
            </a>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="about-image-frame">
              <img
                src={bg.src}
                alt="Modern luxury residential architecture in Ghaziabad"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="about-image-overlay">
                <span>PROPERTY CONSULTING</span>
                <h2>
                  Your Goals.
                  <br />
                  Your Property Journey.
                </h2>
              </div>
            </div>

            <div className="about-image-corner" />
          </motion.div>
        </section>

        {/* INTRODUCTION */}
        <motion.section
          className="about-intro about-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="about-section-label" variants={itemVariants}>
            <span>01</span> WHO I AM
          </motion.div>

          <motion.h2 variants={itemVariants}>
            Property Guidance Built Around <span>Your Needs</span>
          </motion.h2>

          <motion.p variants={itemVariants}>
            I work independently as a real estate consultant and channel
            partner, helping individuals, families and investors explore
            suitable property opportunities. My approach focuses on
            understanding your requirements, sharing relevant project
            information and facilitating communication with the concerned
            builder or project team.
          </motion.p>

          <motion.p variants={itemVariants}>
            Whether you are looking for a home, considering a commercial
            property or researching potential real estate investments, the
            objective is to make your property search more organized,
            informed and convenient.
          </motion.p>
        </motion.section>

        {/* SERVICES */}
        <section id="about-services" className="about-section about-services">
          <motion.div
            className="about-section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-eyebrow">WHAT I CAN HELP WITH</span>

            <h2>
              Property <span>Solutions</span>
            </h2>

            <p>
              Personalized assistance for different property requirements.
            </p>
          </motion.div>

          <motion.div
            className="about-service-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => (
              <motion.article
                className="about-service-card"
                key={service.number}
                variants={itemVariants}
                whileHover={{ y: -7 }}
              >
                <div className="about-card-top">
                  <span className="about-service-icon">{service.icon}</span>
                  <span className="about-card-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="about-card-line" />
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* MISSION & VISION */}
        <section className="about-purpose about-section">
          <motion.div
            className="about-purpose-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-purpose-icon">◎</span>
            <span className="about-eyebrow">OUR MISSION</span>

            <h2>
              Guidance With <span>Clarity</span>
            </h2>

            <p>
              To help property seekers and investors navigate available
              property options with clear communication, relevant information
              and a client-focused approach.
            </p>
          </motion.div>

          <motion.div
            className="about-purpose-card about-purpose-highlight"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-purpose-icon">✧</span>
            <span className="about-eyebrow">OUR VISION</span>

            <h2>
              Trust Through <span>Transparency</span>
            </h2>

            <p>
              To build lasting professional relationships by prioritizing
              honest communication, informed choices and dependable
              coordination throughout the property search.
            </p>
          </motion.div>
        </section>

        {/* INVESTOR SECTION */}
        <motion.section
          className="about-investor"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-investor-content">
            <span className="about-eyebrow">
              FOR INVESTORS & PROPERTY BUYERS
            </span>

            <h2>
              Explore Opportunities.
              <br />
              <span>Decide With Confidence.</span>
            </h2>

            <p>
              Every property requirement is different. Share your preferred
              location, budget and objectives to explore relevant opportunities
              and understand the available project information.
            </p>

            <a
              href={whatsappLink(
                "Hi Dutt Properties, I would like to discuss a property requirement in Ghaziabad / Delhi NCR."
              )}
              target="_blank"
              rel="noreferrer"
              className="about-gold-button"
            >
              Discuss Your Requirements <span>↗</span>
            </a>
          </div>
        </motion.section>

        {/* VALUES */}
        <section className="about-section about-values">
          <motion.div
            className="about-section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="about-eyebrow">WHAT MATTERS TO US</span>
            <h2>
              The Values Behind <span>Every Interaction</span>
            </h2>
          </motion.div>

          <motion.div
            className="about-values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {values.map((value, index) => (
              <motion.div
                className="about-value-item"
                key={value.title}
                variants={itemVariants}
              >
                <span className="about-value-number">
                  0{index + 1}
                </span>

                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROFESSIONAL DISCLAIMER */}
        <div className="about-disclaimer">
          <span>IMPORTANT INFORMATION</span>

          <p>
            I operate independently as a real estate consultant and channel
            partner. I am not presenting myself as a builder, property owner
            or employee of any particular developer. Project availability,
            prices, specifications, approvals, possession schedules and other
            terms are subject to confirmation by the relevant developer or
            authorized party. Buyers should independently verify documents
            and applicable RERA registration details wherever relevant.
            Property investments involve risks, and returns are not guaranteed.
          </p>
        </div>

        {/* FINAL CTA */}
        <motion.section
          className="about-final-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-eyebrow">LET&apos;S CONNECT</span>

          <h2>
            Your Next Property Conversation <span>Starts Here.</span>
          </h2>

          <p>
            Have a property requirement or want to discuss an available
            opportunity? Let&apos;s connect and explore the next steps.
          </p>

          <Link href="/contact" className="about-gold-button">
            Get In Touch <span>↗</span>
          </Link>
        </motion.section>
      </main>
    </>
  );
}
