(function(a, b) {
    a.AddtoPlanner = function() {
        function a() {
            this.addElement = function() {
                var a = b(".ad-carousel-list li");
                a.on("click", function() {
                    b(this).toggleClass("selected");
                    $elementData = b(this).data();
                    console.log($elementData);
                });
            }, this.init = function(a) {
                this.addElement();
                return this;
            };
        }
        return new a();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.Audio = function() {
        function a() {
            this.selector = "";
            this.setUpAudio = function() {
                var a = b(this.selector);
                for (var c = 0; c < a.length; c++) {
                    (function() {
                        var d = c;
                        var e = b(a[d]);
                        var f = e.data();
                        var g = e.children(f.playertarget) ? e.children(f.playertarget) : b(f.playertarget);
                        var h = f.linkedbutton ? b(f.linkedbutton) : null;
                        var i = e.children(f.controlbtn) ? e.children(f.controlbtn) : b(f.controlbtn);
                        var j;
                        var k = {
                            audioWidth: f.audiowidth ? f.audiowidth : 1,
                            audioHeight: f.audioheight ? f.audioheight : 1,
                            startVolume: f.volume ? f.volume : .8,
                            loop: f.loop ? f.loop : false,
                            enableAutosize: true,
                            features: [ "playpause" ],
                            alwaysShowControls: false,
                            iPadUseNativeControls: false,
                            iPhoneUseNativeControls: false,
                            AndroidUseNativeControls: false,
                            pauseOtherPlayers: true,
                            plugins: [ "flash", "silverlight" ],
                            pluginPath: "/",
                            flashName: "flashmediaelement.swf",
                            silverlightName: "silverlightmediaelement.xap",
                            keyActions: []
                        };
                        if (g) {
                            if (!g.hasClass("mejs-audio")) {
                                j = g.mediaelementplayer(k);
                            }
                        }
                        i.off("click").on("click", function(a) {
                            b(a.target).toggleClass("playing");
                            if (h) {
                                h.toggleClass("playing");
                                h.parent().find(".mejs-playpause-button button").trigger("click");
                            }
                            e.find(".mejs-playpause-button button").trigger("click");
                        });
                    })();
                }
            }, this.init = function(a) {
                this.selector = a;
                this.setUpAudio();
                return this;
            };
        }
        return new a();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.Carousel = function() {
        function a() {
            this.selector = "";
            this.setUpCarousel = function() {
                var a = b(this.selector);
                for (var c = 0; c < a.length; c++) {
                    (function() {
                        var d = c;
                        var e = b(a[d]);
                        var f = e.data();
                        e.slick({
                            autoplay: typeof f.autoplay === "boolean" ? f.autoplay : false,
                            autoSpeed: typeof f.autoSpeed === "number" ? f.autoSpeed : 7e3,
                            arrows: typeof f.arrows === "boolean" ? f.arrows : true,
                            dots: typeof f.dots === "boolean" ? f.dots : false,
                            speed: typeof f.speed === "number" ? f.speed : 300,
                            centerMode: typeof f.centermode === "boolean" ? f.centermode : false,
                            centerPadding: "40px",
                            infinte: true,
                            lazyLoad: "ondemand",
                            slidesToShow: typeof f.slidetodisplay === "number" ? f.slidetodisplay : 1,
                            slidesToScroll: typeof f.slidestoscroll === "number" ? f.slidestoscroll : 1,
                            pauseOnHover: true,
                            asNavFor: null,
                            prevArrow: typeof f.prevarrow === "string" ? f.prevarrow : "",
                            nextArrow: typeof f.nextarrow === "string" ? f.nextarrow : "",
                            responsive: function() {
                                var a = [ "480", "768", "980", "1200" ];
                                var b = [];
                                for (var c = 0; c < a.length; c++) {
                                    (function() {
                                        var d = c;
                                        var e = a[d];
                                        if (f[e]) {
                                            var g = {};
                                            g.breakpoint = e;
                                            g.settings = {};
                                            if ([ e + "autoplay" ] in f) {
                                                g.settings.autoplay = typeof f[e + "autoplay"] === "boolean" ? f[e + "autoplay"] : false;
                                            }
                                            if ([ e + "autoSpeed" ] in f) {
                                                g.settings.autoSpeed = typeof f[e + "autoSpeed"] === "number" ? f[e + "autoSpeed"] : 7e3;
                                            }
                                            if ([ e + "arrows" ] in f) {
                                                g.settings.arrows = typeof f[e + "arrows"] === "boolean" ? f[e + "arrows"] : true;
                                            }
                                            if ([ e + "dots" ] in f) {
                                                g.settings.dots = typeof f[e + "dots"] === "boolean" ? f[e + "dots"] : false;
                                            }
                                            if ([ e + "speed" ] in f) {
                                                g.settings.speed = typeof f[e + "speed"] === "number" ? f[e + "speed"] : 300;
                                            }
                                            if ([ e + "slidetodisplay" ] in f) {
                                                g.settings.slidetodisplay = typeof f[e + "slidestoscroll"] === "number" ? f[e + "slidetodisplay"] : 1;
                                            }
                                            if ([ e + "slidestoscroll" ] in f) {
                                                g.settings.slidestoscroll = typeof f[e + "slidestoscroll"] === "number" ? f[e + "slidestoscroll"] : 1;
                                            }
                                            b.push(g);
                                        }
                                    })();
                                }
                                return b;
                            }()
                        });
                    })();
                }
            }, this.init = function(a) {
                this.selector = a;
                this.setUpCarousel();
                return this;
            };
        }
        return new a();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.getCookie = function(a) {
        var b = a + "=";
        var c = document.cookie.split(";");
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            while (e.charAt(0) == " ") e = e.substring(1);
            if (e.indexOf(b) != -1) return e.substring(b.length, e.length);
        }
        return "";
    };
    a.Configs = function() {
        function a() {
            this.activeClass = "ad-active", this.views = {
                xsmall: 480,
                small: 768,
                medium: 980,
                large: 1200
            }, this.isMobile = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                }(),
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                }(),
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                }(),
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                }(),
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                }()
            }, this.init = function() {
                return this;
            };
        }
        return new a();
    }();
    a.Utils = function() {
        function c() {
            this.getIEVersion = function() {
                var a = navigator.userAgent;
                var b = /MSIE\s?(\d+)(?:\.(\d+))?/i;
                var c = a.match(b);
                if (c !== null) {
                    return {
                        major: c[1],
                        minor: c[2]
                    };
                }
                return {
                    major: "-1",
                    minor: "-1"
                };
            }, this.getViewport = function() {
                var c = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                var d = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                var e;
                if (b("html").hasClass("lt-ie9")) {
                    e = "large";
                } else {
                    e = c <= a.Configs.views.xsmall ? "xsmall" : e;
                    e = c > a.Configs.views.xsmall ? "small" : e;
                    e = c > a.Configs.views.small ? "medium" : e;
                    e = c > a.Configs.views.medium ? "large" : e;
                    e = c > a.Configs.views.large ? "xlarge" : e;
                }
                a.Configs.viewport = {
                    size: e,
                    width: c,
                    height: d
                };
                return a.Configs.viewport;
            }, this.stopAllYT = function() {
                b(".ad-video-inpage").hide();
                b('iframe[src*="youtube.com/embed/"]').each(function() {
                    this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                });
            }, this.init = function() {
                var a = this;
                this.getViewport();
                if (this.getIEVersion().major === "10") {
                    b("html").addClass("ie10");
                }
                var c;
                b(window).resize(function() {
                    clearTimeout(c);
                    c = setTimeout(function() {
                        a.getViewport();
                        b(window).trigger("windowResize");
                    }, 100);
                });
                return this;
            };
        }
        return new c();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.DayPlanner = function() {
        function c() {
            this.selector = "";
            this.sendUpdatedIndex = function(a) {
                var b = a.data("startindex") + 1;
                var c = a.index() + 1;
                if (typeof AddToDayPlanner == "function") {
                    AddToDayPlanner(a.data("expid"), c);
                }
            };
            this.setUpdatepicker = function(a) {
                a.on("focusin", "input.datepicker", function(c) {
                    if (!b(this).hasClass("hasDatepicker")) {
                        b(this).datepicker({
                            onSelect: function() {
                                b(this).removeClass("error");
                                b(".warning-text", a).hide();
                                var c = b(this).datepicker("getDate"), d = c.getDate(), e = c.getMonth() + 1, f = c.getFullYear();
                                if (typeof SetPlannerDate == "function") {
                                    SetPlannerDate(f, e, d);
                                }
                            },
                            dateFormat: "dd MM yy"
                        });
                    }
                });
            };
            this.setUpspotlightaccordion = function(a) {
                var c = b(".ad-spotlight-accordion", a), d = b(".collapse", c), e = b("i", d);
                d.on("show.bs.collapse", function() {
                    d.parent().find("i.icon-chevron-down").removeClass("icon-chevron-down").addClass("icon-chevron-up");
                });
                d.on("hide.bs.collapse", function() {
                    d.parent().find("i.icon-chevron-up").removeClass("icon-chevron-up").addClass("icon-chevron-down");
                });
            }, this.setUpDayPlannerList = function(a) {
                var c = b(".ad-day-planner-list", a);
                c.sortable({
                    start: function(a, c) {
                        b(c.item).data("startindex", c.item.index());
                    },
                    stop: function(a, b) {
                        var c = b.item.data("startindex") + 1;
                        var d = b.item.index() + 1;
                        if (typeof AddToDayPlanner == "function") {
                            AddToDayPlanner(b.item.data("expid"), d);
                        }
                    }
                });
            }, this.setUpdayplanner = function() {
                var a = this, c = b(this.selector), d = b(".sendtomobile", c), e = b(".shareplan", c);
                c.on("click", "a.remove_btn", function(a) {
                    a.preventDefault();
                    a.stopPropagation();
                    b(this).closest(".ad-day-planner-list-item").fadeOut(300, function() {
                        b(this).remove();
                    });
                });
                d.on("click", function(a) {
                    a.preventDefault();
                    a.stopPropagation();
                    b(".ad-share-my-plan .mail").focus();
                });
                e.on("click", function(a) {
                    a.preventDefault();
                    a.stopPropagation();
                    b(".ad-share-my-plan .sms").focus();
                });
                this.setUpdatepicker(c);
                this.setUpspotlightaccordion(c);
                this.setUpDayPlannerList(c);
                this.setUpMobileOnload(c);
            }, this.setUpMobileOnload = function(c) {
                var d = a.getCookie("ArdentUserCookie"), e = a.getCookie("ArdentDayPlannerCookie"), f = b(".ad-login_share", c), g = b(".mobile-login-hide", c), h = b(".continue-link", c);
                h.on("click", function(a) {
                    a.preventDefault();
                    a.stopPropagation();
                    g.show();
                    f.hide();
                });
                if (d == "" && (e || e.Facilities !== "undefined" || e.Facilities.length == 0) && (a.Utils.getViewport().size == "small" || a.Utils.getViewport().size == "xsmall")) {
                    g.hide();
                } else if ((e || e.Facilities !== "undefined" || e.Facilities.length == 0) && (a.Utils.getViewport().size == "small" || a.Utils.getViewport().size == "xsmall")) {
                    f.hide();
                }
            }, this.init = function(a) {
                this.selector = a;
                this.setUpdayplanner();
                return this;
            };
        }
        return new c();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.Maps = {
        map: {},
        defaultMarkerText: {},
        directionsDisplay: {},
        directionsService: {},
        mapOptions: {},
        markerPosition: {},
        mapicon: {}
    };
    a.Maps.init = function() {
        a.Maps.directionsService = new google.maps.DirectionsService();
        a.Maps.directionsDisplay = new google.maps.DirectionsRenderer();
        a.Maps.map = new google.maps.Map(document.getElementById("map-canvas"), a.Maps.mapOptions);
        var b = new google.maps.Marker({
            position: a.Maps.markerPosition,
            map: a.Maps.map,
            title: a.Maps.defaultMarkerText,
            icon: a.Maps.mapicon
        });
        a.Maps.directionsDisplay.setMap(a.Maps.map);
        a.Maps.directionsDisplay.setPanel(document.getElementById("directions-panel"));
    };
    a.Maps.calcRoute = function() {
        var c = document.getElementById("map-starting-point").value;
        var d = document.getElementById("ad-gt-map-destination").value;
        var e = document.getElementById("mode").value;
        var f = {
            origin: c,
            destination: d,
            travelMode: google.maps.TravelMode[e],
            region: "AU"
        };
        a.Maps.directionsService.route(f, function(c, d) {
            if (d == google.maps.DirectionsStatus.OK) {
                a.Maps.directionsDisplay.setDirections(c);
                b(".ad-gt-direction-duration").html("<span><strong>" + b.trim(c.routes[0].legs[0].duration.text.replace(/"/g, "")) + "</strong></span>");
                b(".ad-gt-distance-indicator").html("<span><strong>" + b.trim(c.routes[0].legs[0].distance.text.replace(/"/g, "")) + "</strong></span>");
                if (b.trim(c.routes[0].summary) == "") {
                    b(".ad-gt-direction-summary").html('<span ></span><span class="ad-gt-via-text"><span><strong></strong></span> </span>');
                } else {
                    b(".ad-gt-direction-summary").html('<i class="icon-car-front bg-icon cards-directions-travel-mode-icon"></i><span class="ad-gt-via-text"><span><strong> Via ' + b.trim(c.routes[0].summary) + "</strong></span> </span>");
                }
            }
        });
    };
    a.Maps.closeMap = function() {
        b(".ad-gt-close-map-wrapper").css("display", "none");
        b("#map-canvas").animate({
            height: "300px"
        }, 500);
        b("#directions-panel").css("height", "0");
        b(".directions-temp").css({
            top: "200px"
        });
    };
    a.Maps.showDirections = function() {
        var c = b(window).height();
        b(".ad-gt-close-map-wrapper").css("display", "block");
        b("#map-starting-point").val(b("#start").val());
        b("#map-canvas").animate({
            height: c - 15
        }, 500);
        b("#directions-panel").css("height", "auto");
        b(".directions-temp").css({
            top: "210px"
        });
        a.Maps.calcRoute();
    };
    a.Maps.setTravelMode = function() {
        var c = b(this).attr("id");
        b("#mode").val(c);
        b("li.ad-gt-travel-mode-icon").removeClass("ad-gt-highlight-travel-mode");
        b(this).addClass("ad-gt-highlight-travel-mode");
        a.Maps.calcRoute();
    };
    a.Maps.toggleSteps = function() {
        b(this).parent().parent().next("div").toggle();
    };
    a.Maps.swapDirections = function() {
        var c = b("#map-starting-point").val();
        b("#map-starting-point").val(b("#ad-gt-map-destination").val());
        b("#ad-gt-map-destination").val(c);
        a.Maps.calcRoute();
    };
    a.DirectionsMap = function() {
        function c() {
            this.map = {}, this.selector = "";
            this.defaultMarkerText = "";
            this.directionsDisplay = {}, this.directionsService = {}, this.mapOptions = {}, 
            this.mapicon = {}, this.init = function(c) {
                var d = b(c).data();
                a.Maps.defaultMarkerText = d.defaultMarkerText;
                a.Maps.markerPosition = {
                    lat: d.markerlat,
                    lng: d.markerlng
                };
                a.Maps.mapicon = d.mapicon;
                a.Maps.mapOptions = {
                    center: {
                        lat: d.lat,
                        lng: d.lng
                    },
                    zoom: 15,
                    disableDefaultUI: true
                };
                b("#directionsSubmit").on("click", a.Maps.showDirections);
                b("#ad-gt-close-map").on("click", a.Maps.closeMap);
                b("#ad-list-all-steps").on("click", a.Maps.toggleSteps);
                b("li.ad-gt-travel-mode-icon").on("click", a.Maps.setTravelMode);
                b("div.ad-gt-reverse-icon").on("click", a.Maps.swapDirections);
                google.maps.event.addDomListener(window, "load", a.Maps.init);
                return this;
            };
        }
        return new c();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.Gallery = function() {
        function a() {
            this.selector = "";
            this.selectTab = function() {
                if (!b(".list-unstyled.tabs>li.active")[0]) {
                    b(".list-unstyled.tabs>li:first a").trigger("click");
                } else {
                    var a = b(".list-unstyled.tabs>li.active a").data("target");
                    b(".ad-gallery-item" + a).addClass("in active");
                }
            };
            this.itemPicker = function() {
                b(".ad-gallery-strip .activeitem .lol").text(b(".list-unstyled.tabs>li.active").text());
                b(".lol").click(function() {
                    b(".ad-tab-strip").css("display", "block");
                });
                activePosition = b(".list-unstyled.tabs>li.active").index();
                b(".ad-gallery-strip .list-unstyled.tabs>li").eq(activePosition).addClass("highlight");
                function a() {
                    b(".ad-gallery-strip .list-unstyled.tabs>li").removeClass("highlight");
                }
                b(".lolo").click(function() {
                    if (activePosition == 0) {} else {
                        a();
                        b(".ad-gallery-strip .list-unstyled.tabs>li").eq(--activePosition).addClass("highlight").find("a").trigger("click");
                        b(".ad-gallery-strip .activeitem .lol").text(b(".list-unstyled.tabs>li.active").text());
                    }
                });
                b(".polo").click(function() {
                    if (activePosition == 4) {} else {
                        a();
                        b(".ad-gallery-strip .list-unstyled.tabs>li").eq(++activePosition).addClass("highlight").find("a").trigger("click");
                        b(".ad-gallery-strip .activeitem .lol").text(b(".list-unstyled.tabs>li.active").text());
                    }
                });
                b(".solo").click(function() {
                    b(".ad-tab-strip").css("display", "none");
                });
            };
            this.homeGalleryCarousel = function() {
                var a = b(this.selector), c = a.find(".active img"), d = c.width() + 20, e = a.data(), f = b(e.rightarrowselctor), g = b(e.leftarrowselctor), h, i, j, k = c.width(), l = c.height();
                var m = function() {
                    h = b(".container-inner .active img").length;
                    if (h <= 1) {
                        g.addClass("hide");
                        f.addClass("hide");
                    } else {
                        g.removeClass("hide");
                        f.removeClass("hide");
                        if (parseInt(a.css("margin-left")) == 0) {
                            g.addClass("hide");
                        } else if (parseInt(a.css("margin-left")) == (h - 2) * d * -1 - d / 2) {
                            f.addClass("hide");
                        }
                    }
                };
                m();
                b("div .positions").click(function() {
                    h = b(".container-inner .active img").length;
                    j = b(this).hasClass("arrow-right") ? d : -d;
                    if (j) {
                        if (parseInt(a.css("margin-left")) == (h - 2) * d * -1 && b(this).hasClass("arrow-right")) {
                            j = parseInt(a.css("margin-left")) - d / 2;
                        } else if (parseInt(a.css("margin-left")) == (h - 2) * d * -1 - d / 2) {
                            j = parseInt(a.css("margin-left")) + d / 2;
                        } else {
                            j = parseInt(a.css("margin-left")) - j;
                        }
                        a.animate({
                            "margin-left": "" + j + "px"
                        }, 450, m);
                    }
                });
                b(window).resize(function() {
                    n();
                });
                b(document).ready(function() {
                    n();
                });
                b(".list-unstyled.tabs").on("click", function(b) {
                    setTimeout(function() {
                        a.css("margin-left", 0);
                        m();
                    }, 250);
                });
                function n() {
                    if (b(document).width() > 600) {
                        a.css("margin-left", 0);
                    } else if (b(document).width() < 600 && b(document).width() > 450) {
                        a.css("margin-left", 0);
                        m();
                    } else if (b(document).width() < 450) {
                        m();
                        imgWidthNew = k * (b(document).width() / 450);
                        b(".container-inner div.ad-gallery-item").css("width", imgWidthNew + "px");
                        a.css("margin-left", 0);
                        d = Math.ceil(imgWidthNew);
                        if (d % 2 == 1) ++d;
                    }
                }
            };
            this.init = function(a) {
                this.selector = a;
                if (b(a).parents().hasClass("homepage-gallery")) {
                    this.itemPicker();
                    this.homeGalleryCarousel();
                }
                this.selectTab();
                return this;
            };
        }
        return new a();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.GalleryCarousel = function() {
        function c() {
            this.selector = "";
            this.setUpGallery = function() {
                var c = b(this.selector);
                for (var d = 0; d < c.length; d++) {
                    (function() {
                        var e = d;
                        var f = b(c[e]);
                        var g = f.data();
                        var h = b(g.modaltarget);
                        var i = f.children(g.modalbodycontent);
                        var j = f.children(g.controlbtn) ? f.children(g.controlbtn) : b(g.controlbtn);
                        i.hide();
                        var k = i.html();
                        var l = b(".modal-body");
                        var m = b(".modal-footer");
                        var n = b(".modal-title");
                        j.on("click", function(c) {
                            c.preventDefault();
                            if (g.footer) m.hide(); else {
                                m.show();
                                m.append(g.footer);
                            }
                            n.html(g.title);
                            l.html(k);
                            a["Carousel"].init(".modal-body " + g.carouseltaget);
                            h.on("shown.bs.modal", function() {
                                b(".modal-body " + g.carouseltaget).resize();
                                b(".slick-dots .slick-active button").click();
                            });
                            h.modal("show");
                        });
                    })();
                }
            }, this.init = function(a) {
                this.selector = a;
                this.setUpGallery();
                return this;
            };
        }
        return new c();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.Header = function() {
        function a() {
            this.MegaMenu = function() {
                function a() {
                    this.activeMenu = "", this.init = function() {
                        var a = b(".yamm .yamm-fw"), c = b(".ad-link-switcher", a), d = b(".ad-page-icons", a), e = b(".dropdown-menu", a);
                        var f = this;
                        e.on("click", function(a) {
                            a.stopPropagation();
                        });
                        c.find("a").on("click", function(a) {
                            a.preventDefault();
                            f.openMenu(b(this), f);
                        });
                        d.on("click", function(a) {
                            var c = b(this);
                            var d = c.closest(".ad-link-list-item").find("ul");
                            if (c.not(".disabled").hasClass("ad-page-up")) {
                                f.moveUp(c, d, f);
                            } else if (c.not(".disabled").hasClass("ad-page-down")) {
                                f.moveDown(c, d, f);
                            } else if (c.hasClass("ad-picker-close")) {
                                f.closeMenu(c, d, f);
                            }
                        });
                        return this;
                    }, this.openMenu = function(a) {
                        var c = this;
                        var d = a.closest(".ad-category-module"), e = d.find(".ad-link-list-item");
                        if (c.activeMenu != d) {
                            console.log("close from open", d.find(".ad-picker-close"), d.find(".ad-link-list-item ul"));
                            c.closeMenu(b(".ad-category-module.open").find(".ad-picker-close"), b(".ad-category-module.open").find(".ad-link-list-item ul"));
                        }
                        c.activeMenu = d;
                        d.addClass("open");
                        d.siblings().removeClass("open");
                        e.find("li").eq(0).addClass("active");
                        e.removeClass("hidden-xs");
                    }, this.closeMenu = function(a, c, d) {
                        var e = a.closest(".ad-category-module");
                        e.removeClass("open");
                        var f = e.find(".ad-link-list-item");
                        f.addClass("hidden-xs");
                        a.siblings(".ad-page-up").addClass("disabled");
                        a.siblings(".ad-page-down").removeClass("disabled");
                        c.each(function() {
                            b(this).css("marginTop", "0");
                            b(this).find("li").removeClass("active").eq(0).addClass("active");
                        });
                    }, this.moveUp = function(a, c) {
                        a.siblings(".ad-page-down").removeClass("disabled");
                        c.each(function() {
                            var d = b(this).find("li.active");
                            var e = b(this).css("marginTop").replace("px", "");
                            if (d.prev().size() != 0) {
                                d.removeClass("active");
                                var f = c.find("li");
                                if (f.length > 5) {
                                    var g = f.length - 5;
                                    b(this).find("li:lt(" + g + ")").addClass("overflown-top");
                                    b(this).find("li:gt(4)").addClass("overflown-bottom");
                                }
                                if (d.prev().hasClass("overflown-top") && parseInt(e) != 0) {
                                    b(this).css("marginTop", parseInt(e) + 39 + "px");
                                }
                                var h = d.prev().addClass("active");
                                if (h.prev().size() == 0) {
                                    a.addClass("disabled");
                                }
                            } else {
                                a.addClass("disabled");
                            }
                        });
                    }, this.moveDown = function(a, c) {
                        a.siblings(".ad-page-up").removeClass("disabled");
                        c.each(function() {
                            var d = b(this).find("li.active");
                            var e = b(this).css("marginTop").replace("px", "");
                            if (d.next().size() != 0) {
                                d.removeClass("active");
                                var f = c.find("li");
                                if (f.length > 5) {
                                    var g = f.length - 5;
                                    b(this).find("li:lt(" + g + ")").addClass("overflown-top");
                                    b(this).find("li:gt(4)").addClass("overflown-bottom");
                                }
                                if (d.next().hasClass("overflown-bottom") && parseInt(e) > -39 * b(this).find("li:gt(4)").length) {
                                    b(this).css("marginTop", parseInt(e) - 39 + "px");
                                }
                                var h = d.next().addClass("active");
                                if (h.next().size() == 0) {
                                    a.addClass("disabled");
                                }
                            } else {
                                a.addClass("disabled");
                            }
                        });
                    };
                    return this.init();
                }
                return new a();
            }, this.MainNav = function() {
                var a = b(".ad-main-menu"), c = b(".ad-main-menu-item", a), d = b(".yamm-fw", a), e = b(".wrapper", a), f = b(".icon-x", a), g = b(".navbar-nav", a), h = b(".searchinput", a), i = b(".search-submit", a), j = b(".search-icon", a);
                j.on("click", function(a) {
                    b(this).hide();
                    e.show();
                    g.hide();
                    h.focus();
                });
                f.on("click", function(a) {
                    g.show();
                    j.show();
                    e.hide();
                });
                i.on("click", function(a) {
                    b('form[name="search-form"]').submit();
                });
                c.on("mouseenter", b.fn.dropdown.Constructor.prototype.toggle);
                d.on("shown.bs.dropdown", function(a) {
                    b(".ad-header").css("position", "absolute");
                    b(".submenu").append(b(this).find(".dropdown-menu").hide().clone(true).show());
                });
                d.on("hidden.bs.dropdown", function(a) {
                    b(".ad-header").css("position", "fixed");
                    b(".submenu").empty();
                });
            }, this.init = function() {
                this.MainNav();
                this.MegaMenu();
                return this;
            };
        }
        return new a();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.InteractiveMap = function() {
        function a() {
            this.selector = "";
            this.setdragscrollable = function() {
                var a = b(this.selector);
                for (var c = 0; c < a.length; c++) {
                    (function() {
                        var d = c;
                        var e = b(a[d]);
                        var f = e.data();
                        e.dragscrollable({
                            dragSelector: typeof f.dragselector === "string" ? f.dragselector : "",
                            acceptPropagatedEvent: typeof f.acceptpropagatedevent === "boolean" ? f.acceptpropagatedevent : false
                        });
                    })();
                }
            }, this.eventHandlers = function() {
                b("#ad-expand-map").on("click", function() {
                    var a = b(this);
                    a.toggleClass("show");
                    if (a.hasClass("show")) {
                        a.text("Close map");
                    } else {
                        a.text("expand map");
                    }
                    b(".ad-dreamworld-map-wrapper").toggleClass("ad-map-height");
                    b(".overlay").toggle();
                });
            };
            this.init = function(a) {
                this.selector = a;
                this.setdragscrollable();
                this.eventHandlers();
                return this;
            };
        }
        return new a();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.Tabcollapse = function() {
        function a() {
            this.selector = "";
            this.setUptabcollapse = function() {
                var a = b(this.selector);
                for (var c = 0; c < a.length; c++) {
                    (function() {
                        var d = c;
                        var e = b(a[d]);
                        var f = e.data();
                        e.tabCollapse({
                            tabsClass: typeof f.tabclass === "string" ? f.tabclass : "hidden-xs",
                            accordionClass: typeof f.accordionclass === "string" ? f.accordionclass : "visible-xs"
                        });
                    })();
                }
            }, this.eventhandler = function() {
                if (b(window).width() < 768) {
                    b(".panel-collapse.collapse.in").parent().addClass("accordColor");
                }
                b(document).on("shown.bs.collapse shown.bs.tab", ".panel-collapse, a[data-toggle='tab']", function(a) {
                    b(this).parent().parent().find(".panel").removeClass("accordColor");
                    b(this).parent().addClass("accordColor");
                    b(this).parent().parent().find(".panel-heading").removeClass("accordColor");
                    b(".collapsed").parent().parent().addClass("accordColor");
                });
            }, this.init = function(a) {
                this.selector = a;
                this.setUptabcollapse();
                this.eventhandler();
                return this;
            };
        }
        return new a();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a, b) {
    a.Video = function() {
        function a() {
            this.selector = "";
            this.controls = [];
            this.setUpVideo = function() {
                b("video").on("click", function(a) {
                    a.preventDefault();
                });
                var a = b(this.selector);
                for (var c = 0; c < a.length; c++) {
                    (function() {
                        var d = c;
                        var e = b(a[d]);
                        var f = e.data();
                        var g = e.children(f.playertarget) ? e.children(f.playertarget) : b(f.playertarget);
                        var h = f.linkedbutton ? b(f.linkedbutton) : null;
                        var i = e.children(f.controlbtn) ? b(a[d]).children(f.controlbtn) : b(f.controlbtn);
                        var j;
                        var k = {
                            videoWidth: f.videowidth ? f.videowidth : -1,
                            videoHeight: f.videoheight ? f.videoheight : -1,
                            defaultVideoWidth: 480,
                            defaultVideoHeight: 270,
                            pluginWidth: -1,
                            pluginHeight: -1,
                            startVolume: f.volume ? f.volume : .8,
                            loop: f.loop ? f.loop : false,
                            enableAutosize: true,
                            features: [ "playpause" ],
                            alwaysShowControls: false,
                            plugins: [ "flash", "silverlight" ],
                            pluginPath: "/",
                            flashName: "flashmediaelement.swf",
                            silverlightName: "silverlightmediaelement.xap",
                            iPadUseNativeControls: false,
                            iPhoneUseNativeControls: false,
                            AndroidUseNativeControls: false,
                            pauseOtherPlayers: true,
                            keyActions: [],
                            success: function(a, c) {
                                a.addEventListener("pause", function(a) {
                                    b(".ad-video-background").show();
                                    b(f.playertarget).hide();
                                    b(".video-button").removeClass("playing");
                                    b("#content-main").css({
                                        height: "auto",
                                        overflow: "auto"
                                    });
                                    b("footer").show();
                                }, false);
                                a.addEventListener("play", function(a) {
                                    b(".ad-video-background").hide();
                                    b(f.playertarget).show();
                                    b(".video-button").addClass("playing");
                                    b("#content-main").css({
                                        height: b(c).outerHeight(),
                                        overflow: "hidden"
                                    });
                                    b("footer").hide();
                                }, false);
                            }
                        };
                        if (!g.hasClass("mejs-video")) {
                            j = g.mediaelementplayer(k);
                        }
                        b(f.playertarget).hide();
                        i.off("click").on("click", function(a) {
                            b(a.target).toggleClass("playing");
                            b(".ad-video-background").toggle();
                            b(f.playertarget).toggle();
                            e.find(".mejs-playpause-button button").trigger("click");
                            if (h) {
                                h.toggleClass("playing");
                                h.parent().find(".mejs-playpause-button button").trigger("click");
                            }
                        });
                    })();
                }
            }, this.init = function(a) {
                this.selector = a;
                this.setUpVideo();
                return this;
            };
        }
        return new a();
    }();
})(window.AD = typeof AD !== "undefined" && AD instanceof Object ? AD : {}, $AD = jQuery.noConflict());

(function(a) {
    "use strict";
    a(function() {
        var a = [ "Configs", "Utils", "Header" ];
        for (var b in a) {
            AD[a[b]].init();
        }
        for (var b in AD.initUI) {
            AD[AD.initUI[b].module].init(AD.initUI[b].selector);
        }
    }());
})($AD);