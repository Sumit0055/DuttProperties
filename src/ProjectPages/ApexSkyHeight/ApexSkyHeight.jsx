"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  FaPlay,
  FaPause,
  FaVolumeHigh,
  FaVolumeLow,
  FaVolumeXmark,
  FaExpand,
  FaCompress,
  FaBackwardStep,
  FaForwardStep,
  FaRotateRight,
  FaCirclePlay,
} from "react-icons/fa6";

import Navbar from "../../Components/Header/Navbar";
import "../Vvip/vvip.css"
import FloatingSocial from "../../Components/FloatingSocial/FloatingSocial";

const property = {
  name: "Apex Sky Height",
  title: "Luxury Living at Apex Sky Height",
  subtitle: "Where contemporary comfort meets premium apartment living.",
  location: "Rajnagar Extension, Ghaziabad, Uttar Pradesh",
  type: "Luxury Residential Apartments",
  status: "Luxury Apartment Living",
  price: "Price on Request",
  bedrooms: "Apartment options — confirm availability",
  bathrooms: "Modern Interiors",
  area: "Spacious Apartment Layouts",
  parking: "Parking — confirm availability",
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

export default function VvipMadhubanPage() {
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
            <span className="saya-breadcrumb-active">Apex Sky Height Rajnagar Extension</span>
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
                  <span className="saya-brand-name">APEX SKY HEIGHT</span>
                  <span className="saya-brand-caption">
                    LUXURY APARTMENTS
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
                {property.subtitle} Discover luxury apartment living at Apex Sky Height, with a focus on comfort, contemporary design and everyday convenience.
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
                  Club
                </span>
              </motion.div>

              <motion.div
                className="saya-trust-note"
                variants={itemVariants}
              >
                <span className="saya-trust-icon">
                  <FaCheck />
                </span>
                <span>
                  2 BHK , 3 BHK & 3 BHK + Study Apartments available
                </span>
              </motion.div>

              <motion.div
                className="saya-trust-note"
                variants={itemVariants}
              >
                <span className="saya-trust-icon">
                  <FaCheck />
                </span>
                <span>
                  Commercial Plaza
                </span>
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
                  alt="Luxury apartment project at Apex Sky Height Rajnagar Extension, Ghaziabad"
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
                    Rajnagar Extension, GHAZIABAD
                  </span>
                  <h2>A Better Way to Live.</h2>
                  <p>Comfort. Style. Convenience.</p>
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
                APEX SKY HEIGHT <span>•</span> APARTMENTS
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
            <small>Luxury apartment development</small>
          </motion.div>

          <motion.div className="saya-spec-card" variants={itemVariants}>
            <span className="saya-spec-icon">
              <FaBed />
            </span>
            <span className="saya-spec-label">CONFIGURATION</span>
            <strong>{property.bedrooms}</strong>
            <small>Ask about available configurations</small>
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
            <strong>Parking Availability</strong>
            <small>Confirm current details</small>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Premium Property Video */}
      <LuxuryPropertyVideo />

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
              Apex Sky Height Rajnagar Extension
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
              Find Your Place at <span>Apex Sky Height Rajnagar Extension</span>
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

/* -------------------------------------------------------------------------- */
/* Premium property video player — kept in this same file                    */
/* -------------------------------------------------------------------------- */

const formatTime = (time = 0) => {
  if (!Number.isFinite(time) || time < 0) return "0:00";
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

/**
 * Premium property video section.
 * Put your video at public/videos/vvip-madhuban.mp4 or pass a custom `videoSrc` prop.
 * Example: <LuxuryPropertyVideo videoSrc="/videos/my-property-tour.mp4" />
 */
function LuxuryPropertyVideo({
  videoSrc = "/video/vvipVideo.mp4",
  poster = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  projectName = "VVIP Madhuban",
  location = "Rajnagar Extension, Ghaziabad",
  contactHref = "/contact",
}) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const seekRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [muted, setMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video || videoError) return;
    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      // Playback can be blocked until the visitor interacts with the player.
      setPlaying(false);
    }
  }, [videoError]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
  }, []);

  const changeVolume = useCallback((value) => {
    const nextVolume = Number(value);
    const video = videoRef.current;
    setVolume(nextVolume);
    if (video) {
      video.volume = nextVolume;
      video.muted = nextVolume === 0;
      setMuted(nextVolume === 0);
    }
  }, []);

  const seekTo = useCallback((value) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    const nextTime = Number(value);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  }, []);

  const skip = useCallback((amount) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    const nextTime = Math.min(video.duration, Math.max(0, video.currentTime + amount));
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  }, []);

  const changeSpeed = useCallback((value) => {
    const rate = Number(value);
    const video = videoRef.current;
    if (video) video.playbackRate = rate;
    setPlaybackRate(rate);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const player = playerRef.current;
    if (!player) return;
    try {
      if (!document.fullscreenElement) {
        if (player.requestFullscreen) await player.requestFullscreen();
        else if (videoRef.current?.webkitEnterFullscreen) videoRef.current.webkitEnterFullscreen();
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch (error) {
      // Fullscreen availability depends on browser/device permissions.
    }
  }, []);

  const restartVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setCurrentTime(0);
    video.play().catch(() => setPlaying(false));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = volume;
    video.playbackRate = playbackRate;

    const onPlay = () => {
      setPlaying(true);
      setHasStarted(true);
    };
    const onPause = () => setPlaying(false);
    const onTimeUpdate = () => setCurrentTime(video.currentTime || 0);
    const onLoadedMetadata = () => setDuration(video.duration || 0);
    const onEnded = () => setPlaying(false);
    const onError = () => setVideoError(true);
    const onLoadedData = () => setVideoError(false);
    const onFullscreenChange = () => setFullscreen(Boolean(document.fullscreenElement));

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("durationchange", onLoadedMetadata);
    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    video.addEventListener("loadeddata", onLoadedData);
    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("durationchange", onLoadedMetadata);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
      video.removeEventListener("loadeddata", onLoadedData);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, [playbackRate, volume]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      if (target && ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName)) return;
      if (!playerRef.current?.contains(document.activeElement) && document.activeElement !== document.body) return;
      if (event.code === "Space") {
        event.preventDefault();
        togglePlay();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        skip(10);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        skip(-10);
      } else if (event.key.toLowerCase() === "m") {
        toggleMute();
      } else if (event.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [skip, toggleFullscreen, toggleMute, togglePlay]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const VolumeIcon = muted || volume === 0 ? FaVolumeXmark : volume < 0.45 ? FaVolumeLow : FaVolumeHigh;

  return (
    <section className="lvp-section" aria-label={`${projectName} property video`}>
      <div className="lvp-orb lvp-orb-one" aria-hidden="true" />
      <div className="lvp-orb lvp-orb-two" aria-hidden="true" />

      <div className="lvp-container">
        <motion.div
          className="lvp-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="lvp-kicker"><span /> PROPERTY FILM</span>
          <h2>Experience the <span>Extraordinary.</span></h2>
          <p>Explore the spaces, atmosphere and lifestyle that make {projectName} worth discovering.</p>
        </motion.div>

        <motion.div
          className={`lvp-player-shell${fullscreen ? " is-fullscreen" : ""}`}
          ref={playerRef}
          tabIndex={0}
          role="region"
          aria-label="Interactive property video player"
          initial={{ opacity: 0, y: 35, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(true)}
        >
          <div className="lvp-player-topline">
            <div className="lvp-project-mark"><span className="lvp-mark-icon"><FaBuilding /></span><span><strong>{projectName}</strong><small>RESIDENCE FILM</small></span></div>
            <span className="lvp-quality"><span /> PROPERTY SHOWCASE</span>
          </div>

          <div className="lvp-video-stage">
            <video
              ref={videoRef}
              className="lvp-video"
              src={videoSrc}
              poster={poster}
              preload="metadata"
              playsInline
              onClick={togglePlay}
              aria-label={`${projectName} video`}
            />
            <div className="lvp-video-vignette" aria-hidden="true" />

            {!hasStarted && !videoError && (
              <div className="lvp-video-intro" aria-hidden="true">
                <span className="lvp-intro-overline">A CLOSER LOOK AT LUXURY</span>
                <span className="lvp-intro-title">Your next chapter<br /><em>starts here.</em></span>
              </div>
            )}

            <AnimatePresence>
              {!playing && !videoError && (
                <motion.button
                  type="button"
                  className="lvp-big-play"
                  aria-label="Play property video"
                  onClick={togglePlay}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.82 }}
                  transition={{ duration: 0.2 }}
                >
                  <span><FaPlay /></span>
                  <small>PLAY FILM</small>
                </motion.button>
              )}
            </AnimatePresence>

            {videoError && (
              <div className="lvp-video-error">
                <FaCirclePlay />
                <strong>Video is not available</strong>
                <p>Check that your MP4 file exists at <code>public/video/vvipVideo.mp4</code> and that the path is correct.</p>
              </div>
            )}

            <div className={`lvp-controls${showControls ? " controls-visible" : ""}`}>
              <div className="lvp-seek-wrap">
                <input
                  ref={seekRef}
                  className="lvp-seek"
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={Math.min(currentTime, duration || 100)}
                  onChange={(event) => seekTo(event.target.value)}
                  aria-label="Seek video"
                  style={{ "--lvp-progress": `${progress}%` }}
                  disabled={videoError || !duration}
                />
              </div>

              <div className="lvp-control-row">
                <div className="lvp-control-group">
                  <button type="button" className="lvp-control-btn lvp-main-control" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"} disabled={videoError}>
                    {playing ? <FaPause /> : <FaPlay />}
                  </button>
                  <button type="button" className="lvp-control-btn lvp-skip-btn" onClick={() => skip(-10)} aria-label="Back 10 seconds" disabled={videoError}><FaBackwardStep /><small>10</small></button>
                  <button type="button" className="lvp-control-btn lvp-skip-btn" onClick={() => skip(10)} aria-label="Forward 10 seconds" disabled={videoError}><FaForwardStep /><small>10</small></button>
                  <span className="lvp-time">{formatTime(currentTime)} <i>/</i> {formatTime(duration)}</span>
                </div>

                <div className="lvp-control-group lvp-right-controls">
                  <div className="lvp-volume-control">
                    <button type="button" className="lvp-control-btn" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} disabled={videoError}><VolumeIcon /></button>
                    <input className="lvp-volume-range" type="range" min="0" max="1" step="0.05" value={muted ? 0 : volume} onChange={(event) => changeVolume(event.target.value)} aria-label="Volume" disabled={videoError} />
                  </div>
                  <label className="lvp-speed-wrap" aria-label="Playback speed">
                    <span>SPD</span>
                    <select value={playbackRate} onChange={(event) => changeSpeed(event.target.value)} disabled={videoError}>
                      <option value="0.5">0.5×</option>
                      <option value="0.75">0.75×</option>
                      <option value="1">1×</option>
                      <option value="1.25">1.25×</option>
                      <option value="1.5">1.5×</option>
                      <option value="1.75">1.75×</option>
                      <option value="2">2×</option>
                    </select>
                  </label>
                  {duration > 0 && currentTime >= duration && <button type="button" className="lvp-control-btn" onClick={restartVideo} aria-label="Replay video"><FaRotateRight /></button>}
                  <button type="button" className="lvp-control-btn" onClick={toggleFullscreen} aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"} disabled={videoError}>{fullscreen ? <FaCompress /> : <FaExpand />}</button>
                </div>
              </div>
            </div>
          </div>

          <div className="lvp-player-caption">
            <div className="lvp-caption-location"><FaLocationDot /><span>{location}</span></div>
            <div className="lvp-caption-note"><span className="lvp-live-dot" /> CURATED PROPERTY EXPERIENCE</div>
          </div>
        </motion.div>

        <motion.div
          className="lvp-bottom-row"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          <p><strong>See yourself here?</strong><br />Get in touch to learn more about the property and arrange a visit.</p>
          <a className="lvp-cta" href={contactHref}>Enquire About This Property <FaArrowRight /></a>
        </motion.div>
      </div>
    </section>
  );
}
