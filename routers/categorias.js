const express = require('express');
const Cat = express.Router();
const mongoose = require('mongoose');
require('../models/Categoria');
const Categoria = mongoose.model('categorias');

Cat.get('/Formcategories',(req,res) => res.render('categorias/FormCategories'));

//Rota responsával por Cadastrar as categorias no banco de dados_
Cat.post('/createCategories',(req,res) => {
    let erros = [];
    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
        erros.push({texto:'Nome Inválido!'});
    }
    else if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto:'Slug Inválido!'});
    }
    if(erros.length > 0){
        res.render('categorias/FormCategories',{erros:erros});
    }
    else{
        Categoria.find().then(() => {
            const newCategoria = ({
                name: req.body.name,
                slug: req.body.slug
            });
    
            new Categoria(newCategoria).save().then(() => {
                req.flash("success_msg","Sucesso ao salvar categoria");
                res.redirect('/');
            }).catch(err => {
                req.flash("error_msg","error ao salvarcategoria");
                res.redirect('/');
            });
        }).catch(err => {
            req.flash("error_msg","error na execução para salvar");
                res.redirect('/');
        });
    }
});

module.exports = Cat;