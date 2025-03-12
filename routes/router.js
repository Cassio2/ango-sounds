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

module.exports=router;