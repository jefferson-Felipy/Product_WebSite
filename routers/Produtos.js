const express = require('express');
const Prod = express.Router();
const mongoose = require('mongoose');
require('../models/Produto');
const Produto = mongoose.model('produtos');

//Rota responsável por renderizar o formulário de criação de produtos_
Prod.get('/FormProdutos',(req,res) => {
    res.render('Produtos/FormProducts');
});

//Rota responsável por cadastrar os prudutos no banco de dados_
Prod.post('/createProdutos',(req,res) => {
    let erros = [];

    if(!req.body.nomeAutor || typeof req.body.nomeAutor == undefined || req.body.nomeAutor == null){
        erros.push({texto:"Nome inválido"});
    }
    
    else if(!req.body.titulo || typeof req.body.titulo == undefined || req.body.titulo == null){
        erros.push({texto:"Titulo inválido"});
    }

    else if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto:"Slug inválido"});
    }

    else if(!req.body.preco || typeof req.body.preco == undefined || req.body.preco== null){
        erros.push({texto:"Preço inválido"});
    }

    else if(!req.body.descricao || typeof req.body.descricao == undefined || req.body.descricao == null){
        erros.push({texto:"Descricao inválido"});
    }

    else if(!req.body.categoria || typeof req.body.categoria == undefined || req.body.categoria == null){
        erros.push({texto:"Categoria inválida"});
    }

    else if(!req.body.conteudo || typeof req.body.conteudo == undefined || req.body.conteudo == null){
        erros.push({texto:"Conteudo inválido"});
    }

    if(erros.length > 0){
        res.render('Produtos/FormProducts',{erros:erros});
    }
    else{
        const newProduto = {
            nomeAutor: req.body.nomeAutor,
            titulo: req.body.titulo,
            slug:req.body.slug,
            preco: req.body.preco,
            descricao: req.body.descricao,
            categoria: req.body.categoria,
            coteudo: req.body.conteudo
        }

        Produto(newProduto).save().then(() => {
            req.flash("Success_msg","Sucesso ao salvar produto");
            res.redirect('/');
        }).catch(err => {
            req.flash("error_msg","Erro ao salvar produto: "+err);
            res.redirect('/');
        });
    }
})

module.exports = Prod;