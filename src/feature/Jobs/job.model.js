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
      new Job(
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
}

let job = [];
