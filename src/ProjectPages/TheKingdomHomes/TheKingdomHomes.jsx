"use client";

// import React from 'react'
// import Navbar from '../../Components/Header/Navbar'

// export default function TheKingdomHomes() {
//   return (
//     <>
//     <Navbar />
//     <div>TheKingdomHomes</div>
//     </>
//   )
// }


import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaLocationDot,
  FaArrowRight,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCar,
  FaShieldHalved,
  FaTree,
  FaGem,
  FaCheck,
  FaHouse,
  FaPhone,
  FaRegCompass,
} from "react-icons/fa6";

import Navbar from "../../Components/Header/Navbar";
// import "./SayaPage.css";
import "../Saya/SayaPage.css"; // Reuse SayaPage styles for TheKingdomHomes
import FloatingSocial from "../../Components/FloatingSocial/FloatingSocial";

const property = {
  name: "THE KINGDOM HOME",
  title: "Premium Studio & Commercial Spaces",
  subtitle:
    "Where modern business meets thoughtfully designed spaces.",
  location: "Ghaziabad, Uttar Pradesh",
  type: "Studio & Commercial Development",
  status: "Modern Commercial Lifestyle",
  price: "Price on Request",
  bedrooms: "Studio Spaces",
  bathrooms: "Modern Interiors",
  area: "Flexible Space Options",
  parking: "Parking Availability on Request",
  image:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85",
};

const features = [
  {
    icon: <FaGem />,
    title: "Contemporary Architecture",
    text:
      "Modern design, refined finishes and thoughtfully planned spaces for professional and commercial needs.",
  },
  {
    icon: <FaTree />,
    title: "Comfortable Environment",
    text:
      "A welcoming atmosphere designed to support productive work, client meetings and everyday convenience.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Safety & Convenience",
    text:
      "Explore practical facilities and security arrangements, with amenities subject to project specifications.",
  },
  {
    icon: <FaRegCompass />,
    title: "Strategic Location",
    text:
      "Discover commercial and studio space options in Ghaziabad with location details available on enquiry.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SayaPage() {
  return (
    <main className="saya-page">
      <Navbar />
      <FloatingSocial />

      {/* Hero Section */}
      <section className="saya-hero">
        <div className="saya-ambient saya-ambient-one" />
        <div className="saya-ambient saya-ambient-two" />

        <div className="saya-container">
          <motion.div
            className="saya-breadcrumb"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Our Projects</span>
            <span>/</span>
            <span className="saya-breadcrumb-active">
              The Kingdom Home
            </span>
          </motion.div>

          <div className="saya-hero-grid">
            {/* Left: Project Information */}
            <motion.div
              className="saya-intro"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="saya-eyebrow"
                variants={itemVariants}
              >
                <span className="saya-eyebrow-line" />
                <span>EXCLUSIVE COMMERCIAL COLLECTION</span>
              </motion.div>

              <motion.div
                className="saya-brand"
                variants={itemVariants}
              >
                <div className="saya-brand-icon">
                  <FaBuilding />
                </div>

                <div className="saya-brand-copy">
                  <span className="saya-brand-name">
                    THE KINGDOM HOME
                  </span>
                  <span className="saya-brand-caption">
                    STUDIO & COMMERCIAL SPACES
                  </span>
                </div>
              </motion.div>

              <motion.h1 variants={itemVariants}>
                A New Standard of{" "}
                <span>Modern Workspaces.</span>
              </motion.h1>

              <motion.p
                className="saya-hero-description"
                variants={itemVariants}
              >
                {property.subtitle} Explore thoughtfully designed
                studio and commercial spaces that bring together
                functionality, contemporary style and professional
                convenience for your business journey.
              </motion.p>

              <motion.div
                className="saya-location"
                variants={itemVariants}
              >
                <FaLocationDot />
                <span>{property.location}</span>
              </motion.div>

              <motion.div
                className="saya-price-block"
                variants={itemVariants}
              >
                <span className="saya-label">
                  COMMERCIAL INVESTMENT DETAILS
                </span>
                <h2>{property.price}</h2>
                <span className="saya-price-note">
                  Enquire for current availability, unit sizes
                  and pricing.
                </span>
              </motion.div>

              <motion.div
                className="saya-hero-actions"
                variants={itemVariants}
              >
                <Link href="/contact" className="saya-primary-btn">
                  <FaPhone />
                  <span>Contact Our Property Team</span>
                  <FaArrowRight className="saya-btn-arrow" />
                </Link>

                <a
                  href="#saya-overview"
                  className="saya-secondary-btn"
                >
                  Explore Spaces
                  <FaArrowRight />
                </a>
              </motion.div>

              <motion.div
                className="saya-trust-note"
                variants={itemVariants}
              >
                <span className="saya-trust-icon">
                  <FaCheck />
                </span>
                <span>
                  Personal guidance for your commercial property search
                </span>
              </motion.div>
            </motion.div>

            {/* Right: Main Commercial Space Image */}
            <motion.div
              className="saya-visual"
              initial={{ opacity: 0, scale: 0.94, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="saya-image-frame">
                <img
                  className="saya-property-image"
                  src={property.image}
                  alt="Contemporary commercial workspace interior"
                />

                <div className="saya-image-shade" />

                <div className="saya-image-top">
                  <span className="saya-image-tag">
                    <FaGem />
                    PREMIUM COMMERCIAL SPACES
                  </span>
                  <span className="saya-image-index">
                    01 / 01
                  </span>
                </div>

                <div className="saya-image-bottom">
                  <span className="saya-image-location">
                    <FaLocationDot />
                    GHAZIABAD, U.P.
                  </span>
                  <h2>Space to Build Your Vision.</h2>
                  <p>Business. Flexibility. Opportunity.</p>
                </div>
              </div>

              <div className="saya-image-outline" />

              <div className="saya-floating-card">
                <div className="saya-floating-icon">
                  <FaBuilding />
                </div>
                <div>
                  <span>YOUR NEXT BUSINESS ADDRESS</span>
                  <strong>Starts Here</strong>
                </div>
                <FaArrowRight className="saya-floating-arrow" />
              </div>

              <div className="saya-image-decoration">
                KINGDOM <span>•</span> COMMERCIAL
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <motion.section
        className="saya-overview saya-container"
        id="saya-overview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div
          className="saya-section-heading"
          variants={itemVariants}
        >
          <div>
            <span className="saya-eyebrow">
              <span className="saya-eyebrow-line" />
              PROJECT OVERVIEW
            </span>

            <h2>
              The Right Space for{" "}
              <span>Your Next Move.</span>
            </h2>
          </div>

          <p>
            Discover flexible studio and commercial space options
            designed around business needs, practical layouts
            and professional convenience.
          </p>
        </motion.div>

        <motion.div
          className="saya-spec-grid"
          variants={containerVariants}
        >
          <motion.div
            className="saya-spec-card"
            variants={itemVariants}
          >
            <span className="saya-spec-icon">
              <FaBuilding />
            </span>
            <span className="saya-spec-label">
              PROPERTY TYPE
            </span>
            <strong>Commercial</strong>
            <small>Studio & business spaces</small>
          </motion.div>

          <motion.div
            className="saya-spec-card"
            variants={itemVariants}
          >
            <span className="saya-spec-icon">
              <FaHouse />
            </span>
            <span className="saya-spec-label">
              SPACE OPTIONS
            </span>
            <strong>Studio Spaces</strong>
            <small>Confirm available configurations</small>
          </motion.div>

          <motion.div
            className="saya-spec-card"
            variants={itemVariants}
          >
            <span className="saya-spec-icon">
              <FaRulerCombined />
            </span>
            <span className="saya-spec-label">
              SPACE & DESIGN
            </span>
            <strong>Flexible Layouts</strong>
            <small>Unit sizes available on enquiry</small>
          </motion.div>

          <motion.div
            className="saya-spec-card"
            variants={itemVariants}
          >
            <span className="saya-spec-icon">
              <FaCar />
            </span>
            <span className="saya-spec-label">
              CONVENIENCE
            </span>
            <strong>Parking Facilities</strong>
            <small>Confirm availability with the team</small>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Project */}
      <section className="saya-about-section">
        <div className="saya-container saya-about-grid">
          <motion.div
            className="saya-about-copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <span className="saya-eyebrow">
              <span className="saya-eyebrow-line" />
              THE KINGDOM HOME EXPERIENCE
            </span>

            <h2>
              More Than a Space.
              <br />
              <span>A Business Opportunity.</span>
            </h2>

            <p>
              The right commercial space can be an important
              step towards your next business goal. From a
              professional studio to a space for commercial
              activities, choosing the right location and layout
              matters.
            </p>

            <p>
              Explore the available space options at The Kingdom
              Home, discuss your requirements and get personalised
              guidance about unit sizes, pricing, facilities
              and availability.
            </p>

            <Link href="/contact" className="saya-text-link">
              Discuss Your Space Requirements
              <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div
            className="saya-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {features.map((feature, index) => (
              <motion.article
                className="saya-feature"
                key={feature.title}
                variants={itemVariants}
              >
                <span className="saya-feature-icon">
                  {feature.icon}
                </span>

                <div>
                  <span className="saya-feature-number">
                    0{index + 1}
                  </span>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>

                <FaArrowRight className="saya-feature-arrow" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <motion.section
        className="saya-contact-section saya-container"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="saya-contact-card">
          <div className="saya-contact-glow" />

          <div className="saya-contact-logo">
            <FaBuilding />
          </div>

          <div className="saya-contact-copy">
            <span className="saya-eyebrow">
              YOUR NEXT BUSINESS SPACE STARTS HERE
            </span>

            <h2>
              Discover Your Space at{" "}
              <span>The Kingdom Home.</span>
            </h2>

            <p>
              Connect with our property team for studio and
              commercial space details, available units, pricing,
              facilities and personalised assistance.
            </p>
          </div>

          <Link
            href="/contact"
            className="saya-primary-btn saya-contact-btn"
          >
            Contact Our Property Team
            <FaArrowRight className="saya-btn-arrow" />
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
