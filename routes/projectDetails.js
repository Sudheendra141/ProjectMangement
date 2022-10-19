let express=require('express');
let router=express.Router();
let client=require('../db/database').client;
let queries=require('../db/queries');
let distinctTeam,projectDetails;

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
projectDetails =await client.query(`select * from projects where team='${team}' and status='${status}' and start_date = '${startDate}' and end_date ='${endDate}'; `);
distinctTeam=await client.query(queries.getTeams);
let teams=distinctTeam.rows;
res.render('Projects',data={teams,projectDetails:projectDetails.rows,result:true});

})
module.exports=router;
