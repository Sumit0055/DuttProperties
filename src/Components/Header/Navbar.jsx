"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoBg from "../../assets/logoHome1.png";
import { navLinks, siteConfig } from "@/lib/site";

const MOBILE_BREAKPOINT = "(max-width: 768px)";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();

  const closeMenus = useCallback(() => {
    setOpen(false);
    setDropdown(false);
  }, []);

  // Track viewport so handlers never have to read window during render.
  useEffect(() => {
    const query = window.matchMedia(MOBILE_BREAKPOINT);
    const sync = () => setIsMobile(query.matches);

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  // Mobile menu: escape to close, lock the page behind it, restore on exit.
  // (Menus also close from each link's click handler, so no pathname effect
  // is needed — and avoiding it prevents a cascading render on navigation.)
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenus();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenus]);

  // Desktop dropdown closes on an outside click.
  useEffect(() => {
    if (!dropdown || isMobile) return;

    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [dropdown, isMobile]);

  const handlePropertiesClick = (event) => {
    if (isMobile) {
      event.preventDefault();
      setDropdown((previous) => !previous);
    }
  };

  const closeMobileMenu = () => {
    if (isMobile) closeMenus();
  };

  const toggleMenu = () => {
    setOpen((previous) => !previous);
    setDropdown(false);
  };

  return (
    <header ref={headerRef}>
      <Link href="/" className="navbar-brand-logo" onClick={closeMenus}>
        <span className="navbar-logo-icon">
          <img src={logoBg.src} alt={`${siteConfig.name} logo`} width={56} height={56} />
        </span>

        <span className="navbar-brand-name">{siteConfig.name}</span>
      </Link>

      <nav
        id="primary-navigation"
        className={open ? "nav open" : "nav"}
        aria-label="Primary"
      >
        <ul>
          {navLinks.map((item) => {
            if (!item.children) {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    aria-current={isActive ? "page" : undefined}
                    className={isActive ? "active" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            const isSectionActive =
              pathname === item.href ||
              item.children.some((child) => pathname === child.href);

            return (
              <li
                key={item.href}
                className={`dropdown ${dropdown ? "dropdown-active" : ""}`}
                onMouseEnter={() => {
                  if (!isMobile) setDropdown(true);
                }}
                onMouseLeave={() => {
                  if (!isMobile) setDropdown(false);
                }}
              >
                <Link
                  href={item.href}
                  aria-haspopup="true"
                  aria-expanded={dropdown}
                  aria-current={isSectionActive ? "page" : undefined}
                  className={isSectionActive ? "active" : undefined}
                  onClick={handlePropertiesClick}
                >
                  {item.label}
                  <span className="dropdown-arrow" aria-hidden="true">
                    ▾
                  </span>
                </Link>

                <ul className={`dropdown-menu ${dropdown ? "dropdown-visible" : ""}`}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={closeMobileMenu}
                        aria-current={pathname === child.href ? "page" : undefined}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        className={open ? "hamburger active" : "hamburger"}
        onClick={toggleMenu}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        <span />
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
