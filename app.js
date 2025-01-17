require('dotenv').config();
const path=require('path'); 
const express=require('express');
const app=express();
const {engine}=require('express-handlebars');


app.engine('handlebars', engine({defaultLayout: 'main', }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./routes/router'));  















module.exports=app;