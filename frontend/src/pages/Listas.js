import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

import './Listas.css';
import './Container.css';

import logo from '../assets/logo_computer2.svg';
import plus from '../assets/plus.png'
import lupa from '../assets/lupa.svg'

export default function Listas() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get('listas');
            setUsuarios(response.data);
        }
        loadUsuarios();
    }, [])

    return (
        <div className="container-list">
            <div className="nav">
                <img src={logo} alt="" className="nav-img" />
                <h1>Usuários</h1>
                <Link to="/cadastro"><button className="botao" type="submit" id="btn-add">Add User</button></Link>
            </div>
            <div className="bloco-user">
                <div className="registro">
                {/* <div className="coluna0">
                        {usuarios.map((row) => (
                            <button className="btn-edit" type="submit" id="btn-edit">{row._id}</button>
                        ))}
                    </div> */}
                    <div className="coluna1">
                        {usuarios.map((row) => (
                       <Link to={'/listas/editar/'+row._id}><button className="btn-edit" type="submit" id="btn-list">{row.nome_usuario}</button></Link>
                        ))}
                    </div>
                    <div className="coluna2">
                        {usuarios.map((row) => (
                            <p>{row.idade_usuario}</p>
                        ))}
                    </div>
                    <div className="coluna3">
                        {usuarios.map((row) => (
                            <p>{row.cpf_usuario}</p>
                        ))}
                    </div>
                    <div className="coluna4">
                        {usuarios.map((row) => (
                            <p>{row.telefone_usuario}</p>
                        ))}
                    </div>
                    <div className="coluna5">
                        {usuarios.map((row) => (
                            <p>{row.email_usuario}</p>
                        ))}
                    </div>
                    {/* <div className="botoes">
                        <button className="btn-edit" type="submit" id="btn-edit">Editar</button>
                        <button className="btn-exclui" type="submit" id="btn-exclui">Exclui</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}