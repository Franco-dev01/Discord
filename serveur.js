const express = require('express');
const app = express();
const mongoose= require ('mongoose');
const port = 3000;
const ejs = require ('ejs');
const http =require ('http').createServer(app)


const session = require ('express-session')({
    secret:'ksd578zd@jsdugegf888f-8d',
    resave:false,
    saveUninitialized:false
});

const sharedSession=require('express-socket.io-session')

const db = require('./settings/database');
const route=require('./routes/index')
const {userQueries}=require('./controllers/user.controller')


app.use(express.static('./public'));
app.set('views','./views');
app.set('view engine','ejs');
app.use(express.urlencoded({extend:true}));



app.use(session)
app.use(route)
db()

const io = require ('socket.io').listen(http.listen(port,console.log('connected on serveur',port)))

const register = io.of('/register');
register.on('connection',(socket)=>{
   
    socket.on('singIn',async(data)=>{
      console.log('votre inscription a bien été avec succes');
      console.log(data)
        
        const result=await userQueries.setUser(data)
        socket.emit('singIn',result.User,"inscription reussi")
    })
})



const login = io.of('/').use(sharedSession(session));
login.on('connection', (socket)=>{
 // console.log('user logging'),


  socket.on('signIn',async(data)=>{
    console.log(data);
    const result= await UserQuery.getUser(data)

    if(result.user == null){
      socket.emit('baduser',"vous n'etes  pas authentifié");
    }else{

      socket.unshake.session.chat=result.user
      socket.unshake.session.save();  
      socket.emit('signing');
    }
  })
})

