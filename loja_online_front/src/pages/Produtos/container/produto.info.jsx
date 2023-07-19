import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import ProdutosService from '../../../services/Produtos/produto.service';
import { Rotas } from '../../../Routes/rotas_const';

const ProdutoInfo = () => {
    const { idProduto } = useParams();
    const [produto, setProduto] = useState({});

    useEffect(() => {

        async function getProdutoById() {
            const produto = await ProdutosService.GetById(idProduto);

            if (produto) {
                setProduto(produto);
            }
        }

        getProdutoById();
    }, [])

    return (
        <>
            {produto.Nome}
            <Link to={Rotas.Home}>Voltar</Link>
        </>
    );
}

export default ProdutoInfo;