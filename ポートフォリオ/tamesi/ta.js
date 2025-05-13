$(document).ready(function () {
  $(function () {
    function handleScroll() {
      $('.photo-a img, .photo-b img, .photo-c img').each(function () {
        const $img = $(this);
        const elemTop = $img.offset().top;
        const elemBottom = elemTop + $img.outerHeight();
        const scrollTop = $(window).scrollTop();
        const windowBottom = scrollTop + $(window).height();
  
        if (elemBottom - 20 > scrollTop && elemTop + 20 < windowBottom) {
          $img.addClass('photo-visible');
        } else {
          $img.removeClass('photo-visible');
        }
      });
    }
  
    $(window).on('scroll load resize', handleScroll);
  
    $('.photo-block .photo').hover(
      function () {
        const $text = $(this).find('.text');
         ($(this).hasClass('photo-a ,photo-b ,photo-c')) ;{
          $text.stop().fadeTo(400, 1);
        }
      },
      function () {
        $(this).find('.text').stop().fadeTo(400, 0);
      }
    );
  });
  
});
