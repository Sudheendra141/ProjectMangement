let express=require('express');
let router=express.Router();
let client=require('../db/database').client;
let queries=require('../db/queries');
let performanceTeamList,dbPerformanceTeamList;


router.get('/PerformanceTeam',async(req,res)=>
{
    if(!req.session.isLogedIn)
        res.redirect('/admin-login')
    let totalRecords,recordsPerPage=5;
    try
    {
        performanceTeamList=await client.query(queries.getEmployeeNamesPerformnce);
        totalRecords=performanceTeamList.rows.length;
        req.session.performanceTeamList=performanceTeamList.rows;
    }
   catch(err)
   {
    console.log(err);
   }
 res.render('Performance',data={req,page:1,recordsPerPage:recordsPerPage,totalRecords:totalRecords});
});
router.get('/PerformanceTeam/NewMember',async(req,res)=>
{
    if(!req.session.isLogedIn)
    res.redirect('/admin-login')

   res.render("NewMember")
});
router.get('/DBPerformanceTeam/NewMember',async(req,res)=>
{
    if(!req.session.isLogedIn)
    res.redirect('/admin-login')

   res.render("NewMember")
});
router.get('/PerformanceTeam/Edit',async(req,res)=>
{
    if(!req.session.isLogedIn)
        res.redirect('/admin-login')
   res.render("NewMember")
});
router.get('/DBPerformanceTeam/Edit',async(req,res)=>
{
    if(!req.session.isLogedIn)
        res.redirect('/admin-login')
   res.render("NewMember")
});


router.get('/DBPerformanceTeam',async(req,res)=>
{
    if(!req.session.isLogedIn)
        res.redirect('/admin-login')
    let totalRecords,recordsPerPage=5;
    try
    {
        let dbPerformanceTeamList=await client.query(queries.getEmployeeNamesDatabase);
        totalRecords=dbPerformanceTeamList.rows.length;
        req.session.dbPerformanceTeamList=dbPerformanceTeamList.rows;
        
    }
   catch(err)
   {
    console.log(err);
   }
  res.render('DBPerformance',data={req,page:1,recordsPerPage,totalRecords});
});

router.get('/PerformanceTeam/:p',async(req,res)=>
{
    
    let totalRecords,recordsPerPage=5;
    let page=req.params.p;
    try
    {
        performanceTeamList=await client.query(queries.getEmployeeNamesPerformnce);
        totalRecords=performanceTeamList.rows.length;
        req.session.performanceTeamList=performanceTeamList.rows;

    }
   catch(err)
   {
    console.log(err);
   }
  
res.render('Performance',data={req,page,recordsPerPage,totalRecords});
});


router.get('/DBPerformanceTeam/:p',async(req,res)=>
{
    let totalRecords,recordsPerPage=5;
    let page=req.params.p;
    try
    {
        let dbPerformanceTeamList=await client.query(queries.getEmployeeNamesDatabase);
        totalRecords=dbPerformanceTeamList.rows.length;
        req.session.dbPerformanceTeamList=dbPerformanceTeamList.rows;

    }
   catch(err)
   {
    console.log(err);
   }
            
res.render('DBPerformance',data={req,page,recordsPerPage,totalRecords});
});


module.exports=router;


