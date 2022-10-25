let express = require('express');
let router = express.Router();
let client = require('../db/database').client;
let queries = require('../db/queries');
let projectFunctionsUtils=require('./ProjectUtilsFunction')
let projectDetails;
let teamStatus = [];
let teams = [];

router.get('/', async (req, res) => {
	teams = (await client.query(queries.getTeams)).rows;
	teamStatus = projectFunctionsUtils.FillTeamStatus();

	teams = projectFunctionsUtils.putAtPosition(teams, 0, {
		'team': "Teams"
	});
  let startDate="",endDate="";

	res.render('Projects', data = {
		teams,
		teamStatus,
		statusresult: false,
    endDate,
    startDate,
	});
});

router.post('/', async (req, res) => {
	let team = req.body.team;
	let status = req.body.status;
	let startDate = req.body.startDate;
	let endDate = req.body.endDate;
	projectDetails = await client.query(projectFunctionsUtils.genrateQuery(team, status, startDate, endDate));
	teams = (await client.query(queries.getTeams)).rows;
	teams = projectFunctionsUtils.updateTeamsList(teams, team);
	teamStatus = projectFunctionsUtils.updateStatusList(teamStatus, status);
	res.render('Projects', data = {
		teams,
		projectDetails: projectDetails.rows,
		teamStatus,
		result: true,
    startDate,
    endDate
	});
});


module.exports = router;