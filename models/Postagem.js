const mongoose = require('mongoose');
const Schema = mongoose.schema;

const Postagem = Schema({
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

mongoose.model('postagens',Postagem);

module.exports = Postagem;