let indicator = document.querySelector(".scroll-indicator .progress");
window.addEventListener("scroll", function() {
  let scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  indicator.style.width = scrollPercentage + '%';
});
