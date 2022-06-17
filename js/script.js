
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


  // swiper
  let swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 15,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 3000,
    breakpoints: {
      1440: {
        loop: true,
        slidesPerView:4,
        centeredSlides: true,
        spaceBetween: 40,
      },
      768: {
        loop: true,
        slidesPerView:3.5,
        centeredSlides: true,
        spaceBetween: 40,
      },
    }
  });

});
