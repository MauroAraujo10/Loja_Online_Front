import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Rotas } from './rotas_const';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Erro from '../pages/Erro/Erro';

import UsuarioCrate from '../pages/Usuarios/container/usuario.create';

import ProdutoCrate from '../pages/Produtos/container/produto.create';
import ProdutoInfo from '../pages/Produtos/container/produto.info';

const RoutesConfig = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={Rotas.Login} component={Login} />

            <Route exact path={Rotas.Usuario_Create} component={UsuarioCrate} />
            
            <Route exact path={Rotas.Produtos_Create} component={ProdutoCrate} />
            <Route exact path={Rotas.Produto_Info} component={ProdutoInfo} />

            <Route path="*" component={Erro} />
        </Switch>
    )
}

export default RoutesConfig;