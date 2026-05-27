import { useState } from "react";

function HeroBanner() {
  const slides = [
    { bg: "#1a1a2e", emoji: "📦", title: "Great Indian Festival", sub: "Up to 80% off on Electronics" },
    { bg: "#0f3460", emoji: "📱", title: "New Arrivals in Mobiles", sub: "Latest iPhones & Android phones" },
    { bg: "#16213e", emoji: "🎧", title: "Audio Sale is LIVE", sub: "Headphones, earbuds & more" },
  ];

  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <div style={{ background: slide.bg, padding: "40px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 220, transition: "background 0.4s" }}>
      
      <div>
        <div style={{ color: "#FF9900", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>
          🔥 Limited Time Offer
        </div>
        <h1 style={{ color: "#fff", margin: "0 0 8px", fontSize: 36, fontFamily: "Georgia, serif" }}>
          {slide.title}
        </h1>
        <p style={{ color: "#ccc", margin: "0 0 20px" }}>{slide.sub}</p>
        <button style={{ background: "#FF9900", border: "none", padding: "12px 28px", borderRadius: 4, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
          Shop Now →
        </button>
      </div>

      <div style={{ fontSize: 100 }}>{slide.emoji}</div>

      {/* Dot navigation */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            style={{ width: 10, height: 10, borderRadius: "50%", border: "none", background: i === current ? "#FF9900" : "#555", cursor: "pointer" }}
          />
        ))}
      </div>

    </div>
  );
}

export default HeroBanner;