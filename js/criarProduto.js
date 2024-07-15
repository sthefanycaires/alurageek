import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();
    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

try {
    await conectaApi.criaProduto(nome, preco, imagem);

} catch (e) {
    console.log(e)
    alert(e)
}
}

formulario.addEventListener("submit", evento => criarProduto(evento));

document.getElementById("limpar").addEventListener("click", () => {
    const nome = document.querySelector("[data-nome]");
    const preco = document.querySelector("[data-preco]");
    const imagem = document.querySelector("[data-imagem]");
    
    nome.value = "";
    preco.value = "";
    imagem.value = "";
});
