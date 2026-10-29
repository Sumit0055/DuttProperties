"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube, FaShareNodes } from "react-icons/fa6";
import { siteConfig } from "@/lib/site";

import "./FloatingSocial.css";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: siteConfig.social.instagram,
    className: "social-instagram",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: siteConfig.social.facebook,
    className: "social-facebook",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: siteConfig.social.youtube,
    className: "social-youtube",
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      staggerChildren: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export default function FloatingSocial() {
  return (
    <motion.aside
      className="floating-social"
      aria-label="Social media links"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="floating-social-label">
        <span className="floating-social-dot" />
        <span>FOLLOW US</span>
      </div>

      <div className="floating-social-list">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${social.name} page`}
              title={social.name}
              className={`floating-social-link ${social.className}`}
              variants={itemVariants}
              whileHover={{ scale: 1.09, x: -5 }}
              whileTap={{ scale: 0.94 }}
            >
              <span className="floating-social-icon">
                <Icon aria-hidden="true" />
              </span>

              <span className="floating-social-name">{social.name}</span>

              <span className="floating-social-arrow" aria-hidden="true">
                ↗
              </span>
            </motion.a>
          );
        })}
      </div>

      <div className="floating-social-footer">
        <FaShareNodes aria-hidden="true" />
        <span>LET&apos;S CONNECT</span>
      </div>
      <div className="floating-social-footer">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
      </div>
    </motion.aside>
  );
}
