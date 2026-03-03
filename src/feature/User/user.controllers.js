import path from 'path'
import UserModel from './user.model.js'

export default class UserController{
     getRegister(req,res,next){
        res.sendFile(path.join(path.resolve(),'src','views','register.html'));
    }

    postRegister(req,res,next){
      let {name,email,password}=req.body;
      UserModel.postAddUser(name,email,password);
      res.redirect("/user/login")
    }

    getLogin(req,res,next){
        res.sendFile(path.join(path.resolve(),'src','views','login.html'));
    }

    postLogin(req,res,next){
      let {email,password}=req.body;
      if(UserModel.validUser(email,password)){
        res.redirect("/")
      }else{
        res.sendFile(path.join(path.resolve(),'src','views','login.html'));
      }
    }
}