let express=require('express');
let router=express.Router();
let client=require('../db/database').client;
let queries=require('../db/queries');
let url = require('url');
let distinctTeam,projectDetails;
const { appendFile } = require('fs');
const e = require('express');


router.get('/',async(req,res)=>
{
  distinctTeam=await client.query(queries.getTeams);
  res.render('Projects',data={teams:distinctTeam.rows,result:false});
})



router.post('/',async(req,res)=>
{

let team=req.body.team;
let status=req.body.status;
let startDate=req.body.startDate;
let endDate=req.body.endDate;
console.log(startDate);

projectDetails =await client.query(`select * from projects where team='${team}' and status='${status}'; `);
distinctTeam=await client.query(queries.getTeams);
console.log("3>"+projectDetails.rows);
let teams=distinctTeam.rows;
console.log("--->"+teams)
res.render('Projects',data={teams,projectDetails:projectDetails.rows,result:true});


})
module.exports=router;
