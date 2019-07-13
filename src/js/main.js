$(document).ready(function(){
    $('.toggle-menu').on('click',function(){
        $('.sidebar-menu').toggleClass('active')
    });
    $('.searchbox').on('click',function(){
      $('.sidebar-menu').slideToggle()
    });
    // $('.language').on('click',function(){
    //     $('.sidebar-menu').slideToggle()
    //   });
    var ListPageBottom = new MappingListener({
        selector: 'header nav .main-menu',
        mobileWrapper: 'header nav .sidebar-menu',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header nav .logo-home',
        desktopMethod: 'insertAfter',
        breakpoint: 1200,
    }).watch()
    var searchbox = new MappingListener({
        selector: 'header nav .searchbox',
        mobileWrapper: 'header nav .sidebar-menu',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header nav .main-menu',
        desktopMethod: 'insertAfter',
        breakpoint: 1200,
    }).watch()
//phan slider
    var swiper = new Swiper('.dandan .swiper-container', {
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is <= 640px
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30
            }
        },
    });
    $(".box-img").fancybox({
      maxWidth	: 900,
      maxHeight	: 600,
      fitToView	: false,
      width		: '90%',
      height		: '90%',
      autoSize	: false,
      closeClick	: false,
      openEffect	: 'none',
      closeEffect	: 'none',
      iframe: {
        scrolling : 'auto',
        preload   : true
      }
    });
    $(".section-menu-2").waypoint(
      function(direction){
        if(direction == "down"){
          $('header').addClass('sticky');
        }else{
          $('header').removeClass('sticky')
        }
      }, {offset: '100px'}
    );
})