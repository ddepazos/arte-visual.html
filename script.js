document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("age-gate");
  const site = document.getElementById("site-content");
  const accept = document.getElementById("age-accept");
  const sessionKey = "arte-visual-age-confirmed";

  function revealSite() {
    site.hidden = false;
    gate.hidden = true;
  }

  let confirmed = false;
  try { confirmed = sessionStorage.getItem(sessionKey) === "yes"; } catch (_) {}
  if (confirmed) {
    revealSite();
  } else {
    accept.addEventListener("click", () => {
      try { sessionStorage.setItem(sessionKey, "yes"); } catch (_) {}
      revealSite();
      document.querySelector(".brand")?.focus();
    });
  }

  const filters = document.querySelectorAll(".filters [data-filter]");
  const works = document.querySelectorAll(".gallery [data-category]");

  function applyFilter(category) {
    filters.forEach(button => {
      const active = button.dataset.filter === category;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    works.forEach(work => {
      work.hidden =
        category !== "all" &&
        work.dataset.category !== category;
    });
  }

  filters.forEach(button => {
    button.addEventListener("click", () => {
      applyFilter(button.dataset.filter);
    });
  });

  applyFilter("all");
});
