"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const roles = [
    "Aspiring Full Stack Developer",
    "Computer Science Engineer",
    "AI & Machine Learning Enthusiast",
    "IoT Surveillance Inventor"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          // Pause at complete word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100); // Reset speed
          return;
        }
      }

      setTypingSpeed(isDeleting ? 50 : 100);
      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="hero-section container">
      {/* Decorative Orbs */}
      <div className="orb orb-purple"></div>
      <div className="orb orb-cyan"></div>

      <div className="animate-fade-in-up" style={{ zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Profile Photo */}
        <div className="hero-avatar-wrapper float-slow">
          <img src="/profile.jpg" alt="Narmatha A" className="hero-avatar" />
        </div>
        <p className="hero-subtitle">Welcome to my universe</p>
        <h1 className="hero-title">
          Hi, I am <span>NARMATHA A</span>
        </h1>
        
        <div className="hero-typed">
          I am a <span>{displayText}</span>
          <span style={{ borderRight: "2px solid var(--color-secondary)", marginLeft: "2px", animation: "blink-caret 0.75s step-end infinite" }}></span>
        </div>

        <p className="hero-desc">
          Driven Computer Science Engineering student with a passion for software development, AI, and continuous learning. Seeking opportunities to build reliable, scalable, and impactful applications.
        </p>

        <div className="hero-btns">
          <button onClick={() => scrollToSection("projects")} className="btn btn-primary">
            View Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button onClick={() => scrollToSection("contact")} className="btn btn-secondary">
            Get In Touch
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </button>
        </div>

        <div className="hero-socials">
          <a
            href="https://www.linkedin.com/in/narmatha-anbu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="mailto:narmathaanbu2007@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a
            href="tel:+916381110893"
            className="social-icon"
            aria-label="Phone"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
