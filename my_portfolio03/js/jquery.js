//////plugin code from here//////
(function($){  
$.fn.textyleF = function(options){
  var target = this;
  var targetTxt = target.contents();
  var defaults = {
    duration : 1000,
    delay : 150,
    easing : 'ease',
    callback : null
  };
  var setting = $.extend(defaults, options);
  //split txt & wrap txt by span
  targetTxt.each(function(){
    var texts = $(this);
    if(this.nodeType === 3){
      mkspn(texts);
    }
  });
  function mkspn(texts){
    texts.replaceWith(texts.text().replace(/(\S)/g,'<span>$1</span>'));
  }
  //txt animation
  return this.each(function(i){
    var child = target.children('span');
    target.css('opacity',1);
    child.css('display','inline-block');
    child.each(function(i){
      $(this).delay(setting.delay*i)
        .queue(function(next) {
        $(this).css({
          transform : 'rotateY(0deg) rotateX(0deg)',
          opacity : 1,
          transitionDuration : setting.duration + 'ms',
          transitionTimingFunction : setting.easing
        })
        next();
      });
      if(typeof setting.callback === 'function'){
        $(this).on('transitionend', function() {
          setting.callback.call(this);
        });
      }
    });
  });
};
}( jQuery ));
//////plugin code to here//////


$(window).on('load',function(){
//////code to call//////
 $('.ex1').textyleF();
 $('.ex2').textyleF({
     duration : 2000,
     delay : 200,
     easing : 'cubic-bezier(0.77, 0, 0.175, 1)',
     callback : function(){
       $(this).css({
         color : '#0078C6',
         transition : '1s',
       });
       $('.desc').css('opacity',1);
     }
   });
 });


/////////  ハンバーガメニュー //////////
(function($) {
    $(function () {
        $('#nav-toggle').on('click', function() {
            $('body').toggleClass('open');
        });
    });
})(jQuery);

////////// Swiper //////////
var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides : true,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
})

////////// Back to the TOP //////////
$(document).ready(function() {
  var pagetop = $('.page-top');
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});