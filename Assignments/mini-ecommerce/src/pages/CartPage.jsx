import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ marginTop: "20px" }}>

      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>

          {item.name} - ₹{item.price}

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>
      ))}

    </div>
  );
};

export default CartPage;