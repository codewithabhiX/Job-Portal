export default class JobModel {
  id;
  title;
  companyName;
  location;
  jobType;
  workMode;
  minimumSalary;
  maximumSalary;
  experience;
  skills;
  description;
  applicationDeadline;
  postedDate;
  recuriterId;

  constructor(
    id,
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
    postedDate,
    recuriterId,
  ) {
    this.id = id;
    this.title = title;
    this.companyName = companyName;
    this.location = location;
    this.jobType = jobType;
    this.workMode = workMode;
    this.minimumSalary = minimumSalary;
    this.maximumSalary = maximumSalary;
    this.experience = experience;
    this.skills = skills;
    this.description = description;
    this.applicationDeadline = applicationDeadline;
    this.postedDate = postedDate;
    this.recuriterId = recuriterId;
  }

  static postJob(
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
    postedDate,
    recuriterId,
  ) {
    job.push(
      new JobModel(
        job.length + 1,
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
        postedDate,
        recuriterId,
      ),
    );
  }

   static getJobCard(){
    return job;
   }
}

let job = [
  {
    "title": "Frontend Developer",
    "companyName": "Google",
    "location": "Bangalore, India",
    "jobType": "Full Time",
    "skills": ["HTML", "CSS", "JavaScript", "React"],
    "applicationDeadline": "2026-03-30",
    "postedDate": "2026-03-10"
  },
  {
    "title": "Backend Developer",
    "companyName": "Amazon",
    "location": "Hyderabad, India",
    "jobType": "Remote",
    "skills": ["Node.js", "Express", "MongoDB"],
    "applicationDeadline": "2026-03-28",
    "postedDate": "2026-03-09"
  },
  {
    "title": "Full Stack Developer",
    "companyName": "Microsoft",
    "location": "Noida, India",
    "jobType": "Hybrid",
    "skills": ["React", "Node.js", "MongoDB", "Docker"],
    "applicationDeadline": "2026-04-02",
    "postedDate": "2026-03-08"
  },
  {
    "title": "Software Engineer Intern",
    "companyName": "Flipkart",
    "location": "Bangalore, India",
    "jobType": "Internship",
    "skills": ["Java", "Spring Boot", "MySQL"],
    "applicationDeadline": "2026-03-25",
    "postedDate": "2026-03-07"
  },
  {
    "title": "DevOps Engineer",
    "companyName": "Infosys",
    "location": "Pune, India",
    "jobType": "Full Time",
    "skills": ["Docker", "Kubernetes", "AWS", "CI/CD"],
    "applicationDeadline": "2026-04-05",
    "postedDate": "2026-03-06"
  }
];
