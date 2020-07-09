const portfolio = {};

portfolio.hoverMenu = () => {
    $(document).on("scroll", () => {
        $("#toggle").prop("checked", false);
    })
}

// portfolio.smoothScroll = () => {
//     $("a").on("click", (e) => {
//         if(this.hash !== ""){
//             e.preventDefault();

//             const hash = this.hash;

//             $("html, body").stop().animate({
//                 scrollTop: $(hash).ofset().top - 75
//             }, 800);
//         }
//     })
// }

portfolio.init = () => {
    portfolio.hoverMenu();
    portfolio.smoothScroll();
}

$(() => {
    portfolio.init();
})