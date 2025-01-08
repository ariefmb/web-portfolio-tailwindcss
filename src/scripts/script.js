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

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  setTimeout(() => {
    if (darkToggle.checked) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, 500);
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  darkToggle.checked = false;
}

const toggleProject = document.getElementById("toggle-project");
const webPro = document.getElementById("web-pro");
const dataPro = document.getElementById("data-pro");
const projects = document.getElementById("projects");

if (toggleProject.classList.contains("translate-x-[0px]")) {
  webPro.style.color = "#082F49";
}

webPro.addEventListener("click", () => {
  if (!toggleProject.classList.contains("translate-x-[0px]")) {
    if (!projects.classList.contains("translate-x-0")) {
      toggleProject.classList.replace(
        "translate-x-[117px]",
        "translate-x-[0px]",
      );
      webPro.style.color = "#082F49";
      dataPro.style.color = "rgb(100 116 139)";
      projects.classList.replace("translate-x-[-100%]", "translate-x-0");
      projects.style.height = '1250px'
    }
  }
});

dataPro.addEventListener("click", () => {
  if (!toggleProject.classList.contains("translate-x-[117px]")) {
    if (!projects.classList.contains("translate-x-[-100%]")) {
      toggleProject.classList.replace(
        "translate-x-[0px]",
        "translate-x-[117px]",
      );
      dataPro.style.color = "#082F49";
      webPro.style.color = "rgb(100 116 139)";
      projects.classList.replace("translate-x-0", "translate-x-[-100%]");
      projects.style.height = '950px'
    }
  }
});
