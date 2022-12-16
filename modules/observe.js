export class Observer {
  constructor(target, hidden, visiable, settings) {
    this.target = document.querySelectorAll(target);

    this.cb = (entries, observer) => {
      entries.forEach(elem => {
        if (elem.isIntersecting) {
          elem.target.classList.remove(hidden);
          elem.target.classList.add(visiable);
          this.observer.unobserve(elem.target);
        }
      });
    };
    this.observer = new IntersectionObserver(this.cb, settings);
  }
  getObserver() {
    return this.observer;
  }
  init() {
    this.target.forEach(element => {
      this.observer.observe(element);
    });
  }
}
