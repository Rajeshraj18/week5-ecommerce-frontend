import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    getTotal,
  } = useContext(CartContext);

  const shipping = 5.99;
  const tax = getTotal() * 0.08; // 8% tax example
  const finalTotal = getTotal() + shipping + tax;

  return (
    <div style={styles.container}>
      <h1>SHOPPING CART</h1>
      <hr />

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <p><b>Cart Items ({cartItems.length} items):</b></p>

          {cartItems.map((item, index) => (
            <div key={item.id} style={styles.card}>
              <h3>{index + 1}. {item.name}</h3>

              <p>Price: ${item.price.toFixed(2)}</p>

              <div style={styles.qtyRow}>
                <span>Quantity:</span>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <p>Total: ${(item.price * item.qty).toFixed(2)}</p>

        <button
  onClick={() => {
    console.log("Item ID:", item.id, typeof item.id);
    removeFromCart(item.id);
  }}
>
  Remove
</button>



            </div>
          ))}

          <hr />

          <div style={styles.summary}>
            <h2>📊 ORDER SUMMARY:</h2>

            <p>Subtotal: ${getTotal().toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>

            <h2>💵 TOTAL: ${finalTotal.toFixed(2)}</h2>

            <button style={styles.checkoutBtn}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    background: "#f9f9f9",
  },
  qtyRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  removeBtn: {
    marginTop: "10px",
    background: "black",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
  },
  summary: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff",
  },
  checkoutBtn: {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    background: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Cart;
