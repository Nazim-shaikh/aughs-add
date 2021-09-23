(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var l = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        t = {},
        v = {};

    function x(a, b) {
        var c = v[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function A(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in t ? f = t : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? l(t, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === v[d] && (a = 1E9 * Math.random() >>> 0, v[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), l(f, v[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    A("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            l(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    A("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, t.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ca[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && l(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    }, "es6");

    function ea(a) {
        a = {
            next: a
        };
        a[x(t.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }
    A("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c;)
                if (this[--c] != b[--d]) return !1;
            return 0 >= d
        }
    }, "es6");

    function fa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[x(t.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    A("Array.prototype.values", function(a) {
        return a ? a : function() {
            return fa(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    A("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return fa(this, function(b) {
                return b
            })
        }
    }, "es6");
    A("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    var B = this || self;

    function ha(a) {
        return a
    };

    function C(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };

    function ia(a, b) {
        this.i = a === ja && b || "";
        this.g = ka
    }
    var ka = {},
        ja = {};
    var la = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ma = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    var D;

    function na(a, b) {
        this.g = b === oa ? a : ""
    }
    na.prototype.toString = function() {
        return this.g + ""
    };
    var oa = {};

    function pa(a) {
        if (void 0 === D) {
            var b = null;
            var c = B.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ha,
                        createScript: ha,
                        createScriptURL: ha
                    })
                } catch (d) {
                    B.console && B.console.error(d.message)
                }
                D = b
            } else D = b
        }
        a = (b = D) ? b.createScriptURL(a) : a;
        return new na(a, oa)
    };
    var qa;
    a: {
        var ra = B.navigator;
        if (ra) {
            var wa = ra.userAgent;
            if (wa) {
                qa = wa;
                break a
            }
        }
        qa = ""
    };

    function xa(a, b) {
        a.src = b instanceof na && b.constructor === na ? b.g : "type_error:TrustedResourceUrl";
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        var d = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]");
        (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function ya(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function za(a) {
        za[" "](a);
        return a
    }
    za[" "] = function() {};

    function Aa(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    var Ba = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ca(a) {
        var b = a.match(Ba);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function Da(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var Ea = /#|$/;

    function Fa(a, b) {
        var c = a.search(Ea),
            d = Da(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }
    var Ga = /[?&]($|#)/;

    function F(a, b, c) {
        for (var d = a.search(Ea), e = 0, f, g = []; 0 <= (f = Da(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.substr(e));
        a = g.join("").replace(Ga, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), 0 > c && (c = a.length), d = a.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.substr(0, d), e, a.substr(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };

    function Ha() {
        if (!B.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            B.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Ia(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    var Ka = ya(function() {
            return ma(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ja) || 1E-4 > Math.random()
        }),
        La = ya(function() {
            return -1 != qa.indexOf("MSIE")
        });

    function Ja(a) {
        return -1 != qa.indexOf(a)
    }

    function H(a) {
        return /^true$/.test(a)
    };
    var Ma = C("0.20"),
        Na = C("0.002"),
        Oa = C("0.00"),
        Pa = C("0.00"),
        Qa = H("true"),
        Ra = H("true"),
        Sa = H("true"),
        Ta = H("true");
    var Ua = null;

    function Va() {
        if (null === Ua) {
            Ua = "";
            try {
                var a = "";
                try {
                    a = B.top.location.hash
                } catch (c) {
                    a = B.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Ua = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Ua
    }

    function Wa(a, b, c) {
        var d = I;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = Va()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!La() && !Ka() && (e = Math.random(), e < b)) {
                    e = Ha();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.i[a] = !0)
        }
    }

    function Xa(a) {
        var b = I;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function Ya() {
        var a = I,
            b = [];
        Ia(a.i, function(c, d) {
            b.push(d)
        });
        Ia(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    };
    var Za = {
            K: 2,
            S: 13,
            R: 14,
            N: 16,
            M: 17,
            L: 18,
            J: 19
        },
        I = null;

    function $a() {
        return !!I && "592230571" == Xa(16)
    };

    function ab(a) {
        return "function" == typeof a
    }
    var bb = Array.isArray;

    function cb(a, b) {
        if (a && bb(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function db(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    };
    var eb = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var J = window,
        K = document;

    function fb(a) {
        var b = K.featurePolicy;
        return b && ab(b.features) ? -1 !== b.features().indexOf(a) : !1
    };
    var gb = {};

    function hb(a) {
        gb.TAGGING = gb.TAGGING || [];
        gb.TAGGING[a] = !0
    };

    function L(a) {
        if (a.u && a.hasOwnProperty("u")) return a.u;
        var b = new a;
        return a.u = b
    };

    function M() {
        var a = {};
        this.g = function() {
            var b = eb.g,
                c = eb.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.i = function(b) {
            a[eb.g] = b
        }
    };
    var N = [];

    function O() {
        var a = {};
        var b = J.google_tag_data;
        J.google_tag_data = void 0 === b ? a : b;
        a = J.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            set: ib,
            update: jb,
            addListener: kb,
            notifyListeners: lb,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function ib(a, b, c, d, e, f) {
        var g = O();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var k = g.region;
            c = c && "string" == typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.initial) h[a] = m;
                e && J.setTimeout(function() {
                    h[a] === m && m.quiet && (m.quiet = !1, mb(a), lb(), hb(2))
                }, f)
            }
        }
    }

    function jb(a, b) {
        var c = O();
        c.active = !0;
        if (void 0 != b) {
            var d = P(a);
            c = c.entries;
            c = c[a] = c[a] || {};
            c.update = "granted" === b;
            b = P(a);
            c.quiet ? (c.quiet = !1, mb(a)) : b !== d && mb(a)
        }
    }

    function kb(a, b) {
        N.push({
            s: a,
            C: b
        })
    }

    function mb(a) {
        for (var b = 0; b < N.length; ++b) {
            var c = N[b];
            bb(c.s) && -1 !== c.s.indexOf(a) && (c.B = !0)
        }
    }

    function lb(a) {
        for (var b = 0; b < N.length; ++b) {
            var c = N[b];
            if (c.B) {
                c.B = !1;
                try {
                    c.C({
                        T: a
                    })
                } catch (d) {}
            }
        }
    }

    function P(a) {
        a = O().entries[a] || {};
        return void 0 !== a.update ? a.update : a.initial
    }

    function nb(a) {
        return !(O().entries[a] || {}).quiet
    }

    function ob(a, b) {
        O().addListener(a, b)
    }

    function pb(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!nb(c[e])) return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            ob(c, function(e) {
                d || b() || (d = !0, a(e))
            })
        } else a({})
    }

    function qb(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                !1 === P(g) || d[g] || (e.push(g), d[g] = !0)
            }
            return e
        }
        var c = ["ad_storage"],
            d = {};
        b().length !== c.length && ob(c, function(e) {
            var f = b();
            0 < f.length && (e.s = f, a(e))
        })
    };

    function rb(a, b, c, d) {
        if (sb(d)) {
            d = [];
            b = String(b || tb()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function ub(a, b, c, d) {
        var e = tb(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        a = tb();
        return e != a || void 0 != c && 0 <= rb(b, a, !1, d).indexOf(c)
    }

    function vb(a, b, c) {
        function d(n, q, y) {
            if (null == y) return delete g[q], n;
            g[q] = y;
            return n + "; " + q + "=" + y
        }

        function e(n, q) {
            if (null == q) return delete g[q], n;
            g[q] = !0;
            return n + "; " + q
        }
        if (sb(c.o)) {
            if (void 0 == b) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = wb(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.U);
            f = d(f, "samesite", c.V);
            c.W &&
                (f = e(f, "secure"));
            if ((h = c.domain) && "auto" === h.toLowerCase()) {
                h = xb();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        p = d(f, "domain", m);
                    p = e(p, c.flags);
                    if (!yb(m, c.path) && ub(p, a, b, c.o)) break
                }
            } else h && "none" !== h.toLowerCase() && (f = d(f, "domain", h)), f = e(f, c.flags), yb(h, c.path) || ub(f, a, b, c.o)
        }
    }

    function zb(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        vb(a, b, c)
    }

    function wb(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var Ab = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Bb = /(^|\.)doubleclick\.net$/i;

    function yb(a, b) {
        return Bb.test(window.document.location.hostname) || "/" === b && Ab.test(a)
    }

    function tb() {
        return "null" !== window.origin ? window.document.cookie : ""
    }

    function xb() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        Bb.test(b) || Ab.test(b) || a.push("none");
        return a
    }

    function sb(a) {
        if (!(L(M).g() && a && L(M).g() && O().active)) return !0;
        if (!nb(a)) return !1;
        a = P(a);
        return null == a ? !0 : !!a
    };

    function Cb(a, b) {
        var c, d = Number(null != a.A ? a.A : void 0);
        0 !== d && (c = new Date((b || (new Date(Date.now())).getTime()) + 1E3 * (d || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c
        }
    };

    function Db(a) {
        var b = [],
            c = K.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                v: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function Q(a, b) {
        a = Db(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || b && 3 > e.length || !b && 3 !== e.length) && Number(e[1])) {
                c[a[d].v] || (c[a[d].v] = []);
                var f = {
                    version: e[0],
                    timestamp: 1E3 * Number(e[1]),
                    h: e[2]
                };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].v].push(f)
            }
        }
        return c
    };
    var Eb = /:[0-9]+$/;

    function Fb(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b) return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }

    function Gb(a, b) {
        var c = "query";
        if ("protocol" === c || "port" === c) a.protocol = Hb(a.protocol) || Hb(J.location.protocol);
        "port" === c ? a.port = String(Number(a.hostname ? a.port : J.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === c && (a.hostname = (a.hostname || J.location.hostname).replace(Eb, "").toLowerCase());
        var d = Hb(a.protocol);
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                a = b;
                break;
            case "protocol":
                a =
                    d;
                break;
            case "host":
                a = a.hostname.replace(Eb, "").toLowerCase();
                break;
            case "port":
                a = String(Number(a.port) || ("http" == d ? 80 : "https" == d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || hb(1);
                a = "/" == a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                a: if (b = a[a.length - 1], c = [], Array.prototype.indexOf) b = c.indexOf(b), b = "number" == typeof b ? b : -1;
                    else {
                        for (d = 0; d < c.length; d++)
                            if (c[d] === b) {
                                b = d;
                                break a
                            }
                        b = -1
                    }
                0 <= b && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = Fb(a,
                    b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    }

    function Hb(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    };
    var Ib = {};
    var Jb = /^\w+$/,
        Kb = /^[\w-]+$/,
        Lb = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function R() {
        if (!L(M).g() || !L(M).g() || !O().active) return !0;
        var a = P("ad_storage");
        return null == a ? !0 : !!a
    }

    function Mb(a, b) {
        nb("ad_storage") ? R() ? a() : qb(a) : b ? hb(3) : pb(function() {
            Mb(a, !0)
        })
    }

    function Nb(a) {
        return S(a).map(function(b) {
            return b.h
        })
    }

    function S(a) {
        var b = [];
        if ("null" === J.origin || !K.cookie) return b;
        a = rb(a, K.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = {
                j: c.j
            }, d++) {
            var e = Ob(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.j = f.h;
                var g = f.timestamp;
                f = f.labels;
                var h = cb(b, function(k) {
                    return function(m) {
                        return m.h === k.j
                    }
                }(c));
                h ? (h.timestamp = Math.max(h.timestamp, g), h.labels = Pb(h.labels, f || [])) : b.push({
                    version: e,
                    h: c.j,
                    timestamp: g,
                    labels: f
                })
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Qb(b)
    }

    function Pb(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
        return d
    }

    function Sb(a) {
        return a && "string" == typeof a && a.match(Jb) ? a : "_gcl"
    }

    function Tb() {
        var a = J.location.href,
            b = K.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || hb(1), c = "/" + c);
        a = b.hostname.replace(Eb, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = Gb(d, "gclid");
        c = Gb(d, "gclsrc");
        a = Gb(d, "wbraid");
        var e = Gb(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""), b = b || Fb(d, "gclid"), c = c || Fb(d, "gclsrc"), a = a || Fb(d, "wbraid"));
        return Ub(b, c, e, a)
    }

    function Ub(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && Kb.test(d) && (f.gbraid = d, e(d, "gb"));
        if (void 0 !== a && a.match(Kb)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return f
    }

    function Vb() {
        var a = {},
            b = Tb();
        Mb(function() {
            Wb(b, !1, a)
        })
    }

    function Wb(a, b, c, d, e) {
        function f(n) {
            n = ["GCL", p, n];
            0 < e.length && n.push(e.join("."));
            return n.join(".")
        }

        function g(n, q) {
            if (n = Xb(n, h)) zb(n, q, k), m = !0
        }
        c = c || {};
        e = e || [];
        var h = Sb(c.prefix);
        d = d || (new Date(Date.now())).getTime();
        var k = Cb(c, d);
        k.o = "ad_storage";
        var m = !1,
            p = Math.round(d / 1E3);
        a.aw && g("aw", f(a.aw[0]));
        a.dc && g("dc", f(a.dc[0]));
        a.gf && g("gf", f(a.gf[0]));
        a.ha && g("ha", f(a.ha[0]));
        a.gp && g("gp", f(a.gp[0]));
        if ((void 0 == Ib.enable_gbraid_cookie_write ? 0 : Ib.enable_gbraid_cookie_write) && !m && a.gb) {
            a = a.gb[0];
            d =
                Xb("gb", h);
            c = !1;
            if (!b)
                for (b = S(d), d = 0; d < b.length; d++) b[d].h === a && b[d].labels && 0 < b[d].labels.length && (c = !0);
            c || g("gb", f(a))
        }
    }

    function Xb(a, b) {
        a = Lb[a];
        if (void 0 !== a) return b + a
    }

    function Yb(a) {
        return 0 !== Zb(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }

    function Ob(a) {
        a = Zb(a.split("."));
        return 0 === a.length ? null : {
            version: a[0],
            h: a[2],
            timestamp: 1E3 * (Number(a[1]) || 0),
            labels: a.slice(3)
        }
    }

    function Zb(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Kb.test(a[2]) ? [] : a
    }

    function Qb(a) {
        return a.filter(function(b) {
            return Kb.test(b.h)
        })
    }

    function $b() {
        var a = ["aw"],
            b = {};
        if ("null" !== J.origin) {
            for (var c = Sb(b.prefix), d = {}, e = 0; e < a.length; e++) Lb[a[e]] && (d[a[e]] = Lb[a[e]]);
            Mb(function() {
                db(d, function(f, g) {
                    g = rb(c + g, K.cookie, void 0, "ad_storage");
                    g.sort(function(p, n) {
                        return Yb(n) - Yb(p)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = Yb(h);
                        var k = 0 !== Zb(h.split(".")).length ? h.split(".").slice(3) : [],
                            m = {};
                        h = 0 !== Zb(h.split(".")).length ? h.split(".")[2] : void 0;
                        m[f] = [h];
                        Wb(m, !0, b, g, k)
                    }
                })
            })
        }
    }

    function ac(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!R()) return e;
        var f = S(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        1 !== e[0] && (d = f[0], f = f[0].timestamp, b = [d.version, Math.round(f / 1E3), d.h].concat(d.labels || [], [b]).join("."), c = Cb(c, f), c.o = "ad_storage", zb(a, b, c));
        return e
    }

    function bc(a, b) {
        b = Sb(b);
        a = Xb(a, b);
        if (!a) return 0;
        a = S(a);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function cc(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var dc = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        ec = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        fc = /^\d+\.fls\.doubleclick\.net$/,
        gc = /;gac=([^;?]+)/,
        hc = /;gacgb=([^;?]+)/,
        ic = /;gclaw=([^;?]+)/,
        jc = /;gclgb=([^;?]+)/;

    function kc(a, b, c) {
        if (fc.test(a.location.host)) return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(dc) ? decodeURIComponent(b[1]) : "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].h);
            a.push(d + ":" + c.join(","))
        }
        return 0 < a.length ? a.join(";") : ""
    }

    function lc(a, b, c, d) {
        var e = R() ? Q("_gac_gb", !0) : {},
            f = [],
            g = !1,
            h;
        for (h in e) {
            var k = ac("_gac_gb_" + h, b, c, d);
            g = g || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            f.push(h + ":" + k.join(","))
        }
        return {
            F: g ? f.join(";") : "",
            D: kc(a, e, hc)
        }
    }

    function mc(a, b, c, d) {
        if (fc.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(ec)) return [{
                h: a[1]
            }]
        } else return S((b || "_gcl") + c);
        return []
    }

    function nc(a, b) {
        return mc(a, b, "_aw", ic).map(function(c) {
            return c.h
        }).join(".")
    }

    function oc(a, b) {
        return mc(a, b, "_gb", jc).map(function(c) {
            return c.h
        }).join(".")
    }

    function pc(a, b) {
        var c = "" !== oc(a, b) || 0 < x(Object, "keys").call(Object, R() ? Q("_gac_gb", !0) : {}).length;
        a = "" !== nc(a, b) || "" !== kc(a, R() ? Q() : {}, gc);
        return c && a
    }

    function qc(a) {
        0 !== Nb("_gcl_aw").length || a && 0 !== Nb(a + "_aw").length || (Vb(), $b())
    }

    function rc(a, b, c) {
        a = ac((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return 0 === a.length || a.every(function(d) {
            return 0 === d
        }) ? "" : a.join(".")
    };

    function sc(a) {
        var b = B.performance;
        return b && b.timing && b.timing[a] || 0
    };
    var tc = {
        O: 0,
        G: 1,
        P: 2,
        I: 3,
        H: 4
    };

    function uc() {
        this.g = {}
    }

    function vc(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }

    function wc(a) {
        var b = L(uc);
        var c = void 0 === c ? B : c;
        c = c.performance;
        vc(b, a, c && c.now ? c.now() : null)
    }

    function xc() {
        function a() {
            return vc(b, 0, sc("loadEventStart") - sc("navigationStart"))
        }
        var b = L(uc);
        0 != sc("loadEventStart") ? a() : window.addEventListener("load", a)
    }

    function yc(a, b) {
        b.google_tag_manager && b.google_tag_manager._li && (b = b.google_tag_manager._li, vc(a, 4, b.cbt), vc(a, 3, b.cst))
    }

    function zc() {
        var a = L(uc);
        return x(Object, "values").call(Object, tc).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };

    function Ac(a, b, c) {
        a = Bc(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function Bc(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    var Cc = {},
        Dc = null;

    function Ec(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!Dc)
            for (Dc = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Cc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Dc[h] && (Dc[h] = g)
                }
            }
        a = Cc[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | m >> 4];
            m = a[(m & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + m + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function Fc(a, b, c, d) {
        var e = Fa(c, "fmt");
        if (d) {
            var f = Fa(c, "random"),
                g = Fa(c, "label") || "";
            if (!f) return !1;
            f = Ec(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!Ac(a, f, d)) return !1
        }
        e && 4 != e && (c = F(c, "rfmt", e));
        c = F(c, "fmt", 4);
        e = Aa("SCRIPT");
        xa(e, pa(c));
        e.onload = function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null, d())
        };
        b.getElementsByTagName("script")[0].parentElement.appendChild(e);
        return !0
    };
    var Gc = H("false");

    function Hc() {
        if (ab(J.__uspapi)) {
            var a = "";
            try {
                J.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    };
    var Ic = {
            id: !0,
            origin: !0,
            destination: !0,
            start_date: !0,
            end_date: !0,
            location_id: !0
        },
        Jc = /^[a-zA-Z0-9_]+$/,
        Kc = !1,
        Lc = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" ");

    function Mc(a, b) {
        var c = a;
        return function() {
            --c;
            0 >= c && b()
        }
    }

    function T(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }

    function Nc(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }

    function V(a, b) {
        b = T(b);
        return "" != b && (a = T(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function Oc(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function Pc(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Oc(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else d = Oc(d);
                (e = Oc(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function W(a) {
        return "number" != typeof a && "string" != typeof a ? "" : T(a.toString())
    }

    function Qc(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = Rc(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds && (e.A = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (Sc(b) && b.l) var f = void 0 === b.m;
        else fc.test(a.location.host) ? f = !(ic.test(a.location.href) || gc.test(a.location.href)) : (f = Math.max(bc("aw", d), cc(R() ? Q() : {})), f = Math.max(bc("gb", d), cc(R() ? Q("_gac_gb", !0) : {})) > f);
        if (f) {
            if (void 0 !== b.m) return b.m;
            c = oc(a, d || void 0);
            f = b.google_conversion_label;
            var g = rc(f, e, b.l);
            c = V("gclgb", c) + (g ? V("mcov", g) : "");
            if (d) return b.m = c;
            d = lc(a, f, e, b.l);
            a = d.D;
            d = d.F;
            c += (a ? V("gacgb", a) : "") + (d ? V("gacmcov", d) : "");
            return b.m = c
        }
        if (d) return b = nc(a, d), V("gclaw", b);
        (b = nc(a)) && (c = V("gclaw",
            b));
        b = kc(a, R() ? Q() : {}, gc);
        return c + (b ? V("gac", b) : "")
    }

    function Tc(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function Uc(a, b, c, d, e, f) {
        var g = "https://",
            h = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var k = "googleads.g.doubleclick.net/";
                var m = "pagead/viewthroughconversion/";
                break;
            case 1:
                    k = "www.google.com/";m = "pagead/1p-conversion/";
                break;
            case 0:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "pagead/conversion/";
                break;
            case 4:
                    k = (k = d.google_gtm_experiments) && k.apcm ? "www.google.com" : k && k.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/",
                m = "pagead/privacysandbox/conversion/"
        }
        Qa && d.google_transport_url && (k = d.google_transport_url);
        "/" !== k[k.length - 1] && (k += "/");
        if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
        g = [g, k, m, T(d.google_conversion_id), h, "?random=", T(d.google_conversion_time)].join("");
        h = V("cv", d.google_conversion_js_version);
        k = V("fst", d.google_conversion_first_time);
        m = V("num", d.google_conversion_snippets);
        var p = V("fmt", d.google_conversion_format),
            n = d.google_remarketing_only ? V("userId", d.google_user_id) :
            "";
        var q = d.google_tag_for_child_directed_treatment;
        q = null == q || 0 !== q && 1 !== q ? "" : V("tfcd", q);
        var y = d.google_tag_for_under_age_of_consent;
        y = null == y || 0 !== y && 1 !== y ? "" : V("tfua", y);
        var sa = d.google_allow_ad_personalization_signals;
        sa = !1 === sa ? V("npa", 1) : !0 === sa ? V("npa", 0) : "";
        var ta = d.google_restricted_data_processing;
        ta = Sa ? !0 === ta ? V("rdp", 1) : !1 === ta ? V("rdp", 0) : "" : "";
        var bd = V("value", d.google_conversion_value),
            cd = V("currency_code", d.google_conversion_currency),
            dd = V("label", d.google_conversion_label),
            ed = V("oid",
                d.google_conversion_order_id),
            fd = V("bg", d.google_conversion_color);
        a: {
            var w = d.google_conversion_language;
            if (null != w) {
                w = w.toString();
                if (2 == w.length) {
                    w = V("hl", w);
                    break a
                }
                if (5 == w.length) {
                    w = V("hl", w.substring(0, 2)) + V("gl", w.substring(3, 5));
                    break a
                }
            }
            w = ""
        }
        var gd = V("guid", "ON"),
            hd = !d.google_conversion_domain && "GooglemKTybQhCsO" in B && "function" == typeof B.GooglemKTybQhCsO ? V("resp", "GooglemKTybQhCsO") : "",
            id = V("disvt", d.google_disable_viewthrough),
            jd = V("eid", Ya().join());
        var U = d.google_conversion_date;
        var u = [];
        if (a) {
            var E = a.screen;
            E && (u.push(V("u_h", E.height)), u.push(V("u_w", E.width)), u.push(V("u_ah", E.availHeight)), u.push(V("u_aw", E.availWidth)), u.push(V("u_cd", E.colorDepth)));
            a.history && u.push(V("u_his", a.history.length))
        }
        U && "function" == typeof U.getTimezoneOffset && u.push(V("u_tz", -U.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled && u.push(V("u_java", b.javaEnabled())), b.plugins && u.push(V("u_nplug", b.plugins.length)), b.mimeTypes && u.push(V("u_nmime", b.mimeTypes.length)));
        U = u.join("");
        u = V("gtm",
            d.google_gtm);
        b = b && b.sendBeacon ? V("sendb", "1") : "";
        E = Vc();
        var ld = V("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            ua = Pc(d.google_custom_params);
        f = Pc(f);
        f = ua.concat(0 < ua.length && 0 < f.length ? ";" : "", f);
        f = "" == f ? "" : "&".concat("data=", encodeURIComponent(f));
        ua = Qc(c, d);
        var Rb = d.google_conversion_page_url,
            md = d.google_conversion_referrer_url,
            va = "";
        if (c) {
            if (a.top == a) var r = 0;
            else {
                var G = a.location.ancestorOrigins;
                if (G) r = G[G.length - 1] == a.location.origin ? 1 : 2;
                else {
                    G = a.top;
                    try {
                        var z;
                        if (z = !!G && null != G.location.href) c: {
                            try {
                                za(G.foo);
                                z = !0;
                                break c
                            } catch (nd) {}
                            z = !1
                        }
                        r = z
                    } catch (nd) {
                        r = !1
                    }
                    r = r ? 1 : 2
                }
            }
            z = Rb ? Rb : 1 == r ? a.top.location.href : a.location.href;
            va += V("frm", r);
            va += V("url", Nc(z));
            va += V("ref", Nc(md || c.referrer))
        }
        a = [h, k, m, p, n, q, y, sa, ta, bd, cd, dd, ed, fd, w, gd, hd, id, jd, U, u, b, E, ld, f, ua, va, Tc(c), Wc(d.google_additional_params), Wc(d.google_remarketing_only ? {} : d.google_additional_conversion_params), "&hn=" + T("www.googleadservices.com"), Xc(a)].join("");
        c = Va();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [V("mid", d.google_conversion_merchant_id), V("fcntr", d.google_basket_feed_country), V("flng", d.google_basket_feed_language), V("dscnt", d.google_basket_discount), V("bttype", d.google_basket_transaction_type)].join("");
            if (d)
                if (r = d.google_conversion_items) {
                    z = [];
                    h = 0;
                    for (k = r.length; h < k; h++) m = r[h], p = [], m && (p.push(W(m.value)), p.push(W(m.quantity)), p.push(W(m.item_id)), p.push(W(m.start_date)), p.push(W(m.end_date)), z.push("(" + p.join("*") + ")"));
                    r = 0 < z.length ? "&item=" + z.join("") : ""
                } else r = "";
            else r = "";
            c = [a, c, r].join("");
            a = 4E3 < c.length ? [a, V("item", "elngth")].join("") : c
        }
        g += a;
        1 === e ? g += [V("gcp", 1), V("sscte", 1), V("ct_cookie_present", 1)].join("") : 3 == e && (g += V("gcp", 1), g += V("ct_cookie_present", 1));
        Ra && (e = Hc(), void 0 !== e && (g += V("us_privacy", e || "error")));
        Sc(d) && (g = d.l ? g + V("gbcov", 1) : g + V("gbcov", 0));
        return g
    }

    function Yc(a) {
        if (!Gc) {
            var b = Aa("IFRAME");
            b.style.display = "none";
            b.src = "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";
            a.body.appendChild(b)
        }
    }

    function Zc() {
        return new Image
    }

    function $c(a, b, c, d, e, f) {
        var g = c.onload_callback,
            h;
        e && g && g.call ? h = g : h = function() {};
        d += V("async", "1");
        e = c.google_gtm_url_processor;
        ab(e) && (d = e(d));
        g = (e = c.opt_image_generator) && e.call;
        if (!(f = g || !f)) {
            if (c.google_conversion_domain) var k = !1;
            else try {
                k = Fc(a, b, d, h)
            } catch (m) {
                k = !1
            }
            f = !k
        }
        f && (a = Zc, g && (a = e), a = a(), a.src = d, a.onload = h)
    }

    function ad(a, b) {
        I && "376635471" == Xa(2) && ("complete" === b.readyState ? Yc(b) : a.addEventListener ? a.addEventListener("load", function() {
            Yc(b)
        }) : a.attachEvent("onload", function() {
            Yc(b)
        }))
    }

    function kd(a) {
        if ("landing" === a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" === typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        void 0 === a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function od(a, b) {
        function c(f) {
            d[f] = b && null != b[f] ? b[f] : a[f]
        }
        for (var d = {}, e = 0; e < Lc.length; e++) c(Lc[e]);
        c("onload_callback");
        return d
    }

    function pd(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = void 0;
            d.hasOwnProperty("google_business_vertical") ? (e = d.google_business_vertical, b[e] = b[e] || {
                google_business_vertical: e
            }) : (e = "", Object.prototype.hasOwnProperty.call(b, e) || (b[e] = {}));
            e = b[e];
            for (var f = x(Object, "keys").call(Object, d).filter(function(k) {
                    return Ic.hasOwnProperty(k)
                }), g = 0; g < f.length; g++) {
                var h = f[g];
                h in e || (e[h] = []);
                e[h].push(d[h])
            }
        }
        return x(Object, "values").call(Object, b)
    }

    function Vc() {
        var a = "";
        $a() && (a = zc().map(function(b) {
            return b.join("-")
        }).join("_"));
        return V("li", a)
    }

    function Xc(a) {
        if (!Ta || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!ab(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : V("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function Wc(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += V(c, a[c]));
        return b
    }

    function Sc(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }

    function Rc(a) {
        return a.google_gcl_cookie_prefix && "_gcl" !== a.google_gcl_cookie_prefix && Jc.test(a.google_gcl_cookie_prefix) ? a.google_gcl_cookie_prefix : ""
    }

    function qd(a, b, c, d) {
        if (!d.google_remarketing_only && rd(c, d)) {
            var e = d.google_additional_conversion_params || {},
                f = d.google_gtm_experiments;
            e.capi = f && f.apcm ? "2" : "1";
            d.google_additional_conversion_params = e;
            $c(a, c, d, Uc(a, b, c, d, 4), !1, !1)
        }
    }

    function rd(a, b) {
        if (b.google_transport_url) return !1;
        if ((b = b.google_gtm_experiments) && b.apcm) return !0;
        if (!b || !b.capi) return !1;
        if (!(b = Kc))
            if (b = x("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "A5OJkPEoICe/luEx3lEfB03JrHAKQQ4T0hNXu0wsfMydHldQnwm3jaJ0E5KeQgFnhJJ64/Ayh1elZwM+QwHXmQ8AAACfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", a = void 0 === a ? window.document : a, b && a.head) {
                var c = document.createElement("meta");
                a.head.appendChild(c);
                c.httpEquiv = "origin-trial";
                c.content = b;
                b = c
            } else b = null;
        b ? (Kc = !0, a = fb("conversion-measurement") || fb("attribution-reporting")) :
            a = !1;
        return a
    };
    var sd = !1,
        td = document.currentScript && document.currentScript.src || "";

    function ud(a, b, c) {
        try {
            if (!sd && (sd = !0, !c.google_gtm)) {
                var d = !1,
                    e = a.location.search.split("?")[1];
                e && 0 <= la(e.split("&"), "gtm_debug=x") && (d = !0);
                d || 0 !== b.referrer.indexOf("https://tagassistant.google.com/") || (d = !0);
                !d && 0 <= la(b.cookie.split("; "), "__TAG_ASSISTANT=x") && (d = !0);
                !d && a.__TAG_ASSISTANT_API && (d = !0);
                !d && b.documentElement.hasAttribute("data-tag-assistant-present") && (d = !0);
                if (d) {
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var f = new ia(ja, "https://www.googletagmanager.com/debug/bootstrap"),
                            g = pa(f instanceof ia && f.constructor === ia && f.g === ka ? f.i : "type_error:Const"),
                            h = b.createElement("script");
                        xa(h, g);
                        var k = b.getElementsByTagName("script")[0];
                        k && k.parentNode && k.parentNode.insertBefore(h, k)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: "AW-" + (c.google_conversion_id || ""),
                            scriptSource: td
                        }
                    })
                }
            }
        } catch (m) {}
    };

    function vd(a, b) {
        a.onload_callback && "function" == typeof a.onload_callback.call ? a.onload_callback = Mc(b, a.onload_callback) : a.onload_callback = function() {}
    }

    function wd(a, b, c, d) {
        ud(a, c, d);
        $a() && (wc(2), d.google_gtm && yc(L(uc), a));
        var e = !1;
        if (3 != d.google_conversion_format) return !1;
        try {
            if (kd(d)) {
                d.google_remarketing_only && d.google_enable_display_cookie_match && !Gc && I && Wa(["376635470", "376635471"], Ma, 2);
                d.google_remarketing_only && !d.google_conversion_domain && I && Wa(["759238990", "759238991"], Pa, 13);
                !d.google_remarketing_only || d.google_conversion_domain || I && ("759248991" == Xa(14) || "759248990" == Xa(14)) || I && Wa(["759248990", "759248991"], Oa, 14);
                !1 !== d.google_conversion_linker &&
                    (d.google_gtm || qc(d.google_gcl_cookie_prefix));
                if (1 == d.google_remarketing_only && null != d.google_gtag_event_data && null != d.google_gtag_event_data.items && d.google_gtag_event_data.items.constructor === Array && 0 < d.google_gtag_event_data.items.length) xd(a, b, c, d);
                else {
                    var f = !1;
                    x("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") && (f = !0);
                    var g = d.google_additional_params;
                    g && g.dg && (f = "e" === g.dg);
                    g = function(h, k) {
                        k = void 0 === k ? !0 : k;
                        $c(a, c, d, Uc(a, b, c, d, h), k, !0)
                    };
                    d.google_remarketing_only ? g(2) : f ?
                        (vd(d, 2), qd(a, b, c, d), g(1), g(3)) : (qd(a, b, c, d), g(0), Sc(d) && pc(c, Rc(d)) && (d.l = !0, g(0, !1)))
                }
                d.google_remarketing_only && d.google_enable_display_cookie_match && ad(a, c);
                e = !0
            }
        } catch (h) {}
        return e
    }

    function xd(a, b, c, d) {
        var e = pd(d.google_gtag_event_data.items);
        vd(d, e.length);
        for (var f = 0; f < e.length; f++) $c(a, c, d, Uc(a, b, c, d, 2, e[f]), !0, !0), d.google_conversion_time = d.google_conversion_time + 1
    };
    I = new function() {
        var a = [],
            b = 0,
            c;
        for (c in Za) a[b++] = Za[c];
        this.i = {};
        this.g = {};
        a = a || [];
        b = 0;
        for (c = a.length; b < c; ++b) this.g[a[b]] = ""
    };
    Wa(["592230570", "592230571"], Na, 16);
    $a() && (wc(1), xc());

    function yd(a, b, c) {
        function d(m, p) {
            var n = new Image;
            n.onload = m;
            n.src = p
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = Bc(a, !1),
                    p = m[b];
                p && (delete m[b], (m = p[0]) && m.call && m())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= Da(g, 0, "rmt_tld", g.search(Ea)) && 0 <= Da(g, 0, "ipr", g.search(Ea)) && !h.match(Ba)[6] && (h += Ca(g), c[1] = F(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = Fa(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ? (k.onload = e, k.src = h) : d(e, h);
                    break;
                case 4:
                    Fc(a, a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break
                        } else h = F(h, "sendb", 2);
                    h = F(h, "fmt", 3);
                default:
                    d(e, h)
            }
        }
        e()
    }
    var X = ["GooglemKTybQhCsO"],
        Y = B;
    X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
    for (var Z; X.length && (Z = X.shift());) X.length || void 0 === yd ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = yd;
    window.google_trackConversion = function(a) {
        var b = window,
            c = navigator,
            d = document;
        a = od(b, a);
        a.google_conversion_format = 3;
        var e = !!a.google_gtm;
        L(M).i(e);
        return wd(b, c, d, a)
    };
}).call(this);