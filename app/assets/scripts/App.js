import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import ReaveaOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

new ClientArea();
let stickyHeader = new StickyHeader();
let mobileMenu =  new MobileMenu();
new ReaveaOnScroll(document.querySelectorAll(".feature-item"), 75);
new ReaveaOnScroll(document.querySelectorAll(".testimonial"), 60);
let modal;


document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem"))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}


