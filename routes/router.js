const express = require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('home',{title:'Home'});
} );

router.get('/sobre',(req,res)=>{
    res.render('sobre',{title:'Home'});
} );

router.get('/contato',(req,res)=>{
    res.render('contato',{title:'Home'});
}
);

router.get('/produtos',(req,res)=>{
    res.render('produtos',{title:'Home'});
}   
);

router.get('/servicos',(req,res)=>{
    res.render('servicos',{title:'Nossos Serviços'});
}
);

module.exports=router;