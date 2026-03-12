

const buttons = document.querySelectorAll(".view-btn")

buttons.forEach(function (btn) {

    btn.addEventListener("click", async function(){
        
        document.getElementsByClassName("job-detail")[0].style.display = "block"

        const id = this.dataset.id

        const res = await fetch(`/job/api/${id}`)

        const job = await res.json()

        document.getElementById("jobTitle").innerText = job.title
        document.getElementById("companyName").innerText = job.companyName
        document.getElementById("location").innerText = job.location
        document.getElementById("jobType").innerText = job.jobType
        
        
        

        const skillsContainer = document.getElementById("skills")
        skillsContainer.innerHTML = ""

        job.skills.forEach(skill => {

            const span = document.createElement("span")
            span.innerText = skill

            skillsContainer.appendChild(span)

        })
        document.getElementById("description").innerText = job.description
        document.getElementById("postedDate").innerText = job.postedDate
        document.getElementById("deadline").innerText = job.applicationDeadline
    })

})