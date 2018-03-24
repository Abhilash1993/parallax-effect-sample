$(document).ready(function(){
  $(window).bind('scroll',function(e){
    parallaxScroll();
  });

function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('.background').css('top',(0-(scrolled*.75))+'px');
  $('.heading').css('top',(0-(scrolled*.25))+'px');
  $('.content').css('margin-top',( scrolled*.25)+'px');
  }
})
