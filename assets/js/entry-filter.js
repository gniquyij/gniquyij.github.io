(function () {
  var filters = document.querySelectorAll(".filter-button[data-filter]");
  var entries = document.querySelectorAll(".post-list article[data-category]");

  if (!filters.length || !entries.length) return;

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      var selected = button.dataset.filter;

      entries.forEach(function (entry) {
        entry.hidden = selected !== "all" && entry.dataset.category !== selected;
      });

      filters.forEach(function (filter) {
        var active = filter === button;
        filter.classList.toggle("is-active", active);
        filter.setAttribute("aria-pressed", String(active));
      });
    });
  });
})();
