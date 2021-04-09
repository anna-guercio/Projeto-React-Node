import React from 'react';

import './Excluir.css';
import './Container.css';

import logo from '../assets/logo_computer.svg';

export default function Excluir() {
    return (
        <div className="container">
            <img src={logo} alt="" className="exclui-img" />
            <div className="form-exclui">
                <div className="bloco-exclui">
                    <p id="nome">nome completo</p>
                    <p id="idade">idade</p>
                    <input type="text" id="user-exclui1" placeholder="nome completo" />
                    <input type="text" id="user-exclui2" placeholder="idade" />
                </div>
                <div className="bloco-exclui">
                    <p id="cpf">cpf</p>
                    <p id="tel">telefone</p>
                    <input type="text" id="user-exclui1" placeholder="cpf" />
                    <input type="text" id="user-exclui2" placeholder="telefone" />
                </div>
                <div className="bloco-exclui3">
                    <p id="email">email</p>
                    <input type="text" id="user-exclui3" placeholder="email" />
                </div>
            </div>
            <button className="botao" id="btn-excluir">Excluir</button>
        </div>
    );
}