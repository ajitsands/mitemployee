/*!
 * TOAST UI Calendar
 * @version 1.12.14 | Tue Sep 22 2020
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t(require("tui-code-snippet"), require("tui-date-picker")))
        : "function" == typeof define && define.amd
        ? define(["tui-code-snippet", "tui-date-picker"], t)
        : "object" == typeof exports
        ? (exports.Calendar = t(require("tui-code-snippet"), require("tui-date-picker")))
        : ((e.tui = e.tui || {}), (e.tui.Calendar = t(e.tui && e.tui.util, e.tui && e.tui.DatePicker)));
})(window, function (e, t) {
    return (function (e) {
        var t = {};
        function n(l) {
            if (t[l]) return t[l].exports;
            var o = (t[l] = { i: l, l: !1, exports: {} });
            return e[l].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, l) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var l = Object.create(null);
                if ((n.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var o in e)
                        n.d(
                            l,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return l;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = "/dist"),
            n((n.s = 36))
        );
    })([
        function (t, n) {
            t.exports = e;
        },
        function (e, t, n) {
            "use strict";
            var l,
                o = n(6),
                i = n(13),
                a = n(0),
                r = /^auto$|^$|%/;
            var s = (l = {
                    appendHTMLElement: function (e, t, n) {
                        var l;
                        return (n = n || ""), ((l = document.createElement(e)).className = n), t ? t.appendChild(l) : document.body.appendChild(l), l;
                    },
                    remove: function (e) {
                        e && e.parentNode && e.parentNode.removeChild(e);
                    },
                    get: function (e) {
                        return document.getElementById(e);
                    },
                    _matcher: function (e, t) {
                        return /^\./.test(t) ? l.hasClass(e, t.replace(".", "")) : /^#/.test(t) ? e.id === t.replace("#", "") : e.nodeName.toLowerCase() === t.toLowerCase();
                    },
                    find: function (e, t, n) {
                        var o = [],
                            i = !1,
                            r = a.isUndefined(n) || !1 === n,
                            s = a.isFunction(n);
                        return (
                            a.isString(t) && (t = l.get(t)),
                            (function e(t, a) {
                                for (var c, u = t.childNodes, d = 0, h = u.length; d < h; d += 1)
                                    if ("#text" !== (c = u[d]).nodeName)
                                        if (l._matcher(c, a)) {
                                            if ((((s && n(c)) || !s) && o.push(c), r)) {
                                                i = !0;
                                                break;
                                            }
                                        } else if (c.childNodes.length > 0 && (e(c, a), i)) break;
                            })((t = t || window.document.body), e),
                            r ? o[0] || null : o
                        );
                    },
                    closest: function (e, t, n) {
                        var o;
                        if (!e) return null;
                        if (((o = e.parentNode), !n && l._matcher(e, t))) return e;
                        for (; o && o !== window.document.body; ) {
                            if (l._matcher(o, t)) return o;
                            o = o.parentNode;
                        }
                        return null;
                    },
                    text: function (e) {
                        var t = "",
                            n = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) t += l.text(e);
                            } else if (3 === o || 4 === o) return e.nodeValue;
                        } else for (; e[n]; n += 1) t += l.text(e[n]);
                        return t;
                    },
                    setData: function (e, t, n) {
                        "dataset" in e ? (e.dataset[t] = n) : e.setAttribute("data-" + t, n);
                    },
                    getData: function (e, t) {
                        return "dataset" in e ? e.dataset[t] : e.getAttribute("data-" + t);
                    },
                    hasClass: function (e, t) {
                        var n;
                        return a.isUndefined(e.classList) ? (n = l.getClass(e)).length > 0 && new RegExp("(^|\\s)" + t + "(\\s|$)").test(n) : e.classList.contains(t);
                    },
                    addClass: function (e, t) {
                        var n;
                        a.isUndefined(e.classList)
                            ? l.hasClass(e, t) || ((n = l.getClass(e)), l.setClass(e, (n ? n + " " : "") + t))
                            : a.forEachArray(t.split(" "), function (t) {
                                  e.classList.add(t);
                              });
                    },
                    setClass: function (e, t) {
                        a.isUndefined(e.className.baseVal) ? (e.className = t) : (e.className.baseVal = t);
                    },
                    removeClass: function (e, t) {
                        var n = "";
                        a.isUndefined(e.classList) ? ((n = (" " + l.getClass(e) + " ").replace(" " + t + " ", " ")), l.setClass(e, n.replace(/^\s\s*/, "").replace(/\s\s*$/, ""))) : e.classList.remove(t);
                    },
                    getClass: function (e) {
                        return e && e.className ? (a.isUndefined(e.className.baseVal) ? e.className : e.className.baseVal) : "";
                    },
                    getStyle: function (e, t) {
                        var n,
                            l = e.style[t] || (e.currentStyle && e.currentStyle[t]);
                        return (l && "auto" !== l) || !document.defaultView || (l = (n = document.defaultView.getComputedStyle(e, null)) ? n[t] : null), "auto" === l ? null : l;
                    },
                    getComputedStyle: function (e) {
                        var t = document.defaultView;
                        return t && t.getComputedStyle
                            ? document.defaultView.getComputedStyle(e)
                            : {
                                  getPropertyValue: function (t) {
                                      var n = /(\-([a-z]){1})/g;
                                      return (
                                          "float" === t && (t = "styleFloat"),
                                          n.test(t) &&
                                              (t = t.replace(n, function () {
                                                  return arguments[2].toUpperCase();
                                              })),
                                          e.currentStyle[t] || null
                                      );
                                  },
                              };
                    },
                    setPosition: function (e, t, n) {
                        (t = a.isUndefined(t) ? 0 : t), (n = a.isUndefined(n) ? 0 : n), (e._pos = [t, n]), (e.style.left = a.isNumber(t) ? t + "px" : t), (e.style.top = a.isNumber(n) ? n + "px" : n);
                    },
                    setLTRB: function (e, t) {
                        var n;
                        ["left", "top", "right", "bottom"].forEach(function (l) {
                            (n = a.isUndefined(t[l]) ? "" : t[l]), (e.style[l] = a.isNumber(n) ? n + "px" : n);
                        });
                    },
                    getPosition: function (e, t) {
                        var n, l, o;
                        return (
                            t && (e._pos = null),
                            e._pos
                                ? e._pos
                                : ((n = 0),
                                  (l = 0),
                                  (r.test(e.style.left) || r.test(e.style.top)) && "getBoundingClientRect" in e
                                      ? ((n = (o = e.getBoundingClientRect()).left), (l = o.top))
                                      : ((n = parseFloat(e.style.left || 0)), (l = parseFloat(e.style.top || 0))),
                                  [n, l])
                        );
                    },
                    getSize: function (e) {
                        var t,
                            n = l.getStyle(e, "width"),
                            o = l.getStyle(e, "height");
                        return (
                            (r.test(n) || r.test(o) || a.isNull(n) || a.isNull(o)) && "getBoundingClientRect" in e
                                ? ((n = (t = e.getBoundingClientRect()).width || e.offsetWidth), (o = t.height || e.offsetHeight))
                                : ((n = parseFloat(n || 0)), (o = parseFloat(o || 0))),
                            [n, o]
                        );
                    },
                    getBCRect: function (e) {
                        var t = e.getBoundingClientRect();
                        return (t = a.extend({ width: e.offsetWidth, height: e.offsetHeight }, t));
                    },
                    testProp: function (e) {
                        for (var t = document.documentElement.style, n = 0, l = e.length; n < l; n += 1) if (e[n] in t) return e[n];
                        return !1;
                    },
                    getFormData: function (e) {
                        var t = new i(function () {
                                return this.length;
                            }),
                            n = function (e) {
                                return !e.disabled;
                            },
                            o = {};
                        return (
                            t.add.apply(t, l.find("input", e, n).concat(l.find("select", e, n)).concat(l.find("textarea", e, n))),
                            (t = t.groupBy(function (e) {
                                return (e && e.getAttribute("name")) || "_other";
                            })),
                            a.forEach(t, function (e, t) {
                                "_other" !== t &&
                                    e.each(function (n) {
                                        var i = n.nodeName.toLowerCase(),
                                            r = n.type,
                                            s = [];
                                        "radio" === r
                                            ? (s = [
                                                  e
                                                      .find(function (e) {
                                                          return e.checked;
                                                      })
                                                      .toArray()
                                                      .pop(),
                                              ])
                                            : "checkbox" === r
                                            ? (s = e
                                                  .find(function (e) {
                                                      return e.checked;
                                                  })
                                                  .toArray())
                                            : "select" === i
                                            ? e
                                                  .find(function (e) {
                                                      return !!e.childNodes.length;
                                                  })
                                                  .each(function (e) {
                                                      s = s.concat(
                                                          l.find("option", e, function (e) {
                                                              return e.selected;
                                                          })
                                                      );
                                                  })
                                            : (s = e
                                                  .find(function (e) {
                                                      return "" !== e.value;
                                                  })
                                                  .toArray()),
                                            (s = a.map(s, function (e) {
                                                return e.value;
                                            })).length
                                                ? 1 === s.length && (s = s[0])
                                                : (s = ""),
                                            (o[t] = s);
                                    });
                            }),
                            o
                        );
                    },
                }).testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
                c = "onselectstart" in document,
                u = "";
            (l.disableTextSelection = c
                ? function (e, t) {
                      o.on(e, "selectstart", t || o.preventDefault);
                  }
                : function (e) {
                      var t = e.style;
                      (u = t[s]), (t[s] = "none");
                  }),
                (l.enableTextSelection = c
                    ? function (e, t) {
                          o.off(window, "selectstart", t || o.preventDefault);
                      }
                    : function () {
                          document.documentElement.style[s] = u;
                      }),
                (l.disableImageDrag = function () {
                    o.on(window, "dragstart", o.preventDefault);
                }),
                (l.enableImageDrag = function () {
                    o.off(window, "dragstart", o.preventDefault);
                }),
                (e.exports = l);
        },
        function (e, t, n) {
            "use strict";
            var l = "tui-full-calendar-",
                o = new RegExp("^" + l + "weekday[\\s]tui-view-(\\d+)"),
                i = new RegExp("^" + l + "schedule(-title)?$"),
                a = {
                    throwError: function (e) {
                        alert(e);
                    },
                    cssPrefix: l,
                    classname: function (e) {
                        return "." === (e = e || "").charAt(0) ? "." + a.cssPrefix + e.slice(1) : a.cssPrefix + e;
                    },
                    allday: { getViewIDRegExp: o, checkCondRegExp: i },
                    daygrid: { getViewIDRegExp: o, checkCondRegExp: i },
                    time: { getViewIDRegExp: new RegExp("^" + l + "time-date[\\s]tui-view-(\\d+)") },
                };
            e.exports = a;
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l,
                    o,
                    i = n(4).Date,
                    a = n(26),
                    r = n(0),
                    s = /^(\d{4}[-|\/]*\d{2}[-|\/]*\d{2})\s?(\d{2}:\d{2}:\d{2})?$/,
                    c = {},
                    u = {};
                (o = {
                    YYYYMMDD: function (e) {
                        return [e.getFullYear(), l.leadingZero(e.getMonth() + 1, 2), l.leadingZero(e.getDate(), 2)].join("");
                    },
                    YYYY: function (e) {
                        return String(e.getFullYear());
                    },
                    MM: function (e) {
                        return l.leadingZero(e.getMonth() + 1, 2);
                    },
                    DD: function (e) {
                        return l.leadingZero(e.getDate(), 2);
                    },
                    "HH:mm": function (e) {
                        var t = e.getHours(),
                            n = e.getMinutes();
                        return l.leadingZero(t, 2) + ":" + l.leadingZero(n, 2);
                    },
                    "hh:mm": function (e) {
                        var t = e.getHours(),
                            n = e.getMinutes();
                        return t > 12 && (t %= 12), l.leadingZero(t, 2) + ":" + l.leadingZero(n, 2);
                    },
                    tt: function (e) {
                        return e.getHours() < 12 ? "am" : "pm";
                    },
                }),
                    (l = {
                        MILLISECONDS_PER_DAY: 864e5,
                        MILLISECONDS_PER_HOUR: 36e5,
                        MILLISECONDS_PER_MINUTES: 6e4,
                        MILLISECONDS_SCHEDULE_MIN_DURATION: 12e5,
                        _convMilliseconds: function (e, n, l) {
                            var o = { day: 0, hour: 1, minutes: 2, seconds: 3 };
                            return e in o && !t.isNaN(n) && r.reduce([n].concat([24, 60, 60, 1e3].slice(o[e])), l);
                        },
                        millisecondsTo: function (e, t) {
                            var n = c,
                                o = e + t;
                            return (
                                n[o] ||
                                    (n[o] = l._convMilliseconds(e, t, function (e, t) {
                                        return e / t;
                                    })),
                                n[o]
                            );
                        },
                        millisecondsFrom: function (e, t) {
                            var n = u,
                                o = e + t;
                            return (
                                n[o] ||
                                    (n[o] = l._convMilliseconds(e, t, function (e, t) {
                                        return e * t;
                                    })),
                                n[o]
                            );
                        },
                        minutesFromHours: function (e) {
                            return 60 * e;
                        },
                        range: function (e, t, n) {
                            for (var o = e.getTime(), r = t.getTime(), s = o, c = a(new i(e)), u = []; s <= r && r >= c.d.getTime(); ) u.push(l.start(c.d)), (s += n), c.addDate(1);
                            return u;
                        },
                        clone: function (e) {
                            return new i(e);
                        },
                        compare: function (e, t) {
                            var n = e.getTime(),
                                l = t.getTime();
                            return n < l ? -1 : n > l ? 1 : 0;
                        },
                        isSameMonth: function (e, t) {
                            return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
                        },
                        isSameDate: function (e, t) {
                            return l.isSameMonth(e, t) && e.getDate() === t.getDate();
                        },
                        isValid: function (e) {
                            return e instanceof i && !window.isNaN(e.getTime());
                        },
                        toUTC: function (e) {
                            var t = e.getTime(),
                                n = l.millisecondsFrom("minutes", new Date().getTimezoneOffset());
                            return new i(t + n);
                        },
                        leadingZero: function (e, t) {
                            var n = "",
                                l = 0;
                            if (String(e).length > t) return String(e);
                            for (; l < t - 1; l += 1) n += "0";
                            return (n + e).slice(-1 * t);
                        },
                        parse: function (e, t) {
                            var n,
                                l,
                                o,
                                a = e.match(s);
                            return (
                                r.isUndefined(t) && (t = -1),
                                !!a &&
                                    (e.length > 8
                                        ? ((n = ~e.indexOf("/") ? "/" : "-"), (l = (a = a.splice(1))[0].split(n)), (o = a[1] ? a[1].split(":") : [0, 0, 0]))
                                        : ((l = [(a = a[0]).substr(0, 4), a.substr(4, 2), a.substr(6, 2)]), (o = [0, 0, 0])),
                                    new i().setWithRaw(Number(l[0]), Number(l[1]) + t, Number(l[2]), Number(o[0]), Number(o[1]), Number(o[2]), 0))
                            );
                        },
                        raw: function (e) {
                            return { y: e.getFullYear(), M: e.getMonth(), d: e.getDate(), h: e.getHours(), m: e.getMinutes(), s: e.getSeconds(), ms: e.getMilliseconds() };
                        },
                        start: function (e) {
                            var t = e ? new i(e) : new i();
                            return t.setHours(0, 0, 0, 0), t;
                        },
                        end: function (e) {
                            var t = e ? new i(e) : new i();
                            return t.setHours(23, 59, 59, 0), t;
                        },
                        format: function (e, t) {
                            var n = t;
                            return (
                                r.forEachOwnProperties(o, function (t, l) {
                                    n = n.replace(l, t(e));
                                }),
                                n
                            );
                        },
                        startDateOfMonth: function (e) {
                            var t = new i(e);
                            return t.setDate(1), t.setHours(0, 0, 0, 0), t;
                        },
                        endDateOfMonth: function (e) {
                            var t = l.startDateOfMonth(e);
                            return t.setMonth(t.getMonth() + 1), t.setDate(t.getDate() - 1), t.setHours(23, 59, 59), t;
                        },
                        arr2dCalendar: function (e, t, n) {
                            var o,
                                s,
                                c,
                                u,
                                d,
                                h,
                                p,
                                m,
                                f = [],
                                g = t.startDayOfWeek,
                                y = r.isUndefined(t.isAlways6Week) || t.isAlways6Week,
                                S = t.visibleWeeksCount,
                                _ = t.workweek;
                            return (
                                S ? ((s = new i(e)), (c = a(new i(e))).addDate(7 * (S - 1)), (c = c.d)) : ((s = l.startDateOfMonth(e)), (c = l.endDateOfMonth(e))),
                                (o = r.range(g, 7).concat(r.range(7)).slice(0, 7)),
                                (u = r.inArray(s.getDay(), o)),
                                (h = 7 - (r.inArray(c.getDay(), o) + 1)),
                                (d = S ? 7 * S : y ? 42 : u + c.getDate() + h),
                                (p = l.start(s).addDate(-u)),
                                r.forEachArray(r.range(d), function (e) {
                                    var t;
                                    e % 7 || (m = f[e / 7] = []), (t = l.start(p)), (t = n ? n(t) : t), (_ && l.isWeekend(t.getDay())) || m.push(t), p.setDate(p.getDate() + 1);
                                }),
                                f
                            );
                        },
                        getGridLeftAndWidth: function (e, t, n, o) {
                            var i = 100 / e,
                                a = e > 5 ? 100 / (e - 1) : i,
                                s = 0,
                                c = r.range(n, 7).concat(r.range(e)).slice(0, 7);
                            return (
                                o &&
                                    (c = r.filter(c, function (e) {
                                        return !l.isWeekend(e);
                                    })),
                                (t = !o && t),
                                r.map(c, function (n) {
                                    var o,
                                        r = t ? a : i;
                                    return e > 5 && t && l.isWeekend(n) && (r = a / 2), (o = { day: n, width: r, left: s }), (s += r), o;
                                })
                            );
                        },
                        isWeekend: function (e) {
                            return 0 === e || 6 === e;
                        },
                        isBetweenWithDate: function (e, t, n) {
                            var o = "YYYYMMDD";
                            return (e = parseInt(l.format(e, o), 10)), (t = parseInt(l.format(t, o), 10)), (n = parseInt(l.format(n, o), 10)), t <= e && e <= n;
                        },
                        isStartOfDay: function (e) {
                            return !l.compare(l.start(e), e);
                        },
                        convertStartDayToLastDay: function (e) {
                            var t = new i(e);
                            return l.isStartOfDay(e) && (t.setDate(t.getDate() - 1), t.setHours(23, 59, 59)), t;
                        },
                        getStartOfNextDay: function (e) {
                            var t = l.start(e);
                            return t.setHours(24), t;
                        },
                        getDateDifference: function (e, t) {
                            var n = new i(e.getFullYear(), e.getMonth(), e.getDate()).getTime(),
                                o = new i(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                            return Math.round((n - o) / l.MILLISECONDS_PER_DAY);
                        },
                        getHourDifference: function (e, t) {
                            var n = new i(e).getTime(),
                                o = new i(t).getTime();
                            return Math.round((n - o) / l.MILLISECONDS_PER_HOUR);
                        },
                        hasMultiDates: function (e, t) {
                            var n = l.getDateDifference(e, t),
                                o = Math.abs(l.getHourDifference(e, t)),
                                i = 1 === Math.abs(n) && o < 24 && l.isStartOfDay(t);
                            return !l.isSameDate(e, t) && !i;
                        },
                        renderEnd: function (e, t) {
                            var n = l.getDateDifference(e, t);
                            return Math.abs(n) >= 1 && l.isStartOfDay(t) ? l.convertStartDayToLastDay(t) : l.end(t);
                        },
                    }),
                    (e.exports = l);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = 6e4,
                i = c(),
                a = i,
                r = null,
                s = !1;
            function c(e) {
                return (e = e || Date.now()), new Date(e).getTimezoneOffset() * o;
            }
            function u(e) {
                return !s && r ? r(e) * o : a;
            }
            function d(e) {
                var t = Date.UTC.apply(null, e);
                return new Date(t + c(t));
            }
            function h(e) {
                var t;
                if (e instanceof f) t = e.getUTCTime();
                else if ("number" == typeof e) t = e;
                else {
                    if (null !== e) throw new Error("Invalid Type");
                    t = 0;
                }
                return new Date(t);
            }
            function p(e) {
                var t;
                if (e instanceof Date) t = e.getTime();
                else {
                    if ("string" != typeof e) throw new Error("Invalid Type");
                    t = Date.parse(e);
                }
                return (
                    (t = (function (e) {
                        var t = c(e),
                            n = u(e);
                        return e - n + t + (n ? 0 : i - t);
                    })(t)),
                    new Date(t)
                );
            }
            function m(e) {
                return e instanceof Date || "string" == typeof e;
            }
            function f(e) {
                var t;
                l.isUndefined(e) && (e = Date.now()), (t = arguments.length > 1 ? d(arguments) : m(e) ? p(e) : h(e)), (this._date = t);
            }
            (f.prototype.getTime = function () {
                var e = this._date.getTime();
                return e + u(e) - c(e);
            }),
                (f.prototype.getUTCTime = function () {
                    return this._date.getTime();
                }),
                (f.prototype.toUTCString = function () {
                    return this._date.toUTCString();
                }),
                (f.prototype.toDate = function () {
                    return this._date;
                }),
                (f.prototype.valueOf = function () {
                    return this.getTime();
                }),
                (f.prototype.addDate = function (e) {
                    return this.setDate(this.getDate() + e), this;
                }),
                (f.prototype.addMinutes = function (e) {
                    return this.setMinutes(this.getMinutes() + e), this;
                }),
                (f.prototype.addMilliseconds = function (e) {
                    return this.setMilliseconds(this.getMilliseconds() + e), this;
                }),
                (f.prototype.setWithRaw = function (e, t, n, l, o, i, a) {
                    return this.setFullYear(e, t, n), this.setHours(l, o, i, a), this;
                }),
                (f.prototype.toLocalTime = function () {
                    var e = this.getTime(),
                        t = this.getUTCTime();
                    return new f(t - (e - t));
                }),
                ["getDate", "getDay", "getFullYear", "getHours", "getMilliseconds", "getMinutes", "getMonth", "getSeconds"].forEach(function (e) {
                    f.prototype[e] = function () {
                        return this._date[e].apply(this._date, arguments);
                    };
                }),
                ["setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds"].forEach(function (e) {
                    f.prototype[e] = function () {
                        return this._date[e].apply(this._date, arguments), this.getTime();
                    };
                }),
                (e.exports = {
                    Date: f,
                    setOffset: function (e) {
                        a = e * o;
                    },
                    setOffsetByTimezoneOption: function (e) {
                        this.setOffset(-e), (s = !0);
                    },
                    getOffset: function () {
                        return s ? a / o : 0;
                    },
                    setOffsetCallback: function (e) {
                        r = e;
                    },
                    restoreOffset: function () {
                        a = c();
                    },
                });
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(1),
                i = n(13),
                a = n(3);
            function r(e) {
                return e.cid();
            }
            e.exports = {
                createScheduleCollection: function () {
                    return new i(r);
                },
                ratio: function (e, t, n) {
                    return (t * n) / e;
                },
                nearest: function (e, t) {
                    var n = l.map(t, function (t) {
                        return Math.abs(e - t);
                    });
                    return t[l.inArray(Math.min.apply(null, n), n)];
                },
                mixin: function (e, t) {
                    l.extend(t.prototype, e);
                },
                limit: function (e, t, n) {
                    var l = Math.max.apply(null, [e].concat(t));
                    return (l = Math.min.apply(null, [l].concat(n)));
                },
                limitDate: function (e, t, n) {
                    return e < t ? t : e > n ? n : e;
                },
                maxDate: function (e, t) {
                    return e > t ? e : t;
                },
                stripTags: function (e) {
                    return e.replace(/<([^>]+)>/gi, "");
                },
                firstIn2dArray: function (e) {
                    return l.pick(e, "0", "0");
                },
                lastIn2dArray: function (e) {
                    var t = e.length - 1,
                        n = e[t].length - 1;
                    return l.pick(e, t, n);
                },
                setAutoEllipsis: function (e, t, n) {
                    l.forEach(o.find(e, t, !0), function (e) {
                        (n || e.offsetWidth < e.scrollWidth) && e.setAttribute("title", o.getData(e, "title"));
                    });
                },
                set: function (e, t, n) {
                    var o = t.split("."),
                        i = e;
                    l.forEach(o, function (e, t) {
                        (i[e] = i[e] || {}), t === o.length - 1 ? (i[e] = n) : (i = i[e]);
                    });
                },
                shiftArray: function (e, t) {
                    var n,
                        l = Math.abs(t);
                    if (t > 0) for (n = 0; n < l; n += 1) e.push(e.shift());
                    else if (t < 0) for (n = 0; n < l; n += 1) e.unshift(e.pop());
                    return e;
                },
                takeArray: function (e, t, n) {
                    var l = e.length - n,
                        o = t;
                    return e.splice(n, l), e.splice(0, o), e;
                },
                shiftHours: function (e, t) {
                    return t > 0 ? (e = (e + t) % 24) : t < 0 && (e = (e += t) > 0 ? e : 24 + e), e;
                },
                parseUnit: function (e) {
                    return [parseFloat(e, 10), e.match(/[\d.\-+]*\s*(.*)/)[1] || ""];
                },
                find: function (e, t, n) {
                    var o;
                    return (
                        l.forEach(
                            e,
                            function (e) {
                                return t && (o = t(e)), !o || ((o = e), !1);
                            },
                            n
                        ),
                        o
                    );
                },
                getScheduleChanges: function (e, t, n) {
                    var o = {},
                        i = ["start", "end"];
                    return (
                        l.forEach(t, function (t) {
                            i.indexOf(t) > -1 ? a.compare(e[t], n[t]) && (o[t] = n[t]) : l.isUndefined(n[t]) || e[t] === n[t] || (o[t] = n[t]);
                        }),
                        l.isEmpty(o) ? null : o
                    );
                },
            };
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = ["touchstart", "mousedown"],
                i = {
                    on: function (e, t, n, o) {
                        l.isString(t)
                            ? l.forEach(t.split(" "), function (t) {
                                  i._on(e, t, n, o);
                              })
                            : l.forEachOwnProperties(t, function (t, l) {
                                  i._on(e, l, t, n);
                              });
                    },
                    _on: function (e, t, n, o) {
                        var a, r, s;
                        (a = t + l.stamp(n) + (o ? "_" + l.stamp(o) : "")),
                            (e._evt && e._evt[a]) ||
                                ((s = r = function (t) {
                                    n.call(o || e, t || window.event);
                                }),
                                "addEventListener" in e
                                    ? "mouseenter" === t || "mouseleave" === t
                                        ? ((r = function (t) {
                                              (t = t || window.event), i._checkMouse(e, t) && s(t);
                                          }),
                                          e.addEventListener("mouseenter" === t ? "mouseover" : "mouseout", r, !1))
                                        : ("mousewheel" === t && e.addEventListener("DOMMouseScroll", r, !1), e.addEventListener(t, r, !1))
                                    : "attachEvent" in e && e.attachEvent("on" + t, r),
                                (e._evt = e._evt || {}),
                                (e._evt[a] = r));
                    },
                    off: function (e, t, n, o) {
                        l.isString(t)
                            ? l.forEach(t.split(" "), function (t) {
                                  i._off(e, t, n, o);
                              })
                            : l.forEachOwnProperties(t, function (t, l) {
                                  i._off(e, l, t, n);
                              });
                    },
                    _off: function (e, t, n, o) {
                        var i = t + l.stamp(n) + (o ? "_" + l.stamp(o) : ""),
                            a = e._evt && e._evt[i];
                        if (a) {
                            if ("removeEventListener" in e)
                                "mouseenter" === t || "mouseleave" === t
                                    ? e.removeEventListener("mouseenter" === t ? "mouseover" : "mouseout", a, !1)
                                    : ("mousewheel" === t && e.removeEventListener("DOMMouseScroll", a, !1), e.removeEventListener(t, a, !1));
                            else if ("detachEvent" in e)
                                try {
                                    e.detachEvent("on" + t, a);
                                } catch (e) {}
                            delete e._evt[i], l.keys(e._evt).length || delete e._evt;
                        }
                    },
                    once: function (e, t, n, o) {
                        var a = this;
                        l.isObject(t)
                            ? l.forEachOwnProperties(t, function (t, l) {
                                  i.once(e, l, t, n);
                              })
                            : i.on(
                                  e,
                                  t,
                                  function l() {
                                      n.apply(o || e, arguments), a._off(e, t, l, o);
                                  },
                                  o
                              );
                    },
                    stopPropagation: function (e) {
                        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
                    },
                    preventDefault: function (e) {
                        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                    },
                    stop: function (e) {
                        i.preventDefault(e), i.stopPropagation(e);
                    },
                    disableScrollPropagation: function (e) {
                        i.on(e, "mousewheel MozMousePixelScroll", i.stopPropagation);
                    },
                    disableClickPropagation: function (e) {
                        i.on(e, o.join(" ") + " click dblclick", i.stopPropagation);
                    },
                    getMousePosition: function (e, t) {
                        var n;
                        return t ? ((n = t.getBoundingClientRect()), [e.clientX - n.left - t.clientLeft, e.clientY - n.top - t.clientTop]) : [e.clientX, e.clientY];
                    },
                    getWheelDelta: function (e) {
                        var t = 0;
                        return e.wheelDelta && (t = e.wheelDelta / 120), e.detail && (t = -e.detail / 3), t;
                    },
                    _checkMouse: function (e, t) {
                        var n = t.relatedTarget;
                        if (!n) return !0;
                        try {
                            for (; n && n !== e; ) n = n.parentNode;
                        } catch (e) {
                            return !1;
                        }
                        return n !== e;
                    },
                    trigger: function (e, t, n) {
                        l.isUndefined(n) && /(mouse|click)/.exec(t) && (n = i.mouseEvent(t)), e.dispatchEvent ? e.dispatchEvent(n) : e.fireEvent && e.fireEvent("on" + t, n);
                    },
                    mouseEvent: function (e, t) {
                        var n, o;
                        return (
                            (o = l.extend(
                                {
                                    bubbles: !0,
                                    cancelable: "mousemove" !== e,
                                    view: window,
                                    wheelDelta: 0,
                                    detail: 0,
                                    screenX: 0,
                                    screenY: 0,
                                    clientX: 0,
                                    clientY: 0,
                                    ctrlKey: !1,
                                    altKey: !1,
                                    shiftKey: !1,
                                    metaKey: !1,
                                    button: 0,
                                    relatedTarget: void 0,
                                },
                                t
                            )),
                            "function" == typeof document.createEvent
                                ? (n = document.createEvent("MouseEvents")).initMouseEvent(
                                      e,
                                      o.bubbles,
                                      o.cancelable,
                                      o.view,
                                      o.detail,
                                      o.screenX,
                                      o.screenY,
                                      o.clientX,
                                      o.clientY,
                                      o.ctrlKey,
                                      o.altKey,
                                      o.shiftKey,
                                      o.metaKey,
                                      o.button,
                                      document.body.parentNode
                                  )
                                : document.createEventObject &&
                                  ((n = document.createEventObject()),
                                  l.forEach(
                                      o,
                                      function (e, t) {
                                          n[t] = e;
                                      },
                                      this
                                  ),
                                  (n.button = { 0: 1, 1: 4, 2: 2 }[n.button] || n.button)),
                            n
                        );
                    },
                    getMouseButton: function (e) {
                        var t;
                        return document.implementation.hasFeature("MouseEvents", "2.0") ? e.button : ((t = String(e.button)), "0,1,3,5,7".indexOf(t) > -1 ? 0 : "2,6".indexOf(t) > -1 ? 2 : ~"4".indexOf(t) ? 1 : -1);
                    },
                    getEventTarget: function (e) {
                        return e.target || e.srcElement;
                    },
                };
            e.exports = i;
        },
        function (e, t, n) {
            e.exports = n(21).default;
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(1),
                i = n(13);
            function a(e) {
                var t = l.stamp(this);
                l.isUndefined(e) && (e = o.appendHTMLElement("div")),
                    o.addClass(e, this.cssprefix(t)),
                    (this.id = t),
                    (this.container = e),
                    (this.children = new i(function (e) {
                        return l.stamp(e);
                    })),
                    (this.parent = null),
                    (this.state = {});
            }
            (a.prototype.cssPrefix = "tui-view-"),
                (a.prototype.addChild = function (e, t) {
                    t && t.call(e, this), (e.parent = this), this.children.add(e);
                }),
                (a.prototype.removeChild = function (e, t) {
                    var n = l.isNumber(e) ? this.children.items[e] : e;
                    (e = l.stamp(n)), t && t.call(n, this), this.children.remove(e);
                }),
                (a.prototype.render = function () {
                    this.children.each(function (e) {
                        e.render();
                    });
                }),
                (a.prototype.recursive = function (e, t) {
                    l.isFunction(e) &&
                        (t || e(this),
                        this.children.each(function (t) {
                            t.recursive(e);
                        }));
                }),
                (a.prototype.resize = function () {
                    for (var e = Array.prototype.slice.call(arguments), t = this.parent; t; ) l.isFunction(t._onResize) && t._onResize.apply(t, e), (t = t.parent);
                }),
                (a.prototype._beforeDestroy = function () {}),
                (a.prototype._destroy = function () {
                    this._beforeDestroy(), this.children.clear(), (this.container.innerHTML = ""), (this.id = this.parent = this.children = this.container = null);
                }),
                (a.prototype.destroy = function (e) {
                    this.children.each(function (e) {
                        e.destroy(!0), e._destroy();
                    }),
                        e || this._destroy();
                }),
                (a.prototype.getViewBound = function () {
                    var e = this.container,
                        t = o.getPosition(e),
                        n = o.getSize(e);
                    return { x: t[0], y: t[1], width: n[0], height: n[1] };
                }),
                (a.prototype.cssprefix = function (e) {
                    return this.cssPrefix + (e || "");
                }),
                (a.prototype.setState = function (e) {
                    l.extend(this.state, e);
                }),
                l.CustomEvents.mixin(a),
                (e.exports = a);
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (e) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        },
        function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
                (t.extend = r),
                (t.indexOf = function (e, t) {
                    for (var n = 0, l = e.length; n < l; n++) if (e[n] === t) return n;
                    return -1;
                }),
                (t.escapeExpression = function (e) {
                    if ("string" != typeof e) {
                        if (e && e.toHTML) return e.toHTML();
                        if (null == e) return "";
                        if (!e) return e + "";
                        e = "" + e;
                    }
                    if (!i.test(e)) return e;
                    return e.replace(o, a);
                }),
                (t.isEmpty = function (e) {
                    return (!e && 0 !== e) || !(!u(e) || 0 !== e.length);
                }),
                (t.createFrame = function (e) {
                    var t = r({}, e);
                    return (t._parent = e), t;
                }),
                (t.blockParams = function (e, t) {
                    return (e.path = t), e;
                }),
                (t.appendContextPath = function (e, t) {
                    return (e ? e + "." : "") + t;
                });
            var l = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;" },
                o = /[&<>"'`=]/g,
                i = /[&<>"'`=]/;
            function a(e) {
                return l[e];
            }
            function r(e) {
                for (var t = 1; t < arguments.length; t++) for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
                return e;
            }
            var s = Object.prototype.toString;
            t.toString = s;
            var c = function (e) {
                return "function" == typeof e;
            };
            c(/x/) &&
                (t.isFunction = c = function (e) {
                    return "function" == typeof e && "[object Function]" === s.call(e);
                }),
                (t.isFunction = c);
            var u =
                Array.isArray ||
                function (e) {
                    return !(!e || "object" != typeof e) && "[object Array]" === s.call(e);
                };
            t.isArray = u;
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var n, l;
                function o(e) {
                    return t["webkit" + e] || t["moz" + e] || t["ms" + e];
                }
                (n =
                    t.requestAnimationFrame ||
                    o("RequestAnimationFrame") ||
                    function (e, t) {
                        e.call(t);
                    }),
                    (l = t.cancelAnimationFrame || o("CancelAnimationFrame") || o("CancelRequestAnimationFrame") || function () {}),
                    (e.exports = {
                        requestAnimFrame: function (e, l) {
                            return n.call(t, e.bind(l));
                        },
                        cancelAnimFrame: function (e) {
                            e && l.call(t, e);
                        },
                    });
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var l = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
            function o(e, t) {
                var n = t && t.loc,
                    i = void 0,
                    a = void 0,
                    r = void 0,
                    s = void 0;
                n && ((i = n.start.line), (a = n.end.line), (r = n.start.column), (s = n.end.column), (e += " - " + i + ":" + r));
                for (var c = Error.prototype.constructor.call(this, e), u = 0; u < l.length; u++) this[l[u]] = c[l[u]];
                Error.captureStackTrace && Error.captureStackTrace(this, o);
                try {
                    n &&
                        ((this.lineNumber = i),
                        (this.endLineNumber = a),
                        Object.defineProperty ? (Object.defineProperty(this, "column", { value: r, enumerable: !0 }), Object.defineProperty(this, "endColumn", { value: s, enumerable: !0 })) : ((this.column = r), (this.endColumn = s)));
                } catch (e) {}
            }
            (o.prototype = new Error()), (t.default = o), (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = l.forEachOwnProperties,
                i = l.forEachArray,
                a = l.isFunction,
                r = l.isObject,
                s = Array.prototype.slice;
            function c(e) {
                (this.items = {}), (this.length = 0), a(e) && (this.getItemID = e);
            }
            (c.and = function (e) {
                var t;
                return (
                    (e = s.call(arguments)),
                    (t = e.length),
                    function (n) {
                        for (var l = 0; l < t; l += 1) if (!e[l].call(null, n)) return !1;
                        return !0;
                    }
                );
            }),
                (c.prototype.getItemID = function (e) {
                    return String(e._id);
                }),
                (c.prototype.add = function (e) {
                    var t,
                        n,
                        l = this;
                    arguments.length > 1
                        ? i(s.call(arguments), function (e) {
                              l.add(e);
                          })
                        : ((t = this.getItemID(e)), (n = this.items)[t] || (this.length += 1), (n[t] = e));
                }),
                (c.prototype.remove = function (e) {
                    var t,
                        n,
                        o = this,
                        i = [];
                    return this.length
                        ? arguments.length > 1
                            ? (i = l.map(s.call(arguments), function (e) {
                                  return o.remove(e);
                              }))
                            : ((t = this.items), r(e) && (e = this.getItemID(e)), t[e] ? ((this.length -= 1), (n = t[e]), delete t[e], n) : i)
                        : i;
                }),
                (c.prototype.clear = function () {
                    (this.items = {}), (this.length = 0);
                }),
                (c.prototype.has = function (e) {
                    var t, n;
                    return (
                        !!this.length &&
                        ((t = a(e)),
                        (n = !1),
                        t
                            ? this.each(function (t) {
                                  return !0 !== e(t) || ((n = !0), !1);
                              })
                            : ((e = r(e) ? this.getItemID(e) : e), (n = l.isExisty(this.items[e]))),
                        n)
                    );
                }),
                (c.prototype.doWhenHas = function (e, t, n) {
                    var o = this.items[e];
                    l.isExisty(o) && t.call(n || this, o);
                }),
                (c.prototype.find = function (e) {
                    var t = new c();
                    return (
                        this.hasOwnProperty("getItemID") && (t.getItemID = this.getItemID),
                        this.each(function (n) {
                            !0 === e(n) && t.add(n);
                        }),
                        t
                    );
                }),
                (c.prototype.groupBy = function (e, t) {
                    var n,
                        o,
                        i = {},
                        r = a(e),
                        s = this.getItemID;
                    if (l.isArray(e)) {
                        if (
                            (l.forEachArray(e, function (e) {
                                i[String(e)] = new c(s);
                            }),
                            !t)
                        )
                            return i;
                        (e = t), (r = !0);
                    }
                    return (
                        this.each(function (t) {
                            r ? (o = e(t)) : ((o = t[e]), a(o) && (o = o.apply(t))), (n = i[o]) || (n = i[o] = new c(s)), n.add(t);
                        }),
                        i
                    );
                }),
                (c.prototype.single = function (e) {
                    var t,
                        n = l.isFunction(e);
                    return (
                        this.each(function (l) {
                            return (n && !e(l)) || ((t = l), !1);
                        }, this),
                        t
                    );
                }),
                (c.prototype.sort = function (e) {
                    var t = [];
                    return (
                        this.each(function (e) {
                            t.push(e);
                        }),
                        a(e) && (t = t.sort(e)),
                        t
                    );
                }),
                (c.prototype.each = function (e, t) {
                    o(this.items, e, t || this);
                }),
                (c.prototype.toArray = function () {
                    return this.length
                        ? l.map(this.items, function (e) {
                              return e;
                          })
                        : [];
                }),
                (e.exports = c);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(4).Date,
                i = n(3),
                a = n(55),
                r = n(56),
                s = i.MILLISECONDS_SCHEDULE_MIN_DURATION,
                c = "allday";
            function u() {
                (this.id = ""),
                    (this.title = ""),
                    (this.body = ""),
                    (this.isAllDay = !1),
                    (this.start = null),
                    (this.end = null),
                    (this.color = "#000"),
                    (this.isVisible = !0),
                    (this.bgColor = "#a1b56c"),
                    (this.dragBgColor = "#a1b56c"),
                    (this.borderColor = "#000"),
                    (this.calendarId = ""),
                    (this.category = ""),
                    (this.dueDateClass = ""),
                    (this.customStyle = ""),
                    (this.isPending = !1),
                    (this.isFocused = !1),
                    (this.isReadOnly = !1),
                    (this.isPrivate = !1),
                    (this.location = ""),
                    (this.attendees = []),
                    (this.recurrenceRule = ""),
                    (this.state = ""),
                    (this.goingDuration = 0),
                    (this.comingDuration = 0),
                    (this.raw = null),
                    l.stamp(this);
            }
            (u.schema = { required: ["title"], dateRange: ["start", "end"] }),
                (u.create = function (e) {
                    var t = new u();
                    return t.init(e), t;
                }),
                (u.prototype.init = function (e) {
                    (e = l.extend({}, e)).category === c && (e.isAllDay = !0),
                        (this.id = e.id || ""),
                        (this.title = e.title || ""),
                        (this.body = e.body || ""),
                        (this.isAllDay = !!l.isExisty(e.isAllDay) && e.isAllDay),
                        (this.isVisible = !l.isExisty(e.isVisible) || e.isVisible),
                        (this.color = e.color || this.color),
                        (this.bgColor = e.bgColor || this.bgColor),
                        (this.dragBgColor = e.dragBgColor || this.dragBgColor),
                        (this.borderColor = e.borderColor || this.borderColor),
                        (this.calendarId = e.calendarId || ""),
                        (this.category = e.category || ""),
                        (this.dueDateClass = e.dueDateClass || ""),
                        (this.customStyle = e.customStyle || ""),
                        (this.location = e.location || ""),
                        (this.attendees = e.attendees || []),
                        (this.recurrenceRule = e.recurrenceRule || ""),
                        (this.isPrivate = e.isPrivate || !1),
                        (this.isPending = e.isPending || !1),
                        (this.isFocused = e.isFocused || !1),
                        (this.isReadOnly = e.isReadOnly || !1),
                        (this.goingDuration = e.goingDuration || 0),
                        (this.comingDuration = e.comingDuration || 0),
                        (this.state = e.state || ""),
                        this.isAllDay ? this.setAllDayPeriod(e.start, e.end) : this.setTimePeriod(e.start, e.end),
                        (this.raw = e.raw || null);
                }),
                (u.prototype.setAllDayPeriod = function (e, t) {
                    (e = l.isString(e) && 10 === e.length ? i.parse(e) : new o(e || Date.now())),
                        l.isString(t) && 10 === t.length ? (t = i.parse(t)).setHours(23, 59, 59) : (t = new o(t || e)),
                        (this.start = i.start(e)),
                        (this.end = i.renderEnd(e, t));
                }),
                (u.prototype.setTimePeriod = function (e, t) {
                    (this.start = new o(e || Date.now())), (this.end = new o(t || this.start)), t || this.end.setMinutes(this.end.getMinutes() + 30);
                }),
                (u.prototype.getStarts = function () {
                    return this.start;
                }),
                (u.prototype.getEnds = function () {
                    return this.end;
                }),
                (u.prototype.cid = function () {
                    return l.stamp(this);
                }),
                (u.prototype.equals = function (e) {
                    return (
                        this.id === e.id &&
                        this.title === e.title &&
                        this.body === e.body &&
                        this.isAllDay === e.isAllDay &&
                        0 === i.compare(this.getStarts(), e.getStarts()) &&
                        0 === i.compare(this.getEnds(), e.getEnds()) &&
                        this.color === e.color &&
                        this.bgColor === e.bgColor &&
                        this.dragBgColor === e.dragBgColor &&
                        this.borderColor === e.borderColor
                    );
                }),
                (u.prototype.duration = function () {
                    var e = this.getStarts(),
                        t = this.getEnds();
                    return this.isAllDay ? i.end(t) - i.start(e) : t - e;
                }),
                (u.prototype.collidesWith = function (e) {
                    var t = this.getStarts(),
                        n = this.getEnds(),
                        l = e.getStarts(),
                        o = e.getEnds(),
                        a = i.millisecondsFrom("minutes", this.goingDuration),
                        r = i.millisecondsFrom("minutes", this.comingDuration),
                        c = i.millisecondsFrom("minutes", e.goingDuration),
                        u = i.millisecondsFrom("minutes", e.comingDuration);
                    return Math.abs(n - t) < s && (n += s), Math.abs(o - l) < s && (o += s), (n += r), (o += u), ((l -= c) > (t -= a) && l < n) || (o > t && o < n) || (l <= t && o >= n);
                }),
                r.mixin(u.prototype),
                a.mixin(u.prototype),
                (e.exports = u);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(3);
            function i(e, t) {
                return e !== t ? (e ? -1 : 1) : 0;
            }
            function a(e, t) {
                var n = String(e),
                    l = String(t);
                return n > l ? 1 : n < l ? -1 : 0;
            }
            e.exports = {
                bsearch: function (e, t, n, l) {
                    var o,
                        i,
                        r = 0,
                        s = e.length - 1;
                    for (l = l || a; r <= s; )
                        if (((o = ((r + s) / 2) | 0), (i = l(n ? n(e[o]) : e[o], t)) < 0)) r = o + 1;
                        else {
                            if (!(i > 0)) return o;
                            s = o - 1;
                        }
                    return ~s;
                },
                compare: {
                    schedule: {
                        asc: function (e, t) {
                            var n,
                                a,
                                r,
                                s,
                                c = e.valueOf(),
                                u = t.valueOf();
                            return (r = i(c.isAllDay || e.hasMultiDates, u.isAllDay || t.hasMultiDates))
                                ? r
                                : (s = o.compare(e.getStarts(), t.getStarts()))
                                ? s
                                : (n = e.duration()) < (a = t.duration())
                                ? 1
                                : n > a
                                ? -1
                                : l.stamp(c) - l.stamp(u);
                        },
                    },
                    bool: {
                        asc: i,
                        desc: function (e, t) {
                            return e !== t ? (e ? 1 : -1) : 0;
                        },
                    },
                    num: {
                        asc: function (e, t) {
                            return Number(e) - Number(t);
                        },
                        desc: function (e, t) {
                            var n = Number(e);
                            return Number(t) - n;
                        },
                    },
                    str: {
                        asc: a,
                        desc: function (e, t) {
                            var n = String(e),
                                l = String(t);
                            return n > l ? -1 : n < l ? 1 : 0;
                        },
                        ascIgnoreCase: function (e, t) {
                            var n = String(e).toLowerCase(),
                                l = String(t).toLowerCase();
                            return n > l ? 1 : n < l ? -1 : 0;
                        },
                        descIgnoreCase: function (e, t) {
                            var n = String(e).toLowerCase(),
                                l = String(t).toLowerCase();
                            return n > l ? -1 : n < l ? 1 : 0;
                        },
                    },
                },
            };
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1),
                a = n(8);
            function r(e, t) {
                var n,
                    l = t[r.PROP_KEY];
                l || (l = t[r.PROP_KEY] = []),
                    l.push(this),
                    (this.sibling = l),
                    (this.zIndex = this.getLargestZIndex() || r.INIT_ZINDEX),
                    ((n = document.createElement("div")).style.display = "none"),
                    (n.style.position = "absolute"),
                    i.addClass(n, o.classname("floating-layer")),
                    t.appendChild(n),
                    a.call(this, n),
                    (this.parent = t);
            }
            l.inherit(r, a),
                (r.PROP_KEY = "__fe_floating_layer"),
                (r.INIT_ZINDEX = 999),
                (r.prototype.destroy = function () {
                    for (var e = this.parent, t = this.sibling, n = 0, l = t.length; n < l; n += 1)
                        if (t[n] === this) {
                            t.splice(n, 1);
                            break;
                        }
                    if (!t.length) {
                        try {
                            delete e[r.PROP_KEY];
                        } catch (t) {
                            e[r.PROP_KEY] = null;
                        }
                        e.style.position = "";
                    }
                    i.remove(this.container), (this.sibling = null), a.prototype.destroy.call(this);
                }),
                (r.prototype.isVisible = function () {
                    return "none" !== this.container.style.display;
                }),
                (r.prototype.setPosition = function (e, t) {
                    i.setPosition(this.container, e, t);
                }),
                (r.prototype.setLTRB = function (e) {
                    i.setLTRB(this.container, e);
                }),
                (r.prototype.setSize = function (e, t) {
                    var n = this.container;
                    (e = l.isNumber(e) ? e + "px" : e), (t = l.isNumber(t) ? t + "px" : t), (n.style.width = e), (n.style.height = t);
                }),
                (r.prototype.setContent = function (e) {
                    this.container.innerHTML = e;
                }),
                (r.prototype.getLargestZIndex = function () {
                    var e = l.map(this.sibling, function (e) {
                        return e.zIndex;
                    });
                    return Math.max.apply(null, e);
                }),
                (r.prototype.focus = function () {
                    var e = this.getLargestZIndex() + 1;
                    this.container.style.zIndex = this.zIndex = e;
                }),
                (r.prototype.show = function () {
                    this.focus(), (this.container.style.display = "block");
                }),
                (r.prototype.hide = function () {
                    this.container.style.display = "none";
                }),
                (e.exports = r);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(1),
                i = n(6),
                a = n(5),
                r = n(3),
                s = Math.max,
                c = Math.min,
                u = {
                    _retriveScheduleData: function (e, t) {
                        var n,
                            l,
                            r,
                            u,
                            h,
                            p,
                            m,
                            f = e.children.single();
                        return (
                            !!f &&
                            ((n = f.container),
                            (m = f.getRenderDateRange()),
                            (l = m.length),
                            (p = f.getRenderDateGrids()),
                            (r = o.getSize(n)[0]),
                            (u = i.getMousePosition(t, n)),
                            (h = d(p, a.ratio(r, 100, u[0]))),
                            function (t) {
                                var o = i.getMousePosition(t, n)[0],
                                    u = d(p, a.ratio(r, 100, o));
                                return (u = s(u, 0)), (u = c(u, l - 1)), { relatedView: e, dragStartXIndex: h, datesInRange: l, xIndex: u, triggerEvent: t.type, grids: p, range: m };
                            })
                        );
                    },
                    _retriveScheduleDataFromDate: function (e, t) {
                        var n,
                            o,
                            i,
                            a = e.children.single(),
                            u = 0,
                            d = 0;
                        return (
                            !!a &&
                            ((n = (i = a.getRenderDateRange()).length),
                            (o = a.getRenderDateGrids()),
                            l.forEach(i, function (e, n) {
                                r.isSameDate(e, t) && (u = d = n);
                            }),
                            (u = s(u, 0)),
                            (u = c(u, n - 1)),
                            { relatedView: e, dragStartXIndex: d, datesInRange: n, xIndex: u, triggerEvent: "manual", grids: o, range: i })
                        );
                    },
                };
            function d(e, t) {
                var n,
                    l = 0,
                    o = e.length;
                for (t < 0 && (t = 0); l < o; l += 1) if ((n = e[l]).left <= t && t <= n.left + n.width) return l;
                return l;
            }
            e.exports = u;
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(5),
                i = n(3),
                a = n(6),
                r = n(31),
                s = n(4).Date,
                c = {
                    _calcGridYIndex: function (e, t, n) {
                        var l = i.millisecondsTo("hour", (n * e) / t),
                            a = 0 | l;
                        return a + (o.nearest(l - a, [0, 1]) ? 0.5 : 0);
                    },
                    _retriveScheduleData: function (e) {
                        var t = this,
                            n = e.container,
                            c = e.options,
                            u = e.getViewBound().height,
                            d = e.getDate(),
                            h = c.hourEnd - c.hourStart,
                            p = i.millisecondsFrom("hour", h);
                        return function (m, f) {
                            var g = r.n(a.getMousePosition(m, n)).y,
                                y = o.ratio(u, h, g),
                                S = new s(d).addMinutes(i.minutesFromHours(y)),
                                _ = t._calcGridYIndex(p, u, g),
                                C = new s(d).addMinutes(i.minutesFromHours(_ + c.hourStart));
                            return l.extend({ target: a.getEventTarget(m), relatedView: e, originEvent: m, mouseY: g, gridY: y, timeY: S, nearestGridY: _, nearestGridTimeY: C, triggerEvent: m.type }, f);
                        };
                    },
                    _retriveScheduleDataFromDate: function (e, t, n, l) {
                        var o,
                            a,
                            r,
                            c = e.getDate();
                        return {
                            target: e,
                            relatedView: e,
                            gridY: (o = t.getHours() - l + u(t.getMinutes())),
                            timeY: new s(c).addMinutes(i.minutesFromHours(o)),
                            nearestGridY: (a = o),
                            nearestGridTimeY: new s(c).addMinutes(i.minutesFromHours(a)),
                            nearestGridEndY: (r = n.getHours() - l + u(n.getMinutes())),
                            nearestGridEndTimeY: new s(c).addMinutes(i.minutesFromHours(r)),
                            triggerEvent: "manual",
                            hourStart: l,
                        };
                    },
                    mixin: function (e) {
                        var t = e.prototype;
                        l.forEach(c, function (e, n) {
                            "mixin" !== n && (t[n] = e);
                        });
                    },
                };
            function u(e) {
                var t;
                return 0 === e ? (t = 0) : e > 30 ? (t = 1) : e <= 30 && (t = 0.5), t;
            }
            e.exports = c;
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(5),
                i = n(1),
                a = n(6),
                r = n(3),
                s = Math.floor;
            e.exports = function (e) {
                var t = e.children,
                    n = t.sort(function (e, t) {
                        return l.stamp(e) - l.stamp(t);
                    }),
                    c = t.length,
                    u = t.single().getRenderDateRange().length,
                    d = l.pick(e.vLayout.panels[1], "container"),
                    h = i.getSize(d),
                    p = e.grids;
                return function (e) {
                    var t,
                        i,
                        m,
                        f = a.getMousePosition(e, d),
                        g = (function (e) {
                            for (var t, n = 0, l = p.length; n < l; n += 1) if ((t = p[n]).left <= e && e <= t.left + t.width) return n;
                            return e < 0 ? -1 : n;
                        })(o.ratio(h[0], 100, f[0])),
                        y = s(o.ratio(h[1], c, f[1]));
                    return (
                        y < 0 && (y = 0),
                        y >= n.length && (y = n.length - 1),
                        (t = l.pick(n, y))
                            ? (g < 0 && (g = 0), g >= (m = t.getRenderDateRange()).length && (g = m.length - 1), (i = l.pick(m, g)) ? { x: g, y: y, sizeX: u, sizeY: c, date: r.end(i), weekdayView: t, triggerEvent: e.type } : null)
                            : null
                    );
                };
            };
        },
        function (e, t, n) {
            e.exports = n(21);
        },
        function (e, t, n) {
            "use strict";
            function l(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.default = e), t;
            }
            t.__esModule = !0;
            var i = o(n(22)),
                a = l(n(48)),
                r = l(n(12)),
                s = o(n(10)),
                c = o(n(49)),
                u = l(n(51));
            function d() {
                var e = new i.HandlebarsEnvironment();
                return (
                    s.extend(e, i),
                    (e.SafeString = a.default),
                    (e.Exception = r.default),
                    (e.Utils = s),
                    (e.escapeExpression = s.escapeExpression),
                    (e.VM = c),
                    (e.template = function (t) {
                        return c.template(t, e);
                    }),
                    e
                );
            }
            var h = d();
            (h.create = d), u.default(h), (h.default = h), (t.default = h), (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            function l(e) {
                return e && e.__esModule ? e : { default: e };
            }
            (t.__esModule = !0), (t.HandlebarsEnvironment = d);
            var o = n(10),
                i = l(n(12)),
                a = n(23),
                r = n(45),
                s = l(n(24)),
                c = n(25);
            t.VERSION = "4.7.6";
            t.COMPILER_REVISION = 8;
            t.LAST_COMPATIBLE_COMPILER_REVISION = 7;
            t.REVISION_CHANGES = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0 <4.3.0", 8: ">= 4.3.0" };
            var u = "[object Object]";
            function d(e, t, n) {
                (this.helpers = e || {}), (this.partials = t || {}), (this.decorators = n || {}), a.registerDefaultHelpers(this), r.registerDefaultDecorators(this);
            }
            d.prototype = {
                constructor: d,
                logger: s.default,
                log: s.default.log,
                registerHelper: function (e, t) {
                    if (o.toString.call(e) === u) {
                        if (t) throw new i.default("Arg not supported with multiple helpers");
                        o.extend(this.helpers, e);
                    } else this.helpers[e] = t;
                },
                unregisterHelper: function (e) {
                    delete this.helpers[e];
                },
                registerPartial: function (e, t) {
                    if (o.toString.call(e) === u) o.extend(this.partials, e);
                    else {
                        if (void 0 === t) throw new i.default('Attempting to register a partial called "' + e + '" as undefined');
                        this.partials[e] = t;
                    }
                },
                unregisterPartial: function (e) {
                    delete this.partials[e];
                },
                registerDecorator: function (e, t) {
                    if (o.toString.call(e) === u) {
                        if (t) throw new i.default("Arg not supported with multiple decorators");
                        o.extend(this.decorators, e);
                    } else this.decorators[e] = t;
                },
                unregisterDecorator: function (e) {
                    delete this.decorators[e];
                },
                resetLoggedPropertyAccesses: function () {
                    c.resetLoggedProperties();
                },
            };
            var h = s.default.log;
            (t.log = h), (t.createFrame = o.createFrame), (t.logger = s.default);
        },
        function (e, t, n) {
            "use strict";
            function l(e) {
                return e && e.__esModule ? e : { default: e };
            }
            (t.__esModule = !0),
                (t.registerDefaultHelpers = function (e) {
                    o.default(e), i.default(e), a.default(e), r.default(e), s.default(e), c.default(e), u.default(e);
                }),
                (t.moveHelperToHooks = function (e, t, n) {
                    e.helpers[t] && ((e.hooks[t] = e.helpers[t]), n || delete e.helpers[t]);
                });
            var o = l(n(38)),
                i = l(n(39)),
                a = l(n(40)),
                r = l(n(41)),
                s = l(n(42)),
                c = l(n(43)),
                u = l(n(44));
        },
        function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var l = n(10),
                o = {
                    methodMap: ["debug", "info", "warn", "error"],
                    level: "info",
                    lookupLevel: function (e) {
                        if ("string" == typeof e) {
                            var t = l.indexOf(o.methodMap, e.toLowerCase());
                            e = t >= 0 ? t : parseInt(e, 10);
                        }
                        return e;
                    },
                    log: function (e) {
                        if (((e = o.lookupLevel(e)), "undefined" != typeof console && o.lookupLevel(o.level) <= e)) {
                            var t = o.methodMap[e];
                            console[t] || (t = "log");
                            for (var n = arguments.length, l = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) l[i - 1] = arguments[i];
                            console[t].apply(console, l);
                        }
                    },
                };
            (t.default = o), (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
                (t.createProtoAccessControl = function (e) {
                    var t = Object.create(null);
                    (t.constructor = !1), (t.__defineGetter__ = !1), (t.__defineSetter__ = !1), (t.__lookupGetter__ = !1);
                    var n = Object.create(null);
                    return (
                        (n.__proto__ = !1),
                        {
                            properties: { whitelist: l.createNewLookupObject(n, e.allowedProtoProperties), defaultValue: e.allowProtoPropertiesByDefault },
                            methods: { whitelist: l.createNewLookupObject(t, e.allowedProtoMethods), defaultValue: e.allowProtoMethodsByDefault },
                        }
                    );
                }),
                (t.resultIsAllowed = function (e, t, n) {
                    return a("function" == typeof e ? t.methods : t.properties, n);
                }),
                (t.resetLoggedProperties = function () {
                    Object.keys(i).forEach(function (e) {
                        delete i[e];
                    });
                });
            var l = n(47),
                o = (function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t.default = e), t;
                })(n(24)),
                i = Object.create(null);
            function a(e, t) {
                return void 0 !== e.whitelist[t]
                    ? !0 === e.whitelist[t]
                    : void 0 !== e.defaultValue
                    ? e.defaultValue
                    : ((function (e) {
                          !0 !== i[e] &&
                              ((i[e] = !0),
                              o.log(
                                  "error",
                                  'Handlebars: Access has been denied to resolve the property "' +
                                      e +
                                      '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'
                              ));
                      })(t),
                      !1);
            }
        },
        function (e, t, n) {
            "use strict";
            var l = n(4).Date;
            function o(e) {
                if (!(this instanceof o)) return new o(e);
                e instanceof l || (e = new l(e)), (this.d = e);
            }
            (o.prototype.safe = function (e) {
                return e.constructor === o ? e.d : e;
            }),
                (o.prototype.clone = function () {
                    return new o(new l(this.d));
                }),
                (o.prototype.addDate = function (e) {
                    return this.d.setDate(this.d.getDate() + e), this;
                }),
                (o.prototype.addMonth = function (e) {
                    var t = this.d.getMonth(),
                        n = this.d.getDate(),
                        l = this._isLeapYear(),
                        o = t + e,
                        i = this.clone(),
                        a = n;
                    return e && (1 === o ? (a = l ? 29 : 28) : (e > 0 ? i.d.setMonth(o + 1, 0) : i.d.setMonth(t, 0), (a = i.d.getDate()))), this.d.setMonth(o, Math.min(n, a)), this;
                }),
                (o.prototype._isLeapYear = function () {
                    var e = this.d.getFullYear();
                    return (e % 4 == 0 && e % 100 != 0) || !(e % 400);
                }),
                (o.prototype.setHours = function (e, t, n, l) {
                    return this.d.setHours(e, t, n, l), this;
                }),
                (o.prototype.isBetween = function (e, t) {
                    var n = this.safe;
                    return n(e) <= this.d && this.d <= n(t);
                }),
                (e.exports = o);
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(0),
                    o = n(1),
                    i = n(6),
                    a = n(2);
                function r(e, t) {
                    i.on(t, "mousedown", this._onMouseDown, this),
                        (this.options = l.extend({ distance: 10, exclude: null }, e)),
                        (this.container = t),
                        (this._cancelled = !1),
                        (this._isMoved = !1),
                        (this._distance = 0),
                        (this._dragStartFired = !1),
                        (this._dragStartEventData = null);
                }
                function s(e) {
                    o.closest(e.target, a.classname(".popup")) || i.preventDefault(e);
                }
                (r.prototype.destroy = function () {
                    i.off(this.container, "mousedown", this._onMouseDown, this), (this._isMoved = null), (this.container = null);
                }),
                    (r.prototype._clearData = function () {
                        (this._cancelled = !1), (this._distance = 0), (this._isMoved = !1), (this._dragStartFired = !1), (this._dragStartEventData = null);
                    }),
                    (r.prototype._toggleDragEvent = function (e) {
                        var n,
                            l,
                            a = this.container;
                        e ? ((n = "on"), (l = "disable")) : ((n = "off"), (l = "enable")), o[l + "TextSelection"](a, s), o[l + "ImageDrag"](a, s), i[n](t.document, { mousemove: this._onMouseMove, mouseup: this._onMouseUp }, this);
                    }),
                    (r.prototype._getEventData = function (e) {
                        return { target: i.getEventTarget(e), originEvent: e };
                    }),
                    (r.prototype._onMouseDown = function (e) {
                        var t = this.options,
                            n = i.getEventTarget(e);
                        0 === i.getMouseButton(e) &&
                            (t.exclude && t.exclude(n) ? (this._cancelled = !0) : (this._clearData(), (this._dragStartEventData = this._getEventData(e)), this._toggleDragEvent(!0), this.fire("mousedown", this._dragStartEventData)));
                    }),
                    (r.prototype._onMouseMove = function (e) {
                        var t;
                        if (this._cancelled) this._clearData();
                        else if (((t = this.options.distance), s(e), this._distance < t)) this._distance += 1;
                        else {
                            if (((this._isMoved = !0), !this._dragStartFired && ((this._dragStartFired = !0), !this.invoke("dragStart", this._dragStartEventData)))) return this._toggleDragEvent(!1), void this._clearData();
                            this.fire("drag", this._getEventData(e));
                        }
                    }),
                    (r.prototype._onMouseUp = function (e) {
                        this._cancelled || (this._toggleDragEvent(!1), this._isMoved ? ((this._isMoved = !1), this.fire("dragEnd", this._getEventData(e))) : this.fire("click", this._getEventData(e)), this._clearData());
                    }),
                    l.CustomEvents.mixin(r),
                    (e.exports = r);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(3),
                i = o.MILLISECONDS_SCHEDULE_MIN_DURATION;
            function a(e) {
                (this.model = e),
                    (this.top = 0),
                    (this.left = 0),
                    (this.width = 0),
                    (this.height = 0),
                    (this.hasCollide = !1),
                    (this.extraSpace = 0),
                    (this.hidden = !1),
                    (this.hasMultiDates = !1),
                    (this.renderStarts = null),
                    (this.exceedLeft = !1),
                    (this.renderEnds = null),
                    (this.exceedRight = !1);
            }
            (a.create = function (e) {
                return new a(e);
            }),
                (a.prototype.getStarts = function () {
                    return this.renderStarts ? this.renderStarts : this.model.start;
                }),
                (a.prototype.getEnds = function () {
                    return this.renderEnds ? this.renderEnds : this.model.end;
                }),
                (a.prototype.cid = function () {
                    return l.stamp(this.model);
                }),
                (a.prototype.valueOf = function () {
                    return this.model;
                }),
                (a.prototype.duration = function () {
                    return this.model.duration();
                }),
                (a.prototype.collidesWith = function (e) {
                    var t = this.getStarts(),
                        n = this.getEnds(),
                        l = e.getStarts(),
                        a = e.getEnds(),
                        r = o.millisecondsFrom("minutes", this.valueOf().goingDuration),
                        s = o.millisecondsFrom("minutes", this.valueOf().comingDuration),
                        c = o.millisecondsFrom("minutes", e.valueOf().goingDuration),
                        u = o.millisecondsFrom("minutes", e.valueOf().comingDuration);
                    return Math.abs(n - t) < i && (n += i), Math.abs(a - l) < i && (a += i), (n += s), (a += u), ((l -= c) > (t -= r) && l < n) || (a > t && a < n) || (l <= t && a >= n);
                }),
                (e.exports = a);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(5),
                a = n(1),
                r = n(6),
                s = n(8),
                c = n(64),
                u = n(27),
                d = Math.abs;
            function h(e, t, n) {
                var i, r;
                if (!(this instanceof h)) return new h(e, t);
                s.call(this, t),
                    a.addClass(t, o.classname("vlayout-container")),
                    (i = this.options = l.extend({ panels: [], panelHeights: [] }, e)),
                    (this.panels = []),
                    (this._drag = new u(
                        {
                            distance: 10,
                            exclude: function (e) {
                                return !a.hasClass(e, o.classname("splitter"));
                            },
                        },
                        t
                    )),
                    this._drag.on({ dragStart: this._onDragStart, drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                    (this._dragData = null),
                    (this.theme = n),
                    i.panels.length &&
                        (i.panelHeights.length &&
                            ((r = i.panelHeights.slice()),
                            l.forEach(i.panels, function (e) {
                                e.isSplitter || e.autoHeight || (e.height = r.shift());
                            })),
                        this.addPanels(i.panels, this.container)),
                    this.refresh();
            }
            l.inherit(h, s),
                (h.prototype.getLayoutData = function () {
                    var e = [];
                    return (
                        l.forEach(this.panels, function (t) {
                            t.isSplitter() || t.options.autoHeight || e.push(t.getHeight());
                        }),
                        e
                    );
                }),
                (h.prototype.setLayoutData = function (e) {
                    e.length &&
                        (l.forEach(this.panels, function (t) {
                            t.isSplitter() || t.options.autoHeight || t.setHeight(null, e.shift());
                        }),
                        this.refresh());
                }),
                (h.prototype.nextPanel = function (e) {
                    return this.panels[e.index + 1];
                }),
                (h.prototype.prevPanel = function (e) {
                    return this.panels[e.index - 1];
                }),
                (h.prototype._initializeGuideElement = function (e, t) {
                    var n = e.cloneNode(!0);
                    return a.addClass(n, o.classname("splitter-guide")), this._refreshGuideElement(n, t), this.container.appendChild(n), n;
                }),
                (h.prototype._refreshGuideElement = function (e, t) {
                    e.style.top = t + "px";
                }),
                (h.prototype._clearGuideElement = function (e) {
                    a.remove(e);
                }),
                (h.prototype._resize = function (e, t, n) {
                    var o,
                        i,
                        a = d(t - n),
                        r = [],
                        s = n > t,
                        c = s ? "nextPanel" : "prevPanel";
                    for (i = (o = this[s ? "prevPanel" : "nextPanel"](e)).getResizeInfoByGrowth(a), r.push([o, i[0]]), o = this[c](o); l.isExisty(o); o = this[c](o))
                        o.isSplitter() || ((i = o.getResizeInfoByGrowth(-a)), r.push([o, i[0]]), (a -= i[1]));
                    l.forEach(r, function (e) {
                        e[0].setHeight(null, e[1], !0), e[0].fire("resize");
                    });
                }),
                (h.prototype._getMouseYAdditionalLimit = function (e) {
                    var t,
                        n = 0,
                        o = 0,
                        i = function (e) {
                            return e.isSplitter() ? e.getHeight() : e.options.minHeight;
                        };
                    for (t = this.prevPanel(e); l.isExisty(t); t = this.prevPanel(t)) n += i(t);
                    for (t = this.nextPanel(e); l.isExisty(t); t = this.nextPanel(t)) o += i(t);
                    return [n, o];
                }),
                (h.prototype._onDragStart = function (e) {
                    var t = e.originEvent,
                        n = e.target,
                        i = a.getData(n, "panelIndex"),
                        s = this.panels[i],
                        c = s.getHeight(),
                        u = r.getMousePosition(t, n)[1],
                        d = r.getMousePosition(t, this.container)[1],
                        h = this._initializeGuideElement(n, d);
                    s.addClass(o.classname("splitter-focused")),
                        (this._dragData = { splPanel: s, splOffsetY: u, guideElement: h, startY: d - u, minY: 0, maxY: this.getViewBound().height - c }),
                        l.browser.msie || a.addClass(document.body, o.classname("resizing"));
                }),
                (h.prototype._onDrag = function (e) {
                    var t = this._dragData,
                        n = r.getMousePosition(e.originEvent, this.container)[1];
                    (n = i.limit(n - t.splOffsetY, [t.minY], [t.maxY])), this._refreshGuideElement(t.guideElement, n);
                }),
                (h.prototype._onDragEnd = function (e) {
                    var t = this._dragData,
                        n = this._getMouseYAdditionalLimit(t.splPanel),
                        l = r.getMousePosition(e.originEvent, this.container)[1];
                    (l = i.limit(l - t.splOffsetY, [t.minY + n[0]], [t.maxY - n[1]])),
                        this._resize(t.splPanel, t.startY, l),
                        this.fire("resize", { layoutData: this.getLayoutData() }),
                        (this._dragData = null),
                        this._clearGuideElement(t.guideElement),
                        t.splPanel.removeClass(o.classname("splitter-focused")),
                        a.removeClass(document.body, o.classname("resizing"));
                }),
                (h.prototype.refresh = function () {
                    var e,
                        t = [],
                        n = this.getViewBound().height,
                        o = 0;
                    n &&
                        (l.forEach(this.panels, function (e) {
                            e.options.autoHeight ? t.push(e) : (o += e.getHeight());
                        }),
                        (e = (n - o) / t.length),
                        l.forEach(t, function (t) {
                            t.setHeight(null, e);
                        }));
                }),
                (h.prototype.addPanel = function (e, t) {
                    var n = document.createElement("div"),
                        o = this.panels,
                        i = o.length;
                    (e = l.extend({ index: i }, e)), o.push(new c(e, n, this.theme)), t.appendChild(n);
                }),
                (h.prototype.addPanels = function (e, t) {
                    var n = this,
                        o = document.createDocumentFragment();
                    l.forEach(e, function (e) {
                        n.addPanel(e, o);
                    }),
                        t.appendChild(o);
                }),
                (h.prototype.getPanelByName = function (e) {
                    var t;
                    return (
                        l.forEach(this.panels, function (n) {
                            n.name === e && (t = n);
                        }),
                        t
                    );
                }),
                (e.exports = h);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1),
                a = n(3),
                r = n(4).Date,
                s = n(8);
            function c(e, t) {
                (t = i.appendHTMLElement("div", t, o.classname("weekday"))),
                    (this.options = l.extend({ containerBottomGutter: 8, scheduleHeight: 18, scheduleGutter: 2, narrowWeekend: !1, startDayOfWeek: 0, workweek: !1 }, e)),
                    (this._cacheParentViewModel = null),
                    s.call(this, t);
            }
            l.inherit(c, s),
                (c.prototype.getRenderDateRange = function () {
                    return this._cacheParentViewModel.range;
                }),
                (c.prototype.getRenderDateGrids = function () {
                    return this._cacheParentViewModel.grids;
                }),
                (c.prototype.getBaseViewModel = function (e) {
                    var t = this.options,
                        n = e.range,
                        o = 100 / n.length,
                        i = e.grids,
                        s = e.exceedDate || {},
                        c = e.theme,
                        u = new r().toLocalTime();
                    return (
                        (this._cacheParentViewModel = e),
                        {
                            width: o,
                            scheduleHeight: t.scheduleHeight,
                            scheduleBlockHeight: t.scheduleHeight + t.scheduleGutter,
                            scheduleBlockGutter: t.scheduleGutter,
                            dates: l.map(
                                n,
                                function (e, t) {
                                    var n = e.getDay(),
                                        l = a.format(new r(e), "YYYYMMDD"),
                                        o = a.isSameDate(u, e);
                                    return {
                                        date: a.format(e, "YYYY-MM-DD"),
                                        month: e.getMonth() + 1,
                                        day: n,
                                        isToday: o,
                                        ymd: l,
                                        hiddenSchedules: s[l] || 0,
                                        width: i[t] ? i[t].width : 0,
                                        left: i[t] ? i[t].left : 0,
                                        color: this._getDayNameColor(c, n, o),
                                        backgroundColor: this._getDayBackgroundColor(c, n),
                                    };
                                },
                                this
                            ),
                        }
                    );
                }),
                (c.prototype.getExceedDate = function (e, t, n) {
                    var o = this._initExceedDate(n);
                    return (
                        l.forEach(t, function (t) {
                            l.forEach(t, function (t) {
                                l.forEach(t, function (t) {
                                    var n;
                                    !t ||
                                        t.top < e ||
                                        ((t.hidden = !0),
                                        (n = a.range(t.getStarts(), t.getEnds(), a.MILLISECONDS_PER_DAY)),
                                        l.forEach(n, function (e) {
                                            var t = a.format(e, "YYYYMMDD");
                                            o[t] += 1;
                                        }));
                                });
                            });
                        }),
                        o
                    );
                }),
                (c.prototype._initExceedDate = function (e) {
                    var t = {};
                    return (
                        l.forEach(e, function (e) {
                            var n = a.format(e, "YYYYMMDD");
                            t[n] = 0;
                        }),
                        t
                    );
                }),
                (c.prototype._getDayNameColor = function (e, t, n, l) {
                    var o = "";
                    return (
                        e &&
                            (o =
                                0 === t
                                    ? l
                                        ? e.month.holidayExceptThisMonth.color
                                        : e.common.holiday.color
                                    : 6 === t
                                    ? l
                                        ? e.month.dayExceptThisMonth.color
                                        : e.common.saturday.color
                                    : n
                                    ? e.common.today.color
                                    : l
                                    ? e.month.dayExceptThisMonth.color
                                    : e.common.dayname.color),
                        o
                    );
                }),
                (c.prototype._getDayBackgroundColor = function (e, t) {
                    var n = "";
                    return e && (n = 0 === t || 6 === t ? e.month.weekend.backgroundColor : "inherit"), n;
                }),
                (e.exports = c);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0);
            function o(e, t, n) {
                (this.x = n ? Math.round(e) : e), (this.y = n ? Math.round(t) : t);
            }
            (o.getRatio = function (e, t, n) {
                return t === n ? e.clone() : e.multiplyBy(n)._divideBy(t);
            }),
                (o.n = function (e, t, n) {
                    return e instanceof o ? e : l.isArray(e) ? new o(e[0], e[1], t) : new o(e, t, n);
                }),
                (o.prototype.clone = function () {
                    return new o(this.x, this.y);
                }),
                (o.prototype.add = function (e) {
                    return this.clone()._add(o.n(e));
                }),
                (o.prototype._add = function (e) {
                    return (this.x += e.x), (this.y += e.y), this;
                }),
                (o.prototype.subtract = function (e) {
                    return this.clone()._subtract(o.n(e));
                }),
                (o.prototype._subtract = function (e) {
                    return (this.x -= e.x), (this.y -= e.y), this;
                }),
                (o.prototype.divideBy = function (e) {
                    return this.clone()._divideBy(e);
                }),
                (o.prototype._divideBy = function (e) {
                    return (this.x /= e), (this.y /= e), this;
                }),
                (o.prototype.multiplyBy = function (e) {
                    return this.clone()._multiplyBy(e);
                }),
                (o.prototype._multiplyBy = function (e) {
                    return (this.x *= e), (this.y *= e), this;
                }),
                (o.prototype.round = function () {
                    return this.clone()._round();
                }),
                (o.prototype._round = function () {
                    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
                }),
                (o.prototype.reverse = function () {
                    return this.clone()._reverse();
                }),
                (o.prototype._reverse = function () {
                    return (this.x *= -1), (this.y *= -1), this;
                }),
                (o.prototype.floor = function () {
                    return this.clone()._floor();
                }),
                (o.prototype._floor = function () {
                    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
                }),
                (o.prototype.ceil = function () {
                    return this.clone()._ceil();
                }),
                (o.prototype._ceil = function () {
                    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
                }),
                (o.prototype.rotate = function (e, t, n, l) {
                    return this.clone()._rotate(e, t, n, l);
                }),
                (o.prototype._rotate = function (e, t, n, l) {
                    var o,
                        i,
                        a = e * (Math.PI / 180);
                    return (n = n || parseFloat(Math.cos(a).toFixed(8))), (l = l || parseFloat(Math.sin(a).toFixed(8))), this._subtract(t), (o = this.x), (i = this.y), (this.x = o * n - i * l), (this.y = o * l + i * n), this._add(t), this;
                }),
                (o.prototype.distanceTo = function (e) {
                    var t, n;
                    return (t = (e = o.n(e)).x - this.x), (n = e.y - this.y), Math.sqrt(t * t + n * n);
                }),
                (o.prototype.equals = function (e) {
                    return (e = o.n(e)).x === this.x && e.y === this.y;
                }),
                (o.prototype.toString = function () {
                    return "Point(" + this.x + ", " + this.y + ")";
                }),
                (o.prototype.toArray = function () {
                    return [this.x, this.y];
                }),
                (e.exports = o);
        },
        function (e, t, n) {
            "use strict";
            var l = n(8),
                o = n(16),
                i = n(0),
                a = n(79),
                r = n(4),
                s = n(2),
                c = n(6),
                u = n(1),
                d = n(5),
                h = n(3),
                p = n(80),
                m = r.Date;
            function f(e, t, n) {
                l.call(this, e),
                    (this.layer = new o(null, e)),
                    (this._viewModel = null),
                    (this._selectedCal = null),
                    (this._schedule = null),
                    (this.calendars = t),
                    (this._focusedDropdown = null),
                    (this._usageStatistics = n),
                    (this._onClickListeners = [
                        this._selectDropdownMenuItem.bind(this),
                        this._toggleDropdownMenuView.bind(this),
                        this._closeDropdownMenuView.bind(this, null),
                        this._closePopup.bind(this),
                        this._toggleIsAllday.bind(this),
                        this._toggleIsPrivate.bind(this),
                        this._onClickSaveSchedule.bind(this),
                    ]),
                    c.on(e, "click", this._onClick, this);
            }
            i.inherit(f, l),
                (f.prototype._onMouseDown = function (e) {
                    var t = c.getEventTarget(e);
                    u.closest(t, s.classname(".floating-layer")) || this.hide();
                }),
                (f.prototype.destroy = function () {
                    this.layer.destroy(), (this.layer = null), c.off(this.container, "click", this._onClick, this), c.off(document.body, "mousedown", this._onMouseDown, this), l.prototype.destroy.call(this);
                }),
                (f.prototype._onClick = function (e) {
                    var t = c.getEventTarget(e);
                    i.forEach(this._onClickListeners, function (e) {
                        return !e(t);
                    });
                }),
                (f.prototype._closePopup = function (e) {
                    var t = s.classname("popup-close");
                    return !(!u.hasClass(e, t) && !u.closest(e, "." + t)) && (this.hide(), !0);
                }),
                (f.prototype._toggleDropdownMenuView = function (e) {
                    var t = s.classname("dropdown-button"),
                        n = u.hasClass(e, t) ? e : u.closest(e, "." + t);
                    return !!n && (u.hasClass(n.parentNode, s.classname("open")) ? this._closeDropdownMenuView(n.parentNode) : this._openDropdownMenuView(n.parentNode), !0);
                }),
                (f.prototype._closeDropdownMenuView = function (e) {
                    (e = e || this._focusedDropdown) && (u.removeClass(e, s.classname("open")), (this._focusedDropdown = null));
                }),
                (f.prototype._openDropdownMenuView = function (e) {
                    u.addClass(e, s.classname("open")), (this._focusedDropdown = e);
                }),
                (f.prototype._selectDropdownMenuItem = function (e) {
                    var t,
                        n,
                        l,
                        o,
                        i = s.classname("dropdown-menu-item"),
                        a = s.classname("icon"),
                        r = s.classname("content"),
                        c = u.hasClass(e, i) ? e : u.closest(e, "." + i);
                    return (
                        !!c &&
                        ((t = u.find("." + a, c).style.backgroundColor || "transparent"),
                        (n = u.find("." + r, c).innerHTML),
                        (l = u.closest(c, s.classname(".dropdown"))),
                        (o = u.find(s.classname(".dropdown-button"), l)),
                        (u.find("." + r, o).innerText = n),
                        u.hasClass(l, s.classname("section-calendar")) &&
                            ((u.find("." + a, o).style.backgroundColor = t),
                            (this._selectedCal = d.find(this.calendars, function (e) {
                                return e.id === u.getData(c, "calendarId");
                            }))),
                        u.removeClass(l, s.classname("open")),
                        !0)
                    );
                }),
                (f.prototype._toggleIsAllday = function (e) {
                    var t,
                        n = s.classname("section-allday"),
                        l = u.hasClass(e, n) ? e : u.closest(e, "." + n);
                    return !!l && (((t = u.find(s.classname(".checkbox-square"), l)).checked = !t.checked), !0);
                }),
                (f.prototype._toggleIsPrivate = function (e) {
                    var t = s.classname("section-private"),
                        n = u.hasClass(e, t) ? e : u.closest(e, "." + t);
                    return !!n && (u.hasClass(n, s.classname("public")) ? u.removeClass(n, s.classname("public")) : u.addClass(n, s.classname("public")), !0);
                }),
                (f.prototype._onClickSaveSchedule = function (e) {
                    var t,
                        n,
                        l,
                        o,
                        i,
                        a,
                        r = s.classname("popup-save"),
                        c = s.cssPrefix;
                    return (
                        !(!u.hasClass(e, r) && !u.closest(e, "." + r)) &&
                        ((t = u.get(c + "schedule-title")),
                        (n = new m(this.rangePicker.getStartDate()).toLocalTime()),
                        (l = new m(this.rangePicker.getEndDate()).toLocalTime()),
                        this._validateForm(t, n, l)
                            ? ((a = !!u.get(c + "schedule-allday").checked),
                              (o = this._getRangeDate(n, l, a)),
                              (i = {
                                  calendarId: this._selectedCal ? this._selectedCal.id : null,
                                  title: t,
                                  state: u.get(c + "schedule-state").innerText,
                                  start: o.start,
                                  end: o.end,
                                  isAllDay: a,
                                  location: u.get(c + "schedule-location"),
                                  isPrivate: !u.hasClass(u.get(c + "schedule-private"), s.classname("public")),
                              }),
                              this._isEditMode ? this._onClickUpdateSchedule(i) : this._onClickCreateSchedule(i),
                              this.hide(),
                              !0)
                            : (t.value || t.focus(), !1))
                    );
                }),
                (f.prototype.render = function (e) {
                    var t,
                        n,
                        l = this.calendars,
                        o = this.layer,
                        a = this;
                    (e.zIndex = this.layer.zIndex + 5),
                        (e.calendars = l),
                        l.length && (e.selectedCal = this._selectedCal = l[0]),
                        (this._isEditMode = e.schedule && e.schedule.id),
                        this._isEditMode ? ((t = e.target), (e = this._makeEditModeData(e))) : ((this.guide = e.guide), (t = (n = this._getGuideElements(this.guide)).length ? n[0] : null)),
                        o.setContent(p(e)),
                        this._createDatepicker(e.start, e.end, e.isAllDay),
                        o.show(),
                        t && this._setPopupPositionAndArrowDirection(t.getBoundingClientRect()),
                        i.debounce(function () {
                            c.on(document.body, "mousedown", a._onMouseDown, a);
                        })();
                }),
                (f.prototype._makeEditModeData = function (e) {
                    var t,
                        n,
                        l,
                        o,
                        i,
                        a,
                        r,
                        s = e.schedule,
                        c = s.raw || {},
                        u = this.calendars,
                        h = s.id;
                    return (
                        (t = s.title),
                        (n = "private" === c.class),
                        (l = s.location),
                        (o = s.start),
                        (i = s.end),
                        (a = s.isAllDay),
                        (r = s.state),
                        (e.selectedCal = this._selectedCal = d.find(this.calendars, function (t) {
                            return t.id === e.schedule.calendarId;
                        })),
                        (this._schedule = s),
                        {
                            id: h,
                            selectedCal: this._selectedCal,
                            calendars: u,
                            title: t,
                            isPrivate: n,
                            location: l,
                            isAllDay: a,
                            state: r,
                            start: o,
                            end: i,
                            raw: { class: n ? "private" : "public" },
                            zIndex: this.layer.zIndex + 5,
                            isEditMode: this._isEditMode,
                        }
                    );
                }),
                (f.prototype._setPopupPositionAndArrowDirection = function (e) {
                    var t = u.find(s.classname(".popup"), this.layer.container),
                        n = { width: t.offsetWidth, height: t.offsetHeight },
                        l = this.container.getBoundingClientRect(),
                        o = this._calcRenderingData(n, l, e);
                    this.layer.setPosition(o.x, o.y), this._setArrowDirection(o.arrow);
                }),
                (f.prototype._getGuideElements = function (e) {
                    var t = [],
                        n = 0;
                    if (e.guideElement) t.push(e.guideElement);
                    else if (e.guideElements) for (; n < 6; n += 1) e.guideElements[n] && t.push(e.guideElements[n]);
                    return t;
                }),
                (f.prototype._getBoundOfFirstRowGuideElement = function (e) {
                    var t;
                    return e.length ? { top: (t = e[0].getBoundingClientRect()).top, left: t.left, bottom: t.bottom, right: t.right } : null;
                }),
                (f.prototype._getYAndArrowDirection = function (e, t, n, l, o) {
                    var i = "arrow-bottom",
                        a = e - n;
                    return a < l ? ((a = t - l + 3), (i = "arrow-top")) : (a = a - l - 3), a + n > o && (a = o - n - l - 3), { y: a, arrowDirection: i };
                }),
                (f.prototype._getXAndArrowLeft = function (e, t, n, l, o) {
                    var i,
                        a = (e + t) / 2,
                        r = a - n / 2;
                    return r + n > o ? (i = a - (r = t - n + 8)) : (r += 8), r < l ? ((r = 0), (i = a - l - 8)) : (r = r - l - 8), { x: r, arrowLeft: i };
                }),
                (f.prototype._calcRenderingData = function (e, t, n) {
                    var l = this._getYAndArrowDirection(n.top, n.bottom, e.height, t.top, t.bottom),
                        o = this._getXAndArrowLeft(n.left, n.right, e.width, t.left, t.right);
                    return { x: o.x, y: l.y, arrow: { direction: l.arrowDirection, position: o.arrowLeft } };
                }),
                (f.prototype._setArrowDirection = function (e) {
                    var t = e.direction || "arrow-bottom",
                        n = u.get(s.classname("popup-arrow")),
                        l = u.find(s.classname(".popup-arrow-border", n));
                    t !== s.classname("arrow-bottom") && (u.removeClass(n, s.classname("arrow-bottom")), u.addClass(n, s.classname(t))), e.position && (l.style.left = e.position + "px");
                }),
                (f.prototype._createDatepicker = function (e, t, n) {
                    var l = s.cssPrefix;
                    this.rangePicker = a.createRangePicker({
                        startpicker: { date: new m(e).toDate(), input: "#" + l + "schedule-start-date", container: "#" + l + "startpicker-container" },
                        endpicker: { date: new m(t).toDate(), input: "#" + l + "schedule-end-date", container: "#" + l + "endpicker-container" },
                        format: n ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm",
                        timepicker: n ? null : { showMeridiem: !1, usageStatistics: this._usageStatistics },
                        usageStatistics: this._usageStatistics,
                    });
                }),
                (f.prototype.hide = function () {
                    this.layer.hide(), this.guide && (this.guide.clearGuideElement(), (this.guide = null)), c.off(document.body, "mousedown", this._onMouseDown, this);
                }),
                (f.prototype.refresh = function () {
                    this._viewModel && this.layer.setContent(this.tmpl(this._viewModel));
                }),
                (f.prototype.setCalendars = function (e) {
                    this.calendars = e || [];
                }),
                (f.prototype._validateForm = function (e, t, n) {
                    return !!e.value && !(!t && !n) && 1 !== h.compare(t, n);
                }),
                (f.prototype._getRangeDate = function (e, t, n) {
                    var l = n ? h.start(e) : e,
                        o = n ? h.renderEnd(e, t) : t;
                    return { start: new m(l), end: new m(o) };
                }),
                (f.prototype._onClickUpdateSchedule = function (e) {
                    var t = d.getScheduleChanges(this._schedule, ["calendarId", "title", "location", "start", "end", "isAllDay", "state"], {
                        calendarId: e.calendarId,
                        title: e.title.value,
                        location: e.state,
                        start: e.start,
                        end: e.end,
                        isAllDay: e.isAllDay,
                        state: e.state,
                    });
                    this.fire("beforeUpdateSchedule", {
                        schedule: i.extend({ raw: { class: e.isPrivate ? "private" : "public" } }, this._schedule),
                        changes: t,
                        start: e.start,
                        end: e.end,
                        calendar: this._selectedCal,
                        triggerEventName: "click",
                    });
                }),
                (f.prototype._onClickCreateSchedule = function (e) {
                    this.fire("beforeCreateSchedule", {
                        calendarId: e.calendarId,
                        title: e.title.value,
                        location: e.location.value,
                        raw: { class: e.isPrivate ? "private" : "public" },
                        start: e.start,
                        end: e.end,
                        isAllDay: e.isAllDay,
                        state: e.state,
                    });
                }),
                (e.exports = f);
        },
        function (e, t, n) {
            "use strict";
            var l = n(8),
                o = n(16),
                i = n(0),
                a = n(2),
                r = n(6),
                s = n(1),
                c = n(81);
            function u(e) {
                l.call(this, e), (this.layer = new o(null, e)), (this._viewModel = null), (this._schedule = null), (this._calendar = null), r.on(e, "click", this._onClick, this);
            }
            i.inherit(u, l),
                (u.prototype._onMouseDown = function (e) {
                    var t = r.getEventTarget(e);
                    s.closest(t, a.classname(".floating-layer")) || this.hide();
                }),
                (u.prototype.destroy = function () {
                    this.layer.destroy(), (this.layer = null), r.off(this.container, "click", this._onClick, this), r.off(document.body, "mousedown", this._onMouseDown, this), l.prototype.destroy.call(this);
                }),
                (u.prototype._onClick = function (e) {
                    var t = r.getEventTarget(e);
                    this._onClickEditSchedule(t), this._onClickDeleteSchedule(t);
                }),
                (u.prototype._onClickEditSchedule = function (e) {
                    var t = a.classname("popup-edit");
                    (s.hasClass(e, t) || s.closest(e, "." + t)) && (this.fire("beforeUpdateSchedule", { schedule: this._schedule, triggerEventName: "click", target: this._scheduleEl }), this.hide());
                }),
                (u.prototype._onClickDeleteSchedule = function (e) {
                    var t = a.classname("popup-delete");
                    (s.hasClass(e, t) || s.closest(e, "." + t)) && (this.fire("beforeDeleteSchedule", { schedule: this._schedule }), this.hide());
                }),
                (u.prototype.render = function (e) {
                    var t = this.layer,
                        n = this;
                    t.setContent(c({ schedule: e.schedule, calendar: e.calendar })),
                        t.show(),
                        this._setPopupPositionAndArrowDirection(e.event),
                        (this._schedule = e.schedule),
                        (this._calendar = e.calendar),
                        i.debounce(function () {
                            r.on(document.body, "mousedown", n._onMouseDown, n);
                        })();
                }),
                (u.prototype._setPopupPositionAndArrowDirection = function (e) {
                    var t,
                        n = s.find(a.classname(".popup"), this.layer.container),
                        l = { width: n.offsetWidth, height: n.offsetHeight },
                        o = this.container.getBoundingClientRect(),
                        i = r.getEventTarget(e),
                        c = s.closest(i, a.classname(".time-date-schedule-block")) || s.closest(i, a.classname(".weekday-schedule")) || i,
                        u = c.getBoundingClientRect();
                    (this._scheduleEl = c), (t = this._calcRenderingData(l, o, u)), this.layer.setPosition(t.x, t.y), this._setArrowDirection(t.arrow);
                }),
                (u.prototype._getYAndArrowTop = function (e, t, n, l, o) {
                    var i, a, r;
                    return (a = (i = ((e = e < 0 ? 0 : e) + t) / 2) - n / 2) < l ? ((a = 0), (r = i - l - 8)) : a + n > o ? (r = i - (a = Math.max(o - n - l, 0)) - l - 8) : (a -= l), (r < 0 || r > n) && (r = null), { y: a, arrowTop: r };
                }),
                (u.prototype._getXAndArrowDirection = function (e, t, n, l, o) {
                    var i = "arrow-left",
                        a = t;
                    return a + n > o ? ((i = "arrow-right"), (a = e - n - 4)) : (a += 4), a < l ? (a = 0) : (a -= l), { x: a, arrowDirection: i };
                }),
                (u.prototype._calcRenderingData = function (e, t, n) {
                    var l = this._getYAndArrowTop(n.top, n.bottom, e.height, t.top, t.bottom),
                        o = this._getXAndArrowDirection(n.left, n.right, e.width, t.left, t.right);
                    return { x: o.x, y: l.y, arrow: { direction: o.arrowDirection, position: l.arrowTop } };
                }),
                (u.prototype._setArrowDirection = function (e) {
                    var t = e.direction || "arrow-left",
                        n = s.find(a.classname(".popup-arrow"), this.layer.container),
                        l = s.find(a.classname(".popup-arrow-border"), n);
                    t !== a.classname("arrow-left") && (s.removeClass(n, a.classname("arrow-left")), s.addClass(n, a.classname(t))), e.position && (l.style.top = e.position + "px");
                }),
                (u.prototype.hide = function () {
                    this.layer.hide(), this.guide && (this.guide.clearGuideElement(), (this.guide = null)), r.off(document.body, "mousedown", this._onMouseDown, this);
                }),
                (u.prototype.refresh = function () {
                    this._viewModel && this.layer.setContent(this.tmpl(this._viewModel));
                }),
                (e.exports = u);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(5),
                a = n(1),
                r = n(17),
                s = n(84),
                c = n(4).Date;
            function u(e, t, n) {
                (this.dragHandler = e), (this.view = t), (this.controller = n), (this._dragStart = null), e.on({ dragStart: this._onDragStart }, this), (this.guide = new s(this));
            }
            (u.prototype.destroy = function () {
                this.guide.destroy(), this.dragHandler.off(this), (this.dragHandler = this.view = this.controller = this.guide = this._dragStart = null);
            }),
                (u.prototype.checkExpectedCondition = function (e) {
                    var t,
                        n,
                        i = a.getClass(e);
                    return (
                        !~i.indexOf(o.classname("weekday-resize-handle")) &&
                        !!(t = a.closest(e, o.classname(".weekday"))) &&
                        !(!(n = (i = a.getClass(t)).match(o.daygrid.getViewIDRegExp)) || n.length < 2) &&
                        l.pick(this.view.children.items, n[1])
                    );
                }),
                (u.prototype._onDragStart = function (e) {
                    var t,
                        n,
                        i,
                        r,
                        s,
                        c = e.target,
                        u = this.checkExpectedCondition(c),
                        d = this.controller;
                    u &&
                        (t = a.closest(c, o.classname(".weekday-schedule-block"), !0)) &&
                        ((n = a.getData(t, "id")),
                        (i = d.schedules.items[n]) &&
                            (i.isReadOnly ||
                                ((r = this._retriveScheduleData(this.view, e.originEvent)),
                                (this.getScheduleDataFunc = r),
                                (s = this._dragStart = r(e.originEvent)),
                                l.extend(s, { scheduleBlockElement: t, model: i }),
                                this.dragHandler.on({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this),
                                this.fire("dragstart", s))));
                }),
                (u.prototype._onDrag = function (e) {
                    var t = this.getScheduleDataFunc;
                    t && this.fire("drag", t(e.originEvent));
                }),
                (u.prototype._updateSchedule = function (e) {
                    var t = e.targetModel,
                        n = e.xIndex - e.dragStartXIndex,
                        l = new c(t.start),
                        o = new c(t.end);
                    (l = l.addDate(n)), (o = o.addDate(n)), this.fire("beforeUpdateSchedule", { schedule: t, changes: { start: l, end: o }, start: l, end: o });
                }),
                (u.prototype._onDragEnd = function (e, t, n) {
                    var o,
                        i = this.getScheduleDataFunc,
                        a = this._dragStart;
                    i &&
                        a &&
                        (this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this),
                        (o = i(e.originEvent)),
                        l.extend(o, { targetModel: a.model }),
                        n || this._updateSchedule(o),
                        this.fire(t || "dragend", o),
                        (this.getScheduleDataFunc = this._dragStart = null));
                }),
                (u.prototype._onClick = function (e) {
                    this._onDragEnd(e, "click", !0);
                }),
                i.mixin(r, u),
                l.CustomEvents.mixin(u),
                (e.exports = u);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1),
                a = n(3),
                r = n(4).Date,
                s = n(106),
                c = Math.max,
                u = Math.min,
                d = Math.abs,
                h = Math.floor;
            function p(e, t) {
                (this.options = l.extend({ top: 0, height: "20px", bgColor: "#f7ca88", label: "New event", isResizeMode: !1, isCreationMode: !1, styles: this._getStyles(t.controller.theme) }, e)),
                    (this.view = t),
                    (this.weeks = t.children.sort(function (e, t) {
                        return l.stamp(e) - l.stamp(t);
                    })),
                    (this.days = t.children.single().getRenderDateRange().length),
                    (this.startCoord = [0, 0]),
                    (this.guideElements = {}),
                    (this.grids = t.grids);
            }
            (p.prototype.destroy = function () {
                this.clear(), (this.options = this.view = this.weeks = this.days = this.startCoord = this.guideElements = null);
            }),
                (p.prototype.clearGuideElement = function () {
                    this.destroy();
                }),
                (p.prototype._getRatioValueInWeek = function (e) {
                    return (this.grids[e] || { left: 100 }).left;
                }),
                (p.prototype._createGuideElement = function () {
                    var e = document.createElement("div");
                    return (e.innerHTML = s(this.options)), e.firstChild;
                }),
                (p.prototype._getGuideElement = function (e) {
                    var t = this.guideElements,
                        n = t[e],
                        l = this.weeks[e];
                    return l ? (n || ((n = this._createGuideElement()), l.container.appendChild(n), (t[e] = n)), n) : null;
                }),
                (p.prototype._getCoordByDate = function (e) {
                    for (
                        var t = this.weeks,
                            n = l.pick(this.view, "options", "workweek") ? this.days + 2 : this.days,
                            o = function (e, t) {
                                return h(a.millisecondsTo("day", d(t - e)));
                            },
                            i = a.start(t[0].options.renderStartDate),
                            s = e < i,
                            c = new r(i),
                            u = new r(i).addDate(s ? -n : n).addDate(-1),
                            p = o(e, c),
                            m = 0;
                        !a.isBetweenWithDate(e, c, u);

                    )
                        c.addDate(s ? -n : n), (u = new r(c).addDate(n - 1)), (p = o(e, c)), (m += s ? -1 : 1);
                    return [p, m];
                }),
                (p.prototype._getLimitedCoord = function (e, t, n) {
                    var l,
                        o = e[0],
                        i = e[1];
                    return (t = t || [0, 0]), (n = n || [this.days - 1, this.weeks.length - 1]), i < t[1] ? (l = t.slice(0)) : i > n[1] ? (l = n.slice(0)) : ((o = c(t[0], o)), (l = [(o = u(n[0], o)), i])), l;
                }),
                (p.prototype.start = function (e) {
                    var t,
                        n = this.options,
                        o = e.target,
                        i = e.model,
                        s = e.x,
                        c = e.y,
                        u = new r(this.view.options.renderMonth);
                    n.isCreationMode
                        ? i && !a.isSameMonth(u, i.start) && (i.start.setMonth(u.getMonth()), i.start.setDate(1), i.end.setMonth(u.getMonth()), i.end.setDate(1))
                        : ((s = (t = this._getCoordByDate(i.getStarts()))[0]), (c = t[1]), l.extend(this.options, { top: parseInt(o.style.top, 10) + "px", height: parseInt(o.style.height, 10) + "px", label: i.title }, i)),
                        (l.isUndefined(s) || l.isUndefined(c)) && ((s = (t = this._getCoordByDate(i.getStarts()))[0]), (c = t[1])),
                        (this.startCoord = [s, c]),
                        this.update(s, c);
                }),
                (p.prototype._updateGuides = function (e) {
                    l.forEach(e, function (e) {
                        var t = e.guide,
                            n = o.classname("month-exceed-left"),
                            l = o.classname("month-exceed-right");
                        (t.style.display = "block"), (t.style.left = e.left + "%"), (t.style.width = e.width + "%"), e.exceedL ? i.addClass(t, n) : i.removeClass(t, n), e.exceedR ? i.addClass(t, l) : i.removeClass(t, l);
                    });
                }),
                (p.prototype._getOriginIndicate = function (e, t) {
                    var n,
                        l,
                        o = u(e[0], t[0]),
                        i = c(e[0], t[0]) + 1;
                    return (
                        t[1] > e[1] ? ((o = e[0]), (i = this.days), (l = !0)) : t[1] < e[1] && ((o = 0), (i = e[0] + 1), (n = !0)),
                        { left: this._getRatioValueInWeek(o), width: this._getRatioValueInWeek(i) - this._getRatioValueInWeek(o), exceedL: n, exceedR: l }
                    );
                }),
                (p.prototype._getMouseIndicate = function (e, t) {
                    var n,
                        l,
                        o = t[0],
                        i = t[0] + 1;
                    return t[1] > e[1] ? ((o = 0), (n = !0)) : t[1] < e[1] && ((i = this.days), (l = !0)), { left: this._getRatioValueInWeek(o), width: this._getRatioValueInWeek(i) - this._getRatioValueInWeek(o), exceedL: n, exceedR: l };
                }),
                (p.prototype._getContainIndicate = function () {
                    return { left: 0, width: 100, exceedL: !0, exceedR: !0 };
                }),
                (p.prototype._removeGuideElements = function (e) {
                    var t = this.guideElements;
                    l.forEach(e, function (e) {
                        i.remove(t[e]), delete t[e];
                    });
                }),
                (p.prototype._getExcludesInRange = function (e, t) {
                    var n = u.apply(null, e),
                        o = c.apply(null, e),
                        i = [];
                    return (
                        l.forEach(t, function (e) {
                            ((e = parseInt(e, 10)) < n || e > o) && i.push(e);
                        }),
                        i
                    );
                }),
                (p.prototype.update = function (e, t) {
                    var n = this,
                        o = this.startCoord,
                        i = [e, t],
                        a = this.options.isResizeMode ? this._getLimitedCoord(i, o) : i,
                        r = l.keys(this.guideElements),
                        s = l.range(u(o[1], a[1]), c(o[1], a[1]) + 1),
                        d = this._getExcludesInRange(s, r),
                        h = {};
                    this._removeGuideElements(d),
                        l.forEach(s, function (e) {
                            var t,
                                r = n._getGuideElement(e);
                            r && ((t = e === o[1] ? n._getOriginIndicate(o, a) : e === i[1] ? n._getMouseIndicate(o, i) : n._getContainIndicate()), (h[e] = l.extend({ guide: r }, t)));
                        }),
                        this._updateGuides(h);
                }),
                (p.prototype.clear = function () {
                    l.forEach(this.guideElements, function (e) {
                        i.remove(e);
                    }),
                        (this.guideElements = {});
                }),
                (p.prototype._getStyles = function (e) {
                    var t = {};
                    return (
                        e &&
                            ((t.border = e.common.creationGuide.border),
                            (t.backgroundColor = e.common.creationGuide.backgroundColor),
                            (t.scheduleHeight = e.month.schedule.height),
                            (t.scheduleGutter = e.month.schedule.marginTop),
                            (t.marginLeft = e.month.schedule.marginLeft),
                            (t.marginRight = e.month.schedule.marginRight),
                            (t.borderRadius = e.month.schedule.borderRadius)),
                        t
                    );
                }),
                (e.exports = p);
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(0),
                    o = n(37);
                n(114),
                    n(115),
                    t.jQuery &&
                        (t.jQuery.fn.tuiCalendar = function () {
                            var e,
                                n,
                                i = this.get(0),
                                a = Array.prototype.slice.apply(arguments);
                            if (i)
                                if (((e = l.pick(a, 0) || {}), (n = t.jQuery.data(i, "tuiCalendar")))) {
                                    if ("string" == typeof e && n[e]) return n[e].apply(n, a.slice(1));
                                } else (n = new o(i, e)), t.jQuery.data(i, "tuiCalendar", n);
                            return this;
                        }),
                    (e.exports = o);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(20),
                i = n(26),
                a = n(3),
                r = n(52),
                s = n(27),
                c = n(53),
                u = n(63),
                d = n(97),
                h = n(4).Date,
                p = n(2),
                m = n(4),
                f = n(11),
                g = Math.min;
            function y(e, t) {
                !0 === (t = l.extend({ usageStatistics: !0 }, t)).usageStatistics && l.sendHostname && l.sendHostname("calendar", "UA-129951699-1"),
                    l.isString(e) && (e = document.querySelector(e)),
                    (this._calendarColor = {}),
                    (this._renderDate = a.start()),
                    (this._renderRange = { start: null, end: null }),
                    (this._controller = (function (e) {
                        return c(e);
                    })(t)),
                    this._controller.setCalendars(t.calendars),
                    (this._layout = new r(e, this._controller.theme)),
                    (this._dragHandler = new s({ distance: 10 }, this._layout.container)),
                    (this._viewName = t.defaultView || "week"),
                    (this._refreshMethod = null),
                    (this._scrollToNowMethod = null),
                    (this._requestScrollToNow = !1),
                    (this._openCreationPopup = null),
                    (this._hideMoreView = null),
                    (this._requestRender = 0),
                    (this._options = {}),
                    this._initialize(t);
            }
            function S(e, t) {
                e.recursive(function (e) {
                    var n = e.options;
                    n && t(e, n);
                });
            }
            (y.prototype.destroy = function () {
                this._dragHandler.destroy(),
                    this._controller.off(),
                    this._layout.clear(),
                    this._layout.destroy(),
                    l.forEach(this._options.template, function (e, t) {
                        e && o.unregisterHelper(t + "-tmpl");
                    }),
                    (this._options = this._renderDate = this._controller = this._layout = this._dragHandler = this._viewName = this._refreshMethod = this._scrollToNowMethod = null);
            }),
                (y.prototype._initialize = function (e) {
                    var t = this._controller,
                        n = this._viewName;
                    (this._options = l.extend(
                        {
                            defaultView: n,
                            taskView: !0,
                            scheduleView: !0,
                            template: l.extend({ allday: null, time: null }, l.pick(e, "template") || {}),
                            week: l.extend({}, l.pick(e, "week") || {}),
                            month: l.extend({}, l.pick(e, "month") || {}),
                            calendars: [],
                            useCreationPopup: !1,
                            useDetailPopup: !1,
                            timezones: e.timezones || [],
                            disableDblClick: !1,
                            disableClick: !1,
                            isReadOnly: !1,
                        },
                        e
                    )),
                        (this._options.week = l.extend({ startDayOfWeek: 0, workweek: !1 }, l.pick(this._options, "week") || {})),
                        (this._options.month = l.extend(
                            {
                                startDayOfWeek: 0,
                                workweek: !1,
                                scheduleFilter: function (e) {
                                    return Boolean(e.isVisible) && ("allday" === e.category || "time" === e.category);
                                },
                            },
                            l.pick(e, "month") || {}
                        )),
                        this._options.isReadOnly && (this._options.useCreationPopup = !1),
                        (this._layout.controller = t),
                        this._setAdditionalInternalOptions(e),
                        this.changeView(n, !0);
                }),
                (y.prototype._setAdditionalInternalOptions = function (e) {
                    var t = e.timezones || [];
                    l.forEach(e.template, function (e, t) {
                        e && o.registerHelper(t + "-tmpl", e);
                    }),
                        l.forEach(
                            e.calendars || [],
                            function (e) {
                                this.setCalendarColor(e.id, e, !0);
                            },
                            this
                        ),
                        t.length && m.setOffsetByTimezoneOption(t[0].timezoneOffset);
                }),
                (y.prototype.createSchedules = function (e, t) {
                    l.forEach(
                        e,
                        function (e) {
                            this._setScheduleColor(e.calendarId, e);
                        },
                        this
                    ),
                        this._controller.createSchedules(e, t),
                        t || this.render();
                }),
                (y.prototype.getSchedule = function (e, t) {
                    return this._controller.schedules.single(function (n) {
                        return n.id === e && n.calendarId === t;
                    });
                }),
                (y.prototype.updateSchedule = function (e, t, n, l) {
                    var o = this._controller,
                        i = o.schedules.single(function (n) {
                            return n.id === e && n.calendarId === t;
                        });
                    n && i && ((n = this._hasChangedCalendar(i, n) ? this._setScheduleColor(n.calendarId, n) : n), o.updateSchedule(i, n), l || this.render());
                }),
                (y.prototype._hasChangedCalendar = function (e, t) {
                    return e && t.calendarId && e.calendarId !== t.calendarId;
                }),
                (y.prototype._setScheduleColor = function (e, t) {
                    var n = this._calendarColor[e];
                    return n && ((t.color = t.color || n.color), (t.bgColor = t.bgColor || n.bgColor), (t.borderColor = t.borderColor || n.borderColor), (t.dragBgColor = t.dragBgColor || n.dragBgColor)), t;
                }),
                (y.prototype.deleteSchedule = function (e, t, n) {
                    var l = this._controller,
                        o = l.schedules.single(function (n) {
                            return n.id === e && n.calendarId === t;
                        });
                    o && (l.deleteSchedule(o), n || this.render());
                }),
                (y.prototype._getWeekDayRange = function (e, t, n) {
                    var o, i, r, s;
                    return (
                        (t = t || 0),
                        (o = (e = l.isDate(e) ? e : new h(e)).getDay()),
                        (i = new h(e).addDate(-o + t)),
                        (r = new h(i).addDate(6)),
                        o < t && ((i = new h(i).addDate(-7)), (r = new h(r).addDate(-7))),
                        n &&
                            ((s = a.range(a.start(i), a.end(r), a.MILLISECONDS_PER_DAY)),
                            (i = (s = l.filter(s, function (e) {
                                return !a.isWeekend(e.getDay());
                            }))[0]),
                            (r = s[s.length - 1])),
                        [(i = a.start(i)), (r = a.start(r))]
                    );
                }),
                (y.prototype.toggleSchedules = function (e, t, n) {
                    var o = this._controller.schedules;
                    (n = !l.isExisty(n) || n),
                        (e = l.isArray(e) ? e : [e]),
                        o.each(function (n) {
                            ~l.inArray(n.calendarId, e) && n.set("isVisible", !t);
                        }),
                        n && this.render();
                }),
                (y.prototype.render = function (e) {
                    this._requestRender && f.cancelAnimFrame(this._requestRender), e ? this._renderFunc() : (this._requestRender = f.requestAnimFrame(this._renderFunc, this));
                }),
                (y.prototype._renderFunc = function () {
                    this._refreshMethod && this._refreshMethod(),
                        this._layout && this._layout.render(),
                        this._scrollToNowMethod && this._requestScrollToNow && this._scrollToNowMethod(),
                        (this._requestScrollToNow = !1),
                        (this._requestRender = null);
                }),
                (y.prototype.clear = function (e) {
                    this._controller.clearSchedules(), this.render(e);
                }),
                (y.prototype.scrollToNow = function () {
                    this._scrollToNowMethod && (this._requestScrollToNow = !0);
                }),
                (y.prototype.today = function () {
                    (this._renderDate = a.start()), this._setViewName(this._viewName), this.move(), this.render();
                }),
                (y.prototype.move = function (e) {
                    var t,
                        n,
                        o,
                        r,
                        s,
                        c,
                        u,
                        d,
                        p = i(a.start(this._renderDate)),
                        m = this._viewName,
                        f = this._getCurrentView(),
                        y = S;
                    (e = l.isExisty(e) ? e : 0),
                        "month" === m
                            ? ((r = l.pick(this._options, "month", "startDayOfWeek") || 0),
                              (s = g(l.pick(this._options, "month", "visibleWeeksCount") || 0, 6)),
                              (c = l.pick(this._options, "month", "workweek") || !1),
                              (u = l.pick(this._options, "month", "isAlways6Week")),
                              s
                                  ? ((d = { startDayOfWeek: r, isAlways6Week: !1, visibleWeeksCount: s, workweek: c }),
                                    p.addDate(7 * e * d.visibleWeeksCount),
                                    (o = a.arr2dCalendar(p.d, d)),
                                    y(f, function (e, t) {
                                        t.renderMonth = new h(p.d);
                                    }))
                                  : ((d = { startDayOfWeek: r, isAlways6Week: u, workweek: c }),
                                    p.addMonth(e),
                                    (o = a.arr2dCalendar(p.d, d)),
                                    y(f, function (e, t) {
                                        t.renderMonth = new h(p.d);
                                    })),
                              (t = o[0][0]),
                              (n = o[o.length - 1][o[o.length - 1].length - 1]))
                            : "week" === m
                            ? (p.addDate(7 * e),
                              (r = l.pick(this._options, "week", "startDayOfWeek") || 0),
                              (c = l.pick(this._options, "week", "workweek") || !1),
                              (o = this._getWeekDayRange(p.d, r, c)),
                              (t = o[0]),
                              (n = o[1]),
                              y(f, function (e, l) {
                                  (l.renderStartDate = new h(t)), (l.renderEndDate = new h(n)), e.setState({ collapsed: !0 });
                              }))
                            : "day" === m &&
                              (p.addDate(e),
                              (t = a.start(p.d)),
                              (n = a.end(p.d)),
                              y(f, function (e, l) {
                                  (l.renderStartDate = new h(t)), (l.renderEndDate = new h(n)), e.setState({ collapsed: !0 });
                              })),
                        (this._renderDate = p.d),
                        (this._renderRange = { start: t, end: n });
                }),
                (y.prototype.setDate = function (e) {
                    l.isString(e) && (e = a.parse(e)), (this._renderDate = new h(e)), this._setViewName(this._viewName), this.move(0), this.render();
                }),
                (y.prototype.next = function () {
                    this.move(1), this.render();
                }),
                (y.prototype.prev = function () {
                    this.move(-1), this.render();
                }),
                (y.prototype._getCurrentView = function () {
                    var e = this._viewName;
                    return "day" === e && (e = "week"), l.pick(this._layout.children.items, e);
                }),
                (y.prototype.setCalendarColor = function (e, t, n) {
                    var o = this._calendarColor,
                        i = this._controller.schedules,
                        a = o[e];
                    l.isObject(t) || p.throwError("Calendar#changeCalendarColor(): color ëŠ” {color: '', bgColor: ''} í˜•íƒœì—¬ì•¼ í•©ë‹ˆë‹¤."),
                        (a = o[e] = l.extend({ color: "#000", bgColor: "#a1b56c", borderColor: "#a1b56c", dragBgColor: "#a1b56c" }, t)),
                        i.each(function (t) {
                            t.calendarId === e && ((t.color = a.color), (t.bgColor = a.bgColor), (t.borderColor = a.borderColor), (t.dragBgColor = a.dragBgColor));
                        }),
                        n || this.render();
                }),
                (y.prototype._onClick = function (e) {
                    this.fire("clickSchedule", e);
                }),
                (y.prototype._onClickMore = function (e) {
                    this.fire("clickMore", e);
                }),
                (y.prototype._onClickDayname = function (e) {
                    this.fire("clickDayname", e);
                }),
                (y.prototype._onBeforeCreate = function (e) {
                    this._options.useCreationPopup && !e.useCreationPopup && this._showCreationPopup ? this._showCreationPopup(e) : this.fire("beforeCreateSchedule", e);
                }),
                (y.prototype._onBeforeUpdate = function (e) {
                    this.fire("beforeUpdateSchedule", e);
                }),
                (y.prototype._onBeforeDelete = function (e) {
                    this.fire("beforeDeleteSchedule", e);
                }),
                (y.prototype._onAfterRenderSchedule = function (e) {
                    this.fire("afterRenderSchedule", e);
                }),
                (y.prototype._onClickTimezonesCollapseBtn = function (e) {
                    this.fire("clickTimezonesCollapseBtn", e);
                }),
                (y.prototype._toggleViewSchedule = function (e, t) {
                    var n = this,
                        o = t.handler,
                        i = e ? "on" : "off";
                    l.forEach(o.click, function (e) {
                        e[i]("clickSchedule", n._onClick, n);
                    }),
                        l.forEach(o.dayname, function (e) {
                            e[i]("clickDayname", n._onClickDayname, n);
                        }),
                        l.forEach(o.creation, function (e) {
                            e[i]("beforeCreateSchedule", n._onBeforeCreate, n), e[i]("beforeDeleteSchedule", n._onBeforeDelete, n);
                        }),
                        l.forEach(o.move, function (e) {
                            e[i]("beforeUpdateSchedule", n._onBeforeUpdate, n);
                        }),
                        l.forEach(o.resize, function (e) {
                            e[i]("beforeUpdateSchedule", n._onBeforeUpdate, n);
                        }),
                        t[i]("afterRenderSchedule", n._onAfterRenderSchedule, n),
                        t[i]("clickTimezonesCollapseBtn", n._onClickTimezonesCollapseBtn, n),
                        t[i]("clickMore", n._onClickMore, n);
                }),
                (y.prototype.changeView = function (e, t) {
                    var n,
                        l = this,
                        o = this._layout,
                        i = this._controller,
                        a = this._dragHandler,
                        r = this._options,
                        s = this._viewName;
                    (t || s !== e) &&
                        (this._setViewName(e),
                        "day" === s && (s = "week"),
                        "day" === e && (e = "week"),
                        o.children.doWhenHas(s, function (e) {
                            l._toggleViewSchedule(!1, e);
                        }),
                        o.clear(),
                        "month" === e
                            ? (n = (function (e, t, n, l) {
                                  return d(e, t, n, l);
                              })(i, o.container, a, r))
                            : "week" === e &&
                              (n = (function (e, t, n, l, o) {
                                  return u(e, t, n, l, o);
                              })(i, o.container, a, r, this.getViewName())),
                        o.addChild(n.view),
                        o.children.doWhenHas(e, function (e) {
                            l._toggleViewSchedule(!0, e);
                        }),
                        (this._refreshMethod = n.refresh),
                        (this._scrollToNowMethod = n.scrollToNow),
                        (this._openCreationPopup = n.openCreationPopup),
                        (this._showCreationPopup = n.showCreationPopup),
                        (this._hideMoreView = n.hideMoreView),
                        this.move(),
                        this.render());
                }),
                (y.prototype.toggleTaskView = function (e) {
                    var t = this._viewName;
                    (this._options.taskView = e), this.changeView(t, !0);
                }),
                (y.prototype.toggleScheduleView = function (e) {
                    var t = this._viewName;
                    (this._options.scheduleView = e), this.changeView(t, !0);
                }),
                (y.prototype._setViewName = function (e) {
                    this._viewName = e;
                }),
                (y.prototype.getElement = function (e, t) {
                    return this.getSchedule(e, t) ? document.querySelector('[data-schedule-id="' + e + '"][data-calendar-id="' + t + '"]') : null;
                }),
                (y.prototype.setTheme = function (e) {
                    var t = this._controller.setTheme(e);
                    return this.render(!0), t;
                }),
                (y.prototype.setOptions = function (e, t) {
                    l.forEach(
                        e,
                        function (e, t) {
                            l.isObject(e) && !l.isArray(e)
                                ? l.forEach(
                                      e,
                                      function (e, n) {
                                          this._options[t][n] = e;
                                      },
                                      this
                                  )
                                : (this._options[t] = e);
                        },
                        this
                    ),
                        this._setAdditionalInternalOptions(e),
                        t || this.changeView(this._viewName, !0);
                }),
                (y.prototype.getOptions = function () {
                    return this._options;
                }),
                (y.prototype.getDate = function () {
                    return this._renderDate;
                }),
                (y.prototype.getDateRangeStart = function () {
                    return this._renderRange.start;
                }),
                (y.prototype.getDateRangeEnd = function () {
                    return this._renderRange.end;
                }),
                (y.prototype.getViewName = function () {
                    return this._viewName;
                }),
                (y.prototype.setCalendars = function (e) {
                    l.forEach(
                        e || [],
                        function (e) {
                            this.setCalendarColor(e.id, e, !0);
                        },
                        this
                    ),
                        this._controller.setCalendars(e),
                        this.render();
                }),
                (y.prototype.openCreationPopup = function (e) {
                    this._openCreationPopup && this._openCreationPopup(e);
                }),
                (y.prototype.hideMoreView = function () {
                    this._hideMoreView && this._hideMoreView();
                }),
                (y.setTimezoneOffset = function (e) {
                    m.setOffset(e);
                }),
                (y.setTimezoneOffsetCallback = function (e) {
                    m.setOffsetCallback(e);
                }),
                l.CustomEvents.mixin(y),
                (e.exports = y);
        },
        function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var l = n(10);
            (t.default = function (e) {
                e.registerHelper("blockHelperMissing", function (t, n) {
                    var o = n.inverse,
                        i = n.fn;
                    if (!0 === t) return i(this);
                    if (!1 === t || null == t) return o(this);
                    if (l.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : o(this);
                    if (n.data && n.ids) {
                        var a = l.createFrame(n.data);
                        (a.contextPath = l.appendContextPath(n.data.contextPath, n.name)), (n = { data: a });
                    }
                    return i(t, n);
                });
            }),
                (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            (function (l) {
                t.__esModule = !0;
                var o,
                    i = n(10),
                    a = n(12),
                    r = (o = a) && o.__esModule ? o : { default: o };
                (t.default = function (e) {
                    e.registerHelper("each", function (e, t) {
                        if (!t) throw new r.default("Must pass iterator to #each");
                        var n,
                            o = t.fn,
                            a = t.inverse,
                            s = 0,
                            c = "",
                            u = void 0,
                            d = void 0;
                        function h(t, n, l) {
                            u && ((u.key = t), (u.index = n), (u.first = 0 === n), (u.last = !!l), d && (u.contextPath = d + t)), (c += o(e[t], { data: u, blockParams: i.blockParams([e[t], t], [d + t, null]) }));
                        }
                        if ((t.data && t.ids && (d = i.appendContextPath(t.data.contextPath, t.ids[0]) + "."), i.isFunction(e) && (e = e.call(this)), t.data && (u = i.createFrame(t.data)), e && "object" == typeof e))
                            if (i.isArray(e)) for (var p = e.length; s < p; s++) s in e && h(s, s, s === e.length - 1);
                            else if (l.Symbol && e[l.Symbol.iterator]) {
                                for (var m = [], f = e[l.Symbol.iterator](), g = f.next(); !g.done; g = f.next()) m.push(g.value);
                                for (p = (e = m).length; s < p; s++) h(s, s, s === e.length - 1);
                            } else
                                (n = void 0),
                                    Object.keys(e).forEach(function (e) {
                                        void 0 !== n && h(n, s - 1), (n = e), s++;
                                    }),
                                    void 0 !== n && h(n, s - 1, !0);
                        return 0 === s && (c = a(this)), c;
                    });
                }),
                    (e.exports = t.default);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var l,
                o = n(12),
                i = (l = o) && l.__esModule ? l : { default: l };
            (t.default = function (e) {
                e.registerHelper("helperMissing", function () {
                    if (1 !== arguments.length) throw new i.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                });
            }),
                (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var l,
                o = n(10),
                i = n(12),
                a = (l = i) && l.__esModule ? l : { default: l };
            (t.default = function (e) {
                e.registerHelper("if", function (e, t) {
                    if (2 != arguments.length) throw new a.default("#if requires exactly one argument");
                    return o.isFunction(e) && (e = e.call(this)), (!t.hash.includeZero && !e) || o.isEmpty(e) ? t.inverse(this) : t.fn(this);
                }),
                    e.registerHelper("unless", function (t, n) {
                        if (2 != arguments.length) throw new a.default("#unless requires exactly one argument");
                        return e.helpers.if.call(this, t, { fn: n.inverse, inverse: n.fn, hash: n.hash });
                    });
            }),
                (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
                (t.default = function (e) {
                    e.registerHelper("log", function () {
                        for (var t = [void 0], n = arguments[arguments.length - 1], l = 0; l < arguments.length - 1; l++) t.push(arguments[l]);
                        var o = 1;
                        null != n.hash.level ? (o = n.hash.level) : n.data && null != n.data.level && (o = n.data.level), (t[0] = o), e.log.apply(e, t);
                    });
                }),
                (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
                (t.default = function (e) {
                    e.registerHelper("lookup", function (e, t, n) {
                        return e ? n.lookupProperty(e, t) : e;
                    });
                }),
                (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var l,
                o = n(10),
                i = n(12),
                a = (l = i) && l.__esModule ? l : { default: l };
            (t.default = function (e) {
                e.registerHelper("with", function (e, t) {
                    if (2 != arguments.length) throw new a.default("#with requires exactly one argument");
                    o.isFunction(e) && (e = e.call(this));
                    var n = t.fn;
                    if (o.isEmpty(e)) return t.inverse(this);
                    var l = t.data;
                    return t.data && t.ids && ((l = o.createFrame(t.data)).contextPath = o.appendContextPath(t.data.contextPath, t.ids[0])), n(e, { data: l, blockParams: o.blockParams([e], [l && l.contextPath]) });
                });
            }),
                (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
                (t.registerDefaultDecorators = function (e) {
                    i.default(e);
                });
            var l,
                o = n(46),
                i = (l = o) && l.__esModule ? l : { default: l };
        },
        function (e, t, n) {
            "use strict";
            t.__esModule = !0;
            var l = n(10);
            (t.default = function (e) {
                e.registerDecorator("inline", function (e, t, n, o) {
                    var i = e;
                    return (
                        t.partials ||
                            ((t.partials = {}),
                            (i = function (o, i) {
                                var a = n.partials;
                                n.partials = l.extend({}, a, t.partials);
                                var r = e(o, i);
                                return (n.partials = a), r;
                            })),
                        (t.partials[o.args[0]] = o.fn),
                        i
                    );
                });
            }),
                (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
                (t.createNewLookupObject = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return l.extend.apply(void 0, [Object.create(null)].concat(t));
                });
            var l = n(10);
        },
        function (e, t, n) {
            "use strict";
            function l(e) {
                this.string = e;
            }
            (t.__esModule = !0),
                (l.prototype.toString = l.prototype.toHTML = function () {
                    return "" + this.string;
                }),
                (t.default = l),
                (e.exports = t.default);
        },
        function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
                (t.checkRevision = function (e) {
                    var t = (e && e[0]) || 1,
                        n = r.COMPILER_REVISION;
                    if (t >= r.LAST_COMPATIBLE_COMPILER_REVISION && t <= r.COMPILER_REVISION) return;
                    if (t < r.LAST_COMPATIBLE_COMPILER_REVISION) {
                        var l = r.REVISION_CHANGES[n],
                            o = r.REVISION_CHANGES[t];
                        throw new a.default(
                            "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + l + ") or downgrade your runtime to an older version (" + o + ")."
                        );
                    }
                    throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").");
                }),
                (t.template = function (e, t) {
                    if (!t) throw new a.default("No environment passed to template");
                    if (!e || !e.main) throw new a.default("Unknown template object: " + typeof e);
                    (e.main.decorator = e.main_d), t.VM.checkRevision(e.compiler);
                    var n = e.compiler && 7 === e.compiler[0];
                    var l = {
                        strict: function (e, t, n) {
                            if (!e || !(t in e)) throw new a.default('"' + t + '" not defined in ' + e, { loc: n });
                            return e[t];
                        },
                        lookupProperty: function (e, t) {
                            var n = e[t];
                            return null == n || Object.prototype.hasOwnProperty.call(e, t) || u.resultIsAllowed(n, l.protoAccessControl, t) ? n : void 0;
                        },
                        lookup: function (e, t) {
                            for (var n = e.length, o = 0; o < n; o++) {
                                if (null != (e[o] && l.lookupProperty(e[o], t))) return e[o][t];
                            }
                        },
                        lambda: function (e, t) {
                            return "function" == typeof e ? e.call(t) : e;
                        },
                        escapeExpression: o.escapeExpression,
                        invokePartial: function (n, l, i) {
                            i.hash && ((l = o.extend({}, l, i.hash)), i.ids && (i.ids[0] = !0)), (n = t.VM.resolvePartial.call(this, n, l, i));
                            var r = o.extend({}, i, { hooks: this.hooks, protoAccessControl: this.protoAccessControl }),
                                s = t.VM.invokePartial.call(this, n, l, r);
                            if ((null == s && t.compile && ((i.partials[i.name] = t.compile(n, e.compilerOptions, t)), (s = i.partials[i.name](l, r))), null != s)) {
                                if (i.indent) {
                                    for (var c = s.split("\n"), u = 0, d = c.length; u < d && (c[u] || u + 1 !== d); u++) c[u] = i.indent + c[u];
                                    s = c.join("\n");
                                }
                                return s;
                            }
                            throw new a.default("The partial " + i.name + " could not be compiled when running in runtime-only mode");
                        },
                        fn: function (t) {
                            var n = e[t];
                            return (n.decorator = e[t + "_d"]), n;
                        },
                        programs: [],
                        program: function (e, t, n, l, o) {
                            var i = this.programs[e],
                                a = this.fn(e);
                            return t || o || l || n ? (i = d(this, e, a, t, n, l, o)) : i || (i = this.programs[e] = d(this, e, a)), i;
                        },
                        data: function (e, t) {
                            for (; e && t--; ) e = e._parent;
                            return e;
                        },
                        mergeIfNeeded: function (e, t) {
                            var n = e || t;
                            return e && t && e !== t && (n = o.extend({}, t, e)), n;
                        },
                        nullContext: Object.seal({}),
                        noop: t.VM.noop,
                        compilerInfo: e.compiler,
                    };
                    function i(t) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            o = n.data;
                        i._setup(n), !n.partial && e.useData && (o = p(t, o));
                        var a = void 0,
                            r = e.useBlockParams ? [] : void 0;
                        function s(t) {
                            return "" + e.main(l, t, l.helpers, l.partials, o, r, a);
                        }
                        return e.useDepths && (a = n.depths ? (t != n.depths[0] ? [t].concat(n.depths) : n.depths) : [t]), (s = m(e.main, s, l, n.depths || [], o, r))(t, n);
                    }
                    return (
                        (i.isTop = !0),
                        (i._setup = function (i) {
                            if (i.partial) (l.protoAccessControl = i.protoAccessControl), (l.helpers = i.helpers), (l.partials = i.partials), (l.decorators = i.decorators), (l.hooks = i.hooks);
                            else {
                                var a = o.extend({}, t.helpers, i.helpers);
                                !(function (e, t) {
                                    Object.keys(e).forEach(function (n) {
                                        var l = e[n];
                                        e[n] = (function (e, t) {
                                            var n = t.lookupProperty;
                                            return c.wrapHelper(e, function (e) {
                                                return o.extend({ lookupProperty: n }, e);
                                            });
                                        })(l, t);
                                    });
                                })(a, l),
                                    (l.helpers = a),
                                    e.usePartial && (l.partials = l.mergeIfNeeded(i.partials, t.partials)),
                                    (e.usePartial || e.useDecorators) && (l.decorators = o.extend({}, t.decorators, i.decorators)),
                                    (l.hooks = {}),
                                    (l.protoAccessControl = u.createProtoAccessControl(i));
                                var r = i.allowCallsToHelperMissing || n;
                                s.moveHelperToHooks(l, "helperMissing", r), s.moveHelperToHooks(l, "blockHelperMissing", r);
                            }
                        }),
                        (i._child = function (t, n, o, i) {
                            if (e.useBlockParams && !o) throw new a.default("must pass block params");
                            if (e.useDepths && !i) throw new a.default("must pass parent depths");
                            return d(l, t, e[t], n, 0, o, i);
                        }),
                        i
                    );
                }),
                (t.wrapProgram = d),
                (t.resolvePartial = function (e, t, n) {
                    e ? e.call || n.name || ((n.name = e), (e = n.partials[e])) : (e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name]);
                    return e;
                }),
                (t.invokePartial = function (e, t, n) {
                    var l = n.data && n.data["partial-block"];
                    (n.partial = !0), n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
                    var i = void 0;
                    n.fn &&
                        n.fn !== h &&
                        (function () {
                            n.data = r.createFrame(n.data);
                            var e = n.fn;
                            (i = n.data["partial-block"] = function (t) {
                                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                return (n.data = r.createFrame(n.data)), (n.data["partial-block"] = l), e(t, n);
                            }),
                                e.partials && (n.partials = o.extend({}, n.partials, e.partials));
                        })();
                    void 0 === e && i && (e = i);
                    if (void 0 === e) throw new a.default("The partial " + n.name + " could not be found");
                    if (e instanceof Function) return e(t, n);
                }),
                (t.noop = h);
            var l,
                o = (function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t.default = e), t;
                })(n(10)),
                i = n(12),
                a = (l = i) && l.__esModule ? l : { default: l },
                r = n(22),
                s = n(23),
                c = n(50),
                u = n(25);
            function d(e, t, n, l, o, i, a) {
                function r(t) {
                    var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = a;
                    return !a || t == a[0] || (t === e.nullContext && null === a[0]) || (r = [t].concat(a)), n(e, t, e.helpers, e.partials, o.data || l, i && [o.blockParams].concat(i), r);
                }
                return ((r = m(n, r, e, a, l, i)).program = t), (r.depth = a ? a.length : 0), (r.blockParams = o || 0), r;
            }
            function h() {
                return "";
            }
            function p(e, t) {
                return (t && "root" in t) || ((t = t ? r.createFrame(t) : {}).root = e), t;
            }
            function m(e, t, n, l, i, a) {
                if (e.decorator) {
                    var r = {};
                    (t = e.decorator(t, r, n, l && l[0], i, a, l)), o.extend(t, r);
                }
                return t;
            }
        },
        function (e, t, n) {
            "use strict";
            (t.__esModule = !0),
                (t.wrapHelper = function (e, t) {
                    if ("function" != typeof e) return e;
                    return function () {
                        var n = arguments[arguments.length - 1];
                        return (arguments[arguments.length - 1] = t(n)), e.apply(this, arguments);
                    };
                });
        },
        function (e, t, n) {
            "use strict";
            (function (n) {
                (t.__esModule = !0),
                    (t.default = function (e) {
                        var t = void 0 !== n ? n : window,
                            l = t.Handlebars;
                        e.noConflict = function () {
                            return t.Handlebars === e && (t.Handlebars = l), e;
                        };
                    }),
                    (e.exports = t.default);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1),
                a = n(13),
                r = n(8);
            function s(e, t) {
                (e = i.appendHTMLElement("div", e, o.classname("layout"))),
                    (this.container = e),
                    (this.children = new a(function (e) {
                        return e.viewName;
                    })),
                    (this.theme = t),
                    this.applyTheme();
            }
            l.inherit(s, r),
                (s.prototype.clear = function () {
                    this.children.each(function (e) {
                        e.destroy();
                    }),
                        this.children.clear(),
                        (this.container.innerHTML = "");
                }),
                (s.prototype.removeChild = function (e) {
                    this.children.remove(e);
                }),
                (s.prototype.toggleChildView = function (e) {
                    var t,
                        n,
                        l = ["add", "remove"];
                    this.children.each(function (a) {
                        (t = a.container), (n = Number(a.viewName === e)), i[l[n] + "Class"](t, o.classname("hidden"));
                    });
                }),
                (s.prototype.applyTheme = function () {
                    var e = this.container.style,
                        t = this.theme.common;
                    e.backgroundColor = t.backgroundColor;
                }),
                (e.exports = s);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(54),
                i = n(60),
                a = n(61),
                r = n(62);
            function s(e, t, n) {
                var o = (t[n] = {});
                l.forEach(e, function (e, n) {
                    o[n] = e.bind(t);
                });
            }
            e.exports = function (e) {
                var t = new o(e);
                return s(i, t, "Core"), s(a, t, "Week"), s(r, t, "Month"), (t.Core.theme = t.theme), (t.Week.theme = t.theme), (t.Month.theme = t.theme), t;
            };
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(14),
                i = n(28),
                a = n(3),
                r = n(5),
                s = n(57);
            function c(e) {
                (e = e || {}),
                    (this.groupFunc =
                        e.groupFunc ||
                        function (e) {
                            var t = e.model;
                            return e.model.isAllDay || ("time" === t.category && t.end - t.start > a.MILLISECONDS_PER_DAY) ? "allday" : t.category;
                        }),
                    (this.schedules = r.createScheduleCollection()),
                    (this.dateMatrix = {}),
                    (this.theme = new s(e.theme)),
                    (this.calendars = []);
            }
            (c.prototype._getContainDatesInSchedule = function (e) {
                var t = e.getStarts(),
                    n = e.getEnds(),
                    l = a.start(t),
                    o = 0 === a.compare(t, n) ? n : a.convertStartDayToLastDay(n),
                    i = a.end(o);
                return a.range(l, i, a.MILLISECONDS_PER_DAY);
            }),
                (c.prototype.createSchedule = function (e, t) {
                    var n,
                        l = { data: e };
                    return this.invoke("beforeCreateSchedule", l) ? ((n = this.addSchedule(o.create(e))), t || this.fire("createdSchedule", n), n) : null;
                }),
                (c.prototype.createSchedules = function (e, t) {
                    var n = this;
                    return l.map(e, function (e) {
                        return n.createSchedule(e, t);
                    });
                }),
                (c.prototype.updateSchedule = function (e, t) {
                    var n = t.start || e.start,
                        o = t.end || e.end;
                    return (
                        ["milestone", "task", "allday", "time"].indexOf((t = t || {}).category) > -1 && e.set("category", t.category),
                        "allday" === t.category && (t.isAllDay = !0),
                        l.isUndefined(t.isAllDay) || e.set("isAllDay", t.isAllDay),
                        l.isUndefined(t.calendarId) || e.set("calendarId", t.calendarId),
                        t.title && e.set("title", t.title),
                        t.body && e.set("body", t.body),
                        (t.start || t.end) && (e.isAllDay ? e.setAllDayPeriod(n, o) : e.setTimePeriod(n, o)),
                        t.color && e.set("color", t.color),
                        t.bgColor && e.set("bgColor", t.bgColor),
                        t.borderColor && e.set("borderColor", t.borderColor),
                        t.origin && e.set("origin", t.origin),
                        l.isUndefined(t.isPending) || e.set("isPending", t.isPending),
                        l.isUndefined(t.isFocused) || e.set("isFocused", t.isFocused),
                        l.isUndefined(t.isReadOnly) || e.set("isReadOnly", t.isReadOnly),
                        t.location && e.set("location", t.location),
                        t.state && e.set("state", t.state),
                        t.raw && e.set("raw", t.raw),
                        t.attendees && e.set("attendees", t.attendees),
                        this._removeFromMatrix(e),
                        this._addToMatrix(e),
                        this.fire("updateSchedule"),
                        e
                    );
                }),
                (c.prototype.deleteSchedule = function (e) {
                    return this._removeFromMatrix(e), this.schedules.remove(e), e;
                }),
                (c.prototype._addToMatrix = function (e) {
                    var t = this.dateMatrix,
                        n = this._getContainDatesInSchedule(e);
                    l.forEach(n, function (n) {
                        var o = a.format(n, "YYYYMMDD");
                        (t[o] = t[o] || []).push(l.stamp(e));
                    });
                }),
                (c.prototype._removeFromMatrix = function (e) {
                    var t = l.stamp(e);
                    l.forEach(
                        this.dateMatrix,
                        function (e) {
                            var n = l.inArray(t, e);
                            ~n && e.splice(n, 1);
                        },
                        this
                    );
                }),
                (c.prototype.addSchedule = function (e, t) {
                    return this.schedules.add(e), this._addToMatrix(e), t || this.fire("addedSchedule", e), e;
                }),
                (c.prototype.splitScheduleByDateRange = function (e, t, n) {
                    var o = a.range(a.start(e), a.end(t), a.MILLISECONDS_PER_DAY),
                        i = this.dateMatrix,
                        s = {};
                    return (
                        l.forEachArray(o, function (e) {
                            var t,
                                o = a.format(e, "YYYYMMDD"),
                                c = i[o];
                            (t = s[o] = r.createScheduleCollection()),
                                c &&
                                    c.length &&
                                    l.forEachArray(c, function (e) {
                                        n.doWhenHas(e, function (e) {
                                            t.add(e);
                                        });
                                    });
                        }),
                        s
                    );
                }),
                (c.prototype.findByDateRange = function (e, t) {
                    var n,
                        o,
                        s,
                        c = a.range(a.start(e), a.end(t), a.MILLISECONDS_PER_DAY),
                        u = this.schedules.items,
                        d = this.dateMatrix,
                        h = a.format,
                        p = {};
                    return (
                        l.forEachArray(c, function (e) {
                            (o = h(e, "YYYYMMDD")),
                                (n = d[o]),
                                (s = p[o] = r.createScheduleCollection()),
                                n &&
                                    n.length &&
                                    s.add.apply(
                                        s,
                                        l.map(n, function (e) {
                                            return i.create(u[e]);
                                        })
                                    );
                        }),
                        p
                    );
                }),
                (c.prototype.clearSchedules = function () {
                    (this.dateMatrix = {}), this.schedules.clear(), this.fire("clearSchedules");
                }),
                (c.prototype.setTheme = function (e) {
                    return this.theme.setStyles(e);
                }),
                (c.prototype.setCalendars = function (e) {
                    this.calendars = e;
                }),
                l.CustomEvents.mixin(c),
                (e.exports = c);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = l.isExisty,
                i = l.pick,
                a = l.isFunction,
                r = {
                    set: function (e, t) {
                        this[e] !== t && ((this[e] = t), this._changed || (this._changed = {}), (this._changed[e] = !0), (this._dirty = !0));
                    },
                    isDirty: function () {
                        return !!this._dirty;
                    },
                    dirty: function (e) {
                        (e = !o(e) || e) || (this._changed = {}), (this._dirty = e);
                    },
                    deleteProp: function (e) {
                        delete this[e], this._changed && delete this._changed[e];
                    },
                    isPropChanged: function (e) {
                        return !!this._changed && !0 === this._changed[e];
                    },
                    mixin: function (e) {
                        var t = /(^_|mixin|wrap)/;
                        l.forEachOwnProperties(r, function (n, l) {
                            t.test(l) || (e[l] = r[l]);
                        });
                    },
                    wrap: function (e, t, n) {
                        var s,
                            c = r.wrap;
                        l.isObject(t)
                            ? l.forEachOwnProperties(t, function (t, n) {
                                  c(e, n, t);
                              })
                            : ((n = !o(n) || n),
                              e._wrapper ||
                                  (e._wrapper = function (e, t) {
                                      return function () {
                                          var n = Array.prototype.slice.call(arguments),
                                              l = e.apply(this, n);
                                          return (this._dirty = t), l;
                                      };
                                  }),
                              o(i(e, t)) && a(e[t]) && !o(i(e, t, "_wrapped")) && ((s = e[t]), (e[t] = e._wrapper(s, n)), (e[t]._wrapped = !0)));
                    },
                };
            e.exports = r;
        },
        function (e, t, n) {
            "use strict";
            var l,
                o = n(4).Date,
                i = n(0),
                a = /^\s*|\s*$/g,
                r = n(3);
            (l = {
                trim: function (e) {
                    return e.replace(a, "");
                },
                validators: {
                    required: function (e, t) {
                        var n = !0;
                        return (
                            i.forEach(t, function (t) {
                                var o;
                                return (o = e[t]), (n = !i.isUndefined(o) && "" !== l.trim(o));
                            }),
                            n
                        );
                    },
                    dateRange: function (e, t) {
                        var n, l;
                        return !i.isExisty(e) || 2 !== t.length || ((n = new o(e[t[0]])), (l = new o(e[t[1]])), !(!r.isValid(n) || !r.isValid(l)) && 1 !== r.compare(n, l));
                    },
                },
                isValid: function () {
                    var e,
                        t = this,
                        n = this.constructor.schema,
                        o = l.validators,
                        a = !0;
                    return (
                        !n ||
                        (i.forEach(n, function (n, l) {
                            return !(e = o[l]) || (a = e(t, n));
                        }),
                        a)
                    );
                },
                parameterize: function () {
                    var e = {},
                        t = i.isFunction;
                    return (
                        i.forEach(this, function (n, l) {
                            t(n) || (e[l] = n);
                        }),
                        e
                    );
                },
                mixin: function (e) {
                    i.forEach(l, function (t, n) {
                        "mixin" !== n && (e[n] = t);
                    });
                },
            }),
                (e.exports = l);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(58),
                i = n(59),
                a = n(5);
            function r(e) {
                var t = e || o;
                (this._map = new l.HashMap()), this.setStyles(t);
            }
            (r.prototype.getStyle = function (e) {
                return this._map.get(e);
            }),
                (r.prototype.setStyle = function (e, t) {
                    var n = {};
                    return (n[e] = t), 0 === this.setStyles(n).length;
                }),
                (r.prototype.setStyles = function (e) {
                    var t = [];
                    return (
                        l.forEach(
                            e,
                            function (e, n) {
                                l.isUndefined(i[n]) ? t.push(n) : (this._map.set(n, e), a.set(this, n, e));
                            },
                            this
                        ),
                        l.forEach(
                            i,
                            function (e, t) {
                                this.getStyle(t) || (this._map.set(t, e), a.set(this, t, e));
                            },
                            this
                        ),
                        t
                    );
                }),
                (r.prototype.clear = function () {
                    var e = this._map.keys(),
                        t = {};
                    l.forEach(e, function (e) {
                        var n = e.split(".")[0];
                        t[n] || (t[n] = n);
                    }),
                        l.forEach(
                            t,
                            function (e) {
                                delete this[e];
                            },
                            this
                        ),
                        this._map.removeAll();
                }),
                (e.exports = r);
        },
        function (e, t, n) {
            "use strict";
            e.exports = {
                "common.border": "1px solid #e5e5e5",
                "common.backgroundColor": "white",
                "common.holiday.color": "#ff4040",
                "common.saturday.color": "#333",
                "common.dayname.color": "#333",
                "common.today.color": "#333",
                "common.creationGuide.backgroundColor": "rgba(81, 92, 230, 0.05)",
                "common.creationGuide.border": "1px solid #515ce6",
                "month.dayname.height": "31px",
                "month.dayname.borderLeft": "none",
                "month.dayname.paddingLeft": "10px",
                "month.dayname.paddingRight": "0",
                "month.dayname.backgroundColor": "inherit",
                "month.dayname.fontSize": "12px",
                "month.dayname.fontWeight": "normal",
                "month.dayname.textAlign": "left",
                "month.holidayExceptThisMonth.color": "rgba(255, 64, 64, 0.4)",
                "month.dayExceptThisMonth.color": "rgba(51, 51, 51, 0.4)",
                "month.weekend.backgroundColor": "inherit",
                "month.day.fontSize": "14px",
                "month.schedule.borderRadius": "2px",
                "month.schedule.height": "24px",
                "month.schedule.marginTop": "2px",
                "month.schedule.marginLeft": "8px",
                "month.schedule.marginRight": "8px",
                "month.moreView.border": "1px solid #d5d5d5",
                "month.moreView.boxShadow": "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
                "month.moreView.backgroundColor": "white",
                "month.moreView.paddingBottom": "17px",
                "month.moreViewTitle.height": "44px",
                "month.moreViewTitle.marginBottom": "12px",
                "month.moreViewTitle.borderBottom": "none",
                "month.moreViewTitle.padding": "12px 17px 0 17px",
                "month.moreViewList.padding": "0 17px",
                "week.dayname.height": "42px",
                "week.dayname.borderTop": "1px solid #e5e5e5",
                "week.dayname.borderBottom": "1px solid #e5e5e5",
                "week.dayname.borderLeft": "none",
                "week.dayname.paddingLeft": "0",
                "week.dayname.backgroundColor": "inherit",
                "week.dayname.textAlign": "left",
                "week.today.color": "inherit",
                "week.pastDay.color": "#bbb",
                "week.vpanelSplitter.border": "1px solid #e5e5e5",
                "week.vpanelSplitter.height": "3px",
                "week.daygrid.borderRight": "1px solid #e5e5e5",
                "week.daygrid.backgroundColor": "inherit",
                "week.daygridLeft.width": "72px",
                "week.daygridLeft.backgroundColor": "inherit",
                "week.daygridLeft.paddingRight": "8px",
                "week.daygridLeft.borderRight": "1px solid #e5e5e5",
                "week.today.backgroundColor": "rgba(81, 92, 230, 0.05)",
                "week.weekend.backgroundColor": "inherit",
                "week.timegridLeft.width": "72px",
                "week.timegridLeft.backgroundColor": "inherit",
                "week.timegridLeft.borderRight": "1px solid #e5e5e5",
                "week.timegridLeft.fontSize": "11px",
                "week.timegridOneHour.height": "52px",
                "week.timegridHalfHour.height": "26px",
                "week.timegridHalfHour.borderBottom": "none",
                "week.timegridHorizontalLine.borderBottom": "1px solid #e5e5e5",
                "week.timegrid.paddingRight": "8px",
                "week.timegrid.borderRight": "1px solid #e5e5e5",
                "week.timegridSchedule.borderRadius": "2px",
                "week.timegridSchedule.paddingLeft": "2px",
                "week.currentTime.color": "#515ce6",
                "week.currentTime.fontSize": "11px",
                "week.currentTime.fontWeight": "normal",
                "week.currentTimeLinePast.border": "1px dashed #515ce6",
                "week.currentTimeLineBullet.backgroundColor": "#515ce6",
                "week.currentTimeLineToday.border": "1px solid #515ce6",
                "week.currentTimeLineFuture.border": "none",
                "week.creationGuide.color": "#515ce6",
                "week.creationGuide.fontSize": "11px",
                "week.creationGuide.fontWeight": "bold",
                "week.dayGridSchedule.borderRadius": "2px",
                "week.dayGridSchedule.height": "24px",
                "week.dayGridSchedule.marginTop": "2px",
                "week.dayGridSchedule.marginLeft": "8px",
                "week.dayGridSchedule.marginRight": "8px",
            };
        },
        function (e, t, n) {
            "use strict";
            e.exports = {
                "common.border": "1px solid #e5e5e5",
                "common.backgroundColor": "white",
                "common.holiday.color": "#ff4040",
                "common.saturday.color": "#333",
                "common.dayname.color": "#333",
                "common.today.color": "#333",
                "common.creationGuide.backgroundColor": "rgba(81, 92, 230, 0.05)",
                "common.creationGuide.border": "1px solid #515ce6",
                "month.dayname.height": "31px",
                "month.dayname.borderLeft": "1px solid #e5e5e5",
                "month.dayname.paddingLeft": "10px",
                "month.dayname.paddingRight": "10px",
                "month.dayname.backgroundColor": "inherit",
                "month.dayname.fontSize": "12px",
                "month.dayname.fontWeight": "normal",
                "month.dayname.textAlign": "left",
                "month.holidayExceptThisMonth.color": "rgba(255, 64, 64, 0.4)",
                "month.dayExceptThisMonth.color": "rgba(51, 51, 51, 0.4)",
                "month.weekend.backgroundColor": "inherit",
                "month.day.fontSize": "14px",
                "month.schedule.borderRadius": "2px",
                "month.schedule.height": "24px",
                "month.schedule.marginTop": "2px",
                "month.schedule.marginLeft": "8px",
                "month.schedule.marginRight": "8px",
                "month.moreView.border": "1px solid #d5d5d5",
                "month.moreView.boxShadow": "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
                "month.moreView.backgroundColor": "white",
                "month.moreView.paddingBottom": "17px",
                "month.moreViewTitle.height": "44px",
                "month.moreViewTitle.marginBottom": "12px",
                "month.moreViewTitle.backgroundColor": "inherit",
                "month.moreViewTitle.borderBottom": "none",
                "month.moreViewTitle.padding": "12px 17px 0 17px",
                "month.moreViewList.padding": "0 17px",
                "week.dayname.height": "42px",
                "week.dayname.borderTop": "1px solid #e5e5e5",
                "week.dayname.borderBottom": "1px solid #e5e5e5",
                "week.dayname.borderLeft": "inherit",
                "week.dayname.paddingLeft": "0",
                "week.dayname.backgroundColor": "inherit",
                "week.dayname.textAlign": "left",
                "week.today.color": "#333",
                "week.pastDay.color": "#bbb",
                "week.vpanelSplitter.border": "1px solid #e5e5e5",
                "week.vpanelSplitter.height": "3px",
                "week.daygrid.borderRight": "1px solid #e5e5e5",
                "week.daygrid.backgroundColor": "inherit",
                "week.daygridLeft.width": "72px",
                "week.daygridLeft.backgroundColor": "inherit",
                "week.daygridLeft.paddingRight": "8px",
                "week.daygridLeft.borderRight": "1px solid #e5e5e5",
                "week.today.backgroundColor": "rgba(81, 92, 230, 0.05)",
                "week.weekend.backgroundColor": "inherit",
                "week.timegridLeft.width": "72px",
                "week.timegridLeft.backgroundColor": "inherit",
                "week.timegridLeft.borderRight": "1px solid #e5e5e5",
                "week.timegridLeft.fontSize": "11px",
                "week.timegridLeftTimezoneLabel.height": "40px",
                "week.timegridLeftAdditionalTimezone.backgroundColor": "white",
                "week.timegridOneHour.height": "52px",
                "week.timegridHalfHour.height": "26px",
                "week.timegridHalfHour.borderBottom": "none",
                "week.timegridHorizontalLine.borderBottom": "1px solid #e5e5e5",
                "week.timegrid.paddingRight": "8px",
                "week.timegrid.borderRight": "1px solid #e5e5e5",
                "week.timegridSchedule.borderRadius": "2px",
                "week.timegridSchedule.paddingLeft": "2px",
                "week.currentTime.color": "#515ce6",
                "week.currentTime.fontSize": "11px",
                "week.currentTime.fontWeight": "normal",
                "week.pastTime.color": "#bbb",
                "week.pastTime.fontWeight": "normal",
                "week.futureTime.color": "#333",
                "week.futureTime.fontWeight": "normal",
                "week.currentTimeLinePast.border": "1px dashed #515ce6",
                "week.currentTimeLineBullet.backgroundColor": "#515ce6",
                "week.currentTimeLineToday.border": "1px solid #515ce6",
                "week.currentTimeLineFuture.border": "none",
                "week.creationGuide.color": "#515ce6",
                "week.creationGuide.fontSize": "11px",
                "week.creationGuide.fontWeight": "bold",
                "week.dayGridSchedule.borderRadius": "2px",
                "week.dayGridSchedule.height": "24px",
                "week.dayGridSchedule.marginTop": "2px",
                "week.dayGridSchedule.marginLeft": "8px",
                "week.dayGridSchedule.marginRight": "8px",
            };
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = l.forEachArray,
                i = Array.prototype.slice,
                a = n(3),
                r = n(4).Date,
                s = n(13),
                c = n(28),
                u = {
                    getCollisionGroup: function (e) {
                        var t,
                            n = [],
                            a = !1;
                        return e.length
                            ? ((n[0] = [l.stamp(e[0].valueOf())]),
                              o(e.slice(1), function (r, s) {
                                  (a = !1),
                                      (t = i.apply(e, [0, s + 1]).reverse()),
                                      o(t, function (e) {
                                          return (
                                              !r.collidesWith(e) ||
                                              ((a = !0),
                                              o(n.slice(0).reverse(), function (t) {
                                                  return !~l.inArray(l.stamp(e.valueOf()), t) || (t.push(l.stamp(r.valueOf())), !1);
                                              }),
                                              !1)
                                          );
                                      }),
                                      a || n.push([l.stamp(r.valueOf())]);
                              }),
                              n)
                            : n;
                    },
                    getLastRowInColumn: function (e, t) {
                        for (var n = e.length; n > 0; ) if (((n -= 1), !l.isUndefined(e[n][t]))) return n;
                        return !1;
                    },
                    getMatrices: function (e, t) {
                        var n = [],
                            i = u.getLastRowInColumn;
                        return (
                            o(t, function (t) {
                                var a = [[]];
                                o(t, function (t) {
                                    for (var n, o, r = e.items[t], s = 0, c = !1; !c; )
                                        !1 === (o = i(a, s)) ? (a[0].push(r), (c = !0)) : r.collidesWith(a[o][s]) || ((n = o + 1), l.isUndefined(a[n]) && (a[n] = []), (a[n][s] = r), (c = !0)), (s += 1);
                                }),
                                    n.push(a);
                            }),
                            n
                        );
                    },
                    getScheduleInDateRangeFilter: function (e, t) {
                        return function (n) {
                            var l = n.getStarts();
                            return !(n.getEnds() < e || l > t);
                        };
                    },
                    positionViewModels: function (e, t, n, i) {
                        var r;
                        (r = l.map(a.range(e, t, a.MILLISECONDS_PER_DAY), function (e) {
                            return a.format(e, "YYYYMMDD");
                        })),
                            o(n, function (e) {
                                o(e, function (e) {
                                    o(e, function (e, t) {
                                        var n, o, s, c;
                                        e &&
                                            ((s = e.getStarts()),
                                            (c = e.getEnds()),
                                            (o = a.range(a.start(s), a.renderEnd(s, c), a.MILLISECONDS_PER_DAY).length),
                                            (n = a.format(s, "YYYYMMDD")),
                                            (e.top = t),
                                            (e.left = l.inArray(n, r)),
                                            (e.width = o),
                                            i && i(e));
                                    });
                                });
                            });
                    },
                    limitRenderRange: function (e, t, n) {
                        function l(n) {
                            return n.getStarts() < e && ((n.exceedLeft = !0), (n.renderStarts = new r(e))), n.getEnds() > t && ((n.exceedRight = !0), (n.renderEnds = new r(t))), n;
                        }
                        return n.constructor === s ? (n.each(l), null) : l(n);
                    },
                    convertToViewModel: function (e) {
                        var t;
                        return (
                            (t = new s(function (e) {
                                return e.cid();
                            })),
                            e.each(function (e) {
                                t.add(c.create(e));
                            }),
                            t
                        );
                    },
                };
            e.exports = u;
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(13),
                i = n(15),
                a = n(3),
                r = n(4).Date,
                s = a.MILLISECONDS_SCHEDULE_MIN_DURATION,
                c = {
                    generateTimeArrayInRow: function (e) {
                        var t,
                            n,
                            o,
                            i,
                            r,
                            c = [],
                            u = [],
                            d = Math.max.apply(
                                null,
                                l.map(e, function (e) {
                                    return e.length;
                                })
                            );
                        for (n = 1; n < d; n += 1) {
                            for (t = 0, o = l.pick(e, t, n); o; )
                                (i = o.getStarts().getTime() - a.millisecondsFrom("minutes", o.valueOf().goingDuration)),
                                    (r = o.getEnds().getTime() + a.millisecondsFrom("minutes", o.valueOf().comingDuration)),
                                    Math.abs(r - i) < s && (r += s),
                                    u.push([i, r]),
                                    (t += 1),
                                    (o = l.pick(e, t, n));
                            c.push(u), (u = []);
                        }
                        return c;
                    },
                    hasCollide: function (e, t, n) {
                        var l,
                            o,
                            a,
                            r,
                            s = function (e) {
                                return function (t) {
                                    return t[e];
                                };
                            },
                            c = Math.abs,
                            u = i.compare.num.asc;
                        return !!e.length && ((l = c(i.bsearch(e, t, s(0), u))), (o = c(i.bsearch(e, t, s(1), u))), (a = c(i.bsearch(e, n, s(0), u))), (r = c(i.bsearch(e, n, s(1), u))), !(l === o && o === a && a === r));
                    },
                    getCollides: function (e) {
                        l.forEachArray(e, function (e) {
                            var t, n;
                            (t = c.generateTimeArrayInRow(e)),
                                (n = Math.max.apply(
                                    null,
                                    l.map(e, function (e) {
                                        return e.length;
                                    })
                                )),
                                l.forEachArray(e, function (e) {
                                    l.forEachArray(e, function (e, l) {
                                        var o, i, r;
                                        if (e)
                                            for (
                                                o = e.getStarts().getTime(),
                                                    i = e.getEnds().getTime(),
                                                    Math.abs(i - o) < s && (i += s),
                                                    o -= a.millisecondsFrom("minutes", e.valueOf().goingDuration),
                                                    i += a.millisecondsFrom("minutes", e.valueOf().comingDuration),
                                                    i -= 1,
                                                    r = l + 1;
                                                r < n;
                                                r += 1
                                            ) {
                                                if (c.hasCollide(t[r - 1], o, i)) {
                                                    e.hasCollide = !0;
                                                    break;
                                                }
                                                e.extraSpace += 1;
                                            }
                                    });
                                });
                        });
                    },
                    getViewModelForTimeView: function (e, t, n, o, i) {
                        var a = this,
                            r = this.splitScheduleByDateRange(e, t, n),
                            s = {},
                            u = c._makeGetViewModelFuncForTimeView(o, i);
                        return (
                            l.forEach(r, function (e, t) {
                                var n,
                                    l,
                                    o = u(e);
                                (n = a.Core.getCollisionGroup(o)), (l = a.Core.getMatrices(e, n)), a.Week.getCollides(l), (s[t] = l);
                            }),
                            s
                        );
                    },
                    _makeGetViewModelFuncForTimeView: function (e, t) {
                        return 0 === e && 24 === t
                            ? function (e) {
                                  return e.sort(i.compare.schedule.asc);
                              }
                            : function (n) {
                                  return n.find(c._makeHourRangeFilter(e, t)).sort(i.compare.schedule.asc);
                              };
                    },
                    _makeHourRangeFilter: function (e, t) {
                        return function (n) {
                            var l = n.model.start,
                                o = n.model.end,
                                i = l.getFullYear(),
                                a = l.getMonth(),
                                s = l.getDate(),
                                c = new r(i, a, s).setHours(e),
                                u = new r(i, a, s).setHours(t);
                            return (l >= c && l < u) || (o > c && o <= u) || (l < c && o > c) || (o > u && l < u);
                        };
                    },
                    _addMultiDatesInfo: function (e) {
                        e.each(function (e) {
                            var t = e.model,
                                n = t.getStarts(),
                                l = t.getEnds();
                            (e.hasMultiDates = !0), (e.renderStarts = a.start(n)), (e.renderEnds = a.renderEnd(n, l));
                        });
                    },
                    getViewModelForAlldayView: function (e, t, n) {
                        var l,
                            o,
                            a,
                            r = this.Core,
                            s = this.Week;
                        return n && n.length ? (s._addMultiDatesInfo(n), r.limitRenderRange(e, t, n), (l = n.sort(i.compare.schedule.asc)), (o = r.getCollisionGroup(l)), (a = r.getMatrices(n, o)), r.positionViewModels(e, t, a), a) : [];
                    },
                    findByDateRange: function (e, t, n, i, a) {
                        var r,
                            s,
                            c = this.Core,
                            u = this.Week,
                            d = c.getScheduleInDateRangeFilter(e, t),
                            h = l.pluck(n, "name"),
                            p = l.pick(a, "hourStart"),
                            m = l.pick(a, "hourEnd");
                        return (
                            (i = i || []),
                            (d = o.and.apply(null, [d].concat(i))),
                            (r = this.schedules.find(d)),
                            (r = c.convertToViewModel(r)),
                            (s = r.groupBy(h, this.groupFunc)),
                            l.forEach(n, function (n) {
                                var l = n.name;
                                "daygrid" === n.type ? (s[l] = u.getViewModelForAlldayView(e, t, s[l])) : "timegrid" === n.type && (s[l] = u.getViewModelForTimeView(e, t, s[l], p, m));
                            }),
                            s
                        );
                    },
                    getExceedDate: function (e, t, n) {
                        var o = {};
                        return (
                            l.forEach(n, function (e) {
                                var t = a.format(e, "YYYYMMDD");
                                o[t] = 0;
                            }),
                            l.forEach(t, function (t) {
                                l.forEach(t, function (t) {
                                    l.forEach(t, function (t) {
                                        var n;
                                        !t ||
                                            t.top < e ||
                                            ((n = a.range(t.getStarts(), t.getEnds(), a.MILLISECONDS_PER_DAY)),
                                            l.forEach(n, function (e) {
                                                var t = a.format(e, "YYYYMMDD");
                                                o[t] += 1;
                                            }));
                                    });
                                });
                            }),
                            o
                        );
                    },
                    excludeExceedSchedules: function (e, t) {
                        return e.map(function (e) {
                            return e.map(function (e) {
                                return e.length > t
                                    ? e.filter(function (e) {
                                          return e.top < t;
                                      }, this)
                                    : e;
                            }, this);
                        }, this);
                    },
                };
            e.exports = c;
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(15),
                i = n(3),
                a = n(13),
                r = Math.max,
                s = {
                    _onlyTimeFilter: function (e) {
                        return !e.model.isAllDay && !e.hasMultiDates;
                    },
                    _onlyAlldayFilter: function (e) {
                        return e.model.isAllDay || e.hasMultiDates;
                    },
                    _weightTopValue: function (e) {
                        (e.top = e.top || 0), (e.top += 1);
                    },
                    _adjustRenderRange: function (e, t, n) {
                        var l = this.Core;
                        n.each(function (n) {
                            (n.model.isAllDay || n.hasMultiDates) && l.limitRenderRange(e, t, n);
                        });
                    },
                    _getAlldayMaxTopIndexAtYMD: function (e, t) {
                        var n = this.dateMatrix,
                            o = [];
                        return (
                            l.forEach(n[e], function (e) {
                                t.doWhenHas(e, function (e) {
                                    o.push(e.top);
                                });
                            }),
                            o.length > 0 ? r.apply(null, o) : 0
                        );
                    },
                    _adjustTimeTopIndex: function (e) {
                        var t = this.Month,
                            n = t._getAlldayMaxTopIndexAtYMD,
                            a = e.find(t._onlyAlldayFilter),
                            r = e.find(t._onlyTimeFilter).sort(o.compare.schedule.asc),
                            s = {};
                        r.forEach(function (e) {
                            var t = i.format(e.getStarts(), "YYYYMMDD"),
                                o = s[t];
                            l.isUndefined(o) && (o = s[t] = n(t, a)), (s[t] = e.top = o + 1);
                        });
                    },
                    _stackTimeFromTop: function (e) {
                        var t = this.Month,
                            n = e.find(t._onlyAlldayFilter),
                            a = e.find(t._onlyTimeFilter).sort(o.compare.schedule.asc),
                            s = {},
                            c = this.dateMatrix;
                        a.forEach(function (e) {
                            var t,
                                o,
                                a = i.format(e.getStarts(), "YYYYMMDD"),
                                u = s[a];
                            if (
                                (l.isUndefined(u) &&
                                    ((u = s[a] = []),
                                    l.forEach(c[a], function (e) {
                                        n.doWhenHas(e, function (e) {
                                            u.push(e.top);
                                        });
                                    })),
                                l.inArray(e.top, u) >= 0)
                            )
                                for (t = r.apply(null, u) + 1, o = 1; o <= t && ((e.top = o), !(l.inArray(e.top, u) < 0)); o += 1);
                            u.push(e.top);
                        });
                    },
                    _addMultiDatesInfo: function (e) {
                        e.each(function (e) {
                            var t = e.model,
                                n = t.getStarts(),
                                l = t.getEnds();
                            (e.hasMultiDates = i.hasMultiDates(n, l)), !t.isAllDay && e.hasMultiDates && ((e.renderStarts = i.start(n)), (e.renderEnds = i.renderEnd(n, l)));
                        });
                    },
                    findByDateRange: function (e, t, n, l) {
                        var i,
                            r,
                            s,
                            c,
                            u,
                            d = this.Core,
                            h = this.Month,
                            p = d.getScheduleInDateRangeFilter(e, t);
                        return (
                            (l = l || !1),
                            (n = n || []),
                            (p = a.and.apply(null, [p].concat(n))),
                            (i = this.schedules.find(p)),
                            (r = d.convertToViewModel(i)),
                            h._addMultiDatesInfo(r),
                            h._adjustRenderRange(e, t, r),
                            (s = r.sort(o.compare.schedule.asc)),
                            (c = d.getCollisionGroup(s)),
                            (u = d.getMatrices(r, c)),
                            d.positionViewModels(e, t, u, h._weightTopValue),
                            l ? h._adjustTimeTopIndex(r) : h._stackTimeFromTop(r),
                            u
                        );
                    },
                };
            e.exports = s;
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1),
                a = n(5),
                r = n(29),
                s = n(11),
                c = n(14),
                u = n(65),
                d = n(66),
                h = n(68),
                p = n(72),
                m = n(32),
                f = n(33),
                g = n(82),
                y = n(83),
                S = n(85),
                _ = n(34),
                C = n(87),
                v = n(89),
                E = n(90),
                w = n(92),
                P = n(95),
                k = { click: y, creation: S, move: _, resize: C },
                R = { click: v, creation: E, move: w, resize: P },
                b = [
                    { name: "milestone", type: "daygrid", minHeight: 20, maxHeight: 80, showExpandableButton: !0, maxExpandableHeight: 210, handlers: ["click"], show: !0 },
                    { name: "task", type: "daygrid", minHeight: 40, maxHeight: 120, showExpandableButton: !0, maxExpandableHeight: 210, handlers: ["click", "move"], show: !0 },
                    { name: "allday", type: "daygrid", minHeight: 30, maxHeight: 80, showExpandableButton: !0, maxExpandableHeight: 210, handlers: ["click", "creation", "move", "resize"], show: !0 },
                    { name: "time", type: "timegrid", autoHeight: !0, handlers: ["click", "creation", "move", "resize"], show: !0 },
                ];
            e.exports = function (e, t, n, y, S) {
                var _,
                    C,
                    v,
                    E,
                    w,
                    P,
                    I,
                    D,
                    F,
                    x,
                    X,
                    M,
                    O,
                    T,
                    H = [],
                    L = [],
                    B = y.taskView,
                    A = y.scheduleView,
                    V = {
                        milestone: l.isArray(B) ? l.inArray("milestone", B) >= 0 : B,
                        task: l.isArray(B) ? l.inArray("task", B) >= 0 : B,
                        allday: l.isArray(A) ? l.inArray("allday", A) >= 0 : A,
                        time: l.isArray(A) ? l.inArray("time", A) >= 0 : A,
                    };
                return (
                    l.forEach(b, function (e) {
                        var t = e.name;
                        (e = l.extend({}, e)), H.push(e), (e.show = V[t]), e.show && (L.length && L.push({ isSplitter: !0 }), L.push(l.extend({}, e)));
                    }),
                    L.length &&
                        (((F = L[L.length - 1]).autoHeight = !0),
                        (F.maxHeight = null),
                        (F.showExpandableButton = !1),
                        l.forEach(H, function (e) {
                            return e.name !== F.name || ((e.showExpandableButton = !1), !1);
                        })),
                    l.extend(y.week, { panels: H }),
                    ((_ = new u(null, y.week, t, H, S)).handler = { click: {}, dayname: {}, creation: {}, move: {}, resize: {} }),
                    (C = i.appendHTMLElement("div", _.container, o.classname("dayname-layout"))),
                    (v = new d(y, C, e.theme)),
                    (_.handler.dayname.date = new g(n, v, e)),
                    _.addChild(v),
                    ((E = i.appendHTMLElement("div", _.container, o.classname("vlayout-area"))).style.height = i.getSize(_.container)[1] - v.container.offsetHeight + "px"),
                    (w = new r({ panels: L, panelHeights: y.week.panelHeights || [] }, E, e.theme)),
                    (_.vLayout = w),
                    l.forEach(H, function (t) {
                        var o,
                            i = t.name,
                            a = t.handlers;
                        t.show &&
                            ("daygrid" === t.type
                                ? ((o = new h(i, y, w.getPanelByName(t.name).container, e.theme)).on("afterRender", function (e) {
                                      w.getPanelByName(i).setHeight(null, e.height);
                                  }),
                                  _.addChild(o),
                                  l.forEach(a, function (t) {
                                      (y.isReadOnly && "click" !== t) || ((_.handler[t][i] = new k[t](n, o, e, y)), o.addHandler(t, _.handler[t][i], w.getPanelByName(i)));
                                  }))
                                : "timegrid" === t.type &&
                                  ((o = new p(i, y, w.getPanelByName(i).container)),
                                  _.addChild(o),
                                  l.forEach(a, function (t) {
                                      (y.isReadOnly && "click" !== t) || (_.handler[t][i] = new R[t](n, o, e, y));
                                  }),
                                  o.on("clickTimezonesCollapsedBtn", function () {
                                      var e = !_.state.timezonesCollapsed;
                                      _.setState({ timezonesCollapsed: e }),
                                          s.requestAnimFrame(function () {
                                              _.invoke("clickTimezonesCollapseBtn", e) || _.render();
                                          });
                                  })));
                    }),
                    w.on("resize", function () {
                        s.requestAnimFrame(function () {
                            _.render();
                        });
                    }),
                    y.useCreationPopup &&
                        ((P = new m(t, e.calendars, y.usageStatistics)),
                        (I = function (e) {
                            l.extend(e, { useCreationPopup: !0 }), e.isAllDay ? _.handler.creation.allday.fire("beforeCreateSchedule", e) : _.handler.creation.time.fire("beforeCreateSchedule", e);
                        }),
                        P.on("beforeCreateSchedule", I)),
                    (D = function (e) {
                        P && P.setCalendars(e);
                    }),
                    e.on("setCalendars", D),
                    y.useDetailPopup &&
                        ((x = new f(t, e.calendars)),
                        (X = function (t) {
                            var n = t.schedule.calendarId;
                            (t.calendar = a.find(e.calendars, function (e) {
                                return e.id === n;
                            })),
                                y.isReadOnly && (t.schedule = l.extend({}, t.schedule, { isReadOnly: !0 })),
                                x.render(t);
                        }),
                        (M = function (e) {
                            e.isAllDay ? _.handler.creation.allday.fire("beforeDeleteSchedule", e) : _.handler.creation.time.fire("beforeDeleteSchedule", e);
                        }),
                        (T = function (e) {
                            e.isAllDay ? _.handler.move.allday.fire("beforeUpdateSchedule", e) : _.handler.move.time.fire("beforeUpdateSchedule", e);
                        }),
                        l.forEach(_.handler.click, function (e) {
                            e.on("clickSchedule", X);
                        }),
                        y.useCreationPopup
                            ? ((O = function (t) {
                                  var n = e.calendars;
                                  (t.isEditMode = !0), P.setCalendars(n), P.render(t);
                              }),
                              P.on("beforeUpdateSchedule", T),
                              x.on("beforeUpdateSchedule", O))
                            : x.on("beforeUpdateSchedule", T),
                        x.on("beforeDeleteSchedule", M)),
                    _.on("afterRender", function () {
                        w.refresh();
                    }),
                    (_.controller = e.Week),
                    (_._beforeDestroy = function () {
                        l.forEach(_.handler, function (e) {
                            l.forEach(e, function (e) {
                                e.off(), e.destroy();
                            });
                        }),
                            y.useCreationPopup && (P.off("beforeCreateSchedule", I), P.destroy()),
                            y.useDetailPopup && (x.off("beforeDeleteSchedule", M), x.destroy()),
                            _.off();
                    }),
                    {
                        view: _,
                        refresh: function () {
                            var e = _.getViewBound().height,
                                t = i.getBCRect(v.container).height;
                            (w.container.style.height = e - t + "px"), w.refresh();
                        },
                        scrollToNow: function () {
                            _.children.each(function (e) {
                                e.scrollToNow && e.scrollToNow();
                            });
                        },
                        openCreationPopup: function (e) {
                            P && (e.isAllDay ? _.handler.creation.allday.invokeCreationClick(c.create(e)) : _.handler.creation.time.invokeCreationClick(c.create(e)));
                        },
                        showCreationPopup: function (t) {
                            P && (P.setCalendars(e.calendars), P.render(t));
                        },
                    }
                );
            };
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(5),
                a = n(1),
                r = n(8);
            function s(e, t, n) {
                r.call(this, t),
                    (this.options = l.extend({ index: 0, name: "0", minHeight: 0, maxHeight: null, height: null, isSplitter: !1, autoHeight: !1, className: "" }, e)),
                    (this.index = this.options.index),
                    (this.name = this.options.name || String(this.index)),
                    (this.isHeightForcedSet = !1),
                    (this.theme = n),
                    this._initPanel(this.options, t);
            }
            l.inherit(s, r),
                (s.prototype.isSplitter = function () {
                    return this.options.isSplitter;
                }),
                (s.prototype.setMaxHeight = function (e) {
                    this.options.autoHeight || (this.options.maxHeight = e);
                }),
                (s.prototype.setHeightForcedSet = function (e) {
                    this.isHeightForcedSet = e;
                }),
                (s.prototype.getHeightForcedSet = function () {
                    return this.isHeightForcedSet;
                }),
                (s.prototype.setHeight = function (e, t, n) {
                    var l = this.options.maxHeight,
                        o = this.options.minHeight,
                        i = this.options.autoHeight;
                    (e = e || this.container), (n || !this.isHeightForcedSet || i) && (n ? (this.isHeightForcedSet = !0) : l && (t = Math.min(t, l)), (t = Math.max(o, t)), (e.style.height = t + "px"));
                }),
                (s.prototype.getResizeInfoByGrowth = function (e) {
                    var t = this.getHeight(),
                        n = t + e,
                        l = Math.max(0, n, this.options.minHeight);
                    return [l, t - l];
                }),
                (s.prototype.getHeight = function () {
                    return a.getSize(this.container)[1];
                }),
                (s.prototype.addClass = function (e) {
                    a.addClass(this.container, e);
                }),
                (s.prototype.removeClass = function (e) {
                    a.removeClass(this.container, e);
                }),
                (s.prototype._initPanel = function (e, t) {
                    var n;
                    if ((a.setData(t, "panelIndex", e.index), e.isSplitter)) return a.addClass(t, o.classname("splitter")), void this.applyTheme();
                    e.className && a.addClass(t, e.className), e.autoHeight ? a.setData(t, "autoHeight", !0) : ((n = i.limit(e.height || 0, [e.minHeight], [e.maxHeight || e.height])), (e.height = n), this.setHeight(t, n));
                }),
                (s.prototype.applyTheme = function () {
                    var e = this.container.style,
                        t = this.theme;
                    t && ((e.borderTop = t.week.vpanelSplitter.border || t.common.border), (e.borderBottom = t.week.vpanelSplitter.border || t.common.border), (e.height = t.week.vpanelSplitter.height));
                }),
                (e.exports = s);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1),
                a = n(3),
                r = n(4).Date,
                s = n(8);
            function c(e, t, n, c, u) {
                var d;
                (n = i.appendHTMLElement("div", n)),
                    s.call(this, n),
                    i.addClass(n, o.classname("week-container")),
                    (d = this._getRenderDateRange(new r())),
                    (this.options = l.extend(
                        {
                            scheduleFilter: [
                                function (e) {
                                    return Boolean(e.isVisible);
                                },
                            ],
                            renderStartDate: a.format(d.start, "YYYY-MM-DD"),
                            renderEndDate: a.format(d.end, "YYYY-MM-DD"),
                            narrowWeekend: !1,
                            startDayOfWeek: 0,
                            workweek: !1,
                            showTimezoneCollapseButton: !1,
                            timezonesCollapsed: !1,
                            hourStart: 0,
                            hourEnd: 24,
                        },
                        t
                    )),
                    (this.controller = e),
                    (this.panels = c),
                    (this.state = { timezonesCollapsed: this.options.timezonesCollapsed }),
                    "day" === u &&
                        (function (e) {
                            e.workweek = !1;
                        })(this.options);
            }
            l.inherit(c, s),
                (c.prototype.render = function () {
                    var e,
                        t,
                        n,
                        o,
                        i,
                        s,
                        c = this,
                        u = this.options,
                        d = u.scheduleFilter,
                        h = u.narrowWeekend,
                        p = u.startDayOfWeek,
                        m = u.workweek,
                        f = this.controller.theme || {},
                        g = this.state;
                    (e = new r(u.renderStartDate)),
                        (t = new r(u.renderEndDate)),
                        (s = a.range(a.start(e), a.end(t), a.MILLISECONDS_PER_DAY)),
                        u.workweek &&
                            a.compare(e, t) &&
                            ((e = (s = l.filter(s, function (e) {
                                return !a.isWeekend(e.getDay());
                            }))[0]),
                            (t = s[s.length - 1])),
                        (n = this.controller.findByDateRange(a.start(e), a.end(t), this.panels, d, this.options)),
                        (i = a.getGridLeftAndWidth(s.length, h, p, m)),
                        (o = { schedulesInDateRange: n, renderStartDate: e, renderEndDate: t, grids: i, range: s, theme: f, state: g }),
                        this.children.each(function (e) {
                            var t,
                                n = l.pick(e.options, "viewName");
                            e.render(o),
                                n &&
                                    ((t = o.schedulesInDateRange[n]),
                                    l.isArray(t)
                                        ? c._invokeAfterRenderSchedule(t)
                                        : l.forEach(t, function (e) {
                                              c._invokeAfterRenderSchedule(e);
                                          }));
                        }),
                        this.fire("afterRender");
                }),
                (c.prototype._invokeAfterRenderSchedule = function (e) {
                    var t = this;
                    l.forEachArray(e, function (e) {
                        l.forEachArray(e, function (e) {
                            l.forEachArray(e, function (e) {
                                e && t.fire("afterRenderSchedule", { schedule: e.model });
                            });
                        });
                    });
                }),
                (c.prototype.viewName = "week"),
                (c.prototype._getRenderDateRange = function (e) {
                    var t = a.start(e),
                        n = new r(Number(t)),
                        l = new r(Number(t));
                    return n.setDate(n.getDate() - 3), l.setDate(l.getDate() + 3), { start: n, end: l };
                }),
                l.CustomEvents.mixin(c),
                (e.exports = c);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(5),
                a = n(3),
                r = n(4).Date,
                s = n(1),
                c = n(8),
                u = n(67);
            function d(e, t, n) {
                (t = s.appendHTMLElement("div", t, o.classname("dayname-container"))),
                    (this.options = l.extend({ daynames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], timezones: e.timezones }, e.week)),
                    (this.theme = n),
                    c.call(this, t),
                    this.applyTheme();
            }
            l.inherit(d, c),
                (d.prototype._getBaseViewModel = function (e, t, n) {
                    var o = this.options.daynames,
                        i = this.theme,
                        s = new r().toLocalTime();
                    return l.map(
                        a.range(a.start(e), a.end(t), a.MILLISECONDS_PER_DAY),
                        function (e, t) {
                            var l = e.getDay(),
                                r = a.isSameDate(e, s),
                                c = e < s && !r;
                            return { day: l, dayName: o[l], isToday: r, date: e.getDate(), left: n[t] ? n[t].left : 0, width: n[t] ? n[t].width : 0, renderDate: a.format(e, "YYYY-MM-DD"), color: this._getDayNameColor(i, l, r, c) };
                        },
                        this
                    );
                }),
                (d.prototype.render = function (e) {
                    var t = this._getBaseViewModel(e.renderStartDate, e.renderEndDate, e.grids),
                        n = e.state.timezonesCollapsed,
                        o = this._getStyles(this.theme, n),
                        i = l.extend({}, { dayNames: t, styles: o });
                    this.container.innerHTML = u(i);
                }),
                (d.prototype._getDayNameColor = function (e, t, n, l) {
                    var o = "";
                    return e && (o = 0 === t ? e.common.holiday.color : l ? e.week.pastDay.color || e.common.dayname.color : 6 === t ? e.common.saturday.color : n ? e.week.today.color || e.common.today.color : e.common.dayname.color), o;
                }),
                (d.prototype._getStyles = function (e, t) {
                    var n,
                        l = {},
                        o = this.options.timezones.length,
                        a = t;
                    return (
                        e &&
                            ((l.borderTop = e.week.dayname.borderTop || e.common.border),
                            (l.borderBottom = e.week.dayname.borderBottom || e.common.border),
                            (l.borderLeft = e.week.dayname.borderLeft || e.common.border),
                            (l.paddingLeft = e.week.dayname.paddingLeft),
                            (l.backgroundColor = e.week.dayname.backgroundColor),
                            (l.height = e.week.dayname.height),
                            (l.textAlign = e.week.dayname.textAlign),
                            (l.marginLeft = e.week.daygridLeft.width),
                            !a && o > 1 && ((n = i.parseUnit(l.marginLeft)), (l.marginLeft = n[0] * o + n[1]))),
                        l
                    );
                }),
                (d.prototype.applyTheme = function () {
                    var e = this._getStyles(this.theme),
                        t = this.container.style;
                    return (t.borderTop = e.borderTop), (t.borderBottom = e.borderBottom), (t.height = e.height), (t.backgroundColor = e.backgroundColor), (t.textAlign = e.textAlign), t;
                }),
                (e.exports = d);
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 12 }, end: { line: 3, column: 26 } } })
                                : a
                        ) +
                        "dayname " +
                        (null != (i = h(n, "if").call(r, null != t ? h(t, "isToday") : t, { name: "if", hash: {}, fn: e.program(2, o, 0), inverse: e.noop, data: o, loc: { start: { line: 3, column: 34 }, end: { line: 3, column: 75 } } }))
                            ? i
                            : "") +
                        " " +
                        u((h(n, "holiday") || (t && h(t, "holiday")) || s).call(r, null != t ? h(t, "day") : t, { name: "holiday", hash: {}, data: o, loc: { start: { line: 3, column: 76 }, end: { line: 3, column: 91 } } })) +
                        '"\n     data-date="' +
                        u(
                            typeof (a = null != (a = h(n, "renderDate") || (null != t ? h(t, "renderDate") : t)) ? a : s) === c
                                ? a.call(r, { name: "renderDate", hash: {}, data: o, loc: { start: { line: 4, column: 16 }, end: { line: 4, column: 30 } } })
                                : a
                        ) +
                        '"\n     style="' +
                        u(
                            (h(n, "common-width") || (t && h(t, "common-width")) || s).call(r, null != t ? h(t, "width") : t, {
                                name: "common-width",
                                hash: {},
                                data: o,
                                loc: { start: { line: 5, column: 12 }, end: { line: 5, column: 34 } },
                            })
                        ) +
                        ";left:" +
                        u(typeof (a = null != (a = h(n, "left") || (null != t ? h(t, "left") : t)) ? a : s) === c ? a.call(r, { name: "left", hash: {}, data: o, loc: { start: { line: 5, column: 40 }, end: { line: 5, column: 48 } } }) : a) +
                        "%; line-height: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "height"), t)) +
                        "; border-left: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "borderLeft"), t)) +
                        "; padding-left: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "paddingLeft"), t)) +
                        ';">\n    <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 6, column: 17 }, end: { line: 6, column: 31 } } })
                                : a
                        ) +
                        'dayname-date-area" style="color: ' +
                        u(
                            typeof (a = null != (a = h(n, "color") || (null != t ? h(t, "color") : t)) ? a : s) === c
                                ? a.call(r, { name: "color", hash: {}, data: o, loc: { start: { line: 6, column: 64 }, end: { line: 6, column: 73 } } })
                                : a
                        ) +
                        ';">\n        ' +
                        (null != (i = (h(n, "weekDayname-tmpl") || (t && h(t, "weekDayname-tmpl")) || s).call(r, t, { name: "weekDayname-tmpl", hash: {}, data: o, loc: { start: { line: 7, column: 8 }, end: { line: 7, column: 35 } } }))
                            ? i
                            : "") +
                        "\n    </span>\n</div>\n"
                    );
                },
                2: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 49 }, end: { line: 3, column: 63 } } })
                                : i
                        ) + "today"
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.escapeExpression,
                        c =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        s(
                            "function" == typeof (a = null != (a = c(n, "CSS_PREFIX") || (null != t ? c(t, "CSS_PREFIX") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        'dayname-leftmargin" style="margin-left: ' +
                        s(e.lambda((i = (i = o && c(o, "root")) && c(i, "styles")) && c(i, "marginLeft"), t)) +
                        ';">\n' +
                        (null !=
                        (i = c(n, "each").call(r, null != t ? c(t, "dayNames") : t, { name: "each", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 2, column: 0 }, end: { line: 10, column: 9 } } }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(5),
                a = n(3),
                r = n(1),
                s = n(4).Date,
                c = n(8),
                u = n(69),
                d = n(71),
                h = n(11),
                p = Math.max,
                m = Math.min;
            function f(e, t, n, i) {
                (n = r.appendHTMLElement("div", n, o.classname("daygrid-layout"))),
                    c.call(this, n),
                    (e = e || "daygrid"),
                    (this.options = l.extend(
                        {
                            viewName: e,
                            daynames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            renderStartDate: "",
                            renderEndDate: "",
                            containerBottomGutter: 18,
                            scheduleHeight: parseInt(i.week.dayGridSchedule.height, 10),
                            scheduleGutter: parseInt(i.week.dayGridSchedule.marginTop, 10),
                            scheduleContainerTop: 1,
                            timezones: t.timezones,
                            isReadOnly: t.isReadOnly,
                            getViewModelFunc: function (t) {
                                return t.schedulesInDateRange[e];
                            },
                            setViewModelFunc: function (t, n) {
                                t.schedulesInDateRange[e] = n;
                            },
                        },
                        t.week
                    )),
                    (this.handler = {}),
                    (this.vPanel = null),
                    (this.state.collapsed = !0);
            }
            function g(e, t, n) {
                return 0 === e || 6 === e ? n.weekendBackgroundColor : t ? n.todayBackgroundColor : n.backgroundColor;
            }
            function y(e, t) {
                var n;
                return (
                    l.forEach(e, function (e) {
                        e.name === t && (n = e);
                    }),
                    n
                );
            }
            l.inherit(f, c),
                (f.prototype.getBaseViewModel = function (e) {
                    var t,
                        n = this.options,
                        o = n.daynames,
                        i = e.range,
                        r = e.grids,
                        c = n.getViewModelFunc(e),
                        u = {},
                        d = y(n.panels, n.viewName),
                        h = this.getViewBound().height,
                        f = this.state.collapsed,
                        S = !!this.vPanel && this.vPanel.getHeightForcedSet(),
                        _ = e.state.timezonesCollapsed,
                        C = this._getStyles(e.theme, _),
                        v = new s().toLocalTime();
                    return (
                        d.showExpandableButton &&
                            (S || (h = f ? p(h, d.maxHeight) : m(h, d.maxExpandableHeight)),
                            (t = Math.floor(h / (n.scheduleHeight + n.scheduleGutter))),
                            f && ((u = this.parent.controller.getExceedDate(t, c, e.range)), (c = this.parent.controller.excludeExceedSchedules(c, t)), n.setViewModelFunc(e, c))),
                        {
                            viewName: n.viewName,
                            range: i,
                            grids: r,
                            days: l.map(e.range, function (t, n) {
                                var l = t.getDay(),
                                    i = a.format(t, "YYYYMMDD"),
                                    s = a.isSameDate(v, t);
                                return {
                                    day: l,
                                    dayName: o[l],
                                    isToday: s,
                                    date: t.getDate(),
                                    renderDate: a.format(t, "YYYY-MM-DD"),
                                    hiddenSchedules: u[i] || 0,
                                    width: r[n] ? r[n].width : 0,
                                    left: r[n] ? r[n].left : 0,
                                    backgroundColor: e.range.length > 1 ? g(l, s, C) : C.backgroundColor,
                                };
                            }),
                            exceedDate: u,
                            showExpandableButton: d.showExpandableButton,
                            collapsed: f,
                            collapseBtnIndex: this.state.clickedExpandBtnIndex,
                            styles: C,
                        }
                    );
                }),
                (f.prototype.render = function (e) {
                    var t,
                        n = this.options,
                        l = this.container,
                        i = this.getBaseViewModel(e),
                        a = this.options.scheduleContainerTop;
                    (l.innerHTML = d(i)),
                        this.children.clear(),
                        (t = new u(n, r.find(o.classname(".container"), l))),
                        this.addChild(t),
                        t.on("afterRender", function (e) {
                            i.height = e.minHeight + a;
                        }),
                        this.children.each(function (t) {
                            t.render(e);
                        }, this),
                        this.fire("afterRender", i);
                }),
                (f.prototype._beforeDestroy = function () {}),
                (f.prototype.addHandler = function (e, t, n) {
                    var l = this;
                    (this.handler[e] = t),
                        (this.vPanel = n),
                        "click" === e &&
                            (t.on(
                                "expand",
                                function () {
                                    l.setState({ collapsed: !1 });
                                },
                                this
                            ),
                            t.on(
                                "collapse",
                                function () {
                                    l.setState({ collapsed: !0 });
                                },
                                this
                            ));
                }),
                (f.prototype._expand = function () {
                    h.requestAnimFrame(function () {
                        var e = this.vPanel,
                            t = this.options,
                            n = y(t.panels, t.viewName);
                        e.setMaxHeight(n.maxExpandableHeight), e.setHeightForcedSet(!1), e.setHeight(null, n.maxExpandableHeight), this.parent && this.parent.render();
                    }, this);
                }),
                (f.prototype._collapse = function () {
                    h.requestAnimFrame(function () {
                        var e = this.vPanel,
                            t = this.options,
                            n = y(t.panels, t.viewName);
                        e.setMaxHeight(n.maxHeight), e.setHeightForcedSet(!1), e.setHeight(null, n.minHeight), this.parent && this.parent.render();
                    }, this);
                }),
                (f.prototype.setState = function (e) {
                    var t = this.state.collapsed;
                    c.prototype.setState.call(this, e), this.state.collapsed !== t && (this.state.collapsed ? this._collapse() : this._expand());
                }),
                (f.prototype._getStyles = function (e, t) {
                    var n,
                        l = {},
                        o = this.options.timezones.length,
                        a = t;
                    return (
                        e &&
                            ((l.borderRight = e.week.daygrid.borderRight || e.common.border),
                            (l.todayBackgroundColor = e.week.today.backgroundColor),
                            (l.weekendBackgroundColor = e.week.weekend.backgroundColor),
                            (l.backgroundColor = e.week.daygrid.backgroundColor),
                            (l.leftWidth = e.week.daygridLeft.width),
                            (l.leftBackgroundColor = e.week.daygridLeft.backgroundColor),
                            (l.leftPaddingRight = e.week.daygridLeft.paddingRight),
                            (l.leftBorderRight = e.week.daygridLeft.borderRight),
                            !a && o > 1 && ((n = i.parseUnit(l.leftWidth)), (l.leftWidth = n[0] * o + n[1]))),
                        l
                    );
                }),
                (e.exports = f);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(30),
                i = n(70),
                a = Math.max;
            function r(e, t) {
                o.call(this, e, t), (this.collapsed = !0);
            }
            l.inherit(r, o),
                (r.prototype.render = function (e) {
                    var t,
                        n = this.container;
                    (t = this.getBaseViewModel(e)), (n.innerHTML = i(t)), this.fire("afterRender", t);
                }),
                (r.prototype._getMaxScheduleInDay = function (e) {
                    return a.apply(
                        null,
                        l.map(e, function (e) {
                            return Math.max.apply(
                                null,
                                l.map(e, function (e) {
                                    return e.length;
                                })
                            );
                        })
                    );
                }),
                (r.prototype._getMinHeight = function (e) {
                    var t = this.options;
                    return e * t.scheduleHeight + (e - 1) * t.scheduleGutter;
                }),
                (r.prototype.getBaseViewModel = function (e) {
                    var t,
                        n = this.options,
                        i = n.getViewModelFunc(e),
                        a = this._getMaxScheduleInDay(i),
                        r = this._getStyles(e.theme);
                    return (
                        (t = o.prototype.getBaseViewModel.call(this, e)),
                        (t = l.extend({ minHeight: this._getMinHeight(a), matrices: i, scheduleContainerTop: this.options.scheduleContainerTop, maxScheduleInDay: a, isReadOnly: n.isReadOnly, styles: r }, t))
                    );
                }),
                (r.prototype._getStyles = function (e) {
                    var t = {};
                    return e && (t.borderRadius = e.week.dayGridSchedule.borderRadius), t;
                }),
                (e.exports = r);
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i;
                    return null !=
                        (i = (
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            }
                        )(n, "each").call(null != t ? t : e.nullContext || {}, t, { name: "each", hash: {}, fn: e.program(2, o, 0), inverse: e.noop, data: o, loc: { start: { line: 3, column: 4 }, end: { line: 27, column: 15 } } }))
                        ? i
                        : "";
                },
                2: function (e, t, n, l, o) {
                    var i;
                    return (
                        "\n    " +
                        (null !=
                        (i = (
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            }
                        )(n, "each").call(null != t ? t : e.nullContext || {}, t, { name: "each", hash: {}, fn: e.program(3, o, 0), inverse: e.noop, data: o, loc: { start: { line: 4, column: 4 }, end: { line: 26, column: 15 } } }))
                            ? i
                            : "")
                    );
                },
                3: function (e, t, n, l, o) {
                    var i;
                    return (
                        "\n    " +
                        (null !=
                        (i = (
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            }
                        )(n, "if").call(null != t ? t : e.nullContext || {}, t, { name: "if", hash: {}, fn: e.program(4, o, 0), inverse: e.noop, data: o, loc: { start: { line: 5, column: 4 }, end: { line: 25, column: 13 } } }))
                            ? i
                            : "")
                    );
                },
                4: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = e.escapeExpression,
                        u = "function",
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '\n    <div data-id="' +
                        c((h(n, "stamp") || (t && h(t, "stamp")) || s).call(r, null != t ? h(t, "model") : t, { name: "stamp", hash: {}, data: o, loc: { start: { line: 6, column: 18 }, end: { line: 6, column: 33 } } })) +
                        '"\n        class="' +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === u
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 15 }, end: { line: 7, column: 29 } } })
                                : a
                        ) +
                        "weekday-schedule-block\n            " +
                        (null != (i = h(n, "if").call(r, null != t ? h(t, "exceedLeft") : t, { name: "if", hash: {}, fn: e.program(5, o, 0), inverse: e.noop, data: o, loc: { start: { line: 8, column: 12 }, end: { line: 8, column: 71 } } }))
                            ? i
                            : "") +
                        "\n            " +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "exceedRight") : t, { name: "if", hash: {}, fn: e.program(7, o, 0), inverse: e.noop, data: o, loc: { start: { line: 9, column: 12 }, end: { line: 9, column: 73 } } }))
                            ? i
                            : "") +
                        '"\n        style="top:' +
                        c(
                            (h(n, "multiply") || (t && h(t, "multiply")) || s).call(r, null != t ? h(t, "top") : t, (i = o && h(o, "root")) && h(i, "scheduleBlockHeight"), {
                                name: "multiply",
                                hash: {},
                                data: o,
                                loc: { start: { line: 10, column: 19 }, end: { line: 10, column: 61 } },
                            })
                        ) +
                        "px;\n                left:" +
                        c(
                            (h(n, "grid-left") || (t && h(t, "grid-left")) || s).call(r, t, (i = o && h(o, "root")) && h(i, "dates"), {
                                name: "grid-left",
                                hash: {},
                                data: o,
                                loc: { start: { line: 11, column: 21 }, end: { line: 11, column: 51 } },
                            })
                        ) +
                        "%;\n                width:" +
                        c(
                            (h(n, "grid-width") || (t && h(t, "grid-width")) || s).call(r, t, (i = o && h(o, "root")) && h(i, "dates"), {
                                name: "grid-width",
                                hash: {},
                                data: o,
                                loc: { start: { line: 12, column: 22 }, end: { line: 12, column: 53 } },
                            })
                        ) +
                        '%">\n        <div data-schedule-id="' +
                        c(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "id") : i, t)) +
                        '" data-calendar-id="' +
                        c(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "calendarId") : i, t)) +
                        '" class="' +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === u
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 92 }, end: { line: 13, column: 106 } } })
                                : a
                        ) +
                        "weekday-schedule " +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(9, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 13, column: 123 }, end: { line: 13, column: 192 } },
                        }))
                            ? i
                            : "") +
                        '"\n            style="height:' +
                        c(d((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; line-height:" +
                        c(d((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; border-radius: " +
                        c(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "borderRadius"), t)) +
                        ";\n" +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(11, o, 0),
                            inverse: e.program(13, o, 0),
                            data: o,
                            loc: { start: { line: 15, column: 16 }, end: { line: 19, column: 23 } },
                        }))
                            ? i
                            : "") +
                        "            " +
                        c(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "customStyle") : i, t)) +
                        '">\n            <span class="' +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === u
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 21, column: 25 }, end: { line: 21, column: 39 } } })
                                : a
                        ) +
                        'weekday-schedule-title" title="' +
                        c(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "title") : i, t)) +
                        '">' +
                        (null !=
                        (i = (h(n, "schedule-tmpl") || (t && h(t, "schedule-tmpl")) || s).call(r, null != t ? h(t, "model") : t, {
                            name: "schedule-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 21, column: 87 }, end: { line: 21, column: 112 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n            " +
                        (null !=
                        (i = h(n, "unless").call(
                            r,
                            (h(n, "or") || (t && h(t, "or")) || s).call(r, (i = o && h(o, "root")) && h(i, "isReadOnly"), null != (i = null != t ? h(t, "model") : t) ? h(i, "isReadOnly") : i, {
                                name: "or",
                                hash: {},
                                data: o,
                                loc: { start: { line: 22, column: 22 }, end: { line: 22, column: 60 } },
                            }),
                            { name: "unless", hash: {}, fn: e.program(15, o, 0), inverse: e.noop, data: o, loc: { start: { line: 22, column: 12 }, end: { line: 22, column: 193 } } }
                        ))
                            ? i
                            : "") +
                        "\n        </div>\n    </div>\n"
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 8, column: 31 }, end: { line: 8, column: 45 } } })
                                : i
                        ) +
                        "weekday-exceed-left"
                    );
                },
                7: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 9, column: 32 }, end: { line: 9, column: 46 } } })
                                : i
                        ) +
                        "weekday-exceed-right"
                    );
                },
                9: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 146 }, end: { line: 13, column: 160 } } })
                                : i
                        ) + "weekday-schedule-focused "
                    );
                },
                11: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                    color: #ffffff; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        ";\n"
                    );
                },
                13: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                    color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "bgColor") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "borderColor") : i, t)) +
                        ";\n"
                    );
                },
                15: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<span class="' +
                        r(
                            "function" == typeof (a = null != (a = s(n, "CSS_PREFIX") || (null != t ? s(t, "CSS_PREFIX") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 22, column: 75 }, end: { line: 22, column: 89 } } })
                                : a
                        ) +
                        'weekday-resize-handle handle-y" style="line-height:' +
                        r(e.lambda((i = o && s(o, "root")) && s(i, "scheduleHeight"), t)) +
                        'px;">&nbsp;</span>'
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        "weekday-schedules " +
                        u(
                            typeof (a = null != (a = d(n, "collapsed") || (null != t ? d(t, "collapsed") : t)) ? a : s) === c
                                ? a.call(r, { name: "collapsed", hash: {}, data: o, loc: { start: { line: 1, column: 44 }, end: { line: 1, column: 57 } } })
                                : a
                        ) +
                        '"style="top:' +
                        u(e.lambda((i = o && d(o, "root")) && d(i, "scheduleContainerTop"), t)) +
                        'px;">\n' +
                        (null !=
                        (i = d(n, "each").call(r, null != t ? d(t, "matrices") : t, { name: "each", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 2, column: 4 }, end: { line: 28, column: 15 } } }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 8, column: 24 }, end: { line: 8, column: 38 } } })
                                : a
                        ) +
                        'weekday-grid-line"\n                style="left:' +
                        u(typeof (a = null != (a = d(n, "left") || (null != t ? d(t, "left") : t)) ? a : s) === c ? a.call(r, { name: "left", hash: {}, data: o, loc: { start: { line: 9, column: 28 }, end: { line: 9, column: 36 } } }) : a) +
                        "%; width:" +
                        u(
                            typeof (a = null != (a = d(n, "width") || (null != t ? d(t, "width") : t)) ? a : s) === c
                                ? a.call(r, { name: "width", hash: {}, data: o, loc: { start: { line: 9, column: 45 }, end: { line: 9, column: 54 } } })
                                : a
                        ) +
                        "%; background-color: " +
                        u(
                            typeof (a = null != (a = d(n, "backgroundColor") || (null != t ? d(t, "backgroundColor") : t)) ? a : s) === c
                                ? a.call(r, { name: "backgroundColor", hash: {}, data: o, loc: { start: { line: 9, column: 75 }, end: { line: 9, column: 94 } } })
                                : a
                        ) +
                        ";\n" +
                        (null != (i = d(n, "unless").call(r, o && d(o, "last"), { name: "unless", hash: {}, fn: e.program(2, o, 0), inverse: e.noop, data: o, loc: { start: { line: 10, column: 20 }, end: { line: 12, column: 31 } } }))
                            ? i
                            : "") +
                        '            "></div>\n'
                    );
                },
                2: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                    border-right: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "borderRight"), t)) + ";\n";
                },
                4: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i = a(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? a(t, "days") : t, {
                            name: "each",
                            hash: {},
                            fn: e.program(5, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 17, column: 8 }, end: { line: 27, column: 19 } },
                        }))
                        ? i
                        : "";
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i = a(n, "if").call(null != t ? t : e.nullContext || {}, (i = o && a(o, "root")) && a(i, "collapsed"), {
                            name: "if",
                            hash: {},
                            fn: e.program(6, o, 0),
                            inverse: e.program(9, o, 0),
                            data: o,
                            loc: { start: { line: 18, column: 12 }, end: { line: 26, column: 19 } },
                        }))
                        ? i
                        : "";
                },
                6: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i = a(n, "if").call(null != t ? t : e.nullContext || {}, null != t ? a(t, "hiddenSchedules") : t, {
                            name: "if",
                            hash: {},
                            fn: e.program(7, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 19, column: 16 }, end: { line: 21, column: 23 } },
                        }))
                        ? i
                        : "";
                },
                7: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                    <span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 20, column: 33 }, end: { line: 20, column: 47 } } })
                                : a
                        ) +
                        'weekday-exceed-in-week" style="z-index: 1; right:' +
                        u(
                            (d(n, "getRight") || (t && d(t, "getRight")) || s).call(r, null != t ? d(t, "left") : t, null != t ? d(t, "width") : t, {
                                name: "getRight",
                                hash: {},
                                data: o,
                                loc: { start: { line: 20, column: 96 }, end: { line: 20, column: 119 } },
                            })
                        ) +
                        '%;" data-index="' +
                        u(typeof (a = null != (a = d(n, "key") || (o && d(o, "key"))) ? a : s) === c ? a.call(r, { name: "key", hash: {}, data: o, loc: { start: { line: 20, column: 135 }, end: { line: 20, column: 143 } } }) : a) +
                        '">' +
                        (null !=
                        (i = (d(n, "weekGridFooterExceed-tmpl") || (t && d(t, "weekGridFooterExceed-tmpl")) || s).call(r, null != t ? d(t, "hiddenSchedules") : t, {
                            name: "weekGridFooterExceed-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 20, column: 145 }, end: { line: 20, column: 192 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n"
                    );
                },
                9: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i = (a(n, "fi") || (t && a(t, "fi")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, o && a(o, "key"), "===", (i = o && a(o, "root")) && a(i, "collapseBtnIndex"), {
                            name: "fi",
                            hash: {},
                            fn: e.program(10, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 23, column: 16 }, end: { line: 25, column: 23 } },
                        }))
                        ? i
                        : "";
                },
                10: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                    <span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 24, column: 33 }, end: { line: 24, column: 47 } } })
                                : a
                        ) +
                        'weekday-collapse-btn" style="z-index: 1; right:' +
                        u(
                            (d(n, "getRight") || (t && d(t, "getRight")) || s).call(r, null != t ? d(t, "left") : t, null != t ? d(t, "width") : t, {
                                name: "getRight",
                                hash: {},
                                data: o,
                                loc: { start: { line: 24, column: 94 }, end: { line: 24, column: 117 } },
                            })
                        ) +
                        '%;">' +
                        (null !=
                        (i =
                            typeof (a = null != (a = d(n, "collapseBtnTitle-tmpl") || (null != t ? d(t, "collapseBtnTitle-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "collapseBtnTitle-tmpl", hash: {}, data: o, loc: { start: { line: 24, column: 121 }, end: { line: 24, column: 148 } } })
                                : a)
                            ? i
                            : "") +
                        "</span>\n"
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        u(
                            typeof (a = null != (a = h(n, "viewName") || (null != t ? h(t, "viewName") : t)) ? a : s) === c
                                ? a.call(r, { name: "viewName", hash: {}, data: o, loc: { start: { line: 1, column: 26 }, end: { line: 1, column: 38 } } })
                                : a
                        ) +
                        "-left " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 44 }, end: { line: 1, column: 58 } } })
                                : a
                        ) +
                        'left" style="border-right: ' +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "leftBorderRight") : i, t)) +
                        "; width: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "leftWidth") : i, t)) +
                        "; background-color: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "leftBackgroundColor") : i, t)) +
                        "; padding-right: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "leftPaddingRight") : i, t)) +
                        ';">\n    ' +
                        (null !=
                        (i = (h(n, "dayGridTitle-tmpl") || (t && h(t, "dayGridTitle-tmpl")) || s).call(r, null != t ? h(t, "viewName") : t, {
                            name: "dayGridTitle-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 2, column: 4 }, end: { line: 2, column: 36 } },
                        }))
                            ? i
                            : "") +
                        '\n</div>\n<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 4, column: 12 }, end: { line: 4, column: 26 } } })
                                : a
                        ) +
                        u(
                            typeof (a = null != (a = h(n, "viewName") || (null != t ? h(t, "viewName") : t)) ? a : s) === c
                                ? a.call(r, { name: "viewName", hash: {}, data: o, loc: { start: { line: 4, column: 26 }, end: { line: 4, column: 38 } } })
                                : a
                        ) +
                        "-right " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 4, column: 45 }, end: { line: 4, column: 59 } } })
                                : a
                        ) +
                        'right">\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 16 }, end: { line: 5, column: 30 } } })
                                : a
                        ) +
                        'container">\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 6, column: 20 }, end: { line: 6, column: 34 } } })
                                : a
                        ) +
                        'weekday-grid">\n' +
                        (null != (i = h(n, "each").call(r, null != t ? h(t, "days") : t, { name: "each", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 7, column: 8 }, end: { line: 14, column: 19 } } }))
                            ? i
                            : "") +
                        (null !=
                        (i = h(n, "if").call(r, (i = o && h(o, "root")) && h(i, "showExpandableButton"), {
                            name: "if",
                            hash: {},
                            fn: e.program(4, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 16, column: 8 }, end: { line: 28, column: 15 } },
                        }))
                            ? i
                            : "") +
                        "        </div>\n    </div>\n</div>\n"
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(5),
                a = n(1),
                r = n(6),
                s = n(3),
                c = n(4),
                u = n(11),
                d = n(8),
                h = n(73),
                p = n(75),
                m = n(76),
                f = n(77),
                g = n(78),
                y = c.Date;
            function S(e, t, n, o) {
                var a,
                    r,
                    c = e.hourStart,
                    u = e.hourEnd,
                    d = new y(e.renderEndDate),
                    h = parseInt(n / 60, 10),
                    p = Math.abs(n % 60),
                    m = new y().toLocalTime(),
                    f = m.getMinutes(),
                    g = l.range(0, 24),
                    S = null;
                return (
                    (h < 0 || -0 === h) && p > 0 && (h -= 1),
                    i.shiftArray(g, h),
                    i.takeArray(g, c, u),
                    (a = i.shiftHours(m.getHours(), h) % 24),
                    (r = l.inArray(a, g)),
                    t && (f < 20 ? (S = a) : f > 40 && (S = a + 1), l.isNumber(S) && (S %= 24)),
                    l.map(g, function (e, n) {
                        var l, i;
                        return (
                            (t && n <= r) || (d < m && !s.isSameDate(d, m)) ? ((l = o.pastTimeColor), (i = o.pastTimeFontWeight)) : ((l = o.futureTimeColor), (i = o.futureTimeFontWeight)),
                            { hour: e, minutes: p, hidden: S === e || 0 === n, color: l || "", fontWeight: i || "" }
                        );
                    })
                );
            }
            function _(e, t, n) {
                var i = a.appendHTMLElement("div", n, o.classname("timegrid-container")),
                    r = a.appendHTMLElement("div", n, o.classname("timegrid-sticky-container"));
                (n.style.position = "relative"),
                    (e = e || "time"),
                    d.call(this, i),
                    l.browser.safari || (this._autoScroll = new p(i)),
                    (this.stickyContainer = r),
                    (this.options = l.extend({ viewName: e, renderStartDate: "", renderEndDate: "", hourStart: 0, hourEnd: 24, timezones: t.timezones, isReadOnly: t.isReadOnly, showTimezoneCollapseButton: !1 }, t.week)),
                    this.options.timezones.length < 1 && (this.options.timezones = [{ timezoneOffset: c.getOffset() }]),
                    (this.intervalID = 0),
                    (this.timerID = 0),
                    (this.rAnimationFrameID = 0),
                    (this._scrolled = !1),
                    (this._cacheParentViewModel = null),
                    (this._cacheHoursLabels = null),
                    this.attachEvent();
            }
            l.inherit(_, d),
                (_.prototype.viewName = "timegrid"),
                (_.prototype._beforeDestroy = function () {
                    clearInterval(this.intervalID),
                        clearTimeout(this.timerID),
                        u.cancelAnimFrame(this.rAnimationFrameID),
                        this._autoScroll && this._autoScroll.destroy(),
                        r.off(this.stickyContainer, "click", this._onClickStickyContainer, this),
                        (this._autoScroll = this.hourmarkers = this.intervalID = this.timerID = this.rAnimationFrameID = this._cacheParentViewModel = this.stickyContainer = null);
                }),
                (_.prototype._getTopPercentByTime = function (e) {
                    var t,
                        n = this.options,
                        o = s.raw(e || new y()),
                        a = l.range(n.hourStart, n.hourEnd).length * s.MILLISECONDS_PER_HOUR,
                        r = s.millisecondsFrom("hour", o.h) + s.millisecondsFrom("minutes", o.m) + s.millisecondsFrom("seconds", o.s) + o.ms;
                    return (t = i.ratio(a, 100, r)), (t -= i.ratio(a, 100, s.millisecondsFrom("hour", n.hourStart))), i.limit(t, [0], [100]);
                }),
                (_.prototype._getHourmarkerViewModel = function (e, t, n) {
                    var o = -1,
                        i = -1,
                        a = [],
                        r = this.options,
                        u = c.getOffset(),
                        d = r.timezones;
                    return (
                        l.forEach(n, function (n, l) {
                            s.isSameDate(e, n) && ((o = t[l] ? t[l].left : 0), (i = t[l] ? t[l].width : 0));
                        }),
                        l.forEach(d, function (t) {
                            var n,
                                l = t.timezoneOffset + u,
                                o = new y(e);
                            o.setMinutes(o.getMinutes() + l), (n = s.getDateDifference(o, e)), a.push({ hourmarker: o, dateDifferenceSign: n < 0 ? "-" : "+", dateDifference: Math.abs(n) });
                        }),
                        { currentHours: e.getHours(), hourmarkerTop: this._getTopPercentByTime(e), hourmarkerTimzones: a, todaymarkerLeft: o, todaymarkerWidth: i, todaymarkerRight: o + i }
                    );
                }),
                (_.prototype._getTimezoneViewModel = function (e, t, n) {
                    var o = this.options,
                        i = c.getOffset(),
                        a = o.timezones,
                        r = a.length,
                        u = [],
                        d = t,
                        h = d ? 100 : 100 / r,
                        p = new y().toLocalTime(),
                        m = n.displayTimezoneLabelBackgroundColor;
                    return (
                        l.forEach(a, function (t, l) {
                            var r,
                                c,
                                f,
                                g = new y(p);
                            (r = t.timezoneOffset + i),
                                (c = S(o, e >= 0, r, n)),
                                g.setMinutes(g.getMinutes() + r),
                                (f = s.getDateDifference(g, p)),
                                l > 0 && (m = n.additionalTimezoneBackgroundColor),
                                u.push({
                                    timeSlots: c,
                                    displayLabel: t.displayLabel,
                                    timezoneOffset: t.timezoneOffset,
                                    tooltip: t.tooltip || "",
                                    width: h,
                                    left: d ? 0 : (a.length - l - 1) * h,
                                    isPrimary: 0 === l,
                                    backgroundColor: m || "",
                                    hidden: 0 !== l && d,
                                    hourmarker: g,
                                    dateDifferenceSign: f < 0 ? "-" : "+",
                                    dateDifference: Math.abs(f),
                                });
                        }),
                        u
                    );
                }),
                (_.prototype._getBaseViewModel = function (e) {
                    var t = e.grids,
                        n = e.range,
                        o = this.options,
                        i = this._getHourmarkerViewModel(new y().toLocalTime(), t, n),
                        a = l.pick(e, "state", "timezonesCollapsed"),
                        r = this._getStyles(e.theme, a);
                    return l.extend(i, {
                        timezones: this._getTimezoneViewModel(i.todaymarkerLeft, a, r),
                        hoursLabels: S(o, i.todaymarkerLeft >= 0, 0, r),
                        styles: r,
                        showTimezoneCollapseButton: l.pick(o, "showTimezoneCollapseButton"),
                        timezonesCollapsed: a,
                    });
                }),
                (_.prototype._renderChildren = function (e, t, n, i) {
                    var r,
                        c,
                        u,
                        d,
                        p = this,
                        m = this.options,
                        f = s.format(new y(), "YYYYMMDD"),
                        g = 0;
                    (n.innerHTML = ""),
                        this.children.clear(),
                        (d = a.getSize(n.parentElement)[1]),
                        l.forEach(e, function (e, l) {
                            (u = l === f),
                                (r = {
                                    index: g,
                                    left: t[g] ? t[g].left : 0,
                                    width: t[g] ? t[g].width : 0,
                                    ymd: l,
                                    isToday: u,
                                    isPending: m.isPending,
                                    isFocused: m.isFocused,
                                    isReadOnly: m.isReadOnly,
                                    hourStart: m.hourStart,
                                    hourEnd: m.hourEnd,
                                }),
                                (c = new h(r, a.appendHTMLElement("div", n, o.classname("time-date")), i)).render(l, e, d),
                                p.addChild(c),
                                (g += 1);
                        });
                }),
                (_.prototype.render = function (e) {
                    var t = this.options,
                        n = e.schedulesInDateRange[t.viewName],
                        i = this.container,
                        r = e.grids,
                        s = this._getBaseViewModel(e),
                        c = l.keys(n).length;
                    (this._cacheParentViewModel = e),
                        (this._cacheHoursLabels = s.hoursLabels),
                        c &&
                            ((s.showHourMarker = s.todaymarkerLeft >= 0),
                            (i.innerHTML = m(s)),
                            this.renderStickyContainer(s),
                            this._renderChildren(n, r, a.find(o.classname(".timegrid-schedules-container"), i), e.theme),
                            (this._hourLabels = a.find("ul", i)),
                            (this.hourmarkers = a.find(o.classname(".timegrid-hourmarker"), i, !0)),
                            this._scrolled || ((this._scrolled = !0), this.scrollToNow()));
                }),
                (_.prototype.renderStickyContainer = function (e) {
                    var t = this.stickyContainer;
                    (t.innerHTML = f(e)),
                        (t.style.display = e.timezones.length > 1 ? "block" : "none"),
                        (t.style.width = e.styles.leftWidth),
                        (t.style.height = e.styles.displayTimezoneLabelHeight),
                        (t.style.borderBottom = e.styles.leftBorderRight);
                }),
                (_.prototype.refreshHourmarker = function () {
                    var e,
                        t = this.hourmarkers,
                        n = this._cacheParentViewModel,
                        i = this._cacheHoursLabels,
                        r = this.rAnimationFrameID;
                    t &&
                        n &&
                        !r &&
                        ((e = this._getBaseViewModel(n)),
                        (this.rAnimationFrameID = u.requestAnimFrame(function () {
                            var r = !1;
                            l.forEach(i, function (t, n) {
                                return t.hidden === e.hoursLabels[n].hidden || ((r = !0), !1);
                            }),
                                r
                                    ? this.render(n)
                                    : l.forEach(t, function (t) {
                                          var n = a.find(o.classname(".timegrid-todaymarker"), t),
                                              l = a.find(o.classname(".timegrid-hourmarker-time"), t),
                                              i = a.closest(t, o.classname(".timegrid-timezone")),
                                              r = i ? a.getData(i, "timezoneIndex") : 0;
                                          (t.style.top = e.hourmarkerTop + "%"), n && (n.style.display = e.todaymarkerLeft >= 0 ? "block" : "none"), l && (l.innerHTML = g(e.hourmarkerTimzones[r]));
                                      }),
                                (this.rAnimationFrameID = null);
                        }, this)));
                }),
                (_.prototype.attachEvent = function () {
                    clearInterval(this.intervalID),
                        clearTimeout(this.timerID),
                        (this.intervalID = this.timerID = this.rAnimationFrameID = null),
                        (this.timerID = setTimeout(this.onTick.bind(this), 1e3 * (60 - new y().getSeconds()))),
                        r.on(this.stickyContainer, "click", this._onClickStickyContainer, this);
                }),
                (_.prototype.scrollToNow = function () {
                    var e,
                        t,
                        n,
                        l,
                        o,
                        i = this.container;
                    this.hourmarkers &&
                        this.hourmarkers.length &&
                        ((e = this.hourmarkers[0].offsetTop),
                        (t = this.getViewBound()),
                        (n = e),
                        (l = t.height / 4),
                        10,
                        (o = function () {
                            n > e - l ? ((n -= 10), (i.scrollTop = n), u.requestAnimFrame(o)) : (i.scrollTop = e - l);
                        }),
                        u.requestAnimFrame(o));
                }),
                (_.prototype.onTick = function () {
                    this.timerID && (clearTimeout(this.timerID), (this.timerID = null)), this.intervalID || (this.intervalID = setInterval(this.onTick.bind(this), 6e4)), this.refreshHourmarker();
                }),
                (_.prototype._getStyles = function (e, t) {
                    var n,
                        l = {},
                        o = this.options.timezones.length,
                        a = t;
                    return (
                        e &&
                            ((l.borderBottom = e.week.timegridHorizontalLine.borderBottom || e.common.border),
                            (l.halfHourBorderBottom = e.week.timegridHalfHour.borderBottom || e.common.border),
                            (l.todayBackgroundColor = e.week.today.backgroundColor),
                            (l.weekendBackgroundColor = e.week.weekend.backgroundColor),
                            (l.backgroundColor = e.week.daygrid.backgroundColor),
                            (l.leftWidth = e.week.timegridLeft.width),
                            (l.leftBackgroundColor = e.week.timegridLeft.backgroundColor),
                            (l.leftBorderRight = e.week.timegridLeft.borderRight || e.common.border),
                            (l.leftFontSize = e.week.timegridLeft.fontSize),
                            (l.timezoneWidth = e.week.timegridLeft.width),
                            (l.additionalTimezoneBackgroundColor = e.week.timegridLeftAdditionalTimezone.backgroundColor || l.leftBackgroundColor),
                            (l.displayTimezoneLabelHeight = e.week.timegridLeftTimezoneLabel.height),
                            (l.displayTimezoneLabelBackgroundColor = "inherit" === e.week.timegridLeft.backgroundColor ? "white" : e.week.timegridLeft.backgroundColor),
                            (l.oneHourHeight = e.week.timegridOneHour.height),
                            (l.halfHourHeight = e.week.timegridHalfHour.height),
                            (l.quaterHourHeight = parseInt(l.halfHourHeight, 10) / 2 + "px"),
                            (l.currentTimeColor = e.week.currentTime.color),
                            (l.currentTimeFontSize = e.week.currentTime.fontSize),
                            (l.currentTimeFontWeight = e.week.currentTime.fontWeight),
                            (l.pastTimeColor = e.week.pastTime.color),
                            (l.pastTimeFontWeight = e.week.pastTime.fontWeight),
                            (l.futureTimeColor = e.week.futureTime.color),
                            (l.futureTimeFontWeight = e.week.futureTime.fontWeight),
                            (l.currentTimeLeftBorderTop = e.week.currentTimeLinePast.border),
                            (l.currentTimeBulletBackgroundColor = e.week.currentTimeLineBullet.backgroundColor),
                            (l.currentTimeTodayBorderTop = e.week.currentTimeLineToday.border),
                            (l.currentTimeRightBorderTop = e.week.currentTimeLineFuture.border),
                            !a && o > 1 && ((n = i.parseUnit(l.leftWidth)), (l.leftWidth = n[0] * o + n[1]))),
                        l
                    );
                }),
                (_.prototype._onClickStickyContainer = function (e) {
                    var t = r.getEventTarget(e);
                    a.closest(t, o.classname(".timegrid-timezone-close-btn")) && this.fire("clickTimezonesCollapsedBtn");
                }),
                (e.exports = _);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(3),
                a = n(1),
                r = n(8),
                s = n(74),
                c = l.forEachArray,
                u = i.MILLISECONDS_SCHEDULE_MIN_DURATION;
            function d(e, t, n) {
                r.call(this, t),
                    (this.options = l.extend({ index: 0, width: 0, ymd: "", isToday: !1, pending: !1, hourStart: 0, hourEnd: 24, defaultMarginBottom: 2, minHeight: 18.5, isReadOnly: !1 }, e)),
                    (this.timeTmpl = s),
                    (this.theme = n),
                    (t.style.width = e.width + "%"),
                    (t.style.left = e.left + "%"),
                    this.options.isToday && a.addClass(this.container, o.classname("today")),
                    this.applyTheme();
            }
            l.inherit(d, r),
                (d.prototype._parseDateGroup = function (e) {
                    var t = parseInt(e.substr(0, 4), 10),
                        n = parseInt(e.substr(4, 2), 10),
                        l = parseInt(e.substr(6, 2), 10),
                        o = i.start();
                    return o.setFullYear(t, n - 1, l), i.start(o);
                }),
                (d.prototype._getScheduleViewBoundX = function (e, t) {
                    var n = t.baseWidth * (e.extraSpace + 1);
                    return e.hasCollide || (n = null), { left: t.baseLeft[t.columnIndex], width: n };
                }),
                (d.prototype._getScheduleViewBoundY = function (e, t) {
                    var n,
                        l,
                        o,
                        a,
                        r = t.baseMS,
                        s = t.baseHeight,
                        c = !1,
                        d = !1,
                        h = i.millisecondsFrom("minutes", e.valueOf().goingDuration),
                        p = i.millisecondsFrom("minutes", e.valueOf().comingDuration),
                        m = e.valueOf().start - h - t.todayStart,
                        f = (s * m) / r,
                        g = e.duration();
                    return (
                        (n = (s * ((g = g > u ? g : u) + h + p)) / r),
                        (l = (s * h) / r),
                        (o = (s * g) / r),
                        (a = (s * p) / r),
                        m < 0 && ((f = 0), (n += (s * m) / r), (c = !0)),
                        n + f > s && ((n = s - f), (d = !0)),
                        {
                            top: f,
                            height: Math.max(n, this.options.minHeight) - this.options.defaultMarginBottom,
                            modelDurationHeight: o,
                            goingDurationHeight: l,
                            comingDurationHeight: a,
                            hasGoingDuration: h > 0,
                            hasComingDuration: p > 0,
                            croppedStart: c,
                            croppedEnd: d,
                        }
                    );
                }),
                (d.prototype.getScheduleViewBound = function (e, t) {
                    var n = this._getScheduleViewBoundX(e, t),
                        o = this._getScheduleViewBoundY(e, t),
                        i = e.model,
                        a = l.pick(i, "isReadOnly") || !1,
                        r = i.isFocused ? "#ffffff" : i.borderColor;
                    return r === i.bgColor && (r = null), l.extend({ isReadOnly: a, travelBorderColor: r }, n, o);
                }),
                (d.prototype._getBaseViewModel = function (e, t, n) {
                    var o,
                        a,
                        r = this,
                        s = this.options,
                        u = s.hourStart,
                        d = s.hourEnd,
                        h = s.isReadOnly;
                    (n = n || this.getViewBound().height),
                        (o = this._parseDateGroup(e)).setHours(u),
                        (a = i.millisecondsFrom("hour", d - u)),
                        c(t, function (e) {
                            var t, i, s, u;
                            for (
                                t = Math.max.apply(
                                    null,
                                    l.map(e, function (e) {
                                        return e.length;
                                    })
                                ),
                                    i = 100 / t,
                                    s = [],
                                    u = 0;
                                u < t;
                                u += 1
                            )
                                s[u] = i * u;
                            c(e, function (e) {
                                c(e, function (e, t) {
                                    var c;
                                    e && ((c = r.getScheduleViewBound(e, { todayStart: o, baseMS: a, baseLeft: s, baseWidth: i, baseHeight: n, columnIndex: t, isReadOnly: h })), l.extend(e, c));
                                });
                            });
                        });
                }),
                (d.prototype.getDate = function () {
                    return this._parseDateGroup(this.options.ymd);
                }),
                (d.prototype.render = function (e, t, n) {
                    this._getBaseViewModel(e, t, n), (this.container.innerHTML = this.timeTmpl({ matrices: t, styles: this._getStyles(this.theme), isReadOnly: this.options.isReadOnly }));
                }),
                (d.prototype._getStyles = function (e) {
                    var t = {},
                        n = this.options;
                    return (
                        e &&
                            ((t.borderRight = e.week.timegrid.borderRight || e.common.border),
                            (t.marginRight = e.week.timegrid.paddingRight),
                            (t.borderRadius = e.week.timegridSchedule.borderRadius),
                            (t.paddingLeft = e.week.timegridSchedule.paddingLeft),
                            (t.backgroundColor = n.isToday ? e.week.today.backgroundColor : "inherit")),
                        t
                    );
                }),
                (d.prototype.applyTheme = function () {
                    var e = this.container.style,
                        t = this._getStyles(this.theme);
                    (e.borderRight = t.borderRight), (e.backgroundColor = t.backgroundColor);
                }),
                (e.exports = d);
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i;
                    return null !=
                        (i = (
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            }
                        )(n, "each").call(null != t ? t : e.nullContext || {}, t, { name: "each", hash: {}, fn: e.program(2, o, 0), inverse: e.noop, data: o, loc: { start: { line: 3, column: 4 }, end: { line: 60, column: 13 } } }))
                        ? i
                        : "";
                },
                2: function (e, t, n, l, o) {
                    var i;
                    return null !=
                        (i = (
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            }
                        )(n, "each").call(null != t ? t : e.nullContext || {}, t, { name: "each", hash: {}, fn: e.program(3, o, 0), inverse: e.noop, data: o, loc: { start: { line: 4, column: 8 }, end: { line: 59, column: 17 } } }))
                        ? i
                        : "";
                },
                3: function (e, t, n, l, o) {
                    var i;
                    return null !=
                        (i = (
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            }
                        )(n, "if").call(null != t ? t : e.nullContext || {}, t, { name: "if", hash: {}, fn: e.program(4, o, 0), inverse: e.noop, data: o, loc: { start: { line: 5, column: 8 }, end: { line: 58, column: 17 } } }))
                        ? i
                        : "";
                },
                4: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 6, column: 20 }, end: { line: 6, column: 34 } } })
                                : a
                        ) +
                        "time-date-schedule-block " +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isPending") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(5, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 6, column: 59 }, end: { line: 6, column: 136 } },
                        }))
                            ? i
                            : "") +
                        '" data-id="' +
                        u((h(n, "stamp") || (t && h(t, "stamp")) || s).call(r, null != t ? h(t, "model") : t, { name: "stamp", hash: {}, data: o, loc: { start: { line: 6, column: 147 }, end: { line: 6, column: 162 } } })) +
                        '"\n            style="' +
                        u((h(n, "time-scheduleBlock") || (t && h(t, "time-scheduleBlock")) || s).call(r, t, { name: "time-scheduleBlock", hash: {}, data: o, loc: { start: { line: 7, column: 19 }, end: { line: 7, column: 46 } } })) +
                        ";\n" +
                        (null !=
                        (i = (h(n, "fi") || (t && h(t, "fi")) || s).call(r, null != t ? h(t, "left") : t, "!==", 0, {
                            name: "fi",
                            hash: {},
                            fn: e.program(7, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 8, column: 16 }, end: { line: 10, column: 23 } },
                        }))
                            ? i
                            : "") +
                        '            ">\n            <div data-schedule-id="' +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "id") : i, t)) +
                        '" data-calendar-id="' +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "calendarId") : i, t)) +
                        '" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 96 }, end: { line: 12, column: 110 } } })
                                : a
                        ) +
                        "time-schedule " +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(9, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 12, column: 124 }, end: { line: 12, column: 190 } },
                        }))
                            ? i
                            : "") +
                        '"\n                style="\n' +
                        (null !=
                        (i = h(n, "unless").call(r, null != t ? h(t, "croppedEnd") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(11, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 14, column: 16 }, end: { line: 17, column: 27 } },
                        }))
                            ? i
                            : "") +
                        (null !=
                        (i = h(n, "unless").call(r, null != t ? h(t, "croppedStart") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(13, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 18, column: 16 }, end: { line: 21, column: 27 } },
                        }))
                            ? i
                            : "") +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(15, o, 0),
                            inverse: e.program(17, o, 0),
                            data: o,
                            loc: { start: { line: 22, column: 16 }, end: { line: 26, column: 23 } },
                        }))
                            ? i
                            : "") +
                        "                 " +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "customStyle") : i, t)) +
                        '"\n            >\n' +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "hasGoingDuration") : t, { name: "if", hash: {}, fn: e.program(19, o, 0), inverse: e.noop, data: o, loc: { start: { line: 29, column: 12 }, end: { line: 37, column: 19 } } }))
                            ? i
                            : "") +
                        '                <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 38, column: 28 }, end: { line: 38, column: 42 } } })
                                : a
                        ) +
                        "time-schedule-content " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 38, column: 64 }, end: { line: 38, column: 78 } } })
                                : a
                        ) +
                        'time-schedule-content-time" style="height: ' +
                        u(
                            typeof (a = null != (a = h(n, "modelDurationHeight") || (null != t ? h(t, "modelDurationHeight") : t)) ? a : s) === c
                                ? a.call(r, { name: "modelDurationHeight", hash: {}, data: o, loc: { start: { line: 38, column: 121 }, end: { line: 38, column: 144 } } })
                                : a
                        ) +
                        "px;\n" +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(20, o, 0),
                            inverse: e.program(22, o, 0),
                            data: o,
                            loc: { start: { line: 39, column: 16 }, end: { line: 43, column: 23 } },
                        }))
                            ? i
                            : "") +
                        "                " +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "hasComingDuration") : t, {
                            name: "if",
                            hash: {},
                            fn: e.program(24, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 44, column: 16 }, end: { line: 44, column: 96 } },
                        }))
                            ? i
                            : "") +
                        '">\n                    ' +
                        (null !=
                        (i = (h(n, "time-tmpl") || (t && h(t, "time-tmpl")) || s).call(r, null != t ? h(t, "model") : t, { name: "time-tmpl", hash: {}, data: o, loc: { start: { line: 45, column: 20 }, end: { line: 45, column: 41 } } }))
                            ? i
                            : "") +
                        "\n                </div>\n" +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "hasComingDuration") : t, {
                            name: "if",
                            hash: {},
                            fn: e.program(26, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 47, column: 12 }, end: { line: 54, column: 19 } },
                        }))
                            ? i
                            : "") +
                        "            </div>\n            " +
                        (null !=
                        (i = h(n, "unless").call(
                            r,
                            (h(n, "or") || (t && h(t, "or")) || s).call(
                                r,
                                null != t ? h(t, "croppedEnd") : t,
                                (h(n, "or") || (t && h(t, "or")) || s).call(r, (i = o && h(o, "root")) && h(i, "isReadOnly"), null != (i = null != t ? h(t, "model") : t) ? h(i, "isReadOnly") : i, {
                                    name: "or",
                                    hash: {},
                                    data: o,
                                    loc: { start: { line: 56, column: 37 }, end: { line: 56, column: 75 } },
                                }),
                                { name: "or", hash: {}, data: o, loc: { start: { line: 56, column: 22 }, end: { line: 56, column: 76 } } }
                            ),
                            { name: "unless", hash: {}, fn: e.program(29, o, 0), inverse: e.noop, data: o, loc: { start: { line: 56, column: 12 }, end: { line: 56, column: 207 } } }
                        ))
                            ? i
                            : "") +
                        "\n        </div>\n"
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 6, column: 83 }, end: { line: 6, column: 97 } } })
                                : i
                        ) +
                        "time-date-schedule-block-pending"
                    );
                },
                7: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                    padding-left: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "paddingLeft"), t)) + ";\n";
                },
                9: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 147 }, end: { line: 12, column: 161 } } })
                                : i
                        ) + "time-schedule-focused "
                    );
                },
                11: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                    border-bottom-left-radius: " +
                        r(a((i = (i = o && s(o, "root")) && s(i, "styles")) && s(i, "borderRadius"), t)) +
                        ";\n                    border-bottom-right-radius: " +
                        r(a((i = (i = o && s(o, "root")) && s(i, "styles")) && s(i, "borderRadius"), t)) +
                        ";\n"
                    );
                },
                13: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                    border-top-left-radius: " +
                        r(a((i = (i = o && s(o, "root")) && s(i, "styles")) && s(i, "borderRadius"), t)) +
                        ";\n                    border-top-right-radius: " +
                        r(a((i = (i = o && s(o, "root")) && s(i, "styles")) && s(i, "borderRadius"), t)) +
                        ";\n"
                    );
                },
                15: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                    color: #ffffff; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        ";\n"
                    );
                },
                17: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                    color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "bgColor") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "borderColor") : i, t)) +
                        ";\n"
                    );
                },
                19: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                <div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 30, column: 28 }, end: { line: 30, column: 42 } } })
                                : a
                        ) +
                        "time-schedule-content " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 30, column: 64 }, end: { line: 30, column: 78 } } })
                                : a
                        ) +
                        'time-schedule-content-travel-time" style="height: ' +
                        u(
                            typeof (a = null != (a = d(n, "goingDurationHeight") || (null != t ? d(t, "goingDurationHeight") : t)) ? a : s) === c
                                ? a.call(r, { name: "goingDurationHeight", hash: {}, data: o, loc: { start: { line: 30, column: 128 }, end: { line: 30, column: 151 } } })
                                : a
                        ) +
                        "px;\n" +
                        (null !=
                        (i = d(n, "if").call(r, null != (i = null != t ? d(t, "model") : t) ? d(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(20, o, 0),
                            inverse: e.program(22, o, 0),
                            data: o,
                            loc: { start: { line: 31, column: 16 }, end: { line: 35, column: 23 } },
                        }))
                            ? i
                            : "") +
                        "                border-bottom: 1px dashed " +
                        u(
                            typeof (a = null != (a = d(n, "travelBorderColor") || (null != t ? d(t, "travelBorderColor") : t)) ? a : s) === c
                                ? a.call(r, { name: "travelBorderColor", hash: {}, data: o, loc: { start: { line: 36, column: 42 }, end: { line: 36, column: 63 } } })
                                : a
                        ) +
                        ';">' +
                        (null !=
                        (i = (d(n, "goingDuration-tmpl") || (t && d(t, "goingDuration-tmpl")) || s).call(r, null != t ? d(t, "model") : t, {
                            name: "goingDuration-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 36, column: 66 }, end: { line: 36, column: 96 } },
                        }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                20: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                    border-color:" + e.escapeExpression(e.lambda(null != (i = null != t ? a(t, "model") : t) ? a(i, "color") : i, t)) + ";\n";
                },
                22: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                    border-color:" + e.escapeExpression(e.lambda(null != (i = null != t ? a(t, "model") : t) ? a(i, "borderColor") : i, t)) + ";\n";
                },
                24: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "border-bottom: 1px dashed " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "travelBorderColor") || (null != t ? a(t, "travelBorderColor") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "travelBorderColor", hash: {}, data: o, loc: { start: { line: 44, column: 67 }, end: { line: 44, column: 88 } } })
                                : i
                        ) +
                        ";"
                    );
                },
                26: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                <div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 48, column: 28 }, end: { line: 48, column: 42 } } })
                                : a
                        ) +
                        "time-schedule-content " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 48, column: 64 }, end: { line: 48, column: 78 } } })
                                : a
                        ) +
                        'time-schedule-content-travel-time" style="height: ' +
                        u(
                            typeof (a = null != (a = d(n, "comingDurationHeight") || (null != t ? d(t, "comingDurationHeight") : t)) ? a : s) === c
                                ? a.call(r, { name: "comingDurationHeight", hash: {}, data: o, loc: { start: { line: 48, column: 128 }, end: { line: 48, column: 152 } } })
                                : a
                        ) +
                        "px;\n" +
                        (null !=
                        (i = d(n, "if").call(r, null != (i = null != t ? d(t, "model") : t) ? d(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(20, o, 0),
                            inverse: e.program(27, o, 0),
                            data: o,
                            loc: { start: { line: 49, column: 16 }, end: { line: 53, column: 23 } },
                        }))
                            ? i
                            : "") +
                        ';">' +
                        (null !=
                        (i = (d(n, "comingDuration-tmpl") || (t && d(t, "comingDuration-tmpl")) || s).call(r, null != t ? d(t, "model") : t, {
                            name: "comingDuration-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 53, column: 26 }, end: { line: 53, column: 57 } },
                        }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                27: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                    border-color:" + e.escapeExpression(e.lambda(null != (i = null != t ? a(t, "model") : t) ? a(i, "borderColor") : i, t)) + ";\n                ";
                },
                29: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        r(
                            "function" == typeof (a = null != (a = s(n, "CSS_PREFIX") || (null != t ? s(t, "CSS_PREFIX") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 56, column: 90 }, end: { line: 56, column: 104 } } })
                                : a
                        ) +
                        'time-resize-handle handle-x" style="margin-left: ' +
                        r(e.lambda((i = (i = o && s(o, "root")) && s(i, "styles")) && s(i, "paddingLeft"), t)) +
                        ';">&nbsp;</div>'
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.escapeExpression,
                        c =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        s(
                            "function" == typeof (a = null != (a = c(n, "CSS_PREFIX") || (null != t ? c(t, "CSS_PREFIX") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        'time-date-schedule-block-wrap" style="margin-right: ' +
                        s(e.lambda(null != (i = null != t ? c(t, "styles") : t) ? c(i, "marginRight") : i, t)) +
                        ';">\n' +
                        (null !=
                        (i = c(n, "each").call(r, null != t ? c(t, "matrices") : t, { name: "each", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 2, column: 0 }, end: { line: 61, column: 9 } } }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(0),
                    o = n(6),
                    i = n(1),
                    a = n(31);
                function r(e) {
                    (this.container = e), (this._direction = r.DIRECTION.INSIDE), (this._offset = 0), (this._intervalID = 0), o.on(e, { mousedown: this._onMouseDown }, this);
                }
                (r.DIRECTION = { INSIDE: 0, TOP: 1, RIGHT: 2, BOTTOM: 3, LEFT: 4 }),
                    (r.prototype.destroy = function () {
                        o.off(this.container, { mousedown: this._onMouseDown, mousemove: this._onMouseMove, mouseup: this._onMouseUp }, this),
                            window.clearInterval(this._intervalID),
                            (this._intervalID = this._direction = this.container = null);
                    }),
                    (r.prototype._getEdgePositions = function (e) {
                        return { top: e.top, right: e.left + e.width, bottom: e.bottom, left: e.left };
                    }),
                    (r.prototype.getRealSize = function (e) {
                        var t,
                            n,
                            l = i.getComputedStyle(e);
                        return (
                            (t = parseFloat(l.getPropertyValue("border-top-width")) + parseFloat(l.getPropertyValue("border-bottom-width"))),
                            (n = parseFloat(l.getPropertyValue("padding-top")) + parseFloat(l.getPropertyValue("padding-bottom"))),
                            [e.clientWidth + t + n, e.clientHeight + t + n]
                        );
                    }),
                    (r.prototype.hasScrollbar = function (e) {
                        var t = this.getRealSize(e);
                        return [e.offsetWidth > Math.ceil(t[0]), e.offsetHeight > Math.ceil(t[1])];
                    }),
                    (r.prototype.isOnScrollbar = function (e, t) {
                        var n = this.getRealSize(e),
                            l = o.getMousePosition(t, e);
                        return n[0] - 2 < l[0] || n[1] - 2 < l[1];
                    }),
                    (r.prototype._onMouseDown = function (e) {
                        0 === o.getMouseButton(e) &&
                            ((l.browser.msie && this.isOnScrollbar(this.container, e)) ||
                                (window.clearInterval(this._intervalID), (this._intervalID = window.setInterval(this._onTick.bind(this), 30)), o.on(t, { mousemove: this._onMouseMove, mouseup: this._onMouseUp }, this)));
                    }),
                    (r.prototype._onMouseMove = function (e) {
                        var t = this._getEdgePositions(this.container.getBoundingClientRect()),
                            n = a.n(o.getMousePosition(e));
                        if (n.y >= t.top && n.y <= t.bottom && n.x >= t.left && n.x <= t.right) this._direction = r.DIRECTION.INSIDE;
                        else {
                            if (n.y < t.top) return (this._direction = r.DIRECTION.TOP), void (this._offset = t.top - n.y);
                            if (n.y > t.bottom) return (this._direction = r.DIRECTION.BOTTOM), void (this._offset = n.y - t.bottom);
                            if (n.x < t.left) return (this._direction = r.DIRECTION.LEFT), void (this._offset = t.left - n.x);
                            (this._direction = r.DIRECTION.RIGHT), (this._offset = n.x - t.right);
                        }
                    }),
                    (r.prototype._onMouseUp = function () {
                        window.clearInterval(this._intervalID), (this._intervalID = 0), (this._direction = r.DIRECTION.INSIDE), (this._offset = 0), o.off(t, { mousemove: this._onMouseMove, mouseup: this._onMouseUp }, this);
                    }),
                    (r.prototype._onTick = function () {
                        var e,
                            t,
                            n = this._direction;
                        if (n)
                            switch (((e = this.container), (t = Math.min(this._offset, 15)), n)) {
                                case r.DIRECTION.TOP:
                                    e.scrollTop -= t;
                                    break;
                                case r.DIRECTION.RIGHT:
                                    e.scrollLeft += t;
                                    break;
                                case r.DIRECTION.BOTTOM:
                                    e.scrollTop += t;
                                    break;
                                default:
                                    e.scrollLeft -= t;
                            }
                    }),
                    (e.exports = r);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 20 }, end: { line: 3, column: 34 } } })
                                : a
                        ) +
                        'timegrid-timezone" data-timezone-index="' +
                        u(typeof (a = null != (a = d(n, "index") || (o && d(o, "index"))) ? a : s) === c ? a.call(r, { name: "index", hash: {}, data: o, loc: { start: { line: 3, column: 74 }, end: { line: 3, column: 84 } } }) : a) +
                        '" style="' +
                        (null != (i = d(n, "if").call(r, null != t ? d(t, "hidden") : t, { name: "if", hash: {}, fn: e.program(2, o, 0), inverse: e.noop, data: o, loc: { start: { line: 3, column: 93 }, end: { line: 3, column: 127 } } }))
                            ? i
                            : "") +
                        "position: absolute; top: 0; width: " +
                        u(
                            typeof (a = null != (a = d(n, "width") || (null != t ? d(t, "width") : t)) ? a : s) === c
                                ? a.call(r, { name: "width", hash: {}, data: o, loc: { start: { line: 3, column: 162 }, end: { line: 3, column: 171 } } })
                                : a
                        ) +
                        "%; left: " +
                        u(
                            typeof (a = null != (a = d(n, "left") || (null != t ? d(t, "left") : t)) ? a : s) === c
                                ? a.call(r, { name: "left", hash: {}, data: o, loc: { start: { line: 3, column: 180 }, end: { line: 3, column: 188 } } })
                                : a
                        ) +
                        "%; border-right: " +
                        u(e.lambda((i = (i = o && d(o, "root")) && d(i, "styles")) && d(i, "leftBorderRight"), t)) +
                        "; background-color: " +
                        u(
                            typeof (a = null != (a = d(n, "backgroundColor") || (null != t ? d(t, "backgroundColor") : t)) ? a : s) === c
                                ? a.call(r, { name: "backgroundColor", hash: {}, data: o, loc: { start: { line: 3, column: 257 }, end: { line: 3, column: 276 } } })
                                : a
                        ) +
                        ';" >\n' +
                        (null !=
                        (i = d(n, "if").call(r, null != t ? d(t, "isPrimary") : t, {
                            name: "if",
                            hash: {},
                            fn: e.program(4, o, 0),
                            inverse: e.program(10, o, 0),
                            data: o,
                            loc: { start: { line: 4, column: 8 }, end: { line: 26, column: 15 } },
                        }))
                            ? i
                            : "") +
                        "        </div>\n"
                    );
                },
                2: function (e, t, n, l, o) {
                    return "display:none;";
                },
                4: function (e, t, n, l, o) {
                    var i,
                        a = null != t ? t : e.nullContext || {},
                        r =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        (null !=
                        (i = r(n, "each").call(a, null != t ? r(t, "timeSlots") : t, { name: "each", hash: {}, fn: e.program(5, o, 0), inverse: e.noop, data: o, loc: { start: { line: 5, column: 12 }, end: { line: 9, column: 23 } } }))
                            ? i
                            : "") +
                        (null !=
                        (i = r(n, "if").call(a, (i = o && r(o, "root")) && r(i, "showHourMarker"), {
                            name: "if",
                            hash: {},
                            fn: e.program(8, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 10, column: 12 }, end: { line: 14, column: 19 } },
                        }))
                            ? i
                            : "")
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 6, column: 28 }, end: { line: 6, column: 42 } } })
                                : a
                        ) +
                        'timegrid-hour" style="height: ' +
                        u(e.lambda((i = (i = o && d(o, "root")) && d(i, "styles")) && d(i, "oneHourHeight"), t)) +
                        "; color: " +
                        u(
                            typeof (a = null != (a = d(n, "color") || (null != t ? d(t, "color") : t)) ? a : s) === c
                                ? a.call(r, { name: "color", hash: {}, data: o, loc: { start: { line: 6, column: 111 }, end: { line: 6, column: 120 } } })
                                : a
                        ) +
                        "; font-weight: " +
                        u(
                            typeof (a = null != (a = d(n, "fontWeight") || (null != t ? d(t, "fontWeight") : t)) ? a : s) === c
                                ? a.call(r, { name: "fontWeight", hash: {}, data: o, loc: { start: { line: 6, column: 135 }, end: { line: 6, column: 149 } } })
                                : a
                        ) +
                        ';">\n                    <span style="' +
                        (null != (i = d(n, "if").call(r, null != t ? d(t, "hidden") : t, { name: "if", hash: {}, fn: e.program(6, o, 0), inverse: e.noop, data: o, loc: { start: { line: 7, column: 33 }, end: { line: 7, column: 66 } } }))
                            ? i
                            : "") +
                        '">' +
                        (null !=
                        (i = (d(n, "timegridDisplayPrimayTime-tmpl") || (t && d(t, "timegridDisplayPrimayTime-tmpl")) || s).call(r, t, {
                            name: "timegridDisplayPrimayTime-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 7, column: 68 }, end: { line: 7, column: 109 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n                </div>\n"
                    );
                },
                6: function (e, t, n, l, o) {
                    return "display:none";
                },
                8: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 11, column: 28 }, end: { line: 11, column: 42 } } })
                                : a
                        ) +
                        'timegrid-hourmarker" style="top:' +
                        u(d((i = o && h(o, "root")) && h(i, "hourmarkerTop"), t)) +
                        "%; margin-top: calc(6px - " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "halfHourHeight"), t)) +
                        "); height: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "halfHourHeight"), t)) +
                        ';">\n                    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 32 }, end: { line: 12, column: 46 } } })
                                : a
                        ) +
                        'timegrid-hourmarker-time" style="color: ' +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "currentTimeColor"), t)) +
                        "; font-size: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "currentTimeFontSize"), t)) +
                        "; font-weight: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "currentTimeFontWeight"), t)) +
                        '">' +
                        (null !=
                        (i = (h(n, "timegridCurrentTime-tmpl") || (t && h(t, "timegridCurrentTime-tmpl")) || s).call(r, t, {
                            name: "timegridCurrentTime-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 12, column: 223 }, end: { line: 12, column: 258 } },
                        }))
                            ? i
                            : "") +
                        "</div>\n                </div>\n"
                    );
                },
                10: function (e, t, n, l, o) {
                    var i,
                        a = null != t ? t : e.nullContext || {},
                        r =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        (null !=
                        (i = r(n, "each").call(a, null != t ? r(t, "timeSlots") : t, { name: "each", hash: {}, fn: e.program(11, o, 0), inverse: e.noop, data: o, loc: { start: { line: 16, column: 12 }, end: { line: 20, column: 23 } } }))
                            ? i
                            : "") +
                        (null !=
                        (i = r(n, "if").call(a, (i = o && r(o, "root")) && r(i, "showHourMarker"), {
                            name: "if",
                            hash: {},
                            fn: e.program(13, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 21, column: 12 }, end: { line: 25, column: 19 } },
                        }))
                            ? i
                            : "")
                    );
                },
                11: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 17, column: 28 }, end: { line: 17, column: 42 } } })
                                : a
                        ) +
                        'timegrid-hour" style="height: ' +
                        u(e.lambda((i = (i = o && d(o, "root")) && d(i, "styles")) && d(i, "oneHourHeight"), t)) +
                        "; color: " +
                        u(
                            typeof (a = null != (a = d(n, "color") || (null != t ? d(t, "color") : t)) ? a : s) === c
                                ? a.call(r, { name: "color", hash: {}, data: o, loc: { start: { line: 17, column: 111 }, end: { line: 17, column: 120 } } })
                                : a
                        ) +
                        "; font-weight: " +
                        u(
                            typeof (a = null != (a = d(n, "fontWeight") || (null != t ? d(t, "fontWeight") : t)) ? a : s) === c
                                ? a.call(r, { name: "fontWeight", hash: {}, data: o, loc: { start: { line: 17, column: 135 }, end: { line: 17, column: 149 } } })
                                : a
                        ) +
                        ';">\n                    <span style="' +
                        (null != (i = d(n, "if").call(r, null != t ? d(t, "hidden") : t, { name: "if", hash: {}, fn: e.program(6, o, 0), inverse: e.noop, data: o, loc: { start: { line: 18, column: 33 }, end: { line: 18, column: 66 } } }))
                            ? i
                            : "") +
                        '">' +
                        (null !=
                        (i = (d(n, "timegridDisplayTime-tmpl") || (t && d(t, "timegridDisplayTime-tmpl")) || s).call(r, t, {
                            name: "timegridDisplayTime-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 18, column: 68 }, end: { line: 18, column: 103 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n                </div>\n"
                    );
                },
                13: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 22, column: 28 }, end: { line: 22, column: 42 } } })
                                : a
                        ) +
                        'timegrid-hourmarker" style="top:' +
                        u(d((i = o && h(o, "root")) && h(i, "hourmarkerTop"), t)) +
                        "%; margin-top: calc(6px - " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "halfHourHeight"), t)) +
                        "); height: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "halfHourHeight"), t)) +
                        ';">\n                    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 23, column: 32 }, end: { line: 23, column: 46 } } })
                                : a
                        ) +
                        'timegrid-hourmarker-time" style="color: ' +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "currentTimeColor"), t)) +
                        "; font-size: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "currentTimeFontSize"), t)) +
                        ';">' +
                        (null !=
                        (i = (h(n, "timegridCurrentTime-tmpl") || (t && h(t, "timegridCurrentTime-tmpl")) || s).call(r, t, {
                            name: "timegridCurrentTime-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 23, column: 171 }, end: { line: 23, column: 206 } },
                        }))
                            ? i
                            : "") +
                        "</div>\n                </div>\n"
                    );
                },
                15: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 33, column: 20 }, end: { line: 33, column: 34 } } })
                                : a
                        ) +
                        'timegrid-gridline" style="height: ' +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "oneHourHeight"), t)) +
                        ";\n" +
                        (null != (i = h(n, "unless").call(r, o && h(o, "last"), { name: "unless", hash: {}, fn: e.program(16, o, 0), inverse: e.noop, data: o, loc: { start: { line: 34, column: 12 }, end: { line: 36, column: 23 } } }))
                            ? i
                            : "") +
                        '        ">\n            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 38, column: 24 }, end: { line: 38, column: 38 } } })
                                : a
                        ) +
                        'timegrid-gridline-half" style="height: ' +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "halfHourHeight"), t)) +
                        "; border-bottom: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "halfHourBorderBottom"), t)) +
                        ';"></div>\n        </div>\n'
                    );
                },
                16: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "            border-bottom: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "borderBottom"), t)) + ";\n";
                },
                18: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 47, column: 16 }, end: { line: 47, column: 30 } } })
                                : a
                        ) +
                        'timegrid-hourmarker" style="top:' +
                        u(
                            typeof (a = null != (a = h(n, "hourmarkerTop") || (null != t ? h(t, "hourmarkerTop") : t)) ? a : s) === c
                                ? a.call(r, { name: "hourmarkerTop", hash: {}, data: o, loc: { start: { line: 47, column: 62 }, end: { line: 47, column: 79 } } })
                                : a
                        ) +
                        '%">\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 48, column: 20 }, end: { line: 48, column: 34 } } })
                                : a
                        ) +
                        'timegrid-hourmarker-line-left" style="width:' +
                        u(
                            typeof (a = null != (a = h(n, "todaymarkerLeft") || (null != t ? h(t, "todaymarkerLeft") : t)) ? a : s) === c
                                ? a.call(r, { name: "todaymarkerLeft", hash: {}, data: o, loc: { start: { line: 48, column: 78 }, end: { line: 48, column: 97 } } })
                                : a
                        ) +
                        "%; border-top: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "currentTimeLeftBorderTop") : i, t)) +
                        ';"></div>\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 49, column: 20 }, end: { line: 49, column: 34 } } })
                                : a
                        ) +
                        'timegrid-todaymarker" style="left:' +
                        u(
                            typeof (a = null != (a = h(n, "todaymarkerLeft") || (null != t ? h(t, "todaymarkerLeft") : t)) ? a : s) === c
                                ? a.call(r, { name: "todaymarkerLeft", hash: {}, data: o, loc: { start: { line: 49, column: 68 }, end: { line: 49, column: 87 } } })
                                : a
                        ) +
                        "%; background-color: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "currentTimeBulletBackgroundColor") : i, t)) +
                        '; ">today</div>\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 50, column: 20 }, end: { line: 50, column: 34 } } })
                                : a
                        ) +
                        'timegrid-hourmarker-line-today" style="left:' +
                        u(
                            typeof (a = null != (a = h(n, "todaymarkerLeft") || (null != t ? h(t, "todaymarkerLeft") : t)) ? a : s) === c
                                ? a.call(r, { name: "todaymarkerLeft", hash: {}, data: o, loc: { start: { line: 50, column: 78 }, end: { line: 50, column: 97 } } })
                                : a
                        ) +
                        "%; width: " +
                        u(
                            typeof (a = null != (a = h(n, "todaymarkerWidth") || (null != t ? h(t, "todaymarkerWidth") : t)) ? a : s) === c
                                ? a.call(r, { name: "todaymarkerWidth", hash: {}, data: o, loc: { start: { line: 50, column: 107 }, end: { line: 50, column: 127 } } })
                                : a
                        ) +
                        "%; border-top: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "currentTimeTodayBorderTop") : i, t)) +
                        ';"></div>\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 51, column: 20 }, end: { line: 51, column: 34 } } })
                                : a
                        ) +
                        'timegrid-hourmarker-line-right" style="left:' +
                        u(
                            typeof (a = null != (a = h(n, "todaymarkerRight") || (null != t ? h(t, "todaymarkerRight") : t)) ? a : s) === c
                                ? a.call(r, { name: "todaymarkerRight", hash: {}, data: o, loc: { start: { line: 51, column: 78 }, end: { line: 51, column: 98 } } })
                                : a
                        ) +
                        "%; border-top: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "currentTimeRightBorderTop") : i, t)) +
                        ';"></div>\n    </div>\n'
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        'timegrid-left" style="width: ' +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "leftWidth") : i, t)) +
                        "; font-size: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "leftFontSize") : i, t)) +
                        ';">\n' +
                        (null !=
                        (i = h(n, "each").call(r, null != t ? h(t, "timezones") : t, { name: "each", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 2, column: 4 }, end: { line: 28, column: 15 } } }))
                            ? i
                            : "") +
                        '</div>\n<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 30, column: 12 }, end: { line: 30, column: 26 } } })
                                : a
                        ) +
                        'timegrid-right" style="margin-left: ' +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "leftWidth"), t)) +
                        ';">\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 31, column: 16 }, end: { line: 31, column: 30 } } })
                                : a
                        ) +
                        'timegrid-h-grid">\n' +
                        (null !=
                        (i = h(n, "each").call(r, null != t ? h(t, "hoursLabels") : t, { name: "each", hash: {}, fn: e.program(15, o, 0), inverse: e.noop, data: o, loc: { start: { line: 32, column: 8 }, end: { line: 40, column: 19 } } }))
                            ? i
                            : "") +
                        '</div>\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 42, column: 16 }, end: { line: 42, column: 30 } } })
                                : a
                        ) +
                        'timegrid-schedules">\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 43, column: 20 }, end: { line: 43, column: 34 } } })
                                : a
                        ) +
                        'timegrid-schedules-container"></div>\n    </div>\n\n' +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "showHourMarker") : t, { name: "if", hash: {}, fn: e.program(18, o, 0), inverse: e.noop, data: o, loc: { start: { line: 46, column: 4 }, end: { line: 53, column: 11 } } }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 2, column: 12 }, end: { line: 2, column: 26 } } })
                                : a
                        ) +
                        'timegrid-timezone-label-container" style="' +
                        (null != (i = h(n, "if").call(r, null != t ? h(t, "hidden") : t, { name: "if", hash: {}, fn: e.program(2, o, 0), inverse: e.noop, data: o, loc: { start: { line: 2, column: 68 }, end: { line: 2, column: 102 } } }))
                            ? i
                            : "") +
                        "background-color: " +
                        u(
                            typeof (a = null != (a = h(n, "backgroundColor") || (null != t ? h(t, "backgroundColor") : t)) ? a : s) === c
                                ? a.call(r, { name: "backgroundColor", hash: {}, data: o, loc: { start: { line: 2, column: 120 }, end: { line: 2, column: 139 } } })
                                : a
                        ) +
                        "; height: 100%; width: " +
                        u(
                            typeof (a = null != (a = h(n, "width") || (null != t ? h(t, "width") : t)) ? a : s) === c
                                ? a.call(r, { name: "width", hash: {}, data: o, loc: { start: { line: 2, column: 162 }, end: { line: 2, column: 171 } } })
                                : a
                        ) +
                        "%; left: " +
                        u(
                            typeof (a = null != (a = h(n, "left") || (null != t ? h(t, "left") : t)) ? a : s) === c
                                ? a.call(r, { name: "left", hash: {}, data: o, loc: { start: { line: 2, column: 180 }, end: { line: 2, column: 188 } } })
                                : a
                        ) +
                        "%; font-size: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "leftFontSize"), t)) +
                        "; border-right: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "leftBorderRight"), t)) +
                        ';">\n    <div title="' +
                        u(
                            typeof (a = null != (a = h(n, "tooltip") || (null != t ? h(t, "tooltip") : t)) ? a : s) === c
                                ? a.call(r, { name: "tooltip", hash: {}, data: o, loc: { start: { line: 3, column: 16 }, end: { line: 3, column: 27 } } })
                                : a
                        ) +
                        '" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 36 }, end: { line: 3, column: 50 } } })
                                : a
                        ) +
                        'timegrid-timezone-label-cell" data-timezone="' +
                        u(
                            typeof (a = null != (a = h(n, "displayLabel") || (null != t ? h(t, "displayLabel") : t)) ? a : s) === c
                                ? a.call(r, { name: "displayLabel", hash: {}, data: o, loc: { start: { line: 3, column: 95 }, end: { line: 3, column: 111 } } })
                                : a
                        ) +
                        '" style="height: 100%; width: 100%;">\n' +
                        (null !=
                        (i = h(n, "if").call(
                            r,
                            (h(n, "and") || (t && h(t, "and")) || s).call(r, null != t ? h(t, "isPrimary") : t, (i = o && h(o, "root")) && h(i, "showTimezoneCollapseButton"), {
                                name: "and",
                                hash: {},
                                data: o,
                                loc: { start: { line: 4, column: 14 }, end: { line: 4, column: 62 } },
                            }),
                            { name: "if", hash: {}, fn: e.program(4, o, 0), inverse: e.noop, data: o, loc: { start: { line: 4, column: 8 }, end: { line: 10, column: 15 } } }
                        ))
                            ? i
                            : "") +
                        '        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 11, column: 20 }, end: { line: 11, column: 34 } } })
                                : a
                        ) +
                        'timegrid-timezone-label">' +
                        (null !=
                        (i = (h(n, "timezoneDisplayLabel-tmpl") || (t && h(t, "timezoneDisplayLabel-tmpl")) || s).call(r, null != t ? h(t, "timezoneOffset") : t, null != t ? h(t, "displayLabel") : t, {
                            name: "timezoneDisplayLabel-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 11, column: 59 }, end: { line: 11, column: 118 } },
                        }))
                            ? i
                            : "") +
                        "</div>\n    </div>\n</div>\n"
                    );
                },
                2: function (e, t, n, l, o) {
                    return "display:none;";
                },
                4: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 24 }, end: { line: 5, column: 38 } } })
                                : a
                        ) +
                        'timegrid-timezone-close-btn" style="border: 1px solid #ddd; top:2px; bottom: 2px; width: 10px; border-left: none;">\n                <span style="color: #777; height: calc(' +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "displayTimezoneLabelHeight"), t)) +
                        " - 6px); line-height: calc(" +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "displayTimezoneLabelHeight"), t)) +
                        ' - 6px);">\n                    <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 33 }, end: { line: 7, column: 47 } } })
                                : a
                        ) +
                        "icon " +
                        (null !=
                        (i = h(n, "if").call(r, (i = o && h(o, "root")) && h(i, "timezonesCollapsed"), {
                            name: "if",
                            hash: {},
                            fn: e.program(5, o, 0),
                            inverse: e.program(7, o, 0),
                            data: o,
                            loc: { start: { line: 7, column: 52 }, end: { line: 7, column: 154 } },
                        }))
                            ? i
                            : "") +
                        '"></span>\n                </span>\n            </div>\n'
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 84 }, end: { line: 7, column: 98 } } })
                                : i
                        ) + "ic-arrow-right"
                    );
                },
                7: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 120 }, end: { line: 7, column: 134 } } })
                                : i
                        ) + "ic-arrow-left"
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a = null != t ? t : e.nullContext || {},
                        r =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i = r(n, "each").call(
                            a,
                            (r(n, "reverse") || (t && r(t, "reverse")) || e.hooks.helperMissing).call(a, null != t ? r(t, "timezones") : t, {
                                name: "reverse",
                                hash: {},
                                data: o,
                                loc: { start: { line: 1, column: 8 }, end: { line: 1, column: 27 } },
                            }),
                            { name: "each", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 1, column: 0 }, end: { line: 14, column: 11 } } }
                        ))
                        ? i
                        : "";
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        (null !=
                        (i = (a(n, "timegridCurrentTime-tmpl") || (t && a(t, "timegridCurrentTime-tmpl")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, t, {
                            name: "timegridCurrentTime-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 35 } },
                        }))
                            ? i
                            : "") + "\n"
                    );
                },
                useData: !0,
            });
        },
        function (e, n) {
            e.exports = t;
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 150 }, end: { line: 3, column: 164 } } })
                                : i
                        ) +
                        "hide"
                    );
                },
                3: function (e, t, n, l, o) {
                    var i,
                        a = null != t ? t : e.nullContext || {},
                        r = e.hooks.helperMissing,
                        s = "function",
                        c = e.escapeExpression,
                        u =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                    <li class="' +
                        c(
                            typeof (i = null != (i = u(n, "CSS_PREFIX") || (null != t ? u(t, "CSS_PREFIX") : t)) ? i : r) === s
                                ? i.call(a, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 11, column: 31 }, end: { line: 11, column: 45 } } })
                                : i
                        ) +
                        "popup-section-item " +
                        c(
                            typeof (i = null != (i = u(n, "CSS_PREFIX") || (null != t ? u(t, "CSS_PREFIX") : t)) ? i : r) === s
                                ? i.call(a, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 11, column: 64 }, end: { line: 11, column: 78 } } })
                                : i
                        ) +
                        'dropdown-menu-item" data-calendar-id="' +
                        c(typeof (i = null != (i = u(n, "id") || (null != t ? u(t, "id") : t)) ? i : r) === s ? i.call(a, { name: "id", hash: {}, data: o, loc: { start: { line: 11, column: 116 }, end: { line: 11, column: 122 } } }) : i) +
                        '">\n                        <span class="' +
                        c(
                            typeof (i = null != (i = u(n, "CSS_PREFIX") || (null != t ? u(t, "CSS_PREFIX") : t)) ? i : r) === s
                                ? i.call(a, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 37 }, end: { line: 12, column: 51 } } })
                                : i
                        ) +
                        "icon " +
                        c(
                            typeof (i = null != (i = u(n, "CSS_PREFIX") || (null != t ? u(t, "CSS_PREFIX") : t)) ? i : r) === s
                                ? i.call(a, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 56 }, end: { line: 12, column: 70 } } })
                                : i
                        ) +
                        'calendar-dot" style="background-color: ' +
                        c(
                            typeof (i = null != (i = u(n, "bgColor") || (null != t ? u(t, "bgColor") : t)) ? i : r) === s
                                ? i.call(a, { name: "bgColor", hash: {}, data: o, loc: { start: { line: 12, column: 109 }, end: { line: 12, column: 120 } } })
                                : i
                        ) +
                        '"></span>\n                        <span class="' +
                        c(
                            typeof (i = null != (i = u(n, "CSS_PREFIX") || (null != t ? u(t, "CSS_PREFIX") : t)) ? i : r) === s
                                ? i.call(a, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 37 }, end: { line: 13, column: 51 } } })
                                : i
                        ) +
                        'content">' +
                        c(
                            typeof (i = null != (i = u(n, "name") || (null != t ? u(t, "name") : t)) ? i : r) === s
                                ? i.call(a, { name: "name", hash: {}, data: o, loc: { start: { line: 13, column: 60 }, end: { line: 13, column: 68 } } })
                                : i
                        ) +
                        "</span>\n                    </li>\n"
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 23, column: 135 }, end: { line: 23, column: 149 } } })
                                : i
                        ) +
                        "public"
                    );
                },
                7: function (e, t, n, l, o) {
                    return " checked";
                },
                9: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return e.escapeExpression(
                        "function" == typeof (i = null != (i = a(n, "state") || (null != t ? a(t, "state") : t)) ? i : e.hooks.helperMissing)
                            ? i.call(null != t ? t : e.nullContext || {}, { name: "state", hash: {}, data: o, loc: { start: { line: 54, column: 99 }, end: { line: 54, column: 108 } } })
                            : i
                    );
                },
                11: function (e, t, n, l, o) {
                    var i,
                        a,
                        r =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i =
                            "function" == typeof (a = null != (a = r(n, "popupStateBusy-tmpl") || (null != t ? r(t, "popupStateBusy-tmpl") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(null != t ? t : e.nullContext || {}, { name: "popupStateBusy-tmpl", hash: {}, data: o, loc: { start: { line: 54, column: 116 }, end: { line: 54, column: 141 } } })
                                : a)
                        ? i
                        : "";
                },
                13: function (e, t, n, l, o) {
                    var i,
                        a,
                        r =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i =
                            "function" == typeof (a = null != (a = r(n, "popupUpdate-tmpl") || (null != t ? r(t, "popupUpdate-tmpl") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(null != t ? t : e.nullContext || {}, { name: "popupUpdate-tmpl", hash: {}, data: o, loc: { start: { line: 69, column: 163 }, end: { line: 69, column: 185 } } })
                                : a)
                        ? i
                        : "";
                },
                15: function (e, t, n, l, o) {
                    var i,
                        a,
                        r =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i =
                            "function" == typeof (a = null != (a = r(n, "popupSave-tmpl") || (null != t ? r(t, "popupSave-tmpl") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(null != t ? t : e.nullContext || {}, { name: "popupSave-tmpl", hash: {}, data: o, loc: { start: { line: 69, column: 193 }, end: { line: 69, column: 213 } } })
                                : a)
                        ? i
                        : "";
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        'popup">\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 2, column: 16 }, end: { line: 2, column: 30 } } })
                                : a
                        ) +
                        'popup-container">\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 20 }, end: { line: 3, column: 34 } } })
                                : a
                        ) +
                        "popup-section " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 48 }, end: { line: 3, column: 62 } } })
                                : a
                        ) +
                        "dropdown " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 71 }, end: { line: 3, column: 85 } } })
                                : a
                        ) +
                        "close " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 91 }, end: { line: 3, column: 105 } } })
                                : a
                        ) +
                        "section-calendar" +
                        (null !=
                        (i = h(n, "unless").call(r, null != (i = null != t ? h(t, "calendars") : t) ? h(i, "length") : i, {
                            name: "unless",
                            hash: {},
                            fn: e.program(1, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 3, column: 121 }, end: { line: 3, column: 179 } },
                        }))
                            ? i
                            : "") +
                        '">\n            <button class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 4, column: 27 }, end: { line: 4, column: 41 } } })
                                : a
                        ) +
                        "button " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 4, column: 48 }, end: { line: 4, column: 62 } } })
                                : a
                        ) +
                        "dropdown-button " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 4, column: 78 }, end: { line: 4, column: 92 } } })
                                : a
                        ) +
                        'popup-section-item">\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 29 }, end: { line: 5, column: 43 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 48 }, end: { line: 5, column: 62 } } })
                                : a
                        ) +
                        'calendar-dot" style="background-color: ' +
                        u(d(null != (i = null != t ? h(t, "selectedCal") : t) ? h(i, "bgColor") : i, t)) +
                        '"></span>\n                <span id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 6, column: 26 }, end: { line: 6, column: 40 } } })
                                : a
                        ) +
                        'schedule-calendar" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 6, column: 66 }, end: { line: 6, column: 80 } } })
                                : a
                        ) +
                        'content">' +
                        u(d(null != (i = null != t ? h(t, "selectedCal") : t) ? h(i, "name") : i, t)) +
                        '</span>\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 29 }, end: { line: 7, column: 43 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 48 }, end: { line: 7, column: 62 } } })
                                : a
                        ) +
                        'dropdown-arrow"></span>\n            </button>\n            <ul class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 9, column: 23 }, end: { line: 9, column: 37 } } })
                                : a
                        ) +
                        'dropdown-menu" style="z-index: ' +
                        u(
                            typeof (a = null != (a = h(n, "zIndex") || (null != t ? h(t, "zIndex") : t)) ? a : s) === c
                                ? a.call(r, { name: "zIndex", hash: {}, data: o, loc: { start: { line: 9, column: 68 }, end: { line: 9, column: 78 } } })
                                : a
                        ) +
                        '">\n' +
                        (null !=
                        (i = h(n, "each").call(r, null != t ? h(t, "calendars") : t, { name: "each", hash: {}, fn: e.program(3, o, 0), inverse: e.noop, data: o, loc: { start: { line: 10, column: 16 }, end: { line: 15, column: 25 } } }))
                            ? i
                            : "") +
                        '            </ul>\n        </div>\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 18, column: 20 }, end: { line: 18, column: 34 } } })
                                : a
                        ) +
                        'popup-section">\n            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 19, column: 24 }, end: { line: 19, column: 38 } } })
                                : a
                        ) +
                        "popup-section-item " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 19, column: 57 }, end: { line: 19, column: 71 } } })
                                : a
                        ) +
                        'section-title">\n            <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 20, column: 25 }, end: { line: 20, column: 39 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 20, column: 44 }, end: { line: 20, column: 58 } } })
                                : a
                        ) +
                        'ic-title"></span>\n                <input id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 21, column: 27 }, end: { line: 21, column: 41 } } })
                                : a
                        ) +
                        'schedule-title" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 21, column: 64 }, end: { line: 21, column: 78 } } })
                                : a
                        ) +
                        'content" placeholder="' +
                        u(
                            typeof (a = null != (a = h(n, "titlePlaceholder-tmpl") || (null != t ? h(t, "titlePlaceholder-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "titlePlaceholder-tmpl", hash: {}, data: o, loc: { start: { line: 21, column: 100 }, end: { line: 21, column: 125 } } })
                                : a
                        ) +
                        '" value="' +
                        u(
                            typeof (a = null != (a = h(n, "title") || (null != t ? h(t, "title") : t)) ? a : s) === c
                                ? a.call(r, { name: "title", hash: {}, data: o, loc: { start: { line: 21, column: 134 }, end: { line: 21, column: 143 } } })
                                : a
                        ) +
                        '">\n            </div>\n            <button id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 23, column: 24 }, end: { line: 23, column: 38 } } })
                                : a
                        ) +
                        'schedule-private" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 23, column: 63 }, end: { line: 23, column: 77 } } })
                                : a
                        ) +
                        "button " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 23, column: 84 }, end: { line: 23, column: 98 } } })
                                : a
                        ) +
                        "section-private" +
                        (null !=
                        (i = h(n, "unless").call(r, null != t ? h(t, "isPrivate") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(5, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 23, column: 113 }, end: { line: 23, column: 166 } },
                        }))
                            ? i
                            : "") +
                        '">\n            <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 24, column: 25 }, end: { line: 24, column: 39 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 24, column: 44 }, end: { line: 24, column: 58 } } })
                                : a
                        ) +
                        'ic-private"></span>\n            </button>\n        </div>\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 27, column: 20 }, end: { line: 27, column: 34 } } })
                                : a
                        ) +
                        'popup-section">\n            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 28, column: 24 }, end: { line: 28, column: 38 } } })
                                : a
                        ) +
                        "popup-section-item " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 28, column: 57 }, end: { line: 28, column: 71 } } })
                                : a
                        ) +
                        'section-location">\n            <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 29, column: 25 }, end: { line: 29, column: 39 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 29, column: 44 }, end: { line: 29, column: 58 } } })
                                : a
                        ) +
                        'ic-location"></span>\n                <input id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 30, column: 27 }, end: { line: 30, column: 41 } } })
                                : a
                        ) +
                        'schedule-location" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 30, column: 67 }, end: { line: 30, column: 81 } } })
                                : a
                        ) +
                        'content" placeholder="' +
                        u(
                            typeof (a = null != (a = h(n, "locationPlaceholder-tmpl") || (null != t ? h(t, "locationPlaceholder-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "locationPlaceholder-tmpl", hash: {}, data: o, loc: { start: { line: 30, column: 103 }, end: { line: 30, column: 131 } } })
                                : a
                        ) +
                        '" value="' +
                        u(
                            typeof (a = null != (a = h(n, "location") || (null != t ? h(t, "location") : t)) ? a : s) === c
                                ? a.call(r, { name: "location", hash: {}, data: o, loc: { start: { line: 30, column: 140 }, end: { line: 30, column: 152 } } })
                                : a
                        ) +
                        '">\n            </div>\n        </div>\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 33, column: 20 }, end: { line: 33, column: 34 } } })
                                : a
                        ) +
                        'popup-section">\n            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 34, column: 24 }, end: { line: 34, column: 38 } } })
                                : a
                        ) +
                        "popup-section-item " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 34, column: 57 }, end: { line: 34, column: 71 } } })
                                : a
                        ) +
                        'section-start-date">\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 35, column: 29 }, end: { line: 35, column: 43 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 35, column: 48 }, end: { line: 35, column: 62 } } })
                                : a
                        ) +
                        'ic-date"></span>\n                <input id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 36, column: 27 }, end: { line: 36, column: 41 } } })
                                : a
                        ) +
                        'schedule-start-date" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 36, column: 69 }, end: { line: 36, column: 83 } } })
                                : a
                        ) +
                        'content" placeholder="' +
                        u(
                            typeof (a = null != (a = h(n, "startDatePlaceholder-tmpl") || (null != t ? h(t, "startDatePlaceholder-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "startDatePlaceholder-tmpl", hash: {}, data: o, loc: { start: { line: 36, column: 105 }, end: { line: 36, column: 134 } } })
                                : a
                        ) +
                        '">\n                <div id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 37, column: 25 }, end: { line: 37, column: 39 } } })
                                : a
                        ) +
                        'startpicker-container" style="margin-left: -1px; position: relative"></div>\n            </div>\n            <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 39, column: 25 }, end: { line: 39, column: 39 } } })
                                : a
                        ) +
                        'section-date-dash">-</span>\n            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 40, column: 24 }, end: { line: 40, column: 38 } } })
                                : a
                        ) +
                        "popup-section-item " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 40, column: 57 }, end: { line: 40, column: 71 } } })
                                : a
                        ) +
                        'section-end-date">\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 41, column: 29 }, end: { line: 41, column: 43 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 41, column: 48 }, end: { line: 41, column: 62 } } })
                                : a
                        ) +
                        'ic-date"></span>\n                <input id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 42, column: 27 }, end: { line: 42, column: 41 } } })
                                : a
                        ) +
                        'schedule-end-date" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 42, column: 67 }, end: { line: 42, column: 81 } } })
                                : a
                        ) +
                        'content" placeholder="' +
                        u(
                            typeof (a = null != (a = h(n, "endDatePlaceholder-tmpl") || (null != t ? h(t, "endDatePlaceholder-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "endDatePlaceholder-tmpl", hash: {}, data: o, loc: { start: { line: 42, column: 103 }, end: { line: 42, column: 130 } } })
                                : a
                        ) +
                        '">\n                <div id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 43, column: 25 }, end: { line: 43, column: 39 } } })
                                : a
                        ) +
                        'endpicker-container" style="margin-left: -1px; position: relative"></div>\n            </div>\n            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 45, column: 24 }, end: { line: 45, column: 38 } } })
                                : a
                        ) +
                        "popup-section-item " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 45, column: 57 }, end: { line: 45, column: 71 } } })
                                : a
                        ) +
                        'section-allday">\n                <input id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 46, column: 27 }, end: { line: 46, column: 41 } } })
                                : a
                        ) +
                        'schedule-allday" type="checkbox" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 46, column: 81 }, end: { line: 46, column: 95 } } })
                                : a
                        ) +
                        'checkbox-square"' +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "isAllDay") : t, { name: "if", hash: {}, fn: e.program(7, o, 0), inverse: e.noop, data: o, loc: { start: { line: 46, column: 111 }, end: { line: 46, column: 142 } } }))
                            ? i
                            : "") +
                        '>\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 47, column: 29 }, end: { line: 47, column: 43 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 47, column: 48 }, end: { line: 47, column: 62 } } })
                                : a
                        ) +
                        'ic-checkbox"></span>\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 48, column: 29 }, end: { line: 48, column: 43 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i =
                            typeof (a = null != (a = h(n, "popupIsAllDay-tmpl") || (null != t ? h(t, "popupIsAllDay-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "popupIsAllDay-tmpl", hash: {}, data: o, loc: { start: { line: 48, column: 52 }, end: { line: 48, column: 76 } } })
                                : a)
                            ? i
                            : "") +
                        '</span>\n            </div>\n        </div>\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 51, column: 20 }, end: { line: 51, column: 34 } } })
                                : a
                        ) +
                        "popup-section " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 51, column: 48 }, end: { line: 51, column: 62 } } })
                                : a
                        ) +
                        "dropdown " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 51, column: 71 }, end: { line: 51, column: 85 } } })
                                : a
                        ) +
                        "close " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 51, column: 91 }, end: { line: 51, column: 105 } } })
                                : a
                        ) +
                        'section-state">\n            <button class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 52, column: 27 }, end: { line: 52, column: 41 } } })
                                : a
                        ) +
                        "button " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 52, column: 48 }, end: { line: 52, column: 62 } } })
                                : a
                        ) +
                        "dropdown-button " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 52, column: 78 }, end: { line: 52, column: 92 } } })
                                : a
                        ) +
                        'popup-section-item">\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 53, column: 29 }, end: { line: 53, column: 43 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 53, column: 48 }, end: { line: 53, column: 62 } } })
                                : a
                        ) +
                        'ic-state"></span>\n                <span id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 54, column: 26 }, end: { line: 54, column: 40 } } })
                                : a
                        ) +
                        'schedule-state" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 54, column: 63 }, end: { line: 54, column: 77 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "state") : t, {
                            name: "if",
                            hash: {},
                            fn: e.program(9, o, 0),
                            inverse: e.program(11, o, 0),
                            data: o,
                            loc: { start: { line: 54, column: 86 }, end: { line: 54, column: 148 } },
                        }))
                            ? i
                            : "") +
                        '</span>\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 55, column: 29 }, end: { line: 55, column: 43 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 55, column: 48 }, end: { line: 55, column: 62 } } })
                                : a
                        ) +
                        'dropdown-arrow"></span>\n            </button>\n            <ul class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 57, column: 23 }, end: { line: 57, column: 37 } } })
                                : a
                        ) +
                        'dropdown-menu" style="z-index: ' +
                        u(
                            typeof (a = null != (a = h(n, "zIndex") || (null != t ? h(t, "zIndex") : t)) ? a : s) === c
                                ? a.call(r, { name: "zIndex", hash: {}, data: o, loc: { start: { line: 57, column: 68 }, end: { line: 57, column: 78 } } })
                                : a
                        ) +
                        '">\n                <li class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 58, column: 27 }, end: { line: 58, column: 41 } } })
                                : a
                        ) +
                        "popup-section-item " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 58, column: 60 }, end: { line: 58, column: 74 } } })
                                : a
                        ) +
                        'dropdown-menu-item">\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 59, column: 29 }, end: { line: 59, column: 43 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 59, column: 48 }, end: { line: 59, column: 62 } } })
                                : a
                        ) +
                        'none"></span>\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 60, column: 29 }, end: { line: 60, column: 43 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i =
                            typeof (a = null != (a = h(n, "popupStateBusy-tmpl") || (null != t ? h(t, "popupStateBusy-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "popupStateBusy-tmpl", hash: {}, data: o, loc: { start: { line: 60, column: 52 }, end: { line: 60, column: 77 } } })
                                : a)
                            ? i
                            : "") +
                        '</span>\n                </li>\n                <li class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 62, column: 27 }, end: { line: 62, column: 41 } } })
                                : a
                        ) +
                        "popup-section-item " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 62, column: 60 }, end: { line: 62, column: 74 } } })
                                : a
                        ) +
                        'dropdown-menu-item">\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 63, column: 29 }, end: { line: 63, column: 43 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 63, column: 48 }, end: { line: 63, column: 62 } } })
                                : a
                        ) +
                        'none"></span>\n                <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 64, column: 29 }, end: { line: 64, column: 43 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i =
                            typeof (a = null != (a = h(n, "popupStateFree-tmpl") || (null != t ? h(t, "popupStateFree-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "popupStateFree-tmpl", hash: {}, data: o, loc: { start: { line: 64, column: 52 }, end: { line: 64, column: 77 } } })
                                : a)
                            ? i
                            : "") +
                        '</span>\n                </li>\n            </ul>\n        </div>\n        <button class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 68, column: 23 }, end: { line: 68, column: 37 } } })
                                : a
                        ) +
                        "button " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 68, column: 44 }, end: { line: 68, column: 58 } } })
                                : a
                        ) +
                        'popup-close"><span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 68, column: 84 }, end: { line: 68, column: 98 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 68, column: 103 }, end: { line: 68, column: 117 } } })
                                : a
                        ) +
                        'ic-close"></span></button>\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 69, column: 20 }, end: { line: 69, column: 34 } } })
                                : a
                        ) +
                        'section-button-save"><button class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 69, column: 70 }, end: { line: 69, column: 84 } } })
                                : a
                        ) +
                        "button " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 69, column: 91 }, end: { line: 69, column: 105 } } })
                                : a
                        ) +
                        "confirm " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 69, column: 113 }, end: { line: 69, column: 127 } } })
                                : a
                        ) +
                        'popup-save"><span>' +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "isEditMode") : t, {
                            name: "if",
                            hash: {},
                            fn: e.program(13, o, 0),
                            inverse: e.program(15, o, 0),
                            data: o,
                            loc: { start: { line: 69, column: 145 }, end: { line: 69, column: 220 } },
                        }))
                            ? i
                            : "") +
                        '</span></button></div>\n    </div>\n    <div id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 71, column: 13 }, end: { line: 71, column: 27 } } })
                                : a
                        ) +
                        'popup-arrow" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 71, column: 47 }, end: { line: 71, column: 61 } } })
                                : a
                        ) +
                        "popup-arrow " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 71, column: 73 }, end: { line: 71, column: 87 } } })
                                : a
                        ) +
                        'arrow-bottom">\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 72, column: 20 }, end: { line: 72, column: 34 } } })
                                : a
                        ) +
                        'popup-arrow-border">\n            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 73, column: 24 }, end: { line: 73, column: 38 } } })
                                : a
                        ) +
                        'popup-arrow-fill"></div>\n        </div>\n    </div>\n</div>\n'
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 11, column: 45 }, end: { line: 11, column: 59 } } })
                                : a
                        ) +
                        'popup-detail-item"><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 11, column: 91 }, end: { line: 11, column: 105 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 11, column: 110 }, end: { line: 11, column: 124 } } })
                                : a
                        ) +
                        'ic-user-b" ></span><span style="padding-left:18px;" class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 11, column: 159 }, end: { line: 11, column: 173 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i = (d(n, "popupDetailLocation-tmpl") || (t && d(t, "popupDetailLocation-tmpl")) || s).call(r, null != t ? d(t, "schedule") : t, {
                            name: "popupDetailLocation-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 11, column: 182 }, end: { line: 11, column: 221 } },
                        }))
                            ? i
                            : "") +
                        "</span></div>"
                    );
                },
                3: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 51 }, end: { line: 12, column: 65 } } })
                                : a
                        ) +
                        'popup-detail-item"><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 97 }, end: { line: 12, column: 111 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 116 }, end: { line: 12, column: 130 } } })
                                : a
                        ) +
                        'ic-repeat-b"></span><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 163 }, end: { line: 12, column: 177 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i = (d(n, "popupDetailRepeat-tmpl") || (t && d(t, "popupDetailRepeat-tmpl")) || s).call(r, null != t ? d(t, "schedule") : t, {
                            name: "popupDetailRepeat-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 12, column: 186 }, end: { line: 12, column: 223 } },
                        }))
                            ? i
                            : "") +
                        "</span></div>"
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 46 }, end: { line: 13, column: 60 } } })
                                : a
                        ) +
                        "popup-detail-item " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 78 }, end: { line: 13, column: 92 } } })
                                : a
                        ) +
                        'popup-detail-item-indent"><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 131 }, end: { line: 13, column: 145 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 150 }, end: { line: 13, column: 164 } } })
                                : a
                        ) +
                        'ic-user-b"></span><span style="padding-left:10px;" class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 195 }, end: { line: 13, column: 209 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i = (d(n, "popupDetailUser-tmpl") || (t && d(t, "popupDetailUser-tmpl")) || s).call(r, null != t ? d(t, "schedule") : t, {
                            name: "popupDetailUser-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 13, column: 218 }, end: { line: 13, column: 253 } },
                        }))
                            ? i
                            : "") +
                        "</span></div>"
                    );
                },
                7: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 14, column: 42 }, end: { line: 14, column: 56 } } })
                                : a
                        ) +
                        'popup-detail-item"><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 14, column: 88 }, end: { line: 14, column: 102 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 14, column: 107 }, end: { line: 14, column: 121 } } })
                                : a
                        ) +
                        'ic-state-bs"></span><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 14, column: 153 }, end: { line: 14, column: 167 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i = (d(n, "popupDetailState-tmpl") || (t && d(t, "popupDetailState-tmpl")) || s).call(r, null != t ? d(t, "schedule") : t, {
                            name: "popupDetailState-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 14, column: 176 }, end: { line: 14, column: 212 } },
                        }))
                            ? i
                            : "") +
                        "</span></div>"
                    );
                },
                9: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 16, column: 20 }, end: { line: 16, column: 34 } } })
                                : a
                        ) +
                        'popup-detail-item"><span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 16, column: 66 }, end: { line: 16, column: 80 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 16, column: 85 }, end: { line: 16, column: 99 } } })
                                : a
                        ) +
                        'calendar-dot" style="background-color: ' +
                        u(d(null != (i = null != t ? h(t, "schedule") : t) ? h(i, "bgColor") : i, t)) +
                        '"></span><span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 16, column: 180 }, end: { line: 16, column: 194 } } })
                                : a
                        ) +
                        'content">' +
                        u(d(null != (i = null != t ? h(t, "calendar") : t) ? h(i, "name") : i, t)) +
                        "</span></div>\n"
                    );
                },
                11: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 18, column: 41 }, end: { line: 18, column: 55 } } })
                                : a
                        ) +
                        "popup-detail-item " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 18, column: 73 }, end: { line: 18, column: 87 } } })
                                : a
                        ) +
                        'popup-detail-item-separate"><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 18, column: 128 }, end: { line: 18, column: 142 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i = (d(n, "popupDetailBody-tmpl") || (t && d(t, "popupDetailBody-tmpl")) || s).call(r, null != t ? d(t, "schedule") : t, {
                            name: "popupDetailBody-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 18, column: 151 }, end: { line: 18, column: 186 } },
                        }))
                            ? i
                            : "") +
                        "</span></div>"
                    );
                },
                13: function (e, t, n, l, o) {
                    return "";
                },
                15: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '    <div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 22, column: 16 }, end: { line: 22, column: 30 } } })
                                : a
                        ) +
                        'section-button">\n      <button class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 23, column: 21 }, end: { line: 23, column: 35 } } })
                                : a
                        ) +
                        'popup-edit"><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 23, column: 60 }, end: { line: 23, column: 74 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 23, column: 79 }, end: { line: 23, column: 93 } } })
                                : a
                        ) +
                        'ic-edit"></span><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 23, column: 122 }, end: { line: 23, column: 136 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i =
                            typeof (a = null != (a = d(n, "popupEdit-tmpl") || (null != t ? d(t, "popupEdit-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "popupEdit-tmpl", hash: {}, data: o, loc: { start: { line: 23, column: 145 }, end: { line: 23, column: 165 } } })
                                : a)
                            ? i
                            : "") +
                        '</span></button>\n      <div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 24, column: 18 }, end: { line: 24, column: 32 } } })
                                : a
                        ) +
                        'popup-vertical-line"></div>\n      <button class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 25, column: 21 }, end: { line: 25, column: 35 } } })
                                : a
                        ) +
                        'popup-delete"><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 25, column: 62 }, end: { line: 25, column: 76 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 25, column: 81 }, end: { line: 25, column: 95 } } })
                                : a
                        ) +
                        'ic-delete"></span><span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 25, column: 126 }, end: { line: 25, column: 140 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i =
                            typeof (a = null != (a = d(n, "popupDelete-tmpl") || (null != t ? d(t, "popupDelete-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "popupDelete-tmpl", hash: {}, data: o, loc: { start: { line: 25, column: 149 }, end: { line: 25, column: 171 } } })
                                : a)
                            ? i
                            : "") +
                        "</span></button>\n    </div>\n"
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        "popup " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 32 }, end: { line: 1, column: 46 } } })
                                : a
                        ) +
                        'popup-detail">\n  <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 2, column: 14 }, end: { line: 2, column: 28 } } })
                                : a
                        ) +
                        'popup-container">\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 16 }, end: { line: 3, column: 30 } } })
                                : a
                        ) +
                        "popup-section " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 44 }, end: { line: 3, column: 58 } } })
                                : a
                        ) +
                        'section-header">\n      <div>\n        <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 21 }, end: { line: 5, column: 35 } } })
                                : a
                        ) +
                        "schedule-private " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 52 }, end: { line: 5, column: 66 } } })
                                : a
                        ) +
                        "icon " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 71 }, end: { line: 5, column: 85 } } })
                                : a
                        ) +
                        'ic-private"></span>\n        <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 6, column: 21 }, end: { line: 6, column: 35 } } })
                                : a
                        ) +
                        'schedule-title">' +
                        u(d(null != (i = null != t ? h(t, "schedule") : t) ? h(i, "title") : i, t)) +
                        '</span>\n      </div>\n      <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 8, column: 18 }, end: { line: 8, column: 32 } } })
                                : a
                        ) +
                        "popup-detail-date " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 8, column: 50 }, end: { line: 8, column: 64 } } })
                                : a
                        ) +
                        'content">' +
                        (null !=
                        (i = (h(n, "popupDetailDate-tmpl") || (t && h(t, "popupDetailDate-tmpl")) || s).call(
                            r,
                            null != (i = null != t ? h(t, "schedule") : t) ? h(i, "isAllDay") : i,
                            null != (i = null != t ? h(t, "schedule") : t) ? h(i, "start") : i,
                            null != (i = null != t ? h(t, "schedule") : t) ? h(i, "end") : i,
                            { name: "popupDetailDate-tmpl", hash: {}, data: o, loc: { start: { line: 8, column: 73 }, end: { line: 8, column: 145 } } }
                        ))
                            ? i
                            : "") +
                        '</div>\n    </div>\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 10, column: 16 }, end: { line: 10, column: 30 } } })
                                : a
                        ) +
                        'section-detail">\n        ' +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "schedule") : t) ? h(i, "location") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(1, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 11, column: 8 }, end: { line: 11, column: 241 } },
                        }))
                            ? i
                            : "") +
                        "\n        " +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "schedule") : t) ? h(i, "recurrenceRule") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(3, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 12, column: 8 }, end: { line: 12, column: 243 } },
                        }))
                            ? i
                            : "") +
                        "\n        " +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "schedule") : t) ? h(i, "attendees") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(5, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 13, column: 8 }, end: { line: 13, column: 273 } },
                        }))
                            ? i
                            : "") +
                        "\n        " +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "schedule") : t) ? h(i, "state") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(7, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 14, column: 8 }, end: { line: 14, column: 232 } },
                        }))
                            ? i
                            : "") +
                        "\n" +
                        (null != (i = h(n, "if").call(r, null != t ? h(t, "calendar") : t, { name: "if", hash: {}, fn: e.program(9, o, 0), inverse: e.noop, data: o, loc: { start: { line: 15, column: 8 }, end: { line: 17, column: 15 } } }))
                            ? i
                            : "") +
                        "        " +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "schedule") : t) ? h(i, "body") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(11, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 18, column: 8 }, end: { line: 18, column: 206 } },
                        }))
                            ? i
                            : "") +
                        "\n    </div>\n" +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "schedule") : t) ? h(i, "isReadOnly") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(13, o, 0),
                            inverse: e.program(15, o, 0),
                            data: o,
                            loc: { start: { line: 20, column: 4 }, end: { line: 27, column: 11 } },
                        }))
                            ? i
                            : "") +
                        '  </div>\n  <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 29, column: 14 }, end: { line: 29, column: 28 } } })
                                : a
                        ) +
                        'popup-top-line" style="background-color: ' +
                        u(d(null != (i = null != t ? h(t, "schedule") : t) ? h(i, "bgColor") : i, t)) +
                        '"></div>\n  <div id="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 30, column: 11 }, end: { line: 30, column: 25 } } })
                                : a
                        ) +
                        'popup-arrow" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 30, column: 45 }, end: { line: 30, column: 59 } } })
                                : a
                        ) +
                        "popup-arrow " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 30, column: 71 }, end: { line: 30, column: 85 } } })
                                : a
                        ) +
                        'arrow-left">\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 31, column: 16 }, end: { line: 31, column: 30 } } })
                                : a
                        ) +
                        'popup-arrow-border">\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 32, column: 20 }, end: { line: 32, column: 34 } } })
                                : a
                        ) +
                        'popup-arrow-fill"></div>\n    </div>\n  </div>\n</div>\n'
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1);
            function a(e, t, n) {
                (this.dragHandler = e), (this.dayNameView = t), (this.baseController = n), e.on({ click: this._onClick }, this);
            }
            (a.prototype.destroy = function () {
                this.dragHandler.off(this), (this.dayNameView = this.baseController = this.dragHandler = null);
            }),
                (a.prototype.checkExpectCondition = function (e) {
                    return !!i.closest(e, o.classname(".dayname-date-area"));
                }),
                (a.prototype._onClick = function (e) {
                    var t = e.target,
                        n = this.checkExpectCondition(t),
                        l = i.closest(t, o.classname(".dayname"));
                    n && l && this.fire("clickDayname", { date: i.getData(l, "date") });
                }),
                l.CustomEvents.mixin(a),
                (e.exports = a);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1),
                a = n(34);
            function r(e, t, n) {
                (this.dragHandler = e), (this.view = t), (this.controller = n), e.on({ click: this._onClick }, this);
            }
            (r.prototype.destroy = function () {
                this.dragHandler.off(this), (this.view = this.controller = this.dragHandler = null);
            }),
                (r.prototype.checkExpectCondition = a.prototype.checkExpectedCondition),
                (r.prototype._onClick = function (e) {
                    var t,
                        n = this,
                        l = e.target,
                        a = this.checkExpectCondition(l),
                        r = this.controller.schedules,
                        s = i.closest(l, o.classname(".weekday-collapse-btn")),
                        c = i.closest(l, o.classname(".weekday-exceed-in-week"));
                    if (this.view.container.contains(l)) {
                        if (!s)
                            return c
                                ? (this.view.setState({ clickedExpandBtnIndex: parseInt(i.getData(c, "index"), 10) }), void n.fire("expand"))
                                : void (
                                      a &&
                                      i.closest(l, o.classname(".weekday-schedule")) &&
                                      ((t = i.closest(l, o.classname(".weekday-schedule-block"))),
                                      r.doWhenHas(i.getData(t, "id"), function (t) {
                                          n.fire("clickSchedule", { schedule: t, event: e.originEvent });
                                      }))
                                  );
                        n.fire("collapse");
                    }
                }),
                l.CustomEvents.mixin(r),
                (e.exports = r);
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(0),
                    o = n(2),
                    i = n(3),
                    a = n(1),
                    r = n(11);
                function s(e) {
                    (this.daygridMove = e),
                        (this.scheduleContainer = null),
                        (this._dragStartXIndex = null),
                        (this.guideElement = null),
                        (this.elements = null),
                        e.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._clearGuideElement, click: this._clearGuideElement }, this);
                }
                (s.prototype.destroy = function () {
                    this._clearGuideElement(), this.daygridMove.off(this), (this.daygridMove = this.scheduleContainer = this._dragStartXIndex = this.elements = this.guideElement = null);
                }),
                    (s.prototype._clearGuideElement = function () {
                        this._showOriginScheduleBlocks(), a.remove(this.guideElement), l.browser.msie || a.removeClass(t.document.body, o.classname("dragging")), (this._dragStartXIndex = this.getScheduleDataFunc = this.guideElement = null);
                    }),
                    (s.prototype._hideOriginScheduleBlocks = function (e) {
                        var t = o.classname("weekday-schedule-block-dragging-dim"),
                            n = a.find(o.classname(".weekday-schedule-block"), this.daygridMove.view.container, !0);
                        (this.elements = l.filter(n, function (t) {
                            return a.getData(t, "id") === e;
                        })),
                            l.forEach(this.elements, function (e) {
                                a.addClass(e, t);
                            });
                    }),
                    (s.prototype._showOriginScheduleBlocks = function () {
                        var e = o.classname("weekday-schedule-block-dragging-dim");
                        l.forEach(this.elements, function (t) {
                            a.removeClass(t, e);
                        });
                    }),
                    (s.prototype._highlightScheduleBlocks = function (e, t) {
                        var n = a.find(o.classname(".weekday-schedule"), t, !0);
                        l.forEach(n, function (t) {
                            (t.style.margin = "0"), e.isFocused || ((t.style.backgroundColor = e.dragBgColor), (t.style.borderLeftColor = e.borderColor), (t.style.color = "#ffffff"));
                        });
                    }),
                    (s.prototype.refreshGuideElement = function (e, t, n, l) {
                        var i = this.guideElement;
                        r.requestAnimFrame(function () {
                            (i.style.left = e + "%"),
                                (i.style.width = t + "%"),
                                n ? a.addClass(i, o.classname("weekday-exceed-left")) : a.removeClass(i, o.classname("weekday-exceed-left")),
                                l ? a.addClass(i, o.classname("weekday-exceed-right")) : a.removeClass(i, o.classname("weekday-exceed-right"));
                        });
                    }),
                    (s.prototype._getScheduleBlockDataFunc = function (e) {
                        var t = e.model,
                            n = e.datesInRange,
                            l = e.range,
                            o = 100 / n,
                            a = i.start(t.start),
                            r = i.end(t.end),
                            s = i.start(l[0]),
                            c = i.end(l[l.length - 1]),
                            u = Math.ceil((a.getTime() - s.getTime()) / i.MILLISECONDS_PER_DAY) || 0,
                            d = Math.ceil((r.getTime() - c.getTime()) / i.MILLISECONDS_PER_DAY) || 0;
                        return function (e) {
                            return { baseWidthPercent: o, fromLeft: u + e, fromRight: d + e };
                        };
                    }),
                    (s.prototype._onDragStart = function (e) {
                        var n,
                            i = this.daygridMove.view.container,
                            r = (this.guideElement = e.scheduleBlockElement.cloneNode(!0));
                        l.browser.msie || a.addClass(t.document.body, o.classname("dragging")),
                            this._hideOriginScheduleBlocks(String(e.model.cid())),
                            (n = a.find(o.classname(".weekday-schedules"), i)),
                            a.appendHTMLElement("div", r, o.classname("weekday-schedule-cover")),
                            n.appendChild(r),
                            (this._dragStartXIndex = e.xIndex),
                            (this.getScheduleDataFunc = this._getScheduleBlockDataFunc(e)),
                            this._highlightScheduleBlocks(e.model, r);
                    }),
                    (s.prototype._onDrag = function (e) {
                        var t,
                            n,
                            l,
                            o,
                            i,
                            a,
                            r,
                            s,
                            c = this.getScheduleDataFunc,
                            u = this._dragStartXIndex,
                            d = e.datesInRange,
                            h = e.grids;
                        c &&
                            ((n = (t = c(e.xIndex - u)).fromLeft < 0),
                            (l = t.fromRight > 0),
                            (i = Math.max(0, t.fromLeft)),
                            (o = -1 * t.fromLeft + (d + t.fromRight)),
                            (a = n ? o + t.fromLeft : o),
                            (a = l ? a - t.fromRight : a),
                            (r = h[i] ? h[i].left : 0),
                            (s = (function (e, t, n) {
                                for (var l = 0, o = 0, i = n.length; o < t; o += 1) (e = (e + o) % i) < i && (l += n[e] ? n[e].width : 0);
                                return l;
                            })(i, a, h)),
                            this.refreshGuideElement(r, s, n, l));
                    }),
                    (e.exports = s);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(3),
                a = n(5),
                r = n(1),
                s = n(6),
                c = n(17),
                u = n(86),
                d = n(4).Date,
                h = 300;
            function p(e, t, n, l) {
                (this.dragHandler = e),
                    (this.view = t),
                    (this.controller = n),
                    (this.getScheduleDataFunc = null),
                    (this.guide = new u(this)),
                    (this._requestOnClick = !1),
                    (this._disableDblClick = l.disableDblClick),
                    (this._disableClick = l.disableClick),
                    e.on("dragStart", this._onDragStart, this),
                    e.on("click", this._onClick, this),
                    this._disableDblClick ? (h = 0) : s.on(t.container, "dblclick", this._onDblClick, this);
            }
            (p.prototype.destroy = function () {
                this.guide.destroy(),
                    this.dragHandler.off(this),
                    this.view && this.view.container && s.off(this.view.container, "dblclick", this._onDblClick, this),
                    (this.dragHandler = this.view = this.controller = this.getScheduleDataFunc = null);
            }),
                (p.prototype.checkExpectedCondition = function (e) {
                    var t,
                        n,
                        i = r.getClass(e).trim();
                    return (
                        !r.closest(e, o.classname(".weekday-exceed-in-week")) &&
                        !r.closest(e, o.classname(".weekday-collapse-btn")) &&
                        !r.closest(e, o.classname(".weekday-schedule-block"), !0) &&
                        !(!(n = r.closest(e, o.classname(".weekday-schedules"))) && i !== o.classname("weekday-schedules")) &&
                        ((e = n ? n.parentNode : e.parentNode), !(!(t = (i = r.getClass(e)).match(o.daygrid.getViewIDRegExp)) || t.length < 2) && l.pick(this.view.children.items, t[1]))
                    );
                }),
                (p.prototype._createSchedule = function (e) {
                    var t,
                        n,
                        l = e.range,
                        o = e.dragStartXIndex,
                        a = e.xIndex;
                    a < o && ((o = a + o), (o -= a = o - a)),
                        (t = new d(l[o])),
                        (n = i.end(l[a])),
                        this.fire("beforeCreateSchedule", { category: this.view.options.viewName, isAllDay: !0, start: t, end: n, guide: this.guide, triggerEventName: e.triggerEvent });
                }),
                (p.prototype._onDragStart = function (e) {
                    var t,
                        n,
                        l = e.target;
                    this.checkExpectedCondition(l) &&
                        (this.dragHandler.on({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        (t = this._retriveScheduleData(this.view, e.originEvent)),
                        (this.getScheduleDataFunc = t),
                        (n = t(e.originEvent)),
                        this.fire("dragstart", n));
                }),
                (p.prototype._onDrag = function (e) {
                    var t,
                        n = this.getScheduleDataFunc;
                    n && ((t = n(e.originEvent)), this.fire("drag", t));
                }),
                (p.prototype._onDragEnd = function (e, t) {
                    var n,
                        l = this.getScheduleDataFunc;
                    l && (this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd }, this), (n = l(e.originEvent)), this._createSchedule(n), this.fire(t || "dragend", n), (this.getScheduleDataFunc = null));
                }),
                (p.prototype._onClick = function (e) {
                    var t,
                        n,
                        l = this;
                    this.checkExpectedCondition(e.target) &&
                        !this._disableClick &&
                        ((t = this._retriveScheduleData(this.view, e.originEvent)),
                        (n = t(e.originEvent)),
                        (this._requestOnClick = !0),
                        setTimeout(function () {
                            l._requestOnClick && (l.fire("click", n), l._createSchedule(n)), (l._requestOnClick = !1);
                        }, h));
                }),
                (p.prototype._onDblClick = function (e) {
                    var t;
                    this.checkExpectedCondition(e.target) && ((t = this._retriveScheduleData(this.view, e)(e)), this.fire("click", t), this._createSchedule(t), (this._requestOnClick = !1));
                }),
                (p.prototype.invokeCreationClick = function (e) {
                    var t = this._retriveScheduleDataFromDate(this.view, e.start);
                    this.fire("click", t), this._createSchedule(t);
                }),
                a.mixin(c, p),
                l.CustomEvents.mixin(p),
                (e.exports = p);
        },
        function (e, t, n) {
            "use strict";
            var l = n(2),
                o = n(1),
                i = n(11);
            function a(e) {
                (this.creation = e),
                    (this.scheduleContainer = null),
                    (this.guideElement = document.createElement("div")),
                    this.initializeGuideElement(),
                    this.applyTheme(e.controller.theme),
                    e.on({ dragstart: this._createGuideElement, drag: this._onDrag, click: this._createGuideElement }, this);
            }
            (a.prototype.destroy = function () {
                this.clearGuideElement(), this.creation.off(this), (this.creation = this.scheduleContainer = this.guideElement = null);
            }),
                (a.prototype.initializeGuideElement = function () {
                    o.addClass(this.guideElement, l.classname("daygrid-guide-creation-block"));
                }),
                (a.prototype._onDrag = function (e) {
                    this._refreshGuideElement(e, !0);
                }),
                (a.prototype._getGuideWidth = function (e, t, n) {
                    for (var l = 0, o = e; o <= t; o += 1) l += n[o] ? n[o].width : 0;
                    return l;
                }),
                (a.prototype._refreshGuideElement = function (e, t) {
                    var n,
                        l,
                        o = this.guideElement,
                        a = e,
                        r = a.dragStartXIndex < a.xIndex ? a.dragStartXIndex : a.xIndex,
                        s = a.dragStartXIndex < a.xIndex ? a.xIndex : a.dragStartXIndex;
                    function c() {
                        (o.style.display = "block"), (o.style.left = n + "%"), (o.style.width = l + "%");
                    }
                    (n = a.grids[r] ? a.grids[r].left : 0), (l = this._getGuideWidth(r, s, a.grids)), t ? i.requestAnimFrame(c) : c();
                }),
                (a.prototype.clearGuideElement = function () {
                    var e = this.guideElement;
                    o.remove(e), (e.style.display = "none"), (e.style.left = ""), (e.style.width = "");
                }),
                (a.prototype._createGuideElement = function (e) {
                    var t = this.creation.view.container;
                    o.find(l.classname(".weekday-grid"), t).appendChild(this.guideElement), this._refreshGuideElement(e);
                }),
                (a.prototype._onDrag = function (e) {
                    this._refreshGuideElement(e);
                }),
                (a.prototype.applyTheme = function (e) {
                    var t = this.guideElement.style;
                    (t.backgroundColor = e.common.creationGuide.backgroundColor), (t.border = e.common.creationGuide.border);
                }),
                (e.exports = a);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(3),
                a = n(1),
                r = n(5),
                s = n(17),
                c = n(88),
                u = n(4).Date;
            function d(e, t, n) {
                (this.dragHandler = e), (this.view = t), (this.controller = n), (this._dragStart = null), e.on({ dragStart: this._onDragStart }, this), (this.guide = new c(this));
            }
            (d.prototype.destroy = function () {
                this.guide.destroy(), this.dragHandler.off(this), (this.dragHandler = this.view = this.controller = this.guide = this._dragStart = null);
            }),
                (d.prototype.checkExpectedCondition = function (e) {
                    var t,
                        n = a.getClass(e);
                    return (
                        !!~n.indexOf(o.classname("weekday-resize-handle")) &&
                        !!(e = a.closest(e, o.classname(".weekday"))) &&
                        !(!(t = (n = a.getClass(e)).match(o.daygrid.getViewIDRegExp)) || t.length < 2) &&
                        l.pick(this.view.children.items, t[1])
                    );
                }),
                (d.prototype._onDragStart = function (e) {
                    var t,
                        n,
                        i,
                        r,
                        s,
                        c = e.target,
                        u = this.checkExpectedCondition(c),
                        d = this.controller;
                    u &&
                        ((t = a.closest(c, o.classname(".weekday-schedule-block"))),
                        (n = a.getData(t, "id")),
                        (i = d.schedules.items[n]) &&
                            ((r = this._retriveScheduleData(this.view, e.originEvent)),
                            (this.getScheduleDataFunc = r),
                            (s = this._dragStart = r(e.originEvent)),
                            l.extend(s, { scheduleBlockElement: t, model: i }),
                            this.dragHandler.on({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this),
                            this.fire("dragstart", s)));
                }),
                (d.prototype._onDrag = function (e) {
                    var t = this.getScheduleDataFunc;
                    t && this.fire("drag", t(e.originEvent));
                }),
                (d.prototype._updateSchedule = function (e) {
                    var t,
                        n = e.targetModel,
                        l = e.xIndex - e.dragStartXIndex,
                        o = new u(n.end);
                    (o = o.addDate(l)), (o = new u(r.maxDate(i.end(n.start), o))), (t = r.getScheduleChanges(n, ["end"], { end: o })), this.fire("beforeUpdateSchedule", { schedule: n, changes: t, start: n.getStarts(), end: o });
                }),
                (d.prototype._onDragEnd = function (e, t, n) {
                    var o,
                        i = this.getScheduleDataFunc,
                        a = this._dragStart;
                    i &&
                        a &&
                        (this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this),
                        (o = i(e.originEvent)),
                        l.extend(o, { targetModel: a.model }),
                        n || this._updateSchedule(o),
                        this.fire(t || "dragend", o),
                        (this.getScheduleDataFunc = this._dragStart = null));
                }),
                (d.prototype._onClick = function (e) {
                    this._onDragEnd(e, "click", !0);
                }),
                r.mixin(s, d),
                l.CustomEvents.mixin(d),
                (e.exports = d);
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(0),
                    o = n(2),
                    i = n(1),
                    a = n(3),
                    r = n(11);
                function s(e) {
                    (this.resizeHandler = e),
                        (this.scheduleContainer = null),
                        (this.getScheduleDataFunc = null),
                        (this.guideElement = null),
                        (this.scheduleBlockElement = null),
                        e.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._clearGuideElement, click: this._clearGuideElement }, this);
                }
                (s.prototype.destroy = function () {
                    this._clearGuideElement(), this.resizeHandler.off(this), (this.resizeHandler = this.scheduleContainer = this.getScheduleDataFunc = this.guideElement = this.scheduleBlockElement = null);
                }),
                    (s.prototype._clearGuideElement = function () {
                        i.remove(this.guideElement),
                            l.browser.msie || i.removeClass(t.document.body, o.classname("resizing-x")),
                            this.scheduleBlockElement && i.removeClass(this.scheduleBlockElement, o.classname("weekday-schedule-block-dragging-dim")),
                            (this.getScheduleDataFunc = null);
                    }),
                    (s.prototype.refreshGuideElement = function (e) {
                        var t = this.guideElement;
                        r.requestAnimFrame(function () {
                            t.style.width = e + "%";
                        });
                    }),
                    (s.prototype.getGuideElementWidthFunc = function (e) {
                        var t = e.model,
                            n = this.resizeHandler.view.options,
                            l = Math.ceil((t.start - n.renderStartDate) / a.MILLISECONDS_PER_DAY) || 0,
                            o = e.grids;
                        return function (e) {
                            var t = 0,
                                n = 0,
                                i = o.length;
                            for (t += o[l] ? o[l].width : 0; n < i; n += 1) n > l && n <= e && (t += o[n] ? o[n].width : 0);
                            return t;
                        };
                    }),
                    (s.prototype._onDragStart = function (e) {
                        var n,
                            a = this.resizeHandler.view.container,
                            r = (this.scheduleBlockElement = e.scheduleBlockElement),
                            s = (this.guideElement = r.cloneNode(!0));
                        l.browser.msie || i.addClass(t.document.body, o.classname("resizing-x")),
                            (n = i.find(o.classname(".weekday-schedules"), a)),
                            i.addClass(s, o.classname("daygrid-guide-move")),
                            i.addClass(r, o.classname("weekday-schedule-block-dragging-dim")),
                            n.appendChild(s),
                            (this.getScheduleDataFunc = this.getGuideElementWidthFunc(e));
                    }),
                    (s.prototype._onDrag = function (e) {
                        var t = this.getScheduleDataFunc;
                        t && this.refreshGuideElement(t(e.xIndex));
                    }),
                    (e.exports = s);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1);
            function a(e, t, n) {
                (this.dragHandler = e), (this.timeGridView = t), (this.baseController = n), e.on({ click: this._onClick }, this);
            }
            (a.prototype.destroy = function () {
                this.dragHandler.off(this), (this.timeGridView = this.baseController = this.dragHandler = null);
            }),
                (a.prototype.checkExpectCondition = function (e) {
                    var t, n;
                    return !!(t = i.closest(e, o.classname(".time-date"))) && !(!(n = i.getClass(t).match(o.time.getViewIDRegExp)) || n.length < 2) && l.pick(this.timeGridView.children.items, Number(n[1]));
                }),
                (a.prototype._onClick = function (e) {
                    var t = this,
                        n = e.target,
                        l = this.checkExpectCondition(n),
                        a = i.closest(n, o.classname(".time-date-schedule-block")),
                        r = this.baseController.schedules;
                    l &&
                        a &&
                        r.doWhenHas(i.getData(a, "id"), function (n) {
                            t.fire("clickSchedule", { schedule: n, event: e.originEvent });
                        });
                }),
                l.CustomEvents.mixin(a),
                (e.exports = a);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(15),
                a = n(3),
                r = n(1),
                s = n(6),
                c = n(5),
                u = n(91),
                d = n(4).Date,
                h = n(18),
                p = 300;
            function m(e, t, n, l) {
                (this.dragHandler = e),
                    (this.timeGridView = t),
                    (this.baseController = n),
                    (this.guide = new u(this)),
                    (this._getScheduleDataFunc = null),
                    (this._dragStart = null),
                    (this._requestOnClick = !1),
                    (this._disableDblClick = l.disableDblClick),
                    (this._disableClick = l.disableClick),
                    e.on("dragStart", this._onDragStart, this),
                    e.on("click", this._onClick, this),
                    this._disableDblClick ? (p = 0) : s.on(t.container, "dblclick", this._onDblClick, this);
            }
            (m.prototype.destroy = function () {
                var e = this.timeGridView;
                this.guide.destroy(),
                    this.dragHandler.off(this),
                    e && e.container && s.off(e.container, "dblclick", this._onDblClick, this),
                    (this.dragHandler = this.timeGridView = this.baseController = this._getScheduleDataFunc = this._dragStart = this.guide = null);
            }),
                (m.prototype.checkExpectedCondition = function (e) {
                    var t,
                        n = r.getClass(e);
                    return n === o.classname("time-date-schedule-block-wrap") && ((e = e.parentNode), (n = r.getClass(e))), !(!(t = n.match(o.time.getViewIDRegExp)) || t.length < 2) && l.pick(this.timeGridView.children.items, t[1]);
                }),
                (m.prototype._onDragStart = function (e, t, n) {
                    var l,
                        o,
                        i = e.target,
                        a = this.checkExpectedCondition(i);
                    a &&
                        ((l = this._getScheduleDataFunc = this._retriveScheduleData(a)),
                        (o = this._dragStart = l(e.originEvent)),
                        n && n(o),
                        this.dragHandler.on({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        this.fire(t || "timeCreationDragstart", o));
                }),
                (m.prototype._onDrag = function (e, t, n) {
                    var l,
                        o = this._getScheduleDataFunc;
                    o && ((l = o(e.originEvent)), n && n(l), this.fire(t || "timeCreationDrag", l));
                }),
                (m.prototype._createSchedule = function (e) {
                    var t,
                        n,
                        l,
                        o,
                        i,
                        r = e.relatedView,
                        s = e.createRange,
                        u = e.nearestGridTimeY,
                        h = e.nearestGridEndTimeY ? e.nearestGridEndTimeY : new d(u).addMinutes(30);
                    s || (s = [u, h]),
                        (t = new d(r.getDate())),
                        (n = a.start(t)),
                        (l = a.getStartOfNextDay(t)),
                        (o = c.limitDate(s[0], n, l)),
                        (i = c.limitDate(s[1], n, l)),
                        this.fire("beforeCreateSchedule", { isAllDay: !1, start: new d(o), end: new d(i), guide: this.guide, triggerEventName: e.triggerEvent });
                }),
                (m.prototype._onDragEnd = function (e) {
                    var t = this,
                        n = this._dragStart;
                    this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        this._onDrag(e, "timeCreationDragend", function (e) {
                            var l = [n.nearestGridTimeY, e.nearestGridTimeY].sort(i.compare.num.asc);
                            l[1].addMinutes(30), (e.createRange = l), t._createSchedule(e);
                        }),
                        (this._dragStart = this._getScheduleDataFunc = null);
                }),
                (m.prototype._onClick = function (e) {
                    var t,
                        n,
                        l,
                        o = this;
                    this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        (t = this.checkExpectedCondition(e.target)) &&
                            !this._disableClick &&
                            ((n = this._retriveScheduleData(t)),
                            (l = n(e.originEvent)),
                            (this._requestOnClick = !0),
                            setTimeout(function () {
                                o._requestOnClick && (o.fire("timeCreationClick", l), o._createSchedule(l)), (o._requestOnClick = !1);
                            }, p),
                            (this._dragStart = this._getScheduleDataFunc = null));
                }),
                (m.prototype._onDblClick = function (e) {
                    var t, n;
                    (t = this.checkExpectedCondition(e.target)) && ((n = this._retriveScheduleData(t)(e)), this.fire("timeCreationClick", n), this._createSchedule(n), (this._requestOnClick = !1));
                }),
                (m.prototype.invokeCreationClick = function (e) {
                    var t,
                        n,
                        o = this.timeGridView.options,
                        i = a.range(o.renderStartDate, o.renderEndDate, a.MILLISECONDS_PER_DAY),
                        r = o.hourStart,
                        s = e.start;
                    l.forEach(
                        i,
                        function (e, t) {
                            a.isSameDate(e, s) && (n = this.timeGridView.children.toArray()[t]);
                        },
                        this
                    ),
                        n || (n = this.timeGridView.children.toArray()[0]),
                        (t = this._retriveScheduleDataFromDate(n, e.start, e.end, r)),
                        this.fire("timeCreationClick", t),
                        this._createSchedule(t);
                }),
                h.mixin(m),
                l.CustomEvents.mixin(m),
                (e.exports = m);
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(5),
                    o = n(3),
                    i = n(2),
                    a = n(1),
                    r = n(11),
                    s = n(5).ratio,
                    c = n(4).Date,
                    u = 60 * o.MILLISECONDS_PER_MINUTES;
                function d(e) {
                    (this.guideElement = t.document.createElement("div")),
                        (this.guideTimeElement = a.appendHTMLElement("span", this.guideElement, i.classname("time-guide-creation-label"))),
                        a.addClass(this.guideElement, i.classname("time-guide-creation")),
                        (this.timeCreation = e),
                        (this._styleUnit = null),
                        (this._styleStart = null),
                        (this._styleFunc = null),
                        e.on({ timeCreationDragstart: this._createGuideElement, timeCreationDrag: this._onDrag, timeCreationClick: this._createGuideElement }, this),
                        this.applyTheme(e.baseController.theme);
                }
                (d.prototype.destroy = function () {
                    this.clearGuideElement(), this.timeCreation.off(this), (this.timeCreation = this._styleUnit = this._styleStart = this._styleFunc = this.guideElement = this.guideTimeElement = null);
                }),
                    (d.prototype.clearGuideElement = function () {
                        var e = this.guideElement,
                            t = this.guideTimeElement;
                        a.remove(e),
                            r.requestAnimFrame(function () {
                                (e.style.display = "none"), (e.style.top = ""), (e.style.height = ""), (t.innerHTML = "");
                            });
                    }),
                    (d.prototype._refreshGuideElement = function (e, t, n, l, r) {
                        var s = this.guideElement,
                            c = this.guideTimeElement;
                        (s.style.top = e + "px"),
                            (s.style.height = t + "px"),
                            (s.style.display = "block"),
                            (c.innerHTML = o.format(n, "HH:mm") + " - " + o.format(l, "HH:mm")),
                            r ? a.removeClass(c, i.classname("time-guide-bottom")) : a.addClass(c, i.classname("time-guide-bottom"));
                    }),
                    (d.prototype._getUnitData = function (e) {
                        var t = e.options,
                            n = e.getViewBound().height,
                            l = t.hourEnd - t.hourStart,
                            i = o.parse(t.ymd),
                            a = o.getStartOfNextDay(i);
                        return i.setHours(0, 0, 0, 0), i.setHours(t.hourStart), [n, l, i, a, n / l];
                    }),
                    (d.prototype._limitStyleData = function (e, t, n, o) {
                        var i = this._styleUnit;
                        return [(e = l.limit(e, [0], [i[0]])), (t = l.limit(e + t, [0], [i[0]]) - e), (n = l.limitDate(n, i[2], i[3])), (o = l.limitDate(o, i[2], i[3]))];
                    }),
                    (d.prototype._getStyleDataFunc = function (e, t, n) {
                        var i = n,
                            a = o.end(n);
                        return function (n) {
                            var o = n.nearestGridY,
                                r = n.nearestGridTimeY,
                                u = n.nearestGridEndTimeY || new c(r).addMinutes(30);
                            return [l.limit(s(t, e, o), [0], [e]), l.limitDate(r, i, a), l.limitDate(u, i, a)];
                        };
                    }),
                    (d.prototype._createGuideElement = function (e) {
                        var t,
                            n,
                            l,
                            i,
                            a,
                            r,
                            s,
                            d,
                            h = e.relatedView,
                            p = o.millisecondsFrom("hour", e.hourStart) || 0;
                        (t = this._styleUnit = this._getUnitData(h)),
                            (n = this._styleFunc = this._getStyleDataFunc.apply(this, t)),
                            (l = this._styleStart = n(e)),
                            (s = new c(l[1]).addMinutes(o.minutesFromHours(p))),
                            (d = new c(l[2]).addMinutes(o.minutesFromHours(p))),
                            (a = l[0]),
                            (r = (t[4] * (d - s)) / u),
                            (i = this._limitStyleData(a, r, s, d)),
                            this._refreshGuideElement.apply(this, i),
                            h.container.appendChild(this.guideElement);
                    }),
                    (d.prototype._onDrag = function (e) {
                        var t,
                            n,
                            l,
                            o = this._styleFunc,
                            i = this._styleUnit,
                            a = this._styleStart,
                            s = this._refreshGuideElement.bind(this);
                        o &&
                            i &&
                            a &&
                            ((t = i[4] / 2),
                            (n = o(e))[0] > a[0] ? (l = this._limitStyleData(a[0], n[0] - a[0] + t, a[1], new c(n[1]).addMinutes(30))) : (l = this._limitStyleData(n[0], a[0] - n[0] + t, n[1], new c(a[1]).addMinutes(30))).push(!0),
                            r.requestAnimFrame(function () {
                                s.apply(null, l);
                            }));
                    }),
                    (d.prototype.applyTheme = function (e) {
                        var t = this.guideElement.style,
                            n = this.guideTimeElement.style;
                        (t.backgroundColor = e.common.creationGuide.backgroundColor),
                            (t.border = e.common.creationGuide.border),
                            (n.color = e.week.creationGuide.color),
                            (n.fontSize = e.week.creationGuide.fontSize),
                            (n.fontWeight = e.week.creationGuide.fontWeight);
                    }),
                    (e.exports = d);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(3),
                a = n(1),
                r = n(6),
                s = n(4).Date,
                c = n(18),
                u = n(93);
            function d(e, t, n) {
                (this.dragHandler = e),
                    (this.timeGridView = t),
                    (this.baseController = n),
                    (this._getScheduleDataFunc = null),
                    (this._dragStart = null),
                    (this._guide = new u(this)),
                    e.on("dragStart", this._onDragStart, this),
                    e.on("mousedown", this._onMouseDown, this);
            }
            (d.prototype.destroy = function () {
                this._guide.destroy(), this.dragHandler.off(this), (this.dragHandler = this.timeGridView = this.baseController = this._getScheduleDataFunc = this._dragStart = this._guide = null);
            }),
                (d.prototype.checkExpectCondition = function (e) {
                    return !!a.closest(e, o.classname(".time-schedule")) && this._getTimeView(e);
                }),
                (d.prototype._getTimeView = function (e) {
                    var t,
                        n = a.closest(e, o.classname(".time-date"));
                    return !!n && !(!(t = a.getClass(n).match(o.time.getViewIDRegExp)) || t.length < 2) && l.pick(this.timeGridView.children.items, Number(t[1]));
                }),
                (d.prototype._onMouseDown = function (e) {
                    var t = e.target,
                        n = this.checkExpectCondition(t),
                        i = a.closest(t, o.classname(".time-date-schedule-block"));
                    n && i && l.browser.firefox && r.preventDefault(e.originEvent);
                }),
                (d.prototype._onDragStart = function (e) {
                    var t,
                        n,
                        l,
                        i,
                        r = e.target,
                        s = this.checkExpectCondition(r),
                        c = a.closest(r, o.classname(".time-date-schedule-block")),
                        u = this.baseController;
                    s &&
                        c &&
                        ((l = a.getData(c, "id")),
                        (i = u.schedules.items[l]).isReadOnly ||
                            ((t = this._getScheduleDataFunc = this._retriveScheduleData(s)),
                            (n = this._dragStart = t(e.originEvent, { targetModelID: l, model: i })),
                            this.dragHandler.on({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this),
                            this.fire("timeMoveDragstart", n)));
                }),
                (d.prototype._onDrag = function (e, t, n) {
                    var l,
                        o = this._getScheduleDataFunc,
                        i = this._getTimeView(e.target),
                        a = this._dragStart;
                    i && o && a && ((l = o(e.originEvent, { currentView: i, targetModelID: a.targetModelID })), n && n(l), this.fire(t || "timeMoveDrag", l));
                }),
                (d.prototype._updateSchedule = function (e) {
                    var t,
                        n,
                        l = this.baseController,
                        o = e.targetModelID,
                        a = e.nearestRange,
                        r = a[1] - a[0],
                        c = 0,
                        u = l.schedules.items[o],
                        d = e.relatedView,
                        h = e.currentView;
                    u &&
                        h &&
                        ((r -= i.millisecondsFrom("minutes", 30)),
                        (t = new s(u.getStarts()).addMilliseconds(r)),
                        (n = new s(u.getEnds()).addMilliseconds(r)),
                        h && (c = h.getDate() - d.getDate()),
                        t.addMilliseconds(c),
                        n.addMilliseconds(c),
                        this.fire("beforeUpdateSchedule", { schedule: u, changes: { start: t, end: n }, start: t, end: n }));
                }),
                (d.prototype._onDragEnd = function (e) {
                    var t,
                        n = this._getScheduleDataFunc,
                        l = this._getTimeView(e.target),
                        o = this._dragStart;
                    this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this),
                        n &&
                            o &&
                            (((t = n(e.originEvent, { currentView: l, targetModelID: o.targetModelID })).range = [o.timeY, new s(t.timeY).addMinutes(30)]),
                            (t.nearestRange = [o.nearestGridTimeY, new s(t.nearestGridTimeY).addMinutes(30)]),
                            this._updateSchedule(t),
                            this.fire("timeMoveDragend", t));
                }),
                (d.prototype._onClick = function (e) {
                    var t,
                        n = this._getScheduleDataFunc,
                        l = this._dragStart;
                    this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this), n && l && ((t = n(e.originEvent, { targetModelID: l.targetModelID })), this.fire("timeMoveClick", t));
                }),
                c.mixin(d),
                l.CustomEvents.mixin(d),
                (e.exports = d);
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(0),
                    o = n(2),
                    i = n(1),
                    a = n(11),
                    r = n(5).ratio,
                    s = n(16),
                    c = n(94),
                    u = n(4).Date,
                    d = n(14),
                    h = n(3),
                    p = n(5),
                    m = h.MILLISECONDS_SCHEDULE_MIN_DURATION;
                function f(e) {
                    (this._guideLayer = null),
                        (this._model = null),
                        (this._viewModel = null),
                        (this._lastDrag = null),
                        (this.guideElement = null),
                        (this.timeMove = e),
                        (this._container = null),
                        (this._getTopFunc = null),
                        (this._startGridY = 0),
                        (this._startTopPixel = 0),
                        e.on({ timeMoveDragstart: this._onDragStart, timeMoveDrag: this._onDrag, timeMoveDragend: this._clearGuideElement, timeMoveClick: this._clearGuideElement }, this);
                }
                (f.prototype.destroy = function () {
                    this._clearGuideElement(),
                        this.timeMove.off(this),
                        this._guideLayer && this._guideLayer.destroy(),
                        (this.guideElement = this.timeMove = this._container = this._guideLayer = this._lastDrag = this._getTopFunc = this._startGridY = this._startTopPixel = this._viewModel = null);
                }),
                    (f.prototype._clearGuideElement = function () {
                        l.browser.msie || i.removeClass(t.document.body, o.classname("dragging")),
                            this._guideLayer && this._guideLayer.destroy(),
                            this._showOriginScheduleBlocks(),
                            (this.guideElement = this._getTopFunc = this._guideLayer = this._model = this._lastDrag = this._startGridY = this._startTopPixel = this._viewModel = null);
                    }),
                    (f.prototype._hideOriginScheduleBlocks = function () {
                        var e = o.classname("time-date-schedule-block-dragging-dim");
                        this.guideElement && i.addClass(this.guideElement, e);
                    }),
                    (f.prototype._showOriginScheduleBlocks = function () {
                        var e = o.classname("time-date-schedule-block-dragging-dim");
                        this.guideElement && i.removeClass(this.guideElement, e);
                    }),
                    (f.prototype._refreshGuideElement = function (e, t, n) {
                        var o = this;
                        a.requestAnimFrame(function () {
                            o._guideLayer && (o._guideLayer.setPosition(0, e), o._guideLayer.setContent(c(l.extend({ model: t }, n))));
                        });
                    }),
                    (f.prototype._onDragStart = function (e) {
                        var t,
                            n,
                            a,
                            r,
                            s = i.closest(e.target, o.classname(".time-date-schedule-block"));
                        s &&
                            ((this._startTopPixel = parseFloat(s.style.top)),
                            (this._startGridY = e.nearestGridY),
                            (this.guideElement = s),
                            (this._container = e.relatedView.container),
                            (this._model = l.extend(d.create(e.model), e.model)),
                            (n = (n = this._model.duration()) > m ? n : m),
                            (t = (a = h.millisecondsFrom("minutes", this._model.goingDuration)) + n + (r = h.millisecondsFrom("minutes", this._model.comingDuration))),
                            (this._lastDrag = e),
                            (this._viewModel = { hasGoingDuration: a > 0, hasComingDuration: r > 0, goingDurationHeight: p.ratio(t, a, 100), modelDurationHeight: p.ratio(t, n, 100), comingDurationHeight: p.ratio(t, r, 100) }),
                            this._resetGuideLayer(),
                            this._hideOriginScheduleBlocks());
                    }),
                    (f.prototype._onDrag = function (e) {
                        var n,
                            a,
                            s = e.currentView,
                            c = s.options,
                            d = s.getViewBound().height,
                            p = parseFloat(this.guideElement.style.height),
                            m = c.hourEnd - c.hourStart,
                            f = e.nearestGridY - this._startGridY,
                            g = r(m, d, f),
                            y = e.nearestGridY - this._lastDrag.nearestGridY;
                        l.browser.msie || i.addClass(t.document.body, o.classname("dragging")),
                            this._container !== s.container && ((this._container = s.container), this._resetGuideLayer()),
                            (a = this._startTopPixel + g),
                            (n = d - p),
                            (a = Math.max(a, 0)),
                            (a = Math.min(a, n)),
                            (this._model.start = new u(this._model.getStarts()).addMinutes(h.minutesFromHours(y))),
                            (this._model.end = new u(this._model.getEnds()).addMinutes(h.minutesFromHours(y))),
                            (this._lastDrag = e),
                            this._refreshGuideElement(a, this._model, this._viewModel);
                    }),
                    (f.prototype._resetGuideLayer = function () {
                        this._guideLayer && (this._guideLayer.destroy(), (this._guideLayer = null)),
                            (this._guideLayer = new s(null, this._container)),
                            this._guideLayer.setSize(this._container.getBoundingClientRect().width, this.guideElement.style.height),
                            this._guideLayer.setPosition(0, this.guideElement.style.top),
                            this._guideLayer.setContent(c(l.extend({ model: this._model }, this._viewModel))),
                            this._guideLayer.show();
                    }),
                    (e.exports = f);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 4, column: 24 }, end: { line: 4, column: 38 } } })
                                : a
                        ) +
                        "time-schedule-content " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 4, column: 60 }, end: { line: 4, column: 74 } } })
                                : a
                        ) +
                        'time-schedule-content-travel-time" style="border-color:' +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "borderColor") : i, t)) +
                        "; border-bottom: 1px dashed " +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "color") : i, t)) +
                        "; height: " +
                        u(
                            typeof (a = null != (a = h(n, "goingDurationHeight") || (null != t ? h(t, "goingDurationHeight") : t)) ? a : s) === c
                                ? a.call(r, { name: "goingDurationHeight", hash: {}, data: o, loc: { start: { line: 4, column: 203 }, end: { line: 4, column: 226 } } })
                                : a
                        ) +
                        '%;">' +
                        (null !=
                        (i = (h(n, "goingDuration-tmpl") || (t && h(t, "goingDuration-tmpl")) || s).call(r, null != t ? h(t, "model") : t, {
                            name: "goingDuration-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 4, column: 230 }, end: { line: 4, column: 260 } },
                        }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                3: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 10, column: 24 }, end: { line: 10, column: 38 } } })
                                : a
                        ) +
                        "time-schedule-content " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 10, column: 60 }, end: { line: 10, column: 74 } } })
                                : a
                        ) +
                        'time-schedule-content-travel-time" style="border-color:' +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "borderColor") : i, t)) +
                        "; border-top: 1px dashed " +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "color") : i, t)) +
                        "; height: " +
                        u(
                            typeof (a = null != (a = h(n, "comingDurationHeight") || (null != t ? h(t, "comingDurationHeight") : t)) ? a : s) === c
                                ? a.call(r, { name: "comingDurationHeight", hash: {}, data: o, loc: { start: { line: 10, column: 200 }, end: { line: 10, column: 224 } } })
                                : a
                        ) +
                        '%;">' +
                        (null !=
                        (i = (h(n, "comingDuration-tmpl") || (t && h(t, "comingDuration-tmpl")) || s).call(r, null != t ? h(t, "model") : t, {
                            name: "comingDuration-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 10, column: 228 }, end: { line: 10, column: 259 } },
                        }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 38 }, end: { line: 13, column: 52 } } })
                                : i
                        ) +
                        'time-resize-handle handle-x">&nbsp;</div>'
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        'time-date-schedule-block" data-id="' +
                        u((h(n, "stamp") || (t && h(t, "stamp")) || s).call(r, null != t ? h(t, "model") : t, { name: "stamp", hash: {}, data: o, loc: { start: { line: 1, column: 61 }, end: { line: 1, column: 76 } } })) +
                        '" style="width: 100%; height: 100%;">\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 2, column: 16 }, end: { line: 2, column: 30 } } })
                                : a
                        ) +
                        "time-schedule " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 2, column: 44 }, end: { line: 2, column: 58 } } })
                                : a
                        ) +
                        'time-date-schedule-block-focused" style="color: #ffffff; background-color:' +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "dragBgColor") : i, t)) +
                        ';">\n' +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "hasGoingDuration") : t, { name: "if", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 3, column: 8 }, end: { line: 5, column: 15 } } }))
                            ? i
                            : "") +
                        '            <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 6, column: 24 }, end: { line: 6, column: 38 } } })
                                : a
                        ) +
                        'time-schedule-content" style="height: ' +
                        u(
                            typeof (a = null != (a = h(n, "modelDurationHeight") || (null != t ? h(t, "modelDurationHeight") : t)) ? a : s) === c
                                ? a.call(r, { name: "modelDurationHeight", hash: {}, data: o, loc: { start: { line: 6, column: 76 }, end: { line: 6, column: 99 } } })
                                : a
                        ) +
                        "%; border-color:" +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "borderColor") : i, t)) +
                        ';">\n                ' +
                        (null !=
                        (i = (h(n, "time-tmpl") || (t && h(t, "time-tmpl")) || s).call(r, null != t ? h(t, "model") : t, { name: "time-tmpl", hash: {}, data: o, loc: { start: { line: 7, column: 16 }, end: { line: 7, column: 37 } } }))
                            ? i
                            : "") +
                        "\n            </div>\n" +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "hasComingDuration") : t, { name: "if", hash: {}, fn: e.program(3, o, 0), inverse: e.noop, data: o, loc: { start: { line: 9, column: 8 }, end: { line: 11, column: 15 } } }))
                            ? i
                            : "") +
                        "    </div>\n    " +
                        (null !=
                        (i = h(n, "unless").call(r, null != t ? h(t, "croppedEnd") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(5, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 13, column: 4 }, end: { line: 13, column: 104 } },
                        }))
                            ? i
                            : "") +
                        '\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 14, column: 16 }, end: { line: 14, column: 30 } } })
                                : a
                        ) +
                        'time-date-schedule-block-cover"></div>\n</div>\n'
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(3),
                a = n(1),
                r = n(4).Date,
                s = n(5),
                c = n(18),
                u = n(96);
            function d(e, t, n) {
                (this.dragHandler = e), (this.timeGridView = t), (this.baseController = n), (this._getScheduleDataFunc = null), (this._dragStart = null), (this._guide = new u(this)), e.on("dragStart", this._onDragStart, this);
            }
            (d.prototype.destroy = function () {
                this._guide.destroy(), this.dragHandler.off(this), (this.dragHandler = this.timeGridView = this.baseController = this._getScheduleDataFunc = this._dragStart = this._guide = null);
            }),
                (d.prototype.checkExpectCondition = function (e) {
                    var t, n;
                    return (
                        !!a.hasClass(e, o.classname("time-resize-handle")) &&
                        !!(t = a.closest(e, o.classname(".time-date"))) &&
                        !(!(n = a.getClass(t).match(o.time.getViewIDRegExp)) || n.length < 2) &&
                        l.pick(this.timeGridView.children.items, Number(n[1]))
                    );
                }),
                (d.prototype._onDragStart = function (e) {
                    var t,
                        n,
                        l,
                        i = e.target,
                        r = this.checkExpectCondition(i),
                        s = a.closest(i, o.classname(".time-date-schedule-block")),
                        c = this.baseController;
                    r &&
                        s &&
                        ((t = a.getData(s, "id")),
                        (n = this._getScheduleDataFunc = this._retriveScheduleData(r)),
                        (l = this._dragStart = n(e.originEvent, { targetModelID: t, schedule: c.schedules.items[t] })),
                        this.dragHandler.on({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this),
                        this.fire("timeResizeDragstart", l));
                }),
                (d.prototype._onDrag = function (e, t, n) {
                    var l,
                        o = this._getScheduleDataFunc,
                        i = this._dragStart;
                    o && i && ((l = o(e.originEvent, { targetModelID: i.targetModelID })), n && n(l), this.fire(t || "timeResizeDrag", l));
                }),
                (d.prototype._updateSchedule = function (e) {
                    var t,
                        n,
                        l,
                        o,
                        a = this.baseController,
                        c = e.targetModelID,
                        u = e.nearestRange,
                        d = u[1] - u[0],
                        h = a.schedules.items[c],
                        p = e.relatedView;
                    h &&
                        ((d -= i.millisecondsFrom("minutes", 30)),
                        (l = new r(p.getDate())),
                        (t = i.end(l)),
                        (n = new r(h.getEnds()).addMilliseconds(d)) > t && (n = new r(t)),
                        n.getTime() - h.getStarts().getTime() < i.millisecondsFrom("minutes", 30) && (n = new r(h.getStarts()).addMinutes(30)),
                        (o = s.getScheduleChanges(h, ["end"], { end: n })),
                        this.fire("beforeUpdateSchedule", { schedule: h, changes: o, start: h.getStarts(), end: n }));
                }),
                (d.prototype._onDragEnd = function (e) {
                    var t,
                        n = this._getScheduleDataFunc,
                        l = this._dragStart;
                    this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this),
                        n &&
                            l &&
                            (((t = n(e.originEvent, { targetModelID: l.targetModelID })).range = [l.timeY, new r(t.timeY).addMinutes(30)]),
                            (t.nearestRange = [l.nearestGridTimeY, t.nearestGridTimeY.addMinutes(30)]),
                            this._updateSchedule(t),
                            this.fire("timeResizeDragend", t),
                            (this._getScheduleDataFunc = this._dragStart = null));
                }),
                (d.prototype._onClick = function () {
                    this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd, click: this._onClick }, this), this.fire("timeResizeClick");
                }),
                c.mixin(d),
                l.CustomEvents.mixin(d),
                (e.exports = d);
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(0),
                    o = n(2),
                    i = n(1),
                    a = n(11),
                    r = n(5).ratio,
                    s = n(3);
                function c(e) {
                    (this.guideElement = null),
                        (this.timeResize = e),
                        (this._getTopFunc = null),
                        (this._originScheduleElement = null),
                        (this._startTopPixel = 0),
                        (this._startHeightPixel = 0),
                        (this._startGridY = 0),
                        (this._schedule = null),
                        e.on({ timeResizeDragstart: this._onDragStart, timeResizeDrag: this._onDrag, timeResizeDragend: this._clearGuideElement, timeResizeClick: this._clearGuideElement }, this);
                }
                (c.prototype.destroy = function () {
                    this._clearGuideElement(), this.timeResize.off(this), (this.guideElement = this.timeResize = this._getTopFunc = this._originScheduleElement = this._startHeightPixel = this._startGridY = this._startTopPixel = null);
                }),
                    (c.prototype._clearGuideElement = function () {
                        var e = this.guideElement,
                            n = this._originScheduleElement;
                        l.browser.msie || i.removeClass(t.document.body, o.classname("resizing")),
                            n && (n.style.display = "block"),
                            i.remove(e),
                            (this.guideElement = this._getTopFunc = this._originScheduleElement = this._startHeightPixel = this._startGridY = this._startTopPixel = null);
                    }),
                    (c.prototype._refreshGuideElement = function (e, t, n) {
                        var l,
                            r = this.guideElement;
                        r &&
                            ((l = i.find(o.classname(".time-schedule-content-time"), r)),
                            a.requestAnimFrame(function () {
                                (r.style.height = e + "px"), (r.style.display = "block"), l && ((l.style.height = n + "px"), (l.style.minHeight = t + "px"));
                            }));
                    }),
                    (c.prototype._onDragStart = function (e) {
                        var n,
                            a = i.closest(e.target, o.classname(".time-date-schedule-block")),
                            r = e.schedule;
                        l.browser.msie || i.addClass(t.document.body, o.classname("resizing")),
                            a &&
                                r &&
                                ((this._startGridY = e.nearestGridY),
                                (this._startHeightPixel = parseFloat(a.style.height)),
                                (this._startTopPixel = parseFloat(a.style.top)),
                                (this._originScheduleElement = a),
                                (this._schedule = r),
                                (n = this.guideElement = a.cloneNode(!0)),
                                i.addClass(n, o.classname("time-guide-resize")),
                                (a.style.display = "none"),
                                e.relatedView.container.appendChild(n));
                    }),
                    (c.prototype._onDrag = function (e) {
                        var t,
                            n,
                            l,
                            o,
                            i,
                            a = e.relatedView,
                            c = a.options,
                            u = a.getViewBound().height,
                            d = c.hourEnd - c.hourStart,
                            h = this.guideElement,
                            p = parseFloat(h.style.top),
                            m = e.nearestGridY - this._startGridY,
                            f = r(d, u, m),
                            g = this._schedule.goingDuration,
                            y = this._schedule.duration() / s.MILLISECONDS_PER_MINUTES,
                            S = this._schedule.comingDuration,
                            _ = 60 * d;
                        (i = this._startHeightPixel + f),
                            (l = p + r(d, u, 0.5)),
                            (n = l -= this._startTopPixel),
                            (l += r(_, u, g) + r(_, u, S)),
                            (o = u - p),
                            (i = Math.max(i, l)),
                            (i = Math.min(i, o)),
                            (t = r(_, u, y) + f),
                            this._refreshGuideElement(i, n, t);
                    }),
                    (e.exports = c);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(15),
                a = n(3),
                r = n(1),
                s = n(5),
                c = n(98),
                u = n(103),
                d = n(104),
                h = n(107),
                p = n(109),
                m = n(112),
                f = n(32),
                g = n(33),
                y = n(14);
            e.exports = function (e, t, n, S) {
                var _, C, v, E, w, P, k, R, b, I, D, F, x, X, M, O;
                return (
                    (_ = r.appendHTMLElement("div", t, o.classname("month"))),
                    (C = new c(S, _, e.Month)),
                    (v = new m(S.month, t, e.theme)),
                    (w = new u(n, C, e)),
                    S.isReadOnly || ((P = new d(n, C, e, S)), (k = new h(n, C, e)), (R = new p(n, C, e))),
                    (b = function () {
                        v && v.hide();
                    }),
                    (I = function () {
                        v && v.refresh();
                    }),
                    w.on("clickMore", function (t) {
                        var n = t.date,
                            o = t.target,
                            r = l.pick(e.findByDateRange(a.start(n), a.end(n)), t.ymd);
                        (r.items = l.filter(r.items, function (e) {
                            return S.month.scheduleFilter(e.model);
                        })),
                            r &&
                                r.length &&
                                (v.render(
                                    (function (e, t, n, l) {
                                        return (
                                            n.each(function (e) {
                                                var t = e.model;
                                                e.hasMultiDates = a.hasMultiDates(t.start, t.end);
                                            }),
                                            { target: t, date: a.format(e, "YYYY.MM.DD"), dayname: l[e.getDay()], schedules: n.sort(i.compare.schedule.asc) }
                                        );
                                    })(n, o, r, C.options.daynames)
                                ),
                                r.each(function (e) {
                                    e && C.fire("afterRenderSchedule", { schedule: e.model });
                                }),
                                C.fire("clickMore", { date: t.date, target: v.getMoreViewElement() }));
                    }),
                    S.useCreationPopup &&
                        ((E = new f(t, e.calendars, S.usageStatistics)),
                        (D = function (e) {
                            P.fire("beforeCreateSchedule", l.extend(e, { useCreationPopup: !0 }));
                        }),
                        E.on("beforeCreateSchedule", D)),
                    S.useDetailPopup &&
                        ((x = new g(t, e.calendars)),
                        (X = function (t) {
                            var n = t.schedule.calendarId;
                            (t.calendar = s.find(e.calendars, function (e) {
                                return e.id === n;
                            })),
                                S.isReadOnly && (t.schedule = l.extend({}, t.schedule, { isReadOnly: !0 })),
                                x.render(t);
                        }),
                        (M = function (e) {
                            P && P.fire("beforeDeleteSchedule", e);
                        }),
                        (O = function (e) {
                            R.fire("beforeUpdateSchedule", e);
                        }),
                        w.on("clickSchedule", X),
                        x.on("beforeDeleteSchedule", M),
                        S.useCreationPopup
                            ? ((F = function (t) {
                                  E.setCalendars(e.calendars), E.render(t);
                              }),
                              E.on("beforeUpdateSchedule", O),
                              x.on("beforeUpdateSchedule", F))
                            : x.on("beforeUpdateSchedule", O)),
                    e.on("clearSchedules", b),
                    e.on("updateSchedule", I),
                    R &&
                        R.on("monthMoveStart_from_morelayer", function () {
                            v.hide();
                        }),
                    (C.handler = { click: { default: w } }),
                    S.isReadOnly || (C.handler = l.extend(C.handler, { creation: { default: P }, resize: { default: k }, move: { default: R } })),
                    (C._beforeDestroy = function () {
                        v.destroy(),
                            e.off("clearSchedules", b),
                            e.off("updateSchedule", I),
                            l.forEach(C.handler, function (e) {
                                l.forEach(e, function (e) {
                                    e.off(), e.destroy();
                                });
                            }),
                            S.useCreationPopup && S.useDetailPopup && E.off("beforeUpdateSchedule", I),
                            S.useCreationPopup && (P && P.off("beforeCreateSchedule", undefined), E.off("saveSchedule", D), E.destroy()),
                            S.useDetailPopup && (w.off("clickSchedule", X), x.off("beforeUpdateSchedule", I), x.off("beforeDeleteSchedule", M), x.destroy());
                    }),
                    (C.controller = e.Month),
                    {
                        view: C,
                        refresh: function () {
                            C.vLayout.refresh();
                        },
                        openCreationPopup: function (e) {
                            E && P && P.invokeCreationClick(y.create(e));
                        },
                        showCreationPopup: function (t) {
                            E && (E.setCalendars(e.calendars), E.render(t));
                        },
                        hideMoreView: function () {
                            v && v.hide();
                        },
                    }
                );
            };
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(3),
                a = n(1),
                r = n(4).Date,
                s = n(99),
                c = n(8),
                u = n(29),
                d = n(100),
                h = Math.min;
            function p(e, t, n) {
                var o,
                    a = n ? n.theme : null;
                (o = (e = e || {}) ? e.month : {}),
                    c.call(this, t),
                    (this.controller = n),
                    (this.vLayout = new u({ panels: [{ height: parseInt(n.theme.month.dayname.height, 10) || 42 }, { autoHeight: !0 }] }, t, a)),
                    (this.options = l.extend(
                        {
                            scheduleFilter: function (e) {
                                return Boolean(e.isVisible);
                            },
                            startDayOfWeek: 0,
                            renderMonth: "2018-01",
                            daynames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            narrowWeekend: !1,
                            visibleWeeksCount: null,
                            isAlways6Week: !0,
                            isReadOnly: e.isReadOnly,
                            grid: { header: { height: 34 }, footer: { height: 3 } },
                        },
                        o
                    )),
                    (this.options.grid.header = l.extend({ height: 34 }, l.pick(o, "grid", "header"))),
                    (this.options.grid.footer = l.extend({ height: 3 }, l.pick(o, "grid", "footer"))),
                    (this.grids = i.getGridLeftAndWidth(this.options.daynames.length, this.options.narrowWeekend, this.options.startDayOfWeek));
            }
            l.inherit(p, c),
                (p.prototype.viewName = "month"),
                (p.prototype._getMonthCalendar = function (e) {
                    var t,
                        n = new r(e),
                        l = this.options.startDayOfWeek || 0,
                        o = h(this.options.visibleWeeksCount || 0, 6),
                        a = this.options.workweek || !1;
                    return (
                        (t = this.options.visibleWeeksCount ? { startDayOfWeek: l, isAlways6Week: !1, visibleWeeksCount: o, workweek: a } : { startDayOfWeek: l, isAlways6Week: this.options.isAlways6Week, workweek: a }),
                        i.arr2dCalendar(n, t)
                    );
                }),
                (p.prototype._renderChildren = function (e, t, n) {
                    var i = this,
                        s = 100 / t.length,
                        c = this.options,
                        u = c.renderMonth,
                        h = c.narrowWeekend,
                        p = c.startDayOfWeek,
                        m = c.visibleWeeksCount,
                        f = c.visibleScheduleCount,
                        g = c.grid,
                        y = c.isReadOnly;
                    (e.innerHTML = ""),
                        this.children.clear(),
                        l.forEach(t, function (t) {
                            var l,
                                c,
                                S = new r(t[0]),
                                _ = new r(t[t.length - 1]);
                            (l = a.appendHTMLElement("div", e, o.classname("month-week-item"))),
                                (c = new d(
                                    {
                                        renderMonth: u,
                                        heightPercent: s,
                                        renderStartDate: S,
                                        renderEndDate: _,
                                        narrowWeekend: h,
                                        startDayOfWeek: p,
                                        visibleWeeksCount: m,
                                        visibleScheduleCount: f,
                                        grid: g,
                                        scheduleHeight: parseInt(n.month.schedule.height, 10),
                                        scheduleGutter: parseInt(n.month.schedule.marginTop, 10),
                                        isReadOnly: y,
                                    },
                                    l
                                )),
                                i.addChild(c);
                        });
                }),
                (p.prototype.render = function () {
                    var e,
                        t,
                        n,
                        o = this,
                        a = this.options,
                        r = this.vLayout,
                        c = this.controller,
                        u = a.daynames,
                        d = a.workweek,
                        h = this._getMonthCalendar(a.renderMonth),
                        p = a.scheduleFilter,
                        m = c ? c.theme : null,
                        f = this._getStyles(m);
                    (e = this.grids = i.getGridLeftAndWidth(a.daynames.length, a.narrowWeekend, a.startDayOfWeek)),
                        (t = l.map(
                            l.range(a.startDayOfWeek, 7).concat(l.range(7)).slice(0, 7),
                            function (t, n) {
                                return { day: t, label: u[t], width: e[n] ? e[n].width : 0, left: e[n] ? e[n].left : 0, color: this._getDayNameColor(m, t) };
                            },
                            this
                        )),
                        d &&
                            ((e = this.grids = i.getGridLeftAndWidth(5, a.narrowWeekend, a.startDayOfWeek, d)),
                            (t = l.filter(t, function (e) {
                                return !i.isWeekend(e.day);
                            })),
                            l.forEach(t, function (t, n) {
                                (t.width = e[n] ? e[n].width : 0), (t.left = e[n] ? e[n].left : 0);
                            })),
                        (n = { daynames: t, styles: f }),
                        (r.panels[0].container.innerHTML = s(n)),
                        this._renderChildren(r.panels[1].container, h, m),
                        (n.panelHeight = r.panels[1].getHeight()),
                        this.children.each(function (t) {
                            var l = i.start(t.options.renderStartDate),
                                a = i.start(t.options.renderEndDate),
                                r = c.findByDateRange(i.start(l), i.end(a), p),
                                s = { eventsInDateRange: r, range: i.range(i.start(l), i.end(a), i.MILLISECONDS_PER_DAY).slice(0, e.length), grids: e, panelHeight: n.panelHeight, theme: m };
                            t.render(s), o._invokeAfterRenderSchedule(r);
                        });
                }),
                (p.prototype._invokeAfterRenderSchedule = function (e) {
                    var t = this;
                    l.forEachArray(e, function (e) {
                        l.forEachArray(e, function (e) {
                            l.forEachArray(e, function (e) {
                                e && !e.hidden && t.fire("afterRenderSchedule", { schedule: e.model });
                            });
                        });
                    });
                }),
                (p.prototype._getStyles = function (e) {
                    var t,
                        n = {};
                    return (
                        e &&
                            ((t = e.month.dayname),
                            (n.borderTop = t.borderTop || e.common.border),
                            (n.borderLeft = t.borderLeft || e.common.border),
                            (n.height = t.height),
                            (n.paddingLeft = t.paddingLeft),
                            (n.paddingRight = t.paddingRight),
                            (n.fontSize = t.fontSize),
                            (n.backgroundColor = t.backgroundColor),
                            (n.fontWeight = t.fontWeight),
                            (n.textAlign = t.textAlign)),
                        n
                    );
                }),
                (p.prototype._getDayNameColor = function (e, t) {
                    var n = "";
                    return e && (n = 0 === t ? e.common.holiday.color : 6 === t ? e.common.saturday.color : e.common.dayname.color), n;
                }),
                (e.exports = p);
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 4, column: 16 }, end: { line: 4, column: 30 } } })
                                : a
                        ) +
                        'month-dayname-item"\n         style="position: absolute;\n                width: ' +
                        u(
                            typeof (a = null != (a = h(n, "width") || (null != t ? h(t, "width") : t)) ? a : s) === c
                                ? a.call(r, { name: "width", hash: {}, data: o, loc: { start: { line: 6, column: 23 }, end: { line: 6, column: 32 } } })
                                : a
                        ) +
                        "%;\n                left: " +
                        u(typeof (a = null != (a = h(n, "left") || (null != t ? h(t, "left") : t)) ? a : s) === c ? a.call(r, { name: "left", hash: {}, data: o, loc: { start: { line: 7, column: 22 }, end: { line: 7, column: 30 } } }) : a) +
                        "%;\n                padding-left: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "paddingLeft"), t)) +
                        ";\n                padding-right: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "paddingRight"), t)) +
                        ";\n                line-height: " +
                        u(d((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "height"), t)) +
                        ";\n" +
                        (null != (i = h(n, "unless").call(r, o && h(o, "last"), { name: "unless", hash: {}, fn: e.program(2, o, 0), inverse: e.noop, data: o, loc: { start: { line: 11, column: 16 }, end: { line: 13, column: 27 } } }))
                            ? i
                            : "") +
                        '                ">\n        <span class="' +
                        u((h(n, "holiday") || (t && h(t, "holiday")) || s).call(r, null != t ? h(t, "day") : t, { name: "holiday", hash: {}, data: o, loc: { start: { line: 15, column: 21 }, end: { line: 15, column: 36 } } })) +
                        '" style="color: ' +
                        u(
                            typeof (a = null != (a = h(n, "color") || (null != t ? h(t, "color") : t)) ? a : s) === c
                                ? a.call(r, { name: "color", hash: {}, data: o, loc: { start: { line: 15, column: 52 }, end: { line: 15, column: 61 } } })
                                : a
                        ) +
                        ';">\n            ' +
                        (null !=
                        (i = (h(n, "monthDayname-tmpl") || (t && h(t, "monthDayname-tmpl")) || s).call(r, t, { name: "monthDayname-tmpl", hash: {}, data: o, loc: { start: { line: 16, column: 12 }, end: { line: 16, column: 40 } } }))
                            ? i
                            : "") +
                        "\n        </span>\n    </div>\n"
                    );
                },
                2: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                border-right: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "borderLeft"), t)) + ";\n";
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.escapeExpression,
                        c = e.lambda,
                        u =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        s(
                            "function" == typeof (a = null != (a = u(n, "CSS_PREFIX") || (null != t ? u(t, "CSS_PREFIX") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        'month-dayname"\n    style="border-top: ' +
                        s(c(null != (i = null != t ? u(t, "styles") : t) ? u(i, "borderTop") : i, t)) +
                        "; height: " +
                        s(c(null != (i = null != t ? u(t, "styles") : t) ? u(i, "height") : i, t)) +
                        "; font-size: " +
                        s(c(null != (i = null != t ? u(t, "styles") : t) ? u(i, "fontSize") : i, t)) +
                        "; background-color: " +
                        s(c(null != (i = null != t ? u(t, "styles") : t) ? u(i, "backgroundColor") : i, t)) +
                        "; text-align: " +
                        s(c(null != (i = null != t ? u(t, "styles") : t) ? u(i, "textAlign") : i, t)) +
                        "; font-weight: " +
                        s(c(null != (i = null != t ? u(t, "styles") : t) ? u(i, "fontWeight") : i, t)) +
                        ';">\n' +
                        (null !=
                        (i = u(n, "each").call(r, null != t ? u(t, "daynames") : t, { name: "each", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 3, column: 0 }, end: { line: 19, column: 9 } } }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(5),
                a = n(1),
                r = n(8),
                s = n(30),
                c = n(101),
                u = n(102),
                d = Math.floor,
                h = Math.min;
            function p(e, t) {
                s.call(this, e, t), (t.style.height = e.heightPercent + "%");
            }
            l.inherit(p, s),
                (p.prototype.getViewBound = function () {
                    return r.prototype.getViewBound.call(this);
                }),
                (p.prototype._getRenderLimitIndex = function (e) {
                    var t,
                        n = this.options,
                        o = e || this.getViewBound().height,
                        i = l.pick(n, "grid", "header", "height") || 0,
                        a = l.pick(n, "grid", "footer", "height") || 0,
                        r = n.visibleScheduleCount || 0;
                    return (t = d((o -= i + a) / (n.scheduleHeight + n.scheduleGutter))), r || (r = t), h(t, r);
                }),
                (p.prototype.getBaseViewModel = function (e) {
                    var t,
                        n = this.options,
                        o = l.pick(n, "grid", "header", "height") || 0,
                        i = l.pick(n, "grid", "footer", "height") || 0,
                        a = this._getRenderLimitIndex() + 1,
                        r = this.getExceedDate(a, e.eventsInDateRange, e.range),
                        c = this._getStyles(e.theme);
                    return (
                        (e = l.extend({ exceedDate: r }, e)),
                        (t = s.prototype.getBaseViewModel.call(this, e)),
                        (t = l.extend({ matrices: e.eventsInDateRange, gridHeaderHeight: o, gridFooterHeight: i, renderLimitIdx: a, isReadOnly: n.isReadOnly, styles: c }, t))
                    );
                }),
                (p.prototype.render = function (e) {
                    var t,
                        n,
                        r,
                        d,
                        h,
                        p = this.container,
                        m = this.getBaseViewModel(e);
                    this.options.visibleWeeksCount ||
                        ((n = m.dates),
                        (r = this.options.renderMonth),
                        (d = e.theme),
                        (h = r.getMonth() + 1),
                        l.forEach(n, function (e) {
                            var t = e.month !== h;
                            (e.isOtherMonth = t), t && (e.color = s.prototype._getDayNameColor(d, e.day, e.isToday, t));
                        })),
                        (p.innerHTML = c(m)),
                        (t = a.find(o.classname(".weekday-schedules"), p)) && ((t.innerHTML = u(m)), i.setAutoEllipsis(o.classname(".weekday-schedule-title"), p, !0));
                }),
                (p.prototype._beforeDestroy = function () {}),
                (p.prototype._getStyles = function (e) {
                    var t = {};
                    return (
                        e &&
                            ((t.borderTop = e.common.border),
                            (t.borderLeft = e.common.border),
                            (t.fontSize = e.month.day.fontSize),
                            (t.borderRadius = e.month.schedule.borderRadius),
                            (t.marginLeft = e.month.schedule.marginLeft),
                            (t.marginRight = e.month.schedule.marginRight),
                            (t.scheduleBulletTop = this.options.scheduleHeight / 3)),
                        t
                    );
                }),
                (e.exports = p);
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 16 }, end: { line: 7, column: 30 } } })
                                : a
                        ) +
                        "weekday-grid-line " +
                        u((d(n, "holiday") || (t && d(t, "holiday")) || s).call(r, null != t ? d(t, "day") : t, { name: "holiday", hash: {}, data: o, loc: { start: { line: 7, column: 48 }, end: { line: 7, column: 63 } } })) +
                        (null !=
                        (i = (d(n, "fi") || (t && d(t, "fi")) || s).call(r, null != t ? d(t, "date") : t, "!==", 1, {
                            name: "fi",
                            hash: {},
                            fn: e.program(2, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 7, column: 63 }, end: { line: 7, column: 119 } },
                        }))
                            ? i
                            : "") +
                        (null != (i = d(n, "if").call(r, null != t ? d(t, "isToday") : t, { name: "if", hash: {}, fn: e.program(4, o, 0), inverse: e.noop, data: o, loc: { start: { line: 7, column: 119 }, end: { line: 7, column: 161 } } }))
                            ? i
                            : "") +
                        (null !=
                        (i = d(n, "if").call(r, null != t ? d(t, "isOtherMonth") : t, { name: "if", hash: {}, fn: e.program(6, o, 0), inverse: e.noop, data: o, loc: { start: { line: 7, column: 161 }, end: { line: 7, column: 213 } } }))
                            ? i
                            : "") +
                        '"\n        style="width:' +
                        u(
                            typeof (a = null != (a = d(n, "width") || (null != t ? d(t, "width") : t)) ? a : s) === c
                                ? a.call(r, { name: "width", hash: {}, data: o, loc: { start: { line: 8, column: 21 }, end: { line: 8, column: 30 } } })
                                : a
                        ) +
                        "%; left:" +
                        u(typeof (a = null != (a = d(n, "left") || (null != t ? d(t, "left") : t)) ? a : s) === c ? a.call(r, { name: "left", hash: {}, data: o, loc: { start: { line: 8, column: 38 }, end: { line: 8, column: 46 } } }) : a) +
                        "%; background-color: " +
                        u(
                            typeof (a = null != (a = d(n, "backgroundColor") || (null != t ? d(t, "backgroundColor") : t)) ? a : s) === c
                                ? a.call(r, { name: "backgroundColor", hash: {}, data: o, loc: { start: { line: 8, column: 67 }, end: { line: 8, column: 86 } } })
                                : a
                        ) +
                        "; font-size: " +
                        u(e.lambda((i = (i = o && d(o, "root")) && d(i, "styles")) && d(i, "fontSize"), t)) +
                        ";\n" +
                        (null != (i = d(n, "unless").call(r, o && d(o, "last"), { name: "unless", hash: {}, fn: e.program(8, o, 0), inverse: e.noop, data: o, loc: { start: { line: 9, column: 8 }, end: { line: 11, column: 19 } } }))
                            ? i
                            : "") +
                        '        ">\n        <div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 13, column: 20 }, end: { line: 13, column: 34 } } })
                                : a
                        ) +
                        'weekday-grid-header">\n            <span style="color: ' +
                        u(
                            typeof (a = null != (a = d(n, "color") || (null != t ? d(t, "color") : t)) ? a : s) === c
                                ? a.call(r, { name: "color", hash: {}, data: o, loc: { start: { line: 14, column: 32 }, end: { line: 14, column: 41 } } })
                                : a
                        ) +
                        ';">' +
                        (null !=
                        (i = (d(n, "monthGridHeader-tmpl") || (t && d(t, "monthGridHeader-tmpl")) || s).call(r, t, {
                            name: "monthGridHeader-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 14, column: 44 }, end: { line: 14, column: 75 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n" +
                        (null !=
                        (i = d(n, "if").call(r, null != t ? d(t, "hiddenSchedules") : t, { name: "if", hash: {}, fn: e.program(10, o, 0), inverse: e.noop, data: o, loc: { start: { line: 15, column: 12 }, end: { line: 17, column: 19 } } }))
                            ? i
                            : "") +
                        '        </div>\n        <div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 19, column: 20 }, end: { line: 19, column: 34 } } })
                                : a
                        ) +
                        'weekday-grid-footer">\n            <span style="color: ' +
                        u(
                            typeof (a = null != (a = d(n, "color") || (null != t ? d(t, "color") : t)) ? a : s) === c
                                ? a.call(r, { name: "color", hash: {}, data: o, loc: { start: { line: 20, column: 32 }, end: { line: 20, column: 41 } } })
                                : a
                        ) +
                        ';">' +
                        (null !=
                        (i = (d(n, "monthGridFooter-tmpl") || (t && d(t, "monthGridFooter-tmpl")) || s).call(r, t, {
                            name: "monthGridFooter-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 20, column: 44 }, end: { line: 20, column: 75 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n" +
                        (null !=
                        (i = d(n, "if").call(r, null != t ? d(t, "hiddenSchedules") : t, { name: "if", hash: {}, fn: e.program(12, o, 0), inverse: e.noop, data: o, loc: { start: { line: 21, column: 12 }, end: { line: 23, column: 19 } } }))
                            ? i
                            : "") +
                        "        </div>\n    </div>\n"
                    );
                },
                2: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 84 }, end: { line: 7, column: 98 } } })
                                : i
                        ) +
                        "near-month-day"
                    );
                },
                4: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 135 }, end: { line: 7, column: 149 } } })
                                : i
                        ) +
                        "today"
                    );
                },
                6: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 182 }, end: { line: 7, column: 196 } } })
                                : i
                        ) +
                        "extra-date"
                    );
                },
                8: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "        border-right:" + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "borderLeft"), t)) + ";\n";
                },
                10: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                <span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 16, column: 29 }, end: { line: 16, column: 43 } } })
                                : a
                        ) +
                        'weekday-exceed-in-month" data-ymd="' +
                        u(typeof (a = null != (a = d(n, "ymd") || (null != t ? d(t, "ymd") : t)) ? a : s) === c ? a.call(r, { name: "ymd", hash: {}, data: o, loc: { start: { line: 16, column: 78 }, end: { line: 16, column: 85 } } }) : a) +
                        '">' +
                        (null !=
                        (i = (d(n, "monthGridHeaderExceed-tmpl") || (t && d(t, "monthGridHeaderExceed-tmpl")) || s).call(r, null != t ? d(t, "hiddenSchedules") : t, {
                            name: "monthGridHeaderExceed-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 16, column: 87 }, end: { line: 16, column: 135 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n"
                    );
                },
                12: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                <span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 22, column: 29 }, end: { line: 22, column: 43 } } })
                                : a
                        ) +
                        'weekday-exceed-in-month" data-ymd="' +
                        u(typeof (a = null != (a = d(n, "ymd") || (null != t ? d(t, "ymd") : t)) ? a : s) === c ? a.call(r, { name: "ymd", hash: {}, data: o, loc: { start: { line: 22, column: 78 }, end: { line: 22, column: 85 } } }) : a) +
                        '">' +
                        (null !=
                        (i = (d(n, "monthGridFooterExceed-tmpl") || (t && d(t, "monthGridFooterExceed-tmpl")) || s).call(r, null != t ? d(t, "hiddenSchedules") : t, {
                            name: "monthGridFooterExceed-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 22, column: 87 }, end: { line: 22, column: 135 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n"
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        'weekday-border"\n    style="\n    border-top: ' +
                        u(e.lambda(null != (i = null != t ? d(t, "styles") : t) ? d(i, "borderTop") : i, t)) +
                        ';\n"></div>\n<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 12 }, end: { line: 5, column: 26 } } })
                                : a
                        ) +
                        'weekday-grid">\n' +
                        (null != (i = d(n, "each").call(r, null != t ? d(t, "dates") : t, { name: "each", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 6, column: 0 }, end: { line: 26, column: 11 } } }))
                            ? i
                            : "") +
                        '</div>\n<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 28, column: 12 }, end: { line: 28, column: 26 } } })
                                : a
                        ) +
                        'weekday-schedules"></div>\n'
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i;
                    return null !=
                        (i = (
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            }
                        )(n, "each").call(null != t ? t : e.nullContext || {}, t, { name: "each", hash: {}, fn: e.program(2, o, 0), inverse: e.noop, data: o, loc: { start: { line: 2, column: 0 }, end: { line: 80, column: 11 } } }))
                        ? i
                        : "";
                },
                2: function (e, t, n, l, o) {
                    var i;
                    return (
                        "\n" +
                        (null !=
                        (i = (
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            }
                        )(n, "each").call(null != t ? t : e.nullContext || {}, t, { name: "each", hash: {}, fn: e.program(3, o, 0), inverse: e.noop, data: o, loc: { start: { line: 3, column: 0 }, end: { line: 79, column: 11 } } }))
                            ? i
                            : "")
                    );
                },
                3: function (e, t, n, l, o) {
                    var i;
                    return (
                        "\n" +
                        (null !=
                        (i = (
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            }
                        )(n, "if").call(null != t ? t : e.nullContext || {}, t, { name: "if", hash: {}, fn: e.program(4, o, 0), inverse: e.noop, data: o, loc: { start: { line: 4, column: 0 }, end: { line: 78, column: 9 } } }))
                            ? i
                            : "")
                    );
                },
                4: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "\n" +
                        (null !=
                        (i = (a(n, "fi") || (t && a(t, "fi")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? a(t, "top") : t, "<", (i = o && a(o, "root")) && a(i, "renderLimitIdx"), {
                            name: "fi",
                            hash: {},
                            fn: e.program(5, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 5, column: 4 }, end: { line: 77, column: 13 } },
                        }))
                            ? i
                            : "")
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = e.escapeExpression,
                        u = "function",
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div data-id="' +
                        c((d(n, "stamp") || (t && d(t, "stamp")) || s).call(r, null != t ? d(t, "model") : t, { name: "stamp", hash: {}, data: o, loc: { start: { line: 6, column: 18 }, end: { line: 6, column: 33 } } })) +
                        '"\n         class="' +
                        c(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === u
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 16 }, end: { line: 7, column: 30 } } })
                                : a
                        ) +
                        "weekday-schedule-block\n                " +
                        c(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === u
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 8, column: 16 }, end: { line: 8, column: 30 } } })
                                : a
                        ) +
                        "weekday-schedule-block-" +
                        c((d(n, "stamp") || (t && d(t, "stamp")) || s).call(r, null != t ? d(t, "model") : t, { name: "stamp", hash: {}, data: o, loc: { start: { line: 8, column: 53 }, end: { line: 8, column: 68 } } })) +
                        "\n            " +
                        (null != (i = d(n, "if").call(r, null != t ? d(t, "exceedLeft") : t, { name: "if", hash: {}, fn: e.program(6, o, 0), inverse: e.noop, data: o, loc: { start: { line: 9, column: 12 }, end: { line: 9, column: 71 } } }))
                            ? i
                            : "") +
                        "\n            " +
                        (null !=
                        (i = d(n, "if").call(r, null != t ? d(t, "exceedRight") : t, { name: "if", hash: {}, fn: e.program(8, o, 0), inverse: e.noop, data: o, loc: { start: { line: 10, column: 12 }, end: { line: 10, column: 73 } } }))
                            ? i
                            : "") +
                        '"\n         style="' +
                        c(
                            (d(n, "month-scheduleBlock") || (t && d(t, "month-scheduleBlock")) || s).call(
                                r,
                                t,
                                (i = o && d(o, "root")) && d(i, "dates"),
                                (i = o && d(o, "root")) && d(i, "scheduleBlockHeight"),
                                (i = o && d(o, "root")) && d(i, "gridHeaderHeight"),
                                { name: "month-scheduleBlock", hash: {}, data: o, loc: { start: { line: 11, column: 16 }, end: { line: 11, column: 105 } } }
                            )
                        ) +
                        ";\n                margin-top:" +
                        c(e.lambda((i = o && d(o, "root")) && d(i, "scheduleBlockGutter"), t)) +
                        'px">\n' +
                        (null !=
                        (i = (d(n, "fi") || (t && d(t, "fi")) || s).call(r, null != (i = null != t ? d(t, "model") : t) ? d(i, "isAllDay") : i, "||", null != t ? d(t, "hasMultiDates") : t, {
                            name: "fi",
                            hash: {},
                            fn: e.program(10, o, 0),
                            inverse: e.program(23, o, 0),
                            data: o,
                            loc: { start: { line: 13, column: 8 }, end: { line: 75, column: 15 } },
                        }))
                            ? i
                            : "") +
                        "    </div>\n"
                    );
                },
                6: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 9, column: 31 }, end: { line: 9, column: 45 } } })
                                : i
                        ) +
                        "weekday-exceed-left"
                    );
                },
                8: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        " " +
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 10, column: 32 }, end: { line: 10, column: 46 } } })
                                : i
                        ) +
                        "weekday-exceed-right"
                    );
                },
                10: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = e.lambda,
                        s = e.escapeExpression,
                        c = null != t ? t : e.nullContext || {},
                        u = e.hooks.helperMissing,
                        d = "function",
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '        <div data-schedule-id="' +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "id") : i, t)) +
                        '" data-calendar-id="' +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "calendarId") : i, t)) +
                        '" class="' +
                        s(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : u) === d
                                ? a.call(c, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 14, column: 92 }, end: { line: 14, column: 106 } } })
                                : a
                        ) +
                        "weekday-schedule " +
                        (null !=
                        (i = h(n, "if").call(c, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(11, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 14, column: 123 }, end: { line: 14, column: 192 } },
                        }))
                            ? i
                            : "") +
                        '"\n             style="height:' +
                        s(r((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; line-height:" +
                        s(r((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; border-radius: " +
                        s(r((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "borderRadius"), t)) +
                        ";\n" +
                        (null !=
                        (i = h(n, "unless").call(c, null != t ? h(t, "exceedLeft") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(13, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 16, column: 16 }, end: { line: 18, column: 27 } },
                        }))
                            ? i
                            : "") +
                        (null !=
                        (i = h(n, "unless").call(c, null != t ? h(t, "exceedRight") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(15, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 19, column: 16 }, end: { line: 21, column: 27 } },
                        }))
                            ? i
                            : "") +
                        (null !=
                        (i = h(n, "if").call(c, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(17, o, 0),
                            inverse: e.program(19, o, 0),
                            data: o,
                            loc: { start: { line: 22, column: 16 }, end: { line: 26, column: 23 } },
                        }))
                            ? i
                            : "") +
                        "                    " +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "customStyle") : i, t)) +
                        '">\n            <span class="' +
                        s(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : u) === d
                                ? a.call(c, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 28, column: 25 }, end: { line: 28, column: 39 } } })
                                : a
                        ) +
                        'weekday-schedule-title"\n                  data-title="' +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "title") : i, t)) +
                        '">' +
                        (null !=
                        (i = (h(n, "allday-tmpl") || (t && h(t, "allday-tmpl")) || u).call(c, null != t ? h(t, "model") : t, {
                            name: "allday-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 29, column: 47 }, end: { line: 29, column: 70 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n            " +
                        (null !=
                        (i = h(n, "unless").call(
                            c,
                            (h(n, "or") || (t && h(t, "or")) || u).call(c, (i = o && h(o, "root")) && h(i, "isReadOnly"), null != (i = null != t ? h(t, "model") : t) ? h(i, "isReadOnly") : i, {
                                name: "or",
                                hash: {},
                                data: o,
                                loc: { start: { line: 30, column: 22 }, end: { line: 30, column: 60 } },
                            }),
                            { name: "unless", hash: {}, fn: e.program(21, o, 0), inverse: e.noop, data: o, loc: { start: { line: 30, column: 12 }, end: { line: 30, column: 194 } } }
                        ))
                            ? i
                            : "") +
                        "\n        </div>\n"
                    );
                },
                11: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 14, column: 146 }, end: { line: 14, column: 160 } } })
                                : i
                        ) + "weekday-schedule-focused "
                    );
                },
                13: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                    margin-left: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "marginLeft"), t)) + ";\n";
                },
                15: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                    margin-right: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "marginRight"), t)) + ";\n";
                },
                17: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                    color: #ffffff; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        ";\n"
                    );
                },
                19: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                    color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "bgColor") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "borderColor") : i, t)) +
                        ";\n"
                    );
                },
                21: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<span class="' +
                        r(
                            "function" == typeof (a = null != (a = s(n, "CSS_PREFIX") || (null != t ? s(t, "CSS_PREFIX") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 30, column: 75 }, end: { line: 30, column: 89 } } })
                                : a
                        ) +
                        'weekday-resize-handle handle-y" style="line-height: ' +
                        r(e.lambda((i = o && s(o, "root")) && s(i, "scheduleHeight"), t)) +
                        'px;">&nbsp;</span>'
                    );
                },
                23: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i = (a(n, "fi") || (t && a(t, "fi")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != (i = null != t ? a(t, "model") : t) ? a(i, "category") : i, "===", "time", {
                            name: "fi",
                            hash: {},
                            fn: e.program(24, o, 0),
                            inverse: e.program(33, o, 0),
                            data: o,
                            loc: { start: { line: 33, column: 12 }, end: { line: 74, column: 19 } },
                        }))
                        ? i
                        : "";
                },
                24: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = e.lambda,
                        s = e.escapeExpression,
                        c = null != t ? t : e.nullContext || {},
                        u = e.hooks.helperMissing,
                        d = "function",
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                <div data-schedule-id="' +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "id") : i, t)) +
                        '" data-calendar-id="' +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "calendarId") : i, t)) +
                        '" class="' +
                        s(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : u) === d
                                ? a.call(c, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 34, column: 100 }, end: { line: 34, column: 114 } } })
                                : a
                        ) +
                        "weekday-schedule " +
                        s(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : u) === d
                                ? a.call(c, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 34, column: 131 }, end: { line: 34, column: 145 } } })
                                : a
                        ) +
                        'weekday-schedule-time"\n                    style="height:' +
                        s(r((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; line-height:" +
                        s(r((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; " +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "customStyle") : i, t)) +
                        '">\n                    <span class="' +
                        s(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : u) === d
                                ? a.call(c, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 36, column: 33 }, end: { line: 36, column: 47 } } })
                                : a
                        ) +
                        'weekday-schedule-bullet"\n                        style="top: ' +
                        s(r((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "scheduleBulletTop"), t)) +
                        "px;\n" +
                        (null !=
                        (i = h(n, "if").call(c, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(25, o, 0),
                            inverse: e.program(27, o, 0),
                            data: o,
                            loc: { start: { line: 38, column: 28 }, end: { line: 42, column: 35 } },
                        }))
                            ? i
                            : "") +
                        '                            "\n                    ></span>\n                    <span class="' +
                        s(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : u) === d
                                ? a.call(c, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 45, column: 33 }, end: { line: 45, column: 47 } } })
                                : a
                        ) +
                        'weekday-schedule-title"\n                        style="\n' +
                        (null !=
                        (i = h(n, "if").call(c, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(29, o, 0),
                            inverse: e.program(31, o, 0),
                            data: o,
                            loc: { start: { line: 47, column: 28 }, end: { line: 52, column: 35 } },
                        }))
                            ? i
                            : "") +
                        '                            "\n                        data-title="' +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "title") : i, t)) +
                        '">' +
                        (null !=
                        (i = (h(n, "time-tmpl") || (t && h(t, "time-tmpl")) || u).call(c, null != t ? h(t, "model") : t, { name: "time-tmpl", hash: {}, data: o, loc: { start: { line: 54, column: 53 }, end: { line: 54, column: 74 } } }))
                            ? i
                            : "") +
                        "</span>\n                </div>\n"
                    );
                },
                25: function (e, t, n, l, o) {
                    return "                                background: #ffffff\n";
                },
                27: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                                background:" + e.escapeExpression(e.lambda(null != (i = null != t ? a(t, "model") : t) ? a(i, "borderColor") : i, t)) + "\n";
                },
                29: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                                color: #ffffff;\n                                background-color: " + e.escapeExpression(e.lambda(null != (i = null != t ? a(t, "model") : t) ? a(i, "color") : i, t)) + "\n";
                },
                31: function (e, t, n, l, o) {
                    return "                                color:#333;\n";
                },
                33: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = e.lambda,
                        s = e.escapeExpression,
                        c = null != t ? t : e.nullContext || {},
                        u = e.hooks.helperMissing,
                        d = "function",
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div data-schedule-id="' +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "id") : i, t)) +
                        '" data-calendar-id="' +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "calendarId") : i, t)) +
                        '" class="' +
                        s(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : u) === d
                                ? a.call(c, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 57, column: 100 }, end: { line: 57, column: 114 } } })
                                : a
                        ) +
                        "weekday-schedule " +
                        (null !=
                        (i = h(n, "if").call(c, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(11, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 57, column: 131 }, end: { line: 57, column: 200 } },
                        }))
                            ? i
                            : "") +
                        '"\n                    style="height:' +
                        s(r((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; line-height:" +
                        s(r((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; border-radius: " +
                        s(r((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "borderRadius"), t)) +
                        ";\n" +
                        (null !=
                        (i = h(n, "unless").call(c, null != t ? h(t, "exceedLeft") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(34, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 59, column: 20 }, end: { line: 61, column: 31 } },
                        }))
                            ? i
                            : "") +
                        (null !=
                        (i = h(n, "unless").call(c, null != t ? h(t, "exceedRight") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(36, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 62, column: 20 }, end: { line: 64, column: 31 } },
                        }))
                            ? i
                            : "") +
                        (null !=
                        (i = h(n, "if").call(c, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(38, o, 0),
                            inverse: e.program(40, o, 0),
                            data: o,
                            loc: { start: { line: 65, column: 20 }, end: { line: 69, column: 27 } },
                        }))
                            ? i
                            : "") +
                        "                        " +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "customStyle") : i, t)) +
                        '">\n                    <span class="' +
                        s(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : u) === d
                                ? a.call(c, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 71, column: 33 }, end: { line: 71, column: 47 } } })
                                : a
                        ) +
                        'weekday-schedule-title"\n                                    data-title="' +
                        s(r(null != (i = null != t ? h(t, "model") : t) ? h(i, "title") : i, t)) +
                        '">' +
                        (null !=
                        (i = (h(n, "schedule-tmpl") || (t && h(t, "schedule-tmpl")) || u).call(c, null != t ? h(t, "model") : t, {
                            name: "schedule-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 72, column: 65 }, end: { line: 72, column: 90 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n                </div>\n"
                    );
                },
                34: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                        margin-left: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "marginLeft"), t)) + ";\n";
                },
                36: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                        margin-right: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "marginRight"), t)) + ";\n";
                },
                38: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                        color: #ffffff; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        ";\n"
                    );
                },
                40: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                        color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "bgColor") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "borderColor") : i, t)) +
                        ";\n"
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i = a(n, "each").call(null != t ? t : e.nullContext || {}, null != t ? a(t, "matrices") : t, {
                            name: "each",
                            hash: {},
                            fn: e.program(1, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 1, column: 0 }, end: { line: 81, column: 11 } },
                        }))
                        ? i
                        : "";
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(3),
                a = n(1);
            function r(e, t, n) {
                (this.dragHandler = e), (this.monthView = t), (this.baseController = n), e.on({ click: this._onClick }, this);
            }
            (r.prototype.destroy = function () {
                this.dragHandler.off(this), (this.monthView = this.baseController = this.dragHandler = null);
            }),
                (r.prototype._onClick = function (e) {
                    var t,
                        n = this,
                        l = this.baseController.schedules,
                        r = a.closest(e.target, o.classname(".weekday-schedule-block")) || a.closest(e.target, o.classname(".month-more-schedule"));
                    (t = a.closest(e.target, o.classname(".weekday-exceed-in-month"))) && n.fire("clickMore", { date: i.parse(a.getData(t, "ymd")), target: t, ymd: a.getData(t, "ymd") }),
                        r &&
                            l.doWhenHas(a.getData(r, "id"), function (t) {
                                n.fire("clickSchedule", { schedule: t, event: e.originEvent });
                            });
                }),
                l.CustomEvents.mixin(r),
                (e.exports = r);
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(3),
                a = n(15),
                r = n(1),
                s = n(6),
                c = n(19),
                u = n(105),
                d = n(4).Date,
                h = 300;
            function p(e, t, n, l) {
                (this.dragHandler = e),
                    (this.monthView = t),
                    (this.baseController = n),
                    (this.getScheduleData = null),
                    (this._cache = null),
                    (this.guide = new u(this)),
                    (this._requestOnClick = !1),
                    (this._disableDblClick = l.disableDblClick),
                    (this._disableClick = l.disableClick),
                    e.on("dragStart", this._onDragStart, this),
                    e.on("click", this._onClick, this),
                    this._disableDblClick ? (h = 0) : s.on(t.container, "dblclick", this._onDblClick, this);
            }
            function m(e) {
                return r.closest(e, o.classname(".weekday-grid")) && !r.closest(e, o.classname(".weekday-exceed-in-month"));
            }
            (p.prototype.destroy = function () {
                this.dragHandler.off(this),
                    this.guide.destroy(),
                    this.monthView && this.monthView.container && s.off(this.monthView.container, "dblclick", this._onDblClick, this),
                    (this.dragHandler = this.monthView = this.baseController = this.getScheduleData = this._cache = this.guide = null);
            }),
                (p.prototype._createSchedule = function (e) {
                    this.fire("beforeCreateSchedule", { isAllDay: e.isAllDay, start: e.start, end: e.end, guide: this.guide.guide, triggerEventName: e.triggerEvent });
                }),
                (p.prototype._onDragStart = function (e) {
                    var t;
                    m(e.target) &&
                        (this.dragHandler.on({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        (this.getScheduleData = c(this.monthView)),
                        (t = this.getScheduleData(e.originEvent)),
                        (this._cache = { start: new d(t.date) }),
                        this.fire("monthCreationDragstart", t));
                }),
                (p.prototype._onDrag = function (e) {
                    var t;
                    this.getScheduleData && (t = this.getScheduleData(e.originEvent)) && this.fire("monthCreationDrag", t);
                }),
                (p.prototype._onDragEnd = function (e) {
                    var t,
                        n,
                        l = this._cache;
                    this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        this.getScheduleData &&
                            ((t = this.getScheduleData(e.originEvent)) && ((l.end = new d(t.date)), (l.isAllDay = !0), (n = [l.start, l.end].sort(a.compare.num.asc)), (l.start = new d(n[0])), (l.end = i.end(n[1])), this._createSchedule(l)),
                            this.fire("monthCreationDragend", t),
                            (this.getScheduleData = this._cache = null));
                }),
                (p.prototype._onDblClick = function (e) {
                    var t, n;
                    m(e.target) &&
                        ((t = c(this.monthView)(e)),
                        this.fire("monthCreationClick", t),
                        (n = this._adjustStartAndEndTime(new d(t.date), new d(t.date))),
                        this._createSchedule({ start: n.start, end: n.end, isAllDay: !1, triggerEvent: t.triggerEvent }),
                        (this._requestOnClick = !1));
                }),
                (p.prototype._onClick = function (e) {
                    var t,
                        n,
                        l = this;
                    m(e.target) &&
                        !this._disableClick &&
                        ((t = c(this.monthView)(e.originEvent)),
                        (this._requestOnClick = !0),
                        setTimeout(function () {
                            l._requestOnClick && (l.fire("monthCreationClick", t), (n = l._adjustStartAndEndTime(new d(t.date), new d(t.date))), l._createSchedule({ start: n.start, end: n.end, isAllDay: !1, triggerEvent: t.triggerEvent })),
                                (l._requestOnClick = !1);
                        }, h));
                }),
                (p.prototype._adjustStartAndEndTime = function (e, t) {
                    var n = new d(),
                        l = n.getHours(),
                        o = n.getMinutes();
                    return (o = o <= 30 ? 0 : 30), e.setHours(l, o, 0, 0), t.setHours(l + 1, o, 0, 0), { start: e, end: t };
                }),
                (p.prototype.invokeCreationClick = function (e) {
                    var t = { model: e };
                    this.fire("monthCreationClick", t), this._createSchedule({ start: e.start, end: e.end, isAllDay: e.isAllDay, triggerEvent: "manual" });
                }),
                l.CustomEvents.mixin(p),
                (e.exports = p);
        },
        function (e, t, n) {
            "use strict";
            var l = n(35);
            function o(e) {
                (this.monthCreation = e),
                    (this.guide = null),
                    e.on({ monthCreationDragstart: this._createGuideElement, monthCreationDrag: this._onDrag, monthCreationDragend: this._onDragEnd, monthCreationClick: this._createGuideElement }, this);
            }
            (o.prototype.destroy = function () {
                this.monthCreation.off(this), this.guide && this.guide.destroy(), (this.guide = this.monthCreation = null);
            }),
                (o.prototype._createGuideElement = function (e) {
                    (this.guide = new l({ isCreationMode: !0, height: "100%", top: 0 }, this.monthCreation.monthView)), this.guide.start(e);
                }),
                (o.prototype._onDrag = function (e) {
                    this.guide.update(e.x, e.y);
                }),
                (o.prototype._onDragEnd = function () {
                    this.guide = null;
                }),
                (e.exports = o);
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = e.escapeExpression,
                        s = e.lambda,
                        c =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        r(
                            "function" == typeof (a = null != (a = c(n, "CSS_PREFIX") || (null != t ? c(t, "CSS_PREFIX") : t)) ? a : e.hooks.helperMissing)
                                ? a.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 3, column: 16 }, end: { line: 3, column: 30 } } })
                                : a
                        ) +
                        'month-creation-guide" style="border: ' +
                        r(s(null != (i = null != t ? c(t, "styles") : t) ? c(i, "border") : i, t)) +
                        "; background-color: " +
                        r(s(null != (i = null != t ? c(t, "styles") : t) ? c(i, "backgroundColor") : i, t)) +
                        ';"></div>\n'
                    );
                },
                3: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 16 }, end: { line: 5, column: 30 } } })
                                : a
                        ) +
                        'weekday-schedule"\n        style="height: ' +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "scheduleHeight") : i, t)) +
                        "; line-height: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "scheduleHeight") : i, t)) +
                        "; margin-top: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "scheduleGutter") : i, t)) +
                        "; border-radius:" +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "borderRadius") : i, t)) +
                        "; margin-left: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "marginLeft") : i, t)) +
                        "; margin-right: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "marginRight") : i, t)) +
                        ";\n            color:" +
                        u(
                            typeof (a = null != (a = h(n, "color") || (null != t ? h(t, "color") : t)) ? a : s) === c
                                ? a.call(r, { name: "color", hash: {}, data: o, loc: { start: { line: 7, column: 18 }, end: { line: 7, column: 27 } } })
                                : a
                        ) +
                        ";border-color:" +
                        u(
                            typeof (a = null != (a = h(n, "borderColor") || (null != t ? h(t, "borderColor") : t)) ? a : s) === c
                                ? a.call(r, { name: "borderColor", hash: {}, data: o, loc: { start: { line: 7, column: 41 }, end: { line: 7, column: 56 } } })
                                : a
                        ) +
                        ";background-color:" +
                        u(
                            typeof (a = null != (a = h(n, "bgColor") || (null != t ? h(t, "bgColor") : t)) ? a : s) === c
                                ? a.call(r, { name: "bgColor", hash: {}, data: o, loc: { start: { line: 7, column: 74 }, end: { line: 7, column: 85 } } })
                                : a
                        ) +
                        '">\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 8, column: 20 }, end: { line: 8, column: 34 } } })
                                : a
                        ) +
                        'weekday-schedule-title">\n' +
                        (null !=
                        (i = h(n, "if").call(r, null != t ? h(t, "isAllDay") : t, {
                            name: "if",
                            hash: {},
                            fn: e.program(4, o, 0),
                            inverse: e.program(6, o, 0),
                            data: o,
                            loc: { start: { line: 9, column: 12 }, end: { line: 13, column: 19 } },
                        }))
                            ? i
                            : "") +
                        '        </div>\n        <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 15, column: 20 }, end: { line: 15, column: 34 } } })
                                : a
                        ) +
                        'weekday-resize-handle handle-y" style="line-height: ' +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "scheduleHeight") : i, t)) +
                        ';">&nbsp;</div>\n    </div>\n'
                    );
                },
                4: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                " +
                        (null !=
                        (i = (a(n, "allday-tmpl") || (t && a(t, "allday-tmpl")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, t, {
                            name: "allday-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 10, column: 16 }, end: { line: 10, column: 38 } },
                        }))
                            ? i
                            : "") +
                        "\n"
                    );
                },
                6: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                " +
                        (null !=
                        (i = (a(n, "time-tmpl") || (t && a(t, "time-tmpl")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, t, {
                            name: "time-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 12, column: 16 }, end: { line: 12, column: 36 } },
                        }))
                            ? i
                            : "") +
                        "\n"
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        'month-guide-block" style="top:' +
                        u(typeof (a = null != (a = d(n, "top") || (null != t ? d(t, "top") : t)) ? a : s) === c ? a.call(r, { name: "top", hash: {}, data: o, loc: { start: { line: 1, column: 56 }, end: { line: 1, column: 63 } } }) : a) +
                        ";height:" +
                        u(
                            typeof (a = null != (a = d(n, "height") || (null != t ? d(t, "height") : t)) ? a : s) === c
                                ? a.call(r, { name: "height", hash: {}, data: o, loc: { start: { line: 1, column: 71 }, end: { line: 1, column: 81 } } })
                                : a
                        ) +
                        ';display:none">\n' +
                        (null !=
                        (i = d(n, "if").call(r, null != t ? d(t, "isCreationMode") : t, {
                            name: "if",
                            hash: {},
                            fn: e.program(1, o, 0),
                            inverse: e.program(3, o, 0),
                            data: o,
                            loc: { start: { line: 2, column: 4 }, end: { line: 17, column: 11 } },
                        }))
                            ? i
                            : "") +
                        "</div>\n"
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(3),
                a = n(1),
                r = n(19),
                s = n(108),
                c = n(4).Date,
                u = n(5);
            function d(e, t, n) {
                (this.dragHandler = e), (this.monthView = t), (this.baseController = n), (this.getScheduleData = null), (this._cache = null), (this.guide = new s(this)), e.on("dragStart", this._onDragStart, this);
            }
            (d.prototype.destroy = function () {
                this.dragHandler.off(this), (this.dragHandler = this.monthView = this.baseController = null);
            }),
                (d.prototype._updateSchedule = function (e) {
                    var t = i.end(new c(e.end)),
                        n = e.schedule,
                        l = u.getScheduleChanges(n, ["end"], { end: t });
                    this.fire("beforeUpdateSchedule", { schedule: n, changes: l, start: new c(n.getStarts()), end: t });
                }),
                (d.prototype._onDragStart = function (e) {
                    var t,
                        n,
                        l,
                        i = e.target;
                    a.hasClass(i, o.classname("weekday-resize-handle")) &&
                        (i = a.closest(i, o.classname(".weekday-schedule-block"))) &&
                        ((t = a.getData(i, "id")),
                        (n = this.baseController.schedules.items[t]),
                        this.dragHandler.on({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        (this.getScheduleData = r(this.monthView)),
                        ((l = this.getScheduleData(e.originEvent)).target = i),
                        (l.model = n),
                        (this._cache = { schedule: n, target: i, start: new c(l.date) }),
                        this.fire("monthResizeDragstart", l));
                }),
                (d.prototype._onDrag = function (e) {
                    var t;
                    this.getScheduleData && (t = this.getScheduleData(e.originEvent)) && this.fire("monthResizeDrag", t);
                }),
                (d.prototype._onDragEnd = function (e) {
                    var t,
                        n,
                        l,
                        o = this._cache;
                    this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        this.getScheduleData &&
                            ((t = this.getScheduleData(e.originEvent)) && ((n = new c(o.schedule.getStarts())), (l = new c(t.date)), (o.end = l), n <= o.end && this._updateSchedule(o)),
                            this.fire("monthResizeDragend", t),
                            (this.getScheduleData = this._cache = null));
                }),
                l.CustomEvents.mixin(d),
                (e.exports = d);
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(0),
                    o = n(2),
                    i = n(1),
                    a = n(35);
                function r(e) {
                    (this.monthResize = e), (this.elements = null), (this.guide = null), e.on({ monthResizeDragstart: this._onDragStart, monthResizeDrag: this._onDrag, monthResizeDragend: this._onDragEnd }, this);
                }
                (r.prototype.destroy = function () {
                    this.monthResize.off(this), this.guide.destroy(), (this.guide = this.monthResize = null);
                }),
                    (r.prototype._hideScheduleBlocks = function (e) {
                        (this.elements = i.find(o.classname(".weekday-schedule-block-" + e), this.monthResize.monthView.container, !0)),
                            l.forEach(this.elements, function (e) {
                                e.style.display = "none";
                            });
                    }),
                    (r.prototype._showScheduleBlocks = function () {
                        l.forEach(this.elements, function (e) {
                            e.style.display = "block";
                        });
                    }),
                    (r.prototype._onDragStart = function (e) {
                        (this.guide = new a({ isResizeMode: !0 }, this.monthResize.monthView)), this.guide.start(e), this._hideScheduleBlocks(e.model.cid()), l.browser.msie || i.addClass(t.document.body, o.classname("resizing-x"));
                    }),
                    (r.prototype._onDrag = function (e) {
                        this.guide.update(e.x, e.y);
                    }),
                    (r.prototype._onDragEnd = function () {
                        this._showScheduleBlocks(), this.guide.destroy(), (this.elements = this.guide = null), l.browser.msie || i.removeClass(t.document.body, o.classname("resizing-x"));
                    }),
                    (e.exports = r);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(1),
                a = n(3),
                r = n(19),
                s = n(110),
                c = n(4).Date;
            function u(e, t, n) {
                (this.dragHandler = e), (this.monthView = t), (this.baseController = n), (this.getScheduleData = null), (this._cache = null), (this.guide = new s(this)), e.on("dragStart", this._onDragStart, this);
            }
            (u.prototype.destroy = function () {
                this.dragHandler.off(this), (this.dragHandler = this.monthView = this.baseController = null);
            }),
                (u.prototype.updateSchedule = function (e) {
                    var t = e.model,
                        n = t.duration(),
                        l = a.raw(t.start),
                        o = new c(e.end),
                        i = new c(o);
                    i.setHours(l.h, l.m, l.s, l.ms), this.fire("beforeUpdateSchedule", { schedule: t, changes: { start: i, end: new c(i).addMilliseconds(n) }, start: i, end: new c(i).addMilliseconds(n) });
                }),
                (u.prototype.getMonthScheduleBlock = function (e) {
                    var t = o.classname(".weekday-schedule-block");
                    return i.closest(e, t);
                }),
                (u.prototype.getMoreLayerScheduleBlock = function (e) {
                    var t = o.classname(".month-more-schedule");
                    return i.closest(e, t);
                }),
                (u.prototype.hasPermissionToHandle = function (e) {
                    var t,
                        n = null;
                    return i.hasClass(e, o.classname("weekday-resize-handle"))
                        ? null
                        : ((t = this.getMonthScheduleBlock(e)) ? (n = i.getData(t, "id")) : (t = this.getMoreLayerScheduleBlock(e)) && ((n = i.getData(t, "id")), this.fire("monthMoveStart_from_morelayer")), n);
                }),
                (u.prototype._onDragStart = function (e) {
                    var t,
                        n = e.target,
                        l = this.hasPermissionToHandle(n),
                        o = this.baseController.schedules.items[l];
                    l &&
                        o &&
                        !o.isReadOnly &&
                        !o.isPending &&
                        (this.dragHandler.on({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        (this.getScheduleData = r(this.monthView)),
                        ((t = this.getScheduleData(e.originEvent)).originEvent = e.originEvent),
                        (t.target = this.getMonthScheduleBlock(n)),
                        (t.model = o),
                        (this._cache = { model: o, target: n, start: new c(Number(t.date)) }),
                        this.fire("monthMoveDragstart", t));
                }),
                (u.prototype._onDrag = function (e) {
                    var t;
                    this.getScheduleData && (t = l.extend({ originEvent: e.originEvent }, this.getScheduleData(e.originEvent))) && this.fire("monthMoveDrag", t);
                }),
                (u.prototype._onDragEnd = function (e) {
                    var t,
                        n = this._cache;
                    this.dragHandler.off({ drag: this._onDrag, dragEnd: this._onDragEnd }, this),
                        this.getScheduleData && ((t = this.getScheduleData(e.originEvent)) && ((n.end = new c(t.date)), this.updateSchedule(n)), this.fire("monthMoveDragend", t), (this.getScheduleData = this._cache = null));
                }),
                l.CustomEvents.mixin(u),
                (e.exports = u);
        },
        function (e, t, n) {
            "use strict";
            (function (t) {
                var l = n(0),
                    o = n(2),
                    i = n(1),
                    a = n(6),
                    r = n(16),
                    s = n(111),
                    c = n(14);
                function u(e) {
                    (this.monthMove = e), (this.elements = null), (this.layer = null), e.on({ monthMoveDragstart: this._onDragStart, monthMoveDrag: this._onDrag, monthMoveDragend: this._onDragEnd }, this);
                }
                (u.prototype.destroy = function () {
                    this.monthMove.off(this), this._clearGridBgColor(), this.layer && this.layer.destroy(), this.element && i.remove(this.element), (this.monthMove = this.elements = this.layer = null);
                }),
                    (u.prototype._hideOriginScheduleBlocks = function (e) {
                        var t = o.classname("weekday-schedule-block-dragging-dim");
                        (this.elements = i.find(o.classname(".weekday-schedule-block-" + e), this.monthMove.monthView.container, !0)),
                            l.forEach(this.elements, function (e) {
                                i.addClass(e, t);
                            });
                    }),
                    (u.prototype._showOriginScheduleBlocks = function () {
                        var e = o.classname("weekday-schedule-block-dragging-dim");
                        l.forEach(this.elements, function (t) {
                            i.removeClass(t, e);
                        });
                    }),
                    (u.prototype._clearGridBgColor = function () {
                        var e = o.classname(".weekday-filled"),
                            t = o.classname("weekday-filled"),
                            n = i.find(e, this.monthMove.monthView.container);
                        n && i.removeClass(n, t);
                    }),
                    (u.prototype._updateGridBgColor = function (e) {
                        var t = i.find(o.classname(".weekday-grid-line"), this.monthMove.monthView.container, !0),
                            n = o.classname("weekday-filled"),
                            l = e.x + e.sizeX * e.y;
                        this._clearGridBgColor(), t && t[l] && i.addClass(t[l], n);
                    }),
                    (u.prototype._onDragStart = function (e) {
                        var n = this.monthMove.monthView,
                            u = n.children.single(),
                            d = u.options,
                            h = 100 / u.getRenderDateRange().length,
                            p = d.scheduleGutter + d.scheduleHeight,
                            m = n.container,
                            f = a.getMousePosition(e.originEvent, m),
                            g = e.model,
                            y = new r(null, m);
                        this._hideOriginScheduleBlocks(g.cid()),
                            (this.layer = y),
                            y.setSize(h + "%", p),
                            y.setPosition(f[0], f[1]),
                            y.setContent(s({ model: l.extend(c.create(g), g), styles: { scheduleHeight: d.scheduleHeight, scheduleBulletTop: d.scheduleHeight / 3, borderRadius: n.controller.theme.month.schedule.borderRadius } })),
                            y.show(),
                            l.browser.msie || i.addClass(t.document.body, o.classname("dragging"));
                    }),
                    (u.prototype._onDrag = function (e) {
                        var t = this.monthMove.monthView.container,
                            n = a.getMousePosition(e.originEvent, t);
                        this._updateGridBgColor(e), this.layer && this.layer.setPosition(n[0], n[1]);
                    }),
                    (u.prototype._onDragEnd = function () {
                        this._showOriginScheduleBlocks(), l.browser.msie || i.removeClass(t.document.body, o.classname("dragging")), this._clearGridBgColor(), this.layer.destroy(), (this.layer = null);
                    }),
                    (e.exports = u);
            }.call(this, n(9)));
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "            border-left:3px solid " + e.escapeExpression(e.lambda(null != (i = null != t ? a(t, "model") : t) ? a(i, "borderColor") : i, t)) + ";\n            ";
                },
                3: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '    <span class="' +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 14, column: 17 }, end: { line: 14, column: 31 } } })
                                : a
                        ) +
                        "weekday-schedule-bullet " +
                        u(
                            typeof (a = null != (a = d(n, "CSS_PREFIX") || (null != t ? d(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 14, column: 55 }, end: { line: 14, column: 69 } } })
                                : a
                        ) +
                        'weekday-schedule-bullet-focused" style="top: ' +
                        u(e.lambda(null != (i = null != t ? d(t, "styles") : t) ? d(i, "scheduleBulletTop") : i, t)) +
                        'px;"></span>\n'
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 16, column: 110 }, end: { line: 16, column: 124 } } })
                                : i
                        ) + "weekday-schedule-title-focused"
                    );
                },
                7: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "            " +
                        (null !=
                        (i = (a(n, "allday-tmpl") || (t && a(t, "allday-tmpl")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? a(t, "model") : t, {
                            name: "allday-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 18, column: 12 }, end: { line: 18, column: 35 } },
                        }))
                            ? i
                            : "") +
                        "\n"
                    );
                },
                9: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "            " +
                        (null !=
                        (i = (a(n, "time-tmpl") || (t && a(t, "time-tmpl")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != t ? a(t, "model") : t, {
                            name: "time-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 20, column: 12 }, end: { line: 20, column: 33 } },
                        }))
                            ? i
                            : "") +
                        "\n"
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        "month-guide " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 38 }, end: { line: 1, column: 52 } } })
                                : a
                        ) +
                        'month-guide-focused"\n     style="top: -50%;\n            left: -50%;\n            width: 100%;\n            color: #ffffff;\n            background-color:' +
                        u(d(null != (i = null != t ? h(t, "model") : t) ? h(i, "dragBgColor") : i, t)) +
                        ";\n            height:" +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "scheduleHeight") : i, t)) +
                        "px;\n            line-height:" +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "scheduleHeight") : i, t)) +
                        "px;\n            border-radius: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "borderRadius") : i, t)) +
                        ";\n" +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isAllDay") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(1, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 10, column: 12 }, end: { line: 12, column: 19 } },
                        }))
                            ? i
                            : "") +
                        '">\n' +
                        (null !=
                        (i = h(n, "unless").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isAllDay") : i, {
                            name: "unless",
                            hash: {},
                            fn: e.program(3, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 13, column: 4 }, end: { line: 15, column: 15 } },
                        }))
                            ? i
                            : "") +
                        '    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 16, column: 16 }, end: { line: 16, column: 30 } } })
                                : a
                        ) +
                        "month-move-guide " +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 16, column: 47 }, end: { line: 16, column: 61 } } })
                                : a
                        ) +
                        "weekday-schedule-title " +
                        (null !=
                        (i = h(n, "unless").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isAllDay") : i, {
                            name: "unless",
                            hash: {},
                            fn: e.program(5, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 16, column: 84 }, end: { line: 16, column: 165 } },
                        }))
                            ? i
                            : "") +
                        '">\n' +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isAllDay") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(7, o, 0),
                            inverse: e.program(9, o, 0),
                            data: o,
                            loc: { start: { line: 17, column: 8 }, end: { line: 21, column: 15 } },
                        }))
                            ? i
                            : "") +
                        '    </div>\n</div>\n<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 24, column: 12 }, end: { line: 24, column: 26 } } })
                                : a
                        ) +
                        'month-guide-cover" style="height:' +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "scheduleHeight") : i, t)) +
                        "px; border-radius: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "borderRadius") : i, t)) +
                        ';"></div>\n'
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(2),
                i = n(6),
                a = n(1),
                r = n(8),
                s = n(16),
                c = n(5),
                u = n(113);
            function d(e, t, n) {
                r.call(this, t),
                    (this.layer = new s(null, t)),
                    (this._viewModel = null),
                    (this.options = l.extend(
                        {
                            moreLayerSize: { width: null, height: null },
                            scheduleHeight: parseInt(n.month.schedule.height, 10) || 18,
                            scheduleGutter: parseInt(n.month.schedule.marginTop, 10) || 2,
                            scheduleBulletTop: (parseInt(n.month.schedule.height, 10) || 18) / 3,
                            borderRadius: n.month.schedule.borderRadius,
                        },
                        e
                    )),
                    (this.theme = n),
                    i.on(t, "click", this._onClick, this);
            }
            l.inherit(d, r),
                (d.prototype._onClick = function (e) {
                    var t = i.getEventTarget(e),
                        n = o.classname("month-more-close");
                    (a.hasClass(t, n) || a.closest(t, "." + n)) && this.hide();
                }),
                (d.prototype._onMouseDown = function (e) {
                    var t = i.getEventTarget(e);
                    a.closest(t, o.classname(".month-more")) || this.hide();
                }),
                (d.prototype._getRenderPosition = function (e, t) {
                    var n = i.getMousePosition({ clientX: a.getPosition(e)[0], clientY: a.getPosition(t)[1] }, this.container),
                        l = a.getSize(this.container),
                        o = n[0] - 5,
                        r = n[1] - 5;
                    return [(o = c.ratio(l[0], 100, o)), (r = c.ratio(l[1], 100, r))];
                }),
                (d.prototype.destroy = function () {
                    this.layer.destroy(), (this.layer = null), i.off(this.container, "click", this._onClick, this), i.off(document.body, "mousedown", this._onMouseDown, this), r.prototype.destroy.call(this);
                }),
                (d.prototype.render = function (e) {
                    var t,
                        n,
                        r,
                        s,
                        c = a.closest(e.target, o.classname(".weekday-grid-line")),
                        d = a.closest(c, o.classname(".month-week-item")),
                        h = this.layer,
                        p = this,
                        m = this._getRenderPosition(c, d),
                        f = a.getSize(d)[1] + 10,
                        g = c.offsetWidth + 10,
                        y = this.options,
                        S = y.moreLayerSize,
                        _ = this._getStyles(this.theme),
                        C = "",
                        v = a.getSize(this.container),
                        E = m[0],
                        w = m[1];
                    (this._viewModel = l.extend(e, { scheduleGutter: y.scheduleGutter, scheduleHeight: y.scheduleHeight, scheduleBulletTop: y.scheduleBulletTop, borderRadius: y.borderRadius, styles: _ })),
                        (g = Math.max(g, 280)),
                        (C = parseInt(_.titleHeight, 10)),
                        (C += parseInt(_.titleMarginBottom, 10)),
                        e.schedules.length <= 10 ? (C += (y.scheduleGutter + y.scheduleHeight) * e.schedules.length) : (C += 10 * (y.scheduleGutter + y.scheduleHeight)),
                        (C += parseInt(_.paddingBottom, 10)),
                        (C += 5),
                        S.width && (g = S.width),
                        S.height && (C = S.height),
                        (isNaN(C) || C < f) && (C = f),
                        h.setContent(u(e)),
                        (t = (E * v[0]) / 100),
                        (n = (w * v[1]) / 100),
                        (r = t + g >= v[0]),
                        (s = n + C >= v[1]),
                        (E += "%"),
                        (w += "%"),
                        r && s ? h.setLTRB({ right: 0, bottom: 0 }) : !r && s ? h.setLTRB({ left: E, bottom: 0 }) : r && !s ? h.setLTRB({ right: 0, top: w }) : h.setPosition(E, w),
                        h.setSize(g, C),
                        h.show(),
                        l.debounce(function () {
                            i.on(document.body, "mousedown", p._onMouseDown, p);
                        })();
                }),
                (d.prototype.hide = function () {
                    this.layer.hide(), i.off(document.body, "mousedown", this._onMouseDown, this);
                }),
                (d.prototype.refresh = function () {
                    this._viewModel && this.layer.setContent(u(this._viewModel));
                }),
                (d.prototype.getMoreViewElement = function () {
                    return a.find(o.classname(".month-more"), this.layer.container);
                }),
                (d.prototype._getStyles = function (e) {
                    var t = {},
                        n = "";
                    return (
                        e &&
                            ((t.border = e.month.moreView.border || e.common.border),
                            (t.boxShadow = e.month.moreView.boxShadow),
                            (t.backgroundColor = e.month.moreView.backgroundColor || e.common.backgroundColor),
                            (t.paddingBottom = e.month.moreView.paddingBottom),
                            (t.titleHeight = e.month.moreViewTitle.height),
                            (t.titleMarginBottom = e.month.moreViewTitle.marginBottom),
                            (t.titleBackgroundColor = e.month.moreViewTitle.backgroundColor),
                            (t.titleBorderBottom = e.month.moreViewTitle.borderBottom),
                            (t.titlePadding = e.month.moreViewTitle.padding),
                            (t.listPadding = e.month.moreViewList.padding),
                            (n = "calc(100%"),
                            parseInt(t.titleHeight, 10) && (n += " - " + t.titleHeight),
                            parseInt(t.titleMarginBottom, 10) && (n += " - " + t.titleMarginBottom),
                            (n += ")"),
                            (t.listHeight = n)),
                        t
                    );
                }),
                (e.exports = d);
        },
        function (e, t, n) {
            var l = n(7);
            e.exports = (l.default || l).template({
                1: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i = (a(n, "fi") || (t && a(t, "fi")) || e.hooks.helperMissing).call(
                            null != t ? t : e.nullContext || {},
                            null != (i = null != t ? a(t, "model") : t) ? a(i, "isAllDay") : i,
                            "||",
                            null != t ? a(t, "hasMultiDates") : t,
                            { name: "fi", hash: {}, fn: e.program(2, o, 0), inverse: e.program(7, o, 0), data: o, loc: { start: { line: 9, column: 8 }, end: { line: 65, column: 15 } } }
                        ))
                        ? i
                        : "";
                },
                2: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = e.escapeExpression,
                        u = e.lambda,
                        d = "function",
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div data-id="' +
                        c((h(n, "stamp") || (t && h(t, "stamp")) || s).call(r, null != t ? h(t, "model") : t, { name: "stamp", hash: {}, data: o, loc: { start: { line: 10, column: 26 }, end: { line: 10, column: 41 } } })) +
                        '"\n                data-schedule-id="' +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "id") : i, t)) +
                        '" data-calendar-id="' +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "calendarId") : i, t)) +
                        '"\n                class="' +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 23 }, end: { line: 12, column: 37 } } })
                                : a
                        ) +
                        "month-more-schedule " +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 57 }, end: { line: 12, column: 71 } } })
                                : a
                        ) +
                        "month-more-allday " +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 12, column: 89 }, end: { line: 12, column: 103 } } })
                                : a
                        ) +
                        'weekday-schedule-title"\n                style="height: ' +
                        c(u((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; line-height: " +
                        c(u((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; margin-top: " +
                        c(u((i = o && h(o, "root")) && h(i, "scheduleGutter"), t)) +
                        "px; border-radius: " +
                        c(u((i = o && h(o, "root")) && h(i, "borderRadius"), t)) +
                        ";\n" +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(3, o, 0),
                            inverse: e.program(5, o, 0),
                            data: o,
                            loc: { start: { line: 14, column: 20 }, end: { line: 18, column: 27 } },
                        }))
                            ? i
                            : "") +
                        "                    " +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "customStyle") : i, t)) +
                        '">\n                    ' +
                        (null !=
                        (i = (h(n, "allday-tmpl") || (t && h(t, "allday-tmpl")) || s).call(r, null != t ? h(t, "model") : t, {
                            name: "allday-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 20, column: 20 }, end: { line: 20, column: 43 } },
                        }))
                            ? i
                            : "") +
                        "\n            </div>\n"
                    );
                },
                3: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                        color: #ffffff; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; border-left:3px solid " +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "borderColor") : i, t)) +
                        ";\n"
                    );
                },
                5: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                        color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "bgColor") : i, t)) +
                        "; border-left:3px solid " +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "borderColor") : i, t)) +
                        ";\n"
                    );
                },
                7: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return null !=
                        (i = (a(n, "fi") || (t && a(t, "fi")) || e.hooks.helperMissing).call(null != t ? t : e.nullContext || {}, null != (i = null != t ? a(t, "model") : t) ? a(i, "category") : i, "===", "time", {
                            name: "fi",
                            hash: {},
                            fn: e.program(8, o, 0),
                            inverse: e.program(17, o, 0),
                            data: o,
                            loc: { start: { line: 23, column: 12 }, end: { line: 64, column: 19 } },
                        }))
                        ? i
                        : "";
                },
                8: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = e.escapeExpression,
                        u = e.lambda,
                        d = "function",
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '                <div data-id="' +
                        c((h(n, "stamp") || (t && h(t, "stamp")) || s).call(r, null != t ? h(t, "model") : t, { name: "stamp", hash: {}, data: o, loc: { start: { line: 24, column: 30 }, end: { line: 24, column: 45 } } })) +
                        '"\n                    data-schedule-id="' +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "id") : i, t)) +
                        '" data-calendar-id="' +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "calendarId") : i, t)) +
                        '"\n                    class="' +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 26, column: 27 }, end: { line: 26, column: 41 } } })
                                : a
                        ) +
                        "month-more-schedule " +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 26, column: 61 }, end: { line: 26, column: 75 } } })
                                : a
                        ) +
                        "weekday-schedule " +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 26, column: 92 }, end: { line: 26, column: 106 } } })
                                : a
                        ) +
                        'weekday-schedule-time"\n                    style="height: ' +
                        c(u((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; line-height: " +
                        c(u((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; margin-top: " +
                        c(u((i = o && h(o, "root")) && h(i, "scheduleGutter"), t)) +
                        "px;" +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "customStyle") : i, t)) +
                        '">\n                    <span class="' +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 28, column: 33 }, end: { line: 28, column: 47 } } })
                                : a
                        ) +
                        'weekday-schedule-bullet"\n                        style="top: ' +
                        c(u((i = o && h(o, "root")) && h(i, "scheduleBulletTop"), t)) +
                        "px;\n" +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(9, o, 0),
                            inverse: e.program(11, o, 0),
                            data: o,
                            loc: { start: { line: 30, column: 28 }, end: { line: 34, column: 35 } },
                        }))
                            ? i
                            : "") +
                        '"></span>\n                    <span class="' +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 35, column: 33 }, end: { line: 35, column: 47 } } })
                                : a
                        ) +
                        'weekday-schedule-title"\n                        style="' +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(13, o, 0),
                            inverse: e.program(15, o, 0),
                            data: o,
                            loc: { start: { line: 36, column: 31 }, end: { line: 41, column: 35 } },
                        }))
                            ? i
                            : "") +
                        '"\n                        data-title="' +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "title") : i, t)) +
                        '">' +
                        (null !=
                        (i = (h(n, "time-tmpl") || (t && h(t, "time-tmpl")) || s).call(r, null != t ? h(t, "model") : t, { name: "time-tmpl", hash: {}, data: o, loc: { start: { line: 42, column: 53 }, end: { line: 42, column: 74 } } }))
                            ? i
                            : "") +
                        "</span>\n                </div>\n"
                    );
                },
                9: function (e, t, n, l, o) {
                    return "                                background: #ffffff\n";
                },
                11: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                                background:" + e.escapeExpression(e.lambda(null != (i = null != t ? a(t, "model") : t) ? a(i, "borderColor") : i, t)) + "\n                            ";
                },
                13: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "\n                                color: #ffffff;\n                                background-color: " + e.escapeExpression(e.lambda(null != (i = null != t ? a(t, "model") : t) ? a(i, "color") : i, t)) + "\n";
                },
                15: function (e, t, n, l, o) {
                    return "                                color:#333;\n                            ";
                },
                17: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = e.escapeExpression,
                        u = e.lambda,
                        d = "function",
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div data-id="' +
                        c((h(n, "stamp") || (t && h(t, "stamp")) || s).call(r, null != t ? h(t, "model") : t, { name: "stamp", hash: {}, data: o, loc: { start: { line: 45, column: 30 }, end: { line: 45, column: 45 } } })) +
                        '"\n                    data-schedule-id="' +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "id") : i, t)) +
                        '" data-calendar-id="' +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "calendarId") : i, t)) +
                        '"\n                    class="' +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 47, column: 27 }, end: { line: 47, column: 41 } } })
                                : a
                        ) +
                        "month-more-schedule " +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 47, column: 61 }, end: { line: 47, column: 75 } } })
                                : a
                        ) +
                        "weekday-schedule " +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(18, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 47, column: 92 }, end: { line: 47, column: 161 } },
                        }))
                            ? i
                            : "") +
                        '"\n                    style="height:' +
                        c(u((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; line-height:" +
                        c(u((i = o && h(o, "root")) && h(i, "scheduleHeight"), t)) +
                        "px; border-radius: " +
                        c(u((i = (i = o && h(o, "root")) && h(i, "styles")) && h(i, "borderRadius"), t)) +
                        ";\n" +
                        (null !=
                        (i = h(n, "unless").call(r, null != t ? h(t, "exceedLeft") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(20, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 49, column: 20 }, end: { line: 51, column: 31 } },
                        }))
                            ? i
                            : "") +
                        (null !=
                        (i = h(n, "unless").call(r, null != t ? h(t, "exceedRight") : t, {
                            name: "unless",
                            hash: {},
                            fn: e.program(22, o, 0),
                            inverse: e.noop,
                            data: o,
                            loc: { start: { line: 52, column: 20 }, end: { line: 54, column: 31 } },
                        }))
                            ? i
                            : "") +
                        (null !=
                        (i = h(n, "if").call(r, null != (i = null != t ? h(t, "model") : t) ? h(i, "isFocused") : i, {
                            name: "if",
                            hash: {},
                            fn: e.program(24, o, 0),
                            inverse: e.program(26, o, 0),
                            data: o,
                            loc: { start: { line: 55, column: 20 }, end: { line: 59, column: 27 } },
                        }))
                            ? i
                            : "") +
                        "                        " +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "customStyle") : i, t)) +
                        '">\n                    <span class="' +
                        c(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === d
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 61, column: 33 }, end: { line: 61, column: 47 } } })
                                : a
                        ) +
                        'weekday-schedule-title"\n                                    data-title="' +
                        c(u(null != (i = null != t ? h(t, "model") : t) ? h(i, "title") : i, t)) +
                        '">' +
                        (null !=
                        (i = (h(n, "schedule-tmpl") || (t && h(t, "schedule-tmpl")) || s).call(r, null != t ? h(t, "model") : t, {
                            name: "schedule-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 62, column: 65 }, end: { line: 62, column: 90 } },
                        }))
                            ? i
                            : "") +
                        "</span>\n                </div>\n"
                    );
                },
                18: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        e.escapeExpression(
                            "function" == typeof (i = null != (i = a(n, "CSS_PREFIX") || (null != t ? a(t, "CSS_PREFIX") : t)) ? i : e.hooks.helperMissing)
                                ? i.call(null != t ? t : e.nullContext || {}, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 47, column: 115 }, end: { line: 47, column: 129 } } })
                                : i
                        ) + "weekday-schedule-focused "
                    );
                },
                20: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                        margin-left: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "marginLeft"), t)) + ";\n";
                },
                22: function (e, t, n, l, o) {
                    var i,
                        a =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return "                        margin-right: " + e.escapeExpression(e.lambda((i = (i = o && a(o, "root")) && a(i, "styles")) && a(i, "marginRight"), t)) + ";\n";
                },
                24: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                        color: #ffffff; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        ";\n"
                    );
                },
                26: function (e, t, n, l, o) {
                    var i,
                        a = e.lambda,
                        r = e.escapeExpression,
                        s =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        "                        color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "color") : i, t)) +
                        "; background-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "bgColor") : i, t)) +
                        "; border-color:" +
                        r(a(null != (i = null != t ? s(t, "model") : t) ? s(i, "borderColor") : i, t)) +
                        ";\n"
                    );
                },
                compiler: [8, ">= 4.3.0"],
                main: function (e, t, n, l, o) {
                    var i,
                        a,
                        r = null != t ? t : e.nullContext || {},
                        s = e.hooks.helperMissing,
                        c = "function",
                        u = e.escapeExpression,
                        d = e.lambda,
                        h =
                            e.lookupProperty ||
                            function (e, t) {
                                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                            };
                    return (
                        '<div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 26 } } })
                                : a
                        ) +
                        'month-more" style="padding-bottom: ' +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "paddingBottom") : i, t)) +
                        "; border: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "border") : i, t)) +
                        "; box-shadow: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "boxShadow") : i, t)) +
                        "; background-color: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "backgroundColor") : i, t)) +
                        ';">\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 2, column: 16 }, end: { line: 2, column: 30 } } })
                                : a
                        ) +
                        'month-more-title"\n        style="height: ' +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "titleHeight") : i, t)) +
                        "; margin-bottom: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "titleMarginBottom") : i, t)) +
                        "; background-color: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "titleBackgroundColor") : i, t)) +
                        "; border-bottom: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "titleBorderBottom") : i, t)) +
                        "; padding: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "titlePadding") : i, t)) +
                        ';">\n        <span class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 4, column: 21 }, end: { line: 4, column: 35 } } })
                                : a
                        ) +
                        'month-more-title-date">' +
                        (null !=
                        (i = (h(n, "monthMoreTitleDate-tmpl") || (t && h(t, "monthMoreTitleDate-tmpl")) || s).call(r, null != t ? h(t, "date") : t, null != t ? h(t, "dayname") : t, {
                            name: "monthMoreTitleDate-tmpl",
                            hash: {},
                            data: o,
                            loc: { start: { line: 4, column: 58 }, end: { line: 4, column: 100 } },
                        }))
                            ? i
                            : "") +
                        '</span>\n        <button type="button" class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 5, column: 37 }, end: { line: 5, column: 51 } } })
                                : a
                        ) +
                        'month-more-close">' +
                        (null !=
                        (i =
                            typeof (a = null != (a = h(n, "monthMoreClose-tmpl") || (null != t ? h(t, "monthMoreClose-tmpl") : t)) ? a : s) === c
                                ? a.call(r, { name: "monthMoreClose-tmpl", hash: {}, data: o, loc: { start: { line: 5, column: 69 }, end: { line: 5, column: 94 } } })
                                : a)
                            ? i
                            : "") +
                        '</button>\n    </div>\n    <div class="' +
                        u(
                            typeof (a = null != (a = h(n, "CSS_PREFIX") || (null != t ? h(t, "CSS_PREFIX") : t)) ? a : s) === c
                                ? a.call(r, { name: "CSS_PREFIX", hash: {}, data: o, loc: { start: { line: 7, column: 16 }, end: { line: 7, column: 30 } } })
                                : a
                        ) +
                        'month-more-list" style="padding: ' +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "listPadding") : i, t)) +
                        "; height: " +
                        u(d(null != (i = null != t ? h(t, "styles") : t) ? h(i, "listHeight") : i, t)) +
                        ';">\n' +
                        (null !=
                        (i = h(n, "each").call(r, null != t ? h(t, "schedules") : t, { name: "each", hash: {}, fn: e.program(1, o, 0), inverse: e.noop, data: o, loc: { start: { line: 8, column: 8 }, end: { line: 66, column: 17 } } }))
                            ? i
                            : "") +
                        "    </div>\n</div>\n"
                    );
                },
                useData: !0,
            });
        },
        function (e, t, n) {},
        function (e, t, n) {
            "use strict";
            var l = n(0),
                o = n(20),
                i = n(3),
                a = n(5),
                r = n(2),
                s = Math.max,
                c = 60,
                u = {
                    stamp: function (e) {
                        return l.stamp(e);
                    },
                    equal: function (e, t) {
                        return e === t;
                    },
                    or: function (e, t) {
                        return e || t;
                    },
                    and: function (e, t) {
                        return e && t;
                    },
                    fi: function (e, t, n, l) {
                        switch (t) {
                            case "==":
                                return e == n ? l.fn(this) : l.inverse(this);
                            case "===":
                                return e === n ? l.fn(this) : l.inverse(this);
                            case "!==":
                                return e !== n ? l.fn(this) : l.inverse(this);
                            case "<":
                                return e < n ? l.fn(this) : l.inverse(this);
                            case "||":
                                return e || n ? l.fn(this) : l.inverse(this);
                            default:
                                throw new Error("Not match operation");
                        }
                    },
                    hhmm: function (e) {
                        return i.format(e, "HH:mm");
                    },
                    "common-width": function (e) {
                        return d(e, "%", "width");
                    },
                    "grid-left": function (e, t) {
                        return (function (e, t) {
                            return t[e.left] ? t[e.left].left : 0;
                        })(e, t);
                    },
                    "grid-width": function (e, t) {
                        return h(e, t);
                    },
                    "time-scheduleBlock": function (e) {
                        return [d(e.top, "px", "top"), d(e.left, "%", "left"), d(e.width, "%", "width"), d(e.height, "px", "height")].join(";");
                    },
                    "month-scheduleBlock": function (e, t, n, l) {
                        return [d((e.top - 1) * n + l, "px", "top"), d(t[e.left] ? t[e.left].left : 0, "%", "left"), d(h(e, t), "%", "width"), d(e.height, "px", "height")].join(";");
                    },
                    holiday: function (e) {
                        var t = "";
                        return 0 === e && (t = r.classname("holiday-sun")), 6 === e && (t = r.classname("holiday-sat")), t;
                    },
                    add: function (e, t) {
                        return e + t;
                    },
                    multiply: function (e, t) {
                        return e * t;
                    },
                    divide: function (e, t) {
                        return e / t;
                    },
                    subtract: function (e, t) {
                        return e - t;
                    },
                    getRight: function (e, t) {
                        return s(0, 100 - (e + t));
                    },
                    CSS_PREFIX: function () {
                        return r.cssPrefix;
                    },
                    reverse: function (e) {
                        return e.slice().reverse();
                    },
                    "milestone-tmpl": function (e) {
                        return '<span class="' + r.classname("icon") + " " + r.classname("ic-milestone") + '"></span><span style="background-color: ' + e.bgColor + '">' + a.stripTags(e.title) + "</span>";
                    },
                    "milestoneTitle-tmpl": function () {
                        return '<span class="' + r.classname("left-content") + '">Milestone</span>';
                    },
                    "task-tmpl": function (e) {
                        return "#" + e.title;
                    },
                    "taskTitle-tmpl": function () {
                        return '<span class="' + r.classname("left-content") + '">Task</span>';
                    },
                    "alldayTitle-tmpl": function () {
                        return '<span class="' + r.classname("left-content") + '">All Day</span>';
                    },
                    "allday-tmpl": function (e) {
                        return a.stripTags(e.title);
                    },
                    "time-tmpl": function (e) {
                        return a.stripTags(e.title);
                    },
                    "goingDuration-tmpl": function (e) {
                        var t = e.goingDuration,
                            n = parseInt(t / c, 10),
                            l = t % c;
                        return "GoingTime " + i.leadingZero(n, 2) + ":" + i.leadingZero(l, 2);
                    },
                    "comingDuration-tmpl": function (e) {
                        var t = e.goingDuration,
                            n = parseInt(t / c, 10),
                            l = t % c;
                        return "ComingTime " + i.leadingZero(n, 2) + ":" + i.leadingZero(l, 2);
                    },
                    "monthMoreTitleDate-tmpl": function (e, t) {
                        var n = r.classname("month-more-title-day"),
                            o = r.classname("month-more-title-day-label");
                        return '<span class="' + n + '">' + l.pick(e.split("."), 2) + '</span> <span class="' + o + '">' + t + "</span>";
                    },
                    "monthMoreClose-tmpl": function () {
                        return "";
                    },
                    "monthGridHeader-tmpl": function (e) {
                        var t = parseInt(e.date.split("-")[2], 10),
                            n = [];
                        return n.push(r.classname("weekday-grid-date")), e.isToday && n.push(r.classname("weekday-grid-date-decorator")), '<span class="' + n.join(" ") + '">' + t + "</span>";
                    },
                    "monthGridHeaderExceed-tmpl": function (e) {
                        return '<span class="' + r.classname("weekday-grid-more-schedules") + '">' + e + " more</span>";
                    },
                    "monthGridFooter-tmpl": function () {
                        return "";
                    },
                    "monthGridFooterExceed-tmpl": function (e) {
                        return "";
                    },
                    "monthDayname-tmpl": function (e) {
                        return e.label;
                    },
                    "weekDayname-tmpl": function (e) {
                        var t = r.classname("dayname-date"),
                            n = r.classname("dayname-name");
                        return '<span class="' + t + '">' + e.date + '</span>&nbsp;&nbsp;<span class="' + n + '">' + e.dayName + "</span>";
                    },
                    "weekGridFooterExceed-tmpl": function (e) {
                        return "+" + e;
                    },
                    "dayGridTitle-tmpl": function (e) {
                        var t = o.helpers[e + "Title-tmpl"];
                        return t ? t(e) : e;
                    },
                    "schedule-tmpl": function (e) {
                        var t = o.helpers[e.category + "-tmpl"];
                        return t ? t(e) : "";
                    },
                    "collapseBtnTitle-tmpl": function () {
                        return '<span class="' + r.classname("icon") + " " + r.classname("ic-arrow-solid-top") + '"></span>';
                    },
                    "timezoneDisplayLabel-tmpl": function (e, t) {
                        var n, o, a;
                        return l.isUndefined(t) && ((n = e < 0 ? "-" : "+"), (o = Math.abs(parseInt(e / c, 10))), (a = Math.abs(e % c)), (t = n + i.leadingZero(o, 2) + ":" + i.leadingZero(a, 2))), t;
                    },
                    "timegridDisplayPrimayTime-tmpl": function (e) {
                        return o.helpers["timegridDisplayPrimaryTime-tmpl"](e);
                    },
                    "timegridDisplayPrimaryTime-tmpl": function (e) {
                        var t = e.hour,
                            n = t >= 12 ? "pm" : "am";
                        return t > 12 && (t -= 12), t + " " + n;
                    },
                    "timegridDisplayTime-tmpl": function (e) {
                        return i.leadingZero(e.hour, 2) + ":" + i.leadingZero(e.minutes, 2);
                    },
                    "timegridCurrentTime-tmpl": function (e) {
                        var t = [];
                        return e.dateDifference && t.push("[" + e.dateDifferenceSign + e.dateDifference + "]<br>"), t.push(i.format(e.hourmarker, "HH:mm")), t.join("");
                    },
                    "popupIsAllDay-tmpl": function () {
                        return "All day";
                    },
                    "popupStateFree-tmpl": function () {
                        return "Free";
                    },
                    "popupStateBusy-tmpl": function () {
                        return "Busy";
                    },
                    "titlePlaceholder-tmpl": function () {
                        return "Subject";
                    },
                    "locationPlaceholder-tmpl": function () {
                        return "Location";
                    },
                    "startDatePlaceholder-tmpl": function () {
                        return "Start date";
                    },
                    "endDatePlaceholder-tmpl": function () {
                        return "End date";
                    },
                    "popupSave-tmpl": function () {
                        return "Save";
                    },
                    "popupUpdate-tmpl": function () {
                        return "Update";
                    },
                    "popupDetailDate-tmpl": function (e, t, n) {
                        var l = i.isSameDate(t, n),
                            o = (l ? "" : "DD.MM.YYYY ") + "hh:mm tt";
                        return e ? i.format(t, "DD.MM.YYYY") + (l ? "" : " - " + i.format(n, "DD.MM.YYYY")) : i.format(t, "DD.MM.YYYY hh:mm tt") + " - " + i.format(n, o);
                    },
                    "popupDetailLocation-tmpl": function (e) {
                        return e.location;
                    },
                    "popupDetailUser-tmpl": function (e) {
                        return (e.attendees || []).join(", ");
                    },
                    "popupDetailState-tmpl": function (e) {
                        return e.state || "Busy";
                    },
                    "popupDetailRepeat-tmpl": function (e) {
                        return e.recurrenceRule;
                    },
                    "popupDetailBody-tmpl": function (e) {
                        return e.body;
                    },
                    "popupEdit-tmpl": function () {
                        return '<i class="bx bx-pencil" style="padding-right:2px;"></i>'+"Status";
                        
                        //return " Status";
                    },
                    "popupDelete-tmpl": function () {
                        //return "Delete";
                        return '<i class="bx bx-trash" style="padding-right:2px;"></i>'+"Delete";
                    },
                };
            function d(e, t, n) {
                return (n = n || ""), l.isNumber(e) ? n + ":" + e + t : n + ":auto";
            }
            function h(e, t) {
                for (var n, l = 0, o = 0, i = t.length; o < e.width; o += 1) (n = (e.left + o) % i), (n += parseInt((e.left + o) / i, 10)) < i && (l += t[n] ? t[n].width : 0);
                return l;
            }
            o.registerHelper(u);
        },
    ]);
});
