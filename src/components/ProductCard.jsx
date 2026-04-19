export default function ProductCard({ product }) {

  const comprar = () => {
    const numero = "5511999999999";
    const mensagem = `Olá! Quero comprar: ${product.name}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>R$ {product.price.toFixed(2)}</span>
      <button onClick={comprar}>Comprar</button>
    </div>
  );
}
