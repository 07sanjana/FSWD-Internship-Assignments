import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "150px" }}>
      {/* <img src={product.image} alt={product.name} width="100%" /> */}

      <h4>{product.name}</h4>

      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;