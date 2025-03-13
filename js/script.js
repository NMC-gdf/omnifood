/* // alert ('Hello, Welcome to omnifood!');
console.log("Hello, Welcome to JavaScript");

let title = "TechWare Academy"; // string
let year = 2025; // Integer/Number
let isLoggedIn = true; // Boolean
console.log(title, year, isLoggedIn);

//DOM Manipulations
const headingEL = document.querySelector(".heading-primary");

headingEL.style.color = "blue";
headingEL.style.backgroundColor = "red";
headingEL.style.color = "#fff";
headingEL.style.padding = "20px";
headingEL.style.fontsize = "30px";

headingEL.textContent = title;

 */

// Set YEAR Element
const yearEL = document.querySelector(".year");
const date = new Date().getFullYear();
yearEL.textContent = date;
yearEL.style.fontWeight = "500";

// Show Mobile Menu
const headerEL = document.querySelector(".header");
const btnEL = document.querySelector(".btn-mobile-nav");

btnEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// Smooth Scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");
    //console.log(href);
    //Scroll back to the top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);

      sectionEL.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEL.classList.toggle("nav-open");
    }
  });
});

// sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
      document.body.classList.add("sticky");
    }

    if (ent.isInteresting === true) {
      document.body.classList.remove("sticky");
    }
  },

  {
    // In the Viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
