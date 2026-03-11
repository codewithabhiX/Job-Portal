import express from 'express'
import JobController from './job.controller.js'

let jobController=new JobController();

let jobRouter=express.Router();

jobRouter.get('/',jobController.getJob)

jobRouter.get("/postjob", jobController.getPostJob);
jobRouter.post("/postjob",jobController.postJob)

jobRouter.get("/recruiter",jobController.getRecruiterJobs)
jobRouter.get("/api/:id",jobController.getJobDetails)

export default jobRouter;
    