"use client";

import React, { useSyncExternalStore } from "react";
import { siteConfig } from "@/lib/site";

/**
 * A minute-resolution clock. `useSyncExternalStore` keeps the server render
 * deterministic (0) and lets the browser read the real time after hydration,
 * which avoids both hydration mismatches and setState-in-effect renders.
 */
const subscribeToMinute = (onChange) => {
  const id = setInterval(onChange, 60000);
  return () => clearInterval(id);
};

const getMinute = () => Math.floor(Date.now() / 60000);
const getServerMinute = () => 0;

export default function Footer() {
  const minute = useSyncExternalStore(subscribeToMinute, getMinute, getServerMinute);
  const dateTime = minute ? new Date(minute * 60000) : null;

  return (
    <footer id="footer">
      <p className="copyright">
        © All Rights Reserved — {siteConfig.legalName}. Theme design by Sumit Dutt (Full Stack
        Developer). Contact: <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
        <br />
        <span className="date">
          {dateTime
            ? `Today: ${dateTime.toLocaleDateString("en-IN")} — ${dateTime.toLocaleTimeString(
                "en-IN",
                { hour: "2-digit", minute: "2-digit" }
              )}`
            : "Dutt Properties · Ghaziabad · Delhi NCR"}
        </span>
      </p>
    </footer>
  );
}
