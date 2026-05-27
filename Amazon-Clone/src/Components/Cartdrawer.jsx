function CartDrawer({ cart, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Dark overlay */}
      <div onClick={onClose}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 999 }}
      />

      {/* Drawer */}
      <div style={{ position: "fixed", top: 0, right: 0, width: 340, height: "100vh", background: "#fff", zIndex: 1000, display: "flex", flexDirection: "column" }}>

        {/* Header */}
        <div style={{ background: "#131921", color: "#fff", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 700, fontSize: 18 }}>🛒 Cart ({cart.length})</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer" }}>✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", color: "#888", marginTop: 60 }}>
              <div style={{ fontSize: 48 }}>🛒</div>
              <p>Your cart is empty!</p>
            </div>
          ) : (
            cart.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: 12, border: "1px solid #e8e8e8", borderRadius: 6 }}>
                <span style={{ fontSize: 36 }}>{item.img}</span>
                <div>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 500 }}>{item.name}</p>
                  <span style={{ color: "#CC0C39", fontWeight: 700 }}>₹{item.price.toLocaleString()}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout */}
        {cart.length > 0 && (
          <div style={{ padding: 16, borderTop: "1px solid #e8e8e8" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>
              <span>Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <button style={{ width: "100%", background: "#FFD814", border: "1px solid #FCD200", borderRadius: 20, padding: "12px 0", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
              Proceed to Checkout
            </button>
          </div>
        )}

      </div>
    </>
  );
}

export default CartDrawer;