import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Internship from "@/components/Internship";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Publications />
        <Education />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Narmatha A. All Rights Reserved.</p>
          <p style={{ fontSize: "0.8rem", marginTop: "0.5rem", color: "var(--text-muted)" }}>
            Built with Next.js, custom CSS Glassmorphism, and Antigravity.
          </p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/narmatha-anbu" target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href="mailto:narmathaanbu2007@gmail.com" className="footer-link">
              Email
            </a>
            <a href="tel:+916381110893" className="footer-link">
              Phone
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
