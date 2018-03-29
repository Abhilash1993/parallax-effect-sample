$(document).ready(function(){
  $(window).bind('scroll',function(e){
    parallaxScroll();
    if($(window).scrollTop() > 636)
    {
       $( ".details" ).each(function( index ) {
         var self = this;
         setTimeout(function(){
           $(self).addClass("slideUp");
         },100*index)
       })
    }
  });

function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('.background').css('top',(0-(scrolled*.25))+'px');
  // $('.heading').css('top',(0-(scrolled*.25))+'px');
  $('.content').css('margin-top',( scrolled*.25)+'px');
  }
})
