console.log("Hello World!");

const name = "Katya Safsten";

function showGreeting(name) {
  return (
    "Hello, my name is " +
    name +
    "! Welcome to my portfolio!"
  );
}

let skills = [
  "Communication",
  "Time Management",
  "Adaptability",
  "Problem Solving",
  "HTML",
  "CSS",
  "C",
  "Python"
];

const menuItems = [
  "Summary",
  "Education",
  "Experience",
  "Skills",
  "Aspirations",
  "Projects",
  "Contact"
];

let projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio built using HTML, CSS, Bootstrap and JavaScript.",
    deadline: new Date("2026-12-15"),
    imageURL:
      "https://placehold.co/600x360/1f6f78/ffffff?text=Portfolio+Website"
  },

  {
    title: "Study Planner App",
    description:
      "A web application for tracking assignments and exams.",
    deadline: new Date("2027-05-01"),
    imageURL:
      "https://placehold.co/600x360/0f8f9c/ffffff?text=Study+Planner"
  },

  {
    title: "Task Dashboard",
    description:
      "A dashboard for organizing tasks and deadlines.",
    deadline: new Date("2026-10-01"),
    imageURL:
      "https://placehold.co/600x360/17324d/ffffff?text=Task+Dashboard"
  }
];

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

function renderNavigation() {
  $("#navMenu").empty();

  menuItems.forEach(function (item) {
    const sectionId = item.toLowerCase();

    $("#navMenu").append(`
      <li class="nav-item">
        <a
          class="nav-link menu-link"
          href="#${sectionId}">
          ${item}
        </a>
      </li>
    `);
  });
}

function validateSkill(skill, validatorCallback) {
  return validatorCallback(skill);
}

function skillExists(skill) {
  return skills.some(
    existingSkill =>
      existingSkill.toLowerCase() ===
      skill.toLowerCase()
  );
}

function renderSkills() {
  $("#skillList").empty();

  skills.forEach(function (skill, index) {
    const item = $(`
      <div
        class="skill-item border rounded p-2 mb-2 d-flex justify-content-between align-items-center">

        <span class="fw-bold">
          ${skill}
        </span>

        <div>
          <button
            class="btn btn-warning btn-sm edit-btn"
            data-index="${index}">
            Edit
          </button>

          <button
            class="btn btn-danger btn-sm delete-btn"
            data-index="${index}">
            Delete
          </button>
        </div>

      </div>
    `);

    item.hide();

    $("#skillList").append(item);

    item.fadeIn(500);
  });
}

function updateSkills(callback) {
  callback();
  renderSkills();
}

function addSkill() {
  const skill = $("#skillInput")
    .val()
    .trim();

  const valid = validateSkill(
    skill,
    function (skillName) {
      return (
        skillName !== "" &&
        !skillExists(skillName)
      );
    }
  );

  if (!valid) {
    $("#skillMessage").text(
      "Skill already exists or input is invalid."
    );
    return;
  }

  updateSkills(function () {
    skills.push(skill);
  });

  $("#skillMessage").text("");

  $("#skillInput").val("");
}

$(document).on(
  "click",
  ".edit-btn",
  function () {
    const index = $(this).data(
      "index"
    );

    const newSkill = prompt(
      "Edit Skill",
      skills[index]
    );

    if (
      newSkill &&
      newSkill.trim() !== ""
    ) {
      updateSkills(function () {
        skills[index] =
          newSkill.trim();
      });
    }
  }
);

$(document).on(
  "click",
  ".delete-btn",
  function () {
    const index = $(this).data(
      "index"
    );

    $(this)
      .closest(".skill-item")
      .slideUp(
        500,
        function () {
          updateSkills(function () {
            skills.splice(index, 1);
          });
        }
      );
  }
);

function renderProjects() {
  $("#projectsContainer").empty();

  for (
    let i = 0;
    i < projects.length;
    i++
  ) {
    $("#projectsContainer").append(`
      <div class="col-md-4">

        <div class="card shadow-sm h-100">

          <img
            src="${projects[i].imageURL}"
            class="card-img-top"
            alt="${projects[i].title}"
          >

          <div class="card-body">

            <h5 class="card-title">
              ${projects[i].title}
            </h5>

            <p class="card-text">
              ${projects[i].description}
            </p>

            <p>
              <strong>Deadline:</strong>
              ${projects[
                i
              ].deadline.toLocaleDateString()}
            </p>

          </div>

        </div>

      </div>
    `);
  }
}

function sortProjects() {
  projects.sort(function (
    a,
    b
  ) {
    return a.deadline - b.deadline;
  });

  renderProjects();
}



function createEducationTable() {
  const container =
    document.getElementById(
      "educationTable"
    );

  if (!container) return;

  const table =
    document.createElement("table");

  table.className =
    "table table-striped";

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

  const tbody =
    table.querySelector("tbody");

  for (
    let i = 0;
    i < educationData.length;
    i++
  ) {
    const row =
      document.createElement("tr");

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
    document.getElementById(
      "experienceTable"
    );

  if (!container) return;

  const table =
    document.createElement("table");

  table.className =
    "table table-striped";

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

  const tbody =
    table.querySelector("tbody");

  for (
    let i = 0;
    i < experienceData.length;
    i++
  ) {
    const row =
      document.createElement("tr");

    row.innerHTML = `
      <td>${experienceData[i].role}</td>
      <td>${experienceData[i].company}</td>
      <td>${experienceData[i].dates}</td>
    `;

    tbody.appendChild(row);
  }

  container.appendChild(table);
}

let downloadCount = 0;

function updateDownloadCount() {
  downloadCount++;

  $("#downloadCount").text(
    downloadCount
  );
}



$(document).on(
  "click",
  ".menu-link",
  function (event) {
    event.preventDefault();

    const target = $(
      $(this).attr("href")
    );

    $("html, body").animate(
      {
        scrollTop:
          target.offset().top
      },
      800
    );
  }
);


$(document).on(
  "keydown",
  "#skillInput",
  function (event) {
    if (event.key === "Enter") {
      addSkill();
    }

    if (event.key === "Escape") {
      $("input").val("");
      $("#skillMessage").text("");
    }
  }
);

$(document).ready(function () {
  $("#greeting").text(
    showGreeting(name)
  );

  renderNavigation();

  renderSkills();

  renderProjects();

  createEducationTable();

  createExperienceTable();

  $("#addSkillBtn").click(
    addSkill
  );

  $("#sortProjectsBtn").click(
    sortProjects
  );

  $("#downloadResumeBtn").click(
    updateDownloadCount
  );
});