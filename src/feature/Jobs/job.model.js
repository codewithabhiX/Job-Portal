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

   static getRecruiterJobCard(recuriterId){
    return job.filter(job => job.recuriterId === recuriterId);
   }

   static getDetailJobCard(id){
    return job.find(job => job.id === Number(id));
   }
}

let job = [
  {
    "id": 1,
    "title": "Frontend Developer",
    "companyName": "Google",
    "location": "Bangalore, India",
    "jobType": "Full Time",
    "skills": ["HTML", "CSS", "JavaScript", "React"],
    "description": "We are looking for a skilled Backend Developer to join our team. The ideal candidate should have experience with Node.js, Express, and MongoDB. You will be responsible for developing and maintaining our server-side applications, ensuring high performance and responsiveness to requests from the frontend.",
    "applicationDeadline": "2026-03-30",
    "postedDate": "2026-03-10"
  },
  {
    "id": 2,
    "title": "Backend Developer",
    "companyName": "Amazon",
    "location": "Hyderabad, India",
    "jobType": "Remote",
    "skills": ["Node.js", "Express", "MongoDB"],
    "description": "We are looking for a skilled Backend Developer to join our team. The ideal candidate should have experience with Node.js, Express, and MongoDB. You will be responsible for developing and maintaining our server-side applications, ensuring high performance and responsiveness to requests from the frontend.",
    "applicationDeadline": "2026-03-28",
    "postedDate": "2026-03-09"
  },
  { 
    "id": 3,
    "title": "Full Stack Developer",
    "companyName": "Microsoft",
    "location": "Noida, India",
    "jobType": "Hybrid",
    "skills": ["React", "Node.js", "MongoDB", "Docker"],
    "description": "We are looking for a skilled Full Stack Developer to join our team. The ideal candidate should have experience with both frontend and backend technologies, including React, Node.js, MongoDB, and Docker. You will be responsible for developing and maintaining our web applications, ensuring seamless integration between the frontend and backend.",
    "applicationDeadline": "2026-04-02",
    "postedDate": "2026-03-08"
  },
  { 
    "id": 4,
    "title": "Software Engineer Intern",
    "companyName": "Flipkart",
    "location": "Bangalore, India",
    "jobType": "Internship",
    "skills": ["Java", "Spring Boot", "MySQL"],
    "description": "We are looking for a motivated Software Engineer Intern to join our team. The ideal candidate should have a strong foundation in Java programming and experience with Spring Boot and MySQL. As an intern, you will work closely with our senior engineers on real-world projects, gaining valuable hands-on experience in software development.",
    "applicationDeadline": "2026-03-25",
    "postedDate": "2026-03-07"
  },
  { 
    "id": 5,
    "title": "DevOps Engineer",
    "companyName": "Infosys",
    "location": "Pune, India",
    "jobType": "Full Time",
    "skills": ["Docker", "Kubernetes", "AWS", "CI/CD"],
    "description": "We are looking for a skilled DevOps Engineer to join our team. The ideal candidate should have experience with Docker, Kubernetes, AWS, and CI/CD pipelines. You will be responsible for designing and implementing our infrastructure, ensuring the reliability and scalability of our applications.",
    "applicationDeadline": "2026-04-05",
    "postedDate": "2026-03-06"
  }
];
