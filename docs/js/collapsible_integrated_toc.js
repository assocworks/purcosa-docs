$(document).ready(function() {

    console.log('worked');

    const toggleSpan = "<span class='md-nav__icon md-icon'></span>";
    const toggleBox = "<input class='md-nav__toggle md-toggle' type='checkbox'>";

    function recursiveParentMod(i, item) {
        if ($(item).children('nav').length) {
            $(item).addClass("md-nav__item--nested");
            $(item).children('nav').children('ul').children('li').each(recursiveParentMod);
            const toggleBoxO = $(toggleBox);
            $(item).children("a").append($(toggleSpan));
            $(item).prepend(toggleBoxO);
            $(item).click(function() {
                console.log('clicked');
                toggleBoxO.click();
            });
        }
    }

    $(".md-nav--primary > ul > .md-nav__item--nested").each(function(i, p) {
        // $(p).children('label').append($(toggleSpan));
        $(p).children('nav').children('ul').children('li').each(function(j, c) {
            recursiveParentMod(j, c);
        })
    });

});