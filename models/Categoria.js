const mongoose = require('mngoose');
const Schema = mongoose.schema;

const Categoria = Schema({
    name: {
        type: String,
        required:true
    },  
    slug: {
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now()
    }
});

mongoose.model('categorias',Categoria);

module.exports = Categoria;