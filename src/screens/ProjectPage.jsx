"use client";


import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  CheckCircle2,
  MapPin,
  Maximize2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "../Components/Header/Navbar";
// import "./ProjectPage.css";

const projects = [
  {
    id: "01",
    title: "Apex Sky Heights / Apex Group",
    subtitle: "Elevated Living. Exceptional Lifestyle.",
    location: "Raj Nagar Extension, Ghaziabad, Uttar Pradesh",
    type: "Residential",
    category: "Apartments",
    area: "1,150–1,850 sq.ft.",
    bhk: "2 & 3 BHK",
    status: "Premium Living",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    description:
      "Thoughtfully planned residences with contemporary architecture, open spaces and lifestyle-focused amenities.",
    amenities: [ "Landscaped Gardens", "Parking"],
    featured: true,
  },
  {
    id: "02",
    title: "Ar Domain",
    subtitle: "A Refined Address for Modern Families.",
    location: "HumTum Road Village Morta, Ghaziabad, Uttar Pradesh",
    type: "Residential",
    category: "Apartments",
    // price: "₹85 Lakh onwards",
    area: "2,055 –2,420 sq.ft.",
    bhk: "3 BHK , 3 BHK + 3 Toilet & 4 BHK",
    status: "Luxury Collection",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    description:
      "Spacious layouts, elegant interiors and an aspirational residential environment designed around everyday comfort.",
    amenities: ["Part Lawn", "Security Cabin", "Kids Play Area","Swimming Pool","Pool Deck","Senior Citizen Garden","Half Basket Ball Court"],
  },
  {
    id: "03",
    title: "The Kingdom Homes ",
    subtitle: "Privacy, Space and Timeless Elegance.",
    location: "Raj Nagar Extension, Ghaziabad, Uttar Pradesh",
    type: "Residential",
    category: "Studio Commercial Space Appartment ",
    // price: "₹1.45 Crore onwards",
    area: "800–2,000 sq.ft.",
    bhk: "3 & 4 BHK",
    // status: "Exclusiv",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85",
    description:
      "Independent-home inspiration with generous living spaces, modern architecture and a focus on privacy.",
    amenities: ["Private Outdoor Space", "Parking", "Modern Design"],
  },
  {
    id: "04",
    title: "GDA Approved Ploat / Flat",
    subtitle: "Business Spaces Built for Ambition.",
    location: "Govindpuram , Ghaziabad , Uttar Paredesh",
    type: "Commercial",
    category: "Commercial",
    // price: "₹45 Lakh onwards",
    area: "Budget According",
    bhk: "Ploat / Flat",
    status: "Residential",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  description:
    "Residential plots in Ghaziabad for buyers looking to build their dream home, with applicable GDA approval and property documents to be verified before purchase.",
  amenities: [
    "Residential Plot Options",
    "GDA Approval Verification",
    "Property Document Verification",
  ],
  },
  {
    id: "05",
    title: "Serene Green Estates",
    subtitle: "More Space. A Closer Connection to Nature.",
    location: "NH-58 Highway, Ghaziabad Region, Uttar Pradesh",
    type: "Land",
    category: "Plots",
    area: "Plot sizes vary",
    bhk: "Residential Plots",
    status: "Plot Opportunities",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85",
    description:
      "Explore plot opportunities with a focus on location, development permissions and long-term suitability.",
    amenities: ["Plot Options", "Location Guidance", "Documentation Support"],
  },
  {
    id: "06",
    title: "Saya",
    subtitle: "Luxury Appartment.",
    location: "Dhuai NH-58, Ghaziabad, Uttar Pradesh",
    type: "Residential",
    category: "Apartments",
    // price: "₹58 Lakh onwards",
    area: "1,000–2,600 sq.ft.",
    bhk: "2 BHK , 3 BHK , 3 BHK + 2 Toilet , 3 BHK + Servent & 4 BHK",
    // status: "Contemporary Homes",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    description:
      "Functional floor plans, bright interiors and contemporary finishes for comfortable everyday living.",
    amenities: ["Modern Interiors", "Lift", "Parking"],
  },
  {
    id: "07",
    title: "The KingDom Homes",
    subtitle: "A Professional Destination for Growth.",
    location: "Rajnagar Extension, Ghaziabad, Uttar Pradesh",
    type: "Commercial",
    category: "Commercial",
    // price: "Price on request",
    area: "Near By KW6 Delhi Mall Rajnagar",
    bhk: "Office & Shop",
    status: "Commercial Opportunities",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    description:
      "Discover commercial property options for office operations, retail concepts and business expansion.",
    amenities: ["Office Spaces", "Retail Units", "Business Location"],
  },
  {
    id: "08",
    title: "VVIP",
    subtitle: "Designed Around Your Next Chapter.",
    location: "Madhuban Bapudham, Ghaziabad, Uttar Pradesh",
    type: "Residential",
    category: "Apartments",
    // price: "₹1.10 Crore onwards",
    area: "Comming Soon",
    bhk: "Comming Soon",
    status: "Luxury Collection",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85",
    description:
      "An upscale home concept combining generous interiors, thoughtful details and a polished modern aesthetic.",
    amenities: ["Premium Interiors", "Lifestyle Spaces", "Parking"],
  },
];

const filters = ["All Projects", "Residential", "Commercial", "Land"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const visibleProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <>
      <Navbar />

      <main className="dp-project-page">
        <div className="dp-project-glow dp-glow-one" />
        <div className="dp-project-glow dp-glow-two" />

        {/* HERO */}
        <section className="dp-project-hero">
          <motion.div
            className="dp-project-hero-content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="dp-eyebrow" variants={fadeUp}>
              <Sparkles size={15} />
              <span>CURATED PROPERTY COLLECTION</span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Find Your Place.
              <br />
              <span>Define Your Future.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Discover thoughtfully selected residential and commercial
              properties with Dutt Properties. Explore spaces that match
              your lifestyle, aspirations and investment goals.
            </motion.p>

            <motion.div className="dp-hero-actions" variants={fadeUp}>
              <a href="#dp-project-list" className="dp-btn dp-btn-gold">
                Explore Projects <ArrowDownRight size={18} />
              </a>

              <Link href="/contact" className="dp-btn dp-btn-outline">
                Discuss Your Requirements <ArrowUpRight size={17} />
              </Link>
            </motion.div>

            <motion.div className="dp-hero-trust" variants={fadeUp}>
              <span><ShieldCheck size={17} /> Property Guidance</span>
              <span><CheckCircle2 size={17} /> Transparent Assistance</span>
              <span><Building2 size={17} /> Multiple Property Types</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="dp-hero-visual"
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <img
              src={projects[0].image}
              alt="Contemporary luxury residential architecture"
            />
            <div className="dp-hero-image-shade" />

            <div className="dp-hero-floating-card">
              <span className="dp-floating-label">YOUR NEXT ADDRESS</span>
              <h3>Made for the way you live.</h3>
              <p>Explore a collection of property possibilities.</p>
              <a href="#dp-project-list">
                Discover collection <ArrowRight size={15} />
              </a>
            </div>

            {/* <div className="dp-hero-index">01 — 08</div> */}
          </motion.div>
        </section>

        {/* STATS */}
        <motion.section
          className="dp-project-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {[
            ["08", "Featured Concepts"],
            ["03", "Property Categories"],
            ["01", "Personalised Approach"],
          ].map(([number, label]) => (
            <motion.div className="dp-stat" variants={fadeUp} key={label}>
              <span>{number}</span>
              <p>{label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* PROJECT LIST */}
        <section className="dp-project-list-section" id="dp-project-list">
          <motion.div
            className="dp-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="dp-eyebrow" variants={fadeUp}>
              <span>DISCOVER OUR COLLECTION</span>
            </motion.div>

            <motion.h2 variants={fadeUp}>
              Spaces That <span>Inspire.</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Explore residential homes, independent villas, land and
              commercial opportunities in one place.
            </motion.p>
          </motion.div>

          {/* FILTERS */}
          <div className="dp-project-filters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={
                  activeFilter === filter
                    ? "dp-filter-btn active"
                    : "dp-filter-btn"
                }
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div
            className="dp-project-grid"
            layout
          >
            {visibleProjects.map((project, index) => (
              <motion.article
                className="dp-project-card"
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 2) * 0.08,
                  layout: { duration: 0.35 },
                }}
                whileHover={{ y: -6 }}
              >
                <div className="dp-project-image-wrap">
                  <img
                    className="dp-project-image"
                    src={project.image}
                    alt={`${project.title} property concept`}
                    loading={index > 1 ? "lazy" : "eager"}
                  />

                  <div className="dp-project-image-overlay" />

                  <span className="dp-project-number">{project.id}</span>

                  <span className="dp-project-status">
                    {project.status}
                  </span>

                  <span className="dp-project-category">
                    {project.category}
                  </span>
                </div>

                <div className="dp-project-card-body">
                  <p className="dp-project-kicker">
                    {project.type} <span> / </span> {project.category}
                  </p>

                  <h3>{project.title}</h3>
                  <p className="dp-project-subtitle">{project.subtitle}</p>

                  <p className="dp-project-address">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </p>

                  <p className="dp-project-description">
                    {project.description}
                  </p>

                  <div className="dp-project-details">
                    <div>
                      <BedDouble size={17} />
                      <span>{project.bhk}</span>
                    </div>
                    <div>
                      <Maximize2 size={16} />
                      <span>{project.area}</span>
                    </div>
                  </div>

                  <div className="dp-project-amenities">
                    {project.amenities.map((amenity) => (
                      <span key={amenity}>{amenity}</span>
                    ))}
                  </div>

                  <div className="dp-project-card-footer">
                    {project.price ? (
                      <div className="dp-project-price">
                        <strong>{project.price}</strong>
                      </div>
                    ) : null}

                    <Link
                      className="dp-project-more"
                      href={`/contact?property=${encodeURIComponent(project.title)}`}
                      aria-label={`Enquire about ${project.title}`}
                    >
                      <span>View More Details</span>
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.p
            className="dp-project-disclaimer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Project names, areas and amenities are shared for information only.
            Availability, pricing, approvals and possession schedules are
            confirmed by the respective developer. Please verify all documents
            and RERA registration before booking.
          </motion.p>
        </section>

        {/* CTA */}
        <motion.section
          className="dp-project-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="dp-cta-icon">
            <Building2 size={25} />
          </div>

          <div className="dp-cta-content">
            <span className="dp-eyebrow">LET&apos;S FIND THE RIGHT PROPERTY</span>
            <h2>Your next move deserves the right guidance.</h2>
            <p>
              Tell us what you are looking for. We can help you explore
              suitable residential and commercial property options.
            </p>
          </div>

          <Link href="/contact" className="dp-btn dp-btn-gold">
            Contact Our Team <ArrowUpRight size={18} />
          </Link>
        </motion.section>
      </main>
    </>
  );
}

