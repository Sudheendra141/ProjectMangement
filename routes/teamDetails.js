var express=require('express');
var router=express.Router();
var client=require('../db/database')
var queries=require('../db/queries');

router.get('/PerformanceTeam',(req,res)=>
{
    
client.query(queries.getNames,(err,response)=>
{
    if(!err)
    {
        res.render('Performance',{data:response.rows});
    }
    else  console.log(err);
    client.end;
});

    //res.render('Performance',{data:namesOfEmployee});
});


router.get('/DBPerformanceTeam',(req,res)=>
{
    client.query(queries.getNames,(err,response)=>
{
    if(!err)
    {
        res.render('DBPerformance',{data:response.rows});
    }
    else  console.log(err);
    client.end;
});
});

module.exports=router;


