/* global sal */
/* global Swiper */
/* global WOW */
/* global Parallax */
/* global Plyr */
/* global jQuery */
/* global i */

import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import Separator from "./Separator";
import BackToTop from "./BackToTop";
import MenuMobile from "./MenuMobile";

function Layout({ children, title }) {
    useEffect(() => {
        const $ = window.$;
        var eduJs = {
            _window: $(window),
            _document: $(document),
            _body: $("body"),
            _html: $("html"),
            sideNav: $(".rbt-search-dropdown"),
            i: function (e) {
                this.d();
                this.methods();
            },

            d: function (e) {
                // this._window = $(window);
                // this._document = $(document);
                // this._body = $("body");
                // this._html = $("html");
                // this.sideNav = $(".rbt-search-dropdown");
            },
            methods: function (e) {
                eduJs.salActive();
                eduJs.menuCurrentLink();
                eduJs.eduSwiperActive();
                eduJs.eduBgCardHover();
                eduJs.magnigyPopup();
                eduJs.counterUp();
                eduJs.pricingPlan();
                eduJs.courseView();
                eduJs.stickyHeader();
                eduJs.masonryActivation();
                eduJs._clickDoc();
                eduJs.wowActivation();
                eduJs.radialProgress();
                eduJs.marqueImage();
                eduJs.popupMobileMenu();
                eduJs.headerSticky();
                eduJs.qtyBtn();
                eduJs.checkoutPage();
                eduJs.offCanvas();
                eduJs.onePageNav();
                eduJs.transparentHeader();
                eduJs.categoryMenuHover();
                eduJs.cartSidenav();
                eduJs.filterClickButton();
                eduJs.selectPicker();
                eduJs.headerTopActivation();
                eduJs.magnificPopupActivation();
                eduJs.showMoreBtn();
                eduJs.sidebarVideoHidden();
                eduJs.courseActionBottom();
                eduJs.topbarExpend();
                eduJs.categoryOffcanvas();
                eduJs.autoslidertab();
                eduJs.moveAnimation();
                eduJs.contactForm();
                eduJs.player();
                eduJs.quizAns();
                eduJs.lessonAccor();
                // eduJs.unloadImage();
                eduJs.searchValue();
                eduJs.lessonToggle();
                eduJs.categoryMenuHover2();
            },

            autoslidertab: function (params) {
                function tabChange() {
                    var tabs = $(".nav-tabs.splash-nav-tabs > li");
                    var active = tabs.find("a.active");
                    var next = active.parent("li").next("li").find("a");
                    if (next.length === 0) {
                        next = tabs.first().find("a").on("click");
                    }
                    next.tab("show");
                }
                var tabCycle = setInterval(tabChange, 5000);
            },

            offCanvas: function () {
                if ($("#rbt-offcanvas-activation").length) {
                    $("#rbt-offcanvas-activation").on("click", function () {
                        $(".side-menu").addClass("side-menu-active");
                        $("body").addClass("offcanvas-menu-active");
                    });
                    $(".close_side_menu, .side-menu .side-nav .navbar-nav li a, #btn_sideNavClose").on("click", function () {
                        $(".side-menu").removeClass("side-menu-active");
                        $("body").removeClass("offcanvas-menu-active");
                    });
                }
            },

            cartSidenav: function () {
                if ($(".rbt-cart-sidenav-activation").length) {
                    $(".rbt-cart-sidenav-activation").on("click", function () {
                        $(".rbt-cart-side-menu").addClass("side-menu-active");
                        $("body").addClass("cart-sidenav-menu-active");
                    });
                    $(".minicart-close-button, .side-menu .side-nav .navbar-nav li a, #btn_sideNavClose, .close_side_menu").on("click", function () {
                        $(".rbt-cart-side-menu").removeClass("side-menu-active");
                        $("body").removeClass("cart-sidenav-menu-active");
                    });
                }
            },

            menuCurrentLink: function () {
                var currentPage = window.location.pathname.split("/"),
                    current = currentPage[currentPage.length - 1];
                $(".mainmenu li a, .dashboard-mainmenu li a, .for-right-content .rbt-course-main-content li a").each(function () {
                    var $this = $(this);
                    if ($this.attr("href") === current) {
                        $this.addClass("active");
                        $this.parents(".has-menu-child-item").addClass("menu-item-open");
                    }
                });
            },

            salActive: function () {
                sal({
                    threshold: 0.01,
                    once: true,
                });
            },

            eduParalax: function () {
                var scene = document.getElementById("scene");
                var parallaxInstance = new Parallax(scene);
            },

            eduSwiperActive: function () {
                var swiper = new Swiper(".banner-swiper-active", {
                    effect: "cards",
                    grabCursor: true,
                    pagination: {
                        el: ".rbt-swiper-pagination",
                        clickable: true,
                    },
                });

                var swiper = new Swiper(".team-slide-activation", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: ".rbt-swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                    breakpoints: {
                        575: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    },
                });

                var swiper = new Swiper(".team-slide-activation-4", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: ".rbt-swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                    breakpoints: {
                        575: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },

                        1200: {
                            slidesPerView: 4,
                        },
                    },
                });

                var swiper = new Swiper(".blog-post-gallery-activation", {
                    slidesPerView: 1,
                    autoHeight: true,
                    loop: true,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                });

                var swiper = new Swiper(".team-slide-activation-2", {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    loop: true,
                    pagination: {
                        el: ".rbt-swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    },
                });

                var swiper = new Swiper(".service-item-3-activation", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                        },
                        481: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    },
                });

                var swiper = new Swiper(".viral-banner-activation", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                });

                var swiper = new Swiper(".udemy-affilite-activation", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                });

                var swiperThumb = new Swiper(".rbtmySwiperThumb", {
                    spaceBetween: 10,
                    slidesPerView: 2,
                    freeMode: true,
                    watchSlidesProgress: true,
                });

                var swiper = new Swiper(".rbt-banner-activation", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    autoHeight: true,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                    thumbs: {
                        swiper: swiperThumb,
                    },
                });

                var swiper = new Swiper(".rbt-gif-banner-area", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                });

                var swiper = new Swiper(".testimonial-item-3-activation", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                    breakpoints: {
                        575: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        992: {
                            slidesPerView: 3,
                        },
                    },
                });

                var swiper = new Swiper(".testimonial-activation-1", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    pagination: {
                        el: ".rbt-swiper-pagination",
                        clickable: true,
                    },
                });

                var swiper = new Swiper(".modern-course-carousel-activation", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                });

                var swiper = new Swiper(".category-activation-one", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                    breakpoints: {
                        481: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    },
                });

                var swiper = new Swiper(".category-activation-two", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        draggable: true,
                        hide: true,
                        snapOnRelease: true,
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                        },
                        481: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },

                        1200: {
                            slidesPerView: 6,
                        },
                    },
                });

                var swiper = new Swiper(".category-activation-three", {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        draggable: true,
                        hide: true,
                        snapOnRelease: true,
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                        },
                        481: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    },
                });

                var swiper = new Swiper(".event-activation-1", {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: true,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        draggable: true,
                        hide: true,
                        snapOnRelease: true,
                    },
                    pagination: {
                        el: ".rbt-swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        575: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                    },
                });

                var swiper = new Swiper(".banner-splash-inner-layout-active", {
                    effect: "cards",
                    grabCursor: true,
                    clickable: true,
                    loop: true,
                    pagination: {
                        el: ".rbt-swiper-pagination",
                        clickable: true,
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".rbt-arrow-left",
                        prevEl: ".rbt-arrow-right",
                        clickable: true,
                    },
                });
            },

            eduBgCardHover: function () {
                $(".rbt-hover-active").mouseenter(function () {
                    var self = this;
                    setTimeout(function () {
                        $(".rbt-hover-active.active").removeClass("active");
                        $(self).addClass("active");
                    }, 0);
                });
            },

            magnigyPopup: function () {
                $(document).on("ready", function () {
                    $(".popup-video").magnificPopup({
                        disableOn: 700,
                        type: "iframe",
                        mainClass: "mfp-fade",
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false,
                    });
                });
            },

            counterUp: function () {
                var odo = $(".odometer");
                odo.each(function () {
                    $(".odometer").appear(function (e) {
                        var countNumber = $(this).attr("data-count");
                        $(this).html(countNumber);
                    });
                });
            },

            pricingPlan: function () {
                var mainPlan = $(".rbt-pricing-area");
                mainPlan.each(function () {
                    var yearlySelectBtn = $(".yearly-plan-btn"),
                        monthlySelectBtn = $(".monthly-plan-btn"),
                        monthlyPrice = $(".monthly-pricing"),
                        yearlyPrice = $(".yearly-pricing"),
                        buttonSlide = $(".pricing-checkbox");

                    $(monthlySelectBtn).on("click", function () {
                        buttonSlide.prop("checked", true);
                        $(this).addClass("active").parent(".nav-item").siblings().children().removeClass("active");
                        monthlyPrice.css("display", "block");
                        yearlyPrice.css("display", "none");
                    });

                    $(yearlySelectBtn).on("click", function () {
                        buttonSlide.prop("checked", false);
                        $(this).addClass("active").parent(".nav-item").siblings().children().removeClass("active");
                        monthlyPrice.css("display", "none");
                        yearlyPrice.css("display", "block");
                    });

                    $(buttonSlide).change(function () {
                        if ($('input[class="pricing-checkbox"]:checked').length > 0) {
                            monthlySelectBtn.addClass("active");
                            yearlySelectBtn.removeClass("active");
                            monthlyPrice.css("display", "block");
                            yearlyPrice.css("display", "none");
                        } else {
                            yearlySelectBtn.addClass("active");
                            monthlySelectBtn.removeClass("active");
                            monthlyPrice.css("display", "none");
                            yearlyPrice.css("display", "block");
                        }
                    });
                });
            },

            courseView: function () {
                var gridViewBtn = $(".rbt-grid-view"),
                    listViewBTn = $(".rbt-list-view");

                $(gridViewBtn).on("click", function () {
                    $(this).addClass("active").parent(".course-switch-item").siblings().children().removeClass("active");
                    $(".rbt-course-grid-column").addClass("active-grid-view");
                    $(".rbt-course-grid-column").removeClass("active-list-view");
                    $(".rbt-card").removeClass("card-list-2");
                });

                $(listViewBTn).on("click", function () {
                    $(this).addClass("active").parent(".course-switch-item").siblings().children().removeClass("active");
                    $(".rbt-course-grid-column").removeClass("active-grid-view");
                    $(".rbt-course-grid-column").addClass("active-list-view");
                    $(".rbt-card").addClass("card-list-2");
                });
            },

            stickyHeader: function () {
                // Header Transparent
                if ($("header").hasClass("header-transparent")) {
                    $("body").addClass("active-header-transparent");
                } else {
                    $("body").removeClass("active-header-transparent");
                }
            },

            masonryActivation: function name(params) {
                $(window).load(function () {
                    $(".masonary-wrapper-activation").imagesLoaded(function () {
                        // filter items on button click
                        $(".messonry-button").on("click", "button", function () {
                            var filterValue = $(this).attr("data-filter");
                            $(this).siblings(".is-checked").removeClass("is-checked");
                            $(this).addClass("is-checked");
                            $grid.isotope({
                                filter: filterValue,
                            });
                        });
                        // init Isotope
                        var $grid = $(".mesonry-list").isotope({
                            percentPosition: true,
                            transitionDuration: "0.7s",
                            layoutMode: "masonry",
                            masonry: {
                                columnWidth: ".resizer",
                            },
                        });
                    });
                });

                $(window).load(function () {
                    $(".splash-masonary-wrapper-activation").imagesLoaded(function () {
                        // filter items on button click
                        $(".messonry-button").on("click", "button", function () {
                            var filterValue = $(this).attr("data-filter");
                            $(this).siblings(".is-checked").removeClass("is-checked");
                            $(this).addClass("is-checked");
                            $grid.isotope({
                                filter: filterValue,
                            });
                        });
                        // init Isotope
                        var $grid = $(".splash-mesonry-list").isotope({
                            percentPosition: true,
                            transitionDuration: "0.7s",
                            layoutMode: "masonry",
                            masonry: {
                                columnWidth: ".resizer",
                            },
                        });
                    });
                });
            },

            _clickDoc: function () {
                var inputblur, inputFocus, openSideNav, closeSideNav;
                inputblur = function (e) {
                    if (!$(this).val()) {
                        $(this).parent(".form-group").removeClass("focused");
                    }
                };
                inputFocus = function (e) {
                    $(this).parents(".form-group").addClass("focused");
                };
                openSideNav = function (e) {
                    e.preventDefault();
                    eduJs.sideNav.addClass("active");
                    $(".search-trigger-active").addClass("open");
                    eduJs._html.addClass("side-nav-opened");
                };

                closeSideNav = function (e) {
                    if (!$('.rbt-search-dropdown, .rbt-search-dropdown *:not(".search-trigger-active, .search-trigger-active *")').is(e.target)) {
                        eduJs.sideNav.removeClass("active");
                        $(".search-trigger-active").removeClass("open");
                        eduJs._html.removeClass("side-nav-opened");
                    }
                };
                eduJs._document
                    .on("blur", "input,textarea,select", inputblur)
                    .on("focus", 'input:not([type="radio"]),input:not([type="checkbox"]),textarea,select', inputFocus)
                    .on("click", ".search-trigger-active", openSideNav)
                    .on("click", ".side-nav-opened", closeSideNav);
            },

            wowActivation: function () {
                new WOW().init();
            },

            radialProgress: function () {
                $(window).scroll(function () {
                    /* Check the location of each desired element */
                    $(".radial-progress").each(function (i) {
                        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                        var bottom_of_window = $(window).scrollTop() + $(window).height();
                        /* If the object is completely visible in the window, fade it in */
                        if (bottom_of_window > bottom_of_object) {
                            $(".radial-progress").easyPieChart({
                                lineWidth: 10,
                                scaleLength: 0,
                                rotate: 0,
                                trackColor: false,
                                lineCap: "round",
                                size: 180,
                                onStep: function (from, to, percent) {
                                    $(this.el).find(".percent").text(Math.round(percent));
                                },
                            });
                        }
                    });
                });
            },

            marqueImage: function () {
                $(".edumarque").each(function () {
                    var t = 0;
                    var i = 1;
                    var $this = $(this);
                    setInterval(function () {
                        t += i;
                        $this.css("background-position-x", -t + "px");
                    }, 10);
                });
            },

            popupMobileMenu: function (e) {
                $(".hamberger-button").on("click", function (e) {
                    $(".popup-mobile-menu").addClass("active");
                });

                $(".close-button").on("click", function (e) {
                    $(".popup-mobile-menu").removeClass("active");
                    $(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").siblings(".submenu, .rbt-megamenu").removeClass("active").slideUp("400");
                    $(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").removeClass("open");
                });

                $(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").on("click", function (e) {
                    e.preventDefault();
                    $(this).siblings(".submenu, .rbt-megamenu").toggleClass("active").slideToggle("400");
                    $(this).toggleClass("open");
                });

                $(".popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a").on("click", function (e) {
                    e.target === this &&
                        $(".popup-mobile-menu").removeClass("active") &&
                        $(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").siblings(".submenu, .rbt-megamenu").removeClass("active").slideUp("400") &&
                        $(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").removeClass("open");
                });
            },

            headerSticky: function () {
                $(window).on("scroll", function () {
                    if ($("body").hasClass("rbt-header-sticky")) {
                        var stickyPlaceHolder = $(".rbt-sticky-placeholder"),
                            headerConainer = $(".rbt-header-wrapper"),
                            headerConainerH = headerConainer.outerHeight(),
                            topHeaderH = $(".rbt-header-top").outerHeight() || 0,
                            targrtScroll = topHeaderH + 200;
                        if ($(window).scrollTop() > targrtScroll) {
                            headerConainer.addClass("rbt-sticky");
                            stickyPlaceHolder.height(headerConainerH);
                        } else {
                            headerConainer.removeClass("rbt-sticky");
                            stickyPlaceHolder.height(0);
                        }
                    }
                });
            },

            qtyBtn: function () {
                $(".pro-qty").prepend('<span class="dec qtybtn">-</span>');
                $(".pro-qty").append('<span class="inc qtybtn">+</span>');
                $(".qtybtn").on("click", function () {
                    var $button = $(this);
                    var oldValue = $button.parent().find("input").val();
                    if ($button.hasClass("inc")) {
                        var newVal = parseFloat(oldValue) + 1;
                    } else {
                        if (oldValue > 0) {
                            var newVal = parseFloat(oldValue) - 1;
                        } else {
                            newVal = 0;
                        }
                    }
                    $button.parent().find("input").val(newVal);
                });
            },

            checkoutPage: function () {
                $("[data-shipping]").on("click", function () {
                    if ($("[data-shipping]:checked").length > 0) {
                        $("#shipping-form").slideDown();
                    } else {
                        $("#shipping-form").slideUp();
                    }
                });
                $('[name="payment-method"]').on("click", function () {
                    var $value = $(this).attr("value");
                    $(".single-method p").slideUp();
                    $('[data-method="' + $value + '"]').slideDown();
                });
            },

            onePageNav: function () {
                $(".onepagenav").onePageNav({
                    currentClass: "current",
                    changeHash: false,
                    scrollSpeed: 500,
                    scrollThreshold: 0.2,
                    filter: "",
                    easing: "swing",
                });
            },

            transparentHeader: function () {
                if ($(".rbt-header").hasClass("rbt-transparent-header")) {
                    var mainHeader = $(".rbt-header").outerHeight();
                    $("body").addClass("rbt-header-transpernt-active");
                    $(".header-transperent-spacer").css("padding-top", mainHeader + "px");
                }
            },

            categoryMenuHover: function () {
                $(".vertical-nav-menu li.vertical-nav-item").mouseover(function () {
                    $(".rbt-vertical-inner").hide();
                    $(".vertical-nav-menu li.vertical-nav-item").removeClass("active");
                    $(this).addClass("active");
                    var selected_tab = $(this).find("a").attr("href");
                    $(selected_tab).stop().fadeIn();
                    return false;
                });
            },

            selectPicker: function () {
                $("select").selectpicker();
            },

            filterClickButton: function () {
                $(".discover-filter-activation").on("click", function () {
                    $(this).toggleClass("open");
                    $(".default-exp-expand").slideToggle("400");
                });
                $("#slider-range").slider({
                    range: true,
                    min: 10,
                    max: 500,
                    values: [100, 300],
                    slide: function (event, ui) {
                        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                    },
                });
                $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
            },

            headerTopActivation: function () {
                $(".bgsection-activation").on("click", function () {
                    $(this).parents(".rbt-header-campaign").addClass("deactive");
                });
            },

            magnificPopupActivation: function () {
                $(".parent-gallery-container").magnificPopup({
                    delegate: ".child-gallery-single", // child items selector, by clicking on it popup will open
                    type: "image",
                    mainClass: "mfp-with-zoom",
                    // other options
                    gallery: {
                        enabled: true,
                    },
                    zoom: {
                        enabled: true, // By default it's false, so don't forget to enable it
                        duration: 300, // duration of the effect, in milliseconds
                        easing: "ease-in-out", // CSS transition easing function
                        // The "opener" function should return the element from which popup will be zoomed in
                        // and to which popup will be scaled down
                        // By defailt it looks for an image tag:
                        opener: function (openerElement) {
                            // openerElement is the element on which popup was initialized, in this case its <a> tag
                            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                            return openerElement.is("img") ? openerElement : openerElement.find("img");
                        },
                    },
                });
            },

            showMoreBtn: function () {
                $.fn.hasShowMore = function () {
                    return this.each(function () {
                        $(this).toggleClass("active");
                        $(this).text("Show Less");
                        $(this).parent(".has-show-more").toggleClass("active");
                        if ($(this).parent(".has-show-more").hasClass("active")) {
                            $(this).text("Show Less");
                        } else {
                            $(this).text("Show More");
                        }
                    });
                };
                $(document).on("click", ".rbt-show-more-btn", function () {
                    $(this).hasShowMore();
                });
            },

            sidebarVideoHidden: function () {
                var scrollTop = $(".sidebar-video-hidden");
                $(window).scroll(function () {
                    // declare variable
                    var topPos = $(this).scrollTop();
                    // if user scrolls down - show scroll to top button
                    if (topPos > 250) {
                        $(scrollTop).css("display", "none");
                    } else {
                        $(scrollTop).css("display", "block");
                    }
                });
            },

            courseActionBottom: function () {
                var scrollBottom = $(".rbt-course-action-bottom");
                $(window).scroll(function () {
                    var topPos = $(this).scrollTop();
                    var targetPossition = $(document).height() * 0.66;
                    var filled = ($(document).scrollTop() + window.innerHeight) / $(document).height();
                    if (topPos > targetPossition && filled != 1) {
                        $(scrollBottom).addClass("rbt-course-action-active");
                    } else {
                        $(scrollBottom).removeClass("rbt-course-action-active");
                    }
                });
            },

            topbarExpend: function () {
                var windowWidth = $(window).width();
                if (windowWidth < 1199) {
                    $(".top-bar-expended").on("click", function () {
                        $(".top-expended-activation").toggleClass("active");
                        if ($(".top-expended-activation").hasClass("active")) {
                            $(".top-expended-activation")
                                .find(".top-expended-wrapper")
                                .css({ height: $(".top-expended-inner").outerHeight() + "px" });
                        } else {
                            $(".top-expended-activation").find(".top-expended-wrapper").css({ height: "32px" });
                        }
                    });
                    $(window).on("resize", function () {
                        if ($(".top-expended-activation").hasClass("active")) {
                            $(".top-expended-activation")
                                .find(".top-expended-inner")
                                .css({ height: $(".top-expended-inner").outerHeight() + "px" });
                        }
                    });
                }
            },

            categoryOffcanvas: function () {
                var windowWidth = $(window).width();
                if (windowWidth < 1200) {
                    $(".rbt-side-offcanvas-activation").on("click", function () {
                        $(".rbt-offcanvas-side-menu").addClass("active-offcanvas");
                    });
                    $(".rbt-close-offcanvas").on("click", function () {
                        $(".rbt-offcanvas-side-menu").removeClass("active-offcanvas");
                    });
                    $(".rbt-offcanvas-side-menu").on("click", function (e) {
                        e.target === this && $(".rbt-offcanvas-side-menu").removeClass("active-offcanvas");
                    });
                    $(".rbt-vertical-nav-list-wrapper .vertical-nav-item a").on("click", function (e) {
                        e.preventDefault();
                        $(this).siblings(".vartical-nav-content-menu-wrapper").toggleClass("active").slideToggle("400");
                        $(this).toggleClass("active");
                    });
                }
            },

            moveAnimation: function () {
                $(".scene").each(function () {
                    new Parallax($(this)[0]);
                });
            },

            contactForm: function () {
                $(".rainbow-dynamic-form").on("submit", function (e) {
                    e.preventDefault();
                    var _self = $(this);
                    var __selector = _self.closest("input,textarea");
                    _self.closest("div").find("input,textarea").removeAttr("style");
                    _self.find(".error-msg").remove();
                    _self.closest("div").find('button[type="submit"]').attr("disabled", "disabled");
                    var data = $(this).serialize();
                    $.ajax({
                        url: "mail.php",
                        type: "post",
                        dataType: "json",
                        data: data,
                        success: function (data) {
                            _self.closest("div").find('button[type="submit"]').removeAttr("disabled");
                            if (data.code == false) {
                                _self.closest("div").find('[name="' + data.field + '"]');
                                _self.find(".rainbow-btn").after('<div class="error-msg"><p>*' + data.err + "</p></div>");
                            } else {
                                $(".error-msg").hide();
                                $(".form-group").removeClass("focused");
                                _self.find(".rainbow-btn").after('<div class="success-msg"><p>' + data.success + "</p></div>");
                                _self.closest("div").find("input,textarea").val("");

                                setTimeout(function () {
                                    $(".success-msg").fadeOut("slow");
                                }, 5000);
                            }
                        },
                    });
                });
            },

            player: function () {
                var player = new Plyr(".rbtplayer", {
                    muted: false,
                    volume: 1,
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "fullscreen"],
                });
            },

            quizAns: function () {
                var currentQuestion = 1;
                showQuestion(currentQuestion);

                $("#next-btn").click(function () {
                    if (currentQuestion < $(".question").length) {
                        currentQuestion++;
                        showQuestion(currentQuestion);
                    }
                });

                $("#prev-btn").click(function () {
                    if (currentQuestion > 1) {
                        currentQuestion--;
                        showQuestion(currentQuestion);
                    }
                });

                function showQuestion(questionNumber) {
                    $(".question").hide();
                    $("#question-" + questionNumber).show();

                    if (questionNumber == 1) {
                        $("#prev-btn").prop("disabled", true);
                    } else {
                        $("#prev-btn").prop("disabled", false);
                    }

                    if (questionNumber == $(".question").length) {
                        $("#next-btn").hide();
                        $("#submit-btn").show();
                    } else {
                        $("#next-btn").show();
                        $("#submit-btn").hide();
                    }
                }
                $("#quiz-form").submit(function (event) {
                    event.preventDefault();

                    // Here, you can add your logic to grade the quiz and show the results to the user
                    //   alert("Quiz submitted!");
                });
            },

            lessonAccor: function () {
                // Get saved data from sessionStorage
                let selectedCollapse = sessionStorage.getItem("selectedCollapse");
                if (selectedCollapse != null) {
                    $(".accordion .collapse").removeClass("show");
                    $(".accordion-button").addClass("collapsed").attr("aria-expanded", false);
                    $(selectedCollapse).addClass("show");
                    $(selectedCollapse).siblings().find("button").removeClass("collapsed").attr("aria-expanded", true);
                }
                // To set, which one will be opened
                $(".accordion .accordion-button").on("click", function () {
                    let target = $(this).data("bs-target");
                    // Save data to sessionStorage
                    sessionStorage.setItem("selectedCollapse", target);
                });
            },

            // unloadImage: function name() {
            //     $("#createfileImage").click(function (e) {
            //         $("#createinputfile").click();
            //     });
            //     function rbtPreview() {
            //         const [file2] = createinputfile.files;
            //         if (file2) {
            //             createfileImage.src = URL.createObjectURL(file2);
            //         }
            //     }
            //     $("#createinputfile").change(function () {
            //         rbtPreview(this);
            //     });
            // },

            searchValue: function () {
                $(document).on("keyup", ".rbt-search-active", function () {
                    var value = $(this).val().toLowerCase();
                    $(".rbt-search-activation .accordion .accordion-item").filter(function () {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                    });
                });
            },

            lessonToggle: function () {
                $(".lesson-toggle-active").on("click", function () {
                    $(this).toggleClass("sidebar-hide");
                    $(".rbt-lesson-leftsidebar").toggleClass("sibebar-none");
                });
            },

            categoryMenuHover2: function () {
                $(".dropdown-parent-wrapper li.dropdown-parent-list").mouseover(function () {
                    $(".dropdown-child-wrapper").hide();
                    $(".dropdown-parent-wrapper li.dropdown-parent-list").removeClass("active");
                    $(this).addClass("active");
                    var selected_tab = $(this).find("a").attr("href");
                    $(selected_tab).stop().fadeIn();
                    return false;
                });
            },
        };
        eduJs.i();

        //headline animation
        jQuery(document).ready(function ($) {
            var animationDelay = 2500,
                barAnimationDelay = 3800,
                barWaiting = barAnimationDelay - 3000,
                lettersDelay = 50,
                typeLettersDelay = 150,
                selectionDuration = 500,
                typeAnimationDelay = selectionDuration + 800,
                revealDuration = 600,
                revealAnimationDelay = 1500;

            initHeadline();

            function initHeadline() {
                singleLetters($(".cd-headline.letters").find("b"));
                animateHeadline($(".cd-headline"));
            }

            function singleLetters($words) {
                $words.each(function () {
                    var word = $(this),
                        letters = word.text().split(""),
                        selected = word.hasClass("is-visible");
                    for (i in letters) {
                        if (word.parents(".rotate-2").length > 0) letters[i] = "<em>" + letters[i] + "</em>";
                        letters[i] = selected ? '<i class="in">' + letters[i] + "</i>" : "<i>" + letters[i] + "</i>";
                    }
                    var newLetters = letters.join("");
                    word.html(newLetters).css("opacity", 1);
                });
            }

            function animateHeadline($headlines) {
                var duration = animationDelay;
                $headlines.each(function () {
                    var headline = $(this);

                    if (headline.hasClass("loading-bar")) {
                        duration = barAnimationDelay;
                        setTimeout(function () {
                            headline.find(".cd-words-wrapper").addClass("is-loading");
                        }, barWaiting);
                    } else if (headline.hasClass("clip")) {
                        var spanWrapper = headline.find(".cd-words-wrapper"),
                            newWidth = spanWrapper.width() + 10;
                        spanWrapper.css("width", newWidth);
                    } else if (!headline.hasClass("type")) {
                        var words = headline.find(".cd-words-wrapper b"),
                            width = 0;
                        words.each(function () {
                            var wordWidth = $(this).width();
                            if (wordWidth > width) width = wordWidth;
                        });
                        headline.find(".cd-words-wrapper").css("width", width);
                    }

                    setTimeout(function () {
                        hideWord(headline.find(".is-visible").eq(0));
                    }, duration);
                });
            }

            function hideWord($word) {
                var nextWord = takeNext($word);

                if ($word.parents(".cd-headline").hasClass("type")) {
                    var parentSpan = $word.parent(".cd-words-wrapper");
                    parentSpan.addClass("selected").removeClass("waiting");
                    setTimeout(function () {
                        parentSpan.removeClass("selected");
                        $word.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out");
                    }, selectionDuration);
                    setTimeout(function () {
                        showWord(nextWord, typeLettersDelay);
                    }, typeAnimationDelay);
                } else if ($word.parents(".cd-headline").hasClass("letters")) {
                    var bool = $word.children("i").length >= nextWord.children("i").length ? true : false;
                    hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
                    showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
                } else if ($word.parents(".cd-headline").hasClass("clip")) {
                    $word.parents(".cd-words-wrapper").animate(
                        {
                            width: "2px",
                        },
                        revealDuration,
                        function () {
                            switchWord($word, nextWord);
                            showWord(nextWord);
                        }
                    );
                } else if ($word.parents(".cd-headline").hasClass("loading-bar")) {
                    $word.parents(".cd-words-wrapper").removeClass("is-loading");
                    switchWord($word, nextWord);
                    setTimeout(function () {
                        hideWord(nextWord);
                    }, barAnimationDelay);
                    setTimeout(function () {
                        $word.parents(".cd-words-wrapper").addClass("is-loading");
                    }, barWaiting);
                } else {
                    switchWord($word, nextWord);
                    setTimeout(function () {
                        hideWord(nextWord);
                    }, animationDelay);
                }
            }

            function showWord($word, $duration) {
                if ($word.parents(".cd-headline").hasClass("type")) {
                    showLetter($word.find("i").eq(0), $word, false, $duration);
                    $word.addClass("is-visible").removeClass("is-hidden");
                } else if ($word.parents(".cd-headline").hasClass("clip")) {
                    $word.parents(".cd-words-wrapper").animate(
                        {
                            width: $word.width() + 10,
                        },
                        revealDuration,
                        function () {
                            setTimeout(function () {
                                hideWord($word);
                            }, revealAnimationDelay);
                        }
                    );
                }
            }

            function hideLetter($letter, $word, $bool, $duration) {
                $letter.removeClass("in").addClass("out");

                if (!$letter.is(":last-child")) {
                    setTimeout(function () {
                        hideLetter($letter.next(), $word, $bool, $duration);
                    }, $duration);
                } else if ($bool) {
                    setTimeout(function () {
                        hideWord(takeNext($word));
                    }, animationDelay);
                }

                if ($letter.is(":last-child") && $("html").hasClass("no-csstransitions")) {
                    var nextWord = takeNext($word);
                    switchWord($word, nextWord);
                }
            }

            function showLetter($letter, $word, $bool, $duration) {
                $letter.addClass("in").removeClass("out");

                if (!$letter.is(":last-child")) {
                    setTimeout(function () {
                        showLetter($letter.next(), $word, $bool, $duration);
                    }, $duration);
                } else {
                    if ($word.parents(".cd-headline").hasClass("type")) {
                        setTimeout(function () {
                            $word.parents(".cd-words-wrapper").addClass("waiting");
                        }, 200);
                    }
                    if (!$bool) {
                        setTimeout(function () {
                            hideWord($word);
                        }, animationDelay);
                    }
                }
            }

            function takeNext($word) {
                return !$word.is(":last-child") ? $word.next() : $word.parent().children().eq(0);
            }

            function takePrev($word) {
                return !$word.is(":first-child") ? $word.prev() : $word.parent().children().last();
            }

            function switchWord($oldWord, $newWord) {
                $oldWord.removeClass("is-visible").addClass("is-hidden");
                $newWord.removeClass("is-hidden").addClass("is-visible");
            }
        });
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <>
            <Helmet>
                <title> {title} | English Academy</title>
            </Helmet>

            <Header />

            {/* header for mobile devices */}
            <MenuMobile />

            <div>{children}</div>

            <Separator />

            <Footer />

            <BackToTop />
        </>
    );
}
export default Layout;
