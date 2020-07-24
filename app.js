const portfolio = {};

portfolio.hoverMenu = () => {
  $(document).on("scroll", () => {
    $("#toggle").prop("checked", false);
  });
};

portfolio.init = () => {
  portfolio.hoverMenu();
};

$(() => {
  portfolio.init();
});
