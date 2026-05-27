function Navbar({ cart, searchTerm, setSearchTerm }) {
  return (
    <div style={{ background: "#131921", position: "sticky", top: 0, zIndex: 100 }}>

      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 16px" }}>

        {/* Logo */}
        <div style={{ padding: "4px 8px", cursor: "pointer" }}>
          <span style={{ color: "#fff", fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 22 }}>amazon</span>
          <span style={{ color: "#FF9900", fontSize: 11, fontWeight: 600 }}>.in</span>
        </div>

        {/* Search bar */}
        <div style={{ flex: 1, display: "flex", height: 40, borderRadius: 4, overflow: "hidden" }}>
          <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search Amazon.in"
            style={{ flex: 1, border: "none", padding: "0 12px", fontSize: 15, outline: "none" }}
          />
          <button style={{ background: "#FF9900", border: "none", padding: "0 16px", cursor: "pointer", fontSize: 20 }}>
            🔍
          </button>
        </div>

        {/* Cart icon */}
        <div style={{ color: "#fff", fontSize: 20, cursor: "pointer", position: "relative" }}>
          🛒
          <span style={{ position: "absolute", top: -8, right: -8, background: "#FF9900", color: "#000", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>
            {cart.length}
          </span>
        </div>

      </div>

      {/* Bottom nav */}
      <div style={{ background: "#232F3E", padding: "4px 16px", display: "flex", gap: 16 }}>
        {["☰ All", "Today's Deals", "Electronics", "Fashion", "Mobiles", "Home", "Books"].map(item => (
          <span key={item} style={{ color: "#fff", fontSize: 13, cursor: "pointer", padding: "4px 6px", whiteSpace: "nowrap" }}>
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}

export default Navbar;