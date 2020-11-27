jQuery(document).ready(function($) {// Cache selectors
var lastId,
    topMenu = $(".nav__item"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation


// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       
       lastId = id;
       // Set/remove active class
       menuItems
       
         .parent().removeClass("active")
         
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

});
 



  /*2222222
 $(document).ready(function () {
  //Smooth scrolling when click to nav
  $('.nav__item > ul > li > a').click(function (e) {
      e.preventDefault();
      var curLink = $(this);
      var scrollPoint = $(curLink.attr('href')).position().top;
      $('body,html').animate({
          scrollTop: scrollPoint
      }, 500);
  })

  $(window).scroll(function () {
      onScrollHandle();
  });

  function onScrollHandle() {
      //Navbar shrink when scroll down
      $(".nav__item").toggleClass("nav__link", $(this).scrollTop() > 50);

      //Get current scroll position
      var currentScrollPos = $(document).scrollTop();

      //Iterate through all node
      $('.nav__item > ul > li > a').each(function () {
          var curLink = $(this);
          var refElem = $(curLink.attr('href'));
          //Compare the value of current position and the every section position in each scroll
          if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
              //Remove class active in all nav
              $('.nav__item > ul > li').removeClass("active");
              //Add class active
              curLink.parent().addClass("active");
          }
          else {
              curLink.parent().removeClass("active");
          }
      });
  }
});

*/
/*
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav__item a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav__item').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}*/