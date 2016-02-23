document.addEventListener('DOMContentLoaded', function (event) {
  var offset = 50;
  var headings = document.querySelectorAll('.chapter:not(.toc) > h1[id]');

  var app = new window.App({
    languagePicker: document.getElementById('language-picker')
  });

  var sidebar = new window.Sidebar({
    addOffsetView: offset,
    headings: headings,
    tableOfContents: document.querySelector('.toc'),
    footer: document.querySelector('.footer')
  });

  var aside = new Modal(document.getElementById('options-panel'));

  var url = new window.UrlManager({
    offset: offset,
    updateOn: headings
  });
});
