import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import { Rotas } from '../../Routes/rotas_const';

const Header = () => {
    const [storage, setStorage] = useState({});
    const history = useHistory();

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('storage'));

        if (storage && storage.IsAuthenticated) {
            setStorage(storage);
        }
    }, []);

    const GoToLogin = () => {
        history.push(Rotas.Login);
    }

    const GoToRegister = () => {
        history.push(Rotas.Usuario_Create);
    }

    const Logout = () => {
        setStorage({});
        localStorage.setItem('storage', JSON.stringify({}));
        history.push(Rotas.Home);
        window.location.reload();
    }

    return (
        <Row style={{ background: "#AAA", borderBottom: '5px solid #0000FF' }}>
            <Col md={4} style={{ marginTop: '10px', marginLeft: '20px' }}>
                <h1>
                    <CheckCircleOutlined style={{ color: "#00FF00", marginRight: '10px' }} />
                    <Link to={Rotas.Home}>Loja ONline</Link>
                </h1>

            </Col>
            <Col md={16} style={{ marginTop: '10px' }}>
            </Col>
            <Col md={2} style={{ marginTop: '10px' }}>
                {
                    storage.IsAuthenticated ?
                        <>
                            <h4>Bem vindo {storage.Login}</h4>
                            <button onClick={() => Logout()}>Sair</button>
                        </>
                        :
                        <>
                            <button style={{ marginRight: '10px' }} onClick={() => GoToLogin()}>Logar</button>
                            <button onClick={() => GoToRegister()}>Registrar</button>
                        </>
                }
            </Col>
        </Row>
    )
}

export default Header;