import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { FacebookOutlined, MailOutlined } from '@ant-design/icons'

import Service from './service/Login.service';
import { Rotas } from '../../Routes/rotas_const';

const Login = () => {
    const history = useHistory();

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('storage'));

        if (storage.IsAuthenticated) {
            history.push(Rotas.Home);
        }
    })

    const submitForm = async (form) => {
        const dto = {
            Login: form.Login,
            Password: form.Password
        };

        await Service.Logar(dto)
            .then((result) => {

                if (result.status && result.status === 404) {
                    alert('Usuário não encontrado');
                    return;
                }

                result.IsAuthenticated = true;
                localStorage.setItem("storage", JSON.stringify(result));
                history.push(Rotas.Home);
            })
            .catch((error) => {
                localStorage.setItem("storage", {});
                alert(error);
            })
    }

    const loginFacebook = () => {
        alert('Logar via Facebook');
    }

    const loginGmail = () => {
        alert('Logar via Gmail');
    }

    return (
        <div className="login-container">
            <Form layout="vertical" className='login-form' onFinish={submitForm}>

                <p className='login-form-title'>
                    Entrar na Loja ONline
                </p>

                <div className='login-form-login-with'>
                    <Button onClick={() => loginFacebook()} className="btn-facebook mr-10">
                        <FacebookOutlined />
                        Facebook
                    </Button>
                    <Button onClick={() => loginGmail()} className="btn-google">
                        <MailOutlined />
                        Google
                    </Button>
                </div>

                <Form.Item
                    className='mt-10'
                    label="Login"
                    name="Login"
                    rules={[{ required: true }]}>
                    <Input
                        type="text"
                        placeholder="Login"
                        maxLength={50}
                    />
                </Form.Item>
                <Form.Item
                    label="Senha"
                    name="Password"
                    rules={[{ required: true }]}>
                    <Input
                        type="password"
                        placeholder="Senha"
                        maxLength={20}
                    />
                </Form.Item>

                <div className='t-center'>
                    Não possui cadastro ? <Link to={Rotas.Usuario_Create}> Cadastre aqui</Link>
                </div>

                <div className='t-right mt-10'>
                    <Button className='btn-primary' htmlType="submit">Entrar</Button>
                </div>
            </Form>
        </div>
    );
}

export default Login;