import path from 'path'
import UserModel from './user.model.js'

export default class UserController{
     getRegister(req,res,next){
        res.sendFile(path.join(path.resolve(),'src','views','register.html'));
    }

    postRegister(req,res,next){
      let {role,name,email,password}=req.body;
      UserModel.postAddUser(role,name,email,password);
      res.redirect("/user/login")
    }

    getLogin(req,res,next){
        res.sendFile(path.join(path.resolve(),'src','views','login.html'));
    }

    postLogin(req,res,next){
      let {email,password}=req.body;
      let role = UserModel.validUser(email,password);

        if(role){
            if(role === "candidate"){
                return res.send("candidate");
            }else{
                return res.send("recruiter");
            }
      }else{
        return res.sendFile(path.join(path.resolve(),'src','views','login.html'));
      }
    }
}