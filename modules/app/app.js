'use strict';
export class App {
  constructor(root, selector, linkSelector, afterChangePage) {
    this.pages = document.querySelectorAll(selector);
    this.links = document.querySelectorAll(linkSelector);
    this.root = document.querySelector(root);
    this.cb = afterChangePage;
  }
  init() {
    this.links.forEach(link => {
      const orderNum = link.getAttribute('data-link');
      link.addEventListener('click', e => {
        e.stopPropagation();
        this.changePage(orderNum);
      });
    });
  }
  changePage(i) {
    this.pages.forEach(page => {
      if (page.getAttribute('data-page') == i) {
        page.classList.remove('hidden');
      } else {
        page.classList.add('hidden');
      }
    });
    document.querySelector('body').scrollIntoView({
      behavior: 'smooth',
    });
    this.cb();
  }
}
