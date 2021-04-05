import React, { useState } from 'react';
import './Cadastro.css';
import './Container.css';

import logo from '../assets/logo_computer.svg';

export default function Cadastro(){
    const username = useState('');


    return (
        <div class="container">
        <img src={logo} alt="" class="cadastro-img" />
        <div class="form-cadastro">
            <div class="bloco">
                 <p id="nome">nome completo</p>
                 <p id="idade">idade</p>
                 <input type="text" class="bloco-esq" placeholder="nome completo" />
                 <input type="text" class="bloco-dir" placeholder="idade"/>
            </div>
            <div class="bloco">
                 <p id="cpf">cpf</p>
                 <p id="tel">telefone</p>
                 <input type="text" class="bloco-esq" placeholder="000.000.000-00" />
                 <input type="text" class="bloco-dir" placeholder="(00) 00000-0000" />
            </div>
            <div class="bloco">
                <p id="email">email</p>
                <input type="email" class="bloco-3" placeholder="exemplo@exemplo.com" />
            </div>
        </div>
    <button class="botao" id="btn-cadastro">Cadastrar</button>
    </div>
    );
}