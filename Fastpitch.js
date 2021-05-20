let slideIndex = 0;
let slides = document.getElementsByClassName('mySlides');
let timeout = setTimeout(right, 5000);

render();

//navstick
const body = document.querySelector('body');
const header = document.querySelector('header'); //I don't know why I called this the header because it's the nav
const headerOffsetTop = header.offsetTop;

function fixNav() {
  if(window.scrollY >= headerOffsetTop) {
    body.classList.add('fixed-header');
    body.style.paddingTop = header.offsetHeight + 'px';
  } else {
    body.classList.remove('fixed-header');
    body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);



//slideshow
function right() {
  slideIndex = (slideIndex + 1) % slides.length;
  clearTimeout(timeout);
  render();
}

function left() {
  slideIndex--;
  if(slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  clearTimeout(timeout);
  render();
}

function render() {
  // clears all the images then sets the one at the index to block
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  timeout = setTimeout(right, 5000);
}

