function updateStatusList(teamStatus, status) {

	if (status != "Status") {
		for (let i = 0; i < teamStatus.length; i++) {
			if (teamStatus[i] == status) {
				swap(i, 0, teamStatus);
				break;
			}
		}
	} else {
        if(teamStatus[0]!="Status")
		putAtPosition(teamStatus, 0, "Status");
	}
	return teamStatus;

}
function updateTeamsList(teams, team) {

	if (team != "Teams") {
		for (let i = 0; i < teams.length; i++) {
			if (teams[i].team == team) {
				swap(i, 0, teams);
				break;
			}
		}
        putAtPosition(teams, teams.length, {
			'team': "Teams"
		});
	} else {
		putAtPosition(teams, 0, {
			'team': "Teams"
		});
	}
	return teams;

}
function putAtPosition(arr, pos, str) {
	for (let i = arr.length - 1; i >= pos; i--) {
		arr[i + 1] = arr[i];
	}
	arr[pos] = str;
	return arr;
}
function swap(i, j, arr) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
function FillTeamStatus() {
	let teamStatus = [];
	teamStatus[0] = "Status";
	teamStatus[1] = "Yet to start";
	teamStatus[2] = "Open";
	teamStatus[3] = "In Progress";
	teamStatus[4] = "Completed";
	return teamStatus;
}
function genrateQuery(team, status, startDate, endDate) {
	let arr = [];
	arr[0] = team == "Teams" ? 0 : 1;
	arr[1] = status == "Status" ? 0 : 1;
	arr[2] = startDate == "" ? 0 : 1;
	arr[3] = endDate == "" ? 0 : 1;
	firstConditonThere = false;
	let query = "select team,project_name,status,start_date as startDate from projects ";

	if (arr[0] == 1 || arr[1] == 1 || arr[2] == 1 || arr[3] == 1) {
		query += " where ";
		if (arr[0] == 1) {
			query += ` team = '${team}' `;
			firstConditonThere = true;
		}

		if (arr[1] == 1) {
			if (firstConditonThere)
				query += `and status = '${status}' `;
			else {
				query += `status = '${status}' `;
				firstConditonThere = true;
			}

		}

		if (arr[2] == 1) {
			if (firstConditonThere)
				query += `and start_date = '${startDate}' `;
			else {
				query += `start_date = '${startDate}' `;
				firstConditonThere = true;
			}
		}

		if (arr[3] == 1) {
			if (firstConditonThere) {
				query += ` and end_date = '${endDate}' `;
			} else {
				query += `end_date = '${endDate}'`;
				firstConditonThere = false;

			}
		}

	}
	return query;
}
module.exports={
    updateStatusList,
    genrateQuery,
    FillTeamStatus,
    swap,
    updateTeamsList,
    putAtPosition,
}