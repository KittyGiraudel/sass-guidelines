document.addEventListener('DOMContentLoaded', function (event) {
  var app = new window.App({
    languagePicker: document.getElementById('language-picker')
  });

  var sidebar = new window.Sidebar({
    addOffsetView: 50,
    headings: document.querySelectorAll('.chapter:not(.toc) > h1[id]'),
    tableOfContents: document.querySelector('.toc'),
    footer: document.querySelector('.footer')
  });

  var aside = new Modal(document.getElementById('options-panel'));
});
