const stickyNav = document.getElementById("sticky-nav");
const menuIcon = document.getElementById("menu-btn");

window.onload = function () {
  menuIcon.checked = false;
};

const thresholdSmall = 50;
const thresholdLarge = 300;

function isBeyond(threshold) {
  return (
    document.body.scrollTop >= threshold ||
    document.documentElement.scrollTop >= threshold
  );
}

let lastScrollTop = 0;
window.onscroll = function () {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const isDownscroll = scrollY > lastScrollTop;
  if (isDownscroll) {
    stickyNav.classList.add("closed");
    // stickyNav.classList.add("nav-transparent");
    // stickyNav.classList.remove("nav-colored");
  } else {
    stickyNav.classList.remove("closed");
    // stickyNav.classList.add("nav-colored");
    // stickyNav.classList.remove("nav-transparent");
  }

  lastScrollTop = scrollY <= 0 ? 0 : scrollY;
};
