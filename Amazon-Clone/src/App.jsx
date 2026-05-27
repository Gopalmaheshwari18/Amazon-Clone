import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import products from "./data/product";

const categories = ["All", "Electronics", "Mobiles", "Fashion", "Kitchen", "Sports", "Books", "Beauty"];

function App() {
  const [cart, setCart] = useState([]);
  const [addedIds, setAddedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);

  const handleAdd = (product) => {
    setCart(prev => [...prev, product]);
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => setAddedIds(prev => prev.filter(id => id !== product.id)), 2000);
  };

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#EAEDED", minHeight: "100vh" }}>

      <Navbar cart={cart} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <HeroBanner />

      {/* Category filter buttons */}
      <div style={{ background: "#fff", padding: "12px 20px", display: "flex", gap: 8, overflowX: "auto" }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            style={{ background: activeCategory === cat ? "#FF9900" : "#f0f2f2", border: "1px solid", borderColor: activeCategory === cat ? "#e77600" : "#d5d9d9", borderRadius: 20, padding: "6px 16px", fontWeight: activeCategory === cat ? 700 : 400, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div style={{ padding: "20px 16px" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, marginBottom: 16 }}>
          {searchTerm ? `Results for "${searchTerm}"` : activeCategory === "All" ? "Featured Products" : activeCategory}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onAdd={handleAdd} added={addedIds.includes(p.id)} />
          ))}
        </div>
      </div>

      <Footer />

      {/* Cart drawer */}
      {showCart && <CartDrawer cart={cart} onClose={() => setShowCart(false)} />}

      {/* Floating cart button */}
      {cart.length > 0 && (
        <button onClick={() => setShowCart(true)}
          style={{ position: "fixed", bottom: 24, right: 24, background: "#FF9900", border: "none", borderRadius: "50%", width: 56, height: 56, fontSize: 24, cursor: "pointer", zIndex: 998 }}>
          🛒
        </button>
      )}

    </div>
  );
}

export default App;