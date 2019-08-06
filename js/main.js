$(document).ready(function () {
    'use strict';

////// window scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 250) {
            $('header .bottom-nav').addClass('fixed-nav');
        } else {
            $('header .bottom-nav').removeClass('fixed-nav');
        }
    });

//    scroll top btn
    $(window).scroll(function () {
        if($(this).scrollTop() > 400) {
            $('#scroll-btn').fadeIn();
        } else {
            $('#scroll-btn').fadeOut();
        }
    });
    $('#scroll-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    
    
//// sidebar show
    $('header .bottom-nav .bottom-nav-left .sidebar-btn').click(function (e) {
        e.stopPropagation();
        $('.products-page .products-content .sidebar').toggleClass('show-sidebar');
    });
    
    
////// Main Slider
    var swiper = new Swiper('.main-section .main-slider .swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.main-section .main-slider .swiper-pagination',
      },
    });
    
//// description slider 
    var galleryThumbs = new Swiper('.desc-page .desc-content .desc-slider .gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
        direction: 'vertical',
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.desc-page .desc-content .desc-slider .gallery-top', {
      spaceBetween: 10,
//      navigation: {
//        nextEl: '.swiper-button-next',
//        prevEl: '.swiper-button-prev',
//      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    
//// Brands Slider
    var swiper = new Swiper('.brands .brands-slider .swiper-container', {
          slidesPerView: 12,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.brands .brands-slider .swiper-container .swiper-pagination',
            clickable: true
          },
          breakpoints: {
          991: {
              slidesPerView: 9,
            },
            767: {
              slidesPerView: 7,
            },
            500: {
              slidesPerView: 5,
            }
          }
    });

    
//// desc > sub slider
    var swiper = new Swiper('.desc-page .desc-content .sub-slider .swiper-container', {
          slidesPerView: 6,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.desc-page .desc-content .sub-slider .swiper-container .swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.desc-page .desc-content .sub-slider .swiper-container .swiper-button-next',
            prevEl: '.desc-page .desc-content .sub-slider .swiper-container .swiper-button-prev',
          },
          breakpoints: {
            1100: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 1,
            }
          }
    });
    
////// Beauty Slider
    var swiper = new Swiper('.beauty .beauty-right .swiper-container', {
      navigation: {
        nextEl: '.beauty .beauty-right .swiper-button-next',
        prevEl: '.beauty .beauty-right .swiper-button-prev',
      },
    });
    

///////// Cart Counter
    $('.add-to-cart .count .counter-increase').click(function () {
        var cartQty = $(this).parents('.count').find('.cart-quantity'),
            getVal = cartQty.val();
        getVal ++;
        cartQty.val(getVal);
    });
    $('.add-to-cart .count .counter-decrease').click(function () {
        var cartQty = $(this).parents('.count').find('.cart-quantity'),
            getVal = cartQty.val();
        if(getVal > 1) {
            getVal --;
        }
        cartQty.val(getVal);
    });


    
//// show search in mobile 
    $('header .bottom-nav .bottom-nav-left .mobile-search').click(function (e) {
        e.stopPropagation();
        $('header .bottom-nav .bottom-nav-left .search').fadeToggle();
    });
    
    
///// slide list
    $('.faq-page .faq-content .faq-slide .list .list-item .drop-link').click(function () {
        $(this).parent().siblings().find('.drop-content').slideUp().prev().removeClass('slide-active');
        $(this).toggleClass('slide-active');
        $(this).next('.drop-content').slideToggle();
    });
    
//// sidebar slide
    $('.products-page .products-content .sidebar .sidebar-list .list-item .drop').click(function () {
        $(this).parent().toggleClass('sidebar-active');
        $(this).next('.dropdown-list').slideToggle();
    });
    
    
//// switch between top category
    $('.category .category-links .list .list-item').click(function () {
        $(this).addClass('category-active').siblings().removeClass('category-active');
        $('.category .categories-section').fadeOut();
        $('#' + $(this).data('cat')).fadeIn();
    });
    
//// switch list and grid view
    $('.products-page .products-content .main-products .view-option i.list').click(function () {
        $('.products-page .products-content .main-products .product').addClass('col-12 list-view').removeClass('col-lg-3 col-sm-6 col-6');
    });
    $('.products-page .products-content .main-products .view-option i.grid').click(function () {
        $('.products-page .products-content .main-products .product').removeClass('col-12 list-view').addClass('col-lg-3 col-sm-6 col-6');
    });
    
//// switch personal and business form when checked
    $('.signup-page .signup-content .left .choose .signup-radio .radio label .signup-type').click(function () {
        if($(this).is(':checked')) {
            $('.signup-page .signup-content .signup-form').fadeOut();
            $('#' + $(this).data('type')).fadeIn();
        }
    });
    
//// show / hide credit card form
    $('.checkout-page .checkout-content .checkout-right .pay-method .payment .radio label input[name = payment]').change(function () {
        if($('.checkout-page .checkout-content .checkout-right .pay-method .payment .radio label .radio-credit').is(':checked')) {
            $('#' + $(this).data('credit')).fadeIn();
        } else {
            $('#credit-form').fadeOut();
        }
    });
    
    
///// image zoom
    $('.zoom').zoom();
    
    

    
    
//////// this code to know if there is div which make horizontal scroll    
//    var docWidth = document.documentElement.offsetWidth;
//
//    [].forEach.call(
//        document.querySelectorAll('*'),
//        function(el) {
//        if (el.offsetWidth > docWidth) {
//          console.log(el);
//        }
//        }
//    );
});