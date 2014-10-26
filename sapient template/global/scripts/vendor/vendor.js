(function(a, b) {
    var c, d, e = typeof b, f = a.location, g = a.document, h = g.documentElement, i = a.jQuery, j = a.$, k = {}, l = [], m = "1.10.2", n = l.concat, o = l.push, p = l.slice, q = l.indexOf, r = k.toString, s = k.hasOwnProperty, t = m.trim, jQuery = function(a, b) {
        return new jQuery.fn.init(a, b, d);
    }, u = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, v = /\S+/g, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, x = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, z = /^[\],:{}\s]*$/, A = /(?:^|:|,)(?:\s*\[)+/g, B = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, C = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, E = /-([\da-z])/gi, F = function(a, b) {
        return b.toUpperCase();
    }, G = function(a) {
        if (g.addEventListener || a.type === "load" || g.readyState === "complete") {
            H();
            jQuery.ready();
        }
    }, H = function() {
        if (g.addEventListener) {
            g.removeEventListener("DOMContentLoaded", G, false);
            a.removeEventListener("load", G, false);
        } else {
            g.detachEvent("onreadystatechange", G);
            a.detachEvent("onload", G);
        }
    };
    jQuery.fn = jQuery.prototype = {
        jquery: m,
        constructor: jQuery,
        init: function(a, c, d) {
            var e, f;
            if (!a) {
                return this;
            }
            if (typeof a === "string") {
                if (a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3) {
                    e = [ null, a, null ];
                } else {
                    e = x.exec(a);
                }
                if (e && (e[1] || !c)) {
                    if (e[1]) {
                        c = c instanceof jQuery ? c[0] : c;
                        jQuery.merge(this, jQuery.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : g, true));
                        if (y.test(e[1]) && jQuery.isPlainObject(c)) {
                            for (e in c) {
                                if (jQuery.isFunction(this[e])) {
                                    this[e](c[e]);
                                } else {
                                    this.attr(e, c[e]);
                                }
                            }
                        }
                        return this;
                    } else {
                        f = g.getElementById(e[2]);
                        if (f && f.parentNode) {
                            if (f.id !== e[2]) {
                                return d.find(a);
                            }
                            this.length = 1;
                            this[0] = f;
                        }
                        this.context = g;
                        this.selector = a;
                        return this;
                    }
                } else if (!c || c.jquery) {
                    return (c || d).find(a);
                } else {
                    return this.constructor(c).find(a);
                }
            } else if (a.nodeType) {
                this.context = this[0] = a;
                this.length = 1;
                return this;
            } else if (jQuery.isFunction(a)) {
                return d.ready(a);
            }
            if (a.selector !== b) {
                this.selector = a.selector;
                this.context = a.context;
            }
            return jQuery.makeArray(a, this);
        },
        selector: "",
        length: 0,
        toArray: function() {
            return p.call(this);
        },
        get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a];
        },
        pushStack: function(a) {
            var b = jQuery.merge(this.constructor(), a);
            b.prevObject = this;
            b.context = this.context;
            return b;
        },
        each: function(a, b) {
            return jQuery.each(this, a, b);
        },
        ready: function(a) {
            jQuery.ready.promise().done(a);
            return this;
        },
        slice: function() {
            return this.pushStack(p.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [ this[c] ] : []);
        },
        map: function(a) {
            return this.pushStack(jQuery.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: o,
        sort: [].sort,
        splice: [].splice
    };
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = false;
        if (typeof h === "boolean") {
            k = h;
            h = arguments[1] || {};
            i = 2;
        }
        if (typeof h !== "object" && !jQuery.isFunction(h)) {
            h = {};
        }
        if (j === i) {
            h = this;
            --i;
        }
        for (;i < j; i++) {
            if ((f = arguments[i]) != null) {
                for (e in f) {
                    a = h[e];
                    d = f[e];
                    if (h === d) {
                        continue;
                    }
                    if (k && d && (jQuery.isPlainObject(d) || (c = jQuery.isArray(d)))) {
                        if (c) {
                            c = false;
                            g = a && jQuery.isArray(a) ? a : [];
                        } else {
                            g = a && jQuery.isPlainObject(a) ? a : {};
                        }
                        h[e] = jQuery.extend(k, g, d);
                    } else if (d !== b) {
                        h[e] = d;
                    }
                }
            }
        }
        return h;
    };
    jQuery.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            if (a.$ === jQuery) {
                a.$ = j;
            }
            if (b && a.jQuery === jQuery) {
                a.jQuery = i;
            }
            return jQuery;
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(a) {
            if (a) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(a) {
            if (a === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            if (!g.body) {
                return setTimeout(jQuery.ready);
            }
            jQuery.isReady = true;
            if (a !== true && --jQuery.readyWait > 0) {
                return;
            }
            c.resolveWith(g, [ jQuery ]);
            if (jQuery.fn.trigger) {
                jQuery(g).trigger("ready").off("ready");
            }
        },
        isFunction: function(a) {
            return jQuery.type(a) === "function";
        },
        isArray: Array.isArray || function(a) {
            return jQuery.type(a) === "array";
        },
        isWindow: function(a) {
            return a != null && a == a.window;
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        type: function(a) {
            if (a == null) {
                return String(a);
            }
            return typeof a === "object" || typeof a === "function" ? k[r.call(a)] || "object" : typeof a;
        },
        isPlainObject: function(a) {
            var c;
            if (!a || jQuery.type(a) !== "object" || a.nodeType || jQuery.isWindow(a)) {
                return false;
            }
            try {
                if (a.constructor && !s.call(a, "constructor") && !s.call(a.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (d) {
                return false;
            }
            if (jQuery.support.ownLast) {
                for (c in a) {
                    return s.call(a, c);
                }
            }
            for (c in a) {}
            return c === b || s.call(a, c);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return false;
            }
            return true;
        },
        error: function(a) {
            throw new Error(a);
        },
        parseHTML: function(a, b, c) {
            if (!a || typeof a !== "string") {
                return null;
            }
            if (typeof b === "boolean") {
                c = b;
                b = false;
            }
            b = b || g;
            var d = y.exec(a), e = !c && [];
            if (d) {
                return [ b.createElement(d[1]) ];
            }
            d = jQuery.buildFragment([ a ], b, e);
            if (e) {
                jQuery(e).remove();
            }
            return jQuery.merge([], d.childNodes);
        },
        parseJSON: function(b) {
            if (a.JSON && a.JSON.parse) {
                return a.JSON.parse(b);
            }
            if (b === null) {
                return b;
            }
            if (typeof b === "string") {
                b = jQuery.trim(b);
                if (b) {
                    if (z.test(b.replace(B, "@").replace(C, "]").replace(A, ""))) {
                        return new Function("return " + b)();
                    }
                }
            }
            jQuery.error("Invalid JSON: " + b);
        },
        parseXML: function(c) {
            var d, e;
            if (!c || typeof c !== "string") {
                return null;
            }
            try {
                if (a.DOMParser) {
                    e = new DOMParser();
                    d = e.parseFromString(c, "text/xml");
                } else {
                    d = new ActiveXObject("Microsoft.XMLDOM");
                    d.async = "false";
                    d.loadXML(c);
                }
            } catch (f) {
                d = b;
            }
            if (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + c);
            }
            return d;
        },
        noop: function() {},
        globalEval: function(b) {
            if (b && jQuery.trim(b)) {
                (a.execScript || function(b) {
                    a["eval"].call(a, b);
                })(b);
            }
        },
        camelCase: function(a) {
            return a.replace(D, "ms-").replace(E, F);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = I(a);
            if (c) {
                if (g) {
                    for (;e < f; e++) {
                        d = b.apply(a[e], c);
                        if (d === false) {
                            break;
                        }
                    }
                } else {
                    for (e in a) {
                        d = b.apply(a[e], c);
                        if (d === false) {
                            break;
                        }
                    }
                }
            } else {
                if (g) {
                    for (;e < f; e++) {
                        d = b.call(a[e], e, a[e]);
                        if (d === false) {
                            break;
                        }
                    }
                } else {
                    for (e in a) {
                        d = b.call(a[e], e, a[e]);
                        if (d === false) {
                            break;
                        }
                    }
                }
            }
            return a;
        },
        trim: t && !t.call("﻿ ") ? function(a) {
            return a == null ? "" : t.call(a);
        } : function(a) {
            return a == null ? "" : (a + "").replace(w, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            if (a != null) {
                if (I(Object(a))) {
                    jQuery.merge(c, typeof a === "string" ? [ a ] : a);
                } else {
                    o.call(c, a);
                }
            }
            return c;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (q) {
                    return q.call(b, a, c);
                }
                d = b.length;
                c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (;c < d; c++) {
                    if (c in b && b[c] === a) {
                        return c;
                    }
                }
            }
            return -1;
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if (typeof d === "number") {
                for (;f < d; f++) {
                    a[e++] = c[f];
                }
            } else {
                while (c[f] !== b) {
                    a[e++] = c[f++];
                }
            }
            a.length = e;
            return a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            c = !!c;
            for (;f < g; f++) {
                d = !!b(a[f], f);
                if (c !== d) {
                    e.push(a[f]);
                }
            }
            return e;
        },
        map: function(a, b, c) {
            var d, e = 0, f = a.length, g = I(a), h = [];
            if (g) {
                for (;e < f; e++) {
                    d = b(a[e], e, c);
                    if (d != null) {
                        h[h.length] = d;
                    }
                }
            } else {
                for (e in a) {
                    d = b(a[e], e, c);
                    if (d != null) {
                        h[h.length] = d;
                    }
                }
            }
            return n.apply([], h);
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            if (typeof c === "string") {
                f = a[c];
                c = a;
                a = f;
            }
            if (!jQuery.isFunction(a)) {
                return b;
            }
            d = p.call(arguments, 2);
            e = function() {
                return a.apply(c || this, d.concat(p.call(arguments)));
            };
            e.guid = a.guid = a.guid || jQuery.guid++;
            return e;
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = d == null;
            if (jQuery.type(d) === "object") {
                f = true;
                for (i in d) {
                    jQuery.access(a, c, i, d[i], true, g, h);
                }
            } else if (e !== b) {
                f = true;
                if (!jQuery.isFunction(e)) {
                    h = true;
                }
                if (k) {
                    if (h) {
                        c.call(a, e);
                        c = null;
                    } else {
                        k = c;
                        c = function(a, b, c) {
                            return k.call(jQuery(a), c);
                        };
                    }
                }
                if (c) {
                    for (;i < j; i++) {
                        c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
                    }
                }
            }
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) {
                g[f] = a.style[f];
                a.style[f] = b[f];
            }
            e = c.apply(a, d || []);
            for (f in b) {
                a.style[f] = g[f];
            }
            return e;
        }
    });
    jQuery.ready.promise = function(b) {
        if (!c) {
            c = jQuery.Deferred();
            if (g.readyState === "complete") {
                setTimeout(jQuery.ready);
            } else if (g.addEventListener) {
                g.addEventListener("DOMContentLoaded", G, false);
                a.addEventListener("load", G, false);
            } else {
                g.attachEvent("onreadystatechange", G);
                a.attachEvent("onload", G);
                var d = false;
                try {
                    d = a.frameElement == null && g.documentElement;
                } catch (e) {}
                if (d && d.doScroll) {
                    (function f() {
                        if (!jQuery.isReady) {
                            try {
                                d.doScroll("left");
                            } catch (a) {
                                return setTimeout(f, 50);
                            }
                            H();
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return c.promise(b);
    };
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        k["[object " + b + "]"] = b.toLowerCase();
    });
    function I(a) {
        var b = a.length, c = jQuery.type(a);
        if (jQuery.isWindow(a)) {
            return false;
        }
        if (a.nodeType === 1 && b) {
            return true;
        }
        return c === "array" || c !== "function" && (b === 0 || typeof b === "number" && b > 0 && b - 1 in a);
    }
    d = jQuery(g);
    (function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = "sizzle" + -new Date(), u = a.document, v = 0, w = 0, x = gb(), y = gb(), z = gb(), A = false, B = function(a, b) {
            if (a === b) {
                A = true;
                return 0;
            }
            return 0;
        }, C = typeof b, D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            var b = 0, c = this.length;
            for (;b < c; b++) {
                if (this[b] === a) {
                    return b;
                }
            }
            return -1;
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + M + "*\\]", Q = ":(" + N + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "*[+~]"), V = new RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"), W = new RegExp(Q), X = new RegExp("^" + O + "$"), Y = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /^(?:input|select|textarea|button)$/i, ab = /^h\d$/i, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320);
        };
        try {
            I.apply(F = J.call(u.childNodes), u.childNodes);
            F[u.childNodes.length].nodeType;
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1;
                }
            };
        }
        function fb(a, b, c, e) {
            var f, g, h, i, j, k, n, q, r, v;
            if ((b ? b.ownerDocument || b : u) !== m) {
                l(b);
            }
            b = b || m;
            c = c || [];
            if (!a || typeof a !== "string") {
                return c;
            }
            if ((i = b.nodeType) !== 1 && i !== 9) {
                return [];
            }
            if (o && !e) {
                if (f = $.exec(a)) {
                    if (h = f[1]) {
                        if (i === 9) {
                            g = b.getElementById(h);
                            if (g && g.parentNode) {
                                if (g.id === h) {
                                    c.push(g);
                                    return c;
                                }
                            } else {
                                return c;
                            }
                        } else {
                            if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && s(b, g) && g.id === h) {
                                c.push(g);
                                return c;
                            }
                        }
                    } else if (f[2]) {
                        I.apply(c, b.getElementsByTagName(a));
                        return c;
                    } else if ((h = f[3]) && d.getElementsByClassName && b.getElementsByClassName) {
                        I.apply(c, b.getElementsByClassName(h));
                        return c;
                    }
                }
                if (d.qsa && (!p || !p.test(a))) {
                    q = n = t;
                    r = b;
                    v = i === 9 && a;
                    if (i === 1 && b.nodeName.toLowerCase() !== "object") {
                        k = pb(a);
                        if (n = b.getAttribute("id")) {
                            q = n.replace(bb, "\\$&");
                        } else {
                            b.setAttribute("id", q);
                        }
                        q = "[id='" + q + "'] ";
                        j = k.length;
                        while (j--) {
                            k[j] = q + qb(k[j]);
                        }
                        r = U.test(a) && b.parentNode || b;
                        v = k.join(",");
                    }
                    if (v) {
                        try {
                            I.apply(c, r.querySelectorAll(v));
                            return c;
                        } catch (w) {} finally {
                            if (!n) {
                                b.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return yb(a.replace(R, "$1"), b, c, e);
        }
        function gb() {
            var a = [];
            function b(c, d) {
                if (a.push(c += " ") > f.cacheLength) {
                    delete b[a.shift()];
                }
                return b[c] = d;
            }
            return b;
        }
        function hb(a) {
            a[t] = true;
            return a;
        }
        function ib(a) {
            var b = m.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return false;
            } finally {
                if (b.parentNode) {
                    b.parentNode.removeChild(b);
                }
                b = null;
            }
        }
        function jb(a, b) {
            var c = a.split("|"), d = a.length;
            while (d--) {
                f.attrHandle[c[d]] = b;
            }
        }
        function kb(a, b) {
            var c = b && a, d = c && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) {
                return d;
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a;
            };
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type === a;
            };
        }
        function nb(a) {
            return hb(function(b) {
                b = +b;
                return hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) {
                        if (c[e = f[g]]) {
                            c[e] = !(d[e] = c[e]);
                        }
                    }
                });
            });
        }
        h = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : false;
        };
        d = fb.support = {};
        l = fb.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : u, c = b.defaultView;
            if (b === m || b.nodeType !== 9 || !b.documentElement) {
                return m;
            }
            m = b;
            n = b.documentElement;
            o = !h(b);
            if (c && c.attachEvent && c !== c.top) {
                c.attachEvent("onbeforeunload", function() {
                    l();
                });
            }
            d.attributes = ib(function(a) {
                a.className = "i";
                return !a.getAttribute("className");
            });
            d.getElementsByTagName = ib(function(a) {
                a.appendChild(b.createComment(""));
                return !a.getElementsByTagName("*").length;
            });
            d.getElementsByClassName = ib(function(a) {
                a.innerHTML = "<div class='a'></div><div class='a i'></div>";
                a.firstChild.className = "i";
                return a.getElementsByClassName("i").length === 2;
            });
            d.getById = ib(function(a) {
                n.appendChild(a).id = t;
                return !b.getElementsByName || !b.getElementsByName(t).length;
            });
            if (d.getById) {
                f.find["ID"] = function(a, b) {
                    if (typeof b.getElementById !== C && o) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [ c ] : [];
                    }
                };
                f.filter["ID"] = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        return a.getAttribute("id") === b;
                    };
                };
            } else {
                delete f.find["ID"];
                f.filter["ID"] = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                        return c && c.value === b;
                    };
                };
            }
            f.find["TAG"] = d.getElementsByTagName ? function(a, b) {
                if (typeof b.getElementsByTagName !== C) {
                    return b.getElementsByTagName(a);
                }
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if (a === "*") {
                    while (c = f[e++]) {
                        if (c.nodeType === 1) {
                            d.push(c);
                        }
                    }
                    return d;
                }
                return f;
            };
            f.find["CLASS"] = d.getElementsByClassName && function(a, b) {
                if (typeof b.getElementsByClassName !== C && o) {
                    return b.getElementsByClassName(a);
                }
            };
            q = [];
            p = [];
            if (d.qsa = Z.test(b.querySelectorAll)) {
                ib(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>";
                    if (!a.querySelectorAll("[selected]").length) {
                        p.push("\\[" + M + "*(?:value|" + L + ")");
                    }
                    if (!a.querySelectorAll(":checked").length) {
                        p.push(":checked");
                    }
                });
                ib(function(a) {
                    var c = b.createElement("input");
                    c.setAttribute("type", "hidden");
                    a.appendChild(c).setAttribute("t", "");
                    if (a.querySelectorAll("[t^='']").length) {
                        p.push("[*^$]=" + M + "*(?:''|\"\")");
                    }
                    if (!a.querySelectorAll(":enabled").length) {
                        p.push(":enabled", ":disabled");
                    }
                    a.querySelectorAll("*,:x");
                    p.push(",.*:");
                });
            }
            if (d.matchesSelector = Z.test(r = n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) {
                ib(function(a) {
                    d.disconnectedMatch = r.call(a, "div");
                    r.call(a, "[s!='']:x");
                    q.push("!=", Q);
                });
            }
            p = p.length && new RegExp(p.join("|"));
            q = q.length && new RegExp(q.join("|"));
            s = Z.test(n.contains) || n.compareDocumentPosition ? function(a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !!(d && d.nodeType === 1 && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            B = n.compareDocumentPosition ? function(a, c) {
                if (a === c) {
                    A = true;
                    return 0;
                }
                var e = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                if (e) {
                    if (e & 1 || !d.sortDetached && c.compareDocumentPosition(a) === e) {
                        if (a === b || s(u, a)) {
                            return -1;
                        }
                        if (c === b || s(u, c)) {
                            return 1;
                        }
                        return k ? K.call(k, a) - K.call(k, c) : 0;
                    }
                    return e & 4 ? -1 : 1;
                }
                return a.compareDocumentPosition ? -1 : 1;
            } : function(a, c) {
                var d, e = 0, f = a.parentNode, g = c.parentNode, h = [ a ], i = [ c ];
                if (a === c) {
                    A = true;
                    return 0;
                } else if (!f || !g) {
                    return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, c) : 0;
                } else if (f === g) {
                    return kb(a, c);
                }
                d = a;
                while (d = d.parentNode) {
                    h.unshift(d);
                }
                d = c;
                while (d = d.parentNode) {
                    i.unshift(d);
                }
                while (h[e] === i[e]) {
                    e++;
                }
                return e ? kb(h[e], i[e]) : h[e] === u ? -1 : i[e] === u ? 1 : 0;
            };
            return b;
        };
        fb.matches = function(a, b) {
            return fb(a, null, null, b);
        };
        fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== m) {
                l(a);
            }
            b = b.replace(V, "='$1']");
            if (d.matchesSelector && o && (!q || !q.test(b)) && (!p || !p.test(b))) {
                try {
                    var c = r.call(a, b);
                    if (c || d.disconnectedMatch || a.document && a.document.nodeType !== 11) {
                        return c;
                    }
                } catch (e) {}
            }
            return fb(b, m, null, [ a ]).length > 0;
        };
        fb.contains = function(a, b) {
            if ((a.ownerDocument || a) !== m) {
                l(a);
            }
            return s(a, b);
        };
        fb.attr = function(a, c) {
            if ((a.ownerDocument || a) !== m) {
                l(a);
            }
            var e = f.attrHandle[c.toLowerCase()], g = e && E.call(f.attrHandle, c.toLowerCase()) ? e(a, c, !o) : b;
            return g === b ? d.attributes || !o ? a.getAttribute(c) : (g = a.getAttributeNode(c)) && g.specified ? g.value : null : g;
        };
        fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        };
        fb.uniqueSort = function(a) {
            var b, c = [], e = 0, f = 0;
            A = !d.detectDuplicates;
            k = !d.sortStable && a.slice(0);
            a.sort(B);
            if (A) {
                while (b = a[f++]) {
                    if (b === a[f]) {
                        e = c.push(f);
                    }
                }
                while (e--) {
                    a.splice(c[e], 1);
                }
            }
            return a;
        };
        g = fb.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (!e) {
                for (;b = a[d]; d++) {
                    c += g(b);
                }
            } else if (e === 1 || e === 9 || e === 11) {
                if (typeof a.textContent === "string") {
                    return a.textContent;
                } else {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += g(a);
                    }
                }
            } else if (e === 3 || e === 4) {
                return a.nodeValue;
            }
            return c;
        };
        f = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(cb, db);
                    a[3] = (a[4] || a[5] || "").replace(cb, db);
                    if (a[2] === "~=") {
                        a[3] = " " + a[3] + " ";
                    }
                    return a.slice(0, 4);
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    if (a[1].slice(0, 3) === "nth") {
                        if (!a[3]) {
                            fb.error(a[0]);
                        }
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (a[3] === "even" || a[3] === "odd"));
                        a[5] = +(a[7] + a[8] || a[3] === "odd");
                    } else if (a[3]) {
                        fb.error(a[0]);
                    }
                    return a;
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    if (Y["CHILD"].test(a[0])) {
                        return null;
                    }
                    if (a[3] && a[4] !== b) {
                        a[2] = a[4];
                    } else if (d && W.test(d) && (c = pb(d, true)) && (c = d.indexOf(")", d.length - c) - d.length)) {
                        a[0] = a[0].slice(0, c);
                        a[2] = d.slice(0, c);
                    }
                    return a.slice(0, 3);
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return a === "*" ? function() {
                        return true;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = x[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && x(a, function(a) {
                        return b.test(typeof a.className === "string" && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        if (e == null) {
                            return b === "!=";
                        }
                        if (!b) {
                            return true;
                        }
                        e += "";
                        return b === "=" ? e === c : b === "!=" ? e !== c : b === "^=" ? c && e.indexOf(c) === 0 : b === "*=" ? c && e.indexOf(c) > -1 : b === "$=" ? c && e.slice(-c.length) === c : b === "~=" ? (" " + e + " ").indexOf(c) > -1 : b === "|=" ? e === c || e.slice(0, c.length + 1) === c + "-" : false;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = a.slice(0, 3) !== "nth", g = a.slice(-4) !== "last", h = b === "of-type";
                    return d === 1 && e === 0 ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : l.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    o = p = a === "only" && !o && "nextSibling";
                                }
                                return true;
                            }
                            o = [ g ? q.firstChild : q.lastChild ];
                            if (g && s) {
                                k = q[t] || (q[t] = {});
                                j = k[a] || [];
                                n = j[0] === v && j[1];
                                m = j[0] === v && j[2];
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (l.nodeType === 1 && ++m && l === b) {
                                        k[a] = [ v, n, m ];
                                        break;
                                    }
                                }
                            } else if (s && (j = (b[t] || (b[t] = {}))[a]) && j[0] === v) {
                                m = j[1];
                            } else {
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if ((h ? l.nodeName.toLowerCase() === r : l.nodeType === 1) && ++m) {
                                        if (s) {
                                            (l[t] || (l[t] = {}))[a] = [ v, m ];
                                        }
                                        if (l === b) {
                                            break;
                                        }
                                    }
                                }
                            }
                            m -= e;
                            return m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, d = f.pseudos[a] || f.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    if (d[t]) {
                        return d(b);
                    }
                    if (d.length > 1) {
                        c = [ a, a, "", b ];
                        return f.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                            var e, f = d(a, b), g = f.length;
                            while (g--) {
                                e = K.call(a, f[g]);
                                a[e] = !(c[e] = f[g]);
                            }
                        }) : function(a) {
                            return d(a, 0, c);
                        };
                    }
                    return d;
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [], c = [], d = i(a.replace(R, "$1"));
                    return d[t] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) {
                            if (f = g[h]) {
                                a[h] = !(b[h] = f);
                            }
                        }
                    }) : function(a, e, f) {
                        b[0] = a;
                        d(b, null, f, c);
                        return !c.pop();
                    };
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0;
                    };
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || g(b)).indexOf(a) > -1;
                    };
                }),
                lang: hb(function(a) {
                    if (!X.test(a || "")) {
                        fb.error("unsupported lang: " + a);
                    }
                    a = a.replace(cb, db).toLowerCase();
                    return function(b) {
                        var c;
                        do {
                            if (c = o ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                c = c.toLowerCase();
                                return c === a || c.indexOf(a + "-") === 0;
                            }
                        } while ((b = b.parentNode) && b.nodeType === 1);
                        return false;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === n;
                },
                focus: function(a) {
                    return a === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === false;
                },
                disabled: function(a) {
                    return a.disabled === true;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && !!a.checked || b === "option" && !!a.selected;
                },
                selected: function(a) {
                    if (a.parentNode) {
                        a.parentNode.selectedIndex;
                    }
                    return a.selected === true;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeName > "@" || a.nodeType === 3 || a.nodeType === 4) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(a) {
                    return !f.pseudos["empty"](a);
                },
                header: function(a) {
                    return ab.test(a.nodeName);
                },
                input: function(a) {
                    return _.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && a.type === "button" || b === "button";
                },
                text: function(a) {
                    var b;
                    return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((b = a.getAttribute("type")) == null || b.toLowerCase() === a.type);
                },
                first: nb(function() {
                    return [ 0 ];
                }),
                last: nb(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: nb(function(a, b, c) {
                    return [ c < 0 ? c + b : c ];
                }),
                even: nb(function(a, b) {
                    var c = 0;
                    for (;c < b; c += 2) {
                        a.push(c);
                    }
                    return a;
                }),
                odd: nb(function(a, b) {
                    var c = 1;
                    for (;c < b; c += 2) {
                        a.push(c);
                    }
                    return a;
                }),
                lt: nb(function(a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (;--d >= 0; ) {
                        a.push(d);
                    }
                    return a;
                }),
                gt: nb(function(a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (;++d < b; ) {
                        a.push(d);
                    }
                    return a;
                })
            }
        };
        f.pseudos["nth"] = f.pseudos["eq"];
        for (c in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            f.pseudos[c] = lb(c);
        }
        for (c in {
            submit: true,
            reset: true
        }) {
            f.pseudos[c] = mb(c);
        }
        function ob() {}
        ob.prototype = f.filters = f.pseudos;
        f.setFilters = new ob();
        function pb(a, b) {
            var c, d, e, g, h, i, j, k = y[a + " "];
            if (k) {
                return b ? 0 : k.slice(0);
            }
            h = a;
            i = [];
            j = f.preFilter;
            while (h) {
                if (!c || (d = S.exec(h))) {
                    if (d) {
                        h = h.slice(d[0].length) || h;
                    }
                    i.push(e = []);
                }
                c = false;
                if (d = T.exec(h)) {
                    c = d.shift();
                    e.push({
                        value: c,
                        type: d[0].replace(R, " ")
                    });
                    h = h.slice(c.length);
                }
                for (g in f.filter) {
                    if ((d = Y[g].exec(h)) && (!j[g] || (d = j[g](d)))) {
                        c = d.shift();
                        e.push({
                            value: c,
                            type: g,
                            matches: d
                        });
                        h = h.slice(c.length);
                    }
                }
                if (!c) {
                    break;
                }
            }
            return b ? h.length : h ? fb.error(a) : y(a, i).slice(0);
        }
        function qb(a) {
            var b = 0, c = a.length, d = "";
            for (;b < c; b++) {
                d += a[b].value;
            }
            return d;
        }
        function rb(a, b, c) {
            var d = b.dir, f = c && d === "parentNode", g = w++;
            return b.first ? function(b, c, e) {
                while (b = b[d]) {
                    if (b.nodeType === 1 || f) {
                        return a(b, c, e);
                    }
                }
            } : function(b, c, h) {
                var i, j, k, l = v + " " + g;
                if (h) {
                    while (b = b[d]) {
                        if (b.nodeType === 1 || f) {
                            if (a(b, c, h)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (b.nodeType === 1 || f) {
                            k = b[t] || (b[t] = {});
                            if ((j = k[d]) && j[0] === l) {
                                if ((i = j[1]) === true || i === e) {
                                    return i === true;
                                }
                            } else {
                                j = k[d] = [ l ];
                                j[1] = a(b, c, h) || e;
                                if (j[1] === true) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return false;
                    }
                }
                return true;
            } : a[0];
        }
        function tb(a, b, c, d, e) {
            var f, g = [], h = 0, i = a.length, j = b != null;
            for (;h < i; h++) {
                if (f = a[h]) {
                    if (!c || c(f, d, e)) {
                        g.push(f);
                        if (j) {
                            b.push(h);
                        }
                    }
                }
            }
            return g;
        }
        function ub(a, b, c, d, e, f) {
            if (d && !d[t]) {
                d = ub(d);
            }
            if (e && !e[t]) {
                e = ub(e, f);
            }
            return hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || xb(b || "*", h.nodeType ? [ h ] : h, []), q = a && (f || !b) ? tb(p, m, a, h, i) : p, r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c) {
                    c(q, r, h, i);
                }
                if (d) {
                    j = tb(r, n);
                    d(j, [], h, i);
                    k = j.length;
                    while (k--) {
                        if (l = j[k]) {
                            r[n[k]] = !(q[n[k]] = l);
                        }
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [];
                            k = r.length;
                            while (k--) {
                                if (l = r[k]) {
                                    j.push(q[k] = l);
                                }
                            }
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) {
                            if ((l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1) {
                                f[j] = !(g[j] = l);
                            }
                        }
                    }
                } else {
                    r = tb(r === g ? r.splice(o, r.length) : r);
                    if (e) {
                        e(null, g, r, i);
                    } else {
                        I.apply(g, r);
                    }
                }
            });
        }
        function vb(a) {
            var b, c, d, e = a.length, g = f.relative[a[0].type], h = g || f.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b;
            }, h, true), l = rb(function(a) {
                return K.call(b, a) > -1;
            }, h, true), m = [ function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
            } ];
            for (;i < e; i++) {
                if (c = f.relative[a[i].type]) {
                    m = [ rb(sb(m), c) ];
                } else {
                    c = f.filter[a[i].type].apply(null, a[i].matches);
                    if (c[t]) {
                        d = ++i;
                        for (;d < e; d++) {
                            if (f.relative[a[d].type]) {
                                break;
                            }
                        }
                        return ub(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: a[i - 2].type === " " ? "*" : ""
                        })).replace(R, "$1"), c, i < d && vb(a.slice(i, d)), d < e && vb(a = a.slice(d)), d < e && qb(a));
                    }
                    m.push(c);
                }
            }
            return sb(m);
        }
        function wb(a, b) {
            var c = 0, d = b.length > 0, g = a.length > 0, h = function(h, i, k, l, n) {
                var o, p, q, r = [], s = 0, t = "0", u = h && [], w = n != null, x = j, y = h || g && f.find["TAG"]("*", n && i.parentNode || i), z = v += x == null ? 1 : Math.random() || .1;
                if (w) {
                    j = i !== m && i;
                    e = c;
                }
                for (;(o = y[t]) != null; t++) {
                    if (g && o) {
                        p = 0;
                        while (q = a[p++]) {
                            if (q(o, i, k)) {
                                l.push(o);
                                break;
                            }
                        }
                        if (w) {
                            v = z;
                            e = ++c;
                        }
                    }
                    if (d) {
                        if (o = !q && o) {
                            s--;
                        }
                        if (h) {
                            u.push(o);
                        }
                    }
                }
                s += t;
                if (d && t !== s) {
                    p = 0;
                    while (q = b[p++]) {
                        q(u, r, i, k);
                    }
                    if (h) {
                        if (s > 0) {
                            while (t--) {
                                if (!(u[t] || r[t])) {
                                    r[t] = G.call(l);
                                }
                            }
                        }
                        r = tb(r);
                    }
                    I.apply(l, r);
                    if (w && !h && r.length > 0 && s + b.length > 1) {
                        fb.uniqueSort(l);
                    }
                }
                if (w) {
                    v = z;
                    j = x;
                }
                return u;
            };
            return d ? hb(h) : h;
        }
        i = fb.compile = function(a, b) {
            var c, d = [], e = [], f = z[a + " "];
            if (!f) {
                if (!b) {
                    b = pb(a);
                }
                c = b.length;
                while (c--) {
                    f = vb(b[c]);
                    if (f[t]) {
                        d.push(f);
                    } else {
                        e.push(f);
                    }
                }
                f = z(a, wb(e, d));
            }
            return f;
        };
        function xb(a, b, c) {
            var d = 0, e = b.length;
            for (;d < e; d++) {
                fb(a, b[d], c);
            }
            return c;
        }
        function yb(a, b, c, e) {
            var g, h, j, k, l, m = pb(a);
            if (!e) {
                if (m.length === 1) {
                    h = m[0] = m[0].slice(0);
                    if (h.length > 2 && (j = h[0]).type === "ID" && d.getById && b.nodeType === 9 && o && f.relative[h[1].type]) {
                        b = (f.find["ID"](j.matches[0].replace(cb, db), b) || [])[0];
                        if (!b) {
                            return c;
                        }
                        a = a.slice(h.shift().value.length);
                    }
                    g = Y["needsContext"].test(a) ? 0 : h.length;
                    while (g--) {
                        j = h[g];
                        if (f.relative[k = j.type]) {
                            break;
                        }
                        if (l = f.find[k]) {
                            if (e = l(j.matches[0].replace(cb, db), U.test(h[0].type) && b.parentNode || b)) {
                                h.splice(g, 1);
                                a = e.length && qb(h);
                                if (!a) {
                                    I.apply(c, e);
                                    return c;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            i(a, m)(e, b, !o, c, U.test(a));
            return c;
        }
        d.sortStable = t.split("").sort(B).join("") === t;
        d.detectDuplicates = A;
        l();
        d.sortDetached = ib(function(a) {
            return a.compareDocumentPosition(m.createElement("div")) & 1;
        });
        if (!ib(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return a.firstChild.getAttribute("href") === "#";
        })) {
            jb("type|href|height|width", function(a, b, c) {
                if (!c) {
                    return a.getAttribute(b, b.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!d.attributes || !ib(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return a.firstChild.getAttribute("value") === "";
        })) {
            jb("value", function(a, b, c) {
                if (!c && a.nodeName.toLowerCase() === "input") {
                    return a.defaultValue;
                }
            });
        }
        if (!ib(function(a) {
            return a.getAttribute("disabled") == null;
        })) {
            jb(L, function(a, b, c) {
                var d;
                if (!c) {
                    return (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === true ? b.toLowerCase() : null;
                }
            });
        }
        jQuery.find = fb;
        jQuery.expr = fb.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = fb.uniqueSort;
        jQuery.text = fb.getText;
        jQuery.isXMLDoc = fb.isXML;
        jQuery.contains = fb.contains;
    })(a);
    var J = {};
    function K(a) {
        var b = J[a] = {};
        jQuery.each(a.match(v) || [], function(a, c) {
            b[c] = true;
        });
        return b;
    }
    jQuery.Callbacks = function(a) {
        a = typeof a === "string" ? J[a] || K(a) : jQuery.extend({}, a);
        var c, d, e, f, g, h, i = [], j = !a.once && [], k = function(b) {
            d = a.memory && b;
            e = true;
            g = h || 0;
            h = 0;
            f = i.length;
            c = true;
            for (;i && g < f; g++) {
                if (i[g].apply(b[0], b[1]) === false && a.stopOnFalse) {
                    d = false;
                    break;
                }
            }
            c = false;
            if (i) {
                if (j) {
                    if (j.length) {
                        k(j.shift());
                    }
                } else if (d) {
                    i = [];
                } else {
                    l.disable();
                }
            }
        }, l = {
            add: function() {
                if (i) {
                    var b = i.length;
                    (function e(b) {
                        jQuery.each(b, function(b, c) {
                            var d = jQuery.type(c);
                            if (d === "function") {
                                if (!a.unique || !l.has(c)) {
                                    i.push(c);
                                }
                            } else if (c && c.length && d !== "string") {
                                e(c);
                            }
                        });
                    })(arguments);
                    if (c) {
                        f = i.length;
                    } else if (d) {
                        h = b;
                        k(d);
                    }
                }
                return this;
            },
            remove: function() {
                if (i) {
                    jQuery.each(arguments, function(a, b) {
                        var d;
                        while ((d = jQuery.inArray(b, i, d)) > -1) {
                            i.splice(d, 1);
                            if (c) {
                                if (d <= f) {
                                    f--;
                                }
                                if (d <= g) {
                                    g--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(a) {
                return a ? jQuery.inArray(a, i) > -1 : !!(i && i.length);
            },
            empty: function() {
                i = [];
                f = 0;
                return this;
            },
            disable: function() {
                i = j = d = b;
                return this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                j = b;
                if (!d) {
                    l.disable();
                }
                return this;
            },
            locked: function() {
                return !j;
            },
            fireWith: function(a, b) {
                if (i && (!e || j)) {
                    b = b || [];
                    b = [ a, b.slice ? b.slice() : b ];
                    if (c) {
                        j.push(b);
                    } else {
                        k(b);
                    }
                }
                return this;
            },
            fire: function() {
                l.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!e;
            }
        };
        return l;
    };
    jQuery.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    e.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var a = arguments;
                    return jQuery.Deferred(function(c) {
                        jQuery.each(b, function(b, f) {
                            var g = f[0], h = jQuery.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                if (a && jQuery.isFunction(a.promise)) {
                                    a.promise().done(c.resolve).fail(c.reject).progress(c.notify);
                                } else {
                                    c[g + "With"](this === d ? c.promise() : this, h ? [ a ] : arguments);
                                }
                            });
                        });
                        a = null;
                    }).promise();
                },
                promise: function(a) {
                    return a != null ? jQuery.extend(a, d) : d;
                }
            }, e = {};
            d.pipe = d.then;
            jQuery.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add;
                if (h) {
                    g.add(function() {
                        c = h;
                    }, b[a ^ 1][2].disable, b[2][2].lock);
                }
                e[f[0]] = function() {
                    e[f[0] + "With"](this === e ? d : this, arguments);
                    return this;
                };
                e[f[0] + "With"] = g.fireWith;
            });
            d.promise(e);
            if (a) {
                a.call(e, e);
            }
            return e;
        },
        when: function(a) {
            var b = 0, c = p.call(arguments), d = c.length, e = d !== 1 || a && jQuery.isFunction(a.promise) ? d : 0, f = e === 1 ? a : jQuery.Deferred(), g = function(a, b, c) {
                return function(d) {
                    b[a] = this;
                    c[a] = arguments.length > 1 ? p.call(arguments) : d;
                    if (c === h) {
                        f.notifyWith(b, c);
                    } else if (!--e) {
                        f.resolveWith(b, c);
                    }
                };
            }, h, i, j;
            if (d > 1) {
                h = new Array(d);
                i = new Array(d);
                j = new Array(d);
                for (;b < d; b++) {
                    if (c[b] && jQuery.isFunction(c[b].promise)) {
                        c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h));
                    } else {
                        --e;
                    }
                }
            }
            if (!e) {
                f.resolveWith(j, c);
            }
            return f.promise();
        }
    });
    jQuery.support = function(b) {
        var c, d, f, h, i, j, k, l, m, n = g.createElement("div");
        n.setAttribute("className", "t");
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        c = n.getElementsByTagName("*") || [];
        d = n.getElementsByTagName("a")[0];
        if (!d || !d.style || !c.length) {
            return b;
        }
        h = g.createElement("select");
        j = h.appendChild(g.createElement("option"));
        f = n.getElementsByTagName("input")[0];
        d.style.cssText = "top:1px;float:left;opacity:.5";
        b.getSetAttribute = n.className !== "t";
        b.leadingWhitespace = n.firstChild.nodeType === 3;
        b.tbody = !n.getElementsByTagName("tbody").length;
        b.htmlSerialize = !!n.getElementsByTagName("link").length;
        b.style = /top/.test(d.getAttribute("style"));
        b.hrefNormalized = d.getAttribute("href") === "/a";
        b.opacity = /^0.5/.test(d.style.opacity);
        b.cssFloat = !!d.style.cssFloat;
        b.checkOn = !!f.value;
        b.optSelected = j.selected;
        b.enctype = !!g.createElement("form").enctype;
        b.html5Clone = g.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        b.inlineBlockNeedsLayout = false;
        b.shrinkWrapBlocks = false;
        b.pixelPosition = false;
        b.deleteExpando = true;
        b.noCloneEvent = true;
        b.reliableMarginRight = true;
        b.boxSizingReliable = true;
        f.checked = true;
        b.noCloneChecked = f.cloneNode(true).checked;
        h.disabled = true;
        b.optDisabled = !j.disabled;
        try {
            delete n.test;
        } catch (o) {
            b.deleteExpando = false;
        }
        f = g.createElement("input");
        f.setAttribute("value", "");
        b.input = f.getAttribute("value") === "";
        f.value = "t";
        f.setAttribute("type", "radio");
        b.radioValue = f.value === "t";
        f.setAttribute("checked", "t");
        f.setAttribute("name", "t");
        i = g.createDocumentFragment();
        i.appendChild(f);
        b.appendChecked = f.checked;
        b.checkClone = i.cloneNode(true).cloneNode(true).lastChild.checked;
        if (n.attachEvent) {
            n.attachEvent("onclick", function() {
                b.noCloneEvent = false;
            });
            n.cloneNode(true).click();
        }
        for (m in {
            submit: true,
            change: true,
            focusin: true
        }) {
            n.setAttribute(k = "on" + m, "t");
            b[m + "Bubbles"] = k in a || n.attributes[k].expando === false;
        }
        n.style.backgroundClip = "content-box";
        n.cloneNode(true).style.backgroundClip = "";
        b.clearCloneStyle = n.style.backgroundClip === "content-box";
        for (m in jQuery(b)) {
            break;
        }
        b.ownLast = m !== "0";
        jQuery(function() {
            var c, d, f, h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", i = g.getElementsByTagName("body")[0];
            if (!i) {
                return;
            }
            c = g.createElement("div");
            c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            i.appendChild(c).appendChild(n);
            n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            f = n.getElementsByTagName("td");
            f[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            l = f[0].offsetHeight === 0;
            f[0].style.display = "";
            f[1].style.display = "none";
            b.reliableHiddenOffsets = l && f[0].offsetHeight === 0;
            n.innerHTML = "";
            n.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            jQuery.swap(i, i.style.zoom != null ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = n.offsetWidth === 4;
            });
            if (a.getComputedStyle) {
                b.pixelPosition = (a.getComputedStyle(n, null) || {}).top !== "1%";
                b.boxSizingReliable = (a.getComputedStyle(n, null) || {
                    width: "4px"
                }).width === "4px";
                d = n.appendChild(g.createElement("div"));
                d.style.cssText = n.style.cssText = h;
                d.style.marginRight = d.style.width = "0";
                n.style.width = "1px";
                b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight);
            }
            if (typeof n.style.zoom !== e) {
                n.innerHTML = "";
                n.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1";
                b.inlineBlockNeedsLayout = n.offsetWidth === 3;
                n.style.display = "block";
                n.innerHTML = "<div></div>";
                n.firstChild.style.width = "5px";
                b.shrinkWrapBlocks = n.offsetWidth !== 3;
                if (b.inlineBlockNeedsLayout) {
                    i.style.zoom = 1;
                }
            }
            i.removeChild(c);
            c = n = f = d = null;
        });
        c = h = i = j = d = f = null;
        return b;
    }({});
    var L = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, M = /([A-Z])/g;
    function N(a, c, d, e) {
        if (!jQuery.acceptData(a)) {
            return;
        }
        var f, g, h = jQuery.expando, i = a.nodeType, j = i ? jQuery.cache : a, k = i ? a[h] : a[h] && h;
        if ((!k || !j[k] || !e && !j[k].data) && d === b && typeof c === "string") {
            return;
        }
        if (!k) {
            if (i) {
                k = a[h] = l.pop() || jQuery.guid++;
            } else {
                k = h;
            }
        }
        if (!j[k]) {
            j[k] = i ? {} : {
                toJSON: jQuery.noop
            };
        }
        if (typeof c === "object" || typeof c === "function") {
            if (e) {
                j[k] = jQuery.extend(j[k], c);
            } else {
                j[k].data = jQuery.extend(j[k].data, c);
            }
        }
        g = j[k];
        if (!e) {
            if (!g.data) {
                g.data = {};
            }
            g = g.data;
        }
        if (d !== b) {
            g[jQuery.camelCase(c)] = d;
        }
        if (typeof c === "string") {
            f = g[c];
            if (f == null) {
                f = g[jQuery.camelCase(c)];
            }
        } else {
            f = g;
        }
        return f;
    }
    function O(a, b, c) {
        if (!jQuery.acceptData(a)) {
            return;
        }
        var d, e, f = a.nodeType, g = f ? jQuery.cache : a, h = f ? a[jQuery.expando] : jQuery.expando;
        if (!g[h]) {
            return;
        }
        if (b) {
            d = c ? g[h] : g[h].data;
            if (d) {
                if (!jQuery.isArray(b)) {
                    if (b in d) {
                        b = [ b ];
                    } else {
                        b = jQuery.camelCase(b);
                        if (b in d) {
                            b = [ b ];
                        } else {
                            b = b.split(" ");
                        }
                    }
                } else {
                    b = b.concat(jQuery.map(b, jQuery.camelCase));
                }
                e = b.length;
                while (e--) {
                    delete d[b[e]];
                }
                if (c ? !Q(d) : !jQuery.isEmptyObject(d)) {
                    return;
                }
            }
        }
        if (!c) {
            delete g[h].data;
            if (!Q(g[h])) {
                return;
            }
        }
        if (f) {
            jQuery.cleanData([ a ], true);
        } else if (jQuery.support.deleteExpando || g != g.window) {
            delete g[h];
        } else {
            g[h] = null;
        }
    }
    jQuery.extend({
        cache: {},
        noData: {
            applet: true,
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            a = a.nodeType ? jQuery.cache[a[jQuery.expando]] : a[jQuery.expando];
            return !!a && !Q(a);
        },
        data: function(a, b, c) {
            return N(a, b, c);
        },
        removeData: function(a, b) {
            return O(a, b);
        },
        _data: function(a, b, c) {
            return N(a, b, c, true);
        },
        _removeData: function(a, b) {
            return O(a, b, true);
        },
        acceptData: function(a) {
            if (a.nodeType && a.nodeType !== 1 && a.nodeType !== 9) {
                return false;
            }
            var b = a.nodeName && jQuery.noData[a.nodeName.toLowerCase()];
            return !b || b !== true && a.getAttribute("classid") === b;
        }
    });
    jQuery.fn.extend({
        data: function(a, c) {
            var d, e, f = null, g = 0, h = this[0];
            if (a === b) {
                if (this.length) {
                    f = jQuery.data(h);
                    if (h.nodeType === 1 && !jQuery._data(h, "parsedAttrs")) {
                        d = h.attributes;
                        for (;g < d.length; g++) {
                            e = d[g].name;
                            if (e.indexOf("data-") === 0) {
                                e = jQuery.camelCase(e.slice(5));
                                P(h, e, f[e]);
                            }
                        }
                        jQuery._data(h, "parsedAttrs", true);
                    }
                }
                return f;
            }
            if (typeof a === "object") {
                return this.each(function() {
                    jQuery.data(this, a);
                });
            }
            return arguments.length > 1 ? this.each(function() {
                jQuery.data(this, a, c);
            }) : h ? P(h, a, jQuery.data(h, a)) : null;
        },
        removeData: function(a) {
            return this.each(function() {
                jQuery.removeData(this, a);
            });
        }
    });
    function P(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(M, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d === "string") {
                try {
                    d = d === "true" ? true : d === "false" ? false : d === "null" ? null : +d + "" === d ? +d : L.test(d) ? jQuery.parseJSON(d) : d;
                } catch (f) {}
                jQuery.data(a, c, d);
            } else {
                d = b;
            }
        }
        return d;
    }
    function Q(a) {
        var b;
        for (b in a) {
            if (b === "data" && jQuery.isEmptyObject(a[b])) {
                continue;
            }
            if (b !== "toJSON") {
                return false;
            }
        }
        return true;
    }
    jQuery.extend({
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue";
                d = jQuery._data(a, b);
                if (c) {
                    if (!d || jQuery.isArray(c)) {
                        d = jQuery._data(a, b, jQuery.makeArray(c));
                    } else {
                        d.push(c);
                    }
                }
                return d || [];
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = jQuery.queue(a, b), d = c.length, e = c.shift(), f = jQuery._queueHooks(a, b), g = function() {
                jQuery.dequeue(a, b);
            };
            if (e === "inprogress") {
                e = c.shift();
                d--;
            }
            if (e) {
                if (b === "fx") {
                    c.unshift("inprogress");
                }
                delete f.stop;
                e.call(a, g, f);
            }
            if (!d && f) {
                f.empty.fire();
            }
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return jQuery._data(a, c) || jQuery._data(a, c, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery._removeData(a, b + "queue");
                    jQuery._removeData(a, c);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(a, c) {
            var d = 2;
            if (typeof a !== "string") {
                c = a;
                a = "fx";
                d--;
            }
            if (arguments.length < d) {
                return jQuery.queue(this[0], a);
            }
            return c === b ? this : this.each(function() {
                var b = jQuery.queue(this, a, c);
                jQuery._queueHooks(this, a);
                if (a === "fx" && b[0] !== "inprogress") {
                    jQuery.dequeue(this, a);
                }
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                jQuery.dequeue(this, a);
            });
        },
        delay: function(a, b) {
            a = jQuery.fx ? jQuery.fx.speeds[a] || a : a;
            b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, c) {
            var d, e = 1, f = jQuery.Deferred(), g = this, h = this.length, i = function() {
                if (!--e) {
                    f.resolveWith(g, [ g ]);
                }
            };
            if (typeof a !== "string") {
                c = a;
                a = b;
            }
            a = a || "fx";
            while (h--) {
                d = jQuery._data(g[h], a + "queueHooks");
                if (d && d.empty) {
                    e++;
                    d.empty.add(i);
                }
            }
            i();
            return f.promise(c);
        }
    });
    var R, S, T = /[\t\r\n\f]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, W = /^(?:a|area)$/i, X = /^(?:checked|selected)$/i, Y = jQuery.support.getSetAttribute, Z = jQuery.support.input;
    jQuery.fn.extend({
        attr: function(a, b) {
            return jQuery.access(this, jQuery.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                jQuery.removeAttr(this, a);
            });
        },
        prop: function(a, b) {
            return jQuery.access(this, jQuery.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            a = jQuery.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b;
                    delete this[a];
                } catch (c) {}
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = typeof a === "string" && a;
            if (jQuery.isFunction(a)) {
                return this.each(function(b) {
                    jQuery(this).addClass(a.call(this, b, this.className));
                });
            }
            if (i) {
                b = (a || "").match(v) || [];
                for (;g < h; g++) {
                    c = this[g];
                    d = c.nodeType === 1 && (c.className ? (" " + c.className + " ").replace(T, " ") : " ");
                    if (d) {
                        f = 0;
                        while (e = b[f++]) {
                            if (d.indexOf(" " + e + " ") < 0) {
                                d += e + " ";
                            }
                        }
                        c.className = jQuery.trim(d);
                    }
                }
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = arguments.length === 0 || typeof a === "string" && a;
            if (jQuery.isFunction(a)) {
                return this.each(function(b) {
                    jQuery(this).removeClass(a.call(this, b, this.className));
                });
            }
            if (i) {
                b = (a || "").match(v) || [];
                for (;g < h; g++) {
                    c = this[g];
                    d = c.nodeType === 1 && (c.className ? (" " + c.className + " ").replace(T, " ") : "");
                    if (d) {
                        f = 0;
                        while (e = b[f++]) {
                            while (d.indexOf(" " + e + " ") >= 0) {
                                d = d.replace(" " + e + " ", " ");
                            }
                        }
                        c.className = a ? jQuery.trim(d) : "";
                    }
                }
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            if (typeof b === "boolean" && c === "string") {
                return b ? this.addClass(a) : this.removeClass(a);
            }
            if (jQuery.isFunction(a)) {
                return this.each(function(c) {
                    jQuery(this).toggleClass(a.call(this, c, this.className, b), b);
                });
            }
            return this.each(function() {
                if (c === "string") {
                    var b, d = 0, f = jQuery(this), g = a.match(v) || [];
                    while (b = g[d++]) {
                        if (f.hasClass(b)) {
                            f.removeClass(b);
                        } else {
                            f.addClass(b);
                        }
                    }
                } else if (c === e || c === "boolean") {
                    if (this.className) {
                        jQuery._data(this, "__className__", this.className);
                    }
                    this.className = this.className || a === false ? "" : jQuery._data(this, "__className__") || "";
                }
            });
        },
        hasClass: function(a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (;c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(T, " ").indexOf(b) >= 0) {
                    return true;
                }
            }
            return false;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) {
                    d = jQuery.valHooks[f.type] || jQuery.valHooks[f.nodeName.toLowerCase()];
                    if (d && "get" in d && (c = d.get(f, "value")) !== b) {
                        return c;
                    }
                    c = f.value;
                    return typeof c === "string" ? c.replace(U, "") : c == null ? "" : c;
                }
                return;
            }
            e = jQuery.isFunction(a);
            return this.each(function(c) {
                var f;
                if (this.nodeType !== 1) {
                    return;
                }
                if (e) {
                    f = a.call(this, c, jQuery(this).val());
                } else {
                    f = a;
                }
                if (f == null) {
                    f = "";
                } else if (typeof f === "number") {
                    f += "";
                } else if (jQuery.isArray(f)) {
                    f = jQuery.map(f, function(a) {
                        return a == null ? "" : a + "";
                    });
                }
                d = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!d || !("set" in d) || d.set(this, f, "value") === b) {
                    this.value = f;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = jQuery.find.attr(a, "value");
                    return b != null ? b : a.text;
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.options, e = a.selectedIndex, f = a.type === "select-one" || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0;
                    for (;i < h; i++) {
                        c = d[i];
                        if ((c.selected || i === e) && (jQuery.support.optDisabled ? !c.disabled : c.getAttribute("disabled") === null) && (!c.parentNode.disabled || !jQuery.nodeName(c.parentNode, "optgroup"))) {
                            b = jQuery(c).val();
                            if (f) {
                                return b;
                            }
                            g.push(b);
                        }
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = jQuery.makeArray(b), g = e.length;
                    while (g--) {
                        d = e[g];
                        if (d.selected = jQuery.inArray(jQuery(d).val(), f) >= 0) {
                            c = true;
                        }
                    }
                    if (!c) {
                        a.selectedIndex = -1;
                    }
                    return f;
                }
            }
        },
        attr: function(a, c, d) {
            var f, g, h = a.nodeType;
            if (!a || h === 3 || h === 8 || h === 2) {
                return;
            }
            if (typeof a.getAttribute === e) {
                return jQuery.prop(a, c, d);
            }
            if (h !== 1 || !jQuery.isXMLDoc(a)) {
                c = c.toLowerCase();
                f = jQuery.attrHooks[c] || (jQuery.expr.match.bool.test(c) ? S : R);
            }
            if (d !== b) {
                if (d === null) {
                    jQuery.removeAttr(a, c);
                } else if (f && "set" in f && (g = f.set(a, d, c)) !== b) {
                    return g;
                } else {
                    a.setAttribute(c, d + "");
                    return d;
                }
            } else if (f && "get" in f && (g = f.get(a, c)) !== null) {
                return g;
            } else {
                g = jQuery.find.attr(a, c);
                return g == null ? b : g;
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(v);
            if (f && a.nodeType === 1) {
                while (c = f[e++]) {
                    d = jQuery.propFix[c] || c;
                    if (jQuery.expr.match.bool.test(c)) {
                        if (Z && Y || !X.test(c)) {
                            a[d] = false;
                        } else {
                            a[jQuery.camelCase("default-" + c)] = a[d] = false;
                        }
                    } else {
                        jQuery.attr(a, c, "");
                    }
                    a.removeAttribute(Y ? c : d);
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!jQuery.support.radioValue && b === "radio" && jQuery.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        if (c) {
                            a.value = c;
                        }
                        return b;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (!a || h === 3 || h === 8 || h === 2) {
                return;
            }
            g = h !== 1 || !jQuery.isXMLDoc(a);
            if (g) {
                c = jQuery.propFix[c] || c;
                f = jQuery.propHooks[c];
            }
            if (d !== b) {
                return f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d;
            } else {
                return f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c];
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = jQuery.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : V.test(a.nodeName) || W.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    });
    S = {
        set: function(a, b, c) {
            if (b === false) {
                jQuery.removeAttr(a, c);
            } else if (Z && Y || !X.test(c)) {
                a.setAttribute(!Y && jQuery.propFix[c] || c, c);
            } else {
                a[jQuery.camelCase("default-" + c)] = a[c] = true;
            }
            return c;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = jQuery.expr.attrHandle[c] || jQuery.find.attr;
        jQuery.expr.attrHandle[c] = Z && Y || !X.test(c) ? function(a, c, e) {
            var f = jQuery.expr.attrHandle[c], g = e ? b : (jQuery.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            jQuery.expr.attrHandle[c] = f;
            return g;
        } : function(a, c, d) {
            return d ? b : a[jQuery.camelCase("default-" + c)] ? c.toLowerCase() : null;
        };
    });
    if (!Z || !Y) {
        jQuery.attrHooks.value = {
            set: function(a, b, c) {
                if (jQuery.nodeName(a, "input")) {
                    a.defaultValue = b;
                } else {
                    return R && R.set(a, b, c);
                }
            }
        };
    }
    if (!Y) {
        R = {
            set: function(a, c, d) {
                var e = a.getAttributeNode(d);
                if (!e) {
                    a.setAttributeNode(e = a.ownerDocument.createAttribute(d));
                }
                e.value = c += "";
                return d === "value" || c === a.getAttribute(d) ? c : b;
            }
        };
        jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = function(a, c, d) {
            var e;
            return d ? b : (e = a.getAttributeNode(c)) && e.value !== "" ? e.value : null;
        };
        jQuery.valHooks.button = {
            get: function(a, c) {
                var d = a.getAttributeNode(c);
                return d && d.specified ? d.value : b;
            },
            set: R.set
        };
        jQuery.attrHooks.contenteditable = {
            set: function(a, b, c) {
                R.set(a, b === "" ? false : b, c);
            }
        };
        jQuery.each([ "width", "height" ], function(a, b) {
            jQuery.attrHooks[b] = {
                set: function(a, c) {
                    if (c === "") {
                        a.setAttribute(b, "auto");
                        return c;
                    }
                }
            };
        });
    }
    if (!jQuery.support.hrefNormalized) {
        jQuery.each([ "href", "src" ], function(a, b) {
            jQuery.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4);
                }
            };
        });
    }
    if (!jQuery.support.style) {
        jQuery.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || b;
            },
            set: function(a, b) {
                return a.style.cssText = b + "";
            }
        };
    }
    if (!jQuery.support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                if (b) {
                    b.selectedIndex;
                    if (b.parentNode) {
                        b.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        };
    }
    jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    if (!jQuery.support.enctype) {
        jQuery.propFix.enctype = "encoding";
    }
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(a, b) {
                if (jQuery.isArray(b)) {
                    return a.checked = jQuery.inArray(jQuery(a).val(), b) >= 0;
                }
            }
        };
        if (!jQuery.support.checkOn) {
            jQuery.valHooks[this].get = function(a) {
                return a.getAttribute("value") === null ? "on" : a.value;
            };
        }
    });
    var $ = /^(?:input|select|textarea)$/i, _ = /^key/, ab = /^(?:mouse|contextmenu)|click/, bb = /^(?:focusinfocus|focusoutblur)$/, cb = /^([^.]*)(?:\.(.+)|)$/;
    function db() {
        return true;
    }
    function eb() {
        return false;
    }
    function fb() {
        try {
            return g.activeElement;
        } catch (a) {}
    }
    jQuery.event = {
        global: {},
        add: function(a, c, d, f, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s = jQuery._data(a);
            if (!s) {
                return;
            }
            if (d.handler) {
                k = d;
                d = k.handler;
                g = k.selector;
            }
            if (!d.guid) {
                d.guid = jQuery.guid++;
            }
            if (!(i = s.events)) {
                i = s.events = {};
            }
            if (!(m = s.handle)) {
                m = s.handle = function(a) {
                    return typeof jQuery !== e && (!a || jQuery.event.triggered !== a.type) ? jQuery.event.dispatch.apply(m.elem, arguments) : b;
                };
                m.elem = a;
            }
            c = (c || "").match(v) || [ "" ];
            j = c.length;
            while (j--) {
                h = cb.exec(c[j]) || [];
                p = r = h[1];
                q = (h[2] || "").split(".").sort();
                if (!p) {
                    continue;
                }
                l = jQuery.event.special[p] || {};
                p = (g ? l.delegateType : l.bindType) || p;
                l = jQuery.event.special[p] || {};
                n = jQuery.extend({
                    type: p,
                    origType: r,
                    data: f,
                    handler: d,
                    guid: d.guid,
                    selector: g,
                    needsContext: g && jQuery.expr.match.needsContext.test(g),
                    namespace: q.join(".")
                }, k);
                if (!(o = i[p])) {
                    o = i[p] = [];
                    o.delegateCount = 0;
                    if (!l.setup || l.setup.call(a, f, q, m) === false) {
                        if (a.addEventListener) {
                            a.addEventListener(p, m, false);
                        } else if (a.attachEvent) {
                            a.attachEvent("on" + p, m);
                        }
                    }
                }
                if (l.add) {
                    l.add.call(a, n);
                    if (!n.handler.guid) {
                        n.handler.guid = d.guid;
                    }
                }
                if (g) {
                    o.splice(o.delegateCount++, 0, n);
                } else {
                    o.push(n);
                }
                jQuery.event.global[p] = true;
            }
            a = null;
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = jQuery.hasData(a) && jQuery._data(a);
            if (!q || !(k = q.events)) {
                return;
            }
            b = (b || "").match(v) || [ "" ];
            j = b.length;
            while (j--) {
                h = cb.exec(b[j]) || [];
                n = p = h[1];
                o = (h[2] || "").split(".").sort();
                if (!n) {
                    for (n in k) {
                        jQuery.event.remove(a, n + b[j], c, d, true);
                    }
                    continue;
                }
                l = jQuery.event.special[n] || {};
                n = (d ? l.delegateType : l.bindType) || n;
                m = k[n] || [];
                h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)");
                i = f = m.length;
                while (f--) {
                    g = m[f];
                    if ((e || p === g.origType) && (!c || c.guid === g.guid) && (!h || h.test(g.namespace)) && (!d || d === g.selector || d === "**" && g.selector)) {
                        m.splice(f, 1);
                        if (g.selector) {
                            m.delegateCount--;
                        }
                        if (l.remove) {
                            l.remove.call(a, g);
                        }
                    }
                }
                if (i && !m.length) {
                    if (!l.teardown || l.teardown.call(a, o, q.handle) === false) {
                        jQuery.removeEvent(a, n, q.handle);
                    }
                    delete k[n];
                }
            }
            if (jQuery.isEmptyObject(k)) {
                delete q.handle;
                jQuery._removeData(a, "events");
            }
        },
        trigger: function(c, d, e, f) {
            var h, i, j, k, l, m, n, o = [ e || g ], p = s.call(c, "type") ? c.type : c, q = s.call(c, "namespace") ? c.namespace.split(".") : [];
            j = m = e = e || g;
            if (e.nodeType === 3 || e.nodeType === 8) {
                return;
            }
            if (bb.test(p + jQuery.event.triggered)) {
                return;
            }
            if (p.indexOf(".") >= 0) {
                q = p.split(".");
                p = q.shift();
                q.sort();
            }
            i = p.indexOf(":") < 0 && "on" + p;
            c = c[jQuery.expando] ? c : new jQuery.Event(p, typeof c === "object" && c);
            c.isTrigger = f ? 2 : 3;
            c.namespace = q.join(".");
            c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            c.result = b;
            if (!c.target) {
                c.target = e;
            }
            d = d == null ? [ c ] : jQuery.makeArray(d, [ c ]);
            l = jQuery.event.special[p] || {};
            if (!f && l.trigger && l.trigger.apply(e, d) === false) {
                return;
            }
            if (!f && !l.noBubble && !jQuery.isWindow(e)) {
                k = l.delegateType || p;
                if (!bb.test(k + p)) {
                    j = j.parentNode;
                }
                for (;j; j = j.parentNode) {
                    o.push(j);
                    m = j;
                }
                if (m === (e.ownerDocument || g)) {
                    o.push(m.defaultView || m.parentWindow || a);
                }
            }
            n = 0;
            while ((j = o[n++]) && !c.isPropagationStopped()) {
                c.type = n > 1 ? k : l.bindType || p;
                h = (jQuery._data(j, "events") || {})[c.type] && jQuery._data(j, "handle");
                if (h) {
                    h.apply(j, d);
                }
                h = i && j[i];
                if (h && jQuery.acceptData(j) && h.apply && h.apply(j, d) === false) {
                    c.preventDefault();
                }
            }
            c.type = p;
            if (!f && !c.isDefaultPrevented()) {
                if ((!l._default || l._default.apply(o.pop(), d) === false) && jQuery.acceptData(e)) {
                    if (i && e[p] && !jQuery.isWindow(e)) {
                        m = e[i];
                        if (m) {
                            e[i] = null;
                        }
                        jQuery.event.triggered = p;
                        try {
                            e[p]();
                        } catch (r) {}
                        jQuery.event.triggered = b;
                        if (m) {
                            e[i] = m;
                        }
                    }
                }
            }
            return c.result;
        },
        dispatch: function(a) {
            a = jQuery.event.fix(a);
            var c, d, e, f, g, h = [], i = p.call(arguments), j = (jQuery._data(this, "events") || {})[a.type] || [], k = jQuery.event.special[a.type] || {};
            i[0] = a;
            a.delegateTarget = this;
            if (k.preDispatch && k.preDispatch.call(this, a) === false) {
                return;
            }
            h = jQuery.event.handlers.call(this, a, j);
            c = 0;
            while ((f = h[c++]) && !a.isPropagationStopped()) {
                a.currentTarget = f.elem;
                g = 0;
                while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
                    if (!a.namespace_re || a.namespace_re.test(e.namespace)) {
                        a.handleObj = e;
                        a.data = e.data;
                        d = ((jQuery.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i);
                        if (d !== b) {
                            if ((a.result = d) === false) {
                                a.preventDefault();
                                a.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (k.postDispatch) {
                k.postDispatch.call(this, a);
            }
            return a.result;
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || a.type !== "click")) {
                for (;j != this; j = j.parentNode || this) {
                    if (j.nodeType === 1 && (j.disabled !== true || a.type !== "click")) {
                        f = [];
                        for (g = 0; g < i; g++) {
                            e = c[g];
                            d = e.selector + " ";
                            if (f[d] === b) {
                                f[d] = e.needsContext ? jQuery(d, this).index(j) >= 0 : jQuery.find(d, this, null, [ j ]).length;
                            }
                            if (f[d]) {
                                f.push(e);
                            }
                        }
                        if (f.length) {
                            h.push({
                                elem: j,
                                handlers: f
                            });
                        }
                    }
                }
            }
            if (i < c.length) {
                h.push({
                    elem: this,
                    handlers: c.slice(i)
                });
            }
            return h;
        },
        fix: function(a) {
            if (a[jQuery.expando]) {
                return a;
            }
            var b, c, d, e = a.type, f = a, h = this.fixHooks[e];
            if (!h) {
                this.fixHooks[e] = h = ab.test(e) ? this.mouseHooks : _.test(e) ? this.keyHooks : {};
            }
            d = h.props ? this.props.concat(h.props) : this.props;
            a = new jQuery.Event(f);
            b = d.length;
            while (b--) {
                c = d[b];
                a[c] = f[c];
            }
            if (!a.target) {
                a.target = f.srcElement || g;
            }
            if (a.target.nodeType === 3) {
                a.target = a.target.parentNode;
            }
            a.metaKey = !!a.metaKey;
            return h.filter ? h.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                if (a.which == null) {
                    a.which = b.charCode != null ? b.charCode : b.keyCode;
                }
                return a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, h = c.button, i = c.fromElement;
                if (a.pageX == null && c.clientX != null) {
                    e = a.target.ownerDocument || g;
                    f = e.documentElement;
                    d = e.body;
                    a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0);
                    a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0);
                }
                if (!a.relatedTarget && i) {
                    a.relatedTarget = i === a.target ? c.toElement : i;
                }
                if (!a.which && h !== b) {
                    a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0;
                }
                return a;
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== fb() && this.focus) {
                        try {
                            this.focus();
                            return false;
                        } catch (a) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === fb() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false;
                    }
                },
                _default: function(a) {
                    return jQuery.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    if (a.result !== b) {
                        a.originalEvent.returnValue = a.result;
                    }
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = jQuery.extend(new jQuery.Event(), c, {
                type: a,
                isSimulated: true,
                originalEvent: {}
            });
            if (d) {
                jQuery.event.trigger(e, null, b);
            } else {
                jQuery.event.dispatch.call(b, e);
            }
            if (e.isDefaultPrevented()) {
                c.preventDefault();
            }
        }
    };
    jQuery.removeEvent = g.removeEventListener ? function(a, b, c) {
        if (a.removeEventListener) {
            a.removeEventListener(b, c, false);
        }
    } : function(a, b, c) {
        var d = "on" + b;
        if (a.detachEvent) {
            if (typeof a[d] === e) {
                a[d] = null;
            }
            a.detachEvent(d, c);
        }
    };
    jQuery.Event = function(a, b) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(a, b);
        }
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = a.defaultPrevented || a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? db : eb;
        } else {
            this.type = a;
        }
        if (b) {
            jQuery.extend(this, b);
        }
        this.timeStamp = a && a.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
        isDefaultPrevented: eb,
        isPropagationStopped: eb,
        isImmediatePropagationStopped: eb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = db;
            if (!a) {
                return;
            }
            if (a.preventDefault) {
                a.preventDefault();
            } else {
                a.returnValue = false;
            }
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = db;
            if (!a) {
                return;
            }
            if (a.stopPropagation) {
                a.stopPropagation();
            }
            a.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = db;
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        jQuery.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                if (!e || e !== d && !jQuery.contains(d, e)) {
                    a.type = f.origType;
                    c = f.handler.apply(this, arguments);
                    a.type = b;
                }
                return c;
            }
        };
    });
    if (!jQuery.support.submitBubbles) {
        jQuery.event.special.submit = {
            setup: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target, d = jQuery.nodeName(c, "input") || jQuery.nodeName(c, "button") ? c.form : b;
                    if (d && !jQuery._data(d, "submitBubbles")) {
                        jQuery.event.add(d, "submit._submit", function(a) {
                            a._submit_bubble = true;
                        });
                        jQuery._data(d, "submitBubbles", true);
                    }
                });
            },
            postDispatch: function(a) {
                if (a._submit_bubble) {
                    delete a._submit_bubble;
                    if (this.parentNode && !a.isTrigger) {
                        jQuery.event.simulate("submit", this.parentNode, a, true);
                    }
                }
            },
            teardown: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.remove(this, "._submit");
            }
        };
    }
    if (!jQuery.support.changeBubbles) {
        jQuery.event.special.change = {
            setup: function() {
                if ($.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        jQuery.event.add(this, "propertychange._change", function(a) {
                            if (a.originalEvent.propertyName === "checked") {
                                this._just_changed = true;
                            }
                        });
                        jQuery.event.add(this, "click._change", function(a) {
                            if (this._just_changed && !a.isTrigger) {
                                this._just_changed = false;
                            }
                            jQuery.event.simulate("change", this, a, true);
                        });
                    }
                    return false;
                }
                jQuery.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    if ($.test(b.nodeName) && !jQuery._data(b, "changeBubbles")) {
                        jQuery.event.add(b, "change._change", function(a) {
                            if (this.parentNode && !a.isSimulated && !a.isTrigger) {
                                jQuery.event.simulate("change", this.parentNode, a, true);
                            }
                        });
                        jQuery._data(b, "changeBubbles", true);
                    }
                });
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                    return a.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                jQuery.event.remove(this, "._change");
                return !$.test(this.nodeName);
            }
        };
    }
    if (!jQuery.support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0, d = function(a) {
                jQuery.event.simulate(b, a.target, jQuery.event.fix(a), true);
            };
            jQuery.event.special[b] = {
                setup: function() {
                    if (c++ === 0) {
                        g.addEventListener(a, d, true);
                    }
                },
                teardown: function() {
                    if (--c === 0) {
                        g.removeEventListener(a, d, true);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if (typeof a === "object") {
                if (typeof c !== "string") {
                    d = d || c;
                    c = b;
                }
                for (g in a) {
                    this.on(g, c, d, a[g], f);
                }
                return this;
            }
            if (d == null && e == null) {
                e = c;
                d = c = b;
            } else if (e == null) {
                if (typeof c === "string") {
                    e = d;
                    d = b;
                } else {
                    e = d;
                    d = c;
                    c = b;
                }
            }
            if (e === false) {
                e = eb;
            } else if (!e) {
                return this;
            }
            if (f === 1) {
                h = e;
                e = function(a) {
                    jQuery().off(a);
                    return h.apply(this, arguments);
                };
                e.guid = h.guid || (h.guid = jQuery.guid++);
            }
            return this.each(function() {
                jQuery.event.add(this, a, e, d, c);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) {
                e = a.handleObj;
                jQuery(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this;
            }
            if (typeof a === "object") {
                for (f in a) {
                    this.off(f, c, a[f]);
                }
                return this;
            }
            if (c === false || typeof c === "function") {
                d = c;
                c = b;
            }
            if (d === false) {
                d = eb;
            }
            return this.each(function() {
                jQuery.event.remove(this, a, d, c);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                jQuery.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) {
                return jQuery.event.trigger(a, b, c, true);
            }
        }
    });
    var gb = /^.[^:#\[\.,]*$/, hb = /^(?:parents|prev(?:Until|All))/, ib = jQuery.expr.match.needsContext, jb = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if (typeof a !== "string") {
                return this.pushStack(jQuery(a).filter(function() {
                    for (b = 0; b < e; b++) {
                        if (jQuery.contains(d[b], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (b = 0; b < e; b++) {
                jQuery.find(a, d[b], c);
            }
            c = this.pushStack(e > 1 ? jQuery.unique(c) : c);
            c.selector = this.selector ? this.selector + " " + a : a;
            return c;
        },
        has: function(a) {
            var b, c = jQuery(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++) {
                    if (jQuery.contains(this, c[b])) {
                        return true;
                    }
                }
            });
        },
        not: function(a) {
            return this.pushStack(lb(this, a || [], true));
        },
        filter: function(a) {
            return this.pushStack(lb(this, a || [], false));
        },
        is: function(a) {
            return !!lb(this, typeof a === "string" && ib.test(a) ? jQuery(a) : a || [], false).length;
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = ib.test(a) || typeof a !== "string" ? jQuery(a, b || this.context) : 0;
            for (;d < e; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : c.nodeType === 1 && jQuery.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break;
                    }
                }
            }
            return this.pushStack(f.length > 1 ? jQuery.unique(f) : f);
        },
        index: function(a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof a === "string") {
                return jQuery.inArray(this[0], jQuery(a));
            }
            return jQuery.inArray(a.jquery ? a[0] : a, this);
        },
        add: function(a, b) {
            var c = typeof a === "string" ? jQuery(a, b) : jQuery.makeArray(a && a.nodeType ? [ a ] : a), d = jQuery.merge(this.get(), c);
            return this.pushStack(jQuery.unique(d));
        },
        addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function kb(a, b) {
        do {
            a = a[b];
        } while (a && a.nodeType !== 1);
        return a;
    }
    jQuery.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null;
        },
        parents: function(a) {
            return jQuery.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return jQuery.dir(a, "parentNode", c);
        },
        next: function(a) {
            return kb(a, "nextSibling");
        },
        prev: function(a) {
            return kb(a, "previousSibling");
        },
        nextAll: function(a) {
            return jQuery.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return jQuery.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return jQuery.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return jQuery.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return jQuery.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return jQuery.sibling(a.firstChild);
        },
        contents: function(a) {
            return jQuery.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : jQuery.merge([], a.childNodes);
        }
    }, function(a, b) {
        jQuery.fn[a] = function(c, d) {
            var e = jQuery.map(this, b, c);
            if (a.slice(-5) !== "Until") {
                d = c;
            }
            if (d && typeof d === "string") {
                e = jQuery.filter(d, e);
            }
            if (this.length > 1) {
                if (!jb[a]) {
                    e = jQuery.unique(e);
                }
                if (hb.test(a)) {
                    e = e.reverse();
                }
            }
            return this.pushStack(e);
        };
    });
    jQuery.extend({
        filter: function(a, b, c) {
            var d = b[0];
            if (c) {
                a = ":not(" + a + ")";
            }
            return b.length === 1 && d.nodeType === 1 ? jQuery.find.matchesSelector(d, a) ? [ d ] : [] : jQuery.find.matches(a, jQuery.grep(b, function(a) {
                return a.nodeType === 1;
            }));
        },
        dir: function(a, c, d) {
            var e = [], f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !jQuery(f).is(d))) {
                if (f.nodeType === 1) {
                    e.push(f);
                }
                f = f[c];
            }
            return e;
        },
        sibling: function(a, b) {
            var c = [];
            for (;a; a = a.nextSibling) {
                if (a.nodeType === 1 && a !== b) {
                    c.push(a);
                }
            }
            return c;
        }
    });
    function lb(a, b, c) {
        if (jQuery.isFunction(b)) {
            return jQuery.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c;
            });
        }
        if (b.nodeType) {
            return jQuery.grep(a, function(a) {
                return a === b !== c;
            });
        }
        if (typeof b === "string") {
            if (gb.test(b)) {
                return jQuery.filter(b, a, c);
            }
            b = jQuery.filter(b, a);
        }
        return jQuery.grep(a, function(a) {
            return jQuery.inArray(a, b) >= 0 !== c;
        });
    }
    function mb(a) {
        var b = nb.split("|"), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop());
            }
        }
        return c;
    }
    var nb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ob = / jQuery\d+="(?:null|\d+)"/g, pb = new RegExp("<(?:" + nb + ")[\\s/>]", "i"), qb = /^\s+/, rb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, sb = /<([\w:]+)/, tb = /<tbody/i, ub = /<|&#?\w+;/, vb = /<(?:script|style|link)/i, wb = /^(?:checkbox|radio)$/i, xb = /checked\s*(?:[^=]|=\s*.checked.)/i, yb = /^$|\/(?:java|ecma)script/i, zb = /^true\/(.*)/, Ab = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Bb = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, Cb = mb(g), Db = Cb.appendChild(g.createElement("div"));
    Bb.optgroup = Bb.option;
    Bb.tbody = Bb.tfoot = Bb.colgroup = Bb.caption = Bb.thead;
    Bb.th = Bb.td;
    jQuery.fn.extend({
        text: function(a) {
            return jQuery.access(this, function(a) {
                return a === b ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || g).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = Eb(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = Eb(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this.nextSibling);
                }
            });
        },
        remove: function(a, b) {
            var c, d = a ? jQuery.filter(a, this) : this, e = 0;
            for (;(c = d[e]) != null; e++) {
                if (!b && c.nodeType === 1) {
                    jQuery.cleanData(Kb(c));
                }
                if (c.parentNode) {
                    if (b && jQuery.contains(c.ownerDocument, c)) {
                        Hb(Kb(c, "script"));
                    }
                    c.parentNode.removeChild(c);
                }
            }
            return this;
        },
        empty: function() {
            var a, b = 0;
            for (;(a = this[b]) != null; b++) {
                if (a.nodeType === 1) {
                    jQuery.cleanData(Kb(a, false));
                }
                while (a.firstChild) {
                    a.removeChild(a.firstChild);
                }
                if (a.options && jQuery.nodeName(a, "select")) {
                    a.options.length = 0;
                }
            }
            return this;
        },
        clone: function(a, b) {
            a = a == null ? false : a;
            b = b == null ? a : b;
            return this.map(function() {
                return jQuery.clone(this, a, b);
            });
        },
        html: function(a) {
            return jQuery.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) {
                    return c.nodeType === 1 ? c.innerHTML.replace(ob, "") : b;
                }
                if (typeof a === "string" && !vb.test(a) && (jQuery.support.htmlSerialize || !pb.test(a)) && (jQuery.support.leadingWhitespace || !qb.test(a)) && !Bb[(sb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(rb, "<$1></$2>");
                    try {
                        for (;d < e; d++) {
                            c = this[d] || {};
                            if (c.nodeType === 1) {
                                jQuery.cleanData(Kb(c, false));
                                c.innerHTML = a;
                            }
                        }
                        c = 0;
                    } catch (f) {}
                }
                if (c) {
                    this.empty().append(a);
                }
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = jQuery.map(this, function(a) {
                return [ a.nextSibling, a.parentNode ];
            }), b = 0;
            this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                if (e) {
                    if (d && d.parentNode !== e) {
                        d = this.nextSibling;
                    }
                    jQuery(this).remove();
                    e.insertBefore(c, d);
                }
            }, true);
            return b ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, true);
        },
        domManip: function(a, b, c) {
            a = n.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, m = k - 1, o = a[0], p = jQuery.isFunction(o);
            if (p || !(k <= 1 || typeof o !== "string" || jQuery.support.checkClone || !xb.test(o))) {
                return this.each(function(d) {
                    var e = l.eq(d);
                    if (p) {
                        a[0] = o.call(this, d, e.html());
                    }
                    e.domManip(a, b, c);
                });
            }
            if (k) {
                i = jQuery.buildFragment(a, this[0].ownerDocument, false, !c && this);
                d = i.firstChild;
                if (i.childNodes.length === 1) {
                    i = d;
                }
                if (d) {
                    g = jQuery.map(Kb(i, "script"), Fb);
                    f = g.length;
                    for (;j < k; j++) {
                        e = i;
                        if (j !== m) {
                            e = jQuery.clone(e, true, true);
                            if (f) {
                                jQuery.merge(g, Kb(e, "script"));
                            }
                        }
                        b.call(this[j], e, j);
                    }
                    if (f) {
                        h = g[g.length - 1].ownerDocument;
                        jQuery.map(g, Gb);
                        for (j = 0; j < f; j++) {
                            e = g[j];
                            if (yb.test(e.type || "") && !jQuery._data(e, "globalEval") && jQuery.contains(h, e)) {
                                if (e.src) {
                                    jQuery._evalUrl(e.src);
                                } else {
                                    jQuery.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Ab, ""));
                                }
                            }
                        }
                    }
                    i = d = null;
                }
            }
            return this;
        }
    });
    function Eb(a, b) {
        return jQuery.nodeName(a, "table") && jQuery.nodeName(b.nodeType === 1 ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function Fb(a) {
        a.type = (jQuery.find.attr(a, "type") !== null) + "/" + a.type;
        return a;
    }
    function Gb(a) {
        var b = zb.exec(a.type);
        if (b) {
            a.type = b[1];
        } else {
            a.removeAttribute("type");
        }
        return a;
    }
    function Hb(a, b) {
        var c, d = 0;
        for (;(c = a[d]) != null; d++) {
            jQuery._data(c, "globalEval", !b || jQuery._data(b[d], "globalEval"));
        }
    }
    function Ib(a, b) {
        if (b.nodeType !== 1 || !jQuery.hasData(a)) {
            return;
        }
        var c, d, e, f = jQuery._data(a), g = jQuery._data(b, f), h = f.events;
        if (h) {
            delete g.handle;
            g.events = {};
            for (c in h) {
                for (d = 0, e = h[c].length; d < e; d++) {
                    jQuery.event.add(b, c, h[c][d]);
                }
            }
        }
        if (g.data) {
            g.data = jQuery.extend({}, g.data);
        }
    }
    function Jb(a, b) {
        var c, d, e;
        if (b.nodeType !== 1) {
            return;
        }
        c = b.nodeName.toLowerCase();
        if (!jQuery.support.noCloneEvent && b[jQuery.expando]) {
            e = jQuery._data(b);
            for (d in e.events) {
                jQuery.removeEvent(b, d, e.handle);
            }
            b.removeAttribute(jQuery.expando);
        }
        if (c === "script" && b.text !== a.text) {
            Fb(b).text = a.text;
            Gb(b);
        } else if (c === "object") {
            if (b.parentNode) {
                b.outerHTML = a.outerHTML;
            }
            if (jQuery.support.html5Clone && (a.innerHTML && !jQuery.trim(b.innerHTML))) {
                b.innerHTML = a.innerHTML;
            }
        } else if (c === "input" && wb.test(a.type)) {
            b.defaultChecked = b.checked = a.checked;
            if (b.value !== a.value) {
                b.value = a.value;
            }
        } else if (c === "option") {
            b.defaultSelected = b.selected = a.defaultSelected;
        } else if (c === "input" || c === "textarea") {
            b.defaultValue = a.defaultValue;
        }
    }
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        jQuery.fn[a] = function(a) {
            var c, d = 0, e = [], f = jQuery(a), g = f.length - 1;
            for (;d <= g; d++) {
                c = d === g ? this : this.clone(true);
                jQuery(f[d])[b](c);
                o.apply(e, c.get());
            }
            return this.pushStack(e);
        };
    });
    function Kb(a, c) {
        var d, f, g = 0, h = typeof a.getElementsByTagName !== e ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== e ? a.querySelectorAll(c || "*") : b;
        if (!h) {
            for (h = [], d = a.childNodes || a; (f = d[g]) != null; g++) {
                if (!c || jQuery.nodeName(f, c)) {
                    h.push(f);
                } else {
                    jQuery.merge(h, Kb(f, c));
                }
            }
        }
        return c === b || c && jQuery.nodeName(a, c) ? jQuery.merge([ a ], h) : h;
    }
    function Lb(a) {
        if (wb.test(a.type)) {
            a.defaultChecked = a.checked;
        }
    }
    jQuery.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = jQuery.contains(a.ownerDocument, a);
            if (jQuery.support.html5Clone || jQuery.isXMLDoc(a) || !pb.test("<" + a.nodeName + ">")) {
                f = a.cloneNode(true);
            } else {
                Db.innerHTML = a.outerHTML;
                Db.removeChild(f = Db.firstChild);
            }
            if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !jQuery.isXMLDoc(a)) {
                d = Kb(f);
                h = Kb(a);
                for (g = 0; (e = h[g]) != null; ++g) {
                    if (d[g]) {
                        Jb(e, d[g]);
                    }
                }
            }
            if (b) {
                if (c) {
                    h = h || Kb(a);
                    d = d || Kb(f);
                    for (g = 0; (e = h[g]) != null; g++) {
                        Ib(e, d[g]);
                    }
                } else {
                    Ib(a, f);
                }
            }
            d = Kb(f, "script");
            if (d.length > 0) {
                Hb(d, !i && Kb(a, "script"));
            }
            d = h = e = null;
            return f;
        },
        buildFragment: function(a, b, c, d) {
            var e, f, g, h, i, j, k, l = a.length, m = mb(b), n = [], o = 0;
            for (;o < l; o++) {
                f = a[o];
                if (f || f === 0) {
                    if (jQuery.type(f) === "object") {
                        jQuery.merge(n, f.nodeType ? [ f ] : f);
                    } else if (!ub.test(f)) {
                        n.push(b.createTextNode(f));
                    } else {
                        h = h || m.appendChild(b.createElement("div"));
                        i = (sb.exec(f) || [ "", "" ])[1].toLowerCase();
                        k = Bb[i] || Bb._default;
                        h.innerHTML = k[1] + f.replace(rb, "<$1></$2>") + k[2];
                        e = k[0];
                        while (e--) {
                            h = h.lastChild;
                        }
                        if (!jQuery.support.leadingWhitespace && qb.test(f)) {
                            n.push(b.createTextNode(qb.exec(f)[0]));
                        }
                        if (!jQuery.support.tbody) {
                            f = i === "table" && !tb.test(f) ? h.firstChild : k[1] === "<table>" && !tb.test(f) ? h : 0;
                            e = f && f.childNodes.length;
                            while (e--) {
                                if (jQuery.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length) {
                                    f.removeChild(j);
                                }
                            }
                        }
                        jQuery.merge(n, h.childNodes);
                        h.textContent = "";
                        while (h.firstChild) {
                            h.removeChild(h.firstChild);
                        }
                        h = m.lastChild;
                    }
                }
            }
            if (h) {
                m.removeChild(h);
            }
            if (!jQuery.support.appendChecked) {
                jQuery.grep(Kb(n, "input"), Lb);
            }
            o = 0;
            while (f = n[o++]) {
                if (d && jQuery.inArray(f, d) !== -1) {
                    continue;
                }
                g = jQuery.contains(f.ownerDocument, f);
                h = Kb(m.appendChild(f), "script");
                if (g) {
                    Hb(h);
                }
                if (c) {
                    e = 0;
                    while (f = h[e++]) {
                        if (yb.test(f.type || "")) {
                            c.push(f);
                        }
                    }
                }
            }
            h = null;
            return m;
        },
        cleanData: function(a, b) {
            var c, d, f, g, h = 0, i = jQuery.expando, j = jQuery.cache, k = jQuery.support.deleteExpando, m = jQuery.event.special;
            for (;(c = a[h]) != null; h++) {
                if (b || jQuery.acceptData(c)) {
                    f = c[i];
                    g = f && j[f];
                    if (g) {
                        if (g.events) {
                            for (d in g.events) {
                                if (m[d]) {
                                    jQuery.event.remove(c, d);
                                } else {
                                    jQuery.removeEvent(c, d, g.handle);
                                }
                            }
                        }
                        if (j[f]) {
                            delete j[f];
                            if (k) {
                                delete c[i];
                            } else if (typeof c.removeAttribute !== e) {
                                c.removeAttribute(i);
                            } else {
                                c[i] = null;
                            }
                            l.push(f);
                        }
                    }
                }
            }
        },
        _evalUrl: function(a) {
            return jQuery.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
            });
        }
    });
    jQuery.fn.extend({
        wrapAll: function(a) {
            if (jQuery.isFunction(a)) {
                return this.each(function(b) {
                    jQuery(this).wrapAll(a.call(this, b));
                });
            }
            if (this[0]) {
                var b = jQuery(a, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    b.insertBefore(this[0]);
                }
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild;
                    }
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            if (jQuery.isFunction(a)) {
                return this.each(function(b) {
                    jQuery(this).wrapInner(a.call(this, b));
                });
            }
            return this.each(function() {
                var b = jQuery(this), c = b.contents();
                if (c.length) {
                    c.wrapAll(a);
                } else {
                    b.append(a);
                }
            });
        },
        wrap: function(a) {
            var b = jQuery.isFunction(a);
            return this.each(function(c) {
                jQuery(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    var Mb, Nb, Ob, Pb = /alpha\([^)]*\)/i, Qb = /opacity\s*=\s*([^)]*)/, Rb = /^(top|right|bottom|left)$/, Sb = /^(none|table(?!-c[ea]).+)/, Tb = /^margin/, Ub = new RegExp("^(" + u + ")(.*)$", "i"), Vb = new RegExp("^(" + u + ")(?!px)[a-z%]+$", "i"), Wb = new RegExp("^([+-])=(" + u + ")", "i"), Xb = {
        BODY: "block"
    }, Yb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Zb = {
        letterSpacing: 0,
        fontWeight: 400
    }, $b = [ "Top", "Right", "Bottom", "Left" ], _b = [ "Webkit", "O", "Moz", "ms" ];
    function ac(a, b) {
        if (b in a) {
            return b;
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length;
        while (e--) {
            b = _b[e] + c;
            if (b in a) {
                return b;
            }
        }
        return d;
    }
    function bc(a, b) {
        a = b || a;
        return jQuery.css(a, "display") === "none" || !jQuery.contains(a.ownerDocument, a);
    }
    function cc(a, b) {
        var c, d, e, f = [], g = 0, h = a.length;
        for (;g < h; g++) {
            d = a[g];
            if (!d.style) {
                continue;
            }
            f[g] = jQuery._data(d, "olddisplay");
            c = d.style.display;
            if (b) {
                if (!f[g] && c === "none") {
                    d.style.display = "";
                }
                if (d.style.display === "" && bc(d)) {
                    f[g] = jQuery._data(d, "olddisplay", gc(d.nodeName));
                }
            } else {
                if (!f[g]) {
                    e = bc(d);
                    if (c && c !== "none" || !e) {
                        jQuery._data(d, "olddisplay", e ? c : jQuery.css(d, "display"));
                    }
                }
            }
        }
        for (g = 0; g < h; g++) {
            d = a[g];
            if (!d.style) {
                continue;
            }
            if (!b || d.style.display === "none" || d.style.display === "") {
                d.style.display = b ? f[g] || "" : "none";
            }
        }
        return a;
    }
    jQuery.fn.extend({
        css: function(a, c) {
            return jQuery.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (jQuery.isArray(c)) {
                    f = Nb(a);
                    e = c.length;
                    for (;h < e; h++) {
                        g[c[h]] = jQuery.css(a, c[h], false, f);
                    }
                    return g;
                }
                return d !== b ? jQuery.style(a, c, d) : jQuery.css(a, c);
            }, a, c, arguments.length > 1);
        },
        show: function() {
            return cc(this, true);
        },
        hide: function() {
            return cc(this);
        },
        toggle: function(a) {
            if (typeof a === "boolean") {
                return a ? this.show() : this.hide();
            }
            return this.each(function() {
                if (bc(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ob(a, "opacity");
                        return c === "" ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
                return;
            }
            var f, g, h, i = jQuery.camelCase(c), j = a.style;
            c = jQuery.cssProps[i] || (jQuery.cssProps[i] = ac(j, i));
            h = jQuery.cssHooks[c] || jQuery.cssHooks[i];
            if (d !== b) {
                g = typeof d;
                if (g === "string" && (f = Wb.exec(d))) {
                    d = (f[1] + 1) * f[2] + parseFloat(jQuery.css(a, c));
                    g = "number";
                }
                if (d == null || g === "number" && isNaN(d)) {
                    return;
                }
                if (g === "number" && !jQuery.cssNumber[i]) {
                    d += "px";
                }
                if (!jQuery.support.clearCloneStyle && d === "" && c.indexOf("background") === 0) {
                    j[c] = "inherit";
                }
                if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) {
                    try {
                        j[c] = d;
                    } catch (k) {}
                }
            } else {
                if (h && "get" in h && (f = h.get(a, false, e)) !== b) {
                    return f;
                }
                return j[c];
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = jQuery.camelCase(c);
            c = jQuery.cssProps[i] || (jQuery.cssProps[i] = ac(a.style, i));
            h = jQuery.cssHooks[c] || jQuery.cssHooks[i];
            if (h && "get" in h) {
                g = h.get(a, true, d);
            }
            if (g === b) {
                g = Ob(a, c, e);
            }
            if (g === "normal" && c in Zb) {
                g = Zb[c];
            }
            if (d === "" || d) {
                f = parseFloat(g);
                return d === true || jQuery.isNumeric(f) ? f || 0 : g;
            }
            return g;
        }
    });
    if (a.getComputedStyle) {
        Nb = function(b) {
            return a.getComputedStyle(b, null);
        };
        Ob = function(a, c, d) {
            var e, f, g, h = d || Nb(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
            if (h) {
                if (i === "" && !jQuery.contains(a.ownerDocument, a)) {
                    i = jQuery.style(a, c);
                }
                if (Vb.test(i) && Tb.test(c)) {
                    e = j.width;
                    f = j.minWidth;
                    g = j.maxWidth;
                    j.minWidth = j.maxWidth = j.width = i;
                    i = h.width;
                    j.width = e;
                    j.minWidth = f;
                    j.maxWidth = g;
                }
            }
            return i;
        };
    } else if (g.documentElement.currentStyle) {
        Nb = function(a) {
            return a.currentStyle;
        };
        Ob = function(a, c, d) {
            var e, f, g, h = d || Nb(a), i = h ? h[c] : b, j = a.style;
            if (i == null && j && j[c]) {
                i = j[c];
            }
            if (Vb.test(i) && !Rb.test(c)) {
                e = j.left;
                f = a.runtimeStyle;
                g = f && f.left;
                if (g) {
                    f.left = a.currentStyle.left;
                }
                j.left = c === "fontSize" ? "1em" : i;
                i = j.pixelLeft + "px";
                j.left = e;
                if (g) {
                    f.left = g;
                }
            }
            return i === "" ? "auto" : i;
        };
    }
    function dc(a, b, c) {
        var d = Ub.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function ec(a, b, c, d, e) {
        var f = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0, g = 0;
        for (;f < 4; f += 2) {
            if (c === "margin") {
                g += jQuery.css(a, c + $b[f], true, e);
            }
            if (d) {
                if (c === "content") {
                    g -= jQuery.css(a, "padding" + $b[f], true, e);
                }
                if (c !== "margin") {
                    g -= jQuery.css(a, "border" + $b[f] + "Width", true, e);
                }
            } else {
                g += jQuery.css(a, "padding" + $b[f], true, e);
                if (c !== "padding") {
                    g += jQuery.css(a, "border" + $b[f] + "Width", true, e);
                }
            }
        }
        return g;
    }
    function fc(a, b, c) {
        var d = true, e = b === "width" ? a.offsetWidth : a.offsetHeight, f = Nb(a), g = jQuery.support.boxSizing && jQuery.css(a, "boxSizing", false, f) === "border-box";
        if (e <= 0 || e == null) {
            e = Ob(a, b, f);
            if (e < 0 || e == null) {
                e = a.style[b];
            }
            if (Vb.test(e)) {
                return e;
            }
            d = g && (jQuery.support.boxSizingReliable || e === a.style[b]);
            e = parseFloat(e) || 0;
        }
        return e + ec(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function gc(a) {
        var b = g, c = Xb[a];
        if (!c) {
            c = hc(a, b);
            if (c === "none" || !c) {
                Mb = (Mb || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement);
                b = (Mb[0].contentWindow || Mb[0].contentDocument).document;
                b.write("<!doctype html><html><body>");
                b.close();
                c = hc(a, b);
                Mb.detach();
            }
            Xb[a] = c;
        }
        return c;
    }
    function hc(a, b) {
        var c = jQuery(b.createElement(a)).appendTo(b.body), d = jQuery.css(c[0], "display");
        c.remove();
        return d;
    }
    jQuery.each([ "height", "width" ], function(a, b) {
        jQuery.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) {
                    return a.offsetWidth === 0 && Sb.test(jQuery.css(a, "display")) ? jQuery.swap(a, Yb, function() {
                        return fc(a, b, d);
                    }) : fc(a, b, d);
                }
            },
            set: function(a, c, d) {
                var e = d && Nb(a);
                return dc(a, c, d ? ec(a, b, d, jQuery.support.boxSizing && jQuery.css(a, "boxSizing", false, e) === "border-box", e) : 0);
            }
        };
    });
    if (!jQuery.support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function(a, b) {
                return Qb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
            },
            set: function(a, b) {
                var c = a.style, d = a.currentStyle, e = jQuery.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", f = d && d.filter || c.filter || "";
                c.zoom = 1;
                if ((b >= 1 || b === "") && jQuery.trim(f.replace(Pb, "")) === "" && c.removeAttribute) {
                    c.removeAttribute("filter");
                    if (b === "" || d && !d.filter) {
                        return;
                    }
                }
                c.filter = Pb.test(f) ? f.replace(Pb, e) : f + " " + e;
            }
        };
    }
    jQuery(function() {
        if (!jQuery.support.reliableMarginRight) {
            jQuery.cssHooks.marginRight = {
                get: function(a, b) {
                    if (b) {
                        return jQuery.swap(a, {
                            display: "inline-block"
                        }, Ob, [ a, "marginRight" ]);
                    }
                }
            };
        }
        if (!jQuery.support.pixelPosition && jQuery.fn.position) {
            jQuery.each([ "top", "left" ], function(a, b) {
                jQuery.cssHooks[b] = {
                    get: function(a, c) {
                        if (c) {
                            c = Ob(a, b);
                            return Vb.test(c) ? jQuery(a).position()[b] + "px" : c;
                        }
                    }
                };
            });
        }
    });
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (a.style && a.style.display || jQuery.css(a, "display")) === "none";
        };
        jQuery.expr.filters.visible = function(a) {
            return !jQuery.expr.filters.hidden(a);
        };
    }
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        jQuery.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0, e = {}, f = typeof c === "string" ? c.split(" ") : [ c ];
                for (;d < 4; d++) {
                    e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
                }
                return e;
            }
        };
        if (!Tb.test(a)) {
            jQuery.cssHooks[a + b].set = dc;
        }
    });
    var ic = /%20/g, jc = /\[\]$/, kc = /\r?\n/g, lc = /^(?:submit|button|image|reset|file)$/i, mc = /^(?:input|select|textarea|keygen)/i;
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = jQuery.prop(this, "elements");
                return a ? jQuery.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !jQuery(this).is(":disabled") && mc.test(this.nodeName) && !lc.test(a) && (this.checked || !wb.test(a));
            }).map(function(a, b) {
                var c = jQuery(this).val();
                return c == null ? null : jQuery.isArray(c) ? jQuery.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(kc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(kc, "\r\n")
                };
            }).get();
        }
    });
    jQuery.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = jQuery.isFunction(b) ? b() : b == null ? "" : b;
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (c === b) {
            c = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                f(this.name, this.value);
            });
        } else {
            for (d in a) {
                nc(d, a[d], c, f);
            }
        }
        return e.join("&").replace(ic, "+");
    };
    function nc(a, b, c, d) {
        var e;
        if (jQuery.isArray(b)) {
            jQuery.each(b, function(b, e) {
                if (c || jc.test(a)) {
                    d(a, e);
                } else {
                    nc(a + "[" + (typeof e === "object" ? b : "") + "]", e, c, d);
                }
            });
        } else if (!c && jQuery.type(b) === "object") {
            for (e in b) {
                nc(a + "[" + e + "]", b[e], c, d);
            }
        } else {
            d(a, b);
        }
    }
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(a, b) {
        jQuery.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    });
    jQuery.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var oc, pc, qc = jQuery.now(), rc = /\?/, sc = /#.*$/, tc = /([?&])_=[^&]*/, uc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, vc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, wc = /^(?:GET|HEAD)$/, xc = /^\/\//, yc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, zc = jQuery.fn.load, Ac = {}, Bc = {}, Cc = "*/".concat("*");
    try {
        pc = f.href;
    } catch (Dc) {
        pc = g.createElement("a");
        pc.href = "";
        pc = pc.href;
    }
    oc = yc.exec(pc.toLowerCase()) || [];
    function Ec(a) {
        return function(b, c) {
            if (typeof b !== "string") {
                c = b;
                b = "*";
            }
            var d, e = 0, f = b.toLowerCase().match(v) || [];
            if (jQuery.isFunction(c)) {
                while (d = f[e++]) {
                    if (d[0] === "+") {
                        d = d.slice(1) || "*";
                        (a[d] = a[d] || []).unshift(c);
                    } else {
                        (a[d] = a[d] || []).push(c);
                    }
                }
            }
        };
    }
    function Fc(a, b, c, d) {
        var e = {}, f = a === Bc;
        function g(h) {
            var i;
            e[h] = true;
            jQuery.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                if (typeof j === "string" && !f && !e[j]) {
                    b.dataTypes.unshift(j);
                    g(j);
                    return false;
                } else if (f) {
                    return !(i = j);
                }
            });
            return i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Gc(a, c) {
        var d, e, f = jQuery.ajaxSettings.flatOptions || {};
        for (e in c) {
            if (c[e] !== b) {
                (f[e] ? a : d || (d = {}))[e] = c[e];
            }
        }
        if (d) {
            jQuery.extend(true, a, d);
        }
        return a;
    }
    jQuery.fn.load = function(a, c, d) {
        if (typeof a !== "string" && zc) {
            return zc.apply(this, arguments);
        }
        var e, f, g, h = this, i = a.indexOf(" ");
        if (i >= 0) {
            e = a.slice(i, a.length);
            a = a.slice(0, i);
        }
        if (jQuery.isFunction(c)) {
            d = c;
            c = b;
        } else if (c && typeof c === "object") {
            g = "POST";
        }
        if (h.length > 0) {
            jQuery.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c
            }).done(function(a) {
                f = arguments;
                h.html(e ? jQuery("<div>").append(jQuery.parseHTML(a)).find(e) : a);
            }).complete(d && function(a, b) {
                h.each(d, f || [ a.responseText, b, a ]);
            });
        }
        return this;
    };
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        jQuery.fn[b] = function(a) {
            return this.on(b, a);
        };
    });
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pc,
            type: "GET",
            isLocal: vc.test(oc[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Cc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Gc(Gc(a, jQuery.ajaxSettings), b) : Gc(jQuery.ajaxSettings, a);
        },
        ajaxPrefilter: Ec(Ac),
        ajaxTransport: Ec(Bc),
        ajax: function(a, c) {
            if (typeof a === "object") {
                c = a;
                a = b;
            }
            c = c || {};
            var d, e, f, g, h, i, j, k, l = jQuery.ajaxSetup({}, c), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? jQuery(m) : jQuery.event, o = jQuery.Deferred(), p = jQuery.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (t === 2) {
                        if (!k) {
                            k = {};
                            while (b = uc.exec(g)) {
                                k[b[1].toLowerCase()] = b[2];
                            }
                        }
                        b = k[a.toLowerCase()];
                    }
                    return b == null ? null : b;
                },
                getAllResponseHeaders: function() {
                    return t === 2 ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    if (!t) {
                        a = s[c] = s[c] || a;
                        r[a] = b;
                    }
                    return this;
                },
                overrideMimeType: function(a) {
                    if (!t) {
                        l.mimeType = a;
                    }
                    return this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) {
                        if (t < 2) {
                            for (b in a) {
                                q[b] = [ q[b], a[b] ];
                            }
                        } else {
                            w.always(a[w.status]);
                        }
                    }
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    if (j) {
                        j.abort(b);
                    }
                    y(0, b);
                    return this;
                }
            };
            o.promise(w).complete = p.add;
            w.success = w.done;
            w.error = w.fail;
            l.url = ((a || l.url || pc) + "").replace(sc, "").replace(xc, oc[1] + "//");
            l.type = c.method || c.type || l.method || l.type;
            l.dataTypes = jQuery.trim(l.dataType || "*").toLowerCase().match(v) || [ "" ];
            if (l.crossDomain == null) {
                d = yc.exec(l.url.toLowerCase());
                l.crossDomain = !!(d && (d[1] !== oc[1] || d[2] !== oc[2] || (d[3] || (d[1] === "http:" ? "80" : "443")) !== (oc[3] || (oc[1] === "http:" ? "80" : "443"))));
            }
            if (l.data && l.processData && typeof l.data !== "string") {
                l.data = jQuery.param(l.data, l.traditional);
            }
            Fc(Ac, l, c, w);
            if (t === 2) {
                return w;
            }
            i = l.global;
            if (i && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            l.type = l.type.toUpperCase();
            l.hasContent = !wc.test(l.type);
            f = l.url;
            if (!l.hasContent) {
                if (l.data) {
                    f = l.url += (rc.test(f) ? "&" : "?") + l.data;
                    delete l.data;
                }
                if (l.cache === false) {
                    l.url = tc.test(f) ? f.replace(tc, "$1_=" + qc++) : f + (rc.test(f) ? "&" : "?") + "_=" + qc++;
                }
            }
            if (l.ifModified) {
                if (jQuery.lastModified[f]) {
                    w.setRequestHeader("If-Modified-Since", jQuery.lastModified[f]);
                }
                if (jQuery.etag[f]) {
                    w.setRequestHeader("If-None-Match", jQuery.etag[f]);
                }
            }
            if (l.data && l.hasContent && l.contentType !== false || c.contentType) {
                w.setRequestHeader("Content-Type", l.contentType);
            }
            w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + Cc + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) {
                w.setRequestHeader(e, l.headers[e]);
            }
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === false || t === 2)) {
                return w.abort();
            }
            u = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                w[e](l[e]);
            }
            j = Fc(Bc, l, c, w);
            if (!j) {
                y(-1, "No Transport");
            } else {
                w.readyState = 1;
                if (i) {
                    n.trigger("ajaxSend", [ w, l ]);
                }
                if (l.async && l.timeout > 0) {
                    h = setTimeout(function() {
                        w.abort("timeout");
                    }, l.timeout);
                }
                try {
                    t = 1;
                    j.send(r, y);
                } catch (x) {
                    if (t < 2) {
                        y(-1, x);
                    } else {
                        throw x;
                    }
                }
            }
            function y(a, c, d, e) {
                var k, r, s, u, v, x = c;
                if (t === 2) {
                    return;
                }
                t = 2;
                if (h) {
                    clearTimeout(h);
                }
                j = b;
                g = e || "";
                w.readyState = a > 0 ? 4 : 0;
                k = a >= 200 && a < 300 || a === 304;
                if (d) {
                    u = Hc(l, w, d);
                }
                u = Ic(l, u, w, k);
                if (k) {
                    if (l.ifModified) {
                        v = w.getResponseHeader("Last-Modified");
                        if (v) {
                            jQuery.lastModified[f] = v;
                        }
                        v = w.getResponseHeader("etag");
                        if (v) {
                            jQuery.etag[f] = v;
                        }
                    }
                    if (a === 204 || l.type === "HEAD") {
                        x = "nocontent";
                    } else if (a === 304) {
                        x = "notmodified";
                    } else {
                        x = u.state;
                        r = u.data;
                        s = u.error;
                        k = !s;
                    }
                } else {
                    s = x;
                    if (a || !x) {
                        x = "error";
                        if (a < 0) {
                            a = 0;
                        }
                    }
                }
                w.status = a;
                w.statusText = (c || x) + "";
                if (k) {
                    o.resolveWith(m, [ r, x, w ]);
                } else {
                    o.rejectWith(m, [ w, x, s ]);
                }
                w.statusCode(q);
                q = b;
                if (i) {
                    n.trigger(k ? "ajaxSuccess" : "ajaxError", [ w, l, k ? r : s ]);
                }
                p.fireWith(m, [ w, x ]);
                if (i) {
                    n.trigger("ajaxComplete", [ w, l ]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return w;
        },
        getJSON: function(a, b, c) {
            return jQuery.get(a, b, c, "json");
        },
        getScript: function(a, c) {
            return jQuery.get(a, b, c, "script");
        }
    });
    jQuery.each([ "get", "post" ], function(a, c) {
        jQuery[c] = function(a, d, e, f) {
            if (jQuery.isFunction(d)) {
                f = f || e;
                e = d;
                d = b;
            }
            return jQuery.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            });
        };
    });
    function Hc(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes;
        while (j[0] === "*") {
            j.shift();
            if (f === b) {
                f = a.mimeType || c.getResponseHeader("Content-Type");
            }
        }
        if (f) {
            for (h in i) {
                if (i[h] && i[h].test(f)) {
                    j.unshift(h);
                    break;
                }
            }
        }
        if (j[0] in d) {
            g = j[0];
        } else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break;
                }
                if (!e) {
                    e = h;
                }
            }
            g = g || e;
        }
        if (g) {
            if (g !== j[0]) {
                j.unshift(g);
            }
            return d[g];
        }
    }
    function Ic(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g];
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f]) {
                c[a.responseFields[f]] = b;
            }
            if (!i && d && a.dataFilter) {
                b = a.dataFilter(b, a.dataType);
            }
            i = f;
            f = k.shift();
            if (f) {
                if (f === "*") {
                    f = i;
                } else if (i !== "*" && i !== f) {
                    g = j[i + " " + f] || j["* " + f];
                    if (!g) {
                        for (e in j) {
                            h = e.split(" ");
                            if (h[1] === f) {
                                g = j[i + " " + h[0]] || j["* " + h[0]];
                                if (g) {
                                    if (g === true) {
                                        g = j[e];
                                    } else if (j[e] !== true) {
                                        f = h[0];
                                        k.unshift(h[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (g !== true) {
                        if (g && a["throws"]) {
                            b = g(b);
                        } else {
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                jQuery.globalEval(a);
                return a;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(a) {
        if (a.cache === b) {
            a.cache = false;
        }
        if (a.crossDomain) {
            a.type = "GET";
            a.global = false;
        }
    });
    jQuery.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = g.head || jQuery("head")[0] || g.documentElement;
            return {
                send: function(b, e) {
                    c = g.createElement("script");
                    c.async = true;
                    if (a.scriptCharset) {
                        c.charset = a.scriptCharset;
                    }
                    c.src = a.url;
                    c.onload = c.onreadystatechange = function(a, b) {
                        if (b || !c.readyState || /loaded|complete/.test(c.readyState)) {
                            c.onload = c.onreadystatechange = null;
                            if (c.parentNode) {
                                c.parentNode.removeChild(c);
                            }
                            c = null;
                            if (!b) {
                                e(200, "success");
                            }
                        }
                    };
                    d.insertBefore(c, d.firstChild);
                },
                abort: function() {
                    if (c) {
                        c.onload(b, true);
                    }
                }
            };
        }
    });
    var Jc = [], Kc = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jc.pop() || jQuery.expando + "_" + qc++;
            this[a] = true;
            return a;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== false && (Kc.test(c.url) ? "url" : typeof c.data === "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Kc.test(c.data) && "data");
        if (i || c.dataTypes[0] === "jsonp") {
            f = c.jsonpCallback = jQuery.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback;
            if (i) {
                c[i] = c[i].replace(Kc, "$1" + f);
            } else if (c.jsonp !== false) {
                c.url += (rc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f;
            }
            c.converters["script json"] = function() {
                if (!h) {
                    jQuery.error(f + " was not called");
                }
                return h[0];
            };
            c.dataTypes[0] = "json";
            g = a[f];
            a[f] = function() {
                h = arguments;
            };
            e.always(function() {
                a[f] = g;
                if (c[f]) {
                    c.jsonpCallback = d.jsonpCallback;
                    Jc.push(f);
                }
                if (h && jQuery.isFunction(g)) {
                    g(h[0]);
                }
                h = g = b;
            });
            return "script";
        }
    });
    var Lc, Mc, Nc = 0, Oc = a.ActiveXObject && function() {
        var a;
        for (a in Lc) {
            Lc[a](b, true);
        }
    };
    function Pc() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function Qc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    jQuery.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && Pc() || Qc();
    } : Pc;
    Mc = jQuery.ajaxSettings.xhr();
    jQuery.support.cors = !!Mc && "withCredentials" in Mc;
    Mc = jQuery.support.ajax = !!Mc;
    if (Mc) {
        jQuery.ajaxTransport(function(c) {
            if (!c.crossDomain || jQuery.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        if (c.username) {
                            i.open(c.type, c.url, c.async, c.username, c.password);
                        } else {
                            i.open(c.type, c.url, c.async);
                        }
                        if (c.xhrFields) {
                            for (h in c.xhrFields) {
                                i[h] = c.xhrFields[h];
                            }
                        }
                        if (c.mimeType && i.overrideMimeType) {
                            i.overrideMimeType(c.mimeType);
                        }
                        if (!c.crossDomain && !e["X-Requested-With"]) {
                            e["X-Requested-With"] = "XMLHttpRequest";
                        }
                        try {
                            for (h in e) {
                                i.setRequestHeader(h, e[h]);
                            }
                        } catch (j) {}
                        i.send(c.hasContent && c.data || null);
                        d = function(a, e) {
                            var h, j, k, l;
                            try {
                                if (d && (e || i.readyState === 4)) {
                                    d = b;
                                    if (g) {
                                        i.onreadystatechange = jQuery.noop;
                                        if (Oc) {
                                            delete Lc[g];
                                        }
                                    }
                                    if (e) {
                                        if (i.readyState !== 4) {
                                            i.abort();
                                        }
                                    } else {
                                        l = {};
                                        h = i.status;
                                        j = i.getAllResponseHeaders();
                                        if (typeof i.responseText === "string") {
                                            l.text = i.responseText;
                                        }
                                        try {
                                            k = i.statusText;
                                        } catch (m) {
                                            k = "";
                                        }
                                        if (!h && c.isLocal && !c.crossDomain) {
                                            h = l.text ? 200 : 404;
                                        } else if (h === 1223) {
                                            h = 204;
                                        }
                                    }
                                }
                            } catch (n) {
                                if (!e) {
                                    f(-1, n);
                                }
                            }
                            if (l) {
                                f(h, k, l, j);
                            }
                        };
                        if (!c.async) {
                            d();
                        } else if (i.readyState === 4) {
                            setTimeout(d);
                        } else {
                            g = ++Nc;
                            if (Oc) {
                                if (!Lc) {
                                    Lc = {};
                                    jQuery(a).unload(Oc);
                                }
                                Lc[g] = d;
                            }
                            i.onreadystatechange = d;
                        }
                    },
                    abort: function() {
                        if (d) {
                            d(b, true);
                        }
                    }
                };
            }
        });
    }
    var Rc, Sc, Tc = /^(?:toggle|show|hide)$/, Uc = new RegExp("^(?:([+-])=|)(" + u + ")([a-z%]*)$", "i"), Vc = /queueHooks$/, Wc = [ ad ], Xc = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Uc.exec(b), f = e && e[3] || (jQuery.cssNumber[a] ? "" : "px"), g = (jQuery.cssNumber[a] || f !== "px" && +d) && Uc.exec(jQuery.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3];
                e = e || [];
                g = +d || 1;
                do {
                    h = h || ".5";
                    g = g / h;
                    jQuery.style(c.elem, a, g + f);
                } while (h !== (h = c.cur() / d) && h !== 1 && --i);
            }
            if (e) {
                g = c.start = +g || +d || 0;
                c.unit = f;
                c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2];
            }
            return c;
        } ]
    };
    function Yc() {
        setTimeout(function() {
            Rc = b;
        });
        return Rc = jQuery.now();
    }
    function Zc(a, b, c) {
        var d, e = (Xc[b] || []).concat(Xc["*"]), f = 0, g = e.length;
        for (;f < g; f++) {
            if (d = e[f].call(c, b, a)) {
                return d;
            }
        }
    }
    function $c(a, b, c) {
        var d, e, f = 0, g = Wc.length, h = jQuery.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) {
                return false;
            }
            var b = Rc || Yc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length;
            for (;g < i; g++) {
                j.tweens[g].run(f);
            }
            h.notifyWith(a, [ j, f, c ]);
            if (f < 1 && i) {
                return c;
            } else {
                h.resolveWith(a, [ j ]);
                return false;
            }
        }, j = h.promise({
            elem: a,
            props: jQuery.extend({}, b),
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Rc || Yc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = jQuery.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                j.tweens.push(d);
                return d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) {
                    return this;
                }
                e = true;
                for (;c < d; c++) {
                    j.tweens[c].run(1);
                }
                if (b) {
                    h.resolveWith(a, [ j, b ]);
                } else {
                    h.rejectWith(a, [ j, b ]);
                }
                return this;
            }
        }), k = j.props;
        _c(k, j.opts.specialEasing);
        for (;f < g; f++) {
            d = Wc[f].call(j, a, k, j.opts);
            if (d) {
                return d;
            }
        }
        jQuery.map(k, Zc, j);
        if (jQuery.isFunction(j.opts.start)) {
            j.opts.start.call(a, j);
        }
        jQuery.fx.timer(jQuery.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        }));
        return j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function _c(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = jQuery.camelCase(c);
            e = b[d];
            f = a[c];
            if (jQuery.isArray(f)) {
                e = f[1];
                f = a[c] = f[0];
            }
            if (c !== d) {
                a[d] = f;
                delete a[c];
            }
            g = jQuery.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f);
                delete a[d];
                for (c in f) {
                    if (!(c in a)) {
                        a[c] = f[c];
                        b[c] = e;
                    }
                }
            } else {
                b[d] = e;
            }
        }
    }
    jQuery.Animation = jQuery.extend($c, {
        tweener: function(a, b) {
            if (jQuery.isFunction(a)) {
                b = a;
                a = [ "*" ];
            } else {
                a = a.split(" ");
            }
            var c, d = 0, e = a.length;
            for (;d < e; d++) {
                c = a[d];
                Xc[c] = Xc[c] || [];
                Xc[c].unshift(b);
            }
        },
        prefilter: function(a, b) {
            if (b) {
                Wc.unshift(a);
            } else {
                Wc.push(a);
            }
        }
    });
    function ad(a, b, c) {
        var d, e, f, g, h, i, j = this, k = {}, l = a.style, m = a.nodeType && bc(a), n = jQuery._data(a, "fxshow");
        if (!c.queue) {
            h = jQuery._queueHooks(a, "fx");
            if (h.unqueued == null) {
                h.unqueued = 0;
                i = h.empty.fire;
                h.empty.fire = function() {
                    if (!h.unqueued) {
                        i();
                    }
                };
            }
            h.unqueued++;
            j.always(function() {
                j.always(function() {
                    h.unqueued--;
                    if (!jQuery.queue(a, "fx").length) {
                        h.empty.fire();
                    }
                });
            });
        }
        if (a.nodeType === 1 && ("height" in b || "width" in b)) {
            c.overflow = [ l.overflow, l.overflowX, l.overflowY ];
            if (jQuery.css(a, "display") === "inline" && jQuery.css(a, "float") === "none") {
                if (!jQuery.support.inlineBlockNeedsLayout || gc(a.nodeName) === "inline") {
                    l.display = "inline-block";
                } else {
                    l.zoom = 1;
                }
            }
        }
        if (c.overflow) {
            l.overflow = "hidden";
            if (!jQuery.support.shrinkWrapBlocks) {
                j.always(function() {
                    l.overflow = c.overflow[0];
                    l.overflowX = c.overflow[1];
                    l.overflowY = c.overflow[2];
                });
            }
        }
        for (d in b) {
            e = b[d];
            if (Tc.exec(e)) {
                delete b[d];
                f = f || e === "toggle";
                if (e === (m ? "hide" : "show")) {
                    continue;
                }
                k[d] = n && n[d] || jQuery.style(a, d);
            }
        }
        if (!jQuery.isEmptyObject(k)) {
            if (n) {
                if ("hidden" in n) {
                    m = n.hidden;
                }
            } else {
                n = jQuery._data(a, "fxshow", {});
            }
            if (f) {
                n.hidden = !m;
            }
            if (m) {
                jQuery(a).show();
            } else {
                j.done(function() {
                    jQuery(a).hide();
                });
            }
            j.done(function() {
                var b;
                jQuery._removeData(a, "fxshow");
                for (b in k) {
                    jQuery.style(a, b, k[b]);
                }
            });
            for (d in k) {
                g = Zc(m ? n[d] : 0, d, j);
                if (!(d in n)) {
                    n[d] = g.start;
                    if (m) {
                        g.end = g.start;
                        g.start = d === "width" || d === "height" ? 1 : 0;
                    }
                }
            }
        }
    }
    function bd(a, b, c, d, e) {
        return new bd.prototype.init(a, b, c, d, e);
    }
    jQuery.Tween = bd;
    bd.prototype = {
        constructor: bd,
        init: function(a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (jQuery.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = bd.propHooks[this.prop];
            return a && a.get ? a.get(this) : bd.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = bd.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = b = jQuery.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration);
            } else {
                this.pos = b = a;
            }
            this.now = (this.end - this.start) * b + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (c && c.set) {
                c.set(this);
            } else {
                bd.propHooks._default.set(this);
            }
            return this;
        }
    };
    bd.prototype.init.prototype = bd.prototype;
    bd.propHooks = {
        _default: {
            get: function(a) {
                var b;
                if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null)) {
                    return a.elem[a.prop];
                }
                b = jQuery.css(a.elem, a.prop, "");
                return !b || b === "auto" ? 0 : b;
            },
            set: function(a) {
                if (jQuery.fx.step[a.prop]) {
                    jQuery.fx.step[a.prop](a);
                } else if (a.elem.style && (a.elem.style[jQuery.cssProps[a.prop]] != null || jQuery.cssHooks[a.prop])) {
                    jQuery.style(a.elem, a.prop, a.now + a.unit);
                } else {
                    a.elem[a.prop] = a.now;
                }
            }
        }
    };
    bd.propHooks.scrollTop = bd.propHooks.scrollLeft = {
        set: function(a) {
            if (a.elem.nodeType && a.elem.parentNode) {
                a.elem[a.prop] = a.now;
            }
        }
    };
    jQuery.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = jQuery.fn[b];
        jQuery.fn[b] = function(a, d, e) {
            return a == null || typeof a === "boolean" ? c.apply(this, arguments) : this.animate(cd(b, true), a, d, e);
        };
    });
    jQuery.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(bc).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = jQuery.isEmptyObject(a), f = jQuery.speed(b, c, d), g = function() {
                var b = $c(this, jQuery.extend({}, a), f);
                if (e || jQuery._data(this, "finish")) {
                    b.stop(true);
                }
            };
            g.finish = g;
            return e || f.queue === false ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(d);
            };
            if (typeof a !== "string") {
                d = c;
                c = a;
                a = b;
            }
            if (c && a !== false) {
                this.queue(a || "fx", []);
            }
            return this.each(function() {
                var b = true, c = a != null && a + "queueHooks", f = jQuery.timers, g = jQuery._data(this);
                if (c) {
                    if (g[c] && g[c].stop) {
                        e(g[c]);
                    }
                } else {
                    for (c in g) {
                        if (g[c] && g[c].stop && Vc.test(c)) {
                            e(g[c]);
                        }
                    }
                }
                for (c = f.length; c--; ) {
                    if (f[c].elem === this && (a == null || f[c].queue === a)) {
                        f[c].anim.stop(d);
                        b = false;
                        f.splice(c, 1);
                    }
                }
                if (b || !d) {
                    jQuery.dequeue(this, a);
                }
            });
        },
        finish: function(a) {
            if (a !== false) {
                a = a || "fx";
            }
            return this.each(function() {
                var b, c = jQuery._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = jQuery.timers, g = d ? d.length : 0;
                c.finish = true;
                jQuery.queue(this, a, []);
                if (e && e.stop) {
                    e.stop.call(this, true);
                }
                for (b = f.length; b--; ) {
                    if (f[b].elem === this && f[b].queue === a) {
                        f[b].anim.stop(true);
                        f.splice(b, 1);
                    }
                }
                for (b = 0; b < g; b++) {
                    if (d[b] && d[b].finish) {
                        d[b].finish.call(this);
                    }
                }
                delete c.finish;
            });
        }
    });
    function cd(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        b = b ? 1 : 0;
        for (;e < 4; e += 2 - b) {
            c = $b[e];
            d["margin" + c] = d["padding" + c] = a;
        }
        if (b) {
            d.opacity = d.width = a;
        }
        return d;
    }
    jQuery.each({
        slideDown: cd("show"),
        slideUp: cd("hide"),
        slideToggle: cd("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        jQuery.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    });
    jQuery.speed = function(a, b, c) {
        var d = a && typeof a === "object" ? jQuery.extend({}, a) : {
            complete: c || !c && b || jQuery.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !jQuery.isFunction(b) && b
        };
        d.duration = jQuery.fx.off ? 0 : typeof d.duration === "number" ? d.duration : d.duration in jQuery.fx.speeds ? jQuery.fx.speeds[d.duration] : jQuery.fx.speeds._default;
        if (d.queue == null || d.queue === true) {
            d.queue = "fx";
        }
        d.old = d.complete;
        d.complete = function() {
            if (jQuery.isFunction(d.old)) {
                d.old.call(this);
            }
            if (d.queue) {
                jQuery.dequeue(this, d.queue);
            }
        };
        return d;
    };
    jQuery.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    };
    jQuery.timers = [];
    jQuery.fx = bd.prototype.init;
    jQuery.fx.tick = function() {
        var a, c = jQuery.timers, d = 0;
        Rc = jQuery.now();
        for (;d < c.length; d++) {
            a = c[d];
            if (!a() && c[d] === a) {
                c.splice(d--, 1);
            }
        }
        if (!c.length) {
            jQuery.fx.stop();
        }
        Rc = b;
    };
    jQuery.fx.timer = function(a) {
        if (a() && jQuery.timers.push(a)) {
            jQuery.fx.start();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!Sc) {
            Sc = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        clearInterval(Sc);
        Sc = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fx.step = {};
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.animated = function(a) {
            return jQuery.grep(jQuery.timers, function(b) {
                return a === b.elem;
            }).length;
        };
    }
    jQuery.fn.offset = function(a) {
        if (arguments.length) {
            return a === b ? this : this.each(function(b) {
                jQuery.offset.setOffset(this, a, b);
            });
        }
        var c, d, f = {
            top: 0,
            left: 0
        }, g = this[0], h = g && g.ownerDocument;
        if (!h) {
            return;
        }
        c = h.documentElement;
        if (!jQuery.contains(c, g)) {
            return f;
        }
        if (typeof g.getBoundingClientRect !== e) {
            f = g.getBoundingClientRect();
        }
        d = dd(h);
        return {
            top: f.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: f.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        };
    };
    jQuery.offset = {
        setOffset: function(a, b, c) {
            var d = jQuery.css(a, "position");
            if (d === "static") {
                a.style.position = "relative";
            }
            var e = jQuery(a), f = e.offset(), g = jQuery.css(a, "top"), h = jQuery.css(a, "left"), i = (d === "absolute" || d === "fixed") && jQuery.inArray("auto", [ g, h ]) > -1, j = {}, k = {}, l, m;
            if (i) {
                k = e.position();
                l = k.top;
                m = k.left;
            } else {
                l = parseFloat(g) || 0;
                m = parseFloat(h) || 0;
            }
            if (jQuery.isFunction(b)) {
                b = b.call(a, c, f);
            }
            if (b.top != null) {
                j.top = b.top - f.top + l;
            }
            if (b.left != null) {
                j.left = b.left - f.left + m;
            }
            if ("using" in b) {
                b.using.call(a, j);
            } else {
                e.css(j);
            }
        }
    };
    jQuery.fn.extend({
        position: function() {
            if (!this[0]) {
                return;
            }
            var a, b, c = {
                top: 0,
                left: 0
            }, d = this[0];
            if (jQuery.css(d, "position") === "fixed") {
                b = d.getBoundingClientRect();
            } else {
                a = this.offsetParent();
                b = this.offset();
                if (!jQuery.nodeName(a[0], "html")) {
                    c = a.offset();
                }
                c.top += jQuery.css(a[0], "borderTopWidth", true);
                c.left += jQuery.css(a[0], "borderLeftWidth", true);
            }
            return {
                top: b.top - c.top - jQuery.css(d, "marginTop", true),
                left: b.left - c.left - jQuery.css(d, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || h;
                while (a && (!jQuery.nodeName(a, "html") && jQuery.css(a, "position") === "static")) {
                    a = a.offsetParent;
                }
                return a || h;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        jQuery.fn[a] = function(e) {
            return jQuery.access(this, function(a, e, f) {
                var g = dd(a);
                if (f === b) {
                    return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                }
                if (g) {
                    g.scrollTo(!d ? f : jQuery(g).scrollLeft(), d ? f : jQuery(g).scrollTop());
                } else {
                    a[e] = f;
                }
            }, a, e, arguments.length, null);
        };
    });
    function dd(a) {
        return jQuery.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false;
    }
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        jQuery.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            jQuery.fn[e] = function(e, f) {
                var g = arguments.length && (d || typeof e !== "boolean"), h = d || (e === true || f === true ? "margin" : "border");
                return jQuery.access(this, function(c, d, e) {
                    var f;
                    if (jQuery.isWindow(c)) {
                        return c.document.documentElement["client" + a];
                    }
                    if (c.nodeType === 9) {
                        f = c.documentElement;
                        return Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a]);
                    }
                    return e === b ? jQuery.css(c, d, h) : jQuery.style(c, d, e, h);
                }, c, g ? e : b, g, null);
            };
        });
    });
    jQuery.fn.size = function() {
        return this.length;
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = jQuery;
    } else {
        a.jQuery = a.$ = jQuery;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return jQuery;
            });
        }
    }
})(window);

(function(a, b, c, d) {
    var e = "velocity", f = 400, g = "swing";
    var h = function() {
        if (c.documentMode) {
            return c.documentMode;
        } else {
            for (var a = 7; a > 4; a--) {
                var b = c.createElement("div");
                b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->";
                if (b.getElementsByTagName("span").length) {
                    b = null;
                    return a;
                }
            }
        }
        return d;
    }();
    var i = b.requestAnimationFrame || function() {
        var a = 0;
        return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
            var c = new Date().getTime(), d;
            d = Math.max(0, 16 - (c - a));
            a = c + d;
            return setTimeout(function() {
                b(c + d);
            }, d);
        };
    }();
    function j(a) {
        var b = -1, c = a ? a.length : 0, d = [];
        while (++b < c) {
            var e = a[b];
            if (e) {
                d.push(e);
            }
        }
        return d;
    }
    var k = function(a) {
        return typeof a === "string";
    };
    var l = Array.isArray || function(a) {
        return Object.prototype.toString.call(a) === "[object Array]";
    };
    function m(a) {
        return Object.prototype.toString.call(a) === "[object Function]";
    }
    function n(a) {
        var b = Object.prototype.toString.call(a);
        return typeof a === "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(b) && a.length !== d && (a.length === 0 || typeof a[0] === "object" && a[0].nodeType > 0);
    }
    function o(a) {
        return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a));
    }
    var p = b.jQuery || a.Velocity && a.Velocity.Utilities;
    if (!p) {
        throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");
    } else if (a.Velocity !== d && !a.Velocity.Utilities) {
        throw new Error("Velocity: Namespace is occupied.");
    } else if (h <= 7) {
        if (!b.jQuery) {
            throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.");
        } else {
            b.jQuery.fn.velocity = b.jQuery.fn.animate;
            return;
        }
    } else if (h === 8 && !b.jQuery) {
        throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");
    }
    var q = a.Velocity = a.velocity = {
        State: {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isAndroid: /Android/i.test(navigator.userAgent),
            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
            prefixElement: c.createElement("div"),
            prefixMatches: {},
            scrollAnchor: null,
            scrollPropertyLeft: null,
            scrollPropertyTop: null,
            isTicking: false,
            calls: []
        },
        CSS: {},
        Utilities: b.jQuery ? {} : p,
        Sequences: {},
        Easings: {},
        defaults: {
            queue: "",
            duration: f,
            easing: g,
            begin: null,
            complete: null,
            progress: null,
            display: null,
            loop: false,
            delay: false,
            mobileHA: true,
            _cacheValues: true
        },
        animate: function() {},
        mock: false,
        debug: false
    };
    if (b.pageYOffset !== d) {
        q.State.scrollAnchor = b;
        q.State.scrollPropertyLeft = "pageXOffset";
        q.State.scrollPropertyTop = "pageYOffset";
    } else {
        q.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body;
        q.State.scrollPropertyLeft = "scrollLeft";
        q.State.scrollPropertyTop = "scrollTop";
    }
    var r = function() {
        function a(a, b) {
            return 1 - 3 * b + 3 * a;
        }
        function b(a, b) {
            return 3 * b - 6 * a;
        }
        function c(a) {
            return 3 * a;
        }
        function d(d, e, f) {
            return ((a(e, f) * d + b(e, f)) * d + c(e)) * d;
        }
        function e(d, e, f) {
            return 3 * a(e, f) * d * d + 2 * b(e, f) * d + c(e);
        }
        return function(a, b, c, f) {
            if (arguments.length !== 4) {
                return false;
            }
            for (var g = 0; g < 4; ++g) {
                if (typeof arguments[g] !== "number" || isNaN(arguments[g]) || !isFinite(arguments[g])) {
                    return false;
                }
            }
            a = Math.min(a, 1);
            c = Math.min(c, 1);
            a = Math.max(a, 0);
            c = Math.max(c, 0);
            function h(b) {
                var f = b;
                for (var g = 0; g < 8; ++g) {
                    var h = e(f, a, c);
                    if (h === 0) {
                        return f;
                    }
                    var i = d(f, a, c) - b;
                    f -= i / h;
                }
                return f;
            }
            return function(e) {
                if (a === b && c === f) {
                    return e;
                } else {
                    return d(h(e), b, f);
                }
            };
        };
    }();
    var s = function() {
        function a(a) {
            return -a.tension * a.x - a.friction * a.v;
        }
        function b(b, c, d) {
            var e = {
                x: b.x + d.dx * c,
                v: b.v + d.dv * c,
                tension: b.tension,
                friction: b.friction
            };
            return {
                dx: e.v,
                dv: a(e)
            };
        }
        function c(c, d) {
            var e = {
                dx: c.v,
                dv: a(c)
            }, f = b(c, d * .5, e), g = b(c, d * .5, f), h = b(c, d, g), i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx), j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
            c.x = c.x + i * d;
            c.v = c.v + j * d;
            return c;
        }
        return function d(a, b, e) {
            var f = {
                x: -1,
                v: 0,
                tension: null,
                friction: null
            }, g = [ 0 ], h = 0, i = 1 / 1e4, j = 16 / 1e3, k, l, m;
            a = parseFloat(a) || 600;
            b = parseFloat(b) || 20;
            e = e || null;
            f.tension = a;
            f.friction = b;
            k = e !== null;
            if (k) {
                h = d(a, b);
                l = h / e * j;
            } else {
                l = j;
            }
            while (true) {
                m = c(m || f, l);
                g.push(1 + m.x);
                h += 16;
                if (!(Math.abs(m.x) > i && Math.abs(m.v) > i)) {
                    break;
                }
            }
            return !k ? h : function(a) {
                return g[a * (g.length - 1) | 0];
            };
        };
    }();
    (function() {
        q.Easings["linear"] = function(a) {
            return a;
        };
        q.Easings["swing"] = function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        };
        q.Easings["ease"] = r(.25, .1, .25, 1);
        q.Easings["ease-in"] = r(.42, 0, 1, 1);
        q.Easings["ease-out"] = r(0, 0, .58, 1);
        q.Easings["ease-in-out"] = r(.42, 0, .58, 1);
        var a = {};
        p.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(b, c) {
            a[c] = function(a) {
                return Math.pow(a, b + 2);
            };
        });
        p.extend(a, {
            Sine: function(a) {
                return 1 - Math.cos(a * Math.PI / 2);
            },
            Circ: function(a) {
                return 1 - Math.sqrt(1 - a * a);
            },
            Elastic: function(a) {
                return a === 0 || a === 1 ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin(((a - 1) * 80 - 7.5) * Math.PI / 15);
            },
            Back: function(a) {
                return a * a * (3 * a - 2);
            },
            Bounce: function(a) {
                var b, c = 4;
                while (a < ((b = Math.pow(2, --c)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((b * 3 - 2) / 22 - a, 2);
            }
        });
        p.each(a, function(a, b) {
            q.Easings["easeIn" + a] = b;
            q.Easings["easeOut" + a] = function(a) {
                return 1 - b(1 - a);
            };
            q.Easings["easeInOut" + a] = function(a) {
                return a < .5 ? b(a * 2) / 2 : 1 - b(a * -2 + 2) / 2;
            };
        });
        q.Easings["spring"] = function(a) {
            return 1 - Math.cos(a * 4.5 * Math.PI) * Math.exp(-a * 6);
        };
    })();
    function t(a, b) {
        var c = a;
        if (k(a)) {
            if (!q.Easings[a]) {
                c = false;
            }
        } else if (l(a) && a.length === 2) {
            c = s.apply(null, a.concat([ b ]));
        } else if (l(a) && a.length === 4) {
            c = r.apply(null, a);
        } else {
            c = false;
        }
        if (c === false) {
            if (q.Easings[q.defaults.easing]) {
                c = q.defaults.easing;
            } else {
                c = g;
            }
        }
        return c;
    }
    var u = q.CSS = {
        RegEx: {
            valueUnwrap: /^[A-z]+\((.*)\)$/i,
            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
        },
        Hooks: {
            templates: {
                color: [ "Red Green Blue Alpha", "255 255 255 1" ],
                backgroundColor: [ "Red Green Blue Alpha", "255 255 255 1" ],
                borderColor: [ "Red Green Blue Alpha", "255 255 255 1" ],
                borderTopColor: [ "Red Green Blue Alpha", "255 255 255 1" ],
                borderRightColor: [ "Red Green Blue Alpha", "255 255 255 1" ],
                borderBottomColor: [ "Red Green Blue Alpha", "255 255 255 1" ],
                borderLeftColor: [ "Red Green Blue Alpha", "255 255 255 1" ],
                outlineColor: [ "Red Green Blue Alpha", "255 255 255 1" ],
                textShadow: [ "Color X Y Blur", "black 0px 0px 0px" ],
                boxShadow: [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
                clip: [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
                backgroundPosition: [ "X Y", "0% 0%" ],
                transformOrigin: [ "X Y Z", "50% 50% 0%" ],
                perspectiveOrigin: [ "X Y", "50% 50%" ]
            },
            registered: {},
            register: function() {
                var a, b, c;
                if (h) {
                    for (a in u.Hooks.templates) {
                        b = u.Hooks.templates[a];
                        c = b[0].split(" ");
                        var d = b[1].match(u.RegEx.valueSplit);
                        if (c[0] === "Color") {
                            c.push(c.shift());
                            d.push(d.shift());
                            u.Hooks.templates[a] = [ c.join(" "), d.join(" ") ];
                        }
                    }
                }
                for (a in u.Hooks.templates) {
                    b = u.Hooks.templates[a];
                    c = b[0].split(" ");
                    for (var e in c) {
                        var f = a + c[e], g = e;
                        u.Hooks.registered[f] = [ a, g ];
                    }
                }
            },
            getRoot: function(a) {
                var b = u.Hooks.registered[a];
                if (b) {
                    return b[0];
                } else {
                    return a;
                }
            },
            cleanRootPropertyValue: function(a, b) {
                if (u.RegEx.valueUnwrap.test(b)) {
                    b = b.match(u.Hooks.RegEx.valueUnwrap)[1];
                }
                if (u.Values.isCSSNullValue(b)) {
                    b = u.Hooks.templates[a][1];
                }
                return b;
            },
            extractValue: function(a, b) {
                var c = u.Hooks.registered[a];
                if (c) {
                    var d = c[0], e = c[1];
                    b = u.Hooks.cleanRootPropertyValue(d, b);
                    return b.toString().match(u.RegEx.valueSplit)[e];
                } else {
                    return b;
                }
            },
            injectValue: function(a, b, c) {
                var d = u.Hooks.registered[a];
                if (d) {
                    var e = d[0], f = d[1], g, h;
                    c = u.Hooks.cleanRootPropertyValue(e, c);
                    g = c.toString().match(u.RegEx.valueSplit);
                    g[f] = b;
                    h = g.join(" ");
                    return h;
                } else {
                    return c;
                }
            }
        },
        Normalizations: {
            registered: {
                clip: function(a, b, c) {
                    switch (a) {
                      case "name":
                        return "clip";

                      case "extract":
                        var d;
                        if (u.RegEx.wrappedValueAlreadyExtracted.test(c)) {
                            d = c;
                        } else {
                            d = c.toString().match(u.RegEx.valueUnwrap);
                            d = d ? d[1].replace(/,(\s+)?/g, " ") : c;
                        }
                        return d;

                      case "inject":
                        return "rect(" + c + ")";
                    }
                },
                opacity: function(a, b, c) {
                    if (h <= 8) {
                        switch (a) {
                          case "name":
                            return "filter";

                          case "extract":
                            var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                            if (d) {
                                c = d[1] / 100;
                            } else {
                                c = 1;
                            }
                            return c;

                          case "inject":
                            b.style.zoom = 1;
                            if (parseFloat(c) >= 1) {
                                return "";
                            } else {
                                return "alpha(opacity=" + parseInt(parseFloat(c) * 100, 10) + ")";
                            }
                        }
                    } else {
                        switch (a) {
                          case "name":
                            return "opacity";

                          case "extract":
                            return c;

                          case "inject":
                            return c;
                        }
                    }
                }
            },
            register: function() {
                var a = [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ];
                if (!(h <= 9) && !q.State.isGingerbread) {
                    a = a.concat([ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]);
                }
                for (var b = 0, c = a.length; b < c; b++) {
                    (function() {
                        var c = a[b];
                        u.Normalizations.registered[c] = function(a, b, f) {
                            switch (a) {
                              case "name":
                                return "transform";

                              case "extract":
                                if (p.data(b, e).transformCache[c] === d) {
                                    return /^scale/i.test(c) ? 1 : 0;
                                } else {
                                    return p.data(b, e).transformCache[c].replace(/[()]/g, "");
                                }

                              case "inject":
                                var g = false;
                                switch (c.substr(0, c.length - 1)) {
                                  case "translate":
                                    g = !/(%|px|em|rem|\d)$/i.test(f);
                                    break;

                                  case "scal":
                                  case "scale":
                                    if (q.State.isAndroid && p.data(b, e).transformCache[c] === d) {
                                        f = 1;
                                    }
                                    g = !/(\d)$/i.test(f);
                                    break;

                                  case "skew":
                                    g = !/(deg|\d)$/i.test(f);
                                    break;

                                  case "rotate":
                                    g = !/(deg|\d)$/i.test(f);
                                    break;
                                }
                                if (!g) {
                                    p.data(b, e).transformCache[c] = "(" + f + ")";
                                }
                                return p.data(b, e).transformCache[c];
                            }
                        };
                    })();
                }
                var f = [ "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ];
                for (var b = 0, g = f.length; b < g; b++) {
                    function i(a) {
                        var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, d;
                        a = a.replace(b, function(a, b, c, d) {
                            return b + b + c + c + d + d;
                        });
                        d = c.exec(a);
                        return d ? "rgb(" + (parseInt(d[1], 16) + " " + parseInt(d[2], 16) + " " + parseInt(d[3], 16)) + ")" : "rgb(0 0 0)";
                    }
                    (function() {
                        var a = f[b];
                        u.Normalizations.registered[a] = function(b, c, e) {
                            switch (b) {
                              case "name":
                                return a;

                              case "extract":
                                var f;
                                if (u.RegEx.wrappedValueAlreadyExtracted.test(e)) {
                                    f = e;
                                } else {
                                    var g, j = {
                                        aqua: "rgb(0, 255, 255);",
                                        black: "rgb(0, 0, 0)",
                                        blue: "rgb(0, 0, 255)",
                                        fuchsia: "rgb(255, 0, 255)",
                                        gray: "rgb(128, 128, 128)",
                                        green: "rgb(0, 128, 0)",
                                        lime: "rgb(0, 255, 0)",
                                        maroon: "rgb(128, 0, 0)",
                                        navy: "rgb(0, 0, 128)",
                                        olive: "rgb(128, 128, 0)",
                                        purple: "rgb(128, 0, 128)",
                                        red: "rgb(255, 0, 0)",
                                        silver: "rgb(192, 192, 192)",
                                        teal: "rgb(0, 128, 128)",
                                        white: "rgb(255, 255, 255)",
                                        yellow: "rgb(255, 255, 0)"
                                    };
                                    if (/^[A-z]+$/i.test(e)) {
                                        if (j[e] !== d) {
                                            g = j[e];
                                        } else {
                                            g = j.black;
                                        }
                                    } else if (/^#([A-f\d]{3}){1,2}$/i.test(e)) {
                                        g = i(e);
                                    } else if (!/^rgba?\(/i.test(e)) {
                                        g = j.black;
                                    }
                                    f = (g || e).toString().match(u.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                }
                                if (!(h <= 8) && f.split(" ").length === 3) {
                                    f += " 1";
                                }
                                return f;

                              case "inject":
                                if (h <= 8) {
                                    if (e.split(" ").length === 4) {
                                        e = e.split(/\s+/).slice(0, 3).join(" ");
                                    }
                                } else if (e.split(" ").length === 3) {
                                    e += " 1";
                                }
                                return (h <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                            }
                        };
                    })();
                }
            }
        },
        Names: {
            camelCase: function(a) {
                return a.replace(/-(\w)/g, function(a, b) {
                    return b.toUpperCase();
                });
            },
            prefixCheck: function(a) {
                if (q.State.prefixMatches[a]) {
                    return [ q.State.prefixMatches[a], true ];
                } else {
                    var b = [ "", "Webkit", "Moz", "ms", "O" ];
                    for (var c = 0, d = b.length; c < d; c++) {
                        var e;
                        if (c === 0) {
                            e = a;
                        } else {
                            e = b[c] + a.replace(/^\w/, function(a) {
                                return a.toUpperCase();
                            });
                        }
                        if (k(q.State.prefixElement.style[e])) {
                            q.State.prefixMatches[a] = e;
                            return [ e, true ];
                        }
                    }
                    return [ a, false ];
                }
            }
        },
        Values: {
            isCSSNullValue: function(a) {
                return a == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a);
            },
            getUnitType: function(a) {
                if (/^(rotate|skew)/i.test(a)) {
                    return "deg";
                } else if (/(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(a)) {
                    return "";
                } else {
                    return "px";
                }
            },
            getDisplayType: function(a) {
                var b = a.tagName.toString().toLowerCase();
                if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)) {
                    return "inline";
                } else if (/^(li)$/i.test(b)) {
                    return "list-item";
                } else if (/^(tr)$/i.test(b)) {
                    return "table-row";
                } else {
                    return "block";
                }
            }
        },
        getPropertyValue: function(a, c, f, g) {
            function i(a, c) {
                var f = 0;
                if (h <= 8) {
                    f = p.css(a, c);
                } else {
                    if (!g) {
                        if (c === "height" && u.getPropertyValue(a, "boxSizing").toString().toLowerCase() !== "border-box") {
                            return a.offsetHeight - (parseFloat(u.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(u.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(u.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(u.getPropertyValue(a, "paddingBottom")) || 0);
                        } else if (c === "width" && u.getPropertyValue(a, "boxSizing").toString().toLowerCase() !== "border-box") {
                            return a.offsetWidth - (parseFloat(u.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(u.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(u.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(u.getPropertyValue(a, "paddingRight")) || 0);
                        }
                    }
                    var j;
                    if (p.data(a, e) === d) {
                        j = b.getComputedStyle(a, null);
                    } else if (!p.data(a, e).computedStyle) {
                        j = p.data(a, e).computedStyle = b.getComputedStyle(a, null);
                    } else {
                        j = p.data(a, e).computedStyle;
                    }
                    if (h && c === "borderColor") {
                        c = "borderTopColor";
                    }
                    if (h === 9 && c === "filter") {
                        f = j.getPropertyValue(c);
                    } else {
                        f = j[c];
                    }
                    if (f === "" || f === null) {
                        f = a.style[c];
                    }
                }
                if (f === "auto" && /^(top|right|bottom|left)$/i.test(c)) {
                    var k = i(a, "position");
                    if (k === "fixed" || k === "absolute" && /top|left/i.test(c)) {
                        f = p(a).position()[c] + "px";
                    }
                }
                return f;
            }
            var j;
            if (u.Hooks.registered[c]) {
                var k = c, l = u.Hooks.getRoot(k);
                if (f === d) {
                    f = u.getPropertyValue(a, u.Names.prefixCheck(l)[0]);
                }
                if (u.Normalizations.registered[l]) {
                    f = u.Normalizations.registered[l]("extract", a, f);
                }
                j = u.Hooks.extractValue(k, f);
            } else if (u.Normalizations.registered[c]) {
                var m, n;
                m = u.Normalizations.registered[c]("name", a);
                if (m !== "transform") {
                    n = i(a, u.Names.prefixCheck(m)[0]);
                    if (u.Values.isCSSNullValue(n) && u.Hooks.templates[c]) {
                        n = u.Hooks.templates[c][1];
                    }
                }
                j = u.Normalizations.registered[c]("extract", a, n);
            }
            if (!/^[\d-]/.test(j)) {
                j = i(a, u.Names.prefixCheck(c)[0]);
            }
            if (u.Values.isCSSNullValue(j)) {
                j = 0;
            }
            if (q.debug >= 2) console.log("Get " + c + ": " + j);
            return j;
        },
        setPropertyValue: function(a, c, d, f, g) {
            var i = c;
            if (c === "scroll") {
                if (g.container) {
                    g.container["scroll" + g.direction] = d;
                } else {
                    if (g.direction === "Left") {
                        b.scrollTo(d, g.alternateValue);
                    } else {
                        b.scrollTo(g.alternateValue, d);
                    }
                }
            } else {
                if (u.Normalizations.registered[c] && u.Normalizations.registered[c]("name", a) === "transform") {
                    u.Normalizations.registered[c]("inject", a, d);
                    i = "transform";
                    d = p.data(a, e).transformCache[c];
                } else {
                    if (u.Hooks.registered[c]) {
                        var j = c, k = u.Hooks.getRoot(c);
                        f = f || u.getPropertyValue(a, k);
                        d = u.Hooks.injectValue(j, d, f);
                        c = k;
                    }
                    if (u.Normalizations.registered[c]) {
                        d = u.Normalizations.registered[c]("inject", a, d);
                        c = u.Normalizations.registered[c]("name", a);
                    }
                    i = u.Names.prefixCheck(c)[0];
                    if (h <= 8) {
                        try {
                            a.style[i] = d;
                        } catch (l) {
                            console.log("Error setting [" + i + "] to [" + d + "]");
                        }
                    } else {
                        a.style[i] = d;
                    }
                    if (q.debug >= 2) console.log("Set " + c + " (" + i + "): " + d);
                }
            }
            return [ i, d ];
        },
        flushTransformCache: function(a) {
            var b = "", c, d, f;
            for (c in p.data(a, e).transformCache) {
                d = p.data(a, e).transformCache[c];
                if (c === "transformPerspective") {
                    f = d;
                    continue;
                }
                if (h === 9 && c === "rotateZ") {
                    c = "rotate";
                }
                b += c + d + " ";
            }
            if (f) {
                b = "perspective" + f + " " + b;
            }
            u.setPropertyValue(a, "transform", b);
        }
    };
    u.Hooks.register();
    u.Normalizations.register();
    q.animate = function() {
        function a() {
            return g || r;
        }
        var b = arguments[0] && (p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || k(arguments[0].properties)), g, i;
        var r, s, x;
        if (o(this)) {
            i = 0;
            r = this;
            g = this;
        } else {
            i = 1;
            r = b ? arguments[0].elements : arguments[0];
        }
        r = o(r) ? [].slice.call(r) : r;
        if (!r) {
            return;
        }
        if (b) {
            s = arguments[0].properties;
            x = arguments[0].options;
        } else {
            s = arguments[i];
            x = arguments[i + 1];
        }
        var y = n(r) || l(r) ? r.length : 1, z = 0;
        if (s !== "stop" && !p.isPlainObject(x)) {
            var A = i + 1;
            x = {};
            for (var B = A; B < arguments.length; B++) {
                if (!l(arguments[B]) && /^\d/.test(arguments[B])) {
                    x.duration = parseFloat(arguments[B]);
                } else if (k(arguments[B])) {
                    x.easing = arguments[B];
                } else if (l(arguments[B]) && (arguments[B].length === 2 || arguments[B].length === 4)) {
                    x.easing = arguments[B];
                } else if (m(arguments[B])) {
                    x.complete = arguments[B];
                }
            }
        }
        var C;
        switch (s) {
          case "scroll":
            C = "scroll";
            break;

          case "reverse":
            C = "reverse";
            break;

          case "stop":
            var D = [];
            p.each(q.State.calls, function(a, b) {
                if (b !== false) {
                    p.each(b[1].nodeType ? [ b[1] ] : b[1], function(b, c) {
                        p.each(r.nodeType ? [ r ] : r, function(b, d) {
                            if (d === c) {
                                if (p.data(d, e)) {
                                    p.each(p.data(d, e).tweensContainer, function(a, b) {
                                        b.endValue = b.currentValue;
                                    });
                                }
                                if (x === true || k(x)) {
                                    p.queue(d, k(x) ? x : "", []);
                                }
                                D.push(a);
                            }
                        });
                    });
                }
            });
            p.each(D, function(a, b) {
                w(b, true);
            });
            return a();

          default:
            if (p.isPlainObject(s) && !p.isEmptyObject(s)) {
                C = "start";
            } else if (k(s) && q.Sequences[s]) {
                var E = r, F = x.duration;
                if (x.backwards === true) {
                    r = (r.jquery ? [].slice.call(r) : r).reverse();
                }
                p.each(r, function(a, b) {
                    if (parseFloat(x.stagger)) {
                        x.delay = parseFloat(x.stagger) * a;
                    }
                    if (x.drag) {
                        x.duration = parseFloat(F) || (/^(callout|transition)/.test(s) ? 1e3 : f);
                        x.duration = Math.max(x.duration * (x.backwards ? 1 - a / y : (a + 1) / y), x.duration * .75, 200);
                    }
                    q.Sequences[s].call(b, b, x || {}, a, y);
                });
                return g || E;
            } else {
                console.log("First argument was not a property map, a known action, or a registered sequence. Aborting.");
                return a();
            }
        }
        var G = {
            lastParent: null,
            lastPosition: null,
            lastFontSize: null,
            lastPercentToPxWidth: null,
            lastPercentToPxHeight: null,
            lastEmToPx: null,
            remToPxRatio: null
        };
        var H = [];
        function I() {
            var a = this, b = p.extend({}, q.defaults, x), g = {};
            if (p.data(a, e) === d) {
                p.data(a, e, {
                    isAnimating: false,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                });
            }
            if (/^\d/.test(b.delay) && b.queue !== false) {
                p.queue(a, b.queue, function(a) {
                    q.velocityQueueEntryFlag = true;
                    setTimeout(a, parseFloat(b.delay));
                });
            }
            if (q.mock === true) {
                b.duration = 1;
            } else {
                switch (b.duration.toString().toLowerCase()) {
                  case "fast":
                    b.duration = 200;
                    break;

                  case "normal":
                    b.duration = f;
                    break;

                  case "slow":
                    b.duration = 600;
                    break;

                  default:
                    b.duration = parseFloat(b.duration) || 1;
                }
            }
            b.easing = t(b.easing, b.duration);
            if (b.begin && !m(b.begin)) {
                b.begin = null;
            }
            if (b.progress && !m(b.progress)) {
                b.progress = null;
            }
            if (b.complete && !m(b.complete)) {
                b.complete = null;
            }
            if (b.display) {
                b.display = b.display.toString().toLowerCase();
            }
            b.mobileHA = b.mobileHA && q.State.isMobile && !q.State.isGingerbread;
            function i(f) {
                if (b.begin && z === 0) {
                    b.begin.call(r, r);
                }
                if (C === "scroll") {
                    var i = /^x$/i.test(b.axis) ? "Left" : "Top", n = parseFloat(b.offset) || 0, o, w, A;
                    if (b.container) {
                        if (b.container.jquery || b.container.nodeType) {
                            b.container = b.container[0] || b.container;
                            o = b.container["scroll" + i];
                            A = o + p(a).position()[i.toLowerCase()] + n;
                        } else {
                            b.container = null;
                        }
                    } else {
                        o = q.State.scrollAnchor[q.State["scrollProperty" + i]];
                        w = q.State.scrollAnchor[q.State["scrollProperty" + (i === "Left" ? "Top" : "Left")]];
                        A = p(a).offset()[i.toLowerCase()] + n;
                    }
                    g = {
                        scroll: {
                            rootPropertyValue: false,
                            startValue: o,
                            currentValue: o,
                            endValue: A,
                            unitType: "",
                            easing: b.easing,
                            scrollData: {
                                container: b.container,
                                direction: i,
                                alternateValue: w
                            }
                        },
                        element: a
                    };
                } else if (C === "reverse") {
                    if (!p.data(a, e).tweensContainer) {
                        p.dequeue(a, b.queue);
                        return;
                    } else {
                        if (p.data(a, e).opts.display === "none") {
                            p.data(a, e).opts.display = "block";
                        }
                        p.data(a, e).opts.loop = false;
                        p.data(a, e).opts.begin = null;
                        p.data(a, e).opts.complete = null;
                        if (!x.easing) {
                            delete b.easing;
                        }
                        if (!x.duration) {
                            delete b.duration;
                        }
                        b = p.extend({}, p.data(a, e).opts, b);
                        var B = p.extend(true, {}, p.data(a, e).tweensContainer);
                        for (var D in B) {
                            if (D !== "element") {
                                var E = B[D].startValue;
                                B[D].startValue = B[D].currentValue = B[D].endValue;
                                B[D].endValue = E;
                                if (x) {
                                    B[D].easing = b.easing;
                                }
                            }
                        }
                        g = B;
                    }
                } else if (C === "start") {
                    var B;
                    if (p.data(a, e).tweensContainer && p.data(a, e).isAnimating === true) {
                        B = p.data(a, e).tweensContainer;
                    }
                    function F(c) {
                        var e = d, f = d, g = d;
                        if (l(c)) {
                            e = c[0];
                            if (!l(c[1]) && /^[\d-]/.test(c[1]) || m(c[1])) {
                                g = c[1];
                            } else if (k(c[1]) || l(c[1])) {
                                f = t(c[1], b.duration);
                                if (c[2]) {
                                    g = c[2];
                                }
                            }
                        } else {
                            e = c;
                        }
                        f = f || b.easing;
                        if (m(e)) {
                            e = e.call(a, z, y);
                        }
                        if (m(g)) {
                            g = g.call(a, z, y);
                        }
                        return [ e || 0, f, g ];
                    }
                    for (var I in s) {
                        var J = F(s[I]), K = J[0], L = J[1], M = J[2];
                        I = u.Names.camelCase(I);
                        var N = u.Hooks.getRoot(I), O = false;
                        if (u.Names.prefixCheck(N)[1] === false && u.Normalizations.registered[N] === d) {
                            if (q.debug) console.log("Skipping [" + N + "] due to a lack of browser support.");
                            continue;
                        }
                        if (b.display && b.display !== "none" && /opacity|filter/.test(I) && !M && K !== 0) {
                            M = 0;
                        }
                        if (b._cacheValues && B && B[I]) {
                            if (M === d) {
                                M = B[I].endValue + B[I].unitType;
                            }
                            O = p.data(a, e).rootPropertyValueCache[N];
                        } else {
                            if (u.Hooks.registered[I]) {
                                if (M === d) {
                                    O = u.getPropertyValue(a, N);
                                    M = u.getPropertyValue(a, I, O);
                                } else {
                                    O = u.Hooks.templates[N][1];
                                }
                            } else if (M === d) {
                                M = u.getPropertyValue(a, I);
                            }
                        }
                        var P, Q, R, S;
                        function T(a, b) {
                            var c, d;
                            d = (b || 0).toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                                c = a;
                                return "";
                            });
                            if (!c) {
                                c = u.Values.getUnitType(a);
                            }
                            return [ d, c ];
                        }
                        P = T(I, M);
                        M = P[0];
                        R = P[1];
                        P = T(I, K);
                        K = P[0].replace(/^([+-\/*])=/, function(a, b) {
                            S = b;
                            return "";
                        });
                        Q = P[1];
                        M = parseFloat(M) || 0;
                        K = parseFloat(K) || 0;
                        var U;
                        if (Q === "%") {
                            if (/^(fontSize|lineHeight)$/.test(I)) {
                                K = K / 100;
                                Q = "em";
                            } else if (/^scale/.test(I)) {
                                K = K / 100;
                                Q = "";
                            } else if (/(Red|Green|Blue)$/i.test(I)) {
                                K = K / 100 * 255;
                                Q = "";
                            }
                        }
                        function V() {
                            var b = {
                                parent: a.parentNode,
                                position: u.getPropertyValue(a, "position"),
                                fontSize: u.getPropertyValue(a, "fontSize")
                            }, d = b.position === G.lastPosition && b.parent === G.lastParent, e = b.fontSize === G.lastFontSize && b.parent === G.lastParent;
                            G.lastParent = b.parent;
                            G.lastPosition = b.position;
                            G.lastFontSize = b.fontSize;
                            if (G.remToPxRatio === null) {
                                G.remToPxRatio = parseFloat(u.getPropertyValue(c.body, "fontSize")) || 16;
                            }
                            var f = {
                                overflowX: null,
                                overflowY: null,
                                boxSizing: null,
                                width: null,
                                minWidth: null,
                                maxWidth: null,
                                height: null,
                                minHeight: null,
                                maxHeight: null,
                                paddingLeft: null
                            }, g = {}, i = 10;
                            g.remToPxRatio = G.remToPxRatio;
                            if (h) {
                                var j = /^auto$/i.test(a.currentStyle.width), k = /^auto$/i.test(a.currentStyle.height);
                            }
                            if (!d || !e) {
                                f.overflowX = u.getPropertyValue(a, "overflowX");
                                f.overflowY = u.getPropertyValue(a, "overflowY");
                                f.boxSizing = u.getPropertyValue(a, "boxSizing");
                                f.width = u.getPropertyValue(a, "width", null, true);
                                f.minWidth = u.getPropertyValue(a, "minWidth");
                                f.maxWidth = u.getPropertyValue(a, "maxWidth") || "none";
                                f.height = u.getPropertyValue(a, "height", null, true);
                                f.minHeight = u.getPropertyValue(a, "minHeight");
                                f.maxHeight = u.getPropertyValue(a, "maxHeight") || "none";
                                f.paddingLeft = u.getPropertyValue(a, "paddingLeft");
                            }
                            if (d) {
                                g.percentToPxRatioWidth = G.lastPercentToPxWidth;
                                g.percentToPxRatioHeight = G.lastPercentToPxHeight;
                            } else {
                                u.setPropertyValue(a, "overflowX", "hidden");
                                u.setPropertyValue(a, "overflowY", "hidden");
                                u.setPropertyValue(a, "boxSizing", "content-box");
                                u.setPropertyValue(a, "width", i + "%");
                                u.setPropertyValue(a, "minWidth", i + "%");
                                u.setPropertyValue(a, "maxWidth", i + "%");
                                u.setPropertyValue(a, "height", i + "%");
                                u.setPropertyValue(a, "minHeight", i + "%");
                                u.setPropertyValue(a, "maxHeight", i + "%");
                            }
                            if (e) {
                                g.emToPxRatio = G.lastEmToPx;
                            } else {
                                u.setPropertyValue(a, "paddingLeft", i + "em");
                            }
                            if (!d) {
                                g.percentToPxRatioWidth = G.lastPercentToPxWidth = (parseFloat(u.getPropertyValue(a, "width", null, true)) || 1) / i;
                                g.percentToPxRatioHeight = G.lastPercentToPxHeight = (parseFloat(u.getPropertyValue(a, "height", null, true)) || 1) / i;
                            }
                            if (!e) {
                                g.emToPxRatio = G.lastEmToPx = (parseFloat(u.getPropertyValue(a, "paddingLeft")) || 1) / i;
                            }
                            for (var l in f) {
                                if (f[l] !== null) {
                                    u.setPropertyValue(a, l, f[l]);
                                }
                            }
                            if (h) {
                                if (j) {
                                    u.setPropertyValue(a, "width", "auto");
                                }
                                if (k) {
                                    u.setPropertyValue(a, "height", "auto");
                                }
                            } else {
                                u.setPropertyValue(a, "height", "auto");
                                if (f.height !== u.getPropertyValue(a, "height", null, true)) {
                                    u.setPropertyValue(a, "height", f.height);
                                }
                                u.setPropertyValue(a, "width", "auto");
                                if (f.width !== u.getPropertyValue(a, "width", null, true)) {
                                    u.setPropertyValue(a, "width", f.width);
                                }
                            }
                            if (q.debug >= 1) console.log("Unit ratios: " + JSON.stringify(g), a);
                            return g;
                        }
                        if (/[\/*]/.test(S)) {
                            Q = R;
                        } else if (R !== Q && M !== 0) {
                            if (K === 0) {
                                Q = R;
                            } else {
                                U = U || V();
                                var W = /margin|padding|left|right|width|text|word|letter/i.test(I) || /X$/.test(I) ? "x" : "y";
                                switch (R) {
                                  case "%":
                                    M *= W === "x" ? U.percentToPxRatioWidth : U.percentToPxRatioHeight;
                                    break;

                                  case "em":
                                    M *= U.emToPxRatio;
                                    break;

                                  case "rem":
                                    M *= U.remToPxRatio;
                                    break;

                                  case "px":
                                    break;
                                }
                                switch (Q) {
                                  case "%":
                                    M *= 1 / (W === "x" ? U.percentToPxRatioWidth : U.percentToPxRatioHeight);
                                    break;

                                  case "em":
                                    M *= 1 / U.emToPxRatio;
                                    break;

                                  case "rem":
                                    M *= 1 / U.remToPxRatio;
                                    break;

                                  case "px":
                                    break;
                                }
                            }
                        }
                        switch (S) {
                          case "+":
                            K = M + K;
                            break;

                          case "-":
                            K = M - K;
                            break;

                          case "*":
                            K = M * K;
                            break;

                          case "/":
                            K = M / K;
                            break;
                        }
                        g[I] = {
                            rootPropertyValue: O,
                            startValue: M,
                            currentValue: M,
                            endValue: K,
                            unitType: Q,
                            easing: L
                        };
                        if (q.debug) console.log("tweensContainer (" + I + "): " + JSON.stringify(g[I]), a);
                    }
                    g.element = a;
                }
                if (g.element) {
                    H.push(g);
                    p.data(a, e).tweensContainer = g;
                    p.data(a, e).opts = b;
                    p.data(a, e).isAnimating = true;
                    if (z === y - 1) {
                        if (q.State.calls.length > 1e4) {
                            q.State.calls = j(q.State.calls);
                        }
                        q.State.calls.push([ H, r, b ]);
                        if (q.State.isTicking === false) {
                            q.State.isTicking = true;
                            v();
                        }
                    } else {
                        z++;
                    }
                }
            }
            if (b.queue === false) {
                if (b.delay) {
                    setTimeout(i, b.delay);
                } else {
                    i();
                }
            } else {
                p.queue(a, b.queue, function(a) {
                    q.velocityQueueEntryFlag = true;
                    i(a);
                });
            }
            if ((b.queue === "" || b.queue === "fx") && p.queue(a)[0] !== "inprogress") {
                p.dequeue(a);
            }
        }
        p.each(r.nodeType ? [ r ] : r, function(a, b) {
            if (b.nodeType) {
                I.call(b);
            }
        });
        var J = p.extend({}, q.defaults, x), K;
        J.loop = parseInt(J.loop);
        K = J.loop * 2 - 1;
        if (J.loop) {
            for (var L = 0; L < K; L++) {
                var M = {
                    delay: J.delay
                };
                if (J.complete && L === K - 1) {
                    M.complete = J.complete;
                }
                q.animate(r, "reverse", M);
            }
        }
        return a();
    };
    function v(a) {
        if (a) {
            var b = new Date().getTime();
            for (var c = 0, f = q.State.calls.length; c < f; c++) {
                if (!q.State.calls[c]) {
                    continue;
                }
                var g = q.State.calls[c], h = g[0], j = g[2], l = g[3];
                if (!l) {
                    l = q.State.calls[c][3] = b - 16;
                }
                var m = Math.min((b - l) / j.duration, 1);
                for (var n = 0, o = h.length; n < o; n++) {
                    var r = h[n], s = r.element;
                    if (!p.data(s, e)) {
                        continue;
                    }
                    var t = false;
                    if (j.display && j.display !== "none") {
                        u.setPropertyValue(s, "display", j.display);
                    }
                    for (var x in r) {
                        if (x !== "element") {
                            var y = r[x], z, A = k(y.easing) ? q.Easings[y.easing] : y.easing;
                            if (m === 1) {
                                z = y.endValue;
                            } else {
                                z = y.startValue + (y.endValue - y.startValue) * A(m);
                            }
                            y.currentValue = z;
                            if (u.Hooks.registered[x]) {
                                var B = u.Hooks.getRoot(x), C = p.data(s, e).rootPropertyValueCache[B];
                                if (C) {
                                    y.rootPropertyValue = C;
                                }
                            }
                            var D = u.setPropertyValue(s, x, y.currentValue + (parseFloat(z) === 0 ? "" : y.unitType), y.rootPropertyValue, y.scrollData);
                            if (u.Hooks.registered[x]) {
                                if (u.Normalizations.registered[B]) {
                                    p.data(s, e).rootPropertyValueCache[B] = u.Normalizations.registered[B]("extract", null, D[1]);
                                } else {
                                    p.data(s, e).rootPropertyValueCache[B] = D[1];
                                }
                            }
                            if (D[0] === "transform") {
                                t = true;
                            }
                        }
                    }
                    if (j.mobileHA) {
                        if (p.data(s, e).transformCache.translate3d === d) {
                            p.data(s, e).transformCache.translate3d = "(0px, 0px, 0px)";
                            t = true;
                        }
                    }
                    if (t) {
                        u.flushTransformCache(s);
                    }
                }
                if (j.display && j.display !== "none") {
                    q.State.calls[c][2].display = false;
                }
                if (j.progress) {
                    j.progress.call(g[1], g[1], m, Math.max(0, l + j.duration - b), l);
                }
                if (m === 1) {
                    w(c);
                }
            }
        }
        if (q.State.isTicking) {
            i(v);
        }
    }
    function w(a, b) {
        if (!q.State.calls[a]) {
            return false;
        }
        var c = q.State.calls[a][0], f = q.State.calls[a][1], g = q.State.calls[a][2];
        var h = false;
        for (var i = 0, j = c.length; i < j; i++) {
            var k = c[i].element;
            if (!b && g.display === "none" && !g.loop) {
                u.setPropertyValue(k, "display", g.display);
            }
            if (p.queue(k)[1] === d || !/\.velocityQueueEntryFlag/i.test(p.queue(k)[1])) {
                if (p.data(k, e)) {
                    p.data(k, e).isAnimating = false;
                    p.data(k, e).rootPropertyValueCache = {};
                    var l = [ "transformPerspective", "translateZ", "rotateX", "rotateY" ], m, n = false;
                    for (var o in l) {
                        m = l[o];
                        if (/^\(0[^.]/.test(p.data(k, e).transformCache[m])) {
                            n = true;
                            delete p.data(k, e).transformCache[m];
                        }
                    }
                    if (g.mobileHA) {
                        n = true;
                        delete p.data(k, e).transformCache.translate3d;
                    }
                    if (n) {
                        u.flushTransformCache(k);
                    }
                }
            }
            if (!b && g.complete && !g.loop && i === j - 1) {
                g.complete.call(f, f);
            }
            if (g.queue !== false) {
                p.dequeue(k, g.queue);
            }
        }
        q.State.calls[a] = false;
        for (var r = 0, s = q.State.calls.length; r < s; r++) {
            if (q.State.calls[r] !== false) {
                h = true;
                break;
            }
        }
        if (h === false) {
            q.State.isTicking = false;
            delete q.State.calls;
            q.State.calls = [];
        }
    }
    var x = b.jQuery || b.Zepto;
    if (x) {
        x.fn.velocity = q.animate;
        x.fn.velocity.defaults = q.defaults;
    }
    if (typeof define !== "undefined" && define.amd) {
        define(function() {
            return q;
        });
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = q;
    }
    p.each([ "Down", "Up" ], function(a, b) {
        q.Sequences["slide" + b] = function(a, c) {
            var d = p.extend({}, c), e = {
                height: null,
                marginTop: null,
                marginBottom: null,
                paddingTop: null,
                paddingBottom: null,
                overflow: null,
                overflowX: null,
                overflowY: null
            }, f = d.begin, g = d.complete, h = false;
            if (d.display !== null) {
                if (b === "Down") {
                    d.display = d.display || q.CSS.Values.getDisplayType(a);
                } else {
                    d.display = d.display || "none";
                }
            }
            d.begin = function() {
                function c() {
                    a.style.display = "block";
                    e.height = q.CSS.getPropertyValue(a, "height");
                    a.style.height = "auto";
                    if (q.CSS.getPropertyValue(a, "height") === e.height) {
                        h = true;
                    }
                    q.CSS.setPropertyValue(a, "height", e.height + "px");
                }
                if (b === "Down") {
                    e.overflow = [ q.CSS.getPropertyValue(a, "overflow"), 0 ];
                    e.overflowX = [ q.CSS.getPropertyValue(a, "overflowX"), 0 ];
                    e.overflowY = [ q.CSS.getPropertyValue(a, "overflowY"), 0 ];
                    a.style.overflow = "hidden";
                    a.style.overflowX = "visible";
                    a.style.overflowY = "hidden";
                    c();
                    for (var d in e) {
                        if (/^overflow/.test(d)) {
                            continue;
                        }
                        e[d] = [ q.CSS.getPropertyValue(a, d), 0 ];
                    }
                    a.style.display = "none";
                } else {
                    c();
                    for (var d in e) {
                        e[d] = [ 0, q.CSS.getPropertyValue(a, d) ];
                    }
                    a.style.overflow = "hidden";
                    a.style.overflowX = "visible";
                    a.style.overflowY = "hidden";
                }
                if (f) {
                    f.call(a, a);
                }
            };
            d.complete = function(a) {
                var c = b === "Down" ? 0 : 1;
                if (h === true) {
                    e.height[c] = "auto";
                } else {
                    e.height[c] += "px";
                }
                for (var d in e) {
                    a.style[d] = e[d][c];
                }
                if (g) {
                    g.call(a, a);
                }
            };
            q.animate(a, e, d);
        };
    });
    p.each([ "In", "Out" ], function(a, b) {
        q.Sequences["fade" + b] = function(a, c, d, e) {
            var f = p.extend({}, c), g = {
                opacity: b === "In" ? 1 : 0
            };
            if (d !== e - 1) {
                f.complete = f.begin = null;
            }
            if (f.display !== null) {
                f.display = b === "In" ? q.CSS.Values.getDisplayType(a) : "none";
            }
            q.animate(this, g, f);
        };
    });
})(window.jQuery || window.Zepto || window, window, document);

(function() {
    var a = jQuery || Zepto || window;
    if (!a.Velocity || !a.Velocity.Utilities) {
        console.log("Velocity UI Pack: Velocity must first be loaded. Aborting.");
        return;
    }
    var b = {
        "callout.bounce": {
            defaultDuration: 550,
            calls: [ [ {
                translateY: -30
            }, .25 ], [ {
                translateY: 0
            }, .125 ], [ {
                translateY: -15
            }, .125 ], [ {
                translateY: 0
            }, .25 ] ]
        },
        "callout.shake": {
            defaultDuration: 800,
            calls: [ [ {
                translateX: -10
            }, .125 ], [ {
                translateX: 10
            }, .125, 3 ], [ {
                translateX: 0
            }, .125 ] ]
        },
        "callout.flash": {
            defaultDuration: 1100,
            calls: [ [ {
                opacity: [ 0, "swing", 1 ]
            }, .25 ], [ {
                opacity: [ 1, "swing" ]
            }, .25 ], [ {
                opacity: [ 0, "swing" ]
            }, .25 ], [ {
                opacity: [ 1, "swing" ]
            }, .25 ] ]
        },
        "callout.pulse": {
            defaultDuration: 900,
            calls: [ [ {
                scaleX: 1.1,
                scaleY: 1.1
            }, .5 ], [ {
                scaleX: 1,
                scaleY: 1
            }, .5 ] ]
        },
        "callout.swing": {
            defaultDuration: 950,
            calls: [ [ {
                rotateZ: 15
            }, .2 ], [ {
                rotateZ: -10
            }, .2 ], [ {
                rotateZ: 5
            }, .2 ], [ {
                rotateZ: -5
            }, .2 ], [ {
                rotateZ: 0
            }, .2 ] ]
        },
        "callout.tada": {
            defaultDuration: 1e3,
            calls: [ [ {
                scaleX: .9,
                scaleY: .9,
                rotateZ: -3
            }, .1 ], [ {
                scaleX: 1.1,
                scaleY: 1.1,
                rotateZ: 3
            }, .1 ], [ {
                scaleX: 1.1,
                scaleY: 1.1,
                rotateZ: -3
            }, .1, 3 ], [ {
                scaleX: 1,
                scaleY: 1,
                rotateZ: 0
            }, .2 ] ]
        },
        "transition.flipXIn": {
            defaultDuration: 700,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformPerspective: [ 800, 800 ],
                rotateY: [ 0, -55 ]
            } ] ],
            reset: {
                transformPerspective: 0
            }
        },
        "transition.flipXOut": {
            defaultDuration: 700,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformPerspective: [ 800, 800 ],
                rotateY: 55
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                transformPerspective: 0,
                rotateY: 0
            }
        },
        "transition.flipYIn": {
            defaultDuration: 700,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformPerspective: [ 800, 800 ],
                rotateX: [ 0, -35 ]
            } ] ],
            reset: {
                transformPerspective: 0
            }
        },
        "transition.flipYOut": {
            defaultDuration: 700,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformPerspective: [ 800, 800 ],
                rotateX: 25
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                transformPerspective: 0,
                rotateX: 0
            }
        },
        "transition.flipBounceXIn": {
            defaultDuration: 900,
            calls: [ [ {
                opacity: [ .725, 0 ],
                transformPerspective: [ 400, 400 ],
                rotateY: [ -10, 90 ]
            }, .5 ], [ {
                opacity: .8,
                rotateY: 10
            }, .25 ], [ {
                opacity: 1,
                rotateY: 0
            }, .25 ] ],
            reset: {
                transformPerspective: 0
            }
        },
        "transition.flipBounceXOut": {
            defaultDuration: 800,
            calls: [ [ {
                opacity: [ .9, 1 ],
                transformPerspective: [ 400, 400 ],
                rotateY: -10
            }, .5 ], [ {
                opacity: 0,
                rotateY: 90
            }, .5 ] ],
            reset: {
                opacity: [ 1, 1 ],
                transformPerspective: 0,
                rotateY: 0
            }
        },
        "transition.flipBounceYIn": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ .725, 0 ],
                transformPerspective: [ 400, 400 ],
                rotateX: [ -10, 90 ]
            }, .5 ], [ {
                opacity: .8,
                rotateX: 10
            }, .25 ], [ {
                opacity: 1,
                rotateX: 0
            }, .25 ] ],
            reset: {
                transformPerspective: 0
            }
        },
        "transition.flipBounceYOut": {
            defaultDuration: 800,
            calls: [ [ {
                opacity: [ .9, 1 ],
                transformPerspective: [ 400, 400 ],
                rotateX: -15
            }, .5 ], [ {
                opacity: 0,
                rotateX: 90
            }, .5 ] ],
            reset: {
                opacity: [ 1, 1 ],
                transformPerspective: 0,
                rotateX: 0
            }
        },
        "transition.swoopIn": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformOriginX: [ "100%", "25%" ],
                transformOriginY: [ "100%", "100%" ],
                transformOriginZ: [ 0, 0 ],
                scaleX: [ 1, 0 ],
                scaleY: [ 1, 0 ],
                translateX: [ 0, -700 ],
                translateZ: 0
            } ] ],
            reset: {
                transformOriginX: "50%",
                transformOriginY: "50%"
            }
        },
        "transition.swoopOut": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformOriginX: [ "25%", "100%" ],
                transformOriginY: [ "100%", "100%" ],
                transformOriginZ: [ 0, 0 ],
                scaleX: 0,
                scaleY: 0,
                translateX: -700,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                transformOriginX: "50%",
                transformOriginY: "50%",
                scaleX: 1,
                scaleY: 1,
                translateX: 0
            }
        },
        "transition.whirlIn": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformOriginX: [ "50%", "50%" ],
                transformOriginY: [ "50%", "50%" ],
                transformOriginZ: [ 0, 0 ],
                scaleX: [ 1, 0 ],
                scaleY: [ 1, 0 ],
                rotateY: [ 0, 180 ]
            } ] ]
        },
        "transition.whirlOut": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformOriginX: [ "50%", "50%" ],
                transformOriginY: [ "50%", "50%" ],
                transformOriginZ: [ 0, 0 ],
                scaleX: 0,
                scaleY: 0,
                rotateY: 180
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                scaleX: 1,
                scaleY: 1,
                rotateY: 0
            }
        },
        "transition.shrinkIn": {
            defaultDuration: 700,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformOriginX: [ "50%", "50%" ],
                transformOriginY: [ "50%", "50%" ],
                transformOriginZ: [ 0, 0 ],
                scaleX: [ 1, 1.625 ],
                scaleY: [ 1, 1.625 ],
                translateZ: 0
            } ] ]
        },
        "transition.shrinkOut": {
            defaultDuration: 700,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformOriginX: [ "50%", "50%" ],
                transformOriginY: [ "50%", "50%" ],
                transformOriginZ: [ 0, 0 ],
                scaleX: 1.35,
                scaleY: 1.35,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                scaleX: 1,
                scaleY: 1
            }
        },
        "transition.expandIn": {
            defaultDuration: 700,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformOriginX: [ "50%", "50%" ],
                transformOriginY: [ "50%", "50%" ],
                transformOriginZ: [ 0, 0 ],
                scaleX: [ 1, .625 ],
                scaleY: [ 1, .625 ],
                translateZ: 0
            } ] ]
        },
        "transition.expandOut": {
            defaultDuration: 700,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformOriginX: [ "50%", "50%" ],
                transformOriginY: [ "50%", "50%" ],
                transformOriginZ: [ 0, 0 ],
                scaleX: .5,
                scaleY: .5,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                scaleX: 1,
                scaleY: 1
            }
        },
        "transition.bounceIn": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, 0 ],
                scaleX: [ 1.05, .3 ],
                scaleY: [ 1.05, .3 ]
            }, .4 ], [ {
                scaleX: .9,
                scaleY: .9,
                translateZ: 0
            }, .2 ], [ {
                scaleX: 1,
                scaleY: 1
            }, .5 ] ]
        },
        "transition.bounceOut": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, 1 ],
                scaleX: .95,
                scaleY: .95
            }, .35 ], [ {
                scaleX: 1.1,
                scaleY: 1.1,
                translateZ: 0
            }, .35 ], [ {
                opacity: 0,
                scaleX: .3,
                scaleY: .3
            }, .3 ] ],
            reset: {
                opacity: [ 1, 1 ],
                scaleX: 1,
                scaleY: 1
            }
        },
        "transition.bounceUpIn": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, "easeOutQuad", 0 ],
                translateY: [ -30, 1e3 ]
            }, .6 ], [ {
                translateY: 10
            }, .2 ], [ {
                translateY: 0
            }, .2 ] ]
        },
        "transition.bounceUpOut": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, "easeInQuad", 1 ],
                translateY: 20
            }, .2 ], [ {
                opacity: 0,
                translateY: -1e3
            }, .8 ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateY: 0
            }
        },
        "transition.bounceDownIn": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, "easeOutQuad", 0 ],
                translateY: [ 30, -1e3 ]
            }, .6 ], [ {
                translateY: -10
            }, .2 ], [ {
                translateY: 0
            }, .2 ] ]
        },
        "transition.bounceDownOut": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, "easeInQuad", 1 ],
                translateY: -20
            }, .2 ], [ {
                opacity: 0,
                translateY: 1e3
            }, .8 ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateY: 0
            }
        },
        "transition.bounceLeftIn": {
            defaultDuration: 900,
            calls: [ [ {
                opacity: [ 1, "easeOutQuad", 0 ],
                translateX: [ 30, -1e3 ]
            }, .6 ], [ {
                translateX: -10
            }, .2 ], [ {
                translateX: 0
            }, .2 ] ]
        },
        "transition.bounceLeftOut": {
            defaultDuration: 900,
            calls: [ [ {
                opacity: [ 1, "easeOutQuad", 1 ],
                translateX: 20
            }, .2 ], [ {
                opacity: 0,
                translateX: -1e3
            }, .8 ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateX: 0
            }
        },
        "transition.bounceRightIn": {
            defaultDuration: 950,
            calls: [ [ {
                opacity: [ 1, "easeOutQuad", 0 ],
                translateX: [ -30, 1e3 ]
            }, .6 ], [ {
                translateX: 10
            }, .2 ], [ {
                translateX: 0
            }, .2 ] ]
        },
        "transition.bounceRightOut": {
            defaultDuration: 950,
            calls: [ [ {
                opacity: [ 1, "easeOutQuad", 1 ],
                translateX: -20
            }, .2 ], [ {
                opacity: 0,
                translateX: 1e3
            }, .8 ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateX: 0
            }
        },
        "transition.slideUpIn": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, 0 ],
                translateY: [ 0, 20 ],
                translateZ: 0
            } ] ]
        },
        "transition.slideUpOut": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 0, 1 ],
                translateY: -20,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateY: 0
            }
        },
        "transition.slideDownIn": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, 0 ],
                translateY: [ 0, -20 ],
                translateZ: 0
            } ] ]
        },
        "transition.slideDownOut": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 0, 1 ],
                translateY: 20,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateY: 0
            }
        },
        "transition.slideLeftIn": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, 0 ],
                translateX: [ 0, -20 ],
                translateZ: 0
            } ] ]
        },
        "transition.slideLeftOut": {
            defaultDuration: 1050,
            calls: [ [ {
                opacity: [ 0, 1 ],
                translateX: -20,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateX: 0
            }
        },
        "transition.slideRightIn": {
            defaultDuration: 1e3,
            calls: [ [ {
                opacity: [ 1, 0 ],
                translateX: [ 0, 20 ],
                translateZ: 0
            } ] ]
        },
        "transition.slideRightOut": {
            defaultDuration: 1050,
            calls: [ [ {
                opacity: [ 0, 1 ],
                translateX: 20,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateX: 0
            }
        },
        "transition.slideUpBigIn": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 1, 0 ],
                translateY: [ 0, 75 ],
                translateZ: 0
            } ] ]
        },
        "transition.slideUpBigOut": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 0, 1 ],
                translateY: -75,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateY: 0
            }
        },
        "transition.slideDownBigIn": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 1, 0 ],
                translateY: [ 0, -75 ],
                translateZ: 0
            } ] ]
        },
        "transition.slideDownBigOut": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 0, 1 ],
                translateY: 75,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateY: 0
            }
        },
        "transition.slideLeftBigIn": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 1, 0 ],
                translateX: [ 0, -75 ],
                translateZ: 0
            } ] ]
        },
        "transition.slideLeftBigOut": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 0, 1 ],
                translateX: -75,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateX: 0
            }
        },
        "transition.slideRightBigIn": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 1, 0 ],
                translateX: [ 0, 75 ],
                translateZ: 0
            } ] ]
        },
        "transition.slideRightBigOut": {
            defaultDuration: 850,
            calls: [ [ {
                opacity: [ 0, 1 ],
                translateX: 75,
                translateZ: 0
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                translateX: 0
            }
        },
        "transition.perspectiveUpIn": {
            defaultDuration: 900,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformPerspective: [ 800, 800 ],
                transformOriginX: [ 0, 0 ],
                transformOriginY: [ "100%", "100%" ],
                transformOriginZ: [ 0, 0 ],
                rotateX: [ 0, -180 ]
            } ] ],
            reset: {
                transformPerspective: 0,
                transformOriginX: "50%",
                transformOriginY: "50%"
            }
        },
        "transition.perspectiveUpOut": {
            defaultDuration: 950,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformPerspective: [ 800, 800 ],
                transformOriginX: [ 0, 0 ],
                transformOriginY: [ "100%", "100%" ],
                transformOriginZ: [ 0, 0 ],
                rotateX: -180
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                transformPerspective: 0,
                transformOriginX: "50%",
                transformOriginY: "50%",
                rotateX: 0
            }
        },
        "transition.perspectiveDownIn": {
            defaultDuration: 925,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformPerspective: [ 800, 800 ],
                transformOriginX: [ 0, 0 ],
                transformOriginY: [ 0, 0 ],
                transformOriginZ: [ 0, 0 ],
                rotateX: [ 0, 180 ]
            } ] ],
            reset: {
                transformPerspective: 0,
                transformOriginX: "50%",
                transformOriginY: "50%"
            }
        },
        "transition.perspectiveDownOut": {
            defaultDuration: 950,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformPerspective: [ 800, 800 ],
                transformOriginX: [ 0, 0 ],
                transformOriginY: [ 0, 0 ],
                transformOriginZ: [ 0, 0 ],
                rotateX: 180
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                transformPerspective: 0,
                transformOriginX: "50%",
                transformOriginY: "50%",
                rotateX: 0
            }
        },
        "transition.perspectiveLeftIn": {
            defaultDuration: 950,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformPerspective: [ 2e3, 2e3 ],
                transformOriginX: [ 0, 0 ],
                transformOriginY: [ 0, 0 ],
                transformOriginZ: [ 0, 0 ],
                rotateY: [ 0, -180 ]
            } ] ],
            reset: {
                transformPerspective: 0,
                transformOriginX: "50%",
                transformOriginY: "50%"
            }
        },
        "transition.perspectiveLeftOut": {
            defaultDuration: 950,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformPerspective: [ 2e3, 2e3 ],
                transformOriginX: [ 0, 0 ],
                transformOriginY: [ 0, 0 ],
                transformOriginZ: [ 0, 0 ],
                rotateY: -180
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                transformPerspective: 0,
                transformOriginX: "50%",
                transformOriginY: "50%",
                rotateY: 0
            }
        },
        "transition.perspectiveRightIn": {
            defaultDuration: 950,
            calls: [ [ {
                opacity: [ 1, 0 ],
                transformPerspective: [ 2e3, 2e3 ],
                transformOriginX: [ "100%", "100%" ],
                transformOriginY: [ 0, 0 ],
                transformOriginZ: [ 0, 0 ],
                rotateY: [ 0, 180 ]
            } ] ],
            reset: {
                transformPerspective: 0,
                transformOriginX: "50%",
                transformOriginY: "50%"
            }
        },
        "transition.perspectiveRightOut": {
            defaultDuration: 950,
            calls: [ [ {
                opacity: [ 0, 1 ],
                transformPerspective: [ 2e3, 2e3 ],
                transformOriginX: [ "100%", "100%" ],
                transformOriginY: [ 0, 0 ],
                transformOriginZ: [ 0, 0 ],
                rotateY: 180
            } ] ],
            reset: {
                opacity: [ 1, 1 ],
                transformPerspective: 0,
                transformOriginX: "50%",
                transformOriginY: "50%",
                rotateY: 0
            }
        }
    };
    for (var c in b) {
        (function(c) {
            var d = b[c];
            a.Velocity.Sequences[c] = function(b, e) {
                for (var f = 0; f < d.calls.length; f++) {
                    var g = {};
                    g.duration = (e.duration || d.defaultDuration || 1e3) * (d.calls[f][1] || 1);
                    g.easing = "ease";
                    g.loop = d.calls[f][2];
                    if (f === 0) {
                        g.delay = e.delay;
                        g.begin = e.begin;
                        if (e.display) {
                            g.display = e.display;
                        } else if (/In$/.test(c)) {
                            g.display = a.Velocity.CSS.Values.getDisplayType(b);
                        }
                    }
                    if (f === d.calls.length - 1) {
                        if (d.reset) {
                            g.complete = function() {
                                e.complete && e.complete.call();
                                a.Velocity.animate(b, d.reset, {
                                    duration: 0,
                                    queue: false
                                });
                            };
                        } else {
                            g.complete = e.complete;
                        }
                        if (/Out$/.test(c)) {
                            g.display = "none";
                        }
                    }
                    a.Velocity.animate(b, d.calls[f][0], g);
                }
            };
        })(c);
    }
})();

(function(a) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], a);
    } else {
        a(jQuery);
    }
})(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        var b = 0;
        function c(c, d) {
            var e = this, f, g;
            e.defaults = {
                accessibility: true,
                appendArrows: a(c),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                autoplay: false,
                autoplaySpeed: 3e3,
                centerMode: false,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none">' + (b + 1) + "</button>";
                },
                dots: false,
                dotsClass: "slick-dots",
                draggable: true,
                easing: "linear",
                fade: false,
                focusOnSelect: false,
                infinite: true,
                lazyLoad: "ondemand",
                onBeforeChange: null,
                onAfterChange: null,
                onInit: null,
                onReInit: null,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                responsive: null,
                rtl: false,
                slide: "div",
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                swipe: true,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                vertical: false
            };
            e.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentSlide: 0,
                currentLeft: null,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false
            };
            a.extend(e, e.initials);
            e.activeBreakpoint = null;
            e.animType = null;
            e.animProp = null;
            e.breakpoints = [];
            e.breakpointSettings = [];
            e.cssTransitions = false;
            e.paused = false;
            e.positionProp = null;
            e.$slider = a(c);
            e.$slidesCache = null;
            e.transformType = null;
            e.transitionType = null;
            e.windowWidth = 0;
            e.windowTimer = null;
            e.options = a.extend({}, e.defaults, d);
            e.originalSettings = e.options;
            f = e.options.responsive || null;
            if (f && f.length > -1) {
                for (g in f) {
                    if (f.hasOwnProperty(g)) {
                        e.breakpoints.push(f[g].breakpoint);
                        e.breakpointSettings[f[g].breakpoint] = f[g].settings;
                    }
                }
                e.breakpoints.sort(function(a, b) {
                    return b - a;
                });
            }
            e.autoPlay = a.proxy(e.autoPlay, e);
            e.autoPlayClear = a.proxy(e.autoPlayClear, e);
            e.changeSlide = a.proxy(e.changeSlide, e);
            e.selectHandler = a.proxy(e.selectHandler, e);
            e.setPosition = a.proxy(e.setPosition, e);
            e.swipeHandler = a.proxy(e.swipeHandler, e);
            e.dragHandler = a.proxy(e.dragHandler, e);
            e.keyHandler = a.proxy(e.keyHandler, e);
            e.autoPlayIterator = a.proxy(e.autoPlayIterator, e);
            e.instanceUid = b++;
            e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            e.init();
        }
        return c;
    }();
    b.prototype.addSlide = function(b, c, d) {
        var e = this;
        if (typeof c === "boolean") {
            d = c;
            c = null;
        } else if (c < 0 || c >= e.slideCount) {
            return false;
        }
        e.unload();
        if (typeof c === "number") {
            if (c === 0 && e.$slides.length === 0) {
                a(b).appendTo(e.$slideTrack);
            } else if (d) {
                a(b).insertBefore(e.$slides.eq(c));
            } else {
                a(b).insertAfter(e.$slides.eq(c));
            }
        } else {
            if (d === true) {
                a(b).prependTo(e.$slideTrack);
            } else {
                a(b).appendTo(e.$slideTrack);
            }
        }
        e.$slides = e.$slideTrack.children(this.options.slide);
        e.$slideTrack.children(this.options.slide).detach();
        e.$slideTrack.append(e.$slides);
        e.$slides.each(function(b, c) {
            a(c).attr("index", b);
        });
        e.$slidesCache = e.$slides;
        e.reinit();
    };
    b.prototype.animateSlide = function(b, c) {
        var d = {}, e = this;
        if (e.options.rtl === true && e.options.vertical === false) {
            b = -b;
        }
        if (e.transformsEnabled === false) {
            if (e.options.vertical === false) {
                e.$slideTrack.animate({
                    left: b
                }, e.options.speed, e.options.easing, c);
            } else {
                e.$slideTrack.animate({
                    top: b
                }, e.options.speed, e.options.easing, c);
            }
        } else {
            if (e.cssTransitions === false) {
                a({
                    animStart: e.currentLeft
                }).animate({
                    animStart: b
                }, {
                    duration: e.options.speed,
                    easing: e.options.easing,
                    step: function(a) {
                        if (e.options.vertical === false) {
                            d[e.animType] = "translate(" + a + "px, 0px)";
                            e.$slideTrack.css(d);
                        } else {
                            d[e.animType] = "translate(0px," + a + "px)";
                            e.$slideTrack.css(d);
                        }
                    },
                    complete: function() {
                        if (c) {
                            c.call();
                        }
                    }
                });
            } else {
                e.applyTransition();
                if (e.options.vertical === false) {
                    d[e.animType] = "translate3d(" + b + "px, 0px, 0px)";
                } else {
                    d[e.animType] = "translate3d(0px," + b + "px, 0px)";
                }
                e.$slideTrack.css(d);
                if (c) {
                    setTimeout(function() {
                        e.disableTransition();
                        c.call();
                    }, e.options.speed);
                }
            }
        }
    };
    b.prototype.applyTransition = function(a) {
        var b = this, c = {};
        if (b.options.fade === false) {
            c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase;
        } else {
            c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase;
        }
        if (b.options.fade === false) {
            b.$slideTrack.css(c);
        } else {
            b.$slides.eq(a).css(c);
        }
    };
    b.prototype.autoPlay = function() {
        var a = this;
        if (a.autoPlayTimer) {
            clearInterval(a.autoPlayTimer);
        }
        if (a.slideCount > a.options.slidesToShow && a.paused !== true) {
            a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed);
        }
    };
    b.prototype.autoPlayClear = function() {
        var a = this;
        if (a.autoPlayTimer) {
            clearInterval(a.autoPlayTimer);
        }
    };
    b.prototype.autoPlayIterator = function() {
        var b = this;
        var c = b.options.asNavFor != null ? a(b.options.asNavFor).getSlick() : null;
        if (b.options.infinite === false) {
            if (b.direction === 1) {
                if (b.currentSlide + 1 === b.slideCount - 1) {
                    b.direction = 0;
                }
                b.slideHandler(b.currentSlide + b.options.slidesToScroll);
                if (c != null) c.slideHandler(c.currentSlide + c.options.slidesToScroll);
            } else {
                if (b.currentSlide - 1 === 0) {
                    b.direction = 1;
                }
                b.slideHandler(b.currentSlide - b.options.slidesToScroll);
                if (c != null) c.slideHandler(c.currentSlide - c.options.slidesToScroll);
            }
        } else {
            b.slideHandler(b.currentSlide + b.options.slidesToScroll);
            if (c != null) c.slideHandler(c.currentSlide + c.options.slidesToScroll);
        }
    };
    b.prototype.buildArrows = function() {
        var b = this;
        if (b.options.arrows === true && b.slideCount > b.options.slidesToShow) {
            b.$prevArrow = a(b.options.prevArrow);
            b.$nextArrow = a(b.options.nextArrow);
            if (b.htmlExpr.test(b.options.prevArrow)) {
                b.$prevArrow.appendTo(b.options.appendArrows);
            }
            if (b.htmlExpr.test(b.options.nextArrow)) {
                b.$nextArrow.appendTo(b.options.appendArrows);
            }
            if (b.options.infinite !== true) {
                b.$prevArrow.addClass("slick-disabled");
            }
        }
    };
    b.prototype.buildDots = function() {
        var b = this, c, d;
        if (b.options.dots === true && b.slideCount > b.options.slidesToShow) {
            d = '<ul class="' + b.options.dotsClass + '">';
            for (c = 0; c <= b.getDotCount(); c += 1) {
                d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            }
            d += "</ul>";
            b.$dots = a(d).appendTo(b.$slider);
            b.$dots.find("li").first().addClass("slick-active");
        }
    };
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        b.slideCount = b.$slides.length;
        b.$slides.each(function(b, c) {
            a(c).attr("index", b);
        });
        b.$slidesCache = b.$slides;
        b.$slider.addClass("slick-slider");
        b.$slideTrack = b.slideCount === 0 ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent();
        b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent();
        b.$slideTrack.css("opacity", 0);
        if (b.options.centerMode === true) {
            b.options.slidesToScroll = 1;
            if (b.options.slidesToShow % 2 === 0) {
                b.options.slidesToShow = 3;
            }
        }
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading");
        b.setupInfinite();
        b.buildArrows();
        b.buildDots();
        b.updateDots();
        if (b.options.accessibility === true) {
            b.$list.prop("tabIndex", 0);
        }
        b.setSlideClasses(typeof this.currentSlide === "number" ? this.currentSlide : 0);
        if (b.options.draggable === true) {
            b.$list.addClass("draggable");
        }
    };
    b.prototype.checkResponsive = function() {
        var b = this, c, d;
        if (b.originalSettings.responsive && b.originalSettings.responsive.length > -1 && b.originalSettings.responsive !== null) {
            d = null;
            for (c in b.breakpoints) {
                if (b.breakpoints.hasOwnProperty(c)) {
                    if (a(window).width() < b.breakpoints[c]) {
                        d = b.breakpoints[c];
                    }
                }
            }
            if (d !== null) {
                if (b.activeBreakpoint !== null) {
                    if (d !== b.activeBreakpoint) {
                        b.activeBreakpoint = d;
                        b.options = a.extend({}, b.options, b.breakpointSettings[d]);
                        b.refresh();
                    }
                } else {
                    b.activeBreakpoint = d;
                    b.options = a.extend({}, b.options, b.breakpointSettings[d]);
                    b.refresh();
                }
            } else {
                if (b.activeBreakpoint !== null) {
                    b.activeBreakpoint = null;
                    b.options = a.extend({}, b.options, b.originalSettings);
                    b.refresh();
                }
            }
        }
    };
    b.prototype.changeSlide = function(b) {
        var c = this, d = a(b.target);
        var e = c.options.asNavFor != null ? a(c.options.asNavFor).getSlick() : null;
        d.is("a") && b.preventDefault();
        switch (b.data.message) {
          case "previous":
            if (c.slideCount > c.options.slidesToShow) {
                c.slideHandler(c.currentSlide - c.options.slidesToScroll);
                if (e != null) e.slideHandler(e.currentSlide - e.options.slidesToScroll);
            }
            break;

          case "next":
            if (c.slideCount > c.options.slidesToShow) {
                c.slideHandler(c.currentSlide + c.options.slidesToScroll);
                if (e != null) e.slideHandler(e.currentSlide + e.options.slidesToScroll);
            }
            break;

          case "index":
            var f = a(b.target).parent().index() * c.options.slidesToScroll;
            c.slideHandler(f);
            if (e != null) e.slideHandler(f);
            break;

          default:
            return false;
        }
    };
    b.prototype.destroy = function() {
        var b = this;
        b.autoPlayClear();
        b.touchObject = {};
        a(".slick-cloned", b.$slider).remove();
        if (b.$dots) {
            b.$dots.remove();
        }
        if (b.$prevArrow) {
            b.$prevArrow.remove();
            b.$nextArrow.remove();
        }
        if (b.$slides.parent().hasClass("slick-track")) {
            b.$slides.unwrap().unwrap();
        }
        b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style");
        b.$slider.removeClass("slick-slider");
        b.$slider.removeClass("slick-initialized");
        b.$list.off(".slick");
        a(window).off(".slick-" + b.instanceUid);
        a(document).off(".slick-" + b.instanceUid);
    };
    b.prototype.disableTransition = function(a) {
        var b = this, c = {};
        c[b.transitionType] = "";
        if (b.options.fade === false) {
            b.$slideTrack.css(c);
        } else {
            b.$slides.eq(a).css(c);
        }
    };
    b.prototype.fadeSlide = function(a, b) {
        var c = this;
        if (c.cssTransitions === false) {
            c.$slides.eq(a).css({
                zIndex: 1e3
            });
            c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b);
        } else {
            c.applyTransition(a);
            c.$slides.eq(a).css({
                opacity: 1,
                zIndex: 1e3
            });
            if (b) {
                setTimeout(function() {
                    c.disableTransition(a);
                    b.call();
                }, c.options.speed);
            }
        }
    };
    b.prototype.filterSlides = function(a) {
        var b = this;
        if (a !== null) {
            b.unload();
            b.$slideTrack.children(this.options.slide).detach();
            b.$slidesCache.filter(a).appendTo(b.$slideTrack);
            b.reinit();
        }
    };
    b.prototype.getCurrent = function() {
        var a = this;
        return a.currentSlide;
    };
    b.prototype.getDotCount = function() {
        var a = this, b = 0, c = 0, d = 0, e;
        e = a.options.infinite === true ? a.slideCount + a.options.slidesToShow - a.options.slidesToScroll : a.slideCount;
        while (b < e) {
            d++;
            c += a.options.slidesToScroll;
            b = c + a.options.slidesToShow;
        }
        return d;
    };
    b.prototype.getLeft = function(a) {
        var b = this, c, d, e = 0;
        b.slideOffset = 0;
        d = b.$slides.first().outerHeight();
        if (b.options.infinite === true) {
            if (b.slideCount > b.options.slidesToShow) {
                b.slideOffset = b.slideWidth * b.options.slidesToShow * -1;
                e = d * b.options.slidesToShow * -1;
            }
            if (b.slideCount % b.options.slidesToScroll !== 0) {
                if (a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow) {
                    b.slideOffset = b.slideCount % b.options.slidesToShow * b.slideWidth * -1;
                    e = b.slideCount % b.options.slidesToShow * d * -1;
                }
            }
        } else {
            if (b.slideCount % b.options.slidesToShow !== 0) {
                if (a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow) {
                    b.slideOffset = b.options.slidesToShow * b.slideWidth - b.slideCount % b.options.slidesToShow * b.slideWidth;
                    e = b.slideCount % b.options.slidesToShow * d;
                }
            }
        }
        if (b.options.centerMode === true && b.options.infinite === true) {
            b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth;
        } else if (b.options.centerMode === true) {
            b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2);
        }
        if (b.options.vertical === false) {
            c = a * b.slideWidth * -1 + b.slideOffset;
        } else {
            c = a * d * -1 + e;
        }
        return c;
    };
    b.prototype.init = function() {
        var b = this;
        if (!a(b.$slider).hasClass("slick-initialized")) {
            a(b.$slider).addClass("slick-initialized");
            b.buildOut();
            b.setProps();
            b.startLoad();
            b.loadSlider();
            b.initializeEvents();
            b.checkResponsive();
        }
        if (b.options.onInit !== null) {
            b.options.onInit.call(this, b);
        }
    };
    b.prototype.initArrowEvents = function() {
        var a = this;
        if (a.options.arrows === true && a.slideCount > a.options.slidesToShow) {
            a.$prevArrow.on("click.slick", {
                message: "previous"
            }, a.changeSlide);
            a.$nextArrow.on("click.slick", {
                message: "next"
            }, a.changeSlide);
        }
    };
    b.prototype.initDotEvents = function() {
        var b = this;
        if (b.options.dots === true && b.slideCount > b.options.slidesToShow) {
            a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide);
        }
        if (b.options.dots === true && b.options.pauseOnDotsHover === true && b.options.autoplay === true) {
            a("li", b.$dots).on("mouseenter.slick", b.autoPlayClear).on("mouseleave.slick", b.autoPlay);
        }
    };
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents();
        b.initDotEvents();
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler);
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler);
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler);
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler);
        if (b.options.pauseOnHover === true && b.options.autoplay === true) {
            b.$list.on("mouseenter.slick", b.autoPlayClear);
            b.$list.on("mouseleave.slick", b.autoPlay);
        }
        if (b.options.accessibility === true) {
            b.$list.on("keydown.slick", b.keyHandler);
        }
        if (b.options.focusOnSelect === true) {
            a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler);
        }
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, function() {
            b.checkResponsive();
            b.setPosition();
        });
        a(window).on("resize.slick.slick-" + b.instanceUid, function() {
            if (a(window).width() !== b.windowWidth) {
                clearTimeout(b.windowDelay);
                b.windowDelay = window.setTimeout(function() {
                    b.windowWidth = a(window).width();
                    b.checkResponsive();
                    b.setPosition();
                }, 50);
            }
        });
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition);
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    };
    b.prototype.initUI = function() {
        var a = this;
        if (a.options.arrows === true && a.slideCount > a.options.slidesToShow) {
            a.$prevArrow.show();
            a.$nextArrow.show();
        }
        if (a.options.dots === true && a.slideCount > a.options.slidesToShow) {
            a.$dots.show();
        }
        if (a.options.autoplay === true) {
            a.autoPlay();
        }
    };
    b.prototype.keyHandler = function(a) {
        var b = this;
        if (a.keyCode === 37) {
            b.changeSlide({
                data: {
                    message: "previous"
                }
            });
        } else if (a.keyCode === 39) {
            b.changeSlide({
                data: {
                    message: "next"
                }
            });
        }
    };
    b.prototype.lazyLoad = function() {
        var b = this, c, d, e, f;
        function g(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this), c = a(this).attr("data-lazy") + "?" + new Date().getTime();
                b.load(function() {
                    b.animate({
                        opacity: 1
                    }, 200);
                }).css({
                    opacity: 0
                }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading");
            });
        }
        if (b.options.centerMode === true || b.options.fade === true) {
            e = b.options.slidesToShow + b.currentSlide - 1;
            f = e + b.options.slidesToShow + 2;
        } else {
            e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide;
            f = e + b.options.slidesToShow;
        }
        c = b.$slider.find(".slick-slide").slice(e, f);
        g(c);
        if (b.slideCount == 1) {
            d = b.$slider.find(".slick-slide");
            g(d);
        } else if (b.currentSlide >= b.slideCount - b.options.slidesToShow) {
            d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow);
            g(d);
        } else if (b.currentSlide === 0) {
            d = b.$slider.find(".slick-cloned").slice(b.options.slidesToShow * -1);
            g(d);
        }
    };
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition();
        a.$slideTrack.css({
            opacity: 1
        });
        a.$slider.removeClass("slick-loading");
        a.initUI();
        if (a.options.lazyLoad === "progressive") {
            a.progressiveLazyLoad();
        }
    };
    b.prototype.postSlide = function(a) {
        var b = this;
        if (b.options.onAfterChange !== null) {
            b.options.onAfterChange.call(this, b, a);
        }
        b.animating = false;
        b.setPosition();
        b.swipeLeft = null;
        if (b.options.autoplay === true && b.paused === false) {
            b.autoPlay();
        }
    };
    b.prototype.progressiveLazyLoad = function() {
        var b = this, c, d;
        c = a("img[data-lazy]").length;
        if (c > 0) {
            d = a("img[data-lazy]", b.$slider).first();
            d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
                d.removeAttr("data-lazy");
                b.progressiveLazyLoad();
            });
        }
    };
    b.prototype.refresh = function() {
        var b = this, c = b.currentSlide;
        b.destroy();
        a.extend(b, b.initials);
        b.currentSlide = c;
        b.init();
    };
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide");
        b.slideCount = b.$slides.length;
        if (b.currentSlide >= b.slideCount && b.currentSlide !== 0) {
            b.currentSlide = b.currentSlide - b.options.slidesToScroll;
        }
        b.setProps();
        b.setupInfinite();
        b.buildArrows();
        b.updateArrows();
        b.initArrowEvents();
        b.buildDots();
        b.updateDots();
        b.initDotEvents();
        if (b.options.focusOnSelect === true) {
            a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler);
        }
        b.setSlideClasses(0);
        b.setPosition();
        if (b.options.onReInit !== null) {
            b.options.onReInit.call(this, b);
        }
    };
    b.prototype.removeSlide = function(a, b) {
        var c = this;
        if (typeof a === "boolean") {
            b = a;
            a = b === true ? 0 : c.slideCount - 1;
        } else {
            a = b === true ? --a : a;
        }
        if (c.slideCount < 1 || a < 0 || a > c.slideCount - 1) {
            return false;
        }
        c.unload();
        c.$slideTrack.children(this.options.slide).eq(a).remove();
        c.$slides = c.$slideTrack.children(this.options.slide);
        c.$slideTrack.children(this.options.slide).detach();
        c.$slideTrack.append(c.$slides);
        c.$slidesCache = c.$slides;
        c.reinit();
    };
    b.prototype.setCSS = function(a) {
        var b = this, c = {}, d, e;
        if (b.options.rtl === true) {
            a = -a;
        }
        d = b.positionProp == "left" ? a + "px" : "0px";
        e = b.positionProp == "top" ? a + "px" : "0px";
        c[b.positionProp] = a;
        if (b.transformsEnabled === false) {
            b.$slideTrack.css(c);
        } else {
            c = {};
            if (b.cssTransitions === false) {
                c[b.animType] = "translate(" + d + ", " + e + ")";
                b.$slideTrack.css(c);
            } else {
                c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)";
                b.$slideTrack.css(c);
            }
        }
    };
    b.prototype.setDimensions = function() {
        var a = this;
        if (a.options.vertical === false) {
            if (a.options.centerMode === true) {
                a.$list.css({
                    padding: "0px " + a.options.centerPadding
                });
            }
        } else {
            a.$list.height(a.$slides.first().outerHeight(true) * a.options.slidesToShow);
            if (a.options.centerMode === true) {
                a.$list.css({
                    padding: a.options.centerPadding + " 0px"
                });
            }
        }
        a.listWidth = a.$list.width();
        a.listHeight = a.$list.height();
        if (a.options.vertical === false) {
            a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow);
            a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length));
        } else {
            a.slideWidth = Math.ceil(a.listWidth);
            a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(true) * a.$slideTrack.children(".slick-slide").length));
        }
        var b = a.$slides.first().outerWidth(true) - a.$slides.first().width();
        a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    };
    b.prototype.setFade = function() {
        var b = this, c;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1;
            a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            });
        });
        b.$slides.eq(b.currentSlide).css({
            zIndex: 900,
            opacity: 1
        });
    };
    b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions();
        if (a.options.fade === false) {
            a.setCSS(a.getLeft(a.currentSlide));
        } else {
            a.setFade();
        }
    };
    b.prototype.setProps = function() {
        var a = this;
        a.positionProp = a.options.vertical === true ? "top" : "left";
        if (a.positionProp === "top") {
            a.$slider.addClass("slick-vertical");
        } else {
            a.$slider.removeClass("slick-vertical");
        }
        if (document.body.style.WebkitTransition !== undefined || document.body.style.MozTransition !== undefined || document.body.style.msTransition !== undefined) {
            if (a.options.useCSS === true) {
                a.cssTransitions = true;
            }
        }
        if (document.body.style.MozTransform !== undefined) {
            a.animType = "MozTransform";
            a.transformType = "-moz-transform";
            a.transitionType = "MozTransition";
        }
        if (document.body.style.webkitTransform !== undefined) {
            a.animType = "webkitTransform";
            a.transformType = "-webkit-transform";
            a.transitionType = "webkitTransition";
        }
        if (document.body.style.msTransform !== undefined) {
            a.animType = "msTransform";
            a.transformType = "-ms-transform";
            a.transitionType = "msTransition";
        }
        if (document.body.style.transform !== undefined) {
            a.animType = "transform";
            a.transformType = "transform";
            a.transitionType = "transition";
        }
        a.transformsEnabled = a.animType !== null;
    };
    b.prototype.setSlideClasses = function(a) {
        var b = this, c, d, e, f;
        b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center");
        d = b.$slider.find(".slick-slide");
        if (b.options.centerMode === true) {
            c = Math.floor(b.options.slidesToShow / 2);
            if (b.options.infinite === true) {
                if (a >= c && a <= b.slideCount - 1 - c) {
                    b.$slides.slice(a - c, a + c + 1).addClass("slick-active");
                } else {
                    e = b.options.slidesToShow + a;
                    d.slice(e - c + 1, e + c + 2).addClass("slick-active");
                }
                if (a === 0) {
                    d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center");
                } else if (a === b.slideCount - 1) {
                    d.eq(b.options.slidesToShow).addClass("slick-center");
                }
            }
            b.$slides.eq(a).addClass("slick-center");
        } else {
            if (a >= 0 && a <= b.slideCount - b.options.slidesToShow) {
                b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active");
            } else if (d.length <= b.options.slidesToShow) {
                d.addClass("slick-active");
            } else {
                f = b.slideCount % b.options.slidesToShow;
                e = b.options.infinite === true ? b.options.slidesToShow + a : a;
                if (b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow) {
                    d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active");
                } else {
                    d.slice(e, e + b.options.slidesToShow).addClass("slick-active");
                }
            }
        }
        if (b.options.lazyLoad === "ondemand") {
            b.lazyLoad();
        }
    };
    b.prototype.setupInfinite = function() {
        var b = this, c, d, e;
        if (b.options.fade === true || b.options.vertical === true) {
            b.options.centerMode = false;
        }
        if (b.options.infinite === true && b.options.fade === false) {
            d = null;
            if (b.slideCount > b.options.slidesToShow) {
                if (b.options.centerMode === true) {
                    e = b.options.slidesToShow + 1;
                } else {
                    e = b.options.slidesToShow;
                }
                for (c = b.slideCount; c > b.slideCount - e; c -= 1) {
                    d = c - 1;
                    a(b.$slides[d]).clone(true).attr("id", "").prependTo(b.$slideTrack).addClass("slick-cloned");
                }
                for (c = 0; c < e; c += 1) {
                    d = c;
                    a(b.$slides[d]).clone(true).attr("id", "").appendTo(b.$slideTrack).addClass("slick-cloned");
                }
                b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "");
                });
            }
        }
    };
    b.prototype.selectHandler = function(b) {
        var c = this;
        var d = c.options.asNavFor != null ? a(c.options.asNavFor).getSlick() : null;
        var e = parseInt(a(b.target).parent().attr("index"));
        if (!e) e = 0;
        if (c.slideCount <= c.options.slidesToShow) {
            return;
        }
        c.slideHandler(e);
        if (d != null) {
            if (d.slideCount <= d.options.slidesToShow) {
                return;
            }
            d.slideHandler(e);
        }
    };
    b.prototype.slideHandler = function(a) {
        var b, c, d, e, f = null, g = this;
        if (g.animating === true) {
            return false;
        }
        b = a;
        f = g.getLeft(b);
        d = g.getLeft(g.currentSlide);
        e = g.slideCount % g.options.slidesToScroll !== 0 ? g.options.slidesToScroll : 0;
        g.currentLeft = g.swipeLeft === null ? d : g.swipeLeft;
        if (g.options.infinite === false && g.options.centerMode === false && (a < 0 || a > g.slideCount - g.options.slidesToShow + e)) {
            if (g.options.fade === false) {
                b = g.currentSlide;
                g.animateSlide(d, function() {
                    g.postSlide(b);
                });
            }
            return false;
        } else if (g.options.infinite === false && g.options.centerMode === true && (a < 0 || a > g.slideCount - g.options.slidesToScroll)) {
            if (g.options.fade === false) {
                b = g.currentSlide;
                g.animateSlide(d, function() {
                    g.postSlide(b);
                });
            }
            return false;
        }
        if (g.options.autoplay === true) {
            clearInterval(g.autoPlayTimer);
        }
        if (b < 0) {
            if (g.slideCount % g.options.slidesToScroll !== 0) {
                c = g.slideCount - g.slideCount % g.options.slidesToScroll;
            } else {
                c = g.slideCount - g.options.slidesToScroll;
            }
        } else if (b > g.slideCount - 1) {
            c = 0;
        } else {
            c = b;
        }
        g.animating = true;
        if (g.options.onBeforeChange !== null && a !== g.currentSlide) {
            g.options.onBeforeChange.call(this, g, g.currentSlide, c);
        }
        g.currentSlide = c;
        g.setSlideClasses(g.currentSlide);
        g.updateDots();
        g.updateArrows();
        if (g.options.fade === true) {
            g.fadeSlide(c, function() {
                g.postSlide(c);
            });
            return false;
        }
        g.animateSlide(f, function() {
            g.postSlide(c);
        });
    };
    b.prototype.startLoad = function() {
        var a = this;
        if (a.options.arrows === true && a.slideCount > a.options.slidesToShow) {
            a.$prevArrow.hide();
            a.$nextArrow.hide();
        }
        if (a.options.dots === true && a.slideCount > a.options.slidesToShow) {
            a.$dots.hide();
        }
        a.$slider.addClass("slick-loading");
    };
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        a = e.touchObject.startX - e.touchObject.curX;
        b = e.touchObject.startY - e.touchObject.curY;
        c = Math.atan2(b, a);
        d = Math.round(c * 180 / Math.PI);
        if (d < 0) {
            d = 360 - Math.abs(d);
        }
        if (d <= 45 && d >= 0) {
            return "left";
        }
        if (d <= 360 && d >= 315) {
            return "left";
        }
        if (d >= 135 && d <= 225) {
            return "right";
        }
        return "vertical";
    };
    b.prototype.swipeEnd = function(b) {
        var c = this;
        var d = c.options.asNavFor != null ? a(c.options.asNavFor).getSlick() : null;
        c.dragging = false;
        if (c.touchObject.curX === undefined) {
            return false;
        }
        if (c.touchObject.swipeLength >= c.touchObject.minSwipe) {
            a(b.target).on("click.slick", function(b) {
                b.stopImmediatePropagation();
                b.stopPropagation();
                b.preventDefault();
                a(b.target).off("click.slick");
            });
            switch (c.swipeDirection()) {
              case "left":
                c.slideHandler(c.currentSlide + c.options.slidesToScroll);
                if (d != null) d.slideHandler(d.currentSlide + d.options.slidesToScroll);
                c.touchObject = {};
                break;

              case "right":
                c.slideHandler(c.currentSlide - c.options.slidesToScroll);
                if (d != null) d.slideHandler(d.currentSlide - d.options.slidesToScroll);
                c.touchObject = {};
                break;
            }
        } else {
            if (c.touchObject.startX !== c.touchObject.curX) {
                c.slideHandler(c.currentSlide);
                if (d != null) d.slideHandler(d.currentSlide);
                c.touchObject = {};
            }
        }
    };
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if (b.options.swipe === false || "ontouchend" in document && b.options.swipe === false) {
            return;
        } else if (b.options.draggable === false || b.options.draggable === false && !a.originalEvent.touches) {
            return;
        }
        b.touchObject.fingerCount = a.originalEvent && a.originalEvent.touches !== undefined ? a.originalEvent.touches.length : 1;
        b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold;
        switch (a.data.action) {
          case "start":
            b.swipeStart(a);
            break;

          case "move":
            b.swipeMove(a);
            break;

          case "end":
            b.swipeEnd(a);
            break;
        }
    };
    b.prototype.swipeMove = function(a) {
        var b = this, c, d, e, f;
        f = a.originalEvent !== undefined ? a.originalEvent.touches : null;
        c = b.getLeft(b.currentSlide);
        if (!b.dragging || f && f.length !== 1) {
            return false;
        }
        b.touchObject.curX = f !== undefined ? f[0].pageX : a.clientX;
        b.touchObject.curY = f !== undefined ? f[0].pageY : a.clientY;
        b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2)));
        d = b.swipeDirection();
        if (d === "vertical") {
            return;
        }
        if (a.originalEvent !== undefined && b.touchObject.swipeLength > 4) {
            a.preventDefault();
        }
        e = b.touchObject.curX > b.touchObject.startX ? 1 : -1;
        if (b.options.vertical === false) {
            b.swipeLeft = c + b.touchObject.swipeLength * e;
        } else {
            b.swipeLeft = c + b.touchObject.swipeLength * (b.$list.height() / b.listWidth) * e;
        }
        if (b.options.fade === true || b.options.touchMove === false) {
            return false;
        }
        if (b.animating === true) {
            b.swipeLeft = null;
            return false;
        }
        b.setCSS(b.swipeLeft);
    };
    b.prototype.swipeStart = function(a) {
        var b = this, c;
        if (b.touchObject.fingerCount !== 1 || b.slideCount <= b.options.slidesToShow) {
            b.touchObject = {};
            return false;
        }
        if (a.originalEvent !== undefined && a.originalEvent.touches !== undefined) {
            c = a.originalEvent.touches[0];
        }
        b.touchObject.startX = b.touchObject.curX = c !== undefined ? c.pageX : a.clientX;
        b.touchObject.startY = b.touchObject.curY = c !== undefined ? c.pageY : a.clientY;
        b.dragging = true;
    };
    b.prototype.unfilterSlides = function() {
        var a = this;
        if (a.$slidesCache !== null) {
            a.unload();
            a.$slideTrack.children(this.options.slide).detach();
            a.$slidesCache.appendTo(a.$slideTrack);
            a.reinit();
        }
    };
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove();
        if (b.$dots) {
            b.$dots.remove();
        }
        if (b.$prevArrow) {
            b.$prevArrow.remove();
            b.$nextArrow.remove();
        }
        b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style");
    };
    b.prototype.updateArrows = function() {
        var a = this;
        if (a.options.arrows === true && a.options.infinite !== true && a.slideCount > a.options.slidesToShow) {
            a.$prevArrow.removeClass("slick-disabled");
            a.$nextArrow.removeClass("slick-disabled");
            if (a.currentSlide === 0) {
                a.$prevArrow.addClass("slick-disabled");
                a.$nextArrow.removeClass("slick-disabled");
            } else if (a.currentSlide >= a.slideCount - a.options.slidesToShow) {
                a.$nextArrow.addClass("slick-disabled");
                a.$prevArrow.removeClass("slick-disabled");
            }
        }
    };
    b.prototype.updateDots = function() {
        var a = this;
        if (a.$dots !== null) {
            a.$dots.find("li").removeClass("slick-active");
            a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active");
        }
    };
    a.fn.slick = function(a) {
        var c = this;
        return c.each(function(c, d) {
            d.slick = new b(d, a);
        });
    };
    a.fn.slickAdd = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.addSlide(a, b, c);
        });
    };
    a.fn.slickCurrentSlide = function() {
        var a = this;
        return a.get(0).slick.getCurrent();
    };
    a.fn.slickFilter = function(a) {
        var b = this;
        return b.each(function(b, c) {
            c.slick.filterSlides(a);
        });
    };
    a.fn.slickGoTo = function(b) {
        var c = this;
        return c.each(function(c, d) {
            var e = d.slick.options.asNavFor != null ? a(d.slick.options.asNavFor) : null;
            if (e != null) e.slickGoTo(b);
            d.slick.slideHandler(b);
        });
    };
    a.fn.slickNext = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "next"
                }
            });
        });
    };
    a.fn.slickPause = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.autoPlayClear();
            b.slick.paused = true;
        });
    };
    a.fn.slickPlay = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.paused = false;
            b.slick.autoPlay();
        });
    };
    a.fn.slickPrev = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "previous"
                }
            });
        });
    };
    a.fn.slickRemove = function(a, b) {
        var c = this;
        return c.each(function(c, d) {
            d.slick.removeSlide(a, b);
        });
    };
    a.fn.slickGetOption = function(a) {
        var b = this;
        return b.get(0).slick.options[a];
    };
    a.fn.slickSetOption = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.options[a] = b;
            if (c === true) {
                e.slick.unload();
                e.slick.reinit();
            }
        });
    };
    a.fn.slickUnfilter = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.unfilterSlides();
        });
    };
    a.fn.unslick = function() {
        var a = this;
        return a.each(function(a, b) {
            if (b.slick) {
                b.slick.destroy();
            }
        });
    };
    a.fn.getSlick = function() {
        var a = null;
        var b = this;
        b.each(function(b, c) {
            a = c.slick;
        });
        return a;
    };
});

(function(a, b, c) {
    a.fn.jScrollPane = function(d) {
        function e(d, e) {
            var f, g = this, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = true, P = true, Q = false, R = false, S = d.clone(false, false).empty(), T = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            L = d.css("paddingTop") + " " + d.css("paddingRight") + " " + d.css("paddingBottom") + " " + d.css("paddingLeft");
            M = (parseInt(d.css("paddingLeft"), 10) || 0) + (parseInt(d.css("paddingRight"), 10) || 0);
            function U(b) {
                var e, g, r, s, u, v, x = false, y = false;
                f = b;
                if (h === c) {
                    u = d.scrollTop();
                    v = d.scrollLeft();
                    d.css({
                        overflow: "hidden",
                        padding: 0
                    });
                    i = d.innerWidth() + M;
                    j = d.innerHeight();
                    d.width(i);
                    h = a('<div class="jspPane" />').css("padding", L).append(d.children());
                    k = a('<div class="jspContainer" />').css({
                        width: i + "px",
                        height: j + "px"
                    }).append(h).appendTo(d);
                } else {
                    d.css("width", "");
                    x = f.stickToBottom && pb();
                    y = f.stickToRight && qb();
                    s = d.innerWidth() + M != i || d.outerHeight() != j;
                    if (s) {
                        i = d.innerWidth() + M;
                        j = d.innerHeight();
                        k.css({
                            width: i + "px",
                            height: j + "px"
                        });
                    }
                    if (!s && N == l && h.outerHeight() == m) {
                        d.width(i);
                        return;
                    }
                    N = l;
                    h.css("width", "");
                    d.width(i);
                    k.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end();
                }
                h.css("overflow", "auto");
                if (b.contentWidth) {
                    l = b.contentWidth;
                } else {
                    l = h[0].scrollWidth;
                }
                m = h[0].scrollHeight;
                h.css("overflow", "");
                n = l / i;
                o = m / j;
                p = o > 1;
                q = n > 1;
                if (!(q || p)) {
                    d.removeClass("jspScrollable");
                    h.css({
                        top: 0,
                        width: k.width() - M
                    });
                    sb();
                    vb();
                    xb();
                    cb();
                } else {
                    d.addClass("jspScrollable");
                    e = f.maintainPosition && (t || w);
                    if (e) {
                        g = nb();
                        r = ob();
                    }
                    V();
                    X();
                    Z();
                    if (e) {
                        lb(y ? l - i : g, false);
                        kb(x ? m - j : r, false);
                    }
                    ub();
                    rb();
                    Ab();
                    if (f.enableKeyboardNavigation) {
                        wb();
                    }
                    if (f.clickOnTrack) {
                        bb();
                    }
                    yb();
                    if (f.hijackInternalLinks) {
                        zb();
                    }
                }
                if (f.autoReinitialise && !K) {
                    K = setInterval(function() {
                        U(f);
                    }, f.autoReinitialiseDelay);
                } else if (!f.autoReinitialise && K) {
                    clearInterval(K);
                }
                u && d.scrollTop(0) && kb(u, false);
                v && d.scrollLeft(0) && lb(v, false);
                d.trigger("jsp-initialised", [ q || p ]);
            }
            function V() {
                if (p) {
                    k.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />')));
                    x = k.find(">.jspVerticalBar");
                    y = x.find(">.jspTrack");
                    r = y.find(">.jspDrag");
                    if (f.showArrows) {
                        C = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", _(0, -1)).bind("click.jsp", tb);
                        D = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", _(0, 1)).bind("click.jsp", tb);
                        if (f.arrowScrollOnHover) {
                            C.bind("mouseover.jsp", _(0, -1, C));
                            D.bind("mouseover.jsp", _(0, 1, D));
                        }
                        $(y, f.verticalArrowPositions, C, D);
                    }
                    A = j;
                    k.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        A -= a(this).outerHeight();
                    });
                    r.hover(function() {
                        r.addClass("jspHover");
                    }, function() {
                        r.removeClass("jspHover");
                    }).bind("mousedown.jsp", function(b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", tb);
                        r.addClass("jspActive");
                        var c = b.pageY - r.position().top;
                        a("html").bind("mousemove.jsp", function(a) {
                            eb(a.pageY - c, false);
                        }).bind("mouseup.jsp mouseleave.jsp", db);
                        return false;
                    });
                    W();
                }
            }
            function W() {
                y.height(A + "px");
                t = 0;
                z = f.verticalGutter + y.outerWidth();
                h.width(i - z - M);
                try {
                    if (x.position().left === 0) {
                        h.css("margin-left", z + "px");
                    }
                } catch (a) {}
            }
            function X() {
                if (q) {
                    k.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />')));
                    E = k.find(">.jspHorizontalBar");
                    F = E.find(">.jspTrack");
                    u = F.find(">.jspDrag");
                    if (f.showArrows) {
                        I = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", _(-1, 0)).bind("click.jsp", tb);
                        J = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", _(1, 0)).bind("click.jsp", tb);
                        if (f.arrowScrollOnHover) {
                            I.bind("mouseover.jsp", _(-1, 0, I));
                            J.bind("mouseover.jsp", _(1, 0, J));
                        }
                        $(F, f.horizontalArrowPositions, I, J);
                    }
                    u.hover(function() {
                        u.addClass("jspHover");
                    }, function() {
                        u.removeClass("jspHover");
                    }).bind("mousedown.jsp", function(b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", tb);
                        u.addClass("jspActive");
                        var c = b.pageX - u.position().left;
                        a("html").bind("mousemove.jsp", function(a) {
                            gb(a.pageX - c, false);
                        }).bind("mouseup.jsp mouseleave.jsp", db);
                        return false;
                    });
                    G = k.innerWidth();
                    Y();
                }
            }
            function Y() {
                k.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    G -= a(this).outerWidth();
                });
                F.width(G + "px");
                w = 0;
            }
            function Z() {
                if (q && p) {
                    var b = F.outerHeight(), c = y.outerWidth();
                    A -= b;
                    a(E).find(">.jspCap:visible,>.jspArrow").each(function() {
                        G += a(this).outerWidth();
                    });
                    G -= c;
                    j -= c;
                    i -= b;
                    F.parent().append(a('<div class="jspCorner" />').css("width", b + "px"));
                    W();
                    Y();
                }
                if (q) {
                    h.width(k.outerWidth() - M + "px");
                }
                m = h.outerHeight();
                o = m / j;
                if (q) {
                    H = Math.ceil(1 / n * G);
                    if (H > f.horizontalDragMaxWidth) {
                        H = f.horizontalDragMaxWidth;
                    } else if (H < f.horizontalDragMinWidth) {
                        H = f.horizontalDragMinWidth;
                    }
                    u.width(H + "px");
                    v = G - H;
                    hb(w);
                }
                if (p) {
                    B = Math.ceil(1 / o * A);
                    if (B > f.verticalDragMaxHeight) {
                        B = f.verticalDragMaxHeight;
                    } else if (B < f.verticalDragMinHeight) {
                        B = f.verticalDragMinHeight;
                    }
                    r.height(B + "px");
                    s = A - B;
                    fb(t);
                }
            }
            function $(a, b, c, d) {
                var e = "before", f = "after", g;
                if (b == "os") {
                    b = /Mac/.test(navigator.platform) ? "after" : "split";
                }
                if (b == e) {
                    f = b;
                } else if (b == f) {
                    e = b;
                    g = c;
                    c = d;
                    d = g;
                }
                a[e](c)[f](d);
            }
            function _(a, b, c) {
                return function() {
                    ab(a, b, this, c);
                    this.blur();
                    return false;
                };
            }
            function ab(b, c, d, e) {
                d = a(d).addClass("jspActive");
                var h, i, j = true, k = function() {
                    if (b !== 0) {
                        g.scrollByX(b * f.arrowButtonSpeed);
                    }
                    if (c !== 0) {
                        g.scrollByY(c * f.arrowButtonSpeed);
                    }
                    i = setTimeout(k, j ? f.initialDelay : f.arrowRepeatFreq);
                    j = false;
                };
                k();
                h = e ? "mouseout.jsp" : "mouseup.jsp";
                e = e || a("html");
                e.bind(h, function() {
                    d.removeClass("jspActive");
                    i && clearTimeout(i);
                    i = null;
                    e.unbind(h);
                });
            }
            function bb() {
                cb();
                if (p) {
                    y.bind("mousedown.jsp", function(b) {
                        if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                            var d = a(this), e = d.offset(), h = b.pageY - e.top - t, i, k = true, l = function() {
                                var a = d.offset(), c = b.pageY - a.top - B / 2, e = j * f.scrollPagePercent, o = s * e / (m - j);
                                if (h < 0) {
                                    if (t - o > c) {
                                        g.scrollByY(-e);
                                    } else {
                                        eb(c);
                                    }
                                } else if (h > 0) {
                                    if (t + o < c) {
                                        g.scrollByY(e);
                                    } else {
                                        eb(c);
                                    }
                                } else {
                                    n();
                                    return;
                                }
                                i = setTimeout(l, k ? f.initialDelay : f.trackClickRepeatFreq);
                                k = false;
                            }, n = function() {
                                i && clearTimeout(i);
                                i = null;
                                a(document).unbind("mouseup.jsp", n);
                            };
                            l();
                            a(document).bind("mouseup.jsp", n);
                            return false;
                        }
                    });
                }
                if (q) {
                    F.bind("mousedown.jsp", function(b) {
                        if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                            var d = a(this), e = d.offset(), h = b.pageX - e.left - w, j, k = true, m = function() {
                                var a = d.offset(), c = b.pageX - a.left - H / 2, e = i * f.scrollPagePercent, o = v * e / (l - i);
                                if (h < 0) {
                                    if (w - o > c) {
                                        g.scrollByX(-e);
                                    } else {
                                        gb(c);
                                    }
                                } else if (h > 0) {
                                    if (w + o < c) {
                                        g.scrollByX(e);
                                    } else {
                                        gb(c);
                                    }
                                } else {
                                    n();
                                    return;
                                }
                                j = setTimeout(m, k ? f.initialDelay : f.trackClickRepeatFreq);
                                k = false;
                            }, n = function() {
                                j && clearTimeout(j);
                                j = null;
                                a(document).unbind("mouseup.jsp", n);
                            };
                            m();
                            a(document).bind("mouseup.jsp", n);
                            return false;
                        }
                    });
                }
            }
            function cb() {
                if (F) {
                    F.unbind("mousedown.jsp");
                }
                if (y) {
                    y.unbind("mousedown.jsp");
                }
            }
            function db() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                if (r) {
                    r.removeClass("jspActive");
                }
                if (u) {
                    u.removeClass("jspActive");
                }
            }
            function eb(a, b) {
                if (!p) {
                    return;
                }
                if (a < 0) {
                    a = 0;
                } else if (a > s) {
                    a = s;
                }
                if (b === c) {
                    b = f.animateScroll;
                }
                if (b) {
                    g.animate(r, "top", a, fb);
                } else {
                    r.css("top", a);
                    fb(a);
                }
            }
            function fb(a) {
                if (a === c) {
                    a = r.position().top;
                }
                k.scrollTop(0);
                t = a;
                var b = t === 0, e = t == s, f = a / s, g = -f * (m - j);
                if (O != b || Q != e) {
                    O = b;
                    Q = e;
                    d.trigger("jsp-arrow-change", [ O, Q, P, R ]);
                }
                ib(b, e);
                h.css("top", g);
                d.trigger("jsp-scroll-y", [ -g, b, e ]).trigger("scroll");
            }
            function gb(a, b) {
                if (!q) {
                    return;
                }
                if (a < 0) {
                    a = 0;
                } else if (a > v) {
                    a = v;
                }
                if (b === c) {
                    b = f.animateScroll;
                }
                if (b) {
                    g.animate(u, "left", a, hb);
                } else {
                    u.css("left", a);
                    hb(a);
                }
            }
            function hb(a) {
                if (a === c) {
                    a = u.position().left;
                }
                k.scrollTop(0);
                w = a;
                var b = w === 0, e = w == v, f = a / v, g = -f * (l - i);
                if (P != b || R != e) {
                    P = b;
                    R = e;
                    d.trigger("jsp-arrow-change", [ O, Q, P, R ]);
                }
                jb(b, e);
                h.css("left", g);
                d.trigger("jsp-scroll-x", [ -g, b, e ]).trigger("scroll");
            }
            function ib(a, b) {
                if (f.showArrows) {
                    C[a ? "addClass" : "removeClass"]("jspDisabled");
                    D[b ? "addClass" : "removeClass"]("jspDisabled");
                }
            }
            function jb(a, b) {
                if (f.showArrows) {
                    I[a ? "addClass" : "removeClass"]("jspDisabled");
                    J[b ? "addClass" : "removeClass"]("jspDisabled");
                }
            }
            function kb(a, b) {
                var c = a / (m - j);
                eb(c * s, b);
            }
            function lb(a, b) {
                var c = a / (l - i);
                gb(c * v, b);
            }
            function mb(b, c, d) {
                var e, g, h, l = 0, m = 0, n, o, p, q, r, s;
                try {
                    e = a(b);
                } catch (t) {
                    return;
                }
                g = e.outerHeight();
                h = e.outerWidth();
                k.scrollTop(0);
                k.scrollLeft(0);
                while (!e.is(".jspPane")) {
                    l += e.position().top;
                    m += e.position().left;
                    e = e.offsetParent();
                    if (/^body|html$/i.test(e[0].nodeName)) {
                        return;
                    }
                }
                n = ob();
                p = n + j;
                if (l < n || c) {
                    r = l - f.verticalGutter;
                } else if (l + g > p) {
                    r = l - j + g + f.verticalGutter;
                }
                if (r) {
                    kb(r, d);
                }
                o = nb();
                q = o + i;
                if (m < o || c) {
                    s = m - f.horizontalGutter;
                } else if (m + h > q) {
                    s = m - i + h + f.horizontalGutter;
                }
                if (s) {
                    lb(s, d);
                }
            }
            function nb() {
                return -h.position().left;
            }
            function ob() {
                return -h.position().top;
            }
            function pb() {
                var a = m - j;
                return a > 20 && a - ob() < 10;
            }
            function qb() {
                var a = l - i;
                return a > 20 && a - nb() < 10;
            }
            function rb() {
                k.unbind(T).bind(T, function(a, b, c, d) {
                    var e = w, h = t;
                    g.scrollBy(c * f.mouseWheelSpeed, -d * f.mouseWheelSpeed, false);
                    return e == w && h == t;
                });
            }
            function sb() {
                k.unbind(T);
            }
            function tb() {
                return false;
            }
            function ub() {
                h.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(a) {
                    mb(a.target, false);
                });
            }
            function vb() {
                h.find(":input,a").unbind("focus.jsp");
            }
            function wb() {
                var b, c, e = [];
                q && e.push(E[0]);
                p && e.push(x[0]);
                h.focus(function() {
                    d.focus();
                });
                d.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(d) {
                    if (d.target !== this && !(e.length && a(d.target).closest(e).length)) {
                        return;
                    }
                    var f = w, g = t;
                    switch (d.keyCode) {
                      case 40:
                      case 38:
                      case 34:
                      case 32:
                      case 33:
                      case 39:
                      case 37:
                        b = d.keyCode;
                        i();
                        break;

                      case 35:
                        kb(m - j);
                        b = null;
                        break;

                      case 36:
                        kb(0);
                        b = null;
                        break;
                    }
                    c = d.keyCode == b && f != w || g != t;
                    return !c;
                }).bind("keypress.jsp", function(a) {
                    if (a.keyCode == b) {
                        i();
                    }
                    return !c;
                });
                if (f.hideFocus) {
                    d.css("outline", "none");
                    if ("hideFocus" in k[0]) {
                        d.attr("hideFocus", true);
                    }
                } else {
                    d.css("outline", "");
                    if ("hideFocus" in k[0]) {
                        d.attr("hideFocus", false);
                    }
                }
                function i() {
                    var a = w, d = t;
                    switch (b) {
                      case 40:
                        g.scrollByY(f.keyboardSpeed, false);
                        break;

                      case 38:
                        g.scrollByY(-f.keyboardSpeed, false);
                        break;

                      case 34:
                      case 32:
                        g.scrollByY(j * f.scrollPagePercent, false);
                        break;

                      case 33:
                        g.scrollByY(-j * f.scrollPagePercent, false);
                        break;

                      case 39:
                        g.scrollByX(f.keyboardSpeed, false);
                        break;

                      case 37:
                        g.scrollByX(-f.keyboardSpeed, false);
                        break;
                    }
                    c = a != w || d != t;
                    return c;
                }
            }
            function xb() {
                d.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp");
            }
            function yb() {
                if (location.hash && location.hash.length > 1) {
                    var b, c, d = escape(location.hash.substr(1));
                    try {
                        b = a("#" + d + ', a[name="' + d + '"]');
                    } catch (e) {
                        return;
                    }
                    if (b.length && h.find(d)) {
                        if (k.scrollTop() === 0) {
                            c = setInterval(function() {
                                if (k.scrollTop() > 0) {
                                    mb(b, true);
                                    a(document).scrollTop(k.position().top);
                                    clearInterval(c);
                                }
                            }, 50);
                        } else {
                            mb(b, true);
                            a(document).scrollTop(k.position().top);
                        }
                    }
                }
            }
            function zb() {
                if (a(document.body).data("jspHijack")) {
                    return;
                }
                a(document.body).data("jspHijack", true);
                a(document.body).delegate("a[href*=#]", "click", function(c) {
                    var d = this.href.substr(0, this.href.indexOf("#")), e = location.href, f, g, h, i, j, k;
                    if (location.href.indexOf("#") !== -1) {
                        e = location.href.substr(0, location.href.indexOf("#"));
                    }
                    if (d !== e) {
                        return;
                    }
                    f = escape(this.href.substr(this.href.indexOf("#") + 1));
                    g;
                    try {
                        g = a("#" + f + ', a[name="' + f + '"]');
                    } catch (l) {
                        return;
                    }
                    if (!g.length) {
                        return;
                    }
                    h = g.closest(".jspScrollable");
                    i = h.data("jsp");
                    i.scrollToElement(g, true);
                    if (h[0].scrollIntoView) {
                        j = a(b).scrollTop();
                        k = g.offset().top;
                        if (k < j || k > j + a(b).height()) {
                            h[0].scrollIntoView();
                        }
                    }
                    c.preventDefault();
                });
            }
            function Ab() {
                var a, b, c, d, e, f = false;
                k.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(g) {
                    var h = g.originalEvent.touches[0];
                    a = nb();
                    b = ob();
                    c = h.pageX;
                    d = h.pageY;
                    e = false;
                    f = true;
                }).bind("touchmove.jsp", function(h) {
                    if (!f) {
                        return;
                    }
                    var i = h.originalEvent.touches[0], j = w, k = t;
                    g.scrollTo(a + c - i.pageX, b + d - i.pageY);
                    e = e || Math.abs(c - i.pageX) > 5 || Math.abs(d - i.pageY) > 5;
                    return j == w && k == t;
                }).bind("touchend.jsp", function(a) {
                    f = false;
                }).bind("click.jsp-touchclick", function(a) {
                    if (e) {
                        e = false;
                        return false;
                    }
                });
            }
            function Bb() {
                var a = ob(), b = nb();
                d.removeClass("jspScrollable").unbind(".jsp");
                d.replaceWith(S.append(h.children()));
                S.scrollTop(a);
                S.scrollLeft(b);
                if (K) {
                    clearInterval(K);
                }
            }
            a.extend(g, {
                reinitialise: function(b) {
                    b = a.extend({}, f, b);
                    U(b);
                },
                scrollToElement: function(a, b, c) {
                    mb(a, b, c);
                },
                scrollTo: function(a, b, c) {
                    lb(a, c);
                    kb(b, c);
                },
                scrollToX: function(a, b) {
                    lb(a, b);
                },
                scrollToY: function(a, b) {
                    kb(a, b);
                },
                scrollToPercentX: function(a, b) {
                    lb(a * (l - i), b);
                },
                scrollToPercentY: function(a, b) {
                    kb(a * (m - j), b);
                },
                scrollBy: function(a, b, c) {
                    g.scrollByX(a, c);
                    g.scrollByY(b, c);
                },
                scrollByX: function(a, b) {
                    var c = nb() + Math[a < 0 ? "floor" : "ceil"](a), d = c / (l - i);
                    gb(d * v, b);
                },
                scrollByY: function(a, b) {
                    var c = ob() + Math[a < 0 ? "floor" : "ceil"](a), d = c / (m - j);
                    eb(d * s, b);
                },
                positionDragX: function(a, b) {
                    gb(a, b);
                },
                positionDragY: function(a, b) {
                    eb(a, b);
                },
                animate: function(a, b, c, d) {
                    var e = {};
                    e[b] = c;
                    a.animate(e, {
                        duration: f.animateDuration,
                        easing: f.animateEase,
                        queue: false,
                        step: d
                    });
                },
                getContentPositionX: function() {
                    return nb();
                },
                getContentPositionY: function() {
                    return ob();
                },
                getContentWidth: function() {
                    return l;
                },
                getContentHeight: function() {
                    return m;
                },
                getPercentScrolledX: function() {
                    return nb() / (l - i);
                },
                getPercentScrolledY: function() {
                    return ob() / (m - j);
                },
                getIsScrollableH: function() {
                    return q;
                },
                getIsScrollableV: function() {
                    return p;
                },
                getContentPane: function() {
                    return h;
                },
                scrollToBottom: function(a) {
                    eb(s, a);
                },
                hijackInternalLinks: a.noop,
                destroy: function() {
                    Bb();
                }
            });
            U(e);
        }
        d = a.extend({}, a.fn.jScrollPane.defaults, d);
        a.each([ "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed" ], function() {
            d[this] = d[this] || d.speed;
        });
        return this.each(function() {
            var b = a(this), c = b.data("jsp");
            if (c) {
                c.reinitialise(d);
            } else {
                a("script", b).filter('[type="text/javascript"],:not([type])').remove();
                c = new e(b, d);
                b.data("jsp", c);
            }
        });
    };
    a.fn.jScrollPane.defaults = {
        showArrows: false,
        maintainPosition: true,
        stickToBottom: false,
        stickToRight: false,
        clickOnTrack: true,
        autoReinitialise: false,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: c,
        animateScroll: false,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: false,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: false,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: true,
        hideFocus: false,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    };
})(jQuery, this);

(function(a) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], a);
    } else if (typeof exports === "object") {
        module.exports = a;
    } else {
        a(jQuery);
    }
})(function(a) {
    var b = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], c = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], d = Array.prototype.slice, e, f;
    if (a.event.fixHooks) {
        for (var g = b.length; g; ) {
            a.event.fixHooks[b[--g]] = a.event.mouseHooks;
        }
    }
    var h = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) {
                for (var b = c.length; b; ) {
                    this.addEventListener(c[--b], i, false);
                }
            } else {
                this.onmousewheel = i;
            }
            a.data(this, "mousewheel-line-height", h.getLineHeight(this));
            a.data(this, "mousewheel-page-height", h.getPageHeight(this));
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var b = c.length; b; ) {
                    this.removeEventListener(c[--b], i, false);
                }
            } else {
                this.onmousewheel = null;
            }
            a.removeData(this, "mousewheel-line-height");
            a.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function(b) {
            var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            if (!d.length) {
                d = a("body");
            }
            return parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        },
        getPageHeight: function(b) {
            return a(b).height();
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a);
        }
    });
    function i(b) {
        var c = b || window.event, g = d.call(arguments, 1), i = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        b = a.event.fix(c);
        b.type = "mousewheel";
        if ("detail" in c) {
            m = c.detail * -1;
        }
        if ("wheelDelta" in c) {
            m = c.wheelDelta;
        }
        if ("wheelDeltaY" in c) {
            m = c.wheelDeltaY;
        }
        if ("wheelDeltaX" in c) {
            l = c.wheelDeltaX * -1;
        }
        if ("axis" in c && c.axis === c.HORIZONTAL_AXIS) {
            l = m * -1;
            m = 0;
        }
        i = m === 0 ? l : m;
        if ("deltaY" in c) {
            m = c.deltaY * -1;
            i = m;
        }
        if ("deltaX" in c) {
            l = c.deltaX;
            if (m === 0) {
                i = l * -1;
            }
        }
        if (m === 0 && l === 0) {
            return;
        }
        if (c.deltaMode === 1) {
            var q = a.data(this, "mousewheel-line-height");
            i *= q;
            m *= q;
            l *= q;
        } else if (c.deltaMode === 2) {
            var r = a.data(this, "mousewheel-page-height");
            i *= r;
            m *= r;
            l *= r;
        }
        n = Math.max(Math.abs(m), Math.abs(l));
        if (!f || n < f) {
            f = n;
            if (k(c, n)) {
                f /= 40;
            }
        }
        if (k(c, n)) {
            i /= 40;
            l /= 40;
            m /= 40;
        }
        i = Math[i >= 1 ? "floor" : "ceil"](i / f);
        l = Math[l >= 1 ? "floor" : "ceil"](l / f);
        m = Math[m >= 1 ? "floor" : "ceil"](m / f);
        if (h.settings.normalizeOffset && this.getBoundingClientRect) {
            var s = this.getBoundingClientRect();
            o = b.clientX - s.left;
            p = b.clientY - s.top;
        }
        b.deltaX = l;
        b.deltaY = m;
        b.deltaFactor = f;
        b.offsetX = o;
        b.offsetY = p;
        b.deltaMode = 0;
        g.unshift(b, i, l, m);
        if (e) {
            clearTimeout(e);
        }
        e = setTimeout(j, 200);
        return (a.event.dispatch || a.event.handle).apply(this, g);
    }
    function j() {
        f = null;
    }
    function k(a, b) {
        return h.settings.adjustOldDeltas && a.type === "mousewheel" && b % 120 === 0;
    }
});

+function(a) {
    "use strict";
    var b = ".dropdown-backdrop";
    var c = '[data-toggle="dropdown"]';
    var d = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };
    d.VERSION = "3.2.0";
    d.prototype.toggle = function(b) {
        var c = a(this);
        if (c.is(".disabled, :disabled")) return;
        var d = f(c);
        var g = d.hasClass("open");
        e();
        if (!g) {
            if ("ontouchstart" in document.documentElement && !d.closest(".navbar-nav").length) {
                a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", e);
            }
            var h = {
                relatedTarget: this
            };
            d.trigger(b = a.Event("show.bs.dropdown", h));
            if (b.isDefaultPrevented()) return;
            c.trigger("focus");
            d.toggleClass("open").trigger("shown.bs.dropdown", h);
        }
        return false;
    };
    d.prototype.keydown = function(b) {
        if (!/(38|40|27)/.test(b.keyCode)) return;
        var d = a(this);
        b.preventDefault();
        b.stopPropagation();
        if (d.is(".disabled, :disabled")) return;
        var e = f(d);
        var g = e.hasClass("open");
        if (!g || g && b.keyCode == 27) {
            if (b.which == 27) e.find(c).trigger("focus");
            return d.trigger("click");
        }
        var h = " li:not(.divider):visible a";
        var i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
        if (!i.length) return;
        var j = i.index(i.filter(":focus"));
        if (b.keyCode == 38 && j > 0) j--;
        if (b.keyCode == 40 && j < i.length - 1) j++;
        if (!~j) j = 0;
        i.eq(j).trigger("focus");
    };
    function e(d) {
        if (d && d.which === 3) return;
        a(b).remove();
        a(c).each(function() {
            var b = f(a(this));
            var c = {
                relatedTarget: this
            };
            if (!b.hasClass("open")) return;
            b.trigger(d = a.Event("hide.bs.dropdown", c));
            if (d.isDefaultPrevented()) return;
            b.removeClass("open").trigger("hidden.bs.dropdown", c);
        });
    }
    function f(b) {
        var c = b.attr("data-target");
        if (!c) {
            c = b.attr("href");
            c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "");
        }
        var d = c && a(c);
        return d && d.length ? d : b.parent();
    }
    function g(b) {
        return this.each(function() {
            var c = a(this);
            var e = c.data("bs.dropdown");
            if (!e) c.data("bs.dropdown", e = new d(this));
            if (typeof b == "string") e[b].call(c);
        });
    }
    var h = a.fn.dropdown;
    a.fn.dropdown = g;
    a.fn.dropdown.Constructor = d;
    a.fn.dropdown.noConflict = function() {
        a.fn.dropdown = h;
        return this;
    };
    a(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", c, d.prototype.toggle).on("keydown.bs.dropdown.data-api", c + ', [role="menu"], [role="listbox"]', d.prototype.keydown);
}(jQuery);

+function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c;
        this.$body = a(document.body);
        this.$element = a(b);
        this.$backdrop = this.isShown = null;
        this.scrollbarWidth = 0;
        if (this.options.remote) {
            this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
                this.$element.trigger("loaded.bs.modal");
            }, this));
        }
    };
    b.VERSION = "3.2.0";
    b.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    b.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a);
    };
    b.prototype.show = function(b) {
        var c = this;
        var d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d);
        if (this.isShown || d.isDefaultPrevented()) return;
        this.isShown = true;
        this.checkScrollbar();
        this.$body.addClass("modal-open");
        this.setScrollbar();
        this.escape();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this));
        this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            if (!c.$element.parent().length) {
                c.$element.appendTo(c.$body);
            }
            c.$element.show().scrollTop(0);
            if (d) {
                c.$element[0].offsetWidth;
            }
            c.$element.addClass("in").attr("aria-hidden", false);
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                c.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e);
        });
    };
    b.prototype.hide = function(b) {
        if (b) b.preventDefault();
        b = a.Event("hide.bs.modal");
        this.$element.trigger(b);
        if (!this.isShown || b.isDefaultPrevented()) return;
        this.isShown = false;
        this.$body.removeClass("modal-open");
        this.resetScrollbar();
        this.escape();
        a(document).off("focusin.bs.modal");
        this.$element.removeClass("in").attr("aria-hidden", true).off("click.dismiss.bs.modal");
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal();
    };
    b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            if (this.$element[0] !== a.target && !this.$element.has(a.target).length) {
                this.$element.trigger("focus");
            }
        }, this));
    };
    b.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
                a.which == 27 && this.hide();
            }, this));
        } else if (!this.isShown) {
            this.$element.off("keyup.dismiss.bs.modal");
        }
    };
    b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide();
        this.backdrop(function() {
            a.$element.trigger("hidden.bs.modal");
        });
    };
    b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    };
    b.prototype.backdrop = function(b) {
        var c = this;
        var d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                if (a.target !== a.currentTarget) return;
                this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this);
            }, this));
            if (e) this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            if (!b) return;
            e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                c.removeBackdrop();
                b && b();
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f();
        } else if (b) {
            b();
        }
    };
    b.prototype.checkScrollbar = function() {
        if (document.body.clientWidth >= window.innerWidth) return;
        this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar();
    };
    b.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        if (this.scrollbarWidth) this.$body.css("padding-right", a + this.scrollbarWidth);
    };
    b.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "");
    };
    b.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure";
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        this.$body[0].removeChild(a);
        return b;
    };
    function c(c, d) {
        return this.each(function() {
            var e = a(this);
            var f = e.data("bs.modal");
            var g = a.extend({}, b.DEFAULTS, e.data(), typeof c == "object" && c);
            if (!f) e.data("bs.modal", f = new b(this, g));
            if (typeof c == "string") f[c](d); else if (g.show) f.show(d);
        });
    }
    var d = a.fn.modal;
    a.fn.modal = c;
    a.fn.modal.Constructor = b;
    a.fn.modal.noConflict = function() {
        a.fn.modal = d;
        return this;
    };
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var d = a(this);
        var e = d.attr("href");
        var f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""));
        var g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        if (d.is("a")) b.preventDefault();
        f.one("show.bs.modal", function(a) {
            if (a.isDefaultPrevented()) return;
            f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus");
            });
        });
        c.call(f, g, this);
    });
}(jQuery);

+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap");
        var b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) {
            if (a.style[c] !== undefined) {
                return {
                    end: b[c]
                };
            }
        }
        return false;
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = false;
        var d = this;
        a(this).one("bsTransitionEnd", function() {
            c = true;
        });
        var e = function() {
            if (!c) a(d).trigger(a.support.transition.end);
        };
        setTimeout(e, b);
        return this;
    };
    a(function() {
        a.support.transition = b();
        if (!a.support.transition) return;
        a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
            }
        };
    });
}(jQuery);

+function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c);
        this.options = a.extend({}, b.DEFAULTS, d);
        this.transitioning = null;
        if (this.options.parent) this.$parent = a(this.options.parent);
        if (this.options.toggle) this.toggle();
    };
    b.VERSION = "3.2.0";
    b.DEFAULTS = {
        toggle: true
    };
    b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
    };
    b.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) return;
        var b = a.Event("show.bs.collapse");
        this.$element.trigger(b);
        if (b.isDefaultPrevented()) return;
        var d = this.$parent && this.$parent.find("> .panel > .in");
        if (d && d.length) {
            var e = d.data("bs.collapse");
            if (e && e.transitioning) return;
            c.call(d, "hide");
            e || d.data("bs.collapse", null);
        }
        var f = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[f](0);
        this.transitioning = 1;
        var g = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[f]("");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse");
        };
        if (!a.support.transition) return g.call(this);
        var h = a.camelCase([ "scroll", f ].join("-"));
        this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h]);
    };
    b.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) return;
        var b = a.Event("hide.bs.collapse");
        this.$element.trigger(b);
        if (b.isDefaultPrevented()) return;
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
        this.transitioning = 1;
        var d = function() {
            this.transitioning = 0;
            this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        };
        if (!a.support.transition) return d.call(this);
        this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350);
    };
    b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    function c(c) {
        return this.each(function() {
            var d = a(this);
            var e = d.data("bs.collapse");
            var f = a.extend({}, b.DEFAULTS, d.data(), typeof c == "object" && c);
            if (!e && f.toggle && c == "show") c = !c;
            if (!e) d.data("bs.collapse", e = new b(this, f));
            if (typeof c == "string") e[c]();
        });
    }
    var d = a.fn.collapse;
    a.fn.collapse = c;
    a.fn.collapse.Constructor = b;
    a.fn.collapse.noConflict = function() {
        a.fn.collapse = d;
        return this;
    };
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(b) {
        var d;
        var e = a(this);
        var f = e.attr("data-target") || b.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "");
        var g = a(f);
        var h = g.data("bs.collapse");
        var i = h ? "toggle" : e.data();
        var j = e.attr("data-parent");
        var k = j && a(j);
        if (!h || !h.transitioning) {
            if (k) k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed");
            e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed");
        }
        c.call(g, i);
    });
}(jQuery);

+function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b);
    };
    b.VERSION = "3.2.0";
    b.prototype.show = function() {
        var b = this.element;
        var c = b.closest("ul:not(.dropdown-menu)");
        var d = b.data("target");
        if (!d) {
            d = b.attr("href");
            d = d && d.replace(/.*(?=#[^\s]*$)/, "");
        }
        if (b.parent("li").hasClass("active")) return;
        var e = c.find(".active:last a")[0];
        var f = a.Event("show.bs.tab", {
            relatedTarget: e
        });
        b.trigger(f);
        if (f.isDefaultPrevented()) return;
        var g = a(d);
        this.activate(b.closest("li"), c);
        this.activate(g, g.parent(), function() {
            b.trigger({
                type: "shown.bs.tab",
                relatedTarget: e
            });
        });
    };
    b.prototype.activate = function(b, c, d) {
        var e = c.find("> .active");
        var f = d && a.support.transition && e.hasClass("fade");
        function g() {
            e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
            b.addClass("active");
            if (f) {
                b[0].offsetWidth;
                b.addClass("in");
            } else {
                b.removeClass("fade");
            }
            if (b.parent(".dropdown-menu")) {
                b.closest("li.dropdown").addClass("active");
            }
            d && d();
        }
        f ? e.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g();
        e.removeClass("in");
    };
    function c(c) {
        return this.each(function() {
            var d = a(this);
            var e = d.data("bs.tab");
            if (!e) d.data("bs.tab", e = new b(this));
            if (typeof c == "string") e[c]();
        });
    }
    var d = a.fn.tab;
    a.fn.tab = c;
    a.fn.tab.Constructor = b;
    a.fn.tab.noConflict = function() {
        a.fn.tab = d;
        return this;
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault();
        c.call(a(this), "show");
    });
}(jQuery);

var mejs = mejs || {};

mejs.version = "2.15.1";

mejs.meIndex = 0;

mejs.plugins = {
    silverlight: [ {
        version: [ 3, 0 ],
        types: [ "video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg" ]
    } ],
    flash: [ {
        version: [ 9, 0, 124 ],
        types: [ "video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube", "application/x-mpegURL" ]
    } ],
    youtube: [ {
        version: null,
        types: [ "video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube" ]
    } ],
    vimeo: [ {
        version: null,
        types: [ "video/vimeo", "video/x-vimeo" ]
    } ]
};

mejs.Utility = {
    encodeUrl: function(a) {
        return encodeURIComponent(a);
    },
    escapeHTML: function(a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;");
    },
    absolutizeUrl: function(a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href;
    },
    getScriptPath: function(a) {
        var b = 0, c, d = "", e = "", f, g, h, i, j, k = document.getElementsByTagName("script"), l = k.length, m = a.length;
        for (;b < l; b++) {
            h = k[b].src;
            f = h.lastIndexOf("/");
            if (f > -1) {
                j = h.substring(f + 1);
                i = h.substring(0, f + 1);
            } else {
                j = h;
                i = "";
            }
            for (c = 0; c < m; c++) {
                e = a[c];
                g = j.indexOf(e);
                if (g > -1) {
                    d = i;
                    break;
                }
            }
            if (d !== "") {
                break;
            }
        }
        return d;
    },
    secondsToTimeCode: function(a, b, c, d) {
        if (typeof c == "undefined") {
            c = false;
        } else if (typeof d == "undefined") {
            d = 25;
        }
        var e = Math.floor(a / 3600) % 24, f = Math.floor(a / 60) % 60, g = Math.floor(a % 60), h = Math.floor((a % 1 * d).toFixed(3)), i = (b || e > 0 ? (e < 10 ? "0" + e : e) + ":" : "") + (f < 10 ? "0" + f : f) + ":" + (g < 10 ? "0" + g : g) + (c ? ":" + (h < 10 ? "0" + h : h) : "");
        return i;
    },
    timeCodeToSeconds: function(a, b, c, d) {
        if (typeof c == "undefined") {
            c = false;
        } else if (typeof d == "undefined") {
            d = 25;
        }
        var e = a.split(":"), f = parseInt(e[0], 10), g = parseInt(e[1], 10), h = parseInt(e[2], 10), i = 0, j = 0;
        if (c) {
            i = parseInt(e[3]) / d;
        }
        j = f * 3600 + g * 60 + h + i;
        return j;
    },
    convertSMPTEtoSeconds: function(a) {
        if (typeof a != "string") return false;
        a = a.replace(",", ".");
        var b = 0, c = a.indexOf(".") != -1 ? a.split(".")[1].length : 0, d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++) {
            d = 1;
            if (e > 0) {
                d = Math.pow(60, e);
            }
            b += Number(a[e]) * d;
        }
        return Number(b.toFixed(c));
    },
    removeSwf: function(a) {
        var b = document.getElementById(a);
        if (b && /object|embed/i.test(b.nodeName)) {
            if (mejs.MediaFeatures.isIE) {
                b.style.display = "none";
                (function() {
                    if (b.readyState == 4) {
                        mejs.Utility.removeObjectInIE(a);
                    } else {
                        setTimeout(arguments.callee, 10);
                    }
                })();
            } else {
                b.parentNode.removeChild(b);
            }
        }
    },
    removeObjectInIE: function(a) {
        var b = document.getElementById(a);
        if (b) {
            for (var c in b) {
                if (typeof b[c] == "function") {
                    b[c] = null;
                }
            }
            b.parentNode.removeChild(b);
        }
    }
};

mejs.PluginDetector = {
    hasPluginVersion: function(a, b) {
        var c = this.plugins[a];
        b[1] = b[1] || 0;
        b[2] = b[2] || 0;
        return c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? true : false;
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e);
    },
    detectPlugin: function(a, b, c, d) {
        var e = [ 0, 0, 0 ], f, g, h;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
            f = this.nav.plugins[a].description;
            if (f && !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                e = f.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (g = 0; g < e.length; g++) {
                    e[g] = parseInt(e[g].match(/\d+/), 10);
                }
            }
        } else if (typeof window.ActiveXObject != "undefined") {
            try {
                h = new ActiveXObject(c);
                if (h) {
                    e = d(h);
                }
            } catch (i) {}
        }
        return e;
    }
};

mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
    var b = [], c = a.GetVariable("$version");
    if (c) {
        c = c.split(" ")[1].split(",");
        b = [ parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10) ];
    }
    return b;
});

mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(a) {
    var b = [ 0, 0, 0, 0 ], c = function(a, b, c, d) {
        while (a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3])) {
            b[c] += d;
        }
        b[c] -= d;
    };
    c(a, b, 0, 1);
    c(a, b, 1, 1);
    c(a, b, 2, 1e4);
    c(a, b, 2, 1e3);
    c(a, b, 2, 100);
    c(a, b, 2, 10);
    c(a, b, 2, 1);
    c(a, b, 3, 1);
    return b;
});

mejs.MediaFeatures = {
    init: function() {
        var a = this, b = document, c = mejs.PluginDetector.nav, d = mejs.PluginDetector.ua.toLowerCase(), e, f, g = [ "source", "track", "audio", "video" ];
        a.isiPad = d.match(/ipad/i) !== null;
        a.isiPhone = d.match(/iphone/i) !== null;
        a.isiOS = a.isiPhone || a.isiPad;
        a.isAndroid = d.match(/android/i) !== null;
        a.isBustedAndroid = d.match(/android 2\.[12]/) !== null;
        a.isBustedNativeHTTPS = location.protocol === "https:" && (d.match(/android [12]\./) !== null || d.match(/macintosh.* version.* safari/) !== null);
        a.isIE = c.appName.toLowerCase().indexOf("microsoft") != -1 || c.appName.toLowerCase().match(/trident/gi) !== null;
        a.isChrome = d.match(/chrome/gi) !== null;
        a.isChromium = d.match(/chromium/gi) !== null;
        a.isFirefox = d.match(/firefox/gi) !== null;
        a.isWebkit = d.match(/webkit/gi) !== null;
        a.isGecko = d.match(/gecko/gi) !== null && !a.isWebkit && !a.isIE;
        a.isOpera = d.match(/opera/gi) !== null;
        a.hasTouch = "ontouchstart" in window;
        a.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (e = 0; e < g.length; e++) {
            f = document.createElement(g[e]);
        }
        a.supportsMediaTag = typeof f.canPlayType !== "undefined" || a.isBustedAndroid;
        try {
            f.canPlayType("video/mp4");
        } catch (h) {
            a.supportsMediaTag = false;
        }
        a.hasSemiNativeFullScreen = typeof f.webkitEnterFullscreen !== "undefined";
        a.hasNativeFullscreen = typeof f.requestFullscreen !== "undefined";
        a.hasWebkitNativeFullScreen = typeof f.webkitRequestFullScreen !== "undefined";
        a.hasMozNativeFullScreen = typeof f.mozRequestFullScreen !== "undefined";
        a.hasMsNativeFullScreen = typeof f.msRequestFullscreen !== "undefined";
        a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen || a.hasMozNativeFullScreen || a.hasMsNativeFullScreen;
        a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen;
        if (a.hasMozNativeFullScreen) {
            a.nativeFullScreenEnabled = document.mozFullScreenEnabled;
        } else if (a.hasMsNativeFullScreen) {
            a.nativeFullScreenEnabled = document.msFullscreenEnabled;
        }
        if (a.isChrome) {
            a.hasSemiNativeFullScreen = false;
        }
        if (a.hasTrueNativeFullScreen) {
            a.fullScreenEventName = "";
            if (a.hasWebkitNativeFullScreen) {
                a.fullScreenEventName = "webkitfullscreenchange";
            } else if (a.hasMozNativeFullScreen) {
                a.fullScreenEventName = "mozfullscreenchange";
            } else if (a.hasMsNativeFullScreen) {
                a.fullScreenEventName = "MSFullscreenChange";
            }
            a.isFullScreen = function() {
                if (a.hasMozNativeFullScreen) {
                    return b.mozFullScreen;
                } else if (a.hasWebkitNativeFullScreen) {
                    return b.webkitIsFullScreen;
                } else if (a.hasMsNativeFullScreen) {
                    return b.msFullscreenElement !== null;
                }
            };
            a.requestFullScreen = function(b) {
                if (a.hasWebkitNativeFullScreen) {
                    b.webkitRequestFullScreen();
                } else if (a.hasMozNativeFullScreen) {
                    b.mozRequestFullScreen();
                } else if (a.hasMsNativeFullScreen) {
                    b.msRequestFullscreen();
                }
            };
            a.cancelFullScreen = function() {
                if (a.hasWebkitNativeFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (a.hasMozNativeFullScreen) {
                    document.mozCancelFullScreen();
                } else if (a.hasMsNativeFullScreen) {
                    document.msExitFullscreen();
                }
            };
        }
        if (a.hasSemiNativeFullScreen && d.match(/mac os x 10_5/i)) {
            a.hasNativeFullScreen = false;
            a.hasSemiNativeFullScreen = false;
        }
    }
};

mejs.MediaFeatures.init();

mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function(a) {
        this.currentTime = a;
    },
    setMuted: function(a) {
        this.muted = a;
    },
    setVolume: function(a) {
        this.volume = a;
    },
    stop: function() {
        this.pause();
    },
    setSrc: function(a) {
        var b = this.getElementsByTagName("source");
        while (b.length > 0) {
            this.removeChild(b[0]);
        }
        if (typeof a == "string") {
            this.src = a;
        } else {
            var c, d;
            for (c = 0; c < a.length; c++) {
                d = a[c];
                if (this.canPlayType(d.type)) {
                    this.src = d.src;
                    break;
                }
            }
        }
    },
    setVideoSize: function(a, b) {
        this.width = a;
        this.height = b;
    }
};

mejs.PluginMediaElement = function(a, b, c) {
    this.id = a;
    this.pluginType = b;
    this.src = c;
    this.events = {};
    this.attributes = {};
};

mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    tagName: "",
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function() {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube" || this.pluginType == "vimeo") {
                this.pluginApi.playVideo();
            } else {
                this.pluginApi.playMedia();
            }
            this.paused = false;
        }
    },
    load: function() {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube" || this.pluginType == "vimeo") {} else {
                this.pluginApi.loadMedia();
            }
            this.paused = false;
        }
    },
    pause: function() {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube" || this.pluginType == "vimeo") {
                this.pluginApi.pauseVideo();
            } else {
                this.pluginApi.pauseMedia();
            }
            this.paused = true;
        }
    },
    stop: function() {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube" || this.pluginType == "vimeo") {
                this.pluginApi.stopVideo();
            } else {
                this.pluginApi.stopMedia();
            }
            this.paused = true;
        }
    },
    canPlayType: function(a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) {
            d = e[b];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version)) {
                for (c = 0; c < d.types.length; c++) {
                    if (a == d.types[c]) {
                        return "probably";
                    }
                }
            }
        }
        return "";
    },
    positionFullscreenButton: function(a, b, c) {
        if (this.pluginApi != null && this.pluginApi.positionFullscreenButton) {
            this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c);
        }
    },
    hideFullscreenButton: function() {
        if (this.pluginApi != null && this.pluginApi.hideFullscreenButton) {
            this.pluginApi.hideFullscreenButton();
        }
    },
    setSrc: function(a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a);
        } else {
            var b, c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a);
                    break;
                }
            }
        }
    },
    setCurrentTime: function(a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube" || this.pluginType == "vimeo") {
                this.pluginApi.seekTo(a);
            } else {
                this.pluginApi.setCurrentTime(a);
            }
            this.currentTime = a;
        }
    },
    setVolume: function(a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                this.pluginApi.setVolume(a * 100);
            } else {
                this.pluginApi.setVolume(a);
            }
            this.volume = a;
        }
    },
    setMuted: function(a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                if (a) {
                    this.pluginApi.mute();
                } else {
                    this.pluginApi.unMute();
                }
                this.muted = a;
                this.dispatchEvent("volumechange");
            } else {
                this.pluginApi.setMuted(a);
            }
            this.muted = a;
        }
    },
    setVideoSize: function(a, b) {
        if (this.pluginElement && this.pluginElement.style) {
            this.pluginElement.style.width = a + "px";
            this.pluginElement.style.height = b + "px";
        }
        if (this.pluginApi != null && this.pluginApi.setVideoSize) {
            this.pluginApi.setVideoSize(a, b);
        }
    },
    setFullscreen: function(a) {
        if (this.pluginApi != null && this.pluginApi.setFullscreen) {
            this.pluginApi.setFullscreen(a);
        }
    },
    enterFullScreen: function() {
        if (this.pluginApi != null && this.pluginApi.setFullscreen) {
            this.setFullscreen(true);
        }
    },
    exitFullScreen: function() {
        if (this.pluginApi != null && this.pluginApi.setFullscreen) {
            this.setFullscreen(false);
        }
    },
    addEventListener: function(a, b, c) {
        this.events[a] = this.events[a] || [];
        this.events[a].push(b);
    },
    removeEventListener: function(a, b) {
        if (!a) {
            this.events = {};
            return true;
        }
        var c = this.events[a];
        if (!c) return true;
        if (!b) {
            this.events[a] = [];
            return true;
        }
        for (var d = 0; d < c.length; d++) {
            if (c[d] === b) {
                this.events[a].splice(d, 1);
                return true;
            }
        }
        return false;
    },
    dispatchEvent: function(a) {
        var b, c, d = this.events[a];
        if (d) {
            c = Array.prototype.slice.call(arguments, 1);
            for (b = 0; b < d.length; b++) {
                d[b].apply(null, c);
            }
        }
    },
    hasAttribute: function(a) {
        return a in this.attributes;
    },
    removeAttribute: function(a) {
        delete this.attributes[a];
    },
    getAttribute: function(a) {
        if (this.hasAttribute(a)) {
            return this.attributes[a];
        }
        return "";
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b;
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id);
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id);
    }
};

mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(a, b, c) {
        this.pluginMediaElements[a] = b;
        this.htmlMediaElements[a] = c;
    },
    unregisterPluginElement: function(a) {
        delete this.pluginMediaElements[a];
        delete this.htmlMediaElements[a];
    },
    initPlugin: function(a) {
        var b = this.pluginMediaElements[a], c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
              case "flash":
                b.pluginElement = b.pluginApi = document.getElementById(a);
                break;

              case "silverlight":
                b.pluginElement = document.getElementById(b.id);
                b.pluginApi = b.pluginElement.Content.MediaElementJS;
                break;
            }
            if (b.pluginApi != null && b.success) {
                b.success(b, c);
            }
        }
    },
    fireEvent: function(a, b, c) {
        var d, e, f, g = this.pluginMediaElements[a];
        if (!g) {
            return;
        }
        d = {
            type: b,
            target: g
        };
        for (e in c) {
            g[e] = c[e];
            d[e] = c[e];
        }
        f = c.bufferedTime || 0;
        d.target.buffered = d.buffered = {
            start: function(a) {
                return 0;
            },
            end: function(a) {
                return f;
            },
            length: 1
        };
        g.dispatchEvent(d.type, d);
    }
};

mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: [ "flash", "silverlight", "youtube", "vimeo" ],
    enablePluginDebug: false,
    httpsBasicAuthSite: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath([ "mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js" ]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: false,
    enablePseudoStreaming: false,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function() {},
    error: function() {}
};

mejs.MediaElement = function(a, b) {
    return mejs.HtmlMediaElementShim.create(a, b);
};

mejs.HtmlMediaElementShim = {
    create: function(a, b) {
        var c = mejs.MediaElementDefaults, d = typeof a == "string" ? document.getElementById(a) : a, e = d.tagName.toLowerCase(), f = e === "audio" || e === "video", g = f ? d.getAttribute("src") : d.getAttribute("href"), h = d.getAttribute("poster"), i = d.getAttribute("autoplay"), j = d.getAttribute("preload"), k = d.getAttribute("controls"), l, m;
        for (m in b) {
            c[m] = b[m];
        }
        g = typeof g == "undefined" || g === null || g == "" ? null : g;
        h = typeof h == "undefined" || h === null ? "" : h;
        j = typeof j == "undefined" || j === null || j === "false" ? "none" : j;
        i = !(typeof i == "undefined" || i === null || i === "false");
        k = !(typeof k == "undefined" || k === null || k === "false");
        l = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, f, g);
        l.url = l.url !== null ? mejs.Utility.absolutizeUrl(l.url) : "";
        if (l.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                d.src = l.url;
                d.addEventListener("click", function() {
                    d.play();
                }, false);
            }
            return this.updateNative(l, c, i, j);
        } else if (l.method !== "") {
            return this.createPlugin(l, c, h, i, j, k);
        } else {
            this.createErrorMessage(l, c, h);
            return this;
        }
    },
    determinePlayback: function(a, b, c, d, e) {
        var f = [], g, h, i, j, k, l, m = {
            method: "",
            url: "",
            htmlMediaElement: a,
            isVideo: a.tagName.toLowerCase() != "audio"
        }, n, o, p, q, r;
        if (typeof b.type != "undefined" && b.type !== "") {
            if (typeof b.type == "string") {
                f.push({
                    type: b.type,
                    url: e
                });
            } else {
                for (g = 0; g < b.type.length; g++) {
                    f.push({
                        type: b.type[g],
                        url: e
                    });
                }
            }
        } else if (e !== null) {
            l = this.formatType(e, a.getAttribute("type"));
            f.push({
                type: l,
                url: e
            });
        } else {
            for (g = 0; g < a.childNodes.length; g++) {
                k = a.childNodes[g];
                if (k.nodeType == 1 && k.tagName.toLowerCase() == "source") {
                    e = k.getAttribute("src");
                    l = this.formatType(e, k.getAttribute("type"));
                    r = k.getAttribute("media");
                    if (!r || !window.matchMedia || window.matchMedia && window.matchMedia(r).matches) {
                        f.push({
                            type: l,
                            url: e
                        });
                    }
                }
            }
        }
        if (!d && f.length > 0 && f[0].url !== null && this.getTypeFromFile(f[0].url).indexOf("audio") > -1) {
            m.isVideo = false;
        }
        if (mejs.MediaFeatures.isBustedAndroid) {
            a.canPlayType = function(a) {
                return a.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : "";
            };
        }
        if (mejs.MediaFeatures.isChromium) {
            a.canPlayType = function(a) {
                return a.match(/video\/(webm|ogv|ogg)/gi) !== null ? "maybe" : "";
            };
        }
        if (c && (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "native") && !(mejs.MediaFeatures.isBustedNativeHTTPS && b.httpsBasicAuthSite === true)) {
            if (!d) {
                q = document.createElement(m.isVideo ? "video" : "audio");
                a.parentNode.insertBefore(q, a);
                a.style.display = "none";
                m.htmlMediaElement = a = q;
            }
            for (g = 0; g < f.length; g++) {
                if (f[g].type == "video/m3u8" || a.canPlayType(f[g].type).replace(/no/, "") !== "" || a.canPlayType(f[g].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "" || a.canPlayType(f[g].type.replace(/m4a/, "mp4")).replace(/no/, "") !== "") {
                    m.method = "native";
                    m.url = f[g].url;
                    break;
                }
            }
            if (m.method === "native") {
                if (m.url !== null) {
                    a.src = m.url;
                }
                if (b.mode !== "auto_plugin") {
                    return m;
                }
            }
        }
        if (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "shim") {
            for (g = 0; g < f.length; g++) {
                l = f[g].type;
                for (h = 0; h < b.plugins.length; h++) {
                    n = b.plugins[h];
                    o = mejs.plugins[n];
                    for (i = 0; i < o.length; i++) {
                        p = o[i];
                        if (p.version == null || mejs.PluginDetector.hasPluginVersion(n, p.version)) {
                            for (j = 0; j < p.types.length; j++) {
                                if (l == p.types[j]) {
                                    m.method = n;
                                    m.url = f[g].url;
                                    return m;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (b.mode === "auto_plugin" && m.method === "native") {
            return m;
        }
        if (m.method === "" && f.length > 0) {
            m.url = f[0].url;
        }
        return m;
    },
    formatType: function(a, b) {
        var c;
        if (a && !b) {
            return this.getTypeFromFile(a);
        } else {
            if (b && ~b.indexOf(";")) {
                return b.substr(0, b.indexOf(";"));
            } else {
                return b;
            }
        }
    },
    getTypeFromFile: function(a) {
        a = a.split("?")[0];
        var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase();
        return (/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b) ? "video" : "audio") + "/" + this.getTypeFromExtension(b);
    },
    getTypeFromExtension: function(a) {
        switch (a) {
          case "mp4":
          case "m4v":
          case "m4a":
            return "mp4";

          case "webm":
          case "webma":
          case "webmv":
            return "webm";

          case "ogg":
          case "oga":
          case "ogv":
            return "ogg";

          default:
            return a;
        }
    },
    createErrorMessage: function(a, b, c) {
        var d = a.htmlMediaElement, e = document.createElement("div");
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px";
            e.style.height = d.height + "px";
        } catch (f) {}
        if (b.customError) {
            e.innerHTML = b.customError;
        } else {
            e.innerHTML = c !== "" ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>";
        }
        d.parentNode.insertBefore(e, d);
        d.style.display = "none";
        b.error(d);
    },
    createPlugin: function(a, b, c, d, e, f) {
        var g = a.htmlMediaElement, h = 1, i = 1, j = "me_" + a.method + "_" + mejs.meIndex++, k = new mejs.PluginMediaElement(j, a.method, a.url), l = document.createElement("div"), m, n, o;
        k.tagName = g.tagName;
        for (var p = 0; p < g.attributes.length; p++) {
            var q = g.attributes[p];
            if (q.specified == true) {
                k.setAttribute(q.name, q.value);
            }
        }
        n = g.parentNode;
        while (n !== null && n.tagName.toLowerCase() !== "body" && n.parentNode != null) {
            if (n.parentNode.tagName.toLowerCase() === "p") {
                n.parentNode.parentNode.insertBefore(n, n.parentNode);
                break;
            }
            n = n.parentNode;
        }
        if (a.isVideo) {
            h = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : g.getAttribute("width") !== null ? g.getAttribute("width") : b.defaultVideoWidth;
            i = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : g.getAttribute("height") !== null ? g.getAttribute("height") : b.defaultVideoHeight;
            h = mejs.Utility.encodeUrl(h);
            i = mejs.Utility.encodeUrl(i);
        } else {
            if (b.enablePluginDebug) {
                h = 320;
                i = 240;
            }
        }
        k.success = b.success;
        mejs.MediaPluginBridge.registerPluginElement(j, k, g);
        l.className = "me-plugin";
        l.id = j + "_container";
        if (a.isVideo) {
            g.parentNode.insertBefore(l, g);
        } else {
            document.body.insertBefore(l, document.body.childNodes[0]);
        }
        o = [ "id=" + j, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + h, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + i, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam ];
        if (a.url !== null) {
            if (a.method == "flash") {
                o.push("file=" + mejs.Utility.encodeUrl(a.url));
            } else {
                o.push("file=" + a.url);
            }
        }
        if (b.enablePluginDebug) {
            o.push("debug=true");
        }
        if (b.enablePluginSmoothing) {
            o.push("smoothing=true");
        }
        if (b.enablePseudoStreaming) {
            o.push("pseudostreaming=true");
        }
        if (f) {
            o.push("controls=true");
        }
        if (b.pluginVars) {
            o = o.concat(b.pluginVars);
        }
        switch (a.method) {
          case "silverlight":
            l.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + j + '" name="' + j + '" width="' + h + '" height="' + i + '" class="mejs-shim">' + '<param name="initParams" value="' + o.join(",") + '" />' + '<param name="windowless" value="true" />' + '<param name="background" value="black" />' + '<param name="minRuntimeVersion" value="3.0.0.0" />' + '<param name="autoUpgrade" value="true" />' + '<param name="source" value="' + b.pluginPath + b.silverlightName + '" />' + "</object>";
            break;

          case "flash":
            if (mejs.MediaFeatures.isIE) {
                m = document.createElement("div");
                l.appendChild(m);
                m.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' + 'id="' + j + '" width="' + h + '" height="' + i + '" class="mejs-shim">' + '<param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date() + '" />' + '<param name="flashvars" value="' + o.join("&amp;") + '" />' + '<param name="quality" value="high" />' + '<param name="bgcolor" value="#000000" />' + '<param name="wmode" value="transparent" />' + '<param name="allowScriptAccess" value="always" />' + '<param name="allowFullScreen" value="true" />' + '<param name="scale" value="default" />' + "</object>";
            } else {
                l.innerHTML = '<embed id="' + j + '" name="' + j + '" ' + 'play="true" ' + 'loop="false" ' + 'quality="high" ' + 'bgcolor="#000000" ' + 'wmode="transparent" ' + 'allowScriptAccess="always" ' + 'allowFullScreen="true" ' + 'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' + 'src="' + b.pluginPath + b.flashName + '" ' + 'flashvars="' + o.join("&") + '" ' + 'width="' + h + '" ' + 'height="' + i + '" ' + 'scale="default"' + 'class="mejs-shim"></embed>';
            }
            break;

          case "youtube":
            var r;
            if (a.url.lastIndexOf("youtu.be") != -1) {
                r = a.url.substr(a.url.lastIndexOf("/") + 1);
                if (r.indexOf("?") != -1) {
                    r = r.substr(0, r.indexOf("?"));
                }
            } else {
                r = a.url.substr(a.url.lastIndexOf("=") + 1);
            }
            youtubeSettings = {
                container: l,
                containerId: l.id,
                pluginMediaElement: k,
                pluginId: j,
                videoId: r,
                height: i,
                width: h
            };
            if (mejs.PluginDetector.hasPluginVersion("flash", [ 10, 0, 0 ])) {
                mejs.YouTubeApi.createFlash(youtubeSettings);
            } else {
                mejs.YouTubeApi.enqueueIframe(youtubeSettings);
            }
            break;

          case "vimeo":
            var s = j + "_player";
            k.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1);
            l.innerHTML = '<iframe src="//player.vimeo.com/video/' + k.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + s + '" width="' + h + '" height="' + i + '" frameborder="0" class="mejs-shim" id="' + s + '"></iframe>';
            if (typeof $f == "function") {
                var t = $f(l.childNodes[0]);
                t.addEvent("ready", function() {
                    $.extend(t, {
                        playVideo: function() {
                            t.api("play");
                        },
                        stopVideo: function() {
                            t.api("unload");
                        },
                        pauseVideo: function() {
                            t.api("pause");
                        },
                        seekTo: function(a) {
                            t.api("seekTo", a);
                        },
                        setVolume: function(a) {
                            t.api("setVolume", a);
                        },
                        setMuted: function(a) {
                            if (a) {
                                t.lastVolume = t.api("getVolume");
                                t.api("setVolume", 0);
                            } else {
                                t.api("setVolume", t.lastVolume);
                                delete t.lastVolume;
                            }
                        }
                    });
                    function a(a, b, c, d) {
                        var e = {
                            type: c,
                            target: b
                        };
                        if (c == "timeupdate") {
                            b.currentTime = e.currentTime = d.seconds;
                            b.duration = e.duration = d.duration;
                        }
                        b.dispatchEvent(e.type, e);
                    }
                    t.addEvent("play", function() {
                        a(t, k, "play");
                        a(t, k, "playing");
                    });
                    t.addEvent("pause", function() {
                        a(t, k, "pause");
                    });
                    t.addEvent("finish", function() {
                        a(t, k, "ended");
                    });
                    t.addEvent("playProgress", function(b) {
                        a(t, k, "timeupdate", b);
                    });
                    k.pluginElement = l;
                    k.pluginApi = t;
                    mejs.MediaPluginBridge.initPlugin(j);
                });
            } else {
                console.warn("You need to include froogaloop for vimeo to work");
            }
            break;
        }
        g.style.display = "none";
        g.removeAttribute("autoplay");
        return k;
    },
    updateNative: function(a, b, c, d) {
        var e = a.htmlMediaElement, f;
        for (f in mejs.HtmlMediaElement) {
            e[f] = mejs.HtmlMediaElement[f];
        }
        b.success(e, e);
        return e;
    }
};

mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
            this.isIframeStarted = true;
        }
    },
    iframeQueue: [],
    enqueueIframe: function(a) {
        if (this.isLoaded) {
            this.createIframe(a);
        } else {
            this.loadIframeApi();
            this.iframeQueue.push(a);
        }
    },
    createIframe: function(a) {
        var b = a.pluginMediaElement, c = new YT.Player(a.containerId, {
            height: a.height,
            width: a.width,
            videoId: a.videoId,
            playerVars: {
                controls: 0
            },
            events: {
                onReady: function() {
                    a.pluginMediaElement.pluginApi = c;
                    mejs.MediaPluginBridge.initPlugin(a.pluginId);
                    setInterval(function() {
                        mejs.YouTubeApi.createEvent(c, b, "timeupdate");
                    }, 250);
                },
                onStateChange: function(a) {
                    mejs.YouTubeApi.handleStateChange(a.data, c, b);
                }
            }
        });
    },
    createEvent: function(a, b, c) {
        var d = {
            type: c,
            target: b
        };
        if (a && a.getDuration) {
            b.currentTime = d.currentTime = a.getCurrentTime();
            b.duration = d.duration = a.getDuration();
            d.paused = b.paused;
            d.ended = b.ended;
            d.muted = a.isMuted();
            d.volume = a.getVolume() / 100;
            d.bytesTotal = a.getVideoBytesTotal();
            d.bufferedBytes = a.getVideoBytesLoaded();
            var e = d.bufferedBytes / d.bytesTotal * d.duration;
            d.target.buffered = d.buffered = {
                start: function(a) {
                    return 0;
                },
                end: function(a) {
                    return e;
                },
                length: 1
            };
        }
        b.dispatchEvent(d.type, d);
    },
    iFrameReady: function() {
        this.isLoaded = true;
        this.isIframeLoaded = true;
        while (this.iframeQueue.length > 0) {
            var a = this.iframeQueue.pop();
            this.createIframe(a);
        }
    },
    flashPlayers: {},
    createFlash: function(a) {
        this.flashPlayers[a.pluginId] = a;
        var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            b = document.createElement("div");
            a.container.appendChild(b);
            b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' + 'id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim">' + '<param name="movie" value="' + c + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowScriptAccess" value="always" />' + '<param name="allowFullScreen" value="true" />' + "</object>";
        } else {
            a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" ' + 'width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim">' + '<param name="allowScriptAccess" value="always">' + '<param name="wmode" value="transparent">' + "</object>";
        }
    },
    flashReady: function(a) {
        var b = this.flashPlayers[a], c = document.getElementById(a), d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c;
        mejs.MediaPluginBridge.initPlugin(a);
        c.cueVideoById(b.videoId);
        var e = b.containerId + "_callback";
        window[e] = function(a) {
            mejs.YouTubeApi.handleStateChange(a, c, d);
        };
        c.addEventListener("onStateChange", e);
        setInterval(function() {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate");
        }, 250);
        mejs.YouTubeApi.createEvent(c, d, "canplay");
    },
    handleStateChange: function(a, b, c) {
        switch (a) {
          case -1:
            c.paused = true;
            c.ended = true;
            mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
            break;

          case 0:
            c.paused = false;
            c.ended = true;
            mejs.YouTubeApi.createEvent(b, c, "ended");
            break;

          case 1:
            c.paused = false;
            c.ended = false;
            mejs.YouTubeApi.createEvent(b, c, "play");
            mejs.YouTubeApi.createEvent(b, c, "playing");
            break;

          case 2:
            c.paused = true;
            c.ended = false;
            mejs.YouTubeApi.createEvent(b, c, "pause");
            break;

          case 3:
            mejs.YouTubeApi.createEvent(b, c, "progress");
            break;

          case 5:
            break;
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady();
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a);
}

window.mejs = mejs;

window.MediaElement = mejs.MediaElement;

(function(a, b, c) {
    "use strict";
    var d = {
        locale: {
            language: "",
            strings: {}
        },
        methods: {}
    };
    d.getLanguage = function() {
        var a = d.locale.language || window.navigator.userLanguage || window.navigator.language;
        return a.substr(0, 2).toLowerCase();
    };
    if (typeof mejsL10n != "undefined") {
        d.locale.language = mejsL10n.language;
    }
    d.methods.checkPlain = function(a) {
        var b, c, d = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        a = String(a);
        for (b in d) {
            if (d.hasOwnProperty(b)) {
                c = new RegExp(b, "g");
                a = a.replace(c, d[b]);
            }
        }
        return a;
    };
    d.methods.t = function(a, b) {
        if (d.locale.strings && d.locale.strings[b.context] && d.locale.strings[b.context][a]) {
            a = d.locale.strings[b.context][a];
        }
        return d.methods.checkPlain(a);
    };
    d.t = function(a, b) {
        if (typeof a === "string" && a.length > 0) {
            var c = d.getLanguage();
            b = b || {
                context: c
            };
            return d.methods.t(a, b);
        } else {
            throw {
                name: "InvalidArgumentException",
                message: "First argument is either not a string or empty."
            };
        }
    };
    b.i18n = d;
})(document, mejs);

(function(a, b) {
    "use strict";
    if (typeof mejsL10n != "undefined") {
        a[mejsL10n.language] = mejsL10n.strings;
    }
})(mejs.i18n.locale.strings);

(function(a, b) {
    "use strict";
    if (typeof a.de === "undefined") {
        a.de = {
            Fullscreen: "Vollbild",
            "Go Fullscreen": "Vollbild an",
            "Turn off Fullscreen": "Vollbild aus",
            Close: "Schließen"
        };
    }
})(mejs.i18n.locale.strings);

(function(a, b) {
    "use strict";
    if (typeof a.zh === "undefined") {
        a.zh = {
            Fullscreen: "全螢幕",
            "Go Fullscreen": "全屏模式",
            "Turn off Fullscreen": "退出全屏模式",
            Close: "關閉"
        };
    }
})(mejs.i18n.locale.strings);

if (typeof jQuery != "undefined") {
    mejs.$ = jQuery;
} else if (typeof ender != "undefined") {
    mejs.$ = ender;
}

(function(a) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: false,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function(a) {
            return a.duration * .05;
        },
        defaultSeekForwardInterval: function(a) {
            return a.duration * .05;
        },
        setDimensions: true,
        audioWidth: -1,
        audioHeight: -1,
        startVolume: .8,
        loop: false,
        autoRewind: true,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        hideVideoControlsOnLoad: false,
        clickToPlayPause: true,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: [ "playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen" ],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [ {
            keys: [ 32, 179 ],
            action: function(a, b) {
                if (b.paused || b.ended) {
                    a.play();
                } else {
                    a.pause();
                }
            }
        }, {
            keys: [ 38 ],
            action: function(a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block");
                if (a.isVideo) {
                    a.showControls();
                    a.startControlsTimer();
                }
                var c = Math.min(b.volume + .1, 1);
                b.setVolume(c);
            }
        }, {
            keys: [ 40 ],
            action: function(a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block");
                if (a.isVideo) {
                    a.showControls();
                    a.startControlsTimer();
                }
                var c = Math.max(b.volume - .1, 0);
                b.setVolume(c);
            }
        }, {
            keys: [ 37, 227 ],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer();
                    }
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c);
                }
            }
        }, {
            keys: [ 39, 228 ],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer();
                    }
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c);
                }
            }
        }, {
            keys: [ 70 ],
            action: function(a, b) {
                if (typeof a.enterFullScreen != "undefined") {
                    if (a.isFullScreen) {
                        a.exitFullScreen();
                    } else {
                        a.enterFullScreen();
                    }
                }
            }
        }, {
            keys: [ 77 ],
            action: function(a, b) {
                a.container.find(".mejs-volume-slider").css("display", "block");
                if (a.isVideo) {
                    a.showControls();
                    a.startControlsTimer();
                }
                if (a.media.muted) {
                    a.setMuted(false);
                } else {
                    a.setMuted(true);
                }
            }
        } ]
    };
    mejs.mepIndex = 0;
    mejs.players = {};
    mejs.MediaElementPlayer = function(b, c) {
        if (!(this instanceof mejs.MediaElementPlayer)) {
            return new mejs.MediaElementPlayer(b, c);
        }
        var d = this;
        d.$media = d.$node = a(b);
        d.node = d.media = d.$media[0];
        if (typeof d.node.player != "undefined") {
            return d.node.player;
        } else {
            d.node.player = d;
        }
        if (typeof c == "undefined") {
            c = d.$node.data("mejsoptions");
        }
        d.options = a.extend({}, mejs.MepDefaults, c);
        d.id = "mep_" + mejs.mepIndex++;
        mejs.players[d.id] = d;
        d.init();
        return d;
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function() {
            var b = this, c = mejs.MediaFeatures, d = a.extend(true, {}, b.options, {
                success: function(a, c) {
                    b.meReady(a, c);
                },
                error: function(a) {
                    b.handleError(a);
                }
            }), e = b.media.tagName.toLowerCase();
            b.isDynamic = e !== "audio" && e !== "video";
            if (b.isDynamic) {
                b.isVideo = b.options.isVideo;
            } else {
                b.isVideo = e !== "audio" && b.options.isVideo;
            }
            if (c.isiPad && b.options.iPadUseNativeControls || c.isiPhone && b.options.iPhoneUseNativeControls) {
                b.$media.attr("controls", "controls");
                if (c.isiPad && b.media.getAttribute("autoplay") !== null) {
                    b.play();
                }
            } else if (c.isAndroid && b.options.AndroidUseNativeControls) {} else {
                b.$media.removeAttr("controls");
                b.container = a('<div id="' + b.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '">' + '<div class="mejs-inner">' + '<div class="mejs-mediaelement"></div>' + '<div class="mejs-layers"></div>' + '<div class="mejs-controls"></div>' + '<div class="mejs-clear"></div>' + "</div>" + "</div>").addClass(b.$media[0].className).insertBefore(b.$media);
                b.container.addClass((c.isAndroid ? "mejs-android " : "") + (c.isiOS ? "mejs-ios " : "") + (c.isiPad ? "mejs-ipad " : "") + (c.isiPhone ? "mejs-iphone " : "") + (b.isVideo ? "mejs-video " : "mejs-audio "));
                if (c.isiOS) {
                    var f = b.$media.clone();
                    b.container.find(".mejs-mediaelement").append(f);
                    b.$media.remove();
                    b.$node = b.$media = f;
                    b.node = b.media = f[0];
                } else {
                    b.container.find(".mejs-mediaelement").append(b.$media);
                }
                b.controls = b.container.find(".mejs-controls");
                b.layers = b.container.find(".mejs-layers");
                var g = b.isVideo ? "video" : "audio", h = g.substring(0, 1).toUpperCase() + g.substring(1);
                if (b.options[g + "Width"] > 0 || b.options[g + "Width"].toString().indexOf("%") > -1) {
                    b.width = b.options[g + "Width"];
                } else if (b.media.style.width !== "" && b.media.style.width !== null) {
                    b.width = b.media.style.width;
                } else if (b.media.getAttribute("width") !== null) {
                    b.width = b.$media.attr("width");
                } else {
                    b.width = b.options["default" + h + "Width"];
                }
                if (b.options[g + "Height"] > 0 || b.options[g + "Height"].toString().indexOf("%") > -1) {
                    b.height = b.options[g + "Height"];
                } else if (b.media.style.height !== "" && b.media.style.height !== null) {
                    b.height = b.media.style.height;
                } else if (b.$media[0].getAttribute("height") !== null) {
                    b.height = b.$media.attr("height");
                } else {
                    b.height = b.options["default" + h + "Height"];
                }
                b.setPlayerSize(b.width, b.height);
                d.pluginWidth = b.width;
                d.pluginHeight = b.height;
            }
            mejs.MediaElement(b.$media[0], d);
            if (typeof b.container != "undefined" && b.controlsAreVisible) {
                b.container.trigger("controlsshown");
            }
        },
        showControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (b.controlsAreVisible) return;
            if (a) {
                b.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function() {
                    b.controlsAreVisible = true;
                    b.container.trigger("controlsshown");
                });
                b.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, function() {
                    b.controlsAreVisible = true;
                });
            } else {
                b.controls.css("visibility", "visible").css("display", "block");
                b.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                b.controlsAreVisible = true;
                b.container.trigger("controlsshown");
            }
            b.setControlsSize();
        },
        hideControls: function(b) {
            var c = this;
            b = typeof b == "undefined" || b;
            if (!c.controlsAreVisible || c.options.alwaysShowControls) return;
            if (b) {
                c.controls.stop(true, true).fadeOut(200, function() {
                    a(this).css("visibility", "hidden").css("display", "block");
                    c.controlsAreVisible = false;
                    c.container.trigger("controlshidden");
                });
                c.container.find(".mejs-control").stop(true, true).fadeOut(200, function() {
                    a(this).css("visibility", "hidden").css("display", "block");
                });
            } else {
                c.controls.css("visibility", "hidden").css("display", "block");
                c.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                c.controlsAreVisible = false;
                c.container.trigger("controlshidden");
            }
        },
        controlsTimer: null,
        startControlsTimer: function(a) {
            var b = this;
            a = typeof a != "undefined" ? a : 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function() {
                b.hideControls();
                b.killControlsTimer("hide");
            }, a);
        },
        killControlsTimer: function(a) {
            var b = this;
            if (b.controlsTimer !== null) {
                clearTimeout(b.controlsTimer);
                delete b.controlsTimer;
                b.controlsTimer = null;
            }
        },
        controlsEnabled: true,
        disableControls: function() {
            var a = this;
            a.killControlsTimer();
            a.hideControls(false);
            this.controlsEnabled = false;
        },
        enableControls: function() {
            var a = this;
            a.showControls(false);
            a.controlsEnabled = true;
        },
        meReady: function(a, b) {
            var c = this, d = mejs.MediaFeatures, e = b.getAttribute("autoplay"), f = !(typeof e == "undefined" || e === null || e === "false"), g, h;
            if (c.created) {
                return;
            } else {
                c.created = true;
            }
            c.media = a;
            c.domNode = b;
            if (!(d.isAndroid && c.options.AndroidUseNativeControls) && !(d.isiPad && c.options.iPadUseNativeControls) && !(d.isiPhone && c.options.iPhoneUseNativeControls)) {
                c.buildposter(c, c.controls, c.layers, c.media);
                c.buildkeyboard(c, c.controls, c.layers, c.media);
                c.buildoverlays(c, c.controls, c.layers, c.media);
                c.findTracks();
                for (g in c.options.features) {
                    h = c.options.features[g];
                    if (c["build" + h]) {
                        try {
                            c["build" + h](c, c.controls, c.layers, c.media);
                        } catch (i) {}
                    }
                }
                c.container.trigger("controlsready");
                c.setPlayerSize(c.width, c.height);
                c.setControlsSize();
                if (c.isVideo) {
                    if (mejs.MediaFeatures.hasTouch) {
                        c.$media.bind("touchstart", function() {
                            if (c.controlsAreVisible) {
                                c.hideControls(false);
                            } else {
                                if (c.controlsEnabled) {
                                    c.showControls(false);
                                }
                            }
                        });
                    } else {
                        c.clickToPlayPauseCallback = function() {
                            if (c.options.clickToPlayPause) {
                                if (c.media.paused) {
                                    c.play();
                                } else {
                                    c.pause();
                                }
                            }
                        };
                        c.media.addEventListener("click", c.clickToPlayPauseCallback, false);
                        c.container.bind("mouseenter mouseover", function() {
                            if (c.controlsEnabled) {
                                if (!c.options.alwaysShowControls) {
                                    c.killControlsTimer("enter");
                                    c.showControls();
                                    c.startControlsTimer(2500);
                                }
                            }
                        }).bind("mousemove", function() {
                            if (c.controlsEnabled) {
                                if (!c.controlsAreVisible) {
                                    c.showControls();
                                }
                                if (!c.options.alwaysShowControls) {
                                    c.startControlsTimer(2500);
                                }
                            }
                        }).bind("mouseleave", function() {
                            if (c.controlsEnabled) {
                                if (!c.media.paused && !c.options.alwaysShowControls) {
                                    c.startControlsTimer(1e3);
                                }
                            }
                        });
                    }
                    if (c.options.hideVideoControlsOnLoad) {
                        c.hideControls(false);
                    }
                    if (f && !c.options.alwaysShowControls) {
                        c.hideControls();
                    }
                    if (c.options.enableAutosize) {
                        c.media.addEventListener("loadedmetadata", function(a) {
                            if (c.options.videoHeight <= 0 && c.domNode.getAttribute("height") === null && !isNaN(a.target.videoHeight)) {
                                c.setPlayerSize(a.target.videoWidth, a.target.videoHeight);
                                c.setControlsSize();
                                c.media.setVideoSize(a.target.videoWidth, a.target.videoHeight);
                            }
                        }, false);
                    }
                }
                a.addEventListener("play", function() {
                    var a;
                    for (a in mejs.players) {
                        var b = mejs.players[a];
                        if (b.id != c.id && c.options.pauseOtherPlayers && !b.paused && !b.ended) {
                            b.pause();
                        }
                        b.hasFocus = false;
                    }
                    c.hasFocus = true;
                }, false);
                c.media.addEventListener("ended", function(a) {
                    if (c.options.autoRewind) {
                        try {
                            c.media.setCurrentTime(0);
                        } catch (b) {}
                    }
                    c.media.pause();
                    if (c.setProgressRail) {
                        c.setProgressRail();
                    }
                    if (c.setCurrentRail) {
                        c.setCurrentRail();
                    }
                    if (c.options.loop) {
                        c.play();
                    } else if (!c.options.alwaysShowControls && c.controlsEnabled) {
                        c.showControls();
                    }
                }, false);
                c.media.addEventListener("loadedmetadata", function(a) {
                    if (c.updateDuration) {
                        c.updateDuration();
                    }
                    if (c.updateCurrent) {
                        c.updateCurrent();
                    }
                    if (!c.isFullScreen) {
                        c.setPlayerSize(c.width, c.height);
                        c.setControlsSize();
                    }
                }, false);
                setTimeout(function() {
                    c.setPlayerSize(c.width, c.height);
                    c.setControlsSize();
                }, 50);
                c.globalBind("resize", function() {
                    if (!(c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen)) {
                        c.setPlayerSize(c.width, c.height);
                    }
                    c.setControlsSize();
                });
                if (c.media.pluginType == "youtube" && c.options.autoplay) {
                    c.container.find(".mejs-overlay-play").hide();
                }
            }
            if (f && a.pluginType == "native") {
                c.play();
            }
            if (c.options.success) {
                if (typeof c.options.success == "string") {
                    window[c.options.success](c.media, c.domNode, c);
                } else {
                    c.options.success(c.media, c.domNode, c);
                }
            }
        },
        handleError: function(a) {
            var b = this;
            b.controls.hide();
            if (b.options.error) {
                b.options.error(a);
            }
        },
        setPlayerSize: function(b, c) {
            var d = this;
            if (!d.options.setDimensions) {
                return false;
            }
            if (typeof b != "undefined") {
                d.width = b;
            }
            if (typeof c != "undefined") {
                d.height = c;
            }
            if (d.height.toString().indexOf("%") > 0 || d.$node.css("max-width") === "100%" || d.$node[0].currentStyle && d.$node[0].currentStyle.maxWidth === "100%") {
                var e = function() {
                    if (d.isVideo) {
                        if (d.media.videoWidth && d.media.videoWidth > 0) {
                            return d.media.videoWidth;
                        } else if (d.media.getAttribute("width") !== null) {
                            return d.media.getAttribute("width");
                        } else {
                            return d.options.defaultVideoWidth;
                        }
                    } else {
                        return d.options.defaultAudioWidth;
                    }
                }();
                var f = function() {
                    if (d.isVideo) {
                        if (d.media.videoHeight && d.media.videoHeight > 0) {
                            return d.media.videoHeight;
                        } else if (d.media.getAttribute("height") !== null) {
                            return d.media.getAttribute("height");
                        } else {
                            return d.options.defaultVideoHeight;
                        }
                    } else {
                        return d.options.defaultAudioHeight;
                    }
                }();
                var g = d.container.parent().closest(":visible").width(), h = d.container.parent().closest(":visible").height(), i = d.isVideo || !d.options.autosizeProgress ? parseInt(g * f / e, 10) : f;
                if (isNaN(i) || h != 0 && i > h) {
                    i = h;
                }
                if (d.container.parent()[0].tagName.toLowerCase() === "body") {
                    g = a(window).width();
                    i = a(window).height();
                }
                if (i != 0 && g != 0) {
                    d.container.width(g).height(i);
                    d.$media.add(d.container.find(".mejs-shim")).width("100%").height("100%");
                    if (d.isVideo) {
                        if (d.media.setVideoSize) {
                            d.media.setVideoSize(g, i);
                        }
                    }
                    d.layers.children(".mejs-layer").width("100%").height("100%");
                }
            } else {
                d.container.width(d.width).height(d.height);
                d.layers.children(".mejs-layer").width(d.width).height(d.height);
            }
            var j = d.layers.find(".mejs-overlay-play"), k = j.find(".mejs-overlay-button");
            j.height(d.container.height() - d.controls.height());
            k.css("margin-top", "-" + (k.height() / 2 - d.controls.height() / 2).toString() + "px");
        },
        setControlsSize: function() {
            var b = this, c = 0, d = 0, e = b.controls.find(".mejs-time-rail"), f = b.controls.find(".mejs-time-total"), g = b.controls.find(".mejs-time-current"), h = b.controls.find(".mejs-time-loaded"), i = e.siblings(), j = i.last(), k = null;
            if (!b.container.is(":visible") || !e.length || !e.is(":visible")) {
                return;
            }
            if (b.options && !b.options.autosizeProgress) {
                d = parseInt(e.css("width"));
            }
            if (d === 0 || !d) {
                i.each(function() {
                    var b = a(this);
                    if (b.css("position") != "absolute" && b.is(":visible")) {
                        c += a(this).outerWidth(true);
                    }
                });
                d = b.controls.width() - c - (e.outerWidth(true) - e.width());
            }
            do {
                e.width(d);
                f.width(d - (f.outerWidth(true) - f.width()));
                if (j.css("position") != "absolute") {
                    k = j.position();
                    d--;
                }
            } while (k != null && k.top > 0 && d > 0);
            if (b.setProgressRail) b.setProgressRail();
            if (b.setCurrentRail) b.setCurrentRail();
        },
        buildposter: function(b, c, d, e) {
            var f = this, g = a('<div class="mejs-poster mejs-layer">' + "</div>").appendTo(d), h = b.$media.attr("poster");
            if (b.options.poster !== "") {
                h = b.options.poster;
            }
            if (h !== "" && h != null) {
                f.setPoster(h);
            } else {
                g.hide();
            }
            e.addEventListener("play", function() {
                g.hide();
            }, false);
            if (b.options.showPosterWhenEnded && b.options.autoRewind) {
                e.addEventListener("ended", function() {
                    g.show();
                }, false);
            }
        },
        setPoster: function(b) {
            var c = this, d = c.container.find(".mejs-poster"), e = d.find("img");
            if (e.length == 0) {
                e = a('<img width="100%" height="100%" />').appendTo(d);
            }
            e.attr("src", b);
            d.css({
                "background-image": "url(" + b + ")"
            });
        },
        buildoverlays: function(b, c, d, e) {
            var f = this;
            if (!b.isVideo) return;
            var g = a('<div class="mejs-overlay mejs-layer">' + '<div class="mejs-overlay-loading"><span></span></div>' + "</div>").hide().appendTo(d), h = a('<div class="mejs-overlay mejs-layer">' + '<div class="mejs-overlay-error"></div>' + "</div>").hide().appendTo(d), i = a('<div class="mejs-overlay mejs-layer mejs-overlay-play">' + '<div class="mejs-overlay-button"></div>' + "</div>").appendTo(d).bind("click", function() {
                if (f.options.clickToPlayPause) {
                    if (e.paused) {
                        e.play();
                    }
                }
            });
            e.addEventListener("play", function() {
                i.hide();
                g.hide();
                c.find(".mejs-time-buffering").hide();
                h.hide();
            }, false);
            e.addEventListener("playing", function() {
                i.hide();
                g.hide();
                c.find(".mejs-time-buffering").hide();
                h.hide();
            }, false);
            e.addEventListener("seeking", function() {
                g.show();
                c.find(".mejs-time-buffering").show();
            }, false);
            e.addEventListener("seeked", function() {
                g.hide();
                c.find(".mejs-time-buffering").hide();
            }, false);
            e.addEventListener("pause", function() {
                if (!mejs.MediaFeatures.isiPhone) {
                    i.show();
                }
            }, false);
            e.addEventListener("waiting", function() {
                g.show();
                c.find(".mejs-time-buffering").show();
            }, false);
            e.addEventListener("loadeddata", function() {
                g.show();
                c.find(".mejs-time-buffering").show();
            }, false);
            e.addEventListener("canplay", function() {
                g.hide();
                c.find(".mejs-time-buffering").hide();
            }, false);
            e.addEventListener("error", function() {
                g.hide();
                c.find(".mejs-time-buffering").hide();
                h.show();
                h.find("mejs-overlay-error").html("Error loading this resource");
            }, false);
            e.addEventListener("keydown", function(a) {
                f.onkeydown(b, e, a);
            }, false);
        },
        buildkeyboard: function(b, c, d, e) {
            var f = this;
            f.globalBind("keydown", function(a) {
                return f.onkeydown(b, e, a);
            });
            f.globalBind("click", function(c) {
                b.hasFocus = a(c.target).closest(".mejs-container").length != 0;
            });
        },
        onkeydown: function(a, b, c) {
            if (a.hasFocus && a.options.enableKeyboard) {
                for (var d = 0, e = a.options.keyActions.length; d < e; d++) {
                    var f = a.options.keyActions[d];
                    for (var g = 0, h = f.keys.length; g < h; g++) {
                        if (c.keyCode == f.keys[g]) {
                            if (typeof c.preventDefault == "function") c.preventDefault();
                            f.action(a, b, c.keyCode);
                            return false;
                        }
                    }
                }
            }
            return true;
        },
        findTracks: function() {
            var b = this, c = b.$media.find("track");
            b.tracks = [];
            c.each(function(c, d) {
                d = a(d);
                b.tracks.push({
                    srclang: d.attr("srclang") ? d.attr("srclang").toLowerCase() : "",
                    src: d.attr("src"),
                    kind: d.attr("kind"),
                    label: d.attr("label") || "",
                    entries: [],
                    isLoaded: false
                });
            });
        },
        changeSkin: function(a) {
            this.container[0].className = "mejs-container " + a;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize();
        },
        play: function() {
            this.load();
            this.media.play();
        },
        pause: function() {
            try {
                this.media.pause();
            } catch (a) {}
        },
        load: function() {
            if (!this.isLoaded) {
                this.media.load();
            }
            this.isLoaded = true;
        },
        setMuted: function(a) {
            this.media.setMuted(a);
        },
        setCurrentTime: function(a) {
            this.media.setCurrentTime(a);
        },
        getCurrentTime: function() {
            return this.media.currentTime;
        },
        setVolume: function(a) {
            this.media.setVolume(a);
        },
        getVolume: function() {
            return this.media.volume;
        },
        setSrc: function(a) {
            this.media.setSrc(a);
        },
        remove: function() {
            var a = this, b, c;
            for (b in a.options.features) {
                c = a.options.features[b];
                if (a["clean" + c]) {
                    try {
                        a["clean" + c](a);
                    } catch (d) {}
                }
            }
            if (!a.isDynamic) {
                a.$media.prop("controls", true);
                a.$node.clone().insertBefore(a.container).show();
                a.$node.remove();
            } else {
                a.$node.insertBefore(a.container);
            }
            if (a.media.pluginType !== "native") {
                a.media.remove();
            }
            delete mejs.players[a.id];
            if (typeof a.container == "object") {
                a.container.remove();
            }
            a.globalUnbind();
            delete a.node.player;
        }
    };
    (function() {
        var b = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        function c(c, d) {
            var e = {
                d: [],
                w: []
            };
            a.each((c || "").split(" "), function(a, c) {
                var f = c + "." + d;
                if (f.indexOf(".") === 0) {
                    e.d.push(f);
                    e.w.push(f);
                } else {
                    e[b.test(c) ? "w" : "d"].push(f);
                }
            });
            e.d = e.d.join(" ");
            e.w = e.w.join(" ");
            return e;
        }
        mejs.MediaElementPlayer.prototype.globalBind = function(b, d, e) {
            var f = this;
            b = c(b, f.id);
            if (b.d) a(document).bind(b.d, d, e);
            if (b.w) a(window).bind(b.w, d, e);
        };
        mejs.MediaElementPlayer.prototype.globalUnbind = function(b, d) {
            var e = this;
            b = c(b, e.id);
            if (b.d) a(document).unbind(b.d, d);
            if (b.w) a(window).unbind(b.w, d);
        };
    })();
    if (typeof a != "undefined") {
        a.fn.mediaelementplayer = function(b) {
            if (b === false) {
                this.each(function() {
                    var b = a(this).data("mediaelementplayer");
                    if (b) {
                        b.remove();
                    }
                    a(this).removeData("mediaelementplayer");
                });
            } else {
                this.each(function() {
                    a(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, b));
                });
            }
            return this;
        };
        a(document).ready(function() {
            a(".mejs-player").mediaelementplayer();
        });
    }
    window.MediaElementPlayer = mejs.MediaElementPlayer;
})(mejs.$);

(function(a) {
    a.extend(mejs.MepDefaults, {
        playpauseText: mejs.i18n.t("Play/Pause")
    });
    a.extend(MediaElementPlayer.prototype, {
        buildplaypause: function(b, c, d, e) {
            var f = this, g = a('<div class="mejs-button mejs-playpause-button mejs-play" >' + '<button type="button" aria-controls="' + f.id + '" title="' + f.options.playpauseText + '" aria-label="' + f.options.playpauseText + '"></button>' + "</div>").appendTo(c).click(function(a) {
                a.preventDefault();
                if (e.paused) {
                    e.play();
                } else {
                    e.pause();
                }
                return false;
            });
            e.addEventListener("play", function() {
                g.removeClass("mejs-play").addClass("mejs-pause");
            }, false);
            e.addEventListener("playing", function() {
                g.removeClass("mejs-play").addClass("mejs-pause");
            }, false);
            e.addEventListener("pause", function() {
                g.removeClass("mejs-pause").addClass("mejs-play");
            }, false);
            e.addEventListener("paused", function() {
                g.removeClass("mejs-pause").addClass("mejs-play");
            }, false);
        }
    });
})(mejs.$);

(function(a) {
    a.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildstop: function(b, c, d, e) {
            var f = this, g = a('<div class="mejs-button mejs-stop-button mejs-stop">' + '<button type="button" aria-controls="' + f.id + '" title="' + f.options.stopText + '" aria-label="' + f.options.stopText + '"></button>' + "</div>").appendTo(c).click(function() {
                if (!e.paused) {
                    e.pause();
                }
                if (e.currentTime > 0) {
                    e.setCurrentTime(0);
                    e.pause();
                    c.find(".mejs-time-current").width("0px");
                    c.find(".mejs-time-handle").css("left", "0px");
                    c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    d.find(".mejs-poster").show();
                }
            });
        }
    });
})(mejs.$);

(function(a) {
    a.extend(MediaElementPlayer.prototype, {
        buildprogress: function(b, c, d, e) {
            a('<div class="mejs-time-rail">' + '<span class="mejs-time-total">' + '<span class="mejs-time-buffering"></span>' + '<span class="mejs-time-loaded"></span>' + '<span class="mejs-time-current"></span>' + '<span class="mejs-time-handle"></span>' + '<span class="mejs-time-float">' + '<span class="mejs-time-float-current">00:00</span>' + '<span class="mejs-time-float-corner"></span>' + "</span>" + "</span>" + "</div>").appendTo(c);
            c.find(".mejs-time-buffering").hide();
            var f = this, g = c.find(".mejs-time-total"), h = c.find(".mejs-time-loaded"), i = c.find(".mejs-time-current"), j = c.find(".mejs-time-handle"), k = c.find(".mejs-time-float"), l = c.find(".mejs-time-float-current"), m = function(a) {
                if (a.originalEvent.changedTouches) {
                    var b = a.originalEvent.changedTouches[0].pageX;
                } else {
                    var b = a.pageX;
                }
                var c = g.offset(), d = g.outerWidth(true), f = 0, h = 0, i = 0;
                if (e.duration) {
                    if (b < c.left) {
                        b = c.left;
                    } else if (b > d + c.left) {
                        b = d + c.left;
                    }
                    i = b - c.left;
                    f = i / d;
                    h = f <= .02 ? 0 : f * e.duration;
                    if (n && h !== e.currentTime) {
                        e.setCurrentTime(h);
                    }
                    if (!mejs.MediaFeatures.hasTouch) {
                        k.css("left", i);
                        l.html(mejs.Utility.secondsToTimeCode(h));
                        k.show();
                    }
                }
            }, n = false, o = false;
            g.bind("mousedown touchstart", function(a) {
                if (a.which === 1 || a.which === 0) {
                    n = true;
                    m(a);
                    f.globalBind("mousemove.dur touchmove.dur", function(a) {
                        m(a);
                    });
                    f.globalBind("mouseup.dur touchend.dur", function(a) {
                        n = false;
                        k.hide();
                        f.globalUnbind(".dur");
                    });
                    return false;
                }
            }).bind("mouseenter", function(a) {
                o = true;
                f.globalBind("mousemove.dur", function(a) {
                    m(a);
                });
                if (!mejs.MediaFeatures.hasTouch) {
                    k.show();
                }
            }).bind("mouseleave", function(a) {
                o = false;
                if (!n) {
                    f.globalUnbind(".dur");
                    k.hide();
                }
            });
            e.addEventListener("progress", function(a) {
                b.setProgressRail(a);
                b.setCurrentRail(a);
            }, false);
            e.addEventListener("timeupdate", function(a) {
                b.setProgressRail(a);
                b.setCurrentRail(a);
            }, false);
            f.loaded = h;
            f.total = g;
            f.current = i;
            f.handle = j;
        },
        setProgressRail: function(a) {
            var b = this, c = a != undefined ? a.target : b.media, d = null;
            if (c && c.buffered && c.buffered.length > 0 && c.buffered.end && c.duration) {
                d = c.buffered.end(0) / c.duration;
            } else if (c && c.bytesTotal != undefined && c.bytesTotal > 0 && c.bufferedBytes != undefined) {
                d = c.bufferedBytes / c.bytesTotal;
            } else if (a && a.lengthComputable && a.total != 0) {
                d = a.loaded / a.total;
            }
            if (d !== null) {
                d = Math.min(1, Math.max(0, d));
                if (b.loaded && b.total) {
                    b.loaded.width(b.total.width() * d);
                }
            }
        },
        setCurrentRail: function() {
            var a = this;
            if (a.media.currentTime != undefined && a.media.duration) {
                if (a.total && a.handle) {
                    var b = Math.round(a.total.width() * a.media.currentTime / a.media.duration), c = b - Math.round(a.handle.outerWidth(true) / 2);
                    a.current.width(b);
                    a.handle.css("left", c);
                }
            }
        }
    });
})(mejs.$);

(function(a) {
    a.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildcurrent: function(b, c, d, e) {
            var f = this;
            a('<div class="mejs-time">' + '<span class="mejs-currenttime">' + (b.options.alwaysShowHours ? "00:" : "") + (b.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span>" + "</div>").appendTo(c);
            f.currenttime = f.controls.find(".mejs-currenttime");
            e.addEventListener("timeupdate", function() {
                b.updateCurrent();
            }, false);
        },
        buildduration: function(b, c, d, e) {
            var f = this;
            if (c.children().last().find(".mejs-currenttime").length > 0) {
                a(f.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (f.options.duration > 0 ? mejs.Utility.secondsToTimeCode(f.options.duration, f.options.alwaysShowHours || f.media.duration > 3600, f.options.showTimecodeFrameCount, f.options.framesPerSecond || 25) : (b.options.alwaysShowHours ? "00:" : "") + (b.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(c.find(".mejs-time"));
            } else {
                c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                a('<div class="mejs-time mejs-duration-container">' + '<span class="mejs-duration">' + (f.options.duration > 0 ? mejs.Utility.secondsToTimeCode(f.options.duration, f.options.alwaysShowHours || f.media.duration > 3600, f.options.showTimecodeFrameCount, f.options.framesPerSecond || 25) : (b.options.alwaysShowHours ? "00:" : "") + (b.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>" + "</div>").appendTo(c);
            }
            f.durationD = f.controls.find(".mejs-duration");
            e.addEventListener("timeupdate", function() {
                b.updateDuration();
            }, false);
        },
        updateCurrent: function() {
            var a = this;
            if (a.currenttime) {
                a.currenttime.html(mejs.Utility.secondsToTimeCode(a.media.currentTime, a.options.alwaysShowHours || a.media.duration > 3600, a.options.showTimecodeFrameCount, a.options.framesPerSecond || 25));
            }
        },
        updateDuration: function() {
            var a = this;
            a.container.toggleClass("mejs-long-video", a.media.duration > 3600);
            if (a.durationD && (a.options.duration > 0 || a.media.duration)) {
                a.durationD.html(mejs.Utility.secondsToTimeCode(a.options.duration > 0 ? a.options.duration : a.media.duration, a.options.alwaysShowHours, a.options.showTimecodeFrameCount, a.options.framesPerSecond || 25));
            }
        }
    });
})(mejs.$);

(function(a) {
    a.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildvolume: function(b, c, d, e) {
            if ((mejs.MediaFeatures.isAndroid || mejs.MediaFeatures.isiOS) && this.options.hideVolumeOnTouchDevices) return;
            var f = this, g = f.isVideo ? f.options.videoVolume : f.options.audioVolume, h = g == "horizontal" ? a('<div class="mejs-button mejs-volume-button mejs-mute">' + '<button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button>' + "</div>" + '<div class="mejs-horizontal-volume-slider">' + '<div class="mejs-horizontal-volume-total"></div>' + '<div class="mejs-horizontal-volume-current"></div>' + '<div class="mejs-horizontal-volume-handle"></div>' + "</div>").appendTo(c) : a('<div class="mejs-button mejs-volume-button mejs-mute">' + '<button type="button" aria-controls="' + f.id + '" title="' + f.options.muteText + '" aria-label="' + f.options.muteText + '"></button>' + '<div class="mejs-volume-slider">' + '<div class="mejs-volume-total"></div>' + '<div class="mejs-volume-current"></div>' + '<div class="mejs-volume-handle"></div>' + "</div>" + "</div>").appendTo(c), i = f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"), j = f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"), k = f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"), l = f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"), m = function(a, b) {
                if (!i.is(":visible") && typeof b == "undefined") {
                    i.show();
                    m(a, true);
                    i.hide();
                    return;
                }
                a = Math.max(0, a);
                a = Math.min(a, 1);
                if (a == 0) {
                    h.removeClass("mejs-mute").addClass("mejs-unmute");
                } else {
                    h.removeClass("mejs-unmute").addClass("mejs-mute");
                }
                if (g == "vertical") {
                    var c = j.height(), d = j.position(), e = c - c * a;
                    l.css("top", Math.round(d.top + e - l.height() / 2));
                    k.height(c - e);
                    k.css("top", d.top + e);
                } else {
                    var f = j.width(), d = j.position(), n = f * a;
                    l.css("left", Math.round(d.left + n - l.width() / 2));
                    k.width(Math.round(n));
                }
            }, n = function(a) {
                var b = null, c = j.offset();
                if (g == "vertical") {
                    var d = j.height(), f = parseInt(j.css("top").replace(/px/, ""), 10), h = a.pageY - c.top;
                    b = (d - h) / d;
                    if (c.top == 0 || c.left == 0) return;
                } else {
                    var i = j.width(), k = a.pageX - c.left;
                    b = k / i;
                }
                b = Math.max(0, b);
                b = Math.min(b, 1);
                m(b);
                if (b == 0) {
                    e.setMuted(true);
                } else {
                    e.setMuted(false);
                }
                e.setVolume(b);
            }, o = false, p = false;
            h.hover(function() {
                i.show();
                p = true;
            }, function() {
                p = false;
                if (!o && g == "vertical") {
                    i.hide();
                }
            });
            i.bind("mouseover", function() {
                p = true;
            }).bind("mousedown", function(a) {
                n(a);
                f.globalBind("mousemove.vol", function(a) {
                    n(a);
                });
                f.globalBind("mouseup.vol", function() {
                    o = false;
                    f.globalUnbind(".vol");
                    if (!p && g == "vertical") {
                        i.hide();
                    }
                });
                o = true;
                return false;
            });
            h.find("button").click(function() {
                e.setMuted(!e.muted);
            });
            e.addEventListener("volumechange", function(a) {
                if (!o) {
                    if (e.muted) {
                        m(0);
                        h.removeClass("mejs-mute").addClass("mejs-unmute");
                    } else {
                        m(e.volume);
                        h.removeClass("mejs-unmute").addClass("mejs-mute");
                    }
                }
            }, false);
            if (f.container.is(":visible")) {
                m(b.options.startVolume);
                if (b.options.startVolume === 0) {
                    e.setMuted(true);
                }
                if (e.pluginType === "native") {
                    e.setVolume(b.options.startVolume);
                }
            }
        }
    });
})(mejs.$);

(function(a) {
    a.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function() {
            return "";
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    });
    a.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        isInIframe: false,
        buildfullscreen: function(b, c, d, e) {
            if (!b.isVideo) return;
            b.isInIframe = window.location != window.parent.location;
            if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                var f = function(a) {
                    if (b.isFullScreen) {
                        if (mejs.MediaFeatures.isFullScreen()) {
                            b.isNativeFullScreen = true;
                            b.setControlsSize();
                        } else {
                            b.isNativeFullScreen = false;
                            b.exitFullScreen();
                        }
                    }
                };
                b.globalBind(mejs.MediaFeatures.fullScreenEventName, f);
            }
            var g = this, h = 0, i = 0, j = b.container, k = a('<div class="mejs-button mejs-fullscreen-button">' + '<button type="button" aria-controls="' + g.id + '" title="' + g.options.fullscreenText + '" aria-label="' + g.options.fullscreenText + '"></button>' + "</div>").appendTo(c);
            if (g.media.pluginType === "native" || !g.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) {
                k.click(function() {
                    var a = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || b.isFullScreen;
                    if (a) {
                        b.exitFullScreen();
                    } else {
                        b.enterFullScreen();
                    }
                });
            } else {
                var l = null, m = function() {
                    var a = document.createElement("x"), b = document.documentElement, c = window.getComputedStyle, d;
                    if (!("pointerEvents" in a.style)) {
                        return false;
                    }
                    a.style.pointerEvents = "auto";
                    a.style.pointerEvents = "x";
                    b.appendChild(a);
                    d = c && c(a, "").pointerEvents === "auto";
                    b.removeChild(a);
                    return !!d;
                }();
                if (m && !mejs.MediaFeatures.isOpera) {
                    var n = false, o = function() {
                        if (n) {
                            for (var a in p) {
                                p[a].hide();
                            }
                            k.css("pointer-events", "");
                            g.controls.css("pointer-events", "");
                            g.media.removeEventListener("click", g.clickToPlayPauseCallback);
                            n = false;
                        }
                    }, p = {}, q = [ "top", "left", "right", "bottom" ], r, s, t = function() {
                        var a = k.offset().left - g.container.offset().left, b = k.offset().top - g.container.offset().top, c = k.outerWidth(true), d = k.outerHeight(true), e = g.container.width(), f = g.container.height();
                        for (r in p) {
                            p[r].css({
                                position: "absolute",
                                top: 0,
                                left: 0
                            });
                        }
                        p["top"].width(e).height(b);
                        p["left"].width(a).height(d).css({
                            top: b
                        });
                        p["right"].width(e - a - c).height(d).css({
                            top: b,
                            left: a + c
                        });
                        p["bottom"].width(e).height(f - d - b).css({
                            top: b + d
                        });
                    };
                    g.globalBind("resize", function() {
                        t();
                    });
                    for (r = 0, s = q.length; r < s; r++) {
                        p[q[r]] = a('<div class="mejs-fullscreen-hover" />').appendTo(g.container).mouseover(o).hide();
                    }
                    k.on("mouseover", function() {
                        if (!g.isFullScreen) {
                            var a = k.offset(), c = b.container.offset();
                            e.positionFullscreenButton(a.left - c.left, a.top - c.top, false);
                            k.css("pointer-events", "none");
                            g.controls.css("pointer-events", "none");
                            g.media.addEventListener("click", g.clickToPlayPauseCallback);
                            for (r in p) {
                                p[r].show();
                            }
                            t();
                            n = true;
                        }
                    });
                    e.addEventListener("fullscreenchange", function(a) {
                        g.isFullScreen = !g.isFullScreen;
                        if (g.isFullScreen) {
                            g.media.removeEventListener("click", g.clickToPlayPauseCallback);
                        } else {
                            g.media.addEventListener("click", g.clickToPlayPauseCallback);
                        }
                        o();
                    });
                    g.globalBind("mousemove", function(a) {
                        if (n) {
                            var b = k.offset();
                            if (a.pageY < b.top || a.pageY > b.top + k.outerHeight(true) || a.pageX < b.left || a.pageX > b.left + k.outerWidth(true)) {
                                k.css("pointer-events", "");
                                g.controls.css("pointer-events", "");
                                n = false;
                            }
                        }
                    });
                } else {
                    k.on("mouseover", function() {
                        if (l !== null) {
                            clearTimeout(l);
                            delete l;
                        }
                        var a = k.offset(), c = b.container.offset();
                        e.positionFullscreenButton(a.left - c.left, a.top - c.top, true);
                    }).on("mouseout", function() {
                        if (l !== null) {
                            clearTimeout(l);
                            delete l;
                        }
                        l = setTimeout(function() {
                            e.hideFullscreenButton();
                        }, 1500);
                    });
                }
            }
            b.fullscreenBtn = k;
            g.globalBind("keydown", function(a) {
                if ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || g.isFullScreen) && a.keyCode == 27) {
                    b.exitFullScreen();
                }
            });
        },
        cleanfullscreen: function(a) {
            a.exitFullScreen();
        },
        containerSizeTimeout: null,
        enterFullScreen: function() {
            var b = this;
            if (b.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || b.options.usePluginFullScreen)) {
                return;
            }
            a(document.documentElement).addClass("mejs-fullscreen");
            normalHeight = b.container.height();
            normalWidth = b.container.width();
            if (b.media.pluginType === "native") {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    mejs.MediaFeatures.requestFullScreen(b.container[0]);
                    if (b.isInIframe) {
                        setTimeout(function d() {
                            if (b.isNativeFullScreen) {
                                var c = window["devicePixelRatio"] || 1;
                                var e = .002;
                                var f = c * a(window).width();
                                var g = screen.width;
                                var h = Math.abs(g - f);
                                var i = g * e;
                                if (h > i) {
                                    b.exitFullScreen();
                                } else {
                                    setTimeout(d, 500);
                                }
                            }
                        }, 500);
                    }
                } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                    b.media.webkitEnterFullscreen();
                    return;
                }
            }
            if (b.isInIframe) {
                var c = b.options.newWindowCallback(this);
                if (c !== "") {
                    if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        b.pause();
                        window.open(c, b.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                        return;
                    } else {
                        setTimeout(function() {
                            if (!b.isNativeFullScreen) {
                                b.pause();
                                window.open(c, b.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            }
                        }, 250);
                    }
                }
            }
            b.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
            b.containerSizeTimeout = setTimeout(function() {
                b.container.css({
                    width: "100%",
                    height: "100%"
                });
                b.setControlsSize();
            }, 500);
            if (b.media.pluginType === "native") {
                b.$media.width("100%").height("100%");
            } else {
                b.container.find(".mejs-shim").width("100%").height("100%");
                b.media.setVideoSize(a(window).width(), a(window).height());
            }
            b.layers.children("div").width("100%").height("100%");
            if (b.fullscreenBtn) {
                b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
            }
            b.setControlsSize();
            b.isFullScreen = true;
            b.container.find(".mejs-captions-text").css("font-size", screen.width / b.width * 1 * 100 + "%");
            b.container.find(".mejs-captions-position").css("bottom", "45px");
        },
        exitFullScreen: function() {
            var b = this;
            clearTimeout(b.containerSizeTimeout);
            if (b.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) {
                b.media.setFullscreen(false);
                return;
            }
            if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || b.isFullScreen)) {
                mejs.MediaFeatures.cancelFullScreen();
            }
            a(document.documentElement).removeClass("mejs-fullscreen");
            b.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
            if (b.media.pluginType === "native") {
                b.$media.width(normalWidth).height(normalHeight);
            } else {
                b.container.find(".mejs-shim").width(normalWidth).height(normalHeight);
                b.media.setVideoSize(normalWidth, normalHeight);
            }
            b.layers.children("div").width(normalWidth).height(normalHeight);
            b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
            b.setControlsSize();
            b.isFullScreen = false;
            b.container.find(".mejs-captions-text").css("font-size", "");
            b.container.find(".mejs-captions-position").css("bottom", "");
        }
    });
})(mejs.$);

(function(a) {
    a.extend(mejs.MepDefaults, {
        speeds: [ "1.50", "1.25", "1.00", "0.75" ],
        defaultSpeed: "1.00"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildspeed: function(b, c, d, e) {
            var f = this;
            if (f.media.pluginType == "native") {
                var g = '<div class="mejs-button mejs-speed-button"><button type="button">' + f.options.defaultSpeed + 'x</button><div class="mejs-speed-selector"><ul>';
                var h, i;
                if (a.inArray(f.options.defaultSpeed, f.options.speeds) === -1) {
                    f.options.speeds.push(f.options.defaultSpeed);
                }
                f.options.speeds.sort(function(a, b) {
                    return parseFloat(b) - parseFloat(a);
                });
                for (h = 0; h < f.options.speeds.length; h++) {
                    g += '<li><input type="radio" name="speed" value="' + f.options.speeds[h] + '" id="' + f.options.speeds[h] + '" ';
                    if (f.options.speeds[h] == f.options.defaultSpeed) {
                        g += "checked=true ";
                        g += '/><label for="' + f.options.speeds[h] + '" class="mejs-speed-selected">' + f.options.speeds[h] + "x</label></li>";
                    } else {
                        g += '/><label for="' + f.options.speeds[h] + '">' + f.options.speeds[h] + "x</label></li>";
                    }
                }
                g += "</ul></div></div>";
                b.speedButton = a(g).appendTo(c);
                b.playbackspeed = f.options.defaultSpeed;
                b.speedButton.on("click", "input[type=radio]", function() {
                    b.playbackspeed = a(this).attr("value");
                    e.playbackRate = parseFloat(b.playbackspeed);
                    b.speedButton.find("button").text(b.playbackspeed + "x");
                    b.speedButton.find(".mejs-speed-selected").removeClass("mejs-speed-selected");
                    b.speedButton.find("input[type=radio]:checked").next().addClass("mejs-speed-selected");
                });
                i = b.speedButton.find(".mejs-speed-selector");
                i.height(this.speedButton.find(".mejs-speed-selector ul").outerHeight(true) + b.speedButton.find(".mejs-speed-translations").outerHeight(true));
                i.css("top", -1 * i.height() + "px");
            }
        }
    });
})(mejs.$);

(function(a) {
    a.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        hideCaptionsButtonWhenEmpty: true,
        toggleCaptionsButtonWhenOnlyOne: false,
        slidesSelector: ""
    });
    a.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function(b, c, d, e) {
            if (b.tracks.length === 0) return;
            var f = this, g, h = "";
            if (f.domNode.textTracks) {
                for (g = f.domNode.textTracks.length - 1; g >= 0; g--) {
                    f.domNode.textTracks[g].mode = "hidden";
                }
            }
            b.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide();
            b.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide();
            b.captionsText = b.captions.find(".mejs-captions-text");
            b.captionsButton = a('<div class="mejs-button mejs-captions-button">' + '<button type="button" aria-controls="' + f.id + '" title="' + f.options.tracksText + '" aria-label="' + f.options.tracksText + '"></button>' + '<div class="mejs-captions-selector">' + "<ul>" + "<li>" + '<input type="radio" name="' + b.id + '_captions" id="' + b.id + '_captions_none" value="none" checked="checked" />' + '<label for="' + b.id + '_captions_none">' + mejs.i18n.t("None") + "</label>" + "</li>" + "</ul>" + "</div>" + "</div>").appendTo(c);
            var i = 0;
            for (g = 0; g < b.tracks.length; g++) {
                if (b.tracks[g].kind == "subtitles") {
                    i++;
                }
            }
            if (f.options.toggleCaptionsButtonWhenOnlyOne && i == 1) {
                b.captionsButton.on("click", function() {
                    if (b.selectedTrack === null) {
                        lang = b.tracks[0].srclang;
                    } else {
                        lang = "none";
                    }
                    b.setTrack(lang);
                });
            } else {
                b.captionsButton.on("mouseenter focusin", function() {
                    a(this).find(".mejs-captions-selector").css("visibility", "visible");
                }).on("click", "input[type=radio]", function() {
                    lang = this.value;
                    b.setTrack(lang);
                });
                b.captionsButton.on("mouseleave focusout", function() {
                    a(this).find(".mejs-captions-selector").css("visibility", "hidden");
                });
            }
            if (!b.options.alwaysShowControls) {
                b.container.bind("controlsshown", function() {
                    b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover");
                }).bind("controlshidden", function() {
                    if (!e.paused) {
                        b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover");
                    }
                });
            } else {
                b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover");
            }
            b.trackToLoad = -1;
            b.selectedTrack = null;
            b.isLoadingTrack = false;
            for (g = 0; g < b.tracks.length; g++) {
                if (b.tracks[g].kind == "subtitles") {
                    b.addTrackButton(b.tracks[g].srclang, b.tracks[g].label);
                }
            }
            b.loadNextTrack();
            e.addEventListener("timeupdate", function(a) {
                b.displayCaptions();
            }, false);
            if (b.options.slidesSelector !== "") {
                b.slidesContainer = a(b.options.slidesSelector);
                e.addEventListener("timeupdate", function(a) {
                    b.displaySlides();
                }, false);
            }
            e.addEventListener("loadedmetadata", function(a) {
                b.displayChapters();
            }, false);
            b.container.hover(function() {
                if (b.hasChapters) {
                    b.chapters.css("visibility", "visible");
                    b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight());
                }
            }, function() {
                if (b.hasChapters && !e.paused) {
                    b.chapters.fadeOut(200, function() {
                        a(this).css("visibility", "hidden");
                        a(this).css("display", "block");
                    });
                }
            });
            if (b.node.getAttribute("autoplay") !== null) {
                b.chapters.css("visibility", "hidden");
            }
        },
        setTrack: function(a) {
            var b = this, c;
            if (a == "none") {
                b.selectedTrack = null;
                b.captionsButton.removeClass("mejs-captions-enabled");
            } else {
                for (c = 0; c < b.tracks.length; c++) {
                    if (b.tracks[c].srclang == a) {
                        if (b.selectedTrack === null) b.captionsButton.addClass("mejs-captions-enabled");
                        b.selectedTrack = b.tracks[c];
                        b.captions.attr("lang", b.selectedTrack.srclang);
                        b.displayCaptions();
                        break;
                    }
                }
            }
        },
        loadNextTrack: function() {
            var a = this;
            a.trackToLoad++;
            if (a.trackToLoad < a.tracks.length) {
                a.isLoadingTrack = true;
                a.loadTrack(a.trackToLoad);
            } else {
                a.isLoadingTrack = false;
                a.checkForTracks();
            }
        },
        loadTrack: function(b) {
            var c = this, d = c.tracks[b], e = function() {
                d.isLoaded = true;
                c.enableTrackButton(d.srclang, d.label);
                c.loadNextTrack();
            };
            a.ajax({
                url: d.src,
                dataType: "text",
                success: function(a) {
                    if (typeof a == "string" && /<tt\s+xml/gi.exec(a)) {
                        d.entries = mejs.TrackFormatParser.dfxp.parse(a);
                    } else {
                        d.entries = mejs.TrackFormatParser.webvtt.parse(a);
                    }
                    e();
                    if (d.kind == "chapters") {
                        c.media.addEventListener("play", function(a) {
                            if (c.media.duration > 0) {
                                c.displayChapters(d);
                            }
                        }, false);
                    }
                    if (d.kind == "slides") {
                        c.setupSlides(d);
                    }
                },
                error: function() {
                    c.loadNextTrack();
                }
            });
        },
        enableTrackButton: function(b, c) {
            var d = this;
            if (c === "") {
                c = mejs.language.codes[b] || b;
            }
            d.captionsButton.find("input[value=" + b + "]").prop("disabled", false).siblings("label").html(c);
            if (d.options.startLanguage == b) {
                a("#" + d.id + "_captions_" + b).prop("checked", true).trigger("click");
            }
            d.adjustLanguageBox();
        },
        addTrackButton: function(b, c) {
            var d = this;
            if (c === "") {
                c = mejs.language.codes[b] || b;
            }
            d.captionsButton.find("ul").append(a("<li>" + '<input type="radio" name="' + d.id + '_captions" id="' + d.id + "_captions_" + b + '" value="' + b + '" disabled="disabled" />' + '<label for="' + d.id + "_captions_" + b + '">' + c + " (loading)" + "</label>" + "</li>"));
            d.adjustLanguageBox();
            d.container.find(".mejs-captions-translations option[value=" + b + "]").remove();
        },
        adjustLanguageBox: function() {
            var a = this;
            a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + a.captionsButton.find(".mejs-captions-translations").outerHeight(true));
        },
        checkForTracks: function() {
            var a = this, b = false;
            if (a.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < a.tracks.length; i++) {
                    if (a.tracks[i].kind == "subtitles") {
                        b = true;
                        break;
                    }
                }
                if (!b) {
                    a.captionsButton.hide();
                    a.setControlsSize();
                }
            }
        },
        displayCaptions: function() {
            if (typeof this.tracks == "undefined") return;
            var a = this, b, c = a.selectedTrack;
            if (c !== null && c.isLoaded) {
                for (b = 0; b < c.entries.times.length; b++) {
                    if (a.media.currentTime >= c.entries.times[b].start && a.media.currentTime <= c.entries.times[b].stop) {
                        a.captionsText.html(c.entries.text[b]).attr("class", "mejs-captions-text " + (c.entries.times[b].identifier || ""));
                        a.captions.show().height(0);
                        return;
                    }
                }
                a.captions.hide();
            } else {
                a.captions.hide();
            }
        },
        setupSlides: function(a) {
            var b = this;
            b.slides = a;
            b.slides.entries.imgs = [ b.slides.entries.text.length ];
            b.showSlide(0);
        },
        showSlide: function(b) {
            if (typeof this.tracks == "undefined" || typeof this.slidesContainer == "undefined") {
                return;
            }
            var c = this, d = c.slides.entries.text[b], e = c.slides.entries.imgs[b];
            if (typeof e == "undefined" || typeof e.fadeIn == "undefined") {
                c.slides.entries.imgs[b] = e = a('<img src="' + d + '">').on("load", function() {
                    e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut();
                });
            } else {
                if (!e.is(":visible") && !e.is(":animated")) {
                    e.fadeIn().siblings(":visible").fadeOut();
                }
            }
        },
        displaySlides: function() {
            if (typeof this.slides == "undefined") return;
            var a = this, b = a.slides, c;
            for (c = 0; c < b.entries.times.length; c++) {
                if (a.media.currentTime >= b.entries.times[c].start && a.media.currentTime <= b.entries.times[c].stop) {
                    a.showSlide(c);
                    return;
                }
            }
        },
        displayChapters: function() {
            var a = this, b;
            for (b = 0; b < a.tracks.length; b++) {
                if (a.tracks[b].kind == "chapters" && a.tracks[b].isLoaded) {
                    a.drawChapters(a.tracks[b]);
                    a.hasChapters = true;
                    break;
                }
            }
        },
        drawChapters: function(b) {
            var c = this, d, e, f = 0, g = 0;
            c.chapters.empty();
            for (d = 0; d < b.entries.times.length; d++) {
                e = b.entries.times[d].stop - b.entries.times[d].start;
                f = Math.floor(e / c.media.duration * 100);
                if (f + g > 100 || d == b.entries.times.length - 1 && f + g < 100) {
                    f = 100 - g;
                }
                c.chapters.append(a('<div class="mejs-chapter" rel="' + b.entries.times[d].start + '" style="left: ' + g.toString() + "%;width: " + f.toString() + '%;">' + '<div class="mejs-chapter-block' + (d == b.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '">' + '<span class="ch-title">' + b.entries.text[d] + "</span>" + '<span class="ch-time">' + mejs.Utility.secondsToTimeCode(b.entries.times[d].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(b.entries.times[d].stop) + "</span>" + "</div>" + "</div>"));
                g += f;
            }
            c.chapters.find("div.mejs-chapter").click(function() {
                c.media.setCurrentTime(parseFloat(a(this).attr("rel")));
                if (c.media.paused) {
                    c.media.play();
                }
            });
            c.chapters.show();
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            fl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        webvtt: {
            pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function(b) {
                var c = 0, d = mejs.TrackFormatParser.split2(b, /\r?\n/), e = {
                    text: [],
                    times: []
                }, f, g, h;
                for (;c < d.length; c++) {
                    f = this.pattern_timecode.exec(d[c]);
                    if (f && c < d.length) {
                        if (c - 1 >= 0 && d[c - 1] !== "") {
                            h = d[c - 1];
                        }
                        c++;
                        g = d[c];
                        c++;
                        while (d[c] !== "" && c < d.length) {
                            g = g + "\n" + d[c];
                            c++;
                        }
                        g = a.trim(g).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>");
                        e.text.push(g);
                        e.times.push({
                            identifier: h,
                            start: mejs.Utility.convertSMPTEtoSeconds(f[1]) === 0 ? .2 : mejs.Utility.convertSMPTEtoSeconds(f[1]),
                            stop: mejs.Utility.convertSMPTEtoSeconds(f[3]),
                            settings: f[5]
                        });
                    }
                    h = "";
                }
                return e;
            }
        },
        dfxp: {
            parse: function(b) {
                b = a(b).filter("tt");
                var c = 0, d = b.children("div").eq(0), e = d.find("p"), f = b.find("#" + d.attr("style")), g, h, i, j, k = {
                    text: [],
                    times: []
                };
                if (f.length) {
                    var l = f.removeAttr("id").get(0).attributes;
                    if (l.length) {
                        g = {};
                        for (c = 0; c < l.length; c++) {
                            g[l[c].name.split(":")[1]] = l[c].value;
                        }
                    }
                }
                for (c = 0; c < e.length; c++) {
                    var m;
                    var n = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    if (e.eq(c).attr("begin")) n.start = mejs.Utility.convertSMPTEtoSeconds(e.eq(c).attr("begin"));
                    if (!n.start && e.eq(c - 1).attr("end")) n.start = mejs.Utility.convertSMPTEtoSeconds(e.eq(c - 1).attr("end"));
                    if (e.eq(c).attr("end")) n.stop = mejs.Utility.convertSMPTEtoSeconds(e.eq(c).attr("end"));
                    if (!n.stop && e.eq(c + 1).attr("begin")) n.stop = mejs.Utility.convertSMPTEtoSeconds(e.eq(c + 1).attr("begin"));
                    if (g) {
                        m = "";
                        for (var o in g) {
                            m += o + ":" + g[o] + ";";
                        }
                    }
                    if (m) n.style = m;
                    if (n.start === 0) n.start = .2;
                    k.times.push(n);
                    j = a.trim(e.eq(c).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>");
                    k.text.push(j);
                    if (k.times.start === 0) k.times.start = 2;
                }
                return k;
            }
        },
        split2: function(a, b) {
            return a.split(b);
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) {
        mejs.TrackFormatParser.split2 = function(a, b) {
            var c = [], d = "", e;
            for (e = 0; e < a.length; e++) {
                d += a.substring(e, e + 1);
                if (b.test(d)) {
                    c.push(d.replace(b, ""));
                    d = "";
                }
            }
            c.push(d);
            return c;
        };
    }
})(mejs.$);

(function(a) {
    a.extend(mejs.MepDefaults, {
        contextMenuItems: [ {
            render: function(a) {
                if (typeof a.enterFullScreen == "undefined") return null;
                if (a.isFullScreen) {
                    return mejs.i18n.t("Turn off Fullscreen");
                } else {
                    return mejs.i18n.t("Go Fullscreen");
                }
            },
            click: function(a) {
                if (a.isFullScreen) {
                    a.exitFullScreen();
                } else {
                    a.enterFullScreen();
                }
            }
        }, {
            render: function(a) {
                if (a.media.muted) {
                    return mejs.i18n.t("Unmute");
                } else {
                    return mejs.i18n.t("Mute");
                }
            },
            click: function(a) {
                if (a.media.muted) {
                    a.setMuted(false);
                } else {
                    a.setMuted(true);
                }
            }
        }, {
            isSeparator: true
        }, {
            render: function(a) {
                return mejs.i18n.t("Download Video");
            },
            click: function(a) {
                window.location.href = a.media.currentSrc;
            }
        } ]
    });
    a.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function(b, c, d, e) {
            b.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide();
            b.container.bind("contextmenu", function(a) {
                if (b.isContextMenuEnabled) {
                    a.preventDefault();
                    b.renderContextMenu(a.clientX - 1, a.clientY - 1);
                    return false;
                }
            });
            b.container.bind("click", function() {
                b.contextMenu.hide();
            });
            b.contextMenu.bind("mouseleave", function() {
                b.startContextMenuTimer();
            });
        },
        cleancontextmenu: function(a) {
            a.contextMenu.remove();
        },
        isContextMenuEnabled: true,
        enableContextMenu: function() {
            this.isContextMenuEnabled = true;
        },
        disableContextMenu: function() {
            this.isContextMenuEnabled = false;
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function() {
            var a = this;
            a.killContextMenuTimer();
            a.contextMenuTimer = setTimeout(function() {
                a.hideContextMenu();
                a.killContextMenuTimer();
            }, 750);
        },
        killContextMenuTimer: function() {
            var a = this.contextMenuTimer;
            if (a != null) {
                clearTimeout(a);
                delete a;
                a = null;
            }
        },
        hideContextMenu: function() {
            this.contextMenu.hide();
        },
        renderContextMenu: function(b, c) {
            var d = this, e = "", f = d.options.contextMenuItems;
            for (var g = 0, h = f.length; g < h; g++) {
                if (f[g].isSeparator) {
                    e += '<div class="mejs-contextmenu-separator"></div>';
                } else {
                    var i = f[g].render(d);
                    if (i != null) {
                        e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + Math.random() * 1e6 + '">' + i + "</div>";
                    }
                }
            }
            d.contextMenu.empty().append(a(e)).css({
                top: c,
                left: b
            }).show();
            d.contextMenu.find(".mejs-contextmenu-item").each(function() {
                var b = a(this), c = parseInt(b.data("itemindex"), 10), e = d.options.contextMenuItems[c];
                if (typeof e.show != "undefined") e.show(b, d);
                b.click(function() {
                    if (typeof e.click != "undefined") e.click(d);
                    d.contextMenu.hide();
                });
            });
            setTimeout(function() {
                d.killControlsTimer("rev3");
            }, 100);
        }
    });
})(mejs.$);

(function(a) {
    a.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    });
    a.extend(MediaElementPlayer.prototype, {
        buildpostroll: function(b, c, d, e) {
            var f = this, g = f.container.find('link[rel="postroll"]').attr("href");
            if (typeof g !== "undefined") {
                b.postroll = a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + f.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide();
                f.media.addEventListener("ended", function(c) {
                    a.ajax({
                        dataType: "html",
                        url: g,
                        success: function(a, b) {
                            d.find(".mejs-postroll-layer-content").html(a);
                        }
                    });
                    b.postroll.show();
                }, false);
            }
        }
    });
})(mejs.$);

!function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c;
        this.$tabs = a(b);
        this._accordionVisible = false;
        this._initAccordion();
        this._checkStateOnResize();
        this.checkState();
    };
    b.DEFAULTS = {
        accordionClass: "visible-xs",
        tabsClass: "hidden-xs",
        accordionTemplate: function(a, b, c, d) {
            return '<div class="panel panel-default">' + '   <div class="panel-heading">' + '      <h4 class="panel-title">' + '        <a class="' + (d ? "" : "collapsed") + '" data-toggle="collapse" data-parent="#' + c + '" href="#' + b + '">' + "           " + a + "        </a>" + "      </h4>" + "   </div>" + '   <div id="' + b + '" class="panel-collapse collapse ' + (d ? "in" : "") + '">' + '       <div class="panel-body">' + "       </div>" + "   </div>" + "</div>";
        }
    };
    b.prototype.checkState = function() {
        if (this.$tabs.is(":visible") && this._accordionVisible) {
            this.showTabs();
            this._accordionVisible = false;
        } else if (this.$accordion.is(":visible") && !this._accordionVisible) {
            this.showAccordion();
            this._accordionVisible = true;
        }
    };
    b.prototype.showTabs = function() {
        this.$tabs.trigger(a.Event("show-tabs.bs.tabcollapse"));
        var b = this.$accordion.find(".panel-body");
        b.each(function() {
            var b = a(this), c = b.data("bs.tabcollapse.tabpane");
            c.append(b.children("*").detach());
        });
        this.$accordion.html("");
        this.$tabs.trigger(a.Event("shown-tabs.bs.tabcollapse"));
    };
    b.prototype.showAccordion = function() {
        this.$tabs.trigger(a.Event("show-accordion.bs.tabcollapse"));
        var b = this.$tabs.find('li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]'), c = this;
        b.each(function() {
            var b = a(this);
            c.$accordion.append(c._createAccordionGroup(c.$accordion.attr("id"), b));
        });
        this.$tabs.trigger(a.Event("shown-accordion.bs.tabcollapse"));
    };
    b.prototype._checkStateOnResize = function() {
        var b = this;
        a(window).resize(function() {
            clearTimeout(b._resizeTimeout);
            b._resizeTimeout = setTimeout(function() {
                b.checkState();
            }, 100);
        });
    };
    b.prototype._initAccordion = function() {
        this.$accordion = a('<div class="panel-group ' + this.options.accordionClass + '" id="' + this.$tabs.attr("id") + "-accordion" + '"></div>');
        this.$tabs.after(this.$accordion);
        this.$tabs.addClass(this.options.tabsClass);
        this.$tabs.siblings(".tab-content").addClass(this.options.tabsClass);
    };
    b.prototype._createAccordionGroup = function(b, c) {
        var d = c.attr("data-target"), e = c.parent().is(".active");
        if (!d) {
            d = c.attr("href");
            d = d && d.replace(/.*(?=#[^\s]*$)/, "");
        }
        var f = a(d), g = f.attr("id") + "-collapse", h = a(this.options.accordionTemplate(c.html(), g, b, e));
        h.find(".panel-body").append(f.children("*").detach()).data("bs.tabcollapse.tabpane", f);
        return h;
    };
    a.fn.tabCollapse = function(c) {
        return this.each(function() {
            var d = a(this);
            var e = d.data("bs.tabcollapse");
            var f = a.extend({}, b.DEFAULTS, d.data(), typeof c == "object" && c);
            if (!e) d.data("bs.tabcollapse", new b(this, f));
        });
    };
    a.fn.tabCollapse.Constructor = b;
}(window.jQuery);

(function(a) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], a);
    } else {
        a(jQuery);
    }
})(function(a) {
    a.ui = a.ui || {};
    a.extend(a.ui, {
        version: "1.11.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    a.fn.extend({
        scrollParent: function(b) {
            var c = this.css("position"), d = c === "absolute", e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/, f = this.parents().filter(function() {
                var b = a(this);
                if (d && b.css("position") === "static") {
                    return false;
                }
                return e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"));
            }).eq(0);
            return c === "fixed" || !f.length ? a(this[0].ownerDocument || document) : f;
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    if (!this.id) {
                        this.id = "ui-id-" + ++a;
                    }
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                if (/^ui-id-\d+$/.test(this.id)) {
                    a(this).removeAttr("id");
                }
            });
        }
    });
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        if ("area" === h) {
            e = b.parentNode;
            f = e.name;
            if (!b.href || !f || e.nodeName.toLowerCase() !== "map") {
                return false;
            }
            g = a("img[usemap='#" + f + "']")[0];
            return !!g && c(g);
        }
        return (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b);
    }
    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return a.css(this, "visibility") === "hidden";
        }).length;
    }
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b);
            };
        }) : function(b, c, d) {
            return !!a.data(b, d[3]);
        },
        focusable: function(c) {
            return b(c, !isNaN(a.attr(c, "tabindex")));
        },
        tabbable: function(c) {
            var d = a.attr(c, "tabindex"), e = isNaN(d);
            return (e || d >= 0) && b(c, !e);
        }
    });
    if (!a("<a>").outerWidth(1).jquery) {
        a.each([ "Width", "Height" ], function(b, c) {
            var d = c === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ], e = c.toLowerCase(), f = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
            function g(b, c, e, f) {
                a.each(d, function() {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0;
                    if (e) {
                        c -= parseFloat(a.css(b, "border" + this + "Width")) || 0;
                    }
                    if (f) {
                        c -= parseFloat(a.css(b, "margin" + this)) || 0;
                    }
                });
                return c;
            }
            a.fn["inner" + c] = function(b) {
                if (b === undefined) {
                    return f["inner" + c].call(this);
                }
                return this.each(function() {
                    a(this).css(e, g(this, b) + "px");
                });
            };
            a.fn["outer" + c] = function(b, d) {
                if (typeof b !== "number") {
                    return f["outer" + c].call(this, b);
                }
                return this.each(function() {
                    a(this).css(e, g(this, b, true, d) + "px");
                });
            };
        });
    }
    if (!a.fn.addBack) {
        a.fn.addBack = function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
        };
    }
    if (a("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        a.fn.removeData = function(b) {
            return function(c) {
                if (arguments.length) {
                    return b.call(this, a.camelCase(c));
                } else {
                    return b.call(this);
                }
            };
        }(a.fn.removeData);
    }
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return typeof c === "number" ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus();
                        if (d) {
                            d.call(b);
                        }
                    }, c);
                }) : b.apply(this, arguments);
            };
        }(a.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        },
        zIndex: function(b) {
            if (b !== undefined) {
                return this.css("zIndex", b);
            }
            if (this.length) {
                var c = a(this[0]), d, e;
                while (c.length && c[0] !== document) {
                    d = c.css("position");
                    if (d === "absolute" || d === "relative" || d === "fixed") {
                        e = parseInt(c.css("zIndex"), 10);
                        if (!isNaN(e) && e !== 0) {
                            return e;
                        }
                    }
                    c = c.parent();
                }
            }
            return 0;
        }
    });
    a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d) {
                f.plugins[e] = f.plugins[e] || [];
                f.plugins[e].push([ c, d[e] ]);
            }
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (!f) {
                return;
            }
            if (!d && (!a.element[0].parentNode || a.element[0].parentNode.nodeType === 11)) {
                return;
            }
            for (e = 0; e < f.length; e++) {
                if (a.options[f[e][0]]) {
                    f[e][1].apply(a.element, c);
                }
            }
        }
    };
    var d = 0, e = Array.prototype.slice;
    a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; (e = c[f]) != null; f++) {
                try {
                    d = a._data(e, "events");
                    if (d && d.remove) {
                        a(e).triggerHandler("remove");
                    }
                } catch (g) {}
            }
            b(c);
        };
    }(a.cleanData);
    a.widget = function(b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        b = b.split(".")[1];
        e = j + "-" + b;
        if (!d) {
            d = c;
            c = a.Widget;
        }
        a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e);
        };
        a[j] = a[j] || {};
        f = a[j][b];
        g = a[j][b] = function(a, b) {
            if (!this._createWidget) {
                return new g(a, b);
            }
            if (arguments.length) {
                this._createWidget(a, b);
            }
        };
        a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        });
        h = new c();
        h.options = a.widget.extend({}, h.options);
        a.each(d, function(b, d) {
            if (!a.isFunction(d)) {
                i[b] = d;
                return;
            }
            i[b] = function() {
                var a = function() {
                    return c.prototype[b].apply(this, arguments);
                }, e = function(a) {
                    return c.prototype[b].apply(this, a);
                };
                return function() {
                    var b = this._super, c = this._superApply, f;
                    this._super = a;
                    this._superApply = e;
                    f = d.apply(this, arguments);
                    this._super = b;
                    this._superApply = c;
                    return f;
                };
            }();
        });
        g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix || b : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        });
        if (f) {
            a.each(f._childConstructors, function(b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto);
            });
            delete f._childConstructors;
        } else {
            c._childConstructors.push(g);
        }
        a.widget.bridge(b, g);
        return g;
    };
    a.widget.extend = function(b) {
        var c = e.call(arguments, 1), d = 0, f = c.length, g, h;
        for (;d < f; d++) {
            for (g in c[d]) {
                h = c[d][g];
                if (c[d].hasOwnProperty(g) && h !== undefined) {
                    if (a.isPlainObject(h)) {
                        b[g] = a.isPlainObject(b[g]) ? a.widget.extend({}, b[g], h) : a.widget.extend({}, h);
                    } else {
                        b[g] = h;
                    }
                }
            }
        }
        return b;
    };
    a.widget.bridge = function(b, c) {
        var d = c.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = typeof f === "string", h = e.call(arguments, 1), i = this;
            f = !g && h.length ? a.widget.extend.apply(null, [ f ].concat(h)) : f;
            if (g) {
                this.each(function() {
                    var c, e = a.data(this, d);
                    if (f === "instance") {
                        i = e;
                        return false;
                    }
                    if (!e) {
                        return a.error("cannot call methods on " + b + " prior to initialization; " + "attempted to call method '" + f + "'");
                    }
                    if (!a.isFunction(e[f]) || f.charAt(0) === "_") {
                        return a.error("no such method '" + f + "' for " + b + " widget instance");
                    }
                    c = e[f].apply(e, h);
                    if (c !== e && c !== undefined) {
                        i = c && c.jquery ? i.pushStack(c.get()) : c;
                        return false;
                    }
                });
            } else {
                this.each(function() {
                    var b = a.data(this, d);
                    if (b) {
                        b.option(f || {});
                        if (b._init) {
                            b._init();
                        }
                    } else {
                        a.data(this, d, new c(f, this));
                    }
                });
            }
            return i;
        };
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(b, c) {
            c = a(c || this.defaultElement || this)[0];
            this.element = a(c);
            this.uuid = d++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b);
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            if (c !== this) {
                a.data(c, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(a) {
                        if (a.target === c) {
                            this.destroy();
                        }
                    }
                });
                this.document = a(c.style ? c.ownerDocument : c.document || c);
                this.window = a(this.document[0].defaultView || this.document[0].parentWindow);
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: a.noop,
        widget: function() {
            return this.element;
        },
        option: function(b, c) {
            var d = b, e, f, g;
            if (arguments.length === 0) {
                return a.widget.extend({}, this.options);
            }
            if (typeof b === "string") {
                d = {};
                e = b.split(".");
                b = e.shift();
                if (e.length) {
                    f = d[b] = a.widget.extend({}, this.options[b]);
                    for (g = 0; g < e.length - 1; g++) {
                        f[e[g]] = f[e[g]] || {};
                        f = f[e[g]];
                    }
                    b = e.pop();
                    if (arguments.length === 1) {
                        return f[b] === undefined ? null : f[b];
                    }
                    f[b] = c;
                } else {
                    if (arguments.length === 1) {
                        return this.options[b] === undefined ? null : this.options[b];
                    }
                    d[b] = c;
                }
            }
            this._setOptions(d);
            return this;
        },
        _setOptions: function(a) {
            var b;
            for (b in a) {
                this._setOption(b, a[b]);
            }
            return this;
        },
        _setOption: function(a, b) {
            this.options[a] = b;
            if (a === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled", !!b);
                if (b) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus");
                }
            }
            return this;
        },
        enable: function() {
            return this._setOptions({
                disabled: false
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: true
            });
        },
        _on: function(b, c, d) {
            var e, f = this;
            if (typeof b !== "boolean") {
                d = c;
                c = b;
                b = false;
            }
            if (!d) {
                d = c;
                c = this.element;
                e = this.widget();
            } else {
                c = e = a(c);
                this.bindings = this.bindings.add(c);
            }
            a.each(d, function(d, g) {
                function h() {
                    if (!b && (f.options.disabled === true || a(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof g === "string" ? f[g] : g).apply(f, arguments);
                }
                if (typeof g !== "string") {
                    h.guid = g.guid = g.guid || h.guid || a.guid++;
                }
                var i = d.match(/^([\w:-]*)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                if (k) {
                    e.delegate(k, j, h);
                } else {
                    c.bind(j, h);
                }
            });
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.unbind(b).undelegate(b);
        },
        _delay: function(a, b) {
            function c() {
                return (typeof a === "string" ? d[a] : a).apply(d, arguments);
            }
            var d = this;
            return setTimeout(c, b || 0);
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b);
            this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b);
            this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            d = d || {};
            c = a.Event(c);
            c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
            c.target = this.element[0];
            f = c.originalEvent;
            if (f) {
                for (e in f) {
                    if (!(e in c)) {
                        c[e] = f[e];
                    }
                }
            }
            this.element.trigger(c, d);
            return !(a.isFunction(g) && g.apply(this.element[0], [ c ].concat(d)) === false || c.isDefaultPrevented());
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            if (typeof e === "string") {
                e = {
                    effect: e
                };
            }
            var g, h = !e ? b : e === true || typeof e === "number" ? c : e.effect || c;
            e = e || {};
            if (typeof e === "number") {
                e = {
                    duration: e
                };
            }
            g = !a.isEmptyObject(e);
            e.complete = f;
            if (e.delay) {
                d.delay(e.delay);
            }
            if (g && a.effects && a.effects.effect[h]) {
                d[b](e);
            } else if (h !== b && d[h]) {
                d[h](e.duration, e.easing, f);
            } else {
                d.queue(function(c) {
                    a(this)[b]();
                    if (f) {
                        f.call(d[0]);
                    }
                    c();
                });
            }
        };
    });
    var f = a.widget;
    var g = false;
    a(document).mouseup(function() {
        g = false;
    });
    var h = a.widget("ui.mouse", {
        version: "1.11.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a);
            }).bind("click." + this.widgetName, function(c) {
                if (true === a.data(c.target, b.widgetName + ".preventClickEvent")) {
                    a.removeData(c.target, b.widgetName + ".preventClickEvent");
                    c.stopImmediatePropagation();
                    return false;
                }
            });
            this.started = false;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },
        _mouseDown: function(b) {
            if (g) {
                return;
            }
            this._mouseStarted && this._mouseUp(b);
            this._mouseDownEvent = b;
            var c = this, d = b.which === 1, e = typeof this.options.cancel === "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : false;
            if (!d || e || !this._mouseCapture(b)) {
                return true;
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = true;
                }, this.options.delay);
            }
            if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
                this._mouseStarted = this._mouseStart(b) !== false;
                if (!this._mouseStarted) {
                    b.preventDefault();
                    return true;
                }
            }
            if (true === a.data(b.target, this.widgetName + ".preventClickEvent")) {
                a.removeData(b.target, this.widgetName + ".preventClickEvent");
            }
            this._mouseMoveDelegate = function(a) {
                return c._mouseMove(a);
            };
            this._mouseUpDelegate = function(a) {
                return c._mouseUp(a);
            };
            this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            b.preventDefault();
            g = true;
            return true;
        },
        _mouseMove: function(b) {
            if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) {
                return this._mouseUp(b);
            } else if (!b.which) {
                return this._mouseUp(b);
            }
            if (this._mouseStarted) {
                this._mouseDrag(b);
                return b.preventDefault();
            }
            if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
                this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== false;
                this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b);
            }
            return !this._mouseStarted;
        },
        _mouseUp: function(b) {
            this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (b.target === this._mouseDownEvent.target) {
                    a.data(b.target, this.widgetName + ".preventClickEvent", true);
                }
                this._mouseStop(b);
            }
            g = false;
            return false;
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true;
        }
    });
    var i = a.widget("ui.sortable", a.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(a, b, c) {
            return a >= b && a < b + c;
        },
        _isFloating: function(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"));
        },
        _create: function() {
            var a = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? a.axis === "x" || this._isFloating(this.items[0].item) : false;
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = true;
        },
        _setOption: function(a, b) {
            this._super(a, b);
            if (a === "handle") {
                this._setHandleClassName();
            }
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            a.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
            });
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) {
                this.items[a].item.removeData(this.widgetName + "-item");
            }
            return this;
        },
        _mouseCapture: function(b, c) {
            var d = null, e = false, f = this;
            if (this.reverting) {
                return false;
            }
            if (this.options.disabled || this.options.type === "static") {
                return false;
            }
            this._refreshItems(b);
            a(b.target).parents().each(function() {
                if (a.data(this, f.widgetName + "-item") === f) {
                    d = a(this);
                    return false;
                }
            });
            if (a.data(b.target, f.widgetName + "-item") === f) {
                d = a(b.target);
            }
            if (!d) {
                return false;
            }
            if (this.options.handle && !c) {
                a(this.options.handle, d).find("*").addBack().each(function() {
                    if (this === b.target) {
                        e = true;
                    }
                });
                if (!e) {
                    return false;
                }
            }
            this.currentItem = d;
            this._removeCurrentsFromItems();
            return true;
        },
        _mouseStart: function(b, c, d) {
            var e, f, g = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(b);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(b);
            this.originalPageX = b.pageX;
            this.originalPageY = b.pageY;
            g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide();
            }
            this._createPlaceholder();
            if (g.containment) {
                this._setContainment();
            }
            if (g.cursor && g.cursor !== "auto") {
                f = this.document.find("body");
                this.storedCursor = f.css("cursor");
                f.css("cursor", g.cursor);
                this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f);
            }
            if (g.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity");
                }
                this.helper.css("opacity", g.opacity);
            }
            if (g.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex");
                }
                this.helper.css("zIndex", g.zIndex);
            }
            if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset();
            }
            this._trigger("start", b, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions();
            }
            if (!d) {
                for (e = this.containers.length - 1; e >= 0; e--) {
                    this.containers[e]._trigger("activate", b, this._uiHash(this));
                }
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this;
            }
            if (a.ui.ddmanager && !g.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, b);
            }
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(b);
            return true;
        },
        _mouseDrag: function(b) {
            var c, d, e, f, g = this.options, h = false;
            this.position = this._generatePosition(b);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs;
            }
            if (this.options.scroll) {
                if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                    if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed;
                    } else if (b.pageY - this.overflowOffset.top < g.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed;
                    }
                    if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed;
                    } else if (b.pageX - this.overflowOffset.left < g.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed;
                    }
                } else {
                    if (b.pageY - a(document).scrollTop() < g.scrollSensitivity) {
                        h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed);
                    } else if (a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity) {
                        h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed);
                    }
                    if (b.pageX - a(document).scrollLeft() < g.scrollSensitivity) {
                        h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed);
                    } else if (a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity) {
                        h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed);
                    }
                }
                if (h !== false && a.ui.ddmanager && !g.dropBehaviour) {
                    a.ui.ddmanager.prepareOffsets(this, b);
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px";
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px";
            }
            for (c = this.items.length - 1; c >= 0; c--) {
                d = this.items[c];
                e = d.item[0];
                f = this._intersectsWithPointer(d);
                if (!f) {
                    continue;
                }
                if (d.instance !== this.currentContainer) {
                    continue;
                }
                if (e !== this.currentItem[0] && this.placeholder[f === 1 ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && (this.options.type === "semi-dynamic" ? !a.contains(this.element[0], e) : true)) {
                    this.direction = f === 1 ? "down" : "up";
                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(d)) {
                        this._rearrange(b, d);
                    } else {
                        break;
                    }
                    this._trigger("change", b, this._uiHash());
                    break;
                }
            }
            this._contactContainers(b);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, b);
            }
            this._trigger("sort", b, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false;
        },
        _mouseStop: function(b, c) {
            if (!b) {
                return;
            }
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                a.ui.ddmanager.drop(this, b);
            }
            if (this.options.revert) {
                var d = this, e = this.placeholder.offset(), f = this.options.axis, g = {};
                if (!f || f === "x") {
                    g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft);
                }
                if (!f || f === "y") {
                    g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop);
                }
                this.reverting = true;
                a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                    d._clear(b);
                });
            } else {
                this._clear(b, c);
            }
            return false;
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
                } else {
                    this.currentItem.show();
                }
                for (var b = this.containers.length - 1; b >= 0; b--) {
                    this.containers[b]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[b].containerCache.over) {
                        this.containers[b]._trigger("out", null, this._uiHash(this));
                        this.containers[b].containerCache.over = 0;
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove();
                }
                a.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                if (this.domPosition.prev) {
                    a(this.domPosition.prev).after(this.currentItem);
                } else {
                    a(this.domPosition.parent).prepend(this.currentItem);
                }
            }
            return this;
        },
        serialize: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            b = b || {};
            a(c).each(function() {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                if (c) {
                    d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]));
                }
            });
            if (!d.length && b.key) {
                d.push(b.key + "=");
            }
            return d.join("&");
        },
        toArray: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            b = b || {};
            c.each(function() {
                d.push(a(b.item || this).attr(b.attribute || "id") || "");
            });
            return d;
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = this.options.axis === "x" || d + j > h && d + j < i, m = this.options.axis === "y" || b + k > f && b + k < g, n = l && m;
            if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"]) {
                return n;
            } else {
                return f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i;
            }
        },
        _intersectsWithPointer: function(a) {
            var b = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height), c = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width), d = b && c, e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
            if (!d) {
                return false;
            }
            return this.floating ? f && f === "right" || e === "down" ? 2 : 1 : e && (e === "down" ? 2 : 1);
        },
        _intersectsWithSides: function(a) {
            var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height), c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width), d = this._getDragVerticalDirection(), e = this._getDragHorizontalDirection();
            if (this.floating && e) {
                return e === "right" && c || e === "left" && !c;
            } else {
                return d && (d === "down" && b || d === "up" && !b);
            }
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return a !== 0 && (a > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return a !== 0 && (a > 0 ? "right" : "left");
        },
        refresh: function(a) {
            this._refreshItems(a);
            this._setHandleClassName();
            this.refreshPositions();
            return this;
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [ a.connectWith ] : a.connectWith;
        },
        _getItemsAsjQuery: function(b) {
            var c, d, e, f, g = [], h = [], i = this._connectWith();
            if (i && b) {
                for (c = i.length - 1; c >= 0; c--) {
                    e = a(i[c]);
                    for (d = e.length - 1; d >= 0; d--) {
                        f = a.data(e[d], this.widgetFullName);
                        if (f && f !== this && !f.options.disabled) {
                            h.push([ a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f ]);
                        }
                    }
                }
            }
            h.push([ a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]);
            function j() {
                g.push(this);
            }
            for (c = h.length - 1; c >= 0; c--) {
                h[c][0].each(j);
            }
            return a(g);
        },
        _removeCurrentsFromItems: function() {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function(a) {
                for (var c = 0; c < b.length; c++) {
                    if (b[c] === a.item[0]) {
                        return false;
                    }
                }
                return true;
            });
        },
        _refreshItems: function(b) {
            this.items = [];
            this.containers = [ this ];
            var c, d, e, f, g, h, i, j, k = this.items, l = [ [ a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                item: this.currentItem
            }) : a(this.options.items, this.element), this ] ], m = this._connectWith();
            if (m && this.ready) {
                for (c = m.length - 1; c >= 0; c--) {
                    e = a(m[c]);
                    for (d = e.length - 1; d >= 0; d--) {
                        f = a.data(e[d], this.widgetFullName);
                        if (f && f !== this && !f.options.disabled) {
                            l.push([ a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                                item: this.currentItem
                            }) : a(f.options.items, f.element), f ]);
                            this.containers.push(f);
                        }
                    }
                }
            }
            for (c = l.length - 1; c >= 0; c--) {
                g = l[c][1];
                h = l[c][0];
                for (d = 0, j = h.length; d < j; d++) {
                    i = a(h[d]);
                    i.data(this.widgetName + "-item", g);
                    k.push({
                        item: i,
                        instance: g,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    });
                }
            }
        },
        refreshPositions: function(b) {
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset();
            }
            var c, d, e, f;
            for (c = this.items.length - 1; c >= 0; c--) {
                d = this.items[c];
                if (d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0]) {
                    continue;
                }
                e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item;
                if (!b) {
                    d.width = e.outerWidth();
                    d.height = e.outerHeight();
                }
                f = e.offset();
                d.left = f.left;
                d.top = f.top;
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (c = this.containers.length - 1; c >= 0; c--) {
                    f = this.containers[c].element.offset();
                    this.containers[c].containerCache.left = f.left;
                    this.containers[c].containerCache.top = f.top;
                    this.containers[c].containerCache.width = this.containers[c].element.outerWidth();
                    this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
                }
            }
            return this;
        },
        _createPlaceholder: function(b) {
            b = b || this;
            var c, d = b.options;
            if (!d.placeholder || d.placeholder.constructor === String) {
                c = d.placeholder;
                d.placeholder = {
                    element: function() {
                        var d = b.currentItem[0].nodeName.toLowerCase(), e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        if (d === "tr") {
                            b.currentItem.children().each(function() {
                                a("<td>&#160;</td>", b.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(e);
                            });
                        } else if (d === "img") {
                            e.attr("src", b.currentItem.attr("src"));
                        }
                        if (!c) {
                            e.css("visibility", "hidden");
                        }
                        return e;
                    },
                    update: function(a, e) {
                        if (c && !d.forcePlaceholderSize) {
                            return;
                        }
                        if (!e.height()) {
                            e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10));
                        }
                        if (!e.width()) {
                            e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10));
                        }
                    }
                };
            }
            b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem));
            b.currentItem.after(b.placeholder);
            d.placeholder.update(b, b.placeholder);
        },
        _contactContainers: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m = null, n = null;
            for (c = this.containers.length - 1; c >= 0; c--) {
                if (a.contains(this.currentItem[0], this.containers[c].element[0])) {
                    continue;
                }
                if (this._intersectsWith(this.containers[c].containerCache)) {
                    if (m && a.contains(this.containers[c].element[0], m.element[0])) {
                        continue;
                    }
                    m = this.containers[c];
                    n = c;
                } else {
                    if (this.containers[c].containerCache.over) {
                        this.containers[c]._trigger("out", b, this._uiHash(this));
                        this.containers[c].containerCache.over = 0;
                    }
                }
            }
            if (!m) {
                return;
            }
            if (this.containers.length === 1) {
                if (!this.containers[n].containerCache.over) {
                    this.containers[n]._trigger("over", b, this._uiHash(this));
                    this.containers[n].containerCache.over = 1;
                }
            } else {
                e = 1e4;
                f = null;
                k = m.floating || this._isFloating(this.currentItem);
                g = k ? "left" : "top";
                h = k ? "width" : "height";
                l = k ? "clientX" : "clientY";
                for (d = this.items.length - 1; d >= 0; d--) {
                    if (!a.contains(this.containers[n].element[0], this.items[d].item[0])) {
                        continue;
                    }
                    if (this.items[d].item[0] === this.currentItem[0]) {
                        continue;
                    }
                    i = this.items[d].item.offset()[g];
                    j = false;
                    if (b[l] - i > this.items[d][h] / 2) {
                        j = true;
                    }
                    if (Math.abs(b[l] - i) < e) {
                        e = Math.abs(b[l] - i);
                        f = this.items[d];
                        this.direction = j ? "up" : "down";
                    }
                }
                if (!f && !this.options.dropOnEmpty) {
                    return;
                }
                if (this.currentContainer === this.containers[n]) {
                    return;
                }
                f ? this._rearrange(b, f, null, true) : this._rearrange(b, null, this.containers[n].element, true);
                this._trigger("change", b, this._uiHash());
                this.containers[n]._trigger("change", b, this._uiHash(this));
                this.currentContainer = this.containers[n];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[n]._trigger("over", b, this._uiHash(this));
                this.containers[n].containerCache.over = 1;
            }
        },
        _createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [ b, this.currentItem ])) : c.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            if (!d.parents("body").length) {
                a(c.appendTo !== "parent" ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]);
            }
            if (d[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                };
            }
            if (!d[0].style.width || c.forceHelperSize) {
                d.width(this.currentItem.width());
            }
            if (!d[0].style.height || c.forceHelperSize) {
                d.height(this.currentItem.height());
            }
            return d;
        },
        _adjustOffsetFromHelper: function(b) {
            if (typeof b === "string") {
                b = b.split(" ");
            }
            if (a.isArray(b)) {
                b = {
                    left: +b[0],
                    top: +b[1] || 0
                };
            }
            if ("left" in b) {
                this.offset.click.left = b.left + this.margins.left;
            }
            if ("right" in b) {
                this.offset.click.left = this.helperProportions.width - b.right + this.margins.left;
            }
            if ("top" in b) {
                this.offset.click.top = b.top + this.margins.top;
            }
            if ("bottom" in b) {
                this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top;
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
                b.left += this.scrollParent.scrollLeft();
                b.top += this.scrollParent.scrollTop();
            }
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && a.ui.ie) {
                b = {
                    top: 0,
                    left: 0
                };
            }
            return {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return {
                    top: 0,
                    left: 0
                };
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var b, c, d, e = this.options;
            if (e.containment === "parent") {
                e.containment = this.helper[0].parentNode;
            }
            if (e.containment === "document" || e.containment === "window") {
                this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(e.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(e.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
            }
            if (!/^(document|window|parent)$/.test(e.containment)) {
                b = a(e.containment)[0];
                c = a(e.containment).offset();
                d = a(b).css("overflow") !== "hidden";
                this.containment = [ c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ];
            }
        },
        _convertPositionTo: function(b, c) {
            if (!c) {
                c = this.position;
            }
            var d = b === "absolute" ? 1 : -1, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            };
        },
        _generatePosition: function(b) {
            var c, d, e = this.options, f = b.pageX, g = b.pageY, h = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, i = /(html|body)/i.test(h[0].tagName);
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset();
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (b.pageX - this.offset.click.left < this.containment[0]) {
                        f = this.containment[0] + this.offset.click.left;
                    }
                    if (b.pageY - this.offset.click.top < this.containment[1]) {
                        g = this.containment[1] + this.offset.click.top;
                    }
                    if (b.pageX - this.offset.click.left > this.containment[2]) {
                        f = this.containment[2] + this.offset.click.left;
                    }
                    if (b.pageY - this.offset.click.top > this.containment[3]) {
                        g = this.containment[3] + this.offset.click.top;
                    }
                }
                if (e.grid) {
                    c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1];
                    g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c;
                    d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0];
                    f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d;
                }
            }
            return {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
            };
        },
        _rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? b.item[0] : b.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function() {
                if (e === this.counter) {
                    this.refreshPositions(!d);
                }
            });
        },
        _clear: function(a, b) {
            this.reverting = false;
            var c, d = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem);
            }
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (c in this._storedCSS) {
                    if (this._storedCSS[c] === "auto" || this._storedCSS[c] === "static") {
                        this._storedCSS[c] = "";
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else {
                this.currentItem.show();
            }
            if (this.fromOutside && !b) {
                d.push(function(a) {
                    this._trigger("receive", a, this._uiHash(this.fromOutside));
                });
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !b) {
                d.push(function(a) {
                    this._trigger("update", a, this._uiHash());
                });
            }
            if (this !== this.currentContainer) {
                if (!b) {
                    d.push(function(a) {
                        this._trigger("remove", a, this._uiHash());
                    });
                    d.push(function(a) {
                        return function(b) {
                            a._trigger("receive", b, this._uiHash(this));
                        };
                    }.call(this, this.currentContainer));
                    d.push(function(a) {
                        return function(b) {
                            a._trigger("update", b, this._uiHash(this));
                        };
                    }.call(this, this.currentContainer));
                }
            }
            function e(a, b, c) {
                return function(d) {
                    c._trigger(a, d, b._uiHash(b));
                };
            }
            for (c = this.containers.length - 1; c >= 0; c--) {
                if (!b) {
                    d.push(e("deactivate", this, this.containers[c]));
                }
                if (this.containers[c].containerCache.over) {
                    d.push(e("out", this, this.containers[c]));
                    this.containers[c].containerCache.over = 0;
                }
            }
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove();
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity);
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
            }
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!b) {
                    this._trigger("beforeStop", a, this._uiHash());
                    for (c = 0; c < d.length; c++) {
                        d[c].call(this, a);
                    }
                    this._trigger("stop", a, this._uiHash());
                }
                this.fromOutside = false;
                return false;
            }
            if (!b) {
                this._trigger("beforeStop", a, this._uiHash());
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (this.helper[0] !== this.currentItem[0]) {
                this.helper.remove();
            }
            this.helper = null;
            if (!b) {
                for (c = 0; c < d.length; c++) {
                    d[c].call(this, a);
                }
                this._trigger("stop", a, this._uiHash());
            }
            this.fromOutside = false;
            return true;
        },
        _trigger: function() {
            if (a.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel();
            }
        },
        _uiHash: function(b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            };
        }
    });
    a.extend(a.ui, {
        datepicker: {
            version: "1.11.1"
        }
    });
    var j;
    function k(a) {
        var b, c;
        while (a.length && a[0] !== document) {
            b = a.css("position");
            if (b === "absolute" || b === "relative" || b === "fixed") {
                c = parseInt(a.css("zIndex"), 10);
                if (!isNaN(c) && c !== 0) {
                    return c;
                }
            }
            a = a.parent();
        }
        return 0;
    }
    function l() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        a.extend(this._defaults, this.regional[""]);
        this.regional.en = a.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = a.extend(true, {}, this.regional.en);
        this.dpDiv = m(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    a.extend(l.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(a) {
            o(this._defaults, a || {});
            return this;
        },
        _attachDatepicker: function(b, c) {
            var d, e, f;
            d = b.nodeName.toLowerCase();
            e = d === "div" || d === "span";
            if (!b.id) {
                this.uuid += 1;
                b.id = "dp" + this.uuid;
            }
            f = this._newInst(a(b), e);
            f.settings = a.extend({}, c || {});
            if (d === "input") {
                this._connectDatepicker(b, f);
            } else if (e) {
                this._inlineDatepicker(b, f);
            }
        },
        _newInst: function(b, c) {
            var d = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: d,
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: !c ? this.dpDiv : m(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            };
        },
        _connectDatepicker: function(b, c) {
            var d = a(b);
            c.append = a([]);
            c.trigger = a([]);
            if (d.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(d, c);
            d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(c);
            a.data(b, "datepicker", c);
            if (c.settings.disabled) {
                this._disableDatepicker(b);
            }
        },
        _attachments: function(b, c) {
            var d, e, f, g = this._get(c, "appendText"), h = this._get(c, "isRTL");
            if (c.append) {
                c.append.remove();
            }
            if (g) {
                c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>");
                b[h ? "before" : "after"](c.append);
            }
            b.unbind("focus", this._showDatepicker);
            if (c.trigger) {
                c.trigger.remove();
            }
            d = this._get(c, "showOn");
            if (d === "focus" || d === "both") {
                b.focus(this._showDatepicker);
            }
            if (d === "button" || d === "both") {
                e = this._get(c, "buttonText");
                f = this._get(c, "buttonImage");
                c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: e,
                    title: e
                }) : a("<button type='button'></button>").addClass(this._triggerClass).html(!f ? e : a("<img/>").attr({
                    src: f,
                    alt: e,
                    title: e
                })));
                b[h ? "before" : "after"](c.trigger);
                c.trigger.click(function() {
                    if (a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0]) {
                        a.datepicker._hideDatepicker();
                    } else if (a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0]) {
                        a.datepicker._hideDatepicker();
                        a.datepicker._showDatepicker(b[0]);
                    } else {
                        a.datepicker._showDatepicker(b[0]);
                    }
                    return false;
                });
            }
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, c, d, e, f = new Date(2009, 12 - 1, 20), g = this._get(a, "dateFormat");
                if (g.match(/[DM]/)) {
                    b = function(a) {
                        c = 0;
                        d = 0;
                        for (e = 0; e < a.length; e++) {
                            if (a[e].length > c) {
                                c = a[e].length;
                                d = e;
                            }
                        }
                        return d;
                    };
                    f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort")));
                    f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay());
                }
                a.input.attr("size", this._formatDate(a, f).length);
            }
        },
        _inlineDatepicker: function(b, c) {
            var d = a(b);
            if (d.hasClass(this.markerClassName)) {
                return;
            }
            d.addClass(this.markerClassName).append(c.dpDiv);
            a.data(b, "datepicker", c);
            this._setDate(c, this._getDefaultDate(c), true);
            this._updateDatepicker(c);
            this._updateAlternate(c);
            if (c.settings.disabled) {
                this._disableDatepicker(b);
            }
            c.dpDiv.css("display", "block");
        },
        _dialogDatepicker: function(b, c, d, e, f) {
            var g, h, i, j, k, l = this._dialogInst;
            if (!l) {
                this.uuid += 1;
                g = "dp" + this.uuid;
                this._dialogInput = a("<input type='text' id='" + g + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                a("body").append(this._dialogInput);
                l = this._dialogInst = this._newInst(this._dialogInput, false);
                l.settings = {};
                a.data(this._dialogInput[0], "datepicker", l);
            }
            o(l.settings, e || {});
            c = c && c.constructor === Date ? this._formatDate(l, c) : c;
            this._dialogInput.val(c);
            this._pos = f ? f.length ? f : [ f.pageX, f.pageY ] : null;
            if (!this._pos) {
                h = document.documentElement.clientWidth;
                i = document.documentElement.clientHeight;
                j = document.documentElement.scrollLeft || document.body.scrollLeft;
                k = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [ h / 2 - 100 + j, i / 2 - 150 + k ];
            }
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            l.settings.onSelect = d;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if (a.blockUI) {
                a.blockUI(this.dpDiv);
            }
            a.data(this._dialogInput[0], "datepicker", l);
            return this;
        },
        _destroyDatepicker: function(b) {
            var c, d = a(b), e = a.data(b, "datepicker");
            if (!d.hasClass(this.markerClassName)) {
                return;
            }
            c = b.nodeName.toLowerCase();
            a.removeData(b, "datepicker");
            if (c === "input") {
                e.append.remove();
                e.trigger.remove();
                d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp);
            } else if (c === "div" || c === "span") {
                d.removeClass(this.markerClassName).empty();
            }
        },
        _enableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, "datepicker");
            if (!e.hasClass(this.markerClassName)) {
                return;
            }
            c = b.nodeName.toLowerCase();
            if (c === "input") {
                b.disabled = false;
                f.trigger.filter("button").each(function() {
                    this.disabled = false;
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
            } else if (c === "div" || c === "span") {
                d = e.children("." + this._inlineClass);
                d.children().removeClass("ui-state-disabled");
                d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false);
            }
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            });
        },
        _disableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, "datepicker");
            if (!e.hasClass(this.markerClassName)) {
                return;
            }
            c = b.nodeName.toLowerCase();
            if (c === "input") {
                b.disabled = true;
                f.trigger.filter("button").each(function() {
                    this.disabled = true;
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
            } else if (c === "div" || c === "span") {
                d = e.children("." + this._inlineClass);
                d.children().addClass("ui-state-disabled");
                d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true);
            }
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            });
            this._disabledInputs[this._disabledInputs.length] = b;
        },
        _isDisabledDatepicker: function(a) {
            if (!a) {
                return false;
            }
            for (var b = 0; b < this._disabledInputs.length; b++) {
                if (this._disabledInputs[b] === a) {
                    return true;
                }
            }
            return false;
        },
        _getInst: function(b) {
            try {
                return a.data(b, "datepicker");
            } catch (c) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(b, c, d) {
            var e, f, g, h, i = this._getInst(b);
            if (arguments.length === 2 && typeof c === "string") {
                return c === "defaults" ? a.extend({}, a.datepicker._defaults) : i ? c === "all" ? a.extend({}, i.settings) : this._get(i, c) : null;
            }
            e = c || {};
            if (typeof c === "string") {
                e = {};
                e[c] = d;
            }
            if (i) {
                if (this._curInst === i) {
                    this._hideDatepicker();
                }
                f = this._getDateDatepicker(b, true);
                g = this._getMinMaxDate(i, "min");
                h = this._getMinMaxDate(i, "max");
                o(i.settings, e);
                if (g !== null && e.dateFormat !== undefined && e.minDate === undefined) {
                    i.settings.minDate = this._formatDate(i, g);
                }
                if (h !== null && e.dateFormat !== undefined && e.maxDate === undefined) {
                    i.settings.maxDate = this._formatDate(i, h);
                }
                if ("disabled" in e) {
                    if (e.disabled) {
                        this._disableDatepicker(b);
                    } else {
                        this._enableDatepicker(b);
                    }
                }
                this._attachments(a(b), i);
                this._autoSize(i);
                this._setDate(i, f);
                this._updateAlternate(i);
                this._updateDatepicker(i);
            }
        },
        _changeDatepicker: function(a, b, c) {
            this._optionDatepicker(a, b, c);
        },
        _refreshDatepicker: function(a) {
            var b = this._getInst(a);
            if (b) {
                this._updateDatepicker(b);
            }
        },
        _setDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            if (c) {
                this._setDate(c, b);
                this._updateDatepicker(c);
                this._updateAlternate(c);
            }
        },
        _getDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            if (c && !c.inline) {
                this._setDateFromField(c, b);
            }
            return c ? this._getDate(c) : null;
        },
        _doKeyDown: function(b) {
            var c, d, e, f = a.datepicker._getInst(b.target), g = true, h = f.dpDiv.is(".ui-datepicker-rtl");
            f._keyEvent = true;
            if (a.datepicker._datepickerShowing) {
                switch (b.keyCode) {
                  case 9:
                    a.datepicker._hideDatepicker();
                    g = false;
                    break;

                  case 13:
                    e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv);
                    if (e[0]) {
                        a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]);
                    }
                    c = a.datepicker._get(f, "onSelect");
                    if (c) {
                        d = a.datepicker._formatDate(f);
                        c.apply(f.input ? f.input[0] : null, [ d, f ]);
                    } else {
                        a.datepicker._hideDatepicker();
                    }
                    return false;

                  case 27:
                    a.datepicker._hideDatepicker();
                    break;

                  case 33:
                    a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                    break;

                  case 34:
                    a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                    break;

                  case 35:
                    if (b.ctrlKey || b.metaKey) {
                        a.datepicker._clearDate(b.target);
                    }
                    g = b.ctrlKey || b.metaKey;
                    break;

                  case 36:
                    if (b.ctrlKey || b.metaKey) {
                        a.datepicker._gotoToday(b.target);
                    }
                    g = b.ctrlKey || b.metaKey;
                    break;

                  case 37:
                    if (b.ctrlKey || b.metaKey) {
                        a.datepicker._adjustDate(b.target, h ? +1 : -1, "D");
                    }
                    g = b.ctrlKey || b.metaKey;
                    if (b.originalEvent.altKey) {
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                    }
                    break;

                  case 38:
                    if (b.ctrlKey || b.metaKey) {
                        a.datepicker._adjustDate(b.target, -7, "D");
                    }
                    g = b.ctrlKey || b.metaKey;
                    break;

                  case 39:
                    if (b.ctrlKey || b.metaKey) {
                        a.datepicker._adjustDate(b.target, h ? -1 : +1, "D");
                    }
                    g = b.ctrlKey || b.metaKey;
                    if (b.originalEvent.altKey) {
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                    }
                    break;

                  case 40:
                    if (b.ctrlKey || b.metaKey) {
                        a.datepicker._adjustDate(b.target, +7, "D");
                    }
                    g = b.ctrlKey || b.metaKey;
                    break;

                  default:
                    g = false;
                }
            } else if (b.keyCode === 36 && b.ctrlKey) {
                a.datepicker._showDatepicker(this);
            } else {
                g = false;
            }
            if (g) {
                b.preventDefault();
                b.stopPropagation();
            }
        },
        _doKeyPress: function(b) {
            var c, d, e = a.datepicker._getInst(b.target);
            if (a.datepicker._get(e, "constrainInput")) {
                c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat"));
                d = String.fromCharCode(b.charCode == null ? b.keyCode : b.charCode);
                return b.ctrlKey || b.metaKey || (d < " " || !c || c.indexOf(d) > -1);
            }
        },
        _doKeyUp: function(b) {
            var c, d = a.datepicker._getInst(b.target);
            if (d.input.val() !== d.lastVal) {
                try {
                    c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d));
                    if (c) {
                        a.datepicker._setDateFromField(d);
                        a.datepicker._updateAlternate(d);
                        a.datepicker._updateDatepicker(d);
                    }
                } catch (e) {}
            }
            return true;
        },
        _showDatepicker: function(b) {
            b = b.target || b;
            if (b.nodeName.toLowerCase() !== "input") {
                b = a("input", b.parentNode)[0];
            }
            if (a.datepicker._isDisabledDatepicker(b) || a.datepicker._lastInput === b) {
                return;
            }
            var c, d, e, f, g, h, i;
            c = a.datepicker._getInst(b);
            if (a.datepicker._curInst && a.datepicker._curInst !== c) {
                a.datepicker._curInst.dpDiv.stop(true, true);
                if (c && a.datepicker._datepickerShowing) {
                    a.datepicker._hideDatepicker(a.datepicker._curInst.input[0]);
                }
            }
            d = a.datepicker._get(c, "beforeShow");
            e = d ? d.apply(b, [ b, c ]) : {};
            if (e === false) {
                return;
            }
            o(c.settings, e);
            c.lastVal = null;
            a.datepicker._lastInput = b;
            a.datepicker._setDateFromField(c);
            if (a.datepicker._inDialog) {
                b.value = "";
            }
            if (!a.datepicker._pos) {
                a.datepicker._pos = a.datepicker._findPos(b);
                a.datepicker._pos[1] += b.offsetHeight;
            }
            f = false;
            a(b).parents().each(function() {
                f |= a(this).css("position") === "fixed";
                return !f;
            });
            g = {
                left: a.datepicker._pos[0],
                top: a.datepicker._pos[1]
            };
            a.datepicker._pos = null;
            c.dpDiv.empty();
            c.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            a.datepicker._updateDatepicker(c);
            g = a.datepicker._checkOffset(c, g, f);
            c.dpDiv.css({
                position: a.datepicker._inDialog && a.blockUI ? "static" : f ? "fixed" : "absolute",
                display: "none",
                left: g.left + "px",
                top: g.top + "px"
            });
            if (!c.inline) {
                h = a.datepicker._get(c, "showAnim");
                i = a.datepicker._get(c, "duration");
                c.dpDiv.css("z-index", k(a(b)) + 1);
                a.datepicker._datepickerShowing = true;
                if (a.effects && a.effects.effect[h]) {
                    c.dpDiv.show(h, a.datepicker._get(c, "showOptions"), i);
                } else {
                    c.dpDiv[h || "show"](h ? i : null);
                }
                if (a.datepicker._shouldFocusInput(c)) {
                    c.input.focus();
                }
                a.datepicker._curInst = c;
            }
        },
        _updateDatepicker: function(b) {
            this.maxRows = 4;
            j = b;
            b.dpDiv.empty().append(this._generateHTML(b));
            this._attachHandlers(b);
            var c, d = this._getNumberOfMonths(b), e = d[1], f = 17, g = b.dpDiv.find("." + this._dayOverClass + " a");
            if (g.length > 0) {
                n.apply(g.get(0));
            }
            b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (e > 1) {
                b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", f * e + "em");
            }
            b.dpDiv[(d[0] !== 1 || d[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b)) {
                b.input.focus();
            }
            if (b.yearshtml) {
                c = b.yearshtml;
                setTimeout(function() {
                    if (c === b.yearshtml && b.yearshtml) {
                        b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);
                    }
                    c = b.yearshtml = null;
                }, 0);
            }
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus");
        },
        _checkOffset: function(b, c, d) {
            var e = b.dpDiv.outerWidth(), f = b.dpDiv.outerHeight(), g = b.input ? b.input.outerWidth() : 0, h = b.input ? b.input.outerHeight() : 0, i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()), j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
            c.left -= this._get(b, "isRTL") ? e - g : 0;
            c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0;
            c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0;
            c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0);
            c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0);
            return c;
        },
        _findPos: function(b) {
            var c, d = this._getInst(b), e = this._get(d, "isRTL");
            while (b && (b.type === "hidden" || b.nodeType !== 1 || a.expr.filters.hidden(b))) {
                b = b[e ? "previousSibling" : "nextSibling"];
            }
            c = a(b).offset();
            return [ c.left, c.top ];
        },
        _hideDatepicker: function(b) {
            var c, d, e, f, g = this._curInst;
            if (!g || b && g !== a.data(b, "datepicker")) {
                return;
            }
            if (this._datepickerShowing) {
                c = this._get(g, "showAnim");
                d = this._get(g, "duration");
                e = function() {
                    a.datepicker._tidyDialog(g);
                };
                if (a.effects && (a.effects.effect[c] || a.effects[c])) {
                    g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e);
                } else {
                    g.dpDiv[c === "slideDown" ? "slideUp" : c === "fadeIn" ? "fadeOut" : "hide"](c ? d : null, e);
                }
                if (!c) {
                    e();
                }
                this._datepickerShowing = false;
                f = this._get(g, "onClose");
                if (f) {
                    f.apply(g.input ? g.input[0] : null, [ g.input ? g.input.val() : "", g ]);
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if (a.blockUI) {
                        a.unblockUI();
                        a("body").append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(b) {
            if (!a.datepicker._curInst) {
                return;
            }
            var c = a(b.target), d = a.datepicker._getInst(c[0]);
            if (c[0].id !== a.datepicker._mainDivId && c.parents("#" + a.datepicker._mainDivId).length === 0 && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && !(a.datepicker._inDialog && a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) {
                a.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            if (this._isDisabledDatepicker(e[0])) {
                return;
            }
            this._adjustInstDate(f, c + (d === "M" ? this._get(f, "showCurrentAtPos") : 0), d);
            this._updateDatepicker(f);
        },
        _gotoToday: function(b) {
            var c, d = a(b), e = this._getInst(d[0]);
            if (this._get(e, "gotoCurrent") && e.currentDay) {
                e.selectedDay = e.currentDay;
                e.drawMonth = e.selectedMonth = e.currentMonth;
                e.drawYear = e.selectedYear = e.currentYear;
            } else {
                c = new Date();
                e.selectedDay = c.getDate();
                e.drawMonth = e.selectedMonth = c.getMonth();
                e.drawYear = e.selectedYear = c.getFullYear();
            }
            this._notifyChange(e);
            this._adjustDate(d);
        },
        _selectMonthYear: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            f["selected" + (d === "M" ? "Month" : "Year")] = f["draw" + (d === "M" ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
            this._notifyChange(f);
            this._adjustDate(e);
        },
        _selectDay: function(b, c, d, e) {
            var f, g = a(b);
            if (a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0])) {
                return;
            }
            f = this._getInst(g[0]);
            f.selectedDay = f.currentDay = a("a", e).html();
            f.selectedMonth = f.currentMonth = c;
            f.selectedYear = f.currentYear = d;
            this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear));
        },
        _clearDate: function(b) {
            var c = a(b);
            this._selectDate(c, "");
        },
        _selectDate: function(b, c) {
            var d, e = a(b), f = this._getInst(e[0]);
            c = c != null ? c : this._formatDate(f);
            if (f.input) {
                f.input.val(c);
            }
            this._updateAlternate(f);
            d = this._get(f, "onSelect");
            if (d) {
                d.apply(f.input ? f.input[0] : null, [ c, f ]);
            } else if (f.input) {
                f.input.trigger("change");
            }
            if (f.inline) {
                this._updateDatepicker(f);
            } else {
                this._hideDatepicker();
                this._lastInput = f.input[0];
                if (typeof f.input[0] !== "object") {
                    f.input.focus();
                }
                this._lastInput = null;
            }
        },
        _updateAlternate: function(b) {
            var c, d, e, f = this._get(b, "altField");
            if (f) {
                c = this._get(b, "altFormat") || this._get(b, "dateFormat");
                d = this._getDate(b);
                e = this.formatDate(c, d, this._getFormatConfig(b));
                a(f).each(function() {
                    a(this).val(e);
                });
            }
        },
        noWeekends: function(a) {
            var b = a.getDay();
            return [ b > 0 && b < 6, "" ];
        },
        iso8601Week: function(a) {
            var b, c = new Date(a.getTime());
            c.setDate(c.getDate() + 4 - (c.getDay() || 7));
            b = c.getTime();
            c.setMonth(0);
            c.setDate(1);
            return Math.floor(Math.round((b - c) / 864e5) / 7) + 1;
        },
        parseDate: function(b, c, d) {
            if (b == null || c == null) {
                throw "Invalid arguments";
            }
            c = typeof c === "object" ? c.toString() : c + "";
            if (c === "") {
                return null;
            }
            var e, f, g, h = 0, i = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff, j = typeof i !== "string" ? i : new Date().getFullYear() % 100 + parseInt(i, 10), k = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, l = (d ? d.dayNames : null) || this._defaults.dayNames, m = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort, n = (d ? d.monthNames : null) || this._defaults.monthNames, o = -1, p = -1, q = -1, r = -1, s = false, t, u = function(a) {
                var c = e + 1 < b.length && b.charAt(e + 1) === a;
                if (c) {
                    e++;
                }
                return c;
            }, v = function(a) {
                var b = u(a), d = a === "@" ? 14 : a === "!" ? 20 : a === "y" && b ? 4 : a === "o" ? 3 : 2, e = a === "y" ? d : 1, f = new RegExp("^\\d{" + e + "," + d + "}"), g = c.substring(h).match(f);
                if (!g) {
                    throw "Missing number at position " + h;
                }
                h += g[0].length;
                return parseInt(g[0], 10);
            }, w = function(b, d, e) {
                var f = -1, g = a.map(u(b) ? e : d, function(a, b) {
                    return [ [ b, a ] ];
                }).sort(function(a, b) {
                    return -(a[1].length - b[1].length);
                });
                a.each(g, function(a, b) {
                    var d = b[1];
                    if (c.substr(h, d.length).toLowerCase() === d.toLowerCase()) {
                        f = b[0];
                        h += d.length;
                        return false;
                    }
                });
                if (f !== -1) {
                    return f + 1;
                } else {
                    throw "Unknown name at position " + h;
                }
            }, x = function() {
                if (c.charAt(h) !== b.charAt(e)) {
                    throw "Unexpected literal at position " + h;
                }
                h++;
            };
            for (e = 0; e < b.length; e++) {
                if (s) {
                    if (b.charAt(e) === "'" && !u("'")) {
                        s = false;
                    } else {
                        x();
                    }
                } else {
                    switch (b.charAt(e)) {
                      case "d":
                        q = v("d");
                        break;

                      case "D":
                        w("D", k, l);
                        break;

                      case "o":
                        r = v("o");
                        break;

                      case "m":
                        p = v("m");
                        break;

                      case "M":
                        p = w("M", m, n);
                        break;

                      case "y":
                        o = v("y");
                        break;

                      case "@":
                        t = new Date(v("@"));
                        o = t.getFullYear();
                        p = t.getMonth() + 1;
                        q = t.getDate();
                        break;

                      case "!":
                        t = new Date((v("!") - this._ticksTo1970) / 1e4);
                        o = t.getFullYear();
                        p = t.getMonth() + 1;
                        q = t.getDate();
                        break;

                      case "'":
                        if (u("'")) {
                            x();
                        } else {
                            s = true;
                        }
                        break;

                      default:
                        x();
                    }
                }
            }
            if (h < c.length) {
                g = c.substr(h);
                if (!/^\s+/.test(g)) {
                    throw "Extra/unparsed characters found in date: " + g;
                }
            }
            if (o === -1) {
                o = new Date().getFullYear();
            } else if (o < 100) {
                o += new Date().getFullYear() - new Date().getFullYear() % 100 + (o <= j ? 0 : -100);
            }
            if (r > -1) {
                p = 1;
                q = r;
                do {
                    f = this._getDaysInMonth(o, p - 1);
                    if (q <= f) {
                        break;
                    }
                    p++;
                    q -= f;
                } while (true);
            }
            t = this._daylightSavingAdjust(new Date(o, p - 1, q));
            if (t.getFullYear() !== o || t.getMonth() + 1 !== p || t.getDate() !== q) {
                throw "Invalid date";
            }
            return t;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7,
        formatDate: function(a, b, c) {
            if (!b) {
                return "";
            }
            var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = function(b) {
                var c = d + 1 < a.length && a.charAt(d + 1) === b;
                if (c) {
                    d++;
                }
                return c;
            }, j = function(a, b, c) {
                var d = "" + b;
                if (i(a)) {
                    while (d.length < c) {
                        d = "0" + d;
                    }
                }
                return d;
            }, k = function(a, b, c, d) {
                return i(a) ? d[b] : c[b];
            }, l = "", m = false;
            if (b) {
                for (d = 0; d < a.length; d++) {
                    if (m) {
                        if (a.charAt(d) === "'" && !i("'")) {
                            m = false;
                        } else {
                            l += a.charAt(d);
                        }
                    } else {
                        switch (a.charAt(d)) {
                          case "d":
                            l += j("d", b.getDate(), 2);
                            break;

                          case "D":
                            l += k("D", b.getDay(), e, f);
                            break;

                          case "o":
                            l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;

                          case "m":
                            l += j("m", b.getMonth() + 1, 2);
                            break;

                          case "M":
                            l += k("M", b.getMonth(), g, h);
                            break;

                          case "y":
                            l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                            break;

                          case "@":
                            l += b.getTime();
                            break;

                          case "!":
                            l += b.getTime() * 1e4 + this._ticksTo1970;
                            break;

                          case "'":
                            if (i("'")) {
                                l += "'";
                            } else {
                                m = true;
                            }
                            break;

                          default:
                            l += a.charAt(d);
                        }
                    }
                }
            }
            return l;
        },
        _possibleChars: function(a) {
            var b, c = "", d = false, e = function(c) {
                var d = b + 1 < a.length && a.charAt(b + 1) === c;
                if (d) {
                    b++;
                }
                return d;
            };
            for (b = 0; b < a.length; b++) {
                if (d) {
                    if (a.charAt(b) === "'" && !e("'")) {
                        d = false;
                    } else {
                        c += a.charAt(b);
                    }
                } else {
                    switch (a.charAt(b)) {
                      case "d":
                      case "m":
                      case "y":
                      case "@":
                        c += "0123456789";
                        break;

                      case "D":
                      case "M":
                        return null;

                      case "'":
                        if (e("'")) {
                            c += "'";
                        } else {
                            d = true;
                        }
                        break;

                      default:
                        c += a.charAt(b);
                    }
                }
            }
            return c;
        },
        _get: function(a, b) {
            return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b];
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() === a.lastVal) {
                return;
            }
            var c = this._get(a, "dateFormat"), d = a.lastVal = a.input ? a.input.val() : null, e = this._getDefaultDate(a), f = e, g = this._getFormatConfig(a);
            try {
                f = this.parseDate(c, d, g) || e;
            } catch (h) {
                d = b ? "" : d;
            }
            a.selectedDay = f.getDate();
            a.drawMonth = a.selectedMonth = f.getMonth();
            a.drawYear = a.selectedYear = f.getFullYear();
            a.currentDay = d ? f.getDate() : 0;
            a.currentMonth = d ? f.getMonth() : 0;
            a.currentYear = d ? f.getFullYear() : 0;
            this._adjustInstDate(a);
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date()));
        },
        _determineDate: function(b, c, d) {
            var e = function(a) {
                var b = new Date();
                b.setDate(b.getDate() + a);
                return b;
            }, f = function(c) {
                try {
                    return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b));
                } catch (d) {}
                var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date(), f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c);
                while (j) {
                    switch (j[2] || "d") {
                      case "d":
                      case "D":
                        h += parseInt(j[1], 10);
                        break;

                      case "w":
                      case "W":
                        h += parseInt(j[1], 10) * 7;
                        break;

                      case "m":
                      case "M":
                        g += parseInt(j[1], 10);
                        h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                        break;

                      case "y":
                      case "Y":
                        f += parseInt(j[1], 10);
                        h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                        break;
                    }
                    j = i.exec(c);
                }
                return new Date(f, g, h);
            }, g = c == null || c === "" ? d : typeof c === "string" ? f(c) : typeof c === "number" ? isNaN(c) ? d : e(c) : new Date(c.getTime());
            g = g && g.toString() === "Invalid Date" ? d : g;
            if (g) {
                g.setHours(0);
                g.setMinutes(0);
                g.setSeconds(0);
                g.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(g);
        },
        _daylightSavingAdjust: function(a) {
            if (!a) {
                return null;
            }
            a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0);
            return a;
        },
        _setDate: function(a, b, c) {
            var d = !b, e = a.selectedMonth, f = a.selectedYear, g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
            a.selectedDay = a.currentDay = g.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = g.getFullYear();
            if ((e !== a.selectedMonth || f !== a.selectedYear) && !c) {
                this._notifyChange(a);
            }
            this._adjustInstDate(a);
            if (a.input) {
                a.input.val(d ? "" : this._formatDate(a));
            }
        },
        _getDate: function(a) {
            var b = !a.currentYear || a.input && a.input.val() === "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return b;
        },
        _attachHandlers: function(b) {
            var c = this._get(b, "stepMonths"), d = "#" + b.id.replace(/\\\\/g, "\\");
            b.dpDiv.find("[data-handler]").map(function() {
                var b = {
                    prev: function() {
                        a.datepicker._adjustDate(d, -c, "M");
                    },
                    next: function() {
                        a.datepicker._adjustDate(d, +c, "M");
                    },
                    hide: function() {
                        a.datepicker._hideDatepicker();
                    },
                    today: function() {
                        a.datepicker._gotoToday(d);
                    },
                    selectDay: function() {
                        a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false;
                    },
                    selectMonth: function() {
                        a.datepicker._selectMonthYear(d, this, "M");
                        return false;
                    },
                    selectYear: function() {
                        a.datepicker._selectMonthYear(d, this, "Y");
                        return false;
                    }
                };
                a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date(), P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())), Q = this._get(a, "isRTL"), R = this._get(a, "showButtonPanel"), S = this._get(a, "hideIfNoPrevNext"), T = this._get(a, "navigationAsDateFormat"), U = this._getNumberOfMonths(a), V = this._get(a, "showCurrentAtPos"), W = this._get(a, "stepMonths"), X = U[0] !== 1 || U[1] !== 1, Y = this._daylightSavingAdjust(!a.currentDay ? new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay)), Z = this._getMinMaxDate(a, "min"), $ = this._getMinMaxDate(a, "max"), _ = a.drawMonth - V, ab = a.drawYear;
            if (_ < 0) {
                _ += 12;
                ab--;
            }
            if ($) {
                b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate()));
                b = Z && b < Z ? Z : b;
                while (this._daylightSavingAdjust(new Date(ab, _, 1)) > b) {
                    _--;
                    if (_ < 0) {
                        _ = 11;
                        ab--;
                    }
                }
            }
            a.drawMonth = _;
            a.drawYear = ab;
            c = this._get(a, "prevText");
            c = !T ? c : this.formatDate(c, this._daylightSavingAdjust(new Date(ab, _ - W, 1)), this._getFormatConfig(a));
            d = this._canAdjustMonth(a, -1, ab, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" + " title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>";
            e = this._get(a, "nextText");
            e = !T ? e : this.formatDate(e, this._daylightSavingAdjust(new Date(ab, _ + W, 1)), this._getFormatConfig(a));
            f = this._canAdjustMonth(a, +1, ab, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" + " title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>";
            g = this._get(a, "currentText");
            h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P;
            g = !T ? g : this.formatDate(g, h, this._getFormatConfig(a));
            i = !a.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>" : "";
            j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" + ">" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "";
            k = parseInt(this._get(a, "firstDay"), 10);
            k = isNaN(k) ? 0 : k;
            l = this._get(a, "showWeek");
            m = this._get(a, "dayNames");
            n = this._get(a, "dayNamesMin");
            o = this._get(a, "monthNames");
            p = this._get(a, "monthNamesShort");
            q = this._get(a, "beforeShowDay");
            r = this._get(a, "showOtherMonths");
            s = this._get(a, "selectOtherMonths");
            t = this._getDefaultDate(a);
            u = "";
            v;
            for (w = 0; w < U[0]; w++) {
                x = "";
                this.maxRows = 4;
                for (y = 0; y < U[1]; y++) {
                    z = this._daylightSavingAdjust(new Date(ab, _, a.selectedDay));
                    A = " ui-corner-all";
                    B = "";
                    if (X) {
                        B += "<div class='ui-datepicker-group";
                        if (U[1] > 1) {
                            switch (y) {
                              case 0:
                                B += " ui-datepicker-group-first";
                                A = " ui-corner-" + (Q ? "right" : "left");
                                break;

                              case U[1] - 1:
                                B += " ui-datepicker-group-last";
                                A = " ui-corner-" + (Q ? "left" : "right");
                                break;

                              default:
                                B += " ui-datepicker-group-middle";
                                A = "";
                                break;
                            }
                        }
                        B += "'>";
                    }
                    B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && w === 0 ? Q ? f : d : "") + (/all|right/.test(A) && w === 0 ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, ab, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>";
                    C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "";
                    for (v = 0; v < 7; v++) {
                        D = (v + k) % 7;
                        C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + m[D] + "'>" + n[D] + "</span></th>";
                    }
                    B += C + "</tr></thead><tbody>";
                    E = this._getDaysInMonth(ab, _);
                    if (ab === a.selectedYear && _ === a.selectedMonth) {
                        a.selectedDay = Math.min(a.selectedDay, E);
                    }
                    F = (this._getFirstDayOfMonth(ab, _) - k + 7) % 7;
                    G = Math.ceil((F + E) / 7);
                    H = X ? this.maxRows > G ? this.maxRows : G : G;
                    this.maxRows = H;
                    I = this._daylightSavingAdjust(new Date(ab, _, 1 - F));
                    for (J = 0; J < H; J++) {
                        B += "<tr>";
                        K = !l ? "" : "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>";
                        for (v = 0; v < 7; v++) {
                            L = q ? q.apply(a.input ? a.input[0] : null, [ I ]) : [ true, "" ];
                            M = I.getMonth() !== _;
                            N = M && !s || !L[0] || Z && I < Z || $ && I > $;
                            K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!M || r) && L[2] ? " title='" + L[2].replace(/'/g, "&#39;") + "'" : "") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>";
                            I.setDate(I.getDate() + 1);
                            I = this._daylightSavingAdjust(I);
                        }
                        B += K + "</tr>";
                    }
                    _++;
                    if (_ > 11) {
                        _ = 0;
                        ab++;
                    }
                    B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    x += B;
                }
                u += x;
            }
            u += j;
            a._keyEvent = false;
            return u;
        },
        _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"), r = this._get(a, "changeYear"), s = this._get(a, "showMonthAfterYear"), t = "<div class='ui-datepicker-title'>", u = "";
            if (f || !q) {
                u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
            } else {
                i = d && d.getFullYear() === c;
                j = e && e.getFullYear() === c;
                u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (k = 0; k < 12; k++) {
                    if ((!i || k >= d.getMonth()) && (!j || k <= e.getMonth())) {
                        u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>";
                    }
                }
                u += "</select>";
            }
            if (!s) {
                t += u + (f || !(q && r) ? "&#xa0;" : "");
            }
            if (!a.yearshtml) {
                a.yearshtml = "";
                if (f || !r) {
                    t += "<span class='ui-datepicker-year'>" + c + "</span>";
                } else {
                    l = this._get(a, "yearRange").split(":");
                    m = new Date().getFullYear();
                    n = function(a) {
                        var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                        return isNaN(b) ? m : b;
                    };
                    o = n(l[0]);
                    p = Math.max(o, n(l[1] || ""));
                    o = d ? Math.max(o, d.getFullYear()) : o;
                    p = e ? Math.min(p, e.getFullYear()) : p;
                    a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (;o <= p; o++) {
                        a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                    }
                    a.yearshtml += "</select>";
                    t += a.yearshtml;
                    a.yearshtml = null;
                }
            }
            t += this._get(a, "yearSuffix");
            if (s) {
                t += (f || !(q && r) ? "&#xa0;" : "") + u;
            }
            t += "</div>";
            return t;
        },
        _adjustInstDate: function(a, b, c) {
            var d = a.drawYear + (c === "Y" ? b : 0), e = a.drawMonth + (c === "M" ? b : 0), f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + (c === "D" ? b : 0), g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
            a.selectedDay = g.getDate();
            a.drawMonth = a.selectedMonth = g.getMonth();
            a.drawYear = a.selectedYear = g.getFullYear();
            if (c === "M" || c === "Y") {
                this._notifyChange(a);
            }
        },
        _restrictMinMax: function(a, b) {
            var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), e = c && b < c ? c : b;
            return d && e > d ? d : e;
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            if (b) {
                b.apply(a.input ? a.input[0] : null, [ a.selectedYear, a.selectedMonth + 1, a ]);
            }
        },
        _getNumberOfMonths: function(a) {
            var b = this._get(a, "numberOfMonths");
            return b == null ? [ 1, 1 ] : typeof b === "number" ? [ 1, b ] : b;
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null);
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
        },
        _getFirstDayOfMonth: function(a, b) {
            return new Date(a, b, 1).getDay();
        },
        _canAdjustMonth: function(a, b, c, d) {
            var e = this._getNumberOfMonths(a), f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1));
            if (b < 0) {
                f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth()));
            }
            return this._isInRange(a, f);
        },
        _isInRange: function(a, b) {
            var c, d, e = this._getMinMaxDate(a, "min"), f = this._getMinMaxDate(a, "max"), g = null, h = null, i = this._get(a, "yearRange");
            if (i) {
                c = i.split(":");
                d = new Date().getFullYear();
                g = parseInt(c[0], 10);
                h = parseInt(c[1], 10);
                if (c[0].match(/[+\-].*/)) {
                    g += d;
                }
                if (c[1].match(/[+\-].*/)) {
                    h += d;
                }
            }
            return (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h);
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff");
            b = typeof b !== "string" ? b : new Date().getFullYear() % 100 + parseInt(b, 10);
            return {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            };
        },
        _formatDate: function(a, b, c, d) {
            if (!b) {
                a.currentDay = a.selectedDay;
                a.currentMonth = a.selectedMonth;
                a.currentYear = a.selectedYear;
            }
            var e = b ? typeof b === "object" ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a));
        }
    });
    function m(b) {
        var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return b.delegate(c, "mouseout", function() {
            a(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                a(this).removeClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                a(this).removeClass("ui-datepicker-next-hover");
            }
        }).delegate(c, "mouseover", n);
    }
    function n() {
        if (!a.datepicker._isDisabledDatepicker(j.inline ? j.dpDiv.parent()[0] : j.input[0])) {
            a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            a(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                a(this).addClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                a(this).addClass("ui-datepicker-next-hover");
            }
        }
    }
    function o(b, c) {
        a.extend(b, c);
        for (var d in c) {
            if (c[d] == null) {
                b[d] = c[d];
            }
        }
        return b;
    }
    a.fn.datepicker = function(b) {
        if (!this.length) {
            return this;
        }
        if (!a.datepicker.initialized) {
            a(document).mousedown(a.datepicker._checkExternalClick);
            a.datepicker.initialized = true;
        }
        if (a("#" + a.datepicker._mainDivId).length === 0) {
            a("body").append(a.datepicker.dpDiv);
        }
        var c = Array.prototype.slice.call(arguments, 1);
        if (typeof b === "string" && (b === "isDisabled" || b === "getDate" || b === "widget")) {
            return a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c));
        }
        if (b === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c));
        }
        return this.each(function() {
            typeof b === "string" ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this ].concat(c)) : a.datepicker._attachDatepicker(this, b);
        });
    };
    a.datepicker = new l();
    a.datepicker.initialized = false;
    a.datepicker.uuid = new Date().getTime();
    a.datepicker.version = "1.11.1";
    var p = a.datepicker;
});

(function(a) {
    a.fn.dragscrollable = function(b) {
        var c = a.extend({
            dragSelector: ">:first",
            acceptPropagatedEvent: true,
            preventDefault: true
        }, b || {});
        var d = {
            mouseDownHandler: function(b) {
                if (b.which != 1 || !b.data.acceptPropagatedEvent && b.target != this) {
                    return false;
                }
                b.data.lastCoord = {
                    left: b.clientX,
                    top: b.clientY
                };
                a.event.add(document, "mouseup", d.mouseUpHandler, b.data);
                a.event.add(document, "mousemove", d.mouseMoveHandler, b.data);
                if (b.data.preventDefault) {
                    b.preventDefault();
                    return false;
                }
            },
            mouseMoveHandler: function(a) {
                var b = {
                    left: a.clientX - a.data.lastCoord.left,
                    top: a.clientY - a.data.lastCoord.top
                };
                a.data.scrollable.scrollLeft(a.data.scrollable.scrollLeft() - b.left);
                a.data.scrollable.scrollTop(a.data.scrollable.scrollTop() - b.top);
                a.data.lastCoord = {
                    left: a.clientX,
                    top: a.clientY
                };
                if (a.data.preventDefault) {
                    a.preventDefault();
                    return false;
                }
            },
            mouseUpHandler: function(b) {
                a.event.remove(document, "mousemove", d.mouseMoveHandler);
                a.event.remove(document, "mouseup", d.mouseUpHandler);
                if (b.data.preventDefault) {
                    b.preventDefault();
                    return false;
                }
            }
        };
        this.each(function() {
            var b = {
                scrollable: a(this),
                acceptPropagatedEvent: c.acceptPropagatedEvent,
                preventDefault: c.preventDefault
            };
            a(this).find(c.dragSelector).bind("mousedown", b, d.mouseDownHandler);
        });
    };
})(jQuery);