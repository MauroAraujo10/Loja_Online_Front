import React, { useState } from 'react';
import { Row, Col } from 'antd';

const Home = () => {
    const [produtos, setProdutos] = useState([]);

    const teste = async (e) => {
        e.preventDefault();
        const result = await fetch('https://localhost:7087/Produtos');
        setProdutos(await result.json());
    }

    return (
        <h2 className="t-center">
            Bem vindo a Loja ONline
            <br />
            <button onClick={(e) => teste(e)}>Mostrar todos os produtos</button>
            <hr />

            {
                produtos.map((produto) => {
                    return (
                        <Row gutter={10} >
                            <Col md={8}>
                                <img
                                    style={{width: '100%', heigth: 'auto'}} 
                                    src={produto.Imagem} alt="" />
                            </Col>
                            <Col md={8}>
                                <h2>{produto.Nome}</h2>
                                <h4>Preço R$ {produto.Preco}</h4>
                                <p>{produto.Descricao}</p>
                                <h5><b>Vendedor: </b>{produto.NomeVendedor}</h5>
                            </Col>
                        </Row>
                    )
                })
            }
        </h2>
    )
}

export default Home;