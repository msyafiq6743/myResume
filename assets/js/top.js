const goTopBtn = document.querySelector("#goTopBtn");

goTopBtn.addEventListener("click", function () {
    // Fist ways
    // window.scrollTo(0, 0);


    // Second Ways
    // window.scrollTo({
    //     top:0,
    //     left:0,
    //     behavior:"smooth"
    // });


        $("html, body").animate({ scrollTop:0 }, "slow");
});