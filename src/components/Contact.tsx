"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please fill out all required fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    // Simulate sending message (frontend only)
    setTimeout(() => {
      setStatus({
        type: "success",
        text: "Thank you! Your message has been sent successfully. Narmatha will get back to you soon."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="glass-card contact-grid">
        {/* Info Column */}
        <div className="contact-info">
          <div>
            <h3 style={{ fontSize: "1.45rem", color: "var(--text-bright)", fontWeight: "800", marginBottom: "0.5rem" }}>
              Contact Information
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              Have an exciting project, an internship opportunity, or want to collaborate? Feel free to reach out via phone, email, or LinkedIn!
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-item-details">
              <span className="contact-item-lbl">Email Address</span>
              <a href="mailto:narmathaanbu2007@gmail.com" className="contact-item-val">
                narmathaanbu2007@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-item-details">
              <span className="contact-item-lbl">Phone Number</span>
              <a href="tel:+916381110893" className="contact-item-val">
                +91 63811 10893
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="contact-item-details">
              <span className="contact-item-lbl">LinkedIn Profile</span>
              <a
                href="https://www.linkedin.com/in/narmatha-anbu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item-val"
              >
                linkedin.com/in/narmatha-anbu
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-control"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message subject"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="form-control"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ padding: "0.95rem 2rem", fontSize: "1rem" }}
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
          </form>

          {/* Form Status Banner */}
          {status.type && (
            <div className={`contact-status-msg ${status.type}`}>
              {status.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
