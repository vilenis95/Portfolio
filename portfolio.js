$(document).ready(function() {
    const initialFileButtonText = $(".input__file-button-text").text();

    $('.input__file').each(function() {
        const input = $(this);
        const label = input.next();
        const labelVal = label.find('.input__file-button-text').text();

        input.change(function(e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.find('.input__file-button-text').text('Выбрано файлов: ' + countFiles);
            else
                label.find('.input__file-button-text').text(labelVal);
        });
    });

    const portfolioCards = $("#portfolioCards");
    const addBlockButton = $("#addBlockButton");
    const addBlockForm = $("#addBlockForm");
    const submitBlockButton = $("#submitBlockButton");

    addBlockButton.click(function() {
        portfolioCards.fadeOut("slow");
        addBlockForm.fadeIn("slow");
    });

    submitBlockButton.click(function() {
        const blockTitle = $("#blockTitle").val();
        const blockText = $("#blockText").val();
        const blockImage = $("#blockImage")[0].files[0];
        const blockCategory = $("#blockCategory").val();

        if (blockImage) {
            const block = $("<div>").addClass("card");
            const image = $("<img>").attr("src", URL.createObjectURL(blockImage));
            const category = $("<p>").text(blockCategory);
            const title = $("<a>").text(blockTitle);

            block.append(image, category, title);
            portfolioCards.prepend(block);

            $(".input__file-button-text").text(initialFileButtonText);

            $("#blockTitle").val("");
            $("#blockText").val("");
            $("#blockImage").val("");
            $("#blockCategory").val("All");

            addBlockForm.fadeOut("slow");
            portfolioCards.fadeIn("slow");
        } else {
            alert("Choose an image file.");
        }
    });
});

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

