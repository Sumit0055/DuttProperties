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
  FaShieldHalved,
  FaTree,
  FaGem,
  FaCheck,
  FaHouse,
  FaPhone,
  FaRegCompass,
  FaLandmark,
  FaFileCircleCheck,
  FaCity,
  FaPlay,
  FaKey,
} from "react-icons/fa6";

import Navbar from "../../Components/Header/Navbar";
import FloatingSocial from "../../Components/FloatingSocial/FloatingSocial";
import "../Vvip/vvip.css";
// import "./gda-residential.css";

const property = {
  name: "GDA RESIDENTIAL",
  title: "Residential Plots & Flats in Ghaziabad",
  subtitle:
    "Explore residential property options in Ghaziabad and find a space that fits your plans for the future.",
  location: "Ghaziabad, Uttar Pradesh, India",
  propertyTypes: ["Residential Plots", "Residential Flats"],
  price: "Price on Request",
  area: "Confirm Available Options",
  image:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85",
  video: "/video/vvipVideo.mp4",
};

const features = [
  {
    icon: <FaLandmark />,
    title: "Approval Verification",
    text: "Ask for the applicable GDA approval details and supporting documents for the specific property.",
  },
  {
    icon: <FaHouse />,
    title: "Plots & Flats",
    text: "Explore available residential land and apartment options according to your requirements.",
  },
  {
    icon: <FaRegCompass />,
    title: "Location & Connectivity",
    text: "Review the exact property location, nearby facilities and road connectivity before deciding.",
  },
  {
    icon: <FaFileCircleCheck />,
    title: "Property Documentation",
    text: "Request relevant title, ownership, approval and registration documents for independent verification.",
  },
];

const variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const propertyOptions = [
  {
    number: "01",
    icon: <FaRulerCombined />,
    title: "Residential Plots",
    subtitle: "Build a home around your vision.",
    description:
      "Explore available residential plots and compare their location, plot dimensions, land-use status and applicable development approvals.",
    points: [
      "Available plot sizes to be confirmed",
      "Location and layout details",
      "Ownership and title verification",
    ],
  },
  {
    number: "02",
    icon: <FaBuilding />,
    title: "Residential Flats",
    subtitle: "Discover your next home.",
    description:
      "Explore residential apartments based on your preferred configuration, usable area, budget and location requirements.",
    points: [
      "Available BHK options to be confirmed",
      "Apartment area and floor details",
      "Price and possession status to be confirmed",
    ],
  },
];

export default function Gda() {
  return (
    <main className="saya-page gda-page">
      <Navbar />
      <FloatingSocial />

      {/* HERO */}
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
              GDA Residential
            </span>
          </motion.div>

          <div className="saya-hero-grid">
            {/* PROJECT INFORMATION */}
            <motion.div
              className="saya-intro"
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="saya-eyebrow" variants={item}>
                <span className="saya-eyebrow-line" />
                <span>RESIDENTIAL PROPERTY COLLECTION</span>
              </motion.div>

              <motion.div className="saya-brand" variants={item}>
                <div className="saya-brand-icon">
                  <FaCity />
                </div>

                <div className="saya-brand-copy">
                  <span className="saya-brand-name">
                    GDA RESIDENTIAL
                  </span>
                  <span className="saya-brand-caption">
                    PLOTS &amp; APARTMENTS
                  </span>
                </div>
              </motion.div>

              <motion.h1 variants={item}>
                Find Your Space.
                <br />
                <span>Build Your Future.</span>
              </motion.h1>

              <motion.p
                className="saya-hero-description"
                variants={item}
              >
                {property.subtitle} Discover residential plots and flats
                in Ghaziabad, with property details and applicable
                approval information to review before making a decision.
              </motion.p>

              <motion.div className="saya-location" variants={item}>
                <FaLocationDot />
                <span>{property.location}</span>
              </motion.div>

              <motion.div
                className="saya-price-block"
                variants={item}
              >
                <span className="saya-label">
                  PROPERTY &amp; INVESTMENT DETAILS
                </span>
                <h2>{property.price}</h2>
                <span className="saya-price-note">
                  Contact us for current listings, pricing and
                  property-specific documentation.
                </span>
              </motion.div>

              <motion.div className="saya-hero-actions" variants={item}>
                <Link href="/contact" className="saya-primary-btn">
                  <FaPhone />
                  <span>Contact Your Trusted Agent</span>
                  <FaArrowRight className="saya-btn-arrow" />
                </Link>

                <a href="#gda-overview" className="saya-secondary-btn">
                  Explore Properties
                  <FaArrowRight />
                </a>
              </motion.div>

              <motion.div className="saya-trust-note" variants={item}>
                <span className="saya-trust-icon">
                  <FaCheck />
                </span>
                <span>
                  Get property details before making your decision
                </span>
              </motion.div>
            </motion.div>

            {/* HERO IMAGE */}
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
                  alt="Residential architecture representing property options in Ghaziabad"
                />

                <div className="saya-image-shade" />

                <div className="saya-image-top">
                  <span className="saya-image-tag">
                    <FaGem />
                    RESIDENTIAL COLLECTION
                  </span>
                  <span className="saya-image-index">01 / 01</span>
                </div>

                <div className="saya-image-bottom">
                  <span className="saya-image-location">
                    <FaLocationDot />
                    GHAZIABAD, UTTAR PRADESH
                  </span>
                  <h2>Your Future Starts Here.</h2>
                  <p>Explore. Compare. Decide.</p>
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
                GDA RESIDENTIAL <span>•</span> GHAZIABAD
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <motion.section
        className="saya-overview saya-container"
        id="gda-overview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={variants}
      >
        <motion.div
          className="saya-section-heading"
          variants={item}
        >
          <div>
            <span className="saya-eyebrow">
              <span className="saya-eyebrow-line" />
              PROPERTY OVERVIEW
            </span>
            <h2>
              Explore Your <span>Options.</span>
            </h2>
          </div>

          <p>
            Compare residential land and apartment options. Confirm
            property-specific details, pricing and legal documents
            before proceeding.
          </p>
        </motion.div>

        <motion.div
          className="saya-spec-grid"
          variants={variants}
        >
          <motion.div className="saya-spec-card" variants={item}>
            <span className="saya-spec-icon">
              <FaLandmark />
            </span>
            <span className="saya-spec-label">APPROVAL STATUS</span>
            <strong>Verify Documents</strong>
            <small>Check the specific property</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={item}>
            <span className="saya-spec-icon">
              <FaBuilding />
            </span>
            <span className="saya-spec-label">PROPERTY TYPES</span>
            <strong>Plots &amp; Flats</strong>
            <small>Residential options</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={item}>
            <span className="saya-spec-icon">
              <FaRulerCombined />
            </span>
            <span className="saya-spec-label">AREA &amp; LAYOUT</span>
            <strong>Multiple Options</strong>
            <small>Confirm available dimensions</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={item}>
            <span className="saya-spec-icon">
              <FaLocationDot />
            </span>
            <span className="saya-spec-label">LOCATION</span>
            <strong>Ghaziabad</strong>
            <small>Uttar Pradesh, India</small>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* PLOTS AND FLATS */}
      <section className="saya-about-section gda-options-section">
        <div className="saya-container">
          <motion.div
            className="saya-section-heading gda-options-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="saya-eyebrow">
                <span className="saya-eyebrow-line" />
                RESIDENTIAL PROPERTY OPTIONS
              </span>

              <h2>
                Choose What <span>Fits Your Future.</span>
              </h2>
            </div>

            <p>
              Whether you want land for a future home or a ready-to-explore
              apartment, start by reviewing the available listings.
            </p>
          </motion.div>

          <motion.div
            className="gda-options-grid"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {propertyOptions.map((option) => (
              <motion.article
                className="gda-option-card"
                key={option.number}
                variants={item}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
              >
                <div className="gda-option-top">
                  <span className="gda-option-number">
                    {option.number}
                  </span>
                  <span className="gda-option-icon">
                    {option.icon}
                  </span>
                </div>

                <span className="saya-spec-label">
                  RESIDENTIAL PROPERTY
                </span>

                <h3>{option.title}</h3>
                <h4>{option.subtitle}</h4>
                <p>{option.description}</p>

                <div className="gda-option-divider" />

                <div className="gda-option-details">
                  {option.points.map((point) => (
                    <div key={point}>
                      <FaCheck />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="gda-option-link">
                  Enquire About {option.title}
                  <FaArrowRight />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DOCUMENT VERIFICATION */}
      <section className="gda-verification-section">
        <div className="saya-container">
          <motion.div
            className="gda-verification-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gda-verification-icon">
              <FaFileCircleCheck />
            </div>

            <div className="gda-verification-copy">
              <span className="saya-eyebrow">
                PROPERTY DUE DILIGENCE
              </span>

              <h2>
                Verify Before You <span>Invest.</span>
              </h2>

              <p>
                The phrase “GDA approved” should be supported by documents
                applicable to the particular plot or apartment. Request
                the approval reference, sanctioned layout or building plan
                where applicable, title documents and relevant registration
                details. Verify them independently with the appropriate
                authority or a qualified property lawyer.
              </p>

              <Link href="/contact" className="saya-text-link">
                Request Property Details
                <FaArrowRight />
              </Link>
            </div>

            <div className="gda-verification-watermark">
              <FaShieldHalved />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROPERTY VIDEO */}
      <section className="lvp-section gda-video-section">
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
              Discover <span>Ghaziabad Living.</span>
            </h2>

            <p>
              Add your property walkthrough or project presentation
              to showcase the actual residential options.
            </p>
          </motion.div>

          <motion.div
            className="lvp-player-shell gda-video-shell"
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
                  <strong>GDA Residential</strong>
                  <small>PROPERTY SHOWCASE</small>
                </span>
              </div>

              <span className="lvp-quality">
                <span /> RESIDENTIAL COLLECTION
              </span>
            </div>

            <div className="lvp-video-stage">
              <video
                className="lvp-video"
                src={property.video}
                poster={property.image}
                controls
                playsInline
                preload="metadata"
              />

              <div className="lvp-video-vignette" />

              <div className="gda-video-caption">
                <span>YOUR NEXT PROPERTY JOURNEY</span>
                <h3>Find Your Place.</h3>
                <p>Ghaziabad, Uttar Pradesh</p>
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
              <strong>Looking for a plot or flat?</strong>
              <br />
              Share your requirements to explore available listings.
            </p>

            <Link href="/contact" className="lvp-cta">
              Enquire Now <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY EXPLORE */}
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
              YOUR PROPERTY JOURNEY
            </span>

            <h2>
              More Clarity.
              <br />
              <span>More Confidence.</span>
            </h2>

            <p>
              Choosing a property involves more than location and price.
              Understanding the exact property details, applicable
              approvals, ownership and documentation helps you make
              a more informed decision.
            </p>

            <p>
              Compare available plots and flats, request relevant records
              and arrange a property visit before deciding which option
              suits your needs.
            </p>

            <Link href="/contact" className="saya-text-link">
              Discuss Your Requirements
              <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div
            className="saya-features"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {features.map((feature, index) => (
              <motion.article
                className="saya-feature"
                key={feature.title}
                variants={item}
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

      {/* CONTACT CTA */}
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
              Find Your Next <span>Address.</span>
            </h2>

            <p>
              Connect with our property team for available residential
              plots and flats, pricing, site visits and applicable
              property documentation .
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
