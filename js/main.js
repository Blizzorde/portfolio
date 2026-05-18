const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.classList.remove("active");

  if (
    (link.href.includes(window.location.pathname.split("/").pop()) &&
      window.location.pathname.split("/").pop() != "") ||
    (window.location.pathname.split("/").pop() == "" &&
      link.href.includes("/index.html"))
  ) {
    link.classList.add("active");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 },
); // 0.1 = trigger when 10% of element is visible

document.querySelectorAll(".animate").forEach((el) => observer.observe(el));

function showToast(message = "Project link not available yet") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
