/*========================= Toggle Style Switcher =================================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

/*========================= Theme Colors =================================== */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("color", color); // Save the selected color in localStorage
    alternateStyles.forEach((style) => {
        if (style.getAttribute("title") === color) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// On page load, apply the selected color from localStorage
window.addEventListener("load", () => {
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
        setActiveStyle(savedColor);
    }
});

/*========================= Theme Light and Dark Mode =================================== */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Save dark mode preference in localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// On page load, apply the saved theme from localStorage
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        document.body.classList.add("light");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
