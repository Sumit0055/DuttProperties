"use client";

import React, { useState } from "react";
import Navbar from "../Components/Header/Navbar";
import FloatingSocial from "../Components/FloatingSocial/FloatingSocial";
import { siteConfig, whatsappLink } from "@/lib/site";

const budgetOptions = [
  { value: "10-20L", label: "₹10–20 Lakhs" },
  { value: "20-40L", label: "₹20–40 Lakhs" },
  { value: "40-60L", label: "₹40–60 Lakhs" },
  { value: "60-80L", label: "₹60–80 Lakhs" },
  { value: "80L-1Cr", label: "₹80 Lakhs – 1 Cr" },
  { value: "1-2Cr", label: "₹1–2 Cr" },
  { value: "2-3Cr", label: "₹2–3 Cr" },
  { value: "3-4Cr", label: "₹3–4 Cr" },
  { value: "4-5Cr", label: "₹4–5 Cr" },
  { value: "5Cr+", label: "₹5 Cr+" },
];

const propertyOptions = [
  { value: "luxury-apartments", label: "Luxury Apartments" },
  { value: "independent-villas", label: "Independent Villas" },
  { value: "residential-plots", label: "Residential Plots" },
  { value: "commercial-spaces", label: "Commercial Spaces (shops, offices)" },
  { value: "farmhouses", label: "Farmhouses" },
  { value: "industrial-properties", label: "Industrial Properties" },
];

const locationOptions = [
  { value: "ghaziabad", label: "Ghaziabad" },
  { value: "rajnagar-extension", label: "Raj Nagar Extension" },
  { value: "indirapuram", label: "Indirapuram" },
  { value: "duhai", label: "Duhai" },
  { value: "noida", label: "Noida" },
  { value: "greater-noida", label: "Greater Noida" },
  { value: "delhi-ncr", label: "Delhi NCR" },
  { value: "meerut", label: "Meerut" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const budget = String(data.get("budget") || "");
    const property = String(data.get("property") || "");
    const selectedLocation = String(data.get("location") || "");
    const customLocation = String(data.get("customLocation") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !phone) {
      setStatus({
        state: "error",
        text: "Please add your name and phone number so we can respond to your enquiry.",
      });
      return;
    }

    const place =
      selectedLocation === "other" ? customLocation || "Not specified" : selectedLocation;

    const lines = [
      `New property enquiry — ${siteConfig.name}`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Budget: ${budget || "Not specified"}`,
      `Property type: ${property || "Not specified"}`,
      `Location: ${place || "Not specified"}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");

    setStatus({
      state: "success",
      text: `Thank you, ${name}. Your enquiry is ready in WhatsApp — press send there and our team will respond within one working day.`,
    });
    form.reset();
    setLocation("");
  };

  return (
    <>
      <Navbar />
      <FloatingSocial />
      <article
        id="contact"
        className="container text-center"
        style={{
          marginBottom: "50px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "30px 20px",
        }}
      >
        <h2 className="major">Contact Us</h2>
        <p className="major">
          Authorized &amp; Trusted Channel Partner — delivering genuine deals, secure investments
          and personalized guidance for your property journey across Ghaziabad, Noida, Greater Noida
          and Delhi NCR.
        </p>

        <form method="post" action="#" onSubmit={handleSubmit} noValidate>
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="field half">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </div>

            <div className="field half">
              <label htmlFor="budget">Budget</label>
              <select name="budget" id="budget" className="form-control" required defaultValue="">
                <option value="">Select your budget</option>
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field half">
              <label htmlFor="property">Property Type</label>
              <select name="property" id="property" className="form-control" required defaultValue="">
                <option value="">Select property type</option>
                {propertyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field half">
              <label htmlFor="location">Location</label>
              <select
                name="location"
                id="location"
                className="form-control"
                required
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              >
                <option value="">Select location</option>
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {location === "other" ? (
                <input
                  type="text"
                  name="customLocation"
                  id="customLocation"
                  className="form-control"
                  placeholder="Enter your location"
                  style={{ marginTop: "10px" }}
                />
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" className="form-control" />
            </div>
          </div>

          <ul className="actions d-flex justify-content-center gap-3 mt-4">
            <li>
              <input type="submit" value="Send Message" className="primary btn btn-primary" />
            </li>
            <li>
              <input type="reset" value="Reset" className="btn btn-secondary" />
            </li>
          </ul>

          {status ? (
            <p className="form-status" data-state={status.state} role="status" aria-live="polite">
              {status.text}
            </p>
          ) : null}
        </form>

        <ul className="icons d-flex justify-content-center gap-4 mt-4 list-unstyled">
          <li>
            <a
              href={siteConfig.social.instagram}
              className="icon fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href={siteConfig.social.facebook}
              className="icon fa-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href={siteConfig.social.youtube}
              className="icon fa-youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">YouTube</span>
            </a>
          </li>
          <li>
            <a href={siteConfig.phoneHref} className="icon fa-phone">
              <span className="label">Call {siteConfig.phone}</span>
            </a>
          </li>
        </ul>
      </article>
    </>
  );
}
