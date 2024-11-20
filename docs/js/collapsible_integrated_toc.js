$(document).ready(function() {

    console.log('worked');

    const toggleSpan = "<span class='md-nav__icon md-icon'></span>";
    const toggleBox = "<input class='md-nav__toggle md-toggle' type='checkbox'>";

    $(document).on('click', '.md-nav__item--nested', function(e) {
        if (
          $(e.target).closest(".md-nav__item").is(this) &&
          !$(e.target).is("input")
        ) {
          console.log("clicked");
          e.stopPropagation();
          $(this).children("input").click();
          if (
            $(this).hasClass("md-nav__item--active") &&
            $(this).is(".md-nav--primary > ul > li > nav > ul > li")
          ) {
            e.stopImmediatePropagation();
            e.preventDefault();
            if ($(this).children("nav").hasClass("md-nav--secondary")) {
              $(this).children("nav").removeClass("md-nav--secondary");
            } else {
              $(this).children("nav").addClass("md-nav--secondary");
            }
          }
        }
    });

    function recursiveParentMod(i, item) {
        if ($(item).children('nav').length) {
            $(item).addClass("md-nav__item--nested");
            $(item).children('nav').children('ul').children('li').each(recursiveParentMod);
            $(item).children("a").append($(toggleSpan));
            if (!$(item).children('input').length) {
                const toggleBoxO = $(toggleBox);
                $(item).prepend(toggleBoxO);
            } else if ($(item).children('input').attr("id") == "__toc") {
                $(item).children('input').attr('checked', true);
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