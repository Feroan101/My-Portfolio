window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const trigger = document.getElementById("resume");

  if (trigger) {
    trigger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});
