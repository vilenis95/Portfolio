document.addEventListener("DOMContentLoaded", function () {
    let blogCards = document.querySelectorAll('.blog_card');
    let cardsPerPage = 3;
    let currentPage = 1;

    // Функція для відображення секцій на поточній сторінці
    function showPage(pageNumber) {
        let startIndex = (pageNumber - 1) * cardsPerPage;
        let endIndex = startIndex + cardsPerPage;

        blogCards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        currentPage = pageNumber;
    }

    // За замовчуванням відображаємо першу сторінку
    showPage(currentPage);

    // Обробники для кнопок пагінації
    let paginationLinks = document.querySelectorAll('.page-link');

    paginationLinks.forEach((link, index) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            showPage(index + 1);
        });
    });

    // Download Resume
    let downloadButton = document.getElementById('downloadButton');
    // Визначаємо URL для скачування файлу
    let resumeFileURL = './Resume.pdf';

    downloadButton.addEventListener('click', () => {
        // Створюємо посилання для завантаження файлу
        let link = document.createElement('a');
        link.href = resumeFileURL;
        link.download = 'your_resume.pdf'; // Назва файлу для збереження

        // Додаємо посилання на сторінку й емулюємо клік по ній
        document.body.appendChild(link);
        link.click();

        // Видаляємо посилання
        document.body.removeChild(link);
    });
});

// Кнопки навігації
let homeButton = document.getElementById("about-meBtn");
let resumeButton = document.getElementById("resumeBtn");
let workButton = document.getElementById("portfolioBtn");
let blogButton = document.getElementById("blogBtn");
let contactButton = document.getElementById("contactBtn");

// Блоки сторінки
let aboutMeSection = document.querySelector(".about-me");
let resumeSection = document.querySelector(".resume");
let workSection = document.querySelector(".portfolio");
let blogSection = document.querySelector(".blog");
let contactSection = document.querySelector(".contact");


document.addEventListener("DOMContentLoaded", function () {
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

    // Функція для зміни активної сторінки і збереження в `localStorage`
    function setActiveSection(sectionClass) {
        hideAllSections();
        let section = document.querySelector(sectionClass);
        if (section) {
            section.style.display = "block";
            let buttonId = sectionClass + "Btn";
            let result = buttonId.replace(/\./, "#");
            let button = document.querySelector(result);
            removeActiveClassFromButtons();
            if (button) {
                button.classList.add("active");
            }
            // Збереження активної сторінки в `localStorage`
            localStorage.setItem("activeSection", sectionClass);
        }
    }

    // Обробник подій для кнопок навігації
    homeButton.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveSection(".about-me");
    });

    resumeButton.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveSection(".resume");
    });

    workButton.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveSection(".portfolio");
    });

    blogButton.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveSection(".blog");
    });

    contactButton.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveSection(".contact");
    });


    // Зчитування з `localStorage` та відображення
    let activeSection = localStorage.getItem("activeSection");
    if (activeSection) {
        setActiveSection(activeSection);

    } else {
        // За замовчуванням старт першої сторінки
        setActiveSection(".about-me");
    }
});

