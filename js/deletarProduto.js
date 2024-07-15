import { conectaApi } from "./conectaApi.js";

document.getElementById("products-container").addEventListener("click", async (evento) => {
    if (evento.target.closest("button") && evento.target.closest("button").classList.contains("deleta-produto")) {
        const id = evento.target.closest("button").dataset.id;
        console.log("ID do produto:", id);
        try {
            await conectaApi.deletaProduto(id);
            evento.target.closest("li").remove();
            alert("Produto deletado com sucesso");
        } catch (e) {
            console.log(e);
            alert(e.message);
        }
    }
});
