"use client";

import React, { useState } from "react";
import Navbar from "../Components/Header/Navbar";
import { FaEnvelope, FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";
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

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_DIGITS = /\d/g;

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Please enter your name.";
  } else if (values.name.length < 2) {
    errors.name = "Name should be at least 2 characters.";
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email, for example name@gmail.com.";
  }

  const digits = (values.phone.match(PHONE_DIGITS) || []).length;

  if (!values.phone) {
    errors.phone = "Please enter your phone number.";
  } else if (digits < 10 || digits > 13) {
    errors.phone = "Enter a 10-digit mobile number.";
  }

  if (!values.budget) errors.budget = "Select your budget range.";
  if (!values.property) errors.property = "Select a property type.";
  if (!values.location) errors.location = "Select a location.";

  if (values.location === "other" && !values.customLocation) {
    errors.customLocation = "Enter the area you are looking in.";
  }

  return errors;
}

export default function Contact() {
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const values = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      budget: String(data.get("budget") || ""),
      property: String(data.get("property") || ""),
      location: String(data.get("location") || ""),
      customLocation: String(data.get("customLocation") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];

    if (firstError) {
      setStatus({
        state: "error",
        text: "Please fill the highlighted fields before sending your enquiry.",
      });

      const field = form.querySelector(`[name="${firstError}"]`);
      field?.focus({ preventScroll: true });
      field?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const place =
      values.location === "other"
        ? values.customLocation
        : locationOptions.find((option) => option.value === values.location)?.label ||
          values.location;

    const lines = [
      `New property enquiry — ${siteConfig.name}`,
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Budget: ${values.budget}`,
      `Property type: ${values.property}`,
      `Location: ${place}`,
      values.message ? `Message: ${values.message}` : null,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");

    setStatus({
      state: "success",
      text: `Thank you, ${values.name}. Your enquiry is ready in WhatsApp — press send there and our team will respond within one working day.`,
    });

    form.reset();
    setLocation("");
    setErrors({});
  };

  const handleReset = (event) => {
    event.currentTarget.form?.reset();
    setLocation("");
    setErrors({});
    setStatus(null);
  };

  const errorProps = (field) =>
    errors[field]
      ? { "aria-invalid": "true", "aria-describedby": `${field}-error` }
      : {};

  // As soon as a buyer corrects a field, its inline error clears.
  const clearFieldError = (field) => {
    setErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
  };

  return (
    <>
      <Navbar />

      <section className="dp-contact" id="contact">
        <div className="dp-contact-head">
          <h1>Contact Us</h1>
          <p>
            Authorized &amp; trusted channel partner for property in Ghaziabad, Noida, Greater Noida
            and Delhi NCR. Share your requirement and the desk will respond with matching options,
            current availability and site-visit slots.
          </p>
        </div>

        <div className="dp-contact-grid">
          {/* ENQUIRY FORM */}
          <div className="dp-contact-form-col">
            <form method="post" action="#" onSubmit={handleSubmit} noValidate>
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    onChange={() => clearFieldError("name")}
                    {...errorProps("name")}
                  />
                  {errors.name ? (
                    <span className="field-error" id="name-error">
                      {errors.name}
                    </span>
                  ) : null}
                </div>

                <div className="field half">
                  <label htmlFor="email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    onChange={() => clearFieldError("email")}
                    {...errorProps("email")}
                  />
                  {errors.email ? (
                    <span className="field-error" id="email-error">
                      {errors.email}
                    </span>
                  ) : null}
                </div>

                <div className="field half">
                  <label htmlFor="phone">
                    Phone <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    onChange={() => clearFieldError("phone")}
                    {...errorProps("phone")}
                  />
                  {errors.phone ? (
                    <span className="field-error" id="phone-error">
                      {errors.phone}
                    </span>
                  ) : null}
                </div>

                <div className="field half">
                  <label htmlFor="budget">
                    Budget <span aria-hidden="true">*</span>
                  </label>
                  <select
                    name="budget"
                    id="budget"
                    className="form-control"
                    required
                    defaultValue=""
                    onChange={() => clearFieldError("budget")}
                    {...errorProps("budget")}
                  >
                    <option value="">Select your budget</option>
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget ? (
                    <span className="field-error" id="budget-error">
                      {errors.budget}
                    </span>
                  ) : null}
                </div>

                <div className="field half">
                  <label htmlFor="property">
                    Property Type <span aria-hidden="true">*</span>
                  </label>
                  <select
                    name="property"
                    id="property"
                    className="form-control"
                    required
                    defaultValue=""
                    onChange={() => clearFieldError("property")}
                    {...errorProps("property")}
                  >
                    <option value="">Select property type</option>
                    {propertyOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.property ? (
                    <span className="field-error" id="property-error">
                      {errors.property}
                    </span>
                  ) : null}
                </div>

                <div className="field half">
                  <label htmlFor="location">
                    Location <span aria-hidden="true">*</span>
                  </label>
                  <select
                    name="location"
                    id="location"
                    className="form-control"
                    required
                    value={location}
                    onChange={(event) => {
                      setLocation(event.target.value);
                      clearFieldError("location");
                      clearFieldError("customLocation");
                    }}
                    {...errorProps("location")}
                  >
                    <option value="">Select location</option>
                    {locationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.location ? (
                    <span className="field-error" id="location-error">
                      {errors.location}
                    </span>
                  ) : null}

                  {location === "other" ? (
                    <input
                      type="text"
                      name="customLocation"
                      id="customLocation"
                      className="form-control"
                      placeholder="Enter your location"
                      style={{ marginTop: "10px" }}
                      required
                      onChange={() => clearFieldError("customLocation")}
                      {...errorProps("customLocation")}
                    />
                  ) : null}
                  {errors.customLocation ? (
                    <span className="field-error" id="customLocation-error">
                      {errors.customLocation}
                    </span>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="form-control"
                    placeholder="Tell us about the property you are looking for"
                  />
                </div>
              </div>

              <div className="dp-contact-actions">
                <button type="submit" className="dp-btn-gold">
                  Send Message <span aria-hidden="true">↗</span>
                </button>

                <button type="button" className="dp-reset-link" onClick={handleReset}>
                  Reset form
                </button>
              </div>

              {status ? (
                <p className="form-status" data-state={status.state} role="status" aria-live="polite">
                  {status.text}
                </p>
              ) : null}
            </form>
          </div>

          {/* DIRECT CONTACT RAIL */}
          <aside className="dp-contact-rail" aria-label="Direct contact details">
            <a
              className="dp-contact-row dp-contact-row-lead"
              href={siteConfig.phoneHref}
              aria-label={`Call ${siteConfig.phone}`}
            >
              <span className="dp-contact-icon">
                <FaPhone aria-hidden="true" />
              </span>
              <span className="dp-contact-row-body">
                <span className="dp-contact-label">Call</span>
                <span className="dp-contact-value">{siteConfig.phone}</span>
                <span className="dp-contact-note">Mon–Sat, 9:30 am – 7:30 pm</span>
              </span>
            </a>

            <a
              className="dp-contact-row"
              href={whatsappLink(
                "Hi Dutt Properties, I would like to enquire about a property in Ghaziabad / Delhi NCR."
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp at ${siteConfig.whatsappDisplay}`}
            >
              <span className="dp-contact-icon">
                <FaWhatsapp aria-hidden="true" />
              </span>
              <span className="dp-contact-row-body">
                <span className="dp-contact-label">WhatsApp</span>
                <span className="dp-contact-value">{siteConfig.whatsappDisplay}</span>
                {/* <span className="dp-contact-note">Send floor plans, price lists and photos</span> */}
              </span>
            </a>

            <a
              className="dp-contact-row"
              href={siteConfig.emailHref}
              aria-label={`Email ${siteConfig.email}`}
            >
              <span className="dp-contact-icon">
                <FaEnvelope aria-hidden="true" />
              </span>
              <span className="dp-contact-row-body">
                <span className="dp-contact-label">Email</span>
                <span className="dp-contact-value dp-contact-value-email">{siteConfig.email}</span>
              </span>
            </a>

            <div className="dp-contact-row dp-contact-row-static">
              <span className="dp-contact-icon">
                <FaLocationDot aria-hidden="true" />
              </span>
              <span className="dp-contact-row-body">
                <span className="dp-contact-label">Office</span>
                <span className="dp-contact-value dp-contact-value-address">
                  {siteConfig.address.street}, {siteConfig.address.locality},{" "}
                  {siteConfig.address.region} {siteConfig.address.postalCode}
                </span>
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
