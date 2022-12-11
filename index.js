'use strict';

import { App } from './modules/app/app.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App('#app', 'div[data-page]', 'a[data-link]');
  app.render();
  app.init();
});
