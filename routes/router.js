const express = require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('home',{title:'Home'});
} );

router.get('/sobre',(req,res)=>{
    res.render('sobre',{title:'Home'});
} );

module.exports=router;