
let getEmployeeNamesPerformnce="select concat(employee_firs_name,' ',employee_last_name) as name, role from team where team='Performance'";
let getEmployeeNamesDatabase="select concat(employee_firs_name,' ',employee_last_name) as name, role from team where team='Database'";
let getTeams="select distinct team from projects";
let getStartDates="select distinct start_date from projects";
let getEndDates="select distinct  end_date from projects"
let getProjectDetailsByTeam='select * from projects where team =';
let getProjectDetailsByStatus='select * from projects where status =';
let getProjectDetailsByStartDate='select * from projects where start_date = '
let getProjectDetailsByEndDate='select * from projects where end_date ='

module.exports={
    getEmployeeNamesPerformnce,
    getEmployeeNamesDatabase,
    getTeams,
    getEndDates,
    getStartDates,
    getProjectDetailsByTeam,
    getProjectDetailsByStatus,
    getProjectDetailsByStartDate,
    getProjectDetailsByEndDate

};

