import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');
console.log(lista)

export default function constroiCard(nome, preco, imagem, id) {
    const produto = document.createElement("li");
    produto.className = "product";
    produto.innerHTML = `
                        <img src="${imagem}" alt="Imagem do produto" class="imagem-produto">
                        <div class="card-container--info">
                            <p>${nome}</p>
                            <div class="card-container--value">
                                <p>R$ ${preco},00</p>
                                <button class="deleta-produto" data-id="${id}">
                                    <img src="./img/trash.svg" alt="Ícone de remoção">
                                </button>
                            </div>
                        </div>
    `
    console.log(produto)
    return produto;
}

async function listaProdutos() {
    try {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)));
} catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h2>`
}
}

listaProdutos();