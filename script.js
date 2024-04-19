// navbar fixed
const header = document.querySelector("header");

window.onscroll = () => {
  const fixedNav = header.offsetTop;

  window.scrollY > fixedNav
    ? header.classList.add("header-fixed")
    : header.classList.remove("header-fixed");
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  setTimeout(() => {
    header.classList.toggle("shadow-md");
    nav.classList.toggle("hidden");
  }, 200);
});
