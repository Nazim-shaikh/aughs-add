(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [5], {
        ABxZ: function(e, t, n) {
            "use strict";
            var r = n("nKUr"),
                i = n("q1tI"),
                o = n("g4pe"),
                a = n.n(o),
                s = n("tRls"),
                u = n("yEjR"),
                c = n("ZJoe"),
                f = n("VwCi");
            t.a = function(e) {
                var t = e.message,
                    n = e.pageTitle,
                    o = e.cta,
                    l = void 0 === o ? {
                        title: "Return to the homepage",
                        url: "https://linktr.ee"
                    } : o,
                    d = e.username;
                return Object(i.useEffect)((function() {
                    d && Object(f.f)(d)
                }), []), Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(a.a, {
                        children: [Object(r.jsx)(u.b, {}), Object(r.jsx)(u.c, {
                            googleOptimize: !0
                        }), d && Object(r.jsx)(c.a, {}), Object(r.jsx)("title", {
                            children: n
                        })]
                    }), Object(r.jsx)(s.ThemeProvider, {
                        theme: s.theme,
                        children: Object(r.jsxs)(s.Flex, {
                            width: "100%",
                            height: "100vh",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            overflowX: "hidden",
                            px: "x3",
                            children: [Object(r.jsx)(s.Box, {
                                width: "x25",
                                marginTop: "15.741vh",
                                marginBottom: "x11",
                                children: Object(r.jsx)(s.Logo, {
                                    width: "100%",
                                    type: "green",
                                    height: "100%"
                                })
                            }), Object(r.jsxs)(s.Flex, {
                                flexDirection: "column",
                                alignItems: "center",
                                flex: "1 100%",
                                marginBottom: "x8",
                                maxWidth: "538px",
                                children: [Object(r.jsx)(s.Box, {
                                    marginBottom: "x5",
                                    children: Object(r.jsx)(s.Heading, {
                                        level: "h4",
                                        as: "h2",
                                        textAlign: "center",
                                        "data-testid": "MessageCopy",
                                        children: t
                                    })
                                }), Object(r.jsxs)(s.Box, {
                                    paddingX: "x4",
                                    children: [l.preface && Object(r.jsxs)(s.Text, {
                                        level: "p4",
                                        display: "inline",
                                        children: [l.preface, " "]
                                    }), Object(r.jsx)(s.Link, {
                                        href: l.url,
                                        children: l.title
                                    })]
                                })]
                            }), Object(r.jsx)(s.Box, {
                                width: "x17",
                                marginBottom: "x13",
                                children: Object(r.jsx)(s.Logo, {
                                    width: "100%",
                                    height: "100%"
                                })
                            })]
                        })
                    })]
                })
            }
        },
        Antg: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Z
            })), n.d(t, "b", (function() {
                return Ze
            }));
            var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function i(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            u(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            }

            function o(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (s) {
                                o = [6, s], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }

            function a() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    i = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }
            var s, u = function(e) {
                    return Array.isArray(e)
                },
                c = function(e) {
                    return !Array.isArray(e) && "object" === typeof e && null !== e
                };

            function f() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                for (var r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    void 0 !== o && null !== o && (e = d(e, o, l()))
                }
                return e
            }

            function l() {
                if ("undefined" !== typeof WeakSet) {
                    var e = new WeakSet;
                    return {
                        hasAlreadyBeenSeen: function(t) {
                            var n = e.has(t);
                            return n || e.add(t), n
                        }
                    }
                }
                var t = [];
                return {
                    hasAlreadyBeenSeen: function(e) {
                        var n = t.indexOf(e) >= 0;
                        return n || t.push(e), n
                    }
                }
            }

            function d(e, t, n) {
                if (void 0 === t) return e;
                if (!c(t) && !u(t)) return t;
                if (!n.hasAlreadyBeenSeen(t)) {
                    if (c(t) && (void 0 === e || c(e))) {
                        var r = e || {};
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = d(r[i], t[i], n));
                        return r
                    }
                    if (u(t) && (void 0 === e || u(e))) {
                        (r = e || []).length = Math.max(r.length, t.length);
                        for (var o = 0; o < t.length; o += 1) r[o] = d(r[o], t[o], n);
                        return r
                    }
                    return t
                }
            }

            function p(e) {
                var t = (e.name || "Error") + ": " + e.message;
                return e.stack.forEach((function(e) {
                    var n = "?" === e.func ? "<anonymous>" : e.func,
                        r = e.args && e.args.length > 0 ? "(" + e.args.join(", ") + ")" : "",
                        i = e.line ? ":" + e.line : "",
                        o = e.line && e.column ? ":" + e.column : "";
                    t += "\n  at " + n + r + " @ " + e.url + i + o
                })), t
            }! function(e) {
                e.AGENT = "agent", e.CONSOLE = "console", e.NETWORK = "network", e.SOURCE = "source", e.LOGGER = "logger", e.CUSTOM = "custom"
            }(s || (s = {}));
            var h = /[^\u0000-\u007F]/,
                g = function() {
                    function e(e, t, n) {
                        void 0 === n && (n = !1), this.endpointUrl = e, this.bytesLimit = t, this.withBatchTime = n
                    }
                    return e.prototype.send = function(e, t) {
                        var n = this.withBatchTime ? function(e) {
                            return e + (-1 === e.indexOf("?") ? "?" : "&") + "batch_time=" + (new Date).getTime()
                        }(this.endpointUrl) : this.endpointUrl;
                        if (navigator.sendBeacon && t < this.bytesLimit && navigator.sendBeacon(n, e)) return;
                        var r = new XMLHttpRequest;
                        r.open("POST", n, !0), r.send(e)
                    }, e
                }();
            var v = function() {
                    function e(e, t, n, r, i, o) {
                        void 0 === o && (o = U), this.request = e, this.maxSize = t, this.bytesLimit = n, this.maxMessageSize = r, this.flushTimeout = i, this.beforeUnloadCallback = o, this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesSize = 0, this.bufferMessageCount = 0, this.flushOnVisibilityHidden(), this.flushPeriodically()
                    }
                    return e.prototype.add = function(e) {
                        this.addOrUpdate(e)
                    }, e.prototype.upsert = function(e, t) {
                        this.addOrUpdate(e, t)
                    }, e.prototype.flush = function() {
                        if (0 !== this.bufferMessageCount) {
                            var e = a(this.pushOnlyBuffer, function(e) {
                                var t = [];
                                return Object.keys(e).forEach((function(n) {
                                    t.push(e[n])
                                })), t
                            }(this.upsertBuffer));
                            this.request.send(e.join("\n"), this.bufferBytesSize), this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesSize = 0, this.bufferMessageCount = 0
                        }
                    }, e.prototype.sizeInBytes = function(e) {
                        return h.test(e) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(e).length : new Blob([e]).size : e.length
                    }, e.prototype.addOrUpdate = function(e, t) {
                        var n = this.process(e),
                            r = n.processedMessage,
                            i = n.messageBytesSize;
                        i >= this.maxMessageSize ? console.warn("Discarded a message whose size was bigger than the maximum allowed size " + this.maxMessageSize + "KB.") : (this.hasMessageFor(t) && this.remove(t), this.willReachedBytesLimitWith(i) && this.flush(), this.push(r, i, t), this.isFull() && this.flush())
                    }, e.prototype.process = function(e) {
                        var t = H(e);
                        return {
                            processedMessage: t,
                            messageBytesSize: this.sizeInBytes(t)
                        }
                    }, e.prototype.push = function(e, t, n) {
                        this.bufferMessageCount > 0 && (this.bufferBytesSize += 1), void 0 !== n ? this.upsertBuffer[n] = e : this.pushOnlyBuffer.push(e), this.bufferBytesSize += t, this.bufferMessageCount += 1
                    }, e.prototype.remove = function(e) {
                        var t = this.upsertBuffer[e];
                        delete this.upsertBuffer[e];
                        var n = this.sizeInBytes(t);
                        this.bufferBytesSize -= n, this.bufferMessageCount -= 1, this.bufferMessageCount > 0 && (this.bufferBytesSize -= 1)
                    }, e.prototype.hasMessageFor = function(e) {
                        return void 0 !== e && void 0 !== this.upsertBuffer[e]
                    }, e.prototype.willReachedBytesLimitWith = function(e) {
                        return this.bufferBytesSize + e + 1 >= this.bytesLimit
                    }, e.prototype.isFull = function() {
                        return this.bufferMessageCount === this.maxSize || this.bufferBytesSize >= this.bytesLimit
                    }, e.prototype.flushPeriodically = function() {
                        var e = this;
                        setTimeout((function() {
                            e.flush(), e.flushPeriodically()
                        }), this.flushTimeout)
                    }, e.prototype.flushOnVisibilityHidden = function() {
                        var e = this;
                        navigator.sendBeacon && (q(window, L.BEFORE_UNLOAD, this.beforeUnloadCallback), q(document, L.VISIBILITY_CHANGE, (function() {
                            "hidden" === document.visibilityState && e.flush()
                        })), q(window, L.BEFORE_UNLOAD, (function() {
                            return e.flush()
                        })))
                    }, e
                }(),
                m = "?",
                y = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

            function b(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var w, x = function() {
                    var e, t, n, r, i, o, a = [];

                    function s(e, t, n) {
                        var r;
                        for (var i in a)
                            if (b(a, i)) try {
                                a[i](e, t, n)
                            } catch (o) {
                                r = o
                            }
                        if (r) throw r
                    }

                    function u(e, r, i, o, a) {
                        if (t) E.augmentStackTraceWithInitialElement(t, r, i, "" + e), f();
                        else if (a) s(E(a), !0, a);
                        else {
                            var u, c = {
                                    url: r,
                                    column: o,
                                    line: i
                                },
                                l = e;
                            if ("[object String]" === {}.toString.call(e)) {
                                var d = l.match(y);
                                d && (u = d[1], l = d[2])
                            }
                            s({
                                name: u,
                                message: l,
                                stack: [c]
                            }, !0)
                        }
                        return !!n && n.apply(this, arguments)
                    }

                    function c(e) {
                        var t = e.reason || "Empty reason";
                        s(E(t), !0, t)
                    }

                    function f() {
                        var n = t,
                            r = e;
                        t = void 0, e = void 0, s(n, !1, r)
                    }

                    function l(n) {
                        if (t) {
                            if (e === n) return;
                            f()
                        }
                        var r = E(n);
                        throw t = r, e = n, setTimeout((function() {
                            e === n && f()
                        }), r.incomplete ? 2e3 : 0), n
                    }
                    return l.subscribe = function(e) {
                        ! function() {
                            if (r) return;
                            n = window.onerror, window.onerror = j(u), r = !0
                        }(),
                        function() {
                            if (o) return;
                            i = null !== window.onunhandledrejection ? window.onunhandledrejection : void 0, window.onunhandledrejection = j(c), o = !0
                        }(), a.push(e)
                    }, l.unsubscribe = function(e) {
                        for (var t = a.length - 1; t >= 0; t -= 1) a[t] === e && a.splice(t, 1);
                        0 === a.length && (r && (window.onerror = n, r = !1), o && (window.onunhandledrejection = i, o = !1))
                    }, l.traceKitWindowOnError = u, l
                }(),
                E = function() {
                    var e = !1;

                    function t(e) {
                        if (e.stack) {
                            for (var t, n, r, i, o = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, c = /\((\S*)(?::(\d+))(?::(\d+))\)/, f = e.stack.split("\n"), l = [], d = 0, p = f.length; d < p; d += 1) {
                                if (o.exec(f[d])) {
                                    var h = (r = o.exec(f[d]))[2] && 0 === r[2].indexOf("native");
                                    t = r[2] && 0 === r[2].indexOf("eval"), n = c.exec(r[2]), t && n && (r[2] = n[1], r[3] = n[2], r[4] = n[3]), i = {
                                        args: h ? [r[2]] : [],
                                        column: r[4] ? +r[4] : void 0,
                                        func: r[1] || m,
                                        line: r[3] ? +r[3] : void 0,
                                        url: h ? void 0 : r[2]
                                    }
                                } else if (s.exec(f[d])) i = {
                                    args: [],
                                    column: (r = s.exec(f[d]))[4] ? +r[4] : void 0,
                                    func: r[1] || m,
                                    line: +r[3],
                                    url: r[2]
                                };
                                else {
                                    if (!a.exec(f[d])) continue;
                                    t = (r = a.exec(f[d]))[3] && r[3].indexOf(" > eval") > -1, n = u.exec(r[3]), t && n ? (r[3] = n[1], r[4] = n[2], r[5] = void 0) : 0 !== d || r[5] || "undefined" === typeof e.columnNumber || (l[0].column = e.columnNumber + 1), i = {
                                        args: r[2] ? r[2].split(",") : [],
                                        column: r[5] ? +r[5] : void 0,
                                        func: r[1] || m,
                                        line: r[4] ? +r[4] : void 0,
                                        url: r[3]
                                    }
                                }!i.func && i.line && (i.func = m), l.push(i)
                            }
                            if (l.length) return {
                                stack: l,
                                message: e.message,
                                name: e.name
                            }
                        }
                    }

                    function n(e, t, n, r) {
                        var i = {
                            url: t,
                            line: n ? +n : void 0
                        };
                        if (i.url && i.line) {
                            e.incomplete = !1;
                            var o = e.stack;
                            if (o.length > 0 && o[0].url === i.url) {
                                if (o[0].line === i.line) return !1;
                                if (!o[0].line && o[0].func === i.func) return o[0].line = i.line, o[0].context = i.context, !1
                            }
                            return o.unshift(i), e.partial = !0, !0
                        }
                        return e.incomplete = !0, !1
                    }

                    function r(e, t) {
                        for (var i, o, a = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, s = [], u = {}, c = !1, f = r.caller; f && !c; f = f.caller) f !== E && f !== x && (o = {
                            args: [],
                            column: void 0,
                            func: m,
                            line: void 0,
                            url: void 0
                        }, i = a.exec(f.toString()), f.name ? o.func = f.name : i && (o.func = i[1]), "undefined" === typeof o.func && (o.func = i ? i.input.substring(0, i.input.indexOf("{")) : void 0), u["" + f] ? c = !0 : u["" + f] = !0, s.push(o));
                        t && s.splice(0, t);
                        var l = {
                            stack: s,
                            message: e.message,
                            name: e.name
                        };
                        return n(l, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), l
                    }

                    function i(n, i) {
                        var o, a = void 0 === i ? 0 : +i;
                        try {
                            if (o = function(e) {
                                    var t = e.stacktrace;
                                    if (t) {
                                        for (var n, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, o = t.split("\n"), a = [], s = 0; s < o.length; s += 2) {
                                            var u = void 0;
                                            r.exec(o[s]) ? u = {
                                                args: [],
                                                column: void 0,
                                                func: (n = r.exec(o[s]))[3],
                                                line: +n[1],
                                                url: n[2]
                                            } : i.exec(o[s]) && (u = {
                                                args: (n = i.exec(o[s]))[5] ? n[5].split(",") : [],
                                                column: +n[2],
                                                func: n[3] || n[4],
                                                line: +n[1],
                                                url: n[6]
                                            }), u && (!u.func && u.line && (u.func = m), u.context = [o[s + 1]], a.push(u))
                                        }
                                        if (a.length) return {
                                            stack: a,
                                            message: e.message,
                                            name: e.name
                                        }
                                    }
                                }(n)) return o
                        } catch (s) {
                            e
                        }
                        try {
                            if (o = t(n)) return o
                        } catch (s) {
                            e
                        }
                        try {
                            if (o = function(e) {
                                    var t = e.message.split("\n");
                                    if (!(t.length < 4)) {
                                        var n, r = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                                            i = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                                            o = /^\s*Line (\d+) of function script\s*$/i,
                                            a = [],
                                            s = window && window.document && window.document.getElementsByTagName("script"),
                                            u = [];
                                        for (var c in s) b(s, c) && !s[c].src && u.push(s[c]);
                                        for (var f = 2; f < t.length; f += 2) {
                                            var l = void 0;
                                            r.exec(t[f]) ? l = {
                                                args: [],
                                                column: void 0,
                                                func: (n = r.exec(t[f]))[3],
                                                line: +n[1],
                                                url: n[2]
                                            } : i.exec(t[f]) ? l = {
                                                args: [],
                                                column: void 0,
                                                func: (n = i.exec(t[f]))[4],
                                                line: +n[1],
                                                url: n[3]
                                            } : o.exec(t[f]) && (n = o.exec(t[f]), l = {
                                                url: window.location.href.replace(/#.*$/, ""),
                                                args: [],
                                                column: void 0,
                                                func: "",
                                                line: +n[1]
                                            }), l && (l.func || (l.func = m), l.context = [t[f + 1]], a.push(l))
                                        }
                                        if (a.length) return {
                                            stack: a,
                                            message: t[0],
                                            name: e.name
                                        }
                                    }
                                }(n)) return o
                        } catch (s) {
                            e
                        }
                        try {
                            if (o = r(n, a + 1)) return o
                        } catch (s) {
                            e
                        }
                        return {
                            message: n.message,
                            name: n.name,
                            stack: []
                        }
                    }
                    return i.augmentStackTraceWithInitialElement = n, i.computeStackTraceFromStackProp = t, i.ofCaller = function(e) {
                        var t = 1 + (void 0 === e ? 0 : +e);
                        try {
                            throw new Error
                        } catch (n) {
                            return E(n, t + 1)
                        }
                    }, i
                }();
            ! function(e) {
                e.info = "info", e.error = "error"
            }(w || (w = {}));
            var O, T = {
                maxMessagesPerPage: 0,
                sentMessageCount: 0
            };

            function S(e) {
                if (e.internalMonitoringEndpoint) {
                    var t = function(e) {
                        var t, n = r(e.internalMonitoringEndpoint);
                        void 0 !== e.replica && (t = r(e.replica.internalMonitoringEndpoint));

                        function r(t) {
                            return new v(new g(t, e.batchBytesLimit), e.maxBatchSize, e.batchBytesLimit, e.maxMessageSize, e.flushTimeout)
                        }

                        function i(e) {
                            return f({
                                date: (new Date).getTime(),
                                view: {
                                    referrer: document.referrer,
                                    url: window.location.href
                                }
                            }, void 0 !== O ? O() : {}, e)
                        }
                        return {
                            add: function(e) {
                                var r = i(e);
                                n.add(r), t && t.add(r)
                            }
                        }
                    }(e);
                    ! function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        t.forEach((function(t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }))
                    }(T, {
                        batch: t,
                        maxMessagesPerPage: e.maxInternalMonitoringMessagesPerPage,
                        sentMessageCount: 0
                    })
                }
                return {
                    setExternalContextProvider: function(e) {
                        O = e
                    }
                }
            }

            function k(e, t, n) {
                var r = n.value;
                n.value = function() {
                    var e = T.batch ? j(r) : r;
                    return e.apply(this, arguments)
                }
            }

            function j(e) {
                return function() {
                    try {
                        return e.apply(this, arguments)
                    } catch (t) {
                        M(t);
                        try {
                            _(t)
                        } catch (t) {
                            M(t)
                        }
                    }
                }
            }

            function _(e) {
                C(r(r({}, function(e) {
                    if (e instanceof Error) {
                        var t = E(e);
                        return {
                            error: {
                                kind: t.name,
                                stack: p(t)
                            },
                            message: t.message
                        }
                    }
                    return {
                        error: {
                            stack: "Not an instance of error"
                        },
                        message: "Uncaught " + H(e)
                    }
                }(e)), {
                    status: w.error
                }))
            }

            function C(e) {
                T.batch && T.sentMessageCount < T.maxMessagesPerPage && (T.sentMessageCount += 1, T.batch.add(e))
            }

            function R(e) {
                T.debugMode = e
            }

            function M(e) {
                T.debugMode && console.warn("[INTERNAL ERROR]", e)
            }
            var L, I, B, N, A = 1e3,
                D = 6e4;

            function P(e) {
                return e ? (parseInt(e, 10) ^ 16 * Math.random() >> parseInt(e, 10) / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, P)
            }

            function U() {}

            function H(e, t, n) {
                if (null === e || void 0 === e) return JSON.stringify(e);
                var r = [!1, void 0];
                z(e) && (r = [!0, e.toJSON], delete e.toJSON);
                var i, o, a = [!1, void 0];
                "object" === typeof e && z(i = Object.getPrototypeOf(e)) && (a = [!0, i.toJSON], delete i.toJSON);
                try {
                    o = JSON.stringify(e, void 0, n)
                } catch (s) {
                    o = "<error: unable to serialize object>"
                } finally {
                    r[0] && (e.toJSON = r[1]), a[0] && (i.toJSON = a[1])
                }
                return o
            }

            function z(e) {
                return "object" === typeof e && null !== e && e.hasOwnProperty("toJSON")
            }

            function F(e) {
                return Math.floor(G() + e)
            }

            function G() {
                return void 0 === N && (N = performance.timing.navigationStart), N
            }

            function K(e) {
                if (e.origin) return e.origin;
                var t = e.host.replace(/(:80|:443)$/, "");
                return e.protocol + "//" + t
            }

            function q(e, t, n, r) {
                return $(e, [t], n, r)
            }

            function $(e, t, n, r) {
                var i = void 0 === r ? {} : r,
                    o = i.once,
                    a = i.capture,
                    s = i.passive,
                    u = j(o ? function(e) {
                        f(), n(e)
                    } : n),
                    c = s ? {
                        capture: a,
                        passive: s
                    } : a;
                t.forEach((function(t) {
                    return e.addEventListener(t, u, c)
                }));
                var f = function() {
                    return t.forEach((function(t) {
                        return e.removeEventListener(t, u, c)
                    }))
                };
                return {
                    stop: f
                }
            }! function(e) {
                e.BEFORE_UNLOAD = "beforeunload", e.CLICK = "click", e.KEY_DOWN = "keydown", e.LOAD = "load", e.POP_STATE = "popstate", e.SCROLL = "scroll", e.TOUCH_START = "touchstart", e.VISIBILITY_CHANGE = "visibilitychange", e.DOM_CONTENT_LOADED = "DOMContentLoaded", e.POINTER_DOWN = "pointerdown", e.POINTER_UP = "pointerup", e.POINTER_CANCEL = "pointercancel", e.HASH_CHANGE = "hashchange", e.PAGE_HIDE = "pagehide", e.MOUSE_DOWN = "mousedown"
            }(L || (L = {})),
            function(e) {
                e.DOCUMENT = "document", e.XHR = "xhr", e.BEACON = "beacon", e.FETCH = "fetch", e.CSS = "css", e.JS = "js", e.IMAGE = "image", e.FONT = "font", e.MEDIA = "media", e.OTHER = "other"
            }(I || (I = {})),
            function(e) {
                e.FETCH = "fetch", e.XHR = "xhr"
            }(B || (B = {}));
            var W;

            function J(e, t, n, r) {
                var i = new Date;
                i.setTime(i.getTime() + n);
                var o = "expires=" + i.toUTCString(),
                    a = r && r.crossSite ? "none" : "strict",
                    s = r && r.domain ? ";domain=" + r.domain : "",
                    u = r && r.secure ? ";secure" : "";
                document.cookie = e + "=" + t + ";" + o + ";path=/;samesite=" + a + s + u
            }

            function X(e) {
                return function(e, t) {
                    var n = e.match("(?:^|;)\\s*" + t + "\\s*=\\s*([^;]+)");
                    return n ? n[1] : void 0
                }(document.cookie, e)
            }

            function V(e) {
                if (void 0 === document.cookie || null === document.cookie) return !1;
                try {
                    var t = "dd_cookie_test_" + P(),
                        n = "test";
                    return J(t, n, A, e), X(t) === n
                } catch (r) {
                    return console.error(r), !1
                }
            }
            var Y, Z, Q = {
                    allowedTracingOrigins: [],
                    maxErrorsByMinute: 3e3,
                    maxInternalMonitoringMessagesPerPage: 15,
                    resourceSampleRate: 100,
                    sampleRate: 100,
                    silentMultipleInit: !1,
                    trackInteractions: !1,
                    requestErrorResponseLengthLimit: 32768,
                    flushTimeout: 3e4,
                    maxBatchSize: 50,
                    maxMessageSize: 262144,
                    batchBytesLimit: 16384
                },
                ee = {
                    alternate: {
                        logs: "logs",
                        rum: "rum",
                        trace: "trace"
                    },
                    classic: {
                        logs: "browser",
                        rum: "rum",
                        trace: "public-trace"
                    }
                };

            function te(e, t) {
                var n = {
                        applicationId: e.applicationId,
                        buildMode: t.buildMode,
                        clientToken: e.clientToken,
                        env: e.env,
                        proxyHost: e.proxyHost,
                        sdkVersion: t.sdkVersion,
                        service: e.service,
                        site: e.site || ae[e.datacenter || t.datacenter],
                        version: e.version
                    },
                    i = Array.isArray(e.enableExperimentalFeatures) ? e.enableExperimentalFeatures : [],
                    o = e.useAlternateIntakeDomains ? "alternate" : "classic",
                    a = function(e, t, n) {
                        if (t.proxyHost) return ["https://" + t.proxyHost + "/v1/input/"];
                        var r = [t.site];
                        t.buildMode === oe.STAGING && n && r.push(ae[Z.US]);
                        for (var i = [], o = Object.keys(ee[e]), a = 0, s = r; a < s.length; a++)
                            for (var u = s[a], c = 0, f = o; c < f.length; c++) {
                                var l = f[c];
                                i.push("https://" + ie(e, l, u) + "/v1/input/")
                            }
                        return i
                    }(o, n, void 0 !== e.replica),
                    s = r({
                        cookieOptions: ne(e),
                        isEnabled: function(e) {
                            return t = e, -1 !== i.indexOf(t);
                            var t
                        },
                        logsEndpoint: re(o, "logs", n),
                        proxyHost: e.proxyHost,
                        rumEndpoint: re(o, "rum", n),
                        service: e.service,
                        traceEndpoint: re(o, "trace", n),
                        isIntakeUrl: function(e) {
                            return a.some((function(t) {
                                return 0 === e.indexOf(t)
                            }))
                        }
                    }, Q);
                if (e.internalMonitoringApiKey && (s.internalMonitoringEndpoint = re(o, "logs", n, "browser-agent-internal-monitoring")), "allowedTracingOrigins" in e && (s.allowedTracingOrigins = e.allowedTracingOrigins), "sampleRate" in e && (s.sampleRate = e.sampleRate), "resourceSampleRate" in e && (s.resourceSampleRate = e.resourceSampleRate), "trackInteractions" in e && (s.trackInteractions = !!e.trackInteractions), n.buildMode === oe.E2E_TEST && (s.internalMonitoringEndpoint = "<<< E2E INTERNAL MONITORING ENDPOINT >>>", s.logsEndpoint = "<<< E2E LOGS ENDPOINT >>>", s.rumEndpoint = "<<< E2E RUM ENDPOINT >>>"), n.buildMode === oe.STAGING && void 0 !== e.replica) {
                    var u = r(r({}, n), {
                        applicationId: e.replica.applicationId,
                        clientToken: e.replica.clientToken,
                        site: ae[Z.US]
                    });
                    s.replica = {
                        applicationId: e.replica.applicationId,
                        internalMonitoringEndpoint: re(o, "logs", u, "browser-agent-internal-monitoring"),
                        logsEndpoint: re(o, "logs", u),
                        rumEndpoint: re(o, "rum", u)
                    }
                }
                return s
            }

            function ne(e) {
                var t = {};
                return t.secure = function(e) {
                    return !!e.useSecureSessionCookie || !!e.useCrossSiteSessionCookie
                }(e), t.crossSite = !!e.useCrossSiteSessionCookie, e.trackSessionAcrossSubdomains && (t.domain = function() {
                    if (void 0 === W) {
                        for (var e = "dd_site_test_" + P(), t = window.location.hostname.split("."), n = t.pop(); t.length && !X(e);) n = t.pop() + "." + n, J(e, "test", A, {
                            domain: n
                        });
                        W = n
                    }
                    return W
                }()), t
            }

            function re(e, t, n, r) {
                var i = "sdk_version:" + n.sdkVersion + (n.env ? ",env:" + n.env : "") + (n.service ? ",service:" + n.service : "") + (n.version ? ",version:" + n.version : ""),
                    o = ie(e, t, n.site),
                    a = n.proxyHost ? n.proxyHost : o,
                    s = n.proxyHost ? "ddhost=" + o + "&" : "",
                    u = "" + (n.applicationId ? "_dd.application_id=" + n.applicationId + "&" : "") + s + "ddsource=" + (r || "browser") + "&ddtags=" + i;
                return "https://" + a + "/v1/input/" + n.clientToken + "?" + u
            }

            function ie(e, t, n) {
                var r = ee[e][t];
                if ("classic" === e) return r + "-http-intake.logs." + n;
                var i = n.split("."),
                    o = i.pop();
                return r + ".browser-intake-" + (i.join("-") + "." + o)
            }! function(e) {
                e.US = "us", e.EU = "eu"
            }(Z || (Z = {}));
            var oe, ae = ((Y = {})[Z.EU] = "datadoghq.eu", Y[Z.US] = "datadoghq.com", Y);

            function se() {
                return "file:" !== window.location.protocol || (console.error("Execution is not allowed in the current context."), !1)
            }! function(e) {
                e.RELEASE = "release", e.STAGING = "staging", e.E2E_TEST = "e2e-test"
            }(oe || (oe = {}));
            var ue, ce, fe = function() {
                return (fe = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function le() {
                var e = {};
                return {
                    get: function() {
                        return e
                    },
                    add: function(t, n) {
                        e[t] = n
                    },
                    remove: function(t) {
                        delete e[t]
                    },
                    set: function(t) {
                        e = t
                    }
                }
            }! function(e) {
                e.debug = "debug", e.info = "info", e.warn = "warn", e.error = "error"
            }(ce || (ce = {}));
            var de, pe = ((ue = {})[ce.debug] = 0, ue[ce.info] = 1, ue[ce.warn] = 2, ue[ce.error] = 3, ue);
            Object.keys(ce);
            ! function(e) {
                e.http = "http", e.console = "console", e.silent = "silent"
            }(de || (de = {}));
            var he, ge, ve, me = function() {
                    function e(e, t, n, r) {
                        void 0 === t && (t = de.http), void 0 === n && (n = ce.debug), void 0 === r && (r = {}), this.sendLog = e, this.handlerType = t, this.level = n, this.contextManager = le(), this.contextManager.set(r)
                    }
                    return e.prototype.log = function(e, t, n) {
                            if (void 0 === n && (n = ce.info), pe[n] >= pe[this.level]) switch (this.handlerType) {
                                case de.http:
                                    this.sendLog(fe({
                                        message: e,
                                        status: n
                                    }, f(this.contextManager.get(), t)));
                                    break;
                                case de.console:
                                    console.log(n + ": " + e, f(this.contextManager.get(), t));
                                    break;
                                case de.silent:
                            }
                        }, e.prototype.debug = function(e, t) {
                            this.log(e, t, ce.debug)
                        }, e.prototype.info = function(e, t) {
                            this.log(e, t, ce.info)
                        }, e.prototype.warn = function(e, t) {
                            this.log(e, t, ce.warn)
                        }, e.prototype.error = function(e, t) {
                            var n = {
                                error: {
                                    origin: s.LOGGER
                                }
                            };
                            this.log(e, f(n, t), ce.error)
                        }, e.prototype.setContext = function(e) {
                            this.contextManager.set(e)
                        }, e.prototype.addContext = function(e, t) {
                            this.contextManager.add(e, t)
                        }, e.prototype.removeContext = function(e) {
                            this.contextManager.remove(e)
                        }, e.prototype.setHandler = function(e) {
                            this.handlerType = e
                        }, e.prototype.setLevel = function(e) {
                            this.level = e
                        },
                        function(e, t, n, r) {
                            var i, o = arguments.length,
                                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else
                                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                            o > 3 && a && Object.defineProperty(t, n, a)
                        }([k], e.prototype, "log", null), e
                }(),
                ye = function() {
                    function e(e) {
                        void 0 === e && (e = 1e4), this.limit = e, this.buffer = []
                    }
                    return e.prototype.add = function(e) {
                        this.buffer.push(e) > this.limit && this.buffer.splice(0, 1)
                    }, e.prototype.drain = function(e) {
                        this.buffer.forEach((function(t) {
                            return e(t)
                        })), this.buffer.length = 0
                    }, e
                }();

            function be(e) {
                return we(e, K(window.location)).href
            }

            function we(e, t) {
                if (function() {
                        if (void 0 !== he) return he;
                        try {
                            var e = new URL("http://test/path");
                            return he = "http://test/path" === e.href
                        } catch (t) {
                            he = !1
                        }
                        return he
                    }()) return void 0 !== t ? new URL(e, t) : new URL(e);
                if (void 0 === t && !/:/.test(e)) throw new Error("Invalid URL: '" + e + "'");
                var n = document,
                    r = n.createElement("a");
                if (void 0 !== t) {
                    var i = (n = document.implementation.createHTMLDocument("")).createElement("base");
                    i.href = t, n.head.appendChild(i), n.body.appendChild(r)
                }
                return r.href = e, r
            }
            var xe, Ee = [],
                Oe = [];

            function Te() {
                return ge || (! function() {
                    if (!window.fetch) return;
                    ve = window.fetch, window.fetch = j((function(e, t) {
                        var n = this,
                            r = t && t.method || "object" === typeof e && e.method || "GET",
                            a = be("object" === typeof e && e.url || e),
                            s = {
                                init: t,
                                method: r,
                                startTime: performance.now(),
                                url: a
                            },
                            u = function(e) {
                                return i(n, void 0, void 0, (function() {
                                    var t, n;
                                    return o(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return s.duration = performance.now() - s.startTime, "stack" in e || e instanceof Error ? (s.status = 0, s.response = p(E(e)), Oe.forEach((function(e) {
                                                    return e(s)
                                                })), [3, 6]) : [3, 1];
                                            case 1:
                                                if (!("status" in e)) return [3, 6];
                                                t = void 0, r.label = 2;
                                            case 2:
                                                return r.trys.push([2, 4, , 5]), [4, e.clone().text()];
                                            case 3:
                                                return t = r.sent(), [3, 5];
                                            case 4:
                                                return n = r.sent(), t = "Unable to retrieve response: " + n, [3, 5];
                                            case 5:
                                                s.response = t, s.responseType = e.type, s.status = e.status, Oe.forEach((function(e) {
                                                    return e(s)
                                                })), r.label = 6;
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }))
                            };
                        Ee.forEach((function(e) {
                            return e(s)
                        }));
                        var c = ve.call(this, e, s.init);
                        return c.then(j(u), j(u)), c
                    }))
                }(), ge = {
                    beforeSend: function(e) {
                        Ee.push(e)
                    },
                    onRequestComplete: function(e) {
                        Oe.push(e)
                    }
                }), ge
            }
            var Se, ke, je = [],
                _e = [];

            function Ce() {
                return xe || (Se = XMLHttpRequest.prototype.open, ke = XMLHttpRequest.prototype.send, XMLHttpRequest.prototype.open = j((function(e, t) {
                    return this._datadog_xhr = {
                        method: e,
                        startTime: -1,
                        url: be(t)
                    }, Se.apply(this, arguments)
                })), XMLHttpRequest.prototype.send = j((function(e) {
                    var t = this;
                    if (this._datadog_xhr) {
                        this._datadog_xhr.startTime = performance.now();
                        var n = this.onreadystatechange;
                        this.onreadystatechange = function() {
                            this.readyState === XMLHttpRequest.DONE && j(i)(), n && n.apply(this, arguments)
                        };
                        var r = !1,
                            i = function() {
                                r || (r = !0, t._datadog_xhr.duration = performance.now() - t._datadog_xhr.startTime, t._datadog_xhr.response = t.response, t._datadog_xhr.status = t.status, _e.forEach((function(e) {
                                    return e(t._datadog_xhr)
                                })))
                            };
                        this.addEventListener("loadend", j(i)), je.forEach((function(e) {
                            return e(t._datadog_xhr, t)
                        }))
                    }
                    return ke.apply(this, arguments)
                })), xe = {
                    beforeSend: function(e) {
                        je.push(e)
                    },
                    onRequestComplete: function(e) {
                        _e.push(e)
                    }
                }), xe
            }
            var Re, Me, Le, Ie = function() {
                function e() {
                    this.observers = []
                }
                return e.prototype.subscribe = function(e) {
                    this.observers.push(e)
                }, e.prototype.notify = function(e) {
                    this.observers.forEach((function(t) {
                        return t(e)
                    }))
                }, e
            }();

            function Be(e) {
                if (!Re) {
                    var t = new Ie;
                    ! function(e, t) {
                        function n(n, r) {
                            e.isIntakeUrl(r.url) || ! function(e) {
                                return 0 === e.status && "opaque" !== e.responseType
                            }(r) && ! function(e) {
                                return e.status >= 500
                            }(r) || t.notify({
                                message: De(n) + " error " + r.method + " " + r.url,
                                resource: {
                                    method: r.method,
                                    statusCode: r.status,
                                    url: r.url
                                },
                                source: s.NETWORK,
                                stack: Ae(r.response, e) || "Failed to load",
                                startTime: r.startTime
                            })
                        }
                        Ce().onRequestComplete((function(e) {
                            return n(B.XHR, e)
                        })), Te().onRequestComplete((function(e) {
                            return n(B.FETCH, e)
                        }))
                    }(e, t),
                    function(e) {
                        Me = console.error, console.error = j((function(t) {
                            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                            Me.apply(console, a([t], n)), e.notify({
                                message: a(["console error:", t], n).map(Ne).join(" "),
                                source: s.CONSOLE,
                                startTime: performance.now()
                            })
                        }))
                    }(t),
                    function(e) {
                        Le = function(t, n, r) {
                            var i = function(e, t, n) {
                                    return e && (void 0 !== e.message || t instanceof Error) ? {
                                        message: e.message || "Empty message",
                                        stack: p(e),
                                        type: e.name
                                    } : {
                                        message: n + " " + H(t),
                                        stack: "No stack, consider using an instance of Error",
                                        type: e && e.name
                                    }
                                }(t, r, "Uncaught"),
                                o = i.stack,
                                a = i.message,
                                u = i.type;
                            e.notify({
                                message: a,
                                stack: o,
                                type: u,
                                source: s.SOURCE,
                                startTime: performance.now()
                            })
                        }, x.subscribe(Le)
                    }(t), Re = function(e, t) {
                        var n = 0,
                            r = new Ie;
                        return t.subscribe((function(t) {
                            n < e.maxErrorsByMinute ? (n += 1, r.notify(t)) : n === e.maxErrorsByMinute && (n += 1, r.notify({
                                message: "Reached max number of errors by minute: " + e.maxErrorsByMinute,
                                source: s.AGENT,
                                startTime: performance.now()
                            }))
                        })), setInterval((function() {
                            return n = 0
                        }), D), r
                    }(e, t)
                }
                return Re
            }

            function Ne(e) {
                return "string" === typeof e ? e : e instanceof Error ? p(E(e)) : H(e, 0, 2)
            }

            function Ae(e, t) {
                return e && e.length > t.requestErrorResponseLengthLimit ? e.substring(0, t.requestErrorResponseLengthLimit) + "..." : e
            }

            function De(e) {
                return B.XHR === e ? "XHR" : "Fetch"
            }
            var Pe = 9e5,
                Ue = 144e5;

            function He(e, t, n) {
                var r = function(e, t) {
                    var n, r, i = !1,
                        o = function() {
                            i = !0, window.clearTimeout(n), n = window.setTimeout((function() {
                                i = !1
                            }), 1e3)
                        };
                    return {
                        get: function() {
                            return i || (r = X(e), o()), r
                        },
                        set: function(n, i) {
                            J(e, n, i, t), r = n, o()
                        }
                    }
                }("_dd_s", e);
                ! function(e) {
                    var t = e.get(),
                        n = X("_dd"),
                        r = X("_dd_r"),
                        i = X("_dd_l");
                    if (!t) {
                        var o = {};
                        n && (o.id = n), i && /^[01]$/.test(i) && (o.logs = i), r && /^[012]$/.test(r) && (o.rum = r), Ke(o, e)
                    }
                }(r);
                var i = new Ie,
                    o = Ge(r).id,
                    a = function(e, t, n) {
                        var r, i = !n || void 0 === n.leading || n.leading,
                            o = !n || void 0 === n.trailing || n.trailing,
                            a = !1,
                            s = !1;
                        return {
                            throttled: function() {
                                var n = this;
                                a ? s = !0 : (i ? e.apply(this) : s = !0, a = !0, r = window.setTimeout((function() {
                                    o && s && e.apply(n), a = !1, s = !1
                                }), t))
                            },
                            cancel: function() {
                                window.clearTimeout(r), a = !1, s = !1
                            }
                        }
                    }((function() {
                        var e = Ge(r),
                            a = n(e[t]),
                            s = a.trackingType,
                            u = a.isTracked;
                        e[t] = s, u && !e.id && (e.id = P(), e.created = String(Date.now())), Ke(e, r), u && o !== e.id && (o = e.id, i.notify())
                    }), 1e3).throttled;
                return a(),
                    function(e) {
                        var t = $(window, [L.CLICK, L.TOUCH_START, L.KEY_DOWN, L.SCROLL], e, {
                            capture: !0,
                            passive: !0
                        }).stop;
                        $e.push(t)
                    }(a),
                    function(e) {
                        var t = j((function() {
                                "visible" === document.visibilityState && e()
                            })),
                            n = q(document, L.VISIBILITY_CHANGE, t).stop;
                        $e.push(n);
                        var r = window.setInterval(t, 6e4);
                        $e.push((function() {
                            clearInterval(r)
                        }))
                    }((function() {
                        Ke(Ge(r), r)
                    })), {
                        getId: function() {
                            return Ge(r).id
                        },
                        getTrackingType: function() {
                            return Ge(r)[t]
                        },
                        renewObservable: i
                    }
            }
            var ze = /^([a-z]+)=([a-z0-9-]+)$/,
                Fe = "&";

            function Ge(e) {
                var t = function(e) {
                    var t = e.get(),
                        n = {};
                    (function(e) {
                        return void 0 !== e && (-1 !== e.indexOf("&") || ze.test(e))
                    })(t) && t.split(Fe).forEach((function(e) {
                        var t = ze.exec(e);
                        if (null !== t) {
                            var r = t[1],
                                i = t[2];
                            n[r] = i
                        }
                    }));
                    return n
                }(e);
                return function(e) {
                    return (void 0 === e.created || Date.now() - Number(e.created) < Ue) && (void 0 === e.expire || Date.now() < Number(e.expire))
                }(t) ? t : (qe(e), {})
            }

            function Ke(e, t) {
                if (n = e, 0 !== Object.keys(n).length) {
                    var n;
                    e.expire = String(Date.now() + Pe);
                    var r = function(e) {
                        return Object.keys(e).map((function(t) {
                            return [t, e[t]]
                        }))
                    }(e).map((function(e) {
                        return e[0] + "=" + e[1]
                    })).join(Fe);
                    t.set(r, Pe)
                } else qe(t)
            }

            function qe(e) {
                e.set("", 0)
            }
            var $e = [];
            var We;

            function Je(e, t) {
                if (!t) {
                    var n = Xe(e) === We.TRACKED;
                    return {
                        getId: function() {},
                        isTracked: function() {
                            return n
                        }
                    }
                }
                var r = He(e.cookieOptions, "logs", (function(t) {
                    return function(e, t) {
                        var n = function(e) {
                            return e === We.NOT_TRACKED || e === We.TRACKED
                        }(t) ? t : Xe(e);
                        return {
                            trackingType: n,
                            isTracked: n === We.TRACKED
                        }
                    }(e, t)
                }));
                return {
                    getId: r.getId,
                    isTracked: function() {
                        return r.getTrackingType() === We.TRACKED
                    }
                }
            }

            function Xe(e) {
                return 0 !== (t = e.sampleRate) && 100 * Math.random() <= t ? We.TRACKED : We.NOT_TRACKED;
                var t
            }! function(e) {
                e.NOT_TRACKED = "0", e.TRACKED = "1"
            }(We || (We = {}));
            var Ve = {
                buildMode: "release",
                datacenter: "us",
                sdkVersion: "1.26.3"
            };

            function Ye(e) {
                var t = window.DD_RUM;
                return t && t.getInternalContext ? t.getInternalContext(e) : void 0
            }
            var Ze = function(e) {
                var t = !1,
                    n = le(),
                    i = {},
                    o = new ye,
                    a = function(e, t) {
                        o.add([e, t])
                    },
                    s = new me(u);
                return function(e) {
                    var t = r(r({}, e), {
                        onReady: function(e) {
                            e()
                        }
                    });
                    return Object.defineProperty(t, "_setDebug", {
                        get: function() {
                            return R
                        },
                        enumerable: !1
                    }), t
                }({
                    logger: s,
                    init: j((function(r) {
                        se() && function(e) {
                            if (t) return e.silentMultipleInit || console.error("DD_LOGS is already initialized."), !1;
                            if (!e || !e.publicApiKey && !e.clientToken) return console.error("Client Token is not configured, we will not send any data."), !1;
                            if (void 0 !== e.sampleRate && (n = e.sampleRate, !(function(e) {
                                    return "number" === typeof e
                                }(n) && n >= 0 && n <= 100))) return console.error("Sample Rate should be a number between 0 and 100"), !1;
                            var n;
                            return !0
                        }(r) && (r.publicApiKey && (r.clientToken = r.publicApiKey, console.warn("Public API Key is deprecated. Please use Client Token instead.")), a = e(r, s, n.get), o.drain((function(e) {
                            var t = e[0],
                                n = e[1];
                            return a(t, n)
                        })), t = !0)
                    })),
                    getLoggerGlobalContext: j(n.get),
                    setLoggerGlobalContext: j(n.set),
                    addLoggerGlobalContext: j(n.add),
                    removeLoggerGlobalContext: j(n.remove),
                    createLogger: j((function(e, t) {
                        return void 0 === t && (t = {}), i[e] = new me(u, t.handler, t.level, fe(fe({}, t.context), {
                            logger: {
                                name: e
                            }
                        })), i[e]
                    })),
                    getLogger: j((function(e) {
                        return i[e]
                    }))
                });

                function u(e) {
                    a(e, f({
                        date: Date.now(),
                        view: {
                            referrer: document.referrer,
                            url: window.location.href
                        }
                    }, n.get()))
                }
            }((function(e, t, n) {
                var r = function(e, t) {
                        var n = te(e, t);
                        return {
                            configuration: n,
                            internalMonitoring: S(n)
                        }
                    }(e, Ve),
                    i = r.configuration,
                    o = r.internalMonitoring;
                return function(e, t, n, r, i, o) {
                    n.setExternalContextProvider((function() {
                        return f({
                            session_id: r.getId()
                        }, o(), Ye())
                    }));
                    var a = function(e, t) {
                        var n, r = i(e.logsEndpoint);
                        void 0 !== e.replica && (n = i(e.replica.logsEndpoint));

                        function i(t) {
                            return new v(new g(t, e.batchBytesLimit), e.maxBatchSize, e.batchBytesLimit, e.maxMessageSize, e.flushTimeout)
                        }
                        return {
                            add: function(i, o) {
                                var a = function(e, t, n, r) {
                                    return f(e, t, n, r)
                                }({
                                    service: e.service,
                                    session_id: t.getId()
                                }, o, Ye(), i);
                                r.add(a), n && n.add(a)
                            }
                        }
                    }(e, r);
                    return t.subscribe((function(e) {
                            i.error(e.message, f({
                                date: F(e.startTime),
                                error: {
                                    kind: e.type,
                                    origin: e.source,
                                    stack: e.stack
                                }
                            }, e.resource ? {
                                http: {
                                    method: e.resource.method,
                                    status_code: e.resource.statusCode,
                                    url: e.resource.url
                                }
                            } : void 0, Ye(e.startTime)))
                        })),
                        function(e, t) {
                            r.isTracked() && a.add(e, t)
                        }
                }(i, !1 !== e.forwardErrorsToLogs ? Be(i) : new Ie, o, Je(i, V(i.cookieOptions)), t, n)
            }));
            ! function(e, t, n) {
                var r = e[t];
                e[t] = n, r && r.q && r.q.forEach((function(e) {
                    return e()
                }))
            }(function() {
                if ("object" === typeof globalThis) return globalThis;
                Object.defineProperty(Object.prototype, "_dd_temp_", {
                    get: function() {
                        return this
                    },
                    configurable: !0
                });
                var e = _dd_temp_;
                return delete Object.prototype._dd_temp_, "object" !== typeof e && (e = "object" === typeof self ? self : "object" === typeof window ? window : {}), e
            }(), "DD_LOGS", Ze)
        },
        LixI: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return a
            }));
            var r = n("nKUr"),
                i = (n("q1tI"), n("ABxZ")),
                o = (n("Antg"), n("0lfv"));

            function a(e) {
                var t = e.url,
                    n = e.statusCode,
                    a = Object(o.b)(t, !0);
                switch (n) {
                    case 404:
                        return Object(r.jsx)(i.a, {
                            pageTitle: "Linktree | Page Not Found",
                            message: "The page you\u2019re looking for doesn\u2019t exist.",
                            username: a.length ? a : null,
                            cta: {
                                preface: "Want this to be your username?",
                                title: "Create your Linktree now.",
                                url: "https://linktr.ee/register?utm_source=linktree_profile&utm_medium=profile&utm_campaign=404_Page&utm_content=campaign&utm_term=CTA".concat(a ? "&username=".concat(a) : "")
                            }
                        });
                    default:
                        return Object(r.jsx)(i.a, {
                            pageTitle: "Linktree",
                            message: "Linktree is currently undergoing maintenance. Back soon!",
                            cta: {
                                title: "Get updates",
                                url: "https://systems.linktr.ee/"
                            }
                        })
                }
            }
            a.getInitialProps = function(e) {
                var t = e.res,
                    n = e.err;
                return {
                    statusCode: t ? t.statusCode : n ? n.statusCode : 404
                }
            }
        }
    }
]);