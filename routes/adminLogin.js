let express=require('express');
let router=express.Router();

router.get('/logout',(req,res)=>
{
    req.session.destroy();
    res.redirect("/");

});
router.get("/",(req,res)=>
{
    res.render("adminLogin");
}
);
router.post("/",(req,res)=>
{
    let userName=req.body.username;
    let password=req.body.password;
    if(validate(userName,password))
    {
            req.session.isLogedIn=true;
            res.redirect('/home');
    }
    else
    {
        res.send('<p> Sorry ! Credentials not found  <a href="http://localhost:3000/admin-login/">try again </a><p>');
    }
}
);
function validate(userName,password)
{
    if(userName==="admin" && password==="admin")
    return true;
    return false;
}



module.exports=router;
