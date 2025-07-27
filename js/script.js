// Elements
const navbar = document.querySelector(".navbar");
const navToggle = document.querySelectorAll(".nav__toggle");
const navLogo = document.querySelector(".nav__logo");
const navItems = document.querySelectorAll(".nav__item");
const formStatus = document.getElementById("form-status");

// Add sending email functionality by EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "template_tdkpnhs", this).then(
      () => {
        formStatus.innerText = "Poruka uspješno poslana!";
        formStatus.classList.remove("hidden");
        formStatus.classList.add("form__status--success");
        document.getElementById("contact-form").reset();
      },
      (error) => {
        formStatus.innerText = "Greška pri slanju poruke.";
        formStatus.classList.remove("hidden");
        formStatus.classList.add("form__status--error");
      }
    );
  });

// Add scroll effect for navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle with animation
navToggle.forEach((navToggleEl) => {
  navToggleEl.addEventListener("click", () => {
    navbar.classList.toggle("nav-active");

    // Prevent scrolling when menu is open
    if (navbar.classList.contains("nav-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && navbar.classList.contains("nav-active")) {
    navbar.classList.remove("nav-active");
    document.body.style.overflow = "";
  }
});

// Close mobile menu when clicking on logo
navLogo.addEventListener("click", (e) => {
  if (navbar.contains(e.target) && navbar.classList.contains("nav-active")) {
    navbar.classList.remove("nav-active");
    document.body.style.overflow = "";
  }
});

// Close mobile menu when one of nav items is clicked
navItems.forEach((navItemEl) => {
  navItemEl.addEventListener("click", () => {
    navbar.classList.remove("nav-active");
    document.body.style.overflow = "";
  });
});
