$(document).ready(function () {
  if ($(".menu").length > 0) {
    $(".menu__item").map(function () {
      if ($(this).find(".menu__sub").length <= 0) {
        $(this).addClass("not-arrow");
      }
    });
  }

  if ($(".burger").length > 0) {
    let menu = $(".header .menu");
    let burger = $(".burger");
    let burgerСlose = $(".menu .btn-close");
    let body = $("body");

    burger.on("click", function () {
      if (menu.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened").slideDown();
        body.addClass("hidden");

        $(document).mouseup(function (e) {
          if (
            !menu.is(e.target) &&
            menu.has(e.target).length === 0 &&
            !burger.is(e.target)
          ) {
            closeMenu();
          }
        });
      }
    });

    burgerСlose.on("click", function () {
      closeMenu();
    });

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened").slideUp();
      body.removeClass("hidden");
      $(document).off("mouseup");
    }
  }

  if ($(".grettings-slider").length > 0) {
    const swiper = new Swiper(".grettings-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      watchSlidesProgress: true,
      loop: true,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }

  if ($(".projects-tabs__slider").length > 0) {
    const swiper = new Swiper(".projects-tabs__slider", {
      slidesPerView: 3,
      spaceBetween: 32,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        prevEl: ".projects-tabs__tabs .swiperBtnPrev",
        nextEl: ".projects-tabs__tabs .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        390: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });
  }

  if ($(".smi-slider").length > 0) {
    const galleryThumbs = new Swiper(".smi-slider__thrumbs", {
      spaceBetween: 16,
      slidesPerView: 3,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      loop: true,
    });

    const swiper = new Swiper(".smi-slider", {
      slidesPerView: 1,
      initialSlide: 1,
      spaceBetween: 32,
      watchSlidesProgress: true,
      loop: true,
      thumbs: {
        swiper: galleryThumbs,
      },
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      breakpoints: {
        0: {
          spaceBetween: 16,
        },
        1280: {
          spaceBetween: 32,
        },
      },
    });
  }

  if ($(".reviews-main__slider").length > 0) {
    const swiper = new Swiper(".reviews-main__slider", {
      slidesPerView: 3,
      spaceBetween: 0,
      initialSlide: 1,
      centeredSlides: true,
      watchSlidesProgress: true,
      // loop: true,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      on: {
        init: function () {
          let btn = $(".reviews-main__slider .swiper-slide-active").find(
            ".reviews-main__btnMore"
          );

          $(".reviews-main__slider .swiper-slide-active")
            .find(".reviews-main__text")
            .addClass("opened");

          btn.addClass("active");

          btn.text(btn.attr("data-text"));
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });

    swiper.on("slideChange", function () {
      $(".reviews-main__text").removeClass("opened");
      $(".reviews-main__btnMore").removeClass("active");
      $(".reviews-main__btnMore").text(
        $(".reviews-main__btnMore").attr("data-text-default")
      );
    });

    swiper.on("slideChangeTransitionStart", function () {
      let btn = $(".reviews-main__slider .swiper-slide-active").find(
        ".reviews-main__btnMore"
      );

      $(".reviews-main__slider .swiper-slide-active")
        .find(".reviews-main__text")
        .addClass("opened");

      btn.addClass("active");

      btn.text(btn.attr("data-text"));
    });

    $(".reviews-main__btnMore").on("click", function (e) {
      e.preventDefault();

      let self = $(this);
      let parents = self.parents(".reviews-main__content");
      let index = parents.parents(".swiper-slide").index();
      let text = parents.find(".reviews-main__text");

      if (!self.hasClass("active")) {
        $(".reviews-main__text").removeClass("opened");
        $(".reviews-main__btnMore").removeClass("active");

        let btnText = self.attr("data-text");
        self.text(btnText);

        self.addClass("active");
        text.addClass("opened");
        swiper.slideTo(index);
      } else {
        let btnText = self.attr("data-text-default");
        self.text(btnText);

        $(".reviews-main__text").removeClass("opened");
        $(".reviews-main__btnMore").removeClass("active");
      }
    });
  }

  if ($(".thanksletters__slider").length > 0) {
    const swiper = new Swiper(".thanksletters__slider", {
      slidesPerView: 1,
      spaceBetween: 32,
      watchSlidesProgress: true,
      loop: true,
      initialSlide: $(".thanksletters__slider .swiper-slide").length,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
    });
  }

  if ($(".portfolio-slider").length > 0) {
    const swiper = new Swiper(".portfolio-slider", {
      slidesPerView: 1,
      spaceBetween: 32,
      watchSlidesProgress: true,
      loop: false,
      initialSlide: 2,
      centeredSlides: true,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        1280: {
          spaceBetween: 32,
        },
      },
    });
  }

  if ($(".primer-projects__slider").length > 0) {
    const swiper = new Swiper(".primer-projects__slider", {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: false,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        prevEl: ".swiperBtnPrev",
        nextEl: ".swiperBtnNext",
      },
      on: {
        init() {
          $(".primer-projects__slider .swiper-slide").on("click", function () {
            swiper.slideTo($(this).index());
          });
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        1024: {
          spaceBetween: 16,
        },
        1280: {
          spaceBetween: 32,
        },
      },
    });

    $(".beforeAfter").twentytwenty({
      no_overlay: true, // Не показывать наложение с «до» и «после»
      move_slider_on_hover: false, // Перемещать ползунок при наведении мыши?
      move_with_handle_only: true, // Разрешить пользователю провести пальцем в любом месте изображения, чтобы управлять движением ползунка.
      click_to_move: true, // Разрешить пользователю щелкнуть (или коснуться) в любом месте изображения, чтобы переместить ползунок в
    });
  }

  if ($(".steps-slider").length > 0) {
    const swiper = new Swiper(".steps-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      // autoHeight: true,
      watchSlidesProgress: true,
      loop: false,
      // navigation: {
      //   prevEl: ".swiperBtnPrev",
      //   nextEl: ".swiperBtnNext",
      // },
    });

    swiper.on("slideChange", function () {
      $(".steps-projects__left .step").removeClass("active");
      $(".steps-projects__left .step")
        .eq(swiper.activeIndex)
        .addClass("active");
    });

    $(".steps-slider .btn").on("click", function (event) {
      event.preventDefault();
      swiper.slideNext();
    });

    $(".steps-projects__left .step").on("click", function () {
      $(".steps-projects__left .step").removeClass("active");
      $(this).addClass("active");
      swiper.slideTo($(this).index());
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".sliderVideo").length > 0) {
    const swiper = new Swiper(".sliderVideo", {
      slidesPerView: 2,
      spaceBetween: 32,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        nextEl: ".swiperBtnNext",
        prevEl: ".swiperBtnPrev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.07,
          spaceBetween: 16,
        },
        768: {
          spaceBetween: 16,
        },
        1280: {
          spaceBetween: 32,
        },
      },
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".vacancy-list").length > 0) {
    $(".vacancy-head").on("click", function () {
      $(this).toggleClass("opened");

      $(this)
        .parents(".vacancy-item")
        .find(".vacancy-body")
        .stop()
        .slideToggle();
    });
  }

  if ($(".map").length > 0) {
    // initMap();
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      onShow: () => {
        $("body").addClass("modal-open");
      },
      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => {
        e.preventDefault();
        $("body").addClass("modal-open");
      });
    });

    $("[data-micromodal-close]").map(function () {
      $(this).click((e) => {
        // e.preventDefault();
        if ($(this).attr("data-modal")) {
          setTimeout(() => {
            $("body").addClass("modal-open");
          }, 0.1);
        }
      });
    });
  }

  if ($(".services-tabs__tabs").length > 0) {
    $(".services-tabs__tabs .listLinks li a").on("click", function (e) {
      e.preventDefault();
    });

    $(".services-tabs__tabs").tabslet({
      mouseevent: "hover",
      attribute: "href",
      animation: false,
    });
  }

  if ($(".projects-tabs__tabs").length > 0) {
    $(".projects-tabs__tabs .listLinks li a").on("click", function (e) {
      e.preventDefault();

      let href = $(this).attr("href");

      $(".tabsBody").removeClass("active");

      setTimeout(function () {
        $(".projects-tabs").find(`.tabsBody${href}`).addClass("active");
      }, 100);
    });
  }

  if ($("[data-aos]").length > 0) {
    AOS.init({
      delay: 0,
    });
  }
});

// yandex map
async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  const map = new YMap(
    document.getElementById("map"),
    {
      location: {
        center: [37.623082, 55.75254],
        zoom: 10,
        behaviors: ["drag", "pinchZoom", "mouseTilt"],
      },
    },
    [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]
  );

  const markerElement = document.createElement("span");
  const child = document.createElement("span");
  markerElement.className = "icon-marker";

  child.className = "icon-marker__text";
  // child.textContent = getArrItem[i].NAME;

  markerElement.appendChild(child);

  map.addChild(
    new YMapMarker(
      {
        coordinates: [Number(lng), Number(lat)],
      },
      markerElement
    )
  );

  setTimeout(() => {
    $(".map").addClass("load");
  }, 2000);
}
// /yandex map
