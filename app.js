const portfolio = {};

portfolio.hoverMenu = () => {
  $(document).on("scroll", () => {
    $("#toggle").prop("checked", false);
  });
};

// portfolio.smoothScroll = () => {
//   window.scroll({
//     top: 2500,
//     left: 0,
//     behavior: "smooth",
//   });
//   document.querySelector("skillsSection").scrollIntoView({
//     behavior: "smooth",
//   });
// };

portfolio.init = () => {
  portfolio.hoverMenu();
  //   portfolio.smoothScroll();
};

$(() => {
  portfolio.init();
});
