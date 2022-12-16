'use strict';

import { App } from './modules/app/app.js';
import { sleep } from './modules/common/sleep.js';
import { Writer } from './modules/writer.js';
import { Observer } from './modules/observe.js';
import { Tabs } from './modules/tabs.js';
window.addEventListener('DOMContentLoaded', () => {
  sleep(2000, () =>
    Writer(100, 'Добро пожаловать на наш сайт', `.intro__label`)
  );
  new Observer('.description__object', 'hidden-obj', 'fadeInUpAnim', {
    threshold: 0.4,
  }).init();

  new Observer('.footer', 'hidden-obj', 'fadeInUpAnim', {
    threshold: 0.3,
  }).init();

  const scrl = document.querySelector('.scrollDown');
  scrl.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.block').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });

  new Observer('[data-anim]', 'hidden-obj', 'fadeInUpAnim', {
    threshold: 1,
  }).init();

  // const theoryTabs = new Tabs('.tabs__item', '.tabs__block', 'hidden', () => {
  //   document.querySelector('body').scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });
  // });
  // theoryTabs.init();

  new App('#app', 'div[data-page]', 'a[data-link]', () => {
    theoryTabs.close();
  }).init();
});
