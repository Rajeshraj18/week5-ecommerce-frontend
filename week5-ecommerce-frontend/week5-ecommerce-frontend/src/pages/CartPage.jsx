import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{
      padding: "50px",
      background: "#f4f6f9",
      minHeight: "100vh"
    }}>
      <h2 style={{ marginBottom: "30px" }}>🛒 Shopping Cart</h2>

      {cartItems.length === 0 && (
        <p>Your cart is empty.</p>
      )}

      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "40px"
      }}>
        {/* LEFT SIDE - ITEMS */}
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{
              display: "flex",
              alignItems: "center",
              background: "white",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
            }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "20px"
                }}
              />

              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0 }}>{item.name}</h4>
                <p style={{ color: "#667eea", fontWeight: "bold" }}>
                  ${item.price}
                </p>
              </div>

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(updateQuantity({
                    id: item.id,
                    quantity: Number(e.target.value),
                  }))
                }
                style={{
                  width: "60px",
                  padding: "5px",
                  marginRight: "20px"
                }}
              />

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                style={{
                  background: "#ff4d4f",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          height: "fit-content"
        }}>
          <h3>Order Summary</h3>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px"
          }}>
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px"
          }}>
            <span>Shipping</span>
            <span>$5.99</span>
          </div>

          <hr />

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            fontWeight: "bold",
            fontSize: "18px"
          }}>
            <span>Total</span>
            <span>${(total + 5.99).toFixed(2)}</span>
          </div>

          <button style={{
            marginTop: "25px",
            width: "100%",
            padding: "12px",
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
