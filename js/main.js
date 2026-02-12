document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // Education Tabs
  // =========================
  window.showTab = function (tabId, button) {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.classList.add("hidden");
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    document.getElementById(tabId).classList.remove("hidden");
    button.classList.add("active");
  };


  // =========================
  // Certifications Accordion
  // =========================
  document.querySelectorAll(".cert-toggle").forEach(button => {
    button.addEventListener("click", function () {
      const details = button.nextElementSibling;
      const arrow = button.querySelector(".arrow");

      details.classList.toggle("show");
      arrow.textContent = details.classList.contains("show") ? "▴" : "▾";
    });
  });


  // =========================
  // Skills Accordion
  // =========================
  document.querySelectorAll(".skill-toggle").forEach(button => {
    button.addEventListener("click", function () {
      const details = button.nextElementSibling;
      const arrow = button.querySelector(".arrow");

      details.classList.toggle("show");
      arrow.textContent = details.classList.contains("show") ? "▴" : "▾";
    });
  });

});
