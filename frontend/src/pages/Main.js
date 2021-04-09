import React from 'react';
import { Link } from 'react-router-dom';

import './Main.css';
import './Container.css';

import logo from '../assets/logo_girl.svg';

export default function Main(){
    return (
        <div className="container">
        <form>
        <img src={logo} alt="" className="index-img" />
        <h1>Bem vindo</h1>
        <h3>Entre em nossa página e realize o seu cadastro</h3>
        <Link to="/cadastro"><button className="botao" type="submit">Entrar</button></Link>
        </form>
    </div>
    );
}