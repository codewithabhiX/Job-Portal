import express from "express"
import userRouter from './src/feature/User/user.router.js'
import path from 'path'
import jobRouter from './src/feature/Jobs/job.router.js'
import session from 'express-session'

let server=express();

server.use(express.static("public"));

server.use(express.urlencoded());

server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false }
}))

server.get('/',function(req,res){
   res.sendFile(path.join(path.resolve(),"src",'views',"home.html"))
    
})

server.use('/user',userRouter);
server.use('/job',jobRouter);

server.listen(3000,function(){
    console.log("working");
})