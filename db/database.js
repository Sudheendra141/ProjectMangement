const Client=require('pg').Client;
const client = new Client({
  
})
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to database");
  });
  
 module.exports.client=client;
