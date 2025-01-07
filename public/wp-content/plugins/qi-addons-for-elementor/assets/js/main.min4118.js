!(function (d) {
  "use strict";
  (window.qodefAddonsCore = {}),
    (qodefAddonsCore.shortcodes = {}),
    (qodefAddonsCore.body = d("body")),
    (qodefAddonsCore.html = d("html")),
    (qodefAddonsCore.windowWidth = d(window).width()),
    (qodefAddonsCore.windowHeight = d(window).height()),
    (qodefAddonsCore.scroll = 0),
    d(document).ready(function () {
      (qodefAddonsCore.scroll = d(window).scrollTop()), x.init(), e.init();
    }),
    d(window).resize(function () {
      (qodefAddonsCore.windowWidth = d(window).width()),
        (qodefAddonsCore.windowHeight = d(window).height());
    }),
    d(window).scroll(function () {
      qodefAddonsCore.scroll = d(window).scrollTop();
    }),
    d(window).on("load", function () {
      o.init();
    });
  var x = {
      init: function (e) {
        (this.holder = d(".qodef-qi-swiper-container")),
          d.extend(this.holder, e),
          this.holder.length &&
            this.holder.each(function () {
              x.initSlider(d(this));
            });
      },
      initSlider: function (e) {
        var o,
          t = x.getOptions(e),
          n = x.getEvents(e, t);
        elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading
          ? (o = setInterval(function () {
              "undefined" !== elementorFrontend.utils.swiper &&
                (new elementorFrontend.utils.swiper(
                  e[0],
                  Object.assign(t, n)
                ).then((e) => {}),
                clearInterval(o));
            }, 200))
          : new Swiper(e[0], Object.assign(t, n)),
          elementorFrontend.isEditMode() &&
            elementor.channels.editor.on("change", function () {
              e[0].swiper.update();
            });
      },
      getOptions: function (e) {
        var o = void 0 !== e.data("options") ? e.data("options") : {},
          t =
            void 0 !== o.direction && "" !== o.direction
              ? o.direction
              : "horizontal",
          n =
            void 0 !== o.partialValue && "" !== o.partialValue
              ? parseFloat(o.partialValue)
              : 0,
          i =
            void 0 !== o.disablePartialValue && "" !== o.disablePartialValue
              ? parseInt(o.disablePartialValue)
              : "never",
          d =
            void 0 !== o.spaceBetween && "" !== o.spaceBetween
              ? o.spaceBetween
              : 0,
          r =
            void 0 !== o.spaceBetweenTablet && "" !== o.spaceBetweenTablet
              ? o.spaceBetweenTablet
              : 0,
          a =
            void 0 !== o.spaceBetweenMobile && "" !== o.spaceBetweenMobile
              ? o.spaceBetweenMobile
              : 0,
          s =
            void 0 !== o.slidesPerView && "" !== o.slidesPerView
              ? "auto" === o.slidesPerView
                ? "auto"
                : parseInt(o.slidesPerView) + n
              : 1 + n,
          l =
            void 0 !== o.centeredSlides &&
            "" !== o.centeredSlides &&
            o.centeredSlides,
          f =
            void 0 !== o.sliderScroll &&
            "" !== o.sliderScroll &&
            o.sliderScroll,
          c = void 0 !== o.effect && "" !== o.effect ? o.effect : "slide",
          h = void 0 === o.loop || "" === o.loop || o.loop,
          u = void 0 === o.autoplay || "" === o.autoplay || o.autoplay,
          q =
            void 0 !== o.speed && "" !== o.speed ? parseInt(o.speed, 10) : 5e3,
          _ =
            void 0 !== o.speedAnimation && "" !== o.speedAnimation
              ? parseInt(o.speedAnimation, 10)
              : 800,
          m =
            void 0 !== o.customStages &&
            "" !== o.customStages &&
            o.customStages,
          p = void 0 !== o.outsideNavigation && "yes" === o.outsideNavigation,
          g = p
            ? ".swiper-button-next-" + o.unique
            : e.find(".swiper-button-next").length
            ? e.find(".swiper-button-next")[0]
            : null,
          p = p
            ? ".swiper-button-prev-" + o.unique
            : e.find(".swiper-button-prev").length
            ? e.find(".swiper-button-prev")[0]
            : null,
          v =
            void 0 !== o.outsidePagination && "yes" === o.outsidePagination
              ? ".swiper-pagination-" + o.unique
              : e.find(".swiper-pagination").length
              ? e.find(".swiper-pagination")[0]
              : null,
          w = "horizontal" === o.direction,
          q =
            (!1 !== u && 5e3 !== q
              ? (u = { delay: q, disableOnInteraction: !1 })
              : !1 !== u && (u = { disableOnInteraction: !1 }),
            void 0 !== o.slidesPerView1440 && "" !== o.slidesPerView1440
              ? parseInt(o.slidesPerView1440, 10) + n
              : "auto" === o.slidesPerView
              ? "auto"
              : 5 + n),
          b =
            void 0 !== o.slidesPerView1366 && "" !== o.slidesPerView1366
              ? parseInt(o.slidesPerView1366, 10) + n
              : "auto" === o.slidesPerView
              ? "auto"
              : 4 + n,
          C =
            void 0 !== o.slidesPerView1024 && "" !== o.slidesPerView1024
              ? parseInt(o.slidesPerView1024, 10) + n
              : "auto" === o.slidesPerView
              ? "auto"
              : 3 + n,
          y =
            void 0 !== o.slidesPerView768 && "" !== o.slidesPerView768
              ? parseInt(o.slidesPerView768, 10) + n
              : "auto" === o.slidesPerView
              ? "auto"
              : 2 + n,
          A =
            void 0 !== o.slidesPerView680 && "" !== o.slidesPerView680
              ? parseInt(o.slidesPerView680, 10) + n
              : "auto" === o.slidesPerView
              ? "auto"
              : 1 + n,
          I =
            void 0 !== o.slidesPerView480 && "" !== o.slidesPerView480
              ? parseInt(o.slidesPerView480, 10) + n
              : "auto" === o.slidesPerView
              ? "auto"
              : 1 + n;
        if (
          (m ||
            (s < 2
              ? (y = C = b = q = s)
              : s < 3
              ? (C = b = q = s)
              : s < 4
              ? (b = q = s)
              : s < 5 && (q = s)),
          "never" !== i)
        )
          switch (i) {
            case 1024:
              C = Math.floor(C);
            case 768:
              y = Math.floor(y);
            case 680:
              A = Math.floor(A);
            case 480:
              I = Math.floor(I);
          }
        return Object.assign(
          {
            direction: t,
            slidesPerView: s,
            centeredSlides: l,
            sliderScroll: f,
            loopedSlides: "12",
            spaceBetween: d,
            effect: c,
            autoplay: u,
            loop: h,
            speed: _,
            navigation: { nextEl: g, prevEl: p },
            pagination: { el: v, clickable: !0 },
            grabCursor: w,
            breakpoints: {
              0: { slidesPerView: I, spaceBetween: a },
              481: { slidesPerView: A, spaceBetween: a },
              681: { slidesPerView: y, spaceBetween: r },
              769: { slidesPerView: C, spaceBetween: r },
              1025: { slidesPerView: b },
              1367: { slidesPerView: q },
              1441: { slidesPerView: s },
            },
          },
          x.getSliderDatas(e)
        );
      },
      getSliderDatas: function (e) {
        var o,
          t = e.data(),
          n = {};
        for (o in t)
          t.hasOwnProperty(o) &&
            "options" !== o &&
            void 0 !== t[o] &&
            "" !== t[o] &&
            (n[o] = t[o]);
        return n;
      },
      getEvents: function (n, i) {
        return {
          on: {
            beforeInit: function () {
              var e, o, t;
              "vertical" === i.direction &&
                ((o = e = 0),
                (t = n.find(".qodef-e")).length &&
                  t.each(function () {
                    (o = d(this).outerHeight()), e < o && (e = o);
                  }),
                1 === i.slidesPerView) &&
                (n.css("height", e), t.css("height", e));
            },
            init: function () {
              var o;
              n.addClass("qodef-swiper--initialized"),
                i.sliderScroll &&
                  ((o = !1),
                  n.off().on("wheel", function (e) {
                    e.preventDefault(),
                      o ||
                        ((o = !0),
                        0 < e.originalEvent.deltaY
                          ? n[0].swiper.slideNext()
                          : n[0].swiper.slidePrev(),
                        setTimeout(function () {
                          o = !1;
                        }, 1e3));
                  })),
                qodefAddonsCore.body.trigger(
                  "qodefAddons_trigger_after_swiper_init",
                  [n, i]
                );
            },
          },
        };
      },
    },
    e =
      ((qodefAddonsCore.qodefSwiper = x),
      "function" != typeof Object.assign &&
        (Object.assign = function (e) {
          if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
          e = Object(e);
          for (var o = 1; o < arguments.length; o++) {
            var t = arguments[o];
            if (null !== t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
      {
        init: function () {
          if (
            ((this.holder = d(".qodef-qi-fslightbox-popup")),
            this.holder.length)
          ) {
            "undefined" != typeof qodefGlobal &&
              ((qodefQiAddonsGlobal.vars.iconArrowLeft = (
                void 0 !== qodefGlobal.vars.iconArrowLeft
                  ? qodefGlobal
                  : qodefQiAddonsGlobal
              ).vars.iconArrowLeft),
              (qodefQiAddonsGlobal.vars.iconArrowRight = (
                void 0 !== qodefGlobal.vars.iconArrowRight
                  ? qodefGlobal
                  : qodefQiAddonsGlobal
              ).vars.iconArrowRight),
              (qodefQiAddonsGlobal.vars.iconClose = (
                void 0 !== qodefGlobal.vars.iconClose
                  ? qodefGlobal
                  : qodefQiAddonsGlobal
              ).vars.iconClose));
          }
        },
      }),
    o =
      ((qodefAddonsCore.qodefLightboxPopup = e),
      {
        init: function () {
          (this.holder = d(".qodef-qi--has-appear:not(.qodef-qi--appeared)")),
            this.holder.length &&
              this.holder.each(function () {
                var e,
                  o = d(this),
                  t =
                    ((e = 10),
                    (t = 400),
                    Math.floor(Math.random() * (t - e) + e)),
                  n = d(this).attr("data-appear-delay");
                n
                  ? ((n = "random" === n ? t : n),
                    qodefAddonsCore.qodefIsInViewport.check(o, function () {
                      setTimeout(function () {
                        o.addClass("qodef-qi--appeared");
                      }, n);
                    }))
                  : qodefAddonsCore.qodefIsInViewport.check(o, function () {
                      o.addClass("qodef-qi--appeared");
                    });
              });
        },
      }),
    t =
      ((qodefAddonsCore.qodefAppear = o),
      {
        check: function (o, t, n) {
          var e, i;
          o.length &&
            ((e =
              void 0 !== o.data("viewport-offset")
                ? o.data("viewport-offset")
                : 0.15),
            (i = new IntersectionObserver(
              function (e) {
                !0 === e[0].isIntersecting &&
                  (t.call(o), !1 !== n) &&
                  i.disconnect();
              },
              { threshold: [e] }
            )).observe(o[0]));
        },
      }),
    t =
      ((qodefAddonsCore.qodefIsInViewport = t),
      {
        check: function (e, o) {
          if (e.length) {
            var t = e.find("img");
            if (t.length)
              for (var n = 0, i = 0; i < t.length; i++) {
                var d,
                  r = t[i];
                r.complete
                  ? ++n === t.length && o.call(e)
                  : ((d = new Image()).addEventListener(
                      "load",
                      function () {
                        if (++n === t.length) return o.call(e), !1;
                      },
                      !1
                    ),
                    (d.src = r.src));
              }
            else o.call(e);
          }
        },
      }),
    n =
      ((qodefAddonsCore.qodefWaitForImages = t),
      {
        disable: function () {
          window.addEventListener &&
            window.addEventListener("wheel", n.preventDefaultValue, {
              passive: !1,
            }),
            (document.onkeydown = n.keyDown);
        },
        enable: function () {
          window.removeEventListener &&
            window.removeEventListener("wheel", n.preventDefaultValue, {
              passive: !1,
            }),
            (window.onmousewheel =
              document.onmousewheel =
              document.onkeydown =
                null);
        },
        preventDefaultValue: function (e) {
          (e = e || window.event).preventDefault && e.preventDefault(),
            (e.returnValue = !1);
        },
        keyDown: function (e) {
          for (var o = [37, 38, 39, 40], t = o.length; t--; )
            if (e.keyCode === o[t]) return void n.preventDefaultValue(e);
        },
      }),
    t =
      ((qodefAddonsCore.qodefScroll = n),
      {
        init: function (o, t) {
          var n = t.find(".qodef-qi-swiper-container"),
            i = setInterval(function () {
              var e = !0;
              n.each(function () {
                void 0 === d(this)[0].swiper && (e = !1);
              }),
                e && (o(t), clearInterval(i));
            }, 200);
        },
      });
  qodefAddonsCore.qodefSwiperElementorCheck = t;
})(jQuery),
  (function (i) {
    "use strict";
    i(document).ready(function () {
      d.init();
    }),
      i(window).resize(function () {
        d.reInit();
      }),
      i(window).on("elementor/frontend/init", function () {
        elementorFrontend.isEditMode() &&
          elementor.channels.editor.on("change", function () {
            d.reInit();
          });
      });
    var d = {
      init: function (e) {
        (this.holder = i(".qodef-layout--qi-masonry")),
          i.extend(this.holder, e),
          this.holder.length &&
            this.holder.each(function () {
              d.createMasonry(i(this));
            });
      },
      reInit: function (e) {
        (this.holder = i(".qodef-layout--qi-masonry")),
          i.extend(this.holder, e),
          this.holder.length &&
            this.holder.each(function () {
              var e = i(this).find(".qodef-grid-inner"),
                o = e.find(".qodef-grid-item"),
                t = e.find(".qodef-qi-grid-masonry-sizer").width(),
                n = parseInt(e.css("column-gap"));
              o.css("width", t),
                "function" == typeof e.isotope &&
                  void 0 !== e.data("isotope") &&
                  (i(this).hasClass("qodef-items--fixed") &&
                    d.setFixedImageProportionSize(e, o, t, n),
                  e.isotope({
                    layoutMode: "packery",
                    itemSelector: ".qodef-grid-item",
                    percentPosition: !0,
                    packery: {
                      columnWidth: ".qodef-qi-grid-masonry-sizer",
                      gutter: n,
                    },
                  }));
            });
      },
      createMasonry: function (e) {
        var o = e.find(".qodef-grid-inner"),
          t = o.find(".qodef-grid-item"),
          n = o.find(".qodef-qi-grid-masonry-sizer").width(),
          i = parseInt(o.css("column-gap"));
        t.css("width", n),
          qodefAddonsCore.qodefWaitForImages.check(o, function () {
            "function" != typeof o.isotope ||
              o.hasClass("qodef--masonry-init") ||
              (e.hasClass("qodef-items--fixed") &&
                d.setFixedImageProportionSize(o, t, n, i),
              o.isotope({
                layoutMode: "packery",
                itemSelector: ".qodef-grid-item",
                percentPosition: !0,
                packery: {
                  columnWidth: ".qodef-qi-grid-masonry-sizer",
                  gutter: i,
                },
              })),
              o.addClass("qodef--masonry-init");
          });
      },
      setFixedImageProportionSize: function (e, o, t, n) {
        var i = e.find(".qodef-item--square"),
          d = e.find(".qodef-item--landscape"),
          r = e.find(".qodef-item--portrait"),
          a = e.find(".qodef-item--huge-square"),
          s = qodefAddonsCore.windowWidth <= 680;
        e.parent().hasClass("qodef-col-num--1")
          ? (o.css({ height: t }),
            i.length && i.css({ width: t }),
            d.length && d.css({ height: Math.round(t / 2) }),
            r.length && r.css({ height: Math.round(2 * t) }),
            a.length && a.css({ width: t }))
          : (o.css({ height: t }),
            d.length && d.css({ width: Math.round(2 * t + n) }),
            r.length && r.css({ height: Math.round(2 * t + n) }),
            a.length &&
              a.css({
                height: Math.round(2 * t + n),
                width: Math.round(2 * t + n),
              }),
            s &&
              (d.length &&
                d.css({ height: Math.round(t / 2), width: Math.round(t) }),
              a.length) &&
              a.css({ height: Math.round(t), width: Math.round(t) }));
      },
    };
    qodefAddonsCore.qodefMasonryLayout = d;
  })(jQuery),
  (function (n) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_accordion = {}),
      n(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.holder = n(".qodef-qi-accordion")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(n(this));
            });
      },
      initItem: function (e) {
        e.hasClass("qodef-behavior--accordion") && o.initAccordion(e),
          e.hasClass("qodef-behavior--toggle") && o.initToggle(e),
          e.addClass("qodef--init");
      },
      initAccordion: function (e) {
        var o = "auto";
        e.hasClass("qodef-height--content") && (o = "content"),
          e.accordion({
            animate: "swing",
            collapsible: !0,
            active: 0,
            icons: "",
            heightStyle: o,
          });
      },
      initToggle: function (e) {
        var o = e.find(".qodef-e-title-holder"),
          t = o.next();
        e.addClass(
          "accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"
        ),
          o.addClass(
            "ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"
          ),
          t
            .addClass(
              "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
            )
            .hide(),
          o.each(function () {
            var e = n(this);
            e.hover(function () {
              e.toggleClass("ui-state-hover");
            }),
              e.on("click", function () {
                e.toggleClass(
                  "ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"
                ),
                  e
                    .next()
                    .toggleClass("ui-accordion-content-active")
                    .slideToggle(400);
              });
          });
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_accordion.qodefAccordion =
      o;
  })(jQuery),
  (function (i) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_animated_text = {}),
      i(document).ready(function () {
        e.init();
      });
    var e = {
      init: function () {
        (this.holder = i(".qodef-qi-animated-text.qodef--animated-by-letter")),
          this.holder.length &&
            this.holder.each(function () {
              e.initItem(i(this));
            });
      },
      initItem: function (n) {
        n.find(".qodef-e-word-holder").each(function () {
          let e = i(this).text(),
            o = "";
          for (var t = 0; t < e.length; t++)
            o += '<span class="qodef-e-character">' + e.charAt(t) + "</span>";
          i(this).html(o);
        }),
          n.find(".qodef-e-character").each(function (e) {
            var o = i(this),
              t = n.hasClass("qodef--appear-from-left") ? 40 : 60;
            o.css("transition-delay", e * t + "ms");
          });
      },
    };
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_animated_text.qodefAppear =
      qodefAddonsCore.qodefAppear),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_animated_text.qodefAnimatedText =
        e);
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_banner = {}),
      e(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.holder = e(".qodef-qi-banner")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        var o,
          e = e.find(".qodef-qi-button");
        e.hasClass("qodef-type--icon-boxed") &&
          ((o = e.find(".qodef-m-icon")),
          (e = e.find(".qodef-m-text").outerHeight()),
          o.css("width", e));
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_banner.qodefInitBanner =
      o;
  })(jQuery),
  (function (t) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_button = {}),
      t(document).ready(function () {
        o.init();
      }),
      t(window).on("elementor/frontend/init", function () {
        elementorFrontend.isEditMode() &&
          elementor.channels.editor.on("change", function (e) {
            "object" == typeof e.$el &&
              e.$el.hasClass("elementor-control-button_padding") &&
              "object" == typeof e.options.element.$el &&
              (e = e.options.element.$el.find(".qodef-qi-button")).length &&
              o.initItem(e);
          });
      });
    var o = {
      init: function () {
        (this.holder = t(".qodef-qi-button")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(t(this));
            });
      },
      initItem: function (e) {
        e.each(function () {
          var e,
            o = t(this);
          o.hasClass("qodef-type--icon-boxed") &&
            ((e = o.find(".qodef-m-icon")),
            (o = o.find(".qodef-m-text").outerHeight()),
            e.css("width", o));
        });
      },
    };
    (qodefAddonsCore.qodefButton = o),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_button.qodefButton =
        o);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_call_to_action = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_call_to_action.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_cards_slider = {}),
      e(document).ready(function () {
        s.init();
      });
    var s = {
      init: function () {
        (this.holder = e(".qodef-qi-cards-slider")),
          this.holder.length &&
            this.holder.each(function () {
              s.initItem(e(this));
            });
      },
      initItem: function (e) {
        s.sliderLoop(e);
      },
      isInView: function (o) {
        new IntersectionObserver(
          function (e) {
            !0 === e[0].isIntersecting
              ? o.addClass("qodef-in-view")
              : o.removeClass("qodef-in-view");
          },
          { threshold: [0.15] }
        ).observe(o[0]),
          document.addEventListener("visibilitychange", function (e) {
            "visible" === document.visibilityState
              ? o.addClass("qodef-in-view")
              : o.removeClass("qodef-in-view");
          });
      },
      sliderLoop: function (t, e) {
        var n,
          i = t.find(".qodef-m-card"),
          o = t.data("orientation"),
          d = t.find(".qodef--next"),
          r = t.find(".qodef--prev");
        switch (o) {
          case "left":
            n = "-10%";
            break;
          case "right":
            n = "10%";
        }
        function a() {
          var e = i.last(),
            o = i.first();
          e.hasClass("qodef-out") ||
            e
              .addClass("qodef-out")
              .animate({ right: n }, 350, "swing", function () {
                e
                  .detach()
                  .insertBefore(o)
                  .animate({ right: "0%" }, 450, "swing", function () {
                    setTimeout(function () {
                      e.removeClass("qodef-out");
                    }, 10);
                  }),
                  (i = t.find(".qodef-m-card"));
              });
        }
        setInterval(function () {
          !e && t.hasClass("qodef-in-view") && a();
        }, 3e3),
          s.isInView(t),
          1024 < qodefAddonsCore.windowWidth
            ? t
                .on("mouseenter", function () {
                  e = !0;
                })
                .on("mouseleave", function () {
                  e = !1;
                })
            : t
                .on("touchstart", function () {
                  e = !0;
                })
                .on("touchend", function () {
                  setTimeout(function () {
                    e = !1;
                  }, 2e3);
                }),
          d.on("click", a),
          r.on("click", function () {
            var e = i.last(),
              o = i.first();
            o.hasClass("qodef-in") ||
              (t.addClass("qodef-backwards"),
              o
                .addClass("qodef-in")
                .animate({ right: n }, 350, "swing", function () {
                  o
                    .detach()
                    .insertAfter(e)
                    .animate({ right: "0" }, 450, "swing", function () {
                      o.removeClass("qodef-in"),
                        t.removeClass("qodef-backwards");
                    }),
                    (i = t.find(".qodef-m-card"));
                }));
          });
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_cards_slider.qodefCardsSlider =
      s;
  })(jQuery),
  (function (r) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_cards_gallery = {}),
      r(document).ready(function () {
        e.init();
      });
    var e = {
      init: function () {
        (this.holder = r(".qodef-qi-cards-gallery")),
          this.holder.length &&
            this.holder.each(function () {
              e.initItem(r(this));
            });
      },
      initItem: function (t) {
        var n,
          i = t.find(".qodef-m-card"),
          d = t.data("orientation");
        switch (d) {
          case "left":
            n = "0 0 0 20%";
            break;
          case "right":
            n = "0 20% 0 0";
        }
        r(i.get().reverse()).each(function (e) {
          var o = r(this);
          o.on("click", function () {
            if (!i.last().is(o))
              return (
                "both" === d &&
                  (n = o.index() % 2 ? "0 0 0 20%" : "0 0 0 -20%"),
                o
                  .addClass("qodef-out")
                  .animate({ margin: n }, 200, "swing", function () {
                    o.detach(),
                      o
                        .insertAfter(i.last())
                        .animate({ margin: "0" }, 200, "swing", function () {
                          o.removeClass("qodef-out");
                        }),
                      (i = t.find(".qodef-m-card"));
                  }),
                !1
              );
          });
        });
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_cards_gallery.qodefCardsGallery =
      e;
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_charts = {}),
      e(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.holder = e(".qodef-qi-charts")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        qodefAddonsCore.qodefIsInViewport.check(e, function () {
          o.generateChartData(e);
        });
      },
      generateChartData: function (i) {
        var e = (e = i.data("type")) ? "pie" : "doughnut",
          o = i.data("values"),
          t = i.data("labels"),
          d = i.data("background-colors"),
          r = i.data("hover-background-colors"),
          n = i.data("border-colors"),
          a = i.data("hover-border-colors"),
          s = i.data("border-width"),
          l = i.data("hover-border-width"),
          f = i.data("enable-legend"),
          c = i.data("legend-position"),
          h = i.data("legend-alignment"),
          u = i.data("legend-bar-width"),
          q = i.data("legend-bar-height"),
          _ = i.data("legend-bar-margin"),
          m = i.data("legend-label-color"),
          p = i.data("legend-label-font"),
          g = i.data("legend-label-font-size"),
          v = i.data("legend-label-font-weight"),
          w = i.data("legend-label-line-height"),
          b = i.data("aspect-ratio");
        let C = i.data("pattern-images"),
          y = !1,
          A,
          I = {
            type: e,
            data: {
              datasets: [
                {
                  data: o,
                  backgroundColor: d,
                  hoverBackgroundColor: r,
                  borderColor: n,
                  hoverBorderColor: a,
                  borderWidth: s,
                  hoverBorderWidth: l,
                  borderAlign: "center",
                  pattern: C,
                },
              ],
              labels: t,
            },
            options: {
              responsive: !0,
              aspectRatio: b,
              animation: { animateScale: !0, animateRotate: !0 },
              plugins: {
                legend: {
                  display: f,
                  position: c,
                  align: h,
                  labels: {
                    boxWidth: u,
                    boxHeight: q,
                    padding: _,
                    color: m,
                    font: { family: p, size: g, weight: v, lineHeight: w },
                  },
                },
                tooltip: {
                  titleFont: { size: 13 },
                  displayColors: !1,
                  cornerRadius: 5,
                  caretSize: 6,
                },
              },
            },
          };
        i.addClass("qodef--init"),
          C.forEach(function (e, t) {
            var n;
            e &&
              ((y = !0),
              ((n = new Image()).src = C[t]),
              (n.onload = function () {
                var e = i.find("canvas")[0].getContext("2d"),
                  o = e.createPattern(n, "repeat");
                (d[t] = o), (r[t] = o), (A = new Chart(e, I));
              }));
          }),
          y || ((e = i.find("canvas")), (A = new Chart(e, I)));
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_charts.qodefCharts = o;
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_clients_slider = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_clients_slider.qodefSwiper =
        qodefAddonsCore.qodefSwiper);
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_countdown = {}),
      e(document).ready(function () {
        t.init();
      });
    var t = {
      init: function () {
        (this.countdowns = e(".qodef-qi-countdown")),
          this.countdowns.length &&
            this.countdowns.each(function () {
              t.initItem(e(this));
            });
      },
      initItem: function (e) {
        var o = e.find(".qodef-m-date"),
          e = t.generateOptions(e);
        t.initCountdown(o, e);
      },
      generateOptions: function (e) {
        var o = {};
        return (
          (o.date = void 0 !== e.data("date") ? e.data("date") : null),
          (o.hide = void 0 !== e.data("hide") ? e.data("hide") : null),
          (o.monthLabel =
            void 0 !== e.data("month-label") ? e.data("month-label") : "Month"),
          (o.monthLabelPlural =
            void 0 !== e.data("month-label-plural")
              ? e.data("month-label-plural")
              : "Months"),
          (o.dayLabel =
            void 0 !== e.data("day-label") ? e.data("day-label") : "Day"),
          (o.dayLabelPlural =
            void 0 !== e.data("day-label-plural")
              ? e.data("day-label-plural")
              : "Days"),
          (o.hourLabel =
            void 0 !== e.data("hour-label") ? e.data("hour-label") : "Hour"),
          (o.hourLabelPlural =
            void 0 !== e.data("hour-label-plural")
              ? e.data("hour-label-plural")
              : "Hours"),
          (o.minuteLabel =
            void 0 !== e.data("minute-label")
              ? e.data("minute-label")
              : "Minute"),
          (o.minuteLabelPlural =
            void 0 !== e.data("minute-label-plural")
              ? e.data("minute-label-plural")
              : "Minutes"),
          (o.secondLabel =
            void 0 !== e.data("second-label")
              ? e.data("second-label")
              : "Second"),
          (o.secondLabelPlural =
            void 0 !== e.data("second-label-plural")
              ? e.data("second-label-plural")
              : "Seconds"),
          o
        );
      },
      initCountdown: function (c, h) {
        var u = new Date(h.date).getTime(),
          q = setInterval(function () {
            var e = new Date().getTime(),
              e = u - e,
              o = Math.floor(e / 2592e6),
              t = Math.floor((e % 2592e6) / 864e5),
              n = Math.floor((e % 864e5) / 36e5),
              i = Math.floor((e % 36e5) / 6e4),
              d = Math.floor((e % 6e4) / 1e3),
              r =
                ("mon" === h.hide && (t = Math.floor(e / 864e5)),
                c.find(".qodef-months")),
              a = c.find(".qodef-days"),
              s = c.find(".qodef-hours"),
              l = c.find(".qodef-minutes"),
              f = c.find(".qodef-seconds");
            r
              .find(".qodef-label")
              .html(1 === o ? h.monthLabel : h.monthLabelPlural),
              a
                .find(".qodef-label")
                .html(1 === t ? h.dayLabel : h.dayLabelPlural),
              s
                .find(".qodef-label")
                .html(1 === n ? h.hourLabel : h.hourLabelPlural),
              l
                .find(".qodef-label")
                .html(1 === i ? h.minuteLabel : h.minuteLabelPlural),
              f
                .find(".qodef-label")
                .html(1 === d ? h.secondLabel : h.secondLabelPlural),
              (o = o < 10 ? "0" + o : o),
              (t = t < 10 ? "0" + t : t),
              (n = n < 10 ? "0" + n : n),
              (i = i < 10 ? "0" + i : i),
              (d = d < 10 ? "0" + d : d),
              r.find(".qodef-digit").html(o),
              a.find(".qodef-digit").html(t),
              s.find(".qodef-digit").html(n),
              l.find(".qodef-digit").html(i),
              f.find(".qodef-digit").html(d),
              e < 0 &&
                (clearInterval(q),
                r.find(".qodef-label").html(h.monthLabelPlural),
                a.find(".qodef-label").html(h.dayLabelPlural),
                s.find(".qodef-label").html(h.hourLabelPlural),
                l.find(".qodef-label").html(h.minuteLabelPlural),
                f.find(".qodef-label").html(h.secondLabelPlural),
                r.find(".qodef-digit").html("00"),
                a.find(".qodef-digit").html("00"),
                s.find(".qodef-digit").html("00"),
                l.find(".qodef-digit").html("00"),
                f.find(".qodef-digit").html("00"));
          }, 1e3);
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_countdown.qodefCountdown =
      t;
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_before_after = {}),
      e(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.holder = e(".qodef-qi-before-after")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        var o = e.find(".qodef-before-after-image-holder"),
          t = o.data("offset") / 100,
          n = "horizontal",
          i = o.siblings(".qodef-handle-text");
        o.parents(".qodef-qi-before-after").hasClass("qodef--vertical") &&
          (n = "vertical"),
          qodefAddonsCore.qodefWaitForImages.check(o, function () {
            o.css("visibility", "visible"),
              o.twentytwenty({ orientation: n, default_offset_pct: t }),
              i.length && o.find(".twentytwenty-handle").prepend(i);
          });
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_before_after.qodefBeforeAfter =
      o;
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_graphs = {}),
      e(document).ready(function () {
        n.init();
      });
    var n = {
      init: function () {
        (this.holder = e(".qodef-qi-graphs")),
          this.holder.length &&
            this.holder.each(function () {
              n.initItem(e(this));
            });
      },
      initItem: function (t) {
        qodefAddonsCore.qodefIsInViewport.check(t, function () {
          t.addClass("qodef--init");
          var e = t.find("canvas"),
            o = n.generateChartData(t, e);
          new Chart(e, o);
        });
      },
      generateChartData: function (e, o) {
        var t = (t = e.data("type")) ? "line" : "bar",
          n = e.data("ticks"),
          i = e.data("fill"),
          d = e.data("linear"),
          r = e.data("values"),
          a = e.data("item-labels"),
          s = e.data("labels"),
          l = e.data("background-colors"),
          f = e.data("hover-background-colors"),
          c = e.data("border-colors"),
          h = e.data("hover-border-colors"),
          u = e.data("border-width"),
          q = e.data("hover-border-width"),
          _ = e.data("bar-size"),
          m = e.data("cat-size"),
          p = e.data("enable-legend"),
          g = e.data("legend-position"),
          v = e.data("legend-alignment"),
          w = e.data("legend-bar-width"),
          b = e.data("legend-bar-height"),
          C = e.data("legend-bar-margin"),
          y = e.data("legend-label-color"),
          A = e.data("legend-label-font"),
          I = e.data("legend-label-font-size"),
          e = e.data("legend-label-font-weight"),
          x = [];
        return (
          r.forEach(function (e, o) {
            var t = {};
            (t.data = r[o].split(",")),
              (t.label = a[o]),
              (t.backgroundColor = l[o]),
              (t.hoverBackgroundColor = f[o]),
              (t.borderColor = c[o]),
              (t.hoverBorderColor = h[o]),
              (t.borderWidth = u),
              (t.hoverBorderWidth = q),
              (t.pointBackgroundColor = "rgba(0,0,0,0)"),
              (t.pointBorderColor = "rgba(0,0,0,0)"),
              (t.pointHoverBackgroundColor = "rgba(0,0,0,0)"),
              (t.pointHoverBorderColor = "rgba(0,0,0,0)"),
              (t.cubicInterpolationMode = "default"),
              (t.fill = i[o]),
              (t.barPercentage = _),
              (t.categoryPercentage = m),
              (t.tension = d[o]),
              x.push(t);
          }),
          qodefAddonsCore.windowWidth <= 480 && (p = !1),
          {
            type: t,
            data: { labels: s, datasets: x },
            options: {
              responsive: !0,
              aspectRatio: 1.7,
              hover: { mode: "nearest", intersect: !0 },
              plugins: {
                legend: {
                  display: p,
                  position: g,
                  align: v,
                  labels: {
                    boxWidth: w,
                    boxHeight: b,
                    padding: C,
                    color: y,
                    font: { family: A, size: I, weight: e },
                  },
                },
                tooltip: {
                  mode: "nearest",
                  intersect: !1,
                  titleFont: { size: 13 },
                  displayColors: !1,
                  cornerRadius: 5,
                  caretSize: 6,
                },
              },
              scales: {
                x: {
                  display: !0,
                  scaleLabel: { display: !0 },
                  ticks: {
                    color: "#c4c4c4",
                    font: { family: '"DM Sans"', size: 16 },
                    padding: 10,
                  },
                  grid: { color: "#dbdbdb", tickLength: 30 },
                },
                y: {
                  display: !0,
                  scaleLabel: { display: !0 },
                  suggestedMax: n.max,
                  suggestedMin: n.min,
                  ticks: {
                    stepSize: n.step,
                    color: "#c4c4c4",
                    font: { family: '"DM Sans"', size: 16 },
                    padding: 10,
                  },
                  gridLines: { color: "#dbdbdb", tickMarkLength: 30 },
                },
              },
            },
          }
        );
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_graphs.qodefGraphs = n;
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_faq = {}),
      e(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.holder = e(".qodef-qi-faq.qodef-behavior--accordion")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        var o;
        e.hasClass("qodef-behavior--accordion") &&
          ((o = 0),
          e.hasClass("qodef-closed") && (o = !1),
          e.accordion({
            animate: "swing",
            collapsible: !0,
            active: o,
            icons: "",
            heightStyle: "content",
          }),
          e.addClass("qodef--init"));
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_faq.qodefFAQ = o;
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_highlight = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_highlight.qodefAppear =
        qodefAddonsCore.qodefAppear);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_slider = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_slider.qodefSwiper =
        qodefAddonsCore.qodefSwiper);
  })(jQuery),
  (function (r) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_counter = {}),
      r(document).ready(function () {
        n.init();
      });
    var n = {
      init: function () {
        (this.counters = r(".qodef-qi-counter")),
          this.counters.length &&
            this.counters.each(function () {
              n.initItem(r(this));
            });
      },
      initItem: function (e) {
        var o = e.find(".qodef-m-digit"),
          t = n.generateOptions(e);
        qodefAddonsCore.qodefIsInViewport.check(e, function () {
          n.counterScript(o, t);
        });
      },
      generateOptions: function (e) {
        var o = {};
        return (
          (o.start =
            void 0 !== e.data("start-digit") && "" !== e.data("start-digit")
              ? e.data("start-digit")
              : 0),
          (o.end =
            void 0 !== e.data("end-digit") && "" !== e.data("end-digit")
              ? e.data("end-digit")
              : null),
          (o.step =
            void 0 !== e.data("step-digit") && "" !== e.data("step-digit")
              ? e.data("step-digit")
              : 1),
          (o.delay =
            void 0 !== e.data("step-delay") && "" !== e.data("step-delay")
              ? parseInt(e.data("step-delay"), 10)
              : 100),
          (o.txt =
            void 0 !== e.data("digit-label") && "" !== e.data("digit-label")
              ? String(e.data("digit-label"))
              : ""),
          o
        );
      },
      counterScript: function (e, o) {
        var t = r.extend(
            { start: 0, end: null, step: 1, delay: 50, txt: "" },
            o || {}
          ),
          n = t.start,
          i = t.end,
          d =
            (e.text(n + t.txt),
            setInterval(function () {
              (null !== i && i <= n) ||
                ((n += t.step),
                i <= n && ((n = i), clearInterval(d)),
                e.text(n + t.txt));
            }, t.delay));
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_counter.qodefCounter = n;
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery.qodefLightboxPopup =
        qodefAddonsCore.qodefLightboxPopup);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_pinterest =
      {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_pinterest.qodefMasonryLayout =
        qodefAddonsCore.qodefMasonryLayout),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_pinterest.qodefLightboxPopup =
        qodefAddonsCore.qodefLightboxPopup);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_masonry =
      {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_masonry.qodefMasonryLayout =
        qodefAddonsCore.qodefMasonryLayout),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_gallery_masonry.qodefLightboxPopup =
        qodefAddonsCore.qodefLightboxPopup);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_icon_with_text = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_icon_with_text.qodefAppear =
        qodefAddonsCore.qodefAppear),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_icon_with_text.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_info_button = {}),
      e(document).ready(function () {
        o.init();
      }),
      e(window).on("elementor/frontend/init", function () {
        elementorFrontend.isEditMode() &&
          elementor.channels.editor.on("change", function () {
            o.init();
          });
      });
    var o = {
      init: function () {
        (this.holder = e(".qodef-qi-info-button")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        var o;
        e.hasClass("qodef-type--icon-boxed") &&
          ((o = e.find(".qodef-m-icon")),
          (e = e.find(".qodef-m-text-holder").outerHeight()),
          o.css("width", e));
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_info_button.qodefInfoButton =
      o;
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_info_cards = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_info_cards.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner =
      {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function (t) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_carousel = {}),
      t(document).ready(function () {
        e.init();
      });
    var e = {
      init: function () {
        (this.sliders = t(".qodef-qi-device-carousel")),
          this.sliders.length &&
            this.sliders.each(function () {
              e.initItem(t(this));
            });
      },
      initItem: function (e) {
        var o = setInterval(function () {
          e
            .children(".qodef-qi-swiper-container")
            .hasClass("qodef-swiper--initialized") &&
            (e
              .find(".qodef-device-carousel-device .qodef-qi-swiper-container")
              .each(function () {
                var e = t(this);
                e.hasClass("qodef-swiper--initialized")
                  ? (e[0].swiper.autoplay.stop(), e[0].swiper.autoplay.start())
                  : qodefAddonsCore.qodefSwiper.initSlider(e);
              }),
            clearInterval(o));
        }, 200);
      },
    };
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_carousel.qodefSwiper =
      qodefAddonsCore.qodefSwiper),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_device_carousel.qodefDeviceCarousel =
        e);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_slider = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_slider.qodefSwiper =
        qodefAddonsCore.qodefSwiper),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_image_slider.qodefLightboxPopup =
        qodefAddonsCore.qodefLightboxPopup);
  })(jQuery),
  (function (t) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_message_box = {}),
      t(document).ready(function () {
        e.init();
      });
    var e = {
      init: function () {
        (this.holder = t(".qodef-qi-message-box")),
          this.holder.length &&
            this.holder.each(function () {
              e.initItem(t(this));
            });
      },
      initItem: function (e) {
        let o = e.closest(".elementor-element");
        o.addClass("q-message-box-holder"),
          e.find(".qodef-m-close-icon").on("click", function (e) {
            t(this).parent().addClass("qodef-hidden"),
              o.addClass("qodef-hidden"),
              o.animate({ height: 0 }, { queue: !1 });
          });
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_message_box.qodefMessageBoxList =
      e;
  })(jQuery),
  (function (a) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_parallax_images = {}),
      a(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.images = a(".qodef-qi-parallax-images")),
          this.images.length &&
            (a(window).on("load", function () {
              o.initParallaxElements();
            }),
            this.images.each(function () {
              o.initItem(a(this));
            }));
      },
      initItem: function (e) {
        o.parallaxElements(e);
      },
      parallaxElements: function (e) {
        var e = e.find(".qodef-m-images"),
          o = e.find(".qodef-e-parallax-image"),
          t = e.find(".qodef-e-main-image img"),
          e = e.find(".qodef-e-main-image").attr("data-parallax-main"),
          n = 40,
          i = -50,
          d = 30,
          r = 15;
        1024 < qodefAddonsCore.windowWidth &&
          (void 0 !== e &&
            !1 !== e &&
            ((n = e), (d = Math.abs(parseInt(n / 0.9, 10)))),
          t.attr(
            "data-parallax",
            '{"y" : ' + n + ' , "smoothness": ' + d + "}"
          ),
          o.each(function () {
            var e = a(this),
              o = e.find("img"),
              e = e.attr("data-parallax");
            void 0 !== e &&
              !1 !== e &&
              ((i = e), (r = Math.abs(parseInt(i / 2.5, 10)))),
              o.attr(
                "data-parallax",
                '{"y" : ' + i + ' , "smoothness": ' + r + "}"
              );
          }));
      },
      initParallaxElements: function () {
        a(".qodef-qi-parallax-images [data-parallax]").length &&
          ParallaxScroll.init();
      },
    };
    a(window).on("load", function () {
      (this.images = a(".qodef-qi-parallax-images")),
        this.images.length &&
          (o.initParallaxElements(),
          setTimeout(function () {
            qodefAddonsCore.body.hasClass("e--ua-firefox") &&
              o.initParallaxElements();
          }, 300));
    }),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_parallax_images.qodefParallaxImages =
        o);
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_preview_slider = {}),
      e(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.sliders = e(".qodef-qi-preview-slider")),
          this.sliders.length &&
            this.sliders.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        qodefAddonsCore.qodefSwiperElementorCheck.init(o.initSwiperReinit, e);
      },
      initSwiperReinit: function (e) {
        var o = e.find("> .qodef-qi-swiper-container .swiper-slide-active"),
          t = e.find(".qodef-preview-slider-device-holder"),
          n = e.find("> .qodef-qi-swiper-container"),
          i = e.find(
            ".qodef-preview-slider-device-holder .qodef-qi-swiper-container"
          ),
          t =
            (t.width(o.width()),
            t.css("top", o.height()),
            (t = n.find(".swiper-slide").length),
            ((o = i[0].swiper.params).loopedSlides = t),
            (o.autoplay = "false"),
            n[0].swiper.autoplay.stop(),
            i[0].swiper.destroy(),
            new Swiper(i[0], Object.assign(o)));
        (n[0].swiper.controller.control = t),
          (n[0].swiper.controller.by = "slide"),
          (n[0].swiper.controller.inverse = !0),
          (t.controller.control = n[0].swiper),
          n[0].swiper.autoplay.start(),
          e.addClass("qodef--visible");
      },
    };
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_preview_slider.qodefSwiper =
      qodefAddonsCore.qodefSwiper),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_preview_slider.qodefPreviewSlider =
        o);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_pricing_table = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_pricing_table.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_item_showcase = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_item_showcase.qodefAppear =
        qodefAddonsCore.qodefAppear);
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_horizontal =
      {}),
      e(document).ready(function () {
        i.init();
      });
    var i = {
      init: function () {
        (this.holder = e(".qodef-qi-progress-bar-horizontal")),
          this.holder.length &&
            this.holder.each(function () {
              i.initItem(e(this));
            });
      },
      initItem: function (n) {
        qodefAddonsCore.qodefIsInViewport.check(n, function () {
          n.addClass("qodef--init");
          var e = n.find(".qodef-m-canvas"),
            o = i.generateBarData(n),
            t = n.data("number") / 100;
          i.initHorizontalBar(e, o, t, n);
        });
      },
      generateBarData: function (t) {
        var e = t.data("active-line-width"),
          o = t.data("active-line-color"),
          n = t.data("inactive-line-width"),
          i = t.data("inactive-line-color"),
          d =
            void 0 !== t.data("duration") && "" !== t.data("duration")
              ? parseInt(t.data("duration"), 10)
              : 1200,
          r = t.data("percentage-type"),
          a = t.width();
        return {
          color: o,
          strokeWidth: (100 * e) / a,
          trailColor: i,
          trailWidth: (100 * n) / a,
          svgStyle: { display: "block", width: "100%" },
          easing: "easeInOut",
          duration: d,
          from: { color: i },
          to: { color: o },
          step: function (e, o) {
            o = Math.round(100 * o.value());
            t
              .find(".qodef-m-value-inner")
              .html(o + '<span class="qodef-m-percentage">%</span>'),
              ("floating-above" !== r && "floating-on" !== r) ||
                (t.find(".qodef-m-value")[0].style.left = o + "%");
          },
        };
      },
      initHorizontalBar: function (e, o, t, n) {
        i.checkBar(e) &&
          ((e = new ProgressBar.Line(e[0], o)),
          "yes" === n.data("gradient-fill") && i.generateGradient(n),
          void 0 !== (o = n.data("pattern")) &&
            n.find("svg").css("background-image", 'url("' + o + '")'),
          e.animate(t));
      },
      checkBar: function (e) {
        return !e.find("svg").length;
      },
      generateGradient: function (e) {
        for (
          var o = "http://www.w3.org/2000/svg",
            t = document.createElementNS(o, "defs"),
            n = document.createElementNS(o, "linearGradient"),
            i = [
              { color: e.data("gradient-start"), offset: "0%" },
              { color: e.data("gradient-end"), offset: "100%" },
            ],
            d = 0,
            r = i.length;
          d < r;
          d++
        ) {
          var a = document.createElementNS(o, "stop");
          a.setAttribute("offset", i[d].offset),
            a.setAttribute("stop-color", i[d].color),
            n.appendChild(a);
        }
        (n.id = "Gradient-" + e.data("rand-id")),
          n.setAttribute("gradientUnits", "userSpaceOnUse"),
          n.setAttribute("x1", "0"),
          n.setAttribute("x2", e.data("number") + "%"),
          n.setAttribute("y1", "0"),
          n.setAttribute("y2", "0"),
          t.appendChild(n),
          e[0].querySelector(".qodef-m-canvas svg").appendChild(t),
          e[0]
            .querySelector(".qodef-m-canvas svg path:nth-child(2)")
            .setAttribute("stroke", "url(#Gradient-" + e.data("rand-id") + ")");
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_horizontal.qodefProgressBar =
      i;
  })(jQuery),
  (function (i) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_link_showcase =
      {}),
      i(document).ready(function () {
        e.init();
      });
    var e = {
      init: function () {
        (this.holder = i(".qodef-qi-interactive-link-showcase")),
          this.holder.length &&
            this.holder.each(function () {
              e.initItem(i(this));
            });
      },
      initItem: function (e) {
        var t = e.find(".qodef-e-image"),
          n = e.find(".qodef-m-item");
        t.eq(0).addClass("qodef--active"),
          n.eq(0).addClass("qodef--active"),
          n
            .on("touchstart mouseenter", function (e) {
              var o = i(this);
              (!qodefAddonsCore.body.hasClass("qodef-qi--touch") ||
                (!o.hasClass("qodef--active") &&
                  680 < qodefAddonsCore.windowWidth)) &&
                (e.preventDefault(),
                t
                  .removeClass("qodef--active")
                  .eq(o.index())
                  .addClass("qodef--active"),
                n
                  .removeClass("qodef--active")
                  .eq(o.index())
                  .addClass("qodef--active"));
            })
            .on("touchend mouseleave", function () {
              var e = i(this);
              (!qodefAddonsCore.body.hasClass("qodef-qi--touch") ||
                (!e.hasClass("qodef--active") &&
                  680 < qodefAddonsCore.windowWidth)) &&
                (n
                  .removeClass("qodef--active")
                  .eq(e.index())
                  .addClass("qodef--active"),
                t
                  .removeClass("qodef--active")
                  .eq(e.index())
                  .addClass("qodef--active"));
            }),
          e.addClass("qodef--init");
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_link_showcase.qodefInteractiveLinkShowcase =
      e;
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_circle =
      {}),
      e(document).ready(function () {
        i.init();
      });
    var i = {
      init: function () {
        (this.holder = e(".qodef-qi-progress-bar-circle")),
          this.holder.length &&
            this.holder.each(function () {
              i.initItem(e(this));
            });
      },
      initItem: function (n) {
        qodefAddonsCore.qodefIsInViewport.check(n, function () {
          n.addClass("qodef--init");
          var e = n.find(".qodef-m-canvas"),
            o = i.generateBarData(n),
            t = n.data("number") / 100;
          i.initCircleBar(e, o, t);
        });
      },
      generateBarData: function (e) {
        var o = e.data("active-line-width"),
          t = e.data("active-line-color"),
          n = e.data("inactive-line-width"),
          i = e.data("inactive-line-color"),
          d =
            void 0 !== e.data("duration") && "" !== e.data("duration")
              ? parseInt(e.data("duration"), 10)
              : 1200,
          r = e.data("text-color"),
          e = e.width();
        return {
          color: t,
          strokeWidth: (100 * o) / e,
          trailColor: i,
          trailWidth: (100 * n) / e,
          svgStyle: { display: "block", width: "100%" },
          text: {
            className: "qodef-m-value",
            style: { color: r },
            autoStyleContainer: !1,
          },
          easing: "linear",
          duration: d,
          from: { color: i },
          to: { color: t },
          step: function (e, o) {
            o.setText(
              Math.round(100 * o.value()) +
                '<sup class="qodef-m-percentage">%</sup>'
            );
          },
        };
      },
      initCircleBar: function (e, o, t) {
        i.checkBar(e) && new ProgressBar.Circle(e[0], o).animate(t);
      },
      checkBar: function (e) {
        return !e.find("svg").length;
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_circle.qodefProgressBar =
      i;
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_process = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_process.qodefAppear =
        qodefAddonsCore.qodefAppear);
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_section_title = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_section_title.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function (h) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_table_of_contents = {}),
      h(document).ready(function () {
        u.init();
      });
    var u = {
      init: function () {
        (this.holder = h(".qodef-qi-table-of-contents")),
          this.holder.length &&
            this.holder.each(function () {
              u.initItem(h(this));
            });
      },
      initItem: function (e) {
        var o = ["h1", "h2", "h3", "h4", "h5", "h6"],
          t = e.find(".qodef-m-table-content"),
          n = void 0 !== t.data("excluded-tags") ? t.data("excluded-tags") : "",
          i = void 0 !== t.data("excluded-cids") ? t.data("excluded-cids") : "",
          a = void 0 !== t.data("type") ? t.data("type") : "ul",
          s = e.find(".qodef-m-table-content > " + a),
          l = "",
          f = {},
          c = [".qodef-e-number", ".qodef-e-mark"];
        e.hasClass("qodef--only-content") &&
          (o = o.map(function (e) {
            return ".elementor " + e;
          })),
          (e = u.prepareHeadings(n, i, o)).length &&
            (e.each(function (e) {
              var o,
                t,
                n,
                i = h(this),
                d = i.clone(),
                r = u.prepareId(c, d, l);
              (l += r.id + ";"),
                (f[e] = {
                  id: r.finalID,
                  tag: i.prop("tagName").replace("H", ""),
                }),
                0 < e &&
                  ((o = i.prop("tagName").replace("H", "")),
                  (t = f[e - 1].tag) < o
                    ? ((n = s
                        .find("a[href=#" + f[e - 1].id + "]")
                        .parent()).append("<" + a + ">"),
                      (s = n.find(a).first()))
                    : o < t &&
                      ((n = u.findSiblings(o, e, f)),
                      (s = s
                        .parents(".qodef-m-table-content")
                        .find("a[href=#" + n + "]")
                        .parent()
                        .parents(a)
                        .first()))),
                i.attr("id", r.finalID),
                s.append(
                  '<li><a href="#' + r.finalID + '">' + d.text() + "</a></li>"
                );
            }),
            t.find("li > a").each(function () {
              h(this).on("click", function (e) {
                e.preventDefault();
                var e = h(this),
                  o = e.attr("href");
                u.animateAnchor(e, o);
              });
            }));
      },
      prepareHeadings: function (e, o, t) {
        var n,
          i = [],
          d = "";
        if (0 < e.length)
          for (var r = e.split(","), a = 0; a < r.length; a++)
            -1 !== t.indexOf(r[a]) && t.splice(t.indexOf(r[a]), 1);
        if (0 < o.length)
          for (var s = o.split(","), a = 0; a < s.length; a++)
            d += ":not(" + s[a] + ")";
        (t = t.join(d + ", ") + d),
          (n = h(t)).length &&
            n.each(function (e) {
              for (var o = h(this), t = 0; t < s.length; t++)
                if (o.parents(s[t]).length) return void i.push(e);
            });
        for (a = i.length - 1; 0 <= a; a--) n.splice(i[a], 1);
        return n;
      },
      prepareId: function (e, o, t) {
        var n,
          i = {};
        return (
          e.forEach(function (e) {
            o.find(e).remove();
          }),
          (i.id = o
            .text()
            .trim()
            .replaceAll(" ", "_")
            .replaceAll(/[^a-zA-Z_]+/g, "")),
          0 !== t.length
            ? ((e = new RegExp(i.id + ";", "g")),
              (n = 0),
              null !== (t = t.match(e)) && (n = t.length),
              (i.finalID = 0 !== n ? i.id + "____" + (n += 1) : i.id))
            : (i.finalID = i.id),
          i
        );
      },
      findSiblings: function (e, o, t) {
        return 0 === o
          ? t[0].id
          : t[(o = o - 1)].tag > e
          ? u.findSiblings(e, o, t)
          : t[o].id;
      },
      animateAnchor: function (e, o) {
        function t() {
          var e;
          i !== d &&
            (Math.abs(i - d) <= 100 && (a = 8),
            ((-1 == r && i < d) || (1 == r && d < i)) && (i = d),
            (e = u.easingFunction((i - d) / i)),
            h("html, body").scrollTop(i - (i - d) * e),
            (i += r * a),
            (n = requestAnimationFrame(t)));
        }
        var n,
          i = window.scrollY,
          d = h(o).offset().top,
          r = d < i ? -1 : 1,
          a = 50,
          o = h("#wpadminbar");
        o.length && (d -= o.height());
        t(),
          h(window).one("wheel touchstart", function () {
            cancelAnimationFrame(n);
          });
      },
      easingFunction: function (e) {
        return 0 == e ? 0 : Math.pow(1024, e - 1);
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_table_of_contents.qodefTableOfContents =
      u;
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_pricing_list = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_pricing_list.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_slider_switch = {}),
      e(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.sliders = e(".qodef-qi-slider-switch")),
          this.sliders.length &&
            this.sliders.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        qodefAddonsCore.qodefSwiperElementorCheck.init(o.initSwiperReinit, e);
      },
      initSwiperReinit: function (e) {
        var o,
          t = e.find(
            ".qodef-m-main-slider > .qodef-qi-swiper-container .swiper-slide-active"
          ),
          n = e.find(".qodef-slider-switch-device-holder"),
          i = e.find(".qodef-m-main-slider > .qodef-qi-swiper-container"),
          d = e.find(
            ".qodef-slider-switch-device-holder .qodef-qi-swiper-container"
          ),
          r = e.find(".qodef-m-main-text .qodef-qi-swiper-container"),
          a =
            (n.width(t.width()),
            n.css("top", t.height()),
            (n = i.find(".swiper-slide").length),
            ((t = d[0].swiper.params).loopedSlides = n),
            (t.autoplay = !1),
            ((o = r[0].swiper.params).grabCursor = !1),
            (o.loopedSlides = n),
            (o.autoplay = !1),
            (o.effect = "fade"),
            (o.allowTouchMove = !1),
            r[0].swiper.update(),
            (n = d.data().options.autoplayDelay),
            i[0].swiper.autoplay.running);
        i[0].swiper.autoplay.stop(),
          d[0].swiper.destroy(),
          r[0].swiper.destroy();
        let s = new Swiper(d[0], Object.assign(t)),
          l = new Swiper(r[0], Object.assign(o));
        (i[0].swiper.controller.control = s),
          (i[0].swiper.controller.by = "slide"),
          (i[0].swiper.controller.inverse = !0),
          (s.controller.control = i[0].swiper),
          a &&
            ("" != n
              ? setTimeout(function () {
                  i[0].swiper.autoplay.start();
                }, n)
              : i[0].swiper.autoplay.start()),
          e.addClass("qodef--visible"),
          s.on("slideChange", function () {
            var e = s.realIndex;
            e != l.realIndex && l.slideTo(e, 1e3, !1);
          });
      },
    };
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_slider_switch.qodefSwiper =
      qodefAddonsCore.qodefSwiper),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_slider_switch.qodefSliderSwitch =
        o);
  })(jQuery),
  (function (n) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_horizontal = {}),
      n(document).ready(function () {
        e.init();
      });
    var e = {
      init: function () {
        (this.holder = n(".qodef-qi-tabs-horizontal")),
          this.holder.length &&
            this.holder.each(function () {
              e.initItems(n(this));
            });
      },
      initItems: function (e) {
        e.children(".qodef-tabs-horizontal-content").each(function (e) {
          e += 1;
          var o = n(this),
            t = o.attr("id"),
            o = o
              .parent()
              .find(
                ".qodef-tabs-horizontal-navigation li:nth-child(" + e + ") a"
              ),
            e = o.attr("href");
          -1 < (t = "#" + t).indexOf(e) && o.attr("href", t);
        }),
          e.addClass("qodef--init").tabs();
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_horizontal.qodefTabsHorizontal =
      e;
  })(jQuery),
  (function (n) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_vertical = {}),
      n(document).ready(function () {
        e.init();
      });
    var e = {
      init: function () {
        (this.holder = n(".qodef-qi-tabs-vertical")),
          this.holder.length &&
            this.holder.each(function () {
              e.initItems(n(this));
            });
      },
      initItems: function (e) {
        e.children(".qodef-tabs-vertical-content").each(function (e) {
          e += 1;
          var o = n(this),
            t = o.attr("id"),
            o = o
              .parent()
              .find(
                ".qodef-tabs-vertical-navigation li:nth-child(" + e + ") a"
              ),
            e = o.attr("href");
          -1 < (t = "#" + t).indexOf(e) && o.attr("href", t);
        }),
          e.addClass("qodef--init").tabs();
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_tabs_vertical.qodefTabsVertical =
      e;
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_vertical =
      {}),
      e(document).ready(function () {
        a.init();
      });
    var a = {
      init: function () {
        (this.holder = e(".qodef-qi-progress-bar-vertical")),
          this.holder.length &&
            this.holder.each(function () {
              a.initItem(e(this));
            });
      },
      initItem: function (n) {
        qodefAddonsCore.qodefIsInViewport.check(n, function () {
          n.addClass("qodef--init");
          var e = n.find(".qodef-m-canvas"),
            o = a.generateBarData(n),
            t = n.data("number") / 100;
          a.initVerticalBar(e, o, t, n),
            n.hasClass("qodef-percentage--floating-top") &&
              n
                .find(".qodef-m-inner")
                .width(n.find(".qodef-m-canvas svg").width());
        });
      },
      generateBarData: function (t) {
        var e = t.data("bar-height"),
          o = t.data("active-line-width"),
          n = t.data("active-line-color"),
          i = t.data("inactive-line-width"),
          d = t.data("inactive-line-color"),
          r =
            void 0 !== t.data("duration") && "" !== t.data("duration")
              ? parseInt(t.data("duration"), 10)
              : 1200,
          a = t.data("percentage-type");
        return {
          color: n,
          strokeWidth: (100 * o) / e,
          trailColor: d,
          trailWidth: (100 * i) / e,
          svgStyle: {
            display: "block",
            height: e + "px",
            transform: "scaleY(-1)",
          },
          easing: "linear",
          duration: r,
          from: { color: d },
          to: { color: n },
          step: function (e, o) {
            o = Math.round(100 * o.value());
            t
              .find(".qodef-m-value")
              .html(o + '<span class="qodef-m-percentage">%</span>'),
              "floating-top" === a &&
                ((t.find(".qodef-m-value")[0].style.bottom = o + "%"),
                (t.find(".qodef-m-title")[0].style.bottom = o + "%"));
          },
        };
      },
      initVerticalBar: function (e, o, t, n) {
        var i, d, r;
        a.checkBar(e) &&
          ((e = new ProgressBar.Line(e[0], o)),
          "yes" === n.data("gradient-fill") && a.generateGradient(n),
          (o = n[0].querySelector(".qodef-m-canvas svg")),
          (i = n[0].querySelector(".qodef-m-canvas svg path:first-of-type")),
          (r = (d = n[0].querySelector(
            ".qodef-m-canvas svg path:last-of-type"
          )).getAttribute("stroke-width")),
          o.setAttribute("viewBox", "0 0 " + r + " 100"),
          i.setAttribute("d", "M " + r / 2 + ",0 L " + r / 2 + ",100"),
          d.setAttribute("d", "M " + r / 2 + ",0 L " + r / 2 + ",100"),
          void 0 !== (o = n.data("pattern")) &&
            n.find("svg").css("background-image", 'url("' + o + '")'),
          e.animate(t));
      },
      checkBar: function (e) {
        return !e.find("svg").length;
      },
      generateGradient: function (e) {
        for (
          var o = "http://www.w3.org/2000/svg",
            t = document.createElementNS(o, "defs"),
            n = document.createElementNS(o, "linearGradient"),
            i = [
              { color: e.data("gradient-start"), offset: "0%" },
              { color: e.data("gradient-end"), offset: "100%" },
            ],
            d = 0,
            r = i.length;
          d < r;
          d++
        ) {
          var a = document.createElementNS(o, "stop");
          a.setAttribute("offset", i[d].offset),
            a.setAttribute("stop-color", i[d].color),
            n.appendChild(a);
        }
        (n.id = "Gradient-" + e.data("rand-id")),
          n.setAttribute("gradientUnits", "userSpaceOnUse"),
          n.setAttribute("x1", "0"),
          n.setAttribute("x2", "0"),
          n.setAttribute("y1", "0"),
          n.setAttribute("y2", e.data("number") + "%"),
          t.appendChild(n),
          e[0].querySelector(".qodef-m-canvas svg").appendChild(t),
          e[0]
            .querySelector(".qodef-m-canvas svg path:nth-child(2)")
            .setAttribute("stroke", "url(#Gradient-" + e.data("rand-id") + ")");
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_progress_bar_vertical.qodefProgressBar =
      a;
  })(jQuery),
  (function (i) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_typeout_text = {}),
      i(document).ready(function () {
        e.init();
      }),
      i(window).on("elementor/frontend/init", function () {
        elementorFrontend.isEditMode() &&
          elementor.channels.editor.on("change", function () {
            e.init();
          });
      });
    var e = {
      init: function () {
        (this.holder = i(".qodef-qi-typeout-text")),
          this.holder.length &&
            this.holder.each(function () {
              e.initItem(i(this));
            });
      },
      initItem: function (e) {
        var o = e.find(".qodef-typeout"),
          t = e.data("strings"),
          n = void 0 !== e.data("cursor") ? e.data("cursor") : "";
        o.each(function () {
          var e = i(this),
            o = {
              strings: t,
              typeSpeed: 90,
              backDelay: 700,
              loop: !0,
              contentType: "text",
              loopCount: !1,
              cursorChar: n,
            };
          e.hasClass("qodef--initialized") ||
            (new Typed(e[0], o), e.addClass("qodef--initialized"));
        });
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_typeout_text.qodefTypeoutText =
      e;
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_testimonials_slider =
      {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_testimonials_slider.qodefSwiper =
        qodefAddonsCore.qodefSwiper);
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_timeline = {}),
      e(document).ready(function () {
        s.init();
      }),
      e(window).resize(function () {
        s.init();
      });
    var s = {
      init: function () {
        (this.holder = e(".qodef-qi-timeline")),
          this.holder.length &&
            this.holder.each(function () {
              s.initItem(e(this));
            });
      },
      initItem: function (e) {
        var o, t, n, i, d, r, a;
        e.hasClass("qodef-timeline--horizontal") &&
          ((o = e.find(".qodef-e-item")),
          (t = e.find(".qodef-grid-inner")),
          (n = e.width()),
          (i = o.length),
          (r = d = 0),
          (a = e.data("options")),
          1 < i) &&
          ((r =
            (d =
              1440 < qodefAddonsCore.windowWidth
                ? n / a.colNum
                : 1366 < qodefAddonsCore.windowWidth
                ? n / a.colNum1440
                : 1024 < qodefAddonsCore.windowWidth
                ? n / a.colNum1366
                : 768 < qodefAddonsCore.windowWidth
                ? n / a.colNum1024
                : 680 < qodefAddonsCore.windowWidth
                ? n / a.colNum768
                : 480 < qodefAddonsCore.windowWidth
                ? n / a.colNum680
                : n / a.colNum480) * i),
          e.data("movement", d),
          e.data("moved", 0),
          t.width(r),
          t.css("transform", "translateX(0)"),
          qodefAddonsCore.body.trigger(
            "qi_addons_for_elementor_trigger_timeline_before_init_movement",
            [e, o]
          ),
          s.initMovement(e));
      },
      initMovement: function (o) {
        var t = o.data("movement"),
          n = o.find(".qodef-grid-inner"),
          i = o.width(),
          d = n.width(),
          e = o.find(".qodef-nav-prev"),
          r = o.find(".qodef-nav-next");
        e.off().on("click", function (e) {
          e.preventDefault();
          var e = parseFloat(o.data("moved"));
          e < -1 &&
            (n.css("transform", "translateX( " + (e = e + t) + "px)"),
            o.data("moved", e));
        }),
          r.off().on("click", function (e) {
            e.preventDefault();
            var e = parseFloat(o.data("moved"));
            -e + t < d - i + 1 &&
              (n.css("transform", "translateX( " + (e = e - t) + "px)"),
              o.data("moved", e));
          });
      },
    };
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_timeline.qodefTimeline =
      s),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_timeline.qodefAppear =
        qodefAddonsCore.qodefAppear);
  })(jQuery),
  (function () {
    "use strict";
    var e = "qi_addons_for_elementor_blog_list";
    (qodefAddonsCore.shortcodes[e] = {}),
      (qodefAddonsCore.shortcodes[e].qodefLightboxPopup =
        qodefAddonsCore.qodefLightboxPopup),
      (qodefAddonsCore.shortcodes[e].qodefMasonryLayout =
        qodefAddonsCore.qodefMasonryLayout),
      (qodefAddonsCore.shortcodes[e].qodefButton = qodefAddonsCore.qodefButton);
  })(jQuery),
  (function () {
    "use strict";
    var e = "qi_addons_for_elementor_blog_slider";
    (qodefAddonsCore.shortcodes[e] = {}),
      (qodefAddonsCore.shortcodes[e].qodefSwiper = qodefAddonsCore.qodefSwiper),
      (qodefAddonsCore.shortcodes[e].qodefLightboxPopup =
        qodefAddonsCore.qodefLightboxPopup),
      (qodefAddonsCore.shortcodes[e].qodefButton = qodefAddonsCore.qodefButton);
  })(jQuery),
  (function (d) {
    "use strict";
    d(document).ready(function () {
      n.init(), i.init(), r.init();
    });
    var n = {
        init: function () {
          (this.noticeHolder = d(".qodef-admin-notice")),
            this.noticeHolder.length && this.handleNotice();
        },
        handleNotice: function () {
          var e = this.noticeHolder.find(".qodef-statistics-button"),
            t = this.noticeHolder.find("#qi-addons-for-elementor-notice-nonce");
          e.length &&
            e.each(function () {
              var e = d(this),
                o = e.hasClass("qodef-statistics--allowed")
                  ? "allowed"
                  : "disallowed";
              e.on("click", function (e) {
                e.preventDefault(),
                  d.ajax({
                    type: "POST",
                    data: {
                      action: "qi_addons_for_elementor_notice",
                      notice_action: o,
                      nonce: t.val(),
                    },
                    url: ajaxurl,
                    success: function (e) {
                      "success" === d.parseJSON(e).status &&
                        n.noticeHolder.slideUp("fast");
                    },
                  });
              });
            });
        },
      },
      i = {
        init: function () {
          (this.noticeHolder = d(".qodef-admin-review-notice")),
            this.noticeHolder.length && this.handleReviewNotice();
        },
        handleReviewNotice: function () {
          var e = this.noticeHolder.find(".qodef-review-button"),
            n = this.noticeHolder.find(
              "#qi-addons-for-elementor-review-notice-nonce"
            );
          e.length &&
            e.each(function () {
              var o,
                t = d(this);
              t.on("click", function (e) {
                "review" !==
                  (o = t.hasClass("qodef-review--already-reviewed-action")
                    ? "already-reviewed"
                    : t.hasClass("qodef-review--maybe-later-action")
                    ? "maybe-later"
                    : "review") && e.preventDefault(),
                  d.ajax({
                    type: "POST",
                    data: {
                      action: "qi_addons_for_elementor_review_notice",
                      review_action: o,
                      nonce: n.val(),
                    },
                    url: ajaxurl,
                    success: function (e) {
                      "success" === d.parseJSON(e).status &&
                        i.noticeHolder.slideUp("fast");
                    },
                  });
              });
            });
        },
      },
      r = {
        init: function () {
          (this.deactivationLink = d("#the-list").find(
            '[data-slug="qi-addons-for-elementor"] span.deactivate a'
          )),
            (this.deactivationModal = d(
              "#qi-addons-for-elementor-deactivation-modal"
            )),
            this.deactivationLink.length &&
              this.deactivationModal.length &&
              this.initModal();
        },
        initModal: function () {
          this.deactivationLink.on("click", function (e) {
            e.preventDefault(), r.deactivationModal.fadeIn("fast");
          }),
            this.enableModalCloseFunctionality(),
            this.initSubmitFunctionality(),
            this.initSkipFunctionality();
        },
        initSubmitFunctionality: function () {
          var t = this.deactivationModal.find(
              ".qodef-deactivation-modal-button-submit"
            ),
            n = this.deactivationModal.find(
              ".qodef-deactivation-modal-button-skip"
            ),
            i = this.deactivationModal.find(
              "#qi-addons-for-elementor-deactivation-nonce"
            );
          t.length &&
            t.on("click", function (e) {
              e.preventDefault(),
                t.addClass("qodef--processing"),
                n.addClass("qodef--disabled");
              var o,
                e = r.deactivationModal
                  .find('input[name="reason_key"]:checked')
                  .val();
              switch (e) {
                case "found_a_better_plugin":
                  o = r.deactivationModal
                    .find('input[name="reason_found_a_better_plugin"]')
                    .val();
                  break;
                case "other":
                  o = r.deactivationModal
                    .find('input[name="reason_other"]')
                    .val();
                  break;
                default:
                  o = "";
              }
              d.ajax({
                type: "POST",
                data: {
                  action: "qi_addons_for_elementor_deactivation",
                  reason: e,
                  additionalInfo: o,
                  nonce: i.val(),
                },
                url: ajaxurl,
                success: function (e) {
                  d.parseJSON(e);
                  r.deactivatePlugin();
                },
              });
            });
        },
        initSkipFunctionality: function () {
          var o = this.deactivationModal.find(
              ".qodef-deactivation-modal-button-submit"
            ),
            t = this.deactivationModal.find(
              ".qodef-deactivation-modal-button-skip"
            );
          t.length &&
            t.on("click", function (e) {
              e.preventDefault(),
                t.addClass("qodef--processing"),
                o.addClass("qodef--disabled"),
                r.deactivatePlugin();
            });
        },
        deactivatePlugin: function () {
          location.href = this.deactivationLink.attr("href");
        },
        enableModalCloseFunctionality: function () {
          var e = this.deactivationModal.find(
            ".qodef-deactivation-modal-close"
          );
          e.length &&
            e.on("click", function (e) {
              e.preventDefault(), r.deactivationModal.fadeOut("fast");
            });
        },
      };
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button =
      {}),
      e(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.holder = e(".qodef-qi-woo-shortcode-add-to-cart")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (s) {
        qodefAddonsCore.shortcodes.qi_addons_for_elementor_button.qodefButton.init(
          s
        ),
          e("body").on("added_to_cart", function (e) {
            var o = s.find(".added_to_cart:not(.qodef-qi-button)");
            if (o.length) {
              for (
                var t = o.siblings(".add_to_cart_button"),
                  n = [
                    "button",
                    "product_type_simple",
                    "add_to_cart_button",
                    "ajax_add_to_cart",
                    "added",
                  ],
                  i = t.attr("class"),
                  d = t.find(".qodef-m-border"),
                  r = t.find(".qodef-m-inner-border"),
                  t = t.find(".qodef-m-icon"),
                  a = 0;
                a < n.length;
                a++
              )
                i = i.replace(n[a], "");
              o.addClass(i),
                o.wrapInner('<span class="qodef-m-text">'),
                d.length && ((d = d.clone()), o.append(d)),
                t.length && ((d = t.clone()), o.append(d)),
                r.length && ((t = r.clone()), o.append(t));
            }
          });
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button.changeViewCart =
      o;
  })(jQuery),
  (function () {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_category_list =
      {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_category_list.qodefMasonryLayout =
        qodefAddonsCore.qodefMasonryLayout),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_category_list.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function (e) {
    "use strict";
    var o = "qi_addons_for_elementor_product_list",
      t =
        ((qodefAddonsCore.shortcodes[o] = {}),
        (qodefAddonsCore.shortcodes[o].qodefLightboxPopup =
          qodefAddonsCore.qodefLightboxPopup),
        (qodefAddonsCore.shortcodes[o].qodefMasonryLayout =
          qodefAddonsCore.qodefMasonryLayout),
        e(document).ready(function () {
          t.init();
        }),
        {
          init: function () {
            (this.holder = e(".qodef-qi-woo-shortcode-product-list")),
              this.holder.length &&
                this.holder.each(function () {
                  t.initItem(e(this));
                });
          },
          initItem: function (e) {
            qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button.changeViewCart.initItem(
              e
            );
          },
        });
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_list.changeViewCart =
      t),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_list.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function (e) {
    "use strict";
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider = {}),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.qodefSwiper =
        qodefAddonsCore.qodefSwiper),
      e(document).ready(function () {
        o.init();
      });
    var o = {
      init: function () {
        (this.holder = e(".qodef-qi-woo-shortcode-product-slider")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        qodefAddonsCore.shortcodes.qi_addons_for_elementor_add_to_cart_button.changeViewCart.initItem(
          e
        );
      },
    };
    (qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.changeViewCart =
      o),
      (qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.qodefButton =
        qodefAddonsCore.qodefButton);
  })(jQuery),
  (function (e) {
    "use strict";
    e(document).ready(function () {
      o.init();
    });
    var o = {
      init: function () {
        (this.holder = e(".qodef-qi-interactive-banner")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        var o, t;
        e.hasClass("qodef-layout--from-bottom") &&
          ((t = e.find(".qodef-m-text-holder")),
          (o = e.find(".qodef-m-movement")),
          (t = t.outerHeight(!0)),
          o.css("transform", "translateY(" + t + "px) translateZ(0)"),
          setTimeout(function () {
            e.addClass("qodef--visible");
          }, 400));
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner.qodefInteractiveBannerFromBottom =
      o;
  })(jQuery),
  (function (e) {
    "use strict";
    e(document).ready(function () {
      o.init();
    });
    var o = {
      init: function () {
        (this.holder = e(".qodef-qi-interactive-banner")),
          this.holder.length &&
            this.holder.each(function () {
              o.initItem(e(this));
            });
      },
      initItem: function (e) {
        var o, t;
        e.hasClass("qodef-layout--revealing") &&
          ((t = e.find(".qodef-m-content-inner > .qodef-m-text")),
          (o = e.find(".qodef-m-button")),
          (t = t.outerHeight(!0)),
          o.css("transform", "translateY(-" + t + "px) translateZ(0)"),
          setTimeout(function () {
            e.addClass("qodef--visible");
          }, 400));
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_interactive_banner.qodefInteractiveBannerReveal =
      o;
  })(jQuery),
  (function (n) {
    "use strict";
    n(document).on(
      "qi_addons_for_elementor_trigger_timeline_before_init_movement",
      function (e, o, t) {
        o.hasClass("qodef-timeline-layout--horizontal-alternating") &&
          i.init(t);
      }
    );
    var i = {
      init: function (e) {
        var t = 0;
        e.length &&
          (e.each(function () {
            var e = n(this),
              o = e.find(".qodef-e-content-holder"),
              e = e.find(".qodef-e-top-holder"),
              o = o.height();
            o < e.height() && (o = e.height()), t < o && (t = o);
          }),
          e.each(function () {
            var e = n(this),
              o = e.find(".qodef-e-content-holder");
            e.find(".qodef-e-top-holder").height(t), o.height(t);
          }));
      },
    };
  })(jQuery),
  (function (r) {
    "use strict";
    r(document).on(
      "qi_addons_for_elementor_trigger_timeline_before_init_movement",
      function (e, o, t) {
        o.hasClass("qodef-timeline-layout--horizontal-standard") &&
          n.init(o, t);
      }
    );
    var n = {
      init: function (e, o) {
        var n = 0,
          i = 0,
          d = parseInt(o.find(".qodef-e-top-holder").css("paddingBottom")),
          e = e.find(".qodef-nav-prev, .qodef-nav-next");
        o.length &&
          (o.each(function () {
            var e = r(this),
              o = e.find(".qodef-e-content-holder").height(),
              e = e.find(".qodef-e-top-holder").height();
            n < e && (n = e), i < o && (i = o);
          }),
          o.each(function () {
            var e = r(this),
              o = e.find(".qodef-e-content-holder"),
              t = e.find(".qodef-e-top-holder"),
              e = e.find(".qodef-e-line-holder");
            t.height(n), o.height(i), e.css("top", n + d);
          }),
          e.css("top", n + d));
      },
    };
  })(jQuery),
  (function (d) {
    "use strict";
    d(document).ready(function () {
      e.init();
    });
    var e = {
      init: function () {
        (this.holder = d(".qodef-qi-woo-shortcode-product-slider")),
          this.holder.length &&
            this.holder.each(function () {
              e.initItem(d(this));
            });
      },
      initItem: function (e) {
        e.hasClass("qodef-item-layout--info-below-swap") &&
          (e = e.find(".qodef-e")).length &&
          e.each(function () {
            var e = d(this),
              o = e.find(".qodef-e-swap-holder"),
              t = o.find(".qodef-woo-product-price"),
              n = o.find(".qodef-e-to-swap .qodef-qi-button"),
              i = n.outerWidth(),
              n = n.outerHeight(),
              i = Math.ceil(Math.max(i, t.width())) + "px",
              n = Math.ceil(Math.max(n, t.height())) + "px";
            e.css({ "--qodef-max-width": i, "--qodef-max-height": n }),
              o.addClass("qodef--initialized");
          });
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_slider.qodefProductSliderSwap =
      e;
  })(jQuery),
  (function (d) {
    "use strict";
    d(document).ready(function () {
      e.init();
    });
    var e = {
      init: function () {
        (this.holder = d(".qodef-qi-woo-shortcode-product-list")),
          this.holder.length &&
            this.holder.each(function () {
              e.initItem(d(this));
            });
      },
      initItem: function (e) {
        e.hasClass("qodef-item-layout--info-below-swap") &&
          (e = e.find(".qodef-grid-item")).length &&
          e.each(function () {
            var e = d(this),
              o = e.find(".qodef-e-swap-holder"),
              t = o.find(".qodef-woo-product-price"),
              n = o.find(".qodef-e-to-swap .qodef-qi-button"),
              i = n.outerWidth(),
              n = n.outerHeight(),
              i = Math.ceil(Math.max(i, t.width())) + "px",
              n = Math.ceil(Math.max(n, t.height())) + "px";
            e.css({ "--qodef-max-width": i, "--qodef-max-height": n }),
              o.addClass("qodef--initialized");
          });
      },
    };
    qodefAddonsCore.shortcodes.qi_addons_for_elementor_product_list.qodefProductListSwap =
      e;
  })(jQuery);
