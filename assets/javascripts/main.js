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
    var windowWidth = $(window).width()

    if(windowWidth > 1024) {
      $(".header-product__parent ul li").on("mouseenter", function(event) {
        event.preventDefault();
        var $this = $(this);
        var $index = $this.index();
  
        $(".header-product__parent--active").removeClass("header-product__parent--active");
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
  
      $('.header__shadow, .header__nav li:not(".header__nav--dropdown")').on("mouseenter", function(event) {
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
      });
  
      $(".header__nav--dropdown").on("mouseenter", function(e) {
        var $this = $(this);
        $this.addClass("header__nav--hover");
        $(".header__product").addClass("header__product--opened");
        $(".header__shadow").addClass("header__shadow--active");
      });
    } else {
      $(".header__nav--dropdown").on("click", function(event) {
        $(".header__product").addClass("header__product--opened");
        $(".header-product__parent--active").removeClass("header-product__parent--active")
      });

      $(".header-product__parent ul li").on("click", function(event) {
        event.preventDefault();
        var $this = $(this);
        var $index = $this.index();
  
        $(".header-product__parent--active").removeClass("header-product__parent--active");
        $this.find("a").addClass("header-product__parent--active");
  
        $child.find("ul").removeClass("header-product__child--active");
        $child
          .find("ul")
          .eq($index)
          .addClass("header-product__child--active");
        $child.addClass("header-product__child--open")
      });

      $(".header-product__buttons li").on("click", function(event) {
        var $this = $(this);
        
        if($this.index() == 0) {
          $(".header__product").removeClass("header__product--opened");
          $child.removeClass("header-product__child--open")
          $(".header-product__parent--active").removeClass("header-product__parent--active")
        } else {
          if($child.hasClass("header-product__child--open")) {
            $child.removeClass("header-product__child--open")
          } else {
            $(".header__product").removeClass("header__product--opened");
            $child.removeClass("header-product__child--open")
            $(".header-product__parent--active").removeClass("header-product__parent--active")
          }
        }
      });
    }


    $(".header__mobile-nav").on("click", function(e) {
      e.preventDefault(),
        $(this).toggleClass("header__mobile-nav--open"),
        $("nav").toggleClass("header__navigation--opened"),
        $("header").toggleClass("header--open"),
        $("html").toggleClass("disable-scroll");
        $(".header__product").removeClass("header__product--opened");
        $child.removeClass("header-product__child--open")
        $(".header-product__parent--active").removeClass("header-product__parent--active")
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

    new Swiper(".carousel .swiper-container", {
      pagination: {
        el: ".carousel .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".carousel .swiper-button-next",
        prevEl: ".carousel .swiper-button-prev"
      },
      direction: "vertical",
      breakpoints: {
        1024: {
          direction: "horizontal",
        }
      }
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
        },
        breakpoints: {
          1024: {
            scrollbar: false,
            centeredSlides: true,
            loop: false
          }
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
      },
      breakpoints: {
        640: {
          slidesPerView: "auto",
          scrollbar: false
        },
        1024: {
          slidesPerView: 2,
        }
      }
    });

    new Swiper(".quality-slider__slider .swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 55,
      loop: true,
      navigation: {
        nextEl: ".quality-slider__slider .swiper-button-next",
        prevEl: ".quality-slider__slider .swiper-button-prev"
      },
      breakpoints: {
        640: {
          loop: false,
          centeredSlides: true,
          spaceBetween: 20,
        }
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
      spaceBetween: 30,
      navigation: {
        nextEl: ".gluten-free-products__slider .swiper-button-next",
        prevEl: ".gluten-free-products__slider .swiper-button-prev"
      },
      breakpoints: {
        1024: {
          slidesPerView: "auto",          
        }
      }
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

    $(".about-timeline__timeline li").click(function() {
      var $this = $(this);
      var index = $(this).index();
      $this.addClass("active").siblings().removeClass("active");

      $(".about-timeline__content li").eq(index).addClass("active").siblings().removeClass("active");
    })

    $(".about-timeline-timeline__arrow").click(function() {
      var $this = $(this);
      var $timeline = $(".about-timeline__timeline li");
      var $timelineActive = $(".about-timeline__timeline li.active").index()
      var $content = $(".about-timeline__content li");

      if($this.hasClass("about-timeline-timeline__arrow--right")) {
        if($timelineActive < $timeline.length-1) {
          $timeline.removeClass("active").eq($timelineActive + 1).addClass("active");
          $content.removeClass("active").eq($timelineActive + 1).addClass("active");
        }
      } else {
        if($timelineActive > 0) {
          $timeline.removeClass("active").eq($timelineActive - 1).addClass("active");
          $content.removeClass("active").eq($timelineActive - 1).addClass("active");
        }
      }     
    })

    $(".nav-left > li").click(function(event) {
      var $this = $(this);
      if($this.find("ul").length) {
        event.preventDefault()
        $this.addClass("nav-left--open").siblings().removeClass("nav-left--open")
      }
    })

    $(".product-image__list > li").click(function(event) {
      event.preventDefault();
      var $this = $(this);
      
      $(".product-image__img figure").eq($this.index()).addClass("product-image__img--active").siblings().removeClass("product-image__img--active")
      $this.addClass("product-image__list--active").siblings().removeClass("product-image__list--active")
    })
  });

window.onload = function() {
  lax.setup()

  var updateLax = function() {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};
