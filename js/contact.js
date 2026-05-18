const form = document.querySelector(".contact-form-container form");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email-address").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const body = `---%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0A---%0D%0A%0D%0AYour Message:%0D%0A${encodeURIComponent(message)}`;

  window.location.href = `mailto:archer.unspoken001@passmail.net?subject=${subject}&body=${body}`;

  form.reset();

  successMessage.classList.add("show");
  setTimeout(() => successMessage.classList.remove("show"), 4000);
});
