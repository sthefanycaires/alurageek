async function listaProdutos() {
    const conexao = await fetch ("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaProduto (nome, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            preco: `${preco}`,
            imagem: imagem
        })
    });

    console.log(conexao);

    if (!conexao.ok) {
        throw new Error ("Não foi possível cadastrar o produto");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}

async function deletaProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível excluir o produto");
    }

    return "Produto deletado com sucesso";
}

export const conectaApi = {
    listaProdutos,
    criaProduto,
    deletaProduto
}