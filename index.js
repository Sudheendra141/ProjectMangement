var express=require('express');
var path=require('path')
var projectsRotes=require('./routes/projectDetails');
var TeamRoutes=require('./routes/teamDetails');
var app=express()
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>
{
    res.render('index');
})
console.log("hi 12")
app.use('/ProjectDetails',projectsRotes);
console.log("hi 13")
app.use('/TeamDetails',TeamRoutes);
app.listen(3000,console.log("Server startde successfully.. http://localhost:3000/"));
