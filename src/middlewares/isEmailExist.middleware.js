import UserModel from '../feature/User/user.model.js'

let user=UserModel.getUsers();

export default function isEmailExist(req,res,next){
    let {email}=req.body;
    for(let i=0;i<user.length;i++){
        if(user[i].email==email){
            return res.render("register",{message:"Email already exist"})
        }
}    
next();
}              