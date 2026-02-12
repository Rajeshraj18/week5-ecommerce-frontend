import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My Store</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>

        <Link to="/cart" style={styles.cart}>
          Cart
          {cartCount > 0 && (
            <span style={styles.badge}>{cartCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#111",          // ✅ Dark modern navbar
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },

  logo: {
    margin: 0,
    fontSize: "22px",
  },

  links: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "#ddd",
    textDecoration: "none",
    fontSize: "16px",
  },

  cart: {
    position: "relative",
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },

  // ✅ FINAL BADGE STYLE
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-14px",
    background: "#ff4757",       // ✅ Stylish modern red
    color: "white",
    borderRadius: "50%",
    padding: "4px 8px",
    fontSize: "12px",
    fontWeight: "bold",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  },
};

export default Header;
