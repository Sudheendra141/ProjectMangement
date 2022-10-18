let express=require('express');
let router=express.Router();
let client=require('../db/database').client;
let queries=require('../db/queries');
let url = require('url');
let performanceTeamList,dbPerformanceTeamList;

router.get('/PerformanceTeam',async(req,res)=>
{
    let totalRecords,recordsPerPage=5;
    try
    {
        performanceTeamList=await client.query(queries.getEmployeeNamesPerformnce);
        totalRecords=performanceTeamList.rows.length;
    }
   catch(err)
   {
    console.log(err);
   }
 

           
  res.render('Performance',data={names:performanceTeamList.rows,page:1,recordsPerPage,totalRecords});
});
router.get('/PerformanceTeam/:p',async(req,res)=>
{
    let totalRecords,recordsPerPage=5;
    let page=req.params.p;
    try
    {
        performanceTeamList=await client.query(queries.getEmployeeNamesPerformnce);
        totalRecords=performanceTeamList.rows.length;

    }
   catch(err)
   {
    console.log(err);
   }
 
console.log(performanceTeamList.rows[0])
           
res.render('Performance',data={names:performanceTeamList.rows,page,recordsPerPage,totalRecords});
});


router.get('/DBPerformanceTeam',async(req,res)=>
{
    let totalRecords,recordsPerPage=5;
    try
    {
        dbPerformanceTeamList=await client.query(queries.getEmployeeNamesDatabase);
        totalRecords=dbPerformanceTeamList.rows.length;
    }
   catch(err)
   {
    console.log(err);
   }
 

           
  res.render('DBPerformance',data={names:dbPerformanceTeamList.rows,page:1,recordsPerPage,totalRecords});
});
router.get('/DBPerformanceTeam/:p',async(req,res)=>
{
    let totalRecords,recordsPerPage=5;
    let page=req.params.p;
    try
    {
        performanceTeamList=await client.query(queries.getEmployeeNamesDatabase);
        totalRecords=dbPerformanceTeamList.rows.length;

    }
   catch(err)
   {
    console.log(err);
   }
 
console.log(dbPerformanceTeamList.rows[0])
           
res.render('DBPerformance',data={names:dbPerformanceTeamList.rows,page,recordsPerPage,totalRecords});
});




 

module.exports=router;


