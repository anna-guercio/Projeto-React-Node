import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Listas from './pages/Listas';
import Editar from './pages/Editar';
import Excluir from './pages/Excluir';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/listas" exact component={Listas} />
                <Route path="/listas/editar/:idUsuario" exact component={Editar} />
                <Route path="/excluir" exact component={Excluir} />
            </Switch>
        </BrowserRouter>
    );
}