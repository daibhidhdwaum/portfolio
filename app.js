const portfolio = {};

portfolio.hoverMenu = () => {
  $(document).on("scroll", () => {
    $("#toggle").prop("checked", false);
  });
};

// SMOOTH SCROLL FUNCTION
portfolio.smoothScroll = () => {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        // GET HEIGHT OF FIXED HEADER TO SET PAGE OFFSET
        const headerHeight = $("nav").height();

        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - headerHeight,
            },
            1000
          );
        }
      }
    });
};

portfolio.init = () => {
  portfolio.hoverMenu();
  portfolio.smoothScroll();
};

$(() => {
  portfolio.init();
});
