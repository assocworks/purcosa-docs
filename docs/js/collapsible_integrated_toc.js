$(document).ready(function() {

    console.log('worked');

    const toggleSpan = "<span class='md-nav__icon md-icon'></span>";

    function recursiveParentMod(i, item) {
        if ($(item).children('nav').length) {
            $(item).addClass(".md-nav__item--nested");
            $(item).children('nav').children('ul').children('li').each(recursiveParentMod);
            $(item).children("a").append($(toggleSpan));
        }
    }

    $(".md-nav--primary > ul > .md-nav__item--nested").each(function(i, p) {
        // $(p).children('label').append($(toggleSpan));
        $(p).children('nav').children('ul').children('li').each(function(j, c) {
            recursiveParentMod(j, c);
        })
    });

});