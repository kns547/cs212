// Step 1
console.log("Hello World!");

// Step 3
const name = "Katya Safsten";
let hasDownloadedResume = false;

// Step 4
function showGreeting(name) {
  return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

// Step 5
function daysUntilDeadline(projectDeadline) {
  const currentDate = new Date();
  const deadlineDate = new Date(projectDeadline);

  const difference =
    deadlineDate.getTime() - currentDate.getTime();

  const daysRemaining = Math.ceil(
    difference / (1000 * 60 * 60 * 24)
  );

  return daysRemaining;
}

document.addEventListener("DOMContentLoaded", function () {

  // Greeting
  const greetingElement = document.getElementById("greeting");

  if (greetingElement) {
    greetingElement.textContent = showGreeting(name);
  }

  // Resume Download
  const downloadButton =
    document.getElementById("downloadResumeBtn");

  if (downloadButton) {
    downloadButton.addEventListener("click", function () {

      if (!hasDownloadedResume) {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true;
      }

    });
  }

  // Deadline Calculation
  const projectDeadline = "2026-12-15";

  const remainingDays =
    daysUntilDeadline(projectDeadline);

  console.log(
    "Days remaining until deadline:",
    remainingDays
  );

  const deadlineElement =
    document.getElementById("deadline-days");

  if (deadlineElement) {
    deadlineElement.textContent =
      remainingDays + " days";
  }

});
