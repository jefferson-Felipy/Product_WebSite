const express = require('express');
const app = express();
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');

//Rotas_
const Cat = require('./routers/categorias');

//Configurando o Express-session_
app.use(session({
    secret:'node1234',
    resave:true,
    saveUninitialized:true
}));

//Configurando o Connect-flash_
app.use(flash());

//Configurando os middlewares_
app.use((req,res,next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

//Configurando o Template Engine express-handlebars_
app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//Configurando o Body-Parser_
app.use(express.urlencoded({extendet:true}));
app.use(express.json());

//Configurando o mongoose_
mongoose.connect("mongodb://localhost/Product_WebSite")
.then(() => console.log('Conexão com o banco de dados bem sucedida!'))
.catch(err => console.log('Error ao se conectar ao banco de dados: '+err));

//Configurando os arquivos estáticos_
app.use(express.static(path.join(__dirname+'/public')));

//Configurando as rotas_
app.get('/',(req,res) => res.render('home'));
app.use('/',Cat);

//Configurando o Servidor Express_
const PORT = 8081;
app.listen(PORT,() => console.log('Servidor rodando na url: https://localhost/8081/'));