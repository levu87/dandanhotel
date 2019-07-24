$(document).ready(function(){
    //search
    $('.searchbox').on('click',function(){
      $('.sidebar-menu').slideToggle()
    });

    ///////
  

    var searchbox = new MappingListener({
      selector: 'header nav .searchbox',
      mobileWrapper: 'header nav .sidebar-menu',
      mobileMethod: 'appendTo',
      desktopWrapper: 'header nav .main-menu',
      desktopMethod: 'insertAfter',
      breakpoint: 1025,
  }).watch()
///click outside
// const $menu = $('.sidebar-menu');
// const $button = $('.toggle-button');

// $(document).mouseup(function (e) {
//    if (!$menu.is(e.target) // if the target of the click isn't the container...
//    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
//    {
//      $menu.removeClass('active');
//      $button.removeClass('active');
//   }
//  });
//  $('.toggle-button').on('click', function(){
//   $menu.toggleClass('active');
//   $(this).toggleClass('active');
// });
////end click outside
    
    $('.toggle-button').on('click',function(){
        $('.sidebar-menu').toggleClass('active');
          $(this).toggleClass('active');
    //     // if($('.mobileicon').hasClass('.fas.fa-bars')){
    //     //   $('.mobileicon').addClass('.fas.fa.times')
    //     //   $('.mobileicon').removeClass('.fas.fa.times')
    //     // }else{
    //     //   $('.mobileicon').addClass('.fas.fa.bars')
    //     //   $('.mobileicon').removeClass('.fas.fa.times')
    //     // }
    });
    var ListPageBottom = new MappingListener({
        selector: 'header nav .main-menu',
        mobileWrapper: 'header nav .sidebar-menu',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header nav .logo-home',
        desktopMethod: 'insertAfter',
        breakpoint: 1025,
    }).watch()
    //
    //1200 search
    $('#button2').on('click',function(){
      $('input[type="text"]').slideToggle()
    });
    
//phan slider
    var swiper = new Swiper('.dandan-home .swiper-container', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
          el: '.dandan-home .swiper-pagination',
			    clickable: true,
          type: 'bullets'
        },
    });
//phan slider product
    //phan slider
    var swiper = new Swiper('.product-slider .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev'
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
  $('#button').on('click',function(){
    $('html, body').animate({
      scrollTop: 0
    }, 450)
  })
    // $(".box-img").fancybox({
    //   maxWidth	: 900,
    //   maxHeight	: 600,
    //   fitToView	: false,
    //   width		: '90%',
    //   height		: '90%',
    //   autoSize	: false,
    //   closeClick	: false,
    //   openEffect	: 'none',
    //   closeEffect	: 'none',
    //   iframe: {
    //     scrolling : 'auto',
    //     preload   : true
    //   }
    // });
})
$(document).on('scroll', function(){
  let height = $('.dandan-home').height() + $('.dandan-home').offset().top
  if($(window).scrollTop() > height){
    $('header').addClass('active')
    $('#button').addClass('show')
  }
  else{
    $('header').removeClass('active')
    $('#button').removeClass('show')
  }
});