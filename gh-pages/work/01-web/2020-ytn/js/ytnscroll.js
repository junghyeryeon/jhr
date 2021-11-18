! function(s) {
    if (s("#CmAdContent").length) {
        if (s.hasData(s("#CmAdContent")[0])) return;
        s.data(s("#CmAdContent")[0], "ytnview", !0);
			var o = function(s) {
                var o = /[0-9]{4}/gi.exec(s);
                return o && o.length > 0 ? o[0] : ""
            }(document.location.href),
            t = function(s) {
                var o = /[0-9]{18}/gi.exec(s);
                return o && o.length > 0 ? o[0] : ""
            }(document.location.href);
			s("#ajaxGisaSubList").load("/_cs/_inc/bottom_gisaview.html"), s("#zone2").load("/_cs/_inc/right_gisaview.html", function() {
                var o = s("#zone1"),
                    t = s("#zone2"),
                    n = s("#aside");
                e = function() {
                    s(window).scroll(function() {
                        var e = s(window).height(),
                            l = t.offset().top,
                            a = s(window).scrollTop() + e,
                            i = o.height(),
                            r = o.offset().top + i,
                            c = n.height(),
                            h = l + c,
                            u = n;
                        i > c && c > e && (a > h && r > a ? u.addClass("has_scroll") : a >= r ? (u.removeClass("has_scroll"), u.addClass("stop_scroll")) : (u.removeClass("has_scroll"), u.removeClass("stop_scroll")))
                    })
                }, n.length && (e(), s(window).scroll())
            })
    } else ! function() {
        var o = s("#zone1"),
            e = s("#zone2"),
            t = s("#aside");
        s(window).scroll(function() {
            var n = s(window).height(),
                l = e.offset().top,
                a = s(window).scrollTop() + n,
                i = o.height(),
                r = (o.offset().top, t.height()),
                c = e.offset().top + r,
                h = l + i,
                u = o;
            s("#leftWingBanner"), s("#rightWingBanner"), i > n && r > i ? r > n && (a > h && c > a ? u.addClass("has_scroll") : a >= c ? (u.removeClass("has_scroll"), u.addClass("stop_scroll")) : (u.removeClass("has_scroll"), u.removeClass("stop_scroll"))) : (u.removeClass("has_scroll"), u.removeClass("stop_scroll"))
        })
    }();
    owlCarouselSet = function(o, e) {
        void 0 == e && (e = {}), s.cachedScript("/_js/owl.carousel2.min.js?v=1").done(function() {
            o.owlCarousel(e)
        })
    }, s.cachedScript = function(o, e) {
        return e = s.extend(e || {}, {
            dataType: "script",
            cache: !0,
            url: o
        }), s.ajax(e)
    }
}(jQuery);