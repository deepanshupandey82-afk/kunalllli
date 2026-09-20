// ========================================
// SOLCHEMI WEBSITE
// Basic interactions
// ========================================


// ----------------------------------------
// MOBILE MENU
// ----------------------------------------

const mobileMenu = document.getElementById("mobileMenu");

const closeMenu = document.getElementById("closeMenu");


// Create a mobile menu button automatically
const navContainer = document.querySelector(".nav-container");

const mobileButton = document.createElement("button");

mobileButton.className = "mobile-menu-button";

mobileButton.innerHTML = "MENU";

mobileButton.setAttribute("aria-label", "Open menu");

navContainer.appendChild(mobileButton);


// Open mobile menu
mobileButton.addEventListener("click", function () {

    mobileMenu.classList.add("open");

    document.body.classList.add("menu-open");

});


// Close mobile menu
closeMenu.addEventListener("click", function () {

    mobileMenu.classList.remove("open");

    document.body.classList.remove("menu-open");

});


// Close menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("open");

        document.body.classList.remove("menu-open");

    });

});


// ----------------------------------------
// SCROLL REVEAL
// ----------------------------------------

const revealElements = document.querySelectorAll(
    ".food-card, .review-grid article, .experience-list > div"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});


// ----------------------------------------
// CONSOLE MESSAGE
// ----------------------------------------

console.log("Solchemi website loaded successfully.");