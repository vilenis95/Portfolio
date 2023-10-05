// 
document.addEventListener("DOMContentLoaded", function () {
    // Кнопки навігації
    let homeButton = document.getElementById("homeBtn");
    let resumeButton = document.getElementById("resumeBtn");
    let workButton = document.getElementById("workBtn");
    let blogButton = document.getElementById("blogBtn");
    let contactButton = document.getElementById("contactBtn");

    // Блоки сторінки
    let aboutMeSection = document.querySelector(".about-me.right");
    let resumeSection = document.querySelector(".resume");
    let workSection = document.querySelector(".portfolio");
    let blogSection = document.querySelector(".blog");
    let contactSection = document.querySelector(".contact");

    // Функція для "скриття" блоків
    function hideAllSections() {
        aboutMeSection.style.display = "none";
        resumeSection.style.display = "none";
        workSection.style.display = "none";
        blogSection.style.display = "none";
        contactSection.style.display = "none";
    }

    // Функція для видалення стилів з кнопок навігації
    function removeActiveClassFromButtons() {
        homeButton.classList.remove("active");
        resumeButton.classList.remove("active");
        workButton.classList.remove("active");
        blogButton.classList.remove("active");
        contactButton.classList.remove("active");
    }

    // обробник подій для кнопок навігації
    homeButton.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        aboutMeSection.style.display = "block";
        removeActiveClassFromButtons();
        homeButton.classList.add("active");
    });

    resumeButton.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        resumeSection.style.display = "block";
        removeActiveClassFromButtons();
        resumeButton.classList.add("active");
    });

    workButton.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        workSection.style.display = "block";
        removeActiveClassFromButtons();
        workButton.classList.add("active");
    });

    blogButton.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        blogSection.style.display = "block";
        removeActiveClassFromButtons();
        blogButton.classList.add("active");
    });

    contactButton.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllSections();
        contactSection.style.display = "block";
        removeActiveClassFromButtons();
        contactButton.classList.add("active");
    });

    // За замовчуванням старт першої сторінки
    aboutMeSection.style.display = "block";
    homeButton.classList.add("active");
});
