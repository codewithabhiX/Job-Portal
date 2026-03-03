import  express from 'express'
import  UserController from './user.controllers.js'

let userController=new UserController();

let userRouter=express.Router();

userRouter.get('/register',userController.getRegister);
userRouter.get('/login',userController.getLogin);

userRouter.post('/register',userController.postRegister);
userRouter.post('/login',userController.postLogin);

export default userRouter;