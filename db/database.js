const { Client } = require('pg')
const client = new Client({
  user: 'intern',
  host: '10.96.45.189',
  database: 'intern_project_prms',
  password: 'intern',
  port: 5432,
})
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to database");
  });
  

module.exports=client;
