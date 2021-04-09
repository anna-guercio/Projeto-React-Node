import React, { useState } from 'react';
import api from '../api';

import './Cadastro.css';
import './Container.css';

import logo from '../assets/logo_computer.svg';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit() {

    const data = {
      nome_usuario: nome,
      idade_usuario: idade,
      telefone_usuario: telefone,
      cpf_usuario: cpf,
      email_usuario: email
    }
    if (nome !== '' && email !== '') {
      const response = await api.post('cadastro', data);

      if (response.status === 200) {
        window.location.href = '/listas'
      } else {
        alert('Erro ao cadastrar o usuário!');
      }
    } else {
      alert('Por favor, preencha todos os dados!');
    }
  }

  return (
    <div className="container">
      <img src={logo} alt="" className="cadastro-img" />
      <div className="form-cadastro">
        <div className="bloco">
          <p id="nome">nome completo</p>
          <p id="idade">idade</p>
          <input type="text" className="bloco-esq" placeholder="nome completo" value={nome} onChange={e => setNome(e.target.value)} />
          <input type="number" className="bloco-dir" placeholder="idade" value={idade} onChange={e => setIdade(e.target.value)} />
        </div>
        <div className="bloco">
          <p id="cpf">cpf</p>
          <p id="tel">telefone</p>
          <input type="number" className="bloco-esq" placeholder="000.000.000-00" value={cpf} onChange={e => setCpf(e.target.value)} />
          <input type="number" className="bloco-dir" placeholder="(00) 00000-0000" value={telefone} onChange={e => setTelefone(e.target.value)} />
        </div>
        <div className="bloco">
          <p id="email">email</p>
          <input type="email" className="bloco-3" placeholder="exemplo@exemplo.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
      </div>
      <button className="botao" id="btn-cadastro" type="submit" onClick={handleSubmit}>Cadastrar</button>
    </div>
  );
}