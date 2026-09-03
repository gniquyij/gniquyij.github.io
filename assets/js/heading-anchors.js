(function () {
  var postBody = document.querySelector(".post-body");

  if (!postBody) {
    return;
  }

  var headings = postBody.querySelectorAll("h2, h3");

  if (!headings.length) {
    return;
  }

  var usedIds = new Set();
  var toc = document.createElement("nav");
  var tocTitle = document.createElement("p");
  var tocList = document.createElement("ol");

  toc.className = "post-toc";
  toc.setAttribute("aria-labelledby", "post-toc-title");
  tocTitle.id = "post-toc-title";
  tocTitle.className = "post-toc-title";
  tocTitle.textContent = document.documentElement.lang === "zh" ? "目录" : "Contents";
  tocList.className = "post-toc-list";

  headings.forEach(function (heading, index) {
    var headingText = heading.textContent.trim();
    var baseId = heading.id || headingText
      .trim()
      .toLowerCase()
      .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
      .replace(/^-+|-+$/g, "") || "section-" + (index + 1);
    var id = baseId;
    var suffix = 2;

    while (usedIds.has(id) || (document.getElementById(id) && document.getElementById(id) !== heading)) {
      id = baseId + "-" + suffix;
      suffix += 1;
    }

    heading.id = id;
    usedIds.add(id);

    var anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = "#" + encodeURIComponent(id);
    anchor.setAttribute("aria-label", "Permalink to " + headingText);
    anchor.textContent = "#";
    heading.prepend(anchor);

    var item = document.createElement("li");
    var tocLink = document.createElement("a");

    item.className = "post-toc-item post-toc-item-" + heading.tagName.toLowerCase();
    tocLink.href = "#" + encodeURIComponent(id);
    tocLink.textContent = headingText;
    item.appendChild(tocLink);
    tocList.appendChild(item);
  });

  toc.appendChild(tocTitle);
  toc.appendChild(tocList);

  var disclosure = postBody.querySelector(":scope > .ai-disclosure");
  if (disclosure) {
    disclosure.insertAdjacentElement("afterend", toc);
  } else {
    postBody.prepend(toc);
  }
})();
