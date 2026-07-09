"use client";

import { useState } from "react";

export default function Projects() {
  const [reviewInput, setReviewInput] = useState("");
  const [analysisResult, setAnalysisResult] = useState<{
    sentiment: string;
    trustScore: number;
    isSpam: boolean;
    reason: string;
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const testReviews = [
    { text: "Amazing product! The build quality is excellent and it arrived super fast. highly recommend!", label: "Genuine Review" },
    { text: "CHEAP CASH ONLINE. CLICK HERE TO WIN $1000 NOW! WWW.SPAM-LINK.ORG!!! 100% REAL", label: "Spam Review" }
  ];

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewInput.trim()) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Simulate ML model latency
    setTimeout(() => {
      const lowerText = reviewInput.toLowerCase();
      
      let sentiment = "Neutral";
      let trustScore = 75;
      let isSpam = false;
      let reason = "Review looks natural and matches standard sentiment patterns.";

      // Simple heuristic simulator for sentiment and spam detection (mimicking TF-IDF + NLP classification)
      const positiveWords = ["amazing", "good", "great", "love", "excellent", "fast", "recommend", "best", "perfect"];
      const negativeWords = ["bad", "worst", "slow", "broken", "fake", "hate", "terrible", "waste", "cheap"];
      const spamWords = ["click here", "buy now", "win", "$", "http", "www.", "free money", "discount", "promo"];

      let posCount = 0;
      let negCount = 0;
      let spamCount = 0;

      positiveWords.forEach(w => { if (lowerText.includes(w)) posCount++; });
      negativeWords.forEach(w => { if (lowerText.includes(w)) negCount++; });
      spamWords.forEach(w => { if (lowerText.includes(w)) spamCount++; });

      if (posCount > negCount) {
        sentiment = "Positive";
      } else if (negCount > posCount) {
        sentiment = "Negative";
      }

      if (spamCount > 0 || lowerText.length < 8) {
        isSpam = true;
        trustScore = Math.max(10, Math.floor(40 - (spamCount * 15)));
        reason = "Flagged due to repetitive advertising patterns, URLs, or suspicious character usage.";
      } else {
        const randomness = Math.floor(Math.random() * 20);
        trustScore = Math.min(100, Math.max(60, 80 + posCount * 5 - negCount * 5 + randomness));
      }

      setAnalysisResult({ sentiment, trustScore, isSpam, reason });
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Academic Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">E-Commerce Rating Detector</h3>
            <div className="project-meta">
              <span>Type: <strong>AI / Machine Learning</strong></span>
              <span>Focus: <strong>Natural Language Processing (NLP)</strong></span>
            </div>
          </div>

          <p className="project-desc">
            An advanced AI-driven classification framework designed to automatically review and flag deceptive, bot-generated, or fake customer opinions on e-commerce platforms. 
            The system employs advanced text preprocessing, vectorization, and neural heuristics to compute an overall Product Trust Score.
          </p>

          <div className="project-features">
            <h4>Key Innovations</h4>
            <ul>
              <li>TF-IDF & Text Vectorization</li>
              <li>Spam Bot Detection Heuristics</li>
              <li>NLP-Driven Sentiment Analysis</li>
              <li>Calculated Trust Score Metrics</li>
            </ul>
          </div>

          <div className="project-tags">
            <span className="badge">Python</span>
            <span className="badge">Machine Learning</span>
            <span className="badge">NLP</span>
            <span className="badge">TF-IDF</span>
            <span className="badge">Sentiment Analysis</span>
            <span className="badge">Streamlit</span>
          </div>

          {/* Interactive Simulation Sandbox */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid var(--border-card)",
            borderRadius: "12px",
            padding: "1.5rem",
            marginTop: "1rem"
          }}>
            <h4 style={{ fontSize: "1.1rem", color: "var(--text-bright)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-secondary)", animation: "float 2s infinite" }}></span>
              Live Model Simulator Sandbox
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Test the detector. Type a sample review or load one of the quick presets below to run the classification pipelines.
            </p>

            {/* Presets */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              {testReviews.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setReviewInput(item.text)}
                  className="btn btn-secondary"
                  style={{ padding: "0.3rem 0.75rem", fontSize: "0.75rem", borderRadius: "8px" }}
                >
                  Load {item.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleAnalyze} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <textarea
                value={reviewInput}
                onChange={(e) => setReviewInput(e.target.value)}
                placeholder="Type your custom e-commerce review here (e.g., 'Loved this! Highly recommended.' or 'FREE CASH at link.com!!!')"
                className="form-control"
                style={{ fontSize: "0.85rem", minHeight: "80px" }}
              />
              <button
                type="submit"
                disabled={isAnalyzing || !reviewInput.trim()}
                className="btn btn-primary"
                style={{ alignSelf: "flex-start", padding: "0.6rem 1.2rem", fontSize: "0.85rem" }}
              >
                {isAnalyzing ? "Processing NLP Pipelines..." : "Analyze Review Text"}
              </button>
            </form>

            {/* Analysis Results Display */}
            {analysisResult && (
              <div style={{
                marginTop: "1.5rem",
                padding: "1.25rem",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${analysisResult.isSpam ? "rgba(239, 68, 68, 0.3)" : "rgba(16, 185, 129, 0.3)"}`,
                animation: "fadeInUp 0.4s ease"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "0.75rem" }}>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>CLASSIFICATION RESULT</span>
                    <strong style={{ fontSize: "1.1rem", color: analysisResult.isSpam ? "rgb(239, 68, 68)" : "rgb(16, 185, 129)" }}>
                      {analysisResult.isSpam ? "⚠️ Flagged: Suspected Spam/Bot" : "✓ Verified: Genuine Review"}
                    </strong>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block", textAlign: "right" }}>PRODUCT TRUST SCORE</span>
                    <strong style={{ fontSize: "1.25rem", color: "var(--text-bright)", display: "block", textAlign: "right" }}>
                      {analysisResult.trustScore}%
                    </strong>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "0.75rem", fontSize: "0.85rem" }}>
                  <div>
                    <span style={{ color: "var(--text-muted)" }}>Sentiment Profile:</span>{" "}
                    <strong style={{ color: analysisResult.sentiment === "Positive" ? "#10b981" : analysisResult.sentiment === "Negative" ? "#ef4444" : "var(--text-bright)" }}>
                      {analysisResult.sentiment}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)" }}>Heuristic Reason:</span>{" "}
                    <span style={{ color: "var(--text-main)" }}>{analysisResult.reason}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
