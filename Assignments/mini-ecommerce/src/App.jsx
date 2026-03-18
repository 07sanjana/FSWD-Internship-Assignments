import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

const App = () => {

  const [page, setPage] = useState("products");

  return (
    <CartProvider>

      <Navbar setPage={setPage} />

      <div style={{ padding: "20px" }}>
        {page === "products" && <ProductList />}
        {page === "cart" && <CartPage />}
      </div>

    </CartProvider>
  );
};

export default App;