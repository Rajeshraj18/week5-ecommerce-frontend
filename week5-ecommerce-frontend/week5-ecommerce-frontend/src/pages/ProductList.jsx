import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductList() {
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      padding: "50px",
      backgroundColor: "#f5f7fa",
      minHeight: "100vh"
    }}>
      {products.map(product => (
        <div key={product.id} style={{
          background: "white",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          transition: "transform 0.2s ease"
        }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover"
            }}
          />

          <div style={{ padding: "20px" }}>
            <h3 style={{ marginBottom: "10px" }}>
              {product.name}
            </h3>

            <p style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#667eea"
            }}>
              ${product.price}
            </p>

            <button
              onClick={() => dispatch(addToCart(product))}
              style={{
                marginTop: "15px",
                background: "linear-gradient(90deg, #667eea, #764ba2)",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                width: "100%"
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
