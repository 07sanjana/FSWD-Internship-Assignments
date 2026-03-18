import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = ({ setPage }) => {

  const { cart } = useContext(CartContext);

  return (
    <div style={{ display: "flex", gap: "20px", background: "#ddd", padding: "10px" }}>
      <button onClick={() => setPage("products")}>Home</button>

      <button onClick={() => setPage("cart")}>
        Cart ({cart.length})
      </button>
    </div>
  );
};

export default Navbar;