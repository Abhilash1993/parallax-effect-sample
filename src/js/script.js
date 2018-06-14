$(document).ready(function() {
  $(window).bind("scroll", function(e) {
    parallaxScroll();
  });

  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $(".background").css("top", 0 - scrolled * 0.25 + "px");
    // $('.heading').css('top',(0-(scrolled*.25))+'px');
    $(".content").css("margin-top", scrolled * 0.25 + "px");
  }

  //sample waypoint usage - apply a class for an element once it on the view point
  $(".details").each(function(index) {
    $(this).attr("id", "item_" + index);
    var waypoint = new Waypoint({
      element: document.getElementById("item_" + index),
      handler: function(direction) {
        if (direction == "down") {
          console.log();
          $("#" + this.element.id).addClass("slideUp");
        }
      },
      offset: "30%"
    });
  });
});
