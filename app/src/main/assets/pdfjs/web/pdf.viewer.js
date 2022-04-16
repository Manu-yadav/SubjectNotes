"use strict";
document.webL10n = function(e, t, n) {
        function i() {
            return t.querySelectorAll('link[type="application/l10n"]')
        }

        function r() {
            var e = t.querySelector('script[type="application/l10n"]');
            return e ? JSON.parse(e.innerHTML) : null
        }

        function a(e) {
            return e ? e.querySelectorAll("*[data-l10n-id]") : []
        }

        function s(e) {
            if (!e) return {};
            var t = e.getAttribute("data-l10n-id"),
                n = e.getAttribute("data-l10n-args"),
                i = {};
            if (n) try {
                i = JSON.parse(n)
            } catch (e) {
                console.warn("could not parse arguments for #" + t)
            }
            return {
                id: t,
                args: i
            }
        }

        function o(e) {
            var n = t.createEvent("Event");
            n.initEvent("localized", !0, !1), n.language = e, t.dispatchEvent(n)
        }

        function c(e, t, n) {
            t = t || function(e) {}, n = n || function() {};
            var i = new XMLHttpRequest;
            i.open("GET", e, C), i.overrideMimeType && i.overrideMimeType("text/plain; charset=utf-8"), i.onreadystatechange = function() {
                4 == i.readyState && (200 == i.status || 0 === i.status ? t(i.responseText) : n())
            }, i.onerror = n, i.ontimeout = n;
            try {
                i.send(null)
            } catch (e) {
                n()
            }
        }

        function l(e, t, n, i) {
            function r(e) {
                return e.lastIndexOf("\\") < 0 ? e : e.replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'")
            }

            function a(e, n) {
                function i(e, n, i) {
                    function c() {
                        for (;;) {
                            if (!p.length) return void i();
                            var e = p.shift();
                            if (!h.test(e)) {
                                if (n) {
                                    if (b = u.exec(e)) {
                                        g = b[1].toLowerCase(), v = "*" !== g && g !== t && g !== m;
                                        continue
                                    }
                                    if (v) continue;
                                    if (b = d.exec(e)) return void a(s + b[1], c)
                                }
                                var l = e.match(f);
                                l && 3 == l.length && (o[l[1]] = r(l[2]))
                            }
                        }
                    }
                    var p = e.replace(l, "").split(/[\r\n]+/),
                        g = "*",
                        m = t.split("-", 1)[0],
                        v = !1,
                        b = "";
                    c()
                }

                function a(e, t) {
                    c(e, function(e) {
                        i(e, !1, t)
                    }, function() {
                        console.warn(e + " not found."), t()
                    })
                }
                var o = {},
                    l = /^\s*|\s*$/,
                    h = /^\s*#|^\s*$/,
                    u = /^\s*\[(.*)\]\s*$/,
                    d = /^\s*@import\s+url\((.*)\)\s*$/i,
                    f = /^([^=\s]*)\s*=\s*(.+)$/;
                i(e, !0, function() {
                    n(o)
                })
            }
            var s = e.replace(/[^\/]*$/, "") || "./";
            c(e, function(e) {
                y += e, a(e, function(e) {
                    for (var t in e) {
                        var i, r, a = t.lastIndexOf(".");
                        a > 0 ? (i = t.substring(0, a), r = t.substr(a + 1)) : (i = t, r = A), w[i] || (w[i] = {}), w[i][r] = e[t]
                    }
                    n && n()
                })
            }, i)
        }

        function h(e, t) {
            function n(e) {
                var t = e.href;
                this.load = function(e, n) {
                    l(t, e, n, function() {
                        console.warn(t + " not found."), console.warn('"' + e + '" resource not found'), S = "", n()
                    })
                }
            }
            e && (e = e.toLowerCase()), t = t || function() {}, u(), S = e;
            var a = i(),
                s = a.length;
            if (0 === s) {
                var c = r();
                if (c && c.locales && c.default_locale) {
                    if (console.log("using the embedded JSON directory, early way out"), !(w = c.locales[e])) {
                        var h = c.default_locale.toLowerCase();
                        for (var d in c.locales) {
                            if ((d = d.toLowerCase()) === e) {
                                w = c.locales[e];
                                break
                            }
                            d === h && (w = c.locales[h])
                        }
                    }
                    t()
                } else console.log("no resource to load, early way out");
                return o(e), void(x = "complete")
            }
            var f = null,
                p = 0;
            f = function() {
                ++p >= s && (t(), o(e), x = "complete")
            };
            for (var g = 0; g < s; g++) {
                new n(a[g]).load(e, f)
            }
        }

        function u() {
            w = {}, y = "", S = ""
        }

        function d(e) {
            function t(e, t) {
                return -1 !== t.indexOf(e)
            }

            function n(e, t, n) {
                return t <= e && e <= n
            }
            var i = {
                    af: 3,
                    ak: 4,
                    am: 4,
                    ar: 1,
                    asa: 3,
                    az: 0,
                    be: 11,
                    bem: 3,
                    bez: 3,
                    bg: 3,
                    bh: 4,
                    bm: 0,
                    bn: 3,
                    bo: 0,
                    br: 20,
                    brx: 3,
                    bs: 11,
                    ca: 3,
                    cgg: 3,
                    chr: 3,
                    cs: 12,
                    cy: 17,
                    da: 3,
                    de: 3,
                    dv: 3,
                    dz: 0,
                    ee: 3,
                    el: 3,
                    en: 3,
                    eo: 3,
                    es: 3,
                    et: 3,
                    eu: 3,
                    fa: 0,
                    ff: 5,
                    fi: 3,
                    fil: 4,
                    fo: 3,
                    fr: 5,
                    fur: 3,
                    fy: 3,
                    ga: 8,
                    gd: 24,
                    gl: 3,
                    gsw: 3,
                    gu: 3,
                    guw: 4,
                    gv: 23,
                    ha: 3,
                    haw: 3,
                    he: 2,
                    hi: 4,
                    hr: 11,
                    hu: 0,
                    id: 0,
                    ig: 0,
                    ii: 0,
                    is: 3,
                    it: 3,
                    iu: 7,
                    ja: 0,
                    jmc: 3,
                    jv: 0,
                    ka: 0,
                    kab: 5,
                    kaj: 3,
                    kcg: 3,
                    kde: 0,
                    kea: 0,
                    kk: 3,
                    kl: 3,
                    km: 0,
                    kn: 0,
                    ko: 0,
                    ksb: 3,
                    ksh: 21,
                    ku: 3,
                    kw: 7,
                    lag: 18,
                    lb: 3,
                    lg: 3,
                    ln: 4,
                    lo: 0,
                    lt: 10,
                    lv: 6,
                    mas: 3,
                    mg: 4,
                    mk: 16,
                    ml: 3,
                    mn: 3,
                    mo: 9,
                    mr: 3,
                    ms: 0,
                    mt: 15,
                    my: 0,
                    nah: 3,
                    naq: 7,
                    nb: 3,
                    nd: 3,
                    ne: 3,
                    nl: 3,
                    nn: 3,
                    no: 3,
                    nr: 3,
                    nso: 4,
                    ny: 3,
                    nyn: 3,
                    om: 3,
                    or: 3,
                    pa: 3,
                    pap: 3,
                    pl: 13,
                    ps: 3,
                    pt: 3,
                    rm: 3,
                    ro: 9,
                    rof: 3,
                    ru: 11,
                    rwk: 3,
                    sah: 0,
                    saq: 3,
                    se: 7,
                    seh: 3,
                    ses: 0,
                    sg: 0,
                    sh: 11,
                    shi: 19,
                    sk: 12,
                    sl: 14,
                    sma: 7,
                    smi: 7,
                    smj: 7,
                    smn: 7,
                    sms: 7,
                    sn: 3,
                    so: 3,
                    sq: 3,
                    sr: 11,
                    ss: 3,
                    ssy: 3,
                    st: 3,
                    sv: 3,
                    sw: 3,
                    syr: 3,
                    ta: 3,
                    te: 3,
                    teo: 3,
                    th: 0,
                    ti: 4,
                    tig: 3,
                    tk: 3,
                    tl: 4,
                    tn: 3,
                    to: 0,
                    tr: 0,
                    ts: 3,
                    tzm: 22,
                    uk: 11,
                    ur: 3,
                    ve: 3,
                    vi: 0,
                    vun: 3,
                    wa: 4,
                    wae: 3,
                    wo: 0,
                    xh: 3,
                    xog: 3,
                    yo: 0,
                    zh: 0,
                    zu: 3
                },
                r = {
                    0: function(e) {
                        return "other"
                    },
                    1: function(e) {
                        return n(e % 100, 3, 10) ? "few" : 0 === e ? "zero" : n(e % 100, 11, 99) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    2: function(e) {
                        return 0 !== e && e % 10 == 0 ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    3: function(e) {
                        return 1 == e ? "one" : "other"
                    },
                    4: function(e) {
                        return n(e, 0, 1) ? "one" : "other"
                    },
                    5: function(e) {
                        return n(e, 0, 2) && 2 != e ? "one" : "other"
                    },
                    6: function(e) {
                        return 0 === e ? "zero" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
                    },
                    7: function(e) {
                        return 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    8: function(e) {
                        return n(e, 3, 6) ? "few" : n(e, 7, 10) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    9: function(e) {
                        return 0 === e || 1 != e && n(e % 100, 1, 19) ? "few" : 1 == e ? "one" : "other"
                    },
                    10: function(e) {
                        return n(e % 10, 2, 9) && !n(e % 100, 11, 19) ? "few" : e % 10 != 1 || n(e % 100, 11, 19) ? "other" : "one"
                    },
                    11: function(e) {
                        return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : e % 10 == 0 || n(e % 10, 5, 9) || n(e % 100, 11, 14) ? "many" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
                    },
                    12: function(e) {
                        return n(e, 2, 4) ? "few" : 1 == e ? "one" : "other"
                    },
                    13: function(e) {
                        return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : 1 != e && n(e % 10, 0, 1) || n(e % 10, 5, 9) || n(e % 100, 12, 14) ? "many" : 1 == e ? "one" : "other"
                    },
                    14: function(e) {
                        return n(e % 100, 3, 4) ? "few" : e % 100 == 2 ? "two" : e % 100 == 1 ? "one" : "other"
                    },
                    15: function(e) {
                        return 0 === e || n(e % 100, 2, 10) ? "few" : n(e % 100, 11, 19) ? "many" : 1 == e ? "one" : "other"
                    },
                    16: function(e) {
                        return e % 10 == 1 && 11 != e ? "one" : "other"
                    },
                    17: function(e) {
                        return 3 == e ? "few" : 0 === e ? "zero" : 6 == e ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    18: function(e) {
                        return 0 === e ? "zero" : n(e, 0, 2) && 0 !== e && 2 != e ? "one" : "other"
                    },
                    19: function(e) {
                        return n(e, 2, 10) ? "few" : n(e, 0, 1) ? "one" : "other"
                    },
                    20: function(e) {
                        return !n(e % 10, 3, 4) && e % 10 != 9 || n(e % 100, 10, 19) || n(e % 100, 70, 79) || n(e % 100, 90, 99) ? e % 1e6 == 0 && 0 !== e ? "many" : e % 10 != 2 || t(e % 100, [12, 72, 92]) ? e % 10 != 1 || t(e % 100, [11, 71, 91]) ? "other" : "one" : "two" : "few"
                    },
                    21: function(e) {
                        return 0 === e ? "zero" : 1 == e ? "one" : "other"
                    },
                    22: function(e) {
                        return n(e, 0, 1) || n(e, 11, 99) ? "one" : "other"
                    },
                    23: function(e) {
                        return n(e % 10, 1, 2) || e % 20 == 0 ? "one" : "other"
                    },
                    24: function(e) {
                        return n(e, 3, 10) || n(e, 13, 19) ? "few" : t(e, [2, 12]) ? "two" : t(e, [1, 11]) ? "one" : "other"
                    }
                },
                a = i[e.replace(/-.*$/, "")];
            return a in r ? r[a] : (console.warn("plural form unknown for [" + e + "]"), function() {
                return "other"
            })
        }

        function f(e, t, n) {
            var i = w[e];
            if (!i) {
                if (console.warn("#" + e + " is undefined."), !n) return null;
                i = n
            }
            var r = {};
            for (var a in i) {
                var s = i[a];
                s = p(s, t, e, a), s = g(s, t, e), r[a] = s
            }
            return r
        }

        function p(e, t, n, i) {
            var r = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/,
                a = r.exec(e);
            if (!a || !a.length) return e;
            var s, o = a[1],
                c = a[2];
            if (t && c in t ? s = t[c] : c in w && (s = w[c]), o in P) {
                e = (0, P[o])(e, s, n, i)
            }
            return e
        }

        function g(e, t, n) {
            return e.replace(/\{\{\s*(.+?)\s*\}\}/g, function(e, i) {
                return t && i in t ? t[i] : i in w ? w[i] : (console.log("argument {{" + i + "}} for #" + n + " is undefined."), e)
            })
        }

        function m(e) {
            var n = s(e);
            if (n.id) {
                var i = f(n.id, n.args);
                if (!i) return void console.warn("#" + n.id + " is undefined.");
                if (i[A]) {
                    if (0 === v(e)) e[A] = i[A];
                    else {
                        for (var r = e.childNodes, a = !1, o = 0, c = r.length; o < c; o++) 3 === r[o].nodeType && /\S/.test(r[o].nodeValue) && (a ? r[o].nodeValue = "" : (r[o].nodeValue = i[A], a = !0));
                        if (!a) {
                            var l = t.createTextNode(i[A]);
                            e.insertBefore(l, e.firstChild)
                        }
                    }
                    delete i[A]
                }
                for (var h in i) e[h] = i[h]
            }
        }

        function v(e) {
            if (e.children) return e.children.length;
            if (void 0 !== e.childElementCount) return e.childElementCount;
            for (var t = 0, n = 0; n < e.childNodes.length; n++) t += 1 === e.nodeType ? 1 : 0;
            return t
        }

        function b(e) {
            e = e || t.documentElement;
            for (var n = a(e), i = n.length, r = 0; r < i; r++) m(n[r]);
            m(e)
        }
        var w = {},
            y = "",
            A = "textContent",
            S = "",
            P = {},
            x = "loading",
            C = !0;
        return P.plural = function(e, t, n, i) {
            var r = parseFloat(t);
            if (isNaN(r)) return e;
            if (i != A) return e;
            P._pluralRules || (P._pluralRules = d(S));
            var a = "[" + P._pluralRules(r) + "]";
            return 0 === r && n + "[zero]" in w ? e = w[n + "[zero]"][i] : 1 == r && n + "[one]" in w ? e = w[n + "[one]"][i] : 2 == r && n + "[two]" in w ? e = w[n + "[two]"][i] : n + a in w ? e = w[n + a][i] : n + "[other]" in w && (e = w[n + "[other]"][i]), e
        }, {
            get: function(e, t, n) {
                var i = e.lastIndexOf("."),
                    r = A;
                i > 0 && (r = e.substr(i + 1), e = e.substring(0, i));
                var a;
                n && (a = {}, a[r] = n);
                var s = f(e, t, a);
                return s && r in s ? s[r] : "{{" + e + "}}"
            },
            getData: function() {
                return w
            },
            getText: function() {
                return y
            },
            getLanguage: function() {
                return S
            },
            setLanguage: function(e, t) {
                h(e, function() {
                    t && t(), b()
                })
            },
            getDirection: function() {
                var e = ["ar", "he", "fa", "ps", "ur"],
                    t = S.split("-", 1)[0];
                return e.indexOf(t) >= 0 ? "rtl" : "ltr"
            },
            translate: b,
            getReadyState: function() {
                return x
            },
            ready: function(n) {
                n && ("complete" == x || "interactive" == x ? e.setTimeout(function() {
                    n()
                }) : t.addEventListener && t.addEventListener("localized", function e() {
                    t.removeEventListener("localized", e), n()
                }))
            }
        }
    }(window, document),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("pdfjs-dist/build/pdf", [], t) : "object" == typeof exports ? exports["pdfjs-dist/build/pdf"] = t() : e["pdfjs-dist/build/pdf"] = e.pdfjsDistBuildPdf = t()
    }(this, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.i = function(e) {
                return e
            }, t.d = function(e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 13)
        }([function(e, t, n) {
            (function(e) {
                function i(e) {
                    ne = e
                }

                function r() {
                    return ne
                }

                function a(e) {
                    ne >= $.infos && console.log("Info: " + e)
                }

                function s(e) {
                    ne >= $.warnings && console.log("Warning: " + e)
                }

                function o(e) {
                    console.log("Deprecated API usage: " + e)
                }

                function c(e) {
                    throw ne >= $.errors && (console.log("Error: " + e), console.log(l())), new Error(e)
                }

                function l() {
                    try {
                        throw new Error
                    } catch (e) {
                        return e.stack ? e.stack.split("\n").slice(2).join("\n") : ""
                    }
                }

                function h(e, t) {
                    e || c(t)
                }

                function u(e, t) {
                    try {
                        var n = new URL(e);
                        if (!n.origin || "null" === n.origin) return !1
                    } catch (e) {
                        return !1
                    }
                    var i = new URL(t, n);
                    return n.origin === i.origin
                }

                function d(e) {
                    if (!e) return !1;
                    switch (e.protocol) {
                        case "http:":
                        case "https:":
                        case "ftp:":
                        case "mailto:":
                        case "tel:":
                            return !0;
                        default:
                            return !1
                    }
                }

                function f(e, t) {
                    if (!e) return null;
                    try {
                        var n = t ? new URL(e, t) : new URL(e);
                        if (d(n)) return n
                    } catch (e) {}
                    return null
                }

                function p(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !1
                    }), n
                }

                function g(e) {
                    var t;
                    return function() {
                        return e && (t = Object.create(null), e(t), e = null), t
                    }
                }

                function m(e) {
                    return "string" != typeof e ? (s("The argument for removeNullCharacters must be a string."), e) : e.replace(fe, "")
                }

                function v(e) {
                    h(null !== e && "object" == typeof e && void 0 !== e.length, "Invalid argument for bytesToString");
                    var t = e.length;
                    if (t < 8192) return String.fromCharCode.apply(null, e);
                    for (var n = [], i = 0; i < t; i += 8192) {
                        var r = Math.min(i + 8192, t),
                            a = e.subarray(i, r);
                        n.push(String.fromCharCode.apply(null, a))
                    }
                    return n.join("")
                }

                function b(e) {
                    h("string" == typeof e, "Invalid argument for stringToBytes");
                    for (var t = e.length, n = new Uint8Array(t), i = 0; i < t; ++i) n[i] = 255 & e.charCodeAt(i);
                    return n
                }

                function w(e) {
                    return void 0 !== e.length ? e.length : (h(void 0 !== e.byteLength), e.byteLength)
                }

                function y(e) {
                    if (1 === e.length && e[0] instanceof Uint8Array) return e[0];
                    var t, n, i, r = 0,
                        a = e.length;
                    for (t = 0; t < a; t++) n = e[t], i = w(n), r += i;
                    var s = 0,
                        o = new Uint8Array(r);
                    for (t = 0; t < a; t++) n = e[t], n instanceof Uint8Array || (n = "string" == typeof n ? b(n) : new Uint8Array(n)), i = n.byteLength, o.set(n, s), s += i;
                    return o
                }

                function A(e) {
                    return String.fromCharCode(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e)
                }

                function S(e) {
                    for (var t = 1, n = 0; e > t;) t <<= 1, n++;
                    return n
                }

                function P(e, t) {
                    return e[t] << 24 >> 24
                }

                function x(e, t) {
                    return e[t] << 8 | e[t + 1]
                }

                function C(e, t) {
                    return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
                }

                function _() {
                    var e = new Uint8Array(2);
                    return e[0] = 1, 1 === new Uint16Array(e.buffer)[0]
                }

                function L() {
                    try {
                        return new Function(""), !0
                    } catch (e) {
                        return !1
                    }
                }

                function k(e) {
                    var t, n = e.length,
                        i = [];
                    if ("þ" === e[0] && "ÿ" === e[1])
                        for (t = 2; t < n; t += 2) i.push(String.fromCharCode(e.charCodeAt(t) << 8 | e.charCodeAt(t + 1)));
                    else
                        for (t = 0; t < n; ++t) {
                            var r = be[e.charCodeAt(t)];
                            i.push(r ? String.fromCharCode(r) : e.charAt(t))
                        }
                    return i.join("")
                }

                function T(e) {
                    return decodeURIComponent(escape(e))
                }

                function E(e) {
                    return unescape(encodeURIComponent(e))
                }

                function I(e) {
                    for (var t in e) return !1;
                    return !0
                }

                function F(e) {
                    return "boolean" == typeof e
                }

                function R(e) {
                    return "number" == typeof e && (0 | e) === e
                }

                function N(e) {
                    return "number" == typeof e
                }

                function D(e) {
                    return "string" == typeof e
                }

                function O(e) {
                    return e instanceof Array
                }

                function M(e) {
                    return "object" == typeof e && null !== e && void 0 !== e.byteLength
                }

                function B(e) {
                    return 32 === e || 9 === e || 13 === e || 10 === e
                }

                function j() {
                    return "undefined" == typeof __pdfjsdev_webpack__ && ("object" == typeof process && process + "" == "[object process]")
                }

                function U() {
                    var e = {};
                    return e.promise = new Promise(function(t, n) {
                        e.resolve = t, e.reject = n
                    }), e
                }

                function V(e, t, n) {
                    this.sourceName = e, this.targetName = t, this.comObj = n, this.callbackIndex = 1, this.postMessageTransfers = !0;
                    var i = this.callbacksCapabilities = Object.create(null),
                        r = this.actionHandler = Object.create(null);
                    this._onComObjOnMessage = function(e) {
                        var t = e.data;
                        if (t.targetName === this.sourceName)
                            if (t.isReply) {
                                var a = t.callbackId;
                                if (t.callbackId in i) {
                                    var s = i[a];
                                    delete i[a], "error" in t ? s.reject(t.error) : s.resolve(t.data)
                                } else c("Cannot resolve callback " + a)
                            } else if (t.action in r) {
                            var o = r[t.action];
                            if (t.callbackId) {
                                var l = this.sourceName,
                                    h = t.sourceName;
                                Promise.resolve().then(function() {
                                    return o[0].call(o[1], t.data)
                                }).then(function(e) {
                                    n.postMessage({
                                        sourceName: l,
                                        targetName: h,
                                        isReply: !0,
                                        callbackId: t.callbackId,
                                        data: e
                                    })
                                }, function(e) {
                                    e instanceof Error && (e += ""), n.postMessage({
                                        sourceName: l,
                                        targetName: h,
                                        isReply: !0,
                                        callbackId: t.callbackId,
                                        error: e
                                    })
                                })
                            } else o[0].call(o[1], t.data)
                        } else c("Unknown action from worker: " + t.action)
                    }.bind(this), n.addEventListener("message", this._onComObjOnMessage)
                }

                function H(e, t, n) {
                    var i = new Image;
                    i.onload = function() {
                        n.resolve(e, i)
                    }, i.onerror = function() {
                        n.resolve(e, null), s("Error during JPEG image loading")
                    }, i.src = t
                }
                var z = (n(14), "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : void 0),
                    W = [.001, 0, 0, .001, 0, 0],
                    G = {
                        FILL: 0,
                        STROKE: 1,
                        FILL_STROKE: 2,
                        INVISIBLE: 3,
                        FILL_ADD_TO_PATH: 4,
                        STROKE_ADD_TO_PATH: 5,
                        FILL_STROKE_ADD_TO_PATH: 6,
                        ADD_TO_PATH: 7,
                        FILL_STROKE_MASK: 3,
                        ADD_TO_PATH_FLAG: 4
                    },
                    X = {
                        GRAYSCALE_1BPP: 1,
                        RGB_24BPP: 2,
                        RGBA_32BPP: 3
                    },
                    q = {
                        TEXT: 1,
                        LINK: 2,
                        FREETEXT: 3,
                        LINE: 4,
                        SQUARE: 5,
                        CIRCLE: 6,
                        POLYGON: 7,
                        POLYLINE: 8,
                        HIGHLIGHT: 9,
                        UNDERLINE: 10,
                        SQUIGGLY: 11,
                        STRIKEOUT: 12,
                        STAMP: 13,
                        CARET: 14,
                        INK: 15,
                        POPUP: 16,
                        FILEATTACHMENT: 17,
                        SOUND: 18,
                        MOVIE: 19,
                        WIDGET: 20,
                        SCREEN: 21,
                        PRINTERMARK: 22,
                        TRAPNET: 23,
                        WATERMARK: 24,
                        THREED: 25,
                        REDACT: 26
                    },
                    Y = {
                        INVISIBLE: 1,
                        HIDDEN: 2,
                        PRINT: 4,
                        NOZOOM: 8,
                        NOROTATE: 16,
                        NOVIEW: 32,
                        READONLY: 64,
                        LOCKED: 128,
                        TOGGLENOVIEW: 256,
                        LOCKEDCONTENTS: 512
                    },
                    J = {
                        READONLY: 1,
                        REQUIRED: 2,
                        NOEXPORT: 4,
                        MULTILINE: 4096,
                        PASSWORD: 8192,
                        NOTOGGLETOOFF: 16384,
                        RADIO: 32768,
                        PUSHBUTTON: 65536,
                        COMBO: 131072,
                        EDIT: 262144,
                        SORT: 524288,
                        FILESELECT: 1048576,
                        MULTISELECT: 2097152,
                        DONOTSPELLCHECK: 4194304,
                        DONOTSCROLL: 8388608,
                        COMB: 16777216,
                        RICHTEXT: 33554432,
                        RADIOSINUNISON: 33554432,
                        COMMITONSELCHANGE: 67108864
                    },
                    Q = {
                        SOLID: 1,
                        DASHED: 2,
                        BEVELED: 3,
                        INSET: 4,
                        UNDERLINE: 5
                    },
                    K = {
                        UNKNOWN: 0,
                        FLATE: 1,
                        LZW: 2,
                        DCT: 3,
                        JPX: 4,
                        JBIG: 5,
                        A85: 6,
                        AHX: 7,
                        CCF: 8,
                        RL: 9
                    },
                    Z = {
                        UNKNOWN: 0,
                        TYPE1: 1,
                        TYPE1C: 2,
                        CIDFONTTYPE0: 3,
                        CIDFONTTYPE0C: 4,
                        TRUETYPE: 5,
                        CIDFONTTYPE2: 6,
                        TYPE3: 7,
                        OPENTYPE: 8,
                        TYPE0: 9,
                        MMTYPE1: 10
                    },
                    $ = {
                        errors: 0,
                        warnings: 1,
                        infos: 5
                    },
                    ee = {
                        NONE: 0,
                        BINARY: 1,
                        STREAM: 2
                    },
                    te = {
                        dependency: 1,
                        setLineWidth: 2,
                        setLineCap: 3,
                        setLineJoin: 4,
                        setMiterLimit: 5,
                        setDash: 6,
                        setRenderingIntent: 7,
                        setFlatness: 8,
                        setGState: 9,
                        save: 10,
                        restore: 11,
                        transform: 12,
                        moveTo: 13,
                        lineTo: 14,
                        curveTo: 15,
                        curveTo2: 16,
                        curveTo3: 17,
                        closePath: 18,
                        rectangle: 19,
                        stroke: 20,
                        closeStroke: 21,
                        fill: 22,
                        eoFill: 23,
                        fillStroke: 24,
                        eoFillStroke: 25,
                        closeFillStroke: 26,
                        closeEOFillStroke: 27,
                        endPath: 28,
                        clip: 29,
                        eoClip: 30,
                        beginText: 31,
                        endText: 32,
                        setCharSpacing: 33,
                        setWordSpacing: 34,
                        setHScale: 35,
                        setLeading: 36,
                        setFont: 37,
                        setTextRenderingMode: 38,
                        setTextRise: 39,
                        moveText: 40,
                        setLeadingMoveText: 41,
                        setTextMatrix: 42,
                        nextLine: 43,
                        showText: 44,
                        showSpacedText: 45,
                        nextLineShowText: 46,
                        nextLineSetSpacingShowText: 47,
                        setCharWidth: 48,
                        setCharWidthAndBounds: 49,
                        setStrokeColorSpace: 50,
                        setFillColorSpace: 51,
                        setStrokeColor: 52,
                        setStrokeColorN: 53,
                        setFillColor: 54,
                        setFillColorN: 55,
                        setStrokeGray: 56,
                        setFillGray: 57,
                        setStrokeRGBColor: 58,
                        setFillRGBColor: 59,
                        setStrokeCMYKColor: 60,
                        setFillCMYKColor: 61,
                        shadingFill: 62,
                        beginInlineImage: 63,
                        beginImageData: 64,
                        endInlineImage: 65,
                        paintXObject: 66,
                        markPoint: 67,
                        markPointProps: 68,
                        beginMarkedContent: 69,
                        beginMarkedContentProps: 70,
                        endMarkedContent: 71,
                        beginCompat: 72,
                        endCompat: 73,
                        paintFormXObjectBegin: 74,
                        paintFormXObjectEnd: 75,
                        beginGroup: 76,
                        endGroup: 77,
                        beginAnnotations: 78,
                        endAnnotations: 79,
                        beginAnnotation: 80,
                        endAnnotation: 81,
                        paintJpegXObject: 82,
                        paintImageMaskXObject: 83,
                        paintImageMaskXObjectGroup: 84,
                        paintImageXObject: 85,
                        paintInlineImageXObject: 86,
                        paintInlineImageXObjectGroup: 87,
                        paintImageXObjectRepeat: 88,
                        paintImageMaskXObjectRepeat: 89,
                        paintSolidColorImageMask: 90,
                        constructPath: 91
                    },
                    ne = $.warnings,
                    ie = {
                        unknown: "unknown",
                        forms: "forms",
                        javaScript: "javaScript",
                        smask: "smask",
                        shadingPattern: "shadingPattern",
                        font: "font"
                    },
                    re = {
                        NEED_PASSWORD: 1,
                        INCORRECT_PASSWORD: 2
                    },
                    ae = function() {
                        function e(e, t) {
                            this.name = "PasswordException", this.message = e, this.code = t
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    se = function() {
                        function e(e, t) {
                            this.name = "UnknownErrorException", this.message = e, this.details = t
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    oe = function() {
                        function e(e) {
                            this.name = "InvalidPDFException", this.message = e
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    ce = function() {
                        function e(e) {
                            this.name = "MissingPDFException", this.message = e
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    le = function() {
                        function e(e, t) {
                            this.name = "UnexpectedResponseException", this.message = e, this.status = t
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    he = function() {
                        function e(e) {
                            this.message = e
                        }
                        return e.prototype = new Error, e.prototype.name = "NotImplementedException", e.constructor = e, e
                    }(),
                    ue = function() {
                        function e(e, t) {
                            this.begin = e, this.end = t, this.message = "Missing data [" + e + ", " + t + ")"
                        }
                        return e.prototype = new Error, e.prototype.name = "MissingDataException", e.constructor = e, e
                    }(),
                    de = function() {
                        function e(e) {
                            this.message = e
                        }
                        return e.prototype = new Error, e.prototype.name = "XRefParseException", e.constructor = e, e
                    }(),
                    fe = /\x00/g,
                    pe = function() {
                        function e(e, t) {
                            this.buffer = e, this.byteLength = e.length, this.length = void 0 === t ? this.byteLength >> 2 : t, n(this.length)
                        }

                        function t(e) {
                            return {
                                get: function() {
                                    var t = this.buffer,
                                        n = e << 2;
                                    return (t[n] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24) >>> 0
                                },
                                set: function(t) {
                                    var n = this.buffer,
                                        i = e << 2;
                                    n[i] = 255 & t, n[i + 1] = t >> 8 & 255, n[i + 2] = t >> 16 & 255, n[i + 3] = t >>> 24 & 255
                                }
                            }
                        }

                        function n(n) {
                            for (; i < n;) Object.defineProperty(e.prototype, i, t(i)), i++
                        }
                        e.prototype = Object.create(null);
                        var i = 0;
                        return e
                    }();
                t.Uint32ArrayView = pe;
                var ge = [1, 0, 0, 1, 0, 0],
                    me = function() {
                        function e() {}
                        var t = ["rgb(", 0, ",", 0, ",", 0, ")"];
                        e.makeCssRgb = function(e, n, i) {
                            return t[1] = e, t[3] = n, t[5] = i, t.join("")
                        }, e.transform = function(e, t) {
                            return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]]
                        }, e.applyTransform = function(e, t) {
                            return [e[0] * t[0] + e[1] * t[2] + t[4], e[0] * t[1] + e[1] * t[3] + t[5]]
                        }, e.applyInverseTransform = function(e, t) {
                            var n = t[0] * t[3] - t[1] * t[2];
                            return [(e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / n, (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / n]
                        }, e.getAxialAlignedBoundingBox = function(t, n) {
                            var i = e.applyTransform(t, n),
                                r = e.applyTransform(t.slice(2, 4), n),
                                a = e.applyTransform([t[0], t[3]], n),
                                s = e.applyTransform([t[2], t[1]], n);
                            return [Math.min(i[0], r[0], a[0], s[0]), Math.min(i[1], r[1], a[1], s[1]), Math.max(i[0], r[0], a[0], s[0]), Math.max(i[1], r[1], a[1], s[1])]
                        }, e.inverseTransform = function(e) {
                            var t = e[0] * e[3] - e[1] * e[2];
                            return [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[4] * e[3]) / t, (e[4] * e[1] - e[5] * e[0]) / t]
                        }, e.apply3dTransform = function(e, t) {
                            return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2], e[3] * t[0] + e[4] * t[1] + e[5] * t[2], e[6] * t[0] + e[7] * t[1] + e[8] * t[2]]
                        }, e.singularValueDecompose2dScale = function(e) {
                            var t = [e[0], e[2], e[1], e[3]],
                                n = e[0] * t[0] + e[1] * t[2],
                                i = e[0] * t[1] + e[1] * t[3],
                                r = e[2] * t[0] + e[3] * t[2],
                                a = e[2] * t[1] + e[3] * t[3],
                                s = (n + a) / 2,
                                o = Math.sqrt((n + a) * (n + a) - 4 * (n * a - r * i)) / 2,
                                c = s + o || 1,
                                l = s - o || 1;
                            return [Math.sqrt(c), Math.sqrt(l)]
                        }, e.normalizeRect = function(e) {
                            var t = e.slice(0);
                            return e[0] > e[2] && (t[0] = e[2], t[2] = e[0]), e[1] > e[3] && (t[1] = e[3], t[3] = e[1]), t
                        }, e.intersect = function(t, n) {
                            function i(e, t) {
                                return e - t
                            }
                            var r = [t[0], t[2], n[0], n[2]].sort(i),
                                a = [t[1], t[3], n[1], n[3]].sort(i),
                                s = [];
                            return t = e.normalizeRect(t), n = e.normalizeRect(n), (r[0] === t[0] && r[1] === n[0] || r[0] === n[0] && r[1] === t[0]) && (s[0] = r[1], s[2] = r[2], (a[0] === t[1] && a[1] === n[1] || a[0] === n[1] && a[1] === t[1]) && (s[1] = a[1], s[3] = a[2], s))
                        }, e.sign = function(e) {
                            return e < 0 ? -1 : 1
                        };
                        var n = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
                        return e.toRoman = function(e, t) {
                            h(R(e) && e > 0, "The number should be a positive integer.");
                            for (var i, r = []; e >= 1e3;) e -= 1e3, r.push("M");
                            i = e / 100 | 0, e %= 100, r.push(n[i]), i = e / 10 | 0, e %= 10, r.push(n[10 + i]), r.push(n[20 + e]);
                            var a = r.join("");
                            return t ? a.toLowerCase() : a
                        }, e.appendToArray = function(e, t) {
                            Array.prototype.push.apply(e, t)
                        }, e.prependToArray = function(e, t) {
                            Array.prototype.unshift.apply(e, t)
                        }, e.extendObj = function(e, t) {
                            for (var n in t) e[n] = t[n]
                        }, e.getInheritableProperty = function(e, t, n) {
                            for (; e && !e.has(t);) e = e.get("Parent");
                            return e ? n ? e.getArray(t) : e.get(t) : null
                        }, e.inherit = function(e, t, n) {
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e;
                            for (var i in n) e.prototype[i] = n[i]
                        }, e.loadScript = function(e, t) {
                            var n = document.createElement("script"),
                                i = !1;
                            n.setAttribute("src", e), t && (n.onload = function() {
                                i || t(), i = !0
                            }), document.getElementsByTagName("head")[0].appendChild(n)
                        }, e
                    }(),
                    ve = function() {
                        function e(e, t, n, i, r, a) {
                            this.viewBox = e, this.scale = t, this.rotation = n, this.offsetX = i, this.offsetY = r;
                            var s, o, c, l, h = (e[2] + e[0]) / 2,
                                u = (e[3] + e[1]) / 2;
                            switch (n %= 360, n = n < 0 ? n + 360 : n) {
                                case 180:
                                    s = -1, o = 0, c = 0, l = 1;
                                    break;
                                case 90:
                                    s = 0, o = 1, c = 1, l = 0;
                                    break;
                                case 270:
                                    s = 0, o = -1, c = -1, l = 0;
                                    break;
                                default:
                                    s = 1, o = 0, c = 0, l = -1
                            }
                            a && (c = -c, l = -l);
                            var d, f, p, g;
                            0 === s ? (d = Math.abs(u - e[1]) * t + i, f = Math.abs(h - e[0]) * t + r, p = Math.abs(e[3] - e[1]) * t, g = Math.abs(e[2] - e[0]) * t) : (d = Math.abs(h - e[0]) * t + i, f = Math.abs(u - e[1]) * t + r, p = Math.abs(e[2] - e[0]) * t, g = Math.abs(e[3] - e[1]) * t), this.transform = [s * t, o * t, c * t, l * t, d - s * t * h - c * t * u, f - o * t * h - l * t * u], this.width = p, this.height = g, this.fontScale = t
                        }
                        return e.prototype = {
                            clone: function(t) {
                                t = t || {};
                                var n = "scale" in t ? t.scale : this.scale,
                                    i = "rotation" in t ? t.rotation : this.rotation;
                                return new e(this.viewBox.slice(), n, i, this.offsetX, this.offsetY, t.dontFlip)
                            },
                            convertToViewportPoint: function(e, t) {
                                return me.applyTransform([e, t], this.transform)
                            },
                            convertToViewportRectangle: function(e) {
                                var t = me.applyTransform([e[0], e[1]], this.transform),
                                    n = me.applyTransform([e[2], e[3]], this.transform);
                                return [t[0], t[1], n[0], n[1]]
                            },
                            convertToPdfPoint: function(e, t) {
                                return me.applyInverseTransform([e, t], this.transform)
                            }
                        }, e
                    }(),
                    be = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364],
                    we = function() {
                        function e(e, t, n) {
                            for (; e.length < n;) e += t;
                            return e
                        }

                        function t() {
                            this.started = Object.create(null), this.times = [], this.enabled = !0
                        }
                        return t.prototype = {
                            time: function(e) {
                                this.enabled && (e in this.started && s("Timer is already running for " + e), this.started[e] = Date.now())
                            },
                            timeEnd: function(e) {
                                this.enabled && (e in this.started || s("Timer has not been started for " + e), this.times.push({
                                    name: e,
                                    start: this.started[e],
                                    end: Date.now()
                                }), delete this.started[e])
                            },
                            toString: function() {
                                var t, n, i = this.times,
                                    r = "",
                                    a = 0;
                                for (t = 0, n = i.length; t < n; ++t) {
                                    var s = i[t].name;
                                    s.length > a && (a = s.length)
                                }
                                for (t = 0, n = i.length; t < n; ++t) {
                                    var o = i[t],
                                        c = o.end - o.start;
                                    r += e(o.name, " ", a) + " " + c + "ms\n"
                                }
                                return r
                            }
                        }, t
                    }(),
                    ye = function(e, t) {
                        if ("undefined" != typeof Blob) return new Blob([e], {
                            type: t
                        });
                        s('The "Blob" constructor is not supported.')
                    },
                    Ae = function() {
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        return function(t, n, i) {
                            if (!i && "undefined" != typeof URL && URL.createObjectURL) {
                                var r = ye(t, n);
                                return URL.createObjectURL(r)
                            }
                            for (var a = "data:" + n + ";base64,", s = 0, o = t.length; s < o; s += 3) {
                                var c = 255 & t[s],
                                    l = 255 & t[s + 1],
                                    h = 255 & t[s + 2];
                                a += e[c >> 2] + e[(3 & c) << 4 | l >> 4] + e[s + 1 < o ? (15 & l) << 2 | h >> 6 : 64] + e[s + 2 < o ? 63 & h : 64]
                            }
                            return a
                        }
                    }();
                V.prototype = {
                    on: function(e, t, n) {
                        var i = this.actionHandler;
                        i[e] && c('There is already an actionName called "' + e + '"'), i[e] = [t, n]
                    },
                    send: function(e, t, n) {
                        var i = {
                            sourceName: this.sourceName,
                            targetName: this.targetName,
                            action: e,
                            data: t
                        };
                        this.postMessage(i, n)
                    },
                    sendWithPromise: function(e, t, n) {
                        var i = this.callbackIndex++,
                            r = {
                                sourceName: this.sourceName,
                                targetName: this.targetName,
                                action: e,
                                data: t,
                                callbackId: i
                            },
                            a = U();
                        this.callbacksCapabilities[i] = a;
                        try {
                            this.postMessage(r, n)
                        } catch (e) {
                            a.reject(e)
                        }
                        return a.promise
                    },
                    postMessage: function(e, t) {
                        t && this.postMessageTransfers ? this.comObj.postMessage(e, t) : this.comObj.postMessage(e)
                    },
                    destroy: function() {
                        this.comObj.removeEventListener("message", this._onComObjOnMessage)
                    }
                }, t.FONT_IDENTITY_MATRIX = W, t.IDENTITY_MATRIX = ge, t.OPS = te, t.VERBOSITY_LEVELS = $, t.UNSUPPORTED_FEATURES = ie, t.AnnotationBorderStyleType = Q, t.AnnotationFieldFlag = J, t.AnnotationFlag = Y, t.AnnotationType = q, t.FontType = Z, t.ImageKind = X, t.CMapCompressionType = ee, t.InvalidPDFException = oe, t.MessageHandler = V, t.MissingDataException = ue, t.MissingPDFException = ce, t.NotImplementedException = he, t.PageViewport = ve, t.PasswordException = ae, t.PasswordResponses = re, t.StatTimer = we, t.StreamType = K, t.TextRenderingMode = G, t.UnexpectedResponseException = le, t.UnknownErrorException = se, t.Util = me, t.XRefParseException = de, t.arrayByteLength = w, t.arraysToBytes = y, t.assert = h, t.bytesToString = v, t.createBlob = ye, t.createPromiseCapability = U, t.createObjectURL = Ae, t.deprecated = o, t.error = c, t.getLookupTableFactory = g, t.getVerbosityLevel = r, t.globalScope = z, t.info = a, t.isArray = O, t.isArrayBuffer = M, t.isBool = F, t.isEmptyObj = I, t.isInt = R, t.isNum = N, t.isString = D, t.isSpace = B, t.isNodeJS = j, t.isSameOrigin = u, t.createValidAbsoluteUrl = f, t.isLittleEndian = _, t.isEvalSupported = L, t.loadJpegStream = H, t.log2 = S, t.readInt8 = P, t.readUint16 = x, t.readUint32 = C, t.removeNullCharacters = m, t.setVerbosityLevel = i, t.shadow = p, t.string32 = A, t.stringToBytes = b, t.stringToPDFString = k, t.stringToUTF8String = T, t.utf8StringToString = E, t.warn = s
            }).call(t, n(6))
        }, function(e, t, n) {
            function i() {}

            function r(e, t) {
                var n = t && t.url;
                if (e.href = e.title = n ? u(n) : "", n) {
                    var i = t.target;
                    void 0 === i && (i = s("externalLinkTarget")), e.target = P[i];
                    var r = t.rel;
                    void 0 === r && (r = s("externalLinkRel")), e.rel = r
                }
            }

            function a(e) {
                var t = e.indexOf("#"),
                    n = e.indexOf("?"),
                    i = Math.min(t > 0 ? t : e.length, n > 0 ? n : e.length);
                return e.substring(e.lastIndexOf("/", i) + 1, i)
            }

            function s(e) {
                var t = l.globalScope.PDFJS;
                switch (e) {
                    case "pdfBug":
                        return !!t && t.pdfBug;
                    case "disableAutoFetch":
                        return !!t && t.disableAutoFetch;
                    case "disableStream":
                        return !!t && t.disableStream;
                    case "disableRange":
                        return !!t && t.disableRange;
                    case "disableFontFace":
                        return !!t && t.disableFontFace;
                    case "disableCreateObjectURL":
                        return !!t && t.disableCreateObjectURL;
                    case "disableWebGL":
                        return !t || t.disableWebGL;
                    case "cMapUrl":
                        return t ? t.cMapUrl : null;
                    case "cMapPacked":
                        return !!t && t.cMapPacked;
                    case "postMessageTransfers":
                        return !t || t.postMessageTransfers;
                    case "workerPort":
                        return t ? t.workerPort : null;
                    case "workerSrc":
                        return t ? t.workerSrc : null;
                    case "disableWorker":
                        return !!t && t.disableWorker;
                    case "maxImageSize":
                        return t ? t.maxImageSize : -1;
                    case "imageResourcesPath":
                        return t ? t.imageResourcesPath : "";
                    case "isEvalSupported":
                        return !t || t.isEvalSupported;
                    case "externalLinkTarget":
                        if (!t) return S.NONE;
                        switch (t.externalLinkTarget) {
                            case S.NONE:
                            case S.SELF:
                            case S.BLANK:
                            case S.PARENT:
                            case S.TOP:
                                return t.externalLinkTarget
                        }
                        return d("PDFJS.externalLinkTarget is invalid: " + t.externalLinkTarget), t.externalLinkTarget = S.NONE, S.NONE;
                    case "externalLinkRel":
                        return t ? t.externalLinkRel : v;
                    case "enableStats":
                        return !(!t || !t.enableStats);
                    case "pdfjsNext":
                        return !(!t || !t.pdfjsNext);
                    default:
                        throw new Error("Unknown default setting: " + e)
                }
            }

            function o() {
                switch (s("externalLinkTarget")) {
                    case S.NONE:
                        return !1;
                    case S.SELF:
                    case S.BLANK:
                    case S.PARENT:
                    case S.TOP:
                        return !0
                }
            }

            function c(e, t) {
                return f("isValidUrl(), please use createValidAbsoluteUrl() instead."), null !== p(e, t ? "http://example.com" : null)
            }
            var l = n(0),
                h = l.assert,
                u = l.removeNullCharacters,
                d = l.warn,
                f = l.deprecated,
                p = l.createValidAbsoluteUrl,
                g = l.stringToBytes,
                m = l.CMapCompressionType,
                v = "noopener noreferrer nofollow";
            i.prototype = {
                create: function(e, t) {
                    h(e > 0 && t > 0, "invalid canvas size");
                    var n = document.createElement("canvas"),
                        i = n.getContext("2d");
                    return n.width = e, n.height = t, {
                        canvas: n,
                        context: i
                    }
                },
                reset: function(e, t, n) {
                    h(e.canvas, "canvas is not specified"), h(t > 0 && n > 0, "invalid canvas size"), e.canvas.width = t, e.canvas.height = n
                },
                destroy: function(e) {
                    h(e.canvas, "canvas is not specified"), e.canvas.width = 0, e.canvas.height = 0, e.canvas = null, e.context = null
                }
            };
            var b, w = function() {
                    function e(e) {
                        this.baseUrl = e.baseUrl || null, this.isCompressed = e.isCompressed || !1
                    }
                    return e.prototype = {
                        fetch: function(e) {
                            var t = e.name;
                            return t ? new Promise(function(e, n) {
                                var i = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""),
                                    r = new XMLHttpRequest;
                                r.open("GET", i, !0), this.isCompressed && (r.responseType = "arraybuffer"), r.onreadystatechange = function() {
                                    if (r.readyState === XMLHttpRequest.DONE) {
                                        if (200 === r.status || 0 === r.status) {
                                            var t;
                                            if (this.isCompressed && r.response ? t = new Uint8Array(r.response) : !this.isCompressed && r.responseText && (t = g(r.responseText)), t) return void e({
                                                cMapData: t,
                                                compressionType: this.isCompressed ? m.BINARY : m.NONE
                                            })
                                        }
                                        n(new Error("Unable to load " + (this.isCompressed ? "binary " : "") + "CMap at: " + i))
                                    }
                                }.bind(this), r.send(null)
                            }.bind(this)) : Promise.reject(new Error("CMap name must be specified."))
                        }
                    }, e
                }(),
                y = function() {
                    function e() {}
                    var t = ["ms", "Moz", "Webkit", "O"],
                        n = Object.create(null);
                    return e.getProp = function(e, i) {
                        if (1 === arguments.length && "string" == typeof n[e]) return n[e];
                        i = i || document.documentElement;
                        var r, a, s = i.style;
                        if ("string" == typeof s[e]) return n[e] = e;
                        a = e.charAt(0).toUpperCase() + e.slice(1);
                        for (var o = 0, c = t.length; o < c; o++)
                            if (r = t[o] + a, "string" == typeof s[r]) return n[e] = r;
                        return n[e] = "undefined"
                    }, e.setProp = function(e, t, n) {
                        var i = this.getProp(e);
                        "undefined" !== i && (t.style[i] = n)
                    }, e
                }(),
                A = function() {
                    function e(e, t) {
                        this.message = e, this.type = t
                    }
                    return e.prototype = new Error, e.prototype.name = "RenderingCancelledException", e.constructor = e, e
                }();
            b = function() {
                var e = document.createElement("canvas");
                return e.width = e.height = 1, void 0 !== e.getContext("2d").createImageData(1, 1).data.buffer
            };
            var S = {
                    NONE: 0,
                    SELF: 1,
                    BLANK: 2,
                    PARENT: 3,
                    TOP: 4
                },
                P = ["", "_self", "_blank", "_parent", "_top"];
            t.CustomStyle = y, t.addLinkAttributes = r, t.isExternalLinkTargetSet = o, t.isValidUrl = c, t.getFilenameFromUrl = a, t.LinkTarget = S, t.RenderingCancelledException = A, t.hasCanvasTypedArrays = b, t.getDefaultSetting = s, t.DEFAULT_LINK_REL = v, t.DOMCanvasFactory = i, t.DOMCMapReaderFactory = w
        }, function(e, t, n) {
            function i() {}
            var r = n(0),
                a = n(1),
                s = r.AnnotationBorderStyleType,
                o = r.AnnotationType,
                c = r.stringToPDFString,
                l = r.Util,
                h = a.addLinkAttributes,
                u = a.LinkTarget,
                d = a.getFilenameFromUrl,
                f = r.warn,
                p = a.CustomStyle,
                g = a.getDefaultSetting;
            i.prototype = {
                create: function(e) {
                    switch (e.data.annotationType) {
                        case o.LINK:
                            return new v(e);
                        case o.TEXT:
                            return new b(e);
                        case o.WIDGET:
                            switch (e.data.fieldType) {
                                case "Tx":
                                    return new y(e);
                                case "Btn":
                                    if (e.data.radioButton) return new S(e);
                                    if (e.data.checkBox) return new A(e);
                                    f("Unimplemented button widget annotation: pushbutton");
                                    break;
                                case "Ch":
                                    return new P(e)
                            }
                            return new w(e);
                        case o.POPUP:
                            return new x(e);
                        case o.LINE:
                            return new _(e);
                        case o.HIGHLIGHT:
                            return new L(e);
                        case o.UNDERLINE:
                            return new k(e);
                        case o.SQUIGGLY:
                            return new T(e);
                        case o.STRIKEOUT:
                            return new E(e);
                        case o.FILEATTACHMENT:
                            return new I(e);
                        default:
                            return new m(e)
                    }
                }
            };
            var m = function() {
                    function e(e, t, n) {
                        this.isRenderable = t || !1, this.data = e.data, this.layer = e.layer, this.page = e.page, this.viewport = e.viewport, this.linkService = e.linkService, this.downloadManager = e.downloadManager, this.imageResourcesPath = e.imageResourcesPath, this.renderInteractiveForms = e.renderInteractiveForms, t && (this.container = this._createContainer(n))
                    }
                    return e.prototype = {
                        _createContainer: function(e) {
                            var t = this.data,
                                n = this.page,
                                i = this.viewport,
                                r = document.createElement("section"),
                                a = t.rect[2] - t.rect[0],
                                o = t.rect[3] - t.rect[1];
                            r.setAttribute("data-annotation-id", t.id);
                            var c = l.normalizeRect([t.rect[0], n.view[3] - t.rect[1] + n.view[1], t.rect[2], n.view[3] - t.rect[3] + n.view[1]]);
                            if (p.setProp("transform", r, "matrix(" + i.transform.join(",") + ")"), p.setProp("transformOrigin", r, -c[0] + "px " + -c[1] + "px"), !e && t.borderStyle.width > 0) {
                                r.style.borderWidth = t.borderStyle.width + "px", t.borderStyle.style !== s.UNDERLINE && (a -= 2 * t.borderStyle.width, o -= 2 * t.borderStyle.width);
                                var h = t.borderStyle.horizontalCornerRadius,
                                    u = t.borderStyle.verticalCornerRadius;
                                if (h > 0 || u > 0) {
                                    var d = h + "px / " + u + "px";
                                    p.setProp("borderRadius", r, d)
                                }
                                switch (t.borderStyle.style) {
                                    case s.SOLID:
                                        r.style.borderStyle = "solid";
                                        break;
                                    case s.DASHED:
                                        r.style.borderStyle = "dashed";
                                        break;
                                    case s.BEVELED:
                                        f("Unimplemented border style: beveled");
                                        break;
                                    case s.INSET:
                                        f("Unimplemented border style: inset");
                                        break;
                                    case s.UNDERLINE:
                                        r.style.borderBottomStyle = "solid"
                                }
                                t.color ? r.style.borderColor = l.makeCssRgb(0 | t.color[0], 0 | t.color[1], 0 | t.color[2]) : r.style.borderWidth = 0
                            }
                            return r.style.left = c[0] + "px", r.style.top = c[1] + "px", r.style.width = a + "px", r.style.height = o + "px", r
                        },
                        _createPopup: function(e, t, n) {
                            t || (t = document.createElement("div"), t.style.height = e.style.height, t.style.width = e.style.width, e.appendChild(t));
                            var i = new C({
                                    container: e,
                                    trigger: t,
                                    color: n.color,
                                    title: n.title,
                                    contents: n.contents,
                                    hideWrapper: !0
                                }),
                                r = i.render();
                            r.style.left = e.style.width, e.appendChild(r)
                        },
                        render: function() {
                            throw new Error("Abstract method AnnotationElement.render called")
                        }
                    }, e
                }(),
                v = function() {
                    function e(e) {
                        m.call(this, e, !0)
                    }
                    return l.inherit(e, m, {
                        render: function() {
                            this.container.className = "linkAnnotation";
                            var e = document.createElement("a");
                            return h(e, {
                                url: this.data.url,
                                target: this.data.newWindow ? u.BLANK : void 0
                            }), this.data.url || (this.data.action ? this._bindNamedAction(e, this.data.action) : this._bindLink(e, this.data.dest)), this.container.appendChild(e), this.container
                        },
                        _bindLink: function(e, t) {
                            var n = this;
                            e.href = this.linkService.getDestinationHash(t), e.onclick = function() {
                                return t && n.linkService.navigateTo(t), !1
                            }, t && (e.className = "internalLink")
                        },
                        _bindNamedAction: function(e, t) {
                            var n = this;
                            e.href = this.linkService.getAnchorUrl(""), e.onclick = function() {
                                return n.linkService.executeNamedAction(t), !1
                            }, e.className = "internalLink"
                        }
                    }), e
                }(),
                b = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        m.call(this, e, t)
                    }
                    return l.inherit(e, m, {
                        render: function() {
                            this.container.className = "textAnnotation";
                            var e = document.createElement("img");
                            return e.style.height = this.container.style.height, e.style.width = this.container.style.width, e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", e.alt = "[{{type}} Annotation]", e.dataset.l10nId = "text_annotation_type", e.dataset.l10nArgs = JSON.stringify({
                                type: this.data.name
                            }), this.data.hasPopup || this._createPopup(this.container, e, this.data), this.container.appendChild(e), this.container
                        }
                    }), e
                }(),
                w = function() {
                    function e(e, t) {
                        m.call(this, e, t)
                    }
                    return l.inherit(e, m, {
                        render: function() {
                            return this.container
                        }
                    }), e
                }(),
                y = function() {
                    function e(e) {
                        var t = e.renderInteractiveForms || !e.data.hasAppearance && !!e.data.fieldValue;
                        w.call(this, e, t)
                    }
                    var t = ["left", "center", "right"];
                    return l.inherit(e, w, {
                        render: function() {
                            this.container.className = "textWidgetAnnotation";
                            var e = null;
                            if (this.renderInteractiveForms) {
                                if (this.data.multiLine ? (e = document.createElement("textarea"), e.textContent = this.data.fieldValue) : (e = document.createElement("input"), e.type = "text", e.setAttribute("value", this.data.fieldValue)), e.disabled = this.data.readOnly, null !== this.data.maxLen && (e.maxLength = this.data.maxLen), this.data.comb) {
                                    var n = this.data.rect[2] - this.data.rect[0],
                                        i = n / this.data.maxLen;
                                    e.classList.add("comb"), e.style.letterSpacing = "calc(" + i + "px - 1ch)"
                                }
                            } else {
                                e = document.createElement("div"), e.textContent = this.data.fieldValue, e.style.verticalAlign = "middle", e.style.display = "table-cell";
                                var r = null;
                                this.data.fontRefName && (r = this.page.commonObjs.getData(this.data.fontRefName)), this._setTextStyle(e, r)
                            }
                            return null !== this.data.textAlignment && (e.style.textAlign = t[this.data.textAlignment]), this.container.appendChild(e), this.container
                        },
                        _setTextStyle: function(e, t) {
                            var n = e.style;
                            if (n.fontSize = this.data.fontSize + "px", n.direction = this.data.fontDirection < 0 ? "rtl" : "ltr", t) {
                                n.fontWeight = t.black ? t.bold ? "900" : "bold" : t.bold ? "bold" : "normal", n.fontStyle = t.italic ? "italic" : "normal";
                                var i = t.loadedName ? '"' + t.loadedName + '", ' : "",
                                    r = t.fallbackName || "Helvetica, sans-serif";
                                n.fontFamily = i + r
                            }
                        }
                    }), e
                }(),
                A = function() {
                    function e(e) {
                        w.call(this, e, e.renderInteractiveForms)
                    }
                    return l.inherit(e, w, {
                        render: function() {
                            this.container.className = "buttonWidgetAnnotation checkBox";
                            var e = document.createElement("input");
                            return e.disabled = this.data.readOnly, e.type = "checkbox", this.data.fieldValue && "Off" !== this.data.fieldValue && e.setAttribute("checked", !0), this.container.appendChild(e), this.container
                        }
                    }), e
                }(),
                S = function() {
                    function e(e) {
                        w.call(this, e, e.renderInteractiveForms)
                    }
                    return l.inherit(e, w, {
                        render: function() {
                            this.container.className = "buttonWidgetAnnotation radioButton";
                            var e = document.createElement("input");
                            return e.disabled = this.data.readOnly, e.type = "radio", e.name = this.data.fieldName, this.data.fieldValue === this.data.buttonValue && e.setAttribute("checked", !0), this.container.appendChild(e), this.container
                        }
                    }), e
                }(),
                P = function() {
                    function e(e) {
                        w.call(this, e, e.renderInteractiveForms)
                    }
                    return l.inherit(e, w, {
                        render: function() {
                            this.container.className = "choiceWidgetAnnotation";
                            var e = document.createElement("select");
                            e.disabled = this.data.readOnly, this.data.combo || (e.size = this.data.options.length, this.data.multiSelect && (e.multiple = !0));
                            for (var t = 0, n = this.data.options.length; t < n; t++) {
                                var i = this.data.options[t],
                                    r = document.createElement("option");
                                r.textContent = i.displayValue, r.value = i.exportValue, this.data.fieldValue.indexOf(i.displayValue) >= 0 && r.setAttribute("selected", !0), e.appendChild(r)
                            }
                            return this.container.appendChild(e), this.container
                        }
                    }), e
                }(),
                x = function() {
                    function e(e) {
                        var t = !(!e.data.title && !e.data.contents);
                        m.call(this, e, t)
                    }
                    var t = ["Line"];
                    return l.inherit(e, m, {
                        render: function() {
                            if (this.container.className = "popupAnnotation", t.indexOf(this.data.parentType) >= 0) return this.container;
                            var e = '[data-annotation-id="' + this.data.parentId + '"]',
                                n = this.layer.querySelector(e);
                            if (!n) return this.container;
                            var i = new C({
                                    container: this.container,
                                    trigger: n,
                                    color: this.data.color,
                                    title: this.data.title,
                                    contents: this.data.contents
                                }),
                                r = parseFloat(n.style.left),
                                a = parseFloat(n.style.width);
                            return p.setProp("transformOrigin", this.container, -(r + a) + "px -" + n.style.top), this.container.style.left = r + a + "px", this.container.appendChild(i.render()), this.container
                        }
                    }), e
                }(),
                C = function() {
                    function e(e) {
                        this.container = e.container, this.trigger = e.trigger, this.color = e.color, this.title = e.title, this.contents = e.contents, this.hideWrapper = e.hideWrapper || !1, this.pinned = !1
                    }
                    return e.prototype = {
                        render: function() {
                            var e = document.createElement("div");
                            e.className = "popupWrapper", this.hideElement = this.hideWrapper ? e : this.container, this.hideElement.setAttribute("hidden", !0);
                            var t = document.createElement("div");
                            t.className = "popup";
                            var n = this.color;
                            if (n) {
                                var i = .7 * (255 - n[0]) + n[0],
                                    r = .7 * (255 - n[1]) + n[1],
                                    a = .7 * (255 - n[2]) + n[2];
                                t.style.backgroundColor = l.makeCssRgb(0 | i, 0 | r, 0 | a)
                            }
                            var s = this._formatContents(this.contents),
                                o = document.createElement("h1");
                            return o.textContent = this.title, this.trigger.addEventListener("click", this._toggle.bind(this)), this.trigger.addEventListener("mouseover", this._show.bind(this, !1)), this.trigger.addEventListener("mouseout", this._hide.bind(this, !1)), t.addEventListener("click", this._hide.bind(this, !0)), t.appendChild(o), t.appendChild(s), e.appendChild(t), e
                        },
                        _formatContents: function(e) {
                            for (var t = document.createElement("p"), n = e.split(/(?:\r\n?|\n)/), i = 0, r = n.length; i < r; ++i) {
                                var a = n[i];
                                t.appendChild(document.createTextNode(a)), i < r - 1 && t.appendChild(document.createElement("br"))
                            }
                            return t
                        },
                        _toggle: function() {
                            this.pinned ? this._hide(!0) : this._show(!0)
                        },
                        _show: function(e) {
                            e && (this.pinned = !0), this.hideElement.hasAttribute("hidden") && (this.hideElement.removeAttribute("hidden"), this.container.style.zIndex += 1)
                        },
                        _hide: function(e) {
                            e && (this.pinned = !1), this.hideElement.hasAttribute("hidden") || this.pinned || (this.hideElement.setAttribute("hidden", !0), this.container.style.zIndex -= 1)
                        }
                    }, e
                }(),
                _ = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        m.call(this, e, t, !0)
                    }
                    var t = "http://www.w3.org/2000/svg";
                    return l.inherit(e, m, {
                        render: function() {
                            this.container.className = "lineAnnotation";
                            var e = this.data,
                                n = e.rect[2] - e.rect[0],
                                i = e.rect[3] - e.rect[1],
                                r = document.createElementNS(t, "svg:svg");
                            r.setAttributeNS(null, "version", "1.1"), r.setAttributeNS(null, "width", n + "px"), r.setAttributeNS(null, "height", i + "px"), r.setAttributeNS(null, "preserveAspectRatio", "none"), r.setAttributeNS(null, "viewBox", "0 0 " + n + " " + i);
                            var a = document.createElementNS(t, "svg:line");
                            return a.setAttributeNS(null, "x1", e.rect[2] - e.lineCoordinates[0]), a.setAttributeNS(null, "y1", e.rect[3] - e.lineCoordinates[1]), a.setAttributeNS(null, "x2", e.rect[2] - e.lineCoordinates[2]), a.setAttributeNS(null, "y2", e.rect[3] - e.lineCoordinates[3]), a.setAttributeNS(null, "stroke-width", e.borderStyle.width), a.setAttributeNS(null, "stroke", "transparent"), r.appendChild(a), this.container.append(r), this._createPopup(this.container, a, this.data), this.container
                        }
                    }), e
                }(),
                L = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        m.call(this, e, t, !0)
                    }
                    return l.inherit(e, m, {
                        render: function() {
                            return this.container.className = "highlightAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                        }
                    }), e
                }(),
                k = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        m.call(this, e, t, !0)
                    }
                    return l.inherit(e, m, {
                        render: function() {
                            return this.container.className = "underlineAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                        }
                    }), e
                }(),
                T = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        m.call(this, e, t, !0)
                    }
                    return l.inherit(e, m, {
                        render: function() {
                            return this.container.className = "squigglyAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                        }
                    }), e
                }(),
                E = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        m.call(this, e, t, !0)
                    }
                    return l.inherit(e, m, {
                        render: function() {
                            return this.container.className = "strikeoutAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                        }
                    }), e
                }(),
                I = function() {
                    function e(e) {
                        m.call(this, e, !0);
                        var t = this.data.file;
                        this.filename = d(t.filename), this.content = t.content, this.linkService.onFileAttachmentAnnotation({
                            id: c(t.filename),
                            filename: t.filename,
                            content: t.content
                        })
                    }
                    return l.inherit(e, m, {
                        render: function() {
                            this.container.className = "fileAttachmentAnnotation";
                            var e = document.createElement("div");
                            return e.style.height = this.container.style.height, e.style.width = this.container.style.width, e.addEventListener("dblclick", this._download.bind(this)), this.data.hasPopup || !this.data.title && !this.data.contents || this._createPopup(this.container, e, this.data), this.container.appendChild(e), this.container
                        },
                        _download: function() {
                            if (!this.downloadManager) return void f("Download cannot be started due to unavailable download manager");
                            this.downloadManager.downloadData(this.content, this.filename, "")
                        }
                    }), e
                }(),
                F = function() {
                    return {
                        render: function(e) {
                            for (var t = new i, n = 0, r = e.annotations.length; n < r; n++) {
                                var a = e.annotations[n];
                                if (a) {
                                    var s = t.create({
                                        data: a,
                                        layer: e.div,
                                        page: e.page,
                                        viewport: e.viewport,
                                        linkService: e.linkService,
                                        downloadManager: e.downloadManager,
                                        imageResourcesPath: e.imageResourcesPath || g("imageResourcesPath"),
                                        renderInteractiveForms: e.renderInteractiveForms || !1
                                    });
                                    s.isRenderable && e.div.appendChild(s.render())
                                }
                            }
                        },
                        update: function(e) {
                            for (var t = 0, n = e.annotations.length; t < n; t++) {
                                var i = e.annotations[t],
                                    r = e.div.querySelector('[data-annotation-id="' + i.id + '"]');
                                r && p.setProp("transform", r, "matrix(" + e.viewport.transform.join(",") + ")")
                            }
                            e.div.removeAttribute("hidden")
                        }
                    }
                }();
            t.AnnotationLayer = F
        }, function(e, t, n) {
            function i(e, t, n, i) {
                var a = new Y;
                arguments.length > 1 && S("getDocument is called with pdfDataRangeTransport, passwordCallback or progressCallback argument"), t && (t instanceof J || (t = Object.create(t), t.length = e.length, t.initialData = e.initialData, t.abort || (t.abort = function() {})), e = Object.create(e), e.range = t), a.onPassword = n || null, a.onProgress = i || null;
                var s;
                "string" == typeof e ? s = {
                    url: e
                } : L(e) ? s = {
                    data: e
                } : e instanceof J ? s = {
                    range: e
                } : ("object" != typeof e && A("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"), e.url || e.data || e.range || A("Invalid parameter object: need either .data, .range or .url"), s = e);
                var o = {},
                    c = null,
                    l = null;
                for (var h in s)
                    if ("url" !== h || "undefined" == typeof window)
                        if ("range" !== h)
                            if ("worker" !== h)
                                if ("data" !== h || s[h] instanceof Uint8Array) o[h] = s[h];
                                else {
                                    var u = s[h];
                                    "string" == typeof u ? o[h] = E(u) : "object" != typeof u || null === u || isNaN(u.length) ? L(u) ? o[h] = new Uint8Array(u) : A("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.") : o[h] = new Uint8Array(u)
                                }
                else l = s[h];
                else c = s[h];
                else o[h] = new URL(s[h], window.location).href;
                o.rangeChunkSize = o.rangeChunkSize || V, o.disableNativeImageDecoder = !0 === o.disableNativeImageDecoder;
                var f = o.CMapReaderFactory || U;
                if (!l) {
                    var p = B("workerPort");
                    l = p ? new Z(null, p) : new Z, a._worker = l
                }
                var g = a.docId;
                return l.promise.then(function() {
                    if (a.destroyed) throw new Error("Loading aborted");
                    return r(l, o, c, g).then(function(e) {
                        if (a.destroyed) throw new Error("Loading aborted");
                        var t = new d(g, e, l.port),
                            n = new $(t, a, c, f);
                        a._transport = n, t.send("Ready", null)
                    })
                }).catch(a._capability.reject), a
            }

            function r(e, t, n, i) {
                return e.destroyed ? Promise.reject(new Error("Worker was destroyed")) : (t.disableAutoFetch = B("disableAutoFetch"), t.disableStream = B("disableStream"), t.chunkedViewerLoading = !!n, n && (t.length = n.length, t.initialData = n.initialData), e.messageHandler.sendWithPromise("GetDocRequest", {
                    docId: i,
                    source: t,
                    disableRange: B("disableRange"),
                    maxImageSize: B("maxImageSize"),
                    disableFontFace: B("disableFontFace"),
                    disableCreateObjectURL: B("disableCreateObjectURL"),
                    postMessageTransfers: B("postMessageTransfers") && !z,
                    docBaseUrl: t.docBaseUrl,
                    disableNativeImageDecoder: t.disableNativeImageDecoder
                }).then(function(t) {
                    if (e.destroyed) throw new Error("Worker was destroyed");
                    return t
                }))
            }
            var a, s = n(0),
                o = n(11),
                c = n(10),
                l = n(7),
                h = n(1),
                u = s.InvalidPDFException,
                d = s.MessageHandler,
                f = s.MissingPDFException,
                p = s.PageViewport,
                g = s.PasswordException,
                m = s.StatTimer,
                v = s.UnexpectedResponseException,
                b = s.UnknownErrorException,
                w = s.Util,
                y = s.createPromiseCapability,
                A = s.error,
                S = s.deprecated,
                P = s.getVerbosityLevel,
                x = s.info,
                C = s.isInt,
                _ = s.isArray,
                L = s.isArrayBuffer,
                k = s.isSameOrigin,
                T = s.loadJpegStream,
                E = s.stringToBytes,
                I = s.globalScope,
                F = s.warn,
                R = o.FontFaceObject,
                N = o.FontLoader,
                D = c.CanvasGraphics,
                O = l.Metadata,
                M = h.RenderingCancelledException,
                B = h.getDefaultSetting,
                j = h.DOMCanvasFactory,
                U = h.DOMCMapReaderFactory,
                V = 65536,
                H = !1,
                z = !1,
                W = "undefined" != typeof document && document.currentScript ? document.currentScript.src : null,
                G = null,
                X = !1;
            if ("undefined" == typeof __pdfjsdev_webpack__) {
                "undefined" == typeof window ? (H = !0, void 0 === require.ensure && (require.ensure = require("node-ensure")), X = !0) : "undefined" != typeof require && "function" == typeof require.ensure && (X = !0), "undefined" != typeof requirejs && requirejs.toUrl && (a = requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));
                var q = "undefined" != typeof requirejs && requirejs.load;
                G = X ? function(e) {
                    require.ensure([], function() {
                        var t = require("./pdf.worker.js");
                        e(t.WorkerMessageHandler)
                    })
                } : q ? function(e) {
                    requirejs(["pdfjs-dist/build/pdf.worker"], function(t) {
                        e(t.WorkerMessageHandler)
                    })
                } : null
            }
            var Y = function() {
                    function e() {
                        this._capability = y(), this._transport = null, this._worker = null, this.docId = "d" + t++, this.destroyed = !1, this.onPassword = null, this.onProgress = null, this.onUnsupportedFeature = null
                    }
                    var t = 0;
                    return e.prototype = {
                        get promise() {
                            return this._capability.promise
                        },
                        destroy: function() {
                            return this.destroyed = !0, (this._transport ? this._transport.destroy() : Promise.resolve()).then(function() {
                                this._transport = null, this._worker && (this._worker.destroy(), this._worker = null)
                            }.bind(this))
                        },
                        then: function(e, t) {
                            return this.promise.then.apply(this.promise, arguments)
                        }
                    }, e
                }(),
                J = function() {
                    function e(e, t) {
                        this.length = e, this.initialData = t, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._readyCapability = y()
                    }
                    return e.prototype = {
                        addRangeListener: function(e) {
                            this._rangeListeners.push(e)
                        },
                        addProgressListener: function(e) {
                            this._progressListeners.push(e)
                        },
                        addProgressiveReadListener: function(e) {
                            this._progressiveReadListeners.push(e)
                        },
                        onDataRange: function(e, t) {
                            for (var n = this._rangeListeners, i = 0, r = n.length; i < r; ++i) n[i](e, t)
                        },
                        onDataProgress: function(e) {
                            this._readyCapability.promise.then(function() {
                                for (var t = this._progressListeners, n = 0, i = t.length; n < i; ++n) t[n](e)
                            }.bind(this))
                        },
                        onDataProgressiveRead: function(e) {
                            this._readyCapability.promise.then(function() {
                                for (var t = this._progressiveReadListeners, n = 0, i = t.length; n < i; ++n) t[n](e)
                            }.bind(this))
                        },
                        transportReady: function() {
                            this._readyCapability.resolve()
                        },
                        requestDataRange: function(e, t) {
                            throw new Error("Abstract method PDFDataRangeTransport.requestDataRange")
                        },
                        abort: function() {}
                    }, e
                }(),
                Q = function() {
                    function e(e, t, n) {
                        this.pdfInfo = e, this.transport = t, this.loadingTask = n
                    }
                    return e.prototype = {
                        get numPages() {
                            return this.pdfInfo.numPages
                        },
                        get fingerprint() {
                            return this.pdfInfo.fingerprint
                        },
                        getPage: function(e) {
                            return this.transport.getPage(e)
                        },
                        getPageIndex: function(e) {
                            return this.transport.getPageIndex(e)
                        },
                        getDestinations: function() {
                            return this.transport.getDestinations()
                        },
                        getDestination: function(e) {
                            return this.transport.getDestination(e)
                        },
                        getPageLabels: function() {
                            return this.transport.getPageLabels()
                        },
                        getAttachments: function() {
                            return this.transport.getAttachments()
                        },
                        getJavaScript: function() {
                            return this.transport.getJavaScript()
                        },
                        getOutline: function() {
                            return this.transport.getOutline()
                        },
                        getMetadata: function() {
                            return this.transport.getMetadata()
                        },
                        getData: function() {
                            return this.transport.getData()
                        },
                        getDownloadInfo: function() {
                            return this.transport.downloadInfoCapability.promise
                        },
                        getStats: function() {
                            return this.transport.getStats()
                        },
                        cleanup: function() {
                            this.transport.startCleanup()
                        },
                        destroy: function() {
                            return this.loadingTask.destroy()
                        }
                    }, e
                }(),
                K = function() {
                    function e(e, t, n) {
                        this.pageIndex = e, this.pageInfo = t, this.transport = n, this.stats = new m, this.stats.enabled = B("enableStats"), this.commonObjs = n.commonObjs, this.objs = new ee, this.cleanupAfterRender = !1, this.pendingCleanup = !1, this.intentStates = Object.create(null), this.destroyed = !1
                    }
                    return e.prototype = {
                        get pageNumber() {
                            return this.pageIndex + 1
                        },
                        get rotate() {
                            return this.pageInfo.rotate
                        },
                        get ref() {
                            return this.pageInfo.ref
                        },
                        get userUnit() {
                            return this.pageInfo.userUnit
                        },
                        get view() {
                            return this.pageInfo.view
                        },
                        getViewport: function(e, t) {
                            return arguments.length < 2 && (t = this.rotate), new p(this.view, e, t, 0, 0)
                        },
                        getAnnotations: function(e) {
                            var t = e && e.intent || null;
                            return this.annotationsPromise && this.annotationsIntent === t || (this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, t), this.annotationsIntent = t), this.annotationsPromise
                        },
                        render: function(e) {
                            function t(e) {
                                var t = s.renderTasks.indexOf(o);
                                t >= 0 && s.renderTasks.splice(t, 1), l.cleanupAfterRender && (l.pendingCleanup = !0), l._tryCleanup(), e ? o.capability.reject(e) : o.capability.resolve(), n.timeEnd("Rendering"), n.timeEnd("Overall")
                            }
                            var n = this.stats;
                            n.time("Overall"), this.pendingCleanup = !1;
                            var i = "print" === e.intent ? "print" : "display",
                                r = !0 === e.renderInteractiveForms,
                                a = e.canvasFactory || new j;
                            this.intentStates[i] || (this.intentStates[i] = Object.create(null));
                            var s = this.intentStates[i];
                            s.displayReadyCapability || (s.receivingOperatorList = !0, s.displayReadyCapability = y(), s.operatorList = {
                                fnArray: [],
                                argsArray: [],
                                lastChunk: !1
                            }, this.stats.time("Page Request"), this.transport.messageHandler.send("RenderPageRequest", {
                                pageIndex: this.pageNumber - 1,
                                intent: i,
                                renderInteractiveForms: r
                            }));
                            var o = new ne(t, e, this.objs, this.commonObjs, s.operatorList, this.pageNumber, a);
                            o.useRequestAnimationFrame = "print" !== i, s.renderTasks || (s.renderTasks = []), s.renderTasks.push(o);
                            var c = o.task;
                            e.continueCallback && (S("render is used with continueCallback parameter"), c.onContinue = e.continueCallback);
                            var l = this;
                            return s.displayReadyCapability.promise.then(function(e) {
                                if (l.pendingCleanup) return void t();
                                n.time("Rendering"), o.initializeGraphics(e), o.operatorListChanged()
                            }, function(e) {
                                t(e)
                            }), c
                        },
                        getOperatorList: function() {
                            function e() {
                                if (n.operatorList.lastChunk) {
                                    n.opListReadCapability.resolve(n.operatorList);
                                    var e = n.renderTasks.indexOf(t);
                                    e >= 0 && n.renderTasks.splice(e, 1)
                                }
                            }
                            this.intentStates.oplist || (this.intentStates.oplist = Object.create(null));
                            var t, n = this.intentStates.oplist;
                            return n.opListReadCapability || (t = {}, t.operatorListChanged = e, n.receivingOperatorList = !0, n.opListReadCapability = y(), n.renderTasks = [], n.renderTasks.push(t), n.operatorList = {
                                fnArray: [],
                                argsArray: [],
                                lastChunk: !1
                            }, this.transport.messageHandler.send("RenderPageRequest", {
                                pageIndex: this.pageIndex,
                                intent: "oplist"
                            })), n.opListReadCapability.promise
                        },
                        getTextContent: function(e) {
                            return this.transport.messageHandler.sendWithPromise("GetTextContent", {
                                pageIndex: this.pageNumber - 1,
                                normalizeWhitespace: !(!e || !0 !== e.normalizeWhitespace),
                                combineTextItems: !e || !0 !== e.disableCombineTextItems
                            })
                        },
                        _destroy: function() {
                            this.destroyed = !0, this.transport.pageCache[this.pageIndex] = null;
                            var e = [];
                            return Object.keys(this.intentStates).forEach(function(t) {
                                if ("oplist" !== t) {
                                    this.intentStates[t].renderTasks.forEach(function(t) {
                                        var n = t.capability.promise.catch(function() {});
                                        e.push(n), t.cancel()
                                    })
                                }
                            }, this), this.objs.clear(), this.annotationsPromise = null, this.pendingCleanup = !1, Promise.all(e)
                        },
                        destroy: function() {
                            S("page destroy method, use cleanup() instead"), this.cleanup()
                        },
                        cleanup: function() {
                            this.pendingCleanup = !0, this._tryCleanup()
                        },
                        _tryCleanup: function() {
                            this.pendingCleanup && !Object.keys(this.intentStates).some(function(e) {
                                var t = this.intentStates[e];
                                return 0 !== t.renderTasks.length || t.receivingOperatorList
                            }, this) && (Object.keys(this.intentStates).forEach(function(e) {
                                delete this.intentStates[e]
                            }, this), this.objs.clear(), this.annotationsPromise = null, this.pendingCleanup = !1)
                        },
                        _startRenderPage: function(e, t) {
                            var n = this.intentStates[t];
                            n.displayReadyCapability && n.displayReadyCapability.resolve(e)
                        },
                        _renderPageChunk: function(e, t) {
                            var n, i, r = this.intentStates[t];
                            for (n = 0, i = e.length; n < i; n++) r.operatorList.fnArray.push(e.fnArray[n]), r.operatorList.argsArray.push(e.argsArray[n]);
                            for (r.operatorList.lastChunk = e.lastChunk, n = 0; n < r.renderTasks.length; n++) r.renderTasks[n].operatorListChanged();
                            e.lastChunk && (r.receivingOperatorList = !1, this._tryCleanup())
                        }
                    }, e
                }(),
                Z = function() {
                    function e() {
                        return void 0 !== a ? a : B("workerSrc") ? B("workerSrc") : W ? W.replace(/(\.(?:min\.)?js)$/i, ".worker$1") : void A("No PDFJS.workerSrc specified")
                    }

                    function t() {
                        return s ? s.promise : (s = y(), (G || function(t) {
                            w.loadScript(e(), function() {
                                t(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler)
                            })
                        })(s.resolve), s.promise)
                    }

                    function n(e) {
                        this._listeners = [], this._defer = e, this._deferred = Promise.resolve(void 0)
                    }

                    function i(e) {
                        var t = "importScripts('" + e + "');";
                        return URL.createObjectURL(new Blob([t]))
                    }

                    function r(e, t) {
                        if (this.name = e, this.destroyed = !1, this._readyCapability = y(), this._port = null, this._webWorker = null, this._messageHandler = null, t) return void this._initializeFromPort(t);
                        this._initialize()
                    }
                    var s, o = 0;
                    return n.prototype = {
                        postMessage: function(e, t) {
                            function n(e) {
                                if ("object" != typeof e || null === e) return e;
                                if (i.has(e)) return i.get(e);
                                var r, a;
                                if ((a = e.buffer) && L(a)) {
                                    var s = t && t.indexOf(a) >= 0;
                                    return r = e === a ? e : s ? new e.constructor(a, e.byteOffset, e.byteLength) : new e.constructor(e), i.set(e, r), r
                                }
                                r = _(e) ? [] : {}, i.set(e, r);
                                for (var o in e) {
                                    for (var c, l = e; !(c = Object.getOwnPropertyDescriptor(l, o));) l = Object.getPrototypeOf(l);
                                    void 0 !== c.value && "function" != typeof c.value && (r[o] = n(c.value))
                                }
                                return r
                            }
                            if (!this._defer) return void this._listeners.forEach(function(t) {
                                t.call(this, {
                                    data: e
                                })
                            }, this);
                            var i = new WeakMap,
                                r = {
                                    data: n(e)
                                };
                            this._deferred.then(function() {
                                this._listeners.forEach(function(e) {
                                    e.call(this, r)
                                }, this)
                            }.bind(this))
                        },
                        addEventListener: function(e, t) {
                            this._listeners.push(t)
                        },
                        removeEventListener: function(e, t) {
                            var n = this._listeners.indexOf(t);
                            this._listeners.splice(n, 1)
                        },
                        terminate: function() {
                            this._listeners = []
                        }
                    }, r.prototype = {
                        get promise() {
                            return this._readyCapability.promise
                        },
                        get port() {
                            return this._port
                        },
                        get messageHandler() {
                            return this._messageHandler
                        },
                        _initializeFromPort: function(e) {
                            this._port = e, this._messageHandler = new d("main", "worker", e), this._messageHandler.on("ready", function() {}), this._readyCapability.resolve()
                        },
                        _initialize: function() {
                            if (!H && !B("disableWorker") && "undefined" != typeof Worker) {
                                var t = e();
                                try {
                                    k(window.location.href, t) || (t = i(new URL(t, window.location).href));
                                    var n = new Worker(t),
                                        r = new d("main", "worker", n),
                                        a = function() {
                                            n.removeEventListener("error", s), r.destroy(), n.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker()
                                        }.bind(this),
                                        s = function(e) {
                                            this._webWorker || a()
                                        }.bind(this);
                                    n.addEventListener("error", s), r.on("test", function(e) {
                                        if (n.removeEventListener("error", s), this.destroyed) return void a();
                                        e && e.supportTypedArray ? (this._messageHandler = r, this._port = n, this._webWorker = n, e.supportTransfers || (z = !0), this._readyCapability.resolve(), r.send("configure", {
                                            verbosity: P()
                                        })) : (this._setupFakeWorker(), r.destroy(), n.terminate())
                                    }.bind(this)), r.on("console_log", function(e) {
                                        console.log.apply(console, e)
                                    }), r.on("console_error", function(e) {
                                        console.error.apply(console, e)
                                    }), r.on("ready", function(e) {
                                        if (n.removeEventListener("error", s), this.destroyed) return void a();
                                        try {
                                            o()
                                        } catch (e) {
                                            this._setupFakeWorker()
                                        }
                                    }.bind(this));
                                    var o = function() {
                                        var e = B("postMessageTransfers") && !z,
                                            t = new Uint8Array([e ? 255 : 0]);
                                        try {
                                            r.send("test", t, [t.buffer])
                                        } catch (e) {
                                            x("Cannot use postMessage transfers"), t[0] = 0, r.send("test", t)
                                        }
                                    };
                                    return void o()
                                } catch (e) {
                                    x("The worker has been disabled.")
                                }
                            }
                            this._setupFakeWorker()
                        },
                        _setupFakeWorker: function() {
                            H || B("disableWorker") || (F("Setting up fake worker."), H = !0), t().then(function(e) {
                                if (this.destroyed) return void this._readyCapability.reject(new Error("Worker was destroyed"));
                                var t = Uint8Array !== Float32Array,
                                    i = new n(t);
                                this._port = i;
                                var r = "fake" + o++,
                                    a = new d(r + "_worker", r, i);
                                e.setup(a, i);
                                var s = new d(r, r + "_worker", i);
                                this._messageHandler = s, this._readyCapability.resolve()
                            }.bind(this))
                        },
                        destroy: function() {
                            this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null)
                        }
                    }, r
                }(),
                $ = function() {
                    function e(e, t, n, i) {
                        this.messageHandler = e, this.loadingTask = t, this.pdfDataRangeTransport = n, this.commonObjs = new ee, this.fontLoader = new N(t.docId), this.CMapReaderFactory = new i({
                            baseUrl: B("cMapUrl"),
                            isCompressed: B("cMapPacked")
                        }), this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this.pageCache = [], this.pagePromises = [], this.downloadInfoCapability = y(), this.setupMessageHandler()
                    }
                    return e.prototype = {
                        destroy: function() {
                            if (this.destroyCapability) return this.destroyCapability.promise;
                            this.destroyed = !0, this.destroyCapability = y(), this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                            var e = [];
                            this.pageCache.forEach(function(t) {
                                t && e.push(t._destroy())
                            }), this.pageCache = [], this.pagePromises = [];
                            var t = this,
                                n = this.messageHandler.sendWithPromise("Terminate", null);
                            return e.push(n), Promise.all(e).then(function() {
                                t.fontLoader.clear(), t.pdfDataRangeTransport && (t.pdfDataRangeTransport.abort(), t.pdfDataRangeTransport = null), t.messageHandler && (t.messageHandler.destroy(), t.messageHandler = null), t.destroyCapability.resolve()
                            }, this.destroyCapability.reject), this.destroyCapability.promise
                        },
                        setupMessageHandler: function() {
                            var e = this.messageHandler,
                                t = this.loadingTask,
                                n = this.pdfDataRangeTransport;
                            n && (n.addRangeListener(function(t, n) {
                                e.send("OnDataRange", {
                                    begin: t,
                                    chunk: n
                                })
                            }), n.addProgressListener(function(t) {
                                e.send("OnDataProgress", {
                                    loaded: t
                                })
                            }), n.addProgressiveReadListener(function(t) {
                                e.send("OnDataRange", {
                                    chunk: t
                                })
                            }), e.on("RequestDataRange", function(e) {
                                n.requestDataRange(e.begin, e.end)
                            }, this)), e.on("GetDoc", function(e) {
                                var t = e.pdfInfo;
                                this.numPages = e.pdfInfo.numPages;
                                var n = this.loadingTask,
                                    i = new Q(t, this, n);
                                this.pdfDocument = i, n._capability.resolve(i)
                            }, this), e.on("PasswordRequest", function(e) {
                                if (this._passwordCapability = y(), t.onPassword) {
                                    var n = function(e) {
                                        this._passwordCapability.resolve({
                                            password: e
                                        })
                                    }.bind(this);
                                    t.onPassword(n, e.code)
                                } else this._passwordCapability.reject(new g(e.message, e.code));
                                return this._passwordCapability.promise
                            }, this), e.on("PasswordException", function(e) {
                                t._capability.reject(new g(e.message, e.code))
                            }, this), e.on("InvalidPDF", function(e) {
                                this.loadingTask._capability.reject(new u(e.message))
                            }, this), e.on("MissingPDF", function(e) {
                                this.loadingTask._capability.reject(new f(e.message))
                            }, this), e.on("UnexpectedResponse", function(e) {
                                this.loadingTask._capability.reject(new v(e.message, e.status))
                            }, this), e.on("UnknownError", function(e) {
                                this.loadingTask._capability.reject(new b(e.message, e.details))
                            }, this), e.on("DataLoaded", function(e) {
                                this.downloadInfoCapability.resolve(e)
                            }, this), e.on("PDFManagerReady", function(e) {
                                this.pdfDataRangeTransport && this.pdfDataRangeTransport.transportReady()
                            }, this), e.on("StartRenderPage", function(e) {
                                if (!this.destroyed) {
                                    var t = this.pageCache[e.pageIndex];
                                    t.stats.timeEnd("Page Request"), t._startRenderPage(e.transparency, e.intent)
                                }
                            }, this), e.on("RenderPageChunk", function(e) {
                                if (!this.destroyed) {
                                    this.pageCache[e.pageIndex]._renderPageChunk(e.operatorList, e.intent)
                                }
                            }, this), e.on("commonobj", function(e) {
                                if (!this.destroyed) {
                                    var t = e[0],
                                        n = e[1];
                                    if (!this.commonObjs.hasData(t)) switch (n) {
                                        case "Font":
                                            var i = e[2];
                                            if ("error" in i) {
                                                var r = i.error;
                                                F("Error during font loading: " + r), this.commonObjs.resolve(t, r);
                                                break
                                            }
                                            var a = null;
                                            B("pdfBug") && I.FontInspector && I.FontInspector.enabled && (a = {
                                                registerFont: function(e, t) {
                                                    I.FontInspector.fontAdded(e, t)
                                                }
                                            });
                                            var s = new R(i, {
                                                isEvalSuported: B("isEvalSupported"),
                                                disableFontFace: B("disableFontFace"),
                                                fontRegistry: a
                                            });
                                            this.fontLoader.bind([s], function(e) {
                                                this.commonObjs.resolve(t, s)
                                            }.bind(this));
                                            break;
                                        case "FontPath":
                                            this.commonObjs.resolve(t, e[2]);
                                            break;
                                        default:
                                            A("Got unknown common object type " + n)
                                    }
                                }
                            }, this), e.on("obj", function(e) {
                                if (!this.destroyed) {
                                    var t, n = e[0],
                                        i = e[1],
                                        r = e[2],
                                        a = this.pageCache[i];
                                    if (!a.objs.hasData(n)) switch (r) {
                                        case "JpegStream":
                                            t = e[3], T(n, t, a.objs);
                                            break;
                                        case "Image":
                                            t = e[3], a.objs.resolve(n, t);
                                            t && "data" in t && t.data.length > 8e6 && (a.cleanupAfterRender = !0);
                                            break;
                                        default:
                                            A("Got unknown object type " + r)
                                    }
                                }
                            }, this), e.on("DocProgress", function(e) {
                                if (!this.destroyed) {
                                    var t = this.loadingTask;
                                    t.onProgress && t.onProgress({
                                        loaded: e.loaded,
                                        total: e.total
                                    })
                                }
                            }, this), e.on("PageError", function(e) {
                                if (!this.destroyed) {
                                    var t = this.pageCache[e.pageNum - 1],
                                        n = t.intentStates[e.intent];
                                    if (n.displayReadyCapability ? n.displayReadyCapability.reject(e.error) : A(e.error), n.operatorList) {
                                        n.operatorList.lastChunk = !0;
                                        for (var i = 0; i < n.renderTasks.length; i++) n.renderTasks[i].operatorListChanged()
                                    }
                                }
                            }, this), e.on("UnsupportedFeature", function(e) {
                                if (!this.destroyed) {
                                    var t = e.featureId,
                                        n = this.loadingTask;
                                    n.onUnsupportedFeature && n.onUnsupportedFeature(t), ie.notify(t)
                                }
                            }, this), e.on("JpegDecode", function(e) {
                                if (this.destroyed) return Promise.reject(new Error("Worker was destroyed"));
                                if ("undefined" == typeof document) return Promise.reject(new Error('"document" is not defined.'));
                                var t = e[0],
                                    n = e[1];
                                return 3 !== n && 1 !== n ? Promise.reject(new Error("Only 3 components or 1 component can be returned")) : new Promise(function(e, i) {
                                    var r = new Image;
                                    r.onload = function() {
                                        var t = r.width,
                                            i = r.height,
                                            a = t * i,
                                            s = 4 * a,
                                            o = new Uint8Array(a * n),
                                            c = document.createElement("canvas");
                                        c.width = t, c.height = i;
                                        var l = c.getContext("2d");
                                        l.drawImage(r, 0, 0);
                                        var h, u, d = l.getImageData(0, 0, t, i).data;
                                        if (3 === n)
                                            for (h = 0, u = 0; h < s; h += 4, u += 3) o[u] = d[h], o[u + 1] = d[h + 1], o[u + 2] = d[h + 2];
                                        else if (1 === n)
                                            for (h = 0, u = 0; h < s; h += 4, u++) o[u] = d[h];
                                        e({
                                            data: o,
                                            width: t,
                                            height: i
                                        })
                                    }, r.onerror = function() {
                                        i(new Error("JpegDecode failed to load image"))
                                    }, r.src = t
                                })
                            }, this), e.on("FetchBuiltInCMap", function(e) {
                                return this.destroyed ? Promise.reject(new Error("Worker was destroyed")) : this.CMapReaderFactory.fetch({
                                    name: e.name
                                })
                            }, this)
                        },
                        getData: function() {
                            return this.messageHandler.sendWithPromise("GetData", null)
                        },
                        getPage: function(e, t) {
                            if (!C(e) || e <= 0 || e > this.numPages) return Promise.reject(new Error("Invalid page request"));
                            var n = e - 1;
                            if (n in this.pagePromises) return this.pagePromises[n];
                            var i = this.messageHandler.sendWithPromise("GetPage", {
                                pageIndex: n
                            }).then(function(e) {
                                if (this.destroyed) throw new Error("Transport destroyed");
                                var t = new K(n, e, this);
                                return this.pageCache[n] = t, t
                            }.bind(this));
                            return this.pagePromises[n] = i, i
                        },
                        getPageIndex: function(e) {
                            return this.messageHandler.sendWithPromise("GetPageIndex", {
                                ref: e
                            }).catch(function(e) {
                                return Promise.reject(new Error(e))
                            })
                        },
                        getAnnotations: function(e, t) {
                            return this.messageHandler.sendWithPromise("GetAnnotations", {
                                pageIndex: e,
                                intent: t
                            })
                        },
                        getDestinations: function() {
                            return this.messageHandler.sendWithPromise("GetDestinations", null)
                        },
                        getDestination: function(e) {
                            return this.messageHandler.sendWithPromise("GetDestination", {
                                id: e
                            })
                        },
                        getPageLabels: function() {
                            return this.messageHandler.sendWithPromise("GetPageLabels", null)
                        },
                        getAttachments: function() {
                            return this.messageHandler.sendWithPromise("GetAttachments", null)
                        },
                        getJavaScript: function() {
                            return this.messageHandler.sendWithPromise("GetJavaScript", null)
                        },
                        getOutline: function() {
                            return this.messageHandler.sendWithPromise("GetOutline", null)
                        },
                        getMetadata: function() {
                            return this.messageHandler.sendWithPromise("GetMetadata", null).then(function(e) {
                                return {
                                    info: e[0],
                                    metadata: e[1] ? new O(e[1]) : null
                                }
                            })
                        },
                        getStats: function() {
                            return this.messageHandler.sendWithPromise("GetStats", null)
                        },
                        startCleanup: function() {
                            this.messageHandler.sendWithPromise("Cleanup", null).then(function() {
                                for (var e = 0, t = this.pageCache.length; e < t; e++) {
                                    var n = this.pageCache[e];
                                    n && n.cleanup()
                                }
                                this.commonObjs.clear(), this.fontLoader.clear()
                            }.bind(this))
                        }
                    }, e
                }(),
                ee = function() {
                    function e() {
                        this.objs = Object.create(null)
                    }
                    return e.prototype = {
                        ensureObj: function(e) {
                            if (this.objs[e]) return this.objs[e];
                            var t = {
                                capability: y(),
                                data: null,
                                resolved: !1
                            };
                            return this.objs[e] = t, t
                        },
                        get: function(e, t) {
                            if (t) return this.ensureObj(e).capability.promise.then(t), null;
                            var n = this.objs[e];
                            return n && n.resolved || A("Requesting object that isn't resolved yet " + e), n.data
                        },
                        resolve: function(e, t) {
                            var n = this.ensureObj(e);
                            n.resolved = !0, n.data = t, n.capability.resolve(t)
                        },
                        isResolved: function(e) {
                            var t = this.objs;
                            return !!t[e] && t[e].resolved
                        },
                        hasData: function(e) {
                            return this.isResolved(e)
                        },
                        getData: function(e) {
                            var t = this.objs;
                            return t[e] && t[e].resolved ? t[e].data : null
                        },
                        clear: function() {
                            this.objs = Object.create(null)
                        }
                    }, e
                }(),
                te = function() {
                    function e(e) {
                        this._internalRenderTask = e, this.onContinue = null
                    }
                    return e.prototype = {
                        get promise() {
                            return this._internalRenderTask.capability.promise
                        },
                        cancel: function() {
                            this._internalRenderTask.cancel()
                        },
                        then: function(e, t) {
                            return this.promise.then.apply(this.promise, arguments)
                        }
                    }, e
                }(),
                ne = function() {
                    function e(e, t, n, i, r, a, s) {
                        this.callback = e, this.params = t, this.objs = n, this.commonObjs = i, this.operatorListIdx = null, this.operatorList = r, this.pageNumber = a, this.canvasFactory = s, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this.useRequestAnimationFrame = !1, this.cancelled = !1, this.capability = y(), this.task = new te(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this)
                    }
                    return e.prototype = {
                        initializeGraphics: function(e) {
                            if (!this.cancelled) {
                                B("pdfBug") && I.StepperManager && I.StepperManager.enabled && (this.stepper = I.StepperManager.create(this.pageNumber - 1), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                                var t = this.params;
                                this.gfx = new D(t.canvasContext, this.commonObjs, this.objs, this.canvasFactory, t.imageLayer), this.gfx.beginDrawing(t.transform, t.viewport, e), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback && this.graphicsReadyCallback()
                            }
                        },
                        cancel: function() {
                            this.running = !1, this.cancelled = !0, B("pdfjsNext") ? this.callback(new M("Rendering cancelled, page " + this.pageNumber, "canvas")) : this.callback("cancelled")
                        },
                        operatorListChanged: function() {
                            if (!this.graphicsReady) return void(this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound));
                            this.stepper && this.stepper.updateOperatorList(this.operatorList), this.running || this._continue()
                        },
                        _continue: function() {
                            this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
                        },
                        _scheduleNext: function() {
                            this.useRequestAnimationFrame && "undefined" != typeof window ? window.requestAnimationFrame(this._nextBound) : Promise.resolve(void 0).then(this._nextBound)
                        },
                        _next: function() {
                            this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), this.callback())))
                        }
                    }, e
                }(),
                ie = function() {
                    var e = [];
                    return {
                        listen: function(t) {
                            S("Global UnsupportedManager.listen is used:  use PDFDocumentLoadingTask.onUnsupportedFeature instead"), e.push(t)
                        },
                        notify: function(t) {
                            for (var n = 0, i = e.length; n < i; n++) e[n](t)
                        }
                    }
                }();
            t.version = "1.8.188", t.build = "ad1023f", t.getDocument = i, t.PDFDataRangeTransport = J, t.PDFWorker = Z, t.PDFDocumentProxy = Q, t.PDFPageProxy = K, t._UnsupportedManager = ie
        }, function(e, t, n) {
            var i = n(0),
                r = i.FONT_IDENTITY_MATRIX,
                a = i.IDENTITY_MATRIX,
                s = i.ImageKind,
                o = i.OPS,
                c = i.Util,
                l = i.isNum,
                h = i.isArray,
                u = i.warn,
                d = i.createObjectURL,
                f = {
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fillColor: "#000000"
                },
                p = function() {
                    function e(e, t, n) {
                        for (var i = -1, r = t; r < n; r++) {
                            var a = 255 & (i ^ e[r]);
                            i = i >>> 8 ^ o[a]
                        }
                        return -1 ^ i
                    }

                    function t(t, n, i, r) {
                        var a = r,
                            s = n.length;
                        i[a] = s >> 24 & 255, i[a + 1] = s >> 16 & 255, i[a + 2] = s >> 8 & 255, i[a + 3] = 255 & s, a += 4, i[a] = 255 & t.charCodeAt(0), i[a + 1] = 255 & t.charCodeAt(1), i[a + 2] = 255 & t.charCodeAt(2), i[a + 3] = 255 & t.charCodeAt(3), a += 4, i.set(n, a), a += n.length;
                        var o = e(i, r + 4, a);
                        i[a] = o >> 24 & 255, i[a + 1] = o >> 16 & 255, i[a + 2] = o >> 8 & 255, i[a + 3] = 255 & o
                    }

                    function n(e, t, n) {
                        for (var i = 1, r = 0, a = t; a < n; ++a) i = (i + (255 & e[a])) % 65521, r = (r + i) % 65521;
                        return r << 16 | i
                    }

                    function i(e, i, o) {
                        var c, l, h, u = e.width,
                            f = e.height,
                            p = e.data;
                        switch (i) {
                            case s.GRAYSCALE_1BPP:
                                l = 0, c = 1, h = u + 7 >> 3;
                                break;
                            case s.RGB_24BPP:
                                l = 2, c = 8, h = 3 * u;
                                break;
                            case s.RGBA_32BPP:
                                l = 6, c = 8, h = 4 * u;
                                break;
                            default:
                                throw new Error("invalid format")
                        }
                        var g, m, v = new Uint8Array((1 + h) * f),
                            b = 0,
                            w = 0;
                        for (g = 0; g < f; ++g) v[b++] = 0, v.set(p.subarray(w, w + h), b), w += h, b += h;
                        if (i === s.GRAYSCALE_1BPP)
                            for (b = 0, g = 0; g < f; g++)
                                for (b++, m = 0; m < h; m++) v[b++] ^= 255;
                        var y = new Uint8Array([u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, 255 & f, c, l, 0, 0, 0]),
                            A = v.length,
                            S = Math.ceil(A / 65535),
                            P = new Uint8Array(2 + A + 5 * S + 4),
                            x = 0;
                        P[x++] = 120, P[x++] = 156;
                        for (var C = 0; A > 65535;) P[x++] = 0, P[x++] = 255, P[x++] = 255, P[x++] = 0, P[x++] = 0, P.set(v.subarray(C, C + 65535), x), x += 65535, C += 65535, A -= 65535;
                        P[x++] = 1, P[x++] = 255 & A, P[x++] = A >> 8 & 255, P[x++] = 255 & ~A, P[x++] = (65535 & ~A) >> 8 & 255, P.set(v.subarray(C), x), x += v.length - C;
                        var _ = n(v, 0, v.length);
                        P[x++] = _ >> 24 & 255, P[x++] = _ >> 16 & 255, P[x++] = _ >> 8 & 255, P[x++] = 255 & _;
                        var L = r.length + 3 * a + y.length + P.length,
                            k = new Uint8Array(L),
                            T = 0;
                        return k.set(r, T), T += r.length, t("IHDR", y, k, T), T += a + y.length, t("IDATA", P, k, T), T += a + P.length, t("IEND", new Uint8Array(0), k, T), d(k, "image/png", o)
                    }
                    for (var r = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), a = 12, o = new Int32Array(256), c = 0; c < 256; c++) {
                        for (var l = c, h = 0; h < 8; h++) l = 1 & l ? 3988292384 ^ l >> 1 & 2147483647 : l >> 1 & 2147483647;
                        o[c] = l
                    }
                    return function(e, t) {
                        return i(e, void 0 === e.kind ? s.GRAYSCALE_1BPP : e.kind, t)
                    }
                }(),
                g = function() {
                    function e() {
                        this.fontSizeScale = 1, this.fontWeight = f.fontWeight, this.fontSize = 0, this.textMatrix = a, this.fontMatrix = r, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = f.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = ""
                    }
                    return e.prototype = {
                        clone: function() {
                            return Object.create(this)
                        },
                        setCurrentPoint: function(e, t) {
                            this.x = e, this.y = t
                        }
                    }, e
                }(),
                m = function() {
                    function e(e) {
                        for (var t = [], n = [], i = e.length, r = 0; r < i; r++) "save" !== e[r].fn ? "restore" === e[r].fn ? t = n.pop() : t.push(e[r]) : (t.push({
                            fnId: 92,
                            fn: "group",
                            items: []
                        }), n.push(t), t = t[t.length - 1].items);
                        return t
                    }

                    function t(e) {
                        if (e === (0 | e)) return e.toString();
                        var t = e.toFixed(10),
                            n = t.length - 1;
                        if ("0" !== t[n]) return t;
                        do {
                            n--
                        } while ("0" === t[n]);
                        return t.substr(0, "." === t[n] ? n : n + 1)
                    }

                    function n(e) {
                        if (0 === e[4] && 0 === e[5]) {
                            if (0 === e[1] && 0 === e[2]) return 1 === e[0] && 1 === e[3] ? "" : "scale(" + t(e[0]) + " " + t(e[3]) + ")";
                            if (e[0] === e[3] && e[1] === -e[2]) {
                                return "rotate(" + t(180 * Math.acos(e[0]) / Math.PI) + ")"
                            }
                        } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3]) return "translate(" + t(e[4]) + " " + t(e[5]) + ")";
                        return "matrix(" + t(e[0]) + " " + t(e[1]) + " " + t(e[2]) + " " + t(e[3]) + " " + t(e[4]) + " " + t(e[5]) + ")"
                    }

                    function i(e, t, n) {
                        this.current = new g, this.transformMatrix = a, this.transformStack = [], this.extraStack = [], this.commonObjs = e, this.objs = t, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = Object.create(null), this.cssStyle = null, this.forceDataSchema = !!n
                    }
                    var s = "http://www.w3.org/2000/svg",
                        m = "http://www.w3.org/1999/xlink",
                        v = ["butt", "round", "square"],
                        b = ["miter", "round", "bevel"],
                        w = 0,
                        y = 0;
                    return i.prototype = {
                        save: function() {
                            this.transformStack.push(this.transformMatrix);
                            var e = this.current;
                            this.extraStack.push(e), this.current = e.clone()
                        },
                        restore: function() {
                            this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.tgrp = null
                        },
                        group: function(e) {
                            this.save(), this.executeOpTree(e), this.restore()
                        },
                        loadDependencies: function(e) {
                            for (var t = e.fnArray, n = t.length, i = e.argsArray, r = this, a = 0; a < n; a++)
                                if (o.dependency === t[a])
                                    for (var s = i[a], c = 0, l = s.length; c < l; c++) {
                                        var h, u = s[c],
                                            d = "g_" === u.substring(0, 2);
                                        h = d ? new Promise(function(e) {
                                            r.commonObjs.get(u, e)
                                        }) : new Promise(function(e) {
                                            r.objs.get(u, e)
                                        }), this.current.dependencies.push(h)
                                    }
                            return Promise.all(this.current.dependencies)
                        },
                        transform: function(e, t, n, i, r, a) {
                            var s = [e, t, n, i, r, a];
                            this.transformMatrix = c.transform(this.transformMatrix, s), this.tgrp = null
                        },
                        getSVG: function(e, t) {
                            this.viewport = t;
                            var n = this._initialize(t);
                            return this.loadDependencies(e).then(function() {
                                this.transformMatrix = a;
                                var t = this.convertOpList(e);
                                return this.executeOpTree(t), n
                            }.bind(this))
                        },
                        convertOpList: function(t) {
                            var n = t.argsArray,
                                i = t.fnArray,
                                r = i.length,
                                a = [],
                                s = [];
                            for (var c in o) a[o[c]] = c;
                            for (var l = 0; l < r; l++) {
                                var h = i[l];
                                s.push({
                                    fnId: h,
                                    fn: a[h],
                                    args: n[l]
                                })
                            }
                            return e(s)
                        },
                        executeOpTree: function(e) {
                            for (var t = e.length, n = 0; n < t; n++) {
                                var i = e[n].fn,
                                    r = e[n].fnId,
                                    a = e[n].args;
                                switch (0 | r) {
                                    case o.beginText:
                                        this.beginText();
                                        break;
                                    case o.setLeading:
                                        this.setLeading(a);
                                        break;
                                    case o.setLeadingMoveText:
                                        this.setLeadingMoveText(a[0], a[1]);
                                        break;
                                    case o.setFont:
                                        this.setFont(a);
                                        break;
                                    case o.showText:
                                    case o.showSpacedText:
                                        this.showText(a[0]);
                                        break;
                                    case o.endText:
                                        this.endText();
                                        break;
                                    case o.moveText:
                                        this.moveText(a[0], a[1]);
                                        break;
                                    case o.setCharSpacing:
                                        this.setCharSpacing(a[0]);
                                        break;
                                    case o.setWordSpacing:
                                        this.setWordSpacing(a[0]);
                                        break;
                                    case o.setHScale:
                                        this.setHScale(a[0]);
                                        break;
                                    case o.setTextMatrix:
                                        this.setTextMatrix(a[0], a[1], a[2], a[3], a[4], a[5]);
                                        break;
                                    case o.setLineWidth:
                                        this.setLineWidth(a[0]);
                                        break;
                                    case o.setLineJoin:
                                        this.setLineJoin(a[0]);
                                        break;
                                    case o.setLineCap:
                                        this.setLineCap(a[0]);
                                        break;
                                    case o.setMiterLimit:
                                        this.setMiterLimit(a[0]);
                                        break;
                                    case o.setFillRGBColor:
                                        this.setFillRGBColor(a[0], a[1], a[2]);
                                        break;
                                    case o.setStrokeRGBColor:
                                        this.setStrokeRGBColor(a[0], a[1], a[2]);
                                        break;
                                    case o.setDash:
                                        this.setDash(a[0], a[1]);
                                        break;
                                    case o.setGState:
                                        this.setGState(a[0]);
                                        break;
                                    case o.fill:
                                        this.fill();
                                        break;
                                    case o.eoFill:
                                        this.eoFill();
                                        break;
                                    case o.stroke:
                                        this.stroke();
                                        break;
                                    case o.fillStroke:
                                        this.fillStroke();
                                        break;
                                    case o.eoFillStroke:
                                        this.eoFillStroke();
                                        break;
                                    case o.clip:
                                        this.clip("nonzero");
                                        break;
                                    case o.eoClip:
                                        this.clip("evenodd");
                                        break;
                                    case o.paintSolidColorImageMask:
                                        this.paintSolidColorImageMask();
                                        break;
                                    case o.paintJpegXObject:
                                        this.paintJpegXObject(a[0], a[1], a[2]);
                                        break;
                                    case o.paintImageXObject:
                                        this.paintImageXObject(a[0]);
                                        break;
                                    case o.paintInlineImageXObject:
                                        this.paintInlineImageXObject(a[0]);
                                        break;
                                    case o.paintImageMaskXObject:
                                        this.paintImageMaskXObject(a[0]);
                                        break;
                                    case o.paintFormXObjectBegin:
                                        this.paintFormXObjectBegin(a[0], a[1]);
                                        break;
                                    case o.paintFormXObjectEnd:
                                        this.paintFormXObjectEnd();
                                        break;
                                    case o.closePath:
                                        this.closePath();
                                        break;
                                    case o.closeStroke:
                                        this.closeStroke();
                                        break;
                                    case o.closeFillStroke:
                                        this.closeFillStroke();
                                        break;
                                    case o.nextLine:
                                        this.nextLine();
                                        break;
                                    case o.transform:
                                        this.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
                                        break;
                                    case o.constructPath:
                                        this.constructPath(a[0], a[1]);
                                        break;
                                    case o.endPath:
                                        this.endPath();
                                        break;
                                    case 92:
                                        this.group(e[n].items);
                                        break;
                                    default:
                                        u("Unimplemented operator " + i)
                                }
                            }
                        },
                        setWordSpacing: function(e) {
                            this.current.wordSpacing = e
                        },
                        setCharSpacing: function(e) {
                            this.current.charSpacing = e
                        },
                        nextLine: function() {
                            this.moveText(0, this.current.leading)
                        },
                        setTextMatrix: function(e, n, i, r, a, o) {
                            var c = this.current;
                            this.current.textMatrix = this.current.lineMatrix = [e, n, i, r, a, o], this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, c.xcoords = [], c.tspan = document.createElementNS(s, "svg:tspan"), c.tspan.setAttributeNS(null, "font-family", c.fontFamily), c.tspan.setAttributeNS(null, "font-size", t(c.fontSize) + "px"), c.tspan.setAttributeNS(null, "y", t(-c.y)), c.txtElement = document.createElementNS(s, "svg:text"), c.txtElement.appendChild(c.tspan)
                        },
                        beginText: function() {
                            this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, this.current.textMatrix = a, this.current.lineMatrix = a, this.current.tspan = document.createElementNS(s, "svg:tspan"), this.current.txtElement = document.createElementNS(s, "svg:text"), this.current.txtgrp = document.createElementNS(s, "svg:g"), this.current.xcoords = []
                        },
                        moveText: function(e, n) {
                            var i = this.current;
                            this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += n, i.xcoords = [], i.tspan = document.createElementNS(s, "svg:tspan"), i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", t(i.fontSize) + "px"), i.tspan.setAttributeNS(null, "y", t(-i.y))
                        },
                        showText: function(e) {
                            var i = this.current,
                                r = i.font,
                                a = i.fontSize;
                            if (0 !== a) {
                                var s, o = i.charSpacing,
                                    c = i.wordSpacing,
                                    h = i.fontDirection,
                                    u = i.textHScale * h,
                                    d = e.length,
                                    p = r.vertical,
                                    g = a * i.fontMatrix[0],
                                    m = 0;
                                for (s = 0; s < d; ++s) {
                                    var v = e[s];
                                    if (null !== v)
                                        if (l(v)) m += -v * a * .001;
                                        else {
                                            i.xcoords.push(i.x + m * u);
                                            var b = v.width,
                                                w = v.fontChar,
                                                y = b * g + o * h;
                                            m += y, i.tspan.textContent += w
                                        }
                                    else m += h * c
                                }
                                p ? i.y -= m * u : i.x += m * u, i.tspan.setAttributeNS(null, "x", i.xcoords.map(t).join(" ")), i.tspan.setAttributeNS(null, "y", t(-i.y)), i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", t(i.fontSize) + "px"), i.fontStyle !== f.fontStyle && i.tspan.setAttributeNS(null, "font-style", i.fontStyle), i.fontWeight !== f.fontWeight && i.tspan.setAttributeNS(null, "font-weight", i.fontWeight), i.fillColor !== f.fillColor && i.tspan.setAttributeNS(null, "fill", i.fillColor), i.txtElement.setAttributeNS(null, "transform", n(i.textMatrix) + " scale(1, -1)"), i.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), i.txtElement.appendChild(i.tspan), i.txtgrp.appendChild(i.txtElement), this._ensureTransformGroup().appendChild(i.txtElement)
                            }
                        },
                        setLeadingMoveText: function(e, t) {
                            this.setLeading(-t), this.moveText(e, t)
                        },
                        addFontStyle: function(e) {
                            this.cssStyle || (this.cssStyle = document.createElementNS(s, "svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.appendChild(this.cssStyle));
                            var t = d(e.data, e.mimetype, this.forceDataSchema);
                            this.cssStyle.textContent += '@font-face { font-family: "' + e.loadedName + '"; src: url(' + t + "); }\n"
                        },
                        setFont: function(e) {
                            var n = this.current,
                                i = this.commonObjs.get(e[0]),
                                a = e[1];
                            this.current.font = i, this.embedFonts && i.data && !this.embeddedFonts[i.loadedName] && (this.addFontStyle(i), this.embeddedFonts[i.loadedName] = i), n.fontMatrix = i.fontMatrix ? i.fontMatrix : r;
                            var o = i.black ? i.bold ? "bolder" : "bold" : i.bold ? "bold" : "normal",
                                c = i.italic ? "italic" : "normal";
                            a < 0 ? (a = -a, n.fontDirection = -1) : n.fontDirection = 1, n.fontSize = a, n.fontFamily = i.loadedName, n.fontWeight = o, n.fontStyle = c, n.tspan = document.createElementNS(s, "svg:tspan"), n.tspan.setAttributeNS(null, "y", t(-n.y)), n.xcoords = []
                        },
                        endText: function() {},
                        setLineWidth: function(e) {
                            this.current.lineWidth = e
                        },
                        setLineCap: function(e) {
                            this.current.lineCap = v[e]
                        },
                        setLineJoin: function(e) {
                            this.current.lineJoin = b[e]
                        },
                        setMiterLimit: function(e) {
                            this.current.miterLimit = e
                        },
                        setStrokeRGBColor: function(e, t, n) {
                            var i = c.makeCssRgb(e, t, n);
                            this.current.strokeColor = i
                        },
                        setFillRGBColor: function(e, t, n) {
                            var i = c.makeCssRgb(e, t, n);
                            this.current.fillColor = i, this.current.tspan = document.createElementNS(s, "svg:tspan"), this.current.xcoords = []
                        },
                        setDash: function(e, t) {
                            this.current.dashArray = e, this.current.dashPhase = t
                        },
                        constructPath: function(e, n) {
                            var i = this.current,
                                r = i.x,
                                a = i.y;
                            i.path = document.createElementNS(s, "svg:path");
                            for (var c = [], l = e.length, h = 0, u = 0; h < l; h++) switch (0 | e[h]) {
                                case o.rectangle:
                                    r = n[u++], a = n[u++];
                                    var d = n[u++],
                                        f = n[u++],
                                        p = r + d,
                                        g = a + f;
                                    c.push("M", t(r), t(a), "L", t(p), t(a), "L", t(p), t(g), "L", t(r), t(g), "Z");
                                    break;
                                case o.moveTo:
                                    r = n[u++], a = n[u++], c.push("M", t(r), t(a));
                                    break;
                                case o.lineTo:
                                    r = n[u++], a = n[u++], c.push("L", t(r), t(a));
                                    break;
                                case o.curveTo:
                                    r = n[u + 4], a = n[u + 5], c.push("C", t(n[u]), t(n[u + 1]), t(n[u + 2]), t(n[u + 3]), t(r), t(a)), u += 6;
                                    break;
                                case o.curveTo2:
                                    r = n[u + 2], a = n[u + 3], c.push("C", t(r), t(a), t(n[u]), t(n[u + 1]), t(n[u + 2]), t(n[u + 3])), u += 4;
                                    break;
                                case o.curveTo3:
                                    r = n[u + 2], a = n[u + 3], c.push("C", t(n[u]), t(n[u + 1]), t(r), t(a), t(r), t(a)), u += 4;
                                    break;
                                case o.closePath:
                                    c.push("Z")
                            }
                            i.path.setAttributeNS(null, "d", c.join(" ")), i.path.setAttributeNS(null, "stroke-miterlimit", t(i.miterLimit)), i.path.setAttributeNS(null, "stroke-linecap", i.lineCap), i.path.setAttributeNS(null, "stroke-linejoin", i.lineJoin), i.path.setAttributeNS(null, "stroke-width", t(i.lineWidth) + "px"), i.path.setAttributeNS(null, "stroke-dasharray", i.dashArray.map(t).join(" ")), i.path.setAttributeNS(null, "stroke-dashoffset", t(i.dashPhase) + "px"), i.path.setAttributeNS(null, "fill", "none"), this._ensureTransformGroup().appendChild(i.path), i.element = i.path, i.setCurrentPoint(r, a)
                        },
                        endPath: function() {},
                        clip: function(e) {
                            var t = this.current,
                                i = "clippath" + w;
                            w++;
                            var r = document.createElementNS(s, "svg:clipPath");
                            r.setAttributeNS(null, "id", i), r.setAttributeNS(null, "transform", n(this.transformMatrix));
                            var a = t.element.cloneNode();
                            "evenodd" === e ? a.setAttributeNS(null, "clip-rule", "evenodd") : a.setAttributeNS(null, "clip-rule", "nonzero"), r.appendChild(a), this.defs.appendChild(r), t.activeClipUrl && (t.clipGroup = null, this.extraStack.forEach(function(e) {
                                e.clipGroup = null
                            })), t.activeClipUrl = "url(#" + i + ")", this.tgrp = null
                        },
                        closePath: function() {
                            var e = this.current,
                                t = e.path.getAttributeNS(null, "d");
                            t += "Z", e.path.setAttributeNS(null, "d", t)
                        },
                        setLeading: function(e) {
                            this.current.leading = -e
                        },
                        setTextRise: function(e) {
                            this.current.textRise = e
                        },
                        setHScale: function(e) {
                            this.current.textHScale = e / 100
                        },
                        setGState: function(e) {
                            for (var t = 0, n = e.length; t < n; t++) {
                                var i = e[t],
                                    r = i[0],
                                    a = i[1];
                                switch (r) {
                                    case "LW":
                                        this.setLineWidth(a);
                                        break;
                                    case "LC":
                                        this.setLineCap(a);
                                        break;
                                    case "LJ":
                                        this.setLineJoin(a);
                                        break;
                                    case "ML":
                                        this.setMiterLimit(a);
                                        break;
                                    case "D":
                                        this.setDash(a[0], a[1]);
                                        break;
                                    case "Font":
                                        this.setFont(a);
                                        break;
                                    default:
                                        u("Unimplemented graphic state " + r)
                                }
                            }
                        },
                        fill: function() {
                            var e = this.current;
                            e.element.setAttributeNS(null, "fill", e.fillColor)
                        },
                        stroke: function() {
                            var e = this.current;
                            e.element.setAttributeNS(null, "stroke", e.strokeColor), e.element.setAttributeNS(null, "fill", "none")
                        },
                        eoFill: function() {
                            var e = this.current;
                            e.element.setAttributeNS(null, "fill", e.fillColor), e.element.setAttributeNS(null, "fill-rule", "evenodd")
                        },
                        fillStroke: function() {
                            this.stroke(), this.fill()
                        },
                        eoFillStroke: function() {
                            this.current.element.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke()
                        },
                        closeStroke: function() {
                            this.closePath(), this.stroke()
                        },
                        closeFillStroke: function() {
                            this.closePath(), this.fillStroke()
                        },
                        paintSolidColorImageMask: function() {
                            var e = this.current,
                                t = document.createElementNS(s, "svg:rect");
                            t.setAttributeNS(null, "x", "0"), t.setAttributeNS(null, "y", "0"), t.setAttributeNS(null, "width", "1px"), t.setAttributeNS(null, "height", "1px"), t.setAttributeNS(null, "fill", e.fillColor), this._ensureTransformGroup().appendChild(t)
                        },
                        paintJpegXObject: function(e, n, i) {
                            var r = this.objs.get(e),
                                a = document.createElementNS(s, "svg:image");
                            a.setAttributeNS(m, "xlink:href", r.src), a.setAttributeNS(null, "width", r.width + "px"), a.setAttributeNS(null, "height", r.height + "px"), a.setAttributeNS(null, "x", "0"), a.setAttributeNS(null, "y", t(-i)), a.setAttributeNS(null, "transform", "scale(" + t(1 / n) + " " + t(-1 / i) + ")"), this._ensureTransformGroup().appendChild(a)
                        },
                        paintImageXObject: function(e) {
                            var t = this.objs.get(e);
                            if (!t) return void u("Dependent image isn't ready yet");
                            this.paintInlineImageXObject(t)
                        },
                        paintInlineImageXObject: function(e, n) {
                            var i = e.width,
                                r = e.height,
                                a = p(e, this.forceDataSchema),
                                o = document.createElementNS(s, "svg:rect");
                            o.setAttributeNS(null, "x", "0"), o.setAttributeNS(null, "y", "0"), o.setAttributeNS(null, "width", t(i)), o.setAttributeNS(null, "height", t(r)), this.current.element = o, this.clip("nonzero");
                            var c = document.createElementNS(s, "svg:image");
                            c.setAttributeNS(m, "xlink:href", a), c.setAttributeNS(null, "x", "0"), c.setAttributeNS(null, "y", t(-r)), c.setAttributeNS(null, "width", t(i) + "px"), c.setAttributeNS(null, "height", t(r) + "px"), c.setAttributeNS(null, "transform", "scale(" + t(1 / i) + " " + t(-1 / r) + ")"), n ? n.appendChild(c) : this._ensureTransformGroup().appendChild(c)
                        },
                        paintImageMaskXObject: function(e) {
                            var n = this.current,
                                i = e.width,
                                r = e.height,
                                a = n.fillColor;
                            n.maskId = "mask" + y++;
                            var o = document.createElementNS(s, "svg:mask");
                            o.setAttributeNS(null, "id", n.maskId);
                            var c = document.createElementNS(s, "svg:rect");
                            c.setAttributeNS(null, "x", "0"), c.setAttributeNS(null, "y", "0"), c.setAttributeNS(null, "width", t(i)), c.setAttributeNS(null, "height", t(r)), c.setAttributeNS(null, "fill", a), c.setAttributeNS(null, "mask", "url(#" + n.maskId + ")"), this.defs.appendChild(o), this._ensureTransformGroup().appendChild(c), this.paintInlineImageXObject(e, o)
                        },
                        paintFormXObjectBegin: function(e, n) {
                            if (h(e) && 6 === e.length && this.transform(e[0], e[1], e[2], e[3], e[4], e[5]), h(n) && 4 === n.length) {
                                var i = n[2] - n[0],
                                    r = n[3] - n[1],
                                    a = document.createElementNS(s, "svg:rect");
                                a.setAttributeNS(null, "x", n[0]), a.setAttributeNS(null, "y", n[1]), a.setAttributeNS(null, "width", t(i)), a.setAttributeNS(null, "height", t(r)), this.current.element = a, this.clip("nonzero"), this.endPath()
                            }
                        },
                        paintFormXObjectEnd: function() {},
                        _initialize: function(e) {
                            var t = document.createElementNS(s, "svg:svg");
                            t.setAttributeNS(null, "version", "1.1"), t.setAttributeNS(null, "width", e.width + "px"), t.setAttributeNS(null, "height", e.height + "px"), t.setAttributeNS(null, "preserveAspectRatio", "none"), t.setAttributeNS(null, "viewBox", "0 0 " + e.width + " " + e.height);
                            var i = document.createElementNS(s, "svg:defs");
                            t.appendChild(i), this.defs = i;
                            var r = document.createElementNS(s, "svg:g");
                            return r.setAttributeNS(null, "transform", n(e.transform)), t.appendChild(r), this.svg = r, t
                        },
                        _ensureClipGroup: function() {
                            if (!this.current.clipGroup) {
                                var e = document.createElementNS(s, "svg:g");
                                e.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.appendChild(e), this.current.clipGroup = e
                            }
                            return this.current.clipGroup
                        },
                        _ensureTransformGroup: function() {
                            return this.tgrp || (this.tgrp = document.createElementNS(s, "svg:g"), this.tgrp.setAttributeNS(null, "transform", n(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp)), this.tgrp
                        }
                    }, i
                }();
            t.SVGGraphics = m
        }, function(e, t, n) {
            var i = n(0),
                r = n(1),
                a = i.Util,
                s = i.createPromiseCapability,
                o = r.CustomStyle,
                c = r.getDefaultSetting,
                l = function() {
                    function e(e) {
                        return !f.test(e)
                    }

                    function t(t, n, i) {
                        var r = document.createElement("div"),
                            s = {
                                style: null,
                                angle: 0,
                                canvasWidth: 0,
                                isWhitespace: !1,
                                originalTransform: null,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                scale: 1
                            };
                        if (t._textDivs.push(r), e(n.str)) return s.isWhitespace = !0, void t._textDivProperties.set(r, s);
                        var o = a.transform(t._viewport.transform, n.transform),
                            l = Math.atan2(o[1], o[0]),
                            h = i[n.fontName];
                        h.vertical && (l += Math.PI / 2);
                        var u = Math.sqrt(o[2] * o[2] + o[3] * o[3]),
                            d = u;
                        h.ascent ? d = h.ascent * d : h.descent && (d = (1 + h.descent) * d);
                        var f, g;
                        if (0 === l ? (f = o[4], g = o[5] - d) : (f = o[4] + d * Math.sin(l), g = o[5] - d * Math.cos(l)), p[1] = f, p[3] = g, p[5] = u, p[7] = h.fontFamily, s.style = p.join(""), r.setAttribute("style", s.style), r.textContent = n.str, c("pdfBug") && (r.dataset.fontName = n.fontName), 0 !== l && (s.angle = l * (180 / Math.PI)), n.str.length > 1 && (h.vertical ? s.canvasWidth = n.height * t._viewport.scale : s.canvasWidth = n.width * t._viewport.scale), t._textDivProperties.set(r, s), t._enhanceTextSelection) {
                            var m = 1,
                                v = 0;
                            0 !== l && (m = Math.cos(l), v = Math.sin(l));
                            var b, w, y = (h.vertical ? n.height : n.width) * t._viewport.scale,
                                A = u;
                            0 !== l ? (b = [m, v, -v, m, f, g], w = a.getAxialAlignedBoundingBox([0, 0, y, A], b)) : w = [f, g, f + y, g + A], t._bounds.push({
                                left: w[0],
                                top: w[1],
                                right: w[2],
                                bottom: w[3],
                                div: r,
                                size: [y, A],
                                m: b
                            })
                        }
                    }

                    function n(e) {
                        if (!e._canceled) {
                            var t = e._container,
                                n = e._textDivs,
                                i = e._capability,
                                r = n.length;
                            if (r > d) return e._renderingDone = !0, void i.resolve();
                            var a = document.createElement("canvas");
                            a.mozOpaque = !0;
                            for (var s, c, l = a.getContext("2d", {
                                    alpha: !1
                                }), h = 0; h < r; h++) {
                                var u = n[h],
                                    f = e._textDivProperties.get(u);
                                if (!f.isWhitespace) {
                                    var p = u.style.fontSize,
                                        g = u.style.fontFamily;
                                    p === s && g === c || (l.font = p + " " + g, s = p, c = g);
                                    var m = l.measureText(u.textContent).width;
                                    t.appendChild(u);
                                    var v = "";
                                    0 !== f.canvasWidth && m > 0 && (f.scale = f.canvasWidth / m, v = "scaleX(" + f.scale + ")"), 0 !== f.angle && (v = "rotate(" + f.angle + "deg) " + v), "" !== v && (f.originalTransform = v, o.setProp("transform", u, v)), e._textDivProperties.set(u, f)
                                }
                            }
                            e._renderingDone = !0, i.resolve()
                        }
                    }

                    function i(e) {
                        for (var t = e._bounds, n = e._viewport, i = r(n.width, n.height, t), s = 0; s < i.length; s++) {
                            var o = t[s].div,
                                c = e._textDivProperties.get(o);
                            if (0 !== c.angle) {
                                var l = i[s],
                                    h = t[s],
                                    u = h.m,
                                    d = u[0],
                                    f = u[1],
                                    p = [
                                        [0, 0],
                                        [0, h.size[1]],
                                        [h.size[0], 0], h.size
                                    ],
                                    g = new Float64Array(64);
                                p.forEach(function(e, t) {
                                    var n = a.applyTransform(e, u);
                                    g[t + 0] = d && (l.left - n[0]) / d, g[t + 4] = f && (l.top - n[1]) / f, g[t + 8] = d && (l.right - n[0]) / d, g[t + 12] = f && (l.bottom - n[1]) / f, g[t + 16] = f && (l.left - n[0]) / -f, g[t + 20] = d && (l.top - n[1]) / d, g[t + 24] = f && (l.right - n[0]) / -f, g[t + 28] = d && (l.bottom - n[1]) / d, g[t + 32] = d && (l.left - n[0]) / -d, g[t + 36] = f && (l.top - n[1]) / -f, g[t + 40] = d && (l.right - n[0]) / -d, g[t + 44] = f && (l.bottom - n[1]) / -f, g[t + 48] = f && (l.left - n[0]) / f, g[t + 52] = d && (l.top - n[1]) / -d, g[t + 56] = f && (l.right - n[0]) / f, g[t + 60] = d && (l.bottom - n[1]) / -d
                                });
                                var m = function(e, t, n) {
                                        for (var i = 0, r = 0; r < n; r++) {
                                            var a = e[t++];
                                            a > 0 && (i = i ? Math.min(a, i) : a)
                                        }
                                        return i
                                    },
                                    v = 1 + Math.min(Math.abs(d), Math.abs(f));
                                c.paddingLeft = m(g, 32, 16) / v, c.paddingTop = m(g, 48, 16) / v, c.paddingRight = m(g, 0, 16) / v, c.paddingBottom = m(g, 16, 16) / v, e._textDivProperties.set(o, c)
                            } else c.paddingLeft = t[s].left - i[s].left, c.paddingTop = t[s].top - i[s].top, c.paddingRight = i[s].right - t[s].right, c.paddingBottom = i[s].bottom - t[s].bottom, e._textDivProperties.set(o, c)
                        }
                    }

                    function r(e, t, n) {
                        var i = n.map(function(e, t) {
                            return {
                                x1: e.left,
                                y1: e.top,
                                x2: e.right,
                                y2: e.bottom,
                                index: t,
                                x1New: void 0,
                                x2New: void 0
                            }
                        });
                        l(e, i);
                        var r = new Array(n.length);
                        return i.forEach(function(e) {
                            var t = e.index;
                            r[t] = {
                                left: e.x1New,
                                top: 0,
                                right: e.x2New,
                                bottom: 0
                            }
                        }), n.map(function(t, n) {
                            var a = r[n],
                                s = i[n];
                            s.x1 = t.top, s.y1 = e - a.right, s.x2 = t.bottom, s.y2 = e - a.left, s.index = n, s.x1New = void 0, s.x2New = void 0
                        }), l(t, i), i.forEach(function(e) {
                            var t = e.index;
                            r[t].top = e.x1New, r[t].bottom = e.x2New
                        }), r
                    }

                    function l(e, t) {
                        t.sort(function(e, t) {
                            return e.x1 - t.x1 || e.index - t.index
                        });
                        var n = {
                                x1: -1 / 0,
                                y1: -1 / 0,
                                x2: 0,
                                y2: 1 / 0,
                                index: -1,
                                x1New: 0,
                                x2New: 0
                            },
                            i = [{
                                start: -1 / 0,
                                end: 1 / 0,
                                boundary: n
                            }];
                        t.forEach(function(e) {
                            for (var t = 0; t < i.length && i[t].end <= e.y1;) t++;
                            for (var n = i.length - 1; n >= 0 && i[n].start >= e.y2;) n--;
                            var r, a, s, o, c = -1 / 0;
                            for (s = t; s <= n; s++) {
                                r = i[s], a = r.boundary;
                                var l;
                                l = a.x2 > e.x1 ? a.index > e.index ? a.x1New : e.x1 : void 0 === a.x2New ? (a.x2 + e.x1) / 2 : a.x2New, l > c && (c = l)
                            }
                            for (e.x1New = c, s = t; s <= n; s++) r = i[s], a = r.boundary, void 0 === a.x2New ? a.x2 > e.x1 ? a.index > e.index && (a.x2New = a.x2) : a.x2New = c : a.x2New > c && (a.x2New = Math.max(c, a.x2));
                            var h = [],
                                u = null;
                            for (s = t; s <= n; s++) {
                                r = i[s], a = r.boundary;
                                var d = a.x2 > e.x2 ? a : e;
                                u === d ? h[h.length - 1].end = r.end : (h.push({
                                    start: r.start,
                                    end: r.end,
                                    boundary: d
                                }), u = d)
                            }
                            for (i[t].start < e.y1 && (h[0].start = e.y1, h.unshift({
                                    start: i[t].start,
                                    end: e.y1,
                                    boundary: i[t].boundary
                                })), e.y2 < i[n].end && (h[h.length - 1].end = e.y2, h.push({
                                    start: e.y2,
                                    end: i[n].end,
                                    boundary: i[n].boundary
                                })), s = t; s <= n; s++)
                                if (r = i[s], a = r.boundary, void 0 === a.x2New) {
                                    var f = !1;
                                    for (o = t - 1; !f && o >= 0 && i[o].start >= a.y1; o--) f = i[o].boundary === a;
                                    for (o = n + 1; !f && o < i.length && i[o].end <= a.y2; o++) f = i[o].boundary === a;
                                    for (o = 0; !f && o < h.length; o++) f = h[o].boundary === a;
                                    f || (a.x2New = c)
                                } Array.prototype.splice.apply(i, [t, n - t + 1].concat(h))
                        }), i.forEach(function(t) {
                            var n = t.boundary;
                            void 0 === n.x2New && (n.x2New = Math.max(e, n.x2))
                        })
                    }

                    function h(e, t, n, i, r) {
                        this._textContent = e, this._container = t, this._viewport = n, this._textDivs = i || [], this._textDivProperties = new WeakMap, this._renderingDone = !1, this._canceled = !1, this._capability = s(), this._renderTimer = null, this._bounds = [], this._enhanceTextSelection = !!r
                    }

                    function u(e) {
                        var t = new h(e.textContent, e.container, e.viewport, e.textDivs, e.enhanceTextSelection);
                        return t._render(e.timeout), t
                    }
                    var d = 1e5,
                        f = /\S/,
                        p = ["left: ", 0, "px; top: ", 0, "px; font-size: ", 0, "px; font-family: ", "", ";"];
                    return h.prototype = {
                        get promise() {
                            return this._capability.promise
                        },
                        cancel: function() {
                            this._canceled = !0, null !== this._renderTimer && (clearTimeout(this._renderTimer), this._renderTimer = null), this._capability.reject("canceled")
                        },
                        _render: function(e) {
                            for (var i = this._textContent.items, r = this._textContent.styles, a = 0, s = i.length; a < s; a++) t(this, i[a], r);
                            if (e) {
                                var o = this;
                                this._renderTimer = setTimeout(function() {
                                    n(o), o._renderTimer = null
                                }, e)
                            } else n(this)
                        },
                        expandTextDivs: function(e) {
                            if (this._enhanceTextSelection && this._renderingDone) {
                                null !== this._bounds && (i(this), this._bounds = null);
                                for (var t = 0, n = this._textDivs.length; t < n; t++) {
                                    var r = this._textDivs[t],
                                        a = this._textDivProperties.get(r);
                                    if (!a.isWhitespace)
                                        if (e) {
                                            var s = "",
                                                c = "";
                                            1 !== a.scale && (s = "scaleX(" + a.scale + ")"), 0 !== a.angle && (s = "rotate(" + a.angle + "deg) " + s), 0 !== a.paddingLeft && (c += " padding-left: " + a.paddingLeft / a.scale + "px;", s += " translateX(" + -a.paddingLeft / a.scale + "px)"), 0 !== a.paddingTop && (c += " padding-top: " + a.paddingTop + "px;", s += " translateY(" + -a.paddingTop + "px)"), 0 !== a.paddingRight && (c += " padding-right: " + a.paddingRight / a.scale + "px;"), 0 !== a.paddingBottom && (c += " padding-bottom: " + a.paddingBottom + "px;"), "" !== c && r.setAttribute("style", a.style + c), "" !== s && o.setProp("transform", r, s)
                                        } else r.style.padding = 0, o.setProp("transform", r, a.originalTransform || "")
                                }
                            }
                        }
                    }, u
                }();
            t.renderTextLayer = l
        }, function(e, t, n) {
            var i;
            i = function() {
                return this
            }();
            try {
                i = i || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (i = window)
            }
            e.exports = i
        }, function(e, t, n) {
            function i(e) {
                return e.replace(/>\\376\\377([^<]+)/g, function(e, t) {
                    for (var n = t.replace(/\\([0-3])([0-7])([0-7])/g, function(e, t, n, i) {
                            return String.fromCharCode(64 * t + 8 * n + 1 * i)
                        }), i = "", r = 0; r < n.length; r += 2) {
                        var a = 256 * n.charCodeAt(r) + n.charCodeAt(r + 1);
                        i += a >= 32 && a < 127 && 60 !== a && 62 !== a && 38 !== a ? String.fromCharCode(a) : "&#x" + (65536 + a).toString(16).substring(1) + ";"
                    }
                    return ">" + i
                })
            }

            function r(e) {
                if ("string" == typeof e) {
                    e = i(e);
                    e = (new DOMParser).parseFromString(e, "application/xml")
                } else e instanceof Document || s("Metadata: Invalid metadata object");
                this.metaDocument = e, this.metadata = Object.create(null), this.parse()
            }
            var a = n(0),
                s = a.error;
            r.prototype = {
                parse: function() {
                    var e = this.metaDocument,
                        t = e.documentElement;
                    if ("rdf:rdf" !== t.nodeName.toLowerCase())
                        for (t = t.firstChild; t && "rdf:rdf" !== t.nodeName.toLowerCase();) t = t.nextSibling;
                    var n = t ? t.nodeName.toLowerCase() : null;
                    if (t && "rdf:rdf" === n && t.hasChildNodes()) {
                        var i, r, a, s, o, c, l, h = t.childNodes;
                        for (s = 0, c = h.length; s < c; s++)
                            if (i = h[s], "rdf:description" === i.nodeName.toLowerCase())
                                for (o = 0, l = i.childNodes.length; o < l; o++) "#text" !== i.childNodes[o].nodeName.toLowerCase() && (r = i.childNodes[o], a = r.nodeName.toLowerCase(), this.metadata[a] = r.textContent.trim())
                    }
                },
                get: function(e) {
                    return this.metadata[e] || null
                },
                has: function(e) {
                    return void 0 !== this.metadata[e]
                }
            }, t.Metadata = r
        }, function(e, t, n) {
            var i = n(0),
                r = n(1),
                a = i.shadow,
                s = r.getDefaultSetting,
                o = function() {
                    function e(e, t, n) {
                        var i = e.createShader(n);
                        if (e.shaderSource(i, t), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
                            var r = e.getShaderInfoLog(i);
                            throw new Error("Error during shader compilation: " + r)
                        }
                        return i
                    }

                    function t(t, n) {
                        return e(t, n, t.VERTEX_SHADER)
                    }

                    function n(t, n) {
                        return e(t, n, t.FRAGMENT_SHADER)
                    }

                    function i(e, t) {
                        for (var n = e.createProgram(), i = 0, r = t.length; i < r; ++i) e.attachShader(n, t[i]);
                        if (e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS)) {
                            var a = e.getProgramInfoLog(n);
                            throw new Error("Error during program linking: " + a)
                        }
                        return n
                    }

                    function r(e, t, n) {
                        e.activeTexture(n);
                        var i = e.createTexture();
                        return e.bindTexture(e.TEXTURE_2D, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t), i
                    }

                    function o() {
                        f || (p = document.createElement("canvas"), f = p.getContext("webgl", {
                            premultipliedalpha: !1
                        }))
                    }

                    function c() {
                        var e, r;
                        o(), e = p, p = null, r = f, f = null;
                        var a = t(r, g),
                            s = n(r, m),
                            c = i(r, [a, s]);
                        r.useProgram(c);
                        var l = {};
                        l.gl = r, l.canvas = e, l.resolutionLocation = r.getUniformLocation(c, "u_resolution"), l.positionLocation = r.getAttribLocation(c, "a_position"), l.backdropLocation = r.getUniformLocation(c, "u_backdrop"), l.subtypeLocation = r.getUniformLocation(c, "u_subtype");
                        var h = r.getAttribLocation(c, "a_texCoord"),
                            u = r.getUniformLocation(c, "u_image"),
                            d = r.getUniformLocation(c, "u_mask"),
                            b = r.createBuffer();
                        r.bindBuffer(r.ARRAY_BUFFER, b), r.bufferData(r.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), r.STATIC_DRAW), r.enableVertexAttribArray(h), r.vertexAttribPointer(h, 2, r.FLOAT, !1, 0, 0), r.uniform1i(u, 0), r.uniform1i(d, 1), v = l
                    }

                    function l(e, t, n) {
                        var i = e.width,
                            a = e.height;
                        v || c();
                        var s = v,
                            o = s.canvas,
                            l = s.gl;
                        o.width = i, o.height = a, l.viewport(0, 0, l.drawingBufferWidth, l.drawingBufferHeight), l.uniform2f(s.resolutionLocation, i, a), n.backdrop ? l.uniform4f(s.resolutionLocation, n.backdrop[0], n.backdrop[1], n.backdrop[2], 1) : l.uniform4f(s.resolutionLocation, 0, 0, 0, 0), l.uniform1i(s.subtypeLocation, "Luminosity" === n.subtype ? 1 : 0);
                        var h = r(l, e, l.TEXTURE0),
                            u = r(l, t, l.TEXTURE1),
                            d = l.createBuffer();
                        return l.bindBuffer(l.ARRAY_BUFFER, d), l.bufferData(l.ARRAY_BUFFER, new Float32Array([0, 0, i, 0, 0, a, 0, a, i, 0, i, a]), l.STATIC_DRAW), l.enableVertexAttribArray(s.positionLocation), l.vertexAttribPointer(s.positionLocation, 2, l.FLOAT, !1, 0, 0), l.clearColor(0, 0, 0, 0), l.enable(l.BLEND), l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA), l.clear(l.COLOR_BUFFER_BIT), l.drawArrays(l.TRIANGLES, 0, 6), l.flush(), l.deleteTexture(h), l.deleteTexture(u), l.deleteBuffer(d), o
                    }

                    function h() {
                        var e, r;
                        o(), e = p, p = null, r = f, f = null;
                        var a = t(r, b),
                            s = n(r, w),
                            c = i(r, [a, s]);
                        r.useProgram(c);
                        var l = {};
                        l.gl = r, l.canvas = e, l.resolutionLocation = r.getUniformLocation(c, "u_resolution"), l.scaleLocation = r.getUniformLocation(c, "u_scale"), l.offsetLocation = r.getUniformLocation(c, "u_offset"), l.positionLocation = r.getAttribLocation(c, "a_position"), l.colorLocation = r.getAttribLocation(c, "a_color"), y = l
                    }

                    function u(e, t, n, i, r) {
                        y || h();
                        var a = y,
                            s = a.canvas,
                            o = a.gl;
                        s.width = e, s.height = t, o.viewport(0, 0, o.drawingBufferWidth, o.drawingBufferHeight), o.uniform2f(a.resolutionLocation, e, t);
                        var c, l, u, d = 0;
                        for (c = 0, l = i.length; c < l; c++) switch (i[c].type) {
                            case "lattice":
                                u = i[c].coords.length / i[c].verticesPerRow | 0, d += (u - 1) * (i[c].verticesPerRow - 1) * 6;
                                break;
                            case "triangles":
                                d += i[c].coords.length
                        }
                        var f = new Float32Array(2 * d),
                            p = new Uint8Array(3 * d),
                            g = r.coords,
                            m = r.colors,
                            v = 0,
                            b = 0;
                        for (c = 0, l = i.length; c < l; c++) {
                            var w = i[c],
                                A = w.coords,
                                S = w.colors;
                            switch (w.type) {
                                case "lattice":
                                    var P = w.verticesPerRow;
                                    u = A.length / P | 0;
                                    for (var x = 1; x < u; x++)
                                        for (var C = x * P + 1, _ = 1; _ < P; _++, C++) f[v] = g[A[C - P - 1]], f[v + 1] = g[A[C - P - 1] + 1], f[v + 2] = g[A[C - P]], f[v + 3] = g[A[C - P] + 1], f[v + 4] = g[A[C - 1]], f[v + 5] = g[A[C - 1] + 1], p[b] = m[S[C - P - 1]], p[b + 1] = m[S[C - P - 1] + 1], p[b + 2] = m[S[C - P - 1] + 2], p[b + 3] = m[S[C - P]], p[b + 4] = m[S[C - P] + 1], p[b + 5] = m[S[C - P] + 2], p[b + 6] = m[S[C - 1]], p[b + 7] = m[S[C - 1] + 1], p[b + 8] = m[S[C - 1] + 2], f[v + 6] = f[v + 2], f[v + 7] = f[v + 3], f[v + 8] = f[v + 4], f[v + 9] = f[v + 5], f[v + 10] = g[A[C]], f[v + 11] = g[A[C] + 1], p[b + 9] = p[b + 3], p[b + 10] = p[b + 4], p[b + 11] = p[b + 5], p[b + 12] = p[b + 6], p[b + 13] = p[b + 7], p[b + 14] = p[b + 8], p[b + 15] = m[S[C]], p[b + 16] = m[S[C] + 1], p[b + 17] = m[S[C] + 2], v += 12, b += 18;
                                    break;
                                case "triangles":
                                    for (var L = 0, k = A.length; L < k; L++) f[v] = g[A[L]], f[v + 1] = g[A[L] + 1], p[b] = m[S[L]], p[b + 1] = m[S[L] + 1], p[b + 2] = m[S[L] + 2], v += 2, b += 3
                            }
                        }
                        n ? o.clearColor(n[0] / 255, n[1] / 255, n[2] / 255, 1) : o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT);
                        var T = o.createBuffer();
                        o.bindBuffer(o.ARRAY_BUFFER, T), o.bufferData(o.ARRAY_BUFFER, f, o.STATIC_DRAW), o.enableVertexAttribArray(a.positionLocation), o.vertexAttribPointer(a.positionLocation, 2, o.FLOAT, !1, 0, 0);
                        var E = o.createBuffer();
                        return o.bindBuffer(o.ARRAY_BUFFER, E), o.bufferData(o.ARRAY_BUFFER, p, o.STATIC_DRAW), o.enableVertexAttribArray(a.colorLocation), o.vertexAttribPointer(a.colorLocation, 3, o.UNSIGNED_BYTE, !1, 0, 0), o.uniform2f(a.scaleLocation, r.scaleX, r.scaleY), o.uniform2f(a.offsetLocation, r.offsetX, r.offsetY), o.drawArrays(o.TRIANGLES, 0, d), o.flush(), o.deleteBuffer(T), o.deleteBuffer(E), s
                    }

                    function d() {
                        v && v.canvas && (v.canvas.width = 0, v.canvas.height = 0), y && y.canvas && (y.canvas.width = 0, y.canvas.height = 0), v = null, y = null
                    }
                    var f, p, g = "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",
                        m = "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",
                        v = null,
                        b = "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",
                        w = "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",
                        y = null;
                    return {
                        get isEnabled() {
                            if (s("disableWebGL")) return !1;
                            var e = !1;
                            try {
                                o(), e = !!f
                            } catch (e) {}
                            return a(this, "isEnabled", e)
                        },
                        composeSMask: l,
                        drawFigures: u,
                        clear: d
                    }
                }();
            t.WebGLUtils = o
        }, function(e, t, n) {
            var i = n(0),
                r = n(1),
                a = n(3),
                s = n(2),
                o = n(5),
                c = n(7),
                l = n(4),
                h = i.globalScope,
                u = i.deprecated,
                d = i.warn,
                f = r.LinkTarget,
                p = r.DEFAULT_LINK_REL,
                g = "undefined" == typeof window;
            h.PDFJS || (h.PDFJS = {});
            var m = h.PDFJS;
            m.version = "1.8.188", m.build = "ad1023f", m.pdfBug = !1, void 0 !== m.verbosity && i.setVerbosityLevel(m.verbosity), delete m.verbosity, Object.defineProperty(m, "verbosity", {
                get: function() {
                    return i.getVerbosityLevel()
                },
                set: function(e) {
                    i.setVerbosityLevel(e)
                },
                enumerable: !0,
                configurable: !0
            }), m.VERBOSITY_LEVELS = i.VERBOSITY_LEVELS, m.OPS = i.OPS, m.UNSUPPORTED_FEATURES = i.UNSUPPORTED_FEATURES, m.isValidUrl = r.isValidUrl, m.shadow = i.shadow, m.createBlob = i.createBlob, m.createObjectURL = function(e, t) {
                return i.createObjectURL(e, t, m.disableCreateObjectURL)
            }, Object.defineProperty(m, "isLittleEndian", {
                configurable: !0,
                get: function() {
                    var e = i.isLittleEndian();
                    return i.shadow(m, "isLittleEndian", e)
                }
            }), m.removeNullCharacters = i.removeNullCharacters, m.PasswordResponses = i.PasswordResponses, m.PasswordException = i.PasswordException, m.UnknownErrorException = i.UnknownErrorException, m.InvalidPDFException = i.InvalidPDFException, m.MissingPDFException = i.MissingPDFException, m.UnexpectedResponseException = i.UnexpectedResponseException, m.Util = i.Util, m.PageViewport = i.PageViewport, m.createPromiseCapability = i.createPromiseCapability, m.maxImageSize = void 0 === m.maxImageSize ? -1 : m.maxImageSize, m.cMapUrl = void 0 === m.cMapUrl ? null : m.cMapUrl, m.cMapPacked = void 0 !== m.cMapPacked && m.cMapPacked, m.disableFontFace = void 0 !== m.disableFontFace && m.disableFontFace, m.imageResourcesPath = void 0 === m.imageResourcesPath ? "" : m.imageResourcesPath, m.disableWorker = void 0 !== m.disableWorker && m.disableWorker, m.workerSrc = void 0 === m.workerSrc ? null : m.workerSrc, m.workerPort = void 0 === m.workerPort ? null : m.workerPort, m.disableRange = void 0 !== m.disableRange && m.disableRange, m.disableStream = void 0 !== m.disableStream && m.disableStream, m.disableAutoFetch = void 0 !== m.disableAutoFetch && m.disableAutoFetch, m.pdfBug = void 0 !== m.pdfBug && m.pdfBug, m.postMessageTransfers = void 0 === m.postMessageTransfers || m.postMessageTransfers, m.disableCreateObjectURL = void 0 !== m.disableCreateObjectURL && m.disableCreateObjectURL, m.disableWebGL = void 0 === m.disableWebGL || m.disableWebGL, m.externalLinkTarget = void 0 === m.externalLinkTarget ? f.NONE : m.externalLinkTarget, m.externalLinkRel = void 0 === m.externalLinkRel ? p : m.externalLinkRel, m.isEvalSupported = void 0 === m.isEvalSupported || m.isEvalSupported, m.pdfjsNext = void 0 !== m.pdfjsNext && m.pdfjsNext;
            var v = m.openExternalLinksInNewWindow;
            delete m.openExternalLinksInNewWindow, Object.defineProperty(m, "openExternalLinksInNewWindow", {
                get: function() {
                    return m.externalLinkTarget === f.BLANK
                },
                set: function(e) {
                    if (e && u('PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.'), m.externalLinkTarget !== f.NONE) return void d("PDFJS.externalLinkTarget is already initialized");
                    m.externalLinkTarget = e ? f.BLANK : f.NONE
                },
                enumerable: !0,
                configurable: !0
            }), v && (m.openExternalLinksInNewWindow = v), m.getDocument = a.getDocument, m.PDFDataRangeTransport = a.PDFDataRangeTransport, m.PDFWorker = a.PDFWorker, Object.defineProperty(m, "hasCanvasTypedArrays", {
                configurable: !0,
                get: function() {
                    var e = r.hasCanvasTypedArrays();
                    return i.shadow(m, "hasCanvasTypedArrays", e)
                }
            }), m.CustomStyle = r.CustomStyle, m.LinkTarget = f, m.addLinkAttributes = r.addLinkAttributes, m.getFilenameFromUrl = r.getFilenameFromUrl, m.isExternalLinkTargetSet = r.isExternalLinkTargetSet, m.AnnotationLayer = s.AnnotationLayer, m.renderTextLayer = o.renderTextLayer, m.Metadata = c.Metadata, m.SVGGraphics = l.SVGGraphics, m.UnsupportedManager = a._UnsupportedManager, t.globalScope = h, t.isWorker = g, t.PDFJS = h.PDFJS
        }, function(e, t, n) {
            function i(e) {
                e.mozCurrentTransform || (e._originalSave = e.save, e._originalRestore = e.restore, e._originalRotate = e.rotate, e._originalScale = e.scale, e._originalTranslate = e.translate, e._originalTransform = e.transform, e._originalSetTransform = e.setTransform, e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0], e._transformStack = [], Object.defineProperty(e, "mozCurrentTransform", {
                    get: function() {
                        return this._transformMatrix
                    }
                }), Object.defineProperty(e, "mozCurrentTransformInverse", {
                    get: function() {
                        var e = this._transformMatrix,
                            t = e[0],
                            n = e[1],
                            i = e[2],
                            r = e[3],
                            a = e[4],
                            s = e[5],
                            o = t * r - n * i,
                            c = n * i - t * r;
                        return [r / o, n / c, i / c, t / o, (r * a - i * s) / c, (n * a - t * s) / o]
                    }
                }), e.save = function() {
                    var e = this._transformMatrix;
                    this._transformStack.push(e), this._transformMatrix = e.slice(0, 6), this._originalSave()
                }, e.restore = function() {
                    var e = this._transformStack.pop();
                    e && (this._transformMatrix = e, this._originalRestore())
                }, e.translate = function(e, t) {
                    var n = this._transformMatrix;
                    n[4] = n[0] * e + n[2] * t + n[4], n[5] = n[1] * e + n[3] * t + n[5], this._originalTranslate(e, t)
                }, e.scale = function(e, t) {
                    var n = this._transformMatrix;
                    n[0] = n[0] * e, n[1] = n[1] * e, n[2] = n[2] * t, n[3] = n[3] * t, this._originalScale(e, t)
                }, e.transform = function(t, n, i, r, a, s) {
                    var o = this._transformMatrix;
                    this._transformMatrix = [o[0] * t + o[2] * n, o[1] * t + o[3] * n, o[0] * i + o[2] * r, o[1] * i + o[3] * r, o[0] * a + o[2] * s + o[4], o[1] * a + o[3] * s + o[5]], e._originalTransform(t, n, i, r, a, s)
                }, e.setTransform = function(t, n, i, r, a, s) {
                    this._transformMatrix = [t, n, i, r, a, s], e._originalSetTransform(t, n, i, r, a, s)
                }, e.rotate = function(e) {
                    var t = Math.cos(e),
                        n = Math.sin(e),
                        i = this._transformMatrix;
                    this._transformMatrix = [i[0] * t + i[2] * n, i[1] * t + i[3] * n, i[0] * -n + i[2] * t, i[1] * -n + i[3] * t, i[4], i[5]], this._originalRotate(e)
                })
            }

            function r(e) {
                var t, n, i, r, a = e.width,
                    s = e.height,
                    o = a + 1,
                    c = new Uint8Array(o * (s + 1)),
                    l = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
                    h = a + 7 & -8,
                    u = e.data,
                    d = new Uint8Array(h * s),
                    f = 0;
                for (t = 0, r = u.length; t < r; t++)
                    for (var p = 128, g = u[t]; p > 0;) d[f++] = g & p ? 0 : 255, p >>= 1;
                var m = 0;
                for (f = 0, 0 !== d[f] && (c[0] = 1, ++m), n = 1; n < a; n++) d[f] !== d[f + 1] && (c[n] = d[f] ? 2 : 1, ++m), f++;
                for (0 !== d[f] && (c[n] = 2, ++m), t = 1; t < s; t++) {
                    f = t * h, i = t * o, d[f - h] !== d[f] && (c[i] = d[f] ? 1 : 8, ++m);
                    var v = (d[f] ? 4 : 0) + (d[f - h] ? 8 : 0);
                    for (n = 1; n < a; n++) v = (v >> 2) + (d[f + 1] ? 4 : 0) + (d[f - h + 1] ? 8 : 0), l[v] && (c[i + n] = l[v], ++m), f++;
                    if (d[f - h] !== d[f] && (c[i + n] = d[f] ? 2 : 4, ++m), m > 1e3) return null
                }
                for (f = h * (s - 1), i = t * o, 0 !== d[f] && (c[i] = 8, ++m), n = 1; n < a; n++) d[f] !== d[f + 1] && (c[i + n] = d[f] ? 4 : 8, ++m), f++;
                if (0 !== d[f] && (c[i + n] = 4, ++m), m > 1e3) return null;
                var b = new Int32Array([0, o, -1, 0, -o, 0, 0, 0, 1]),
                    w = [];
                for (t = 0; m && t <= s; t++) {
                    for (var y = t * o, A = y + a; y < A && !c[y];) y++;
                    if (y !== A) {
                        var S, P = [y % o, t],
                            x = c[y],
                            C = y;
                        do {
                            var _ = b[x];
                            do {
                                y += _
                            } while (!c[y]);
                            S = c[y], 5 !== S && 10 !== S ? (x = S, c[y] = 0) : (x = S & 51 * x >> 4, c[y] &= x >> 2 | x << 2), P.push(y % o), P.push(y / o | 0), --m
                        } while (C !== y);
                        w.push(P), --t
                    }
                }
                return function(e) {
                    e.save(), e.scale(1 / a, -1 / s), e.translate(0, -s), e.beginPath();
                    for (var t = 0, n = w.length; t < n; t++) {
                        var i = w[t];
                        e.moveTo(i[0], i[1]);
                        for (var r = 2, o = i.length; r < o; r += 2) e.lineTo(i[r], i[r + 1])
                    }
                    e.fill(), e.beginPath(), e.restore()
                }
            }
            var a = n(0),
                s = n(1),
                o = n(12),
                c = n(8),
                l = a.FONT_IDENTITY_MATRIX,
                h = a.IDENTITY_MATRIX,
                u = a.ImageKind,
                d = a.OPS,
                f = a.TextRenderingMode,
                p = a.Uint32ArrayView,
                g = a.Util,
                m = a.assert,
                v = a.info,
                b = a.isNum,
                w = a.isArray,
                y = a.isLittleEndian,
                A = a.error,
                S = a.shadow,
                P = a.warn,
                x = o.TilingPattern,
                C = o.getShadingPatternFromIR,
                _ = c.WebGLUtils,
                L = s.hasCanvasTypedArrays,
                k = 16,
                T = {
                    get value() {
                        return S(T, "value", L())
                    }
                },
                E = {
                    get value() {
                        return S(E, "value", y())
                    }
                },
                I = function() {
                    function e(e) {
                        this.canvasFactory = e, this.cache = Object.create(null)
                    }
                    return e.prototype = {
                        getCanvas: function(e, t, n, r) {
                            var a;
                            return void 0 !== this.cache[e] ? (a = this.cache[e], this.canvasFactory.reset(a, t, n), a.context.setTransform(1, 0, 0, 1, 0, 0)) : (a = this.canvasFactory.create(t, n), this.cache[e] = a), r && i(a.context), a
                        },
                        clear: function() {
                            for (var e in this.cache) {
                                var t = this.cache[e];
                                this.canvasFactory.destroy(t), delete this.cache[e]
                            }
                        }
                    }, e
                }(),
                F = function() {
                    function e(e) {
                        this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = h, this.textMatrixScale = 1, this.fontMatrix = l, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = f.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.resumeSMaskCtx = null, this.old = e
                    }
                    return e.prototype = {
                        clone: function() {
                            return Object.create(this)
                        },
                        setCurrentPoint: function(e, t) {
                            this.x = e, this.y = t
                        }
                    }, e
                }(),
                R = function() {
                    function e(e, t, n, r, a) {
                        this.ctx = e, this.current = new F, this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = t, this.objs = n, this.canvasFactory = r, this.imageLayer = a, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.cachedCanvases = new I(this.canvasFactory), e && i(e), this.cachedGetSinglePixelWidth = null
                    }

                    function t(e, t) {
                        if ("undefined" != typeof ImageData && t instanceof ImageData) return void e.putImageData(t, 0, 0);
                        var n, i, r, a, s, o = t.height,
                            c = t.width,
                            l = o % k,
                            h = (o - l) / k,
                            d = 0 === l ? h : h + 1,
                            f = e.createImageData(c, k),
                            g = 0,
                            m = t.data,
                            v = f.data;
                        if (t.kind === u.GRAYSCALE_1BPP) {
                            var b = m.byteLength,
                                w = T.value ? new Uint32Array(v.buffer) : new p(v),
                                y = w.length,
                                S = c + 7 >> 3,
                                P = 4294967295,
                                x = E.value || !T.value ? 4278190080 : 255;
                            for (i = 0; i < d; i++) {
                                for (a = i < h ? k : l, n = 0, r = 0; r < a; r++) {
                                    for (var C = b - g, _ = 0, L = C > S ? c : 8 * C - 7, I = -8 & L, F = 0, R = 0; _ < I; _ += 8) R = m[g++], w[n++] = 128 & R ? P : x, w[n++] = 64 & R ? P : x, w[n++] = 32 & R ? P : x, w[n++] = 16 & R ? P : x, w[n++] = 8 & R ? P : x, w[n++] = 4 & R ? P : x, w[n++] = 2 & R ? P : x, w[n++] = 1 & R ? P : x;
                                    for (; _ < L; _++) 0 === F && (R = m[g++], F = 128), w[n++] = R & F ? P : x, F >>= 1
                                }
                                for (; n < y;) w[n++] = 0;
                                e.putImageData(f, 0, i * k)
                            }
                        } else if (t.kind === u.RGBA_32BPP) {
                            for (r = 0, s = c * k * 4, i = 0; i < h; i++) v.set(m.subarray(g, g + s)), g += s, e.putImageData(f, 0, r), r += k;
                            i < d && (s = c * l * 4, v.set(m.subarray(g, g + s)), e.putImageData(f, 0, r))
                        } else if (t.kind === u.RGB_24BPP)
                            for (a = k, s = c * a, i = 0; i < d; i++) {
                                for (i >= h && (a = l, s = c * a), n = 0, r = s; r--;) v[n++] = m[g++], v[n++] = m[g++], v[n++] = m[g++], v[n++] = 255;
                                e.putImageData(f, 0, i * k)
                            } else A("bad image kind: " + t.kind)
                    }

                    function n(e, t) {
                        for (var n = t.height, i = t.width, r = n % k, a = (n - r) / k, s = 0 === r ? a : a + 1, o = e.createImageData(i, k), c = 0, l = t.data, h = o.data, u = 0; u < s; u++) {
                            for (var d = u < a ? k : r, f = 3, p = 0; p < d; p++)
                                for (var g = 0, m = 0; m < i; m++) {
                                    if (!g) {
                                        var v = l[c++];
                                        g = 128
                                    }
                                    h[f] = v & g ? 0 : 255, f += 4, g >>= 1
                                }
                            e.putImageData(o, 0, u * k)
                        }
                    }

                    function a(e, t) {
                        for (var n = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"], i = 0, r = n.length; i < r; i++) {
                            var a = n[i];
                            void 0 !== e[a] && (t[a] = e[a])
                        }
                        void 0 !== e.setLineDash && (t.setLineDash(e.getLineDash()), t.lineDashOffset = e.lineDashOffset)
                    }

                    function s(e, t, n, i) {
                        for (var r = e.length, a = 3; a < r; a += 4) {
                            var s = e[a];
                            if (0 === s) e[a - 3] = t, e[a - 2] = n, e[a - 1] = i;
                            else if (s < 255) {
                                var o = 255 - s;
                                e[a - 3] = e[a - 3] * s + t * o >> 8, e[a - 2] = e[a - 2] * s + n * o >> 8, e[a - 1] = e[a - 1] * s + i * o >> 8
                            }
                        }
                    }

                    function o(e, t, n) {
                        for (var i = e.length, r = 3; r < i; r += 4) {
                            var a = n ? n[e[r]] : e[r];
                            t[r] = t[r] * a * (1 / 255) | 0
                        }
                    }

                    function c(e, t, n) {
                        for (var i = e.length, r = 3; r < i; r += 4) {
                            var a = 77 * e[r - 3] + 152 * e[r - 2] + 28 * e[r - 1];
                            t[r] = n ? t[r] * n[a >> 8] >> 8 : t[r] * a >> 16
                        }
                    }

                    function y(e, t, n, i, r, a, l) {
                        var h, u = !!a,
                            d = u ? a[0] : 0,
                            f = u ? a[1] : 0,
                            p = u ? a[2] : 0;
                        h = "Luminosity" === r ? c : o;
                        for (var g = Math.min(i, Math.ceil(1048576 / n)), m = 0; m < i; m += g) {
                            var v = Math.min(g, i - m),
                                b = e.getImageData(0, m, n, v),
                                w = t.getImageData(0, m, n, v);
                            u && s(b.data, d, f, p), h(b.data, w.data, l), e.putImageData(w, 0, m)
                        }
                    }

                    function L(e, t, n) {
                        var i = t.canvas,
                            r = t.context;
                        e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
                        var a = t.backdrop || null;
                        if (!t.transferMap && _.isEnabled) {
                            var s = _.composeSMask(n.canvas, i, {
                                subtype: t.subtype,
                                backdrop: a
                            });
                            return e.setTransform(1, 0, 0, 1, 0, 0), void e.drawImage(s, t.offsetX, t.offsetY)
                        }
                        y(r, n, i.width, i.height, t.subtype, a, t.transferMap), e.drawImage(i, 0, 0)
                    }
                    var R = ["butt", "round", "square"],
                        N = ["miter", "round", "bevel"],
                        D = {},
                        O = {};
                    e.prototype = {
                        beginDrawing: function(e, t, n) {
                            var i = this.ctx.canvas.width,
                                r = this.ctx.canvas.height;
                            if (this.ctx.save(), this.ctx.fillStyle = "rgb(255, 255, 255)", this.ctx.fillRect(0, 0, i, r), this.ctx.restore(), n) {
                                var a = this.cachedCanvases.getCanvas("transparent", i, r, !0);
                                this.compositeCtx = this.ctx, this.transparentCanvas = a.canvas, this.ctx = a.context, this.ctx.save(), this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform)
                            }
                            this.ctx.save(), e && this.ctx.transform.apply(this.ctx, e), this.ctx.transform.apply(this.ctx, t.transform), this.baseTransform = this.ctx.mozCurrentTransform.slice(), this.imageLayer && this.imageLayer.beginLayout()
                        },
                        executeOperatorList: function(e, t, n, i) {
                            var r = e.argsArray,
                                a = e.fnArray,
                                s = t || 0,
                                o = r.length;
                            if (o === s) return s;
                            for (var c, l = o - s > 10 && "function" == typeof n, h = l ? Date.now() + 15 : 0, u = 0, f = this.commonObjs, p = this.objs;;) {
                                if (void 0 !== i && s === i.nextBreakPoint) return i.breakIt(s, n), s;
                                if ((c = a[s]) !== d.dependency) this[c].apply(this, r[s]);
                                else
                                    for (var g = r[s], m = 0, v = g.length; m < v; m++) {
                                        var b = g[m],
                                            w = "g" === b[0] && "_" === b[1],
                                            y = w ? f : p;
                                        if (!y.isResolved(b)) return y.get(b, n), s
                                    }
                                if (++s === o) return s;
                                if (l && ++u > 10) {
                                    if (Date.now() > h) return n(), s;
                                    u = 0
                                }
                            }
                        },
                        endDrawing: function() {
                            null !== this.current.activeSMask && this.endSMaskGroup(), this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null), this.cachedCanvases.clear(), _.clear(), this.imageLayer && this.imageLayer.endLayout()
                        },
                        setLineWidth: function(e) {
                            this.current.lineWidth = e, this.ctx.lineWidth = e
                        },
                        setLineCap: function(e) {
                            this.ctx.lineCap = R[e]
                        },
                        setLineJoin: function(e) {
                            this.ctx.lineJoin = N[e]
                        },
                        setMiterLimit: function(e) {
                            this.ctx.miterLimit = e
                        },
                        setDash: function(e, t) {
                            var n = this.ctx;
                            void 0 !== n.setLineDash && (n.setLineDash(e), n.lineDashOffset = t)
                        },
                        setRenderingIntent: function(e) {},
                        setFlatness: function(e) {},
                        setGState: function(e) {
                            for (var t = 0, n = e.length; t < n; t++) {
                                var i = e[t],
                                    r = i[0],
                                    a = i[1];
                                switch (r) {
                                    case "LW":
                                        this.setLineWidth(a);
                                        break;
                                    case "LC":
                                        this.setLineCap(a);
                                        break;
                                    case "LJ":
                                        this.setLineJoin(a);
                                        break;
                                    case "ML":
                                        this.setMiterLimit(a);
                                        break;
                                    case "D":
                                        this.setDash(a[0], a[1]);
                                        break;
                                    case "RI":
                                        this.setRenderingIntent(a);
                                        break;
                                    case "FL":
                                        this.setFlatness(a);
                                        break;
                                    case "Font":
                                        this.setFont(a[0], a[1]);
                                        break;
                                    case "CA":
                                        this.current.strokeAlpha = i[1];
                                        break;
                                    case "ca":
                                        this.current.fillAlpha = i[1], this.ctx.globalAlpha = i[1];
                                        break;
                                    case "BM":
                                        this.ctx.globalCompositeOperation = a;
                                        break;
                                    case "SMask":
                                        this.current.activeSMask && (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask ? this.suspendSMaskGroup() : this.endSMaskGroup()), this.current.activeSMask = a ? this.tempSMask : null, this.current.activeSMask && this.beginSMaskGroup(), this.tempSMask = null
                                }
                            }
                        },
                        beginSMaskGroup: function() {
                            var e = this.current.activeSMask,
                                t = e.canvas.width,
                                n = e.canvas.height,
                                i = "smaskGroupAt" + this.groupLevel,
                                r = this.cachedCanvases.getCanvas(i, t, n, !0),
                                s = this.ctx,
                                o = s.mozCurrentTransform;
                            this.ctx.save();
                            var c = r.context;
                            c.scale(1 / e.scaleX, 1 / e.scaleY), c.translate(-e.offsetX, -e.offsetY), c.transform.apply(c, o), e.startTransformInverse = c.mozCurrentTransformInverse, a(s, c), this.ctx = c, this.setGState([
                                ["BM", "source-over"],
                                ["ca", 1],
                                ["CA", 1]
                            ]), this.groupStack.push(s), this.groupLevel++
                        },
                        suspendSMaskGroup: function() {
                            var e = this.ctx;
                            this.groupLevel--, this.ctx = this.groupStack.pop(), L(this.ctx, this.current.activeSMask, e), this.ctx.restore(), this.ctx.save(), a(e, this.ctx), this.current.resumeSMaskCtx = e;
                            var t = g.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
                            this.ctx.transform.apply(this.ctx, t), e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.restore()
                        },
                        resumeSMaskGroup: function() {
                            var e = this.current.resumeSMaskCtx,
                                t = this.ctx;
                            this.ctx = e, this.groupStack.push(t), this.groupLevel++
                        },
                        endSMaskGroup: function() {
                            var e = this.ctx;
                            this.groupLevel--, this.ctx = this.groupStack.pop(), L(this.ctx, this.current.activeSMask, e), this.ctx.restore(), a(e, this.ctx);
                            var t = g.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
                            this.ctx.transform.apply(this.ctx, t)
                        },
                        save: function() {
                            this.ctx.save();
                            var e = this.current;
                            this.stateStack.push(e), this.current = e.clone(), this.current.resumeSMaskCtx = null
                        },
                        restore: function() {
                            this.current.resumeSMaskCtx && this.resumeSMaskGroup(), null === this.current.activeSMask || 0 !== this.stateStack.length && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask || this.endSMaskGroup(), 0 !== this.stateStack.length && (this.current = this.stateStack.pop(), this.ctx.restore(), this.pendingClip = null, this.cachedGetSinglePixelWidth = null)
                        },
                        transform: function(e, t, n, i, r, a) {
                            this.ctx.transform(e, t, n, i, r, a), this.cachedGetSinglePixelWidth = null
                        },
                        constructPath: function(e, t) {
                            for (var n = this.ctx, i = this.current, r = i.x, a = i.y, s = 0, o = 0, c = e.length; s < c; s++) switch (0 | e[s]) {
                                case d.rectangle:
                                    r = t[o++], a = t[o++];
                                    var l = t[o++],
                                        h = t[o++];
                                    0 === l && (l = this.getSinglePixelWidth()), 0 === h && (h = this.getSinglePixelWidth());
                                    var u = r + l,
                                        f = a + h;
                                    this.ctx.moveTo(r, a), this.ctx.lineTo(u, a), this.ctx.lineTo(u, f), this.ctx.lineTo(r, f), this.ctx.lineTo(r, a), this.ctx.closePath();
                                    break;
                                case d.moveTo:
                                    r = t[o++], a = t[o++], n.moveTo(r, a);
                                    break;
                                case d.lineTo:
                                    r = t[o++], a = t[o++], n.lineTo(r, a);
                                    break;
                                case d.curveTo:
                                    r = t[o + 4], a = t[o + 5], n.bezierCurveTo(t[o], t[o + 1], t[o + 2], t[o + 3], r, a), o += 6;
                                    break;
                                case d.curveTo2:
                                    n.bezierCurveTo(r, a, t[o], t[o + 1], t[o + 2], t[o + 3]), r = t[o + 2], a = t[o + 3], o += 4;
                                    break;
                                case d.curveTo3:
                                    r = t[o + 2], a = t[o + 3], n.bezierCurveTo(t[o], t[o + 1], r, a, r, a), o += 4;
                                    break;
                                case d.closePath:
                                    n.closePath()
                            }
                            i.setCurrentPoint(r, a)
                        },
                        closePath: function() {
                            this.ctx.closePath()
                        },
                        stroke: function(e) {
                            e = void 0 === e || e;
                            var t = this.ctx,
                                n = this.current.strokeColor;
                            t.lineWidth = Math.max(.65 * this.getSinglePixelWidth(), this.current.lineWidth), t.globalAlpha = this.current.strokeAlpha, n && n.hasOwnProperty("type") && "Pattern" === n.type ? (t.save(), t.strokeStyle = n.getPattern(t, this), t.stroke(), t.restore()) : t.stroke(), e && this.consumePath(), t.globalAlpha = this.current.fillAlpha
                        },
                        closeStroke: function() {
                            this.closePath(), this.stroke()
                        },
                        fill: function(e) {
                            e = void 0 === e || e;
                            var t = this.ctx,
                                n = this.current.fillColor,
                                i = this.current.patternFill,
                                r = !1;
                            i && (t.save(), this.baseTransform && t.setTransform.apply(t, this.baseTransform), t.fillStyle = n.getPattern(t, this), r = !0), this.pendingEOFill ? (t.fill("evenodd"), this.pendingEOFill = !1) : t.fill(), r && t.restore(), e && this.consumePath()
                        },
                        eoFill: function() {
                            this.pendingEOFill = !0, this.fill()
                        },
                        fillStroke: function() {
                            this.fill(!1), this.stroke(!1), this.consumePath()
                        },
                        eoFillStroke: function() {
                            this.pendingEOFill = !0, this.fillStroke()
                        },
                        closeFillStroke: function() {
                            this.closePath(), this.fillStroke()
                        },
                        closeEOFillStroke: function() {
                            this.pendingEOFill = !0, this.closePath(), this.fillStroke()
                        },
                        endPath: function() {
                            this.consumePath()
                        },
                        clip: function() {
                            this.pendingClip = D
                        },
                        eoClip: function() {
                            this.pendingClip = O
                        },
                        beginText: function() {
                            this.current.textMatrix = h, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                        },
                        endText: function() {
                            var e = this.pendingTextPaths,
                                t = this.ctx;
                            if (void 0 === e) return void t.beginPath();
                            t.save(), t.beginPath();
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                t.setTransform.apply(t, i.transform), t.translate(i.x, i.y), i.addToPath(t, i.fontSize)
                            }
                            t.restore(), t.clip(), t.beginPath(), delete this.pendingTextPaths
                        },
                        setCharSpacing: function(e) {
                            this.current.charSpacing = e
                        },
                        setWordSpacing: function(e) {
                            this.current.wordSpacing = e
                        },
                        setHScale: function(e) {
                            this.current.textHScale = e / 100
                        },
                        setLeading: function(e) {
                            this.current.leading = -e
                        },
                        setFont: function(e, t) {
                            var n = this.commonObjs.get(e),
                                i = this.current;
                            if (n || A("Can't find font for " + e), i.fontMatrix = n.fontMatrix ? n.fontMatrix : l, 0 !== i.fontMatrix[0] && 0 !== i.fontMatrix[3] || P("Invalid font matrix for font " + e), t < 0 ? (t = -t, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = n, this.current.fontSize = t, !n.isType3Font) {
                                var r = n.loadedName || "sans-serif",
                                    a = n.black ? "900" : n.bold ? "bold" : "normal",
                                    s = n.italic ? "italic" : "normal",
                                    o = '"' + r + '", ' + n.fallbackName,
                                    c = t < 16 ? 16 : t > 100 ? 100 : t;
                                this.current.fontSizeScale = t / c;
                                var h = s + " " + a + " " + c + "px " + o;
                                this.ctx.font = h
                            }
                        },
                        setTextRenderingMode: function(e) {
                            this.current.textRenderingMode = e
                        },
                        setTextRise: function(e) {
                            this.current.textRise = e
                        },
                        moveText: function(e, t) {
                            this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += t
                        },
                        setLeadingMoveText: function(e, t) {
                            this.setLeading(-t), this.moveText(e, t)
                        },
                        setTextMatrix: function(e, t, n, i, r, a) {
                            this.current.textMatrix = [e, t, n, i, r, a], this.current.textMatrixScale = Math.sqrt(e * e + t * t), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                        },
                        nextLine: function() {
                            this.moveText(0, this.current.leading)
                        },
                        paintChar: function(e, t, n) {
                            var i, r = this.ctx,
                                a = this.current,
                                s = a.font,
                                o = a.textRenderingMode,
                                c = a.fontSize / a.fontSizeScale,
                                l = o & f.FILL_STROKE_MASK,
                                h = !!(o & f.ADD_TO_PATH_FLAG);
                            if ((s.disableFontFace || h) && (i = s.getPathGenerator(this.commonObjs, e)), s.disableFontFace ? (r.save(), r.translate(t, n), r.beginPath(), i(r, c), l !== f.FILL && l !== f.FILL_STROKE || r.fill(), l !== f.STROKE && l !== f.FILL_STROKE || r.stroke(), r.restore()) : (l !== f.FILL && l !== f.FILL_STROKE || r.fillText(e, t, n), l !== f.STROKE && l !== f.FILL_STROKE || r.strokeText(e, t, n)), h) {
                                (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                                    transform: r.mozCurrentTransform,
                                    x: t,
                                    y: n,
                                    fontSize: c,
                                    addToPath: i
                                })
                            }
                        },
                        get isFontSubpixelAAEnabled() {
                            var e = this.canvasFactory.create(10, 10).context;
                            e.scale(1.5, 1), e.fillText("I", 0, 10);
                            for (var t = e.getImageData(0, 0, 10, 10).data, n = !1, i = 3; i < t.length; i += 4)
                                if (t[i] > 0 && t[i] < 255) {
                                    n = !0;
                                    break
                                } return S(this, "isFontSubpixelAAEnabled", n)
                        },
                        showText: function(e) {
                            var t = this.current,
                                n = t.font;
                            if (n.isType3Font) return this.showType3Text(e);
                            var i = t.fontSize;
                            if (0 !== i) {
                                var r = this.ctx,
                                    a = t.fontSizeScale,
                                    s = t.charSpacing,
                                    o = t.wordSpacing,
                                    c = t.fontDirection,
                                    l = t.textHScale * c,
                                    h = e.length,
                                    u = n.vertical,
                                    d = u ? 1 : -1,
                                    p = n.defaultVMetrics,
                                    g = i * t.fontMatrix[0],
                                    m = t.textRenderingMode === f.FILL && !n.disableFontFace;
                                r.save(), r.transform.apply(r, t.textMatrix), r.translate(t.x, t.y + t.textRise), t.patternFill && (r.fillStyle = t.fillColor.getPattern(r, this)), c > 0 ? r.scale(l, -1) : r.scale(l, 1);
                                var v = t.lineWidth,
                                    w = t.textMatrixScale;
                                if (0 === w || 0 === v) {
                                    var y = t.textRenderingMode & f.FILL_STROKE_MASK;
                                    y !== f.STROKE && y !== f.FILL_STROKE || (this.cachedGetSinglePixelWidth = null, v = .65 * this.getSinglePixelWidth())
                                } else v /= w;
                                1 !== a && (r.scale(a, a), v /= a), r.lineWidth = v;
                                var A, S = 0;
                                for (A = 0; A < h; ++A) {
                                    var P = e[A];
                                    if (b(P)) S += d * P * i / 1e3;
                                    else {
                                        var x, C, _, L, k = !1,
                                            T = (P.isSpace ? o : 0) + s,
                                            E = P.fontChar,
                                            I = P.accent,
                                            F = P.width;
                                        if (u) {
                                            var R, N, D;
                                            R = P.vmetric || p, N = P.vmetric ? R[1] : .5 * F, N = -N * g, D = R[2] * g, F = R ? -R[0] : F, x = N / a, C = (S + D) / a
                                        } else x = S / a, C = 0;
                                        if (n.remeasure && F > 0) {
                                            var O = 1e3 * r.measureText(E).width / i * a;
                                            if (F < O && this.isFontSubpixelAAEnabled) {
                                                var M = F / O;
                                                k = !0, r.save(), r.scale(M, 1), x /= M
                                            } else F !== O && (x += (F - O) / 2e3 * i / a)
                                        }(P.isInFont || n.missingFile) && (m && !I ? r.fillText(E, x, C) : (this.paintChar(E, x, C), I && (_ = x + I.offset.x / a, L = C - I.offset.y / a, this.paintChar(I.fontChar, _, L))));
                                        S += F * g + T * c, k && r.restore()
                                    }
                                }
                                u ? t.y -= S * l : t.x += S * l, r.restore()
                            }
                        },
                        showType3Text: function(e) {
                            var t, n, i, r, a = this.ctx,
                                s = this.current,
                                o = s.font,
                                c = s.fontSize,
                                h = s.fontDirection,
                                u = o.vertical ? 1 : -1,
                                d = s.charSpacing,
                                p = s.wordSpacing,
                                m = s.textHScale * h,
                                v = s.fontMatrix || l,
                                w = e.length,
                                y = s.textRenderingMode === f.INVISIBLE;
                            if (!y && 0 !== c) {
                                for (this.cachedGetSinglePixelWidth = null, a.save(), a.transform.apply(a, s.textMatrix), a.translate(s.x, s.y), a.scale(m, h), t = 0; t < w; ++t)
                                    if (n = e[t], b(n)) r = u * n * c / 1e3, this.ctx.translate(r, 0), s.x += r * m;
                                    else {
                                        var A = (n.isSpace ? p : 0) + d,
                                            S = o.charProcOperatorList[n.operatorListId];
                                        if (S) {
                                            this.processingType3 = n, this.save(), a.scale(c, c), a.transform.apply(a, v), this.executeOperatorList(S), this.restore();
                                            var x = g.applyTransform([n.width, 0], v);
                                            i = x[0] * c + A, a.translate(i, 0), s.x += i * m
                                        } else P('Type3 character "' + n.operatorListId + '" is not available')
                                    } a.restore(), this.processingType3 = null
                            }
                        },
                        setCharWidth: function(e, t) {},
                        setCharWidthAndBounds: function(e, t, n, i, r, a) {
                            this.ctx.rect(n, i, r - n, a - i), this.clip(), this.endPath()
                        },
                        getColorN_Pattern: function(t) {
                            var n;
                            if ("TilingPattern" === t[0]) {
                                var i = t[1],
                                    r = this.baseTransform || this.ctx.mozCurrentTransform.slice(),
                                    a = this,
                                    s = {
                                        createCanvasGraphics: function(t) {
                                            return new e(t, a.commonObjs, a.objs, a.canvasFactory)
                                        }
                                    };
                                n = new x(t, i, this.ctx, s, r)
                            } else n = C(t);
                            return n
                        },
                        setStrokeColorN: function() {
                            this.current.strokeColor = this.getColorN_Pattern(arguments)
                        },
                        setFillColorN: function() {
                            this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0
                        },
                        setStrokeRGBColor: function(e, t, n) {
                            var i = g.makeCssRgb(e, t, n);
                            this.ctx.strokeStyle = i, this.current.strokeColor = i
                        },
                        setFillRGBColor: function(e, t, n) {
                            var i = g.makeCssRgb(e, t, n);
                            this.ctx.fillStyle = i, this.current.fillColor = i, this.current.patternFill = !1
                        },
                        shadingFill: function(e) {
                            var t = this.ctx;
                            this.save();
                            var n = C(e);
                            t.fillStyle = n.getPattern(t, this, !0);
                            var i = t.mozCurrentTransformInverse;
                            if (i) {
                                var r = t.canvas,
                                    a = r.width,
                                    s = r.height,
                                    o = g.applyTransform([0, 0], i),
                                    c = g.applyTransform([0, s], i),
                                    l = g.applyTransform([a, 0], i),
                                    h = g.applyTransform([a, s], i),
                                    u = Math.min(o[0], c[0], l[0], h[0]),
                                    d = Math.min(o[1], c[1], l[1], h[1]),
                                    f = Math.max(o[0], c[0], l[0], h[0]),
                                    p = Math.max(o[1], c[1], l[1], h[1]);
                                this.ctx.fillRect(u, d, f - u, p - d)
                            } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                            this.restore()
                        },
                        beginInlineImage: function() {
                            A("Should not call beginInlineImage")
                        },
                        beginImageData: function() {
                            A("Should not call beginImageData")
                        },
                        paintFormXObjectBegin: function(e, t) {
                            if (this.save(), this.baseTransformStack.push(this.baseTransform), w(e) && 6 === e.length && this.transform.apply(this, e), this.baseTransform = this.ctx.mozCurrentTransform, w(t) && 4 === t.length) {
                                var n = t[2] - t[0],
                                    i = t[3] - t[1];
                                this.ctx.rect(t[0], t[1], n, i), this.clip(), this.endPath()
                            }
                        },
                        paintFormXObjectEnd: function() {
                            this.restore(), this.baseTransform = this.baseTransformStack.pop()
                        },
                        beginGroup: function(e) {
                            this.save();
                            var t = this.ctx;
                            e.isolated || v("TODO: Support non-isolated groups."), e.knockout && P("Knockout groups not supported.");
                            var n = t.mozCurrentTransform;
                            e.matrix && t.transform.apply(t, e.matrix), m(e.bbox, "Bounding box is required.");
                            var i = g.getAxialAlignedBoundingBox(e.bbox, t.mozCurrentTransform),
                                r = [0, 0, t.canvas.width, t.canvas.height];
                            i = g.intersect(i, r) || [0, 0, 0, 0];
                            var s = Math.floor(i[0]),
                                o = Math.floor(i[1]),
                                c = Math.max(Math.ceil(i[2]) - s, 1),
                                l = Math.max(Math.ceil(i[3]) - o, 1),
                                h = 1,
                                u = 1;
                            c > 4096 && (h = c / 4096, c = 4096), l > 4096 && (u = l / 4096, l = 4096);
                            var d = "groupAt" + this.groupLevel;
                            e.smask && (d += "_smask_" + this.smaskCounter++ % 2);
                            var f = this.cachedCanvases.getCanvas(d, c, l, !0),
                                p = f.context;
                            p.scale(1 / h, 1 / u), p.translate(-s, -o), p.transform.apply(p, n), e.smask ? this.smaskStack.push({
                                canvas: f.canvas,
                                context: p,
                                offsetX: s,
                                offsetY: o,
                                scaleX: h,
                                scaleY: u,
                                subtype: e.smask.subtype,
                                backdrop: e.smask.backdrop,
                                transferMap: e.smask.transferMap || null,
                                startTransformInverse: null
                            }) : (t.setTransform(1, 0, 0, 1, 0, 0), t.translate(s, o), t.scale(h, u)), a(t, p), this.ctx = p, this.setGState([
                                ["BM", "source-over"],
                                ["ca", 1],
                                ["CA", 1]
                            ]), this.groupStack.push(t), this.groupLevel++, this.current.activeSMask = null
                        },
                        endGroup: function(e) {
                            this.groupLevel--;
                            var t = this.ctx;
                            this.ctx = this.groupStack.pop(), void 0 !== this.ctx.imageSmoothingEnabled ? this.ctx.imageSmoothingEnabled = !1 : this.ctx.mozImageSmoothingEnabled = !1, e.smask ? this.tempSMask = this.smaskStack.pop() : this.ctx.drawImage(t.canvas, 0, 0), this.restore()
                        },
                        beginAnnotations: function() {
                            this.save(), this.current = new F, this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform)
                        },
                        endAnnotations: function() {
                            this.restore()
                        },
                        beginAnnotation: function(e, t, n) {
                            if (this.save(), w(e) && 4 === e.length) {
                                var i = e[2] - e[0],
                                    r = e[3] - e[1];
                                this.ctx.rect(e[0], e[1], i, r), this.clip(), this.endPath()
                            }
                            this.transform.apply(this, t), this.transform.apply(this, n)
                        },
                        endAnnotation: function() {
                            this.restore()
                        },
                        paintJpegXObject: function(e, t, n) {
                            var i = this.objs.get(e);
                            if (!i) return void P("Dependent image isn't ready yet");
                            this.save();
                            var r = this.ctx;
                            if (r.scale(1 / t, -1 / n), r.drawImage(i, 0, 0, i.width, i.height, 0, -n, t, n), this.imageLayer) {
                                var a = r.mozCurrentTransformInverse,
                                    s = this.getCanvasPosition(0, 0);
                                this.imageLayer.appendImage({
                                    objId: e,
                                    left: s[0],
                                    top: s[1],
                                    width: t / a[0],
                                    height: n / a[3]
                                })
                            }
                            this.restore()
                        },
                        paintImageMaskXObject: function(e) {
                            var t = this.ctx,
                                i = e.width,
                                a = e.height,
                                s = this.current.fillColor,
                                o = this.current.patternFill,
                                c = this.processingType3;
                            if (c && void 0 === c.compiled && (c.compiled = i <= 1e3 && a <= 1e3 ? r({
                                    data: e.data,
                                    width: i,
                                    height: a
                                }) : null), c && c.compiled) return void c.compiled(t);
                            var l = this.cachedCanvases.getCanvas("maskCanvas", i, a),
                                h = l.context;
                            h.save(), n(h, e), h.globalCompositeOperation = "source-in", h.fillStyle = o ? s.getPattern(h, this) : s, h.fillRect(0, 0, i, a), h.restore(), this.paintInlineImageXObject(l.canvas)
                        },
                        paintImageMaskXObjectRepeat: function(e, t, i, r) {
                            var a = e.width,
                                s = e.height,
                                o = this.current.fillColor,
                                c = this.current.patternFill,
                                l = this.cachedCanvases.getCanvas("maskCanvas", a, s),
                                h = l.context;
                            h.save(), n(h, e), h.globalCompositeOperation = "source-in", h.fillStyle = c ? o.getPattern(h, this) : o, h.fillRect(0, 0, a, s), h.restore();
                            for (var u = this.ctx, d = 0, f = r.length; d < f; d += 2) u.save(), u.transform(t, 0, 0, i, r[d], r[d + 1]), u.scale(1, -1), u.drawImage(l.canvas, 0, 0, a, s, 0, -1, 1, 1), u.restore()
                        },
                        paintImageMaskXObjectGroup: function(e) {
                            for (var t = this.ctx, i = this.current.fillColor, r = this.current.patternFill, a = 0, s = e.length; a < s; a++) {
                                var o = e[a],
                                    c = o.width,
                                    l = o.height,
                                    h = this.cachedCanvases.getCanvas("maskCanvas", c, l),
                                    u = h.context;
                                u.save(), n(u, o), u.globalCompositeOperation = "source-in", u.fillStyle = r ? i.getPattern(u, this) : i, u.fillRect(0, 0, c, l), u.restore(), t.save(), t.transform.apply(t, o.transform), t.scale(1, -1), t.drawImage(h.canvas, 0, 0, c, l, 0, -1, 1, 1), t.restore()
                            }
                        },
                        paintImageXObject: function(e) {
                            var t = this.objs.get(e);
                            if (!t) return void P("Dependent image isn't ready yet");
                            this.paintInlineImageXObject(t)
                        },
                        paintImageXObjectRepeat: function(e, t, n, i) {
                            var r = this.objs.get(e);
                            if (!r) return void P("Dependent image isn't ready yet");
                            for (var a = r.width, s = r.height, o = [], c = 0, l = i.length; c < l; c += 2) o.push({
                                transform: [t, 0, 0, n, i[c], i[c + 1]],
                                x: 0,
                                y: 0,
                                w: a,
                                h: s
                            });
                            this.paintInlineImageXObjectGroup(r, o)
                        },
                        paintInlineImageXObject: function(e) {
                            var n = e.width,
                                i = e.height,
                                r = this.ctx;
                            this.save(), r.scale(1 / n, -1 / i);
                            var a, s, o = r.mozCurrentTransformInverse,
                                c = o[0],
                                l = o[1],
                                h = Math.max(Math.sqrt(c * c + l * l), 1),
                                u = o[2],
                                d = o[3],
                                f = Math.max(Math.sqrt(u * u + d * d), 1);
                            if (e instanceof HTMLElement || !e.data) a = e;
                            else {
                                s = this.cachedCanvases.getCanvas("inlineImage", n, i);
                                var p = s.context;
                                t(p, e), a = s.canvas
                            }
                            for (var g = n, m = i, v = "prescale1"; h > 2 && g > 1 || f > 2 && m > 1;) {
                                var b = g,
                                    w = m;
                                h > 2 && g > 1 && (b = Math.ceil(g / 2), h /= g / b), f > 2 && m > 1 && (w = Math.ceil(m / 2), f /= m / w), s = this.cachedCanvases.getCanvas(v, b, w), p = s.context, p.clearRect(0, 0, b, w), p.drawImage(a, 0, 0, g, m, 0, 0, b, w), a = s.canvas, g = b, m = w, v = "prescale1" === v ? "prescale2" : "prescale1"
                            }
                            if (r.drawImage(a, 0, 0, g, m, 0, -i, n, i), this.imageLayer) {
                                var y = this.getCanvasPosition(0, -i);
                                this.imageLayer.appendImage({
                                    imgData: e,
                                    left: y[0],
                                    top: y[1],
                                    width: n / o[0],
                                    height: i / o[3]
                                })
                            }
                            this.restore()
                        },
                        paintInlineImageXObjectGroup: function(e, n) {
                            var i = this.ctx,
                                r = e.width,
                                a = e.height,
                                s = this.cachedCanvases.getCanvas("inlineImage", r, a);
                            t(s.context, e);
                            for (var o = 0, c = n.length; o < c; o++) {
                                var l = n[o];
                                if (i.save(), i.transform.apply(i, l.transform), i.scale(1, -1), i.drawImage(s.canvas, l.x, l.y, l.w, l.h, 0, -1, 1, 1), this.imageLayer) {
                                    var h = this.getCanvasPosition(l.x, l.y);
                                    this.imageLayer.appendImage({
                                        imgData: e,
                                        left: h[0],
                                        top: h[1],
                                        width: r,
                                        height: a
                                    })
                                }
                                i.restore()
                            }
                        },
                        paintSolidColorImageMask: function() {
                            this.ctx.fillRect(0, 0, 1, 1)
                        },
                        paintXObject: function() {
                            P("Unsupported 'paintXObject' command.")
                        },
                        markPoint: function(e) {},
                        markPointProps: function(e, t) {},
                        beginMarkedContent: function(e) {},
                        beginMarkedContentProps: function(e, t) {},
                        endMarkedContent: function() {},
                        beginCompat: function() {},
                        endCompat: function() {},
                        consumePath: function() {
                            var e = this.ctx;
                            this.pendingClip && (this.pendingClip === O ? e.clip("evenodd") : e.clip(), this.pendingClip = null), e.beginPath()
                        },
                        getSinglePixelWidth: function(e) {
                            if (null === this.cachedGetSinglePixelWidth) {
                                this.ctx.save();
                                var t = this.ctx.mozCurrentTransformInverse;
                                this.ctx.restore(), this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(t[0] * t[0] + t[1] * t[1], t[2] * t[2] + t[3] * t[3]))
                            }
                            return this.cachedGetSinglePixelWidth
                        },
                        getCanvasPosition: function(e, t) {
                            var n = this.ctx.mozCurrentTransform;
                            return [n[0] * e + n[2] * t + n[4], n[1] * e + n[3] * t + n[5]]
                        }
                    };
                    for (var M in d) e.prototype[d[M]] = e.prototype[M];
                    return e
                }();
            t.CanvasGraphics = R
        }, function(e, t, n) {
            function i(e) {
                this.docId = e, this.styleElement = null, this.nativeFontFaces = [], this.loadTestFontId = 0, this.loadingContext = {
                    requests: [],
                    nextRequestId: 0
                }
            }
            var r = n(0),
                a = r.assert,
                s = r.bytesToString,
                o = r.string32,
                c = r.shadow,
                l = r.warn;
            i.prototype = {
                insertRule: function(e) {
                    var t = this.styleElement;
                    t || (t = this.styleElement = document.createElement("style"), t.id = "PDFJS_FONT_STYLE_TAG_" + this.docId, document.documentElement.getElementsByTagName("head")[0].appendChild(t));
                    var n = t.sheet;
                    n.insertRule(e, n.cssRules.length)
                },
                clear: function() {
                    this.styleElement && (this.styleElement.remove(), this.styleElement = null), this.nativeFontFaces.forEach(function(e) {
                        document.fonts.delete(e)
                    }), this.nativeFontFaces.length = 0
                }
            };
            var h = function() {
                return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")
            };
            Object.defineProperty(i.prototype, "loadTestFont", {
                get: function() {
                    return c(this, "loadTestFont", h())
                },
                configurable: !0
            }), i.prototype.addNativeFontFace = function(e) {
                this.nativeFontFaces.push(e), document.fonts.add(e)
            }, i.prototype.bind = function(e, t) {
                for (var n = [], r = [], a = [], s = i.isFontLoadingAPISupported && !i.isSyncFontLoadingSupported, o = 0, c = e.length; o < c; o++) {
                    var h = e[o];
                    if (!h.attached && !1 !== h.loading)
                        if (h.attached = !0, s) {
                            var u = h.createNativeFontFace();
                            u && (this.addNativeFontFace(u), a.push(function(e) {
                                return e.loaded.catch(function(t) {
                                    l('Failed to load font "' + e.family + '": ' + t)
                                })
                            }(u)))
                        } else {
                            var d = h.createFontFaceRule();
                            d && (this.insertRule(d), n.push(d), r.push(h))
                        }
                }
                var f = this.queueLoadingCallback(t);
                s ? Promise.all(a).then(function() {
                    f.complete()
                }) : n.length > 0 && !i.isSyncFontLoadingSupported ? this.prepareFontLoadEvent(n, r, f) : f.complete()
            }, i.prototype.queueLoadingCallback = function(e) {
                function t() {
                    for (a(!r.end, "completeRequest() cannot be called twice"), r.end = Date.now(); n.requests.length > 0 && n.requests[0].end;) {
                        var e = n.requests.shift();
                        setTimeout(e.callback, 0)
                    }
                }
                var n = this.loadingContext,
                    i = "pdfjs-font-loading-" + n.nextRequestId++,
                    r = {
                        id: i,
                        complete: t,
                        callback: e,
                        started: Date.now()
                    };
                return n.requests.push(r), r
            }, i.prototype.prepareFontLoadEvent = function(e, t, n) {
                function i(e, t) {
                    return e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | 255 & e.charCodeAt(t + 3)
                }

                function r(e, t, n, i) {
                    return e.substr(0, t) + i + e.substr(t + n)
                }

                function a(e, t) {
                    return ++d > 30 ? (l("Load test font never loaded."), void t()) : (u.font = "30px " + e, u.fillText(".", 0, 20), u.getImageData(0, 0, 1, 1).data[3] > 0 ? void t() : void setTimeout(a.bind(null, e, t)))
                }
                var s, c, h = document.createElement("canvas");
                h.width = 1, h.height = 1;
                var u = h.getContext("2d"),
                    d = 0,
                    f = "lt" + Date.now() + this.loadTestFontId++,
                    p = this.loadTestFont;
                p = r(p, 976, f.length, f);
                var g = i(p, 16);
                for (s = 0, c = f.length - 3; s < c; s += 4) g = g - 1482184792 + i(f, s) | 0;
                s < f.length && (g = g - 1482184792 + i(f + "XXX", s) | 0), p = r(p, 16, 4, o(g));
                var m = "url(data:font/opentype;base64," + btoa(p) + ");",
                    v = '@font-face { font-family:"' + f + '";src:' + m + "}";
                this.insertRule(v);
                var b = [];
                for (s = 0, c = t.length; s < c; s++) b.push(t[s].loadedName);
                b.push(f);
                var w = document.createElement("div");
                for (w.setAttribute("style", "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"), s = 0, c = b.length; s < c; ++s) {
                    var y = document.createElement("span");
                    y.textContent = "Hi", y.style.fontFamily = b[s], w.appendChild(y)
                }
                document.body.appendChild(w), a(f, function() {
                    document.body.removeChild(w), n.complete()
                })
            }, i.isFontLoadingAPISupported = "undefined" != typeof document && !!document.fonts;
            var u = function() {
                if ("undefined" == typeof navigator) return !0;
                var e = !1,
                    t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
                return t && t[1] >= 14 && (e = !0), e
            };
            Object.defineProperty(i, "isSyncFontLoadingSupported", {
                get: function() {
                    return c(i, "isSyncFontLoadingSupported", u())
                },
                enumerable: !0,
                configurable: !0
            });
            var d = {
                    get value() {
                        return c(this, "value", r.isEvalSupported())
                    }
                },
                f = function() {
                    function e(e, t) {
                        this.compiledGlyphs = Object.create(null);
                        for (var n in e) this[n] = e[n];
                        this.options = t
                    }
                    return e.prototype = {
                        createNativeFontFace: function() {
                            if (!this.data) return null;
                            if (this.options.disableFontFace) return this.disableFontFace = !0, null;
                            var e = new FontFace(this.loadedName, this.data, {});
                            return this.options.fontRegistry && this.options.fontRegistry.registerFont(this), e
                        },
                        createFontFaceRule: function() {
                            if (!this.data) return null;
                            if (this.options.disableFontFace) return this.disableFontFace = !0, null;
                            var e = s(new Uint8Array(this.data)),
                                t = this.loadedName,
                                n = "url(data:" + this.mimetype + ";base64," + btoa(e) + ");",
                                i = '@font-face { font-family:"' + t + '";src:' + n + "}";
                            return this.options.fontRegistry && this.options.fontRegistry.registerFont(this, n), i
                        },
                        getPathGenerator: function(e, t) {
                            if (!(t in this.compiledGlyphs)) {
                                var n, i, r, a = e.get(this.loadedName + "_path_" + t);
                                if (this.options.isEvalSupported && d.value) {
                                    var s, o = "";
                                    for (i = 0, r = a.length; i < r; i++) n = a[i], s = void 0 !== n.args ? n.args.join(",") : "", o += "c." + n.cmd + "(" + s + ");\n";
                                    this.compiledGlyphs[t] = new Function("c", "size", o)
                                } else this.compiledGlyphs[t] = function(e, t) {
                                    for (i = 0, r = a.length; i < r; i++) n = a[i], "scale" === n.cmd && (n.args = [t, -t]), e[n.cmd].apply(e, n.args)
                                }
                            }
                            return this.compiledGlyphs[t]
                        }
                    }, e
                }();
            t.FontFaceObject = f, t.FontLoader = i
        }, function(e, t, n) {
            function i(e) {
                var t = u[e[0]];
                return t || l("Unknown IR type: " + e[0]), t.fromIR(e)
            }
            var r = n(0),
                a = n(8),
                s = r.Util,
                o = r.info,
                c = r.isArray,
                l = r.error,
                h = a.WebGLUtils,
                u = {};
            u.RadialAxial = {
                fromIR: function(e) {
                    var t = e[1],
                        n = e[2],
                        i = e[3],
                        r = e[4],
                        a = e[5],
                        s = e[6];
                    return {
                        type: "Pattern",
                        getPattern: function(e) {
                            var o;
                            "axial" === t ? o = e.createLinearGradient(i[0], i[1], r[0], r[1]) : "radial" === t && (o = e.createRadialGradient(i[0], i[1], a, r[0], r[1], s));
                            for (var c = 0, l = n.length; c < l; ++c) {
                                var h = n[c];
                                o.addColorStop(h[0], h[1])
                            }
                            return o
                        }
                    }
                }
            };
            var d = function() {
                function e(e, t, n, i, r, a, s, o) {
                    var c, l = t.coords,
                        h = t.colors,
                        u = e.data,
                        d = 4 * e.width;
                    l[n + 1] > l[i + 1] && (c = n, n = i, i = c, c = a, a = s, s = c), l[i + 1] > l[r + 1] && (c = i, i = r, r = c, c = s, s = o, o = c), l[n + 1] > l[i + 1] && (c = n, n = i, i = c, c = a, a = s, s = c);
                    var f = (l[n] + t.offsetX) * t.scaleX,
                        p = (l[n + 1] + t.offsetY) * t.scaleY,
                        g = (l[i] + t.offsetX) * t.scaleX,
                        m = (l[i + 1] + t.offsetY) * t.scaleY,
                        v = (l[r] + t.offsetX) * t.scaleX,
                        b = (l[r + 1] + t.offsetY) * t.scaleY;
                    if (!(p >= b))
                        for (var w, y, A, S, P, x, C, _, L, k = h[a], T = h[a + 1], E = h[a + 2], I = h[s], F = h[s + 1], R = h[s + 2], N = h[o], D = h[o + 1], O = h[o + 2], M = Math.round(p), B = Math.round(b), j = M; j <= B; j++) {
                            j < m ? (L = j < p ? 0 : p === m ? 1 : (p - j) / (p - m), w = f - (f - g) * L, y = k - (k - I) * L, A = T - (T - F) * L, S = E - (E - R) * L) : (L = j > b ? 1 : m === b ? 0 : (m - j) / (m - b), w = g - (g - v) * L, y = I - (I - N) * L, A = F - (F - D) * L, S = R - (R - O) * L), L = j < p ? 0 : j > b ? 1 : (p - j) / (p - b), P = f - (f - v) * L, x = k - (k - N) * L, C = T - (T - D) * L, _ = E - (E - O) * L;
                            for (var U = Math.round(Math.min(w, P)), V = Math.round(Math.max(w, P)), H = d * j + 4 * U, z = U; z <= V; z++) L = (w - z) / (w - P), L = L < 0 ? 0 : L > 1 ? 1 : L, u[H++] = y - (y - x) * L | 0, u[H++] = A - (A - C) * L | 0, u[H++] = S - (S - _) * L | 0, u[H++] = 255
                        }
                }

                function t(t, n, i) {
                    var r, a, s = n.coords,
                        o = n.colors;
                    switch (n.type) {
                        case "lattice":
                            var c = n.verticesPerRow,
                                h = Math.floor(s.length / c) - 1,
                                u = c - 1;
                            for (r = 0; r < h; r++)
                                for (var d = r * c, f = 0; f < u; f++, d++) e(t, i, s[d], s[d + 1], s[d + c], o[d], o[d + 1], o[d + c]), e(t, i, s[d + c + 1], s[d + 1], s[d + c], o[d + c + 1], o[d + 1], o[d + c]);
                            break;
                        case "triangles":
                            for (r = 0, a = s.length; r < a; r += 3) e(t, i, s[r], s[r + 1], s[r + 2], o[r], o[r + 1], o[r + 2]);
                            break;
                        default:
                            l("illigal figure")
                    }
                }

                function n(e, n, i, r, a, s, o) {
                    var c, l, u, d, f = Math.floor(e[0]),
                        p = Math.floor(e[1]),
                        g = Math.ceil(e[2]) - f,
                        m = Math.ceil(e[3]) - p,
                        v = Math.min(Math.ceil(Math.abs(g * n[0] * 1.1)), 3e3),
                        b = Math.min(Math.ceil(Math.abs(m * n[1] * 1.1)), 3e3),
                        w = g / v,
                        y = m / b,
                        A = {
                            coords: i,
                            colors: r,
                            offsetX: -f,
                            offsetY: -p,
                            scaleX: 1 / w,
                            scaleY: 1 / y
                        },
                        S = v + 4,
                        P = b + 4;
                    if (h.isEnabled) c = h.drawFigures(v, b, s, a, A), l = o.getCanvas("mesh", S, P, !1), l.context.drawImage(c, 2, 2), c = l.canvas;
                    else {
                        l = o.getCanvas("mesh", S, P, !1);
                        var x = l.context,
                            C = x.createImageData(v, b);
                        if (s) {
                            var _ = C.data;
                            for (u = 0, d = _.length; u < d; u += 4) _[u] = s[0], _[u + 1] = s[1], _[u + 2] = s[2], _[u + 3] = 255
                        }
                        for (u = 0; u < a.length; u++) t(C, a[u], A);
                        x.putImageData(C, 2, 2), c = l.canvas
                    }
                    return {
                        canvas: c,
                        offsetX: f - 2 * w,
                        offsetY: p - 2 * y,
                        scaleX: w,
                        scaleY: y
                    }
                }
                return n
            }();
            u.Mesh = {
                fromIR: function(e) {
                    var t = e[2],
                        n = e[3],
                        i = e[4],
                        r = e[5],
                        a = e[6],
                        o = e[8];
                    return {
                        type: "Pattern",
                        getPattern: function(e, c, l) {
                            var h;
                            if (l) h = s.singularValueDecompose2dScale(e.mozCurrentTransform);
                            else if (h = s.singularValueDecompose2dScale(c.baseTransform), a) {
                                var u = s.singularValueDecompose2dScale(a);
                                h = [h[0] * u[0], h[1] * u[1]]
                            }
                            var f = d(r, h, t, n, i, l ? null : o, c.cachedCanvases);
                            return l || (e.setTransform.apply(e, c.baseTransform), a && e.transform.apply(e, a)), e.translate(f.offsetX, f.offsetY), e.scale(f.scaleX, f.scaleY), e.createPattern(f.canvas, "no-repeat")
                        }
                    }
                }
            }, u.Dummy = {
                fromIR: function() {
                    return {
                        type: "Pattern",
                        getPattern: function() {
                            return "hotpink"
                        }
                    }
                }
            };
            var f = function() {
                function e(e, t, n, i, r) {
                    this.operatorList = e[2], this.matrix = e[3] || [1, 0, 0, 1, 0, 0], this.bbox = s.normalizeRect(e[4]), this.xstep = e[5], this.ystep = e[6], this.paintType = e[7], this.tilingType = e[8], this.color = t, this.canvasGraphicsFactory = i, this.baseTransform = r, this.type = "Pattern", this.ctx = n
                }
                var t = {
                    COLORED: 1,
                    UNCOLORED: 2
                };
                return e.prototype = {
                    createPatternCanvas: function(e) {
                        var t = this.operatorList,
                            n = this.bbox,
                            i = this.xstep,
                            r = this.ystep,
                            a = this.paintType,
                            c = this.tilingType,
                            l = this.color,
                            h = this.canvasGraphicsFactory;
                        o("TilingType: " + c);
                        var u = n[0],
                            d = n[1],
                            f = n[2],
                            p = n[3],
                            g = [u, d],
                            m = [u + i, d + r],
                            v = m[0] - g[0],
                            b = m[1] - g[1],
                            w = s.singularValueDecompose2dScale(this.matrix),
                            y = s.singularValueDecompose2dScale(this.baseTransform),
                            A = [w[0] * y[0], w[1] * y[1]];
                        v = Math.min(Math.ceil(Math.abs(v * A[0])), 3e3), b = Math.min(Math.ceil(Math.abs(b * A[1])), 3e3);
                        var S = e.cachedCanvases.getCanvas("pattern", v, b, !0),
                            P = S.context,
                            x = h.createCanvasGraphics(P);
                        x.groupLevel = e.groupLevel, this.setFillAndStrokeStyleToContext(P, a, l), this.setScale(v, b, i, r), this.transformToScale(x);
                        var C = [1, 0, 0, 1, -g[0], -g[1]];
                        return x.transform.apply(x, C), this.clipBbox(x, n, u, d, f, p), x.executeOperatorList(t), S.canvas
                    },
                    setScale: function(e, t, n, i) {
                        this.scale = [e / n, t / i]
                    },
                    transformToScale: function(e) {
                        var t = this.scale,
                            n = [t[0], 0, 0, t[1], 0, 0];
                        e.transform.apply(e, n)
                    },
                    scaleToContext: function() {
                        var e = this.scale;
                        this.ctx.scale(1 / e[0], 1 / e[1])
                    },
                    clipBbox: function(e, t, n, i, r, a) {
                        if (c(t) && 4 === t.length) {
                            var s = r - n,
                                o = a - i;
                            e.ctx.rect(n, i, s, o), e.clip(), e.endPath()
                        }
                    },
                    setFillAndStrokeStyleToContext: function(e, n, i) {
                        switch (n) {
                            case t.COLORED:
                                var r = this.ctx;
                                e.fillStyle = r.fillStyle, e.strokeStyle = r.strokeStyle;
                                break;
                            case t.UNCOLORED:
                                var a = s.makeCssRgb(i[0], i[1], i[2]);
                                e.fillStyle = a, e.strokeStyle = a;
                                break;
                            default:
                                l("Unsupported paint type: " + n)
                        }
                    },
                    getPattern: function(e, t) {
                        var n = this.createPatternCanvas(t);
                        return e = this.ctx, e.setTransform.apply(e, this.baseTransform), e.transform.apply(e, this.matrix), this.scaleToContext(), e.createPattern(n, "repeat")
                    }
                }, e
            }();
            t.getShadingPatternFromIR = i, t.TilingPattern = f
        }, function(e, t, n) {
            var i = n(0),
                r = n(9),
                a = n(3),
                s = n(5),
                o = n(2),
                c = n(1),
                l = n(4);
            t.PDFJS = r.PDFJS, t.build = a.build, t.version = a.version, t.getDocument = a.getDocument, t.PDFDataRangeTransport = a.PDFDataRangeTransport, t.PDFWorker = a.PDFWorker, t.renderTextLayer = s.renderTextLayer, t.AnnotationLayer = o.AnnotationLayer, t.CustomStyle = c.CustomStyle, t.createPromiseCapability = i.createPromiseCapability, t.PasswordResponses = i.PasswordResponses, t.InvalidPDFException = i.InvalidPDFException, t.MissingPDFException = i.MissingPDFException, t.SVGGraphics = l.SVGGraphics, t.UnexpectedResponseException = i.UnexpectedResponseException, t.OPS = i.OPS, t.UNSUPPORTED_FEATURES = i.UNSUPPORTED_FEATURES, t.isValidUrl = c.isValidUrl, t.createValidAbsoluteUrl = i.createValidAbsoluteUrl, t.createObjectURL = i.createObjectURL, t.removeNullCharacters = i.removeNullCharacters, t.shadow = i.shadow, t.createBlob = i.createBlob, t.RenderingCancelledException = c.RenderingCancelledException, t.getFilenameFromUrl = c.getFilenameFromUrl, t.addLinkAttributes = c.addLinkAttributes
        }, function(e, t, n) {
            (function(e) {
                if ("undefined" == typeof PDFJS || !PDFJS.compatibilityChecked) {
                    var t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : void 0,
                        n = "undefined" != typeof navigator && navigator.userAgent || "",
                        i = /Android/.test(n),
                        r = /Android\s[0-2][^\d]/.test(n),
                        a = /Android\s[0-4][^\d]/.test(n),
                        s = n.indexOf("Chrom") >= 0,
                        o = /Chrome\/(39|40)\./.test(n),
                        c = n.indexOf("CriOS") >= 0,
                        l = n.indexOf("Trident") >= 0,
                        h = /\b(iPad|iPhone|iPod)(?=;)/.test(n),
                        u = n.indexOf("Opera") >= 0,
                        d = /Safari\//.test(n) && !/(Chrome\/|Android\s)/.test(n),
                        f = "object" == typeof window && "object" == typeof document;
                    "undefined" == typeof PDFJS && (t.PDFJS = {}), PDFJS.compatibilityChecked = !0,
                        function() {
                            function e(e, t) {
                                return new i(this.slice(e, t))
                            }

                            function n(e, t) {
                                arguments.length < 2 && (t = 0);
                                for (var n = 0, i = e.length; n < i; ++n, ++t) this[t] = 255 & e[n]
                            }

                            function i(t) {
                                var i, r, a;
                                if ("number" == typeof t)
                                    for (i = [], r = 0; r < t; ++r) i[r] = 0;
                                else if ("slice" in t) i = t.slice(0);
                                else
                                    for (i = [], r = 0, a = t.length; r < a; ++r) i[r] = t[r];
                                return i.subarray = e, i.buffer = i, i.byteLength = i.length, i.set = n, "object" == typeof t && t.buffer && (i.buffer = t.buffer), i
                            }
                            if ("undefined" != typeof Uint8Array) return void 0 === Uint8Array.prototype.subarray && (Uint8Array.prototype.subarray = function(e, t) {
                                return new Uint8Array(this.slice(e, t))
                            }, Float32Array.prototype.subarray = function(e, t) {
                                return new Float32Array(this.slice(e, t))
                            }), void("undefined" == typeof Float64Array && (t.Float64Array = Float32Array));
                            t.Uint8Array = i, t.Int8Array = i, t.Uint32Array = i, t.Int32Array = i, t.Uint16Array = i, t.Float32Array = i, t.Float64Array = i
                        }(),
                        function() {
                            t.URL || (t.URL = t.webkitURL)
                        }(),
                        function() {
                            if (void 0 !== Object.defineProperty) {
                                var e = !0;
                                try {
                                    f && Object.defineProperty(new Image, "id", {
                                        value: "test"
                                    });
                                    var t = function() {};
                                    t.prototype = {
                                        get id() {}
                                    }, Object.defineProperty(new t, "id", {
                                        value: "",
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !1
                                    })
                                } catch (t) {
                                    e = !1
                                }
                                if (e) return
                            }
                            Object.defineProperty = function(e, t, n) {
                                delete e[t], "get" in n && e.__defineGetter__(t, n.get), "set" in n && e.__defineSetter__(t, n.set), "value" in n && (e.__defineSetter__(t, function(e) {
                                    return this.__defineGetter__(t, function() {
                                        return e
                                    }), e
                                }), e[t] = n.value)
                            }
                        }(),
                        function() {
                            if ("undefined" != typeof XMLHttpRequest) {
                                var e = XMLHttpRequest.prototype,
                                    t = new XMLHttpRequest;
                                if ("overrideMimeType" in t || Object.defineProperty(e, "overrideMimeType", {
                                        value: function(e) {}
                                    }), !("responseType" in t)) {
                                    if (Object.defineProperty(e, "responseType", {
                                            get: function() {
                                                return this._responseType || "text"
                                            },
                                            set: function(e) {
                                                "text" !== e && "arraybuffer" !== e || (this._responseType = e, "arraybuffer" === e && "function" == typeof this.overrideMimeType && this.overrideMimeType("text/plain; charset=x-user-defined"))
                                            }
                                        }), "undefined" != typeof VBArray) return void Object.defineProperty(e, "response", {
                                        get: function() {
                                            return "arraybuffer" === this.responseType ? new Uint8Array(new VBArray(this.responseBody).toArray()) : this.responseText
                                        }
                                    });
                                    Object.defineProperty(e, "response", {
                                        get: function() {
                                            if ("arraybuffer" !== this.responseType) return this.responseText;
                                            var e, t = this.responseText,
                                                n = t.length,
                                                i = new Uint8Array(n);
                                            for (e = 0; e < n; ++e) i[e] = 255 & t.charCodeAt(e);
                                            return i.buffer
                                        }
                                    })
                                }
                            }
                        }(),
                        function() {
                            if (!("btoa" in t)) {
                                var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                                t.btoa = function(t) {
                                    var n, i, r = "";
                                    for (n = 0, i = t.length; n < i; n += 3) {
                                        var a = 255 & t.charCodeAt(n),
                                            s = 255 & t.charCodeAt(n + 1),
                                            o = 255 & t.charCodeAt(n + 2),
                                            c = a >> 2,
                                            l = (3 & a) << 4 | s >> 4,
                                            h = n + 1 < i ? (15 & s) << 2 | o >> 6 : 64,
                                            u = n + 2 < i ? 63 & o : 64;
                                        r += e.charAt(c) + e.charAt(l) + e.charAt(h) + e.charAt(u)
                                    }
                                    return r
                                }
                            }
                        }(),
                        function() {
                            if (!("atob" in t)) {
                                t.atob = function(e) {
                                    if (e = e.replace(/=+$/, ""), e.length % 4 == 1) throw new Error("bad atob input");
                                    for (var t, n, i = 0, r = 0, a = ""; n = e.charAt(r++); ~n && (t = i % 4 ? 64 * t + n : n, i++ % 4) ? a += String.fromCharCode(255 & t >> (-2 * i & 6)) : 0) n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
                                    return a
                                }
                            }
                        }(),
                        function() {
                            void 0 === Function.prototype.bind && (Function.prototype.bind = function(e) {
                                var t = this,
                                    n = Array.prototype.slice.call(arguments, 1);
                                return function() {
                                    var i = n.concat(Array.prototype.slice.call(arguments));
                                    return t.apply(e, i)
                                }
                            })
                        }(),
                        function() {
                            if (f) {
                                "dataset" in document.createElement("div") || Object.defineProperty(HTMLElement.prototype, "dataset", {
                                    get: function() {
                                        if (this._dataset) return this._dataset;
                                        for (var e = {}, t = 0, n = this.attributes.length; t < n; t++) {
                                            var i = this.attributes[t];
                                            if ("data-" === i.name.substring(0, 5)) {
                                                e[i.name.substring(5).replace(/\-([a-z])/g, function(e, t) {
                                                    return t.toUpperCase()
                                                })] = i.value
                                            }
                                        }
                                        return Object.defineProperty(this, "_dataset", {
                                            value: e,
                                            writable: !1,
                                            enumerable: !1
                                        }), e
                                    },
                                    enumerable: !0
                                })
                            }
                        }(),
                        function() {
                            function e(e, t, n, i) {
                                var r = e.className || "",
                                    a = r.split(/\s+/g);
                                "" === a[0] && a.shift();
                                var s = a.indexOf(t);
                                return s < 0 && n && a.push(t), s >= 0 && i && a.splice(s, 1), e.className = a.join(" "), s >= 0
                            }
                            if (f) {
                                if (!("classList" in document.createElement("div"))) {
                                    var t = {
                                        add: function(t) {
                                            e(this.element, t, !0, !1)
                                        },
                                        contains: function(t) {
                                            return e(this.element, t, !1, !1)
                                        },
                                        remove: function(t) {
                                            e(this.element, t, !1, !0)
                                        },
                                        toggle: function(t) {
                                            e(this.element, t, !0, !0)
                                        }
                                    };
                                    Object.defineProperty(HTMLElement.prototype, "classList", {
                                        get: function() {
                                            if (this._classList) return this._classList;
                                            var e = Object.create(t, {
                                                element: {
                                                    value: this,
                                                    writable: !1,
                                                    enumerable: !0
                                                }
                                            });
                                            return Object.defineProperty(this, "_classList", {
                                                value: e,
                                                writable: !1,
                                                enumerable: !1
                                            }), e
                                        },
                                        enumerable: !0
                                    })
                                }
                            }
                        }(),
                        function() {
                            if (!("undefined" == typeof importScripts || "console" in t)) {
                                var e = {},
                                    n = {
                                        log: function() {
                                            var e = Array.prototype.slice.call(arguments);
                                            t.postMessage({
                                                targetName: "main",
                                                action: "console_log",
                                                data: e
                                            })
                                        },
                                        error: function() {
                                            var e = Array.prototype.slice.call(arguments);
                                            t.postMessage({
                                                targetName: "main",
                                                action: "console_error",
                                                data: e
                                            })
                                        },
                                        time: function(t) {
                                            e[t] = Date.now()
                                        },
                                        timeEnd: function(t) {
                                            var n = e[t];
                                            if (!n) throw new Error("Unknown timer name " + t);
                                            this.log("Timer:", t, Date.now() - n)
                                        }
                                    };
                                t.console = n
                            }
                        }(),
                        function() {
                            if (f) "console" in window ? "bind" in console.log || (console.log = function(e) {
                                return function(t) {
                                    return e(t)
                                }
                            }(console.log), console.error = function(e) {
                                return function(t) {
                                    return e(t)
                                }
                            }(console.error), console.warn = function(e) {
                                return function(t) {
                                    return e(t)
                                }
                            }(console.warn)) : window.console = {
                                log: function() {},
                                error: function() {},
                                warn: function() {}
                            }
                        }(),
                        function() {
                            function e(e) {
                                t(e.target) && e.stopPropagation()
                            }

                            function t(e) {
                                return e.disabled || e.parentNode && t(e.parentNode)
                            }
                            u && document.addEventListener("click", e, !0)
                        }(),
                        function() {
                            (l || c) && (PDFJS.disableCreateObjectURL = !0)
                        }(),
                        function() {
                            "undefined" != typeof navigator && ("language" in navigator || (PDFJS.locale = navigator.userLanguage || "en-US"))
                        }(),
                        function() {
                            (d || r || o || h) && (PDFJS.disableRange = !0, PDFJS.disableStream = !0)
                        }(),
                        function() {
                            f && (history.pushState && !r || (PDFJS.disableHistory = !0))
                        }(),
                        function() {
                            if (f)
                                if (window.CanvasPixelArray) "function" != typeof window.CanvasPixelArray.prototype.set && (window.CanvasPixelArray.prototype.set = function(e) {
                                    for (var t = 0, n = this.length; t < n; t++) this[t] = e[t]
                                });
                                else {
                                    var e, t = !1;
                                    if (s ? (e = n.match(/Chrom(e|ium)\/([0-9]+)\./), t = e && parseInt(e[2]) < 21) : i ? t = a : d && (e = n.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//), t = e && parseInt(e[1]) < 6), t) {
                                        var r = window.CanvasRenderingContext2D.prototype,
                                            o = r.createImageData;
                                        r.createImageData = function(e, t) {
                                            var n = o.call(this, e, t);
                                            return n.data.set = function(e) {
                                                for (var t = 0, n = this.length; t < n; t++) this[t] = e[t]
                                            }, n
                                        }, r = null
                                    }
                                }
                        }(),
                        function() {
                            function e() {
                                window.requestAnimationFrame = function(e) {
                                    return window.setTimeout(e, 20)
                                }, window.cancelAnimationFrame = function(e) {
                                    window.clearTimeout(e)
                                }
                            }
                            if (f) h ? e() : "requestAnimationFrame" in window || (window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame || e())
                        }(),
                        function() {
                            (h || i) && (PDFJS.maxCanvasPixels = 5242880)
                        }(),
                        function() {
                            f && l && window.parent !== window && (PDFJS.disableFullscreen = !0)
                        }(),
                        function() {
                            f && ("currentScript" in document || Object.defineProperty(document, "currentScript", {
                                get: function() {
                                    var e = document.getElementsByTagName("script");
                                    return e[e.length - 1]
                                },
                                enumerable: !0,
                                configurable: !0
                            }))
                        }(),
                        function() {
                            if (f) {
                                var e = document.createElement("input");
                                try {
                                    e.type = "number"
                                } catch (i) {
                                    var t = e.constructor.prototype,
                                        n = Object.getOwnPropertyDescriptor(t, "type");
                                    Object.defineProperty(t, "type", {
                                        get: function() {
                                            return n.get.call(this)
                                        },
                                        set: function(e) {
                                            n.set.call(this, "number" === e ? "text" : e)
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    })
                                }
                            }
                        }(),
                        function() {
                            if (f && document.attachEvent) {
                                var e = document.constructor.prototype,
                                    t = Object.getOwnPropertyDescriptor(e, "readyState");
                                Object.defineProperty(e, "readyState", {
                                    get: function() {
                                        var e = t.get.call(this);
                                        return "interactive" === e ? "loading" : e
                                    },
                                    set: function(e) {
                                        t.set.call(this, e)
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                })
                            }
                        }(),
                        function() {
                            f && void 0 === Element.prototype.remove && (Element.prototype.remove = function() {
                                this.parentNode && this.parentNode.removeChild(this)
                            })
                        }(),
                        function() {
                            if (t.Promise) return "function" != typeof t.Promise.all && (t.Promise.all = function(e) {
                                var n, i, r = 0,
                                    a = [],
                                    s = new t.Promise(function(e, t) {
                                        n = e, i = t
                                    });
                                return e.forEach(function(e, t) {
                                    r++, e.then(function(e) {
                                        a[t] = e, 0 === --r && n(a)
                                    }, i)
                                }), 0 === r && n(a), s
                            }), "function" != typeof t.Promise.resolve && (t.Promise.resolve = function(e) {
                                return new t.Promise(function(t) {
                                    t(e)
                                })
                            }), "function" != typeof t.Promise.reject && (t.Promise.reject = function(e) {
                                return new t.Promise(function(t, n) {
                                    n(e)
                                })
                            }), void("function" != typeof t.Promise.prototype.catch && (t.Promise.prototype.catch = function(e) {
                                return t.Promise.prototype.then(void 0, e)
                            }));
                            var e = 2,
                                n = {
                                    handlers: [],
                                    running: !1,
                                    unhandledRejections: [],
                                    pendingRejectionCheck: !1,
                                    scheduleHandlers: function(e) {
                                        0 !== e._status && (this.handlers = this.handlers.concat(e._handlers), e._handlers = [], this.running || (this.running = !0, setTimeout(this.runHandlers.bind(this), 0)))
                                    },
                                    runHandlers: function() {
                                        for (var t = Date.now() + 1; this.handlers.length > 0;) {
                                            var n = this.handlers.shift(),
                                                i = n.thisPromise._status,
                                                r = n.thisPromise._value;
                                            try {
                                                1 === i ? "function" == typeof n.onResolve && (r = n.onResolve(r)) : "function" == typeof n.onReject && (r = n.onReject(r), i = 1, n.thisPromise._unhandledRejection && this.removeUnhandeledRejection(n.thisPromise))
                                            } catch (t) {
                                                i = e, r = t
                                            }
                                            if (n.nextPromise._updateStatus(i, r), Date.now() >= t) break
                                        }
                                        if (this.handlers.length > 0) return void setTimeout(this.runHandlers.bind(this), 0);
                                        this.running = !1
                                    },
                                    addUnhandledRejection: function(e) {
                                        this.unhandledRejections.push({
                                            promise: e,
                                            time: Date.now()
                                        }), this.scheduleRejectionCheck()
                                    },
                                    removeUnhandeledRejection: function(e) {
                                        e._unhandledRejection = !1;
                                        for (var t = 0; t < this.unhandledRejections.length; t++) this.unhandledRejections[t].promise === e && (this.unhandledRejections.splice(t), t--)
                                    },
                                    scheduleRejectionCheck: function() {
                                        this.pendingRejectionCheck || (this.pendingRejectionCheck = !0, setTimeout(function() {
                                            this.pendingRejectionCheck = !1;
                                            for (var e = Date.now(), t = 0; t < this.unhandledRejections.length; t++)
                                                if (e - this.unhandledRejections[t].time > 500) {
                                                    var n = this.unhandledRejections[t].promise._value,
                                                        i = "Unhandled rejection: " + n;
                                                    n.stack && (i += "\n" + n.stack);
                                                    try {
                                                        throw new Error(i)
                                                    } catch (e) {
                                                        console.warn(i)
                                                    }
                                                    this.unhandledRejections.splice(t), t--
                                                } this.unhandledRejections.length && this.scheduleRejectionCheck()
                                        }.bind(this), 500))
                                    }
                                },
                                i = function(e) {
                                    this._status = 0, this._handlers = [];
                                    try {
                                        e.call(this, this._resolve.bind(this), this._reject.bind(this))
                                    } catch (e) {
                                        this._reject(e)
                                    }
                                };
                            i.all = function(t) {
                                    function n(t) {
                                        s._status !== e && (c = [], a(t))
                                    }
                                    var r, a, s = new i(function(e, t) {
                                            r = e, a = t
                                        }),
                                        o = t.length,
                                        c = [];
                                    if (0 === o) return r(c), s;
                                    for (var l = 0, h = t.length; l < h; ++l) {
                                        var u = t[l],
                                            d = function(t) {
                                                return function(n) {
                                                    s._status !== e && (c[t] = n, 0 === --o && r(c))
                                                }
                                            }(l);
                                        i.isPromise(u) ? u.then(d, n) : d(u)
                                    }
                                    return s
                                }, i.isPromise = function(e) {
                                    return e && "function" == typeof e.then
                                },
                                i.resolve = function(e) {
                                    return new i(function(t) {
                                        t(e)
                                    })
                                }, i.reject = function(e) {
                                    return new i(function(t, n) {
                                        n(e)
                                    })
                                }, i.prototype = {
                                    _status: null,
                                    _value: null,
                                    _handlers: null,
                                    _unhandledRejection: null,
                                    _updateStatus: function(t, r) {
                                        if (1 !== this._status && this._status !== e) {
                                            if (1 === t && i.isPromise(r)) return void r.then(this._updateStatus.bind(this, 1), this._updateStatus.bind(this, e));
                                            this._status = t, this._value = r, t === e && 0 === this._handlers.length && (this._unhandledRejection = !0, n.addUnhandledRejection(this)), n.scheduleHandlers(this)
                                        }
                                    },
                                    _resolve: function(e) {
                                        this._updateStatus(1, e)
                                    },
                                    _reject: function(t) {
                                        this._updateStatus(e, t)
                                    },
                                    then: function(e, t) {
                                        var r = new i(function(e, t) {
                                            this.resolve = e, this.reject = t
                                        });
                                        return this._handlers.push({
                                            thisPromise: this,
                                            onResolve: e,
                                            onReject: t,
                                            nextPromise: r
                                        }), n.scheduleHandlers(this), r
                                    },
                                    catch: function(e) {
                                        return this.then(void 0, e)
                                    }
                                }, t.Promise = i
                        }(),
                        function() {
                            function e() {
                                this.id = "$weakmap" + n++
                            }
                            if (!t.WeakMap) {
                                var n = 0;
                                e.prototype = {
                                    has: function(e) {
                                        return !!Object.getOwnPropertyDescriptor(e, this.id)
                                    },
                                    get: function(e, t) {
                                        return this.has(e) ? e[this.id] : t
                                    },
                                    set: function(e, t) {
                                        Object.defineProperty(e, this.id, {
                                            value: t,
                                            enumerable: !1,
                                            configurable: !0
                                        })
                                    },
                                    delete: function(e) {
                                        delete e[this.id]
                                    }
                                }, t.WeakMap = e
                            }
                        }(),
                        function() {
                            function e(e) {
                                return void 0 !== u[e]
                            }

                            function n() {
                                o.call(this), this._isInvalid = !0
                            }

                            function i(e) {
                                return "" === e && n.call(this), e.toLowerCase()
                            }

                            function r(e) {
                                var t = e.charCodeAt(0);
                                return t > 32 && t < 127 && -1 === [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e)
                            }

                            function a(e) {
                                var t = e.charCodeAt(0);
                                return t > 32 && t < 127 && -1 === [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e)
                            }

                            function s(t, s, o) {
                                function c(e) {
                                    w.push(e)
                                }
                                var l = s || "scheme start",
                                    h = 0,
                                    m = "",
                                    v = !1,
                                    b = !1,
                                    w = [];
                                e: for (;
                                    (t[h - 1] !== f || 0 === h) && !this._isInvalid;) {
                                    var y = t[h];
                                    switch (l) {
                                        case "scheme start":
                                            if (!y || !p.test(y)) {
                                                if (s) {
                                                    c("Invalid scheme.");
                                                    break e
                                                }
                                                m = "", l = "no scheme";
                                                continue
                                            }
                                            m += y.toLowerCase(), l = "scheme";
                                            break;
                                        case "scheme":
                                            if (y && g.test(y)) m += y.toLowerCase();
                                            else {
                                                if (":" !== y) {
                                                    if (s) {
                                                        if (y === f) break e;
                                                        c("Code point not allowed in scheme: " + y);
                                                        break e
                                                    }
                                                    m = "", h = 0, l = "no scheme";
                                                    continue
                                                }
                                                if (this._scheme = m, m = "", s) break e;
                                                e(this._scheme) && (this._isRelative = !0), l = "file" === this._scheme ? "relative" : this._isRelative && o && o._scheme === this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
                                            }
                                            break;
                                        case "scheme data":
                                            "?" === y ? (this._query = "?", l = "query") : "#" === y ? (this._fragment = "#", l = "fragment") : y !== f && "\t" !== y && "\n" !== y && "\r" !== y && (this._schemeData += r(y));
                                            break;
                                        case "no scheme":
                                            if (o && e(o._scheme)) {
                                                l = "relative";
                                                continue
                                            }
                                            c("Missing scheme."), n.call(this);
                                            break;
                                        case "relative or authority":
                                            if ("/" !== y || "/" !== t[h + 1]) {
                                                c("Expected /, got: " + y), l = "relative";
                                                continue
                                            }
                                            l = "authority ignore slashes";
                                            break;
                                        case "relative":
                                            if (this._isRelative = !0, "file" !== this._scheme && (this._scheme = o._scheme), y === f) {
                                                this._host = o._host, this._port = o._port, this._path = o._path.slice(), this._query = o._query, this._username = o._username, this._password = o._password;
                                                break e
                                            }
                                            if ("/" === y || "\\" === y) "\\" === y && c("\\ is an invalid code point."), l = "relative slash";
                                            else if ("?" === y) this._host = o._host, this._port = o._port, this._path = o._path.slice(), this._query = "?", this._username = o._username, this._password = o._password, l = "query";
                                            else {
                                                if ("#" !== y) {
                                                    var A = t[h + 1],
                                                        S = t[h + 2];
                                                    ("file" !== this._scheme || !p.test(y) || ":" !== A && "|" !== A || S !== f && "/" !== S && "\\" !== S && "?" !== S && "#" !== S) && (this._host = o._host, this._port = o._port, this._username = o._username, this._password = o._password, this._path = o._path.slice(), this._path.pop()), l = "relative path";
                                                    continue
                                                }
                                                this._host = o._host, this._port = o._port, this._path = o._path.slice(), this._query = o._query, this._fragment = "#", this._username = o._username, this._password = o._password, l = "fragment"
                                            }
                                            break;
                                        case "relative slash":
                                            if ("/" !== y && "\\" !== y) {
                                                "file" !== this._scheme && (this._host = o._host, this._port = o._port, this._username = o._username, this._password = o._password), l = "relative path";
                                                continue
                                            }
                                            "\\" === y && c("\\ is an invalid code point."), l = "file" === this._scheme ? "file host" : "authority ignore slashes";
                                            break;
                                        case "authority first slash":
                                            if ("/" !== y) {
                                                c("Expected '/', got: " + y), l = "authority ignore slashes";
                                                continue
                                            }
                                            l = "authority second slash";
                                            break;
                                        case "authority second slash":
                                            if (l = "authority ignore slashes", "/" !== y) {
                                                c("Expected '/', got: " + y);
                                                continue
                                            }
                                            break;
                                        case "authority ignore slashes":
                                            if ("/" !== y && "\\" !== y) {
                                                l = "authority";
                                                continue
                                            }
                                            c("Expected authority, got: " + y);
                                            break;
                                        case "authority":
                                            if ("@" === y) {
                                                v && (c("@ already seen."), m += "%40"), v = !0;
                                                for (var P = 0; P < m.length; P++) {
                                                    var x = m[P];
                                                    if ("\t" !== x && "\n" !== x && "\r" !== x)
                                                        if (":" !== x || null !== this._password) {
                                                            var C = r(x);
                                                            null !== this._password ? this._password += C : this._username += C
                                                        } else this._password = "";
                                                    else c("Invalid whitespace in authority.")
                                                }
                                                m = ""
                                            } else {
                                                if (y === f || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                                    h -= m.length, m = "", l = "host";
                                                    continue
                                                }
                                                m += y
                                            }
                                            break;
                                        case "file host":
                                            if (y === f || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                                2 !== m.length || !p.test(m[0]) || ":" !== m[1] && "|" !== m[1] ? 0 === m.length ? l = "relative path start" : (this._host = i.call(this, m), m = "", l = "relative path start") : l = "relative path";
                                                continue
                                            }
                                            "\t" === y || "\n" === y || "\r" === y ? c("Invalid whitespace in file host.") : m += y;
                                            break;
                                        case "host":
                                        case "hostname":
                                            if (":" !== y || b) {
                                                if (y === f || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                                    if (this._host = i.call(this, m), m = "", l = "relative path start", s) break e;
                                                    continue
                                                }
                                                "\t" !== y && "\n" !== y && "\r" !== y ? ("[" === y ? b = !0 : "]" === y && (b = !1), m += y) : c("Invalid code point in host/hostname: " + y)
                                            } else if (this._host = i.call(this, m), m = "", l = "port", "hostname" === s) break e;
                                            break;
                                        case "port":
                                            if (/[0-9]/.test(y)) m += y;
                                            else {
                                                if (y === f || "/" === y || "\\" === y || "?" === y || "#" === y || s) {
                                                    if ("" !== m) {
                                                        var _ = parseInt(m, 10);
                                                        _ !== u[this._scheme] && (this._port = _ + ""), m = ""
                                                    }
                                                    if (s) break e;
                                                    l = "relative path start";
                                                    continue
                                                }
                                                "\t" === y || "\n" === y || "\r" === y ? c("Invalid code point in port: " + y) : n.call(this)
                                            }
                                            break;
                                        case "relative path start":
                                            if ("\\" === y && c("'\\' not allowed in path."), l = "relative path", "/" !== y && "\\" !== y) continue;
                                            break;
                                        case "relative path":
                                            if (y !== f && "/" !== y && "\\" !== y && (s || "?" !== y && "#" !== y)) "\t" !== y && "\n" !== y && "\r" !== y && (m += r(y));
                                            else {
                                                "\\" === y && c("\\ not allowed in relative path.");
                                                var L;
                                                (L = d[m.toLowerCase()]) && (m = L), ".." === m ? (this._path.pop(), "/" !== y && "\\" !== y && this._path.push("")) : "." === m && "/" !== y && "\\" !== y ? this._path.push("") : "." !== m && ("file" === this._scheme && 0 === this._path.length && 2 === m.length && p.test(m[0]) && "|" === m[1] && (m = m[0] + ":"), this._path.push(m)), m = "", "?" === y ? (this._query = "?", l = "query") : "#" === y && (this._fragment = "#", l = "fragment")
                                            }
                                            break;
                                        case "query":
                                            s || "#" !== y ? y !== f && "\t" !== y && "\n" !== y && "\r" !== y && (this._query += a(y)) : (this._fragment = "#", l = "fragment");
                                            break;
                                        case "fragment":
                                            y !== f && "\t" !== y && "\n" !== y && "\r" !== y && (this._fragment += y)
                                    }
                                    h++
                                }
                            }

                            function o() {
                                this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1
                            }

                            function c(e, t) {
                                void 0 === t || t instanceof c || (t = new c(String(t))), this._url = e, o.call(this);
                                var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
                                s.call(this, n, null, t)
                            }
                            var l = !1;
                            try {
                                if ("function" == typeof URL && "object" == typeof URL.prototype && "origin" in URL.prototype) {
                                    var h = new URL("b", "http://a");
                                    h.pathname = "c%20d", l = "http://a/c%20d" === h.href
                                }
                            } catch (e) {}
                            if (!l) {
                                var u = Object.create(null);
                                u.ftp = 21, u.file = 0, u.gopher = 70, u.http = 80, u.https = 443, u.ws = 80, u.wss = 443;
                                var d = Object.create(null);
                                d["%2e"] = ".", d[".%2e"] = "..", d["%2e."] = "..", d["%2e%2e"] = "..";
                                var f, p = /[a-zA-Z]/,
                                    g = /[a-zA-Z0-9\+\-\.]/;
                                c.prototype = {
                                    toString: function() {
                                        return this.href
                                    },
                                    get href() {
                                        if (this._isInvalid) return this._url;
                                        var e = "";
                                        return "" === this._username && null === this._password || (e = this._username + (null !== this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment
                                    },
                                    set href(e) {
                                        o.call(this), s.call(this, e)
                                    },
                                    get protocol() {
                                        return this._scheme + ":"
                                    },
                                    set protocol(e) {
                                        this._isInvalid || s.call(this, e + ":", "scheme start")
                                    },
                                    get host() {
                                        return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
                                    },
                                    set host(e) {
                                        !this._isInvalid && this._isRelative && s.call(this, e, "host")
                                    },
                                    get hostname() {
                                        return this._host
                                    },
                                    set hostname(e) {
                                        !this._isInvalid && this._isRelative && s.call(this, e, "hostname")
                                    },
                                    get port() {
                                        return this._port
                                    },
                                    set port(e) {
                                        !this._isInvalid && this._isRelative && s.call(this, e, "port")
                                    },
                                    get pathname() {
                                        return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
                                    },
                                    set pathname(e) {
                                        !this._isInvalid && this._isRelative && (this._path = [], s.call(this, e, "relative path start"))
                                    },
                                    get search() {
                                        return this._isInvalid || !this._query || "?" === this._query ? "" : this._query
                                    },
                                    set search(e) {
                                        !this._isInvalid && this._isRelative && (this._query = "?", "?" === e[0] && (e = e.slice(1)), s.call(this, e, "query"))
                                    },
                                    get hash() {
                                        return this._isInvalid || !this._fragment || "#" === this._fragment ? "" : this._fragment
                                    },
                                    set hash(e) {
                                        this._isInvalid || (this._fragment = "#", "#" === e[0] && (e = e.slice(1)), s.call(this, e, "fragment"))
                                    },
                                    get origin() {
                                        var e;
                                        if (this._isInvalid || !this._scheme) return "";
                                        switch (this._scheme) {
                                            case "data":
                                            case "file":
                                            case "javascript":
                                            case "mailto":
                                                return "null"
                                        }
                                        return e = this.host, e ? this._scheme + "://" + e : ""
                                    }
                                };
                                var m = t.URL;
                                m && (c.createObjectURL = function(e) {
                                    return m.createObjectURL.apply(m, arguments)
                                }, c.revokeObjectURL = function(e) {
                                    m.revokeObjectURL(e)
                                }), t.URL = c
                            }
                        }()
                }
            }).call(t, n(6))
        }])
    }),
    function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = {};
        t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 30)
    }([function(e, t, n) {
        function i(e) {
            var t = window.devicePixelRatio || 1,
                n = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1,
                i = t / n;
            return {
                sx: i,
                sy: i,
                scaled: 1 !== i
            }
        }

        function r(e, t, n) {
            var i = e.offsetParent;
            if (!i) return void console.error("offsetParent is not set -- cannot scroll");
            for (var r = n || !1, a = e.offsetTop + e.clientTop, s = e.offsetLeft + e.clientLeft; i.clientHeight === i.scrollHeight || r && "hidden" === getComputedStyle(i).overflow;)
                if (i.dataset._scaleY && (a /= i.dataset._scaleY, s /= i.dataset._scaleX), a += i.offsetTop, s += i.offsetLeft, !(i = i.offsetParent)) return;
            t && (void 0 !== t.top && (a += t.top), void 0 !== t.left && (s += t.left, i.scrollLeft = s)), i.scrollTop = a
        }

        function a(e, t) {
            var n = function(n) {
                    r || (r = window.requestAnimationFrame(function() {
                        r = null;
                        var n = e.scrollTop,
                            a = i.lastY;
                        n !== a && (i.down = n > a), i.lastY = n, t(i)
                    }))
                },
                i = {
                    down: !0,
                    lastY: e.scrollTop,
                    _eventHandler: n
                },
                r = null;
            return e.addEventListener("scroll", n, !0), i
        }

        function s(e) {
            for (var t = e.split("&"), n = {}, i = 0, r = t.length; i < r; ++i) {
                var a = t[i].split("="),
                    s = a[0].toLowerCase(),
                    o = a.length > 1 ? a[1] : null;
                n[decodeURIComponent(s)] = decodeURIComponent(o)
            }
            return n
        }

        function o(e, t) {
            var n = 0,
                i = e.length - 1;
            if (0 === e.length || !t(e[i])) return e.length;
            if (t(e[n])) return n;
            for (; n < i;) {
                var r = n + i >> 1;
                t(e[r]) ? i = r : n = r + 1
            }
            return n
        }

        function c(e) {
            if (Math.floor(e) === e) return [e, 1];
            var t = 1 / e;
            if (t > 8) return [1, 8];
            if (Math.floor(t) === t) return [1, t];
            for (var n = e > 1 ? t : e, i = 0, r = 1, a = 1, s = 1;;) {
                var o = i + a,
                    c = r + s;
                if (c > 8) break;
                n <= o / c ? (a = o, s = c) : (i = o, r = c)
            }
            return n - i / r < a / s - n ? n === e ? [i, r] : [r, i] : n === e ? [a, s] : [s, a]
        }

        function l(e, t) {
            var n = e % t;
            return 0 === n ? e : Math.round(e - n + t)
        }

        function h(e, t, n) {
            function i(e) {
                var t = e.div;
                return t.offsetTop + t.clientTop + t.clientHeight > f
            }
            for (var r, a, s, c, l, h, u, d, f = e.scrollTop, p = f + e.clientHeight, g = e.scrollLeft, m = g + e.clientWidth, v = [], b = 0 === t.length ? 0 : o(t, i), w = b, y = t.length; w < y && (r = t[w], a = r.div, s = a.offsetTop + a.clientTop, c = a.clientHeight, !(s > p)); w++) u = a.offsetLeft + a.clientLeft, d = a.clientWidth, u + d < g || u > m || (l = Math.max(0, f - s) + Math.max(0, s + c - p), h = 100 * (c - l) / c | 0, v.push({
                id: r.id,
                x: u,
                y: s,
                view: r,
                percent: h
            }));
            var A = v[0],
                S = v[v.length - 1];
            return n && v.sort(function(e, t) {
                var n = e.percent - t.percent;
                return Math.abs(n) > .001 ? -n : e.id - t.id
            }), {
                first: A,
                last: S,
                views: v
            }
        }

        function u(e) {
            e.preventDefault()
        }

        function d(e, t) {
            void 0 === t && (t = "document.pdf");
            var n = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,
                i = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
                r = n.exec(e),
                a = i.exec(r[1]) || i.exec(r[2]) || i.exec(r[3]);
            if (a && (a = a[0], -1 !== a.indexOf("%"))) try {
                a = i.exec(decodeURIComponent(a))[0]
            } catch (e) {}
            return a || t
        }

        function f(e) {
            var t = Math.sqrt(e.deltaX * e.deltaX + e.deltaY * e.deltaY),
                n = Math.atan2(e.deltaY, e.deltaX); - .25 * Math.PI < n && n < .75 * Math.PI && (t = -t);
            return 0 === e.deltaMode ? t /= 900 : 1 === e.deltaMode && (t /= 30), t
        }
        var p = n(1),
            g = {
                CANVAS: "canvas",
                SVG: "svg"
            },
            m = document.mozL10n || document.webL10n,
            v = p.PDFJS;
        v.disableFullscreen = void 0 !== v.disableFullscreen && v.disableFullscreen, v.useOnlyCssZoom = void 0 !== v.useOnlyCssZoom && v.useOnlyCssZoom, v.maxCanvasPixels = void 0 === v.maxCanvasPixels ? 16777216 : v.maxCanvasPixels, v.disableHistory = void 0 !== v.disableHistory && v.disableHistory, v.disableTextLayer = void 0 !== v.disableTextLayer && v.disableTextLayer, v.ignoreCurrentPositionOnZoom = void 0 !== v.ignoreCurrentPositionOnZoom && v.ignoreCurrentPositionOnZoom, v.locale = void 0 === v.locale ? navigator.language : v.locale;
        var b = new Promise(function(e) {
                window.requestAnimationFrame(e)
            }),
            w = new Promise(function(e, t) {
                return m ? "loading" !== m.getReadyState() ? void e() : void window.addEventListener("localized", function(t) {
                    e()
                }) : void e()
            }),
            y = function() {
                function e() {
                    this._listeners = Object.create(null)
                }
                return e.prototype = {
                    on: function(e, t) {
                        var n = this._listeners[e];
                        n || (n = [], this._listeners[e] = n), n.push(t)
                    },
                    off: function(e, t) {
                        var n, i = this._listeners[e];
                        !i || (n = i.indexOf(t)) < 0 || i.splice(n, 1)
                    },
                    dispatch: function(e) {
                        var t = this._listeners[e];
                        if (t && 0 !== t.length) {
                            var n = Array.prototype.slice.call(arguments, 1);
                            t.slice(0).forEach(function(e) {
                                e.apply(null, n)
                            })
                        }
                    }
                }, e
            }(),
            A = function() {
                function e(e, t, n) {
                    return Math.min(Math.max(e, t), n)
                }

                function t(e, t) {
                    this.visible = !0, this.div = document.querySelector(e + " .progress"), this.bar = this.div.parentNode, this.height = t.height || 100, this.width = t.width || 100, this.units = t.units || "%", this.div.style.height = this.height + this.units, this.percent = 0
                }
                return t.prototype = {
                    updateBar: function() {
                        if (this._indeterminate) return this.div.classList.add("indeterminate"), void(this.div.style.width = this.width + this.units);
                        this.div.classList.remove("indeterminate");
                        var e = this.width * this._percent / 100;
                        this.div.style.width = e + this.units
                    },
                    get percent() {
                        return this._percent
                    },
                    set percent(t) {
                        this._indeterminate = isNaN(t), this._percent = e(t, 0, 100), this.updateBar()
                    },
                    setWidth: function(e) {
                        if (e) {
                            var t = e.parentNode,
                                n = t.offsetWidth - e.offsetWidth;
                            n > 0 && this.bar.setAttribute("style", "width: calc(100% - " + n + "px);")
                        }
                    },
                    hide: function() {
                        this.visible && (this.visible = !1, this.bar.classList.add("hidden"), document.body.classList.remove("loadingInProgress"))
                    },
                    show: function() {
                        this.visible || (this.visible = !0, document.body.classList.add("loadingInProgress"), this.bar.classList.remove("hidden"))
                    }
                }, t
            }();
        t.CSS_UNITS = 96 / 72, t.DEFAULT_SCALE_VALUE = "auto", t.DEFAULT_SCALE = 1, t.MIN_SCALE = .25, t.MAX_SCALE = 10, t.UNKNOWN_SCALE = 0, t.MAX_AUTO_SCALE = 1.25, t.SCROLLBAR_PADDING = 40, t.VERTICAL_PADDING = 5, t.RendererType = g, t.mozL10n = m, t.EventBus = y, t.ProgressBar = A, t.getPDFFileNameFromURL = d, t.noContextMenuHandler = u, t.parseQueryString = s, t.getVisibleElements = h, t.roundToDivide = l, t.approximateFraction = c, t.getOutputScale = i, t.scrollIntoView = r, t.watchScroll = a, t.binarySearchFirstItem = o, t.normalizeWheelEventDelta = f, t.animationStarted = b, t.localized = w
    }, function(e, t, n) {
        var i;
        if ("undefined" == typeof __pdfjsdev_webpack__)
            if ("undefined" != typeof window && window["pdfjs-dist/build/pdf"]) i = window["pdfjs-dist/build/pdf"];
            else {
                if ("function" != typeof require) throw new Error("Neither `require` nor `window` found");
                i = require("../build/pdf.js")
            } e.exports = i
    }, function(e, t, n) {
        function i(e) {
            e.on("documentload", function() {
                var e = document.createEvent("CustomEvent");
                e.initCustomEvent("documentload", !0, !0, {}), window.dispatchEvent(e)
            }), e.on("pagerendered", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("pagerendered", !0, !0, {
                    pageNumber: e.pageNumber,
                    cssTransform: e.cssTransform
                }), e.source.div.dispatchEvent(t)
            }), e.on("textlayerrendered", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("textlayerrendered", !0, !0, {
                    pageNumber: e.pageNumber
                }), e.source.textLayerDiv.dispatchEvent(t)
            }), e.on("pagechange", function(e) {
                var t = document.createEvent("UIEvents");
                t.initUIEvent("pagechange", !0, !0, window, 0), t.pageNumber = e.pageNumber, e.source.container.dispatchEvent(t)
            }), e.on("pagesinit", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("pagesinit", !0, !0, null), e.source.container.dispatchEvent(t)
            }), e.on("pagesloaded", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("pagesloaded", !0, !0, {
                    pagesCount: e.pagesCount
                }), e.source.container.dispatchEvent(t)
            }), e.on("scalechange", function(e) {
                var t = document.createEvent("UIEvents");
                t.initUIEvent("scalechange", !0, !0, window, 0), t.scale = e.scale, t.presetValue = e.presetValue, e.source.container.dispatchEvent(t)
            }), e.on("updateviewarea", function(e) {
                var t = document.createEvent("UIEvents");
                t.initUIEvent("updateviewarea", !0, !0, window, 0), t.location = e.location, e.source.container.dispatchEvent(t)
            }), e.on("find", function(e) {
                if (e.source !== window) {
                    var t = document.createEvent("CustomEvent");
                    t.initCustomEvent("find" + e.type, !0, !0, {
                        query: e.query,
                        phraseSearch: e.phraseSearch,
                        caseSensitive: e.caseSensitive,
                        highlightAll: e.highlightAll,
                        findPrevious: e.findPrevious
                    }), window.dispatchEvent(t)
                }
            }), e.on("attachmentsloaded", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("attachmentsloaded", !0, !0, {
                    attachmentsCount: e.attachmentsCount
                }), e.source.container.dispatchEvent(t)
            }), e.on("sidebarviewchanged", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("sidebarviewchanged", !0, !0, {
                    view: e.view
                }), e.source.outerContainer.dispatchEvent(t)
            }), e.on("pagemode", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("pagemode", !0, !0, {
                    mode: e.mode
                }), e.source.pdfViewer.container.dispatchEvent(t)
            }), e.on("namedaction", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("namedaction", !0, !0, {
                    action: e.action
                }), e.source.pdfViewer.container.dispatchEvent(t)
            }), e.on("presentationmodechanged", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("presentationmodechanged", !0, !0, {
                    active: e.active,
                    switchInProgress: e.switchInProgress
                }), window.dispatchEvent(t)
            }), e.on("outlineloaded", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("outlineloaded", !0, !0, {
                    outlineCount: e.outlineCount
                }), e.source.container.dispatchEvent(t)
            })
        }

        function r() {
            return o || (o = new s, i(o), o)
        }
        var a = n(0),
            s = a.EventBus,
            o = null;
        t.attachDOMEventsToEventBus = i, t.getGlobalEventBus = r
    }, function(e, t, n) {
        var i = {
                INITIAL: 0,
                RUNNING: 1,
                PAUSED: 2,
                FINISHED: 3
            },
            r = function() {
                function e() {
                    this.pdfViewer = null, this.pdfThumbnailViewer = null, this.onIdle = null, this.highestPriorityPage = null, this.idleTimeout = null, this.printing = !1, this.isThumbnailViewEnabled = !1
                }
                return e.prototype = {
                    setViewer: function(e) {
                        this.pdfViewer = e
                    },
                    setThumbnailViewer: function(e) {
                        this.pdfThumbnailViewer = e
                    },
                    isHighestPriority: function(e) {
                        return this.highestPriorityPage === e.renderingId
                    },
                    renderHighestPriority: function(e) {
                        this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), this.pdfViewer.forceRendering(e) || this.pdfThumbnailViewer && this.isThumbnailViewEnabled && this.pdfThumbnailViewer.forceRendering() || this.printing || this.onIdle && (this.idleTimeout = setTimeout(this.onIdle.bind(this), 3e4))
                    },
                    getHighestPriority: function(e, t, n) {
                        var i = e.views,
                            r = i.length;
                        if (0 === r) return !1;
                        for (var a = 0; a < r; ++a) {
                            var s = i[a].view;
                            if (!this.isViewFinished(s)) return s
                        }
                        if (n) {
                            var o = e.last.id;
                            if (t[o] && !this.isViewFinished(t[o])) return t[o]
                        } else {
                            var c = e.first.id - 2;
                            if (t[c] && !this.isViewFinished(t[c])) return t[c]
                        }
                        return null
                    },
                    isViewFinished: function(e) {
                        return e.renderingState === i.FINISHED
                    },
                    renderView: function(e) {
                        switch (e.renderingState) {
                            case i.FINISHED:
                                return !1;
                            case i.PAUSED:
                                this.highestPriorityPage = e.renderingId, e.resume();
                                break;
                            case i.RUNNING:
                                this.highestPriorityPage = e.renderingId;
                                break;
                            case i.INITIAL:
                                this.highestPriorityPage = e.renderingId;
                                var t = function() {
                                    this.renderHighestPriority()
                                }.bind(this);
                                e.draw().then(t, t)
                        }
                        return !0
                    }
                }, e
            }();
        t.RenderingStates = i, t.PDFRenderingQueue = r
    }, function(e, t, n) {
        var i = {
            overlays: {},
            active: null,
            register: function(e, t, n, i) {
                return new Promise(function(r) {
                    var a;
                    if (!(e && t && (a = t.parentNode))) throw new Error("Not enough parameters.");
                    if (this.overlays[e]) throw new Error("The overlay is already registered.");
                    this.overlays[e] = {
                        element: t,
                        container: a,
                        callerCloseMethod: n || null,
                        canForceClose: i || !1
                    }, r()
                }.bind(this))
            },
            unregister: function(e) {
                return new Promise(function(t) {
                    if (!this.overlays[e]) throw new Error("The overlay does not exist.");
                    if (this.active === e) throw new Error("The overlay cannot be removed while it is active.");
                    delete this.overlays[e], t()
                }.bind(this))
            },
            open: function(e) {
                return new Promise(function(t) {
                    if (!this.overlays[e]) throw new Error("The overlay does not exist.");
                    if (this.active) {
                        if (!this.overlays[e].canForceClose) throw this.active === e ? new Error("The overlay is already active.") : new Error("Another overlay is currently active.");
                        this._closeThroughCaller()
                    }
                    this.active = e, this.overlays[this.active].element.classList.remove("hidden"), this.overlays[this.active].container.classList.remove("hidden"), window.addEventListener("keydown", this._keyDown), t()
                }.bind(this))
            },
            close: function(e) {
                return new Promise(function(t) {
                    if (!this.overlays[e]) throw new Error("The overlay does not exist.");
                    if (!this.active) throw new Error("The overlay is currently not active.");
                    if (this.active !== e) throw new Error("Another overlay is currently active.");
                    this.overlays[this.active].container.classList.add("hidden"), this.overlays[this.active].element.classList.add("hidden"), this.active = null, window.removeEventListener("keydown", this._keyDown), t()
                }.bind(this))
            },
            _keyDown: function(e) {
                var t = i;
                t.active && 27 === e.keyCode && (t._closeThroughCaller(), e.preventDefault())
            },
            _closeThroughCaller: function() {
                this.overlays[this.active].callerCloseMethod && this.overlays[this.active].callerCloseMethod(), this.active && this.close(this.active)
            }
        };
        t.OverlayManager = i
    }, function(e, t, n) {
        function i(e) {
            return o.test(e)
        }
        var r = n(0),
            a = n(2),
            s = r.parseQueryString,
            o = /^\d+$/,
            c = function() {
                function e(e) {
                    e = e || {}, this.eventBus = e.eventBus || a.getGlobalEventBus(), this.baseUrl = null, this.pdfDocument = null, this.pdfViewer = null, this.pdfHistory = null, this._pagesRefCache = null
                }

                function t(e) {
                    if (!(e instanceof Array)) return !1;
                    var t = e.length,
                        n = !0;
                    if (t < 2) return !1;
                    var i = e[0];
                    if (!("object" == typeof i && "number" == typeof i.num && (0 | i.num) === i.num && "number" == typeof i.gen && (0 | i.gen) === i.gen || "number" == typeof i && (0 | i) === i && i >= 0)) return !1;
                    var r = e[1];
                    if ("object" != typeof r || "string" != typeof r.name) return !1;
                    switch (r.name) {
                        case "XYZ":
                            if (5 !== t) return !1;
                            break;
                        case "Fit":
                        case "FitB":
                            return 2 === t;
                        case "FitH":
                        case "FitBH":
                        case "FitV":
                        case "FitBV":
                            if (3 !== t) return !1;
                            break;
                        case "FitR":
                            if (6 !== t) return !1;
                            n = !1;
                            break;
                        default:
                            return !1
                    }
                    for (var a = 2; a < t; a++) {
                        var s = e[a];
                        if (!("number" == typeof s || n && null === s)) return !1
                    }
                    return !0
                }
                return e.prototype = {
                    setDocument: function(e, t) {
                        this.baseUrl = t, this.pdfDocument = e, this._pagesRefCache = Object.create(null)
                    },
                    setViewer: function(e) {
                        this.pdfViewer = e
                    },
                    setHistory: function(e) {
                        this.pdfHistory = e
                    },
                    get pagesCount() {
                        return this.pdfDocument ? this.pdfDocument.numPages : 0
                    },
                    get page() {
                        return this.pdfViewer.currentPageNumber
                    },
                    set page(e) {
                        this.pdfViewer.currentPageNumber = e
                    },
                    navigateTo: function(e) {
                        var t, n = "",
                            i = this,
                            r = function(t) {
                                var a;
                                if (t instanceof Object) a = i._cachedPageNumber(t);
                                else {
                                    if ((0 | t) !== t) return void console.error('PDFLinkService_navigateTo: "' + t + '" is not a valid destination reference.');
                                    a = t + 1
                                }
                                if (a) {
                                    if (a < 1 || a > i.pagesCount) return void console.error('PDFLinkService_navigateTo: "' + a + '" is a non-existent page number.');
                                    i.pdfViewer.scrollPageIntoView({
                                        pageNumber: a,
                                        destArray: e
                                    }), i.pdfHistory && i.pdfHistory.push({
                                        dest: e,
                                        hash: n,
                                        page: a
                                    })
                                } else i.pdfDocument.getPageIndex(t).then(function(e) {
                                    i.cachePageRef(e + 1, t), r(t)
                                }).catch(function() {
                                    console.error('PDFLinkService_navigateTo: "' + t + '" is not a valid page reference.')
                                })
                            };
                        "string" == typeof e ? (n = e, t = this.pdfDocument.getDestination(e)) : t = Promise.resolve(e), t.then(function(t) {
                            if (e = t, !(t instanceof Array)) return void console.error('PDFLinkService_navigateTo: "' + t + '" is not a valid destination array.');
                            r(t[0])
                        })
                    },
                    getDestinationHash: function(e) {
                        if ("string" == typeof e) return this.getAnchorUrl("#" + (i(e) ? "nameddest=" : "") + escape(e));
                        if (e instanceof Array) {
                            var t = JSON.stringify(e);
                            return this.getAnchorUrl("#" + escape(t))
                        }
                        return this.getAnchorUrl("")
                    },
                    getAnchorUrl: function(e) {
                        return (this.baseUrl || "") + e
                    },
                    setHash: function(e) {
                        var n, r;
                        if (e.indexOf("=") >= 0) {
                            var a = s(e);
                            if ("search" in a && this.eventBus.dispatch("findfromurlhash", {
                                    source: this,
                                    query: a.search.replace(/"/g, ""),
                                    phraseSearch: "true" === a.phrase
                                }), "nameddest" in a) return this.pdfHistory && this.pdfHistory.updateNextHashParam(a.nameddest), void this.navigateTo(a.nameddest);
                            if ("page" in a && (n = 0 | a.page || 1), "zoom" in a) {
                                var o = a.zoom.split(","),
                                    c = o[0],
                                    l = parseFloat(c); - 1 === c.indexOf("Fit") ? r = [null, {
                                    name: "XYZ"
                                }, o.length > 1 ? 0 | o[1] : null, o.length > 2 ? 0 | o[2] : null, l ? l / 100 : c] : "Fit" === c || "FitB" === c ? r = [null, {
                                    name: c
                                }] : "FitH" === c || "FitBH" === c || "FitV" === c || "FitBV" === c ? r = [null, {
                                    name: c
                                }, o.length > 1 ? 0 | o[1] : null] : "FitR" === c ? 5 !== o.length ? console.error("PDFLinkService_setHash: Not enough parameters for 'FitR'.") : r = [null, {
                                    name: c
                                }, 0 | o[1], 0 | o[2], 0 | o[3], 0 | o[4]] : console.error("PDFLinkService_setHash: '" + c + "' is not a valid zoom value.")
                            }
                            r ? this.pdfViewer.scrollPageIntoView({
                                pageNumber: n || this.page,
                                destArray: r,
                                allowNegativeOffset: !0
                            }) : n && (this.page = n), "pagemode" in a && this.eventBus.dispatch("pagemode", {
                                source: this,
                                mode: a.pagemode
                            })
                        } else {
                            i(e) && e <= this.pagesCount && (console.warn('PDFLinkService_setHash: specifying a page number directly after the hash symbol (#) is deprecated, please use the "#page=' + e + '" form instead.'), this.page = 0 | e), r = unescape(e);
                            try {
                                r = JSON.parse(r), r instanceof Array || (r = r.toString())
                            } catch (e) {}
                            if ("string" == typeof r || t(r)) return this.pdfHistory && this.pdfHistory.updateNextHashParam(r), void this.navigateTo(r);
                            console.error("PDFLinkService_setHash: '" + unescape(e) + "' is not a valid destination.")
                        }
                    },
                    executeNamedAction: function(e) {
                        switch (e) {
                            case "GoBack":
                                this.pdfHistory && this.pdfHistory.back();
                                break;
                            case "GoForward":
                                this.pdfHistory && this.pdfHistory.forward();
                                break;
                            case "NextPage":
                                this.page < this.pagesCount && this.page++;
                                break;
                            case "PrevPage":
                                this.page > 1 && this.page--;
                                break;
                            case "LastPage":
                                this.page = this.pagesCount;
                                break;
                            case "FirstPage":
                                this.page = 1
                        }
                        this.eventBus.dispatch("namedaction", {
                            source: this,
                            action: e
                        })
                    },
                    onFileAttachmentAnnotation: function(e) {
                        this.eventBus.dispatch("fileattachmentannotation", {
                            source: this,
                            id: e.id,
                            filename: e.filename,
                            content: e.content
                        })
                    },
                    cachePageRef: function(e, t) {
                        var n = t.num + " " + t.gen + " R";
                        this._pagesRefCache[n] = e
                    },
                    _cachedPageNumber: function(e) {
                        var t = e.num + " " + e.gen + " R";
                        return this._pagesRefCache && this._pagesRefCache[t] || null
                    }
                }, e
            }(),
            l = function() {
                function e() {}
                return e.prototype = {
                    get page() {
                        return 0
                    },
                    set page(e) {},
                    navigateTo: function(e) {},
                    getDestinationHash: function(e) {
                        return "#"
                    },
                    getAnchorUrl: function(e) {
                        return "#"
                    },
                    setHash: function(e) {},
                    executeNamedAction: function(e) {},
                    onFileAttachmentAnnotation: function(e) {},
                    cachePageRef: function(e, t) {}
                }, e
            }();
        t.PDFLinkService = c, t.SimpleLinkService = l
    }, function(e, t, n) {
        function i(e) {
            e.imageResourcesPath = "./images/", e.workerSrc = "../build/pdf.worker.js", e.cMapUrl = "../web/cmaps/", e.cMapPacked = !0
        }

        function r(e) {
            return new Promise(function(t, n) {
                var i = We.appConfig,
                    r = document.createElement("script");
                r.src = i.debuggerScriptPath, r.onload = function() {
                    PDFBug.enable(e), PDFBug.init(se, i.mainContainer), t()
                }, r.onerror = function() {
                    n(new Error("Cannot load debugger at " + r.src))
                }, (document.getElementsByTagName("head")[0] || document.body).appendChild(r)
            })
        }

        function a() {
            var e, t = We.appConfig,
                n = document.location.search.substring(1),
                i = ge(n);
            e = "file" in i ? i.file : t.defaultUrl, M(e);
            var a = [],
                s = document.createElement("input");
            s.id = t.openFileInputName, s.className = "fileInput", s.setAttribute("type", "file"), s.oncontextmenu = fe, document.body.appendChild(s), window.File && window.FileReader && window.FileList && window.Blob ? s.value = null : (t.toolbar.openFile.setAttribute("hidden", "true"), t.secondaryToolbar.openFileButton.setAttribute("hidden", "true"));
            var o = se.PDFJS;
            if (We.viewerPrefs.pdfBugEnabled) {
                var c = document.location.hash.substring(1),
                    l = ge(c);
                if ("disableworker" in l && (o.disableWorker = "true" === l.disableworker), "disablerange" in l && (o.disableRange = "true" === l.disablerange), "disablestream" in l && (o.disableStream = "true" === l.disablestream), "disableautofetch" in l && (o.disableAutoFetch = "true" === l.disableautofetch), "disablefontface" in l && (o.disableFontFace = "true" === l.disablefontface), "disablehistory" in l && (o.disableHistory = "true" === l.disablehistory), "webgl" in l && (o.disableWebGL = "true" !== l.webgl), "useonlycsszoom" in l && (o.useOnlyCssZoom = "true" === l.useonlycsszoom), "verbosity" in l && (o.verbosity = 0 | l.verbosity), "ignorecurrentpositiononzoom" in l && (o.ignoreCurrentPositionOnZoom = "true" === l.ignorecurrentpositiononzoom), "locale" in l && (o.locale = l.locale), "textlayer" in l) switch (l.textlayer) {
                    case "off":
                        o.disableTextLayer = !0;
                        break;
                    case "visible":
                    case "shadow":
                    case "hover":
                        t.viewerContainer.classList.add("textLayer-" + l.textlayer)
                }
                if ("pdfbug" in l) {
                    o.pdfBug = !0;
                    var h = l.pdfbug,
                        u = h.split(",");
                    a.push(r(u))
                }
            }
            pe.setLanguage(o.locale), We.supportsPrinting || (t.toolbar.print.classList.add("hidden"), t.secondaryToolbar.printButton.classList.add("hidden")), We.supportsFullscreen || (t.toolbar.presentationModeButton.classList.add("hidden"), t.secondaryToolbar.presentationModeButton.classList.add("hidden")), We.supportsIntegratedFind && t.toolbar.viewFind.classList.add("hidden"), t.sidebar.mainContainer.addEventListener("transitionend", function(e) {
                e.target === this && We.eventBus.dispatch("resize")
            }, !0), t.sidebar.toggleButton.addEventListener("click", function() {
                We.pdfSidebar.toggle()
            }), Promise.all(a).then(function() {
                Xe(e)
            }).catch(function(e) {
                We.error(pe.get("loading_error", null, "An error occurred while opening."), e)
            })
        }

        function s(e) {
            var t = e.pageNumber,
                n = t - 1,
                i = We.pdfViewer.getPageView(n);
            if (t === We.page && We.toolbar.updateLoadingIndicatorState(!1), i) {
                if (We.pdfSidebar.isThumbnailViewVisible) {
                    We.pdfThumbnailViewer.getThumbnail(n).setImage(i)
                }
                se.PDFJS.pdfBug && Stats.enabled && i.stats && Stats.add(t, i.stats), i.error && We.error(pe.get("rendering_error", null, "An error occurred while rendering the page."), i.error)
            }
        }

        function o(e) {}

        function c(e) {
            var t, n = e.mode;
            switch (n) {
                case "thumbs":
                    t = be.THUMBS;
                    break;
                case "bookmarks":
                case "outline":
                    t = be.OUTLINE;
                    break;
                case "attachments":
                    t = be.ATTACHMENTS;
                    break;
                case "none":
                    t = be.NONE;
                    break;
                default:
                    return void console.error('Invalid "pagemode" hash parameter: ' + n)
            }
            We.pdfSidebar.switchView(t, !0)
        }

        function l(e) {
            switch (e.action) {
                case "GoToPage":
                    We.appConfig.toolbar.pageNumber.select();
                    break;
                case "Find":
                    We.supportsIntegratedFind || We.findBar.toggle()
            }
        }

        function h(e) {
            var t = e.active,
                n = e.switchInProgress;
            We.pdfViewer.presentationModeState = n ? ke.CHANGING : t ? ke.FULLSCREEN : ke.NORMAL
        }

        function u(e) {
            We.pdfRenderingQueue.isThumbnailViewEnabled = We.pdfSidebar.isThumbnailViewVisible;
            var t = We.store;
            t && We.isInitialViewSet && t.initializedPromise.then(function() {
                t.set("sidebarView", e.view).catch(function() {})
            })
        }

        function d(e) {
            var t = e.location,
                n = We.store;
            n && n.initializedPromise.then(function() {
                n.setMultiple({
                    exists: !0,
                    page: t.pageNumber,
                    zoom: t.scale,
                    scrollLeft: t.left,
                    scrollTop: t.top
                }).catch(function() {})
            });
            var i = We.pdfLinkService.getAnchorUrl(t.pdfOpenParams);
            We.appConfig.toolbar.viewBookmark.href = i, We.appConfig.secondaryToolbar.viewBookmarkButton.href = i, We.pdfHistory.updateCurrentBookmark(t.pdfOpenParams, t.pageNumber);
            var r = We.pdfViewer.getPageView(We.page - 1),
                a = r.renderingState !== Ee.FINISHED;
            We.toolbar.updateLoadingIndicatorState(a)
        }

        function f() {
            var e = We.pdfViewer.currentScaleValue;
            "auto" === e || "page-fit" === e || "page-width" === e ? We.pdfViewer.currentScaleValue = e : e || (We.pdfViewer.currentScaleValue = ce), We.pdfViewer.update()
        }

        function p(e) {
            if (We.pdfHistory.isHashChangeUnlocked) {
                var t = e.hash;
                if (!t) return;
                We.isInitialViewSet ? We.pdfLinkService.setHash(t) : We.initialBookmark = t
            }
        }

        function g() {
            We.requestPresentationMode()
        }

        function m() {
            var e = We.appConfig.openFileInputName;
            document.getElementById(e).click()
        }

        function v() {
            window.print()
        }

        function b() {
            We.download()
        }

        function w() {
            We.pdfDocument && (We.page = 1)
        }

        function y() {
            We.pdfDocument && (We.page = We.pagesCount)
        }

        function A() {
            We.page++
        }

        function S() {
            We.page--
        }

        function P() {
            We.zoomIn()
        }

        function x() {
            We.zoomOut()
        }

        function C(e) {
            var t = We.pdfViewer;
            t.currentPageLabel = e.value, e.value !== t.currentPageNumber.toString() && e.value !== t.currentPageLabel && We.toolbar.setPageNumber(t.currentPageNumber, t.currentPageLabel)
        }

        function _(e) {
            We.pdfViewer.currentScaleValue = e.value
        }

        function L() {
            We.rotatePages(90)
        }

        function k() {
            We.rotatePages(-90)
        }

        function T() {
            We.pdfDocumentProperties.open()
        }

        function E(e) {
            We.findController.executeCommand("find" + e.type, {
                query: e.query,
                phraseSearch: e.phraseSearch,
                caseSensitive: e.caseSensitive,
                highlightAll: e.highlightAll,
                findPrevious: e.findPrevious
            })
        }

        function I(e) {
            We.findController.executeCommand("find", {
                query: e.query,
                phraseSearch: e.phraseSearch,
                caseSensitive: !1,
                highlightAll: !0,
                findPrevious: !1
            })
        }

        function F(e) {
            We.toolbar.setPageScale(e.presetValue, e.scale), We.pdfViewer.update()
        }

        function R(e) {
            var t = e.pageNumber;
            if (We.toolbar.setPageNumber(t, e.pageLabel || null), We.secondaryToolbar.setPageNumber(t), We.pdfSidebar.isThumbnailViewVisible && We.pdfThumbnailViewer.scrollThumbnailIntoView(t), se.PDFJS.pdfBug && Stats.enabled) {
                var n = We.pdfViewer.getPageView(t - 1);
                n.stats && Stats.add(t, n.stats)
            }
        }

        function N(e) {
            var t = We.pdfViewer;
            if (!t.isInPresentationMode)
                if (e.ctrlKey || e.metaKey) {
                    var n = We.supportedMouseWheelZoomModifierKeys;
                    if (e.ctrlKey && !n.ctrlKey || e.metaKey && !n.metaKey) return;
                    if (e.preventDefault(), Je) return;
                    var i = t.currentScale,
                        r = je(e),
                        a = 3 * r;
                    a < 0 ? We.zoomOut(-a) : We.zoomIn(a);
                    var s = t.currentScale;
                    if (i !== s) {
                        var o = s / i - 1,
                            c = t.container.getBoundingClientRect(),
                            l = e.clientX - c.left,
                            h = e.clientY - c.top;
                        t.container.scrollLeft += l * o, t.container.scrollTop += h * o
                    }
                } else Je = !0, clearTimeout(Ye), Ye = setTimeout(function() {
                    Je = !1
                }, 1e3)
        }

        function D(e) {
            if (We.secondaryToolbar.isOpen) {
                var t = We.appConfig;
                (We.pdfViewer.containsElement(e.target) || t.toolbar.container.contains(e.target) && e.target !== t.secondaryToolbar.toggleButton) && We.secondaryToolbar.close()
            }
        }

        function O(e) {
            if (!Ne.active) {
                var t = !1,
                    n = !1,
                    i = (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0),
                    r = We.pdfViewer,
                    a = r && r.isInPresentationMode;
                if (1 === i || 8 === i || 5 === i || 12 === i) switch (e.keyCode) {
                    case 70:
                        We.supportsIntegratedFind || (We.findBar.open(), t = !0);
                        break;
                    case 71:
                        if (!We.supportsIntegratedFind) {
                            var s = We.findController.state;
                            s && We.findController.executeCommand("findagain", {
                                query: s.query,
                                phraseSearch: s.phraseSearch,
                                caseSensitive: s.caseSensitive,
                                highlightAll: s.highlightAll,
                                findPrevious: 5 === i || 12 === i
                            }), t = !0
                        }
                        break;
                    case 61:
                    case 107:
                    case 187:
                    case 171:
                        a || We.zoomIn(), t = !0;
                        break;
                    case 173:
                    case 109:
                    case 189:
                        a || We.zoomOut(), t = !0;
                        break;
                    case 48:
                    case 96:
                        a || (setTimeout(function() {
                            r.currentScaleValue = ce
                        }), t = !1);
                        break;
                    case 38:
                        (a || We.page > 1) && (We.page = 1, t = !0, n = !0);
                        break;
                    case 40:
                        (a || We.page < We.pagesCount) && (We.page = We.pagesCount, t = !0, n = !0)
                }
                if (1 === i || 8 === i) switch (e.keyCode) {
                    case 83:
                        We.download(), t = !0
                }
                if (3 === i || 10 === i) switch (e.keyCode) {
                    case 80:
                        We.requestPresentationMode(), t = !0;
                        break;
                    case 71:
                        We.appConfig.toolbar.pageNumber.select(), t = !0
                }
                if (t) return n && !a && r.focus(), void e.preventDefault();
                var o = document.activeElement || document.querySelector(":focus"),
                    c = o && o.tagName.toUpperCase();
                if ("INPUT" !== c && "TEXTAREA" !== c && "SELECT" !== c || 27 === e.keyCode) {
                    if (0 === i) switch (e.keyCode) {
                        case 38:
                        case 33:
                        case 8:
                            if (!a && "page-fit" !== r.currentScaleValue) break;
                        case 37:
                            if (r.isHorizontalScrollbarEnabled) break;
                        case 75:
                        case 80:
                            We.page > 1 && We.page--, t = !0;
                            break;
                        case 27:
                            We.secondaryToolbar.isOpen && (We.secondaryToolbar.close(), t = !0), !We.supportsIntegratedFind && We.findBar.opened && (We.findBar.close(), t = !0);
                            break;
                        case 40:
                        case 34:
                        case 32:
                            if (!a && "page-fit" !== r.currentScaleValue) break;
                        case 39:
                            if (r.isHorizontalScrollbarEnabled) break;
                        case 74:
                        case 78:
                            We.page < We.pagesCount && We.page++, t = !0;
                            break;
                        case 36:
                            (a || We.page > 1) && (We.page = 1, t = !0, n = !0);
                            break;
                        case 35:
                            (a || We.page < We.pagesCount) && (We.page = We.pagesCount, t = !0, n = !0);
                            break;
                        case 72:
                            a || We.handTool.toggle();
                            break;
                        case 82:
                            We.rotatePages(90)
                    }
                    if (4 === i) switch (e.keyCode) {
                        case 32:
                            if (!a && "page-fit" !== r.currentScaleValue) break;
                            We.page > 1 && We.page--, t = !0;
                            break;
                        case 82:
                            We.rotatePages(-90)
                    }
                    if (t || a || (e.keyCode >= 33 && e.keyCode <= 40 || 32 === e.keyCode && "BUTTON" !== c) && (n = !0), 2 === i) switch (e.keyCode) {
                        case 37:
                            a && (We.pdfHistory.back(), t = !0);
                            break;
                        case 39:
                            a && (We.pdfHistory.forward(), t = !0)
                    }
                    n && !r.containsElement(o) && r.focus(), t && e.preventDefault()
                }
            }
        }
        var M, B = n(0),
            j = n(11),
            U = n(18),
            V = n(8),
            H = n(22),
            z = n(29),
            W = n(24),
            G = n(28),
            X = n(26),
            q = n(14),
            Y = n(21),
            J = n(16),
            Q = n(13),
            K = n(25),
            Z = n(3),
            $ = n(5),
            ee = n(19),
            te = n(4),
            ne = n(15),
            ie = n(7),
            re = n(17),
            ae = n(2),
            se = n(1),
            oe = B.UNKNOWN_SCALE,
            ce = B.DEFAULT_SCALE_VALUE,
            le = B.MIN_SCALE,
            he = B.MAX_SCALE,
            ue = B.ProgressBar,
            de = B.getPDFFileNameFromURL,
            fe = B.noContextMenuHandler,
            pe = B.mozL10n,
            ge = B.parseQueryString,
            me = U.PDFHistory,
            ve = V.Preferences,
            be = H.SidebarView,
            we = H.PDFSidebar,
            ye = z.ViewHistory,
            Ae = W.PDFThumbnailViewer,
            Se = G.Toolbar,
            Pe = X.SecondaryToolbar,
            xe = q.PasswordPrompt,
            Ce = Y.PDFPresentationMode,
            _e = J.PDFDocumentProperties,
            Le = Q.HandTool,
            ke = K.PresentationModeState,
            Te = K.PDFViewer,
            Ee = Z.RenderingStates,
            Ie = Z.PDFRenderingQueue,
            Fe = $.PDFLinkService,
            Re = ee.PDFOutlineViewer,
            Ne = te.OverlayManager,
            De = ne.PDFAttachmentViewer,
            Oe = ie.PDFFindController,
            Me = re.PDFFindBar,
            Be = ae.getGlobalEventBus,
            je = B.normalizeWheelEventDelta,
            Ue = B.animationStarted,
            Ve = B.localized,
            He = B.RendererType,
            ze = {
                updateFindControlState: function(e) {},
                initPassiveLoading: function(e) {},
                fallback: function(e, t) {},
                reportTelemetry: function(e) {},
                createDownloadManager: function() {
                    return new j.DownloadManager
                },
                supportsIntegratedFind: !1,
                supportsDocumentFonts: !0,
                supportsDocumentColors: !0,
                supportedMouseWheelZoomModifierKeys: {
                    ctrlKey: !0,
                    metaKey: !0
                }
            },
            We = {
                initialBookmark: document.location.hash.substring(1),
                initialDestination: null,
                initialized: !1,
                fellback: !1,
                appConfig: null,
                pdfDocument: null,
                pdfLoadingTask: null,
                printService: null,
                pdfViewer: null,
                pdfThumbnailViewer: null,
                pdfRenderingQueue: null,
                pdfPresentationMode: null,
                pdfDocumentProperties: null,
                pdfLinkService: null,
                pdfHistory: null,
                pdfSidebar: null,
                pdfOutlineViewer: null,
                pdfAttachmentViewer: null,
                store: null,
                downloadManager: null,
                toolbar: null,
                secondaryToolbar: null,
                eventBus: null,
                pageRotation: 0,
                isInitialViewSet: !1,
                viewerPrefs: {
                    sidebarViewOnLoad: be.NONE,
                    pdfBugEnabled: !1,
                    showPreviousViewOnLoad: !0,
                    defaultZoomValue: "",
                    disablePageLabels: !1,
                    renderer: "canvas",
                    enhanceTextSelection: !1,
                    renderInteractiveForms: !1,
                    enablePrintAutoRotate: !1
                },
                isViewerEmbedded: window.parent !== window,
                url: "",
                baseUrl: "",
                externalServices: ze,
                initialize: function(e) {
                    var t = this,
                        n = se.PDFJS;
                    return ve.initialize(), this.preferences = ve, i(n), this.appConfig = e, this._readPreferences().then(function() {
                        return t._initializeViewerComponents()
                    }).then(function() {
                        t.bindEvents(), t.bindWindowEvents(), Ve.then(function() {
                            t.eventBus.dispatch("localized")
                        }), t.isViewerEmbedded && !n.isExternalLinkTargetSet() && (n.externalLinkTarget = n.LinkTarget.TOP), t.initialized = !0
                    })
                },
                _readPreferences: function() {
                    var e = this,
                        t = se.PDFJS;
                    return Promise.all([ve.get("enableWebGL").then(function(e) {
                        t.disableWebGL = !e
                    }), ve.get("sidebarViewOnLoad").then(function(t) {
                        e.viewerPrefs.sidebarViewOnLoad = t
                    }), ve.get("pdfBugEnabled").then(function(t) {
                        e.viewerPrefs.pdfBugEnabled = t
                    }), ve.get("showPreviousViewOnLoad").then(function(t) {
                        e.viewerPrefs.showPreviousViewOnLoad = t
                    }), ve.get("defaultZoomValue").then(function(t) {
                        e.viewerPrefs.defaultZoomValue = t
                    }), ve.get("enhanceTextSelection").then(function(t) {
                        e.viewerPrefs.enhanceTextSelection = t
                    }), ve.get("disableTextLayer").then(function(e) {
                        !0 !== t.disableTextLayer && (t.disableTextLayer = e)
                    }), ve.get("disableRange").then(function(e) {
                        !0 !== t.disableRange && (t.disableRange = e)
                    }), ve.get("disableStream").then(function(e) {
                        !0 !== t.disableStream && (t.disableStream = e)
                    }), ve.get("disableAutoFetch").then(function(e) {
                        t.disableAutoFetch = e
                    }), ve.get("disableFontFace").then(function(e) {
                        !0 !== t.disableFontFace && (t.disableFontFace = e)
                    }), ve.get("useOnlyCssZoom").then(function(e) {
                        t.useOnlyCssZoom = e
                    }), ve.get("externalLinkTarget").then(function(e) {
                        t.isExternalLinkTargetSet() || (t.externalLinkTarget = e)
                    }), ve.get("renderer").then(function(t) {
                        e.viewerPrefs.renderer = t
                    }), ve.get("renderInteractiveForms").then(function(t) {
                        e.viewerPrefs.renderInteractiveForms = t
                    }), ve.get("disablePageLabels").then(function(t) {
                        e.viewerPrefs.disablePageLabels = t
                    }), ve.get("enablePrintAutoRotate").then(function(t) {
                        e.viewerPrefs.enablePrintAutoRotate = t
                    })]).catch(function(e) {})
                },
                _initializeViewerComponents: function() {
                    var e = this,
                        t = this.appConfig;
                    return new Promise(function(n, i) {
                        var r = t.eventBus || Be();
                        e.eventBus = r;
                        var a = new Ie;
                        a.onIdle = e.cleanup.bind(e), e.pdfRenderingQueue = a;
                        var s = new Fe({
                            eventBus: r
                        });
                        e.pdfLinkService = s;
                        var o = e.externalServices.createDownloadManager();
                        e.downloadManager = o;
                        var c = t.mainContainer,
                            l = t.viewerContainer;
                        e.pdfViewer = new Te({
                            container: c,
                            viewer: l,
                            eventBus: r,
                            renderingQueue: a,
                            linkService: s,
                            downloadManager: o,
                            renderer: e.viewerPrefs.renderer,
                            enhanceTextSelection: e.viewerPrefs.enhanceTextSelection,
                            renderInteractiveForms: e.viewerPrefs.renderInteractiveForms,
                            enablePrintAutoRotate: e.viewerPrefs.enablePrintAutoRotate
                        }), a.setViewer(e.pdfViewer), s.setViewer(e.pdfViewer);
                        var h = t.sidebar.thumbnailView;
                        e.pdfThumbnailViewer = new Ae({
                            container: h,
                            renderingQueue: a,
                            linkService: s
                        }), a.setThumbnailViewer(e.pdfThumbnailViewer), e.pdfHistory = new me({
                            linkService: s,
                            eventBus: r
                        }), s.setHistory(e.pdfHistory), e.findController = new Oe({
                            pdfViewer: e.pdfViewer
                        }), e.findController.onUpdateResultsCount = function(t) {
                            e.supportsIntegratedFind || e.findBar.updateResultsCount(t)
                        }, e.findController.onUpdateState = function(t, n, i) {
                            e.supportsIntegratedFind ? e.externalServices.updateFindControlState({
                                result: t,
                                findPrevious: n
                            }) : e.findBar.updateUIState(t, n, i)
                        }, e.pdfViewer.setFindController(e.findController);
                        var u = Object.create(t.findBar);
                        u.findController = e.findController, u.eventBus = r, e.findBar = new Me(u), e.overlayManager = Ne, e.handTool = new Le({
                            container: c,
                            eventBus: r
                        }), e.pdfDocumentProperties = new _e(t.documentProperties), e.toolbar = new Se(t.toolbar, c, r), e.secondaryToolbar = new Pe(t.secondaryToolbar, c, r), e.supportsFullscreen && (e.pdfPresentationMode = new Ce({
                            container: c,
                            viewer: l,
                            pdfViewer: e.pdfViewer,
                            eventBus: r,
                            contextMenuItems: t.fullscreen
                        })), e.passwordPrompt = new xe(t.passwordOverlay), e.pdfOutlineViewer = new Re({
                            container: t.sidebar.outlineView,
                            eventBus: r,
                            linkService: s
                        }), e.pdfAttachmentViewer = new De({
                            container: t.sidebar.attachmentsView,
                            eventBus: r,
                            downloadManager: o
                        });
                        var d = Object.create(t.sidebar);
                        d.pdfViewer = e.pdfViewer, d.pdfThumbnailViewer = e.pdfThumbnailViewer, d.pdfOutlineViewer = e.pdfOutlineViewer, d.eventBus = r, e.pdfSidebar = new we(d), e.pdfSidebar.onToggled = e.forceRendering.bind(e), n(void 0)
                    })
                },
                run: function(e) {
                    this.initialize(e).then(a)
                },
                zoomIn: function(e) {
                    var t = this.pdfViewer.currentScale;
                    do {
                        t = (1.1 * t).toFixed(2), t = Math.ceil(10 * t) / 10, t = Math.min(he, t)
                    } while (--e > 0 && t < he);
                    this.pdfViewer.currentScaleValue = t
                },
                zoomOut: function(e) {
                    var t = this.pdfViewer.currentScale;
                    do {
                        t = (t / 1.1).toFixed(2), t = Math.floor(10 * t) / 10, t = Math.max(le, t)
                    } while (--e > 0 && t > le);
                    this.pdfViewer.currentScaleValue = t
                },
                get pagesCount() {
                    return this.pdfDocument ? this.pdfDocument.numPages : 0
                },
                set page(e) {
                    this.pdfViewer.currentPageNumber = e
                },
                get page() {
                    return this.pdfViewer.currentPageNumber
                },
                get printing() {
                    return !!this.printService
                },
                get supportsPrinting() {
                    return Qe.instance.supportsPrinting
                },
                get supportsFullscreen() {
                    var e, t = document.documentElement;
                    return e = !!(t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen), !1 !== document.fullscreenEnabled && !1 !== document.mozFullScreenEnabled && !1 !== document.webkitFullscreenEnabled && !1 !== document.msFullscreenEnabled || (e = !1), e && !0 === se.PDFJS.disableFullscreen && (e = !1), se.shadow(this, "supportsFullscreen", e)
                },
                get supportsIntegratedFind() {
                    return this.externalServices.supportsIntegratedFind
                },
                get supportsDocumentFonts() {
                    return this.externalServices.supportsDocumentFonts
                },
                get supportsDocumentColors() {
                    return this.externalServices.supportsDocumentColors
                },
                get loadingBar() {
                    var e = new ue("#loadingBar", {});
                    return se.shadow(this, "loadingBar", e)
                },
                get supportedMouseWheelZoomModifierKeys() {
                    return this.externalServices.supportedMouseWheelZoomModifierKeys
                },
                initPassiveLoading: function() {
                    throw new Error("Not implemented: initPassiveLoading")
                },
                setTitleUsingUrl: function(e) {
                    this.url = e, this.baseUrl = e.split("#")[0];
                    var t = de(e, "");
                    if (!t) try {
                        t = decodeURIComponent(se.getFilenameFromUrl(e)) || e
                    } catch (n) {
                        t = e
                    }
                    this.setTitle(t)
                },
                setTitle: function(e) {
                    this.isViewerEmbedded || (document.title = e)
                },
                close: function() {
                    if (this.appConfig.errorWrapper.container.setAttribute("hidden", "true"), !this.pdfLoadingTask) return Promise.resolve();
                    var e = this.pdfLoadingTask.destroy();
                    return this.pdfLoadingTask = null, this.pdfDocument && (this.pdfDocument = null, this.pdfThumbnailViewer.setDocument(null), this.pdfViewer.setDocument(null), this.pdfLinkService.setDocument(null, null)), this.store = null, this.isInitialViewSet = !1, this.pdfSidebar.reset(), this.pdfOutlineViewer.reset(), this.pdfAttachmentViewer.reset(), this.findController.reset(), this.findBar.reset(), this.toolbar.reset(), this.secondaryToolbar.reset(), "undefined" != typeof PDFBug && PDFBug.cleanup(), e
                },
                open: function(e, t) {
                    if (arguments.length > 2 || "number" == typeof t) return Promise.reject(new Error("Call of open() with obsolete signature."));
                    if (this.pdfLoadingTask) return this.close().then(function() {
                        return ve.reload(), this.open(e, t)
                    }.bind(this));
                    var n, i = Object.create(null);
                    if ("string" == typeof e ? (this.setTitleUsingUrl(e), i.url = e) : e && "byteLength" in e ? i.data = e : e.url && e.originalUrl && (this.setTitleUsingUrl(e.originalUrl), i.url = e.url), t) {
                        for (var r in t) i[r] = t[r];
                        t.scale && (n = t.scale), t.length && this.pdfDocumentProperties.setFileSize(t.length)
                    }
                    var a = this;
                    a.downloadComplete = !1;
                    var s = se.getDocument(i);
                    return this.pdfLoadingTask = s, s.onPassword = function(e, t) {
                        a.passwordPrompt.setUpdateCallback(e, t), a.passwordPrompt.open()
                    }, s.onProgress = function(e) {
                        a.progress(e.loaded / e.total)
                    }, s.onUnsupportedFeature = this.fallback.bind(this), s.promise.then(function(e) {
                        a.load(e, n)
                    }, function(e) {
                        var t = e && e.message,
                            n = pe.get("loading_error", null, "An error occurred while loading the PDF.");
                        e instanceof se.InvalidPDFException ? n = pe.get("invalid_file_error", null, "Invalid or corrupted PDF file.") : e instanceof se.MissingPDFException ? n = pe.get("missing_file_error", null, "Missing PDF file.") : e instanceof se.UnexpectedResponseException && (n = pe.get("unexpected_response_error", null, "Unexpected server response."));
                        var i = {
                            message: t
                        };
                        throw a.error(n, i), new Error(n)
                    })
                },
                download: function() {
                    function e() {
                        i.downloadUrl(t, n)
                    }
                    var t = this.baseUrl,
                        n = de(this.url),
                        i = this.downloadManager;
                    return i.onerror = function(e) {
                        We.error("PDF failed to download.")
                    }, this.pdfDocument && this.downloadComplete ? void this.pdfDocument.getData().then(function(e) {
                        var r = se.createBlob(e, "application/pdf");
                        i.download(r, t, n)
                    }, e).then(null, e) : void e()
                },
                fallback: function(e) {},
                error: function(e, t) {
                    var n = pe.get("error_version_info", {
                        version: se.version || "?",
                        build: se.build || "?"
                    }, "PDF.js v{{version}} (build: {{build}})") + "\n";
                    t && (n += pe.get("error_message", {
                        message: t.message
                    }, "Message: {{message}}"), t.stack ? n += "\n" + pe.get("error_stack", {
                        stack: t.stack
                    }, "Stack: {{stack}}") : (t.filename && (n += "\n" + pe.get("error_file", {
                        file: t.filename
                    }, "File: {{file}}")), t.lineNumber && (n += "\n" + pe.get("error_line", {
                        line: t.lineNumber
                    }, "Line: {{line}}"))));
                    var i = this.appConfig.errorWrapper,
                        r = i.container;
                    r.removeAttribute("hidden"), i.errorMessage.textContent = e;
                    var a = i.closeButton;
                    a.onclick = function() {
                        r.setAttribute("hidden", "true")
                    };
                    var s = i.errorMoreInfo,
                        o = i.moreInfoButton,
                        c = i.lessInfoButton;
                    o.onclick = function() {
                        s.removeAttribute("hidden"), o.setAttribute("hidden", "true"), c.removeAttribute("hidden"), s.style.height = s.scrollHeight + "px"
                    }, c.onclick = function() {
                        s.setAttribute("hidden", "true"), o.removeAttribute("hidden"), c.setAttribute("hidden", "true")
                    }, o.oncontextmenu = fe, c.oncontextmenu = fe, a.oncontextmenu = fe, o.removeAttribute("hidden"), c.setAttribute("hidden", "true"), s.value = n
                },
                progress: function(e) {
                    var t = Math.round(100 * e);
                    (t > this.loadingBar.percent || isNaN(t)) && (this.loadingBar.percent = t, se.PDFJS.disableAutoFetch && t && (this.disableAutoFetchLoadingBarTimeout && (clearTimeout(this.disableAutoFetchLoadingBarTimeout), this.disableAutoFetchLoadingBarTimeout = null), this.loadingBar.show(), this.disableAutoFetchLoadingBarTimeout = setTimeout(function() {
                        this.loadingBar.hide(), this.disableAutoFetchLoadingBarTimeout = null
                    }.bind(this), 5e3)))
                },
                load: function(e, t) {
                    var n = this;
                    t = t || oe, this.pdfDocument = e, this.pdfDocumentProperties.setDocumentAndUrl(e, this.url);
                    var i = e.getDownloadInfo().then(function() {
                        n.downloadComplete = !0, n.loadingBar.hide()
                    });
                    this.toolbar.setPagesCount(e.numPages, !1), this.secondaryToolbar.setPagesCount(e.numPages);
                    var r, a = this.documentFingerprint = e.fingerprint,
                        s = this.store = new ye(a);
                    r = null, this.pdfLinkService.setDocument(e, r);
                    var o = this.pdfViewer;
                    o.currentScale = t, o.setDocument(e);
                    var c = o.firstPagePromise,
                        l = o.pagesPromise,
                        h = o.onePageRendered;
                    this.pageRotation = 0;
                    var u = this.pdfThumbnailViewer;
                    u.setDocument(e), c.then(function(e) {
                        i.then(function() {
                            n.eventBus.dispatch("documentload", {
                                source: n
                            })
                        }), n.loadingBar.setWidth(n.appConfig.viewerContainer), se.PDFJS.disableHistory || n.isViewerEmbedded || (n.viewerPrefs.showPreviousViewOnLoad || n.pdfHistory.clearHistoryState(), n.pdfHistory.initialize(n.documentFingerprint), n.pdfHistory.initialDestination ? n.initialDestination = n.pdfHistory.initialDestination : n.pdfHistory.initialBookmark && (n.initialBookmark = n.pdfHistory.initialBookmark));
                        var r = {
                            destination: n.initialDestination,
                            bookmark: n.initialBookmark,
                            hash: null
                        };
                        s.initializedPromise.then(function() {
                            var e = null,
                                i = null;
                            if (n.viewerPrefs.showPreviousViewOnLoad && s.get("exists", !1)) {
                                e = "page=" + s.get("page", "1") + "&zoom=" + (n.viewerPrefs.defaultZoomValue || s.get("zoom", ce)) + "," + s.get("scrollLeft", "0") + "," + s.get("scrollTop", "0"), i = s.get("sidebarView", be.NONE)
                            } else n.viewerPrefs.defaultZoomValue && (e = "page=1&zoom=" + n.viewerPrefs.defaultZoomValue);
                            n.setInitialView(e, {
                                scale: t,
                                sidebarView: i
                            }), r.hash = e, n.isViewerEmbedded || n.pdfViewer.focus()
                        }, function(e) {
                            console.error(e), n.setInitialView(null, {
                                scale: t
                            })
                        }), l.then(function() {
                            (r.destination || r.bookmark || r.hash) && (n.hasEqualPageSizes || (n.initialDestination = r.destination, n.initialBookmark = r.bookmark, n.pdfViewer.currentScaleValue = n.pdfViewer.currentScaleValue, n.setInitialView(r.hash)))
                        })
                    }), e.getPageLabels().then(function(t) {
                        if (t && !n.viewerPrefs.disablePageLabels) {
                            var i = 0,
                                r = t.length;
                            if (r !== n.pagesCount) return void console.error("The number of Page Labels does not match the number of pages in the document.");
                            for (; i < r && t[i] === (i + 1).toString();) i++;
                            i !== r && (o.setPageLabels(t), u.setPageLabels(t), n.toolbar.setPagesCount(e.numPages, !0), n.toolbar.setPageNumber(o.currentPageNumber, o.currentPageLabel))
                        }
                    }), l.then(function() {
                        n.supportsPrinting && e.getJavaScript().then(function(e) {
                            e.length && (console.warn("Warning: JavaScript is not supported"), n.fallback(se.UNSUPPORTED_FEATURES.javaScript));
                            for (var t = /\bprint\s*\(/, i = 0, r = e.length; i < r; i++) {
                                var a = e[i];
                                if (a && t.test(a)) return void setTimeout(function() {
                                    window.print()
                                })
                            }
                        })
                    }), Promise.all([h, Ue]).then(function() {
                        e.getOutline().then(function(e) {
                            n.pdfOutlineViewer.render({
                                outline: e
                            })
                        }), e.getAttachments().then(function(e) {
                            n.pdfAttachmentViewer.render({
                                attachments: e
                            })
                        })
                    }), e.getMetadata().then(function(t) {
                        var i = t.info,
                            r = t.metadata;
                        n.documentInfo = i, n.metadata = r, console.log("PDF " + e.fingerprint + " [" + i.PDFFormatVersion + " " + (i.Producer || "-").trim() + " / " + (i.Creator || "-").trim() + "] (PDF.js: " + (se.version || "-") + (se.PDFJS.disableWebGL ? "" : " [WebGL]") + ")");
                        var a;
                        if (r && r.has("dc:title")) {
                            var s = r.get("dc:title");
                            "Untitled" !== s && (a = s)
                        }!a && i && i.Title && (a = i.Title), a && n.setTitle(a + " - " + document.title), i.IsAcroFormPresent && (console.warn("Warning: AcroForm/XFA is not supported"), n.fallback(se.UNSUPPORTED_FEATURES.forms))
                    })
                },
                setInitialView: function(e, t) {
                    var n = t && t.scale,
                        i = t && t.sidebarView;
                    this.isInitialViewSet = !0, this.pdfSidebar.setInitialView(this.viewerPrefs.sidebarViewOnLoad || 0 | i), this.initialDestination ? (this.pdfLinkService.navigateTo(this.initialDestination), this.initialDestination = null) : this.initialBookmark ? (this.pdfLinkService.setHash(this.initialBookmark), this.pdfHistory.push({
                        hash: this.initialBookmark
                    }, !0), this.initialBookmark = null) : e ? this.pdfLinkService.setHash(e) : n && (this.pdfViewer.currentScaleValue = n, this.page = 1), this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel), this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber), this.pdfViewer.currentScaleValue || (this.pdfViewer.currentScaleValue = ce)
                },
                cleanup: function() {
                    this.pdfDocument && (this.pdfViewer.cleanup(), this.pdfThumbnailViewer.cleanup(), this.pdfViewer.renderer !== He.SVG && this.pdfDocument.cleanup())
                },
                forceRendering: function() {
                    this.pdfRenderingQueue.printing = this.printing, this.pdfRenderingQueue.isThumbnailViewEnabled = this.pdfSidebar.isThumbnailViewVisible, this.pdfRenderingQueue.renderHighestPriority()
                },
                beforePrint: function() {
                    if (!this.printService) {
                        if (!this.supportsPrinting) {
                            var e = pe.get("printing_not_supported", null, "Warning: Printing is not fully supported by this browser.");
                            return void this.error(e)
                        }
                        if (!this.pdfViewer.pageViewsReady) {
                            var t = pe.get("printing_not_ready", null, "Warning: The PDF is not fully loaded for printing.");
                            return void window.alert(t)
                        }
                        var n = this.pdfViewer.getPagesOverview(),
                            i = this.appConfig.printContainer,
                            r = Qe.instance.createPrintService(this.pdfDocument, n, i);
                        this.printService = r, this.forceRendering(), r.layout()
                    }
                },
                get hasEqualPageSizes() {
                    for (var e = this.pdfViewer.getPageView(0), t = 1, n = this.pagesCount; t < n; ++t) {
                        var i = this.pdfViewer.getPageView(t);
                        if (i.width !== e.width || i.height !== e.height) return !1
                    }
                    return !0
                },
                afterPrint: function() {
                    this.printService && (this.printService.destroy(), this.printService = null), this.forceRendering()
                },
                rotatePages: function(e) {
                    var t = this.page;
                    this.pageRotation = (this.pageRotation + 360 + e) % 360, this.pdfViewer.pagesRotation = this.pageRotation, this.pdfThumbnailViewer.pagesRotation = this.pageRotation, this.forceRendering(), this.pdfViewer.currentPageNumber = t
                },
                requestPresentationMode: function() {
                    this.pdfPresentationMode && this.pdfPresentationMode.request()
                },
                bindEvents: function() {
                    var e = this.eventBus;
                    e.on("resize", f), e.on("hashchange", p), e.on("beforeprint", this.beforePrint.bind(this)), e.on("afterprint", this.afterPrint.bind(this)), e.on("pagerendered", s), e.on("textlayerrendered", o), e.on("updateviewarea", d), e.on("pagechanging", R), e.on("scalechanging", F), e.on("sidebarviewchanged", u), e.on("pagemode", c), e.on("namedaction", l), e.on("presentationmodechanged", h), e.on("presentationmode", g), e.on("openfile", m), e.on("print", v), e.on("download", b), e.on("firstpage", w), e.on("lastpage", y), e.on("nextpage", A), e.on("previouspage", S), e.on("zoomin", P), e.on("zoomout", x), e.on("pagenumberchanged", C), e.on("scalechanged", _), e.on("rotatecw", L), e.on("rotateccw", k), e.on("documentproperties", T), e.on("find", E), e.on("findfromurlhash", I), e.on("fileinputchange", qe)
                },
                bindWindowEvents: function() {
                    var e = this.eventBus;
                    window.addEventListener("wheel", N), window.addEventListener("click", D), window.addEventListener("keydown", O), window.addEventListener("resize", function() {
                        e.dispatch("resize")
                    }), window.addEventListener("hashchange", function() {
                        e.dispatch("hashchange", {
                            hash: document.location.hash.substring(1)
                        })
                    }), window.addEventListener("beforeprint", function() {
                        e.dispatch("beforeprint")
                    }), window.addEventListener("afterprint", function() {
                        e.dispatch("afterprint")
                    }), window.addEventListener("change", function(t) {
                        var n = t.target.files;
                        n && 0 !== n.length && e.dispatch("fileinputchange", {
                            fileInput: t.target
                        })
                    })
                }
            },
            Ge = ["null", "http://mozilla.github.io", "https://mozilla.github.io"];
        M = function(e) {
            try {
                var t = new URL(window.location.href).origin || "null";
                if (Ge.indexOf(t) >= 0) return;
                if (new URL(e, window.location.href).origin !== t) throw new Error("file origin does not match viewer's")
            } catch (e) {
                var n = e && e.message,
                    i = pe.get("loading_error", null, "An error occurred while loading the PDF."),
                    r = {
                        message: n
                    };
                throw We.error(i, r), e
            }
        };
        var Xe;
        Xe = function(e) {
            if (e && 0 === e.lastIndexOf("file:", 0)) {
                We.setTitleUsingUrl(e);
                var t = new XMLHttpRequest;
                t.onload = function() {
                    We.open(new Uint8Array(t.response))
                };
                try {
                    t.open("GET", e), t.responseType = "arraybuffer", t.send()
                } catch (e) {
                    We.error(pe.get("loading_error", null, "An error occurred while loading the PDF."), e)
                }
            } else e && We.open(e)
        };
        var qe;
        qe = function(e) {
            var t = e.fileInput.files[0];
            if (!se.PDFJS.disableCreateObjectURL && "undefined" != typeof URL && URL.createObjectURL) We.open(URL.createObjectURL(t));
            else {
                var n = new FileReader;
                n.onload = function(e) {
                    var t = e.target.result,
                        n = new Uint8Array(t);
                    We.open(n)
                }, n.readAsArrayBuffer(t)
            }
            We.setTitleUsingUrl(t.name);
            var i = We.appConfig;
            i.toolbar.viewBookmark.setAttribute("hidden", "true"), i.secondaryToolbar.viewBookmarkButton.setAttribute("hidden", "true"), i.toolbar.download.setAttribute("hidden", "true"), i.secondaryToolbar.downloadButton.setAttribute("hidden", "true")
        };
        var Ye, Je = !1;
        Ve.then(function() {
            document.getElementsByTagName("html")[0].dir = pe.getDirection()
        });
        var Qe = {
            instance: {
                supportsPrinting: !1,
                createPrintService: function() {
                    throw new Error("Not implemented: createPrintService")
                }
            }
        };
        t.PDFViewerApplication = We, t.DefaultExernalServices = ze, t.PDFPrintServiceFactory = Qe
    }, function(e, t, n) {
        var i = n(0),
            r = i.scrollIntoView,
            a = {
                FIND_FOUND: 0,
                FIND_NOTFOUND: 1,
                FIND_WRAPPED: 2,
                FIND_PENDING: 3
            },
            s = {
                "‘": "'",
                "’": "'",
                "‚": "'",
                "‛": "'",
                "“": '"',
                "”": '"',
                "„": '"',
                "‟": '"',
                "¼": "1/4",
                "½": "1/2",
                "¾": "3/4"
            },
            o = function() {
                function e(e) {
                    this.pdfViewer = e.pdfViewer || null, this.onUpdateResultsCount = null, this.onUpdateState = null, this.reset();
                    var t = Object.keys(s).join("");
                    this.normalizationRegex = new RegExp("[" + t + "]", "g")
                }
                return e.prototype = {
                    reset: function() {
                        this.startedTextExtraction = !1, this.extractTextPromises = [], this.pendingFindMatches = Object.create(null), this.active = !1, this.pageContents = [], this.pageMatches = [], this.pageMatchesLength = null, this.matchCount = 0, this.selected = {
                            pageIdx: -1,
                            matchIdx: -1
                        }, this.offset = {
                            pageIdx: null,
                            matchIdx: null
                        }, this.pagesToSearch = null, this.resumePageIdx = null, this.state = null, this.dirtyMatch = !1, this.findTimeout = null, this.firstPagePromise = new Promise(function(e) {
                            this.resolveFirstPage = e
                        }.bind(this))
                    },
                    normalize: function(e) {
                        return e.replace(this.normalizationRegex, function(e) {
                            return s[e]
                        })
                    },
                    _prepareMatches: function(e, t, n) {
                        var i, r;
                        for (e.sort(function(e, t) {
                                return e.match === t.match ? e.matchLength - t.matchLength : e.match - t.match
                            }), i = 0, r = e.length; i < r; i++)(function(e, t) {
                            var n, i, r;
                            if (n = e[t], r = e[t + 1], t < e.length - 1 && n.match === r.match) return n.skipped = !0, !0;
                            for (var a = t - 1; a >= 0; a--)
                                if (i = e[a], !i.skipped) {
                                    if (i.match + i.matchLength < n.match) break;
                                    if (i.match + i.matchLength >= n.match + n.matchLength) return n.skipped = !0, !0
                                } return !1
                        })(e, i) || (t.push(e[i].match), n.push(e[i].matchLength))
                    },
                    calcFindPhraseMatch: function(e, t, n) {
                        for (var i = [], r = e.length, a = -r;;) {
                            if (-1 === (a = n.indexOf(e, a + r))) break;
                            i.push(a)
                        }
                        this.pageMatches[t] = i
                    },
                    calcFindWordMatch: function(e, t, n) {
                        for (var i, r, a, s = [], o = e.match(/\S+/g), c = 0, l = o.length; c < l; c++)
                            for (i = o[c], r = i.length, a = -r;;) {
                                if (-1 === (a = n.indexOf(i, a + r))) break;
                                s.push({
                                    match: a,
                                    matchLength: r,
                                    skipped: !1
                                })
                            }
                        this.pageMatchesLength || (this.pageMatchesLength = []), this.pageMatchesLength[t] = [], this.pageMatches[t] = [], this._prepareMatches(s, this.pageMatches[t], this.pageMatchesLength[t])
                    },
                    calcFindMatch: function(e) {
                        var t = this.normalize(this.pageContents[e]),
                            n = this.normalize(this.state.query),
                            i = this.state.caseSensitive,
                            r = this.state.phraseSearch;
                        0 !== n.length && (i || (t = t.toLowerCase(), n = n.toLowerCase()), r ? this.calcFindPhraseMatch(n, e, t) : this.calcFindWordMatch(n, e, t), this.updatePage(e), this.resumePageIdx === e && (this.resumePageIdx = null, this.nextPageMatch()), this.pageMatches[e].length > 0 && (this.matchCount += this.pageMatches[e].length, this.updateUIResultsCount()))
                    },
                    extractText: function() {
                        function e(n) {
                            r.pdfViewer.getPageTextContent(n).then(function(i) {
                                for (var a = i.items, s = [], o = 0, c = a.length; o < c; o++) s.push(a[o].str);
                                r.pageContents.push(s.join("")), t[n](n), n + 1 < r.pdfViewer.pagesCount && e(n + 1)
                            })
                        }
                        if (!this.startedTextExtraction) {
                            this.startedTextExtraction = !0, this.pageContents = [];
                            for (var t = [], n = this.pdfViewer.pagesCount, i = 0; i < n; i++) this.extractTextPromises.push(new Promise(function(e) {
                                t.push(e)
                            }));
                            var r = this;
                            e(0)
                        }
                    },
                    executeCommand: function(e, t) {
                        null !== this.state && "findagain" === e || (this.dirtyMatch = !0), this.state = t, this.updateUIState(a.FIND_PENDING), this.firstPagePromise.then(function() {
                            this.extractText(), clearTimeout(this.findTimeout), "find" === e ? this.findTimeout = setTimeout(this.nextMatch.bind(this), 250) : this.nextMatch()
                        }.bind(this))
                    },
                    updatePage: function(e) {
                        this.selected.pageIdx === e && (this.pdfViewer.currentPageNumber = e + 1);
                        var t = this.pdfViewer.getPageView(e);
                        t.textLayer && t.textLayer.updateMatches()
                    },
                    nextMatch: function() {
                        var e = this.state.findPrevious,
                            t = this.pdfViewer.currentPageNumber - 1,
                            n = this.pdfViewer.pagesCount;
                        if (this.active = !0, this.dirtyMatch) {
                            this.dirtyMatch = !1, this.selected.pageIdx = this.selected.matchIdx = -1, this.offset.pageIdx = t, this.offset.matchIdx = null, this.hadMatch = !1, this.resumePageIdx = null, this.pageMatches = [], this.matchCount = 0, this.pageMatchesLength = null;
                            for (var i = this, r = 0; r < n; r++) this.updatePage(r), r in this.pendingFindMatches || (this.pendingFindMatches[r] = !0, this.extractTextPromises[r].then(function(e) {
                                delete i.pendingFindMatches[e], i.calcFindMatch(e)
                            }))
                        }
                        if ("" === this.state.query) return void this.updateUIState(a.FIND_FOUND);
                        if (!this.resumePageIdx) {
                            var s = this.offset;
                            if (this.pagesToSearch = n, null !== s.matchIdx) {
                                var o = this.pageMatches[s.pageIdx].length;
                                if (!e && s.matchIdx + 1 < o || e && s.matchIdx > 0) return this.hadMatch = !0, s.matchIdx = e ? s.matchIdx - 1 : s.matchIdx + 1, void this.updateMatch(!0);
                                this.advanceOffsetPage(e)
                            }
                            this.nextPageMatch()
                        }
                    },
                    matchesReady: function(e) {
                        var t = this.offset,
                            n = e.length,
                            i = this.state.findPrevious;
                        return n ? (this.hadMatch = !0, t.matchIdx = i ? n - 1 : 0, this.updateMatch(!0), !0) : (this.advanceOffsetPage(i), !!(t.wrapped && (t.matchIdx = null, this.pagesToSearch < 0)) && (this.updateMatch(!1), !0))
                    },
                    updateMatchPosition: function(e, t, n, i) {
                        if (this.selected.matchIdx === t && this.selected.pageIdx === e) {
                            var a = {
                                top: -50,
                                left: -400
                            };
                            r(n[i], a, !0)
                        }
                    },
                    nextPageMatch: function() {
                        null !== this.resumePageIdx && console.error("There can only be one pending page.");
                        do {
                            var e = this.offset.pageIdx,
                                t = this.pageMatches[e];
                            if (!t) {
                                this.resumePageIdx = e;
                                break
                            }
                        } while (!this.matchesReady(t))
                    },
                    advanceOffsetPage: function(e) {
                        var t = this.offset,
                            n = this.extractTextPromises.length;
                        t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1, t.matchIdx = null, this.pagesToSearch--, (t.pageIdx >= n || t.pageIdx < 0) && (t.pageIdx = e ? n - 1 : 0, t.wrapped = !0)
                    },
                    updateMatch: function(e) {
                        var t = a.FIND_NOTFOUND,
                            n = this.offset.wrapped;
                        if (this.offset.wrapped = !1, e) {
                            var i = this.selected.pageIdx;
                            this.selected.pageIdx = this.offset.pageIdx, this.selected.matchIdx = this.offset.matchIdx, t = n ? a.FIND_WRAPPED : a.FIND_FOUND, -1 !== i && i !== this.selected.pageIdx && this.updatePage(i)
                        }
                        this.updateUIState(t, this.state.findPrevious), -1 !== this.selected.pageIdx && this.updatePage(this.selected.pageIdx)
                    },
                    updateUIResultsCount: function() {
                        this.onUpdateResultsCount && this.onUpdateResultsCount(this.matchCount)
                    },
                    updateUIState: function(e, t) {
                        this.onUpdateState && this.onUpdateState(e, t, this.matchCount)
                    }
                }, e
            }();
        t.FindStates = a, t.PDFFindController = o
    }, function(e, t, n) {
        function i() {
            return a || (a = Promise.resolve({
                showPreviousViewOnLoad: !0,
                defaultZoomValue: "",
                sidebarViewOnLoad: 0,
                enableHandToolOnLoad: !1,
                enableWebGL: !1,
                pdfBugEnabled: !1,
                disableRange: !1,
                disableStream: !1,
                disableAutoFetch: !1,
                disableFontFace: !1,
                disableTextLayer: !1,
                useOnlyCssZoom: !1,
                externalLinkTarget: 0,
                enhanceTextSelection: !1,
                renderer: "canvas",
                renderInteractiveForms: !1,
                enablePrintAutoRotate: !1,
                disablePageLabels: !1
            })), a
        }

        function r(e) {
            var t = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }
        var a = null,
            s = {
                prefs: null,
                isInitializedPromiseResolved: !1,
                initializedPromise: null,
                initialize: function() {
                    return this.initializedPromise = i().then(function(e) {
                        return Object.defineProperty(this, "defaults", {
                            value: Object.freeze(e),
                            writable: !1,
                            enumerable: !0,
                            configurable: !1
                        }), this.prefs = r(e), this._readFromStorage(e)
                    }.bind(this)).then(function(e) {
                        this.isInitializedPromiseResolved = !0, e && (this.prefs = e)
                    }.bind(this))
                },
                _writeToStorage: function(e) {
                    return Promise.resolve()
                },
                _readFromStorage: function(e) {
                    return Promise.resolve()
                },
                reset: function() {
                    return this.initializedPromise.then(function() {
                        return this.prefs = r(this.defaults), this._writeToStorage(this.defaults)
                    }.bind(this))
                },
                reload: function() {
                    return this.initializedPromise.then(function() {
                        this._readFromStorage(this.defaults).then(function(e) {
                            e && (this.prefs = e)
                        }.bind(this))
                    }.bind(this))
                },
                set: function(e, t) {
                    return this.initializedPromise.then(function() {
                        if (void 0 === this.defaults[e]) throw new Error("preferencesSet: '" + e + "' is undefined.");
                        if (void 0 === t) throw new Error("preferencesSet: no value is specified.");
                        var n = typeof t,
                            i = typeof this.defaults[e];
                        if (n !== i) {
                            if ("number" !== n || "string" !== i) throw new Error("Preferences_set: '" + t + "' is a \"" + n + '", expected "' + i + '".');
                            t = t.toString()
                        } else if ("number" === n && (0 | t) !== t) throw new Error("Preferences_set: '" + t + '\' must be an "integer".');
                        return this.prefs[e] = t, this._writeToStorage(this.prefs)
                    }.bind(this))
                },
                get: function(e) {
                    return this.initializedPromise.then(function() {
                        var t = this.defaults[e];
                        if (void 0 === t) throw new Error("preferencesGet: '" + e + "' is undefined.");
                        var n = this.prefs[e];
                        return void 0 !== n ? n : t
                    }.bind(this))
                }
            };
        s._writeToStorage = function(e) {
            return new Promise(function(t) {
                localStorage.setItem("pdfjs.preferences", JSON.stringify(e)), t()
            })
        }, s._readFromStorage = function(e) {
            return new Promise(function(e) {
                e(JSON.parse(localStorage.getItem("pdfjs.preferences")))
            })
        }, t.Preferences = s
    }, function(e, t, n) {
        function i(e, t, n, i) {
            var r = v.scratchCanvas;
            r.width = Math.floor(i.width * (150 / 72)), r.height = Math.floor(i.height * (150 / 72));
            var a = Math.floor(i.width * p) + "px",
                s = Math.floor(i.height * p) + "px",
                o = r.getContext("2d");
            return o.save(), o.fillStyle = "rgb(255, 255, 255)", o.fillRect(0, 0, r.width, r.height), o.restore(), t.getPage(n).then(function(e) {
                var t = {
                    canvasContext: o,
                    transform: [150 / 72, 0, 0, 150 / 72, 0, 0],
                    viewport: e.getViewport(1, i.rotation),
                    intent: "print"
                };
                return e.render(t).promise
            }).then(function() {
                return {
                    width: a,
                    height: s
                }
            })
        }

        function r(e, t, n) {
            this.pdfDocument = e, this.pagesOverview = t, this.printContainer = n, this.currentPage = -1, this.scratchCanvas = document.createElement("canvas")
        }

        function a(e) {
            var t = document.createEvent("CustomEvent");
            t.initCustomEvent(e, !1, !1, "custom"), window.dispatchEvent(t)
        }

        function s() {
            v && (v.destroy(), a("afterprint"))
        }

        function o(e, t) {
            var n = document.getElementById("printServiceOverlay"),
                i = Math.round(100 * e / t),
                r = n.querySelector("progress"),
                a = n.querySelector(".relative-progress");
            r.value = i, a.textContent = f.get("print_progress_percent", {
                progress: i
            }, i + "%")
        }

        function c() {
            return A || (A = m.register("printServiceOverlay", document.getElementById("printServiceOverlay"), s, !0), document.getElementById("printCancel").onclick = s), A
        }
        var l = n(0),
            h = n(4),
            u = n(6),
            d = n(1),
            f = l.mozL10n,
            p = l.CSS_UNITS,
            g = u.PDFPrintServiceFactory,
            m = h.OverlayManager,
            v = null;
        r.prototype = {
            layout: function() {
                this.throwIfInactive();
                var e = document.querySelector("body");
                e.setAttribute("data-pdfjsprinting", !0), this.pagesOverview.every(function(e) {
                    return e.width === this.pagesOverview[0].width && e.height === this.pagesOverview[0].height
                }, this) || console.warn("Not all pages have the same size. The printed result may be incorrect!"), this.pageStyleSheet = document.createElement("style");
                var t = this.pagesOverview[0];
                this.pageStyleSheet.textContent = "@supports ((size:A4) and (size:1pt 1pt)) {@page { size: " + t.width + "pt " + t.height + "pt;}}", e.appendChild(this.pageStyleSheet)
            },
            destroy: function() {
                v === this && (this.printContainer.textContent = "", this.pageStyleSheet && this.pageStyleSheet.parentNode && (this.pageStyleSheet.parentNode.removeChild(this.pageStyleSheet), this.pageStyleSheet = null), this.scratchCanvas.width = this.scratchCanvas.height = 0, this.scratchCanvas = null, v = null, c().then(function() {
                    "printServiceOverlay" === m.active && m.close("printServiceOverlay")
                }))
            },
            renderPages: function() {
                var e = this.pagesOverview.length,
                    t = function(n, r) {
                        if (this.throwIfInactive(), ++this.currentPage >= e) return o(e, e), void n();
                        var a = this.currentPage;
                        o(a, e), i(this, this.pdfDocument, a + 1, this.pagesOverview[a]).then(this.useRenderedPage.bind(this)).then(function() {
                            t(n, r)
                        }, r)
                    }.bind(this);
                return new Promise(t)
            },
            useRenderedPage: function(e) {
                this.throwIfInactive();
                var t = document.createElement("img");
                t.style.width = e.width, t.style.height = e.height;
                var n = this.scratchCanvas;
                "toBlob" in n && !d.PDFJS.disableCreateObjectURL ? n.toBlob(function(e) {
                    t.src = URL.createObjectURL(e)
                }) : t.src = n.toDataURL();
                var i = document.createElement("div");
                return i.appendChild(t), this.printContainer.appendChild(i), new Promise(function(e, n) {
                    t.onload = e, t.onerror = n
                })
            },
            performPrint: function() {
                return this.throwIfInactive(), new Promise(function(e) {
                    setTimeout(function() {
                        if (!this.active) return void e();
                        b.call(window), setTimeout(e, 20)
                    }.bind(this), 0)
                }.bind(this))
            },
            get active() {
                return this === v
            },
            throwIfInactive: function() {
                if (!this.active) throw new Error("This print request was cancelled or completed.")
            }
        };
        var b = window.print;
        window.print = function() {
            if (v) return void console.warn("Ignored window.print() because of a pending print job.");
            c().then(function() {
                v && m.open("printServiceOverlay")
            });
            try {
                a("beforeprint")
            } finally {
                if (!v) return console.error("Expected print service to be initialized."), void("printServiceOverlay" === m.active && m.close("printServiceOverlay"));
                var e = v;
                v.renderPages().then(function() {
                    return e.performPrint()
                }).catch(function() {}).then(function() {
                    e.active && s()
                })
            }
        };
        var w = !!document.attachEvent;
        if (window.addEventListener("keydown", function(e) {
                if (80 === e.keyCode && (e.ctrlKey || e.metaKey) && !e.altKey && (!e.shiftKey || window.chrome || window.opera)) {
                    if (window.print(), w) return;
                    return e.preventDefault(), void(e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.stopPropagation())
                }
            }, !0), w && document.attachEvent("onkeydown", function(e) {
                if (e = e || window.event, 80 === e.keyCode && e.ctrlKey) return e.keyCode = 0, !1
            }), "onbeforeprint" in window) {
            var y = function(e) {
                "custom" !== e.detail && e.stopImmediatePropagation && e.stopImmediatePropagation()
            };
            window.addEventListener("beforeprint", y), window.addEventListener("afterprint", y)
        }
        var A;
        g.instance = {
            supportsPrinting: !0,
            createPrintService: function(e, t, n) {
                if (v) throw new Error("The print service is created and active.");
                return v = new r(e, t, n)
            }
        }, t.PDFPrintService = r
    }, function(e, t, n) {
        function i() {}
        var r = n(0),
            a = n(5),
            s = n(1),
            o = r.mozL10n,
            c = a.SimpleLinkService,
            l = function() {
                function e(e) {
                    this.pageDiv = e.pageDiv, this.pdfPage = e.pdfPage, this.renderInteractiveForms = e.renderInteractiveForms, this.linkService = e.linkService, this.downloadManager = e.downloadManager, this.div = null
                }
                return e.prototype = {
                    render: function(e, t) {
                        var n = this,
                            i = {
                                intent: void 0 === t ? "display" : t
                            };
                        this.pdfPage.getAnnotations(i).then(function(t) {
                            if (e = e.clone({
                                    dontFlip: !0
                                }), i = {
                                    viewport: e,
                                    div: n.div,
                                    annotations: t,
                                    page: n.pdfPage,
                                    renderInteractiveForms: n.renderInteractiveForms,
                                    linkService: n.linkService,
                                    downloadManager: n.downloadManager
                                }, n.div) s.AnnotationLayer.update(i);
                            else {
                                if (0 === t.length) return;
                                n.div = document.createElement("div"), n.div.className = "annotationLayer", n.pageDiv.appendChild(n.div), i.div = n.div, s.AnnotationLayer.render(i), void 0 !== o && o.translate(n.div)
                            }
                        })
                    },
                    hide: function() {
                        this.div && this.div.setAttribute("hidden", "true")
                    }
                }, e
            }();
        i.prototype = {
            createAnnotationLayerBuilder: function(e, t, n) {
                return new l({
                    pageDiv: e,
                    pdfPage: t,
                    renderInteractiveForms: n,
                    linkService: new c
                })
            }
        }, t.AnnotationLayerBuilder = l, t.DefaultAnnotationLayerFactory = i
    }, function(e, t, n) {
        function i(e, t) {
            var n = document.createElement("a");
            if (n.click) n.href = e, n.target = "_parent", "download" in n && (n.download = t), (document.body || document.documentElement).appendChild(n), n.click(), n.parentNode.removeChild(n);
            else {
                if (window.top === window && e.split("#")[0] === window.location.href.split("#")[0]) {
                    var i = -1 === e.indexOf("?") ? "?" : "&";
                    e = e.replace(/#|$/, i + "$&")
                }
                window.open(e, "_parent")
            }
        }

        function r() {}
        var a = n(1);
        r.prototype = {
            downloadUrl: function(e, t) {
                a.createValidAbsoluteUrl(e, "http://example.com") && i(e + "#pdfjs.action=download", t)
            },
            downloadData: function(e, t, n) {
                if (navigator.msSaveBlob) return navigator.msSaveBlob(new Blob([e], {
                    type: n
                }), t);
                i(a.createObjectURL(e, n, a.PDFJS.disableCreateObjectURL), t)
            },
            download: function(e, t, n) {
                return navigator.msSaveBlob ? void(navigator.msSaveBlob(e, n) || this.downloadUrl(t, n)) : a.PDFJS.disableCreateObjectURL ? void this.downloadUrl(t, n) : void i(URL.createObjectURL(e), n)
            }
        }, t.DownloadManager = r
    }, function(e, t, n) {
        function i(e) {
            this.element = e.element, this.document = e.element.ownerDocument, "function" == typeof e.ignoreTarget && (this.ignoreTarget = e.ignoreTarget), this.onActiveChanged = e.onActiveChanged, this.activate = this.activate.bind(this), this.deactivate = this.deactivate.bind(this), this.toggle = this.toggle.bind(this), this._onmousedown = this._onmousedown.bind(this), this._onmousemove = this._onmousemove.bind(this), this._endPan = this._endPan.bind(this), (this.overlay = document.createElement("div")).className = "grab-to-pan-grabbing"
        }

        function r(e) {
            return "buttons" in e && s ? !(1 & e.buttons) : c || l ? 0 === e.which : void 0
        }
        i.prototype = {
            CSS_CLASS_GRAB: "grab-to-pan-grab",
            activate: function() {
                this.active || (this.active = !0, this.element.addEventListener("mousedown", this._onmousedown, !0), this.element.classList.add(this.CSS_CLASS_GRAB), this.onActiveChanged && this.onActiveChanged(!0))
            },
            deactivate: function() {
                this.active && (this.active = !1, this.element.removeEventListener("mousedown", this._onmousedown, !0), this._endPan(), this.element.classList.remove(this.CSS_CLASS_GRAB), this.onActiveChanged && this.onActiveChanged(!1))
            },
            toggle: function() {
                this.active ? this.deactivate() : this.activate()
            },
            ignoreTarget: function(e) {
                return e[a]("a[href], a[href] *, input, textarea, button, button *, select, option")
            },
            _onmousedown: function(e) {
                if (0 === e.button && !this.ignoreTarget(e.target)) {
                    if (e.originalTarget) try {
                        e.originalTarget.tagName
                    } catch (e) {
                        return
                    }
                    this.scrollLeftStart = this.element.scrollLeft, this.scrollTopStart = this.element.scrollTop, this.clientXStart = e.clientX, this.clientYStart = e.clientY, this.document.addEventListener("mousemove", this._onmousemove, !0), this.document.addEventListener("mouseup", this._endPan, !0), this.element.addEventListener("scroll", this._endPan, !0), e.preventDefault(), e.stopPropagation();
                    var t = document.activeElement;
                    t && !t.contains(e.target) && t.blur()
                }
            },
            _onmousemove: function(e) {
                if (this.element.removeEventListener("scroll", this._endPan, !0), r(e)) return void this._endPan();
                var t = e.clientX - this.clientXStart,
                    n = e.clientY - this.clientYStart,
                    i = this.scrollTopStart - n,
                    a = this.scrollLeftStart - t;
                this.element.scrollTo ? this.element.scrollTo({
                    top: i,
                    left: a,
                    behavior: "instant"
                }) : (this.element.scrollTop = i, this.element.scrollLeft = a), this.overlay.parentNode || document.body.appendChild(this.overlay)
            },
            _endPan: function() {
                this.element.removeEventListener("scroll", this._endPan, !0), this.document.removeEventListener("mousemove", this._onmousemove, !0), this.document.removeEventListener("mouseup", this._endPan, !0), this.overlay.remove()
            }
        };
        var a;
        ["webkitM", "mozM", "msM", "oM", "m"].some(function(e) {
            var t = e + "atches";
            return t in document.documentElement && (a = t), t += "Selector", t in document.documentElement && (a = t), a
        });
        var s = !document.documentMode || document.documentMode > 9,
            o = window.chrome,
            c = o && (o.webstore || o.app),
            l = /Apple/.test(navigator.vendor) && /Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent);
        t.GrabToPan = i
    }, function(e, t, n) {
        var i = n(12),
            r = n(8),
            a = n(0),
            s = i.GrabToPan,
            o = r.Preferences,
            c = a.localized,
            l = function() {
                function e(e) {
                    this.container = e.container, this.eventBus = e.eventBus, this.wasActive = !1, this.handTool = new s({
                        element: this.container,
                        onActiveChanged: function(e) {
                            this.eventBus.dispatch("handtoolchanged", {
                                isActive: e
                            })
                        }.bind(this)
                    }), this.eventBus.on("togglehandtool", this.toggle.bind(this)), Promise.all([c, o.get("enableHandToolOnLoad")]).then(function(e) {
                        !0 === e[1] && this.handTool.activate()
                    }.bind(this)).catch(function(e) {}), this.eventBus.on("presentationmodechanged", function(e) {
                        e.switchInProgress || (e.active ? this.enterPresentationMode() : this.exitPresentationMode())
                    }.bind(this))
                }
                return e.prototype = {
                    get isActive() {
                        return !!this.handTool.active
                    },
                    toggle: function() {
                        this.handTool.toggle()
                    },
                    enterPresentationMode: function() {
                        this.isActive && (this.wasActive = !0, this.handTool.deactivate())
                    },
                    exitPresentationMode: function() {
                        this.wasActive && (this.wasActive = !1, this.handTool.activate())
                    }
                }, e
            }();
        t.HandTool = l
    }, function(e, t, n) {
        var i = n(0),
            r = n(4),
            a = n(1),
            s = i.mozL10n,
            o = r.OverlayManager,
            c = function() {
                function e(e) {
                    this.overlayName = e.overlayName, this.container = e.container, this.label = e.label, this.input = e.input, this.submitButton = e.submitButton, this.cancelButton = e.cancelButton, this.updateCallback = null, this.reason = null, this.submitButton.addEventListener("click", this.verify.bind(this)), this.cancelButton.addEventListener("click", this.close.bind(this)), this.input.addEventListener("keydown", function(e) {
                        13 === e.keyCode && this.verify()
                    }.bind(this)), o.register(this.overlayName, this.container, this.close.bind(this), !0)
                }
                return e.prototype = {
                    open: function() {
                        o.open(this.overlayName).then(function() {
                            this.input.type = "password", this.input.focus();
                            var e = s.get("password_label", null, "Enter the password to open this PDF file.");
                            this.reason === a.PasswordResponses.INCORRECT_PASSWORD && (e = s.get("password_invalid", null, "Invalid password. Please try again.")), this.label.textContent = e
                        }.bind(this))
                    },
                    close: function() {
                        o.close(this.overlayName).then(function() {
                            this.input.value = "", this.input.type = ""
                        }.bind(this))
                    },
                    verify: function() {
                        var e = this.input.value;
                        if (e && e.length > 0) return this.close(), this.updateCallback(e)
                    },
                    setUpdateCallback: function(e, t) {
                        this.updateCallback = e, this.reason = t
                    }
                }, e
            }();
        t.PasswordPrompt = c
    }, function(e, t, n) {
        var i = n(1),
            r = function() {
                function e(e) {
                    this.attachments = null, this.container = e.container, this.eventBus = e.eventBus, this.downloadManager = e.downloadManager, this._renderedCapability = i.createPromiseCapability(), this.eventBus.on("fileattachmentannotation", this._appendAttachment.bind(this))
                }
                return e.prototype = {
                    reset: function(e) {
                        this.attachments = null, this.container.textContent = "", e || (this._renderedCapability = i.createPromiseCapability())
                    },
                    _dispatchEvent: function(e) {
                        this.eventBus.dispatch("attachmentsloaded", {
                            source: this,
                            attachmentsCount: e
                        }), this._renderedCapability.resolve()
                    },
                    _bindPdfLink: function(e, t, n) {
                        var r;
                        e.onclick = function() {
                            r || (r = i.createObjectURL(t, "application/pdf", i.PDFJS.disableCreateObjectURL));
                            var e;
                            return e = "?file=" + encodeURIComponent(r + "#" + n), window.open(e), !1
                        }
                    },
                    _bindLink: function(e, t, n) {
                        e.onclick = function(e) {
                            return this.downloadManager.downloadData(t, n, ""), !1
                        }.bind(this)
                    },
                    render: function(e) {
                        e = e || {};
                        var t = e.attachments || null,
                            n = 0;
                        if (this.attachments) {
                            var r = !0 === e.keepRenderedCapability;
                            this.reset(r)
                        }
                        if (this.attachments = t, !t) return void this._dispatchEvent(n);
                        var a = Object.keys(t).sort(function(e, t) {
                            return e.toLowerCase().localeCompare(t.toLowerCase())
                        });
                        n = a.length;
                        for (var s = 0; s < n; s++) {
                            var o = t[a[s]],
                                c = i.getFilenameFromUrl(o.filename);
                            c = i.removeNullCharacters(c);
                            var l = document.createElement("div");
                            l.className = "attachmentsItem";
                            var h = document.createElement("button");
                            h.textContent = c, /\.pdf$/i.test(c) ? this._bindPdfLink(h, o.content, c) : this._bindLink(h, o.content, c), l.appendChild(h), this.container.appendChild(l)
                        }
                        this._dispatchEvent(n)
                    },
                    _appendAttachment: function(e) {
                        this._renderedCapability.promise.then(function(e, t, n) {
                            var i = this.attachments;
                            if (i) {
                                for (var r in i)
                                    if (e === r) return
                            } else i = Object.create(null);
                            i[e] = {
                                filename: t,
                                content: n
                            }, this.render({
                                attachments: i,
                                keepRenderedCapability: !0
                            })
                        }.bind(this, e.id, e.filename, e.content))
                    }
                }, e
            }();
        t.PDFAttachmentViewer = r
    }, function(e, t, n) {
        var i = n(0),
            r = n(4),
            a = i.getPDFFileNameFromURL,
            s = i.mozL10n,
            o = r.OverlayManager,
            c = function() {
                function e(e) {
                    this.fields = e.fields, this.overlayName = e.overlayName, this.container = e.container, this.rawFileSize = 0, this.url = null, this.pdfDocument = null, e.closeButton && e.closeButton.addEventListener("click", this.close.bind(this)), this.dataAvailablePromise = new Promise(function(e) {
                        this.resolveDataAvailable = e
                    }.bind(this)), o.register(this.overlayName, this.container, this.close.bind(this))
                }
                return e.prototype = {
                    open: function() {
                        Promise.all([o.open(this.overlayName), this.dataAvailablePromise]).then(function() {
                            this._getProperties()
                        }.bind(this))
                    },
                    close: function() {
                        o.close(this.overlayName)
                    },
                    setFileSize: function(e) {
                        e > 0 && (this.rawFileSize = e)
                    },
                    setDocumentAndUrl: function(e, t) {
                        this.pdfDocument = e, this.url = t, this.resolveDataAvailable()
                    },
                    _getProperties: function() {
                        o.active && (this.pdfDocument.getDownloadInfo().then(function(e) {
                            e.length !== this.rawFileSize && (this.setFileSize(e.length), this._updateUI(this.fields.fileSize, this._parseFileSize()))
                        }.bind(this)), this.pdfDocument.getMetadata().then(function(e) {
                            var t = {
                                fileName: a(this.url),
                                fileSize: this._parseFileSize(),
                                title: e.info.Title,
                                author: e.info.Author,
                                subject: e.info.Subject,
                                keywords: e.info.Keywords,
                                creationDate: this._parseDate(e.info.CreationDate),
                                modificationDate: this._parseDate(e.info.ModDate),
                                creator: e.info.Creator,
                                producer: e.info.Producer,
                                version: e.info.PDFFormatVersion,
                                pageCount: this.pdfDocument.numPages
                            };
                            for (var n in t) this._updateUI(this.fields[n], t[n])
                        }.bind(this)))
                    },
                    _updateUI: function(e, t) {
                        e && void 0 !== t && "" !== t && (e.textContent = t)
                    },
                    _parseFileSize: function() {
                        var e = this.rawFileSize,
                            t = e / 1024;
                        if (t) return t < 1024 ? s.get("document_properties_kb", {
                            size_kb: (+t.toPrecision(3)).toLocaleString(),
                            size_b: e.toLocaleString()
                        }, "{{size_kb}} KB ({{size_b}} bytes)") : s.get("document_properties_mb", {
                            size_mb: (+(t / 1024).toPrecision(3)).toLocaleString(),
                            size_b: e.toLocaleString()
                        }, "{{size_mb}} MB ({{size_b}} bytes)")
                    },
                    _parseDate: function(e) {
                        var t = e;
                        if (void 0 === t) return "";
                        "D:" === t.substring(0, 2) && (t = t.substring(2));
                        var n = parseInt(t.substring(0, 4), 10),
                            i = parseInt(t.substring(4, 6), 10) - 1,
                            r = parseInt(t.substring(6, 8), 10),
                            a = parseInt(t.substring(8, 10), 10),
                            o = parseInt(t.substring(10, 12), 10),
                            c = parseInt(t.substring(12, 14), 10),
                            l = t.substring(14, 15),
                            h = parseInt(t.substring(15, 17), 10),
                            u = parseInt(t.substring(18, 20), 10);
                        "-" === l ? (a += h, o += u) : "+" === l && (a -= h, o -= u);
                        var d = new Date(Date.UTC(n, i, r, a, o, c)),
                            f = d.toLocaleDateString(),
                            p = d.toLocaleTimeString();
                        return s.get("document_properties_date_string", {
                            date: f,
                            time: p
                        }, "{{date}}, {{time}}")
                    }
                }, e
            }();
        t.PDFDocumentProperties = c
    }, function(e, t, n) {
        var i = n(0),
            r = n(7),
            a = i.mozL10n,
            s = r.FindStates,
            o = function() {
                function e(e) {
                    if (this.opened = !1, this.bar = e.bar || null, this.toggleButton = e.toggleButton || null, this.findField = e.findField || null, this.highlightAll = e.highlightAllCheckbox || null, this.caseSensitive = e.caseSensitiveCheckbox || null, this.findMsg = e.findMsg || null, this.findResultsCount = e.findResultsCount || null, this.findStatusIcon = e.findStatusIcon || null, this.findPreviousButton = e.findPreviousButton || null, this.findNextButton = e.findNextButton || null, this.findController = e.findController || null, this.eventBus = e.eventBus, null === this.findController) throw new Error("PDFFindBar cannot be used without a PDFFindController instance.");
                    var t = this;
                    this.toggleButton.addEventListener("click", function() {
                        t.toggle()
                    }), this.findField.addEventListener("input", function() {
                        t.dispatchEvent("")
                    }), this.bar.addEventListener("keydown", function(e) {
                        switch (e.keyCode) {
                            case 13:
                                e.target === t.findField && t.dispatchEvent("again", e.shiftKey);
                                break;
                            case 27:
                                t.close()
                        }
                    }), this.findPreviousButton.addEventListener("click", function() {
                        t.dispatchEvent("again", !0)
                    }), this.findNextButton.addEventListener("click", function() {
                        t.dispatchEvent("again", !1)
                    }), this.highlightAll.addEventListener("click", function() {
                        t.dispatchEvent("highlightallchange")
                    }), this.caseSensitive.addEventListener("click", function() {
                        t.dispatchEvent("casesensitivitychange")
                    }), this.eventBus.on("resize", this._adjustWidth.bind(this))
                }
                return e.prototype = {
                    reset: function() {
                        this.updateUIState()
                    },
                    dispatchEvent: function(e, t) {
                        this.eventBus.dispatch("find", {
                            source: this,
                            type: e,
                            query: this.findField.value,
                            caseSensitive: this.caseSensitive.checked,
                            phraseSearch: !0,
                            highlightAll: this.highlightAll.checked,
                            findPrevious: t
                        })
                    },
                    updateUIState: function(e, t, n) {
                        var i = !1,
                            r = "",
                            o = "";
                        switch (e) {
                            case s.FIND_FOUND:
                                break;
                            case s.FIND_PENDING:
                                o = "pending";
                                break;
                            case s.FIND_NOTFOUND:
                                r = a.get("find_not_found", null, "Phrase not found"), i = !0;
                                break;
                            case s.FIND_WRAPPED:
                                r = t ? a.get("find_reached_top", null, "Reached top of document, continued from bottom") : a.get("find_reached_bottom", null, "Reached end of document, continued from top")
                        }
                        i ? this.findField.classList.add("notFound") : this.findField.classList.remove("notFound"), this.findField.setAttribute("data-status", o), this.findMsg.textContent = r, this.updateResultsCount(n), this._adjustWidth()
                    },
                    updateResultsCount: function(e) {
                        if (this.findResultsCount) {
                            if (!e) return void this.findResultsCount.classList.add("hidden");
                            this.findResultsCount.textContent = e.toLocaleString(), this.findResultsCount.classList.remove("hidden")
                        }
                    },
                    open: function() {
                        this.opened || (this.opened = !0, this.toggleButton.classList.add("toggled"), this.bar.classList.remove("hidden")), this.findField.select(), this.findField.focus(), this._adjustWidth()
                    },
                    close: function() {
                        this.opened && (this.opened = !1, this.toggleButton.classList.remove("toggled"), this.bar.classList.add("hidden"), this.findController.active = !1)
                    },
                    toggle: function() {
                        this.opened ? this.close() : this.open()
                    },
                    _adjustWidth: function() {
                        if (this.opened) {
                            this.bar.classList.remove("wrapContainers");
                            this.bar.clientHeight > this.bar.firstElementChild.clientHeight && this.bar.classList.add("wrapContainers")
                        }
                    }
                }, e
            }();
        t.PDFFindBar = o
    }, function(e, t, n) {
        function i(e) {
            this.linkService = e.linkService, this.eventBus = e.eventBus || r.getGlobalEventBus(), this.initialized = !1, this.initialDestination = null, this.initialBookmark = null
        }
        var r = n(2);
        i.prototype = {
            initialize: function(e) {
                function t() {
                    a.previousHash = window.location.hash.slice(1), a._pushToHistory({
                        hash: a.previousHash
                    }, !1, !0), a._updatePreviousBookmark()
                }

                function n(e, t) {
                    function n() {
                        window.removeEventListener("popstate", n), window.addEventListener("popstate", i), a._pushToHistory(e, !1, !0), history.forward()
                    }

                    function i() {
                        window.removeEventListener("popstate", i), a.allowHashChange = !0, a.historyUnlocked = !0, t()
                    }
                    a.historyUnlocked = !1, a.allowHashChange = !1, window.addEventListener("popstate", n), history.back()
                }

                function i() {
                    var e = a._getPreviousParams(null, !0);
                    if (e) {
                        var t = !a.current.dest && a.current.hash !== a.previousHash;
                        a._pushToHistory(e, !1, t), a._updatePreviousBookmark()
                    }
                    window.removeEventListener("beforeunload", i)
                }
                this.initialized = !0, this.reInitialized = !1, this.allowHashChange = !0, this.historyUnlocked = !0, this.isViewerInPresentationMode = !1, this.previousHash = window.location.hash.substring(1), this.currentBookmark = "", this.currentPage = 0, this.updatePreviousBookmark = !1, this.previousBookmark = "", this.previousPage = 0, this.nextHashParam = "", this.fingerprint = e, this.currentUid = this.uid = 0, this.current = {};
                var r = window.history.state;
                this._isStateObjectDefined(r) ? (r.target.dest ? this.initialDestination = r.target.dest : this.initialBookmark = r.target.hash, this.currentUid = r.uid, this.uid = r.uid + 1, this.current = r.target) : (r && r.fingerprint && this.fingerprint !== r.fingerprint && (this.reInitialized = !0), this._pushOrReplaceState({
                    fingerprint: this.fingerprint
                }, !0));
                var a = this;
                window.addEventListener("popstate", function(e) {
                    if (a.historyUnlocked) {
                        if (e.state) return void a._goTo(e.state);
                        if (0 === a.uid) {
                            n(a.previousHash && a.currentBookmark && a.previousHash !== a.currentBookmark ? {
                                hash: a.currentBookmark,
                                page: a.currentPage
                            } : {
                                page: 1
                            }, function() {
                                t()
                            })
                        } else t()
                    }
                }), window.addEventListener("beforeunload", i), window.addEventListener("pageshow", function(e) {
                    window.addEventListener("beforeunload", i)
                }), a.eventBus.on("presentationmodechanged", function(e) {
                    a.isViewerInPresentationMode = e.active
                })
            },
            clearHistoryState: function() {
                this._pushOrReplaceState(null, !0)
            },
            _isStateObjectDefined: function(e) {
                return !!(e && e.uid >= 0 && e.fingerprint && this.fingerprint === e.fingerprint && e.target && e.target.hash)
            },
            _pushOrReplaceState: function(e, t) {
                t ? window.history.replaceState(e, "", document.URL) : window.history.pushState(e, "", document.URL)
            },
            get isHashChangeUnlocked() {
                return !this.initialized || this.allowHashChange
            },
            _updatePreviousBookmark: function() {
                this.updatePreviousBookmark && this.currentBookmark && this.currentPage && (this.previousBookmark = this.currentBookmark, this.previousPage = this.currentPage, this.updatePreviousBookmark = !1)
            },
            updateCurrentBookmark: function(e, t) {
                this.initialized && (this.currentBookmark = e.substring(1), this.currentPage = 0 | t, this._updatePreviousBookmark())
            },
            updateNextHashParam: function(e) {
                this.initialized && (this.nextHashParam = e)
            },
            push: function(e, t) {
                if (this.initialized && this.historyUnlocked) {
                    if (e.dest && !e.hash && (e.hash = this.current.hash && this.current.dest && this.current.dest === e.dest ? this.current.hash : this.linkService.getDestinationHash(e.dest).split("#")[1]), e.page && (e.page |= 0), t) {
                        var n = window.history.state.target;
                        return n || (this._pushToHistory(e, !1), this.previousHash = window.location.hash.substring(1)), this.updatePreviousBookmark = !this.nextHashParam, void(n && this._updatePreviousBookmark())
                    }
                    if (this.nextHashParam) {
                        if (this.nextHashParam === e.hash) return this.nextHashParam = null, void(this.updatePreviousBookmark = !0);
                        this.nextHashParam = null
                    }
                    e.hash ? this.current.hash ? this.current.hash !== e.hash ? this._pushToHistory(e, !0) : (!this.current.page && e.page && this._pushToHistory(e, !1, !0), this.updatePreviousBookmark = !0) : this._pushToHistory(e, !0) : this.current.page && e.page && this.current.page !== e.page && this._pushToHistory(e, !0)
                }
            },
            _getPreviousParams: function(e, t) {
                if (!this.currentBookmark || !this.currentPage) return null;
                if (this.updatePreviousBookmark && (this.updatePreviousBookmark = !1), this.uid > 0 && (!this.previousBookmark || !this.previousPage)) return null;
                if (!this.current.dest && !e || t) {
                    if (this.previousBookmark === this.currentBookmark) return null
                } else {
                    if (!this.current.page && !e) return null;
                    if (this.previousPage === this.currentPage) return null
                }
                var n = {
                    hash: this.currentBookmark,
                    page: this.currentPage
                };
                return this.isViewerInPresentationMode && (n.hash = null), n
            },
            _stateObj: function(e) {
                return {
                    fingerprint: this.fingerprint,
                    uid: this.uid,
                    target: e
                }
            },
            _pushToHistory: function(e, t, n) {
                if (this.initialized) {
                    if (!e.hash && e.page && (e.hash = "page=" + e.page), t && !n) {
                        var i = this._getPreviousParams();
                        if (i) {
                            var r = !this.current.dest && this.current.hash !== this.previousHash;
                            this._pushToHistory(i, !1, r)
                        }
                    }
                    this._pushOrReplaceState(this._stateObj(e), n || 0 === this.uid), this.currentUid = this.uid++, this.current = e, this.updatePreviousBookmark = !0
                }
            },
            _goTo: function(e) {
                if (this.initialized && this.historyUnlocked && this._isStateObjectDefined(e)) {
                    if (!this.reInitialized && e.uid < this.currentUid) {
                        var t = this._getPreviousParams(!0);
                        if (t) return this._pushToHistory(this.current, !1), this._pushToHistory(t, !1), this.currentUid = e.uid, void window.history.back()
                    }
                    this.historyUnlocked = !1, e.target.dest ? this.linkService.navigateTo(e.target.dest) : this.linkService.setHash(e.target.hash), this.currentUid = e.uid, e.uid > this.uid && (this.uid = e.uid), this.current = e.target, this.updatePreviousBookmark = !0;
                    var n = window.location.hash.substring(1);
                    this.previousHash !== n && (this.allowHashChange = !1), this.previousHash = n, this.historyUnlocked = !0
                }
            },
            back: function() {
                this.go(-1)
            },
            forward: function() {
                this.go(1)
            },
            go: function(e) {
                if (this.initialized && this.historyUnlocked) {
                    var t = window.history.state; - 1 === e && t && t.uid > 0 ? window.history.back() : 1 === e && t && t.uid < this.uid - 1 && window.history.forward()
                }
            }
        }, t.PDFHistory = i
    }, function(e, t, n) {
        var i = n(1),
            r = i.PDFJS,
            a = function() {
                function e(e) {
                    this.outline = null, this.lastToggleIsShow = !0, this.container = e.container, this.linkService = e.linkService, this.eventBus = e.eventBus
                }
                return e.prototype = {
                    reset: function() {
                        this.outline = null, this.lastToggleIsShow = !0, this.container.textContent = "", this.container.classList.remove("outlineWithDeepNesting")
                    },
                    _dispatchEvent: function(e) {
                        this.eventBus.dispatch("outlineloaded", {
                            source: this,
                            outlineCount: e
                        })
                    },
                    _bindLink: function(e, t) {
                        if (t.url) return void i.addLinkAttributes(e, {
                            url: t.url,
                            target: t.newWindow ? r.LinkTarget.BLANK : void 0
                        });
                        var n = this,
                            a = t.dest;
                        e.href = n.linkService.getDestinationHash(a), e.onclick = function() {
                            return a && n.linkService.navigateTo(a), !1
                        }
                    },
                    _setStyles: function(e, t) {
                        var n = "";
                        t.bold && (n += "font-weight: bold;"), t.italic && (n += "font-style: italic;"), n && e.setAttribute("style", n)
                    },
                    _addToggleButton: function(e) {
                        var t = document.createElement("div");
                        t.className = "outlineItemToggler", t.onclick = function(n) {
                            if (n.stopPropagation(), t.classList.toggle("outlineItemsHidden"), n.shiftKey) {
                                var i = !t.classList.contains("outlineItemsHidden");
                                this._toggleOutlineItem(e, i)
                            }
                        }.bind(this), e.insertBefore(t, e.firstChild)
                    },
                    _toggleOutlineItem: function(e, t) {
                        this.lastToggleIsShow = t;
                        for (var n = e.querySelectorAll(".outlineItemToggler"), i = 0, r = n.length; i < r; ++i) n[i].classList[t ? "remove" : "add"]("outlineItemsHidden")
                    },
                    toggleOutlineTree: function() {
                        this.outline && this._toggleOutlineItem(this.container, !this.lastToggleIsShow)
                    },
                    render: function(e) {
                        var t = e && e.outline || null,
                            n = 0;
                        if (this.outline && this.reset(), this.outline = t, !t) return void this._dispatchEvent(n);
                        for (var r = document.createDocumentFragment(), a = [{
                                parent: r,
                                items: this.outline
                            }], s = !1; a.length > 0;)
                            for (var o = a.shift(), c = 0, l = o.items.length; c < l; c++) {
                                var h = o.items[c],
                                    u = document.createElement("div");
                                u.className = "outlineItem";
                                var d = document.createElement("a");
                                if (this._bindLink(d, h), this._setStyles(d, h), d.textContent = i.removeNullCharacters(h.title) || "–", u.appendChild(d), h.items.length > 0) {
                                    s = !0, this._addToggleButton(u);
                                    var f = document.createElement("div");
                                    f.className = "outlineItems", u.appendChild(f), a.push({
                                        parent: f,
                                        items: h.items
                                    })
                                }
                                o.parent.appendChild(u), n++
                            }
                        s && this.container.classList.add("outlineWithDeepNesting"), this.container.appendChild(r), this._dispatchEvent(n)
                    }
                }, e
            }();
        t.PDFOutlineViewer = a
    }, function(e, t, n) {
        var i = n(0),
            r = n(3),
            a = n(2),
            s = n(1),
            o = i.CSS_UNITS,
            c = i.DEFAULT_SCALE,
            l = i.getOutputScale,
            h = i.approximateFraction,
            u = i.roundToDivide,
            d = i.RendererType,
            f = r.RenderingStates,
            p = function() {
                function e(e) {
                    var t = e.container,
                        n = e.id,
                        i = e.scale,
                        r = e.defaultViewport,
                        s = e.renderingQueue,
                        o = e.textLayerFactory,
                        l = e.annotationLayerFactory,
                        h = e.enhanceTextSelection || !1,
                        u = e.renderInteractiveForms || !1;
                    this.id = n, this.renderingId = "page" + n, this.pageLabel = null, this.rotation = 0, this.scale = i || c, this.viewport = r, this.pdfPageRotate = r.rotation, this.hasRestrictedScaling = !1, this.enhanceTextSelection = h, this.renderInteractiveForms = u, this.eventBus = e.eventBus || a.getGlobalEventBus(), this.renderingQueue = s, this.textLayerFactory = o, this.annotationLayerFactory = l, this.renderer = e.renderer || d.CANVAS, this.paintTask = null, this.paintedViewportMap = new WeakMap, this.renderingState = f.INITIAL, this.resume = null, this.error = null, this.onBeforeDraw = null, this.onAfterDraw = null, this.textLayer = null, this.zoomLayer = null, this.annotationLayer = null;
                    var p = document.createElement("div");
                    p.className = "page", p.style.width = Math.floor(this.viewport.width) + "px", p.style.height = Math.floor(this.viewport.height) + "px", p.setAttribute("data-page-number", this.id), this.div = p, t.appendChild(p)
                }
                return e.prototype = {
                    setPdfPage: function(e) {
                        this.pdfPage = e, this.pdfPageRotate = e.rotate;
                        var t = (this.rotation + this.pdfPageRotate) % 360;
                        this.viewport = e.getViewport(this.scale * o, t), this.stats = e.stats, this.reset()
                    },
                    destroy: function() {
                        this.reset(), this.pdfPage && this.pdfPage.cleanup()
                    },
                    _resetZoomLayer: function(e) {
                        if (this.zoomLayer) {
                            var t = this.zoomLayer.firstChild;
                            this.paintedViewportMap.delete(t), t.width = 0, t.height = 0, e && this.zoomLayer.remove(), this.zoomLayer = null
                        }
                    },
                    reset: function(e, t) {
                        this.cancelRendering();
                        var n = this.div;
                        n.style.width = Math.floor(this.viewport.width) + "px", n.style.height = Math.floor(this.viewport.height) + "px";
                        for (var i = n.childNodes, r = e && this.zoomLayer || null, a = t && this.annotationLayer && this.annotationLayer.div || null, s = i.length - 1; s >= 0; s--) {
                            var o = i[s];
                            r !== o && a !== o && n.removeChild(o)
                        }
                        n.removeAttribute("data-loaded"), a ? this.annotationLayer.hide() : this.annotationLayer = null, r || (this.canvas && (this.paintedViewportMap.delete(this.canvas), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this._resetZoomLayer()), this.svg && (this.paintedViewportMap.delete(this.svg), delete this.svg), this.loadingIconDiv = document.createElement("div"), this.loadingIconDiv.className = "loadingIcon", n.appendChild(this.loadingIconDiv)
                    },
                    update: function(e, t) {
                        this.scale = e || this.scale, void 0 !== t && (this.rotation = t);
                        var n = (this.rotation + this.pdfPageRotate) % 360;
                        if (this.viewport = this.viewport.clone({
                                scale: this.scale * o,
                                rotation: n
                            }), this.svg) return this.cssTransform(this.svg, !0), void this.eventBus.dispatch("pagerendered", {
                            source: this,
                            pageNumber: this.id,
                            cssTransform: !0
                        });
                        var i = !1;
                        if (this.canvas && s.PDFJS.maxCanvasPixels > 0) {
                            var r = this.outputScale;
                            (Math.floor(this.viewport.width) * r.sx | 0) * (Math.floor(this.viewport.height) * r.sy | 0) > s.PDFJS.maxCanvasPixels && (i = !0)
                        }
                        if (this.canvas) {
                            if (s.PDFJS.useOnlyCssZoom || this.hasRestrictedScaling && i) return this.cssTransform(this.canvas, !0), void this.eventBus.dispatch("pagerendered", {
                                source: this,
                                pageNumber: this.id,
                                cssTransform: !0
                            });
                            this.zoomLayer || (this.zoomLayer = this.canvas.parentNode, this.zoomLayer.style.position = "absolute")
                        }
                        this.zoomLayer && this.cssTransform(this.zoomLayer.firstChild), this.reset(!0, !0)
                    },
                    cancelRendering: function() {
                        this.paintTask && (this.paintTask.cancel(), this.paintTask = null), this.renderingState = f.INITIAL, this.resume = null, this.textLayer && (this.textLayer.cancel(), this.textLayer = null)
                    },
                    updatePosition: function() {
                        this.textLayer && this.textLayer.render(200)
                    },
                    cssTransform: function(e, t) {
                        var n = s.CustomStyle,
                            i = this.viewport.width,
                            r = this.viewport.height,
                            a = this.div;
                        e.style.width = e.parentNode.style.width = a.style.width = Math.floor(i) + "px", e.style.height = e.parentNode.style.height = a.style.height = Math.floor(r) + "px";
                        var o = this.viewport.rotation - this.paintedViewportMap.get(e).rotation,
                            c = Math.abs(o),
                            l = 1,
                            h = 1;
                        90 !== c && 270 !== c || (l = r / i, h = i / r);
                        var u = "rotate(" + o + "deg) scale(" + l + "," + h + ")";
                        if (n.setProp("transform", e, u), this.textLayer) {
                            var d = this.textLayer.viewport,
                                f = this.viewport.rotation - d.rotation,
                                p = Math.abs(f),
                                g = i / d.width;
                            90 !== p && 270 !== p || (g = i / d.height);
                            var m, v, b = this.textLayer.textLayerDiv;
                            switch (p) {
                                case 0:
                                    m = v = 0;
                                    break;
                                case 90:
                                    m = 0, v = "-" + b.style.height;
                                    break;
                                case 180:
                                    m = "-" + b.style.width, v = "-" + b.style.height;
                                    break;
                                case 270:
                                    m = "-" + b.style.width, v = 0;
                                    break;
                                default:
                                    console.error("Bad rotation value.")
                            }
                            n.setProp("transform", b, "rotate(" + p + "deg) scale(" + g + ", " + g + ") translate(" + m + ", " + v + ")"), n.setProp("transformOrigin", b, "0% 0%")
                        }
                        t && this.annotationLayer && this.annotationLayer.render(this.viewport, "display")
                    },
                    get width() {
                        return this.viewport.width
                    },
                    get height() {
                        return this.viewport.height
                    },
                    getPagePoint: function(e, t) {
                        return this.viewport.convertToPdfPoint(e, t)
                    },
                    draw: function() {
                        this.renderingState !== f.INITIAL && (console.error("Must be in new state before drawing"), this.reset()), this.renderingState = f.RUNNING;
                        var e = this,
                            t = this.pdfPage,
                            n = this.div,
                            i = document.createElement("div");
                        i.style.width = n.style.width, i.style.height = n.style.height, i.classList.add("canvasWrapper"), this.annotationLayer && this.annotationLayer.div ? n.insertBefore(i, this.annotationLayer.div) : n.appendChild(i);
                        var r = null,
                            a = null;
                        this.textLayerFactory && (r = document.createElement("div"), r.className = "textLayer", r.style.width = i.style.width, r.style.height = i.style.height, this.annotationLayer && this.annotationLayer.div ? n.insertBefore(r, this.annotationLayer.div) : n.appendChild(r), a = this.textLayerFactory.createTextLayerBuilder(r, this.id - 1, this.viewport, this.enhanceTextSelection)), this.textLayer = a;
                        var o = null;
                        this.renderingQueue && (o = function(t) {
                            if (!e.renderingQueue.isHighestPriority(e)) return e.renderingState = f.PAUSED, void(e.resume = function() {
                                e.renderingState = f.RUNNING, t()
                            });
                            t()
                        });
                        var c = function(i) {
                                return l === e.paintTask && (e.paintTask = null), "cancelled" === i || i instanceof s.RenderingCancelledException ? (e.error = null, Promise.resolve(void 0)) : (e.renderingState = f.FINISHED, e.loadingIconDiv && (n.removeChild(e.loadingIconDiv), delete e.loadingIconDiv), e._resetZoomLayer(!0), e.error = i, e.stats = t.stats, e.onAfterDraw && e.onAfterDraw(), e.eventBus.dispatch("pagerendered", {
                                    source: e,
                                    pageNumber: e.id,
                                    cssTransform: !1
                                }), i ? Promise.reject(i) : Promise.resolve(void 0))
                            },
                            l = this.renderer === d.SVG ? this.paintOnSvg(i) : this.paintOnCanvas(i);
                        l.onRenderContinue = o, this.paintTask = l;
                        var h = l.promise.then(function() {
                            return c(null).then(function() {
                                a && t.getTextContent({
                                    normalizeWhitespace: !0
                                }).then(function(e) {
                                    a.setTextContent(e), a.render(200)
                                })
                            })
                        }, function(e) {
                            return c(e)
                        });
                        return this.annotationLayerFactory && (this.annotationLayer || (this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(n, t, this.renderInteractiveForms)), this.annotationLayer.render(this.viewport, "display")), n.setAttribute("data-loaded", !0), this.onBeforeDraw && this.onBeforeDraw(), h
                    },
                    paintOnCanvas: function(e) {
                        var t, n, i = new Promise(function(e, i) {
                                t = e, n = i
                            }),
                            r = {
                                promise: i,
                                onRenderContinue: function(e) {
                                    e()
                                },
                                cancel: function() {
                                    P.cancel()
                                }
                            },
                            a = this.viewport,
                            c = document.createElement("canvas");
                        c.id = "page" + this.id, c.setAttribute("hidden", "hidden");
                        var d = !0,
                            f = function() {
                                d && (c.removeAttribute("hidden"), d = !1)
                            };
                        e.appendChild(c), this.canvas = c, c.mozOpaque = !0;
                        var p = c.getContext("2d", {
                                alpha: !1
                            }),
                            g = l(p);
                        if (this.outputScale = g, s.PDFJS.useOnlyCssZoom) {
                            var m = a.clone({
                                scale: o
                            });
                            g.sx *= m.width / a.width, g.sy *= m.height / a.height, g.scaled = !0
                        }
                        if (s.PDFJS.maxCanvasPixels > 0) {
                            var v = a.width * a.height,
                                b = Math.sqrt(s.PDFJS.maxCanvasPixels / v);
                            g.sx > b || g.sy > b ? (g.sx = b, g.sy = b, g.scaled = !0, this.hasRestrictedScaling = !0) : this.hasRestrictedScaling = !1
                        }
                        var w = h(g.sx),
                            y = h(g.sy);
                        c.width = u(a.width * g.sx, w[0]), c.height = u(a.height * g.sy, y[0]), c.style.width = u(a.width, w[1]) + "px", c.style.height = u(a.height, y[1]) + "px", this.paintedViewportMap.set(c, a);
                        var A = g.scaled ? [g.sx, 0, 0, g.sy, 0, 0] : null,
                            S = {
                                canvasContext: p,
                                transform: A,
                                viewport: this.viewport,
                                renderInteractiveForms: this.renderInteractiveForms
                            },
                            P = this.pdfPage.render(S);
                        return P.onContinue = function(e) {
                            f(), r.onRenderContinue ? r.onRenderContinue(e) : e()
                        }, P.promise.then(function() {
                            f(), t(void 0)
                        }, function(e) {
                            f(), n(e)
                        }), r
                    },
                    paintOnSvg: function(e) {
                        var t = !1,
                            n = function() {
                                if (t) throw s.PDFJS.pdfjsNext ? new s.RenderingCancelledException("Rendering cancelled, page " + i.id, "svg") : "cancelled"
                            },
                            i = this,
                            r = this.pdfPage,
                            a = s.SVGGraphics,
                            c = this.viewport.clone({
                                scale: o
                            });
                        return {
                            promise: r.getOperatorList().then(function(t) {
                                return n(), new a(r.commonObjs, r.objs).getSVG(t, c).then(function(t) {
                                    n(), i.svg = t, i.paintedViewportMap.set(t, c), t.style.width = e.style.width, t.style.height = e.style.height, i.renderingState = f.FINISHED, e.appendChild(t)
                                })
                            }),
                            onRenderContinue: function(e) {
                                e()
                            },
                            cancel: function() {
                                t = !0
                            }
                        }
                    },
                    setPageLabel: function(e) {
                        this.pageLabel = "string" == typeof e ? e : null, null !== this.pageLabel ? this.div.setAttribute("data-page-label", this.pageLabel) : this.div.removeAttribute("data-page-label")
                    }
                }, e
            }();
        t.PDFPageView = p
    }, function(e, t, n) {
        var i = n(0),
            r = i.normalizeWheelEventDelta,
            a = function() {
                function e(e) {
                    this.container = e.container, this.viewer = e.viewer || e.container.firstElementChild, this.pdfViewer = e.pdfViewer, this.eventBus = e.eventBus;
                    var t = e.contextMenuItems || null;
                    this.active = !1, this.args = null, this.contextMenuOpen = !1, this.mouseScrollTimeStamp = 0, this.mouseScrollDelta = 0, this.touchSwipeState = null, t && (t.contextFirstPage.addEventListener("click", function(e) {
                        this.contextMenuOpen = !1, this.eventBus.dispatch("firstpage")
                    }.bind(this)), t.contextLastPage.addEventListener("click", function(e) {
                        this.contextMenuOpen = !1, this.eventBus.dispatch("lastpage")
                    }.bind(this)), t.contextPageRotateCw.addEventListener("click", function(e) {
                        this.contextMenuOpen = !1, this.eventBus.dispatch("rotatecw")
                    }.bind(this)), t.contextPageRotateCcw.addEventListener("click", function(e) {
                        this.contextMenuOpen = !1, this.eventBus.dispatch("rotateccw")
                    }.bind(this)))
                }
                return e.prototype = {
                    request: function() {
                        if (this.switchInProgress || this.active || !this.viewer.hasChildNodes()) return !1;
                        if (this._addFullscreenChangeListeners(), this._setSwitchInProgress(), this._notifyStateChange(), this.container.requestFullscreen) this.container.requestFullscreen();
                        else if (this.container.mozRequestFullScreen) this.container.mozRequestFullScreen();
                        else if (this.container.webkitRequestFullscreen) this.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                        else {
                            if (!this.container.msRequestFullscreen) return !1;
                            this.container.msRequestFullscreen()
                        }
                        return this.args = {
                            page: this.pdfViewer.currentPageNumber,
                            previousScale: this.pdfViewer.currentScaleValue
                        }, !0
                    },
                    _mouseWheel: function(e) {
                        if (this.active) {
                            e.preventDefault();
                            var t = r(e),
                                n = (new Date).getTime(),
                                i = this.mouseScrollTimeStamp;
                            if (!(n > i && n - i < 50) && ((this.mouseScrollDelta > 0 && t < 0 || this.mouseScrollDelta < 0 && t > 0) && this._resetMouseScrollState(), this.mouseScrollDelta += t, Math.abs(this.mouseScrollDelta) >= .1)) {
                                var a = this.mouseScrollDelta;
                                this._resetMouseScrollState();
                                (a > 0 ? this._goToPreviousPage() : this._goToNextPage()) && (this.mouseScrollTimeStamp = n)
                            }
                        }
                    },
                    get isFullscreen() {
                        return !!(document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement)
                    },
                    _goToPreviousPage: function() {
                        var e = this.pdfViewer.currentPageNumber;
                        return !(e <= 1) && (this.pdfViewer.currentPageNumber = e - 1, !0)
                    },
                    _goToNextPage: function() {
                        var e = this.pdfViewer.currentPageNumber;
                        return !(e >= this.pdfViewer.pagesCount) && (this.pdfViewer.currentPageNumber = e + 1, !0)
                    },
                    _notifyStateChange: function() {
                        this.eventBus.dispatch("presentationmodechanged", {
                            source: this,
                            active: this.active,
                            switchInProgress: !!this.switchInProgress
                        })
                    },
                    _setSwitchInProgress: function() {
                        this.switchInProgress && clearTimeout(this.switchInProgress), this.switchInProgress = setTimeout(function() {
                            this._removeFullscreenChangeListeners(), delete this.switchInProgress, this._notifyStateChange()
                        }.bind(this), 1500)
                    },
                    _resetSwitchInProgress: function() {
                        this.switchInProgress && (clearTimeout(this.switchInProgress), delete this.switchInProgress)
                    },
                    _enter: function() {
                        this.active = !0, this._resetSwitchInProgress(), this._notifyStateChange(), this.container.classList.add("pdfPresentationMode"), setTimeout(function() {
                            this.pdfViewer.currentPageNumber = this.args.page, this.pdfViewer.currentScaleValue = "page-fit"
                        }.bind(this), 0), this._addWindowListeners(), this._showControls(), this.contextMenuOpen = !1, this.container.setAttribute("contextmenu", "viewerContextMenu"), window.getSelection().removeAllRanges()
                    },
                    _exit: function() {
                        var e = this.pdfViewer.currentPageNumber;
                        this.container.classList.remove("pdfPresentationMode"), setTimeout(function() {
                            this.active = !1, this._removeFullscreenChangeListeners(), this._notifyStateChange(), this.pdfViewer.currentScaleValue = this.args.previousScale, this.pdfViewer.currentPageNumber = e, this.args = null
                        }.bind(this), 0), this._removeWindowListeners(), this._hideControls(), this._resetMouseScrollState(), this.container.removeAttribute("contextmenu"), this.contextMenuOpen = !1
                    },
                    _mouseDown: function(e) {
                        if (this.contextMenuOpen) return this.contextMenuOpen = !1, void e.preventDefault();
                        if (0 === e.button) {
                            e.target.href && e.target.classList.contains("internalLink") || (e.preventDefault(), this.pdfViewer.currentPageNumber += e.shiftKey ? -1 : 1)
                        }
                    },
                    _contextMenu: function() {
                        this.contextMenuOpen = !0
                    },
                    _showControls: function() {
                        this.controlsTimeout ? clearTimeout(this.controlsTimeout) : this.container.classList.add("pdfPresentationModeControls"), this.controlsTimeout = setTimeout(function() {
                            this.container.classList.remove("pdfPresentationModeControls"), delete this.controlsTimeout
                        }.bind(this), 3e3)
                    },
                    _hideControls: function() {
                        this.controlsTimeout && (clearTimeout(this.controlsTimeout), this.container.classList.remove("pdfPresentationModeControls"), delete this.controlsTimeout)
                    },
                    _resetMouseScrollState: function() {
                        this.mouseScrollTimeStamp = 0, this.mouseScrollDelta = 0
                    },
                    _touchSwipe: function(e) {
                        if (this.active) {
                            var t = Math.PI / 6;
                            if (e.touches.length > 1) return void(this.touchSwipeState = null);
                            switch (e.type) {
                                case "touchstart":
                                    this.touchSwipeState = {
                                        startX: e.touches[0].pageX,
                                        startY: e.touches[0].pageY,
                                        endX: e.touches[0].pageX,
                                        endY: e.touches[0].pageY
                                    };
                                    break;
                                case "touchmove":
                                    if (null === this.touchSwipeState) return;
                                    this.touchSwipeState.endX = e.touches[0].pageX, this.touchSwipeState.endY = e.touches[0].pageY, e.preventDefault();
                                    break;
                                case "touchend":
                                    if (null === this.touchSwipeState) return;
                                    var n = 0,
                                        i = this.touchSwipeState.endX - this.touchSwipeState.startX,
                                        r = this.touchSwipeState.endY - this.touchSwipeState.startY,
                                        a = Math.abs(Math.atan2(r, i));
                                    Math.abs(i) > 50 && (a <= t || a >= Math.PI - t) ? n = i : Math.abs(r) > 50 && Math.abs(a - Math.PI / 2) <= t && (n = r), n > 0 ? this._goToPreviousPage() : n < 0 && this._goToNextPage()
                            }
                        }
                    },
                    _addWindowListeners: function() {
                        this.showControlsBind = this._showControls.bind(this), this.mouseDownBind = this._mouseDown.bind(this), this.mouseWheelBind = this._mouseWheel.bind(this), this.resetMouseScrollStateBind = this._resetMouseScrollState.bind(this), this.contextMenuBind = this._contextMenu.bind(this), this.touchSwipeBind = this._touchSwipe.bind(this), window.addEventListener("mousemove", this.showControlsBind), window.addEventListener("mousedown", this.mouseDownBind), window.addEventListener("wheel", this.mouseWheelBind), window.addEventListener("keydown", this.resetMouseScrollStateBind), window.addEventListener("contextmenu", this.contextMenuBind), window.addEventListener("touchstart", this.touchSwipeBind), window.addEventListener("touchmove", this.touchSwipeBind), window.addEventListener("touchend", this.touchSwipeBind)
                    },
                    _removeWindowListeners: function() {
                        window.removeEventListener("mousemove", this.showControlsBind), window.removeEventListener("mousedown", this.mouseDownBind), window.removeEventListener("wheel", this.mouseWheelBind), window.removeEventListener("keydown", this.resetMouseScrollStateBind), window.removeEventListener("contextmenu", this.contextMenuBind), window.removeEventListener("touchstart", this.touchSwipeBind), window.removeEventListener("touchmove", this.touchSwipeBind), window.removeEventListener("touchend", this.touchSwipeBind), delete this.showControlsBind, delete this.mouseDownBind, delete this.mouseWheelBind, delete this.resetMouseScrollStateBind, delete this.contextMenuBind, delete this.touchSwipeBind
                    },
                    _fullscreenChange: function() {
                        this.isFullscreen ? this._enter() : this._exit()
                    },
                    _addFullscreenChangeListeners: function() {
                        this.fullscreenChangeBind = this._fullscreenChange.bind(this), window.addEventListener("fullscreenchange", this.fullscreenChangeBind), window.addEventListener("mozfullscreenchange", this.fullscreenChangeBind), window.addEventListener("webkitfullscreenchange", this.fullscreenChangeBind), window.addEventListener("MSFullscreenChange", this.fullscreenChangeBind)
                    },
                    _removeFullscreenChangeListeners: function() {
                        window.removeEventListener("fullscreenchange", this.fullscreenChangeBind), window.removeEventListener("mozfullscreenchange", this.fullscreenChangeBind), window.removeEventListener("webkitfullscreenchange", this.fullscreenChangeBind), window.removeEventListener("MSFullscreenChange", this.fullscreenChangeBind), delete this.fullscreenChangeBind
                    }
                }, e
            }();
        t.PDFPresentationMode = a
    }, function(e, t, n) {
        var i = n(3),
            r = n(0),
            a = i.RenderingStates,
            s = r.mozL10n,
            o = {
                NONE: 0,
                THUMBS: 1,
                OUTLINE: 2,
                ATTACHMENTS: 3
            },
            c = function() {
                function e(e) {
                    this.isOpen = !1, this.active = o.THUMBS, this.isInitialViewSet = !1, this.onToggled = null, this.pdfViewer = e.pdfViewer, this.pdfThumbnailViewer = e.pdfThumbnailViewer, this.pdfOutlineViewer = e.pdfOutlineViewer, this.mainContainer = e.mainContainer, this.outerContainer = e.outerContainer, this.eventBus = e.eventBus, this.toggleButton = e.toggleButton, this.thumbnailButton = e.thumbnailButton, this.outlineButton = e.outlineButton, this.attachmentsButton = e.attachmentsButton, this.thumbnailView = e.thumbnailView, this.outlineView = e.outlineView, this.attachmentsView = e.attachmentsView, this.disableNotification = e.disableNotification || !1, this._addEventListeners()
                }
                return e.prototype = {
                    reset: function() {
                        this.isInitialViewSet = !1, this._hideUINotification(null), this.switchView(o.THUMBS), this.outlineButton.disabled = !1, this.attachmentsButton.disabled = !1
                    },
                    get visibleView() {
                        return this.isOpen ? this.active : o.NONE
                    },
                    get isThumbnailViewVisible() {
                        return this.isOpen && this.active === o.THUMBS
                    },
                    get isOutlineViewVisible() {
                        return this.isOpen && this.active === o.OUTLINE
                    },
                    get isAttachmentsViewVisible() {
                        return this.isOpen && this.active === o.ATTACHMENTS
                    },
                    setInitialView: function(e) {
                        if (!this.isInitialViewSet) {
                            if (this.isInitialViewSet = !0, this.isOpen && e === o.NONE) return void this._dispatchEvent();
                            var t = e === this.visibleView;
                            this.switchView(e, !0), t && this._dispatchEvent()
                        }
                    },
                    switchView: function(e, t) {
                        if (e === o.NONE) return void this.close();
                        var n = e !== this.active,
                            i = !1;
                        switch (e) {
                            case o.THUMBS:
                                this.thumbnailButton.classList.add("toggled"), this.outlineButton.classList.remove("toggled"), this.attachmentsButton.classList.remove("toggled"), this.thumbnailView.classList.remove("hidden"), this.outlineView.classList.add("hidden"), this.attachmentsView.classList.add("hidden"), this.isOpen && n && (this._updateThumbnailViewer(), i = !0);
                                break;
                            case o.OUTLINE:
                                if (this.outlineButton.disabled) return;
                                this.thumbnailButton.classList.remove("toggled"), this.outlineButton.classList.add("toggled"), this.attachmentsButton.classList.remove("toggled"), this.thumbnailView.classList.add("hidden"), this.outlineView.classList.remove("hidden"), this.attachmentsView.classList.add("hidden");
                                break;
                            case o.ATTACHMENTS:
                                if (this.attachmentsButton.disabled) return;
                                this.thumbnailButton.classList.remove("toggled"), this.outlineButton.classList.remove("toggled"), this.attachmentsButton.classList.add("toggled"), this.thumbnailView.classList.add("hidden"), this.outlineView.classList.add("hidden"), this.attachmentsView.classList.remove("hidden");
                                break;
                            default:
                                return void console.error('PDFSidebar_switchView: "' + e + '" is an unsupported value.')
                        }
                        if (this.active = 0 | e, t && !this.isOpen) return void this.open();
                        i && this._forceRendering(), n && this._dispatchEvent(), this._hideUINotification(this.active)
                    },
                    open: function() {
                        this.isOpen || (this.isOpen = !0, this.toggleButton.classList.add("toggled"), this.outerContainer.classList.add("sidebarMoving"), this.outerContainer.classList.add("sidebarOpen"), this.active === o.THUMBS && this._updateThumbnailViewer(), this._forceRendering(), this._dispatchEvent(), this._hideUINotification(this.active))
                    },
                    close: function() {
                        this.isOpen && (this.isOpen = !1, this.toggleButton.classList.remove("toggled"), this.outerContainer.classList.add("sidebarMoving"), this.outerContainer.classList.remove("sidebarOpen"), this._forceRendering(), this._dispatchEvent())
                    },
                    toggle: function() {
                        this.isOpen ? this.close() : this.open()
                    },
                    _dispatchEvent: function() {
                        this.eventBus.dispatch("sidebarviewchanged", {
                            source: this,
                            view: this.visibleView
                        })
                    },
                    _forceRendering: function() {
                        this.onToggled ? this.onToggled() : (this.pdfViewer.forceRendering(), this.pdfThumbnailViewer.forceRendering())
                    },
                    _updateThumbnailViewer: function() {
                        for (var e = this.pdfViewer, t = this.pdfThumbnailViewer, n = e.pagesCount, i = 0; i < n; i++) {
                            var r = e.getPageView(i);
                            if (r && r.renderingState === a.FINISHED) {
                                t.getThumbnail(i).setImage(r)
                            }
                        }
                        t.scrollThumbnailIntoView(e.currentPageNumber)
                    },
                    _showUINotification: function(e) {
                        if (!this.disableNotification) {
                            if (this.toggleButton.title = s.get("toggle_sidebar_notification.title", null, "Toggle Sidebar (document contains outline/attachments)"), this.isOpen) {
                                if (e === this.active) return
                            } else this.toggleButton.classList.add("pdfSidebarNotification");
                            switch (e) {
                                case o.OUTLINE:
                                    this.outlineButton.classList.add("pdfSidebarNotification");
                                    break;
                                case o.ATTACHMENTS:
                                    this.attachmentsButton.classList.add("pdfSidebarNotification")
                            }
                        }
                    },
                    _hideUINotification: function(e) {
                        if (!this.disableNotification) {
                            var t = function(e) {
                                switch (e) {
                                    case o.OUTLINE:
                                        this.outlineButton.classList.remove("pdfSidebarNotification");
                                        break;
                                    case o.ATTACHMENTS:
                                        this.attachmentsButton.classList.remove("pdfSidebarNotification")
                                }
                            }.bind(this);
                            if (this.isOpen || null === e) {
                                if (this.toggleButton.classList.remove("pdfSidebarNotification"), null !== e) return void t(e);
                                for (e in o) t(o[e]);
                                this.toggleButton.title = s.get("toggle_sidebar.title", null, "Toggle Sidebar")
                            }
                        }
                    },
                    _addEventListeners: function() {
                        var e = this;
                        e.mainContainer.addEventListener("transitionend", function(t) {
                            t.target === this && e.outerContainer.classList.remove("sidebarMoving")
                        }), e.thumbnailButton.addEventListener("click", function() {
                            e.switchView(o.THUMBS)
                        }), e.outlineButton.addEventListener("click", function() {
                            e.switchView(o.OUTLINE)
                        }), e.outlineButton.addEventListener("dblclick", function() {
                            e.pdfOutlineViewer.toggleOutlineTree()
                        }), e.attachmentsButton.addEventListener("click", function() {
                            e.switchView(o.ATTACHMENTS)
                        }), e.eventBus.on("outlineloaded", function(t) {
                            var n = t.outlineCount;
                            e.outlineButton.disabled = !n, n ? e._showUINotification(o.OUTLINE) : e.active === o.OUTLINE && e.switchView(o.THUMBS)
                        }), e.eventBus.on("attachmentsloaded", function(t) {
                            var n = t.attachmentsCount;
                            e.attachmentsButton.disabled = !n, n ? e._showUINotification(o.ATTACHMENTS) : e.active === o.ATTACHMENTS && e.switchView(o.THUMBS)
                        }), e.eventBus.on("presentationmodechanged", function(t) {
                            t.active || t.switchInProgress || !e.isThumbnailViewVisible || e._updateThumbnailViewer()
                        })
                    }
                }, e
            }();
        t.SidebarView = o, t.PDFSidebar = c
    }, function(e, t, n) {
        var i = n(0),
            r = n(3),
            a = i.mozL10n,
            s = i.getOutputScale,
            o = r.RenderingStates,
            c = 98,
            l = 1,
            h = function() {
                function e(e, n) {
                    var i = t.tempImageCache;
                    i || (i = document.createElement("canvas"), t.tempImageCache = i), i.width = e, i.height = n, i.mozOpaque = !0;
                    var r = i.getContext("2d", {
                        alpha: !1
                    });
                    return r.save(), r.fillStyle = "rgb(255, 255, 255)", r.fillRect(0, 0, e, n), r.restore(), i
                }

                function t(e) {
                    var t = e.container,
                        n = e.id,
                        i = e.defaultViewport,
                        r = e.linkService,
                        s = e.renderingQueue,
                        h = e.disableCanvasToImageConversion || !1;
                    this.id = n, this.renderingId = "thumbnail" + n, this.pageLabel = null, this.pdfPage = null, this.rotation = 0, this.viewport = i, this.pdfPageRotate = i.rotation, this.linkService = r, this.renderingQueue = s, this.renderTask = null, this.renderingState = o.INITIAL, this.resume = null, this.disableCanvasToImageConversion = h, this.pageWidth = this.viewport.width, this.pageHeight = this.viewport.height, this.pageRatio = this.pageWidth / this.pageHeight, this.canvasWidth = c, this.canvasHeight = this.canvasWidth / this.pageRatio | 0, this.scale = this.canvasWidth / this.pageWidth;
                    var u = document.createElement("a");
                    u.href = r.getAnchorUrl("#page=" + n), u.title = a.get("thumb_page_title", {
                        page: n
                    }, "Page {{page}}"), u.onclick = function() {
                        return r.page = n, !1
                    }, this.anchor = u;
                    var d = document.createElement("div");
                    d.className = "thumbnail", d.setAttribute("data-page-number", this.id), this.div = d, 1 === n && d.classList.add("selected");
                    var f = document.createElement("div");
                    f.className = "thumbnailSelectionRing";
                    var p = 2 * l;
                    f.style.width = this.canvasWidth + p + "px", f.style.height = this.canvasHeight + p + "px", this.ring = f, d.appendChild(f), u.appendChild(d), t.appendChild(u)
                }
                return t.prototype = {
                    setPdfPage: function(e) {
                        this.pdfPage = e, this.pdfPageRotate = e.rotate;
                        var t = (this.rotation + this.pdfPageRotate) % 360;
                        this.viewport = e.getViewport(1, t), this.reset()
                    },
                    reset: function() {
                        this.cancelRendering(), this.pageWidth = this.viewport.width, this.pageHeight = this.viewport.height, this.pageRatio = this.pageWidth / this.pageHeight, this.canvasHeight = this.canvasWidth / this.pageRatio | 0, this.scale = this.canvasWidth / this.pageWidth, this.div.removeAttribute("data-loaded");
                        for (var e = this.ring, t = e.childNodes, n = t.length - 1; n >= 0; n--) e.removeChild(t[n]);
                        var i = 2 * l;
                        e.style.width = this.canvasWidth + i + "px", e.style.height = this.canvasHeight + i + "px", this.canvas && (this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this.image && (this.image.removeAttribute("src"), delete this.image)
                    },
                    update: function(e) {
                        void 0 !== e && (this.rotation = e);
                        var t = (this.rotation + this.pdfPageRotate) % 360;
                        this.viewport = this.viewport.clone({
                            scale: 1,
                            rotation: t
                        }), this.reset()
                    },
                    cancelRendering: function() {
                        this.renderTask && (this.renderTask.cancel(), this.renderTask = null), this.renderingState = o.INITIAL, this.resume = null
                    },
                    _getPageDrawContext: function(e) {
                        var t = document.createElement("canvas");
                        this.canvas = t, t.mozOpaque = !0;
                        var n = t.getContext("2d", {
                                alpha: !1
                            }),
                            i = s(n);
                        return t.width = this.canvasWidth * i.sx | 0, t.height = this.canvasHeight * i.sy | 0, t.style.width = this.canvasWidth + "px", t.style.height = this.canvasHeight + "px", !e && i.scaled && n.scale(i.sx, i.sy), n
                    },
                    _convertCanvasToImage: function() {
                        if (this.canvas && this.renderingState === o.FINISHED) {
                            var e = this.renderingId,
                                t = a.get("thumb_page_canvas", {
                                    page: this.pageId
                                }, "Thumbnail of Page {{page}}");
                            if (this.disableCanvasToImageConversion) return this.canvas.id = e, this.canvas.className = "thumbnailImage", this.canvas.setAttribute("aria-label", t), this.div.setAttribute("data-loaded", !0), void this.ring.appendChild(this.canvas);
                            var n = document.createElement("img");
                            n.id = e, n.className = "thumbnailImage", n.setAttribute("aria-label", t), n.style.width = this.canvasWidth + "px", n.style.height = this.canvasHeight + "px", n.src = this.canvas.toDataURL(), this.image = n, this.div.setAttribute("data-loaded", !0), this.ring.appendChild(n), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas
                        }
                    },
                    draw: function() {
                        function e(e) {
                            if (h === r.renderTask && (r.renderTask = null), "cancelled" === e) return void n(e);
                            r.renderingState = o.FINISHED, r._convertCanvasToImage(), e ? n(e) : t(void 0)
                        }
                        if (this.renderingState !== o.INITIAL) return console.error("Must be in new state before drawing"), Promise.resolve(void 0);
                        this.renderingState = o.RUNNING;
                        var t, n, i = new Promise(function(e, i) {
                                t = e, n = i
                            }),
                            r = this,
                            a = this._getPageDrawContext(),
                            s = this.viewport.clone({
                                scale: this.scale
                            }),
                            c = function(e) {
                                if (!r.renderingQueue.isHighestPriority(r)) return r.renderingState = o.PAUSED, void(r.resume = function() {
                                    r.renderingState = o.RUNNING, e()
                                });
                                e()
                            },
                            l = {
                                canvasContext: a,
                                viewport: s
                            },
                            h = this.renderTask = this.pdfPage.render(l);
                        return h.onContinue = c, h.promise.then(function() {
                            e(null)
                        }, function(t) {
                            e(t)
                        }), i
                    },
                    setImage: function(t) {
                        if (this.renderingState === o.INITIAL) {
                            var n = t.canvas;
                            if (n) {
                                this.pdfPage || this.setPdfPage(t.pdfPage), this.renderingState = o.FINISHED;
                                var i = this._getPageDrawContext(!0),
                                    r = i.canvas;
                                if (n.width <= 2 * r.width) return i.drawImage(n, 0, 0, n.width, n.height, 0, 0, r.width, r.height), void this._convertCanvasToImage();
                                for (var a = r.width << 3, s = r.height << 3, c = e(a, s), l = c.getContext("2d"); a > n.width || s > n.height;) a >>= 1, s >>= 1;
                                for (l.drawImage(n, 0, 0, n.width, n.height, 0, 0, a, s); a > 2 * r.width;) l.drawImage(c, 0, 0, a, s, 0, 0, a >> 1, s >> 1), a >>= 1, s >>= 1;
                                i.drawImage(c, 0, 0, a, s, 0, 0, r.width, r.height), this._convertCanvasToImage()
                            }
                        }
                    },
                    get pageId() {
                        return null !== this.pageLabel ? this.pageLabel : this.id
                    },
                    setPageLabel: function(e) {
                        if (this.pageLabel = "string" == typeof e ? e : null, this.anchor.title = a.get("thumb_page_title", {
                                page: this.pageId
                            }, "Page {{page}}"), this.renderingState === o.FINISHED) {
                            var t = a.get("thumb_page_canvas", {
                                page: this.pageId
                            }, "Thumbnail of Page {{page}}");
                            this.image ? this.image.setAttribute("aria-label", t) : this.disableCanvasToImageConversion && this.canvas && this.canvas.setAttribute("aria-label", t)
                        }
                    }
                }, t
            }();
        h.tempImageCache = null, t.PDFThumbnailView = h
    }, function(e, t, n) {
        var i = n(0),
            r = n(23),
            a = i.watchScroll,
            s = i.getVisibleElements,
            o = i.scrollIntoView,
            c = r.PDFThumbnailView,
            l = function() {
                function e(e) {
                    this.container = e.container, this.renderingQueue = e.renderingQueue, this.linkService = e.linkService, this.scroll = a(this.container, this._scrollUpdated.bind(this)), this._resetView()
                }
                return e.prototype = {
                    _scrollUpdated: function() {
                        this.renderingQueue.renderHighestPriority()
                    },
                    getThumbnail: function(e) {
                        return this.thumbnails[e]
                    },
                    _getVisibleThumbs: function() {
                        return s(this.container, this.thumbnails)
                    },
                    scrollThumbnailIntoView: function(e) {
                        var t = document.querySelector(".thumbnail.selected");
                        t && t.classList.remove("selected");
                        var n = document.querySelector('div.thumbnail[data-page-number="' + e + '"]');
                        n && n.classList.add("selected");
                        var i = this._getVisibleThumbs(),
                            r = i.views.length;
                        if (r > 0) {
                            var a = i.first.id,
                                s = r > 1 ? i.last.id : a;
                            (e <= a || e >= s) && o(n, {
                                top: -19
                            })
                        }
                    },
                    get pagesRotation() {
                        return this._pagesRotation
                    },
                    set pagesRotation(e) {
                        this._pagesRotation = e;
                        for (var t = 0, n = this.thumbnails.length; t < n; t++) {
                            this.thumbnails[t].update(e)
                        }
                    },
                    cleanup: function() {
                        var e = c.tempImageCache;
                        e && (e.width = 0, e.height = 0), c.tempImageCache = null
                    },
                    _resetView: function() {
                        this.thumbnails = [], this._pageLabels = null, this._pagesRotation = 0, this._pagesRequests = [], this.container.textContent = ""
                    },
                    setDocument: function(e) {
                        return this.pdfDocument && (this._cancelRendering(), this._resetView()), this.pdfDocument = e, e ? e.getPage(1).then(function(t) {
                            for (var n = e.numPages, i = t.getViewport(1), r = 1; r <= n; ++r) {
                                var a = new c({
                                    container: this.container,
                                    id: r,
                                    defaultViewport: i.clone(),
                                    linkService: this.linkService,
                                    renderingQueue: this.renderingQueue,
                                    disableCanvasToImageConversion: !1
                                });
                                this.thumbnails.push(a)
                            }
                        }.bind(this)) : Promise.resolve()
                    },
                    _cancelRendering: function() {
                        for (var e = 0, t = this.thumbnails.length; e < t; e++) this.thumbnails[e] && this.thumbnails[e].cancelRendering()
                    },
                    setPageLabels: function(e) {
                        if (this.pdfDocument) {
                            e ? e instanceof Array && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error("PDFThumbnailViewer_setPageLabels: Invalid page labels.")) : this._pageLabels = null;
                            for (var t = 0, n = this.thumbnails.length; t < n; t++) {
                                var i = this.thumbnails[t],
                                    r = this._pageLabels && this._pageLabels[t];
                                i.setPageLabel(r)
                            }
                        }
                    },
                    _ensurePdfPageLoaded: function(e) {
                        if (e.pdfPage) return Promise.resolve(e.pdfPage);
                        var t = e.id;
                        if (this._pagesRequests[t]) return this._pagesRequests[t];
                        var n = this.pdfDocument.getPage(t).then(function(n) {
                            return e.setPdfPage(n), this._pagesRequests[t] = null, n
                        }.bind(this));
                        return this._pagesRequests[t] = n, n
                    },
                    forceRendering: function() {
                        var e = this._getVisibleThumbs(),
                            t = this.renderingQueue.getHighestPriority(e, this.thumbnails, this.scroll.down);
                        return !!t && (this._ensurePdfPageLoaded(t).then(function() {
                            this.renderingQueue.renderView(t)
                        }.bind(this)), !0)
                    }
                }, e
            }();
        t.PDFThumbnailViewer = l
    }, function(e, t, n) {
        var i = n(0),
            r = n(20),
            a = n(3),
            s = n(27),
            o = n(10),
            c = n(5),
            l = n(2),
            h = n(1),
            u = i.UNKNOWN_SCALE,
            d = i.SCROLLBAR_PADDING,
            f = i.VERTICAL_PADDING,
            p = i.MAX_AUTO_SCALE,
            g = i.CSS_UNITS,
            m = i.DEFAULT_SCALE,
            v = i.DEFAULT_SCALE_VALUE,
            b = i.RendererType,
            w = i.scrollIntoView,
            y = i.watchScroll,
            A = i.getVisibleElements,
            S = r.PDFPageView,
            P = a.RenderingStates,
            x = a.PDFRenderingQueue,
            C = s.TextLayerBuilder,
            _ = o.AnnotationLayerBuilder,
            L = c.SimpleLinkService,
            k = {
                UNKNOWN: 0,
                NORMAL: 1,
                CHANGING: 2,
                FULLSCREEN: 3
            },
            T = function() {
                function e(e) {
                    var t = [];
                    this.push = function(n) {
                        var i = t.indexOf(n);
                        i >= 0 && t.splice(i, 1), t.push(n), t.length > e && t.shift().destroy()
                    }, this.resize = function(n) {
                        for (e = n; t.length > e;) t.shift().destroy()
                    }
                }

                function t(e, t) {
                    return t === e || Math.abs(t - e) < 1e-15
                }

                function n(e) {
                    return e.width <= e.height
                }

                function i(e) {
                    this.container = e.container, this.viewer = e.viewer || e.container.firstElementChild, this.eventBus = e.eventBus || l.getGlobalEventBus(), this.linkService = e.linkService || new L, this.downloadManager = e.downloadManager || null, this.removePageBorders = e.removePageBorders || !1, this.enhanceTextSelection = e.enhanceTextSelection || !1, this.renderInteractiveForms = e.renderInteractiveForms || !1, this.enablePrintAutoRotate = e.enablePrintAutoRotate || !1, this.renderer = e.renderer || b.CANVAS, this.defaultRenderingQueue = !e.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new x, this.renderingQueue.setViewer(this)) : this.renderingQueue = e.renderingQueue, this.scroll = y(this.container, this._scrollUpdate.bind(this)), this.presentationModeState = k.UNKNOWN, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders")
                }
                return i.prototype = {
                    get pagesCount() {
                        return this._pages.length
                    },
                    getPageView: function(e) {
                        return this._pages[e]
                    },
                    get pageViewsReady() {
                        return this._pageViewsReady
                    },
                    get currentPageNumber() {
                        return this._currentPageNumber
                    },
                    set currentPageNumber(e) {
                        if ((0 | e) !== e) throw new Error("Invalid page number.");
                        if (!this.pdfDocument) return void(this._currentPageNumber = e);
                        this._setCurrentPageNumber(e, !0)
                    },
                    _setCurrentPageNumber: function(e, t) {
                        if (this._currentPageNumber === e) return void(t && this._resetCurrentPageView());
                        if (!(0 < e && e <= this.pagesCount)) return void console.error('PDFViewer_setCurrentPageNumber: "' + e + '" is out of bounds.');
                        var n = {
                            source: this,
                            pageNumber: e,
                            pageLabel: this._pageLabels && this._pageLabels[e - 1]
                        };
                        this._currentPageNumber = e, this.eventBus.dispatch("pagechanging", n), this.eventBus.dispatch("pagechange", n), t && this._resetCurrentPageView()
                    },
                    get currentPageLabel() {
                        return this._pageLabels && this._pageLabels[this._currentPageNumber - 1]
                    },
                    set currentPageLabel(e) {
                        var t = 0 | e;
                        if (this._pageLabels) {
                            var n = this._pageLabels.indexOf(e);
                            n >= 0 && (t = n + 1)
                        }
                        this.currentPageNumber = t
                    },
                    get currentScale() {
                        return this._currentScale !== u ? this._currentScale : m
                    },
                    set currentScale(e) {
                        if (isNaN(e)) throw new Error("Invalid numeric scale");
                        if (!this.pdfDocument) return this._currentScale = e, void(this._currentScaleValue = e !== u ? e.toString() : null);
                        this._setScale(e, !1)
                    },
                    get currentScaleValue() {
                        return this._currentScaleValue
                    },
                    set currentScaleValue(e) {
                        if (!this.pdfDocument) return this._currentScale = isNaN(e) ? u : e, void(this._currentScaleValue = e.toString());
                        this._setScale(e, !1)
                    },
                    get pagesRotation() {
                        return this._pagesRotation
                    },
                    set pagesRotation(e) {
                        if ("number" != typeof e || e % 90 != 0) throw new Error("Invalid pages rotation angle.");
                        if (this._pagesRotation = e, this.pdfDocument) {
                            for (var t = 0, n = this._pages.length; t < n; t++) {
                                var i = this._pages[t];
                                i.update(i.scale, e)
                            }
                            this._setScale(this._currentScaleValue, !0), this.defaultRenderingQueue && this.update()
                        }
                    },
                    setDocument: function(e) {
                        if (this.pdfDocument && (this._cancelRendering(), this._resetView()), this.pdfDocument = e, e) {
                            var t, n = e.numPages,
                                i = this,
                                r = new Promise(function(e) {
                                    t = e
                                });
                            this.pagesPromise = r, r.then(function() {
                                i._pageViewsReady = !0, i.eventBus.dispatch("pagesloaded", {
                                    source: i,
                                    pagesCount: n
                                })
                            });
                            var a = !1,
                                s = null,
                                o = new Promise(function(e) {
                                    s = e
                                });
                            this.onePageRendered = o;
                            var c = function(e) {
                                    e.onBeforeDraw = function() {
                                        i._buffer.push(this)
                                    }, e.onAfterDraw = function() {
                                        a || (a = !0, s())
                                    }
                                },
                                l = e.getPage(1);
                            return this.firstPagePromise = l, l.then(function(r) {
                                for (var a = this.currentScale, s = r.getViewport(a * g), l = 1; l <= n; ++l) {
                                    var u = null;
                                    h.PDFJS.disableTextLayer || (u = this);
                                    var d = new S({
                                        container: this.viewer,
                                        eventBus: this.eventBus,
                                        id: l,
                                        scale: a,
                                        defaultViewport: s.clone(),
                                        renderingQueue: this.renderingQueue,
                                        textLayerFactory: u,
                                        annotationLayerFactory: this,
                                        enhanceTextSelection: this.enhanceTextSelection,
                                        renderInteractiveForms: this.renderInteractiveForms,
                                        renderer: this.renderer
                                    });
                                    c(d), this._pages.push(d)
                                }
                                var f = this.linkService;
                                o.then(function() {
                                    if (h.PDFJS.disableAutoFetch) t();
                                    else
                                        for (var r = n, a = 1; a <= n; ++a) e.getPage(a).then(function(e, n) {
                                            var a = i._pages[e - 1];
                                            a.pdfPage || a.setPdfPage(n), f.cachePageRef(e, n.ref), --r || t()
                                        }.bind(null, a))
                                }), i.eventBus.dispatch("pagesinit", {
                                    source: i
                                }), this.defaultRenderingQueue && this.update(), this.findController && this.findController.resolveFirstPage()
                            }.bind(this))
                        }
                    },
                    setPageLabels: function(e) {
                        if (this.pdfDocument) {
                            e ? e instanceof Array && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error("PDFViewer_setPageLabels: Invalid page labels.")) : this._pageLabels = null;
                            for (var t = 0, n = this._pages.length; t < n; t++) {
                                var i = this._pages[t],
                                    r = this._pageLabels && this._pageLabels[t];
                                i.setPageLabel(r)
                            }
                        }
                    },
                    _resetView: function() {
                        this._pages = [], this._currentPageNumber = 1, this._currentScale = u, this._currentScaleValue = null, this._pageLabels = null, this._buffer = new e(10), this._location = null, this._pagesRotation = 0, this._pagesRequests = [], this._pageViewsReady = !1, this.viewer.textContent = ""
                    },
                    _scrollUpdate: function() {
                        if (0 !== this.pagesCount) {
                            this.update();
                            for (var e = 0, t = this._pages.length; e < t; e++) this._pages[e].updatePosition()
                        }
                    },
                    _setScaleDispatchEvent: function(e, t, n) {
                        var i = {
                            source: this,
                            scale: e,
                            presetValue: n ? t : void 0
                        };
                        this.eventBus.dispatch("scalechanging", i), this.eventBus.dispatch("scalechange", i)
                    },
                    _setScaleUpdatePages: function(e, n, i, r) {
                        if (this._currentScaleValue = n.toString(), t(this._currentScale, e)) return void(r && this._setScaleDispatchEvent(e, n, !0));
                        for (var a = 0, s = this._pages.length; a < s; a++) this._pages[a].update(e);
                        if (this._currentScale = e, !i) {
                            var o, c = this._currentPageNumber;
                            !this._location || h.PDFJS.ignoreCurrentPositionOnZoom || this.isInPresentationMode || this.isChangingPresentationMode || (c = this._location.pageNumber, o = [null, {
                                name: "XYZ"
                            }, this._location.left, this._location.top, null]), this.scrollPageIntoView({
                                pageNumber: c,
                                destArray: o,
                                allowNegativeOffset: !0
                            })
                        }
                        this._setScaleDispatchEvent(e, n, r), this.defaultRenderingQueue && this.update()
                    },
                    _setScale: function(e, t) {
                        var n = parseFloat(e);
                        if (n > 0) this._setScaleUpdatePages(n, e, t, !1);
                        else {
                            var i = this._pages[this._currentPageNumber - 1];
                            if (!i) return;
                            var r = this.isInPresentationMode || this.removePageBorders ? 0 : d,
                                a = this.isInPresentationMode || this.removePageBorders ? 0 : f,
                                s = (this.container.clientWidth - r) / i.width * i.scale,
                                o = (this.container.clientHeight - a) / i.height * i.scale;
                            switch (e) {
                                case "page-actual":
                                    n = 1;
                                    break;
                                case "page-width":
                                    n = s;
                                    break;
                                case "page-height":
                                    n = o;
                                    break;
                                case "page-fit":
                                    n = Math.min(s, o);
                                    break;
                                case "auto":
                                    var c = i.width > i.height,
                                        l = c ? Math.min(o, s) : s;
                                    n = Math.min(p, l);
                                    break;
                                default:
                                    return void console.error('PDFViewer_setScale: "' + e + '" is an unknown zoom value.')
                            }
                            this._setScaleUpdatePages(n, e, t, !0)
                        }
                    },
                    _resetCurrentPageView: function() {
                        this.isInPresentationMode && this._setScale(this._currentScaleValue, !0);
                        var e = this._pages[this._currentPageNumber - 1];
                        w(e.div)
                    },
                    scrollPageIntoView: function(e) {
                        if (this.pdfDocument) {
                            if (arguments.length > 1 || "number" == typeof e) {
                                console.warn("Call of scrollPageIntoView() with obsolete signature.");
                                var t = {};
                                "number" == typeof e && (t.pageNumber = e), arguments[1] instanceof Array && (t.destArray = arguments[1]), e = t
                            }
                            var n = e.pageNumber || 0,
                                i = e.destArray || null,
                                r = e.allowNegativeOffset || !1;
                            if (this.isInPresentationMode || !i) return void this._setCurrentPageNumber(n, !0);
                            var a = this._pages[n - 1];
                            if (!a) return void console.error('PDFViewer_scrollPageIntoView: Invalid "pageNumber" parameter.');
                            var s, o, c = 0,
                                l = 0,
                                h = 0,
                                p = 0,
                                m = a.rotation % 180 != 0,
                                b = (m ? a.height : a.width) / a.scale / g,
                                y = (m ? a.width : a.height) / a.scale / g,
                                A = 0;
                            switch (i[1].name) {
                                case "XYZ":
                                    c = i[2], l = i[3], A = i[4], c = null !== c ? c : 0, l = null !== l ? l : y;
                                    break;
                                case "Fit":
                                case "FitB":
                                    A = "page-fit";
                                    break;
                                case "FitH":
                                case "FitBH":
                                    l = i[2], A = "page-width", null === l && this._location && (c = this._location.left, l = this._location.top);
                                    break;
                                case "FitV":
                                case "FitBV":
                                    c = i[2], h = b, p = y, A = "page-height";
                                    break;
                                case "FitR":
                                    c = i[2], l = i[3], h = i[4] - c, p = i[5] - l;
                                    var S = this.removePageBorders ? 0 : d,
                                        P = this.removePageBorders ? 0 : f;
                                    s = (this.container.clientWidth - S) / h / g, o = (this.container.clientHeight - P) / p / g, A = Math.min(Math.abs(s), Math.abs(o));
                                    break;
                                default:
                                    return void console.error("PDFViewer_scrollPageIntoView: '" + i[1].name + "' is not a valid destination type.")
                            }
                            if (A && A !== this._currentScale ? this.currentScaleValue = A : this._currentScale === u && (this.currentScaleValue = v), "page-fit" === A && !i[4]) return void w(a.div);
                            var x = [a.viewport.convertToViewportPoint(c, l), a.viewport.convertToViewportPoint(c + h, l + p)],
                                C = Math.min(x[0][0], x[1][0]),
                                _ = Math.min(x[0][1], x[1][1]);
                            r || (C = Math.max(C, 0), _ = Math.max(_, 0)), w(a.div, {
                                left: C,
                                top: _
                            })
                        }
                    },
                    _updateLocation: function(e) {
                        var t = this._currentScale,
                            n = this._currentScaleValue,
                            i = parseFloat(n) === t ? Math.round(1e4 * t) / 100 : n,
                            r = e.id,
                            a = "#page=" + r;
                        a += "&zoom=" + i;
                        var s = this._pages[r - 1],
                            o = this.container,
                            c = s.getPagePoint(o.scrollLeft - e.x, o.scrollTop - e.y),
                            l = Math.round(c[0]),
                            h = Math.round(c[1]);
                        a += "," + l + "," + h, this._location = {
                            pageNumber: r,
                            scale: i,
                            top: h,
                            left: l,
                            pdfOpenParams: a
                        }
                    },
                    update: function() {
                        var e = this._getVisiblePages(),
                            t = e.views;
                        if (0 !== t.length) {
                            var n = Math.max(10, 2 * t.length + 1);
                            this._buffer.resize(n), this.renderingQueue.renderHighestPriority(e);
                            for (var i = this._currentPageNumber, r = e.first, a = 0, s = t.length, o = !1; a < s; ++a) {
                                var c = t[a];
                                if (c.percent < 100) break;
                                if (c.id === i) {
                                    o = !0;
                                    break
                                }
                            }
                            o || (i = t[0].id), this.isInPresentationMode || this._setCurrentPageNumber(i), this._updateLocation(r), this.eventBus.dispatch("updateviewarea", {
                                source: this,
                                location: this._location
                            })
                        }
                    },
                    containsElement: function(e) {
                        return this.container.contains(e)
                    },
                    focus: function() {
                        this.container.focus()
                    },
                    get isInPresentationMode() {
                        return this.presentationModeState === k.FULLSCREEN
                    },
                    get isChangingPresentationMode() {
                        return this.presentationModeState === k.CHANGING
                    },
                    get isHorizontalScrollbarEnabled() {
                        return !this.isInPresentationMode && this.container.scrollWidth > this.container.clientWidth
                    },
                    _getVisiblePages: function() {
                        if (!this.isInPresentationMode) return A(this.container, this._pages, !0);
                        var e = [],
                            t = this._pages[this._currentPageNumber - 1];
                        return e.push({
                            id: t.id,
                            view: t
                        }), {
                            first: t,
                            last: t,
                            views: e
                        }
                    },
                    cleanup: function() {
                        for (var e = 0, t = this._pages.length; e < t; e++) this._pages[e] && this._pages[e].renderingState !== P.FINISHED && this._pages[e].reset()
                    },
                    _cancelRendering: function() {
                        for (var e = 0, t = this._pages.length; e < t; e++) this._pages[e] && this._pages[e].cancelRendering()
                    },
                    _ensurePdfPageLoaded: function(e) {
                        if (e.pdfPage) return Promise.resolve(e.pdfPage);
                        var t = e.id;
                        if (this._pagesRequests[t]) return this._pagesRequests[t];
                        var n = this.pdfDocument.getPage(t).then(function(n) {
                            return e.setPdfPage(n), this._pagesRequests[t] = null, n
                        }.bind(this));
                        return this._pagesRequests[t] = n, n
                    },
                    forceRendering: function(e) {
                        var t = e || this._getVisiblePages(),
                            n = this.renderingQueue.getHighestPriority(t, this._pages, this.scroll.down);
                        return !!n && (this._ensurePdfPageLoaded(n).then(function() {
                            this.renderingQueue.renderView(n)
                        }.bind(this)), !0)
                    },
                    getPageTextContent: function(e) {
                        return this.pdfDocument.getPage(e + 1).then(function(e) {
                            return e.getTextContent({
                                normalizeWhitespace: !0
                            })
                        })
                    },
                    createTextLayerBuilder: function(e, t, n, i) {
                        return new C({
                            textLayerDiv: e,
                            eventBus: this.eventBus,
                            pageIndex: t,
                            viewport: n,
                            findController: this.isInPresentationMode ? null : this.findController,
                            enhanceTextSelection: !this.isInPresentationMode && i
                        })
                    },
                    createAnnotationLayerBuilder: function(e, t, n) {
                        return new _({
                            pageDiv: e,
                            pdfPage: t,
                            renderInteractiveForms: n,
                            linkService: this.linkService,
                            downloadManager: this.downloadManager
                        })
                    },
                    setFindController: function(e) {
                        this.findController = e
                    },
                    getPagesOverview: function() {
                        var e = this._pages.map(function(e) {
                            var t = e.pdfPage.getViewport(1);
                            return {
                                width: t.width,
                                height: t.height,
                                rotation: t.rotation
                            }
                        });
                        if (!this.enablePrintAutoRotate) return e;
                        var t = n(e[0]);
                        return e.map(function(e) {
                            return t === n(e) ? e : {
                                width: e.height,
                                height: e.width,
                                rotation: (e.rotation + 90) % 360
                            }
                        })
                    }
                }, i
            }();
        t.PresentationModeState = k, t.PDFViewer = T
    }, function(e, t, n) {
        var i = n(0),
            r = i.SCROLLBAR_PADDING,
            a = i.mozL10n,
            s = function() {
                function e(e, t, n) {
                    this.toolbar = e.toolbar, this.toggleButton = e.toggleButton, this.toolbarButtonContainer = e.toolbarButtonContainer, this.buttons = [{
                        element: e.presentationModeButton,
                        eventName: "presentationmode",
                        close: !0
                    }, {
                        element: e.openFileButton,
                        eventName: "openfile",
                        close: !0
                    }, {
                        element: e.printButton,
                        eventName: "print",
                        close: !0
                    }, {
                        element: e.downloadButton,
                        eventName: "download",
                        close: !0
                    }, {
                        element: e.viewBookmarkButton,
                        eventName: null,
                        close: !0
                    }, {
                        element: e.firstPageButton,
                        eventName: "firstpage",
                        close: !0
                    }, {
                        element: e.lastPageButton,
                        eventName: "lastpage",
                        close: !0
                    }, {
                        element: e.pageRotateCwButton,
                        eventName: "rotatecw",
                        close: !1
                    }, {
                        element: e.pageRotateCcwButton,
                        eventName: "rotateccw",
                        close: !1
                    }, {
                        element: e.toggleHandToolButton,
                        eventName: "togglehandtool",
                        close: !0
                    }, {
                        element: e.documentPropertiesButton,
                        eventName: "documentproperties",
                        close: !0
                    }], this.items = {
                        firstPage: e.firstPageButton,
                        lastPage: e.lastPageButton,
                        pageRotateCw: e.pageRotateCwButton,
                        pageRotateCcw: e.pageRotateCcwButton
                    }, this.mainContainer = t, this.eventBus = n, this.opened = !1, this.containerHeight = null, this.previousContainerHeight = null, this.reset(), this._bindClickListeners(), this._bindHandToolListener(e.toggleHandToolButton), this.eventBus.on("resize", this._setMaxHeight.bind(this))
                }
                return e.prototype = {
                    get isOpen() {
                        return this.opened
                    },
                    setPageNumber: function(e) {
                        this.pageNumber = e, this._updateUIState()
                    },
                    setPagesCount: function(e) {
                        this.pagesCount = e, this._updateUIState()
                    },
                    reset: function() {
                        this.pageNumber = 0, this.pagesCount = 0, this._updateUIState()
                    },
                    _updateUIState: function() {
                        var e = this.items;
                        e.firstPage.disabled = this.pageNumber <= 1, e.lastPage.disabled = this.pageNumber >= this.pagesCount, e.pageRotateCw.disabled = 0 === this.pagesCount, e.pageRotateCcw.disabled = 0 === this.pagesCount
                    },
                    _bindClickListeners: function() {
                        this.toggleButton.addEventListener("click", this.toggle.bind(this));
                        for (var e in this.buttons) {
                            var t = this.buttons[e].element,
                                n = this.buttons[e].eventName,
                                i = this.buttons[e].close;
                            t.addEventListener("click", function(e, t) {
                                null !== e && this.eventBus.dispatch(e, {
                                    source: this
                                }), t && this.close()
                            }.bind(this, n, i))
                        }
                    },
                    _bindHandToolListener: function(e) {
                        var t = !1;
                        this.eventBus.on("handtoolchanged", function(n) {
                            t !== n.isActive && (t = n.isActive, t ? (e.title = a.get("hand_tool_disable.title", null, "Disable hand tool"), e.firstElementChild.textContent = a.get("hand_tool_disable_label", null, "Disable hand tool")) : (e.title = a.get("hand_tool_enable.title", null, "Enable hand tool"), e.firstElementChild.textContent = a.get("hand_tool_enable_label", null, "Enable hand tool")))
                        })
                    },
                    open: function() {
                        this.opened || (this.opened = !0, this._setMaxHeight(), this.toggleButton.classList.add("toggled"), this.toolbar.classList.remove("hidden"))
                    },
                    close: function() {
                        this.opened && (this.opened = !1, this.toolbar.classList.add("hidden"), this.toggleButton.classList.remove("toggled"))
                    },
                    toggle: function() {
                        this.opened ? this.close() : this.open()
                    },
                    _setMaxHeight: function() {
                        this.opened && (this.containerHeight = this.mainContainer.clientHeight, this.containerHeight !== this.previousContainerHeight && (this.toolbarButtonContainer.setAttribute("style", "max-height: " + (this.containerHeight - r) + "px;"), this.previousContainerHeight = this.containerHeight))
                    }
                }, e
            }();
        t.SecondaryToolbar = s
    }, function(e, t, n) {
        function i() {}
        var r = n(2),
            a = n(1),
            s = function() {
                function e(e) {
                    this.textLayerDiv = e.textLayerDiv, this.eventBus = e.eventBus || r.getGlobalEventBus(), this.textContent = null, this.renderingDone = !1, this.pageIdx = e.pageIndex, this.pageNumber = this.pageIdx + 1, this.matches = [], this.viewport = e.viewport, this.textDivs = [], this.findController = e.findController || null, this.textLayerRenderTask = null, this.enhanceTextSelection = e.enhanceTextSelection, this._bindMouse()
                }
                return e.prototype = {
                    _finishRendering: function() {
                        if (this.renderingDone = !0, !this.enhanceTextSelection) {
                            var e = document.createElement("div");
                            e.className = "endOfContent", this.textLayerDiv.appendChild(e)
                        }
                        this.eventBus.dispatch("textlayerrendered", {
                            source: this,
                            pageNumber: this.pageNumber,
                            numTextDivs: this.textDivs.length
                        })
                    },
                    render: function(e) {
                        if (this.textContent && !this.renderingDone) {
                            this.cancel(), this.textDivs = [];
                            var t = document.createDocumentFragment();
                            this.textLayerRenderTask = a.renderTextLayer({
                                textContent: this.textContent,
                                container: t,
                                viewport: this.viewport,
                                textDivs: this.textDivs,
                                timeout: e,
                                enhanceTextSelection: this.enhanceTextSelection
                            }), this.textLayerRenderTask.promise.then(function() {
                                this.textLayerDiv.appendChild(t), this._finishRendering(), this.updateMatches()
                            }.bind(this), function(e) {})
                        }
                    },
                    cancel: function() {
                        this.textLayerRenderTask && (this.textLayerRenderTask.cancel(), this.textLayerRenderTask = null)
                    },
                    setTextContent: function(e) {
                        this.cancel(), this.textContent = e
                    },
                    convertMatches: function(e, t) {
                        var n = 0,
                            i = 0,
                            r = this.textContent.items,
                            a = r.length - 1,
                            s = null === this.findController ? 0 : this.findController.state.query.length,
                            o = [];
                        if (!e) return o;
                        for (var c = 0, l = e.length; c < l; c++) {
                            for (var h = e[c]; n !== a && h >= i + r[n].str.length;) i += r[n].str.length, n++;
                            n === r.length && console.error("Could not find a matching mapping");
                            var u = {
                                begin: {
                                    divIdx: n,
                                    offset: h - i
                                }
                            };
                            for (h += t ? t[c] : s; n !== a && h > i + r[n].str.length;) i += r[n].str.length, n++;
                            u.end = {
                                divIdx: n,
                                offset: h - i
                            }, o.push(u)
                        }
                        return o
                    },
                    renderMatches: function(e) {
                        function t(e, t) {
                            var i = e.divIdx;
                            r[i].textContent = "", n(i, 0, e.offset, t)
                        }

                        function n(e, t, n, a) {
                            var s = r[e],
                                o = i[e].str.substring(t, n),
                                c = document.createTextNode(o);
                            if (a) {
                                var l = document.createElement("span");
                                return l.className = a, l.appendChild(c), void s.appendChild(l)
                            }
                            s.appendChild(c)
                        }
                        if (0 !== e.length) {
                            var i = this.textContent.items,
                                r = this.textDivs,
                                a = null,
                                s = this.pageIdx,
                                o = null !== this.findController && s === this.findController.selected.pageIdx,
                                c = null === this.findController ? -1 : this.findController.selected.matchIdx,
                                l = null !== this.findController && this.findController.state.highlightAll,
                                h = {
                                    divIdx: -1,
                                    offset: void 0
                                },
                                u = c,
                                d = u + 1;
                            if (l) u = 0, d = e.length;
                            else if (!o) return;
                            for (var f = u; f < d; f++) {
                                var p = e[f],
                                    g = p.begin,
                                    m = p.end,
                                    v = o && f === c,
                                    b = v ? " selected" : "";
                                if (this.findController && this.findController.updateMatchPosition(s, f, r, g.divIdx), a && g.divIdx === a.divIdx ? n(a.divIdx, a.offset, g.offset) : (null !== a && n(a.divIdx, a.offset, h.offset), t(g)), g.divIdx === m.divIdx) n(g.divIdx, g.offset, m.offset, "highlight" + b);
                                else {
                                    n(g.divIdx, g.offset, h.offset, "highlight begin" + b);
                                    for (var w = g.divIdx + 1, y = m.divIdx; w < y; w++) r[w].className = "highlight middle" + b;
                                    t(m, "highlight end" + b)
                                }
                                a = m
                            }
                            a && n(a.divIdx, a.offset, h.offset)
                        }
                    },
                    updateMatches: function() {
                        if (this.renderingDone) {
                            for (var e = this.matches, t = this.textDivs, n = this.textContent.items, i = -1, r = 0, a = e.length; r < a; r++) {
                                for (var s = e[r], o = Math.max(i, s.begin.divIdx), c = o, l = s.end.divIdx; c <= l; c++) {
                                    var h = t[c];
                                    h.textContent = n[c].str, h.className = ""
                                }
                                i = s.end.divIdx + 1
                            }
                            if (null !== this.findController && this.findController.active) {
                                var u, d;
                                null !== this.findController && (u = this.findController.pageMatches[this.pageIdx] || null, d = this.findController.pageMatchesLength ? this.findController.pageMatchesLength[this.pageIdx] || null : null), this.matches = this.convertMatches(u, d), this.renderMatches(this.matches)
                            }
                        }
                    },
                    _bindMouse: function() {
                        var e = this.textLayerDiv,
                            t = this,
                            n = null;
                        e.addEventListener("mousedown", function(i) {
                            if (t.enhanceTextSelection && t.textLayerRenderTask) return t.textLayerRenderTask.expandTextDivs(!0), void(n && (clearTimeout(n), n = null));
                            var r = e.querySelector(".endOfContent");
                            if (r) {
                                var a = i.target !== e;
                                if (a = a && "none" !== window.getComputedStyle(r).getPropertyValue("-moz-user-select")) {
                                    var s = e.getBoundingClientRect(),
                                        o = Math.max(0, (i.pageY - s.top) / s.height);
                                    r.style.top = (100 * o).toFixed(2) + "%"
                                }
                                r.classList.add("active")
                            }
                        }), e.addEventListener("mouseup", function(i) {
                            if (t.enhanceTextSelection && t.textLayerRenderTask) return void(n = setTimeout(function() {
                                t.textLayerRenderTask && t.textLayerRenderTask.expandTextDivs(!1), n = null
                            }, 300));
                            var r = e.querySelector(".endOfContent");
                            r && (r.style.top = "", r.classList.remove("active"))
                        })
                    }
                }, e
            }();
        i.prototype = {
            createTextLayerBuilder: function(e, t, n, i) {
                return new s({
                    textLayerDiv: e,
                    pageIndex: t,
                    viewport: n,
                    enhanceTextSelection: i
                })
            }
        }, t.TextLayerBuilder = s, t.DefaultTextLayerFactory = i
    }, function(e, t, n) {
        var i = n(0),
            r = i.mozL10n,
            a = i.noContextMenuHandler,
            s = i.animationStarted,
            o = i.localized,
            c = i.DEFAULT_SCALE_VALUE,
            l = i.DEFAULT_SCALE,
            h = i.MIN_SCALE,
            u = i.MAX_SCALE,
            d = function() {
                function e(e, t, n) {
                    this.toolbar = e.container, this.mainContainer = t, this.eventBus = n, this.items = e, this._wasLocalized = !1, this.reset(), this._bindListeners()
                }
                return e.prototype = {
                    setPageNumber: function(e, t) {
                        this.pageNumber = e, this.pageLabel = t, this._updateUIState(!1)
                    },
                    setPagesCount: function(e, t) {
                        this.pagesCount = e, this.hasPageLabels = t, this._updateUIState(!0)
                    },
                    setPageScale: function(e, t) {
                        this.pageScaleValue = e, this.pageScale = t, this._updateUIState(!1)
                    },
                    reset: function() {
                        this.pageNumber = 0, this.pageLabel = null, this.hasPageLabels = !1, this.pagesCount = 0, this.pageScaleValue = c, this.pageScale = l, this._updateUIState(!0)
                    },
                    _bindListeners: function() {
                        var e = this.eventBus,
                            t = this,
                            n = this.items;
                        n.previous.addEventListener("click", function() {
                            e.dispatch("previouspage")
                        }), n.next.addEventListener("click", function() {
                            e.dispatch("nextpage")
                        }), n.zoomIn.addEventListener("click", function() {
                            e.dispatch("zoomin")
                        }), n.zoomOut.addEventListener("click", function() {
                            e.dispatch("zoomout")
                        }), n.pageNumber.addEventListener("click", function() {
                            this.select()
                        }), n.pageNumber.addEventListener("change", function() {
                            e.dispatch("pagenumberchanged", {
                                source: t,
                                value: this.value
                            })
                        }), n.scaleSelect.addEventListener("change", function() {
                            "custom" !== this.value && e.dispatch("scalechanged", {
                                source: t,
                                value: this.value
                            })
                        }), n.presentationModeButton.addEventListener("click", function(t) {
                            e.dispatch("presentationmode")
                        }), n.openFile.addEventListener("click", function(t) {
                            e.dispatch("openfile")
                        }), n.print.addEventListener("click", function(t) {
                            e.dispatch("print")
                        }), n.download.addEventListener("click", function(t) {
                            e.dispatch("download")
                        }), n.scaleSelect.oncontextmenu = a, o.then(this._localized.bind(this))
                    },
                    _localized: function() {
                        this._wasLocalized = !0, this._adjustScaleWidth(), this._updateUIState(!0)
                    },
                    _updateUIState: function(e) {
                        if (this._wasLocalized) {
                            var t = this.pageNumber,
                                n = (this.pageScaleValue || this.pageScale).toString(),
                                i = this.pageScale,
                                a = this.items,
                                s = this.pagesCount;
                            e && (this.hasPageLabels ? a.pageNumber.type = "text" : (a.pageNumber.type = "number", a.numPages.textContent = r.get("of_pages", {
                                    pagesCount: s
                                }, "of {{pagesCount}}")), a.pageNumber.max = s), this.hasPageLabels ? (a.pageNumber.value = this.pageLabel, a.numPages.textContent = r.get("page_of_pages", {
                                    pageNumber: t,
                                    pagesCount: s
                                }, "({{pageNumber}} of {{pagesCount}})")) : a.pageNumber.value = t, a.previous.disabled = t <= 1, a.next.disabled = t >= s, a.zoomOut.disabled = i <= h, a.zoomIn.disabled = i >= u,
                                function(e, t) {
                                    for (var n = a.scaleSelect.options, i = !1, s = 0, o = n.length; s < o; s++) {
                                        var c = n[s];
                                        c.value === e ? (c.selected = !0, i = !0) : c.selected = !1
                                    }
                                    if (!i) {
                                        var l = Math.round(1e4 * t) / 100;
                                        a.customScaleOption.textContent = r.get("page_scale_percent", {
                                            scale: l
                                        }, "{{scale}}%"), a.customScaleOption.selected = !0
                                    }
                                }(n, i)
                        }
                    },
                    updateLoadingIndicatorState: function(e) {
                        var t = this.items.pageNumber;
                        e ? t.classList.add("visiblePageIsLoading") : t.classList.remove("visiblePageIsLoading")
                    },
                    _adjustScaleWidth: function() {
                        var e = this.items.scaleSelectContainer,
                            t = this.items.scaleSelect;
                        s.then(function() {
                            if (0 === e.clientWidth && e.setAttribute("style", "display: inherit;"), e.clientWidth > 0) {
                                t.setAttribute("style", "min-width: inherit;");
                                var n = t.clientWidth + 8;
                                t.setAttribute("style", "min-width: " + (n + 22) + "px;"), e.setAttribute("style", "min-width: " + n + "px; max-width: " + n + "px;")
                            }
                        })
                    }
                }, e
            }();
        t.Toolbar = d
    }, function(e, t, n) {
        var i = 20,
            r = function() {
                function e(e, t) {
                    this.fingerprint = e, this.cacheSize = t || i, this.isInitializedPromiseResolved = !1, this.initializedPromise = this._readFromStorage().then(function(e) {
                        this.isInitializedPromiseResolved = !0;
                        var t = JSON.parse(e || "{}");
                        "files" in t || (t.files = []), t.files.length >= this.cacheSize && t.files.shift();
                        for (var n, i = 0, r = t.files.length; i < r; i++) {
                            if (t.files[i].fingerprint === this.fingerprint) {
                                n = i;
                                break
                            }
                        }
                        "number" != typeof n && (n = t.files.push({
                            fingerprint: this.fingerprint
                        }) - 1), this.file = t.files[n], this.database = t
                    }.bind(this))
                }
                return e.prototype = {
                    _writeToStorage: function() {
                        return new Promise(function(e) {
                            var t = JSON.stringify(this.database);
                            localStorage.setItem("pdfjs.history", t), e()
                        }.bind(this))
                    },
                    _readFromStorage: function() {
                        return new Promise(function(e) {
                            var t = localStorage.getItem("pdfjs.history");
                            if (!t) {
                                var n = localStorage.getItem("database");
                                if (n) try {
                                    "string" == typeof JSON.parse(n).files[0].fingerprint && (localStorage.setItem("pdfjs.history", n), localStorage.removeItem("database"), t = n)
                                } catch (e) {}
                            }
                            e(t)
                        })
                    },
                    set: function(e, t) {
                        if (this.isInitializedPromiseResolved) return this.file[e] = t, this._writeToStorage()
                    },
                    setMultiple: function(e) {
                        if (this.isInitializedPromiseResolved) {
                            for (var t in e) this.file[t] = e[t];
                            return this._writeToStorage()
                        }
                    },
                    get: function(e, t) {
                        return this.isInitializedPromiseResolved ? this.file[e] || t : t
                    }
                }, e
            }();
        t.ViewHistory = r
    }, function(e, t, n) {
        function i() {
            return {
                appContainer: document.body,
                mainContainer: document.getElementById("viewerContainer"),
                viewerContainer: document.getElementById("viewer"),
                eventBus: null,
                toolbar: {
                    container: document.getElementById("toolbarViewer"),
                    numPages: document.getElementById("numPages"),
                    pageNumber: document.getElementById("pageNumber"),
                    scaleSelectContainer: document.getElementById("scaleSelectContainer"),
                    scaleSelect: document.getElementById("scaleSelect"),
                    customScaleOption: document.getElementById("customScaleOption"),
                    previous: document.getElementById("previous"),
                    next: document.getElementById("next"),
                    zoomIn: document.getElementById("zoomIn"),
                    zoomOut: document.getElementById("zoomOut"),
                    viewFind: document.getElementById("viewFind"),
                    openFile: document.getElementById("openFile"),
                    print: document.getElementById("print"),
                    presentationModeButton: document.getElementById("presentationMode"),
                    download: document.getElementById("download"),
                    viewBookmark: document.getElementById("viewBookmark")
                },
                secondaryToolbar: {
                    toolbar: document.getElementById("secondaryToolbar"),
                    toggleButton: document.getElementById("secondaryToolbarToggle"),
                    toolbarButtonContainer: document.getElementById("secondaryToolbarButtonContainer"),
                    presentationModeButton: document.getElementById("secondaryPresentationMode"),
                    openFileButton: document.getElementById("secondaryOpenFile"),
                    printButton: document.getElementById("secondaryPrint"),
                    downloadButton: document.getElementById("secondaryDownload"),
                    viewBookmarkButton: document.getElementById("secondaryViewBookmark"),
                    firstPageButton: document.getElementById("firstPage"),
                    lastPageButton: document.getElementById("lastPage"),
                    pageRotateCwButton: document.getElementById("pageRotateCw"),
                    pageRotateCcwButton: document.getElementById("pageRotateCcw"),
                    toggleHandToolButton: document.getElementById("toggleHandTool"),
                    documentPropertiesButton: document.getElementById("documentProperties")
                },
                fullscreen: {
                    contextFirstPage: document.getElementById("contextFirstPage"),
                    contextLastPage: document.getElementById("contextLastPage"),
                    contextPageRotateCw: document.getElementById("contextPageRotateCw"),
                    contextPageRotateCcw: document.getElementById("contextPageRotateCcw")
                },
                sidebar: {
                    mainContainer: document.getElementById("mainContainer"),
                    outerContainer: document.getElementById("outerContainer"),
                    toggleButton: document.getElementById("sidebarToggle"),
                    thumbnailButton: document.getElementById("viewThumbnail"),
                    outlineButton: document.getElementById("viewOutline"),
                    attachmentsButton: document.getElementById("viewAttachments"),
                    thumbnailView: document.getElementById("thumbnailView"),
                    outlineView: document.getElementById("outlineView"),
                    attachmentsView: document.getElementById("attachmentsView")
                },
                findBar: {
                    bar: document.getElementById("findbar"),
                    toggleButton: document.getElementById("viewFind"),
                    findField: document.getElementById("findInput"),
                    highlightAllCheckbox: document.getElementById("findHighlightAll"),
                    caseSensitiveCheckbox: document.getElementById("findMatchCase"),
                    findMsg: document.getElementById("findMsg"),
                    findResultsCount: document.getElementById("findResultsCount"),
                    findStatusIcon: document.getElementById("findStatusIcon"),
                    findPreviousButton: document.getElementById("findPrevious"),
                    findNextButton: document.getElementById("findNext")
                },
                passwordOverlay: {
                    overlayName: "passwordOverlay",
                    container: document.getElementById("passwordOverlay"),
                    label: document.getElementById("passwordText"),
                    input: document.getElementById("password"),
                    submitButton: document.getElementById("passwordSubmit"),
                    cancelButton: document.getElementById("passwordCancel")
                },
                documentProperties: {
                    overlayName: "documentPropertiesOverlay",
                    container: document.getElementById("documentPropertiesOverlay"),
                    closeButton: document.getElementById("documentPropertiesClose"),
                    fields: {
                        fileName: document.getElementById("fileNameField"),
                        fileSize: document.getElementById("fileSizeField"),
                        title: document.getElementById("titleField"),
                        author: document.getElementById("authorField"),
                        subject: document.getElementById("subjectField"),
                        keywords: document.getElementById("keywordsField"),
                        creationDate: document.getElementById("creationDateField"),
                        modificationDate: document.getElementById("modificationDateField"),
                        creator: document.getElementById("creatorField"),
                        producer: document.getElementById("producerField"),
                        version: document.getElementById("versionField"),
                        pageCount: document.getElementById("pageCountField")
                    }
                },
                errorWrapper: {
                    container: document.getElementById("errorWrapper"),
                    errorMessage: document.getElementById("errorMessage"),
                    closeButton: document.getElementById("errorClose"),
                    errorMoreInfo: document.getElementById("errorMoreInfo"),
                    moreInfoButton: document.getElementById("errorShowMore"),
                    lessInfoButton: document.getElementById("errorShowLess")
                },
                printContainer: document.getElementById("printContainer"),
                openFileInputName: "fileInput",
                debuggerScriptPath: "./debugger.js",
                defaultUrl: s
            }
        }

        function r() {
            var e = i();
            window.PDFViewerApplication = a.PDFViewerApplication, a.PDFViewerApplication.run(e)
        }
        var a, s = "compressed.tracemonkey-pldi-09.pdf";
        a = n(6), n(9), "interactive" === document.readyState || "complete" === document.readyState ? r() : document.addEventListener("DOMContentLoaded", r, !0)
    }]);

