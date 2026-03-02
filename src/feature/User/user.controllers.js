import path from 'path'

export default class UserController{
     getRegister(req,res,next){
        res.sendFile(path.join(path.resolve(),'src','views','register.html'));
    }
}