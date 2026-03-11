import express from "express"
import userRouter from './src/feature/User/user.router.js'
import path from 'path'
import jobRouter from './src/feature/Jobs/job.router.js'
import session from 'express-session'
import homeRouter from './src/feature/Home/home.router.js'

let server=express();

server.set("view engine",'ejs');
server.set('views',path.join(path.resolve(),"src",'views'))

server.use(express.static("public"));

server.use(express.urlencoded());

server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false }
}))

server.use('/home',homeRouter)

server.use('/user',userRouter);
server.use('/job',jobRouter);

server.listen(3000,function(){
    console.log("working");
})