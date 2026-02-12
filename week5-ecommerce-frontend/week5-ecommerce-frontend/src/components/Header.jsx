import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector(state => state.cart.items);

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginLeft: "25px",
    fontSize: "16px",
    fontWeight: "500"
  };

  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 50px",
      background: "linear-gradient(90deg, #667eea, #764ba2)",
      color: "white",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
    }}>
      <h2 style={{ margin: 0, fontWeight: "700" }}>
        🛍 MyStore
      </h2>

      <nav>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/products" style={linkStyle}>Products</NavLink>
        <NavLink to="/cart" style={linkStyle}>
          Cart ({cartItems.length})
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
