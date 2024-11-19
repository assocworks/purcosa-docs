$(document).ready(function() {

    console.log('worked');

    const toggleSpan = "<span class='md-nav__icon md-icon'></span>";
    const toggleBox = "<input class='md-nav__toggle md-toggle' type='checkbox'>";

    $(document).on('click', '.md-nav__item--nested', function(e) {
        if ($(e.target).closest(".md-nav__item--nested").is(this) && !$(e.target).is('input')) {
          console.log("clicked");
          e.stopPropagation();
          $(this).children("input").click();
          if ($(this).hasClass('md-nav__link--active') && $(this).parent().children('nav').hasClass('md-nav--secondary')) {
            e.preventDefault();
          }
        }
    });

    function recursiveParentMod(i, item) {
        if ($(item).children('nav').length) {
            $(item).addClass("md-nav__item--nested");
            $(item).children('nav').children('ul').children('li').each(recursiveParentMod);
            $(item).children("a").append($(toggleSpan));
            if ($(item).children('input').length) {
                const toggleBoxO = $(toggleBox);
                $(item).prepend(toggleBoxO);
            }
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