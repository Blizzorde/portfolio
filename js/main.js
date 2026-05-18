const navLinks = document.querySelectorAll(".nav-link, .mobile-link");

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

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");

  // swap icon between bars and X
  const icon = hamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// close menu when a link is clicked
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    const icon = hamburger.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});
function showToast(message = "Project link not available yet") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
