"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../Components/Header/Navbar";
import bg from "../assets/images/bg.jpg";
import { siteConfig, whatsappLink } from "@/lib/site";
import { services, processSteps, serviceFaqs } from "@/data/services";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function ServicePage() {
  return (
    <>
      <Navbar />

      <main className="real-about">
        <div className="about-orb about-orb-one" />
        <div className="about-orb about-orb-two" />

        {/* HERO */}
        <section className="about-hero">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-eyebrow">PROPERTY SERVICES IN GHAZIABAD &amp; DELHI NCR</span>

            <h1>
              Our <span>Services</span>
            </h1>

            <div className="about-gold-line" />

            <p className="about-hero-description">
              End-to-end support for buying, investing and verifying property — from the first
              shortlist in Ghaziabad to registry in Noida or Greater Noida.
            </p>

            <a href="#dp-services" className="about-gold-button">
              View Services <span>↗</span>
            </a>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="about-image-frame">
              <img
                src={bg.src}
                alt="Luxury residential property in Ghaziabad represented by Dutt Properties"
                data-gsap-parallax="24"
              />

              <div className="about-image-overlay">
                <span>CHANNEL PARTNER SERVICES</span>
                <h2>
                  One Desk.
                  <br />
                  Every Property Step.
                </h2>
              </div>
            </div>

            <div className="about-image-corner" />
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="dp-services" className="about-section about-services">
          <motion.div
            className="about-section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-eyebrow">WHAT WE HANDLE</span>
            <h2>
              Property Work, <span>Handled Properly</span>
            </h2>
            <p>Six areas of work, each with a clear deliverable before any payment is made.</p>
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
                  <span className="about-service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <span className="about-card-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="about-card-line" />
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* PROCESS */}
        <section className="about-section about-values">
          <motion.div
            className="about-section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="about-eyebrow">HOW IT WORKS</span>
            <h2>
              Three Steps From <span>Enquiry to Possession</span>
            </h2>
          </motion.div>

          <motion.div
            className="about-values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {processSteps.map((step, index) => (
              <motion.div className="about-value-item" key={step.title} variants={itemVariants}>
                <span className="about-value-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* AREAS */}
        <motion.section
          className="about-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-section-heading">
            <span className="about-eyebrow">SERVICE AREAS</span>
            <h2>
              Where We <span>Work</span>
            </h2>
            <p>
              Active in Ghaziabad and the surrounding Delhi NCR belt. Site visits outside these
              areas are arranged on request.
            </p>
          </div>

          <div className="dp-area-grid">
            {siteConfig.areasServed.map((area) => (
              <span className="dp-area-chip" key={area}>
                {area}
              </span>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <section className="about-section">
          <div className="about-section-heading">
            <span className="about-eyebrow">COMMON QUESTIONS</span>
            <h2>
              Before You <span>Ask</span>
            </h2>
          </div>

          <div className="dp-faq-list">
            {serviceFaqs.map((faq) => (
              <details className="dp-faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          className="about-final-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-eyebrow">START HERE</span>

          <h2>
            Tell Us the Budget. <span>We&apos;ll Do the Filtering.</span>
          </h2>

          <p>
            Share your location and budget on WhatsApp and receive a shortlist with current
            availability, payment plans and site-visit slots.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <a
              href={whatsappLink(
                "Hi Dutt Properties, I want help shortlisting a property in Ghaziabad / Delhi NCR."
              )}
              target="_blank"
              rel="noreferrer"
              className="about-gold-button"
            >
              Chat on WhatsApp <span>↗</span>
            </a>

            <Link href="/contact" className="about-gold-button">
              Send an Enquiry <span>↗</span>
            </Link>
          </div>
        </motion.section>
      </main>
    </>
  );
}
