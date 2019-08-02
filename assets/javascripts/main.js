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
    new Swiper(".product-group__slider .swiper-container",{
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".product-group__slider .swiper-button-next",
            prevEl: ".product-group__slider .swiper-button-prev"
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: ".product-group__slider .swiper-pagination",
                    clickable: !0
                }
            }
        }
    }),
    new Swiper(".quality__slider .swiper-container",{
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: ".quality__slider .swiper-button-next",
            prevEl: ".quality__slider .swiper-button-prev"
        },
        breakpoints: {
            1440: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                pagination: {
                    el: ".quality__slider .swiper-pagination",
                    clickable: !0
                }
            },
            768: {
                slidesPerView: 3,
                centeredSlides: true,
                pagination: {
                    el: ".quality__slider .swiper-pagination",
                    clickable: !0
                }
            },
            640: {
                slidesPerView: "auto",
                centeredSlides: true,
                pagination: {
                    el: ".quality__slider .swiper-pagination",
                    clickable: !0
                }
            }
        }
    })
});
