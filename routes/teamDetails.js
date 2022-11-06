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
        req.session.pageDetails={};
        req.session.pageDetails.pageNumber=1;
        req.session.pageDetails.recordsPerPage=5;
        req.session.pageDetails.totalRecords=totalRecords;
    }
   catch(err)
   {
    console.log(err);
   }
 res.render('Performance',data={req});
});
router.get('/PerformanceTeam/NewMember',async(req,res)=>
{
    if(!req.session.isLogedIn)
    res.redirect('/admin-login')

   res.render("NewMember")
});
router.post('/PerformanceTeam/NewMember/',async(req,res)=>
{
    console.log("34");
    if(!req.session.isLogedIn)
        res.redirect('/admin-login')
    let emp_id=parseInt(req.body.id);
    let userName=req.body.userName;
    let firstName=req.body.firstName;
    let lastName=req.body.lastName;
    let role=req.body.role;
    let team=req.body.team;
    res.render('Performance',data={req});

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
        req.session.pageDetails={};
        req.session.pageDetails.pageNumber=1;
        req.session.pageDetails.recordsPerPage=5;
        req.session.pageDetails.totalRecords=totalRecords;
        
        
    }
   catch(err)
   {
    console.log(err);
   }
  res.render('DBPerformance',data={req});
});

router.get('/PerformanceTeam/:p',async(req,res)=>
{
   req.session.pageDetails.pageNumber=req.params.p;

res.render('Performance',data={req});
});


router.get('/DBPerformanceTeam/:p',async(req,res)=>
{
    req.session.pageDetails.pageNumber=req.params.p;
    res.render('DBPerformance',data={req});
});


module.exports=router;


