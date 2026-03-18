import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

const ProductList = () => {

  const products = getProducts();

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;