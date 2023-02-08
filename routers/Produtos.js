const express = require('express');
const Prod = express.Router();
const mongoose = require('mongoose');
// require('../models/Produto');
// const Produto = mongoose.model(produtos);

Prod.get('/FormProdutos',(req,res) => {
    res.render('Produtos/FormProducts');
});

module.exports = Prod;