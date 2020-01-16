var shrinkHeader = 220;
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}
$(window).scroll(function() {
  var e = getCurrentScroll();
  shrinkHeader <= e
    ? $("header").addClass("header--shrink")
    : $("header").removeClass("header--shrink");
}),
  $(document).ready(function() {
    var parentActiveIndex = $(".header-product__parent--active").index();
    var $parent = $(".header-product__parent");
    var $child = $(".header-product__child");
    var $image = $(".header-product__image");

    $(".header-product__parent ul li").on("mouseenter", function(event) {
      event.preventDefault();
      var $this = $(this);
      var $index = $this.index();

      $(".header-product__parent--active").removeClass(
        "header-product__parent--active"
      );
      $this.find("a").addClass("header-product__parent--active");

      $child.find("ul").removeClass("header-product__child--active");
      $child
        .find("ul")
        .eq($index)
        .addClass("header-product__child--active");

      $image.find("figure").removeClass("header-product__image--active");
      $image
        .find("figure")
        .eq($index)
        .addClass("header-product__image--active");
    });

    $('.header__shadow, .header__nav li:not(".header__nav--dropdown")').on(
      "mouseenter",
      function(event) {
        $(".header__shadow").removeClass("header__shadow--active");
        $(".header__nav--dropdown").removeClass("header__nav--hover");
        $(".header__product").removeClass("header__product--opened");
        $(".header__product--opened").removeClass("header__product--opened");
        $parent
          .find("ul")
          .eq(parentActiveIndex)
          .addClass("header-product__parent--active");
        $child
          .find("ul")
          .eq(parentActiveIndex)
          .addClass("header-product__child--active");
        $image
          .find("figure")
          .eq(parentActiveIndex)
          .addClass("header-product__image--active");
      }
    );

    $(".header__nav--dropdown").on("mouseenter", function(e) {
      var $this = $(this);
      $this.addClass("header__nav--hover");
      $(".header__product").addClass("header__product--opened");
      $(".header__shadow").addClass("header__shadow--active");
    });

    $(".card--product li").on("mouseenter", function(e) {
      e.preventDefault();
      var t = $(this);
      t.parents(".card--product")
        .find("figure")
        .find("img")
        .eq(t.index() + 1)
        .css({
          opacity: "1"
        })
        .siblings()
        .css({
          opacity: "0"
        });
    });

    $(".card--product").on("mouseleave", function(e) {
      e.preventDefault(),
        $(this)
          .find("figure")
          .find("img")
          .eq(0)
          .css({
            opacity: "1"
          })
          .siblings()
          .css({
            opacity: "0"
          });
    });

    $(".header__mobile-nav").on("click", function(e) {
      e.preventDefault(),
        $(this).toggleClass("header__mobile-nav--open"),
        $("nav").toggleClass("header__navigation--opened"),
        $("header").toggleClass("header--open"),
        $("html").toggleClass("disable-scroll");
    });

    $(".header__nav--dropdown").on("click", function(e) {
      e.preventDefault(),
        $(this)
          .find("ul")
          .toggleClass("header-nav__dropdown--open");
    });

    $(".header__language select").on("change", function(e) {
      e.preventDefault();
      var t = $(this).val();
      window.location.href = t;
    });

    new Swiper(".carousel .swiper-container", {
      pagination: {
        el: ".carousel .swiper-pagination"
      },
      navigation: {
        nextEl: ".carousel .swiper-button-next",
        prevEl: ".carousel .swiper-button-prev"
      },
      direction: "vertical"
    }),
      new Swiper(".recipe-slider__slider .swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 40,
        loop: true,
        navigation: {
          nextEl: ".recipe-slider__slider .swiper-button-next",
          prevEl: ".recipe-slider__slider .swiper-button-prev"
        },
        scrollbar: {
          el: ".recipe-slider__slider .swiper-scrollbar",
          hide: false,
          draggable: true
        }
      });

    new Swiper(".product-recipe__slider .swiper-container", {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
      navigation: {
        nextEl: ".product-recipe__slider .swiper-button-next",
        prevEl: ".product-recipe__slider .swiper-button-prev"
      },
      scrollbar: {
        el: ".product-recipe__slider .swiper-scrollbar",
        hide: false,
        draggable: true
      }
    });

    new Swiper(".quality-slider__slider .swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 55,
      loop: true,
      navigation: {
        nextEl: ".quality-slider__slider .swiper-button-next",
        prevEl: ".quality-slider__slider .swiper-button-prev"
      }
    });

    new Swiper(".recipe-preparation__slider .swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 40,
      loop: true,
      navigation: {
        nextEl: ".recipe-preparation__slider .swiper-button-next",
        prevEl: ".recipe-preparation__slider .swiper-button-prev"
      },
      scrollbar: {
        el: ".recipe-preparation__slider .swiper-scrollbar",
        hide: false,
        draggable: true
      }
    });

    new Swiper(".gluten-free-products__slider .swiper-container", {
      slidesPerView: 5,
      spaceBetween: 30
    });

    $(".select2").select2();

    $(".tabs__menu a").click(function(event) {
      event.preventDefault();
      $(this)
        .parent()
        .addClass("tabs__menu--active");
      $(this)
        .parent()
        .siblings()
        .removeClass("tabs__menu--active");
      var tab = $(this).attr("href");
      $(".tabs__container > div")
        .not(tab)
        .css("display", "none");
      $(tab).fadeIn();
    });

    $(".tabs-left__menu a").click(function(event) {
      event.preventDefault();
      $(this)
        .parent()
        .addClass("tabs-left__menu--active");
      $(this)
        .parent()
        .siblings()
        .removeClass("tabs-left__menu--active");
      var tab = $(this).attr("href");
      $(".tabs-left__container > div")
        .not(tab)
        .css("display", "none");
      $(tab).fadeIn();
    });

    $(".accordion-card__header").click(function() {
      $(this)
        .parent()
        .addClass("accordion__card--active");
      $(this)
        .parent()
        .siblings()
        .removeClass("accordion__card--active");
    });
  });

window.onload = function() {
  lax.setup(); // init

  var updateLax = function() {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};
