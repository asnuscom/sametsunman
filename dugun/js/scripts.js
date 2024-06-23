
$(document).ready(function () {
    //Coundown
    $('.countdown').downCount({
        date: '07/15/2024 13:00:00',
        offset: +3
    });


    $("#gift").on('click', function () {
        $(".custom-model-main").addClass('model-open');
        $(".content-gift").addClass('show');
    });
    $("#donate").on('click', function () {
        $(".custom-model-main").addClass('model-open');
        $(".content-donate").addClass('show');
    });
    $(".close-btn, .bg-overlay").click(function () {
        $(".custom-model-main").removeClass('model-open');
        $(".content-gift").removeClass('show');
        $(".content-donate").removeClass('show');
    });


    // Scroll to ID  
    function scrollToId(str) {
        $(str + '[href*="#"]').on('click', function (e) {
            e.preventDefault()

            $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top,
                },
                500,
                'linear'
            )
        })
    }

    //Scroll to ID init
    scrollToId('.header__menu-link');
    scrollToId('.rvsp-btn');

    //To top

    (function scrollTop() {

        const btn = $('.to-top');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.fadeIn();
            } else {
                btn.fadeOut();
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });

    }());

    //Mobile menu
    (function mobileMenu() {

        const openBtn = $('.mobile-menu-btn'),
            closeBtn = $('.mobile-menu__close'),
            menu = $('.mobile-menu'),
            navList = $('.mobile-navigation__list');


        openBtn.on('click', function (e) {

            e.preventDefault();
            menu.fadeIn(300);

        });

        closeBtn.on('click', function (e) {

            e.preventDefault();
            menu.fadeOut(300);

        });

        $(document).keypress(function (e) {

            if (e.which == 27)
                menu.fadeOut(300)

        });

        navList.on('click', function (e) {

            let target = e.target;

            if (target.tagName === 'A') {
                menu.fadeOut(300);
                setTimeout(scrollToId('.mobile-navigation__link'), 500);
            }
        });
    }());

    //Dropdown
    (function selectDropdown() {
        const openBtn = $('.select--clicked');
        const dropdown = $('.select-dropdown');
        const label = $('.select__label');
        const span = $('.dropdown__select');

        span.on('click', function () {
            if ($(window).width() <= 1000) {
                label.animate({
                    position: "absolute",
                    top: "-14px",
                    fontSize: "12px",
                    lightHeight: "16px",
                    opacity: "0.7"
                });
            } else {
                label.animate({
                    position: "absolute",
                    top: "16px",
                    fontSize: "12px",
                    lightHeight: "16px",
                    opacity: "0.7"
                });
            }

            $('.selected__item').html($(this).text());
        });

        openBtn.on('click', function () {
            dropdown.slideToggle('200');
        });

    }());

    $('body').bootstrapMaterialDesign();

    //Story slider
    $('.story__slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev arrow-left--colored"></button>',
        nextArrow: '<button type="button" class="slick-next arrow-right--colored"></button>'
    });

    //Fancybox
    // $(".fancy").fancybox({
    //   'hideOnContentClick': true
    //   });

    //Photo slider
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 32,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 32,
            },
            1450: {
                slidesPerView: 6,
                spaceBetween: 32,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        renderFraction: function (currentClass, totalClass) {
            return `<span class="${0 + currentClass} "></span>' +
                ' / ' +
                '<span class="${0 + totalClass} "></span>`;
        }
    });

    $('.swiper-slide-active').siblings('.swiper-slide').css('margin-right', '32px');

    //Init map
    (function initeMap() {

        let ceremonyMap,
            receptionMap,
            inviteMap;

        $('.styleswitch').on('click', function () {
            $('.map').empty();
            init();
        });

        ymaps.ready(init);

        function init() {

            //Switch map icon
            let defaultIcon = 'img/map/icon--' + $('head link[id="skins"]').attr('data-color') + '.svg';
            console.log(defaultIcon);

            //Ceremony address map
            ceremonyMap = new ymaps.Map('address__map--ceremony', {
                center: [41.022063, 28.6876616],
                zoom: 17,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            })

            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

                myPlacemark = new ymaps.Placemark(ceremonyMap.getCenter(), {
                    hintContent: 'Mark',
                    balloonContent: 'Mark'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: defaultIcon,
                    iconImageSize: [63, 83],
                })

            ceremonyMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';

            ceremonyMap.geoObjects
                .add(myPlacemark);

            //END ceremony address map

            //Invite address map
            inviteMap = new ymaps.Map('address__map--invite', {
                center: [41.019967, 28.704413],
                zoom: 17,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });

            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

                myPlacemark = new ymaps.Placemark(inviteMap.getCenter(), {
                    hintContent: 'Mark',
                    balloonContent: 'Mark'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: defaultIcon,
                    iconImageSize: [63, 83],
                }),

                inviteMap.panes.get('ground').getElement().style.filter = 'grayscale(80%)';

            inviteMap.geoObjects
                .add(myPlacemark);

            //END invite address map


            //Reception address map
            receptionMap = new ymaps.Map('address__map--reception', {
                center: [41.1075556, 28.8716217],
                zoom: 17,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });

            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

                myPlacemark = new ymaps.Placemark(receptionMap.getCenter(), {
                    hintContent: 'Mark',
                    balloonContent: 'Mark'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: defaultIcon,
                    iconImageSize: [63, 83],
                }),

                receptionMap.panes.get('ground').getElement().style.filter = 'grayscale(80%)';

            receptionMap.geoObjects
                .add(myPlacemark);

            //END reception address map
        }

    }());


});