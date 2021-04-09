const { update } = require('../models/usuario.model');
const Usuario = require('../models/usuario.model');
const routes = require('../routes');


//aqui dentro exportar todas as funções
module.exports = {

    async index(req, res) { // busca a informações de todos os usuários do banco
        const user = await Usuario.find();
        res.json(user);
    },
    async create(req, res) { // cria um novo usuário
        const { nome_usuario, idade_usuario, telefone_usuario, cpf_usuario, email_usuario } = req.body;
        let data = {};
        let user = await Usuario.findOne({ cpf_usuario });
        
        if (!user) {
            data = { nome_usuario, idade_usuario, telefone_usuario, cpf_usuario, email_usuario };
            user = await Usuario.create(data);

            return res.status(200).json(user);
        } else {
            return res.status(500).json(user);
        }
    }, 
    async details(req, res) { // escolhendo um usuario especifico
        const {_id} = req.query;
        const user = await Usuario.findOne({_id});
        res.json(user);
    },
    async delete(req,res) { // função para exclusao de um usuario
        const {_id} = req.query;
        const user = await Usuario.findByIdAndDelete({_id});
        res.json(user);
    },
    async update(req,res){
        const { _id, nome_usuario, idade_usuario, telefone_usuario, cpf_usuario, email_usuario } = req.body;
        const data = {nome_usuario, idade_usuario, telefone_usuario, cpf_usuario, email_usuario};
        const user = await  Usuario.findByIdAndUpdate({_id}, data,{new:true}); // se não funcionar, mudar para findOneAndUpdate
        res.json(user);
    }
};
