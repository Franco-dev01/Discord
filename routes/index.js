const express=require('express');
const router=new express.Router();

router.route('/index')
.get((req,res)=>{
    res.render('index.ejs')
})

router.route('/register')
.get((req,res)=>{
    res.render('register.ejs')
})

router.route('/chat')

.get((req,res)=>{
    res.render('chat.ejs')
    if (req.session.chat) {
        res.redirect('chat.ejs')
    }else{
        res.redirect('/')
    }
    
})

module.exports=router