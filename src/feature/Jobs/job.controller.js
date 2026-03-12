import jobModel from './job.model.js'
import path from 'path'
export default class JobController{
  getPostJob(req,res){
    res.render("job/postJob")
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
        postedDate
        }=req.body;

         skills=skills.split(",").map(skill => skill.trim()),
         postedDate=new Date().toISOString().split('T')[0];

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

        return  res.redirect('/job/recruiter');
  }

  getJob(req,res){
     let card=jobModel.getJobCard();
     return  res.render('job/jobCard',{card:card});
  }

  getRecruiterJobs(req,res){
    console.log(req.session.userId);
      let card=jobModel.getRecruiterJobCard(req.session.userId)
      return  res.render('job/jobCard',{card:card});
  }

  getJobDetails(req,res){
    const id = req.params.id
    const job = jobModel.getDetailJobCard(id);
    return res.status(200).json(job);
  }

  getUpdateJob(req,res){
    let id=req.params.id;
    let card=jobModel.getUpdateDetailJobCard(id);
    res.render("job/updateJob", { card });
  }
  postUpdateJob(req,res){
  
      let {id,
        title,
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
        postedDate} = req.body;

         skills=skills.split(",").map(skill => skill.trim()),
         postedDate=new Date().toISOString().split('T')[0];

    jobModel.updateJob(id, title, companyName, location, jobType, workMode, minimumSalary, maximumSalary, experience, skills, description, applicationDeadline, postedDate);
    return res.redirect('/job/');

  }
}