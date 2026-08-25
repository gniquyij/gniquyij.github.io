---
layout: default
title: Archive
permalink: /archive/
---
<section class="list-card archive-card">
  <header class="archive-header">
    <h1>Archive</h1>
    <p>Earlier posts are kept as a personal archive and may not reflect my current views or standards.</p>
  </header>

  <section class="archive-section" aria-label="Archived posts">
    <div class="post-list">
      {% assign english_entries = site.data.english_entries | sort: "date" | reverse %}
      {% for entry in english_entries %}
        {% if entry.archived %}{% include archive_entry.html entry=entry %}{% endif %}
      {% endfor %}
    </div>
  </section>
</section>
