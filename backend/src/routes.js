const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller')

routes.get('/', Usuario.index); // página home

// Rotas de usuários
routes.post('/cadastro',Usuario.create); // minha página de cadastro - criar um usuario  
routes.get('/listas',Usuario.index); // listar todos os usuários cadastrados
routes.get('/listas.details', Usuario.details); // detalhes de um usuário
routes.delete('/excluir',Usuario.delete); // deletar um usuario especifico
routes.put('/editar', Usuario.update); // atualizar os dados de um usuario

module.exports = routes;