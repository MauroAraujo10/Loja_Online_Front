import React from 'react';
import { Rotas } from '../../Routes/rotas_const';
import { Link } from "react-router-dom";

export default function Erro() {
    return (
        <div>
            <h1>Página não encontrada</h1>
            <Link to={Rotas.Home}>Inicio</Link>
        </div>
    );
}