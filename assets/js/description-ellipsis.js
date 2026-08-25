(function () {
  var descriptions = Array.from(document.querySelectorAll(".entry-description"));

  if (!descriptions.length) return;

  var isChinese = document.documentElement.lang.toLowerCase().startsWith("zh");

  descriptions.forEach(function (description) {
    description.dataset.fullText = description.textContent.trim();
    description.setAttribute("aria-label", description.dataset.fullText);
  });

  function fitDescription(description) {
    var fullText = description.dataset.fullText;
    var availableWidth = description.clientWidth;

    if (!fullText || availableWidth === 0) return;

    description.textContent = fullText;
    if (description.scrollWidth <= availableWidth) return;

    var units = isChinese ? Array.from(fullText) : fullText.split(/\s+/);
    var separator = isChinese ? "" : " ";
    var low = 0;
    var high = units.length;

    while (low < high) {
      var middle = Math.ceil((low + high) / 2);
      description.textContent = units.slice(0, middle).join(separator) + "…";

      if (description.scrollWidth <= availableWidth) {
        low = middle;
      } else {
        high = middle - 1;
      }
    }

    description.textContent = units.slice(0, low).join(separator).replace(/[\s.,;:!?，。；：！？]+$/, "") + "…";
  }

  function fitAllDescriptions() {
    descriptions.forEach(fitDescription);
  }

  fitAllDescriptions();

  if ("ResizeObserver" in window) {
    var observer = new ResizeObserver(fitAllDescriptions);
    descriptions.forEach(function (description) {
      observer.observe(description);
    });
  } else {
    window.addEventListener("resize", fitAllDescriptions);
  }
})();
