---
layout: default
title: 中文
permalink: /zh/
lang: zh
lang_tab: zh
---
<section class="list-card">
  <nav class="year-filter" aria-label="Filter by category">
    <a href="#技术">技术</a>
    <span>·</span>
    <a href="#设计">设计</a>
    <span>·</span>
    <a href="#写作">写作</a>
    <span>·</span>
    <a href="#播客">播客</a>
    <span>·</span>
    <a href="#其他">其他</a>
    <span>·</span>
    <a href="{{ '/' | relative_url }}">English</a>
  </nav>
  <div class="post-list">
    {% assign chinese_tags = "技术,设计,写作,播客,其他" | split: "," %}
    {% for tag in chinese_tags %}
      <h2 class="year-heading" id="{{ tag }}">{{ tag }}</h2>
      {% for entry in site.data.chinese_entries %}
        {% assign entry_group = entry.tag %}
        {% if entry.tag == "游戏" or entry.tag == "翻译" %}
          {% assign entry_group = "其他" %}
        {% endif %}
        {% if entry_group == tag %}
          <article>
            <p class="meta"><span class="entry-tag">{{ entry.tag }}</span><span class="meta-sep">·</span>{{ entry.date }}</p>
            <h3>
              <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>{% if entry.external %} <span class="external-mark">↗</span>{% endif %}
            </h3>
            {% if entry.description %}<p>{{ entry.description }}</p>{% endif %}
          </article>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </div>
</section>
