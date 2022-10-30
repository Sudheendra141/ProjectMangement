let express=require('express');
let router=express.Router();
router.get("/",(req,res)=>{
    if(req.session.isLogedIn)
        res.render('index');
    else
        res.redirect('/admin-login')
});

module.exports=router;