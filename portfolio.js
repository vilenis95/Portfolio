$(document).ready(function() {
    let initialFileButtonText = $(".input__file-button-text").text();

    $('.input__file').each(function() {
        let input = $(this);
        let label = input.next();
        let labelVal = label.find('.input__file-button-text').text();

        input.change(function(e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.find('.input__file-button-text').text('Files selected: ' + countFiles);
            else
                label.find('.input__file-button-text').text(labelVal);
        });
    });

    let portfolioCards = $("#portfolioCards");
    let addBlockButton = $("#addBlockButton");
    let addBlockForm = $("#addBlockForm");
    let submitBlockButton = $("#submitBlockButton");

    portfolioCards.on("click", ".card a", function(event) {
        event.preventDefault(); 

        $(".card").removeClass("opened");
        $(this).closest(".card").addClass("opened");

        $(".card").hide();
        $(".card.opened").show();

        $(this).siblings(".block-content").slideDown("slow");
        $(this).siblings(".close-block-button").show();

        addBlockButton.hide();
    });

    portfolioCards.on("click", ".close-block-button", function(event) {
        event.preventDefault(); 

        $(this).closest(".block-content").slideUp("slow", function () {
            $(".card").show();
            addBlockButton.show();
        });
        $(this).hide();
        $(".close-block-button").css("display", "block")

        $(this).closest(".card").removeClass("opened");

        
    });

    portfolioCards.on("click", "#addBlockButton", function() {
        portfolioCards.fadeOut("slow", function() {
            addBlockForm.fadeIn("slow");
        });
    });

    addBlockForm.on("click", ".close-form-button", function() {
        addBlockForm.fadeOut("slow", function() {
            portfolioCards.fadeIn("slow");
        });
    });

    submitBlockButton.click(function() {
        let blockTitle = $("#blockTitle").val();
        let blockText = $("#blockText").val();
        let blockImage = $("#blockImage")[0].files[0];

        if (blockImage) {
            let block = $("<div>").addClass("card");
            let image = $("<img>").attr("src", URL.createObjectURL(blockImage));
            let category = $("<p>").text($("#blockCategory").val());
            let title = $("<a>").text(blockTitle);

            let backBtn = $("<button>").addClass("close-block-button");
            let backImg = $("<img>").attr("src", "img/back.svg").attr("alt", "");
            backBtn.append(backImg);

            let hiddenText = $("<p>").addClass("hidden-text").text(blockText);

            let blockContent = $("<div>").addClass("block-content").css("display", "none");
            blockContent.append(backBtn, hiddenText);

            block.append(image, category, title, blockContent);
            portfolioCards.prepend(block);

            $(".input__file-button-text").text(initialFileButtonText);

            $("#blockTitle").val("");
            $("#blockText").val("");
            $("#blockImage").val("");
            $("#blockCategory").val("All");

            addBlockForm.fadeOut("slow", function() {
                portfolioCards.fadeIn("slow");
            });
        } else {
            alert("Choose an image file.");
        }
    });
});
