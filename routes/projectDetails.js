let express=require('express');
let router=express.Router();
let client=require('../db/database').client;
let queries=require('../db/queries');
let url = require('url');


router.get('/',(req,res)=>
{
  res.render('Projects');
})
module.exports=router;
