function Footer() {
  return (
    <div style={{ background: "#232F3E", color: "#fff", padding: "24px 20px", marginTop: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, marginBottom: 20 }}>
        {[
          { title: "Get to Know Us", links: ["Careers", "About Amazon", "Blog"] },
          { title: "Make Money with Us", links: ["Sell on Amazon", "Amazon Associates"] },
          { title: "Let Us Help You", links: ["Your Account", "Your Orders", "Returns"] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ margin: "0 0 10px", fontSize: 14 }}>{col.title}</h4>
            {col.links.map(l => (
              <div key={l} style={{ fontSize: 12, color: "#aaa", marginBottom: 6, cursor: "pointer" }}>{l}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", borderTop: "1px solid #3a4553", paddingTop: 16 }}>
        <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 20 }}>
          amazon<span style={{ color: "#FF9900" }}>.in</span>
        </span>
        <p style={{ color: "#888", fontSize: 12 }}>© 2024 Amazon Clone — B.Tech React Project</p>
      </div>
    </div>
  );
}

export default Footer;