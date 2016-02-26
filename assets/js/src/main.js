/* globals Modal */

import '../vendor/bling';
import '../vendor/accessible-modal-dialog';
import './app';
import './sidebar';

document.addEventListener('DOMContentLoaded', function (event) {
  new Modal(document.getElementById('options-panel')); // eslint-disable-line
});
