$(document).ready(function() {

    console.log('worked');

    const toggleSpan = "<span class='md-nav__icon md-icon'></span>";
    const toggleBox = "<input class='md-nav__toggle-X md-toggle-X' type='checkbox'>";

    $(document).on('click', '.md-nav__item--nested', function(e) {
        if (e.target === this) {
            console.log("clicked");
            e.stopPropagation();
            $(this).children("input").click();
        }
    });

    function recursiveParentMod(i, item) {
        if ($(item).children('nav').length) {
            $(item).addClass("md-nav__item--nested");
            $(item).children('nav').children('ul').children('li').each(recursiveParentMod);
            const toggleBoxO = $(toggleBox);
            $(item).children("a").append($(toggleSpan));
            $(item).prepend(toggleBoxO);
            // $(item).off('click').on('click', function() {
            //     console.log('clicked');
            //     toggleBoxO.click();
            // });
        }
    }

    $(".md-nav--primary > ul > .md-nav__item--nested").each(function(i, p) {
        // $(p).children('label').append($(toggleSpan));
        $(p).children('nav').children('ul').children('li').each(function(j, c) {
            recursiveParentMod(j, c);
        })
    });

});