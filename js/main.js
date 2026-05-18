const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.classList.remove("active");

  if (link.href.includes(window.location.pathname.split("/").pop())) {
    link.classList.add("active");
  }
});

function showToast(message = "Project link not available yet") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
