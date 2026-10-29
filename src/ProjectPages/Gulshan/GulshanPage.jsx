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
  FaBookOpen,
  FaCouch,
  FaPlay,
} from "react-icons/fa6";

import Navbar from "../../Components/Header/Navbar";
import FloatingSocial from "../../Components/FloatingSocial/FloatingSocial";
import "../Vvip/vvip.css";

const property = {
  name: "GULSHAN",
  title: "Elevated Living at Gulshan",
  subtitle:
    "Thoughtfully planned residences designed around space, comfort and contemporary living.",
  location: "Madhuban Bapudham, Ghaziabad, Uttar Pradesh",
  type: "Residential Apartments",
  configurations: [
    "3 BHK + 2 Toilets",
    "3 BHK + 3 Toilets",
    "3 BHK + 3 Toilets + Study",
  ],
  area: "1,510 – 2,150 sq. ft.",
  price: "Price on Request",
  image:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85",
  video: "/video/vvipVideo.mp4",
};

const features = [
  {
    icon: <FaGem />,
    title: "Contemporary Architecture",
    text: "Explore thoughtfully presented residences with a focus on modern design and everyday comfort.",
  },
  {
    icon: <FaTree />,
    title: "Lifestyle & Comfort",
    text: "Discover a residential environment designed around comfort, relaxation and daily living.",
  },
  {
    icon: <FaShieldHalved />,
    title: "Peace of Mind",
    text: "Ask the property team about available security features, facilities and community amenities.",
  },
  {
    icon: <FaRegCompass />,
    title: "Madhuban Bapudham Location",
    text: "Explore the neighbourhood and check connectivity to essential services and daily conveniences.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function GulshanPage() {
  return (
    <main className="saya-page gulshan-page">
      <Navbar />
      <FloatingSocial />

      {/* HERO SECTION */}
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
            <span className="saya-breadcrumb-active">Gulshan</span>
          </motion.div>

          <div className="saya-hero-grid">
            {/* LEFT CONTENT */}
            <motion.div
              className="saya-intro"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="saya-eyebrow" variants={itemVariants}>
                <span className="saya-eyebrow-line" />
                <span>EXCLUSIVE PROPERTY COLLECTION</span>
              </motion.div>

              <motion.div className="saya-brand" variants={itemVariants}>
                <div className="saya-brand-icon">
                  <FaBuilding />
                </div>

                <div className="saya-brand-copy">
                  <span className="saya-brand-name">GULSHAN</span>
                  <span className="saya-brand-caption">
                    PREMIUM RESIDENCES
                  </span>
                </div>
              </motion.div>

              <motion.h1 variants={itemVariants}>
                Space to Live.
                <br />
                <span>Room to Grow.</span>
              </motion.h1>

              <motion.p
                className="saya-hero-description"
                variants={itemVariants}
              >
                {property.subtitle} Discover 3 BHK apartment configurations
                at Gulshan, Madhuban Bapudham, Ghaziabad, with layouts
                ranging from 1,510 to 2,150 sq. ft.
              </motion.p>

              <motion.div className="saya-location" variants={itemVariants}>
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
                  Contact us for current prices, availability and booking details.
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

                <a href="#gulshan-overview" className="saya-secondary-btn">
                  Explore Project
                  <FaArrowRight />
                </a>
              </motion.div>

              <motion.div className="saya-trust-note" variants={itemVariants}>
                <span className="saya-trust-icon">
                  <FaCheck />
                </span>
                <span>Personal guidance for your property journey</span>
              </motion.div>
            </motion.div>

            {/* RIGHT PROPERTY IMAGE */}
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
                  alt="Contemporary residential architecture representing Gulshan apartments"
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
                    MADHUBAN BAPUDHAM, GHAZIABAD
                  </span>
                  <h2>Your Space. Your Story.</h2>
                  <p>Comfort. Space. Possibilities.</p>
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
                GULSHAN <span>•</span> RESIDENCES
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <motion.section
        className="saya-overview saya-container"
        id="gulshan-overview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div className="saya-section-heading" variants={itemVariants}>
          <div>
            <span className="saya-eyebrow">
              <span className="saya-eyebrow-line" />
              PROJECT OVERVIEW
            </span>

            <h2>
              Discover Your <span>Perfect Space.</span>
            </h2>
          </div>

          <p>
            Explore apartment configurations and floor-area options to find
            a layout that suits your family&apos;s requirements.
          </p>
        </motion.div>

        <motion.div className="saya-spec-grid" variants={containerVariants}>
          <motion.div className="saya-spec-card" variants={itemVariants}>
            <span className="saya-spec-icon">
              <FaBuilding />
            </span>
            <span className="saya-spec-label">PROPERTY TYPE</span>
            <strong>3 BHK Apartments</strong>
            <small>Residential living</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={itemVariants}>
            <span className="saya-spec-icon">
              <FaBath />
            </span>
            <span className="saya-spec-label">CONFIGURATIONS</span>
            <strong>2T &amp; 3T Options</strong>
            <small>Study option also available</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={itemVariants}>
            <span className="saya-spec-icon">
              <FaRulerCombined />
            </span>
            <span className="saya-spec-label">APARTMENT AREA</span>
            <strong>1,510–2,150</strong>
            <small>Sq. ft. — area range provided</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={itemVariants}>
            <span className="saya-spec-icon">
              <FaLocationDot />
            </span>
            <span className="saya-spec-label">PROJECT LOCATION</span>
            <strong>Ghaziabad</strong>
            <small>Madhuban Bapudham, Uttar Pradesh</small>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CONFIGURATION SECTION */}
      <section className="saya-about-section gulshan-config-section">
        <div className="saya-container">
          <motion.div
            className="saya-section-heading gulshan-config-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="saya-eyebrow">
                <span className="saya-eyebrow-line" />
                APARTMENT CONFIGURATIONS
              </span>

              <h2>
                More Space for <span>Every Lifestyle.</span>
              </h2>
            </div>

            <p>
              Compare the three configurations and enquire about the
              availability of your preferred apartment.
            </p>
          </motion.div>

          <motion.div
            className="gulshan-layout-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {property.configurations.map((configuration, index) => (
              <motion.article
                className="gulshan-layout-card"
                key={configuration}
                variants={itemVariants}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
              >
                <div className="gulshan-layout-top">
                  <span className="gulshan-layout-number">
                    0{index + 1}
                  </span>
                  <span className="gulshan-layout-icon">
                    {index === 2 ? <FaBookOpen /> : <FaBed />}
                  </span>
                </div>

                <span className="saya-spec-label">APARTMENT OPTION</span>

                <h3>{configuration}</h3>

                <p>
                  {index === 0
                    ? "A practical family layout with three bedrooms and two toilets."
                    : index === 1
                    ? "Three bedrooms with three toilets for additional convenience."
                    : "Three bedrooms, three toilets and a dedicated study option."}
                </p>

                <div className="gulshan-layout-divider" />

                <div className="gulshan-layout-detail">
                  <span>
                    <FaBed /> 3 Bedrooms
                  </span>
                  <span>
                    <FaBath /> {index === 0 ? "2 Toilets" : "3 Toilets"}
                  </span>
                  {index === 2 && (
                    <span>
                      <FaBookOpen /> Study
                    </span>
                  )}
                </div>

                <Link href="/contact" className="gulshan-layout-link">
                  Enquire About This Layout
                  <FaArrowRight />
                </Link>
              </motion.article>
            ))}
          </motion.div>

          <p className="gulshan-area-note">
            <FaRulerCombined />
            <span>
              <strong>Area range:</strong> 1,510–2,150 sq. ft. Confirm the
              exact area and configuration of each available unit with the
              property team.
            </span>
          </p>
        </div>
      </section>

      {/* PROPERTY VIDEO */}
      <section className="lvp-section" aria-label="Gulshan property video">
        <div className="lvp-orb lvp-orb-one" aria-hidden="true" />
        <div className="lvp-orb lvp-orb-two" aria-hidden="true" />

        <div className="lvp-container">
          <motion.div
            className="lvp-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="lvp-kicker">
              <span /> PROPERTY FILM
            </span>

            <h2>
              Experience <span>Gulshan.</span>
            </h2>

            <p>
              Explore the property through a dedicated video showcase.
            </p>
          </motion.div>

          <motion.div
            className="lvp-player-shell gulshan-video-shell"
            initial={{ opacity: 0, y: 30, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lvp-player-topline">
              <div className="lvp-project-mark">
                <span className="lvp-mark-icon">
                  <FaBuilding />
                </span>
                <span>
                  <strong>Gulshan</strong>
                  <small>RESIDENCE FILM</small>
                </span>
              </div>

              <span className="lvp-quality">
                <span /> PROPERTY SHOWCASE
              </span>
            </div>

            <div className="lvp-video-stage">
              <video
                className="lvp-video"
                // src={property.video}
                src="/video/vvipVideo.mp4"
                poster={property.image}
                controls
                playsInline
                preload="metadata"
              />

              <div className="lvp-video-vignette" aria-hidden="true" />

              <div className="gulshan-video-caption">
                <span>DISCOVER YOUR NEXT HOME</span>
                <h3>Gulshan Residences</h3>
                <p>Madhuban Bapudham, Ghaziabad</p>
              </div>
            </div>

            <div className="lvp-player-caption">
              <div className="lvp-caption-location">
                <FaLocationDot />
                <span>{property.location}</span>
              </div>

              <div className="lvp-caption-note">
                <span className="lvp-live-dot" />
                PROPERTY EXPERIENCE
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lvp-bottom-row"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <p>
              <strong>See yourself here?</strong>
              <br />
              Ask about available apartments and arrange a property visit.
            </p>

            <Link href="/contact" className="lvp-cta">
              Enquire About Gulshan <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT GULSHAN */}
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
              THE GULSHAN EXPERIENCE
            </span>

            <h2>
              A Home That Fits.
              <br />
              <span>A Lifestyle That Grows.</span>
            </h2>

            <p>
              The right home gives your family room to relax, connect and
              plan for the future. Gulshan offers multiple 3 BHK configuration
              options to explore according to your space requirements.
            </p>

            <p>
              Compare layouts, enquire about the available area range and
              get personalised assistance before making your property decision.
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

      {/* PROJECT CONTACT CTA */}
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
              Make Room for <span>Something Better.</span>
            </h2>

            <p>
              Contact our property team for apartment configurations,
              area details, current pricing and availability at Gulshan.
            </p>
          </div>

          <Link href="/contact" className="saya-primary-btn saya-contact-btn">
            <FaPhone />
            Contact Your Trusted Agent
            <FaArrowRight className="saya-btn-arrow" />
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
