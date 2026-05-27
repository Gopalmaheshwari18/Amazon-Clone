function ProductCard({ product, onAdd, added }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 6, padding: 16, display: "flex", flexDirection: "column", gap: 8, position: "relative", cursor: "pointer" }}>

      {product.badge && (
        <span style={{ position: "absolute", top: 8, left: 8, background: product.badge === "Best Seller" ? "#FF9900" : "#CC0C39", color: product.badge === "Best Seller" ? "#000" : "#fff", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 2 }}>
          {product.badge}
        </span>
      )}

      <div style={{ textAlign: "center", padding: "10px", background: "#f7f7f7", borderRadius: 4, height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src={product.img}
          alt={product.name}
          style={{ maxHeight: 160, maxWidth: "100%", objectFit: "contain" }}
          onError={(e) => { e.target.src = "https://placehold.co/150x150?text=No+Image"; }}
        />
      </div>

      <span style={{ fontSize: 11, color: "#007185" }}>{product.category}</span>
      <p style={{ margin: 0, fontSize: 14, color: "#111", fontWeight: 500, minHeight: 40 }}>{product.name}</p>

      <span style={{ color: "#FFA41C", fontSize: 13 }}>
        {"★".repeat(Math.floor(product.rating))}
        {"☆".repeat(5 - Math.floor(product.rating))}
        <span style={{ color: "#555", marginLeft: 4, fontSize: 12 }}>{product.rating}</span>
      </span>

      <span style={{ fontSize: 12, color: "#555" }}>{product.reviews.toLocaleString()} ratings</span>

      <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
        <span style={{ fontSize: 20, fontWeight: 700 }}>₹{product.price.toLocaleString()}</span>
        <span style={{ fontSize: 12, color: "#555", textDecoration: "line-through" }}>₹{product.mrp.toLocaleString()}</span>
        <span style={{ fontSize: 13, color: "#CC0C39", fontWeight: 600 }}>{discount}% off</span>
      </div>

      <span style={{ fontSize: 12, color: "#007600" }}>✓ {product.delivery}</span>

      <button onClick={() => onAdd(product)}
        style={{ background: added ? "#4CAF50" : "#FFD814", border: "1px solid", borderColor: added ? "#388E3C" : "#FCD200", borderRadius: 20, padding: "8px 0", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
        {added ? "✓ Added!" : "Add to Cart"}
      </button>

    </div>
  );
}

export default ProductCard;