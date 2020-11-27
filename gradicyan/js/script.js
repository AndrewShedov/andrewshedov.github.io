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