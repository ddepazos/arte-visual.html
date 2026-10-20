document.addEventListener("DOMContentLoaded", () => {
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
