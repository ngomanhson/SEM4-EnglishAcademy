/* global sal */
/* global Swiper */
/* global WOW */
/* global Parallax */
/* global Plyr */

import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

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
    }, []);
    return (
        <>
            <Helmet>
                <title> {title} | English Academy</title>
            </Helmet>
            <Header />

            {/* header for mobile devices */}
            <div class="popup-mobile-menu">
                <div class="inner-wrapper">
                    <div class="inner-top">
                        <div class="content">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo.png" alt="Education Logo Images" />
                                </a>
                            </div>
                            <div class="rbt-btn-close">
                                <button class="close-button rbt-round-btn">
                                    <i class="feather-x"></i>
                                </button>
                            </div>
                        </div>
                        <p class="description">Histudy is a education website template. You can customize all.</p>
                        <ul class="navbar-top-left rbt-information-list justify-content-start">
                            <li>
                                <a href="mailto:hello@example.com">
                                    <i class="feather-mail"></i>example@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="feather-phone"></i>(302) 555-0107
                                </a>
                            </li>
                        </ul>
                    </div>

                    <nav class="mainmenu-nav">
                        <ul class="mainmenu">
                            <li class="with-megamenu has-menu-child-item position-static">
                                <a href="#">
                                    Home <i class="feather-chevron-down"></i>
                                </a>
                                <div class="rbt-megamenu menu-skin-dark">
                                    <div class="wrapper">
                                        <div class="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="01-main-demo.html">
                                                                <img src="assets/images/splash/demo/h1.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="01-main-demo.html">
                                                                    Home Demo{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="12-marketplace.html">
                                                                <img src="assets/images/splash/demo/h12.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="12-marketplace.html">
                                                                    Marketplace{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="04-kindergarten.html">
                                                                <img src="assets/images/splash/demo/h4.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="04-kindergarten.html">
                                                                    kindergarten{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="13-university-classic.html">
                                                                <img src="assets/images/splash/demo/h13.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="13-university-classic.html">
                                                                    University Classic{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="14-home-elegant.html">
                                                                <img src="assets/images/splash/demo/h14.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="14-home-elegant.html">
                                                                    Home Elegant{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="09-gym-coaching.html">
                                                                <img src="assets/images/splash/demo/h9.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="09-gym-coaching.html">
                                                                    Gym Coaching{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="03-online-school.html">
                                                                <img src="assets/images/splash/demo/h3.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="03-online-school.html">
                                                                    Online School{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="06-university-status.html">
                                                                <img src="assets/images/splash/demo/h6.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="06-university-status.html">
                                                                    University Status{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="15-home-technology.html">
                                                                <img src="assets/images/splash/demo/h15.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="15-home-technology.html">
                                                                    Home Technology{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="07-instructor-portfolio.html">
                                                                <img src="assets/images/splash/demo/h7.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="07-instructor-portfolio.html">
                                                                    Instructor Portfolio{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="08-language-academy.html">
                                                                <img src="assets/images/splash/demo/h8.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="08-language-academy.html">
                                                                    Language Academy{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="11-single-course.html">
                                                                <img src="assets/images/splash/demo/h11.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="11-single-course.html">
                                                                    Single Course{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="10-online-course.html">
                                                                <img src="assets/images/splash/demo/h10.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="10-online-course.html">
                                                                    Online Course{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="05-classic-lms.html">
                                                                <img src="assets/images/splash/demo/h5.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="05-classic-lms.html">
                                                                    Classic Lms{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="02-course-school.html">
                                                                <img src="assets/images/splash/demo/h2.jpg" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="02-course-school.html">
                                                                    Course School{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="#">
                                                                <img src="assets/images/splash/demo/coming-soon-1.png" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="#">
                                                                    Coming Soon{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="#">
                                                                <img src="assets/images/splash/demo/coming-soon-2.png" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="#">
                                                                    Coming Soon 2{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                                                <div class="demo-single">
                                                    <div class="inner">
                                                        <div class="thumbnail">
                                                            <a href="#">
                                                                <img src="assets/images/splash/demo/coming-soon-3.png" alt="Demo Images" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">
                                                                <a href="#">
                                                                    Coming Soon 3{" "}
                                                                    <span class="btn-icon">
                                                                        <i class="feather-arrow-right"></i>
                                                                    </span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="load-demo-btn text-center">
                                            <a class="rbt-btn-link color-white" href="#">
                                                Scroll to view more
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="with-megamenu has-menu-child-item">
                                <a href="#">
                                    Courses <i class="feather-chevron-down"></i>
                                </a>
                                <div class="rbt-megamenu grid-item-2">
                                    <div class="wrapper">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mega-top-banner">
                                                    <div class="content">
                                                        <h4 class="title">Developer hub</h4>
                                                        <p class="description">Start building fast, with code samples, key resources and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row row--15">
                                            <div class="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                                                <h3 class="rbt-short-title">Course Layout</h3>
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="course-filter-one-toggle.html">Filter One Toggle</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-filter-one-open.html">Filter One Open</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-filter-two-toggle.html">Filter Two Toggle</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-filter-two-open.html">Filter Two Open</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-with-tab.html">Course With Tab</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-with-tab-two.html">Course With Tab Two</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-card-2.html">Course Card Two</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                                                <h3 class="rbt-short-title">Course Layout</h3>
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="course-card-3.html">Course Card Three</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-masonry.html">Course Masonry</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-with-sidebar.html">Course With Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-details.html">Course Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="course-details-2.html">Course Details Two</a>
                                                    </li>
                                                    <li>
                                                        <a href="lesson.html">
                                                            Course Lesson <span class="rbt-badge-card">New</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="create-course.html">
                                                            Create Course <span class="rbt-badge-card">New</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <ul class="nav-quick-access">
                                                    <li>
                                                        <a href="#">
                                                            <i class="feather-folder-minus"></i> Quick Start Guide
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="feather-folder-minus"></i> For Open Source
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="feather-folder-minus"></i> API Status
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="feather-folder-minus"></i> Support
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="has-dropdown has-menu-child-item">
                                <a href="#">
                                    Dashboard
                                    <i class="feather-chevron-down"></i>
                                </a>
                                <ul class="submenu">
                                    <li class="has-dropdown">
                                        <a href="#">Instructor Dashboard</a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="instructor-dashboard.html">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="instructor-profile.html">Profile</a>
                                            </li>
                                            <li>
                                                <a href="instructor-enrolled-courses.html">Enrolled Courses</a>
                                            </li>
                                            <li>
                                                <a href="instructor-wishlist.html">Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="instructor-reviews.html">Reviews</a>
                                            </li>
                                            <li>
                                                <a href="instructor-my-quiz-attempts.html">My Quiz Attempts</a>
                                            </li>
                                            <li>
                                                <a href="instructor-order-history.html">Order History</a>
                                            </li>
                                            <li>
                                                <a href="instructor-course.html">My Course</a>
                                            </li>
                                            <li>
                                                <a href="instructor-announcements.html">Announcements</a>
                                            </li>
                                            <li>
                                                <a href="instructor-quiz-attempts.html">Quiz Attempts</a>
                                            </li>
                                            <li>
                                                <a href="instructor-assignments.html">Assignments</a>
                                            </li>
                                            <li>
                                                <a href="instructor-settings.html">Settings</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="has-dropdown">
                                        <a href="#">Student Dashboard</a>
                                        <ul class="submenu">
                                            <li>
                                                <a href="student-dashboard.html">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="student-profile.html">Profile</a>
                                            </li>
                                            <li>
                                                <a href="student-enrolled-courses.html">Enrolled Courses</a>
                                            </li>
                                            <li>
                                                <a href="student-wishlist.html">Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="student-reviews.html">Reviews</a>
                                            </li>
                                            <li>
                                                <a href="student-my-quiz-attempts.html">My Quiz Attempts</a>
                                            </li>
                                            <li>
                                                <a href="student-order-history.html">Order History</a>
                                            </li>
                                            <li>
                                                <a href="student-settings.html">Settings</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="with-megamenu has-menu-child-item position-static">
                                <a href="#">
                                    Pages <i class="feather-chevron-down"></i>
                                </a>
                                <div class="rbt-megamenu grid-item-4">
                                    <div class="wrapper">
                                        <div class="row row--15">
                                            <div class="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                                <h3 class="rbt-short-title">Get Started</h3>
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="about-us-01.html">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="about-us-02.html">About Us 02</a>
                                                    </li>
                                                    <li>
                                                        <a href="event-grid.html">Event Grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="event-list.html">Event List</a>
                                                    </li>
                                                    <li>
                                                        <a href="event-sidebar.html">Event Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="event-details.html">Event Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="academy-gallery.html">Academy Gallery</a>
                                                    </li>
                                                    <li>
                                                        <a href="admission-guide.html">Admission Guide</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                                <h3 class="rbt-short-title">Get Started</h3>
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="profile.html">Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="become-a-teacher.html">Become a Teacher</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor.html">Instructor</a>
                                                    </li>
                                                    <li>
                                                        <a href="faqs.html">FAQS</a>
                                                    </li>
                                                    <li>
                                                        <a href="privacy-policy.html">Privacy Policy</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404 Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="maintenance.html">Maintenance</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                                <h3 class="rbt-short-title">Shop Pages</h3>
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="shop.html">
                                                            Shop <span class="rbt-badge-card">Sale Anything</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product.html">Single Product</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">Cart Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">Wishlist Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="my-account.html">My Acount</a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html">Login & Register</a>
                                                    </li>
                                                    <li>
                                                        <a href="subscription.html">Subscription</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                                <div class="mega-category-item">
                                                    <div class="nav-category-item">
                                                        <div class="thumbnail">
                                                            <div class="image">
                                                                <img src="assets/images/course/category-2.png" alt="Course images" />
                                                            </div>
                                                            <a href="course-filter-one-toggle.html">
                                                                <span>Online Education</span>
                                                                <i class="feather-chevron-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="nav-category-item">
                                                        <div class="thumbnail">
                                                            <div class="image">
                                                                <img src="assets/images/course/category-1.png" alt="Course images" />
                                                            </div>
                                                            <a href="course-filter-one-toggle.html">
                                                                <span>Language Club</span>
                                                                <i class="feather-chevron-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="nav-category-item">
                                                        <div class="thumbnail">
                                                            <div class="image">
                                                                <img src="assets/images/course/category-4.png" alt="Course images" />
                                                            </div>
                                                            <a href="course-filter-one-toggle.html">
                                                                <span>University Status</span>
                                                                <i class="feather-chevron-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="nav-category-item">
                                                        <div class="thumbnail">
                                                            <a href="course-filter-one-toggle.html">
                                                                <span>Course School</span>
                                                                <i class="feather-chevron-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="nav-category-item">
                                                        <div class="thumbnail">
                                                            <div class="image">
                                                                <img src="assets/images/course/category-9.png" alt="Course images" />
                                                            </div>
                                                            <a href="course-filter-one-toggle.html">
                                                                <span>Academy</span>
                                                                <i class="feather-chevron-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="with-megamenu has-menu-child-item position-static">
                                <a href="#">
                                    Elements <i class="feather-chevron-down"></i>
                                </a>
                                <div class="rbt-megamenu grid-item-3">
                                    <div class="wrapper">
                                        <div class="row row--15 single-dropdown-menu-presentation">
                                            <div class="col-lg-4 col-xxl-4 single-mega-item">
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="style-guide.html">
                                                            Style Guide <span class="rbt-badge-card">Hot</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="accordion.html">Accordion</a>
                                                    </li>
                                                    <li>
                                                        <a href="advancetab.html">Advance Tab</a>
                                                    </li>
                                                    <li>
                                                        <a href="brand.html">Brand</a>
                                                    </li>
                                                    <li>
                                                        <a href="button.html">Button</a>
                                                    </li>
                                                    <li>
                                                        <a href="badge.html">Badge</a>
                                                    </li>
                                                    <li>
                                                        <a href="card.html">Card</a>
                                                    </li>
                                                    <li>
                                                        <a href="call-to-action.html">Call To Action</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="col-lg-4 col-xxl-4 single-mega-item">
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="counterup.html">Counter</a>
                                                    </li>
                                                    <li>
                                                        <a href="category.html">Categories</a>
                                                    </li>
                                                    <li>
                                                        <a href="header.html">Header Style</a>
                                                    </li>
                                                    <li>
                                                        <a href="newsletter.html">Newsletter</a>
                                                    </li>
                                                    <li>
                                                        <a href="team.html">Team</a>
                                                    </li>
                                                    <li>
                                                        <a href="social.html">Social</a>
                                                    </li>
                                                    <li>
                                                        <a href="list-style.html">List Style</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery.html">Gallery</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="col-lg-4 col-xxl-4 single-mega-item">
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="pricing.html">Pricing</a>
                                                    </li>
                                                    <li>
                                                        <a href="progressbar.html">Progressbar</a>
                                                    </li>
                                                    <li>
                                                        <a href="testimonial.html">Testimonial</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Service</a>
                                                    </li>
                                                    <li>
                                                        <a href="split.html">Split Area</a>
                                                    </li>
                                                    <li>
                                                        <a href="search.html">Search Style</a>
                                                    </li>
                                                    <li>
                                                        <a href="instagram.html">Instagram Style</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">& More Coming</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="btn-wrapper">
                                                    <a class="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none" href="#">
                                                        <span class="icon-reverse-wrapper">
                                                            <span class="btn-text">Visit Histudy Template</span>
                                                            <span class="btn-icon">
                                                                <i class="feather-arrow-right"></i>
                                                            </span>
                                                            <span class="btn-icon">
                                                                <i class="feather-arrow-right"></i>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="with-megamenu has-menu-child-item position-static">
                                <a href="#">
                                    Blog <i class="feather-chevron-down"></i>
                                </a>
                                <div class="rbt-megamenu grid-item-3">
                                    <div class="wrapper">
                                        <div class="row row--15">
                                            <div class="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                                                <h3 class="rbt-short-title">Blog Styles</h3>
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="blog-list.html">Blog List</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog.html">Blog Grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-minimal.html">Blog Grid Minimal</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-with-sidebar.html">Blog With Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">Blog Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-format-standard.html">Post Format Standard</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-format-gallery.html">Post Format Gallery</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                                                <h3 class="rbt-short-title">Get Started</h3>
                                                <ul class="mega-menu-item">
                                                    <li>
                                                        <a href="post-format-quote.html">Post Format Quote</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-format-audio.html">Post Format Audio</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-format-video.html">Post Format Video</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Media Under Title <span class="rbt-badge-card">Coming</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Sticky Sidebar <span class="rbt-badge-card">Coming</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Auto Masonry <span class="rbt-badge-card">Coming</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Meta Overlaid <span class="rbt-badge-card">Coming</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                                                <div class="rbt-ads-wrapper">
                                                    <a class="d-block" href="#">
                                                        <img src="assets/images/service/mobile-cat.jpg" alt="Education Images" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div class="mobile-menu-bottom">
                        <div class="rbt-btn-wrapper mb--20">
                            <a class="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center" href="#">
                                <span>Enroll Now</span>
                            </a>
                        </div>

                        <div class="social-share-wrapper">
                            <span class="rbt-short-title d-block">Find With Us</span>
                            <ul class="social-icon social-default transparent-with-border justify-content-start mt--20">
                                <li>
                                    <a href="https://www.facebook.com/">
                                        <i class="feather-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com">
                                        <i class="feather-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/">
                                        <i class="feather-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkdin.com/">
                                        <i class="feather-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>{children}</div>
            <Footer />
        </>
    );
}
export default Layout;
