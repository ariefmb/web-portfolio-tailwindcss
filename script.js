// navbar fixed
const header = document.querySelector("header");
const toTop = document.querySelector("#to-top");

window.onscroll = () => {
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("header-fixed");
    toTop.classList.remove("scale-0");
    toTop.classList.add("scale-100");
  } else {
    header.classList.remove("header-fixed");
    toTop.classList.remove("scale-100");
    toTop.classList.add("scale-0");
  }
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

window.addEventListener("click", (e) => {
  if (e.target != nav && nav.classList.contains("hidden") == false) {
    if (
      e.target != hamburger &&
      hamburger.classList.contains("hamburger-active") != false
    ) {
      hamburger.classList.remove("hamburger-active");
      nav.classList.add("hidden");
    }
  }
});
