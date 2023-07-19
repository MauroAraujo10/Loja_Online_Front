import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';

import ProdutosService from '../../services/Produtos/produto.service';
import { Rotas } from '../../Routes/rotas_const';

const Home = () => {
    const [storage, setStorage] = useState({});
    const [produtos, setProdutos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("storage"));

        async function getAllProdutos() {
            const produtos = await ProdutosService.GetAll();

            if (produtos)
                setProdutos(produtos);
        }

        if (storage && storage.IsAuthenticated) {
            setStorage(storage);
        }

        getAllProdutos();
    }, []);

    const handleMaisInformacoes = (idProduto) => {
        history.push(`Produto/${idProduto}`);
    }

    const teste = async (e) => {
        e.preventDefault();
        history.push(Rotas.Produtos_Create);
    }

    return (
        <h2 className="t-center">
            Bem vindo a Loja ONline
            <br />
            {
                storage.IsAuthenticated
                    ? <button onClick={(e) => teste(e)}>Cadastrar novo produto</button>
                    : <></>
            }
            <hr />

            <Row>
                {
                    produtos.map((produto) => {
                        return (
                            <Col md={6}>
                                <Card title={produto.Nome} style={{ margin: '10px' }} key={produto.IdProduto}>
                                    <img src={produto.Imagem} alt="img" style={{ width: '200px', height: '200px' }} />
                                    <h1>R$ {produto.Preco}</h1>
                                    <h5><b>Vendedor: </b>{produto.NomeVendedor}</h5>

                                    <Button
                                        style={{ background: '#006d75', color: '#FFF', }}
                                        onClick={() => handleMaisInformacoes(produto.IdProduto)}
                                    >
                                        Mais informações
                                    </Button>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </h2 >
    )
}

export default Home;