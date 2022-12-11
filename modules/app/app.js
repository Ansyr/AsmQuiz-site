'use strict';
export class App {
  constructor(root, selector, linkSelector) {
    this.pages = document.querySelectorAll(selector);
    this.links = document.querySelectorAll(linkSelector);
    console.log(this.pages);
    this.root = document.querySelector(root);
    console.log(this.links);
  }
  init() {
    this.links.forEach(link => {
      console.log(link);
      const orderNum = link.getAttribute('data-link');
      console.log(orderNum);
      link.addEventListener('click', e => {
        e.stopPropagation();
        this.changePage(orderNum);
        console.log(orderNum, e);
      });
    });
  }
  render() {
    try {
      const sleep = (ms, cb) => {
        setTimeout(cb, ms);
      };
      const Writer = (ms, text, target, flag = true) => {
        try {
          let firstCall = flag;
          if (!firstCall) {
            target.innerHTML = '';
            firstCall = true;
          }
          let i = 0;
          if (i < text.length) {
            document.querySelector(target).innerHTML += text.charAt(i);
            i++;
            setTimeout(() => Writer(ms, text.slice(i), target, firstCall), ms);
          }
        } catch (e) {
          console.log(e);
          firstCall = false;
        }
      };
      sleep(2000, () =>
        Writer(100, 'Добро пожаловать на наш сайт', `.intro__label`)
      );
    } catch (e) {
      console.log(e);
    }
  }
  changePage(i) {
    this.pages.forEach(page => {
      if (page.getAttribute('data-page') == i) {
        page.classList.remove('hidden');
      } else {
        page.classList.add('hidden');
      }
    });
  }
}