"use client"
import React from 'react'
import Link from 'next/link'
import logoBg from "../../public/assets/logoHome1.png"
import { siteConfig } from '@/lib/site'

export default function HomePage() {
    return (
        <div id="wrapper" className="luxury-home-wrapper">

            <header id="header" className="luxury-home-header">

                <div className="content luxury-home-content">

                    {/* Luxury Logo Reveal */}
                    <div className="logimg luxury-logo-reveal">
                        <div className="luxury-logo-glow"></div>

                        <img
                            src={logoBg.src}
                            alt="Logo"
                            className="luxury-logo-image"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="inner luxury-intro-reveal">

                        <h1 className="luxury-heading-reveal">
                            {siteConfig.name}
                        </h1>

                        <p className="luxury-description-reveal">
                            “From apartments to villas, plots to farmhouses —
                            we connect you with trusted partners who make your
                            property dreams a reality.”
                        </p>

                    </div>

                </div>

                {/* Luxury Navigation */}
                <nav className="luxury-navigation-reveal">
                    <ul>
                        <li className="luxury-nav-item luxury-nav-one">
                            <Link href="/about">About</Link>
                        </li>

                        <li className="luxury-nav-item luxury-nav-three">
                            <Link href="/projects">Explore Properties</Link>
                        </li>

                        <li className="luxury-nav-item luxury-nav-two">
                            <Link href="/service">Services</Link>
                        </li>

                        <li className="luxury-nav-item luxury-nav-four">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

            </header>

        </div>
    )
}

