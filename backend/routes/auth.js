const router = require("express").Router();
const passport = require("passport");

router.get('/google',passport.authenticate('google',{scope:['profile','email']}));

router.get('/google/callback', passport.authenticate('google',{failureRedirect:'/'}),(
    (req,res)=>{
        res.redirect('/log');
    }
))

router.get('/logout',(req,res)=>{
    req.logOut();
    res.redirect('/');
})

module.exports = router;
