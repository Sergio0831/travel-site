import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
  constructor(elms, treshHoldPercent) {
    this.treshHoldPercent = treshHoldPercent;
    this.itemsToReveal = elms;
    this.browserHeight = window.innerHeight;
    this.hideInitiali();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener("resize", debounce( () => {
      console.log("Resize just ran")
      this.browserHeight = window.innerHeight;
    }, 333))
  }

  calcCaller() {
    console.log("Scroll function run")
      this.itemsToReveal.forEach(el => {
        if (el.isReveald == false) {
          this.calculateIFScrolledTo(el)
        }
      })
  }

  calculateIFScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log("Element was calculated")
    let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
    if (scrollPercent < this.treshHoldPercent ) {
      el.classList.add("reveal-item--is-visible");
      el.isReveald = true
      if (el.isLastItem) {
        window.removeEventListener("scroll", this.scrollThrottle)
      }
    }
    }
  }

  hideInitiali() {
    this.itemsToReveal.forEach(el => {
      el.classList.add("reveal-item")
      el.isReveald = false
      })
      this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}

export default RevealOnScroll