var express=require('express');
var router=express.Router();
var client=require('../db/database')
var queries=require('../db/queries');
router.get('/',(req,res)=>
{
    res.render('Projects');

})
module.exports=router;
