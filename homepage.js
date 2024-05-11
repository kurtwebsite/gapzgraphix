document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-links ul li a");
  const tabContents = document.querySelectorAll(".main-section");
  document.querySelector(".main-header .nav-links").style.left = "-100%";
  const sections = document.querySelectorAll(".main-section");
  const navLinks = document.querySelector(".nav-links");

  function setActiveLink() {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const sectionOffset = section.offsetTop - navLinks.offsetHeight;

      if (
        scrollPosition >= sectionOffset &&
        scrollPosition < sectionOffset + section.offsetHeight
      ) {
        tabs.forEach((tab) => tab.classList.remove("active-link"));
        document
          .getElementById(`${sectionId}-link`)
          .classList.add("active-link");
      }
    });
  }

  // Call setActiveLink initially
  setActiveLink();

  // Call setActiveLink on scroll
  window.addEventListener("scroll", setActiveLink);

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.getAttribute("id");
      tabs.forEach((tab) => tab.classList.remove("active-link"));
      tabContents.forEach((content) =>
        content.classList.remove("active-tab-content")
      );
      document.getElementById(target).classList.add("active-tab-content");
      this.classList.add("active-link");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const homeSection = document.getElementById("home");

  // Add active classes to the home link and section by default
  homeLink.classList.add("active-link");
  homeSection.classList.add("active-tab-content");

  // Rest of your event listeners for tab links...
});

const links = document.querySelectorAll(".nav-links ul li a");
const sections = document.querySelectorAll(".main-section");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href").substring(1);
    sections.forEach((section) => {
      section.classList.remove("active-tab-content");
    });
    document.getElementById(targetId).classList.add("active-tab-content");
  });
});

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute("href").substring(1);

    // Remove active class from all links and sections
    links.forEach((link) => {
      link.classList.remove("active-link");
    });
    sections.forEach((section) => {
      section.classList.remove("active-tab-content");
    });

    // Add active class to the clicked link and corresponding section
    link.classList.add("active-link");
    document.getElementById(targetId).classList.add("active-tab-content");
  });
});

function toggleNav() {
  const navLinks = document.querySelector(".main-header .nav-links");
  if (navLinks.style.left === "-100%") {
    navLinks.style.left = "0";
  } else {
    navLinks.style.left = "-100%";
  }
}
