import express from 'express'
import HomeController from './home.controller.js'

let homeController=new HomeController();

let homeRouter=express.Router();

homeRouter.get('/',homeController.getHome)

export default homeRouter;