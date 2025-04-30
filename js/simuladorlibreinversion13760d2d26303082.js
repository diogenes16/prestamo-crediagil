!(function (T, g) {
  "object" == typeof exports && typeof module < "u"
    ? (module.exports = g())
    : "function" == typeof define && define.amd
    ? define(g)
    : ((T = T || self).Swiper = g());
})(this, function () {
  "use strict";
  var T =
      typeof document > "u"
        ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            location: { hash: "" },
          }
        : document,
    g =
      typeof window > "u"
        ? {
            document: T,
            navigator: { userAgent: "" },
            location: {},
            history: {},
            CustomEvent: function () {
              return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
              return {
                getPropertyValue: function () {
                  return "";
                },
              };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
          }
        : window,
    k = function (e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return (this.length = e.length), this;
    };
  function w(r, e) {
    var a = [],
      t = 0;
    if (r && !e && r instanceof k) return r;
    if (r)
      if ("string" == typeof r) {
        var i,
          s,
          n = r.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          var l = "div";
          for (
            0 === n.indexOf("<li") && (l = "ul"),
              0 === n.indexOf("<tr") && (l = "tbody"),
              (0 === n.indexOf("<td") || 0 === n.indexOf("<th")) && (l = "tr"),
              0 === n.indexOf("<tbody") && (l = "table"),
              0 === n.indexOf("<option") && (l = "select"),
              (s = T.createElement(l)).innerHTML = n,
              t = 0;
            t < s.childNodes.length;
            t += 1
          )
            a.push(s.childNodes[t]);
        } else
          for (
            i =
              e || "#" !== r[0] || r.match(/[ .<>:~]/)
                ? (e || T).querySelectorAll(r.trim())
                : [T.getElementById(r.trim().split("#")[1])],
              t = 0;
            t < i.length;
            t += 1
          )
            i[t] && a.push(i[t]);
      } else if (r.nodeType || r === g || r === T) a.push(r);
      else if (r.length > 0 && r[0].nodeType)
        for (t = 0; t < r.length; t += 1) a.push(r[t]);
    return new k(a);
  }
  function ie(r) {
    for (var e = [], a = 0; a < r.length; a += 1)
      -1 === e.indexOf(r[a]) && e.push(r[a]);
    return e;
  }
  (w.fn = k.prototype), (w.Class = k), (w.Dom7 = k);
  var me = {
    addClass: function Ge(r) {
      if (typeof r > "u") return this;
      for (var e = r.split(" "), a = 0; a < e.length; a += 1)
        for (var t = 0; t < this.length; t += 1)
          typeof this[t] < "u" &&
            typeof this[t].classList < "u" &&
            this[t].classList.add(e[a]);
      return this;
    },
    removeClass: function He(r) {
      for (var e = r.split(" "), a = 0; a < e.length; a += 1)
        for (var t = 0; t < this.length; t += 1)
          typeof this[t] < "u" &&
            typeof this[t].classList < "u" &&
            this[t].classList.remove(e[a]);
      return this;
    },
    hasClass: function Ae(r) {
      return !!this[0] && this[0].classList.contains(r);
    },
    toggleClass: function Ve(r) {
      for (var e = r.split(" "), a = 0; a < e.length; a += 1)
        for (var t = 0; t < this.length; t += 1)
          typeof this[t] < "u" &&
            typeof this[t].classList < "u" &&
            this[t].classList.toggle(e[a]);
      return this;
    },
    attr: function Xe(r, e) {
      var a = arguments;
      if (1 === arguments.length && "string" == typeof r)
        return this[0] ? this[0].getAttribute(r) : void 0;
      for (var t = 0; t < this.length; t += 1)
        if (2 === a.length) this[t].setAttribute(r, e);
        else
          for (var i in r) (this[t][i] = r[i]), this[t].setAttribute(i, r[i]);
      return this;
    },
    removeAttr: function Be(r) {
      for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(r);
      return this;
    },
    data: function Ye(r, e) {
      var a;
      if (typeof e > "u")
        return (a = this[0])
          ? a.dom7ElementDataStorage && r in a.dom7ElementDataStorage
            ? a.dom7ElementDataStorage[r]
            : a.getAttribute("data-" + r) || void 0
          : void 0;
      for (var i = 0; i < this.length; i += 1)
        (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
          (a.dom7ElementDataStorage[r] = e);
      return this;
    },
    transform: function Ne(r) {
      for (var e = 0; e < this.length; e += 1) {
        var a = this[e].style;
        (a.webkitTransform = r), (a.transform = r);
      }
      return this;
    },
    transition: function Fe(r) {
      "string" != typeof r && (r += "ms");
      for (var e = 0; e < this.length; e += 1) {
        var a = this[e].style;
        (a.webkitTransitionDuration = r), (a.transitionDuration = r);
      }
      return this;
    },
    on: function Re() {
      for (var r, e = [], a = arguments.length; a--; ) e[a] = arguments[a];
      var t = e[0],
        i = e[1],
        s = e[2],
        n = e[3];
      function l(c) {
        var C = c.target;
        if (C) {
          var b = c.target.dom7EventData || [];
          if ((b.indexOf(c) < 0 && b.unshift(c), w(C).is(i))) s.apply(C, b);
          else
            for (var E = w(C).parents(), y = 0; y < E.length; y += 1)
              w(E[y]).is(i) && s.apply(E[y], b);
        }
      }
      function o(c) {
        var C = (c && c.target && c.target.dom7EventData) || [];
        C.indexOf(c) < 0 && C.unshift(c), s.apply(this, C);
      }
      "function" == typeof e[1] &&
        ((t = (r = e)[0]), (s = r[1]), (n = r[2]), (i = void 0)),
        n || (n = !1);
      for (var p, d = t.split(" "), f = 0; f < this.length; f += 1) {
        var u = this[f];
        if (i)
          for (p = 0; p < d.length; p += 1) {
            var m = d[p];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
              u.dom7LiveListeners[m] || (u.dom7LiveListeners[m] = []),
              u.dom7LiveListeners[m].push({ listener: s, proxyListener: l }),
              u.addEventListener(m, l, n);
          }
        else
          for (p = 0; p < d.length; p += 1) {
            var v = d[p];
            u.dom7Listeners || (u.dom7Listeners = {}),
              u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
              u.dom7Listeners[v].push({ listener: s, proxyListener: o }),
              u.addEventListener(v, o, n);
          }
      }
      return this;
    },
    off: function qe() {
      for (var r, e = [], a = arguments.length; a--; ) e[a] = arguments[a];
      var t = e[0],
        i = e[1],
        s = e[2],
        n = e[3];
      "function" == typeof e[1] &&
        ((t = (r = e)[0]), (s = r[1]), (n = r[2]), (i = void 0)),
        n || (n = !1);
      for (var l = t.split(" "), o = 0; o < l.length; o += 1)
        for (var d = l[o], p = 0; p < this.length; p += 1) {
          var f = this[p],
            u = void 0;
          if (
            (!i && f.dom7Listeners
              ? (u = f.dom7Listeners[d])
              : i && f.dom7LiveListeners && (u = f.dom7LiveListeners[d]),
            u && u.length)
          )
            for (var v = u.length - 1; v >= 0; v -= 1) {
              var m = u[v];
              (s && m.listener === s) ||
              (s &&
                m.listener &&
                m.listener.dom7proxy &&
                m.listener.dom7proxy === s)
                ? (f.removeEventListener(d, m.proxyListener, n), u.splice(v, 1))
                : s ||
                  (f.removeEventListener(d, m.proxyListener, n),
                  u.splice(v, 1));
            }
        }
      return this;
    },
    trigger: function We() {
      for (var r = [], e = arguments.length; e--; ) r[e] = arguments[e];
      for (var a = r[0].split(" "), t = r[1], i = 0; i < a.length; i += 1)
        for (var s = a[i], n = 0; n < this.length; n += 1) {
          var l = this[n],
            o = void 0;
          try {
            o = new g.CustomEvent(s, {
              detail: t,
              bubbles: !0,
              cancelable: !0,
            });
          } catch {
            (o = T.createEvent("Event")).initEvent(s, !0, !0), (o.detail = t);
          }
          (l.dom7EventData = r.filter(function (d, p) {
            return p > 0;
          })),
            l.dispatchEvent(o),
            (l.dom7EventData = []),
            delete l.dom7EventData;
        }
      return this;
    },
    transitionEnd: function je(r) {
      var t,
        e = ["webkitTransitionEnd", "transitionend"],
        a = this;
      function i(s) {
        if (s.target === this)
          for (r.call(this, s), t = 0; t < e.length; t += 1) a.off(e[t], i);
      }
      if (r) for (t = 0; t < e.length; t += 1) a.on(e[t], i);
      return this;
    },
    outerWidth: function Ue(r) {
      if (this.length > 0) {
        if (r) {
          var e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function _e(r) {
      if (this.length > 0) {
        if (r) {
          var e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function Ke() {
      if (this.length > 0) {
        var r = this[0],
          e = r.getBoundingClientRect(),
          a = T.body;
        return {
          top:
            e.top +
            (r === g ? g.scrollY : r.scrollTop) -
            (r.clientTop || a.clientTop || 0),
          left:
            e.left +
            (r === g ? g.scrollX : r.scrollLeft) -
            (r.clientLeft || a.clientLeft || 0),
        };
      }
      return null;
    },
    css: function Ze(r, e) {
      var a;
      if (1 === arguments.length) {
        if ("string" != typeof r) {
          for (a = 0; a < this.length; a += 1)
            for (var t in r) this[a].style[t] = r[t];
          return this;
        }
        if (this[0])
          return g.getComputedStyle(this[0], null).getPropertyValue(r);
      }
      if (2 === arguments.length && "string" == typeof r) {
        for (a = 0; a < this.length; a += 1) this[a].style[r] = e;
        return this;
      }
      return this;
    },
    each: function Je(r) {
      if (!r) return this;
      for (var e = 0; e < this.length; e += 1)
        if (!1 === r.call(this[e], e, this[e])) return this;
      return this;
    },
    html: function ea(r) {
      if (typeof r > "u") return this[0] ? this[0].innerHTML : void 0;
      for (var e = 0; e < this.length; e += 1) this[e].innerHTML = r;
      return this;
    },
    text: function aa(r) {
      if (typeof r > "u") return this[0] ? this[0].textContent.trim() : null;
      for (var e = 0; e < this.length; e += 1) this[e].textContent = r;
      return this;
    },
    is: function ta(r) {
      var a,
        t,
        e = this[0];
      if (!e || typeof r > "u") return !1;
      if ("string" == typeof r) {
        if (e.matches) return e.matches(r);
        if (e.webkitMatchesSelector) return e.webkitMatchesSelector(r);
        if (e.msMatchesSelector) return e.msMatchesSelector(r);
        for (a = w(r), t = 0; t < a.length; t += 1) if (a[t] === e) return !0;
        return !1;
      }
      if (r === T) return e === T;
      if (r === g) return e === g;
      if (r.nodeType || r instanceof k) {
        for (a = r.nodeType ? [r] : r, t = 0; t < a.length; t += 1)
          if (a[t] === e) return !0;
        return !1;
      }
      return !1;
    },
    index: function ra() {
      var e,
        r = this[0];
      if (r) {
        for (e = 0; null !== (r = r.previousSibling); )
          1 === r.nodeType && (e += 1);
        return e;
      }
    },
    eq: function ia(r) {
      if (typeof r > "u") return this;
      var a,
        e = this.length;
      return new k(
        r > e - 1 ? [] : r < 0 ? ((a = e + r) < 0 ? [] : [this[a]]) : [this[r]]
      );
    },
    append: function sa() {
      for (var r = [], e = arguments.length; e--; ) r[e] = arguments[e];
      for (var a, t = 0; t < r.length; t += 1) {
        a = r[t];
        for (var i = 0; i < this.length; i += 1)
          if ("string" == typeof a) {
            var s = T.createElement("div");
            for (s.innerHTML = a; s.firstChild; )
              this[i].appendChild(s.firstChild);
          } else if (a instanceof k)
            for (var n = 0; n < a.length; n += 1) this[i].appendChild(a[n]);
          else this[i].appendChild(a);
      }
      return this;
    },
    prepend: function na(r) {
      var e, a;
      for (e = 0; e < this.length; e += 1)
        if ("string" == typeof r) {
          var t = T.createElement("div");
          for (t.innerHTML = r, a = t.childNodes.length - 1; a >= 0; a -= 1)
            this[e].insertBefore(t.childNodes[a], this[e].childNodes[0]);
        } else if (r instanceof k)
          for (a = 0; a < r.length; a += 1)
            this[e].insertBefore(r[a], this[e].childNodes[0]);
        else this[e].insertBefore(r, this[e].childNodes[0]);
      return this;
    },
    next: function la(r) {
      return this.length > 0
        ? r
          ? this[0].nextElementSibling && w(this[0].nextElementSibling).is(r)
            ? new k([this[0].nextElementSibling])
            : new k([])
          : new k(
              this[0].nextElementSibling ? [this[0].nextElementSibling] : []
            )
        : new k([]);
    },
    nextAll: function oa(r) {
      var e = [],
        a = this[0];
      if (!a) return new k([]);
      for (; a.nextElementSibling; ) {
        var t = a.nextElementSibling;
        r ? w(t).is(r) && e.push(t) : e.push(t), (a = t);
      }
      return new k(e);
    },
    prev: function da(r) {
      if (this.length > 0) {
        var e = this[0];
        return r
          ? e.previousElementSibling && w(e.previousElementSibling).is(r)
            ? new k([e.previousElementSibling])
            : new k([])
          : new k(e.previousElementSibling ? [e.previousElementSibling] : []);
      }
      return new k([]);
    },
    prevAll: function pa(r) {
      var e = [],
        a = this[0];
      if (!a) return new k([]);
      for (; a.previousElementSibling; ) {
        var t = a.previousElementSibling;
        r ? w(t).is(r) && e.push(t) : e.push(t), (a = t);
      }
      return new k(e);
    },
    parent: function fa(r) {
      for (var e = [], a = 0; a < this.length; a += 1)
        null !== this[a].parentNode &&
          (r
            ? w(this[a].parentNode).is(r) && e.push(this[a].parentNode)
            : e.push(this[a].parentNode));
      return w(ie(e));
    },
    parents: function ua(r) {
      for (var e = [], a = 0; a < this.length; a += 1)
        for (var t = this[a].parentNode; t; )
          r ? w(t).is(r) && e.push(t) : e.push(t), (t = t.parentNode);
      return w(ie(e));
    },
    closest: function va(r) {
      var e = this;
      return typeof r > "u"
        ? new k([])
        : (e.is(r) || (e = e.parents(r).eq(0)), e);
    },
    find: function ca(r) {
      for (var e = [], a = 0; a < this.length; a += 1)
        for (var t = this[a].querySelectorAll(r), i = 0; i < t.length; i += 1)
          e.push(t[i]);
      return new k(e);
    },
    children: function ha(r) {
      for (var e = [], a = 0; a < this.length; a += 1)
        for (var t = this[a].childNodes, i = 0; i < t.length; i += 1)
          r
            ? 1 === t[i].nodeType && w(t[i]).is(r) && e.push(t[i])
            : 1 === t[i].nodeType && e.push(t[i]);
      return new k(ie(e));
    },
    remove: function ma() {
      for (var r = 0; r < this.length; r += 1)
        this[r].parentNode && this[r].parentNode.removeChild(this[r]);
      return this;
    },
    add: function ga() {
      for (var r = [], e = arguments.length; e--; ) r[e] = arguments[e];
      var t,
        i,
        a = this;
      for (t = 0; t < r.length; t += 1) {
        var s = w(r[t]);
        for (i = 0; i < s.length; i += 1) (a[a.length] = s[i]), (a.length += 1);
      }
      return a;
    },
    styles: function Qe() {
      return this[0] ? g.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(me).forEach(function (r) {
    w.fn[r] = w.fn[r] || me[r];
  });
  var t,
    e,
    h = {
      deleteProps: function (e) {
        var a = e;
        Object.keys(a).forEach(function (t) {
          try {
            a[t] = null;
          } catch {}
          try {
            delete a[t];
          } catch {}
        });
      },
      nextTick: function (e, a) {
        return void 0 === a && (a = 0), setTimeout(e, a);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, a) {
        void 0 === a && (a = "x");
        var t,
          i,
          s,
          n = g.getComputedStyle(e, null);
        return (
          g.WebKitCSSMatrix
            ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
                (i = i
                  .split(", ")
                  .map(function (l) {
                    return l.replace(",", ".");
                  })
                  .join(", ")),
              (s = new g.WebKitCSSMatrix("none" === i ? "" : i)))
            : (t = (s =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === a &&
            (i = g.WebKitCSSMatrix
              ? s.m41
              : 16 === t.length
              ? parseFloat(t[12])
              : parseFloat(t[4])),
          "y" === a &&
            (i = g.WebKitCSSMatrix
              ? s.m42
              : 16 === t.length
              ? parseFloat(t[13])
              : parseFloat(t[5])),
          i || 0
        );
      },
      parseUrlQuery: function (e) {
        var i,
          s,
          n,
          l,
          a = {},
          t = e || g.location.href;
        if ("string" == typeof t && t.length)
          for (
            l = (s = (t = t.indexOf("?") > -1 ? t.replace(/\S*\?/, "") : "")
              .split("&")
              .filter(function (o) {
                return "" !== o;
              })).length,
              i = 0;
            i < l;
            i += 1
          )
            (n = s[i].replace(/#\S+/g, "").split("=")),
              (a[decodeURIComponent(n[0])] =
                typeof n[1] > "u" ? void 0 : decodeURIComponent(n[1]) || "");
        return a;
      },
      isObject: function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        );
      },
      extend: function () {
        for (var e = [], a = arguments.length; a--; ) e[a] = arguments[a];
        for (var t = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (null != s)
            for (
              var n = Object.keys(Object(s)), l = 0, o = n.length;
              l < o;
              l += 1
            ) {
              var d = n[l],
                p = Object.getOwnPropertyDescriptor(s, d);
              void 0 !== p &&
                p.enumerable &&
                (h.isObject(t[d]) && h.isObject(s[d])
                  ? h.extend(t[d], s[d])
                  : !h.isObject(t[d]) && h.isObject(s[d])
                  ? ((t[d] = {}), h.extend(t[d], s[d]))
                  : (t[d] = s[d]));
            }
        }
        return t;
      },
    },
    x =
      ((e = T.createElement("div")),
      {
        touch:
          (g.Modernizr && !0 === g.Modernizr.touch) ||
          !!(
            g.navigator.maxTouchPoints > 0 ||
            "ontouchstart" in g ||
            (g.DocumentTouch && T instanceof g.DocumentTouch)
          ),
        pointerEvents: !!(
          g.navigator.pointerEnabled ||
          g.PointerEvent ||
          ("maxTouchPoints" in g.navigator && g.navigator.maxTouchPoints > 0)
        ),
        prefixedPointerEvents: !!g.navigator.msPointerEnabled,
        transition:
          ((t = e.style),
          "transition" in t || "webkitTransition" in t || "MozTransition" in t),
        transforms3d:
          (g.Modernizr && !0 === g.Modernizr.csstransforms3d) ||
          (function () {
            var t = e.style;
            return (
              "webkitPerspective" in t ||
              "MozPerspective" in t ||
              "OPerspective" in t ||
              "MsPerspective" in t ||
              "perspective" in t
            );
          })(),
        flexbox: (function () {
          for (
            var t = e.style,
              i =
                "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                  " "
                ),
              s = 0;
            s < i.length;
            s += 1
          )
            if (i[s] in t) return !0;
          return !1;
        })(),
        observer: "MutationObserver" in g || "WebkitMutationObserver" in g,
        passiveListener: (function () {
          var t = !1;
          try {
            var i = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
            g.addEventListener("testPassiveListener", null, i);
          } catch {}
          return t;
        })(),
        gestures: "ongesturestart" in g,
      }),
    Y = {
      isIE:
        !!g.navigator.userAgent.match(/Trident/g) ||
        !!g.navigator.userAgent.match(/MSIE/g),
      isEdge: !!g.navigator.userAgent.match(/Edge/g),
      isSafari: (function e() {
        var a = g.navigator.userAgent.toLowerCase();
        return (
          a.indexOf("safari") >= 0 &&
          a.indexOf("chrome") < 0 &&
          a.indexOf("android") < 0
        );
      })(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        g.navigator.userAgent
      ),
    },
    N = function (e) {
      void 0 === e && (e = {});
      var a = this;
      (a.params = e),
        (a.eventsListeners = {}),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach(function (t) {
            a.on(t, a.params.on[t]);
          });
    },
    ge = { components: { configurable: !0 } };
  (N.prototype.on = function (e, a, t) {
    var i = this;
    if ("function" != typeof a) return i;
    var s = t ? "unshift" : "push";
    return (
      e.split(" ").forEach(function (n) {
        i.eventsListeners[n] || (i.eventsListeners[n] = []),
          i.eventsListeners[n][s](a);
      }),
      i
    );
  }),
    (N.prototype.once = function (e, a, t) {
      var i = this;
      if ("function" != typeof a) return i;
      function s() {
        for (var n = [], l = arguments.length; l--; ) n[l] = arguments[l];
        a.apply(i, n), i.off(e, s), s.f7proxy && delete s.f7proxy;
      }
      return (s.f7proxy = a), i.on(e, s, t);
    }),
    (N.prototype.off = function (e, a) {
      var t = this;
      return (
        t.eventsListeners &&
          e.split(" ").forEach(function (i) {
            typeof a > "u"
              ? (t.eventsListeners[i] = [])
              : t.eventsListeners[i] &&
                t.eventsListeners[i].length &&
                t.eventsListeners[i].forEach(function (s, n) {
                  (s === a || (s.f7proxy && s.f7proxy === a)) &&
                    t.eventsListeners[i].splice(n, 1);
                });
          }),
        t
      );
    }),
    (N.prototype.emit = function () {
      for (var e = [], a = arguments.length; a--; ) e[a] = arguments[a];
      var i,
        s,
        n,
        t = this;
      return t.eventsListeners
        ? ("string" == typeof e[0] || Array.isArray(e[0])
            ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
            : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t)),
          (Array.isArray(i) ? i : i.split(" ")).forEach(function (o) {
            if (t.eventsListeners && t.eventsListeners[o]) {
              var d = [];
              t.eventsListeners[o].forEach(function (p) {
                d.push(p);
              }),
                d.forEach(function (p) {
                  p.apply(n, s);
                });
            }
          }),
          t)
        : t;
    }),
    (N.prototype.useModulesParams = function (e) {
      var a = this;
      a.modules &&
        Object.keys(a.modules).forEach(function (t) {
          var i = a.modules[t];
          i.params && h.extend(e, i.params);
        });
    }),
    (N.prototype.useModules = function (e) {
      void 0 === e && (e = {});
      var a = this;
      a.modules &&
        Object.keys(a.modules).forEach(function (t) {
          var i = a.modules[t],
            s = e[t] || {};
          i.instance &&
            Object.keys(i.instance).forEach(function (n) {
              var l = i.instance[n];
              a[n] = "function" == typeof l ? l.bind(a) : l;
            }),
            i.on &&
              a.on &&
              Object.keys(i.on).forEach(function (n) {
                a.on(n, i.on[n]);
              }),
            i.create && i.create.bind(a)(s);
        });
    }),
    (ge.components.set = function (r) {
      this.use && this.use(r);
    }),
    (N.installModule = function (e) {
      for (var a = [], t = arguments.length - 1; t-- > 0; )
        a[t] = arguments[t + 1];
      var i = this;
      i.prototype.modules || (i.prototype.modules = {});
      var s = e.name || Object.keys(i.prototype.modules).length + "_" + h.now();
      return (
        (i.prototype.modules[s] = e),
        e.proto &&
          Object.keys(e.proto).forEach(function (n) {
            i.prototype[n] = e.proto[n];
          }),
        e.static &&
          Object.keys(e.static).forEach(function (n) {
            i[n] = e.static[n];
          }),
        e.install && e.install.apply(i, a),
        i
      );
    }),
    (N.use = function (e) {
      for (var a = [], t = arguments.length - 1; t-- > 0; )
        a[t] = arguments[t + 1];
      var i = this;
      return Array.isArray(e)
        ? (e.forEach(function (s) {
            return i.installModule(s);
          }),
          i)
        : i.installModule.apply(i, [e].concat(a));
    }),
    Object.defineProperties(N, ge);
  var za = {
      updateSize: function wa() {
        var e,
          a,
          r = this,
          t = r.$el;
        (a =
          typeof r.params.height < "u" ? r.params.height : t[0].clientHeight),
          !(
            (0 ===
              (e =
                typeof r.params.width < "u"
                  ? r.params.width
                  : t[0].clientWidth) &&
              r.isHorizontal()) ||
            (0 === a && r.isVertical())
          ) &&
            ((e =
              e -
              parseInt(t.css("padding-left"), 10) -
              parseInt(t.css("padding-right"), 10)),
            (a =
              a -
              parseInt(t.css("padding-top"), 10) -
              parseInt(t.css("padding-bottom"), 10)),
            h.extend(r, {
              width: e,
              height: a,
              size: r.isHorizontal() ? e : a,
            }));
      },
      updateSlides: function ba() {
        var r = this,
          e = r.params,
          a = r.$wrapperEl,
          t = r.size,
          i = r.rtlTranslate,
          s = r.wrongRTL,
          n = r.virtual && e.virtual.enabled,
          l = n ? r.virtual.slides.length : r.slides.length,
          o = a.children("." + r.params.slideClass),
          d = n ? r.virtual.slides.length : o.length,
          p = [],
          f = [],
          u = [],
          v = e.slidesOffsetBefore;
        "function" == typeof v && (v = e.slidesOffsetBefore.call(r));
        var m = e.slidesOffsetAfter;
        "function" == typeof m && (m = e.slidesOffsetAfter.call(r));
        var c = r.snapGrid.length,
          C = r.snapGrid.length,
          b = e.spaceBetween,
          E = -v,
          y = 0,
          z = 0;
        if (!(typeof t > "u")) {
          var P, j;
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * t),
            (r.virtualSize = -b),
            o.css(
              i
                ? { marginLeft: "", marginTop: "" }
                : { marginRight: "", marginBottom: "" }
            ),
            e.slidesPerColumn > 1 &&
              ((P =
                Math.floor(d / e.slidesPerColumn) ===
                d / r.params.slidesPerColumn
                  ? d
                  : Math.ceil(d / e.slidesPerColumn) * e.slidesPerColumn),
              "auto" !== e.slidesPerView &&
                "row" === e.slidesPerColumnFill &&
                (P = Math.max(P, e.slidesPerView * e.slidesPerColumn)));
          for (
            var S,
              D = e.slidesPerColumn,
              O = P / D,
              L = Math.floor(d / e.slidesPerColumn),
              M = 0;
            M < d;
            M += 1
          ) {
            S = 0;
            var I = o.eq(M);
            if (e.slidesPerColumn > 1) {
              var $ = void 0,
                G = void 0,
                H = void 0;
              if (
                "column" === e.slidesPerColumnFill ||
                ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1)
              ) {
                if ("column" === e.slidesPerColumnFill)
                  (H = M - (G = Math.floor(M / D)) * D),
                    (G > L || (G === L && H === D - 1)) &&
                      (H += 1) >= D &&
                      ((H = 0), (G += 1));
                else {
                  var q = Math.floor(M / e.slidesPerGroup);
                  G =
                    M -
                    (H =
                      Math.floor(M / e.slidesPerView) - q * e.slidesPerColumn) *
                      e.slidesPerView -
                    q * e.slidesPerView;
                }
                I.css({
                  "-webkit-box-ordinal-group": ($ = G + (H * P) / D),
                  "-moz-box-ordinal-group": $,
                  "-ms-flex-order": $,
                  "-webkit-order": $,
                  order: $,
                });
              } else G = M - (H = Math.floor(M / O)) * O;
              I.css(
                "margin-" + (r.isHorizontal() ? "top" : "left"),
                0 !== H && e.spaceBetween && e.spaceBetween + "px"
              )
                .attr("data-swiper-column", G)
                .attr("data-swiper-row", H);
            }
            if ("none" !== I.css("display")) {
              if ("auto" === e.slidesPerView) {
                var X = g.getComputedStyle(I[0], null),
                  fe = I[0].style.transform,
                  ue = I[0].style.webkitTransform;
                if (
                  (fe && (I[0].style.transform = "none"),
                  ue && (I[0].style.webkitTransform = "none"),
                  e.roundLengths)
                )
                  S = r.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                else if (r.isHorizontal()) {
                  var Me = parseFloat(X.getPropertyValue("width")),
                    Ut = parseFloat(X.getPropertyValue("padding-left")),
                    _t = parseFloat(X.getPropertyValue("padding-right")),
                    ze = parseFloat(X.getPropertyValue("margin-left")),
                    Pe = parseFloat(X.getPropertyValue("margin-right")),
                    ke = X.getPropertyValue("box-sizing");
                  S =
                    ke && "border-box" === ke && !Y.isIE
                      ? Me + ze + Pe
                      : Me + Ut + _t + ze + Pe;
                } else {
                  var $e = parseFloat(X.getPropertyValue("height")),
                    Kt = parseFloat(X.getPropertyValue("padding-top")),
                    Qt = parseFloat(X.getPropertyValue("padding-bottom")),
                    Le = parseFloat(X.getPropertyValue("margin-top")),
                    De = parseFloat(X.getPropertyValue("margin-bottom")),
                    Ie = X.getPropertyValue("box-sizing");
                  S =
                    Ie && "border-box" === Ie && !Y.isIE
                      ? $e + Le + De
                      : $e + Kt + Qt + Le + De;
                }
                fe && (I[0].style.transform = fe),
                  ue && (I[0].style.webkitTransform = ue),
                  e.roundLengths && (S = Math.floor(S));
              } else
                (S = (t - (e.slidesPerView - 1) * b) / e.slidesPerView),
                  e.roundLengths && (S = Math.floor(S)),
                  o[M] &&
                    (r.isHorizontal()
                      ? (o[M].style.width = S + "px")
                      : (o[M].style.height = S + "px"));
              o[M] && (o[M].swiperSlideSize = S),
                u.push(S),
                e.centeredSlides
                  ? ((E = E + S / 2 + y / 2 + b),
                    0 === y && 0 !== M && (E = E - t / 2 - b),
                    0 === M && (E = E - t / 2 - b),
                    Math.abs(E) < 0.001 && (E = 0),
                    e.roundLengths && (E = Math.floor(E)),
                    z % e.slidesPerGroup == 0 && p.push(E),
                    f.push(E))
                  : (e.roundLengths && (E = Math.floor(E)),
                    z % e.slidesPerGroup == 0 && p.push(E),
                    f.push(E),
                    (E = E + S + b)),
                (r.virtualSize += S + b),
                (y = S),
                (z += 1);
            }
          }
          if (
            ((r.virtualSize = Math.max(r.virtualSize, t) + m),
            i &&
              s &&
              ("slide" === e.effect || "coverflow" === e.effect) &&
              a.css({ width: r.virtualSize + e.spaceBetween + "px" }),
            (!x.flexbox || e.setWrapperSize) &&
              (r.isHorizontal()
                ? a.css({ width: r.virtualSize + e.spaceBetween + "px" })
                : a.css({ height: r.virtualSize + e.spaceBetween + "px" })),
            e.slidesPerColumn > 1 &&
              ((r.virtualSize = (S + e.spaceBetween) * P),
              (r.virtualSize =
                Math.ceil(r.virtualSize / e.slidesPerColumn) - e.spaceBetween),
              r.isHorizontal()
                ? a.css({ width: r.virtualSize + e.spaceBetween + "px" })
                : a.css({ height: r.virtualSize + e.spaceBetween + "px" }),
              e.centeredSlides))
          ) {
            j = [];
            for (var ae = 0; ae < p.length; ae += 1) {
              var ve = p[ae];
              e.roundLengths && (ve = Math.floor(ve)),
                p[ae] < r.virtualSize + p[0] && j.push(ve);
            }
            p = j;
          }
          if (!e.centeredSlides) {
            j = [];
            for (var te = 0; te < p.length; te += 1) {
              var ce = p[te];
              e.roundLengths && (ce = Math.floor(ce)),
                p[te] <= r.virtualSize - t && j.push(ce);
            }
            (p = j),
              Math.floor(r.virtualSize - t) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(r.virtualSize - t);
          }
          if (
            (0 === p.length && (p = [0]),
            0 !== e.spaceBetween &&
              (r.isHorizontal()
                ? o.css(
                    i ? { marginLeft: b + "px" } : { marginRight: b + "px" }
                  )
                : o.css({ marginBottom: b + "px" })),
            e.centerInsufficientSlides)
          ) {
            var re = 0;
            if (
              (u.forEach(function (K) {
                re += K + (e.spaceBetween ? e.spaceBetween : 0);
              }),
              (re -= e.spaceBetween) < t)
            ) {
              var Oe = (t - re) / 2;
              p.forEach(function (K, he) {
                p[he] = K - Oe;
              }),
                f.forEach(function (K, he) {
                  f[he] = K + Oe;
                });
            }
          }
          h.extend(r, {
            slides: o,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: u,
          }),
            d !== l && r.emit("slidesLengthChange"),
            p.length !== c &&
              (r.params.watchOverflow && r.checkOverflow(),
              r.emit("snapGridLengthChange")),
            f.length !== C && r.emit("slidesGridLengthChange"),
            (e.watchSlidesProgress || e.watchSlidesVisibility) &&
              r.updateSlidesOffset();
        }
      },
      updateAutoHeight: function ya(r) {
        var i,
          e = this,
          a = [],
          t = 0;
        if (
          ("number" == typeof r
            ? e.setTransition(r)
            : !0 === r && e.setTransition(e.params.speed),
          "auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
        )
          for (i = 0; i < Math.ceil(e.params.slidesPerView); i += 1) {
            var s = e.activeIndex + i;
            if (s > e.slides.length) break;
            a.push(e.slides.eq(s)[0]);
          }
        else a.push(e.slides.eq(e.activeIndex)[0]);
        for (i = 0; i < a.length; i += 1)
          if (typeof a[i] < "u") {
            var n = a[i].offsetHeight;
            t = n > t ? n : t;
          }
        t && e.$wrapperEl.css("height", t + "px");
      },
      updateSlidesOffset: function Ea() {
        for (var e = this.slides, a = 0; a < e.length; a += 1)
          e[a].swiperSlideOffset = this.isHorizontal()
            ? e[a].offsetLeft
            : e[a].offsetTop;
      },
      updateSlidesProgress: function Ta(r) {
        void 0 === r && (r = (this && this.translate) || 0);
        var e = this,
          a = e.params,
          t = e.slides,
          i = e.rtlTranslate;
        if (0 !== t.length) {
          typeof t[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
          var s = -r;
          i && (s = r),
            t.removeClass(a.slideVisibleClass),
            (e.visibleSlidesIndexes = []),
            (e.visibleSlides = []);
          for (var n = 0; n < t.length; n += 1) {
            var l = t[n],
              o =
                (s +
                  (a.centeredSlides ? e.minTranslate() : 0) -
                  l.swiperSlideOffset) /
                (l.swiperSlideSize + a.spaceBetween);
            if (a.watchSlidesVisibility) {
              var d = -(s - l.swiperSlideOffset),
                p = d + e.slidesSizesGrid[n];
              ((d >= 0 && d < e.size - 1) ||
                (p > 1 && p <= e.size) ||
                (d <= 0 && p >= e.size)) &&
                (e.visibleSlides.push(l),
                e.visibleSlidesIndexes.push(n),
                t.eq(n).addClass(a.slideVisibleClass));
            }
            l.progress = i ? -o : o;
          }
          e.visibleSlides = w(e.visibleSlides);
        }
      },
      updateProgress: function xa(r) {
        void 0 === r && (r = (this && this.translate) || 0);
        var e = this,
          a = e.params,
          t = e.maxTranslate() - e.minTranslate(),
          i = e.progress,
          s = e.isBeginning,
          n = e.isEnd,
          l = s,
          o = n;
        0 === t
          ? ((i = 0), (s = !0), (n = !0))
          : ((s = (i = (r - e.minTranslate()) / t) <= 0), (n = i >= 1)),
          h.extend(e, { progress: i, isBeginning: s, isEnd: n }),
          (a.watchSlidesProgress || a.watchSlidesVisibility) &&
            e.updateSlidesProgress(r),
          s && !l && e.emit("reachBeginning toEdge"),
          n && !o && e.emit("reachEnd toEdge"),
          ((l && !s) || (o && !n)) && e.emit("fromEdge"),
          e.emit("progress", i);
      },
      updateSlidesClasses: function Sa() {
        var l,
          r = this,
          e = r.slides,
          a = r.params,
          t = r.$wrapperEl,
          i = r.activeIndex,
          s = r.realIndex,
          n = r.virtual && a.virtual.enabled;
        e.removeClass(
          a.slideActiveClass +
            " " +
            a.slideNextClass +
            " " +
            a.slidePrevClass +
            " " +
            a.slideDuplicateActiveClass +
            " " +
            a.slideDuplicateNextClass +
            " " +
            a.slideDuplicatePrevClass
        ),
          (l = n
            ? r.$wrapperEl.find(
                "." + a.slideClass + '[data-swiper-slide-index="' + i + '"]'
              )
            : e.eq(i)).addClass(a.slideActiveClass),
          a.loop &&
            (l.hasClass(a.slideDuplicateClass)
              ? t
                  .children(
                    "." +
                      a.slideClass +
                      ":not(." +
                      a.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      s +
                      '"]'
                  )
                  .addClass(a.slideDuplicateActiveClass)
              : t
                  .children(
                    "." +
                      a.slideClass +
                      "." +
                      a.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      s +
                      '"]'
                  )
                  .addClass(a.slideDuplicateActiveClass));
        var o = l
          .nextAll("." + a.slideClass)
          .eq(0)
          .addClass(a.slideNextClass);
        a.loop && 0 === o.length && (o = e.eq(0)).addClass(a.slideNextClass);
        var d = l
          .prevAll("." + a.slideClass)
          .eq(0)
          .addClass(a.slidePrevClass);
        a.loop && 0 === d.length && (d = e.eq(-1)).addClass(a.slidePrevClass),
          a.loop &&
            (o.hasClass(a.slideDuplicateClass)
              ? t
                  .children(
                    "." +
                      a.slideClass +
                      ":not(." +
                      a.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      o.attr("data-swiper-slide-index") +
                      '"]'
                  )
                  .addClass(a.slideDuplicateNextClass)
              : t
                  .children(
                    "." +
                      a.slideClass +
                      "." +
                      a.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      o.attr("data-swiper-slide-index") +
                      '"]'
                  )
                  .addClass(a.slideDuplicateNextClass),
            d.hasClass(a.slideDuplicateClass)
              ? t
                  .children(
                    "." +
                      a.slideClass +
                      ":not(." +
                      a.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      d.attr("data-swiper-slide-index") +
                      '"]'
                  )
                  .addClass(a.slideDuplicatePrevClass)
              : t
                  .children(
                    "." +
                      a.slideClass +
                      "." +
                      a.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      d.attr("data-swiper-slide-index") +
                      '"]'
                  )
                  .addClass(a.slideDuplicatePrevClass));
      },
      updateActiveIndex: function Ca(r) {
        var p,
          e = this,
          a = e.rtlTranslate ? e.translate : -e.translate,
          t = e.slidesGrid,
          i = e.snapGrid,
          s = e.params,
          n = e.activeIndex,
          l = e.realIndex,
          o = e.snapIndex,
          d = r;
        if (typeof d > "u") {
          for (var f = 0; f < t.length; f += 1)
            typeof t[f + 1] < "u"
              ? a >= t[f] && a < t[f + 1] - (t[f + 1] - t[f]) / 2
                ? (d = f)
                : a >= t[f] && a < t[f + 1] && (d = f + 1)
              : a >= t[f] && (d = f);
          s.normalizeSlideIndex && (d < 0 || typeof d > "u") && (d = 0);
        }
        if (
          ((p =
            i.indexOf(a) >= 0
              ? i.indexOf(a)
              : Math.floor(d / s.slidesPerGroup)) >= i.length &&
            (p = i.length - 1),
          d !== n)
        ) {
          var u = parseInt(
            e.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          h.extend(e, {
            snapIndex: p,
            realIndex: u,
            previousIndex: n,
            activeIndex: d,
          }),
            e.emit("activeIndexChange"),
            e.emit("snapIndexChange"),
            l !== u && e.emit("realIndexChange"),
            (e.initialized || e.runCallbacksOnInit) && e.emit("slideChange");
        } else p !== o && ((e.snapIndex = p), e.emit("snapIndexChange"));
      },
      updateClickedSlide: function Ma(r) {
        var e = this,
          a = e.params,
          t = w(r.target).closest("." + a.slideClass)[0],
          i = !1;
        if (t)
          for (var s = 0; s < e.slides.length; s += 1)
            e.slides[s] === t && (i = !0);
        if (!t || !i)
          return (e.clickedSlide = void 0), void (e.clickedIndex = void 0);
        (e.clickedSlide = t),
          (e.clickedIndex =
            e.virtual && e.params.virtual.enabled
              ? parseInt(w(t).attr("data-swiper-slide-index"), 10)
              : w(t).index()),
          a.slideToClickedSlide &&
            void 0 !== e.clickedIndex &&
            e.clickedIndex !== e.activeIndex &&
            e.slideToClickedSlide();
      },
    },
    Da = {
      getTranslate: function Pa(r) {
        void 0 === r && (r = this.isHorizontal() ? "x" : "y");
        var e = this,
          t = e.rtlTranslate,
          i = e.translate;
        if (e.params.virtualTranslate) return t ? -i : i;
        var n = h.getTranslate(e.$wrapperEl[0], r);
        return t && (n = -n), n || 0;
      },
      setTranslate: function ka(r, e) {
        var a = this,
          t = a.rtlTranslate,
          i = a.params,
          s = a.$wrapperEl,
          n = a.progress,
          l = 0,
          o = 0;
        a.isHorizontal() ? (l = t ? -r : r) : (o = r),
          i.roundLengths && ((l = Math.floor(l)), (o = Math.floor(o))),
          i.virtualTranslate ||
            s.transform(
              x.transforms3d
                ? "translate3d(" + l + "px, " + o + "px, 0px)"
                : "translate(" + l + "px, " + o + "px)"
            ),
          (a.previousTranslate = a.translate),
          (a.translate = a.isHorizontal() ? l : o);
        var f = a.maxTranslate() - a.minTranslate();
        (0 === f ? 0 : (r - a.minTranslate()) / f) !== n && a.updateProgress(r),
          a.emit("setTranslate", a.translate, e);
      },
      minTranslate: function $a() {
        return -this.snapGrid[0];
      },
      maxTranslate: function La() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
    },
    Ra = {
      slideTo: function Aa(r, e, a, t) {
        void 0 === r && (r = 0),
          void 0 === e && (e = this.params.speed),
          void 0 === a && (a = !0);
        var i = this,
          s = r;
        s < 0 && (s = 0);
        var n = i.params,
          l = i.snapGrid,
          o = i.slidesGrid,
          d = i.previousIndex,
          p = i.activeIndex,
          f = i.rtlTranslate;
        if (i.animating && n.preventInteractionOnTransition) return !1;
        var u = Math.floor(s / n.slidesPerGroup);
        u >= l.length && (u = l.length - 1),
          (p || n.initialSlide || 0) === (d || 0) &&
            a &&
            i.emit("beforeSlideChangeStart");
        var c,
          v = -l[u];
        if ((i.updateProgress(v), n.normalizeSlideIndex))
          for (var m = 0; m < o.length; m += 1)
            -Math.floor(100 * v) >= Math.floor(100 * o[m]) && (s = m);
        return !(
          (i.initialized &&
            s !== p &&
            ((!i.allowSlideNext && v < i.translate && v < i.minTranslate()) ||
              (!i.allowSlidePrev &&
                v > i.translate &&
                v > i.maxTranslate() &&
                (p || 0) !== s))) ||
          ((c = s > p ? "next" : s < p ? "prev" : "reset"),
          (f && -v === i.translate) || (!f && v === i.translate)
            ? (i.updateActiveIndex(s),
              n.autoHeight && i.updateAutoHeight(),
              i.updateSlidesClasses(),
              "slide" !== n.effect && i.setTranslate(v),
              "reset" !== c && (i.transitionStart(a, c), i.transitionEnd(a, c)),
              1)
            : (0 !== e && x.transition
                ? (i.setTransition(e),
                  i.setTranslate(v),
                  i.updateActiveIndex(s),
                  i.updateSlidesClasses(),
                  i.emit("beforeTransitionStart", e, t),
                  i.transitionStart(a, c),
                  i.animating ||
                    ((i.animating = !0),
                    i.onSlideToWrapperTransitionEnd ||
                      (i.onSlideToWrapperTransitionEnd = function (b) {
                        !i ||
                          i.destroyed ||
                          (b.target === this &&
                            (i.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              i.onSlideToWrapperTransitionEnd
                            ),
                            i.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              i.onSlideToWrapperTransitionEnd
                            ),
                            (i.onSlideToWrapperTransitionEnd = null),
                            delete i.onSlideToWrapperTransitionEnd,
                            i.transitionEnd(a, c)));
                      }),
                    i.$wrapperEl[0].addEventListener(
                      "transitionend",
                      i.onSlideToWrapperTransitionEnd
                    ),
                    i.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      i.onSlideToWrapperTransitionEnd
                    )))
                : (i.setTransition(0),
                  i.setTranslate(v),
                  i.updateActiveIndex(s),
                  i.updateSlidesClasses(),
                  i.emit("beforeTransitionStart", e, t),
                  i.transitionStart(a, c),
                  i.transitionEnd(a, c)),
              0))
        );
      },
      slideToLoop: function Va(r, e, a, t) {
        void 0 === r && (r = 0),
          void 0 === e && (e = this.params.speed),
          void 0 === a && (a = !0);
        var i = this,
          s = r;
        return i.params.loop && (s += i.loopedSlides), i.slideTo(s, e, a, t);
      },
      slideNext: function Xa(r, e, a) {
        void 0 === r && (r = this.params.speed), void 0 === e && (e = !0);
        var t = this,
          i = t.params;
        return i.loop
          ? !t.animating &&
              (t.loopFix(),
              (t._clientLeft = t.$wrapperEl[0].clientLeft),
              t.slideTo(t.activeIndex + i.slidesPerGroup, r, e, a))
          : t.slideTo(t.activeIndex + i.slidesPerGroup, r, e, a);
      },
      slidePrev: function Ba(r, e, a) {
        void 0 === r && (r = this.params.speed), void 0 === e && (e = !0);
        var t = this,
          n = t.snapGrid,
          l = t.slidesGrid,
          o = t.rtlTranslate;
        if (t.params.loop) {
          if (t.animating) return !1;
          t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft);
        }
        function p(b) {
          return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b);
        }
        var C,
          f = p(o ? t.translate : -t.translate),
          u = n.map(function (b) {
            return p(b);
          }),
          c =
            (l.map(function (b) {
              return p(b);
            }),
            u.indexOf(f),
            n[u.indexOf(f) - 1]);
        return (
          typeof c < "u" && (C = l.indexOf(c)) < 0 && (C = t.activeIndex - 1),
          t.slideTo(C, r, e, a)
        );
      },
      slideReset: function Ya(r, e, a) {
        return (
          void 0 === r && (r = this.params.speed),
          void 0 === e && (e = !0),
          this.slideTo(this.activeIndex, r, e, a)
        );
      },
      slideToClosest: function Na(r, e, a) {
        void 0 === r && (r = this.params.speed), void 0 === e && (e = !0);
        var t = this,
          i = t.activeIndex,
          s = Math.floor(i / t.params.slidesPerGroup);
        if (s < t.snapGrid.length - 1) {
          var l = t.snapGrid[s];
          (t.rtlTranslate ? t.translate : -t.translate) - l >
            (t.snapGrid[s + 1] - l) / 2 && (i = t.params.slidesPerGroup);
        }
        return t.slideTo(i, r, e, a);
      },
      slideToClickedSlide: function Fa() {
        var s,
          r = this,
          e = r.params,
          a = r.$wrapperEl,
          t =
            "auto" === e.slidesPerView
              ? r.slidesPerViewDynamic()
              : e.slidesPerView,
          i = r.clickedIndex;
        if (e.loop) {
          if (r.animating) return;
          (s = parseInt(w(r.clickedSlide).attr("data-swiper-slide-index"), 10)),
            e.centeredSlides
              ? i < r.loopedSlides - t / 2 ||
                i > r.slides.length - r.loopedSlides + t / 2
                ? (r.loopFix(),
                  (i = a
                    .children(
                      "." +
                        e.slideClass +
                        '[data-swiper-slide-index="' +
                        s +
                        '"]:not(.' +
                        e.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  h.nextTick(function () {
                    r.slideTo(i);
                  }))
                : r.slideTo(i)
              : i > r.slides.length - t
              ? (r.loopFix(),
                (i = a
                  .children(
                    "." +
                      e.slideClass +
                      '[data-swiper-slide-index="' +
                      s +
                      '"]:not(.' +
                      e.slideDuplicateClass +
                      ")"
                  )
                  .eq(0)
                  .index()),
                h.nextTick(function () {
                  r.slideTo(i);
                }))
              : r.slideTo(i);
        } else r.slideTo(i);
      },
    },
    Ua = {
      loopCreate: function qa() {
        var r = this,
          e = r.params,
          a = r.$wrapperEl;
        a.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
        var t = a.children("." + e.slideClass);
        if (e.loopFillGroupWithBlank) {
          var i = e.slidesPerGroup - (t.length % e.slidesPerGroup);
          if (i !== e.slidesPerGroup) {
            for (var s = 0; s < i; s += 1) {
              var n = w(T.createElement("div")).addClass(
                e.slideClass + " " + e.slideBlankClass
              );
              a.append(n);
            }
            t = a.children("." + e.slideClass);
          }
        }
        "auto" === e.slidesPerView &&
          !e.loopedSlides &&
          (e.loopedSlides = t.length),
          (r.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10)),
          (r.loopedSlides += e.loopAdditionalSlides),
          r.loopedSlides > t.length && (r.loopedSlides = t.length);
        var l = [],
          o = [];
        t.each(function (f, u) {
          var v = w(u);
          f < r.loopedSlides && o.push(u),
            f < t.length && f >= t.length - r.loopedSlides && l.push(u),
            v.attr("data-swiper-slide-index", f);
        });
        for (var d = 0; d < o.length; d += 1)
          a.append(w(o[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
        for (var p = l.length - 1; p >= 0; p -= 1)
          a.prepend(w(l[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
      },
      loopFix: function Wa() {
        var d,
          r = this,
          e = r.params,
          a = r.activeIndex,
          t = r.slides,
          i = r.loopedSlides,
          s = r.allowSlidePrev,
          n = r.allowSlideNext,
          l = r.snapGrid,
          o = r.rtlTranslate;
        (r.allowSlidePrev = !0), (r.allowSlideNext = !0);
        var f = -l[a] - r.getTranslate();
        a < i
          ? ((d = t.length - 3 * i + a),
            r.slideTo((d += i), 0, !1, !0) &&
              0 !== f &&
              r.setTranslate((o ? -r.translate : r.translate) - f))
          : (("auto" === e.slidesPerView && a >= 2 * i) || a >= t.length - i) &&
            ((d = -t.length + a + i),
            r.slideTo((d += i), 0, !1, !0) &&
              0 !== f &&
              r.setTranslate((o ? -r.translate : r.translate) - f)),
          (r.allowSlidePrev = s),
          (r.allowSlideNext = n);
      },
      loopDestroy: function ja() {
        var r = this,
          a = r.params,
          t = r.slides;
        r.$wrapperEl
          .children(
            "." +
              a.slideClass +
              "." +
              a.slideDuplicateClass +
              ",." +
              a.slideClass +
              "." +
              a.slideBlankClass
          )
          .remove(),
          t.removeAttr("data-swiper-slide-index");
      },
    },
    Qa = {
      setGrabCursor: function _a(r) {
        var e = this;
        if (
          !(
            x.touch ||
            !e.params.simulateTouch ||
            (e.params.watchOverflow && e.isLocked)
          )
        ) {
          var a = e.el;
          (a.style.cursor = "move"),
            (a.style.cursor = r ? "-webkit-grabbing" : "-webkit-grab"),
            (a.style.cursor = r ? "-moz-grabbin" : "-moz-grab"),
            (a.style.cursor = r ? "grabbing" : "grab");
        }
      },
      unsetGrabCursor: function Ka() {
        var r = this;
        x.touch ||
          (r.params.watchOverflow && r.isLocked) ||
          (r.el.style.cursor = "");
      },
    },
    rt = {
      appendSlide: function Za(r) {
        var e = this,
          a = e.$wrapperEl,
          t = e.params;
        if ((t.loop && e.loopDestroy(), "object" == typeof r && "length" in r))
          for (var i = 0; i < r.length; i += 1) r[i] && a.append(r[i]);
        else a.append(r);
        t.loop && e.loopCreate(), (t.observer && x.observer) || e.update();
      },
      prependSlide: function Ja(r) {
        var e = this,
          a = e.params,
          t = e.$wrapperEl,
          i = e.activeIndex;
        a.loop && e.loopDestroy();
        var s = i + 1;
        if ("object" == typeof r && "length" in r) {
          for (var n = 0; n < r.length; n += 1) r[n] && t.prepend(r[n]);
          s = i + r.length;
        } else t.prepend(r);
        a.loop && e.loopCreate(),
          (a.observer && x.observer) || e.update(),
          e.slideTo(s, 0, !1);
      },
      addSlide: function et(r, e) {
        var a = this,
          t = a.$wrapperEl,
          i = a.params,
          n = a.activeIndex;
        i.loop &&
          ((n -= a.loopedSlides),
          a.loopDestroy(),
          (a.slides = t.children("." + i.slideClass)));
        var l = a.slides.length;
        if (r <= 0) a.prependSlide(e);
        else if (r >= l) a.appendSlide(e);
        else {
          for (var o = n > r ? n + 1 : n, d = [], p = l - 1; p >= r; p -= 1) {
            var f = a.slides.eq(p);
            f.remove(), d.unshift(f);
          }
          if ("object" == typeof e && "length" in e) {
            for (var u = 0; u < e.length; u += 1) e[u] && t.append(e[u]);
            o = n > r ? n + e.length : n;
          } else t.append(e);
          for (var v = 0; v < d.length; v += 1) t.append(d[v]);
          i.loop && a.loopCreate(),
            (i.observer && x.observer) || a.update(),
            a.slideTo(i.loop ? o + a.loopedSlides : o, 0, !1);
        }
      },
      removeSlide: function at(r) {
        var e = this,
          a = e.params,
          t = e.$wrapperEl,
          s = e.activeIndex;
        a.loop &&
          ((s -= e.loopedSlides),
          e.loopDestroy(),
          (e.slides = t.children("." + a.slideClass)));
        var l,
          n = s;
        if ("object" == typeof r && "length" in r) {
          for (var o = 0; o < r.length; o += 1)
            e.slides[(l = r[o])] && e.slides.eq(l).remove(), l < n && (n -= 1);
          n = Math.max(n, 0);
        } else
          e.slides[(l = r)] && e.slides.eq(l).remove(),
            l < n && (n -= 1),
            (n = Math.max(n, 0));
        a.loop && e.loopCreate(),
          (a.observer && x.observer) || e.update(),
          e.slideTo(a.loop ? n + e.loopedSlides : n, 0, !1);
      },
      removeAllSlides: function tt() {
        for (var e = [], a = 0; a < this.slides.length; a += 1) e.push(a);
        this.removeSlide(e);
      },
    },
    A = (function () {
      var e = g.navigator.userAgent,
        a = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: g.cordova || g.phonegap,
          phonegap: g.cordova || g.phonegap,
        },
        t = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (
        (t && ((a.os = "windows"), (a.osVersion = t[2]), (a.windows = !0)),
        i &&
          !t &&
          ((a.os = "android"),
          (a.osVersion = i[2]),
          (a.android = !0),
          (a.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
        (s || l || n) && ((a.os = "ios"), (a.ios = !0)),
        l && !n && ((a.osVersion = l[2].replace(/_/g, ".")), (a.iphone = !0)),
        s && ((a.osVersion = s[2].replace(/_/g, ".")), (a.ipad = !0)),
        n &&
          ((a.osVersion = n[3] ? n[3].replace(/_/g, ".") : null),
          (a.iphone = !0)),
        a.ios &&
          a.osVersion &&
          e.indexOf("Version/") >= 0 &&
          "10" === a.osVersion.split(".")[0] &&
          (a.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
        (a.desktop = !(a.os || a.android || a.webView)),
        (a.webView = (l || s || n) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
        a.os && "ios" === a.os)
      ) {
        var o = a.osVersion.split("."),
          d = T.querySelector('meta[name="viewport"]');
        a.minimalUi =
          !a.webView &&
          (n || l) &&
          (1 * o[0] == 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) &&
          d &&
          d.getAttribute("content").indexOf("minimal-ui") >= 0;
      }
      return (a.pixelRatio = g.devicePixelRatio || 1), a;
    })();
  function it(r) {
    var e = this,
      a = e.touchEventsData,
      t = e.params,
      i = e.touches;
    if (!e.animating || !t.preventInteractionOnTransition) {
      var s = r;
      if (
        (s.originalEvent && (s = s.originalEvent),
        (a.isTouchEvent = "touchstart" === s.type),
        (a.isTouchEvent || !("which" in s) || 3 !== s.which) &&
          !(!a.isTouchEvent && "button" in s && s.button > 0) &&
          (!a.isTouched || !a.isMoved))
      ) {
        if (
          t.noSwiping &&
          w(s.target).closest(
            t.noSwipingSelector ? t.noSwipingSelector : "." + t.noSwipingClass
          )[0]
        )
          return void (e.allowClick = !0);
        if (!t.swipeHandler || w(s).closest(t.swipeHandler)[0]) {
          (i.currentX =
            "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX),
            (i.currentY =
              "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY);
          var n = i.currentX,
            l = i.currentY,
            d = t.edgeSwipeThreshold || t.iOSEdgeSwipeThreshold;
          if (
            (!t.edgeSwipeDetection && !t.iOSEdgeSwipeDetection) ||
            !(n <= d || n >= g.screen.width - d)
          ) {
            if (
              (h.extend(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (i.startX = n),
              (i.startY = l),
              (a.touchStartTime = h.now()),
              (e.allowClick = !0),
              e.updateSize(),
              (e.swipeDirection = void 0),
              t.threshold > 0 && (a.allowThresholdMove = !1),
              "touchstart" !== s.type)
            ) {
              var p = !0;
              w(s.target).is(a.formElements) && (p = !1),
                T.activeElement &&
                  w(T.activeElement).is(a.formElements) &&
                  T.activeElement !== s.target &&
                  T.activeElement.blur(),
                (t.touchStartForcePreventDefault ||
                  (p && e.allowTouchMove && t.touchStartPreventDefault)) &&
                  s.preventDefault();
            }
            e.emit("touchStart", s);
          }
        }
      }
    }
  }
  function st(r) {
    var e = this,
      a = e.touchEventsData,
      t = e.params,
      i = e.touches,
      s = e.rtlTranslate,
      n = r;
    if ((n.originalEvent && (n = n.originalEvent), a.isTouched)) {
      if (!a.isTouchEvent || "mousemove" !== n.type) {
        var l = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
          o = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
        if (n.preventedByNestedSwiper)
          return (i.startX = l), void (i.startY = o);
        if (!e.allowTouchMove)
          return (
            (e.allowClick = !1),
            void (
              a.isTouched &&
              (h.extend(i, { startX: l, startY: o, currentX: l, currentY: o }),
              (a.touchStartTime = h.now()))
            )
          );
        if (a.isTouchEvent && t.touchReleaseOnEdges && !t.loop)
          if (e.isVertical()) {
            if (
              (o < i.startY && e.translate <= e.maxTranslate()) ||
              (o > i.startY && e.translate >= e.minTranslate())
            )
              return (a.isTouched = !1), void (a.isMoved = !1);
          } else if (
            (l < i.startX && e.translate <= e.maxTranslate()) ||
            (l > i.startX && e.translate >= e.minTranslate())
          )
            return;
        if (
          a.isTouchEvent &&
          T.activeElement &&
          n.target === T.activeElement &&
          w(n.target).is(a.formElements)
        )
          return (a.isMoved = !0), void (e.allowClick = !1);
        if (
          (a.allowTouchCallbacks && e.emit("touchMove", n),
          !(n.targetTouches && n.targetTouches.length > 1))
        ) {
          (i.currentX = l), (i.currentY = o);
          var d = i.currentX - i.startX,
            p = i.currentY - i.startY;
          if (
            !(
              e.params.threshold &&
              Math.sqrt(Math.pow(d, 2) + Math.pow(p, 2)) < e.params.threshold
            )
          ) {
            var f;
            if (
              (typeof a.isScrolling > "u" &&
                ((e.isHorizontal() && i.currentY === i.startY) ||
                (e.isVertical() && i.currentX === i.startX)
                  ? (a.isScrolling = !1)
                  : d * d + p * p >= 25 &&
                    ((f =
                      (180 * Math.atan2(Math.abs(p), Math.abs(d))) / Math.PI),
                    (a.isScrolling = e.isHorizontal()
                      ? f > t.touchAngle
                      : 90 - f > t.touchAngle))),
              a.isScrolling && e.emit("touchMoveOpposite", n),
              typeof a.startMoving > "u" &&
                (i.currentX !== i.startX || i.currentY !== i.startY) &&
                (a.startMoving = !0),
              a.isScrolling)
            )
              return void (a.isTouched = !1);
            if (a.startMoving) {
              (e.allowClick = !1),
                n.preventDefault(),
                t.touchMoveStopPropagation && !t.nested && n.stopPropagation(),
                a.isMoved ||
                  (t.loop && e.loopFix(),
                  (a.startTranslate = e.getTranslate()),
                  e.setTransition(0),
                  e.animating &&
                    e.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                  (a.allowMomentumBounce = !1),
                  t.grabCursor &&
                    (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) &&
                    e.setGrabCursor(!0),
                  e.emit("sliderFirstMove", n)),
                e.emit("sliderMove", n),
                (a.isMoved = !0);
              var u = e.isHorizontal() ? d : p;
              (i.diff = u),
                (u *= t.touchRatio),
                s && (u = -u),
                (e.swipeDirection = u > 0 ? "prev" : "next"),
                (a.currentTranslate = u + a.startTranslate);
              var v = !0,
                m = t.resistanceRatio;
              if (
                (t.touchReleaseOnEdges && (m = 0),
                u > 0 && a.currentTranslate > e.minTranslate()
                  ? ((v = !1),
                    t.resistance &&
                      (a.currentTranslate =
                        e.minTranslate() -
                        1 +
                        Math.pow(-e.minTranslate() + a.startTranslate + u, m)))
                  : u < 0 &&
                    a.currentTranslate < e.maxTranslate() &&
                    ((v = !1),
                    t.resistance &&
                      (a.currentTranslate =
                        e.maxTranslate() +
                        1 -
                        Math.pow(e.maxTranslate() - a.startTranslate - u, m))),
                v && (n.preventedByNestedSwiper = !0),
                !e.allowSlideNext &&
                  "next" === e.swipeDirection &&
                  a.currentTranslate < a.startTranslate &&
                  (a.currentTranslate = a.startTranslate),
                !e.allowSlidePrev &&
                  "prev" === e.swipeDirection &&
                  a.currentTranslate > a.startTranslate &&
                  (a.currentTranslate = a.startTranslate),
                t.threshold > 0)
              ) {
                if (!(Math.abs(u) > t.threshold || a.allowThresholdMove))
                  return void (a.currentTranslate = a.startTranslate);
                if (!a.allowThresholdMove)
                  return (
                    (a.allowThresholdMove = !0),
                    (i.startX = i.currentX),
                    (i.startY = i.currentY),
                    (a.currentTranslate = a.startTranslate),
                    void (i.diff = e.isHorizontal()
                      ? i.currentX - i.startX
                      : i.currentY - i.startY)
                  );
              }
              t.followFinger &&
                ((t.freeMode ||
                  t.watchSlidesProgress ||
                  t.watchSlidesVisibility) &&
                  (e.updateActiveIndex(), e.updateSlidesClasses()),
                t.freeMode &&
                  (0 === a.velocities.length &&
                    a.velocities.push({
                      position: i[e.isHorizontal() ? "startX" : "startY"],
                      time: a.touchStartTime,
                    }),
                  a.velocities.push({
                    position: i[e.isHorizontal() ? "currentX" : "currentY"],
                    time: h.now(),
                  })),
                e.updateProgress(a.currentTranslate),
                e.setTranslate(a.currentTranslate));
            }
          }
        }
      }
    } else a.startMoving && a.isScrolling && e.emit("touchMoveOpposite", n);
  }
  function nt(r) {
    var e = this,
      a = e.touchEventsData,
      t = e.params,
      i = e.touches,
      s = e.rtlTranslate,
      n = e.$wrapperEl,
      l = e.slidesGrid,
      o = e.snapGrid,
      d = r;
    if (
      (d.originalEvent && (d = d.originalEvent),
      a.allowTouchCallbacks && e.emit("touchEnd", d),
      (a.allowTouchCallbacks = !1),
      !a.isTouched)
    )
      return (
        a.isMoved && t.grabCursor && e.setGrabCursor(!1),
        (a.isMoved = !1),
        void (a.startMoving = !1)
      );
    t.grabCursor &&
      a.isMoved &&
      a.isTouched &&
      (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) &&
      e.setGrabCursor(!1);
    var u,
      p = h.now(),
      f = p - a.touchStartTime;
    if (
      (e.allowClick &&
        (e.updateClickedSlide(d),
        e.emit("tap", d),
        f < 300 &&
          p - a.lastClickTime > 300 &&
          (a.clickTimeout && clearTimeout(a.clickTimeout),
          (a.clickTimeout = h.nextTick(function () {
            !e || e.destroyed || e.emit("click", d);
          }, 300))),
        f < 300 &&
          p - a.lastClickTime < 300 &&
          (a.clickTimeout && clearTimeout(a.clickTimeout),
          e.emit("doubleTap", d))),
      (a.lastClickTime = h.now()),
      h.nextTick(function () {
        e.destroyed || (e.allowClick = !0);
      }),
      !a.isTouched ||
        !a.isMoved ||
        !e.swipeDirection ||
        0 === i.diff ||
        a.currentTranslate === a.startTranslate)
    )
      return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
    if (
      ((a.isTouched = !1),
      (a.isMoved = !1),
      (a.startMoving = !1),
      (u = t.followFinger
        ? s
          ? e.translate
          : -e.translate
        : -a.currentTranslate),
      t.freeMode)
    ) {
      if (u < -e.minTranslate()) return void e.slideTo(e.activeIndex);
      if (u > -e.maxTranslate())
        return void e.slideTo(
          e.slides.length < o.length ? o.length - 1 : e.slides.length - 1
        );
      if (t.freeModeMomentum) {
        if (a.velocities.length > 1) {
          var v = a.velocities.pop(),
            m = a.velocities.pop(),
            C = v.time - m.time;
          (e.velocity = (v.position - m.position) / C),
            (e.velocity /= 2),
            Math.abs(e.velocity) < t.freeModeMinimumVelocity &&
              (e.velocity = 0),
            (C > 150 || h.now() - v.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= t.freeModeMomentumVelocityRatio),
          (a.velocities.length = 0);
        var b = 1e3 * t.freeModeMomentumRatio,
          y = e.translate + e.velocity * b;
        s && (y = -y);
        var P,
          D,
          z = !1,
          S = 20 * Math.abs(e.velocity) * t.freeModeMomentumBounceRatio;
        if (y < e.maxTranslate())
          t.freeModeMomentumBounce
            ? (y + e.maxTranslate() < -S && (y = e.maxTranslate() - S),
              (P = e.maxTranslate()),
              (z = !0),
              (a.allowMomentumBounce = !0))
            : (y = e.maxTranslate()),
            t.loop && t.centeredSlides && (D = !0);
        else if (y > e.minTranslate())
          t.freeModeMomentumBounce
            ? (y - e.minTranslate() > S && (y = e.minTranslate() + S),
              (P = e.minTranslate()),
              (z = !0),
              (a.allowMomentumBounce = !0))
            : (y = e.minTranslate()),
            t.loop && t.centeredSlides && (D = !0);
        else if (t.freeModeSticky) {
          for (var O, L = 0; L < o.length; L += 1)
            if (o[L] > -y) {
              O = L;
              break;
            }
          y = -(y =
            Math.abs(o[O] - y) < Math.abs(o[O - 1] - y) ||
            "next" === e.swipeDirection
              ? o[O]
              : o[O - 1]);
        }
        if (
          (D &&
            e.once("transitionEnd", function () {
              e.loopFix();
            }),
          0 !== e.velocity)
        )
          b = s
            ? Math.abs((-y - e.translate) / e.velocity)
            : Math.abs((y - e.translate) / e.velocity);
        else if (t.freeModeSticky) return void e.slideToClosest();
        t.freeModeMomentumBounce && z
          ? (e.updateProgress(P),
            e.setTransition(b),
            e.setTranslate(y),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            n.transitionEnd(function () {
              !e ||
                e.destroyed ||
                !a.allowMomentumBounce ||
                (e.emit("momentumBounce"),
                e.setTransition(t.speed),
                e.setTranslate(P),
                n.transitionEnd(function () {
                  !e || e.destroyed || e.transitionEnd();
                }));
            }))
          : e.velocity
          ? (e.updateProgress(y),
            e.setTransition(b),
            e.setTranslate(y),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              n.transitionEnd(function () {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(y),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (t.freeModeSticky) return void e.slideToClosest();
      (!t.freeModeMomentum || f >= t.longSwipesMs) &&
        (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
    } else {
      for (
        var M = 0, I = e.slidesSizesGrid[0], $ = 0;
        $ < l.length;
        $ += t.slidesPerGroup
      )
        typeof l[$ + t.slidesPerGroup] < "u"
          ? u >= l[$] &&
            u < l[$ + t.slidesPerGroup] &&
            ((M = $), (I = l[$ + t.slidesPerGroup] - l[$]))
          : u >= l[$] && ((M = $), (I = l[l.length - 1] - l[l.length - 2]));
      var G = (u - l[M]) / I;
      if (f > t.longSwipesMs) {
        if (!t.longSwipes) return void e.slideTo(e.activeIndex);
        "next" === e.swipeDirection &&
          e.slideTo(G >= t.longSwipesRatio ? M + t.slidesPerGroup : M),
          "prev" === e.swipeDirection &&
            e.slideTo(G > 1 - t.longSwipesRatio ? M + t.slidesPerGroup : M);
      } else {
        if (!t.shortSwipes) return void e.slideTo(e.activeIndex);
        "next" === e.swipeDirection && e.slideTo(M + t.slidesPerGroup),
          "prev" === e.swipeDirection && e.slideTo(M);
      }
    }
  }
  function we() {
    var r = this,
      e = r.params,
      a = r.el;
    if (!a || 0 !== a.offsetWidth) {
      e.breakpoints && r.setBreakpoint();
      var t = r.allowSlideNext,
        i = r.allowSlidePrev,
        s = r.snapGrid;
      if (
        ((r.allowSlideNext = !0),
        (r.allowSlidePrev = !0),
        r.updateSize(),
        r.updateSlides(),
        e.freeMode)
      ) {
        var n = Math.min(
          Math.max(r.translate, r.maxTranslate()),
          r.minTranslate()
        );
        r.setTranslate(n),
          r.updateActiveIndex(),
          r.updateSlidesClasses(),
          e.autoHeight && r.updateAutoHeight();
      } else
        r.updateSlidesClasses(),
          r.slideTo(
            ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
              r.isEnd &&
              !r.params.centeredSlides
              ? r.slides.length - 1
              : r.activeIndex,
            0,
            !1,
            !0
          );
      r.autoplay && r.autoplay.running && r.autoplay.paused && r.autoplay.run(),
        (r.allowSlidePrev = i),
        (r.allowSlideNext = t),
        r.params.watchOverflow && s !== r.snapGrid && r.checkOverflow();
    }
  }
  function lt(r) {
    var e = this;
    e.allowClick ||
      (e.params.preventClicks && r.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (r.stopPropagation(), r.stopImmediatePropagation()));
  }
  var pt = {
      attachEvents: function ot() {
        var r = this,
          e = r.params,
          a = r.touchEvents,
          t = r.el,
          i = r.wrapperEl;
        (r.onTouchStart = it.bind(r)),
          (r.onTouchMove = st.bind(r)),
          (r.onTouchEnd = nt.bind(r)),
          (r.onClick = lt.bind(r));
        var s = "container" === e.touchEventsTarget ? t : i,
          n = !!e.nested;
        if (x.touch || (!x.pointerEvents && !x.prefixedPointerEvents)) {
          if (x.touch) {
            var l = !(
              "touchstart" !== a.start ||
              !x.passiveListener ||
              !e.passiveListeners
            ) && { passive: !0, capture: !1 };
            s.addEventListener(a.start, r.onTouchStart, l),
              s.addEventListener(
                a.move,
                r.onTouchMove,
                x.passiveListener ? { passive: !1, capture: n } : n
              ),
              s.addEventListener(a.end, r.onTouchEnd, l);
          }
          ((e.simulateTouch && !A.ios && !A.android) ||
            (e.simulateTouch && !x.touch && A.ios)) &&
            (s.addEventListener("mousedown", r.onTouchStart, !1),
            T.addEventListener("mousemove", r.onTouchMove, n),
            T.addEventListener("mouseup", r.onTouchEnd, !1));
        } else
          s.addEventListener(a.start, r.onTouchStart, !1),
            T.addEventListener(a.move, r.onTouchMove, n),
            T.addEventListener(a.end, r.onTouchEnd, !1);
        (e.preventClicks || e.preventClicksPropagation) &&
          s.addEventListener("click", r.onClick, !0),
          r.on(
            A.ios || A.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            we,
            !0
          );
      },
      detachEvents: function dt() {
        var r = this,
          e = r.params,
          a = r.touchEvents,
          s = "container" === e.touchEventsTarget ? r.el : r.wrapperEl,
          n = !!e.nested;
        if (x.touch || (!x.pointerEvents && !x.prefixedPointerEvents)) {
          if (x.touch) {
            var l = !(
              "onTouchStart" !== a.start ||
              !x.passiveListener ||
              !e.passiveListeners
            ) && { passive: !0, capture: !1 };
            s.removeEventListener(a.start, r.onTouchStart, l),
              s.removeEventListener(a.move, r.onTouchMove, n),
              s.removeEventListener(a.end, r.onTouchEnd, l);
          }
          ((e.simulateTouch && !A.ios && !A.android) ||
            (e.simulateTouch && !x.touch && A.ios)) &&
            (s.removeEventListener("mousedown", r.onTouchStart, !1),
            T.removeEventListener("mousemove", r.onTouchMove, n),
            T.removeEventListener("mouseup", r.onTouchEnd, !1));
        } else
          s.removeEventListener(a.start, r.onTouchStart, !1),
            T.removeEventListener(a.move, r.onTouchMove, n),
            T.removeEventListener(a.end, r.onTouchEnd, !1);
        (e.preventClicks || e.preventClicksPropagation) &&
          s.removeEventListener("click", r.onClick, !0),
          r.off(
            A.ios || A.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            we
          );
      },
    },
    vt = {
      setBreakpoint: function ft() {
        var r = this,
          e = r.activeIndex,
          a = r.initialized,
          t = r.loopedSlides;
        void 0 === t && (t = 0);
        var i = r.params,
          s = i.breakpoints;
        if (s && (!s || 0 !== Object.keys(s).length)) {
          var n = r.getBreakpoint(s);
          if (n && r.currentBreakpoint !== n) {
            var l = n in s ? s[n] : void 0;
            l &&
              ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(
                function (f) {
                  var u = l[f];
                  typeof u > "u" ||
                    (l[f] =
                      "slidesPerView" !== f || ("AUTO" !== u && "auto" !== u)
                        ? "slidesPerView" === f
                          ? parseFloat(u)
                          : parseInt(u, 10)
                        : "auto");
                }
              );
            var o = l || r.originalParams,
              d = o.direction && o.direction !== i.direction,
              p = i.loop && (o.slidesPerView !== i.slidesPerView || d);
            d && a && r.changeDirection(),
              h.extend(r.params, o),
              h.extend(r, {
                allowTouchMove: r.params.allowTouchMove,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
              }),
              (r.currentBreakpoint = n),
              p &&
                a &&
                (r.loopDestroy(),
                r.loopCreate(),
                r.updateSlides(),
                r.slideTo(e - t + r.loopedSlides, 0, !1)),
              r.emit("breakpoint", o);
          }
        }
      },
      getBreakpoint: function ut(r) {
        if (r) {
          var a = !1,
            t = [];
          Object.keys(r).forEach(function (n) {
            t.push(n);
          }),
            t.sort(function (n, l) {
              return parseInt(n, 10) - parseInt(l, 10);
            });
          for (var i = 0; i < t.length; i += 1) {
            var s = t[i];
            this.params.breakpointsInverse
              ? s <= g.innerWidth && (a = s)
              : s >= g.innerWidth && !a && (a = s);
          }
          return a || "max";
        }
      },
    },
    mt = {
      addClasses: function ct() {
        var r = this,
          e = r.classNames,
          a = r.params,
          t = r.rtl,
          i = r.$el,
          s = [];
        s.push("initialized"),
          s.push(a.direction),
          a.freeMode && s.push("free-mode"),
          x.flexbox || s.push("no-flexbox"),
          a.autoHeight && s.push("autoheight"),
          t && s.push("rtl"),
          a.slidesPerColumn > 1 && s.push("multirow"),
          A.android && s.push("android"),
          A.ios && s.push("ios"),
          (Y.isIE || Y.isEdge) &&
            (x.pointerEvents || x.prefixedPointerEvents) &&
            s.push("wp8-" + a.direction),
          s.forEach(function (n) {
            e.push(a.containerModifierClass + n);
          }),
          i.addClass(e.join(" "));
      },
      removeClasses: function ht() {
        this.$el.removeClass(this.classNames.join(" "));
      },
    },
    bt = {
      loadImage: function gt(r, e, a, t, i, s) {
        var n;
        function l() {
          s && s();
        }
        (r.complete && i) || !e
          ? l()
          : (((n = new g.Image()).onload = l),
            (n.onerror = l),
            t && (n.sizes = t),
            a && (n.srcset = a),
            e && (n.src = e));
      },
      preloadImages: function wt() {
        var r = this;
        function e() {
          typeof r > "u" ||
            null === r ||
            !r ||
            r.destroyed ||
            (void 0 !== r.imagesLoaded && (r.imagesLoaded += 1),
            r.imagesLoaded === r.imagesToLoad.length &&
              (r.params.updateOnImagesReady && r.update(),
              r.emit("imagesReady")));
        }
        r.imagesToLoad = r.$el.find("img");
        for (var a = 0; a < r.imagesToLoad.length; a += 1) {
          var t = r.imagesToLoad[a];
          r.loadImage(
            t,
            t.currentSrc || t.getAttribute("src"),
            t.srcset || t.getAttribute("srcset"),
            t.sizes || t.getAttribute("sizes"),
            !0,
            e
          );
        }
      },
    },
    be = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    },
    se = {
      update: za,
      translate: Da,
      transition: {
        setTransition: function Ia(r, e) {
          this.$wrapperEl.transition(r), this.emit("setTransition", r, e);
        },
        transitionStart: function Oa(r, e) {
          void 0 === r && (r = !0);
          var a = this,
            t = a.activeIndex,
            s = a.previousIndex;
          a.params.autoHeight && a.updateAutoHeight();
          var n = e;
          if (
            (n || (n = t > s ? "next" : t < s ? "prev" : "reset"),
            a.emit("transitionStart"),
            r && t !== s)
          ) {
            if ("reset" === n) return void a.emit("slideResetTransitionStart");
            a.emit("slideChangeTransitionStart"),
              a.emit(
                "next" === n
                  ? "slideNextTransitionStart"
                  : "slidePrevTransitionStart"
              );
          }
        },
        transitionEnd: function Ga(r, e) {
          void 0 === r && (r = !0);
          var a = this,
            t = a.activeIndex,
            i = a.previousIndex;
          (a.animating = !1), a.setTransition(0);
          var s = e;
          if (
            (s || (s = t > i ? "next" : t < i ? "prev" : "reset"),
            a.emit("transitionEnd"),
            r && t !== i)
          ) {
            if ("reset" === s) return void a.emit("slideResetTransitionEnd");
            a.emit("slideChangeTransitionEnd"),
              a.emit(
                "next" === s
                  ? "slideNextTransitionEnd"
                  : "slidePrevTransitionEnd"
              );
          }
        },
      },
      slide: Ra,
      loop: Ua,
      grabCursor: Qa,
      manipulation: rt,
      events: pt,
      breakpoints: vt,
      checkOverflow: {
        checkOverflow: function yt() {
          var r = this,
            e = r.isLocked;
          (r.isLocked = 1 === r.snapGrid.length),
            (r.allowSlideNext = !r.isLocked),
            (r.allowSlidePrev = !r.isLocked),
            e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock"),
            e && e !== r.isLocked && ((r.isEnd = !1), r.navigation.update());
        },
      },
      classes: mt,
      images: bt,
    },
    ne = {},
    B = (function (r) {
      function e() {
        for (var t, i = [], s = arguments.length; s--; ) i[s] = arguments[s];
        var n, l;
        1 === i.length && i[0].constructor && i[0].constructor === Object
          ? (l = i[0])
          : ((n = (t = i)[0]), (l = t[1])),
          l || (l = {}),
          (l = h.extend({}, l)),
          n && !l.el && (l.el = n),
          r.call(this, l),
          Object.keys(se).forEach(function (v) {
            Object.keys(se[v]).forEach(function (m) {
              e.prototype[m] || (e.prototype[m] = se[v][m]);
            });
          });
        var o = this;
        typeof o.modules > "u" && (o.modules = {}),
          Object.keys(o.modules).forEach(function (v) {
            var m = o.modules[v];
            if (m.params) {
              var c = Object.keys(m.params)[0],
                C = m.params[c];
              if (
                "object" != typeof C ||
                null === C ||
                !(c in l) ||
                !("enabled" in C)
              )
                return;
              !0 === l[c] && (l[c] = { enabled: !0 }),
                "object" == typeof l[c] &&
                  !("enabled" in l[c]) &&
                  (l[c].enabled = !0),
                l[c] || (l[c] = { enabled: !1 });
            }
          });
        var d = h.extend({}, be);
        o.useModulesParams(d),
          (o.params = h.extend({}, d, ne, l)),
          (o.originalParams = h.extend({}, o.params)),
          (o.passedParams = h.extend({}, l)),
          (o.$ = w);
        var m,
          c,
          p = w(o.params.el);
        if ((n = p[0])) {
          if (p.length > 1) {
            var f = [];
            return (
              p.each(function (v, m) {
                var c = h.extend({}, l, { el: m });
                f.push(new e(c));
              }),
              f
            );
          }
          (n.swiper = o), p.data("swiper", o);
          var u = p.children("." + o.params.wrapperClass);
          return (
            h.extend(o, {
              $el: p,
              el: n,
              $wrapperEl: u,
              wrapperEl: u[0],
              classNames: [],
              slides: w(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === o.params.direction;
              },
              isVertical: function () {
                return "vertical" === o.params.direction;
              },
              rtl:
                "rtl" === n.dir.toLowerCase() || "rtl" === p.css("direction"),
              rtlTranslate:
                "horizontal" === o.params.direction &&
                ("rtl" === n.dir.toLowerCase() || "rtl" === p.css("direction")),
              wrongRTL: "-webkit-box" === u.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: o.params.allowSlideNext,
              allowSlidePrev: o.params.allowSlidePrev,
              touchEvents:
                ((m = ["touchstart", "touchmove", "touchend"]),
                (c = ["mousedown", "mousemove", "mouseup"]),
                x.pointerEvents
                  ? (c = ["pointerdown", "pointermove", "pointerup"])
                  : x.prefixedPointerEvents &&
                    (c = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                (o.touchEventsTouch = { start: m[0], move: m[1], end: m[2] }),
                (o.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
                x.touch || !o.params.simulateTouch
                  ? o.touchEventsTouch
                  : o.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video",
                lastClickTime: h.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: o.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            o.useModules(),
            o.params.init && o.init(),
            o
          );
        }
      }
      r && (e.__proto__ = r),
        ((e.prototype = Object.create(r && r.prototype)).constructor = e);
      var a = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      };
      return (
        (e.prototype.slidesPerViewDynamic = function () {
          var i = this,
            n = i.slides,
            l = i.slidesGrid,
            o = i.size,
            d = i.activeIndex,
            p = 1;
          if (i.params.centeredSlides) {
            for (
              var u, f = n[d].swiperSlideSize, v = d + 1;
              v < n.length;
              v += 1
            )
              n[v] &&
                !u &&
                ((p += 1), (f += n[v].swiperSlideSize) > o && (u = !0));
            for (var m = d - 1; m >= 0; m -= 1)
              n[m] &&
                !u &&
                ((p += 1), (f += n[m].swiperSlideSize) > o && (u = !0));
          } else
            for (var c = d + 1; c < n.length; c += 1)
              l[c] - l[d] < o && (p += 1);
          return p;
        }),
        (e.prototype.update = function () {
          var i = this;
          if (i && !i.destroyed) {
            var s = i.snapGrid,
              n = i.params;
            n.breakpoints && i.setBreakpoint(),
              i.updateSize(),
              i.updateSlides(),
              i.updateProgress(),
              i.updateSlidesClasses(),
              i.params.freeMode
                ? (l(), i.params.autoHeight && i.updateAutoHeight())
                : i.slideTo(
                    ("auto" === i.params.slidesPerView ||
                      i.params.slidesPerView > 1) &&
                      i.isEnd &&
                      !i.params.centeredSlides
                      ? i.slides.length - 1
                      : i.activeIndex,
                    0,
                    !1,
                    !0
                  ) || l(),
              n.watchOverflow && s !== i.snapGrid && i.checkOverflow(),
              i.emit("update");
          }
          function l() {
            var p = Math.min(
              Math.max(
                i.rtlTranslate ? -1 * i.translate : i.translate,
                i.maxTranslate()
              ),
              i.minTranslate()
            );
            i.setTranslate(p), i.updateActiveIndex(), i.updateSlidesClasses();
          }
        }),
        (e.prototype.changeDirection = function (i, s) {
          void 0 === s && (s = !0);
          var n = this,
            l = n.params.direction;
          return (
            i || (i = "horizontal" === l ? "vertical" : "horizontal"),
            i === l ||
              ("horizontal" !== i && "vertical" !== i) ||
              (n.$el
                .removeClass(
                  "" + n.params.containerModifierClass + l + " wp8-" + l
                )
                .addClass("" + n.params.containerModifierClass + i),
              (Y.isIE || Y.isEdge) &&
                (x.pointerEvents || x.prefixedPointerEvents) &&
                n.$el.addClass(n.params.containerModifierClass + "wp8-" + i),
              (n.params.direction = i),
              n.slides.each(function (o, d) {
                "vertical" === i ? (d.style.width = "") : (d.style.height = "");
              }),
              n.emit("changeDirection"),
              s && n.update()),
            n
          );
        }),
        (e.prototype.init = function () {
          var i = this;
          i.initialized ||
            (i.emit("beforeInit"),
            i.params.breakpoints && i.setBreakpoint(),
            i.addClasses(),
            i.params.loop && i.loopCreate(),
            i.updateSize(),
            i.updateSlides(),
            i.params.watchOverflow && i.checkOverflow(),
            i.params.grabCursor && i.setGrabCursor(),
            i.params.preloadImages && i.preloadImages(),
            i.slideTo(
              i.params.loop
                ? i.params.initialSlide + i.loopedSlides
                : i.params.initialSlide,
              0,
              i.params.runCallbacksOnInit
            ),
            i.attachEvents(),
            (i.initialized = !0),
            i.emit("init"));
        }),
        (e.prototype.destroy = function (i, s) {
          void 0 === i && (i = !0), void 0 === s && (s = !0);
          var n = this,
            l = n.params,
            o = n.$el,
            d = n.$wrapperEl,
            p = n.slides;
          return (
            typeof n.params > "u" ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              l.loop && n.loopDestroy(),
              s &&
                (n.removeClasses(),
                o.removeAttr("style"),
                d.removeAttr("style"),
                p &&
                  p.length &&
                  p
                    .removeClass(
                      [
                        l.slideVisibleClass,
                        l.slideActiveClass,
                        l.slideNextClass,
                        l.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")
                    .removeAttr("data-swiper-column")
                    .removeAttr("data-swiper-row")),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach(function (f) {
                n.off(f);
              }),
              !1 !== i &&
                ((n.$el[0].swiper = null),
                n.$el.data("swiper", null),
                h.deleteProps(n)),
              (n.destroyed = !0)),
            null
          );
        }),
        (e.extendDefaults = function (i) {
          h.extend(ne, i);
        }),
        (a.extendedDefaults.get = function () {
          return ne;
        }),
        (a.defaults.get = function () {
          return be;
        }),
        (a.Class.get = function () {
          return r;
        }),
        (a.$.get = function () {
          return w;
        }),
        Object.defineProperties(e, a),
        e
      );
    })(N),
    Tt = { name: "device", proto: { device: A }, static: { device: A } },
    xt = { name: "support", proto: { support: x }, static: { support: x } },
    St = { name: "browser", proto: { browser: Y }, static: { browser: Y } },
    Ct = {
      name: "resize",
      create: function () {
        var e = this;
        h.extend(e, {
          resize: {
            resizeHandler: function () {
              !e ||
                e.destroyed ||
                !e.initialized ||
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              !e ||
                e.destroyed ||
                !e.initialized ||
                e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function () {
          g.addEventListener("resize", this.resize.resizeHandler),
            g.addEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
        destroy: function () {
          g.removeEventListener("resize", this.resize.resizeHandler),
            g.removeEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
      },
    },
    Q = {
      func: g.MutationObserver || g.WebkitMutationObserver,
      attach: function (e, a) {
        void 0 === a && (a = {});
        var t = this,
          s = new (0, Q.func)(function (n) {
            if (1 !== n.length) {
              var l = function () {
                t.emit("observerUpdate", n[0]);
              };
              g.requestAnimationFrame
                ? g.requestAnimationFrame(l)
                : g.setTimeout(l, 0);
            } else t.emit("observerUpdate", n[0]);
          });
        s.observe(e, {
          attributes: typeof a.attributes > "u" || a.attributes,
          childList: typeof a.childList > "u" || a.childList,
          characterData: typeof a.characterData > "u" || a.characterData,
        }),
          t.observer.observers.push(s);
      },
      init: function () {
        var e = this;
        if (x.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var a = e.$el.parents(), t = 0; t < a.length; t += 1)
              e.observer.attach(a[t]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (a) {
          a.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    Mt = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        var e = this;
        h.extend(e, {
          observer: {
            init: Q.init.bind(e),
            attach: Q.attach.bind(e),
            destroy: Q.destroy.bind(e),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    W = {
      update: function (e) {
        var a = this,
          t = a.params,
          i = t.slidesPerView,
          s = t.slidesPerGroup,
          n = t.centeredSlides,
          l = a.params.virtual,
          o = l.addSlidesBefore,
          d = l.addSlidesAfter,
          p = a.virtual,
          f = p.from,
          u = p.to,
          v = p.slides,
          m = p.slidesGrid,
          c = p.renderSlide,
          C = p.offset;
        a.updateActiveIndex();
        var E,
          y,
          z,
          b = a.activeIndex || 0;
        (E = a.rtlTranslate ? "right" : a.isHorizontal() ? "left" : "top"),
          n
            ? ((y = Math.floor(i / 2) + s + o), (z = Math.floor(i / 2) + s + d))
            : ((y = i + (s - 1) + o), (z = s + d));
        var P = Math.max((b || 0) - z, 0),
          S = Math.min((b || 0) + y, v.length - 1),
          D = (a.slidesGrid[P] || 0) - (a.slidesGrid[0] || 0);
        function O() {
          a.updateSlides(),
            a.updateProgress(),
            a.updateSlidesClasses(),
            a.lazy && a.params.lazy.enabled && a.lazy.load();
        }
        if (
          (h.extend(a.virtual, {
            from: P,
            to: S,
            offset: D,
            slidesGrid: a.slidesGrid,
          }),
          f === P && u === S && !e)
        )
          return (
            a.slidesGrid !== m && D !== C && a.slides.css(E, D + "px"),
            void a.updateProgress()
          );
        if (a.params.virtual.renderExternal)
          return (
            a.params.virtual.renderExternal.call(a, {
              offset: D,
              from: P,
              to: S,
              slides: (function () {
                for (var H = [], q = P; q <= S; q += 1) H.push(v[q]);
                return H;
              })(),
            }),
            void O()
          );
        var L = [],
          M = [];
        if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();
        else
          for (var I = f; I <= u; I += 1)
            (I < P || I > S) &&
              a.$wrapperEl
                .find(
                  "." +
                    a.params.slideClass +
                    '[data-swiper-slide-index="' +
                    I +
                    '"]'
                )
                .remove();
        for (var $ = 0; $ < v.length; $ += 1)
          $ >= P &&
            $ <= S &&
            (typeof u > "u" || e
              ? M.push($)
              : ($ > u && M.push($), $ < f && L.push($)));
        M.forEach(function (G) {
          a.$wrapperEl.append(c(v[G], G));
        }),
          L.sort(function (G, H) {
            return H - G;
          }).forEach(function (G) {
            a.$wrapperEl.prepend(c(v[G], G));
          }),
          a.$wrapperEl.children(".swiper-slide").css(E, D + "px"),
          O();
      },
      renderSlide: function (e, a) {
        var t = this,
          i = t.params.virtual;
        if (i.cache && t.virtual.cache[a]) return t.virtual.cache[a];
        var s = w(
          i.renderSlide
            ? i.renderSlide.call(t, e, a)
            : '<div class="' +
                t.params.slideClass +
                '" data-swiper-slide-index="' +
                a +
                '">' +
                e +
                "</div>"
        );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", a),
          i.cache && (t.virtual.cache[a] = s),
          s
        );
      },
      appendSlide: function (e) {
        var a = this;
        if ("object" == typeof e && "length" in e)
          for (var t = 0; t < e.length; t += 1)
            e[t] && a.virtual.slides.push(e[t]);
        else a.virtual.slides.push(e);
        a.virtual.update(!0);
      },
      prependSlide: function (e) {
        var a = this,
          t = a.activeIndex,
          i = t + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var n = 0; n < e.length; n += 1)
            e[n] && a.virtual.slides.unshift(e[n]);
          (i = t + e.length), (s = e.length);
        } else a.virtual.slides.unshift(e);
        if (a.params.virtual.cache) {
          var l = a.virtual.cache,
            o = {};
          Object.keys(l).forEach(function (d) {
            o[parseInt(d, 10) + s] = l[d];
          }),
            (a.virtual.cache = o);
        }
        a.virtual.update(!0), a.slideTo(i, 0);
      },
      removeSlide: function (e) {
        var a = this;
        if (!(typeof e > "u" || null === e)) {
          var t = a.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              a.virtual.slides.splice(e[i], 1),
                a.params.virtual.cache && delete a.virtual.cache[e[i]],
                e[i] < t && (t -= 1),
                (t = Math.max(t, 0));
          else
            a.virtual.slides.splice(e, 1),
              a.params.virtual.cache && delete a.virtual.cache[e],
              e < t && (t -= 1),
              (t = Math.max(t, 0));
          a.virtual.update(!0), a.slideTo(t, 0);
        }
      },
      removeAllSlides: function () {
        var e = this;
        (e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0);
      },
    },
    zt = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          virtual: {
            update: W.update.bind(e),
            appendSlide: W.appendSlide.bind(e),
            prependSlide: W.prependSlide.bind(e),
            removeSlide: W.removeSlide.bind(e),
            removeAllSlides: W.removeAllSlides.bind(e),
            renderSlide: W.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var a = { watchSlidesProgress: !0 };
            h.extend(e.params, a),
              h.extend(e.originalParams, a),
              e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    },
    le = {
      handle: function (e) {
        var a = this,
          t = a.rtlTranslate,
          i = e;
        i.originalEvent && (i = i.originalEvent);
        var s = i.keyCode || i.charCode;
        if (
          (!a.allowSlideNext &&
            ((a.isHorizontal() && 39 === s) ||
              (a.isVertical() && 40 === s) ||
              34 === s)) ||
          (!a.allowSlidePrev &&
            ((a.isHorizontal() && 37 === s) ||
              (a.isVertical() && 38 === s) ||
              33 === s))
        )
          return !1;
        if (
          !(
            i.shiftKey ||
            i.altKey ||
            i.ctrlKey ||
            i.metaKey ||
            (T.activeElement &&
              T.activeElement.nodeName &&
              ("input" === T.activeElement.nodeName.toLowerCase() ||
                "textarea" === T.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            a.params.keyboard.onlyInViewport &&
            (33 === s ||
              34 === s ||
              37 === s ||
              39 === s ||
              38 === s ||
              40 === s)
          ) {
            var n = !1;
            if (
              a.$el.parents("." + a.params.slideClass).length > 0 &&
              0 === a.$el.parents("." + a.params.slideActiveClass).length
            )
              return;
            var l = g.innerWidth,
              o = g.innerHeight,
              d = a.$el.offset();
            t && (d.left -= a.$el[0].scrollLeft);
            for (
              var p = [
                  [d.left, d.top],
                  [d.left + a.width, d.top],
                  [d.left, d.top + a.height],
                  [d.left + a.width, d.top + a.height],
                ],
                f = 0;
              f < p.length;
              f += 1
            ) {
              var u = p[f];
              u[0] >= 0 && u[0] <= l && u[1] >= 0 && u[1] <= o && (n = !0);
            }
            if (!n) return;
          }
          a.isHorizontal()
            ? ((33 === s || 34 === s || 37 === s || 39 === s) &&
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              (((34 === s || 39 === s) && !t) ||
                ((33 === s || 37 === s) && t)) &&
                a.slideNext(),
              (((33 === s || 37 === s) && !t) ||
                ((34 === s || 39 === s) && t)) &&
                a.slidePrev())
            : ((33 === s || 34 === s || 38 === s || 40 === s) &&
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              (34 === s || 40 === s) && a.slideNext(),
              (33 === s || 38 === s) && a.slidePrev()),
            a.emit("keyPress", s);
        }
      },
      enable: function () {
        var e = this;
        e.keyboard.enabled ||
          (w(T).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
      },
      disable: function () {
        var e = this;
        e.keyboard.enabled &&
          (w(T).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
      },
    },
    Pt = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create: function () {
        var e = this;
        h.extend(e, {
          keyboard: {
            enabled: !1,
            enable: le.enable.bind(e),
            disable: le.disable.bind(e),
            handle: le.handle.bind(e),
          },
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        },
      },
    },
    F = {
      lastScrollTime: h.now(),
      event:
        g.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function kt() {
              var r = "onwheel",
                e = r in T;
              if (!e) {
                var a = T.createElement("div");
                a.setAttribute(r, "return;"), (e = "function" == typeof a[r]);
              }
              return (
                !e &&
                  T.implementation &&
                  T.implementation.hasFeature &&
                  !0 !== T.implementation.hasFeature("", "") &&
                  (e = T.implementation.hasFeature("Events.wheel", "3.0")),
                e
              );
            })()
          ? "wheel"
          : "mousewheel",
      normalize: function (e) {
        var s = 0,
          n = 0,
          l = 0,
          o = 0;
        return (
          "detail" in e && (n = e.detail),
          "wheelDelta" in e && (n = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (s = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((s = n), (n = 0)),
          (l = 10 * s),
          (o = 10 * n),
          "deltaY" in e && (o = e.deltaY),
          "deltaX" in e && (l = e.deltaX),
          (l || o) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((l *= 40), (o *= 40))
              : ((l *= 800), (o *= 800))),
          l && !s && (s = l < 1 ? -1 : 1),
          o && !n && (n = o < 1 ? -1 : 1),
          { spinX: s, spinY: n, pixelX: l, pixelY: o }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var a = e,
          t = this,
          i = t.params.mousewheel;
        if (!t.mouseEntered && !i.releaseOnEdges) return !0;
        a.originalEvent && (a = a.originalEvent);
        var s = 0,
          n = t.rtlTranslate ? -1 : 1,
          l = F.normalize(a);
        if (i.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            s = l.pixelX * n;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            s = l.pixelY;
          }
        else
          s =
            Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
        if (0 === s) return !0;
        if ((i.invert && (s = -s), t.params.freeMode)) {
          t.params.loop && t.loopFix();
          var o = t.getTranslate() + s * i.sensitivity,
            d = t.isBeginning,
            p = t.isEnd;
          if (
            (o >= t.minTranslate() && (o = t.minTranslate()),
            o <= t.maxTranslate() && (o = t.maxTranslate()),
            t.setTransition(0),
            t.setTranslate(o),
            t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses(),
            ((!d && t.isBeginning) || (!p && t.isEnd)) &&
              t.updateSlidesClasses(),
            t.params.freeModeSticky &&
              (clearTimeout(t.mousewheel.timeout),
              (t.mousewheel.timeout = h.nextTick(function () {
                t.slideToClosest();
              }, 300))),
            t.emit("scroll", a),
            t.params.autoplay &&
              t.params.autoplayDisableOnInteraction &&
              t.autoplay.stop(),
            o === t.minTranslate() || o === t.maxTranslate())
          )
            return !0;
        } else {
          if (h.now() - t.mousewheel.lastScrollTime > 60)
            if (s < 0)
              if ((t.isEnd && !t.params.loop) || t.animating) {
                if (i.releaseOnEdges) return !0;
              } else t.slideNext(), t.emit("scroll", a);
            else if ((t.isBeginning && !t.params.loop) || t.animating) {
              if (i.releaseOnEdges) return !0;
            } else t.slidePrev(), t.emit("scroll", a);
          t.mousewheel.lastScrollTime = new g.Date().getTime();
        }
        return a.preventDefault ? a.preventDefault() : (a.returnValue = !1), !1;
      },
      enable: function () {
        var e = this;
        if (!F.event || e.mousewheel.enabled) return !1;
        var a = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (a = w(e.params.mousewheel.eventsTarged)),
          a.on("mouseenter", e.mousewheel.handleMouseEnter),
          a.on("mouseleave", e.mousewheel.handleMouseLeave),
          a.on(F.event, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = this;
        if (!F.event || !e.mousewheel.enabled) return !1;
        var a = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (a = w(e.params.mousewheel.eventsTarged)),
          a.off(F.event, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        );
      },
    },
    $t = {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container",
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          mousewheel: {
            enabled: !1,
            enable: F.enable.bind(e),
            disable: F.disable.bind(e),
            handle: F.handle.bind(e),
            handleMouseEnter: F.handleMouseEnter.bind(e),
            handleMouseLeave: F.handleMouseLeave.bind(e),
            lastScrollTime: h.now(),
          },
        });
      },
      on: {
        init: function () {
          this.params.mousewheel.enabled && this.mousewheel.enable();
        },
        destroy: function () {
          this.mousewheel.enabled && this.mousewheel.disable();
        },
      },
    },
    U = {
      update: function () {
        var e = this,
          a = e.params.navigation;
        if (!e.params.loop) {
          var t = e.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s &&
            s.length > 0 &&
            (e.isBeginning
              ? s.addClass(a.disabledClass)
              : s.removeClass(a.disabledClass),
            s[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](a.lockClass)),
            i &&
              i.length > 0 &&
              (e.isEnd
                ? i.addClass(a.disabledClass)
                : i.removeClass(a.disabledClass),
              i[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](a.lockClass));
        }
      },
      onPrevClick: function (e) {
        var a = this;
        e.preventDefault(), (!a.isBeginning || a.params.loop) && a.slidePrev();
      },
      onNextClick: function (e) {
        var a = this;
        e.preventDefault(), (!a.isEnd || a.params.loop) && a.slideNext();
      },
      init: function () {
        var t,
          i,
          e = this,
          a = e.params.navigation;
        (a.nextEl || a.prevEl) &&
          (a.nextEl &&
            ((t = w(a.nextEl)),
            e.params.uniqueNavElements &&
              "string" == typeof a.nextEl &&
              t.length > 1 &&
              1 === e.$el.find(a.nextEl).length &&
              (t = e.$el.find(a.nextEl))),
          a.prevEl &&
            ((i = w(a.prevEl)),
            e.params.uniqueNavElements &&
              "string" == typeof a.prevEl &&
              i.length > 1 &&
              1 === e.$el.find(a.prevEl).length &&
              (i = e.$el.find(a.prevEl))),
          t && t.length > 0 && t.on("click", e.navigation.onNextClick),
          i && i.length > 0 && i.on("click", e.navigation.onPrevClick),
          h.extend(e.navigation, {
            $nextEl: t,
            nextEl: t && t[0],
            $prevEl: i,
            prevEl: i && i[0],
          }));
      },
      destroy: function () {
        var e = this,
          a = e.navigation,
          t = a.$nextEl,
          i = a.$prevEl;
        t &&
          t.length &&
          (t.off("click", e.navigation.onNextClick),
          t.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass));
      },
    },
    Lt = {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          navigation: {
            init: U.init.bind(e),
            update: U.update.bind(e),
            destroy: U.destroy.bind(e),
            onNextClick: U.onNextClick.bind(e),
            onPrevClick: U.onPrevClick.bind(e),
          },
        });
      },
      on: {
        init: function () {
          this.navigation.init(), this.navigation.update();
        },
        toEdge: function () {
          this.navigation.update();
        },
        fromEdge: function () {
          this.navigation.update();
        },
        destroy: function () {
          this.navigation.destroy();
        },
        click: function (e) {
          var n,
            a = this,
            t = a.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          !a.params.navigation.hideOnClick ||
            w(e.target).is(s) ||
            w(e.target).is(i) ||
            (i
              ? (n = i.hasClass(a.params.navigation.hiddenClass))
              : s && (n = s.hasClass(a.params.navigation.hiddenClass)),
            a.emit(!0 === n ? "navigationShow" : "navigationHide", a),
            i && i.toggleClass(a.params.navigation.hiddenClass),
            s && s.toggleClass(a.params.navigation.hiddenClass));
        },
      },
    },
    Z = {
      update: function () {
        var e = this,
          a = e.rtl,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var n,
            i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            s = e.pagination.$el,
            l = e.params.loop
              ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((n = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  i - 1 - 2 * e.loopedSlides && (n -= i - 2 * e.loopedSlides),
                n > l - 1 && (n -= l),
                n < 0 && "bullets" !== e.params.paginationType && (n = l + n))
              : (n =
                  typeof e.snapIndex < "u" ? e.snapIndex : e.activeIndex || 0),
            "bullets" === t.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            var d,
              p,
              f,
              o = e.pagination.bullets;
            if (
              (t.dynamicBullets &&
                ((e.pagination.bulletSize = o
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                s.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"
                ),
                t.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += n - e.previousIndex),
                  e.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        t.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (f =
                  ((p =
                    (d = n - e.pagination.dynamicBulletIndex) +
                    (Math.min(o.length, t.dynamicMainBullets) - 1)) +
                    d) /
                  2)),
              o.removeClass(
                t.bulletActiveClass +
                  " " +
                  t.bulletActiveClass +
                  "-next " +
                  t.bulletActiveClass +
                  "-next-next " +
                  t.bulletActiveClass +
                  "-prev " +
                  t.bulletActiveClass +
                  "-prev-prev " +
                  t.bulletActiveClass +
                  "-main"
              ),
              s.length > 1)
            )
              o.each(function (D, O) {
                var L = w(O),
                  M = L.index();
                M === n && L.addClass(t.bulletActiveClass),
                  t.dynamicBullets &&
                    (M >= d &&
                      M <= p &&
                      L.addClass(t.bulletActiveClass + "-main"),
                    M === d &&
                      L.prev()
                        .addClass(t.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev-prev"),
                    M === p &&
                      L.next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next"));
              });
            else if (
              (o.eq(n).addClass(t.bulletActiveClass), t.dynamicBullets)
            ) {
              for (var v = o.eq(d), m = o.eq(p), c = d; c <= p; c += 1)
                o.eq(c).addClass(t.bulletActiveClass + "-main");
              v
                .prev()
                .addClass(t.bulletActiveClass + "-prev")
                .prev()
                .addClass(t.bulletActiveClass + "-prev-prev"),
                m
                  .next()
                  .addClass(t.bulletActiveClass + "-next")
                  .next()
                  .addClass(t.bulletActiveClass + "-next-next");
            }
            if (t.dynamicBullets) {
              var C = Math.min(o.length, t.dynamicMainBullets + 4),
                b =
                  (e.pagination.bulletSize * C - e.pagination.bulletSize) / 2 -
                  f * e.pagination.bulletSize,
                E = a ? "right" : "left";
              o.css(e.isHorizontal() ? E : "top", b + "px");
            }
          }
          if (
            ("fraction" === t.type &&
              (s
                .find("." + t.currentClass)
                .text(t.formatFractionCurrent(n + 1)),
              s.find("." + t.totalClass).text(t.formatFractionTotal(l))),
            "progressbar" === t.type)
          ) {
            var y;
            y = t.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            var z = (n + 1) / l,
              P = 1,
              S = 1;
            "horizontal" === y ? (P = z) : (S = z),
              s
                .find("." + t.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + P + ") scaleY(" + S + ")"
                )
                .transition(e.params.speed);
          }
          "custom" === t.type && t.renderCustom
            ? (s.html(t.renderCustom(e, n + 1, l)),
              e.emit("paginationRender", e, s[0]))
            : e.emit("paginationUpdate", e, s[0]),
            s[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](t.lockClass);
        }
      },
      render: function () {
        var e = this,
          a = e.params.pagination;
        if (
          a.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var i = e.pagination.$el,
            s = "";
          if ("bullets" === a.type) {
            for (
              var n = e.params.loop
                  ? Math.ceil(
                      ((e.virtual && e.params.virtual.enabled
                        ? e.virtual.slides.length
                        : e.slides.length) -
                        2 * e.loopedSlides) /
                        e.params.slidesPerGroup
                    )
                  : e.snapGrid.length,
                l = 0;
              l < n;
              l += 1
            )
              s += a.renderBullet
                ? a.renderBullet.call(e, l, a.bulletClass)
                : "<" +
                  a.bulletElement +
                  ' class="' +
                  a.bulletClass +
                  '"></' +
                  a.bulletElement +
                  ">";
            i.html(s), (e.pagination.bullets = i.find("." + a.bulletClass));
          }
          "fraction" === a.type &&
            ((s = a.renderFraction
              ? a.renderFraction.call(e, a.currentClass, a.totalClass)
              : '<span class="' +
                a.currentClass +
                '"></span> / <span class="' +
                a.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === a.type &&
              ((s = a.renderProgressbar
                ? a.renderProgressbar.call(e, a.progressbarFillClass)
                : '<span class="' + a.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== a.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          a = e.params.pagination;
        if (a.el) {
          var t = w(a.el);
          0 !== t.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof a.el &&
              t.length > 1 &&
              1 === e.$el.find(a.el).length &&
              (t = e.$el.find(a.el)),
            "bullets" === a.type && a.clickable && t.addClass(a.clickableClass),
            t.addClass(a.modifierClass + a.type),
            "bullets" === a.type &&
              a.dynamicBullets &&
              (t.addClass("" + a.modifierClass + a.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)),
            "progressbar" === a.type &&
              a.progressbarOpposite &&
              t.addClass(a.progressbarOppositeClass),
            a.clickable &&
              t.on("click", "." + a.bulletClass, function (s) {
                s.preventDefault();
                var n = w(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides), e.slideTo(n);
              }),
            h.extend(e.pagination, { $el: t, el: t[0] }));
        }
      },
      destroy: function () {
        var e = this,
          a = e.params.pagination;
        if (
          a.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var t = e.pagination.$el;
          t.removeClass(a.hiddenClass),
            t.removeClass(a.modifierClass + a.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(a.bulletActiveClass),
            a.clickable && t.off("click", "." + a.bulletClass);
        }
      },
    },
    Dt = {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function (r) {
            return r;
          },
          formatFractionTotal: function (r) {
            return r;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock",
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          pagination: {
            init: Z.init.bind(e),
            render: Z.render.bind(e),
            update: Z.update.bind(e),
            destroy: Z.destroy.bind(e),
            dynamicBulletIndex: 0,
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function () {
          var e = this;
          (e.params.loop || typeof e.snapIndex > "u") && e.pagination.update();
        },
        snapIndexChange: function () {
          this.params.loop || this.pagination.update();
        },
        slidesLengthChange: function () {
          var e = this;
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function () {
          var e = this;
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function () {
          this.pagination.destroy();
        },
        click: function (e) {
          var a = this;
          if (
            a.params.pagination.el &&
            a.params.pagination.hideOnClick &&
            a.pagination.$el.length > 0 &&
            !w(e.target).hasClass(a.params.pagination.bulletClass)
          ) {
            var t = a.pagination.$el.hasClass(a.params.pagination.hiddenClass);
            a.emit(!0 === t ? "paginationShow" : "paginationHide", a),
              a.pagination.$el.toggleClass(a.params.pagination.hiddenClass);
          }
        },
      },
    },
    V = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var a = e.scrollbar,
            s = a.dragSize,
            n = a.trackSize,
            l = a.$dragEl,
            o = a.$el,
            d = e.params.scrollbar,
            p = s,
            f = (n - s) * e.progress;
          e.rtlTranslate
            ? (f = -f) > 0
              ? ((p = s - f), (f = 0))
              : -f + s > n && (p = n + f)
            : f < 0
            ? ((p = s + f), (f = 0))
            : f + s > n && (p = n - f),
            e.isHorizontal()
              ? (l.transform(
                  x.transforms3d
                    ? "translate3d(" + f + "px, 0, 0)"
                    : "translateX(" + f + "px)"
                ),
                (l[0].style.width = p + "px"))
              : (l.transform(
                  x.transforms3d
                    ? "translate3d(0px, " + f + "px, 0)"
                    : "translateY(" + f + "px)"
                ),
                (l[0].style.height = p + "px")),
            d.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (o[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (o[0].style.opacity = 0), o.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        var a = this;
        !a.params.scrollbar.el ||
          !a.scrollbar.el ||
          a.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var a = e.scrollbar,
            t = a.$dragEl,
            i = a.$el;
          (t[0].style.width = ""), (t[0].style.height = "");
          var o,
            s = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (s / e.size);
          (o =
            "auto" === e.params.scrollbar.dragSize
              ? s * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (t[0].style.width = o + "px")
              : (t[0].style.height = o + "px"),
            (i[0].style.display = n >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            h.extend(a, {
              trackSize: s,
              divider: n,
              moveDivider: l,
              dragSize: o,
            }),
            a.$el[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](e.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].pageX
            : e.pageX || e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].pageY
          : e.pageY || e.clientY;
      },
      setDragPosition: function (e) {
        var d,
          a = this,
          t = a.scrollbar,
          i = a.rtlTranslate,
          s = t.$el,
          n = t.dragSize,
          l = t.trackSize,
          o = t.dragStartPos;
        (d =
          (t.getPointerPosition(e) -
            s.offset()[a.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : n / 2)) /
          (l - n)),
          (d = Math.max(Math.min(d, 1), 0)),
          i && (d = 1 - d);
        var p = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * d;
        a.updateProgress(p),
          a.setTranslate(p),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var a = this,
          t = a.params.scrollbar,
          i = a.scrollbar,
          s = a.$wrapperEl,
          n = i.$el,
          l = i.$dragEl;
        (a.scrollbar.isTouched = !0),
          (a.scrollbar.dragStartPos =
            e.target === l[0] || e.target === l
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  a.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          l.transition(100),
          i.setDragPosition(e),
          clearTimeout(a.scrollbar.dragTimeout),
          n.transition(0),
          t.hide && n.css("opacity", 1),
          a.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var a = this,
          t = a.scrollbar,
          i = a.$wrapperEl,
          s = t.$el,
          n = t.$dragEl;
        a.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          n.transition(0),
          a.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var a = this,
          t = a.params.scrollbar,
          s = a.scrollbar.$el;
        a.scrollbar.isTouched &&
          ((a.scrollbar.isTouched = !1),
          t.hide &&
            (clearTimeout(a.scrollbar.dragTimeout),
            (a.scrollbar.dragTimeout = h.nextTick(function () {
              s.css("opacity", 0), s.transition(400);
            }, 1e3))),
          a.emit("scrollbarDragEnd", e),
          t.snapOnRelease && a.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            l = e.scrollbar.$el[0],
            o = !(!x.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!x.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          x.touch
            ? (l.addEventListener(t.start, e.scrollbar.onDragStart, o),
              l.addEventListener(t.move, e.scrollbar.onDragMove, o),
              l.addEventListener(t.end, e.scrollbar.onDragEnd, d))
            : (l.addEventListener(i.start, e.scrollbar.onDragStart, o),
              T.addEventListener(i.move, e.scrollbar.onDragMove, o),
              T.addEventListener(i.end, e.scrollbar.onDragEnd, d));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            l = e.scrollbar.$el[0],
            o = !(!x.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!x.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          x.touch
            ? (l.removeEventListener(t.start, e.scrollbar.onDragStart, o),
              l.removeEventListener(t.move, e.scrollbar.onDragMove, o),
              l.removeEventListener(t.end, e.scrollbar.onDragEnd, d))
            : (l.removeEventListener(i.start, e.scrollbar.onDragStart, o),
              T.removeEventListener(i.move, e.scrollbar.onDragMove, o),
              T.removeEventListener(i.end, e.scrollbar.onDragEnd, d));
        }
      },
      init: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var a = e.scrollbar,
            t = e.$el,
            i = e.params.scrollbar,
            s = w(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            s.length > 1 &&
            1 === t.find(i.el).length &&
            (s = t.find(i.el));
          var n = s.find("." + e.params.scrollbar.dragClass);
          0 === n.length &&
            ((n = w(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(n)),
            h.extend(a, { $el: s, el: s[0], $dragEl: n, dragEl: n[0] }),
            i.draggable && a.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    It = {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          scrollbar: {
            init: V.init.bind(e),
            destroy: V.destroy.bind(e),
            updateSize: V.updateSize.bind(e),
            setTranslate: V.setTranslate.bind(e),
            setTransition: V.setTransition.bind(e),
            enableDraggable: V.enableDraggable.bind(e),
            disableDraggable: V.disableDraggable.bind(e),
            setDragPosition: V.setDragPosition.bind(e),
            getPointerPosition: V.getPointerPosition.bind(e),
            onDragStart: V.onDragStart.bind(e),
            onDragMove: V.onDragMove.bind(e),
            onDragEnd: V.onDragEnd.bind(e),
            isTouched: !1,
            timeout: null,
            dragTimeout: null,
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.scrollbar.init(),
            e.scrollbar.updateSize(),
            e.scrollbar.setTranslate();
        },
        update: function () {
          this.scrollbar.updateSize();
        },
        resize: function () {
          this.scrollbar.updateSize();
        },
        observerUpdate: function () {
          this.scrollbar.updateSize();
        },
        setTranslate: function () {
          this.scrollbar.setTranslate();
        },
        setTransition: function (e) {
          this.scrollbar.setTransition(e);
        },
        destroy: function () {
          this.scrollbar.destroy();
        },
      },
    },
    oe = {
      setTransform: function (e, a) {
        var i = this.rtl,
          s = w(e),
          n = i ? -1 : 1,
          l = s.attr("data-swiper-parallax") || "0",
          o = s.attr("data-swiper-parallax-x"),
          d = s.attr("data-swiper-parallax-y"),
          p = s.attr("data-swiper-parallax-scale"),
          f = s.attr("data-swiper-parallax-opacity");
        if (
          (o || d
            ? ((o = o || "0"), (d = d || "0"))
            : this.isHorizontal()
            ? ((o = l), (d = "0"))
            : ((d = l), (o = "0")),
          (o =
            o.indexOf("%") >= 0
              ? parseInt(o, 10) * a * n + "%"
              : o * a * n + "px"),
          (d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px"),
          typeof f < "u" && null !== f)
        ) {
          var u = f - (f - 1) * (1 - Math.abs(a));
          s[0].style.opacity = u;
        }
        if (typeof p > "u" || null === p)
          s.transform("translate3d(" + o + ", " + d + ", 0px)");
        else {
          var v = p - (p - 1) * (1 - Math.abs(a));
          s.transform(
            "translate3d(" + o + ", " + d + ", 0px) scale(" + v + ")"
          );
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.slides,
          i = e.progress,
          s = e.snapGrid;
        e.$el
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (n, l) {
            e.parallax.setTransform(l, i);
          }),
          t.each(function (n, l) {
            var o = l.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (o += Math.ceil(n / 2) - i * (s.length - 1)),
              (o = Math.min(Math.max(o, -1), 1)),
              w(l)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (d, p) {
                  e.parallax.setTransform(p, o);
                });
          });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed),
          this.$el
            .find(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each(function (i, s) {
              var n = w(s),
                l = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
              0 === e && (l = 0), n.transition(l);
            });
      },
    },
    Ot = {
      name: "parallax",
      params: { parallax: { enabled: !1 } },
      create: function () {
        var e = this;
        h.extend(e, {
          parallax: {
            setTransform: oe.setTransform.bind(e),
            setTranslate: oe.setTranslate.bind(e),
            setTransition: oe.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          e.params.parallax.enabled &&
            ((e.params.watchSlidesProgress = !0),
            (e.originalParams.watchSlidesProgress = !0));
        },
        init: function () {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTranslate: function () {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTransition: function (e) {
          this.params.parallax.enabled && this.parallax.setTransition(e);
        },
      },
    },
    de = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(
          Math.pow(e.targetTouches[1].pageX - e.targetTouches[0].pageX, 2) +
            Math.pow(s - t, 2)
        );
      },
      onGestureStart: function (e) {
        var a = this,
          t = a.params.zoom,
          i = a.zoom,
          s = i.gesture;
        if (
          ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !x.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureTouched = !0),
            (s.scaleStart = de.getDistanceBetweenTouches(e));
        }
        (s.$slideEl && s.$slideEl.length) ||
        ((s.$slideEl = w(e.target).closest(".swiper-slide")),
        0 === s.$slideEl.length && (s.$slideEl = a.slides.eq(a.activeIndex)),
        (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
        (s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass)),
        (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
        0 !== s.$imageWrapEl.length)
          ? (s.$imageEl.transition(0), (a.zoom.isScaling = !0))
          : (s.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!x.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureMoved = !0),
            (s.scaleMove = de.getDistanceBetweenTouches(e));
        }
        !s.$imageEl ||
          0 === s.$imageEl.length ||
          ((i.scale = x.gestures
            ? e.scale * i.currentScale
            : (s.scaleMove / s.scaleStart) * i.currentScale),
          i.scale > s.maxRatio &&
            (i.scale =
              s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
          i.scale < t.minRatio &&
            (i.scale =
              t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
          s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
      },
      onGestureEnd: function (e) {
        var a = this,
          t = a.params.zoom,
          i = a.zoom,
          s = i.gesture;
        if (!x.gestures) {
          if (
            !i.fakeGestureTouched ||
            !i.fakeGestureMoved ||
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !A.android)
          )
            return;
          (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
        }
        !s.$imageEl ||
          0 === s.$imageEl.length ||
          ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
          s.$imageEl
            .transition(a.params.speed)
            .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
          (i.currentScale = i.scale),
          (i.isScaling = !1),
          1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image;
        !i.$imageEl ||
          0 === i.$imageEl.length ||
          s.isTouched ||
          (A.android && e.preventDefault(),
          (s.isTouched = !0),
          (s.touchesStart.x =
            "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
          (s.touchesStart.y =
            "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function (e) {
        var a = this,
          t = a.zoom,
          i = t.gesture,
          s = t.image,
          n = t.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((a.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = h.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (s.startY = h.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            a.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var l = s.width * t.scale,
            o = s.height * t.scale;
          if (!(l < i.slideWidth && o < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - l / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !t.isScaling)
            ) {
              if (
                a.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !a.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x),
              n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y),
              n.prevTime || (n.prevTime = Date.now()),
              (n.x =
                (s.touchesCurrent.x - n.prevPositionX) /
                (Date.now() - n.prevTime) /
                2),
              (n.y =
                (s.touchesCurrent.y - n.prevPositionY) /
                (Date.now() - n.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
              Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
              (n.prevPositionX = s.touchesCurrent.x),
              (n.prevPositionY = s.touchesCurrent.y),
              (n.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var a = this.zoom,
          t = a.gesture,
          i = a.image,
          s = a.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved)
            return (i.isTouched = !1), void (i.isMoved = !1);
          (i.isTouched = !1), (i.isMoved = !1);
          var n = 300,
            l = 300,
            d = i.currentX + s.x * n,
            f = i.currentY + s.y * l;
          0 !== s.x && (n = Math.abs((d - i.currentX) / s.x)),
            0 !== s.y && (l = Math.abs((f - i.currentY) / s.y));
          var u = Math.max(n, l);
          (i.currentX = d), (i.currentY = f);
          var m = i.height * a.scale;
          (i.minX = Math.min(t.slideWidth / 2 - (i.width * a.scale) / 2, 0)),
            (i.maxX = -i.minX),
            (i.minY = Math.min(t.slideHeight / 2 - m / 2, 0)),
            (i.maxY = -i.minY),
            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
            t.$imageWrapEl
              .transition(u)
              .transform(
                "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this,
          a = e.zoom,
          t = a.gesture;
        t.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (a.scale = 1),
          (a.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var l,
          o,
          f,
          u,
          v,
          m,
          E,
          y,
          z,
          P,
          S,
          D,
          O,
          a = this,
          t = a.zoom,
          i = a.params.zoom,
          s = t.gesture,
          n = t.image;
        s.$slideEl ||
          ((s.$slideEl = a.clickedSlide
            ? w(a.clickedSlide)
            : a.slides.eq(a.activeIndex)),
          (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
          (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass))),
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            (s.$slideEl.addClass("" + i.zoomedSlideClass),
            typeof n.touchesStart.x > "u" && e
              ? ((l =
                  "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
                (o =
                  "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
              : ((l = n.touchesStart.x), (o = n.touchesStart.y)),
            (t.scale = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
            (t.currentScale =
              s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
            e
              ? ((D = s.$slideEl[0].offsetWidth),
                (O = s.$slideEl[0].offsetHeight),
                (f = s.$slideEl.offset().left + D / 2 - l),
                (u = s.$slideEl.offset().top + O / 2 - o),
                (E = s.$imageEl[0].offsetHeight * t.scale),
                (y = Math.min(
                  D / 2 - (s.$imageEl[0].offsetWidth * t.scale) / 2,
                  0
                )),
                (z = Math.min(O / 2 - E / 2, 0)),
                (v = f * t.scale) < y && (v = y),
                v > (P = -y) && (v = P),
                (m = u * t.scale) < z && (m = z),
                m > (S = -z) && (m = S))
              : ((v = 0), (m = 0)),
            s.$imageWrapEl
              .transition(300)
              .transform("translate3d(" + v + "px, " + m + "px,0)"),
            s.$imageEl
              .transition(300)
              .transform("translate3d(0,0,0) scale(" + t.scale + ")"));
      },
      out: function () {
        var e = this,
          a = e.zoom,
          t = e.params.zoom,
          i = a.gesture;
        i.$slideEl ||
          ((i.$slideEl = e.clickedSlide
            ? w(e.clickedSlide)
            : e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
          (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((a.scale = 1),
            (a.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      enable: function () {
        var e = this,
          a = e.zoom;
        if (!a.enabled) {
          a.enabled = !0;
          var t = !(
            "touchstart" !== e.touchEvents.start ||
            !x.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          x.gestures
            ? (e.$wrapperEl.on(
                "gesturestart",
                ".swiper-slide",
                a.onGestureStart,
                t
              ),
              e.$wrapperEl.on(
                "gesturechange",
                ".swiper-slide",
                a.onGestureChange,
                t
              ),
              e.$wrapperEl.on("gestureend", ".swiper-slide", a.onGestureEnd, t))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.on(
                e.touchEvents.start,
                ".swiper-slide",
                a.onGestureStart,
                t
              ),
              e.$wrapperEl.on(
                e.touchEvents.move,
                ".swiper-slide",
                a.onGestureChange,
                t
              ),
              e.$wrapperEl.on(
                e.touchEvents.end,
                ".swiper-slide",
                a.onGestureEnd,
                t
              )),
            e.$wrapperEl.on(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              a.onTouchMove
            );
        }
      },
      disable: function () {
        var e = this,
          a = e.zoom;
        if (a.enabled) {
          e.zoom.enabled = !1;
          var t = !(
            "touchstart" !== e.touchEvents.start ||
            !x.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          x.gestures
            ? (e.$wrapperEl.off(
                "gesturestart",
                ".swiper-slide",
                a.onGestureStart,
                t
              ),
              e.$wrapperEl.off(
                "gesturechange",
                ".swiper-slide",
                a.onGestureChange,
                t
              ),
              e.$wrapperEl.off(
                "gestureend",
                ".swiper-slide",
                a.onGestureEnd,
                t
              ))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(
                e.touchEvents.start,
                ".swiper-slide",
                a.onGestureStart,
                t
              ),
              e.$wrapperEl.off(
                e.touchEvents.move,
                ".swiper-slide",
                a.onGestureChange,
                t
              ),
              e.$wrapperEl.off(
                e.touchEvents.end,
                ".swiper-slide",
                a.onGestureEnd,
                t
              )),
            e.$wrapperEl.off(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              a.onTouchMove
            );
        }
      },
    },
    Gt = {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      },
      create: function () {
        var e = this,
          a = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3,
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {},
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0,
            },
          };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
          .split(" ")
          .forEach(function (i) {
            a[i] = de[i].bind(e);
          }),
          h.extend(e, { zoom: a });
        var t = 1;
        Object.defineProperty(e.zoom, "scale", {
          get: function () {
            return t;
          },
          set: function (s) {
            t !== s &&
              e.emit(
                "zoomChange",
                s,
                e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0
              ),
              (t = s);
          },
        });
      },
      on: {
        init: function () {
          this.params.zoom.enabled && this.zoom.enable();
        },
        destroy: function () {
          this.zoom.disable();
        },
        touchStart: function (e) {
          this.zoom.enabled && this.zoom.onTouchStart(e);
        },
        touchEnd: function (e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e);
        },
        doubleTap: function (e) {
          var a = this;
          a.params.zoom.enabled &&
            a.zoom.enabled &&
            a.params.zoom.toggle &&
            a.zoom.toggle(e);
        },
        transitionEnd: function () {
          var e = this;
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
        },
      },
    },
    ye = {
      loadInSlide: function (e, a) {
        void 0 === a && (a = !0);
        var t = this,
          i = t.params.lazy;
        if (!(typeof e > "u") && 0 !== t.slides.length) {
          var n =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    "." +
                      t.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : t.slides.eq(e),
            l = n.find(
              "." +
                i.elementClass +
                ":not(." +
                i.loadedClass +
                "):not(." +
                i.loadingClass +
                ")"
            );
          n.hasClass(i.elementClass) &&
            !n.hasClass(i.loadedClass) &&
            !n.hasClass(i.loadingClass) &&
            (l = l.add(n[0])),
            0 !== l.length &&
              l.each(function (o, d) {
                var p = w(d);
                p.addClass(i.loadingClass);
                var f = p.attr("data-background"),
                  u = p.attr("data-src"),
                  v = p.attr("data-srcset"),
                  m = p.attr("data-sizes");
                t.loadImage(p[0], u || f, v, m, !1, function () {
                  if (
                    !(
                      typeof t > "u" ||
                      null === t ||
                      !t ||
                      (t && !t.params) ||
                      t.destroyed
                    )
                  ) {
                    if (
                      (f
                        ? (p.css("background-image", 'url("' + f + '")'),
                          p.removeAttr("data-background"))
                        : (v &&
                            (p.attr("srcset", v), p.removeAttr("data-srcset")),
                          m && (p.attr("sizes", m), p.removeAttr("data-sizes")),
                          u && (p.attr("src", u), p.removeAttr("data-src"))),
                      p.addClass(i.loadedClass).removeClass(i.loadingClass),
                      n.find("." + i.preloaderClass).remove(),
                      t.params.loop && a)
                    ) {
                      var c = n.attr("data-swiper-slide-index");
                      if (n.hasClass(t.params.slideDuplicateClass)) {
                        var C = t.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            c +
                            '"]:not(.' +
                            t.params.slideDuplicateClass +
                            ")"
                        );
                        t.lazy.loadInSlide(C.index(), !1);
                      } else {
                        var b = t.$wrapperEl.children(
                          "." +
                            t.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            c +
                            '"]'
                        );
                        t.lazy.loadInSlide(b.index(), !1);
                      }
                    }
                    t.emit("lazyImageReady", n[0], p[0]);
                  }
                }),
                  t.emit("lazyImageLoad", n[0], p[0]);
              });
        }
      },
      load: function () {
        var e = this,
          a = e.$wrapperEl,
          t = e.params,
          i = e.slides,
          s = e.activeIndex,
          n = e.virtual && t.virtual.enabled,
          l = t.lazy,
          o = t.slidesPerView;
        function d(z) {
          if (n) {
            if (
              a.children(
                "." + t.slideClass + '[data-swiper-slide-index="' + z + '"]'
              ).length
            )
              return !0;
          } else if (i[z]) return !0;
          return !1;
        }
        function p(z) {
          return n ? w(z).attr("data-swiper-slide-index") : w(z).index();
        }
        if (
          ("auto" === o && (o = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          a.children("." + t.slideVisibleClass).each(function (z, P) {
            var S = n ? w(P).attr("data-swiper-slide-index") : w(P).index();
            e.lazy.loadInSlide(S);
          });
        else if (o > 1)
          for (var f = s; f < s + o; f += 1) d(f) && e.lazy.loadInSlide(f);
        else e.lazy.loadInSlide(s);
        if (l.loadPrevNext)
          if (o > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
            for (
              var u = l.loadPrevNextAmount,
                v = o,
                m = Math.min(s + v + Math.max(u, v), i.length),
                c = Math.max(s - Math.max(v, u), 0),
                C = s + o;
              C < m;
              C += 1
            )
              d(C) && e.lazy.loadInSlide(C);
            for (var b = c; b < s; b += 1) d(b) && e.lazy.loadInSlide(b);
          } else {
            var E = a.children("." + t.slideNextClass);
            E.length > 0 && e.lazy.loadInSlide(p(E));
            var y = a.children("." + t.slidePrevClass);
            y.length > 0 && e.lazy.loadInSlide(p(y));
          }
      },
    },
    Ht = {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          lazy: {
            initialImageLoaded: !1,
            load: ye.load.bind(e),
            loadInSlide: ye.loadInSlide.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          e.params.lazy.enabled &&
            e.params.preloadImages &&
            (e.params.preloadImages = !1);
        },
        init: function () {
          var e = this;
          e.params.lazy.enabled &&
            !e.params.loop &&
            0 === e.params.initialSlide &&
            e.lazy.load();
        },
        scroll: function () {
          var e = this;
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        resize: function () {
          this.params.lazy.enabled && this.lazy.load();
        },
        scrollbarDragMove: function () {
          this.params.lazy.enabled && this.lazy.load();
        },
        transitionStart: function () {
          var e = this;
          e.params.lazy.enabled &&
            (e.params.lazy.loadOnTransitionStart ||
              (!e.params.lazy.loadOnTransitionStart &&
                !e.lazy.initialImageLoaded)) &&
            e.lazy.load();
        },
        transitionEnd: function () {
          var e = this;
          e.params.lazy.enabled &&
            !e.params.lazy.loadOnTransitionStart &&
            e.lazy.load();
        },
      },
    },
    _ = {
      LinearSpline: function (e, a) {
        var l,
          o,
          d,
          i,
          s,
          t = function (p, f) {
            for (o = -1, l = p.length; l - o > 1; )
              p[(d = (l + o) >> 1)] <= f ? (o = d) : (l = d);
            return l;
          };
        return (
          (this.x = e),
          (this.y = a),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (l) {
            return l
              ? ((s = t(this.x, l)),
                ((l - this.x[(i = s - 1)]) * (this.y[s] - this.y[i])) /
                  (this.x[s] - this.x[i]) +
                  this.y[i])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var a = this;
        a.controller.spline ||
          (a.controller.spline = a.params.loop
            ? new _.LinearSpline(a.slidesGrid, e.slidesGrid)
            : new _.LinearSpline(a.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, a) {
        var s,
          n,
          t = this,
          i = t.controller.control;
        function l(d) {
          var p = t.rtlTranslate ? -t.translate : t.translate;
          "slide" === t.params.controller.by &&
            (t.controller.getInterpolateFunction(d),
            (n = -t.controller.spline.interpolate(-p))),
            (!n || "container" === t.params.controller.by) &&
              ((s =
                (d.maxTranslate() - d.minTranslate()) /
                (t.maxTranslate() - t.minTranslate())),
              (n = (p - t.minTranslate()) * s + d.minTranslate())),
            t.params.controller.inverse && (n = d.maxTranslate() - n),
            d.updateProgress(n),
            d.setTranslate(n, t),
            d.updateActiveIndex(),
            d.updateSlidesClasses();
        }
        if (Array.isArray(i))
          for (var o = 0; o < i.length; o += 1)
            i[o] !== a && i[o] instanceof B && l(i[o]);
        else i instanceof B && a !== i && l(i);
      },
      setTransition: function (e, a) {
        var s,
          t = this,
          i = t.controller.control;
        function n(l) {
          l.setTransition(e, t),
            0 !== e &&
              (l.transitionStart(),
              l.params.autoHeight &&
                h.nextTick(function () {
                  l.updateAutoHeight();
                }),
              l.$wrapperEl.transitionEnd(function () {
                i &&
                  (l.params.loop &&
                    "slide" === t.params.controller.by &&
                    l.loopFix(),
                  l.transitionEnd());
              }));
        }
        if (Array.isArray(i))
          for (s = 0; s < i.length; s += 1)
            i[s] !== a && i[s] instanceof B && n(i[s]);
        else i instanceof B && a !== i && n(i);
      },
    },
    At = {
      name: "controller",
      params: { controller: { control: void 0, inverse: !1, by: "slide" } },
      create: function () {
        var e = this;
        h.extend(e, {
          controller: {
            control: e.params.controller.control,
            getInterpolateFunction: _.getInterpolateFunction.bind(e),
            setTranslate: _.setTranslate.bind(e),
            setTransition: _.setTransition.bind(e),
          },
        });
      },
      on: {
        update: function () {
          var e = this;
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        },
        resize: function () {
          var e = this;
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        },
        observerUpdate: function () {
          var e = this;
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        },
        setTranslate: function (e, a) {
          this.controller.control && this.controller.setTranslate(e, a);
        },
        setTransition: function (e, a) {
          this.controller.control && this.controller.setTransition(e, a);
        },
      },
    },
    Ee = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function (e, a) {
        return e.attr("role", a), e;
      },
      addElLabel: function (e, a) {
        return e.attr("aria-label", a), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var a = this,
          t = a.params.a11y;
        if (13 === e.keyCode) {
          var i = w(e.target);
          a.navigation &&
            a.navigation.$nextEl &&
            i.is(a.navigation.$nextEl) &&
            ((a.isEnd && !a.params.loop) || a.slideNext(),
            a.a11y.notify(a.isEnd ? t.lastSlideMessage : t.nextSlideMessage)),
            a.navigation &&
              a.navigation.$prevEl &&
              i.is(a.navigation.$prevEl) &&
              ((a.isBeginning && !a.params.loop) || a.slidePrev(),
              a.a11y.notify(
                a.isBeginning ? t.firstSlideMessage : t.prevSlideMessage
              )),
            a.pagination &&
              i.is("." + a.params.pagination.bulletClass) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop) {
          var a = e.navigation,
            t = a.$nextEl,
            i = a.$prevEl;
          i &&
            i.length > 0 &&
            (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
            t &&
              t.length > 0 &&
              (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t));
        }
      },
      updatePagination: function () {
        var e = this,
          a = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (t, i) {
            var s = w(i);
            e.a11y.makeElFocusable(s),
              e.a11y.addElRole(s, "button"),
              e.a11y.addElLabel(
                s,
                a.paginationBulletMessage.replace(/{{index}}/, s.index() + 1)
              );
          });
      },
      init: function () {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t,
          i,
          a = e.params.a11y;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
          t &&
            (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, a.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
          i &&
            (e.a11y.makeElFocusable(i),
            e.a11y.addElRole(i, "button"),
            e.a11y.addElLabel(i, a.prevSlideMessage),
            i.on("keydown", e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
      destroy: function () {
        var a,
          t,
          e = this;
        e.a11y.liveRegion &&
          e.a11y.liveRegion.length > 0 &&
          e.a11y.liveRegion.remove(),
          e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (t = e.navigation.$prevEl),
          a && a.off("keydown", e.a11y.onEnterKey),
          t && t.off("keydown", e.a11y.onEnterKey),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.off(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
    },
    Vt = {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          a11y: {
            liveRegion: w(
              '<span class="' +
                e.params.a11y.notificationClass +
                '" aria-live="assertive" aria-atomic="true"></span>'
            ),
          },
        }),
          Object.keys(Ee).forEach(function (a) {
            e.a11y[a] = Ee[a].bind(e);
          });
      },
      on: {
        init: function () {
          var e = this;
          e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
        },
        toEdge: function () {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        fromEdge: function () {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        paginationUpdate: function () {
          this.params.a11y.enabled && this.a11y.updatePagination();
        },
        destroy: function () {
          this.params.a11y.enabled && this.a11y.destroy();
        },
      },
    },
    R = {
      init: function () {
        var e = this;
        if (e.params.history) {
          if (!g.history || !g.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          var a = e.history;
          (a.initialized = !0),
            (a.paths = R.getPathValues()),
            (a.paths.key || a.paths.value) &&
              (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                g.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function () {
        this.params.history.replaceState ||
          g.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        var e = this;
        (e.history.paths = R.getPathValues()),
          e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
      },
      getPathValues: function () {
        var e = g.location.pathname
            .slice(1)
            .split("/")
            .filter(function (s) {
              return "" !== s;
            }),
          a = e.length;
        return { key: e[a - 2], value: e[a - 1] };
      },
      setHistory: function (e, a) {
        var t = this;
        if (t.history.initialized && t.params.history.enabled) {
          var i = t.slides.eq(a),
            s = R.slugify(i.attr("data-history"));
          g.location.pathname.includes(e) || (s = e + "/" + s);
          var n = g.history.state;
          (n && n.value === s) ||
            (t.params.history.replaceState
              ? g.history.replaceState({ value: s }, null, s)
              : g.history.pushState({ value: s }, null, s));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, a, t) {
        var i = this;
        if (a)
          for (var s = 0, n = i.slides.length; s < n; s += 1) {
            var l = i.slides.eq(s);
            if (
              R.slugify(l.attr("data-history")) === a &&
              !l.hasClass(i.params.slideDuplicateClass)
            ) {
              var d = l.index();
              i.slideTo(d, e, t);
            }
          }
        else i.slideTo(0, e, t);
      },
    },
    Xt = {
      name: "history",
      params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
      create: function () {
        var e = this;
        h.extend(e, {
          history: {
            init: R.init.bind(e),
            setHistory: R.setHistory.bind(e),
            setHistoryPopState: R.setHistoryPopState.bind(e),
            scrollToSlide: R.scrollToSlide.bind(e),
            destroy: R.destroy.bind(e),
          },
        });
      },
      on: {
        init: function () {
          this.params.history.enabled && this.history.init();
        },
        destroy: function () {
          this.params.history.enabled && this.history.destroy();
        },
        transitionEnd: function () {
          var e = this;
          e.history.initialized &&
            e.history.setHistory(e.params.history.key, e.activeIndex);
        },
      },
    },
    J = {
      onHashCange: function () {
        var e = this,
          a = T.location.hash.replace("#", "");
        if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var i = e.$wrapperEl
            .children("." + e.params.slideClass + '[data-hash="' + a + '"]')
            .index();
          if (typeof i > "u") return;
          e.slideTo(i);
        }
      },
      setHash: function () {
        var e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            g.history &&
            g.history.replaceState
          )
            g.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            );
          else {
            var a = e.slides.eq(e.activeIndex),
              t = a.attr("data-hash") || a.attr("data-history");
            T.location.hash = t || "";
          }
      },
      init: function () {
        var e = this;
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0;
          var a = T.location.hash.replace("#", "");
          if (a)
            for (var i = 0, s = e.slides.length; i < s; i += 1) {
              var n = e.slides.eq(i);
              if (
                (n.attr("data-hash") || n.attr("data-history")) === a &&
                !n.hasClass(e.params.slideDuplicateClass)
              ) {
                var o = n.index();
                e.slideTo(o, 0, e.params.runCallbacksOnInit, !0);
              }
            }
          e.params.hashNavigation.watchState &&
            w(g).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState &&
          w(g).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    Bt = {
      name: "hash-navigation",
      params: {
        hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          hashNavigation: {
            initialized: !1,
            init: J.init.bind(e),
            destroy: J.destroy.bind(e),
            setHash: J.setHash.bind(e),
            onHashCange: J.onHashCange.bind(e),
          },
        });
      },
      on: {
        init: function () {
          this.params.hashNavigation.enabled && this.hashNavigation.init();
        },
        destroy: function () {
          this.params.hashNavigation.enabled && this.hashNavigation.destroy();
        },
        transitionEnd: function () {
          this.hashNavigation.initialized && this.hashNavigation.setHash();
        },
      },
    },
    ee = {
      run: function () {
        var e = this,
          a = e.slides.eq(e.activeIndex),
          t = e.params.autoplay.delay;
        a.attr("data-swiper-autoplay") &&
          (t = a.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = h.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
          }, t));
      },
      start: function () {
        var e = this;
        return !(
          typeof e.autoplay.timeout < "u" ||
          e.autoplay.running ||
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          0)
        );
      },
      stop: function () {
        var e = this;
        return !(
          !e.autoplay.running ||
          typeof e.autoplay.timeout > "u" ||
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          0)
        );
      },
      pause: function (e) {
        var a = this;
        a.autoplay.running &&
          (a.autoplay.paused ||
            (a.autoplay.timeout && clearTimeout(a.autoplay.timeout),
            (a.autoplay.paused = !0),
            0 !== e && a.params.autoplay.waitForTransition
              ? (a.$wrapperEl[0].addEventListener(
                  "transitionend",
                  a.autoplay.onTransitionEnd
                ),
                a.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  a.autoplay.onTransitionEnd
                ))
              : ((a.autoplay.paused = !1), a.autoplay.run())));
      },
    },
    Yt = {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          autoplay: {
            running: !1,
            paused: !1,
            run: ee.run.bind(e),
            start: ee.start.bind(e),
            stop: ee.stop.bind(e),
            pause: ee.pause.bind(e),
            onTransitionEnd: function (t) {
              !e ||
                e.destroyed ||
                !e.$wrapperEl ||
                (t.target === this &&
                  (e.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    e.autoplay.onTransitionEnd
                  ),
                  e.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    e.autoplay.onTransitionEnd
                  ),
                  (e.autoplay.paused = !1),
                  e.autoplay.running ? e.autoplay.run() : e.autoplay.stop()));
            },
          },
        });
      },
      on: {
        init: function () {
          this.params.autoplay.enabled && this.autoplay.start();
        },
        beforeTransitionStart: function (e, a) {
          var t = this;
          t.autoplay.running &&
            (a || !t.params.autoplay.disableOnInteraction
              ? t.autoplay.pause(e)
              : t.autoplay.stop());
        },
        sliderFirstMove: function () {
          var e = this;
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction
              ? e.autoplay.stop()
              : e.autoplay.pause());
        },
        destroy: function () {
          this.autoplay.running && this.autoplay.stop();
        },
      },
    },
    Te = {
      setTranslate: function () {
        for (var e = this, a = e.slides, t = 0; t < a.length; t += 1) {
          var i = e.slides.eq(t),
            n = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (n -= e.translate);
          var l = 0;
          e.isHorizontal() || ((l = n), (n = 0));
          var o = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: o }).transform(
            "translate3d(" + n + "px, " + l + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.$wrapperEl;
        if ((t.transition(e), a.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          t.transitionEnd(function () {
            if (!s && a && !a.destroyed) {
              (s = !0), (a.animating = !1);
              for (
                var n = ["webkitTransitionEnd", "transitionend"], l = 0;
                l < n.length;
                l += 1
              )
                i.trigger(n[l]);
            }
          });
        }
      },
    },
    Nt = {
      name: "effect-fade",
      params: { fadeEffect: { crossFade: !1 } },
      create: function () {
        var e = this;
        h.extend(e, {
          fadeEffect: {
            setTranslate: Te.setTranslate.bind(e),
            setTransition: Te.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var a = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0,
            };
            h.extend(e.params, a), h.extend(e.originalParams, a);
          }
        },
        setTranslate: function () {
          "fade" === this.params.effect && this.fadeEffect.setTranslate();
        },
        setTransition: function (e) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(e);
        },
      },
    },
    xe = {
      setTranslate: function () {
        var v,
          e = this,
          a = e.$el,
          t = e.$wrapperEl,
          i = e.slides,
          s = e.width,
          n = e.height,
          l = e.rtlTranslate,
          o = e.size,
          d = e.params.cubeEffect,
          p = e.isHorizontal(),
          f = e.virtual && e.params.virtual.enabled,
          u = 0;
        d.shadow &&
          (p
            ? (0 === (v = t.find(".swiper-cube-shadow")).length &&
                ((v = w('<div class="swiper-cube-shadow"></div>')),
                t.append(v)),
              v.css({ height: s + "px" }))
            : 0 === (v = a.find(".swiper-cube-shadow")).length &&
              ((v = w('<div class="swiper-cube-shadow"></div>')), a.append(v)));
        for (var m = 0; m < i.length; m += 1) {
          var c = i.eq(m),
            C = m;
          f && (C = parseInt(c.attr("data-swiper-slide-index"), 10));
          var b = 90 * C,
            E = Math.floor(b / 360);
          l && ((b = -b), (E = Math.floor(-b / 360)));
          var y = Math.max(Math.min(c[0].progress, 1), -1),
            z = 0,
            P = 0,
            S = 0;
          if (
            (C % 4 == 0
              ? ((z = 4 * -E * o), (S = 0))
              : (C - 1) % 4 == 0
              ? ((z = 0), (S = 4 * -E * o))
              : (C - 2) % 4 == 0
              ? ((z = o + 4 * E * o), (S = o))
              : (C - 3) % 4 == 0 && ((z = -o), (S = 3 * o + 4 * o * E)),
            l && (z = -z),
            p || ((P = z), (z = 0)),
            y <= 1 &&
              y > -1 &&
              ((u = 90 * C + 90 * y), l && (u = 90 * -C - 90 * y)),
            c.transform(
              "rotateX(" +
                (p ? 0 : -b) +
                "deg) rotateY(" +
                (p ? b : 0) +
                "deg) translate3d(" +
                z +
                "px, " +
                P +
                "px, " +
                S +
                "px)"
            ),
            d.slideShadows)
          ) {
            var O = c.find(
                p ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"
              ),
              L = c.find(
                p ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom"
              );
            0 === O.length &&
              ((O = w(
                '<div class="swiper-slide-shadow-' +
                  (p ? "left" : "top") +
                  '"></div>'
              )),
              c.append(O)),
              0 === L.length &&
                ((L = w(
                  '<div class="swiper-slide-shadow-' +
                    (p ? "right" : "bottom") +
                    '"></div>'
                )),
                c.append(L)),
              O.length && (O[0].style.opacity = Math.max(-y, 0)),
              L.length && (L[0].style.opacity = Math.max(y, 0));
          }
        }
        if (
          (t.css({
            "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
            "transform-origin": "50% 50% -" + o / 2 + "px",
          }),
          d.shadow)
        )
          if (p)
            v.transform(
              "translate3d(0px, " +
                (s / 2 + d.shadowOffset) +
                "px, " +
                -s / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                d.shadowScale +
                ")"
            );
          else {
            var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              I =
                1.5 -
                (Math.sin((2 * M * Math.PI) / 360) / 2 +
                  Math.cos((2 * M * Math.PI) / 360) / 2),
              G = d.shadowScale / I;
            v.transform(
              "scale3d(" +
                d.shadowScale +
                ", 1, " +
                G +
                ") translate3d(0px, " +
                (n / 2 + d.shadowOffset) +
                "px, " +
                -n / 2 / G +
                "px) rotateX(-90deg)"
            );
          }
        t.transform(
          "translate3d(0px,0," +
            (Y.isSafari || Y.isUiWebView ? -o / 2 : 0) +
            "px) rotateX(" +
            (e.isHorizontal() ? 0 : u) +
            "deg) rotateY(" +
            (e.isHorizontal() ? -u : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var a = this,
          t = a.$el;
        a.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          a.params.cubeEffect.shadow &&
            !a.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    },
    Ft = {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          cubeEffect: {
            setTranslate: xe.setTranslate.bind(e),
            setTransition: xe.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"),
              e.classNames.push(e.params.containerModifierClass + "3d");
            var a = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            };
            h.extend(e.params, a), h.extend(e.originalParams, a);
          }
        },
        setTranslate: function () {
          "cube" === this.params.effect && this.cubeEffect.setTranslate();
        },
        setTransition: function (e) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(e);
        },
      },
    },
    Se = {
      setTranslate: function () {
        for (
          var e = this, a = e.slides, t = e.rtlTranslate, i = 0;
          i < a.length;
          i += 1
        ) {
          var s = a.eq(i),
            n = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (n = Math.max(Math.min(s[0].progress, 1), -1));
          var d = -180 * n,
            p = 0,
            f = -s[0].swiperSlideOffset,
            u = 0;
          if (
            (e.isHorizontal()
              ? t && (d = -d)
              : ((u = f), (f = 0), (p = -d), (d = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(n)) + a.length),
            e.params.flipEffect.slideShadows)
          ) {
            var v = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              m = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === v.length &&
              ((v = w(
                '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(v)),
              0 === m.length &&
                ((m = w(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(m)),
              v.length && (v[0].style.opacity = Math.max(-n, 0)),
              m.length && (m[0].style.opacity = Math.max(n, 0));
          }
          s.transform(
            "translate3d(" +
              f +
              "px, " +
              u +
              "px, 0px) rotateX(" +
              p +
              "deg) rotateY(" +
              d +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.activeIndex,
          s = a.$wrapperEl;
        if (
          (t
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          a.params.virtualTranslate && 0 !== e)
        ) {
          var n = !1;
          t.eq(i).transitionEnd(function () {
            if (!n && a && !a.destroyed) {
              (n = !0), (a.animating = !1);
              for (
                var o = ["webkitTransitionEnd", "transitionend"], d = 0;
                d < o.length;
                d += 1
              )
                s.trigger(o[d]);
            }
          });
        }
      },
    },
    Rt = {
      name: "effect-flip",
      params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
      create: function () {
        var e = this;
        h.extend(e, {
          flipEffect: {
            setTranslate: Se.setTranslate.bind(e),
            setTransition: Se.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"),
              e.classNames.push(e.params.containerModifierClass + "3d");
            var a = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0,
            };
            h.extend(e.params, a), h.extend(e.originalParams, a);
          }
        },
        setTranslate: function () {
          "flip" === this.params.effect && this.flipEffect.setTranslate();
        },
        setTransition: function (e) {
          "flip" === this.params.effect && this.flipEffect.setTransition(e);
        },
      },
    },
    Ce = {
      setTranslate: function () {
        for (
          var e = this,
            a = e.width,
            t = e.height,
            i = e.slides,
            s = e.$wrapperEl,
            n = e.slidesSizesGrid,
            l = e.params.coverflowEffect,
            o = e.isHorizontal(),
            d = e.translate,
            p = o ? a / 2 - d : t / 2 - d,
            f = o ? l.rotate : -l.rotate,
            u = l.depth,
            v = 0,
            m = i.length;
          v < m;
          v += 1
        ) {
          var c = i.eq(v),
            C = n[v],
            E = ((p - c[0].swiperSlideOffset - C / 2) / C) * l.modifier,
            y = o ? f * E : 0,
            z = o ? 0 : f * E,
            P = -u * Math.abs(E),
            S = o ? 0 : l.stretch * E,
            D = o ? l.stretch * E : 0;
          if (
            (Math.abs(D) < 0.001 && (D = 0),
            Math.abs(S) < 0.001 && (S = 0),
            Math.abs(P) < 0.001 && (P = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(z) < 0.001 && (z = 0),
            c.transform(
              "translate3d(" +
                D +
                "px," +
                S +
                "px," +
                P +
                "px)  rotateX(" +
                z +
                "deg) rotateY(" +
                y +
                "deg)"
            ),
            (c[0].style.zIndex = 1 - Math.abs(Math.round(E))),
            l.slideShadows)
          ) {
            var L = c.find(
                o ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"
              ),
              M = c.find(
                o ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom"
              );
            0 === L.length &&
              ((L = w(
                '<div class="swiper-slide-shadow-' +
                  (o ? "left" : "top") +
                  '"></div>'
              )),
              c.append(L)),
              0 === M.length &&
                ((M = w(
                  '<div class="swiper-slide-shadow-' +
                    (o ? "right" : "bottom") +
                    '"></div>'
                )),
                c.append(M)),
              L.length && (L[0].style.opacity = E > 0 ? E : 0),
              M.length && (M[0].style.opacity = -E > 0 ? -E : 0);
          }
        }
        (x.pointerEvents || x.prefixedPointerEvents) &&
          (s[0].style.perspectiveOrigin = p + "px 50%");
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    qt = {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0,
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          coverflowEffect: {
            setTranslate: Ce.setTranslate.bind(e),
            setTransition: Ce.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          "coverflow" === e.params.effect &&
            (e.classNames.push(e.params.containerModifierClass + "coverflow"),
            e.classNames.push(e.params.containerModifierClass + "3d"),
            (e.params.watchSlidesProgress = !0),
            (e.originalParams.watchSlidesProgress = !0));
        },
        setTranslate: function () {
          "coverflow" === this.params.effect &&
            this.coverflowEffect.setTranslate();
        },
        setTransition: function (e) {
          "coverflow" === this.params.effect &&
            this.coverflowEffect.setTransition(e);
        },
      },
    },
    pe = {
      init: function () {
        var e = this,
          t = e.params.thumbs,
          i = e.constructor;
        t.swiper instanceof i
          ? ((e.thumbs.swiper = t.swiper),
            h.extend(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            h.extend(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : h.isObject(t.swiper) &&
            ((e.thumbs.swiper = new i(
              h.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              })
            )),
            (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick: function () {
        var e = this,
          a = e.thumbs.swiper;
        if (a) {
          var t = a.clickedIndex,
            i = a.clickedSlide;
          if (
            !(
              (i && w(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
              typeof t > "u" ||
              null === t
            )
          ) {
            var s;
            if (
              ((s = a.params.loop
                ? parseInt(
                    w(a.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : t),
              e.params.loop)
            ) {
              var n = e.activeIndex;
              e.slides.eq(n).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (n = e.activeIndex));
              var l = e.slides
                  .eq(n)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                o = e.slides
                  .eq(n)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s =
                typeof l > "u" ? o : typeof o > "u" ? l : o - n < n - l ? o : l;
            }
            e.slideTo(s);
          }
        }
      },
      update: function (e) {
        var a = this,
          t = a.thumbs.swiper;
        if (t) {
          var i =
            "auto" === t.params.slidesPerView
              ? t.slidesPerViewDynamic()
              : t.params.slidesPerView;
          if (a.realIndex !== t.realIndex) {
            var n,
              s = t.activeIndex;
            if (t.params.loop) {
              t.slides.eq(s).hasClass(t.params.slideDuplicateClass) &&
                (t.loopFix(),
                (t._clientLeft = t.$wrapperEl[0].clientLeft),
                (s = t.activeIndex));
              var l = t.slides
                  .eq(s)
                  .prevAll('[data-swiper-slide-index="' + a.realIndex + '"]')
                  .eq(0)
                  .index(),
                o = t.slides
                  .eq(s)
                  .nextAll('[data-swiper-slide-index="' + a.realIndex + '"]')
                  .eq(0)
                  .index();
              n =
                typeof l > "u"
                  ? o
                  : typeof o > "u"
                  ? l
                  : o - s == s - l
                  ? s
                  : o - s < s - l
                  ? o
                  : l;
            } else n = a.realIndex;
            t.visibleSlidesIndexes &&
              t.visibleSlidesIndexes.indexOf(n) < 0 &&
              (t.params.centeredSlides
                ? (n =
                    n > s
                      ? n - Math.floor(i / 2) + 1
                      : n + Math.floor(i / 2) - 1)
                : n > s && (n = n - i + 1),
              t.slideTo(n, e ? 0 : void 0));
          }
          var d = 1,
            p = a.params.thumbs.slideThumbActiveClass;
          if (
            (a.params.slidesPerView > 1 &&
              !a.params.centeredSlides &&
              (d = a.params.slidesPerView),
            t.slides.removeClass(p),
            t.params.loop || t.params.virtual)
          )
            for (var f = 0; f < d; f += 1)
              t.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (a.realIndex + f) + '"]'
                )
                .addClass(p);
          else
            for (var u = 0; u < d; u += 1)
              t.slides.eq(a.realIndex + u).addClass(p);
        }
      },
    },
    Wt = {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs",
        },
      },
      create: function () {
        var e = this;
        h.extend(e, {
          thumbs: {
            swiper: null,
            init: pe.init.bind(e),
            update: pe.update.bind(e),
            onThumbClick: pe.onThumbClick.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this,
            t = e.params.thumbs;
          !t || !t.swiper || (e.thumbs.init(), e.thumbs.update(!0));
        },
        slideChange: function () {
          this.thumbs.swiper && this.thumbs.update();
        },
        update: function () {
          this.thumbs.swiper && this.thumbs.update();
        },
        resize: function () {
          this.thumbs.swiper && this.thumbs.update();
        },
        observerUpdate: function () {
          this.thumbs.swiper && this.thumbs.update();
        },
        setTransition: function (e) {
          var t = this.thumbs.swiper;
          t && t.setTransition(e);
        },
        beforeDestroy: function () {
          var a = this.thumbs.swiper;
          a && this.thumbs.swiperCreated && a && a.destroy();
        },
      },
    },
    jt = [
      Tt,
      xt,
      St,
      Ct,
      Mt,
      zt,
      Pt,
      $t,
      Lt,
      Dt,
      It,
      Ot,
      Gt,
      Ht,
      At,
      Vt,
      Xt,
      Bt,
      Yt,
      Nt,
      Ft,
      Rt,
      qt,
      Wt,
    ];
  return (
    typeof B.use > "u" &&
      ((B.use = B.Class.use), (B.installModule = B.Class.installModule)),
    B.use(jt),
    B
  );
});
