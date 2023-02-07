const express = require('express');
const Cat = express.Router();
const mongoose = require('mongoose');
// require('../models/Categoria');
// const Categoria = mongoose.model('categorias');

Cat.get('/Formcategories',(req,res) => res.render('categorias/FormCategories'));

module.exports = Cat;