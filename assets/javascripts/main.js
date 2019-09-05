var shrinkHeader = 220;
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop
}
$(window).scroll(function() {
    var e = getCurrentScroll();
    shrinkHeader <= e ? $("header").addClass("header--shrink") : $("header").removeClass("header--shrink")
}),
$(document).ready(function() {
    var e, t;
    e = $(".header__dropdown--active"),
    t = $(".header-dropdown__item"),
    e.hasClass("header__dropdown--active") ? (t.eq(e.index()).addClass("header-dropdown__item--active"),
    e.addClass("header__dropdown--real-active")) : t.eq(0).addClass("header-dropdown__item--active"),
    $(".header__dropdown li").on("mouseenter", function(e) {
        e.preventDefault();
        var t = $(e.target).parent();
        $(".header-dropdown__item").eq(t.index()).addClass("header-dropdown__item--active").siblings().removeClass("header-dropdown__item--active"),
        t.addClass("header__dropdown--active").siblings().removeClass("header__dropdown--active")
    }),
    $(".header__dropdown").on("mouseleave", function(e) {
        e.preventDefault();
        var t = $(".header__dropdown--real-active")
          , i = $(".header-dropdown__item");
        t.addClass("header__dropdown--active").siblings().removeClass("header__dropdown--active"),
        i.eq(t.index()).addClass("header-dropdown__item--active").siblings().removeClass("header-dropdown__item--active")
    }),
    $(".card--product li").on("mouseenter", function(e) {
        e.preventDefault();
        var t = $(this);
        t.parents(".card--product").find("figure").find("img").eq(t.index() + 1).css({
            opacity: "1"
        }).siblings().css({
            opacity: "0"
        })
    }),
    $(".card--product").on("mouseleave", function(e) {
        e.preventDefault(),
        $(this).find("figure").find("img").eq(0).css({
            opacity: "1"
        }).siblings().css({
            opacity: "0"
        })
    }),
    $(".header__mobile-nav").on("click", function(e) {
        e.preventDefault(),
        $(this).toggleClass("header__mobile-nav--open"),
        $("nav").toggleClass("header__navigation--opened"),
        $("header").toggleClass("header--open"),
        $("html").toggleClass("disable-scroll")
    }),
    $(".header__nav--dropdown").on("click", function(e) {
        e.preventDefault(),
        $(this).find("ul").toggleClass("header-nav__dropdown--open")
    }),
    $(".header__language select").on("change", function(e) {
        e.preventDefault();
        var t = $(this).val();
        window.location.href = t
    });

    new Swiper(".carousel .swiper-container",{
        pagination: {
            el: ".carousel .swiper-pagination"
        },
        navigation: {
            nextEl: ".carousel .swiper-button-next",
            prevEl: ".carousel .swiper-button-prev"
        },
        direction: "vertical"
    }),
    new Swiper(".recipe-slider__slider .swiper-container",{
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: ".recipe-slider__slider .swiper-button-next",
            prevEl: ".recipe-slider__slider .swiper-button-prev"
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
          },
    })

    new Swiper(".quality-slider__slider .swiper-container",{
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: ".quality-slider__slider .swiper-button-next",
            prevEl: ".quality-slider__slider .swiper-button-prev"
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
          },
    })

    $(".select2").select2();

    $(".tabs__menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("tabs__menu--active");
        $(this).parent().siblings().removeClass("tabs__menu--active");
        var tab = $(this).attr("href");
        $(".tabs__container > div").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
