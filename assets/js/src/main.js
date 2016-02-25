import App from './App';
import Sidebar from './Sidebar';
import UrlManager from './UrlManager';

document.addEventListener('DOMContentLoaded', function (event) {
  const offset = 50;
  const headings = document.querySelectorAll('.chapter:not(.toc) > h1[id]');

  const app = new App({
    languagePicker: document.getElementById('language-picker')
  });

  const sidebar = new Sidebar({
    addOffsetView: offset,
    headings: headings,
    tableOfContents: document.querySelector('.toc'),
    footer: document.querySelector('.footer')
  });

  const aside = new Modal(document.getElementById('options-panel'));
  const url = new UrlManager({ offset, updateOn: headings });
});
