---
layout: default
title: 中文
permalink: /zh/
lang: zh
lang_tab: zh
---
<section class="list-card">
  <nav class="year-filter" aria-label="Filter by category">
    <button class="filter-button is-active" type="button" data-filter="all" aria-pressed="true">全部</button>
    <span>·</span>
    <button class="filter-button" type="button" data-filter="技术" aria-pressed="false">技术</button>
    <span>·</span>
    <button class="filter-button" type="button" data-filter="设计" aria-pressed="false">设计</button>
    <span>·</span>
    <button class="filter-button" type="button" data-filter="写作" aria-pressed="false">写作</button>
    <span>·</span>
    <button class="filter-button" type="button" data-filter="播客" aria-pressed="false">播客</button>
    <span>·</span>
    <button class="filter-button" type="button" data-filter="其他" aria-pressed="false">其他</button>
    <span>·</span>
    <a href="{{ '/' | relative_url }}">English</a>
  </nav>
  <div class="post-list">
    {% assign sorted_entries = site.data.chinese_entries | sort: "date" | reverse %}
    {% for entry in sorted_entries %}
      {% assign entry_group = entry.tag %}
      {% if entry.tag == "游戏" or entry.tag == "翻译" or entry.tag == "生活" %}
        {% assign entry_group = "其他" %}
      {% endif %}
      <article data-category="{{ entry_group }}">
        <p class="meta"><time class="entry-date" datetime="{{ entry.date }}">{{ entry.date }}</time><span class="meta-sep">·</span><span class="entry-tag">{{ entry.tag }}</span></p>
        <h3>
          <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>{% if entry.external %} <span class="external-mark">↗</span>{% endif %}
        </h3>
        {% if entry.description %}<p class="entry-description">{{ entry.description }}</p>{% endif %}
        {% if entry.languages %}
          <p class="entry-languages"><span>其他语言：</span>{% for language in entry.languages %}<a href="{{ language.url }}" hreflang="{{ language.code }}">{{ language.label }}</a>{% unless forloop.last %}<span class="meta-sep">·</span>{% endunless %}{% endfor %}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>
