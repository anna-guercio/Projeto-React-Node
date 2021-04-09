import React, { useState, useEffect } from 'react';
import api from '../api';

import { useParams } from 'react-router-dom';

import './Cadastro.css';
import './Editar.css';
import './Container.css';

import logo from '../assets/logo_computer.svg';

export default function Editar(row) {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    const { idUsuario } = useParams();

    useEffect(() => {
        async function getUsuario() {
            var response = await api.get('/listas.details/?_id=' + idUsuario);

            setNome(response.data.nome_usuario);
            setIdade(response.data.idade_usuario);
            setTelefone(response.data.telefone_usuario);
            setCpf(response.data.cpf_usuario);
            setEmail(response.data.email_usuario);
        }
        getUsuario();
    }, [])

    async function handleSubmit() {

        const data = {
            nome_usuario: nome,
            idade_usuario: idade,
            telefone_usuario: telefone,
            cpf_usuario: cpf,
            email_usuario: email,
            _id: idUsuario
        }

        if (nome !== '' && email !== '') {
            const response = await api.put('editar', data);

            if (response.status === 200) {
                window.location.href = '/listas'
            } else {
                alert('Erro ao atualizar o usuário!');
            }
        } else {
            alert('Por favor, preencha todos os dados!');
        }
    }

    async function handleDelete() {
        if (window.confirm("Deseja realmente excluir este usuário?")) {
            var result = await api.delete('excluir/?_id=' + idUsuario);
            if (result.status === 200) {
                window.location.href = '/listas';
            } else {
                alert('Ocorreu um erro. Por favor, tente novamente!');
            }
        }
    }

    return (
        <div className="container">
            <img src={logo} alt="" className="cadastro-img" />
            <h1 id="h1-edit">Atualização de Usuários</h1>
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
            <button className="botao" id="btn-salvar" type="submit" onClick={handleSubmit}>Salvar</button>
            <button className="botao" id="btn-exclui" onClick={() => handleDelete(row._id)}>Excluir</button>
        </div>
    );
}