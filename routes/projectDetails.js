let express = require('express');
let router = express.Router();
let client = require('../db/database').client;
let queries = require('../db/queries');
let projectFunctionsUtils=require('./ProjectUtilsFunction')
let projectDetails;


router.get('/', async (req, res) => {

	teams = (await client.query(queries.getTeams)).rows; 
	teamStatus = projectFunctionsUtils.FillTeamStatus();
	teams = projectFunctionsUtils.putAtPosition(teams, 0, {
		'team': "Teams"
	});
  req.session.projectDetails={};
  req.session.projectDetails.startDate="";
  req.session.projectDetails.endDate="";
  req.session.projectDetails.teams=teams;
  req.session.projectDetails.teamStatus=teamStatus;

 

	res.render('Projects', data={req,page:1,recordsPerPage:5,totalRecords:0,result:false});});


router.post('/', async(req,res)=>
{
	let team = req.body.team;
	let status = req.body.status;
	let startDate = req.body.startDate;
	let endDate = req.body.endDate;
	let projects = (await client.query(projectFunctionsUtils.genrateQuery(team, status, startDate, endDate))).rows;
	totalRecords=projects.length;
	teams = (await client.query(queries.getTeams)).rows;
	teams = projectFunctionsUtils.updateTeamsList(teams, team);
	teamStatus = projectFunctionsUtils.updateStatusList(teamStatus, status);
	req.session.projectDetails={};
	req.session.projectDetails.startDate=startDate;
	req.session.projectDetails.endDate=endDate;
	req.session.projectDetails.teams=teams;
	req.session.projectDetails.teamStatus=teamStatus;
	req.session.projectDetails.projects=projects;
	
	res.render('Projects',data={req,page:1,recordsPerPage:5,totalRecords,result:true});
	
});

router.get('/:p',(req,res)=>{
	res.render('Projects',data={req,page:req.params.p,recordsPerPage:5,totalRecords,result:true});
});


module.exports = router;