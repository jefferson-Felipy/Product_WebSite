const mongoose = require('mongoose');
const Schema = mongoose.schema;

const Produto = Schema({
    name: {
        type: String,
        required:true
    },
    descricao: {
        type: String,
        required:true
    },
    consteudo: {
        type: String,
        required:true
    },
    slug: {
        type: String,
        required:true
    },
    categoria: {

    },
    date: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('produtos',Produto);

module.exports = Produto;