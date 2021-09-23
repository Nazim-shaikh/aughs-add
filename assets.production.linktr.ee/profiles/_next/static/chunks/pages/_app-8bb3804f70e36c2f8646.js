_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [14], {
        10: function(t, e, n) {
            n("74v/"), t.exports = n("nOHt")
        },
        "22d7": function(t, e, n) {},
        "74v/": function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("hUgY")
            }])
        },
        hUgY: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return b
            })), n.d(e, "reportWebVitals", (function() {
                return O
            }));
            var r, o = n("cpVT"),
                i = n("nKUr"),
                u = (n("q1tI"), n("LixI")),
                a = n("mOvS"),
                c = n.n(a),
                s = c()().publicRuntimeConfig,
                p = n("Antg");
            n("22d7");

            function l(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var f = c()().publicRuntimeConfig,
                _ = parseFloat(f.DD_SAMPLE_RATE);

            function b(t) {
                var e, n = t.Component,
                    r = t.pageProps;
                return (e = r).statusCode && e.statusCode >= 400 ? Object(i.jsx)(u.default, {
                    url: r.url,
                    statusCode: r.statusCode
                }) : Object(i.jsx)(n, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? l(Object(n), !0).forEach((function(e) {
                            Object(o.a)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, r))
            }

            function O(t) {
                var e = t.name,
                    n = t.label,
                    r = t.value,
                    o = t.startTime;
                "true" !== f.WEB_VITALS || "web-vital" !== n && "custom" !== n || function(t, e, n) {
                    var r;
                    window.DD_LOGS && window.DD_LOGS.logger.info("profiles.web_vitals.".concat(null !== (r = {
                        FCP: "first_contentful_paint",
                        LCP: "largest_contentful_paint",
                        CLS: "cumulative_layout_shift",
                        FID: "first_input_delay",
                        TTFB: "time_to_first_byte"
                    }[t]) && void 0 !== r ? r : t), {
                        startTime: e,
                        stage: s.STAGE,
                        value: Math.round("CLS" === t ? 1e3 * n : n)
                    })
                }(e, o, r)
            }
            p.b.init({
                clientToken: null !== (r = f.DD_CLIENT_TOKEN) && void 0 !== r ? r : "",
                sampleRate: _ || 100,
                env: f.STAGE,
                datacenter: p.a.US,
                forwardErrorsToLogs: !0
            })
        }
    },
    [
        [10, 1, 2, 3, 0, 4, 5, 6]
    ]
]);