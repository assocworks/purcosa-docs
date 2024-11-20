$(document).ready(function() {
  console.log("worked");

  const toggleSpan = "<span class='md-nav__icon md-icon'></span>";
  const toggleBox = "<input class='md-nav__toggle md-toggle' type='checkbox'>";

  $(document).on("click", ".md-nav__item--nested", function (e) {
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
    if ($(item).children("nav").length) {
      $(item).addClass("md-nav__item--nested");
      $(item)
        .children("nav")
        .children("ul")
        .children("li")
        .each(recursiveParentMod);
      $(item).children("a").append($(toggleSpan));
      if (!$(item).children("input").length) {
        const toggleBoxO = $(toggleBox);
        $(item).prepend(toggleBoxO);
        if ($(item).find(".md-nav__link--active").length) {
          toggleBoxO.prop("checked", true);
        }
      } else if ($(item).children("input").attr("id") == "__toc") {
        $(item).children("input").prop("checked", true);
      }
      // $(item).off('click').on('click', function() {
      //     console.log('clicked');
      //     toggleBoxO.click();
      // });
    }
  }

  $(".md-nav--primary > ul > .md-nav__item--nested").each(function (i, p) {
    // $(p).children('label').append($(toggleSpan));
    $(p)
      .children("nav")
      .children("ul")
      .children("li")
      .each(function (j, c) {
        recursiveParentMod(j, c);
      });
  });

  function openActiveItem(li) {
    if (li.length) {
      const thisToggleBox = li.children("input");
      if (thisToggleBox.length) {
        if (!thisToggleBox.is(":checked")) {
          thisToggleBox.prop("checked", true);
        }
      }
      openActiveItem(li.closest("nav").parent("li"));
    }
  }

  var targets = document.querySelectorAll(".md-nav--primary > ul > .md-nav__item--nested > nav > ul li > a");

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log(mutation);
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        console.log(mutation.target.className);

        if (!(mutation.oldValue.includes("md-nav__link--active"))
            && mutation.target.className.includes("md-nav__link--active")) {
                console.log($(mutation.target).parent("li"));
                openActiveItem($(mutation.target).parent('li'));
        } else if (!mutation.target.className.includes("md-nav__link--active")) {
          
        }
      }
    });
  });

  var config = {
    attributes: true,
    attributeFilter: ["class"],
    attributeOldValue: true,
  };

  // Start observing the target element
  if (targets.length > 0) {
    targets.forEach((target) => {observer.observe(target, config);});
  } else {
    console.log("No matching targets found");
  }

  // observer.disconnect();
});