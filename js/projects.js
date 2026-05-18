const projects = [
  {
    title: "Portfolio Site",
    type: "Website",
    description:
      "Personal portfolio website showcasing my projects, skills, and experience in ICT and software development.",
    image: "./img/portfolio.png",
    tags: ["HTML", "CSS", "JS"],
    link: "./index.html#hero-landing",
  },
  {
    title: "NATIN LVS",
    type: "Web App",
    description:
      "A simple student tracking system for monitoring academic counseling and students' grade progress, including administrative functions for both students and teachers.",
    image: "./img/natin-test.jpg",
    tags: [
      "React JS",
      "Tailwind CSS",
      "RSuite",
      "PHP",
      "Google OAuth",
      "MYSQL",
    ],
    link: "#",
  },
];

function createHomeCard(project) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.style.backgroundImage = `url('${project.image}')`; // JS sets it, not HTML
  card.addEventListener("click", () => {
    if (!project.link || project.link === "#") {
      showToast("Coming Soon! Project link not available yet");
      return;
    }
    window.location.href = project.link;
  });

  card.innerHTML = `
    <div class="project-details">
      <div class="type">${project.type}</div>
      <div class="title">${project.title}</div>
      <div class="description">${project.description}</div>
    </div>
  `;

  return card;
}

function createWorkCard(project) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.style.backgroundImage = `url('${project.image}')`;
  card.addEventListener("click", () => {
    if (!project.link || project.link === "#") {
      showToast("Coming Soon! Project link not available yet");
      return;
    }
    window.location.href = project.link;
  });

  card.innerHTML = `
    <div class="project-details">
      <div class="type">${project.type}</div>
      <div class="title">${project.title}</div>
      <div class="description">${project.description}</div>
      <div class="tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `;

  return card;
}

function renderHomeProjects(containerSelector, limit = 2) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  projects
    .slice(0, limit)
    .forEach((p) => container.appendChild(createHomeCard(p)));
}

function renderWorkProjects(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  projects.forEach((p) => container.appendChild(createWorkCard(p)));

  // coming soon card
  const comingSoon = document.createElement("div");
  comingSoon.classList.add("project-card");
  comingSoon.style.backgroundColor = "gray";
  comingSoon.addEventListener("click", () => {
    showToast("Coming Soon!");
  });
  comingSoon.innerHTML = `<div class="project-details"><div class="title">Coming Soon...</div></div>`;
  container.appendChild(comingSoon);
}
