const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_usuario: String,
    idade_usuario: Number,
    telefone_usuario: Number,
    cpf_usuario: Number,
    email_usuario: String
}, {
    timestamps: true
});

const usuarios = mongoose.model('Usuarios', DataSchema);

module.exports = usuarios;