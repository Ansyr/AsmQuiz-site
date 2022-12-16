export class Tabs {
  constructor(tabSelector, contentSelector, activeClass, afterChangeTab) {
    this.tabs = document.querySelectorAll(tabSelector);
    this.content = document.querySelectorAll(contentSelector);
    this.activeClass = activeClass;
    this.cb = afterChangeTab;
  }
  init() {
    this.content.forEach(elem => {
      elem.classList.add(this.activeClass);
    });
    this.tabs.forEach((elem, i) => {
      elem.addEventListener('click', e => {
        e.preventDefault();
        this.content.forEach(el => {
          el.classList.add(this.activeClass);
        });
        this.content[i].classList.remove(this.activeClass);
        this.cb();
      });
    });
  }
  close() {
    this.content.forEach(elem => {
      elem.classList.add(this.activeClass);
    });
  }
}
