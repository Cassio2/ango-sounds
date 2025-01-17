require('dotenv').config();
const express=require('express');
const app=express();


// Configurar o handebars como o mecanismo de template


app.get("/",(req,res)=>{
    res.send("Servidor está funcionando!");
});















module.exports=app;