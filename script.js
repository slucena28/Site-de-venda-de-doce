function comprar(produto) {
  const numero = "5511999999999"; // coloque seu WhatsApp aqui
  const mensagem = `Olá! Gostaria de comprar: ${produto}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
