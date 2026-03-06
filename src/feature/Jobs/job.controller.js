import jobModel from './job.model.js'
import path from 'path'
export default class JobController{
  getPostJob(req,res){
    res.sendFile(path.join(path.resolve(),"src","views","postJob.html"))
  }

  postJob(req,res){
    console.log(req.session.userId);
    console.log(req.body);
  }
}