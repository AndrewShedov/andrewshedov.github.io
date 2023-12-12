jQuery(document).ready(function ($) {
  $(".burger").click(function () {
    $(this).toggleClass("burger--active");
    $(this).siblings(".navq__list").toggleClass("navq__list--open");
    return false;
  });
  $(document).mouseup(function (e) {
    var $target = $(e.target);
    if (
      $target.closest(".navq__list").length == 0 &&
      $target.closest(".burger").length == 0
    ) {
      $(".navq__list").removeClass("navq__list--open");
      $(".burger").removeClass("burger--active");
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navq__list").removeClass("navq__list--open");
      $(".burger").removeClass("burger--active");
    }
  });
  var $window = $(window),
    $target = $(".nav"),
    $targetm = $(".navq"),
    $h = $target.offset().top;
  $h = $targetm.offset().top;
  $window.on("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $h) {
      $target.addClass("f-nav");
      $targetm.addClass("f-nav");
      $(".nav ul li").css("margin-top", "10px");
      $(".burger").css("top", "5px");
      $(".brand").css("bottom", "9px");
        $(".brandm").css("top", "15px");
      $(".burger").css("right", "4px");
      return;
    } else {
      $(".nav ul li").css("margin-top", "40px");
      $(".burger").css("top", "24px");
      $(".burger").css("right", "24px");
      $(".brand").css("bottom", "15px");
       $(".brandm").css("top", "30px");
      $target.removeClass("f-nav");
      $targetm.removeClass("f-nav");
    }
    return;
  });
  $(function () {
    var navHeight = $("nav").outerHeight();
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            { scrollTop: target.offset().top - navHeight },
            1000
          );
          return false;
        }
      }
    });
  });
});
