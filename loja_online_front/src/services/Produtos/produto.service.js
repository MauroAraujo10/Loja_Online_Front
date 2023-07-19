const apiUrl = 'https://localhost:7087/';

const methods = {
    async GetAll() {
        var produtos = await fetch(apiUrl + 'Produtos');
        return produtos.json();
    },
    async GetById(idProduto) {
        var produto = await fetch(`${apiUrl}Produtos/${idProduto}`);
        return produto.json();
    },
    async Post(ProdutosPostDto) {
        await fetch(`${apiUrl}Produtos`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${ProdutosPostDto.Token}`
            },
            body: JSON.stringify(ProdutosPostDto)
        });
    }
};

export default methods;