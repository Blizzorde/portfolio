const skillSets = {
  technical: {
    title: "Technical Skills",
    skills: [
      "REACT JS",
      "TAILWIND CSS",
      "NODE JS",
      "DB Design",
      "API Design",
      "JAVASCRIPT",
      "MYSQL",
      "PHP",
    ],
  },
  functional: {
    title: "Functional Skills",
    skills: [
      "LEADERSHIP",
      "TEAMWORK",
      "COMMUNICATION",
      "PROBLEM SOLVING",
      "CRITICAL THINKING",
      "ADAPTABILITY",
      "TIME MANAGEMENT",
      "CREATIVITY",
    ],
  },
};

const degrees = [0, 45, 90, 135, 180, 225, 270, 315];
const orbit = document.querySelector(".skillset-orbit");
const title = document.querySelector(".skillset-title");
const toggleBtns = document.querySelectorAll(".toggle-btn");

function attachHoverListeners() {
  document.querySelectorAll(".skill").forEach((skill) => {
    skill.addEventListener("mouseenter", () => {
      orbit.style.animationPlayState = "paused";
    });
    skill.addEventListener("mouseleave", () => {
      orbit.style.animationPlayState = "running";
    });
  });
}

function renderSkills(set) {
  const { title: setTitle, skills } = skillSets[set];

  // update title
  title.textContent = setTitle;

  // clear and re-render
  orbit.innerHTML = "";
  skills.forEach((skill, i) => {
    const div = document.createElement("div");
    div.classList.add("skill", `deg${degrees[i]}`);
    div.textContent = skill;
    orbit.appendChild(div);
  });
  attachHoverListeners();
}

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderSkills(btn.dataset.set);
  });
});

// render default on load
renderSkills("technical");
renderHomeProjects(".projects-cards-wrapper");
