"use client";

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
import "./SayaPage.css";
import FloatingSocial from "../../Components/FloatingSocial/FloatingSocial";

const property = {
  name: "SAYA",
  title: "A New Standard of Luxury Living",
  subtitle: "Where timeless elegance meets modern architecture.",
  location: "Dhuai NH-58 , Ghaziabad, Uttar Pradesh",
  type: "Premium Residential Development",
  status: "Premium Lifestyle",
  price: "Price on Request",
  bedrooms: "2, 3 & 4 BHK",
  bathrooms: "Premium Interiors",
  area: "Spacious Layouts",
  parking: "Dedicated Parking",
  image:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85",
};

const features = [
  {
    icon: <FaGem />,
    title: "Premium Architecture",
    text: "Contemporary design, elegant finishes and thoughtfully planned living spaces.",
  },
  {
    icon: <FaTree />,
    title: "Green Surroundings",
    text: "Enjoy a refreshing atmosphere with landscaped outdoor spaces and greenery.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Secure Living",
    text: "A lifestyle focused on privacy, comfort and peace of mind.",
  },
  {
    icon: <FaRegCompass />,
    title: "Connected Location",
    text: "Explore residential convenience with access to everyday essentials nearby.",
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
            <span className="saya-breadcrumb-active">Saya</span>
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
                <span>EXCLUSIVE PROPERTY COLLECTION</span>
              </motion.div>

              <motion.div
                className="saya-brand"
                variants={itemVariants}
              >
                <div className="saya-brand-icon">
                  <FaBuilding />
                </div>

                <div className="saya-brand-copy">
                  <span className="saya-brand-name">SAYA</span>
                  <span className="saya-brand-caption">
                    LUXURY RESIDENCES
                  </span>
                </div>
              </motion.div>

              <motion.h1 variants={itemVariants}>
                A New Standard of{" "}
                <span>Luxury Living.</span>
              </motion.h1>

              <motion.p
                className="saya-hero-description"
                variants={itemVariants}
              >
                {property.subtitle} Discover thoughtfully designed
                residences that bring together sophistication, comfort
                and a lifestyle designed around you.
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
                <span className="saya-label">INVESTMENT DETAILS</span>
                <h2>{property.price}</h2>
                <span className="saya-price-note">
                  Enquire for current availability and pricing.
                </span>
              </motion.div>

              <motion.div
                className="saya-hero-actions"
                variants={itemVariants}
              >
                <Link href="/contact" className="saya-primary-btn">
                  <FaPhone />
                  <span>Contact Your Trusted Agent</span>
                  <FaArrowRight className="saya-btn-arrow" />
                </Link>

                <a href="#saya-overview" className="saya-secondary-btn">
                  Explore Project
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
                  Personal guidance for your property journey
                </span>
              </motion.div>
            </motion.div>

            {/* Right: One Main Property Image */}
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
                  alt="Luxury contemporary residential property"
                />

                <div className="saya-image-shade" />

                <div className="saya-image-top">
                  <span className="saya-image-tag">
                    <FaGem />
                    PREMIUM RESIDENCES
                  </span>
                  <span className="saya-image-index">01 / 01</span>
                </div>

                <div className="saya-image-bottom">
                  <span className="saya-image-location">
                    <FaLocationDot />
                    GHAZIABAD, U.P.
                  </span>
                  <h2>Live Beyond Ordinary.</h2>
                  <p>Space. Serenity. Sophistication.</p>
                </div>
              </div>

              <div className="saya-image-outline" />

              <div className="saya-floating-card">
                <div className="saya-floating-icon">
                  <FaHouse />
                </div>
                <div>
                  <span>YOUR NEXT ADDRESS</span>
                  <strong>Starts Here</strong>
                </div>
                <FaArrowRight className="saya-floating-arrow" />
              </div>

              <div className="saya-image-decoration">
                SAYA <span>•</span> RESIDENCES
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
              Designed Around <span>Your Lifestyle.</span>
            </h2>
          </div>

          <p>
            A closer look at the spaces, comfort and everyday convenience
            that matter when choosing your next home.
          </p>
        </motion.div>

        <motion.div
          className="saya-spec-grid"
          variants={containerVariants}
        >
          <motion.div className="saya-spec-card" variants={itemVariants}>
            <span className="saya-spec-icon">
              <FaBuilding />
            </span>
            <span className="saya-spec-label">PROPERTY TYPE</span>
            <strong>Residential</strong>
            <small>Premium development</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={itemVariants}>
            <span className="saya-spec-icon">
              <FaBed />
            </span>
            <span className="saya-spec-label">CONFIGURATION</span>
            <strong>{property.bedrooms}</strong>
            <small>Multiple layout options</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={itemVariants}>
            <span className="saya-spec-icon">
              <FaRulerCombined />
            </span>
            <span className="saya-spec-label">SPACE & DESIGN</span>
            <strong>Modern Layouts</strong>
            <small>Comfort-led planning</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={itemVariants}>
            <span className="saya-spec-icon">
              <FaCar />
            </span>
            <span className="saya-spec-label">CONVENIENCE</span>
            <strong>Parking Options</strong>
            <small>Confirm with the agent</small>
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
              THE SAYA EXPERIENCE
            </span>

            <h2>
              More Than a Home.
              <br />
              <span>A Way of Living.</span>
            </h2>

            <p>
              Finding the right property is about more than four walls.
              It is about choosing a space that reflects your ambitions,
              supports your lifestyle and feels right for the years ahead.
            </p>

            <p>
              Explore residential options, understand the available
              configurations and get personalised guidance to help you
              make a confident property decision.
            </p>

            <Link href="/contact" className="saya-text-link">
              Discuss Your Requirements
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
                <span className="saya-feature-icon">{feature.icon}</span>
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
              YOUR PROPERTY JOURNEY STARTS HERE
            </span>
            <h2>
              Find Your Place in <span>Saya.</span>
            </h2>
            <p>
              Connect with our property team for project information,
              available units, pricing and personalised assistance.
            </p>
          </div>

          <Link href="/contact" className="saya-primary-btn saya-contact-btn">
            Contact Your Trusted Agent
            <FaArrowRight className="saya-btn-arrow" />
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
