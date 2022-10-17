
var getNames="select concat(employee_firs_name,' ',employee_last_name) as name, role from team";
var getTemas="select distinct team from projects";
var getStartDates="select distinct start_date from projects";
var getEndDates="select distinct  end_date from projects"

module.exports={getNames,getTemas,getEndDates,getStartDates};