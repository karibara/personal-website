let header = document.getElementById('skills');

// this function change opacity of element while scrolling
function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  let distanceToTop = window.scrollY + element.getBoundingClientRect().top;
  let elementHeight = element.offsetHeight;
  let scrollTop = document.documentElement.scrollTop;
  
  let opacity = 1;
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

// this runs everytime the user scrolls
function scrollHandler() {
  fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);