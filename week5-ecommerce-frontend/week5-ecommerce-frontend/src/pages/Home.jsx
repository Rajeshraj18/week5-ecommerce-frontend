import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* HERO SECTION */}
      <div style={{
        height: "85vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center"
      }}>
        {/* Overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))"
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{
            fontSize: "48px",
            marginBottom: "20px"
          }}>
            Discover Premium Products
          </h1>

          <p style={{
            fontSize: "20px",
            marginBottom: "30px"
          }}>
            Shop smart. Shop stylish. Shop with confidence.
          </p>

          <button
            onClick={() => navigate("/products")}
            style={{
              padding: "14px 30px",
              fontSize: "18px",
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
            }}
          >
            Explore Products
          </button>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div style={{
        padding: "60px 40px",
        textAlign: "center",
        background: "#f5f7fa"
      }}>
        <h2 style={{ marginBottom: "40px" }}>
          Why Choose Us?
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "30px"
        }}>
          <div style={{
            width: "250px",
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
          }}>
            <h3>🚀 Fast Delivery</h3>
            <p>Quick and reliable shipping worldwide.</p>
          </div>

          <div style={{
            width: "250px",
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
          }}>
            <h3>💳 Secure Payment</h3>
            <p>100% secure and encrypted payment system.</p>
          </div>

          <div style={{
            width: "250px",
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
          }}>
            <h3>⭐ Premium Quality</h3>
            <p>Only high-quality and trusted products.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
