import path from 'path'
import UserModel from './user.model.js'

export default class UserController{
     getRegister(req,res,next){
        res.render("register",{message:null})
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
      let user = UserModel.validUser(email,password);

        if(user.role){
            if(user.role === "candidate"){
                req.session.userId=user.id;
                return  res.render("home",{role:user.role})
            }else{
                req.session.userId=user.id;
                return  res.render("home",{role:user.role})
            }
      }else{
        return res.sendFile(path.join(path.resolve(),'src','views','login.html'));
      }
    }
}