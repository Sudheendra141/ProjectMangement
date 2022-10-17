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
app.use('/ProjectDetails',projectsRotes);
app.use('/TeamDetails',TeamRoutes);
app.listen(3000,console.log("Server startde successfully.."));
