$(document).ready(function() {
  $(window).bind("scroll", function(e) {
    parallaxScroll();
  });
  $("#waypoint-sample").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#details").offset().top
      },
      1000
    );
  });
  $("#parallax-sample").click(function() {
     $("html, body").animate({ scrollTop: 0 }, 100);
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
          $("#" + this.element.id).addClass("slideUp");
        }
      },
      offset: "20%"
    });
  });
  //remove slideUp class on the user scrolls up
  $(".details").each(function(index) {
    $(this).attr("id", "item_" + index);
    var waypoint = new Waypoint({
      element: $(".nav"),
      handler: function(direction) {
        $("#details")
          .children()
          .removeClass("slideUp");
      },
      offset: "30%"
    });
  });
  //nav panel animation
  var waypoint = new Waypoint({
    element: $(".content"),
    handler: function(direction) {
      if (direction == "down") {
        $(".nav-wrap").addClass("nav-background-white");
      }
      if (direction == "up") {
        $(".nav-wrap").removeClass("nav-background-white");
      }
    },
    offset: "10%"
  });
});
