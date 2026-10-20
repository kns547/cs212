console.log("Hello World!");
const name = "Katya Safsten";
function showGreeting(name) {
  return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

const skills = [
  "Communication",
  "Time Management",
  "Adaptability",
  "Problem Solving",
  "HTML",
  "CSS",
  "C",
  "Python"
];

function displaySkills() {
  const skillList = document.getElementById("skillList");

  if (!skillList) return;

  skillList.innerHTML = "";

  for (let i = 0; i < skills.length; i++) {
    const badge = document.createElement("span");
    badge.className = "badge bg-info text-dark me-1 mb-1";
    badge.textContent = skills[i];
    skillList.appendChild(badge);
  }
}

function addSkill() {
  const skillInput = document.getElementById("skillInput");

  const newSkill = skillInput.value.trim();

  if (newSkill !== "") {
    skills.push(newSkill);
    displaySkills();
    skillInput.value = "";
  }
}


const projectTitles = [
  "Portfolio Website",
  "Study Planner App",
  "Task Dashboard"
];

const projectDescriptions = [
  "A responsive portfolio built using HTML, CSS, Bootstrap and JavaScript.",
  "A web application for tracking assignments and exams.",
  "A dashboard for organizing tasks and deadlines."
];

const projectDeadlines = [
  "2026-12-15",
  "2027-05-01",
  "2024-12-01"
];


function displayProjects() {
  const container = document.getElementById("projectsContainer");

  if (!container) return;

  container.innerHTML = "";

  const currentDate = new Date();

  for (let i = 0; i < projectTitles.length; i++) {
    const deadline = new Date(projectDeadlines[i]);

    let status = "";

    if (deadline > currentDate) {
      status = "Ongoing";
    } else if (deadline < currentDate) {
      status = "Completed";
    } else if (deadline === currentDate) {
      status = "Ongoing";
    }

    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h3 class="h5">${projectTitles[i]}</h3>
          <p>${projectDescriptions[i]}</p>
          <p><strong>Deadline:</strong> ${projectDeadlines[i]}</p>
          <p><strong>Status:</strong> ${status}</p>
        </div>
      </div>
    `;

    container.appendChild(card);
  }
}


let downloadCount = 0;

function updateDownloadCount() {
  downloadCount++;

  const countDisplay =
    document.getElementById("downloadCount");

  if (countDisplay) {
    countDisplay.textContent = downloadCount;
  }
}


const educationData = [
  {
    school: "Arizona Virtual Tech Academy",
    program: "High School Diploma",
    dates: "Aug 2022 - May 2025"
  },
  {
    school: "Northern Arizona University",
    program: "Software Engineering",
    dates: "Aug 2025 - Present"
  }
];

const experienceData = [
  {
    role: "Front of House Associate",
    company: "Panda Express",
    dates: "Jun 2026 - Present"
  },
  {
    role: "Volunteer",
    company: "Pound Puppz",
    dates: "May 2020 - Present"
  },
  {
    role: "Senior Volunteer",
    company: "Shady Pines Sanctuary",
    dates: "Sep 2022 - Present"
  }
];

function createEducationTable() {
  const container =
    document.getElementById("educationTable");

  if (!container) return;

  const table = document.createElement("table");
  table.className = "table table-striped";

  table.innerHTML = `
    <thead>
      <tr>
        <th>School</th>
        <th>Program</th>
        <th>Dates</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  for (let i = 0; i < educationData.length; i++) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${educationData[i].school}</td>
      <td>${educationData[i].program}</td>
      <td>${educationData[i].dates}</td>
    `;

    tbody.appendChild(row);
  }

  container.appendChild(table);
}

function createExperienceTable() {
  const container =
    document.getElementById("experienceTable");

  if (!container) return;

  const table = document.createElement("table");
  table.className = "table table-striped";

  table.innerHTML = `
    <thead>
      <tr>
        <th>Role</th>
        <th>Company</th>
        <th>Dates</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  for (let i = 0; i < experienceData.length; i++) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${experienceData[i].role}</td>
      <td>${experienceData[i].company}</td>
      <td>${experienceData[i].dates}</td>
    `;

    tbody.appendChild(row);
  }

  container.appendChild(table);
}


document.addEventListener("DOMContentLoaded", function () {

  const greetingElement =
    document.getElementById("greeting");

  if (greetingElement) {
    greetingElement.textContent =
      showGreeting(name);
  }

  displaySkills();
  displayProjects();
  createEducationTable();
  createExperienceTable();

  const addSkillBtn =
    document.getElementById("addSkillBtn");

  if (addSkillBtn) {
    addSkillBtn.addEventListener(
      "click",
      addSkill
    );
  }

  const downloadButton =
    document.getElementById("downloadResumeBtn");

  if (downloadButton) {
    downloadButton.addEventListener(
      "click",
      updateDownloadCount
    );
  }
});