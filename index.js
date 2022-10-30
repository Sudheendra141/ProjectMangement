// packages
const express=require('express');
const path=require('path');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const session=require('express-session');
// routes
const projectsRotes=require('./routes/projectDetails');
const TeamRoutes=require('./routes/teamDetails');
const adminLoginRoutes=require('./routes/adminLogin');
const homePageRoutes=require('./routes/homePage');

const app=express()
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// middlware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({
    secret:"Sudheendra",
    resave:false,
    saveUninitialized:false
}));
// routes
app.get('/',(req,res)=>
{
    res.render('indexPage');
})
app.use('/home',homePageRoutes);
app.use('/admin-login',adminLoginRoutes);
app.use('/ProjectDetails',projectsRotes);
app.use('/TeamDetails',TeamRoutes);
app.get('/:anyThing',(req,res)=>{
    res.send("Opps  Page not pound")
})
app.listen(3000,console.log("Server startde successfully.. http://localhost:3000/"));


