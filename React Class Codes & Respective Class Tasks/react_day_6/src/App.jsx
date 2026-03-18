// import Counter from "./components/counter";
import React from "react";
import ThemeProvider from "./Context/ThemeContext";
import Navbar from "./components/navbar";

// function App() {
//   return (
//     <div>
//       <h1>Local State Management</h1>
//       <Counter />
//     </div>
//   );
// }

// import Products from "./components/Products";

// function App() {
//   const[cartItems, setCartItems] = React.useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <Products name="Laptop" addToCart={addToCart} />
//       <Products name="iPhone" addToCart={addToCart} />
//       <Products name="Head Phones" addToCart={addToCart} />
//       <Products name="Tablet" addToCart={addToCart} />
//     </div>
//   );
// }


// Global state

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;