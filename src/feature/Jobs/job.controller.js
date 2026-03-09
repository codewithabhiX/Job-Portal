import jobModel from './job.model.js'
import path from 'path'
export default class JobController{
  getPostJob(req,res){
    res.sendFile(path.join(path.resolve(),"src","views","postJob.html"))
  }

  postJob(req,res){
    console.log(req.session.userId);
    console.log(req.body);

    let {title,
        companyName,
        location,
        jobType,
        workMode,
        minimumSalary,
        maximumSalary,
        experience,
        skills,
        description,
        applicationDeadline,
        postedDate,}=req.body;

        let recuriterId=req.session.userId;

    jobModel.postJob(title,
        companyName,
        location,
        jobType,
        workMode,
        minimumSalary,
        maximumSalary,
        experience,
        skills,
        description,
        applicationDeadline,
        postedDate,
        recuriterId,)

        return  res.redirect('/job/');
  }

  getJob(req,res){
     let card=jobModel.getJobCard();
     return  res.render('jobCard',{card:card});
  }
}