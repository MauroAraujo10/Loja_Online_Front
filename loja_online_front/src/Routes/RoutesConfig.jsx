import React from 'react';
import { Switch , Route } from 'react-router-dom';
import { Rotas } from './rotas_const';

import Home from '../pages/Home/Home';
import Erro from '../pages/Erro/Erro';

import UsuarioCrate from '../pages/Usuarios/container/usuario.create';

const RoutesConfig = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path={Rotas.Usuario_Create} component={UsuarioCrate} />

            <Route path="*" component={Erro} />
        </Switch>
    )
}

export default RoutesConfig;