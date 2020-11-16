import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import ReaveaOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'

new Modal();
let stickyHeader = new StickyHeader();
let mobileMenu =  new MobileMenu();
new ReaveaOnScroll(document.querySelectorAll(".feature-item"), 75);
new ReaveaOnScroll(document.querySelectorAll(".testimonial"), 60);

if (module.hot) {
  module.hot.accept()
}


