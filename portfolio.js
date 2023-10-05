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

