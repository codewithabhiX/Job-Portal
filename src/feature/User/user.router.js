import  express from 'express'
import  UserController from './user.controllers.js'

let userController=new UserController();

let userRouter=express.Router();

userRouter.get('/register',userController.getRegister);

export default userRouter;