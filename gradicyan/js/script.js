jQuery(document).ready(function (a) {
    a(".burger").click(function () {
        a(this).toggleClass("burger--active");
        a(this).siblings(".navq__list").toggleClass("navq__list--open");
        return false
    });
    a(document).mouseup(function (c) {
        var b = a(c.target);
        if (b.closest(".navq__list").length == 0 && b.closest(".burger").length == 0) {
            a(".navq__list").removeClass("navq__list--open");
            a(".burger").removeClass("burger--active")
        }
    });
    a(window).scroll(function () {
        if (a(this).scrollTop() > 0) {
            a(".navq__list").removeClass("navq__list--open");
            a(".burger").removeClass("burger--active")
        }
    });
    a(function () {
        var b = a("nav").outerHeight();
        a('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var c = a(this.hash);
                c = c.length ? c : a("[name=" + this.hash.slice(1) + "]");
                if (c.length) {
                    a("html, body").animate({
                        scrollTop: c.offset().top - b
                    }, 1000);
                    return false
                }
            }
        })
    })

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
$(document).ready(function () {
    $("div[class^=contents]:not(:first)").hide();
    $(".dropdown").change(function () {
        value = $(this).find("option:selected").val();
        $(".dropdown option[value=" + value + "]").removeAttr("disabled");
        $('div[class^="contents"]').hide();
        $(".contents" + value).show()
    })
});