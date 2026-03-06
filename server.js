import express from "express"
import userRouter from './src/feature/User/user.router.js'
import path from 'path'

let server=express();

server.use(express.static("public"));

server.get('/',function(req,res){
   res.sendFile(path.join(path.resolve(),"src",'views',"home.html"))
    
})

server.use(express.urlencoded());
server.use('/user',userRouter);

server.listen(3000,function(){
    console.log("working");
})