import express from "express"
import userRouter from './src/feature/User/user.router.js'

let server=express();

server.get('/',function(req,res){
   res.send("hi")
    
})

server.use(express.urlencoded());
server.use('/user',userRouter);

server.listen(3000,function(){
    console.log("working");
})