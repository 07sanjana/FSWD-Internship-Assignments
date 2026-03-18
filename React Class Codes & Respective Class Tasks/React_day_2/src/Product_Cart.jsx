import React, { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

function ProductCart() {
  const [cartCount, setCartCount] = useState(0);

  // useEffect to log cart updates
  useEffect(() => {
    console.log("Cart updated. Items in cart:", cartCount);
  }, [cartCount]);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Product List</h2>
      <h3>Cart Count: {cartCount}</h3>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            width: "250px"
          }}
        >
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductCart;