import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form, Input, DatePicker, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons'

import UsuarioService from '../../../services/Usuarios/usuario.service';
import LoginService from '../../Login/service/Login.service';
import { Rotas } from '../../../Routes/rotas_const';

const UsuarioCrate = () => {
    const [data, setData] = useState();
    const history = useHistory();

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('storage'));

        if (storage.IsAuthenticated) {
            history.push(Rotas.Home);
        }
    })

    const submitForm = async (form) => {

        if (form.Senha !== form.ConfirmacaoSenha) {
            alert('Senhas diferentes');
            return;
        }

        const dto = {
            Nome: form.Nome,
            DataNascimento: form.DataNascimento,
            CPF: form.CPF,
            Sexo: form.Sexo,
            Login: form.Login,
            Senha: form.Senha
        };

        await UsuarioService.Create(dto)
            .then((result) => {

                if (result && result.status === 201) {

                    const loginViewModel = {
                        Login: dto.Login,
                        Password: dto.Senha
                    };


                    LoginService.Logar(loginViewModel)
                        .then((result) => {
                            debugger;
                            result.IsAuthenticated = true;
                            localStorage.setItem("storage", JSON.stringify(result));
                            history.push(Rotas.Home);
                        });
                }
            })
            .catch((error) => {
                alert('Erro ao cadastrar usuario: ' + error);
            });

    }

    return (
        <div className='login-container'>
            <Form className='login-form' onFinish={submitForm}>

                <div className='login-form-title'>
                    <UserOutlined className='login-form-icon' />
                    <br />
                    Cadastro de usuário
                </div>

                <Form.Item
                    label="Nome"
                    name="Nome"
                    className="mt-20"
                    rules={[{ required: true }]}>
                    <Input
                        autoFocus
                        type='text'
                        placeholder='Nome'
                        tabIndex={1}
                        maxLength={50}
                    />
                </Form.Item>

                <Form.Item
                    label="Data de Nascimento"
                    name="DataNascimento"
                    rules={[{ required: true }]}>
                    <DatePicker
                        format="DD/MM/YYYY"
                        onChange={(date, dateString) => setData(dateString)}
                    />
                </Form.Item>

                <Form.Item
                    label="CPF"
                    name="CPF"
                    rules={[{ required: true }]}>
                    <Input
                        type='text'
                        placeholder='CPF'
                        tabIndex={3}
                    />
                </Form.Item>

                <Form.Item
                    label="Sexo"
                    name="Sexo"
                    rules={[{ required: true }]}>
                    <Input
                        type='text'
                        placeholder='Sexo'
                        tabIndex={4}
                    />
                </Form.Item>

                <Form.Item
                    label="Login ou email"
                    name="Login"
                    rules={[{ required: true }]}>
                    <Input
                        type='text'
                        placeholder='Login'
                        tabIndex={5}
                    />
                </Form.Item>

                <Form.Item
                    label="Senha"
                    name="Senha"
                    rules={[{ required: true }]}>
                    <Input
                        type='password'
                        placeholder='Senha'
                        tabIndex={6}
                    />
                </Form.Item>

                <Form.Item
                    label="Confirmação de Senha"
                    name="ConfirmacaoSenha"
                    rules={[{ required: true }]}>
                    <Input
                        type='password'
                        placeholder='Confirmação de Senha'
                        tabIndex={7}
                    />
                </Form.Item>

                <div className='t-right'>
                    <Button htmlType="submit" tabIndex={8}>
                        Cadastrar
                    </Button>
                    <Link to="/">Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default UsuarioCrate