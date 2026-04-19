import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />

      <section className="produtos">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
