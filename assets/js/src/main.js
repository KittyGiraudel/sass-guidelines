<<<<<<< HEAD
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
=======
/* globals Modal */

import '../vendor/bling';
import '../vendor/accessible-modal-dialog';
import './sidebar';
import './app';
>>>>>>> f996f5576cd40d474a6dbfbdf900cf2b1c8bfa2a
