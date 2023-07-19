import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import ProdutosService from '../../../services/Produtos/produto.service';
import { Rotas } from '../../../Routes/rotas_const';

const ProdutoCreate = () => {
    const history = useHistory();

    const submitForm = async (form) => {
        const session = JSON.parse(localStorage.getItem("storage"));
        console.log(session);

        const dto = {
            Login: session.Login,
            Imagem: form.Imagem,
            Nome: form.Nome,
            Preco: Number(form.Preco),
            QuantidadeEstoque: Number(form.Quantidade),
            Descricao: form.Descricao,
            Status: Number(form.Status),
            Token: session.Token
        };

        await ProdutosService.Post(dto)
            .then((result) => {
                history.push(Rotas.Home);
            })
    }

    return (
        <Form layout='vertical'
            style={{ width: '40%', marginLeft: '200px', marginTop: '20px' }}
            onFinish={submitForm}>
            <Form.Item
                label="Nome do Produto"
                name="Nome"
                rule={{ required: true }}>
                <Input
                    type="text"
                    placeholder='Nome do Produto'
                    maxLength={100}
                />
            </Form.Item>
            <Form.Item
                label="Imagem"
                name="Imagem"
                rule={{ required: true }}>
                <Input
                    type="text"
                    placeholder='Imagem'
                    maxLength={255}
                />
            </Form.Item>
            <Form.Item
                label="Preço"
                name="Preco"
                rule={{ required: true }}>
                <Input
                    type="number"
                    placeholder='Preco'
                />
            </Form.Item>
            <Form.Item
                label="Quantidade no estoque"
                name="Quantidade"
                rule={{ required: true }}>
                <Input
                    type="number"
                    placeholder='Quantidade no estoque'
                />
            </Form.Item>
            <Form.Item
                label="Descrição"
                name="Descricao"
                rule={{ required: true }}>
                <Input
                    type="tet"
                    placeholder='Quantidade no estoque'
                />
            </Form.Item>
            <Form.Item
                label="Status"
                name="Status"
                rule={{ required: true }}>
                <Input
                    type="number"
                />
            </Form.Item>
            <Button
                htmlType="submit">
                Salvar
            </Button>
        </Form>
    );
}

export default ProdutoCreate;