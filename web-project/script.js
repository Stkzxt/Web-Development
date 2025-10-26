const produtos = [
  { nome: "Men's sneakers", preco: "$ 49,90", descricao: "Tênis masculino confortável e estiloso.", imagem: "imagens/tenis_macho.jpg" },
  { nome: "Placa Mae Asus Tuf Gaming A520m-plus II DDR4 Preto", preco: "$ 199,99", descricao: "Placa mãe para jogos com desempenho avançado.", imagem: "imagens/placa_mãe.jpg" },
  { nome: "Notebook Vaio FE16 - Ryzen 5 5625U - Painel IPS - 8GB RAM (EXPANSÍVEL ATÉ 64GB) - 256GB", preco: "$ 248,00", descricao: "Notebook Vaio potente para produtividade e lazer.", imagem: "imagens/notebook1.jpg" },
  { nome: "Notebook Lenovo IdeaPad Slim 3 15IRH10 Intel Core i5-13420H 8GB 512GB SSD Windows 11 15.3\" - 83NS0002BR Luna Grey", preco: "$ 270,90", descricao: "Notebook Lenovo fino, leve e moderno com bom desempenho.", imagem: "imagens/notebook2.jpg" }
];

const containerProdutos = document.querySelector(".products");

produtos.forEach((produto, index) => {
  const card = document.createElement("div");
  card.className = "product";
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" onclick="abrirModal(${index})">
    <h2>${produto.nome}</h2>
    <p>${produto.preco}</p>
    <button onclick="abrirModal(${index})">Buy</button>
  `;
  containerProdutos.appendChild(card);
});

const modal = document.getElementById('modal-produto');
const modalImagem = document.getElementById('modal-imagem');
const modalNome = document.getElementById('modal-nome');
const modalPreco = document.getElementById('modal-preco');
const modalDescricao = document.getElementById('modal-descricao');
const modalComprar = document.getElementById('modal-comprar');
const fecharModal = document.getElementById('fechar-modal');

function abrirModal(index) {
  const produto = produtos[index];
  modalImagem.src = produto.imagem;
  modalNome.innerText = produto.nome;
  modalPreco.innerText = produto.preco;
  modalDescricao.innerText = produto.descricao;

  modal.style.display = "block";

  modalComprar.onclick = () => {
    alert(produto.nome + " added to cart!");
    modal.style.display = "none";
  };
}

fecharModal.onclick = () => { modal.style.display = "none"; };
window.onclick = (event) => { if (event.target == modal) modal.style.display ="none"; };

function filtrarProdutos() {
  const input = document.getElementById("search");
  const filtro = input.value.toLowerCase();
  const produtos = document.querySelectorAll(".product");

  produtos.forEach(produto => {
    const nome = produto.querySelector("h2").innerText.toLowerCase();
    produto.style.display = nome.includes(filtro) ? "" : "none";
  });
}