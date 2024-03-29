var _gsScope;
if (
  ((function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document) throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
      var e = !!t && "length" in t && t.length,
        i = J.type(t);
      return "function" !== i && !J.isWindow(t) && ("array" === i || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
    }
    function n(t, e, i) {
      if (J.isFunction(e))
        return J.grep(t, function (t, n) {
          return !!e.call(t, n, t) !== i;
        });
      if (e.nodeType)
        return J.grep(t, function (t) {
          return (t === e) !== i;
        });
      if ("string" == typeof e) {
        if (ht.test(e)) return J.filter(e, t, i);
        e = J.filter(e, t);
      }
      return J.grep(t, function (t) {
        return V.call(e, t) > -1 !== i;
      });
    }
    function r(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; );
      return t;
    }
    function o() {
      $.removeEventListener("DOMContentLoaded", o), t.removeEventListener("load", o), J.ready();
    }
    function s() {
      this.expando = J.expando + s.uid++;
    }
    function a(t, e, i) {
      var n;
      if (void 0 === i && 1 === t.nodeType)
        if (((n = "data-" + e.replace(xt, "-$&").toLowerCase()), "string" == typeof (i = t.getAttribute(n)))) {
          try {
            i = "true" === i || ("false" !== i && ("null" === i ? null : +i + "" === i ? +i : bt.test(i) ? J.parseJSON(i) : i));
          } catch (t) {}
          _t.set(t, e, i);
        } else i = void 0;
      return i;
    }
    function l(t, e, i, n) {
      var r,
        o = 1,
        s = 20,
        a = n
          ? function () {
              return n.cur();
            }
          : function () {
              return J.css(t, e, "");
            },
        l = a(),
        h = (i && i[3]) || (J.cssNumber[e] ? "" : "px"),
        u = (J.cssNumber[e] || ("px" !== h && +l)) && wt.exec(J.css(t, e));
      if (u && u[3] !== h) {
        (h = h || u[3]), (i = i || []), (u = +l || 1);
        do {
          (u /= o = o || ".5"), J.style(t, e, u + h);
        } while (o !== (o = a() / l) && 1 !== o && --s);
      }
      return i && ((u = +u || +l || 0), (r = i[1] ? u + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = h), (n.start = u), (n.end = r))), r;
    }
    function h(t, e) {
      var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
      return void 0 === e || (e && J.nodeName(t, e)) ? J.merge([t], i) : i;
    }
    function u(t, e) {
      for (var i = 0, n = t.length; n > i; i++) yt.set(t[i], "globalEval", !e || yt.get(e[i], "globalEval"));
    }
    function c(t, e, i, n, r) {
      for (var o, s, a, l, c, f, d = e.createDocumentFragment(), p = [], m = 0, g = t.length; g > m; m++)
        if ((o = t[m]) || 0 === o)
          if ("object" === J.type(o)) J.merge(p, o.nodeType ? [o] : o);
          else if (Pt.test(o)) {
            for (s = s || d.appendChild(e.createElement("div")), a = (kt.exec(o) || ["", ""])[1].toLowerCase(), l = Dt[a] || Dt._default, s.innerHTML = l[1] + J.htmlPrefilter(o) + l[2], f = l[0]; f--; ) s = s.lastChild;
            J.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
          } else p.push(e.createTextNode(o));
      for (d.textContent = "", m = 0; (o = p[m++]); )
        if (n && J.inArray(o, n) > -1) r && r.push(o);
        else if (((c = J.contains(o.ownerDocument, o)), (s = h(d.appendChild(o), "script")), c && u(s), i)) for (f = 0; (o = s[f++]); ) At.test(o.type || "") && i.push(o);
      return d;
    }
    function f() {
      return !0;
    }
    function d() {
      return !1;
    }
    function p() {
      try {
        return $.activeElement;
      } catch (t) {}
    }
    function m(t, e, i, n, r, o) {
      var s, a;
      if ("object" == typeof e) {
        for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e)) m(t, a, i, n, e[a], o);
        return t;
      }
      if ((null == n && null == r ? ((r = i), (n = i = void 0)) : null == r && ("string" == typeof i ? ((r = n), (n = void 0)) : ((r = n), (n = i), (i = void 0))), !1 === r)) r = d;
      else if (!r) return t;
      return (
        1 === o &&
          ((s = r),
          ((r = function (t) {
            return J().off(t), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = J.guid++))),
        t.each(function () {
          J.event.add(this, e, r, n, i);
        })
      );
    }
    function g(t, e) {
      return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function v(t) {
      return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function y(t) {
      var e = zt.exec(t.type);
      return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function _(t, e) {
      var i, n, r, o, s, a, l, h;
      if (1 === e.nodeType) {
        if (yt.hasData(t) && ((o = yt.access(t)), (s = yt.set(e, o)), (h = o.events))) for (r in (delete s.handle, (s.events = {}), h)) for (i = 0, n = h[r].length; n > i; i++) J.event.add(e, r, h[r][i]);
        _t.hasData(t) && ((a = _t.access(t)), (l = J.extend({}, a)), _t.set(e, l));
      }
    }
    function b(t, e) {
      var i = e.nodeName.toLowerCase();
      "input" === i && Et.test(t.type) ? (e.checked = t.checked) : ("input" !== i && "textarea" !== i) || (e.defaultValue = t.defaultValue);
    }
    function x(t, e, i, n) {
      e = U.apply([], e);
      var r,
        o,
        s,
        a,
        l,
        u,
        f = 0,
        d = t.length,
        p = d - 1,
        m = e[0],
        g = J.isFunction(m);
      if (g || (d > 1 && "string" == typeof m && !Z.checkClone && Mt.test(m)))
        return t.each(function (r) {
          var o = t.eq(r);
          g && (e[0] = m.call(this, r, o.html())), x(o, e, i, n);
        });
      if (d && ((o = (r = c(e, t[0].ownerDocument, !1, t, n)).firstChild), 1 === r.childNodes.length && (r = o), o || n)) {
        for (a = (s = J.map(h(r, "script"), v)).length; d > f; f++) (l = r), f !== p && ((l = J.clone(l, !0, !0)), a && J.merge(s, h(l, "script"))), i.call(t[f], l, f);
        if (a)
          for (u = s[s.length - 1].ownerDocument, J.map(s, y), f = 0; a > f; f++)
            (l = s[f]), At.test(l.type || "") && !yt.access(l, "globalEval") && J.contains(u, l) && (l.src ? J._evalUrl && J._evalUrl(l.src) : J.globalEval(l.textContent.replace(jt, "")));
      }
      return t;
    }
    function T(t, e, i) {
      for (var n, r = e ? J.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || J.cleanData(h(n)), n.parentNode && (i && J.contains(n.ownerDocument, n) && u(h(n, "script")), n.parentNode.removeChild(n));
      return t;
    }
    function w(t, e) {
      var i = J(e.createElement(t)).appendTo(e.body),
        n = J.css(i[0], "display");
      return i.detach(), n;
    }
    function S(t) {
      var e = $,
        i = Wt[t];
      return i || (("none" !== (i = w(t, e)) && i) || ((e = (Ft = (Ft || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), (i = w(t, e)), Ft.detach()), (Wt[t] = i)), i;
    }
    function C(t, e, i) {
      var n,
        r,
        o,
        s,
        a = t.style;
      return (
        ("" !== (s = (i = i || Bt(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== s) || J.contains(t.ownerDocument, t) || (s = J.style(t, e)),
        i && !Z.pixelMarginRight() && qt.test(s) && Ht.test(e) && ((n = a.width), (r = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = i.width), (a.width = n), (a.minWidth = r), (a.maxWidth = o)),
        void 0 !== s ? s + "" : s
      );
    }
    function E(t, e) {
      return {
        get: function () {
          return t() ? void delete this.get : (this.get = e).apply(this, arguments);
        },
      };
    }
    function k(t) {
      if (t in Gt) return t;
      for (var e = t[0].toUpperCase() + t.slice(1), i = Qt.length; i--; ) if ((t = Qt[i] + e) in Gt) return t;
    }
    function A(t, e, i) {
      var n = wt.exec(e);
      return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
    }
    function D(t, e, i, n, r) {
      for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
        "margin" === i && (s += J.css(t, i + St[o], !0, r)),
          n
            ? ("content" === i && (s -= J.css(t, "padding" + St[o], !0, r)), "margin" !== i && (s -= J.css(t, "border" + St[o] + "Width", !0, r)))
            : ((s += J.css(t, "padding" + St[o], !0, r)), "padding" !== i && (s += J.css(t, "border" + St[o] + "Width", !0, r)));
      return s;
    }
    function P(t, e, i) {
      var n = !0,
        r = "width" === e ? t.offsetWidth : t.offsetHeight,
        o = Bt(t),
        s = "border-box" === J.css(t, "boxSizing", !1, o);
      if (0 >= r || null == r) {
        if (((0 > (r = C(t, e, o)) || null == r) && (r = t.style[e]), qt.test(r))) return r;
        (n = s && (Z.boxSizingReliable() || r === t.style[e])), (r = parseFloat(r) || 0);
      }
      return r + D(t, e, i || (s ? "border" : "content"), n, o) + "px";
    }
    function I(t, e) {
      for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++)
        (n = t[s]).style &&
          ((o[s] = yt.get(n, "olddisplay")),
          (i = n.style.display),
          e
            ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ct(n) && (o[s] = yt.access(n, "olddisplay", S(n.nodeName))))
            : ((r = Ct(n)), ("none" === i && r) || yt.set(n, "olddisplay", r ? i : J.css(n, "display"))));
      for (s = 0; a > s; s++) (n = t[s]).style && ((e && "none" !== n.style.display && "" !== n.style.display) || (n.style.display = e ? o[s] || "" : "none"));
      return t;
    }
    function O(t, e, i, n, r) {
      return new O.prototype.init(t, e, i, n, r);
    }
    function N() {
      return (
        t.setTimeout(function () {
          Kt = void 0;
        }),
        (Kt = J.now())
      );
    }
    function L(t, e) {
      var i,
        n = 0,
        r = { height: t };
      for (e = e ? 1 : 0; 4 > n; n += 2 - e) r["margin" + (i = St[n])] = r["padding" + i] = t;
      return e && (r.opacity = r.width = t), r;
    }
    function R(t, e, i) {
      for (var n, r = (M.tweeners[e] || []).concat(M.tweeners["*"]), o = 0, s = r.length; s > o; o++) if ((n = r[o].call(i, e, t))) return n;
    }
    function M(t, e, i) {
      var n,
        r,
        o = 0,
        s = M.prefilters.length,
        a = J.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (r) return !1;
          for (var e = Kt || N(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), o = 0, s = h.tweens.length; s > o; o++) h.tweens[o].run(n);
          return a.notifyWith(t, [h, n, i]), 1 > n && s ? i : (a.resolveWith(t, [h]), !1);
        },
        h = a.promise({
          elem: t,
          props: J.extend({}, e),
          opts: J.extend(!0, { specialEasing: {}, easing: J.easing._default }, i),
          originalProperties: e,
          originalOptions: i,
          startTime: Kt || N(),
          duration: i.duration,
          tweens: [],
          createTween: function (e, i) {
            var n = J.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
            return h.tweens.push(n), n;
          },
          stop: function (e) {
            var i = 0,
              n = e ? h.tweens.length : 0;
            if (r) return this;
            for (r = !0; n > i; i++) h.tweens[i].run(1);
            return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this;
          },
        }),
        u = h.props;
      for (
        (function (t, e) {
          var i, n, r, o, s;
          for (i in t)
            if (((r = e[(n = J.camelCase(i))]), (o = t[i]), J.isArray(o) && ((r = o[1]), (o = t[i] = o[0])), i !== n && ((t[n] = o), delete t[i]), (s = J.cssHooks[n]) && ("expand" in s)))
              for (i in ((o = s.expand(o)), delete t[n], o)) (i in t) || ((t[i] = o[i]), (e[i] = r));
            else e[n] = r;
        })(u, h.opts.specialEasing);
        s > o;
        o++
      )
        if ((n = M.prefilters[o].call(h, t, u, h.opts))) return J.isFunction(n.stop) && (J._queueHooks(h.elem, h.opts.queue).stop = J.proxy(n.stop, n)), n;
      return (
        J.map(u, R, h),
        J.isFunction(h.opts.start) && h.opts.start.call(t, h),
        J.fx.timer(J.extend(l, { elem: t, anim: h, queue: h.opts.queue })),
        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
      );
    }
    function z(t) {
      return (t.getAttribute && t.getAttribute("class")) || "";
    }
    function j(t) {
      return function (e, i) {
        "string" != typeof e && ((i = e), (e = "*"));
        var n,
          r = 0,
          o = e.toLowerCase().match(mt) || [];
        if (J.isFunction(i)) for (; (n = o[r++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
      };
    }
    function F(t, e, i, n) {
      function r(a) {
        var l;
        return (
          (o[a] = !0),
          J.each(t[a] || [], function (t, a) {
            var h = a(e, i, n);
            return "string" != typeof h || s || o[h] ? (s ? !(l = h) : void 0) : (e.dataTypes.unshift(h), r(h), !1);
          }),
          l
        );
      }
      var o = {},
        s = t === ye;
      return r(e.dataTypes[0]) || (!o["*"] && r("*"));
    }
    function W(t, e) {
      var i,
        n,
        r = J.ajaxSettings.flatOptions || {};
      for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
      return n && J.extend(!0, t, n), t;
    }
    function H(t, e, i, n) {
      var r;
      if (J.isArray(e))
        J.each(e, function (e, r) {
          i || Te.test(t) ? n(t, r) : H(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n);
        });
      else if (i || "object" !== J.type(e)) n(t, e);
      else for (r in e) H(t + "[" + r + "]", e[r], i, n);
    }
    function q(t) {
      return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    var B = [],
      $ = t.document,
      Y = B.slice,
      U = B.concat,
      X = B.push,
      V = B.indexOf,
      Q = {},
      G = Q.toString,
      K = Q.hasOwnProperty,
      Z = {},
      J = function (t, e) {
        return new J.fn.init(t, e);
      },
      tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      et = /^-ms-/,
      it = /-([\da-z])/gi,
      nt = function (t, e) {
        return e.toUpperCase();
      };
    (J.fn = J.prototype = {
      jquery: "2.2.4",
      constructor: J,
      selector: "",
      length: 0,
      toArray: function () {
        return Y.call(this);
      },
      get: function (t) {
        return null != t ? (0 > t ? this[t + this.length] : this[t]) : Y.call(this);
      },
      pushStack: function (t) {
        var e = J.merge(this.constructor(), t);
        return (e.prevObject = this), (e.context = this.context), e;
      },
      each: function (t) {
        return J.each(this, t);
      },
      map: function (t) {
        return this.pushStack(
          J.map(this, function (e, i) {
            return t.call(e, i, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(Y.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: X,
      sort: B.sort,
      splice: B.splice,
    }),
      (J.extend = J.fn.extend = function () {
        var t,
          e,
          i,
          n,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          h = !1;
        for ("boolean" == typeof s && ((h = s), (s = arguments[a] || {}), a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && ((s = this), a--); l > a; a++)
          if (null != (t = arguments[a]))
            for (e in t)
              (i = s[e]),
                s !== (n = t[e]) &&
                  (h && n && (J.isPlainObject(n) || (r = J.isArray(n))) ? (r ? ((r = !1), (o = i && J.isArray(i) ? i : [])) : (o = i && J.isPlainObject(i) ? i : {}), (s[e] = J.extend(h, o, n))) : void 0 !== n && (s[e] = n));
        return s;
      }),
      J.extend({
        expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isFunction: function (t) {
          return "function" === J.type(t);
        },
        isArray: Array.isArray,
        isWindow: function (t) {
          return null != t && t === t.window;
        },
        isNumeric: function (t) {
          var e = t && t.toString();
          return !J.isArray(t) && e - parseFloat(e) + 1 >= 0;
        },
        isPlainObject: function (t) {
          var e;
          if ("object" !== J.type(t) || t.nodeType || J.isWindow(t)) return !1;
          if (t.constructor && !K.call(t, "constructor") && !K.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
          for (e in t);
          return void 0 === e || K.call(t, e);
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        type: function (t) {
          return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Q[G.call(t)] || "object" : typeof t;
        },
        globalEval: function (t) {
          var e,
            i = eval;
          (t = J.trim(t)) && (1 === t.indexOf("use strict") ? (((e = $.createElement("script")).text = t), $.head.appendChild(e).parentNode.removeChild(e)) : i(t));
        },
        camelCase: function (t) {
          return t.replace(et, "ms-").replace(it, nt);
        },
        nodeName: function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function (t, e) {
          var n,
            r = 0;
          if (i(t)) for (n = t.length; n > r && !1 !== e.call(t[r], r, t[r]); r++);
          else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
          return t;
        },
        trim: function (t) {
          return null == t ? "" : (t + "").replace(tt, "");
        },
        makeArray: function (t, e) {
          var n = e || [];
          return null != t && (i(Object(t)) ? J.merge(n, "string" == typeof t ? [t] : t) : X.call(n, t)), n;
        },
        inArray: function (t, e, i) {
          return null == e ? -1 : V.call(e, t, i);
        },
        merge: function (t, e) {
          for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
          return (t.length = r), t;
        },
        grep: function (t, e, i) {
          for (var n = [], r = 0, o = t.length, s = !i; o > r; r++) !e(t[r], r) !== s && n.push(t[r]);
          return n;
        },
        map: function (t, e, n) {
          var r,
            o,
            s = 0,
            a = [];
          if (i(t)) for (r = t.length; r > s; s++) null != (o = e(t[s], s, n)) && a.push(o);
          else for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
          return U.apply([], a);
        },
        guid: 1,
        proxy: function (t, e) {
          var i, n, r;
          return (
            "string" == typeof e && ((i = t[e]), (e = t), (t = i)),
            J.isFunction(t)
              ? ((n = Y.call(arguments, 2)),
                ((r = function () {
                  return t.apply(e || this, n.concat(Y.call(arguments)));
                }).guid = t.guid = t.guid || J.guid++),
                r)
              : void 0
          );
        },
        now: Date.now,
        support: Z,
      }),
      "function" == typeof Symbol && (J.fn[Symbol.iterator] = B[Symbol.iterator]),
      J.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        Q["[object " + e + "]"] = e.toLowerCase();
      });
    var rt = (function (t) {
      function e(t, e, i, n) {
        var r,
          o,
          s,
          a,
          l,
          h,
          c,
          d,
          p = e && e.ownerDocument,
          m = e ? e.nodeType : 9;
        if (((i = i || []), "string" != typeof t || !t || (1 !== m && 9 !== m && 11 !== m))) return i;
        if (!n && ((e ? e.ownerDocument || e : W) !== O && I(e), (e = e || O), L)) {
          if (11 !== m && (h = vt.exec(t)))
            if ((r = h[1])) {
              if (9 === m) {
                if (!(s = e.getElementById(r))) return i;
                if (s.id === r) return i.push(s), i;
              } else if (p && (s = p.getElementById(r)) && j(e, s) && s.id === r) return i.push(s), i;
            } else {
              if (h[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
              if ((r = h[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(r)), i;
            }
          if (x.qsa && !Y[t + " "] && (!R || !R.test(t))) {
            if (1 !== m) (p = e), (d = t);
            else if ("object" !== e.nodeName.toLowerCase()) {
              for ((a = e.getAttribute("id")) ? (a = a.replace(_t, "\\$&")) : e.setAttribute("id", (a = F)), o = (c = C(t)).length, l = ft.test(a) ? "#" + a : "[id='" + a + "']"; o--; ) c[o] = l + " " + f(c[o]);
              (d = c.join(",")), (p = (yt.test(t) && u(e.parentNode)) || e);
            }
            if (d)
              try {
                return Z.apply(i, p.querySelectorAll(d)), i;
              } catch (t) {
              } finally {
                a === F && e.removeAttribute("id");
              }
          }
        }
        return k(t.replace(at, "$1"), e, i, n);
      }
      function i() {
        var t = [];
        return function e(i, n) {
          return t.push(i + " ") > T.cacheLength && delete e[t.shift()], (e[i + " "] = n);
        };
      }
      function n(t) {
        return (t[F] = !0), t;
      }
      function r(t) {
        var e = O.createElement("div");
        try {
          return !!t(e);
        } catch (t) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function o(t, e) {
        for (var i = t.split("|"), n = i.length; n--; ) T.attrHandle[i[n]] = e;
      }
      function s(t, e) {
        var i = e && t,
          n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
        if (n) return n;
        if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
        return t ? 1 : -1;
      }
      function a(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function l(t) {
        return function (e) {
          var i = e.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && e.type === t;
        };
      }
      function h(t) {
        return n(function (e) {
          return (
            (e = +e),
            n(function (i, n) {
              for (var r, o = t([], i.length, e), s = o.length; s--; ) i[(r = o[s])] && (i[r] = !(n[r] = i[r]));
            })
          );
        });
      }
      function u(t) {
        return t && void 0 !== t.getElementsByTagName && t;
      }
      function c() {}
      function f(t) {
        for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
        return n;
      }
      function d(t, e, i) {
        var n = e.dir,
          r = i && "parentNode" === n,
          o = q++;
        return e.first
          ? function (e, i, o) {
              for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, o);
            }
          : function (e, i, s) {
              var a,
                l,
                h,
                u = [H, o];
              if (s) {
                for (; (e = e[n]); ) if ((1 === e.nodeType || r) && t(e, i, s)) return !0;
              } else
                for (; (e = e[n]); )
                  if (1 === e.nodeType || r) {
                    if ((a = (l = (h = e[F] || (e[F] = {}))[e.uniqueID] || (h[e.uniqueID] = {}))[n]) && a[0] === H && a[1] === o) return (u[2] = a[2]);
                    if (((l[n] = u), (u[2] = t(e, i, s)))) return !0;
                  }
            };
      }
      function p(t) {
        return t.length > 1
          ? function (e, i, n) {
              for (var r = t.length; r--; ) if (!t[r](e, i, n)) return !1;
              return !0;
            }
          : t[0];
      }
      function m(t, i, n) {
        for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
        return n;
      }
      function g(t, e, i, n, r) {
        for (var o, s = [], a = 0, l = t.length, h = null != e; l > a; a++) (o = t[a]) && ((i && !i(o, n, r)) || (s.push(o), h && e.push(a)));
        return s;
      }
      function v(t, e, i, r, o, s) {
        return (
          r && !r[F] && (r = v(r)),
          o && !o[F] && (o = v(o, s)),
          n(function (n, s, a, l) {
            var h,
              u,
              c,
              f = [],
              d = [],
              p = s.length,
              v = n || m(e || "*", a.nodeType ? [a] : a, []),
              y = !t || (!n && e) ? v : g(v, f, t, a, l),
              _ = i ? (o || (n ? t : p || r) ? [] : s) : y;
            if ((i && i(y, _, a, l), r)) for (h = g(_, d), r(h, [], a, l), u = h.length; u--; ) (c = h[u]) && (_[d[u]] = !(y[d[u]] = c));
            if (n) {
              if (o || t) {
                if (o) {
                  for (h = [], u = _.length; u--; ) (c = _[u]) && h.push((y[u] = c));
                  o(null, (_ = []), h, l);
                }
                for (u = _.length; u--; ) (c = _[u]) && (h = o ? tt(n, c) : f[u]) > -1 && (n[h] = !(s[h] = c));
              }
            } else (_ = g(_ === s ? _.splice(p, _.length) : _)), o ? o(null, s, _, l) : Z.apply(s, _);
          })
        );
      }
      function y(t) {
        for (
          var e,
            i,
            n,
            r = t.length,
            o = T.relative[t[0].type],
            s = o || T.relative[" "],
            a = o ? 1 : 0,
            l = d(
              function (t) {
                return t === e;
              },
              s,
              !0
            ),
            h = d(
              function (t) {
                return tt(e, t) > -1;
              },
              s,
              !0
            ),
            u = [
              function (t, i, n) {
                var r = (!o && (n || i !== A)) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                return (e = null), r;
              },
            ];
          r > a;
          a++
        )
          if ((i = T.relative[t[a].type])) u = [d(p(u), i)];
          else {
            if ((i = T.filter[t[a].type].apply(null, t[a].matches))[F]) {
              for (n = ++a; r > n && !T.relative[t[n].type]; n++);
              return v(a > 1 && p(u), a > 1 && f(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(at, "$1"), i, n > a && y(t.slice(a, n)), r > n && y((t = t.slice(n))), r > n && f(t));
            }
            u.push(i);
          }
        return p(u);
      }
      function _(t, i) {
        var r = i.length > 0,
          o = t.length > 0,
          s = function (n, s, a, l, h) {
            var u,
              c,
              f,
              d = 0,
              p = "0",
              m = n && [],
              v = [],
              y = A,
              _ = n || (o && T.find.TAG("*", h)),
              b = (H += null == y ? 1 : Math.random() || 0.1),
              x = _.length;
            for (h && (A = s === O || s || h); p !== x && null != (u = _[p]); p++) {
              if (o && u) {
                for (c = 0, s || u.ownerDocument === O || (I(u), (a = !L)); (f = t[c++]); )
                  if (f(u, s || O, a)) {
                    l.push(u);
                    break;
                  }
                h && (H = b);
              }
              r && ((u = !f && u) && d--, n && m.push(u));
            }
            if (((d += p), r && p !== d)) {
              for (c = 0; (f = i[c++]); ) f(m, v, s, a);
              if (n) {
                if (d > 0) for (; p--; ) m[p] || v[p] || (v[p] = G.call(l));
                v = g(v);
              }
              Z.apply(l, v), h && !n && v.length > 0 && d + i.length > 1 && e.uniqueSort(l);
            }
            return h && ((H = b), (A = y)), m;
          };
        return r ? n(s) : s;
      }
      var b,
        x,
        T,
        w,
        S,
        C,
        E,
        k,
        A,
        D,
        P,
        I,
        O,
        N,
        L,
        R,
        M,
        z,
        j,
        F = "sizzle" + 1 * new Date(),
        W = t.document,
        H = 0,
        q = 0,
        B = i(),
        $ = i(),
        Y = i(),
        U = function (t, e) {
          return t === e && (P = !0), 0;
        },
        X = 1 << 31,
        V = {}.hasOwnProperty,
        Q = [],
        G = Q.pop,
        K = Q.push,
        Z = Q.push,
        J = Q.slice,
        tt = function (t, e) {
          for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
          return -1;
        },
        et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        it = "[\\x20\\t\\r\\n\\f]",
        nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
        ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
        st = new RegExp(it + "+", "g"),
        at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
        lt = new RegExp("^" + it + "*," + it + "*"),
        ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
        ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
        ct = new RegExp(ot),
        ft = new RegExp("^" + nt + "$"),
        dt = {
          ID: new RegExp("^#(" + nt + ")"),
          CLASS: new RegExp("^\\.(" + nt + ")"),
          TAG: new RegExp("^(" + nt + "|[*])"),
          ATTR: new RegExp("^" + rt),
          PSEUDO: new RegExp("^" + ot),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + et + ")$", "i"),
          needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i"),
        },
        pt = /^(?:input|select|textarea|button)$/i,
        mt = /^h\d$/i,
        gt = /^[^{]+\{\s*\[native \w/,
        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        yt = /[+~]/,
        _t = /'|\\/g,
        bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
        xt = function (t, e, i) {
          var n = "0x" + e - 65536;
          return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
        },
        Tt = function () {
          I();
        };
      try {
        Z.apply((Q = J.call(W.childNodes)), W.childNodes), Q[W.childNodes.length].nodeType;
      } catch (t) {
        Z = {
          apply: Q.length
            ? function (t, e) {
                K.apply(t, J.call(e));
              }
            : function (t, e) {
                for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                t.length = i - 1;
              },
        };
      }
      for (b in ((x = e.support = {}),
      (S = e.isXML = function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
      (I = e.setDocument = function (t) {
        var e,
          i,
          n = t ? t.ownerDocument || t : W;
        return n !== O && 9 === n.nodeType && n.documentElement
          ? ((N = (O = n).documentElement),
            (L = !S(O)),
            (i = O.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)),
            (x.attributes = r(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (x.getElementsByTagName = r(function (t) {
              return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length;
            })),
            (x.getElementsByClassName = gt.test(O.getElementsByClassName)),
            (x.getById = r(function (t) {
              return (N.appendChild(t).id = F), !O.getElementsByName || !O.getElementsByName(F).length;
            })),
            x.getById
              ? ((T.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && L) {
                    var i = e.getElementById(t);
                    return i ? [i] : [];
                  }
                }),
                (T.filter.ID = function (t) {
                  var e = t.replace(bt, xt);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }))
              : (delete T.find.ID,
                (T.filter.ID = function (t) {
                  var e = t.replace(bt, xt);
                  return function (t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e;
                  };
                })),
            (T.find.TAG = x.getElementsByTagName
              ? function (t, e) {
                  return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0;
                }
              : function (t, e) {
                  var i,
                    n = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (i = o[r++]); ) 1 === i.nodeType && n.push(i);
                    return n;
                  }
                  return o;
                }),
            (T.find.CLASS =
              x.getElementsByClassName &&
              function (t, e) {
                return void 0 !== e.getElementsByClassName && L ? e.getElementsByClassName(t) : void 0;
              }),
            (M = []),
            (R = []),
            (x.qsa = gt.test(O.querySelectorAll)) &&
              (r(function (t) {
                (N.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + it + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length || R.push("\\[" + it + "*(?:value|" + et + ")"),
                  t.querySelectorAll("[id~=" + F + "-]").length || R.push("~="),
                  t.querySelectorAll(":checked").length || R.push(":checked"),
                  t.querySelectorAll("a#" + F + "+*").length || R.push(".#.+[+~]");
              }),
              r(function (t) {
                var e = O.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length && R.push("name" + it + "*[*^$|!~]?="),
                  t.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  R.push(",.*:");
              })),
            (x.matchesSelector = gt.test((z = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector))) &&
              r(function (t) {
                (x.disconnectedMatch = z.call(t, "div")), z.call(t, "[s!='']:x"), M.push("!=", ot);
              }),
            (R = R.length && new RegExp(R.join("|"))),
            (M = M.length && new RegExp(M.join("|"))),
            (e = gt.test(N.compareDocumentPosition)),
            (j =
              e || gt.test(N.contains)
                ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                      n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (U = e
              ? function (t, e) {
                  if (t === e) return (P = !0), 0;
                  var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    i ||
                    (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!x.sortDetached && e.compareDocumentPosition(t) === i)
                      ? t === O || (t.ownerDocument === W && j(W, t))
                        ? -1
                        : e === O || (e.ownerDocument === W && j(W, e))
                        ? 1
                        : D
                        ? tt(D, t) - tt(D, e)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (P = !0), 0;
                  var i,
                    n = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    l = [e];
                  if (!r || !o) return t === O ? -1 : e === O ? 1 : r ? -1 : o ? 1 : D ? tt(D, t) - tt(D, e) : 0;
                  if (r === o) return s(t, e);
                  for (i = t; (i = i.parentNode); ) a.unshift(i);
                  for (i = e; (i = i.parentNode); ) l.unshift(i);
                  for (; a[n] === l[n]; ) n++;
                  return n ? s(a[n], l[n]) : a[n] === W ? -1 : l[n] === W ? 1 : 0;
                }),
            O)
          : O;
      }),
      (e.matches = function (t, i) {
        return e(t, null, null, i);
      }),
      (e.matchesSelector = function (t, i) {
        if (((t.ownerDocument || t) !== O && I(t), (i = i.replace(ut, "='$1']")), x.matchesSelector && L && !Y[i + " "] && (!M || !M.test(i)) && (!R || !R.test(i))))
          try {
            var n = z.call(t, i);
            if (n || x.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
          } catch (t) {}
        return e(i, O, null, [t]).length > 0;
      }),
      (e.contains = function (t, e) {
        return (t.ownerDocument || t) !== O && I(t), j(t, e);
      }),
      (e.attr = function (t, e) {
        (t.ownerDocument || t) !== O && I(t);
        var i = T.attrHandle[e.toLowerCase()],
          n = i && V.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !L) : void 0;
        return void 0 !== n ? n : x.attributes || !L ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
      }),
      (e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (e.uniqueSort = function (t) {
        var e,
          i = [],
          n = 0,
          r = 0;
        if (((P = !x.detectDuplicates), (D = !x.sortStable && t.slice(0)), t.sort(U), P)) {
          for (; (e = t[r++]); ) e === t[r] && (n = i.push(r));
          for (; n--; ) t.splice(i[n], 1);
        }
        return (D = null), t;
      }),
      (w = e.getText = function (t) {
        var e,
          i = "",
          n = 0,
          r = t.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += w(t);
          } else if (3 === r || 4 === r) return t.nodeValue;
        } else for (; (e = t[n++]); ) i += w(e);
        return i;
      }),
      ((T = e.selectors = {
        cacheLength: 50,
        createPseudo: n,
        match: dt,
        attrHandle: {},
        find: {},
        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
        preFilter: {
          ATTR: function (t) {
            return (t[1] = t[1].replace(bt, xt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && e.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              i = !t[6] && t[2];
            return dt.CHILD.test(t[0]) ? null : (t[3] ? (t[2] = t[4] || t[5] || "") : i && ct.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))), t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(bt, xt).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = B[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) &&
                B(t, function (t) {
                  return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                }))
            );
          },
          ATTR: function (t, i, n) {
            return function (r) {
              var o = e.attr(r, t);
              return null == o
                ? "!=" === i
                : !i ||
                    ((o += ""),
                    "=" === i
                      ? o === n
                      : "!=" === i
                      ? o !== n
                      : "^=" === i
                      ? n && 0 === o.indexOf(n)
                      : "*=" === i
                      ? n && o.indexOf(n) > -1
                      : "$=" === i
                      ? n && o.slice(-n.length) === n
                      : "~=" === i
                      ? (" " + o.replace(st, " ") + " ").indexOf(n) > -1
                      : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (t, e, i, n, r) {
            var o = "nth" !== t.slice(0, 3),
              s = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === n && 0 === r
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (e, i, l) {
                  var h,
                    u,
                    c,
                    f,
                    d,
                    p,
                    m = o !== s ? "nextSibling" : "previousSibling",
                    g = e.parentNode,
                    v = a && e.nodeName.toLowerCase(),
                    y = !l && !a,
                    _ = !1;
                  if (g) {
                    if (o) {
                      for (; m; ) {
                        for (f = e; (f = f[m]); ) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                        p = m = "only" === t && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [s ? g.firstChild : g.lastChild]), s && y)) {
                      for (_ = (d = (h = (u = (c = (f = g)[F] || (f[F] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[t] || [])[0] === H && h[1]) && h[2], f = d && g.childNodes[d]; (f = (++d && f && f[m]) || (_ = d = 0) || p.pop()); )
                        if (1 === f.nodeType && ++_ && f === e) {
                          u[t] = [H, d, _];
                          break;
                        }
                    } else if ((y && (_ = d = (h = (u = (c = (f = e)[F] || (f[F] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[t] || [])[0] === H && h[1]), !1 === _))
                      for (
                        ;
                        (f = (++d && f && f[m]) || (_ = d = 0) || p.pop()) &&
                        ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++_ || (y && ((u = (c = f[F] || (f[F] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[t] = [H, _]), f !== e));

                      );
                    return (_ -= r) === n || (_ % n == 0 && _ / n >= 0);
                  }
                };
          },
          PSEUDO: function (t, i) {
            var r,
              o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
            return o[F]
              ? o(i)
              : o.length > 1
              ? ((r = [t, t, "", i]),
                T.setFilters.hasOwnProperty(t.toLowerCase())
                  ? n(function (t, e) {
                      for (var n, r = o(t, i), s = r.length; s--; ) t[(n = tt(t, r[s]))] = !(e[n] = r[s]);
                    })
                  : function (t) {
                      return o(t, 0, r);
                    })
              : o;
          },
        },
        pseudos: {
          not: n(function (t) {
            var e = [],
              i = [],
              r = E(t.replace(at, "$1"));
            return r[F]
              ? n(function (t, e, i, n) {
                  for (var o, s = r(t, null, n, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
                })
              : function (t, n, o) {
                  return (e[0] = t), r(e, null, o, i), (e[0] = null), !i.pop();
                };
          }),
          has: n(function (t) {
            return function (i) {
              return e(t, i).length > 0;
            };
          }),
          contains: n(function (t) {
            return (
              (t = t.replace(bt, xt)),
              function (e) {
                return (e.textContent || e.innerText || w(e)).indexOf(t) > -1;
              }
            );
          }),
          lang: n(function (t) {
            return (
              ft.test(t || "") || e.error("unsupported lang: " + t),
              (t = t.replace(bt, xt).toLowerCase()),
              function (e) {
                var i;
                do {
                  if ((i = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === e.id;
          },
          root: function (t) {
            return t === N;
          },
          focus: function (t) {
            return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
          },
          enabled: function (t) {
            return !1 === t.disabled;
          },
          disabled: function (t) {
            return !0 === t.disabled;
          },
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
          },
          selected: function (t) {
            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !T.pseudos.empty(t);
          },
          header: function (t) {
            return mt.test(t.nodeName);
          },
          input: function (t) {
            return pt.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
          },
          first: h(function () {
            return [0];
          }),
          last: h(function (t, e) {
            return [e - 1];
          }),
          eq: h(function (t, e, i) {
            return [0 > i ? i + e : i];
          }),
          even: h(function (t, e) {
            for (var i = 0; e > i; i += 2) t.push(i);
            return t;
          }),
          odd: h(function (t, e) {
            for (var i = 1; e > i; i += 2) t.push(i);
            return t;
          }),
          lt: h(function (t, e, i) {
            for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
            return t;
          }),
          gt: h(function (t, e, i) {
            for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
            return t;
          }),
        },
      }).pseudos.nth = T.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        T.pseudos[b] = a(b);
      for (b in { submit: !0, reset: !0 }) T.pseudos[b] = l(b);
      return (
        (c.prototype = T.filters = T.pseudos),
        (T.setFilters = new c()),
        (C = e.tokenize = function (t, i) {
          var n,
            r,
            o,
            s,
            a,
            l,
            h,
            u = $[t + " "];
          if (u) return i ? 0 : u.slice(0);
          for (a = t, l = [], h = T.preFilter; a; ) {
            for (s in ((n && !(r = lt.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
            (n = !1),
            (r = ht.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(at, " ") }), (a = a.slice(n.length))),
            T.filter))
              !(r = dt[s].exec(a)) || (h[s] && !(r = h[s](r))) || ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
            if (!n) break;
          }
          return i ? a.length : a ? e.error(t) : $(t, l).slice(0);
        }),
        (E = e.compile = function (t, e) {
          var i,
            n = [],
            r = [],
            o = Y[t + " "];
          if (!o) {
            for (e || (e = C(t)), i = e.length; i--; ) (o = y(e[i]))[F] ? n.push(o) : r.push(o);
            (o = Y(t, _(r, n))).selector = t;
          }
          return o;
        }),
        (k = e.select = function (t, e, i, n) {
          var r,
            o,
            s,
            a,
            l,
            h = "function" == typeof t && t,
            c = !n && C((t = h.selector || t));
          if (((i = i || []), 1 === c.length)) {
            if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && L && T.relative[o[1].type]) {
              if (!(e = (T.find.ID(s.matches[0].replace(bt, xt), e) || [])[0])) return i;
              h && (e = e.parentNode), (t = t.slice(o.shift().value.length));
            }
            for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && ((s = o[r]), !T.relative[(a = s.type)]); )
              if ((l = T.find[a]) && (n = l(s.matches[0].replace(bt, xt), (yt.test(o[0].type) && u(e.parentNode)) || e))) {
                if ((o.splice(r, 1), !(t = n.length && f(o)))) return Z.apply(i, n), i;
                break;
              }
          }
          return (h || E(t, c))(n, e, !L, i, !e || (yt.test(t) && u(e.parentNode)) || e), i;
        }),
        (x.sortStable = F.split("").sort(U).join("") === F),
        (x.detectDuplicates = !!P),
        I(),
        (x.sortDetached = r(function (t) {
          return 1 & t.compareDocumentPosition(O.createElement("div"));
        })),
        r(function (t) {
          return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
        }) ||
          o("type|href|height|width", function (t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (x.attributes &&
          r(function (t) {
            return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
          })) ||
          o("value", function (t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
          }),
        r(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          o(et, function (t, e, i) {
            var n;
            return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
          }),
        e
      );
    })(t);
    (J.find = rt), (J.expr = rt.selectors), (J.expr[":"] = J.expr.pseudos), (J.uniqueSort = J.unique = rt.uniqueSort), (J.text = rt.getText), (J.isXMLDoc = rt.isXML), (J.contains = rt.contains);
    var ot = function (t, e, i) {
        for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (r && J(t).is(i)) break;
            n.push(t);
          }
        return n;
      },
      st = function (t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i;
      },
      at = J.expr.match.needsContext,
      lt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      ht = /^.[^:#\[\.,]*$/;
    (J.filter = function (t, e, i) {
      var n = e[0];
      return (
        i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType
          ? J.find.matchesSelector(n, t)
            ? [n]
            : []
          : J.find.matches(
              t,
              J.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      J.fn.extend({
        find: function (t) {
          var e,
            i = this.length,
            n = [],
            r = this;
          if ("string" != typeof t)
            return this.pushStack(
              J(t).filter(function () {
                for (e = 0; i > e; e++) if (J.contains(r[e], this)) return !0;
              })
            );
          for (e = 0; i > e; e++) J.find(t, r[e], n);
          return ((n = this.pushStack(i > 1 ? J.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t), n;
        },
        filter: function (t) {
          return this.pushStack(n(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(n(this, t || [], !0));
        },
        is: function (t) {
          return !!n(this, "string" == typeof t && at.test(t) ? J(t) : t || [], !1).length;
        },
      });
    var ut,
      ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((J.fn.init = function (t, e, i) {
      var n, r;
      if (!t) return this;
      if (((i = i || ut), "string" == typeof t)) {
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t)) || (!n[1] && e)) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
        if (n[1]) {
          if (((e = e instanceof J ? e[0] : e), J.merge(this, J.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : $, !0)), lt.test(n[1]) && J.isPlainObject(e))) for (n in e) J.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
          return this;
        }
        return (r = $.getElementById(n[2])) && r.parentNode && ((this.length = 1), (this[0] = r)), (this.context = $), (this.selector = t), this;
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : J.isFunction(t)
        ? void 0 !== i.ready
          ? i.ready(t)
          : t(J)
        : (void 0 !== t.selector && ((this.selector = t.selector), (this.context = t.context)), J.makeArray(t, this));
    }).prototype = J.fn),
      (ut = J($));
    var ft = /^(?:parents|prev(?:Until|All))/,
      dt = { children: !0, contents: !0, next: !0, prev: !0 };
    J.fn.extend({
      has: function (t) {
        var e = J(t, this),
          i = e.length;
        return this.filter(function () {
          for (var t = 0; i > t; t++) if (J.contains(this, e[t])) return !0;
        });
      },
      closest: function (t, e) {
        for (var i, n = 0, r = this.length, o = [], s = at.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; r > n; n++)
          for (i = this[n]; i && i !== e; i = i.parentNode)
            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && J.find.matchesSelector(i, t))) {
              o.push(i);
              break;
            }
        return this.pushStack(o.length > 1 ? J.uniqueSort(o) : o);
      },
      index: function (t) {
        return t ? ("string" == typeof t ? V.call(J(t), this[0]) : V.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function (t, e) {
        return this.pushStack(J.uniqueSort(J.merge(this.get(), J(t, e))));
      },
      addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
      },
    }),
      J.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return ot(t, "parentNode");
          },
          parentsUntil: function (t, e, i) {
            return ot(t, "parentNode", i);
          },
          next: function (t) {
            return r(t, "nextSibling");
          },
          prev: function (t) {
            return r(t, "previousSibling");
          },
          nextAll: function (t) {
            return ot(t, "nextSibling");
          },
          prevAll: function (t) {
            return ot(t, "previousSibling");
          },
          nextUntil: function (t, e, i) {
            return ot(t, "nextSibling", i);
          },
          prevUntil: function (t, e, i) {
            return ot(t, "previousSibling", i);
          },
          siblings: function (t) {
            return st((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return st(t.firstChild);
          },
          contents: function (t) {
            return t.contentDocument || J.merge([], t.childNodes);
          },
        },
        function (t, e) {
          J.fn[t] = function (i, n) {
            var r = J.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = J.filter(n, r)), this.length > 1 && (dt[t] || J.uniqueSort(r), ft.test(t) && r.reverse()), this.pushStack(r);
          };
        }
      );
    var pt,
      mt = /\S+/g;
    (J.Callbacks = function (t) {
      t =
        "string" == typeof t
          ? (function (t) {
              var e = {};
              return (
                J.each(t.match(mt) || [], function (t, i) {
                  e[i] = !0;
                }),
                e
              );
            })(t)
          : J.extend({}, t);
      var e,
        i,
        n,
        r,
        o = [],
        s = [],
        a = -1,
        l = function () {
          for (r = t.once, n = e = !0; s.length; a = -1) for (i = s.shift(); ++a < o.length; ) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && ((a = o.length), (i = !1));
          t.memory || (i = !1), (e = !1), r && (o = i ? [] : "");
        },
        h = {
          add: function () {
            return (
              o &&
                (i && !e && ((a = o.length - 1), s.push(i)),
                (function e(i) {
                  J.each(i, function (i, n) {
                    J.isFunction(n) ? (t.unique && h.has(n)) || o.push(n) : n && n.length && "string" !== J.type(n) && e(n);
                  });
                })(arguments),
                i && !e && l()),
              this
            );
          },
          remove: function () {
            return (
              J.each(arguments, function (t, e) {
                for (var i; (i = J.inArray(e, o, i)) > -1; ) o.splice(i, 1), a >= i && a--;
              }),
              this
            );
          },
          has: function (t) {
            return t ? J.inArray(t, o) > -1 : o.length > 0;
          },
          empty: function () {
            return o && (o = []), this;
          },
          disable: function () {
            return (r = s = []), (o = i = ""), this;
          },
          disabled: function () {
            return !o;
          },
          lock: function () {
            return (r = s = []), i || (o = i = ""), this;
          },
          locked: function () {
            return !!r;
          },
          fireWith: function (t, i) {
            return r || ((i = [t, (i = i || []).slice ? i.slice() : i]), s.push(i), e || l()), this;
          },
          fire: function () {
            return h.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!n;
          },
        };
      return h;
    }),
      J.extend({
        Deferred: function (t) {
          var e = [
              ["resolve", "done", J.Callbacks("once memory"), "resolved"],
              ["reject", "fail", J.Callbacks("once memory"), "rejected"],
              ["notify", "progress", J.Callbacks("memory")],
            ],
            i = "pending",
            n = {
              state: function () {
                return i;
              },
              always: function () {
                return r.done(arguments).fail(arguments), this;
              },
              then: function () {
                var t = arguments;
                return J.Deferred(function (i) {
                  J.each(e, function (e, o) {
                    var s = J.isFunction(t[e]) && t[e];
                    r[o[1]](function () {
                      var t = s && s.apply(this, arguments);
                      t && J.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments);
                    });
                  }),
                    (t = null);
                }).promise();
              },
              promise: function (t) {
                return null != t ? J.extend(t, n) : n;
              },
            },
            r = {};
          return (
            (n.pipe = n.then),
            J.each(e, function (t, o) {
              var s = o[2],
                a = o[3];
              (n[o[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      i = a;
                    },
                    e[1 ^ t][2].disable,
                    e[2][2].lock
                  ),
                (r[o[0]] = function () {
                  return r[o[0] + "With"](this === r ? n : this, arguments), this;
                }),
                (r[o[0] + "With"] = s.fireWith);
            }),
            n.promise(r),
            t && t.call(r, r),
            r
          );
        },
        when: function (t) {
          var e,
            i,
            n,
            r = 0,
            o = Y.call(arguments),
            s = o.length,
            a = 1 !== s || (t && J.isFunction(t.promise)) ? s : 0,
            l = 1 === a ? t : J.Deferred(),
            h = function (t, i, n) {
              return function (r) {
                (i[t] = this), (n[t] = arguments.length > 1 ? Y.call(arguments) : r), n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);
              };
            };
          if (s > 1) for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().progress(h(r, i, e)).done(h(r, n, o)).fail(l.reject) : --a;
          return a || l.resolveWith(n, o), l.promise();
        },
      }),
      (J.fn.ready = function (t) {
        return J.ready.promise().done(t), this;
      }),
      J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
          t ? J.readyWait++ : J.ready(!0);
        },
        ready: function (t) {
          (!0 === t ? --J.readyWait : J.isReady) || ((J.isReady = !0), (!0 !== t && --J.readyWait > 0) || (pt.resolveWith($, [J]), J.fn.triggerHandler && (J($).triggerHandler("ready"), J($).off("ready"))));
        },
      }),
      (J.ready.promise = function (e) {
        return (
          pt || ((pt = J.Deferred()), "complete" === $.readyState || ("loading" !== $.readyState && !$.documentElement.doScroll) ? t.setTimeout(J.ready) : ($.addEventListener("DOMContentLoaded", o), t.addEventListener("load", o))),
          pt.promise(e)
        );
      }),
      J.ready.promise();
    var gt = function (t, e, i, n, r, o, s) {
        var a = 0,
          l = t.length,
          h = null == i;
        if ("object" === J.type(i)) for (a in ((r = !0), i)) gt(t, e, a, i[a], !0, o, s);
        else if (
          void 0 !== n &&
          ((r = !0),
          J.isFunction(n) || (s = !0),
          h &&
            (s
              ? (e.call(t, n), (e = null))
              : ((h = e),
                (e = function (t, e, i) {
                  return h.call(J(t), i);
                }))),
          e)
        )
          for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : h ? e.call(t) : l ? e(t[0], i) : o;
      },
      vt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
    (s.uid = 1),
      (s.prototype = {
        register: function (t, e) {
          var i = e || {};
          return t.nodeType ? (t[this.expando] = i) : Object.defineProperty(t, this.expando, { value: i, writable: !0, configurable: !0 }), t[this.expando];
        },
        cache: function (t) {
          if (!vt(t)) return {};
          var e = t[this.expando];
          return e || ((e = {}), vt(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
        },
        set: function (t, e, i) {
          var n,
            r = this.cache(t);
          if ("string" == typeof e) r[e] = i;
          else for (n in e) r[n] = e[n];
          return r;
        },
        get: function (t, e) {
          return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e];
        },
        access: function (t, e, i) {
          var n;
          return void 0 === e || (e && "string" == typeof e && void 0 === i) ? (void 0 !== (n = this.get(t, e)) ? n : this.get(t, J.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e);
        },
        remove: function (t, e) {
          var i,
            n,
            r,
            o = t[this.expando];
          if (void 0 !== o) {
            if (void 0 === e) this.register(t);
            else {
              J.isArray(e) ? (n = e.concat(e.map(J.camelCase))) : ((r = J.camelCase(e)), e in o ? (n = [e, r]) : (n = (n = r) in o ? [n] : n.match(mt) || [])), (i = n.length);
              for (; i--; ) delete o[n[i]];
            }
            (void 0 === e || J.isEmptyObject(o)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
          }
        },
        hasData: function (t) {
          var e = t[this.expando];
          return void 0 !== e && !J.isEmptyObject(e);
        },
      });
    var yt = new s(),
      _t = new s(),
      bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      xt = /[A-Z]/g;
    J.extend({
      hasData: function (t) {
        return _t.hasData(t) || yt.hasData(t);
      },
      data: function (t, e, i) {
        return _t.access(t, e, i);
      },
      removeData: function (t, e) {
        _t.remove(t, e);
      },
      _data: function (t, e, i) {
        return yt.access(t, e, i);
      },
      _removeData: function (t, e) {
        yt.remove(t, e);
      },
    }),
      J.fn.extend({
        data: function (t, e) {
          var i,
            n,
            r,
            o = this[0],
            s = o && o.attributes;
          if (void 0 === t) {
            if (this.length && ((r = _t.get(o)), 1 === o.nodeType && !yt.get(o, "hasDataAttrs"))) {
              for (i = s.length; i--; ) s[i] && 0 === (n = s[i].name).indexOf("data-") && ((n = J.camelCase(n.slice(5))), a(o, n, r[n]));
              yt.set(o, "hasDataAttrs", !0);
            }
            return r;
          }
          return "object" == typeof t
            ? this.each(function () {
                _t.set(this, t);
              })
            : gt(
                this,
                function (e) {
                  var i, n;
                  if (o && void 0 === e) {
                    if (void 0 !== (i = _t.get(o, t) || _t.get(o, t.replace(xt, "-$&").toLowerCase()))) return i;
                    if (((n = J.camelCase(t)), void 0 !== (i = _t.get(o, n)))) return i;
                    if (void 0 !== (i = a(o, n, void 0))) return i;
                  } else
                    (n = J.camelCase(t)),
                      this.each(function () {
                        var i = _t.get(this, n);
                        _t.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && _t.set(this, t, e);
                      });
                },
                null,
                e,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (t) {
          return this.each(function () {
            _t.remove(this, t);
          });
        },
      }),
      J.extend({
        queue: function (t, e, i) {
          var n;
          return t ? ((e = (e || "fx") + "queue"), (n = yt.get(t, e)), i && (!n || J.isArray(i) ? (n = yt.access(t, e, J.makeArray(i))) : n.push(i)), n || []) : void 0;
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var i = J.queue(t, e),
            n = i.length,
            r = i.shift(),
            o = J._queueHooks(t, e);
          "inprogress" === r && ((r = i.shift()), n--),
            r &&
              ("fx" === e && i.unshift("inprogress"),
              delete o.stop,
              r.call(
                t,
                function () {
                  J.dequeue(t, e);
                },
                o
              )),
            !n && o && o.empty.fire();
        },
        _queueHooks: function (t, e) {
          var i = e + "queueHooks";
          return (
            yt.get(t, i) ||
            yt.access(t, i, {
              empty: J.Callbacks("once memory").add(function () {
                yt.remove(t, [e + "queue", i]);
              }),
            })
          );
        },
      }),
      J.fn.extend({
        queue: function (t, e) {
          var i = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), i--),
            arguments.length < i
              ? J.queue(this[0], t)
              : void 0 === e
              ? this
              : this.each(function () {
                  var i = J.queue(this, t, e);
                  J._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            J.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var i,
            n = 1,
            r = J.Deferred(),
            o = this,
            s = this.length,
            a = function () {
              --n || r.resolveWith(o, [o]);
            };
          for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; s--; ) (i = yt.get(o[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
          return a(), r.promise(e);
        },
      });
    var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      wt = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
      St = ["Top", "Right", "Bottom", "Left"],
      Ct = function (t, e) {
        return (t = e || t), "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t);
      },
      Et = /^(?:checkbox|radio)$/i,
      kt = /<([\w:-]+)/,
      At = /^$|\/(?:java|ecma)script/i,
      Dt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Dt.optgroup = Dt.option), (Dt.tbody = Dt.tfoot = Dt.colgroup = Dt.caption = Dt.thead), (Dt.th = Dt.td);
    var Pt = /<|&#?\w+;/;
    !(function () {
      var t = $.createDocumentFragment().appendChild($.createElement("div")),
        e = $.createElement("input");
      e.setAttribute("type", "radio"),
        e.setAttribute("checked", "checked"),
        e.setAttribute("name", "t"),
        t.appendChild(e),
        (Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    var It = /^key/,
      Ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Nt = /^([^.]*)(?:\.(.+)|)/;
    (J.event = {
      global: {},
      add: function (t, e, i, n, r) {
        var o,
          s,
          a,
          l,
          h,
          u,
          c,
          f,
          d,
          p,
          m,
          g = yt.get(t);
        if (g)
          for (
            i.handler && ((i = (o = i).handler), (r = o.selector)),
              i.guid || (i.guid = J.guid++),
              (l = g.events) || (l = g.events = {}),
              (s = g.handle) ||
                (s = g.handle = function (e) {
                  return void 0 !== J && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0;
                }),
              h = (e = (e || "").match(mt) || [""]).length;
            h--;

          )
            (d = m = (a = Nt.exec(e[h]) || [])[1]),
              (p = (a[2] || "").split(".").sort()),
              d &&
                ((c = J.event.special[d] || {}),
                (d = (r ? c.delegateType : c.bindType) || d),
                (c = J.event.special[d] || {}),
                (u = J.extend({ type: d, origType: m, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && J.expr.match.needsContext.test(r), namespace: p.join(".") }, o)),
                (f = l[d]) || (((f = l[d] = []).delegateCount = 0), (c.setup && !1 !== c.setup.call(t, n, p, s)) || (t.addEventListener && t.addEventListener(d, s))),
                c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
                r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                (J.event.global[d] = !0));
      },
      remove: function (t, e, i, n, r) {
        var o,
          s,
          a,
          l,
          h,
          u,
          c,
          f,
          d,
          p,
          m,
          g = yt.hasData(t) && yt.get(t);
        if (g && (l = g.events)) {
          for (h = (e = (e || "").match(mt) || [""]).length; h--; )
            if (((d = m = (a = Nt.exec(e[h]) || [])[1]), (p = (a[2] || "").split(".").sort()), d)) {
              for (c = J.event.special[d] || {}, f = l[(d = (n ? c.delegateType : c.bindType) || d)] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--; )
                (u = f[o]),
                  (!r && m !== u.origType) ||
                    (i && i.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                    (f.splice(o, 1), u.selector && f.delegateCount--, c.remove && c.remove.call(t, u));
              s && !f.length && ((c.teardown && !1 !== c.teardown.call(t, p, g.handle)) || J.removeEvent(t, d, g.handle), delete l[d]);
            } else for (d in l) J.event.remove(t, d + e[h], i, n, !0);
          J.isEmptyObject(l) && yt.remove(t, "handle events");
        }
      },
      dispatch: function (t) {
        t = J.event.fix(t);
        var e,
          i,
          n,
          r,
          o,
          s = [],
          a = Y.call(arguments),
          l = (yt.get(this, "events") || {})[t.type] || [],
          h = J.event.special[t.type] || {};
        if (((a[0] = t), (t.delegateTarget = this), !h.preDispatch || !1 !== h.preDispatch.call(this, t))) {
          for (s = J.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped(); )
            for (t.currentTarget = r.elem, i = 0; (o = r.handlers[i++]) && !t.isImmediatePropagationStopped(); )
              (t.rnamespace && !t.rnamespace.test(o.namespace)) ||
                ((t.handleObj = o), (t.data = o.data), void 0 !== (n = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
          return h.postDispatch && h.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function (t, e) {
        var i,
          n,
          r,
          o,
          s = [],
          a = e.delegateCount,
          l = t.target;
        if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
              for (n = [], i = 0; a > i; i++) void 0 === n[(r = (o = e[i]).selector + " ")] && (n[r] = o.needsContext ? J(r, this).index(l) > -1 : J.find(r, this, null, [l]).length), n[r] && n.push(o);
              n.length && s.push({ elem: l, handlers: n });
            }
        return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
        },
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (t, e) {
          var i,
            n,
            r,
            o = e.button;
          return (
            null == t.pageX &&
              null != e.clientX &&
              ((n = (i = t.target.ownerDocument || $).documentElement),
              (r = i.body),
              (t.pageX = e.clientX + ((n && n.scrollLeft) || (r && r.scrollLeft) || 0) - ((n && n.clientLeft) || (r && r.clientLeft) || 0)),
              (t.pageY = e.clientY + ((n && n.scrollTop) || (r && r.scrollTop) || 0) - ((n && n.clientTop) || (r && r.clientTop) || 0))),
            t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
            t
          );
        },
      },
      fix: function (t) {
        if (t[J.expando]) return t;
        var e,
          i,
          n,
          r = t.type,
          o = t,
          s = this.fixHooks[r];
        for (s || (this.fixHooks[r] = s = Ot.test(r) ? this.mouseHooks : It.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new J.Event(o), e = n.length; e--; ) t[(i = n[e])] = o[i];
        return t.target || (t.target = $), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t;
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== p() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === p() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0;
          },
          _default: function (t) {
            return J.nodeName(t.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
          },
        },
      },
    }),
      (J.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i);
      }),
      (J.Event = function (t, e) {
        return this instanceof J.Event
          ? (t && t.type ? ((this.originalEvent = t), (this.type = t.type), (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? f : d)) : (this.type = t),
            e && J.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || J.now()),
            void (this[J.expando] = !0))
          : new J.Event(t, e);
      }),
      (J.Event.prototype = {
        constructor: J.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        isSimulated: !1,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = f), t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = f), t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = f), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
        },
      }),
      J.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
        J.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = t.relatedTarget,
              r = t.handleObj;
            return (n && (n === this || J.contains(this, n))) || ((t.type = r.origType), (i = r.handler.apply(this, arguments)), (t.type = e)), i;
          },
        };
      }),
      J.fn.extend({
        on: function (t, e, i, n) {
          return m(this, t, e, i, n);
        },
        one: function (t, e, i, n) {
          return m(this, t, e, i, n, 1);
        },
        off: function (t, e, i) {
          var n, r;
          if (t && t.preventDefault && t.handleObj) return (n = t.handleObj), J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
          if ("object" == typeof t) {
            for (r in t) this.off(r, e, t[r]);
            return this;
          }
          return (
            (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
            !1 === i && (i = d),
            this.each(function () {
              J.event.remove(this, t, i, e);
            })
          );
        },
      });
    var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      Rt = /<script|<style|<link/i,
      Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      zt = /^true\/(.*)/,
      jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    J.extend({
      htmlPrefilter: function (t) {
        return t.replace(Lt, "<$1></$2>");
      },
      clone: function (t, e, i) {
        var n,
          r,
          o,
          s,
          a = t.cloneNode(!0),
          l = J.contains(t.ownerDocument, t);
        if (!(Z.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || J.isXMLDoc(t))) for (s = h(a), n = 0, r = (o = h(t)).length; r > n; n++) b(o[n], s[n]);
        if (e)
          if (i) for (o = o || h(t), s = s || h(a), n = 0, r = o.length; r > n; n++) _(o[n], s[n]);
          else _(t, a);
        return (s = h(a, "script")).length > 0 && u(s, !l && h(t, "script")), a;
      },
      cleanData: function (t) {
        for (var e, i, n, r = J.event.special, o = 0; void 0 !== (i = t[o]); o++)
          if (vt(i)) {
            if ((e = i[yt.expando])) {
              if (e.events) for (n in e.events) r[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
              i[yt.expando] = void 0;
            }
            i[_t.expando] && (i[_t.expando] = void 0);
          }
      },
    }),
      J.fn.extend({
        domManip: x,
        detach: function (t) {
          return T(this, t, !0);
        },
        remove: function (t) {
          return T(this, t);
        },
        text: function (t) {
          return gt(
            this,
            function (t) {
              return void 0 === t
                ? J.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                  });
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return x(this, arguments, function (t) {
            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || g(this, t).appendChild(t);
          });
        },
        prepend: function () {
          return x(this, arguments, function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var e = g(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return x(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return x(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(h(t, !1)), (t.textContent = ""));
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function () {
              return J.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return gt(
            this,
            function (t) {
              var e = this[0] || {},
                i = 0,
                n = this.length;
              if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
              if ("string" == typeof t && !Rt.test(t) && !Dt[(kt.exec(t) || ["", ""])[1].toLowerCase()]) {
                t = J.htmlPrefilter(t);
                try {
                  for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (J.cleanData(h(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (t) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = [];
          return x(
            this,
            arguments,
            function (e) {
              var i = this.parentNode;
              J.inArray(this, t) < 0 && (J.cleanData(h(this)), i && i.replaceChild(e, this));
            },
            t
          );
        },
      }),
      J.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
        J.fn[t] = function (t) {
          for (var i, n = [], r = J(t), o = r.length - 1, s = 0; o >= s; s++) (i = s === o ? this : this.clone(!0)), J(r[s])[e](i), X.apply(n, i.get());
          return this.pushStack(n);
        };
      });
    var Ft,
      Wt = { HTML: "block", BODY: "block" },
      Ht = /^margin/,
      qt = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
      Bt = function (e) {
        var i = e.ownerDocument.defaultView;
        return (i && i.opener) || (i = t), i.getComputedStyle(e);
      },
      $t = function (t, e, i, n) {
        var r,
          o,
          s = {};
        for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
        for (o in ((r = i.apply(t, n || [])), e)) t.style[o] = s[o];
        return r;
      },
      Yt = $.documentElement;
    !(function () {
      function e() {
        (a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (a.innerHTML = ""), Yt.appendChild(s);
        var e = t.getComputedStyle(a);
        (i = "1%" !== e.top), (o = "2px" === e.marginLeft), (n = "4px" === e.width), (a.style.marginRight = "50%"), (r = "4px" === e.marginRight), Yt.removeChild(s);
      }
      var i,
        n,
        r,
        o,
        s = $.createElement("div"),
        a = $.createElement("div");
      a.style &&
        ((a.style.backgroundClip = "content-box"),
        (a.cloneNode(!0).style.backgroundClip = ""),
        (Z.clearCloneStyle = "content-box" === a.style.backgroundClip),
        (s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        s.appendChild(a),
        J.extend(Z, {
          pixelPosition: function () {
            return e(), i;
          },
          boxSizingReliable: function () {
            return null == n && e(), n;
          },
          pixelMarginRight: function () {
            return null == n && e(), r;
          },
          reliableMarginLeft: function () {
            return null == n && e(), o;
          },
          reliableMarginRight: function () {
            var e,
              i = a.appendChild($.createElement("div"));
            return (
              (i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (i.style.marginRight = i.style.width = "0"),
              (a.style.width = "1px"),
              Yt.appendChild(s),
              (e = !parseFloat(t.getComputedStyle(i).marginRight)),
              Yt.removeChild(s),
              a.removeChild(i),
              e
            );
          },
        }));
    })();
    var Ut = /^(none|table(?!-c[ea]).+)/,
      Xt = { position: "absolute", visibility: "hidden", display: "block" },
      Vt = { letterSpacing: "0", fontWeight: "400" },
      Qt = ["Webkit", "O", "Moz", "ms"],
      Gt = $.createElement("div").style;
    J.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var i = C(t, "opacity");
              return "" === i ? "1" : i;
            }
          },
        },
      },
      cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
      cssProps: { float: "cssFloat" },
      style: function (t, e, i, n) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var r,
            o,
            s,
            a = J.camelCase(e),
            h = t.style;
          return (
            (e = J.cssProps[a] || (J.cssProps[a] = k(a) || a)),
            (s = J.cssHooks[e] || J.cssHooks[a]),
            void 0 === i
              ? s && "get" in s && void 0 !== (r = s.get(t, !1, n))
                ? r
                : h[e]
              : ("string" === (o = typeof i) && (r = wt.exec(i)) && r[1] && ((i = l(t, e, r)), (o = "number")),
                void (
                  null != i &&
                  i == i &&
                  ("number" === o && (i += (r && r[3]) || (J.cssNumber[a] ? "" : "px")),
                  Z.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"),
                  (s && "set" in s && void 0 === (i = s.set(t, i, n))) || (h[e] = i))
                ))
          );
        }
      },
      css: function (t, e, i, n) {
        var r,
          o,
          s,
          a = J.camelCase(e);
        return (
          (e = J.cssProps[a] || (J.cssProps[a] = k(a) || a)),
          (s = J.cssHooks[e] || J.cssHooks[a]) && "get" in s && (r = s.get(t, !0, i)),
          void 0 === r && (r = C(t, e, n)),
          "normal" === r && e in Vt && (r = Vt[e]),
          "" === i || i ? ((o = parseFloat(r)), !0 === i || isFinite(o) ? o || 0 : r) : r
        );
      },
    }),
      J.each(["height", "width"], function (t, e) {
        J.cssHooks[e] = {
          get: function (t, i, n) {
            return i
              ? Ut.test(J.css(t, "display")) && 0 === t.offsetWidth
                ? $t(t, Xt, function () {
                    return P(t, e, n);
                  })
                : P(t, e, n)
              : void 0;
          },
          set: function (t, i, n) {
            var r,
              o = n && Bt(t),
              s = n && D(t, e, n, "border-box" === J.css(t, "boxSizing", !1, o), o);
            return s && (r = wt.exec(i)) && "px" !== (r[3] || "px") && ((t.style[e] = i), (i = J.css(t, e))), A(0, i, s);
          },
        };
      }),
      (J.cssHooks.marginLeft = E(Z.reliableMarginLeft, function (t, e) {
        return e
          ? (parseFloat(C(t, "marginLeft")) ||
              t.getBoundingClientRect().left -
                $t(t, { marginLeft: 0 }, function () {
                  return t.getBoundingClientRect().left;
                })) + "px"
          : void 0;
      })),
      (J.cssHooks.marginRight = E(Z.reliableMarginRight, function (t, e) {
        return e ? $t(t, { display: "inline-block" }, C, [t, "marginRight"]) : void 0;
      })),
      J.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (J.cssHooks[t + e] = {
          expand: function (i) {
            for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + St[n] + e] = o[n] || o[n - 2] || o[0];
            return r;
          },
        }),
          Ht.test(t) || (J.cssHooks[t + e].set = A);
      }),
      J.fn.extend({
        css: function (t, e) {
          return gt(
            this,
            function (t, e, i) {
              var n,
                r,
                o = {},
                s = 0;
              if (J.isArray(e)) {
                for (n = Bt(t), r = e.length; r > s; s++) o[e[s]] = J.css(t, e[s], !1, n);
                return o;
              }
              return void 0 !== i ? J.style(t, e, i) : J.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        },
        show: function () {
          return I(this, !0);
        },
        hide: function () {
          return I(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                Ct(this) ? J(this).show() : J(this).hide();
              });
        },
      }),
      (J.Tween = O),
      (O.prototype = {
        constructor: O,
        init: function (t, e, i, n, r, o) {
          (this.elem = t), (this.prop = i), (this.easing = r || J.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = n), (this.unit = o || (J.cssNumber[i] ? "" : "px"));
        },
        cur: function () {
          var t = O.propHooks[this.prop];
          return t && t.get ? t.get(this) : O.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            i = O.propHooks[this.prop];
          return (
            this.options.duration ? (this.pos = e = J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : O.propHooks._default.set(this),
            this
          );
        },
      }),
      (O.prototype.init.prototype = O.prototype),
      (O.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = J.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
          },
          set: function (t) {
            J.fx.step[t.prop] ? J.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (null == t.elem.style[J.cssProps[t.prop]] && !J.cssHooks[t.prop]) ? (t.elem[t.prop] = t.now) : J.style(t.elem, t.prop, t.now + t.unit);
          },
        },
      }),
      (O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
      (J.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (J.fx = O.prototype.init),
      (J.fx.step = {});
    var Kt,
      Zt,
      Jt = /^(?:toggle|show|hide)$/,
      te = /queueHooks$/;
    (J.Animation = J.extend(M, {
      tweeners: {
        "*": [
          function (t, e) {
            var i = this.createTween(t, e);
            return l(i.elem, t, wt.exec(e), i), i;
          },
        ],
      },
      tweener: function (t, e) {
        J.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(mt));
        for (var i, n = 0, r = t.length; r > n; n++) (i = t[n]), (M.tweeners[i] = M.tweeners[i] || []), M.tweeners[i].unshift(e);
      },
      prefilters: [
        function (t, e, i) {
          var n,
            r,
            o,
            s,
            a,
            l,
            h,
            u = this,
            c = {},
            f = t.style,
            d = t.nodeType && Ct(t),
            p = yt.get(t, "fxshow");
          for (n in (i.queue ||
            (null == (a = J._queueHooks(t, "fx")).unqueued &&
              ((a.unqueued = 0),
              (l = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || l();
              })),
            a.unqueued++,
            u.always(function () {
              u.always(function () {
                a.unqueued--, J.queue(t, "fx").length || a.empty.fire();
              });
            })),
          1 === t.nodeType &&
            ("height" in e || "width" in e) &&
            ((i.overflow = [f.overflow, f.overflowX, f.overflowY]), "inline" === ("none" === (h = J.css(t, "display")) ? yt.get(t, "olddisplay") || S(t.nodeName) : h) && "none" === J.css(t, "float") && (f.display = "inline-block")),
          i.overflow &&
            ((f.overflow = "hidden"),
            u.always(function () {
              (f.overflow = i.overflow[0]), (f.overflowX = i.overflow[1]), (f.overflowY = i.overflow[2]);
            })),
          e))
            if (((r = e[n]), Jt.exec(r))) {
              if ((delete e[n], (o = o || "toggle" === r), r === (d ? "hide" : "show"))) {
                if ("show" !== r || !p || void 0 === p[n]) continue;
                d = !0;
              }
              c[n] = (p && p[n]) || J.style(t, n);
            } else h = void 0;
          if (J.isEmptyObject(c)) "inline" === ("none" === h ? S(t.nodeName) : h) && (f.display = h);
          else
            for (n in (p ? "hidden" in p && (d = p.hidden) : (p = yt.access(t, "fxshow", {})),
            o && (p.hidden = !d),
            d
              ? J(t).show()
              : u.done(function () {
                  J(t).hide();
                }),
            u.done(function () {
              var e;
              for (e in (yt.remove(t, "fxshow"), c)) J.style(t, e, c[e]);
            }),
            c))
              (s = R(d ? p[n] : 0, n, u)), n in p || ((p[n] = s.start), d && ((s.end = s.start), (s.start = "width" === n || "height" === n ? 1 : 0)));
        },
      ],
      prefilter: function (t, e) {
        e ? M.prefilters.unshift(t) : M.prefilters.push(t);
      },
    })),
      (J.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? J.extend({}, t) : { complete: i || (!i && e) || (J.isFunction(t) && t), duration: t, easing: (i && e) || (e && !J.isFunction(e) && e) };
        return (
          (n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default),
          (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
          (n.old = n.complete),
          (n.complete = function () {
            J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue);
          }),
          n
        );
      }),
      J.fn.extend({
        fadeTo: function (t, e, i, n) {
          return this.filter(Ct).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n);
        },
        animate: function (t, e, i, n) {
          var r = J.isEmptyObject(t),
            o = J.speed(e, i, n),
            s = function () {
              var e = M(this, J.extend({}, t), o);
              (r || yt.get(this, "finish")) && e.stop(!0);
            };
          return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function (t, e, i) {
          var n = function (t) {
            var e = t.stop;
            delete t.stop, e(i);
          };
          return (
            "string" != typeof t && ((i = e), (e = t), (t = void 0)),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                r = null != t && t + "queueHooks",
                o = J.timers,
                s = yt.get(this);
              if (r) s[r] && s[r].stop && n(s[r]);
              else for (r in s) s[r] && s[r].stop && te.test(r) && n(s[r]);
              for (r = o.length; r--; ) o[r].elem !== this || (null != t && o[r].queue !== t) || (o[r].anim.stop(i), (e = !1), o.splice(r, 1));
              (!e && i) || J.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            !1 !== t && (t = t || "fx"),
            this.each(function () {
              var e,
                i = yt.get(this),
                n = i[t + "queue"],
                r = i[t + "queueHooks"],
                o = J.timers,
                s = n ? n.length : 0;
              for (i.finish = !0, J.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
              for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
              delete i.finish;
            })
          );
        },
      }),
      J.each(["toggle", "show", "hide"], function (t, e) {
        var i = J.fn[e];
        J.fn[e] = function (t, n, r) {
          return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, r);
        };
      }),
      J.each({ slideDown: L("show"), slideUp: L("hide"), slideToggle: L("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
        J.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }),
      (J.timers = []),
      (J.fx.tick = function () {
        var t,
          e = 0,
          i = J.timers;
        for (Kt = J.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || J.fx.stop(), (Kt = void 0);
      }),
      (J.fx.timer = function (t) {
        J.timers.push(t), t() ? J.fx.start() : J.timers.pop();
      }),
      (J.fx.interval = 13),
      (J.fx.start = function () {
        Zt || (Zt = t.setInterval(J.fx.tick, J.fx.interval));
      }),
      (J.fx.stop = function () {
        t.clearInterval(Zt), (Zt = null);
      }),
      (J.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (J.fn.delay = function (e, i) {
        return (
          (e = (J.fx && J.fx.speeds[e]) || e),
          (i = i || "fx"),
          this.queue(i, function (i, n) {
            var r = t.setTimeout(i, e);
            n.stop = function () {
              t.clearTimeout(r);
            };
          })
        );
      }),
      (function () {
        var t = $.createElement("input"),
          e = $.createElement("select"),
          i = e.appendChild($.createElement("option"));
        (t.type = "checkbox"), (Z.checkOn = "" !== t.value), (Z.optSelected = i.selected), (e.disabled = !0), (Z.optDisabled = !i.disabled), ((t = $.createElement("input")).value = "t"), (t.type = "radio"), (Z.radioValue = "t" === t.value);
      })();
    var ee,
      ie = J.expr.attrHandle;
    J.fn.extend({
      attr: function (t, e) {
        return gt(this, J.attr, t, e, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          J.removeAttr(this, t);
        });
      },
    }),
      J.extend({
        attr: function (t, e, i) {
          var n,
            r,
            o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return void 0 === t.getAttribute
              ? J.prop(t, e, i)
              : ((1 === o && J.isXMLDoc(t)) || ((e = e.toLowerCase()), (r = J.attrHooks[e] || (J.expr.match.bool.test(e) ? ee : void 0))),
                void 0 !== i
                  ? null === i
                    ? void J.removeAttr(t, e)
                    : r && "set" in r && void 0 !== (n = r.set(t, i, e))
                    ? n
                    : (t.setAttribute(e, i + ""), i)
                  : r && "get" in r && null !== (n = r.get(t, e))
                  ? n
                  : null == (n = J.find.attr(t, e))
                  ? void 0
                  : n);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!Z.radioValue && "radio" === e && J.nodeName(t, "input")) {
                var i = t.value;
                return t.setAttribute("type", e), i && (t.value = i), e;
              }
            },
          },
        },
        removeAttr: function (t, e) {
          var i,
            n,
            r = 0,
            o = e && e.match(mt);
          if (o && 1 === t.nodeType) for (; (i = o[r++]); ) (n = J.propFix[i] || i), J.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i);
        },
      }),
      (ee = {
        set: function (t, e, i) {
          return !1 === e ? J.removeAttr(t, i) : t.setAttribute(i, i), i;
        },
      }),
      J.each(J.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = ie[e] || J.find.attr;
        ie[e] = function (t, e, n) {
          var r, o;
          return n || ((o = ie[e]), (ie[e] = r), (r = null != i(t, e, n) ? e.toLowerCase() : null), (ie[e] = o)), r;
        };
      });
    var ne = /^(?:input|select|textarea|button)$/i,
      re = /^(?:a|area)$/i;
    J.fn.extend({
      prop: function (t, e) {
        return gt(this, J.prop, t, e, arguments.length > 1);
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[J.propFix[t] || t];
        });
      },
    }),
      J.extend({
        prop: function (t, e, i) {
          var n,
            r,
            o = t.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && J.isXMLDoc(t)) || ((e = J.propFix[e] || e), (r = J.propHooks[e])), void 0 !== i ? (r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t[e] = i)) : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var e = J.find.attr(t, "tabindex");
              return e ? parseInt(e, 10) : ne.test(t.nodeName) || (re.test(t.nodeName) && t.href) ? 0 : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      Z.optSelected ||
        (J.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
          },
          set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
          },
        }),
      J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        J.propFix[this.toLowerCase()] = this;
      });
    var oe = /[\t\r\n\f]/g;
    J.fn.extend({
      addClass: function (t) {
        var e,
          i,
          n,
          r,
          o,
          s,
          a,
          l = 0;
        if (J.isFunction(t))
          return this.each(function (e) {
            J(this).addClass(t.call(this, e, z(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(mt) || []; (i = this[l++]); )
            if (((r = z(i)), (n = 1 === i.nodeType && (" " + r + " ").replace(oe, " ")))) {
              for (s = 0; (o = e[s++]); ) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
              r !== (a = J.trim(n)) && i.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          i,
          n,
          r,
          o,
          s,
          a,
          l = 0;
        if (J.isFunction(t))
          return this.each(function (e) {
            J(this).removeClass(t.call(this, e, z(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(mt) || []; (i = this[l++]); )
            if (((r = z(i)), (n = 1 === i.nodeType && (" " + r + " ").replace(oe, " ")))) {
              for (s = 0; (o = e[s++]); ) for (; n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
              r !== (a = J.trim(n)) && i.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var i = typeof t;
        return "boolean" == typeof e && "string" === i
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : J.isFunction(t)
          ? this.each(function (i) {
              J(this).toggleClass(t.call(this, i, z(this), e), e);
            })
          : this.each(function () {
              var e, n, r, o;
              if ("string" === i) for (n = 0, r = J(this), o = t.match(mt) || []; (e = o[n++]); ) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
              else (void 0 !== t && "boolean" !== i) || ((e = z(this)) && yt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : yt.get(this, "__className__") || ""));
            });
      },
      hasClass: function (t) {
        var e,
          i,
          n = 0;
        for (e = " " + t + " "; (i = this[n++]); ) if (1 === i.nodeType && (" " + z(i) + " ").replace(oe, " ").indexOf(e) > -1) return !0;
        return !1;
      },
    });
    var se = /\r/g,
      ae = /[\x20\t\r\n\f]+/g;
    J.fn.extend({
      val: function (t) {
        var e,
          i,
          n,
          r = this[0];
        return arguments.length
          ? ((n = J.isFunction(t)),
            this.each(function (i) {
              var r;
              1 === this.nodeType &&
                (null == (r = n ? t.call(this, i, J(this).val()) : t)
                  ? (r = "")
                  : "number" == typeof r
                  ? (r += "")
                  : J.isArray(r) &&
                    (r = J.map(r, function (t) {
                      return null == t ? "" : t + "";
                    })),
                ((e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value")) || (this.value = r));
            }))
          : r
          ? (e = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value"))
            ? i
            : "string" == typeof (i = r.value)
            ? i.replace(se, "")
            : null == i
            ? ""
            : i
          : void 0;
      },
    }),
      J.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = J.find.attr(t, "value");
              return null != e ? e : J.trim(J.text(t)).replace(ae, " ");
            },
          },
          select: {
            get: function (t) {
              for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                if (((i = n[l]).selected || l === r) && (Z.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !J.nodeName(i.parentNode, "optgroup"))) {
                  if (((e = J(i).val()), o)) return e;
                  s.push(e);
                }
              return s;
            },
            set: function (t, e) {
              for (var i, n, r = t.options, o = J.makeArray(e), s = r.length; s--; ) ((n = r[s]).selected = J.inArray(J.valHooks.option.get(n), o) > -1) && (i = !0);
              return i || (t.selectedIndex = -1), o;
            },
          },
        },
      }),
      J.each(["radio", "checkbox"], function () {
        (J.valHooks[this] = {
          set: function (t, e) {
            return J.isArray(e) ? (t.checked = J.inArray(J(t).val(), e) > -1) : void 0;
          },
        }),
          Z.checkOn ||
            (J.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      });
    var le = /^(?:focusinfocus|focusoutblur)$/;
    J.extend(J.event, {
      trigger: function (e, i, n, r) {
        var o,
          s,
          a,
          l,
          h,
          u,
          c,
          f = [n || $],
          d = K.call(e, "type") ? e.type : e,
          p = K.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((s = a = n = n || $),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !le.test(d + J.event.triggered) &&
            (d.indexOf(".") > -1 && ((p = d.split(".")), (d = p.shift()), p.sort()),
            (h = d.indexOf(":") < 0 && "on" + d),
            ((e = e[J.expando] ? e : new J.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
            (e.namespace = p.join(".")),
            (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (i = null == i ? [e] : J.makeArray(i, [e])),
            (c = J.event.special[d] || {}),
            r || !c.trigger || !1 !== c.trigger.apply(n, i)))
        ) {
          if (!r && !c.noBubble && !J.isWindow(n)) {
            for (l = c.delegateType || d, le.test(l + d) || (s = s.parentNode); s; s = s.parentNode) f.push(s), (a = s);
            a === (n.ownerDocument || $) && f.push(a.defaultView || a.parentWindow || t);
          }
          for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); )
            (e.type = o > 1 ? l : c.bindType || d),
              (u = (yt.get(s, "events") || {})[e.type] && yt.get(s, "handle")) && u.apply(s, i),
              (u = h && s[h]) && u.apply && vt(s) && ((e.result = u.apply(s, i)), !1 === e.result && e.preventDefault());
          return (
            (e.type = d),
            r ||
              e.isDefaultPrevented() ||
              (c._default && !1 !== c._default.apply(f.pop(), i)) ||
              !vt(n) ||
              (h && J.isFunction(n[d]) && !J.isWindow(n) && ((a = n[h]) && (n[h] = null), (J.event.triggered = d), n[d](), (J.event.triggered = void 0), a && (n[h] = a))),
            e.result
          );
        }
      },
      simulate: function (t, e, i) {
        var n = J.extend(new J.Event(), i, { type: t, isSimulated: !0 });
        J.event.trigger(n, null, e);
      },
    }),
      J.fn.extend({
        trigger: function (t, e) {
          return this.each(function () {
            J.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var i = this[0];
          return i ? J.event.trigger(t, e, i, !0) : void 0;
        },
      }),
      J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
        t,
        e
      ) {
        J.fn[e] = function (t, i) {
          return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
        };
      }),
      J.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
      }),
      (Z.focusin = "onfocusin" in t),
      Z.focusin ||
        J.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var i = function (t) {
            J.event.simulate(e, t.target, J.event.fix(t));
          };
          J.event.special[e] = {
            setup: function () {
              var n = this.ownerDocument || this,
                r = yt.access(n, e);
              r || n.addEventListener(t, i, !0), yt.access(n, e, (r || 0) + 1);
            },
            teardown: function () {
              var n = this.ownerDocument || this,
                r = yt.access(n, e) - 1;
              r ? yt.access(n, e, r) : (n.removeEventListener(t, i, !0), yt.remove(n, e));
            },
          };
        });
    var he = t.location,
      ue = J.now(),
      ce = /\?/;
    (J.parseJSON = function (t) {
      return JSON.parse(t + "");
    }),
      (J.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
          i = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {
          i = void 0;
        }
        return (i && !i.getElementsByTagName("parsererror").length) || J.error("Invalid XML: " + e), i;
      });
    var fe = /#.*$/,
      de = /([?&])_=[^&]*/,
      pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      me = /^(?:GET|HEAD)$/,
      ge = /^\/\//,
      ve = {},
      ye = {},
      _e = "*/".concat("*"),
      be = $.createElement("a");
    (be.href = he.href),
      J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: he.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(he.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: { "*": _e, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
          converters: { "* text": String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (t, e) {
          return e ? W(W(t, J.ajaxSettings), e) : W(J.ajaxSettings, t);
        },
        ajaxPrefilter: j(ve),
        ajaxTransport: j(ye),
        ajax: function (e, i) {
          function n(e, i, n, a) {
            var h,
              c,
              y,
              _,
              x,
              w = i;
            2 !== b &&
              ((b = 2),
              l && t.clearTimeout(l),
              (r = void 0),
              (s = a || ""),
              (T.readyState = e > 0 ? 4 : 0),
              (h = (e >= 200 && 300 > e) || 304 === e),
              n &&
                (_ = (function (t, e, i) {
                  for (var n, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                  if (n)
                    for (r in a)
                      if (a[r] && a[r].test(n)) {
                        l.unshift(r);
                        break;
                      }
                  if (l[0] in i) o = l[0];
                  else {
                    for (r in i) {
                      if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break;
                      }
                      s || (s = r);
                    }
                    o = o || s;
                  }
                  return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
                })(f, T, n)),
              (_ = (function (t, e, i, n) {
                var r,
                  o,
                  s,
                  a,
                  l,
                  h = {},
                  u = t.dataTypes.slice();
                if (u[1]) for (s in t.converters) h[s.toLowerCase()] = t.converters[s];
                for (o = u.shift(); o; )
                  if ((t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = o), (o = u.shift())))
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                      if (!(s = h[l + " " + o] || h["* " + o]))
                        for (r in h)
                          if ((a = r.split(" "))[1] === o && (s = h[l + " " + a[0]] || h["* " + a[0]])) {
                            !0 === s ? (s = h[r]) : !0 !== h[r] && ((o = a[0]), u.unshift(a[1]));
                            break;
                          }
                      if (!0 !== s)
                        if (s && t.throws) e = s(e);
                        else
                          try {
                            e = s(e);
                          } catch (t) {
                            return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o };
                          }
                    }
                return { state: "success", data: e };
              })(f, _, T, h)),
              h
                ? (f.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (J.lastModified[o] = x), (x = T.getResponseHeader("etag")) && (J.etag[o] = x)),
                  204 === e || "HEAD" === f.type ? (w = "nocontent") : 304 === e ? (w = "notmodified") : ((w = _.state), (c = _.data), (h = !(y = _.error))))
                : ((y = w), (!e && w) || ((w = "error"), 0 > e && (e = 0))),
              (T.status = e),
              (T.statusText = (i || w) + ""),
              h ? m.resolveWith(d, [c, w, T]) : m.rejectWith(d, [T, w, y]),
              T.statusCode(v),
              (v = void 0),
              u && p.trigger(h ? "ajaxSuccess" : "ajaxError", [T, f, h ? c : y]),
              g.fireWith(d, [T, w]),
              u && (p.trigger("ajaxComplete", [T, f]), --J.active || J.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
          var r,
            o,
            s,
            a,
            l,
            h,
            u,
            c,
            f = J.ajaxSetup({}, i),
            d = f.context || f,
            p = f.context && (d.nodeType || d.jquery) ? J(d) : J.event,
            m = J.Deferred(),
            g = J.Callbacks("once memory"),
            v = f.statusCode || {},
            y = {},
            _ = {},
            b = 0,
            x = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (t) {
                var e;
                if (2 === b) {
                  if (!a) for (a = {}; (e = pe.exec(s)); ) a[e[1].toLowerCase()] = e[2];
                  e = a[t.toLowerCase()];
                }
                return null == e ? null : e;
              },
              getAllResponseHeaders: function () {
                return 2 === b ? s : null;
              },
              setRequestHeader: function (t, e) {
                var i = t.toLowerCase();
                return b || ((t = _[i] = _[i] || t), (y[t] = e)), this;
              },
              overrideMimeType: function (t) {
                return b || (f.mimeType = t), this;
              },
              statusCode: function (t) {
                var e;
                if (t)
                  if (2 > b) for (e in t) v[e] = [v[e], t[e]];
                  else T.always(t[T.status]);
                return this;
              },
              abort: function (t) {
                var e = t || x;
                return r && r.abort(e), n(0, e), this;
              },
            };
          if (
            ((m.promise(T).complete = g.add),
            (T.success = T.done),
            (T.error = T.fail),
            (f.url = ((e || f.url || he.href) + "").replace(fe, "").replace(ge, he.protocol + "//")),
            (f.type = i.method || i.type || f.method || f.type),
            (f.dataTypes = J.trim(f.dataType || "*")
              .toLowerCase()
              .match(mt) || [""]),
            null == f.crossDomain)
          ) {
            h = $.createElement("a");
            try {
              (h.href = f.url), (h.href = h.href), (f.crossDomain = be.protocol + "//" + be.host != h.protocol + "//" + h.host);
            } catch (t) {
              f.crossDomain = !0;
            }
          }
          if ((f.data && f.processData && "string" != typeof f.data && (f.data = J.param(f.data, f.traditional)), F(ve, f, i, T), 2 === b)) return T;
          for (c in ((u = J.event && f.global) && 0 == J.active++ && J.event.trigger("ajaxStart"),
          (f.type = f.type.toUpperCase()),
          (f.hasContent = !me.test(f.type)),
          (o = f.url),
          f.hasContent || (f.data && ((o = f.url += (ce.test(o) ? "&" : "?") + f.data), delete f.data), !1 === f.cache && (f.url = de.test(o) ? o.replace(de, "$1_=" + ue++) : o + (ce.test(o) ? "&" : "?") + "_=" + ue++)),
          f.ifModified && (J.lastModified[o] && T.setRequestHeader("If-Modified-Since", J.lastModified[o]), J.etag[o] && T.setRequestHeader("If-None-Match", J.etag[o])),
          ((f.data && f.hasContent && !1 !== f.contentType) || i.contentType) && T.setRequestHeader("Content-Type", f.contentType),
          T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + _e + "; q=0.01" : "") : f.accepts["*"]),
          f.headers))
            T.setRequestHeader(c, f.headers[c]);
          if (f.beforeSend && (!1 === f.beforeSend.call(d, T, f) || 2 === b)) return T.abort();
          for (c in ((x = "abort"), { success: 1, error: 1, complete: 1 })) T[c](f[c]);
          if ((r = F(ye, f, i, T))) {
            if (((T.readyState = 1), u && p.trigger("ajaxSend", [T, f]), 2 === b)) return T;
            f.async &&
              f.timeout > 0 &&
              (l = t.setTimeout(function () {
                T.abort("timeout");
              }, f.timeout));
            try {
              (b = 1), r.send(y, n);
            } catch (t) {
              if (!(2 > b)) throw t;
              n(-1, t);
            }
          } else n(-1, "No Transport");
          return T;
        },
        getJSON: function (t, e, i) {
          return J.get(t, e, i, "json");
        },
        getScript: function (t, e) {
          return J.get(t, void 0, e, "script");
        },
      }),
      J.each(["get", "post"], function (t, e) {
        J[e] = function (t, i, n, r) {
          return J.isFunction(i) && ((r = r || n), (n = i), (i = void 0)), J.ajax(J.extend({ url: t, type: e, dataType: r, data: i, success: n }, J.isPlainObject(t) && t));
        };
      }),
      (J._evalUrl = function (t) {
        return J.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
      }),
      J.fn.extend({
        wrapAll: function (t) {
          var e;
          return J.isFunction(t)
            ? this.each(function (e) {
                J(this).wrapAll(t.call(this, e));
              })
            : (this[0] &&
                ((e = J(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (t) {
          return J.isFunction(t)
            ? this.each(function (e) {
                J(this).wrapInner(t.call(this, e));
              })
            : this.each(function () {
                var e = J(this),
                  i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
              });
        },
        wrap: function (t) {
          var e = J.isFunction(t);
          return this.each(function (i) {
            J(this).wrapAll(e ? t.call(this, i) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (J.expr.filters.hidden = function (t) {
        return !J.expr.filters.visible(t);
      }),
      (J.expr.filters.visible = function (t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0;
      });
    var xe = /%20/g,
      Te = /\[\]$/,
      we = /\r?\n/g,
      Se = /^(?:submit|button|image|reset|file)$/i,
      Ce = /^(?:input|select|textarea|keygen)/i;
    (J.param = function (t, e) {
      var i,
        n = [],
        r = function (t, e) {
          (e = J.isFunction(e) ? e() : null == e ? "" : e), (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if ((void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || (t.jquery && !J.isPlainObject(t))))
        J.each(t, function () {
          r(this.name, this.value);
        });
      else for (i in t) H(i, t[i], e, r);
      return n.join("&").replace(xe, "+");
    }),
      J.fn.extend({
        serialize: function () {
          return J.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = J.prop(this, "elements");
            return t ? J.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return this.name && !J(this).is(":disabled") && Ce.test(this.nodeName) && !Se.test(t) && (this.checked || !Et.test(t));
            })
            .map(function (t, e) {
              var i = J(this).val();
              return null == i
                ? null
                : J.isArray(i)
                ? J.map(i, function (t) {
                    return { name: e.name, value: t.replace(we, "\r\n") };
                  })
                : { name: e.name, value: i.replace(we, "\r\n") };
            })
            .get();
        },
      }),
      (J.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest();
        } catch (t) {}
      });
    var Ee = { 0: 200, 1223: 204 },
      ke = J.ajaxSettings.xhr();
    (Z.cors = !!ke && "withCredentials" in ke),
      (Z.ajax = ke = !!ke),
      J.ajaxTransport(function (e) {
        var i, n;
        return Z.cors || (ke && !e.crossDomain)
          ? {
              send: function (r, o) {
                var s,
                  a = e.xhr();
                if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) a.setRequestHeader(s, r[s]);
                (i = function (t) {
                  return function () {
                    i &&
                      ((i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null),
                      "abort" === t
                        ? a.abort()
                        : "error" === t
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(Ee[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
                  };
                }),
                  (a.onload = i()),
                  (n = a.onerror = i("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = n)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          t.setTimeout(function () {
                            i && n();
                          });
                      }),
                  (i = i("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (t) {
                  if (i) throw t;
                }
              },
              abort: function () {
                i && i();
              },
            }
          : void 0;
      }),
      J.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (t) {
            return J.globalEval(t), t;
          },
        },
      }),
      J.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
      }),
      J.ajaxTransport("script", function (t) {
        var e, i;
        if (t.crossDomain)
          return {
            send: function (n, r) {
              (e = J("<script>")
                .prop({ charset: t.scriptCharset, src: t.url })
                .on(
                  "load error",
                  (i = function (t) {
                    e.remove(), (i = null), t && r("error" === t.type ? 404 : 200, t.type);
                  })
                )),
                $.head.appendChild(e[0]);
            },
            abort: function () {
              i && i();
            },
          };
      });
    var Ae = [],
      De = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = Ae.pop() || J.expando + "_" + ue++;
        return (this[t] = !0), t;
      },
    }),
      J.ajaxPrefilter("json jsonp", function (e, i, n) {
        var r,
          o,
          s,
          a = !1 !== e.jsonp && (De.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && De.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0]
          ? ((r = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a ? (e[a] = e[a].replace(De, "$1" + r)) : !1 !== e.jsonp && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return s || J.error(r + " was not called"), s[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = t[r]),
            (t[r] = function () {
              s = arguments;
            }),
            n.always(function () {
              void 0 === o ? J(t).removeProp(r) : (t[r] = o), e[r] && ((e.jsonpCallback = i.jsonpCallback), Ae.push(r)), s && J.isFunction(o) && o(s[0]), (s = o = void 0);
            }),
            "script")
          : void 0;
      }),
      (J.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((i = e), (e = !1)), (e = e || $);
        var n = lt.exec(t),
          r = !i && [];
        return n ? [e.createElement(n[1])] : ((n = c([t], e, r)), r && r.length && J(r).remove(), J.merge([], n.childNodes));
      });
    var Pe = J.fn.load;
    (J.fn.load = function (t, e, i) {
      if ("string" != typeof t && Pe) return Pe.apply(this, arguments);
      var n,
        r,
        o,
        s = this,
        a = t.indexOf(" ");
      return (
        a > -1 && ((n = J.trim(t.slice(a))), (t = t.slice(0, a))),
        J.isFunction(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
        s.length > 0 &&
          J.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
            .done(function (t) {
              (o = arguments), s.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t);
            })
            .always(
              i &&
                function (t, e) {
                  s.each(function () {
                    i.apply(this, o || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
      J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        J.fn[e] = function (t) {
          return this.on(e, t);
        };
      }),
      (J.expr.filters.animated = function (t) {
        return J.grep(J.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (J.offset = {
        setOffset: function (t, e, i) {
          var n,
            r,
            o,
            s,
            a,
            l,
            h = J.css(t, "position"),
            u = J(t),
            c = {};
          "static" === h && (t.style.position = "relative"),
            (a = u.offset()),
            (o = J.css(t, "top")),
            (l = J.css(t, "left")),
            ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1 ? ((s = (n = u.position()).top), (r = n.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
            J.isFunction(e) && (e = e.call(t, i, J.extend({}, a))),
            null != e.top && (c.top = e.top - a.top + s),
            null != e.left && (c.left = e.left - a.left + r),
            "using" in e ? e.using.call(t, c) : u.css(c);
        },
      }),
      J.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  J.offset.setOffset(this, t, e);
                });
          var e,
            i,
            n = this[0],
            r = { top: 0, left: 0 },
            o = n && n.ownerDocument;
          return o ? ((e = o.documentElement), J.contains(e, n) ? ((r = n.getBoundingClientRect()), (i = q(o)), { top: r.top + i.pageYOffset - e.clientTop, left: r.left + i.pageXOffset - e.clientLeft }) : r) : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              i = this[0],
              n = { top: 0, left: 0 };
            return (
              "fixed" === J.css(i, "position")
                ? (e = i.getBoundingClientRect())
                : ((t = this.offsetParent()), (e = this.offset()), J.nodeName(t[0], "html") || (n = t.offset()), (n.top += J.css(t[0], "borderTopWidth", !0)), (n.left += J.css(t[0], "borderLeftWidth", !0))),
              { top: e.top - n.top - J.css(i, "marginTop", !0), left: e.left - n.left - J.css(i, "marginLeft", !0) }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var t = this.offsetParent; t && "static" === J.css(t, "position"); ) t = t.offsetParent;
            return t || Yt;
          });
        },
      }),
      J.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
        var i = "pageYOffset" === e;
        J.fn[t] = function (n) {
          return gt(
            this,
            function (t, n, r) {
              var o = q(t);
              return void 0 === r ? (o ? o[e] : t[n]) : void (o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : (t[n] = r));
            },
            t,
            n,
            arguments.length
          );
        };
      }),
      J.each(["top", "left"], function (t, e) {
        J.cssHooks[e] = E(Z.pixelPosition, function (t, i) {
          return i ? ((i = C(t, e)), qt.test(i) ? J(t).position()[e] + "px" : i) : void 0;
        });
      }),
      J.each({ Height: "height", Width: "width" }, function (t, e) {
        J.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (i, n) {
          J.fn[n] = function (n, r) {
            var o = arguments.length && (i || "boolean" != typeof n),
              s = i || (!0 === n || !0 === r ? "margin" : "border");
            return gt(
              this,
              function (e, i, n) {
                var r;
                return J.isWindow(e)
                  ? e.document.documentElement["client" + t]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement), Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t]))
                  : void 0 === n
                  ? J.css(e, i, s)
                  : J.style(e, i, n, s);
              },
              e,
              o ? n : void 0,
              o,
              null
            );
          };
        });
      }),
      J.fn.extend({
        bind: function (t, e, i) {
          return this.on(t, null, e, i);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, i, n) {
          return this.on(e, t, i, n);
        },
        undelegate: function (t, e, i) {
          return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
        },
        size: function () {
          return this.length;
        },
      }),
      (J.fn.andSelf = J.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return J;
        });
    var Ie = t.jQuery,
      Oe = t.$;
    return (
      (J.noConflict = function (e) {
        return t.$ === J && (t.$ = Oe), e && t.jQuery === J && (t.jQuery = Ie), J;
      }),
      e || (t.jQuery = t.$ = J),
      J
    );
  }),
  ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t, e, i, n, r, o, s, a, l, h, u, c, f, d, p, m;
    _gsScope._gsDefine(
      "TweenMax",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (t, e, i) {
        var n = function (t) {
            var e,
              i = [],
              n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i;
          },
          r = function (t, e, i) {
            var n,
              r,
              o = t.cycle;
            for (n in o) (r = o[n]), (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
            delete t.cycle;
          },
          o = function (t, e, n) {
            i.call(this, t, e, n), (this._cycle = 0), (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._dirty = !0), (this.render = o.prototype.render);
          },
          s = 1e-10,
          a = i._internals,
          l = a.isSelector,
          h = a.isArray,
          u = (o.prototype = i.to({}, 0.1, {})),
          c = [];
        (o.version = "1.19.0"),
          (u.constructor = o),
          (u.kill()._gc = !1),
          (o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf),
          (o.getTweensOf = i.getTweensOf),
          (o.lagSmoothing = i.lagSmoothing),
          (o.ticker = i.ticker),
          (o.render = i.render),
          (u.invalidate = function () {
            return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), i.prototype.invalidate.call(this);
          }),
          (u.updateTo = function (t, e) {
            var n,
              r = this.ratio,
              o = this.vars.immediateRender || t.immediateRender;
            for (n in (e && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t))
              this.vars[n] = t[n];
            if (this._initted || o)
              if (e) (this._initted = !1), o && this.render(0, !0, !0);
              else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
                var s = this._totalTime;
                this.render(0, !0, !1), (this._initted = !1), this.render(s, !0, !1);
              } else if (((this._initted = !1), this._init(), this._time > 0 || o)) for (var a, l = 1 / (1 - r), h = this._firstPT; h; ) (a = h.s + h.c), (h.c *= l), (h.s = a - h.c), (h = h._next);
            return this;
          }),
          (u.render = function (t, e, i) {
            this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
            var n,
              r,
              o,
              l,
              h,
              u,
              c,
              f,
              d = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._time,
              m = this._totalTime,
              g = this._cycle,
              v = this._duration,
              y = this._rawPrevTime;
            if (
              (t >= d - 1e-7
                ? ((this._totalTime = d),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = v), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                  this._reversed || ((n = !0), (r = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
                  0 === v &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (0 > y || (0 >= t && t >= -1e-7) || (y === s && "isPause" !== this.data)) && y !== t && ((i = !0), y > s && (r = "onReverseComplete")),
                    (this._rawPrevTime = f = !e || t || y === t ? t : s)))
                : 1e-7 > t
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                  (0 !== m || (0 === v && y > 0)) && ((r = "onReverseComplete"), (n = this._reversed)),
                  0 > t && ((this._active = !1), 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), (this._rawPrevTime = f = !e || t || y === t ? t : s))),
                  this._initted || (i = !0))
                : ((this._totalTime = this._time = t),
                  0 !== this._repeat &&
                    ((l = v + this._repeatDelay),
                    (this._cycle = (this._totalTime / l) >> 0),
                    0 !== this._cycle && this._cycle === this._totalTime / l && t >= m && this._cycle--,
                    (this._time = this._totalTime - this._cycle * l),
                    this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time),
                    this._time > v ? (this._time = v) : this._time < 0 && (this._time = 0)),
                  this._easeType
                    ? ((h = this._time / v),
                      (1 === (u = this._easeType) || (3 === u && h >= 0.5)) && (h = 1 - h),
                      3 === u && (h *= 2),
                      1 === (c = this._easePower) ? (h *= h) : 2 === c ? (h *= h * h) : 3 === c ? (h *= h * h * h) : 4 === c && (h *= h * h * h * h),
                      1 === u ? (this.ratio = 1 - h) : 2 === u ? (this.ratio = h) : this._time / v < 0.5 ? (this.ratio = h / 2) : (this.ratio = 1 - h / 2))
                    : (this.ratio = this._ease.getRatio(this._time / v))),
              p !== this._time || i || g !== this._cycle)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return;
                if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                  return (this._time = p), (this._totalTime = m), (this._rawPrevTime = y), (this._cycle = g), a.lazyTweens.push(this), void (this._lazy = [t, e]);
                this._time && !n ? (this.ratio = this._ease.getRatio(this._time / v)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active || (!this._paused && this._time !== p && t >= 0 && (this._active = !0)),
                  0 === m &&
                    (2 === this._initted && t > 0 && this._init(),
                    this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                    this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))),
                  o = this._firstPT;
                o;

              )
                o.f ? o.t[o.p](o.c * this.ratio + o.s) : (o.t[o.p] = o.c * this.ratio + o.s), (o = o._next);
              this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || ((this._totalTime !== m || r) && this._callback("onUpdate"))),
                this._cycle !== g && (e || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                r &&
                  (!this._gc || i) &&
                  (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                  n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                  !e && this.vars[r] && this._callback(r),
                  0 === v && this._rawPrevTime === s && f !== s && (this._rawPrevTime = 0));
            } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
          }),
          (o.to = function (t, e, i) {
            return new o(t, e, i);
          }),
          (o.from = function (t, e, i) {
            return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new o(t, e, i);
          }),
          (o.fromTo = function (t, e, i, n) {
            return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new o(t, e, n);
          }),
          (o.staggerTo = o.allTo = function (t, e, s, a, u, f, d) {
            a = a || 0;
            var p,
              m,
              g,
              v,
              y = 0,
              _ = [],
              b = function () {
                s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(d || s.callbackScope || this, f || c);
              },
              x = s.cycle,
              T = s.startAt && s.startAt.cycle;
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && ((t = n(t)).reverse(), (a *= -1)), p = t.length - 1, g = 0; p >= g; g++) {
              for (v in ((m = {}), s)) m[v] = s[v];
              if ((x && (r(m, t, g), null != m.duration && ((e = m.duration), delete m.duration)), T)) {
                for (v in ((T = m.startAt = {}), s.startAt)) T[v] = s.startAt[v];
                r(m.startAt, t, g);
              }
              (m.delay = y + (m.delay || 0)), g === p && u && (m.onComplete = b), (_[g] = new o(t[g], e, m)), (y += a);
            }
            return _;
          }),
          (o.staggerFrom = o.allFrom = function (t, e, i, n, r, s, a) {
            return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), o.staggerTo(t, e, i, n, r, s, a);
          }),
          (o.staggerFromTo = o.allFromTo = function (t, e, i, n, r, s, a, l) {
            return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), o.staggerTo(t, e, n, r, s, a, l);
          }),
          (o.delayedCall = function (t, e, i, n, r) {
            return new o(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: r, overwrite: 0 });
          }),
          (o.set = function (t, e) {
            return new o(t, 0, e);
          }),
          (o.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0;
          });
        var f = function (t, e) {
            for (var n = [], r = 0, o = t._first; o; ) o instanceof i ? (n[r++] = o) : (e && (n[r++] = o), (r = (n = n.concat(f(o, e))).length)), (o = o._next);
            return n;
          },
          d = (o.getAllTweens = function (e) {
            return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e));
          });
        (o.killAll = function (t, i, n, r) {
          null == i && (i = !0), null == n && (n = !0);
          var o,
            s,
            a,
            l = d(0 != r),
            h = l.length,
            u = i && n && r;
          for (a = 0; h > a; a++) (s = l[a]), (u || s instanceof e || ((o = s.target === s.vars.onComplete) && n) || (i && !o)) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1));
        }),
          (o.killChildTweensOf = function (t, e) {
            if (null != t) {
              var r,
                s,
                u,
                c,
                f,
                d = a.tweenLookup;
              if (("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t))) for (c = t.length; --c > -1; ) o.killChildTweensOf(t[c], e);
              else {
                for (u in ((r = []), d)) for (s = d[u].target.parentNode; s; ) s === t && (r = r.concat(d[u].tweens)), (s = s.parentNode);
                for (f = r.length, c = 0; f > c; c++) e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1);
              }
            }
          });
        var p = function (t, i, n, r) {
          (i = !1 !== i), (n = !1 !== n);
          for (var o, s, a = d((r = !1 !== r)), l = i && n && r, h = a.length; --h > -1; ) (s = a[h]), (l || s instanceof e || ((o = s.target === s.vars.onComplete) && n) || (i && !o)) && s.paused(t);
        };
        return (
          (o.pauseAll = function (t, e, i) {
            p(!0, t, e, i);
          }),
          (o.resumeAll = function (t, e, i) {
            p(!1, t, e, i);
          }),
          (o.globalTimeScale = function (e) {
            var n = t._rootTimeline,
              r = i.ticker.time;
            return arguments.length
              ? ((e = e || s),
                (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
                (n = t._rootFramesTimeline),
                (r = i.ticker.frame),
                (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
                (n._timeScale = t._rootTimeline._timeScale = e),
                e)
              : n._timeScale;
          }),
          (u.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
          }),
          (u.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
          }),
          (u.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (u.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
          }),
          (u.totalDuration = function (t) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
              : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
          }),
          (u.repeat = function (t) {
            return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
          }),
          (u.repeatDelay = function (t) {
            return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
          }),
          (u.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          o
        );
      },
      !0
    ),
      _gsScope._gsDefine(
        "TimelineLite",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (t, e, i) {
          var n = function (t) {
              e.call(this, t),
                (this._labels = {}),
                (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                (this._sortChildren = !0),
                (this._onUpdate = this.vars.onUpdate);
              var i,
                n,
                r = this.vars;
              for (n in r) (i = r[n]), l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
              l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
            },
            r = 1e-10,
            o = i._internals,
            s = (n._internals = {}),
            a = o.isSelector,
            l = o.isArray,
            h = o.lazyTweens,
            u = o.lazyRender,
            c = _gsScope._gsDefine.globals,
            f = function (t) {
              var e,
                i = {};
              for (e in t) i[e] = t[e];
              return i;
            },
            d = function (t, e, i) {
              var n,
                r,
                o = t.cycle;
              for (n in o) (r = o[n]), (t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length]);
              delete t.cycle;
            },
            p = (s.pauseCallback = function () {}),
            m = function (t) {
              var e,
                i = [],
                n = t.length;
              for (e = 0; e !== n; i.push(t[e++]));
              return i;
            },
            g = (n.prototype = new e());
          return (
            (n.version = "1.19.0"),
            (g.constructor = n),
            (g.kill()._gc = g._forcingPlayhead = g._hasPause = !1),
            (g.to = function (t, e, n, r) {
              var o = (n.repeat && c.TweenMax) || i;
              return e ? this.add(new o(t, e, n), r) : this.set(t, n, r);
            }),
            (g.from = function (t, e, n, r) {
              return this.add(((n.repeat && c.TweenMax) || i).from(t, e, n), r);
            }),
            (g.fromTo = function (t, e, n, r, o) {
              var s = (r.repeat && c.TweenMax) || i;
              return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o);
            }),
            (g.staggerTo = function (t, e, r, o, s, l, h, u) {
              var c,
                p,
                g = new n({ onComplete: l, onCompleteParams: h, callbackScope: u, smoothChildTiming: this.smoothChildTiming }),
                v = r.cycle;
              for ("string" == typeof t && (t = i.selector(t) || t), a((t = t || [])) && (t = m(t)), 0 > (o = o || 0) && ((t = m(t)).reverse(), (o *= -1)), p = 0; p < t.length; p++)
                (c = f(r)).startAt && ((c.startAt = f(c.startAt)), c.startAt.cycle && d(c.startAt, t, p)), v && (d(c, t, p), null != c.duration && ((e = c.duration), delete c.duration)), g.to(t[p], e, c, p * o);
              return this.add(g, s);
            }),
            (g.staggerFrom = function (t, e, i, n, r, o, s, a) {
              return (i.immediateRender = 0 != i.immediateRender), (i.runBackwards = !0), this.staggerTo(t, e, i, n, r, o, s, a);
            }),
            (g.staggerFromTo = function (t, e, i, n, r, o, s, a, l) {
              return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), this.staggerTo(t, e, n, r, o, s, a, l);
            }),
            (g.call = function (t, e, n, r) {
              return this.add(i.delayedCall(0, t, e, n), r);
            }),
            (g.set = function (t, e, n) {
              return (n = this._parseTimeOrLabel(n, 0, !0)), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n);
            }),
            (n.exportRoot = function (t, e) {
              null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
              var r,
                o,
                s = new n(t),
                a = s._timeline;
              for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r; )
                (o = r._next), (e && r instanceof i && r.target === r.vars.onComplete) || s.add(r, r._startTime - r._delay), (r = o);
              return a.add(s, 0), s;
            }),
            (g.add = function (r, o, s, a) {
              var h, u, c, f, d, p;
              if (("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t))) {
                if (r instanceof Array || (r && r.push && l(r))) {
                  for (s = s || "normal", a = a || 0, h = o, u = r.length, c = 0; u > c; c++)
                    l((f = r[c])) && (f = new n({ tweens: f })),
                      this.add(f, h),
                      "string" != typeof f && "function" != typeof f && ("sequence" === s ? (h = f._startTime + f.totalDuration() / f._timeScale) : "start" === s && (f._startTime -= f.delay())),
                      (h += a);
                  return this._uncache(!0);
                }
                if ("string" == typeof r) return this.addLabel(r, o);
                if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r);
              }
              if ((e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))
                for (p = (d = this).rawTime() > r._startTime; d._timeline; ) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), (d = d._timeline);
              return this;
            }),
            (g.remove = function (e) {
              if (e instanceof t) {
                this._remove(e, !1);
                var i = (e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline);
                return (e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale), this;
              }
              if (e instanceof Array || (e && e.push && l(e))) {
                for (var n = e.length; --n > -1; ) this.remove(e[n]);
                return this;
              }
              return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
            }),
            (g._remove = function (t, i) {
              e.prototype._remove.call(this, t, i);
              var n = this._last;
              return (
                n ? this._time > n._startTime + n._totalDuration / n._timeScale && ((this._time = this.duration()), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0), this
              );
            }),
            (g.append = function (t, e) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
            }),
            (g.insert = g.insertMultiple = function (t, e, i, n) {
              return this.add(t, e || 0, i, n);
            }),
            (g.appendMultiple = function (t, e, i, n) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
            }),
            (g.addLabel = function (t, e) {
              return (this._labels[t] = this._parseTimeOrLabel(e)), this;
            }),
            (g.addPause = function (t, e, n, r) {
              var o = i.delayedCall(0, p, n, r || this);
              return (o.vars.onComplete = o.vars.onReverseComplete = e), (o.data = "isPause"), (this._hasPause = !0), this.add(o, t);
            }),
            (g.removeLabel = function (t) {
              return delete this._labels[t], this;
            }),
            (g.getLabelTime = function (t) {
              return null != this._labels[t] ? this._labels[t] : -1;
            }),
            (g._parseTimeOrLabel = function (e, i, n, r) {
              var o;
              if (r instanceof t && r.timeline === this) this.remove(r);
              else if (r && (r instanceof Array || (r.push && l(r)))) for (o = r.length; --o > -1; ) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
              if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
              if (((i = i || 0), "string" != typeof e || (!isNaN(e) && null == this._labels[e]))) null == e && (e = this.duration());
              else {
                if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? (n ? (this._labels[e] = this.duration() + i) : i) : this._labels[e] + i;
                (i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1))), (e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration());
              }
              return Number(e) + i;
            }),
            (g.seek = function (t, e) {
              return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e);
            }),
            (g.stop = function () {
              return this.paused(!0);
            }),
            (g.gotoAndPlay = function (t, e) {
              return this.play(t, e);
            }),
            (g.gotoAndStop = function (t, e) {
              return this.pause(t, e);
            }),
            (g.render = function (t, e, i) {
              this._gc && this._enabled(!0, !1);
              var n,
                o,
                s,
                a,
                l,
                c,
                f,
                d = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                m = this._startTime,
                g = this._timeScale,
                v = this._paused;
              if (t >= d - 1e-7)
                (this._totalTime = this._time = d),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((o = !0),
                    (a = "onComplete"),
                    (l = !!this._timeline.autoRemoveChildren),
                    0 === this._duration && ((0 >= t && t >= -1e-7) || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && ((l = !0), this._rawPrevTime > r && (a = "onReverseComplete"))),
                  (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r),
                  (t = d + 1e-4);
              else if (1e-7 > t)
                if (
                  ((this._totalTime = this._time = 0),
                  (0 !== p || (0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || (0 > t && this._rawPrevTime >= 0)))) && ((a = "onReverseComplete"), (o = this._reversed)),
                  0 > t)
                )
                  (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((l = o = !0), (a = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (l = !0), (this._rawPrevTime = t);
                else {
                  if (((this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r), 0 === t && o)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (o = !1), (n = n._next);
                  (t = 0), this._initted || (l = !0);
                }
              else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                  if (t >= p) for (n = this._first; n && n._startTime <= t && !c; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (c = n), (n = n._next);
                  else for (n = this._last; n && n._startTime >= t && !c; ) n._duration || ("isPause" === n.data && n._rawPrevTime > 0 && (c = n)), (n = n._prev);
                  c && ((this._time = t = c._startTime), (this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
                }
                this._totalTime = this._time = this._rawPrevTime = t;
              }
              if ((this._time !== p && this._first) || i || l || c) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active || (!this._paused && this._time !== p && t > 0 && (this._active = !0)),
                  0 === p && this.vars.onStart && ((0 === this._time && this._duration) || e || this._callback("onStart")),
                  (f = this._time) >= p)
                )
                  for (n = this._first; n && ((s = n._next), f === this._time && (!this._paused || v)); )
                    (n._active || (n._startTime <= f && !n._paused && !n._gc)) &&
                      (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                      (n = s);
                else
                  for (n = this._last; n && ((s = n._prev), f === this._time && (!this._paused || v)); ) {
                    if (n._active || (n._startTime <= p && !n._paused && !n._gc)) {
                      if (c === n) {
                        for (c = n._prev; c && c.endTime() > this._time; ) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), (c = c._prev);
                        (c = null), this.pause();
                      }
                      n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i);
                    }
                    n = s;
                  }
                this._onUpdate && (e || (h.length && u(), this._callback("onUpdate"))),
                  a &&
                    (this._gc ||
                      ((m === this._startTime || g !== this._timeScale) &&
                        (0 === this._time || d >= this.totalDuration()) &&
                        (o && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[a] && this._callback(a))));
              }
            }),
            (g._hasPausedChild = function () {
              for (var t = this._first; t; ) {
                if (t._paused || (t instanceof n && t._hasPausedChild())) return !0;
                t = t._next;
              }
              return !1;
            }),
            (g.getChildren = function (t, e, n, r) {
              r = r || -9999999999;
              for (var o = [], s = this._first, a = 0; s; ) s._startTime < r || (s instanceof i ? !1 !== e && (o[a++] = s) : (!1 !== n && (o[a++] = s), !1 !== t && (a = (o = o.concat(s.getChildren(!0, e, n))).length))), (s = s._next);
              return o;
            }),
            (g.getTweensOf = function (t, e) {
              var n,
                r,
                o = this._gc,
                s = [],
                a = 0;
              for (o && this._enabled(!0, !0), r = (n = i.getTweensOf(t)).length; --r > -1; ) (n[r].timeline === this || (e && this._contains(n[r]))) && (s[a++] = n[r]);
              return o && this._enabled(!1, !0), s;
            }),
            (g.recent = function () {
              return this._recent;
            }),
            (g._contains = function (t) {
              for (var e = t.timeline; e; ) {
                if (e === this) return !0;
                e = e.timeline;
              }
              return !1;
            }),
            (g.shiftChildren = function (t, e, i) {
              i = i || 0;
              for (var n, r = this._first, o = this._labels; r; ) r._startTime >= i && (r._startTime += t), (r = r._next);
              if (e) for (n in o) o[n] >= i && (o[n] += t);
              return this._uncache(!0);
            }),
            (g._kill = function (t, e) {
              if (!t && !e) return this._enabled(!1, !1);
              for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; ) i[n]._kill(t, e) && (r = !0);
              return r;
            }),
            (g.clear = function (t) {
              var e = this.getChildren(!1, !0, !0),
                i = e.length;
              for (this._time = this._totalTime = 0; --i > -1; ) e[i]._enabled(!1, !1);
              return !1 !== t && (this._labels = {}), this._uncache(!0);
            }),
            (g.invalidate = function () {
              for (var e = this._first; e; ) e.invalidate(), (e = e._next);
              return t.prototype.invalidate.call(this);
            }),
            (g._enabled = function (t, i) {
              if (t === this._gc) for (var n = this._first; n; ) n._enabled(t, !0), (n = n._next);
              return e.prototype._enabled.call(this, t, i);
            }),
            (g.totalTime = function (e, i, n) {
              this._forcingPlayhead = !0;
              var r = t.prototype.totalTime.apply(this, arguments);
              return (this._forcingPlayhead = !1), r;
            }),
            (g.duration = function (t) {
              return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
            }),
            (g.totalDuration = function (t) {
              if (!arguments.length) {
                if (this._dirty) {
                  for (var e, i, n = 0, r = this._last, o = 999999999999; r; )
                    (e = r._prev),
                      r._dirty && r.totalDuration(),
                      r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : (o = r._startTime),
                      r._startTime < 0 && !r._paused && ((n -= r._startTime), this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), (o = 0)),
                      (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i),
                      (r = e);
                  (this._duration = this._totalDuration = n), (this._dirty = !1);
                }
                return this._totalDuration;
              }
              return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
            }),
            (g.paused = function (e) {
              if (!e) for (var i = this._first, n = this._time; i; ) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), (i = i._next);
              return t.prototype.paused.apply(this, arguments);
            }),
            (g.usesFrames = function () {
              for (var e = this._timeline; e._timeline; ) e = e._timeline;
              return e === t._rootFramesTimeline;
            }),
            (g.rawTime = function () {
              return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
            }),
            n
          );
        },
        !0
      ),
      _gsScope._gsDefine(
        "TimelineMax",
        ["TimelineLite", "TweenLite", "easing.Ease"],
        function (t, e, i) {
          var n = function (e) {
              t.call(this, e), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = !0 === this.vars.yoyo), (this._dirty = !0);
            },
            r = 1e-10,
            o = e._internals,
            s = o.lazyTweens,
            a = o.lazyRender,
            l = _gsScope._gsDefine.globals,
            h = new i(null, null, 1, 0),
            u = (n.prototype = new t());
          return (
            (u.constructor = n),
            (u.kill()._gc = !1),
            (n.version = "1.19.0"),
            (u.invalidate = function () {
              return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), t.prototype.invalidate.call(this);
            }),
            (u.addCallback = function (t, i, n, r) {
              return this.add(e.delayedCall(0, t, n, r), i);
            }),
            (u.removeCallback = function (t, e) {
              if (t)
                if (null == e) this._kill(null, t);
                else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1; ) i[n]._startTime === r && i[n]._enabled(!1, !1);
              return this;
            }),
            (u.removePause = function (e) {
              return this.removeCallback(t._internals.pauseCallback, e);
            }),
            (u.tweenTo = function (t, i) {
              i = i || {};
              var n,
                r,
                o,
                s = { ease: h, useFrames: this.usesFrames(), immediateRender: !1 },
                a = (i.repeat && l.TweenMax) || e;
              for (r in i) s[r] = i[r];
              return (
                (s.time = this._parseTimeOrLabel(t)),
                (n = Math.abs(Number(s.time) - this._time) / this._timeScale || 0.001),
                (o = new a(this, n, s)),
                (s.onStart = function () {
                  o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && o._callback("onStart");
                }),
                o
              );
            }),
            (u.tweenFromTo = function (t, e, i) {
              (i = i || {}), (t = this._parseTimeOrLabel(t)), (i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }), (i.immediateRender = !1 !== i.immediateRender);
              var n = this.tweenTo(e, i);
              return n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001);
            }),
            (u.render = function (t, e, i) {
              this._gc && this._enabled(!0, !1);
              var n,
                o,
                l,
                h,
                u,
                c,
                f,
                d,
                p = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._duration,
                g = this._time,
                v = this._totalTime,
                y = this._startTime,
                _ = this._timeScale,
                b = this._rawPrevTime,
                x = this._paused,
                T = this._cycle;
              if (t >= p - 1e-7)
                this._locked || ((this._totalTime = p), (this._cycle = this._repeat)),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((o = !0), (h = "onComplete"), (u = !!this._timeline.autoRemoveChildren), 0 === this._duration && ((0 >= t && t >= -1e-7) || 0 > b || b === r) && b !== t && this._first && ((u = !0), b > r && (h = "onReverseComplete"))),
                  (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r),
                  this._yoyo && 0 != (1 & this._cycle) ? (this._time = t = 0) : ((this._time = m), (t = m + 1e-4));
              else if (1e-7 > t)
                if ((this._locked || (this._totalTime = this._cycle = 0), (this._time = 0), (0 !== g || (0 === m && b !== r && (b > 0 || (0 > t && b >= 0)) && !this._locked)) && ((h = "onReverseComplete"), (o = this._reversed)), 0 > t))
                  (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((u = o = !0), (h = "onReverseComplete")) : b >= 0 && this._first && (u = !0), (this._rawPrevTime = t);
                else {
                  if (((this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r), 0 === t && o)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (o = !1), (n = n._next);
                  (t = 0), this._initted || (u = !0);
                }
              else if (
                (0 === m && 0 > b && (u = !0),
                (this._time = this._rawPrevTime = t),
                this._locked ||
                  ((this._totalTime = t),
                  0 !== this._repeat &&
                    ((c = m + this._repeatDelay),
                    (this._cycle = (this._totalTime / c) >> 0),
                    0 !== this._cycle && this._cycle === this._totalTime / c && t >= v && this._cycle--,
                    (this._time = this._totalTime - this._cycle * c),
                    this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time),
                    this._time > m ? ((this._time = m), (t = m + 1e-4)) : this._time < 0 ? (this._time = t = 0) : (t = this._time))),
                this._hasPause && !this._forcingPlayhead && !e)
              ) {
                if ((t = this._time) >= g) for (n = this._first; n && n._startTime <= t && !f; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (f = n), (n = n._next);
                else for (n = this._last; n && n._startTime >= t && !f; ) n._duration || ("isPause" === n.data && n._rawPrevTime > 0 && (f = n)), (n = n._prev);
                f && ((this._time = t = f._startTime), (this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              if (this._cycle !== T && !this._locked) {
                var w = this._yoyo && 0 != (1 & T),
                  S = w === (this._yoyo && 0 != (1 & this._cycle)),
                  C = this._totalTime,
                  E = this._cycle,
                  k = this._rawPrevTime,
                  A = this._time;
                if (
                  ((this._totalTime = T * m),
                  this._cycle < T ? (w = !w) : (this._totalTime += m),
                  (this._time = g),
                  (this._rawPrevTime = 0 === m ? b - 1e-4 : b),
                  (this._cycle = T),
                  (this._locked = !0),
                  (g = w ? 0 : m),
                  this.render(g, e, 0 === m),
                  e || this._gc || (this.vars.onRepeat && this._callback("onRepeat")),
                  g !== this._time)
                )
                  return;
                if ((S && ((g = w ? m + 1e-4 : -1e-4), this.render(g, !0, !1)), (this._locked = !1), this._paused && !x)) return;
                (this._time = A), (this._totalTime = C), (this._cycle = E), (this._rawPrevTime = k);
              }
              if ((this._time !== g && this._first) || i || u || f) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active || (!this._paused && this._totalTime !== v && t > 0 && (this._active = !0)),
                  0 === v && this.vars.onStart && ((0 === this._totalTime && this._totalDuration) || e || this._callback("onStart")),
                  (d = this._time) >= g)
                )
                  for (n = this._first; n && ((l = n._next), d === this._time && (!this._paused || x)); )
                    (n._active || (n._startTime <= this._time && !n._paused && !n._gc)) &&
                      (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                      (n = l);
                else
                  for (n = this._last; n && ((l = n._prev), d === this._time && (!this._paused || x)); ) {
                    if (n._active || (n._startTime <= g && !n._paused && !n._gc)) {
                      if (f === n) {
                        for (f = n._prev; f && f.endTime() > this._time; ) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), (f = f._prev);
                        (f = null), this.pause();
                      }
                      n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i);
                    }
                    n = l;
                  }
                this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))),
                  h &&
                    (this._locked ||
                      this._gc ||
                      ((y === this._startTime || _ !== this._timeScale) &&
                        (0 === this._time || p >= this.totalDuration()) &&
                        (o && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[h] && this._callback(h))));
              } else v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
            }),
            (u.getActive = function (t, e, i) {
              null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
              var n,
                r,
                o = [],
                s = this.getChildren(t, e, i),
                a = 0,
                l = s.length;
              for (n = 0; l > n; n++) (r = s[n]).isActive() && (o[a++] = r);
              return o;
            }),
            (u.getLabelAfter = function (t) {
              t || (0 !== t && (t = this._time));
              var e,
                i = this.getLabelsArray(),
                n = i.length;
              for (e = 0; n > e; e++) if (i[e].time > t) return i[e].name;
              return null;
            }),
            (u.getLabelBefore = function (t) {
              null == t && (t = this._time);
              for (var e = this.getLabelsArray(), i = e.length; --i > -1; ) if (e[i].time < t) return e[i].name;
              return null;
            }),
            (u.getLabelsArray = function () {
              var t,
                e = [],
                i = 0;
              for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
              return (
                e.sort(function (t, e) {
                  return t.time - e.time;
                }),
                e
              );
            }),
            (u.progress = function (t, e) {
              return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
            }),
            (u.totalProgress = function (t, e) {
              return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
            }),
            (u.totalDuration = function (e) {
              return arguments.length
                ? -1 !== this._repeat && e
                  ? this.timeScale(this.totalDuration() / e)
                  : this
                : (this._dirty && (t.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
            }),
            (u.time = function (t, e) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  t > this._duration && (t = this._duration),
                  this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                  this.totalTime(t, e))
                : this._time;
            }),
            (u.repeat = function (t) {
              return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
            }),
            (u.repeatDelay = function (t) {
              return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
            }),
            (u.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (u.currentLabel = function (t) {
              return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
            }),
            n
          );
        },
        !0
      ),
      (t = 180 / Math.PI),
      (e = []),
      (i = []),
      (n = []),
      (r = {}),
      (o = _gsScope._gsDefine.globals),
      (s = function (t, e, i, n) {
        i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), (this.a = t), (this.b = e), (this.c = i), (this.d = n), (this.da = n - t), (this.ca = i - t), (this.ba = e - t);
      }),
      (a = function (t, e, i, n) {
        var r = { a: t },
          o = {},
          s = {},
          a = { c: n },
          l = (t + e) / 2,
          h = (e + i) / 2,
          u = (i + n) / 2,
          c = (l + h) / 2,
          f = (h + u) / 2,
          d = (f - c) / 8;
        return (r.b = l + (t - l) / 4), (o.b = c + d), (r.c = o.a = (r.b + o.b) / 2), (o.c = s.a = (c + f) / 2), (s.b = f - d), (a.b = u + (n - u) / 4), (s.c = a.a = (s.b + a.b) / 2), [r, o, s, a];
      }),
      (l = function (t, r, o, s, l) {
        var h,
          u,
          c,
          f,
          d,
          p,
          m,
          g,
          v,
          y,
          _,
          b,
          x,
          T = t.length - 1,
          w = 0,
          S = t[0].a;
        for (h = 0; T > h; h++)
          (u = (d = t[w]).a),
            (c = d.d),
            (f = t[w + 1].d),
            l
              ? ((_ = e[h]),
                (x = (((b = i[h]) + _) * r * 0.25) / (s ? 0.5 : n[h] || 0.5)),
                (g = c - ((p = c - (c - u) * (s ? 0.5 * r : 0 !== _ ? x / _ : 0)) + ((((m = c + (f - c) * (s ? 0.5 * r : 0 !== b ? x / b : 0)) - p) * ((3 * _) / (_ + b) + 0.5)) / 4 || 0))))
              : (g = c - ((p = c - (c - u) * r * 0.5) + (m = c + (f - c) * r * 0.5)) / 2),
            (p += g),
            (m += g),
            (d.c = v = p),
            (d.b = 0 !== h ? S : (S = d.a + 0.6 * (d.c - d.a))),
            (d.da = c - u),
            (d.ca = v - u),
            (d.ba = S - u),
            o ? ((y = a(u, S, v, c)), t.splice(w, 1, y[0], y[1], y[2], y[3]), (w += 4)) : w++,
            (S = m);
        ((d = t[w]).b = S), (d.c = S + 0.4 * (d.d - S)), (d.da = d.d - d.a), (d.ca = d.c - d.a), (d.ba = S - d.a), o && ((y = a(d.a, S, d.c, d.d)), t.splice(w, 1, y[0], y[1], y[2], y[3]));
      }),
      (h = function (t, n, r, o) {
        var a,
          l,
          h,
          u,
          c,
          f,
          d = [];
        if (o) for (l = (t = [o].concat(t)).length; --l > -1; ) "string" == typeof (f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
        if (0 > (a = t.length - 2)) return (d[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n])), d;
        for (l = 0; a > l; l++) (h = t[l][n]), (u = t[l + 1][n]), (d[l] = new s(h, 0, 0, u)), r && ((c = t[l + 2][n]), (e[l] = (e[l] || 0) + (u - h) * (u - h)), (i[l] = (i[l] || 0) + (c - u) * (c - u)));
        return (d[l] = new s(t[l][n], 0, 0, t[l + 1][n])), d;
      }),
      (u = function (t, o, s, a, u, c) {
        var f,
          d,
          p,
          m,
          g,
          v,
          y,
          _,
          b = {},
          x = [],
          T = c || t[0];
        for (d in ((u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
        null == o && (o = 1),
        t[0]))
          x.push(d);
        if (t.length > 1) {
          for (_ = t[t.length - 1], y = !0, f = x.length; --f > -1; )
            if (((d = x[f]), Math.abs(T[d] - _[d]) > 0.05)) {
              y = !1;
              break;
            }
          y && ((t = t.concat()), c && t.unshift(c), t.push(t[1]), (c = t[t.length - 3]));
        }
        for (e.length = i.length = n.length = 0, f = x.length; --f > -1; ) (d = x[f]), (r[d] = -1 !== u.indexOf("," + d + ",")), (b[d] = h(t, d, r[d], c));
        for (f = e.length; --f > -1; ) (e[f] = Math.sqrt(e[f])), (i[f] = Math.sqrt(i[f]));
        if (!a) {
          for (f = x.length; --f > -1; ) if (r[d]) for (v = (p = b[x[f]]).length - 1, m = 0; v > m; m++) (g = p[m + 1].da / i[m] + p[m].da / e[m] || 0), (n[m] = (n[m] || 0) + g * g);
          for (f = n.length; --f > -1; ) n[f] = Math.sqrt(n[f]);
        }
        for (f = x.length, m = s ? 4 : 1; --f > -1; ) (p = b[(d = x[f])]), l(p, o, s, a, r[d]), y && (p.splice(0, m), p.splice(p.length - m, m));
        return b;
      }),
      (c = function (t, e, i) {
        var n,
          r,
          o,
          a,
          l,
          h,
          u,
          c,
          f,
          d,
          p,
          m = {},
          g = "cubic" === (e = e || "soft") ? 3 : 2,
          v = "soft" === e,
          y = [];
        if ((v && i && (t = [i].concat(t)), null == t || t.length < g + 1)) throw "invalid Bezier data";
        for (f in t[0]) y.push(f);
        for (h = y.length; --h > -1; ) {
          for (m[(f = y[h])] = l = [], d = 0, c = t.length, u = 0; c > u; u++)
            (n = null == i ? t[u][f] : "string" == typeof (p = t[u][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p)), v && u > 1 && c - 1 > u && (l[d++] = (n + l[d - 2]) / 2), (l[d++] = n);
          for (c = d - g + 1, d = 0, u = 0; c > u; u += g) (n = l[u]), (r = l[u + 1]), (o = l[u + 2]), (a = 2 === g ? 0 : l[u + 3]), (l[d++] = p = 3 === g ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o));
          l.length = d;
        }
        return m;
      }),
      (f = function (t, e, i) {
        for (var n, r, o, s, a, l, h, u, c, f, d, p = 1 / i, m = t.length; --m > -1; )
          for (o = (f = t[m]).a, s = f.d - o, a = f.c - o, l = f.b - o, n = r = 0, u = 1; i >= u; u++) (n = r - (r = ((h = p * u) * h * s + 3 * (c = 1 - h) * (h * a + c * l)) * h)), (e[(d = m * i + u - 1)] = (e[d] || 0) + n * n);
      }),
      (d = function (t, e) {
        var i,
          n,
          r,
          o,
          s = [],
          a = [],
          l = 0,
          h = 0,
          u = (e = e >> 0 || 6) - 1,
          c = [],
          d = [];
        for (i in t) f(t[i], s, e);
        for (r = s.length, n = 0; r > n; n++) (l += Math.sqrt(s[n])), (d[(o = n % e)] = l), o === u && ((h += l), (c[(o = (n / e) >> 0)] = d), (a[o] = h), (l = 0), (d = []));
        return { length: h, lengths: a, segments: c };
      }),
      (p = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.7",
        API: 2,
        global: !0,
        init: function (t, e, i) {
          (this._target = t), e instanceof Array && (e = { values: e }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
          var n,
            r,
            o,
            s,
            a,
            l = e.values || [],
            h = {},
            f = l[0],
            p = e.autoRotate || i.vars.orientToBezier;
          for (n in ((this._autoRotate = p ? (p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]]) : null), f)) this._props.push(n);
          for (o = this._props.length; --o > -1; )
            (n = this._props[o]),
              this._overwriteProps.push(n),
              (r = this._func[n] = "function" == typeof t[n]),
              (h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n])),
              a || (h[n] !== l[0][n] && (a = h));
          if (
            ((this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : c(l, e.type, h)),
            (this._segCount = this._beziers[n].length),
            this._timeRes)
          ) {
            var m = d(this._beziers, this._timeRes);
            (this._length = m.length),
              (this._lengths = m.lengths),
              (this._segments = m.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length);
          }
          if ((p = this._autoRotate))
            for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), o = p.length; --o > -1; ) {
              for (s = 0; 3 > s; s++) (n = p[o][s]), (this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]);
              (n = p[o][2]), (this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0), this._overwriteProps.push(n);
            }
          return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
        },
        set: function (e) {
          var i,
            n,
            r,
            o,
            s,
            a,
            l,
            h,
            u,
            c,
            f = this._segCount,
            d = this._func,
            p = this._target,
            m = e !== this._startRatio;
          if (this._timeRes) {
            if (((u = this._lengths), (c = this._curSeg), (e *= this._length), (r = this._li), e > this._l2 && f - 1 > r)) {
              for (h = f - 1; h > r && (this._l2 = u[++r]) <= e; );
              (this._l1 = u[r - 1]), (this._li = r), (this._curSeg = c = this._segments[r]), (this._s2 = c[(this._s1 = this._si = 0)]);
            } else if (e < this._l1 && r > 0) {
              for (; r > 0 && (this._l1 = u[--r]) >= e; );
              0 === r && e < this._l1 ? (this._l1 = 0) : r++, (this._l2 = u[r]), (this._li = r), (this._curSeg = c = this._segments[r]), (this._s1 = c[(this._si = c.length - 1) - 1] || 0), (this._s2 = c[this._si]);
            }
            if (((i = r), (e -= this._l1), (r = this._si), e > this._s2 && r < c.length - 1)) {
              for (h = c.length - 1; h > r && (this._s2 = c[++r]) <= e; );
              (this._s1 = c[r - 1]), (this._si = r);
            } else if (e < this._s1 && r > 0) {
              for (; r > 0 && (this._s1 = c[--r]) >= e; );
              0 === r && e < this._s1 ? (this._s1 = 0) : r++, (this._s2 = c[r]), (this._si = r);
            }
            a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
          } else a = (e - (i = 0 > e ? 0 : e >= 1 ? f - 1 : (f * e) >> 0) * (1 / f)) * f;
          for (n = 1 - a, r = this._props.length; --r > -1; )
            (o = this._props[r]), (l = (a * a * (s = this._beziers[o][i]).da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a), this._mod[o] && (l = this._mod[o](l, p)), d[o] ? p[o](l) : (p[o] = l);
          if (this._autoRotate) {
            var g,
              v,
              y,
              _,
              b,
              x,
              T,
              w = this._autoRotate;
            for (r = w.length; --r > -1; )
              (o = w[r][2]),
                (x = w[r][3] || 0),
                (T = !0 === w[r][4] ? 1 : t),
                (s = this._beziers[w[r][0]]),
                (g = this._beziers[w[r][1]]),
                s &&
                  g &&
                  ((s = s[i]),
                  (g = g[i]),
                  (v = s.a + (s.b - s.a) * a),
                  (v += ((_ = s.b + (s.c - s.b) * a) - v) * a),
                  (_ += (s.c + (s.d - s.c) * a - _) * a),
                  (y = g.a + (g.b - g.a) * a),
                  (y += ((b = g.b + (g.c - g.b) * a) - y) * a),
                  (b += (g.c + (g.d - g.c) * a - b) * a),
                  (l = m ? Math.atan2(b - y, _ - v) * T + x : this._initialRotations[r]),
                  this._mod[o] && (l = this._mod[o](l, p)),
                  d[o] ? p[o](l) : (p[o] = l));
          }
        },
      })),
      (m = p.prototype),
      (p.bezierThrough = u),
      (p.cubicToQuadratic = a),
      (p._autoCSS = !0),
      (p.quadraticToCubic = function (t, e, i) {
        return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
      }),
      (p._cssRegister = function () {
        var t = o.CSSPlugin;
        if (t) {
          var e = t._internals,
            i = e._parseToProxy,
            n = e._setPluginRatio,
            r = e.CSSPropTween;
          e._registerComplexSpecialProp("bezier", {
            parser: function (t, e, o, s, a, l) {
              e instanceof Array && (e = { values: e }), (l = new p());
              var h,
                u,
                c,
                f = e.values,
                d = f.length - 1,
                m = [],
                g = {};
              if (0 > d) return a;
              for (h = 0; d >= h; h++) (c = i(t, f[h], s, a, l, d !== h)), (m[h] = c.end);
              for (u in e) g[u] = e[u];
              return (
                (g.values = m),
                ((a = new r(t, "bezier", 0, 0, c.pt, 2)).data = c),
                (a.plugin = l),
                (a.setRatio = n),
                0 === g.autoRotate && (g.autoRotate = !0),
                !g.autoRotate ||
                  g.autoRotate instanceof Array ||
                  ((h = !0 === g.autoRotate ? 0 : Number(g.autoRotate)), (g.autoRotate = null != c.end.left ? [["left", "top", "rotation", h, !1]] : null != c.end.x && [["x", "y", "rotation", h, !1]])),
                g.autoRotate && (s._transform || s._enableTransforms(!1), (c.autoRotate = s._target._gsTransform), (c.proxy.rotation = c.autoRotate.rotation || 0), s._overwriteProps.push("rotation")),
                l._onInitTween(c.proxy, g, s._tween),
                a
              );
            },
          });
        }
      }),
      (m._mod = function (t) {
        for (var e, i = this._overwriteProps, n = i.length; --n > -1; ) (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e);
      }),
      (m._kill = function (t) {
        var e,
          i,
          n = this._props;
        for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1; ) n[i] === e && n.splice(i, 1);
        if ((n = this._autoRotate)) for (i = n.length; --i > -1; ) t[n[i][2]] && n.splice(i, 1);
        return this._super._kill.call(this, t);
      }),
      _gsScope._gsDefine(
        "plugins.CSSPlugin",
        ["plugins.TweenPlugin", "TweenLite"],
        function (t, e) {
          var i,
            n,
            r,
            o,
            s = function () {
              t.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = s.prototype.setRatio);
            },
            a = _gsScope._gsDefine.globals,
            l = {},
            h = (s.prototype = new t("css"));
          (h.constructor = s),
            (s.version = "1.19.0"),
            (s.API = 2),
            (s.defaultTransformPerspective = 0),
            (s.defaultSkewType = "compensated"),
            (s.defaultSmoothOrigin = !0),
            (h = "px"),
            (s.suffixMap = { top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: "" });
          var u,
            c,
            f,
            d,
            p,
            m,
            g,
            v,
            y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            T = /(?:\d|\-|\+|=|#|\.)*/g,
            w = /opacity *= *([^)]*)/i,
            S = /opacity:([^;]*)/i,
            C = /alpha\(opacity *=.+?\)/i,
            E = /^(rgb|hsl)/,
            k = /([A-Z])/g,
            A = /-([a-z])/gi,
            D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            P = function (t, e) {
              return e.toUpperCase();
            },
            I = /(?:Left|Right|Width)/i,
            O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            L = /,(?=[^\)]*(?:\(|$))/gi,
            R = /[\s,\(]/i,
            M = Math.PI / 180,
            z = 180 / Math.PI,
            j = {},
            F = document,
            W = function (t) {
              return F.createElementNS ? F.createElementNS("http://www.w3.org/1999/xhtml", t) : F.createElement(t);
            },
            H = W("div"),
            q = W("img"),
            B = (s._internals = { _specialProps: l }),
            $ = navigator.userAgent,
            Y = (function () {
              var t = $.indexOf("Android"),
                e = W("a");
              return (
                (f = -1 !== $.indexOf("Safari") && -1 === $.indexOf("Chrome") && (-1 === t || Number($.substr(t + 8, 1)) > 3)),
                (p = f && Number($.substr($.indexOf("Version/") + 8, 1)) < 6),
                (d = -1 !== $.indexOf("Firefox")),
                (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec($)) && (m = parseFloat(RegExp.$1)),
                !!e && ((e.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(e.style.opacity))
              );
            })(),
            U = function (t) {
              return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
            },
            X = function (t) {
              window.console && console.log(t);
            },
            V = "",
            Q = "",
            G = function (t, e) {
              var i,
                n,
                r = (e = e || H).style;
              if (void 0 !== r[t]) return t;
              for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t]; );
              return n >= 0 ? ((V = "-" + (Q = 3 === n ? "ms" : i[n]).toLowerCase() + "-"), Q + t) : null;
            },
            K = F.defaultView ? F.defaultView.getComputedStyle : function () {},
            Z = (s.getStyle = function (t, e, i, n, r) {
              var o;
              return Y || "opacity" !== e
                ? (!n && t.style[e] ? (o = t.style[e]) : (i = i || K(t)) ? (o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase())) : t.currentStyle && (o = t.currentStyle[e]),
                  null == r || (o && "none" !== o && "auto" !== o && "auto auto" !== o) ? o : r)
                : U(t);
            }),
            J = (B.convertToPixels = function (t, i, n, r, o) {
              if ("px" === r || !r) return n;
              if ("auto" === r || !n) return 0;
              var a,
                l,
                h,
                u = I.test(i),
                c = t,
                f = H.style,
                d = 0 > n,
                p = 1 === n;
              if ((d && (n = -n), p && (n *= 100), "%" === r && -1 !== i.indexOf("border"))) a = (n / 100) * (u ? t.clientWidth : t.clientHeight);
              else {
                if (((f.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;"), "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r)) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                else {
                  if (((l = (c = t.parentNode || F.body)._gsCache), (h = e.ticker.frame), l && u && l.time === h)) return (l.width * n) / 100;
                  f[u ? "width" : "height"] = n + r;
                }
                c.appendChild(H),
                  (a = parseFloat(H[u ? "offsetWidth" : "offsetHeight"])),
                  c.removeChild(H),
                  u && "%" === r && !1 !== s.cacheWidths && (((l = c._gsCache = c._gsCache || {}).time = h), (l.width = (a / n) * 100)),
                  0 !== a || o || (a = J(t, i, n, r, !0));
              }
              return p && (a /= 100), d ? -a : a;
            }),
            tt = (B.calculateOffset = function (t, e, i) {
              if ("absolute" !== Z(t, "position", i)) return 0;
              var n = "left" === e ? "Left" : "Top",
                r = Z(t, "margin" + n, i);
              return t["offset" + n] - (J(t, e, parseFloat(r), r.replace(T, "")) || 0);
            }),
            et = function (t, e) {
              var i,
                n,
                r,
                o = {};
              if ((e = e || K(t, null)))
                if ((i = e.length)) for (; --i > -1; ) (-1 === (r = e[i]).indexOf("-transform") || At === r) && (o[r.replace(A, P)] = e.getPropertyValue(r));
                else for (i in e) (-1 === i.indexOf("Transform") || kt === i) && (o[i] = e[i]);
              else if ((e = t.currentStyle || t.style)) for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(A, P)] = e[i]);
              return (
                Y || (o.opacity = U(t)),
                (n = Wt(t, e, !1)),
                (o.rotation = n.rotation),
                (o.skewX = n.skewX),
                (o.scaleX = n.scaleX),
                (o.scaleY = n.scaleY),
                (o.x = n.x),
                (o.y = n.y),
                Pt && ((o.z = n.z), (o.rotationX = n.rotationX), (o.rotationY = n.rotationY), (o.scaleZ = n.scaleZ)),
                o.filters && delete o.filters,
                o
              );
            },
            it = function (t, e, i, n, r) {
              var o,
                s,
                a,
                l = {},
                h = t.style;
              for (s in i)
                "cssText" !== s &&
                  "length" !== s &&
                  isNaN(s) &&
                  (e[s] !== (o = i[s]) || (r && r[s])) &&
                  -1 === s.indexOf("Origin") &&
                  ("number" == typeof o || "string" == typeof o) &&
                  ((l[s] = "auto" !== o || ("left" !== s && "top" !== s) ? (("" !== o && "auto" !== o && "none" !== o) || "string" != typeof e[s] || "" === e[s].replace(x, "") ? o : 0) : tt(t, s)),
                  void 0 !== h[s] && (a = new vt(h, s, h[s], a)));
              if (n) for (s in n) "className" !== s && (l[s] = n[s]);
              return { difs: l, firstMPT: a };
            },
            nt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ot = function (t, e, i) {
              if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0;
              if (t.getBBox && zt(t)) return t.getBBox()[e] || 0;
              var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                r = nt[e],
                o = r.length;
              for (i = i || K(t, null); --o > -1; ) (n -= parseFloat(Z(t, "padding" + r[o], i, !0)) || 0), (n -= parseFloat(Z(t, "border" + r[o] + "Width", i, !0)) || 0);
              return n;
            },
            st = function (t, e) {
              if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
              (null == t || "" === t) && (t = "0 0");
              var i,
                n = t.split(" "),
                r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
              if (n.length > 3 && !e) {
                for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(st(n[i]));
                return t.join(",");
              }
              return (
                null == o ? (o = "center" === r ? "50%" : "0") : "center" === o && (o = "50%"),
                ("center" === r || (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) && (r = "50%"),
                (t = r + " " + o + (n.length > 2 ? " " + n[2] : "")),
                e && ((e.oxp = -1 !== r.indexOf("%")), (e.oyp = -1 !== o.indexOf("%")), (e.oxr = "=" === r.charAt(1)), (e.oyr = "=" === o.charAt(1)), (e.ox = parseFloat(r.replace(x, ""))), (e.oy = parseFloat(o.replace(x, ""))), (e.v = t)),
                e || t
              );
            },
            at = function (t, e) {
              return "function" == typeof t && (t = t(v, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0;
            },
            lt = function (t, e) {
              return "function" == typeof t && (t = t(v, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0;
            },
            ht = function (t, e, i, n) {
              var r, o, s, a, l;
              return (
                "function" == typeof t && (t = t(v, g)),
                null == t
                  ? (a = e)
                  : "number" == typeof t
                  ? (a = t)
                  : ((r = 360),
                    (o = t.split("_")),
                    (s = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : z) - (l ? 0 : e)),
                    o.length &&
                      (n && (n[i] = e + s),
                      -1 !== t.indexOf("short") && (s %= r) !== s % 180 && (s = 0 > s ? s + r : s - r),
                      -1 !== t.indexOf("_cw") && 0 > s ? (s = ((s + 9999999999 * r) % r) - ((s / r) | 0) * r) : -1 !== t.indexOf("ccw") && s > 0 && (s = ((s - 9999999999 * r) % r) - ((s / r) | 0) * r)),
                    (a = e + s)),
                1e-6 > a && a > -1e-6 && (a = 0),
                a
              );
            },
            ut = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              fuchsia: [255, 0, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0],
            },
            ct = function (t, e, i) {
              return (255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : 0.5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
            },
            ft = (s.parseColor = function (t, e) {
              var i, n, r, o, s, a, l, h, u, c, f;
              if (t)
                if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
                else {
                  if (("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t])) i = ut[t];
                  else if ("#" === t.charAt(0)) 4 === t.length && ((n = t.charAt(1)), (r = t.charAt(2)), (o = t.charAt(3)), (t = "#" + n + n + r + r + o + o)), (i = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t]);
                  else if ("hsl" === t.substr(0, 3))
                    if (((i = f = t.match(y)), e)) {
                      if (-1 !== t.indexOf("=")) return t.match(_);
                    } else
                      (s = (Number(i[0]) % 360) / 360),
                        (a = Number(i[1]) / 100),
                        (n = 2 * (l = Number(i[2]) / 100) - (r = 0.5 >= l ? l * (a + 1) : l + a - l * a)),
                        i.length > 3 && (i[3] = Number(t[3])),
                        (i[0] = ct(s + 1 / 3, n, r)),
                        (i[1] = ct(s, n, r)),
                        (i[2] = ct(s - 1 / 3, n, r));
                  else i = t.match(y) || ut.transparent;
                  (i[0] = Number(i[0])), (i[1] = Number(i[1])), (i[2] = Number(i[2])), i.length > 3 && (i[3] = Number(i[3]));
                }
              else i = ut.black;
              return (
                e &&
                  !f &&
                  ((n = i[0] / 255),
                  (r = i[1] / 255),
                  (o = i[2] / 255),
                  (l = ((h = Math.max(n, r, o)) + (u = Math.min(n, r, o))) / 2),
                  h === u ? (s = a = 0) : ((c = h - u), (a = l > 0.5 ? c / (2 - h - u) : c / (h + u)), (s = h === n ? (r - o) / c + (o > r ? 6 : 0) : h === r ? (o - n) / c + 2 : (n - r) / c + 4), (s *= 60)),
                  (i[0] = (s + 0.5) | 0),
                  (i[1] = (100 * a + 0.5) | 0),
                  (i[2] = (100 * l + 0.5) | 0)),
                i
              );
            }),
            dt = function (t, e) {
              var i,
                n,
                r,
                o = t.match(pt) || [],
                s = 0,
                a = o.length ? "" : t;
              for (i = 0; i < o.length; i++)
                (n = o[i]), (s += (r = t.substr(s, t.indexOf(n, s) - s)).length + n.length), 3 === (n = ft(n, e)).length && n.push(1), (a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")");
              return a + t.substr(s);
            },
            pt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
          for (h in ut) pt += "|" + h + "\\b";
          (pt = new RegExp(pt + ")", "gi")),
            (s.colorStringFilter = function (t) {
              var e,
                i = t[0] + t[1];
              pt.test(i) && ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")), (t[0] = dt(t[0], e)), (t[1] = dt(t[1], e))), (pt.lastIndex = 0);
            }),
            e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
          var mt = function (t, e, i, n) {
              if (null == t)
                return function (t) {
                  return t;
                };
              var r,
                o = e ? (t.match(pt) || [""])[0] : "",
                s = t.split(o).join("").match(b) || [],
                a = t.substr(0, t.indexOf(s[0])),
                l = ")" === t.charAt(t.length - 1) ? ")" : "",
                h = -1 !== t.indexOf(" ") ? " " : ",",
                u = s.length,
                c = u > 0 ? s[0].replace(y, "") : "";
              return u
                ? (r = e
                    ? function (t) {
                        var e, f, d, p;
                        if ("number" == typeof t) t += c;
                        else if (n && L.test(t)) {
                          for (p = t.replace(L, "|").split("|"), d = 0; d < p.length; d++) p[d] = r(p[d]);
                          return p.join(",");
                        }
                        if (((e = (t.match(pt) || [o])[0]), (d = (f = t.split(e).join("").match(b) || []).length), u > d--)) for (; ++d < u; ) f[d] = i ? f[((d - 1) / 2) | 0] : s[d];
                        return a + f.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "");
                      }
                    : function (t) {
                        var e, o, f;
                        if ("number" == typeof t) t += c;
                        else if (n && L.test(t)) {
                          for (o = t.replace(L, "|").split("|"), f = 0; f < o.length; f++) o[f] = r(o[f]);
                          return o.join(",");
                        }
                        if (((f = (e = t.match(b) || []).length), u > f--)) for (; ++f < u; ) e[f] = i ? e[((f - 1) / 2) | 0] : s[f];
                        return a + e.join(h) + l;
                      })
                : function (t) {
                    return t;
                  };
            },
            gt = function (t) {
              return (
                (t = t.split(",")),
                function (e, i, n, r, o, s, a) {
                  var l,
                    h = (i + "").split(" ");
                  for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[((l - 1) / 2) >> 0];
                  return r.parse(e, a, o, s);
                }
              );
            },
            vt =
              ((B._setPluginRatio = function (t) {
                this.plugin.setRatio(t);
                for (var e, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l; ) (e = a[l.v]), l.r ? (e = Math.round(e)) : 1e-6 > e && e > -1e-6 && (e = 0), (l.t[l.p] = e), (l = l._next);
                if ((s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t))
                  for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l; ) {
                    if ((i = l.t).type) {
                      if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                        i[o] = r;
                      }
                    } else i[o] = i.s + i.xs0;
                    l = l._next;
                  }
              }),
              function (t, e, i, n, r) {
                (this.t = t), (this.p = e), (this.v = i), (this.r = r), n && ((n._prev = this), (this._next = n));
              }),
            yt =
              ((B._parseToProxy = function (t, e, i, n, r, o) {
                var s,
                  a,
                  l,
                  h,
                  u,
                  c = n,
                  f = {},
                  d = {},
                  p = i._transform,
                  m = j;
                for (i._transform = null, j = e, n = u = i.parse(t, e, n, r), j = m, o && ((i._transform = p), c && ((c._prev = null), c._prev && (c._prev._next = null))); n && n !== c; ) {
                  if (n.type <= 1 && ((d[(a = n.p)] = n.s + n.c), (f[a] = n.s), o || ((h = new vt(n, "s", a, h, n.r)), (n.c = 0)), 1 === n.type))
                    for (s = n.l; --s > 0; ) (l = "xn" + s), (d[(a = n.p + "_" + l)] = n.data[l]), (f[a] = n[l]), o || (h = new vt(n, l, a, h, n.rxp[l]));
                  n = n._next;
                }
                return { proxy: f, end: d, firstMPT: h, pt: u };
              }),
              (B.CSSPropTween = function (t, e, n, r, s, a, l, h, u, c, f) {
                (this.t = t),
                  (this.p = e),
                  (this.s = n),
                  (this.c = r),
                  (this.n = l || e),
                  t instanceof yt || o.push(this.n),
                  (this.r = h),
                  (this.type = a || 0),
                  u && ((this.pr = u), (i = !0)),
                  (this.b = void 0 === c ? n : c),
                  (this.e = void 0 === f ? n + r : f),
                  s && ((this._next = s), (s._prev = this));
              })),
            _t = function (t, e, i, n, r, o) {
              var s = new yt(t, e, i, n - i, r, -1, o);
              return (s.b = i), (s.e = s.xs0 = n), s;
            },
            bt = (s.parseComplex = function (t, e, i, n, r, o, a, l, h, c) {
              (i = i || o || ""), "function" == typeof n && (n = n(v, g)), (a = new yt(t, e, 0, 0, a, c ? 2 : 1, null, !1, l, i, n)), (n += ""), r && pt.test(n + i) && ((n = [i, n]), s.colorStringFilter(n), (i = n[0]), (n = n[1]));
              var f,
                d,
                p,
                m,
                b,
                x,
                T,
                w,
                S,
                C,
                E,
                k,
                A,
                D = i.split(", ").join(",").split(" "),
                P = n.split(", ").join(",").split(" "),
                I = D.length,
                O = !1 !== u;
              for (
                (-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && ((D = D.join(" ").replace(L, ", ").split(" ")), (P = P.join(" ").replace(L, ", ").split(" ")), (I = D.length)),
                  I !== P.length && (I = (D = (o || "").split(" ")).length),
                  a.plugin = h,
                  a.setRatio = c,
                  pt.lastIndex = 0,
                  f = 0;
                I > f;
                f++
              )
                if (((m = D[f]), (b = P[f]), (w = parseFloat(m)) || 0 === w)) a.appendXtra("", w, at(b, w), b.replace(_, ""), O && -1 !== b.indexOf("px"), !0);
                else if (r && pt.test(m))
                  (k = ")" + ((k = b.indexOf(")") + 1) ? b.substr(k) : "")),
                    (A = -1 !== b.indexOf("hsl") && Y),
                    (m = ft(m, A)),
                    (b = ft(b, A)),
                    (S = m.length + b.length > 6) && !Y && 0 === b[3]
                      ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"), (a.e = a.e.split(P[f]).join("transparent")))
                      : (Y || (S = !1),
                        A
                          ? a
                              .appendXtra(S ? "hsla(" : "hsl(", m[0], at(b[0], m[0]), ",", !1, !0)
                              .appendXtra("", m[1], at(b[1], m[1]), "%,", !1)
                              .appendXtra("", m[2], at(b[2], m[2]), S ? "%," : "%" + k, !1)
                          : a
                              .appendXtra(S ? "rgba(" : "rgb(", m[0], b[0] - m[0], ",", !0, !0)
                              .appendXtra("", m[1], b[1] - m[1], ",", !0)
                              .appendXtra("", m[2], b[2] - m[2], S ? "," : k, !0),
                        S && ((m = m.length < 4 ? 1 : m[3]), a.appendXtra("", m, (b.length < 4 ? 1 : b[3]) - m, k, !1))),
                    (pt.lastIndex = 0);
                else if ((x = m.match(y))) {
                  if (!(T = b.match(_)) || T.length !== x.length) return a;
                  for (p = 0, d = 0; d < x.length; d++) (E = x[d]), (C = m.indexOf(E, p)), a.appendXtra(m.substr(p, C - p), Number(E), at(T[d], E), "", O && "px" === m.substr(C + E.length, 2), 0 === d), (p = C + E.length);
                  a["xs" + a.l] += m.substr(p);
                } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
              if (-1 !== n.indexOf("=") && a.data) {
                for (k = a.xs0 + a.data.s, f = 1; f < a.l; f++) k += a["xs" + f] + a.data["xn" + f];
                a.e = k + a["xs" + f];
              }
              return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
            }),
            xt = 9;
          for ((h = yt.prototype).l = h.pr = 0; --xt > 0; ) (h["xn" + xt] = 0), (h["xs" + xt] = "");
          (h.xs0 = ""),
            (h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null),
            (h.appendXtra = function (t, e, i, n, r, o) {
              var s = this,
                a = s.l;
              return (
                (s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || ""),
                i || 0 === a || s.plugin
                  ? (s.l++,
                    (s.type = s.setRatio ? 2 : 1),
                    (s["xs" + s.l] = n || ""),
                    a > 0
                      ? ((s.data["xn" + a] = e + i), (s.rxp["xn" + a] = r), (s["xn" + a] = e), s.plugin || ((s.xfirst = new yt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr)), (s.xfirst.xs0 = 0)), s)
                      : ((s.data = { s: e + i }), (s.rxp = {}), (s.s = e), (s.c = i), (s.r = r), s))
                  : ((s["xs" + a] += e + (n || "")), s)
              );
            });
          var Tt = function (t, e) {
              (e = e || {}),
                (this.p = (e.prefix && G(t)) || t),
                (l[t] = l[this.p] = this),
                (this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi)),
                e.parser && (this.parse = e.parser),
                (this.clrs = e.color),
                (this.multi = e.multi),
                (this.keyword = e.keyword),
                (this.dflt = e.defaultValue),
                (this.pr = e.priority || 0);
            },
            wt = (B._registerComplexSpecialProp = function (t, e, i) {
              "object" != typeof e && (e = { parser: i });
              var n,
                r = t.split(","),
                o = e.defaultValue;
              for (i = i || [o], n = 0; n < r.length; n++) (e.prefix = 0 === n && e.prefix), (e.defaultValue = i[n] || o), new Tt(r[n], e);
            }),
            St = (B._registerPluginProp = function (t) {
              if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                wt(t, {
                  parser: function (t, i, n, r, o, s, h) {
                    var u = a.com.greensock.plugins[e];
                    return u ? (u._cssRegister(), l[n].parse(t, i, n, r, o, s, h)) : (X("Error: " + e + " js file not loaded."), o);
                  },
                });
              }
            });
          ((h = Tt.prototype).parseComplex = function (t, e, i, n, r, o) {
            var s,
              a,
              l,
              h,
              u,
              c,
              f = this.keyword;
            if ((this.multi && (L.test(i) || L.test(e) ? ((a = e.replace(L, "|").split("|")), (l = i.replace(L, "|").split("|"))) : f && ((a = [e]), (l = [i]))), l)) {
              for (h = l.length > a.length ? l.length : a.length, s = 0; h > s; s++)
                (e = a[s] = a[s] || this.dflt), (i = l[s] = l[s] || this.dflt), f && (u = e.indexOf(f)) !== (c = i.indexOf(f)) && (-1 === c ? (a[s] = a[s].split(f).join("")) : -1 === u && (a[s] += " " + f));
              (e = a.join(", ")), (i = l.join(", "));
            }
            return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o);
          }),
            (h.parse = function (t, e, i, n, o, s, a) {
              return this.parseComplex(t.style, this.format(Z(t, this.p, r, !1, this.dflt)), this.format(e), o, s);
            }),
            (s.registerSpecialProp = function (t, e, i) {
              wt(t, {
                parser: function (t, n, r, o, s, a, l) {
                  var h = new yt(t, r, 0, 0, s, 2, r, !1, i);
                  return (h.plugin = a), (h.setRatio = e(t, n, o._tween, r)), h;
                },
                priority: i,
              });
            }),
            (s.useSVGTransformAttr = f || d);
          var Ct,
            Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            kt = G("transform"),
            At = V + "transform",
            Dt = G("transformOrigin"),
            Pt = null !== G("perspective"),
            It = (B.Transform = function () {
              (this.perspective = parseFloat(s.defaultTransformPerspective) || 0), (this.force3D = !(!1 === s.defaultForce3D || !Pt) && (s.defaultForce3D || "auto"));
            }),
            Ot = window.SVGElement,
            Nt = function (t, e, i) {
              var n,
                r = F.createElementNS("http://www.w3.org/2000/svg", t),
                o = /([a-z])([A-Z])/g;
              for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
              return e.appendChild(r), r;
            },
            Lt = F.documentElement,
            Rt = (function () {
              var t,
                e,
                i,
                n = m || (/Android/i.test($) && !window.chrome);
              return (
                F.createElementNS &&
                  !n &&
                  ((t = Nt("svg", Lt)),
                  (i = (e = Nt("rect", t, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                  (e.style[Dt] = "50% 50%"),
                  (e.style[kt] = "scaleX(0.5)"),
                  (n = i === e.getBoundingClientRect().width && !(d && Pt)),
                  Lt.removeChild(t)),
                n
              );
            })(),
            Mt = function (t, e, i, n, r, o) {
              var a,
                l,
                h,
                u,
                c,
                f,
                d,
                p,
                m,
                g,
                v,
                y,
                _,
                b,
                x = t._gsTransform,
                T = Ft(t, !0);
              x && ((_ = x.xOrigin), (b = x.yOrigin)),
                (!n || (a = n.split(" ")).length < 2) &&
                  ((d = t.getBBox()),
                  (a = [(-1 !== (e = st(e).split(" "))[0].indexOf("%") ? (parseFloat(e[0]) / 100) * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? (parseFloat(e[1]) / 100) * d.height : parseFloat(e[1])) + d.y])),
                (i.xOrigin = u = parseFloat(a[0])),
                (i.yOrigin = c = parseFloat(a[1])),
                n &&
                  T !== jt &&
                  ((f = T[0]),
                  (d = T[1]),
                  (p = T[2]),
                  (m = T[3]),
                  (g = T[4]),
                  (l = u * (m / (y = f * m - d * p)) + c * (-p / y) + (p * (v = T[5]) - m * g) / y),
                  (h = u * (-d / y) + c * (f / y) - (f * v - d * g) / y),
                  (u = i.xOrigin = a[0] = l),
                  (c = i.yOrigin = a[1] = h)),
                x &&
                  (o && ((i.xOffset = x.xOffset), (i.yOffset = x.yOffset), (x = i)),
                  r || (!1 !== r && !1 !== s.defaultSmoothOrigin) ? ((l = u - _), (h = c - b), (x.xOffset += l * T[0] + h * T[2] - l), (x.yOffset += l * T[1] + h * T[3] - h)) : (x.xOffset = x.yOffset = 0)),
                o || t.setAttribute("data-svg-origin", a.join(" "));
            },
            zt = function (t) {
              return !!(
                Ot &&
                t.getBBox &&
                t.getCTM &&
                (function (t) {
                  try {
                    return t.getBBox();
                  } catch (t) {}
                })(t) &&
                (!t.parentNode || (t.parentNode.getBBox && t.parentNode.getCTM))
              );
            },
            jt = [1, 0, 0, 1, 0, 0],
            Ft = function (t, e) {
              var i,
                n,
                r,
                o,
                s,
                a,
                l = t._gsTransform || new It(),
                h = t.style;
              if (
                (kt
                  ? (n = Z(t, At, null, !0))
                  : t.currentStyle && (n = (n = t.currentStyle.filter.match(O)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
                (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n) &&
                  kt &&
                  ((a = "none" === K(t).display) || !t.parentNode) &&
                  (a && ((o = h.display), (h.display = "block")),
                  t.parentNode || ((s = 1), Lt.appendChild(t)),
                  (i = !(n = Z(t, At, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                  o ? (h.display = o) : a && $t(h, "display"),
                  s && Lt.removeChild(t)),
                (l.svg || (t.getBBox && zt(t))) &&
                  (i && -1 !== (h[kt] + "").indexOf("matrix") && ((n = h[kt]), (i = 0)),
                  (r = t.getAttribute("transform")),
                  i && r && (-1 !== r.indexOf("matrix") ? ((n = r), (i = 0)) : -1 !== r.indexOf("translate") && ((n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (i = 0)))),
                i)
              )
                return jt;
              for (r = (n || "").match(y) || [], xt = r.length; --xt > -1; ) (o = Number(r[xt])), (r[xt] = (s = o - (o |= 0)) ? ((1e5 * s + (0 > s ? -0.5 : 0.5)) | 0) / 1e5 + o : o);
              return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r;
            },
            Wt = (B.getTransform = function (t, i, n, r) {
              if (t._gsTransform && n && !r) return t._gsTransform;
              var o,
                a,
                l,
                h,
                u,
                c,
                f = (n && t._gsTransform) || new It(),
                d = f.scaleX < 0,
                p = 1e5,
                m = (Pt && (parseFloat(Z(t, Dt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin)) || 0,
                g = parseFloat(s.defaultTransformPerspective) || 0;
              if (((f.svg = !(!t.getBBox || !zt(t))), f.svg && (Mt(t, Z(t, Dt, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), (Ct = s.useSVGTransformAttr || Rt)), (o = Ft(t)) !== jt)) {
                if (16 === o.length) {
                  var v,
                    y,
                    _,
                    b,
                    x,
                    T = o[0],
                    w = o[1],
                    S = o[2],
                    C = o[3],
                    E = o[4],
                    k = o[5],
                    A = o[6],
                    D = o[7],
                    P = o[8],
                    I = o[9],
                    O = o[10],
                    N = o[12],
                    L = o[13],
                    R = o[14],
                    M = o[11],
                    j = Math.atan2(A, O);
                  f.zOrigin && ((N = P * (R = -f.zOrigin) - o[12]), (L = I * R - o[13]), (R = O * R + f.zOrigin - o[14])),
                    (f.rotationX = j * z),
                    j && ((v = E * (b = Math.cos(-j)) + P * (x = Math.sin(-j))), (y = k * b + I * x), (_ = A * b + O * x), (P = E * -x + P * b), (I = k * -x + I * b), (O = A * -x + O * b), (M = D * -x + M * b), (E = v), (k = y), (A = _)),
                    (j = Math.atan2(-S, O)),
                    (f.rotationY = j * z),
                    j && ((y = w * (b = Math.cos(-j)) - I * (x = Math.sin(-j))), (_ = S * b - O * x), (I = w * x + I * b), (O = S * x + O * b), (M = C * x + M * b), (T = v = T * b - P * x), (w = y), (S = _)),
                    (j = Math.atan2(w, T)),
                    (f.rotation = j * z),
                    j && ((T = T * (b = Math.cos(-j)) + E * (x = Math.sin(-j))), (y = w * b + k * x), (k = w * -x + k * b), (A = S * -x + A * b), (w = y)),
                    f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && ((f.rotationX = f.rotation = 0), (f.rotationY = 180 - f.rotationY)),
                    (f.scaleX = ((Math.sqrt(T * T + w * w) * p + 0.5) | 0) / p),
                    (f.scaleY = ((Math.sqrt(k * k + I * I) * p + 0.5) | 0) / p),
                    (f.scaleZ = ((Math.sqrt(A * A + O * O) * p + 0.5) | 0) / p),
                    f.rotationX || f.rotationY
                      ? (f.skewX = 0)
                      : ((f.skewX = E || k ? Math.atan2(E, k) * z + f.rotation : f.skewX || 0),
                        Math.abs(f.skewX) > 90 &&
                          Math.abs(f.skewX) < 270 &&
                          (d ? ((f.scaleX *= -1), (f.skewX += f.rotation <= 0 ? 180 : -180), (f.rotation += f.rotation <= 0 ? 180 : -180)) : ((f.scaleY *= -1), (f.skewX += f.skewX <= 0 ? 180 : -180)))),
                    (f.perspective = M ? 1 / (0 > M ? -M : M) : 0),
                    (f.x = N),
                    (f.y = L),
                    (f.z = R),
                    f.svg && ((f.x -= f.xOrigin - (f.xOrigin * T - f.yOrigin * E)), (f.y -= f.yOrigin - (f.yOrigin * w - f.xOrigin * k)));
                } else if (!Pt || r || !o.length || f.x !== o[4] || f.y !== o[5] || (!f.rotationX && !f.rotationY)) {
                  var F = o.length >= 6,
                    W = F ? o[0] : 1,
                    H = o[1] || 0,
                    q = o[2] || 0,
                    B = F ? o[3] : 1;
                  (f.x = o[4] || 0),
                    (f.y = o[5] || 0),
                    (l = Math.sqrt(W * W + H * H)),
                    (h = Math.sqrt(B * B + q * q)),
                    (u = W || H ? Math.atan2(H, W) * z : f.rotation || 0),
                    (c = q || B ? Math.atan2(q, B) * z + u : f.skewX || 0),
                    Math.abs(c) > 90 && Math.abs(c) < 270 && (d ? ((l *= -1), (c += 0 >= u ? 180 : -180), (u += 0 >= u ? 180 : -180)) : ((h *= -1), (c += 0 >= c ? 180 : -180))),
                    (f.scaleX = l),
                    (f.scaleY = h),
                    (f.rotation = u),
                    (f.skewX = c),
                    Pt && ((f.rotationX = f.rotationY = f.z = 0), (f.perspective = g), (f.scaleZ = 1)),
                    f.svg && ((f.x -= f.xOrigin - (f.xOrigin * W + f.yOrigin * q)), (f.y -= f.yOrigin - (f.xOrigin * H + f.yOrigin * B)));
                }
                for (a in ((f.zOrigin = m), f)) f[a] < 2e-5 && f[a] > -2e-5 && (f[a] = 0);
              }
              return (
                n &&
                  ((t._gsTransform = f),
                  f.svg &&
                    (Ct && t.style[kt]
                      ? e.delayedCall(0.001, function () {
                          $t(t.style, kt);
                        })
                      : !Ct &&
                        t.getAttribute("transform") &&
                        e.delayedCall(0.001, function () {
                          t.removeAttribute("transform");
                        }))),
                f
              );
            }),
            Ht = function (t) {
              var e,
                i,
                n = this.data,
                r = -n.rotation * M,
                o = r + n.skewX * M,
                s = 1e5,
                a = ((Math.cos(r) * n.scaleX * s) | 0) / s,
                l = ((Math.sin(r) * n.scaleX * s) | 0) / s,
                h = ((Math.sin(o) * -n.scaleY * s) | 0) / s,
                u = ((Math.cos(o) * n.scaleY * s) | 0) / s,
                c = this.t.style,
                f = this.t.currentStyle;
              if (f) {
                (i = l), (l = -h), (h = -i), (e = f.filter), (c.filter = "");
                var d,
                  p,
                  g = this.t.offsetWidth,
                  v = this.t.offsetHeight,
                  y = "absolute" !== f.position,
                  _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                  b = n.x + (g * n.xPercent) / 100,
                  x = n.y + (v * n.yPercent) / 100;
                if (
                  (null != n.ox && ((b += (d = (n.oxp ? g * n.ox * 0.01 : n.ox) - g / 2) - (d * a + (p = (n.oyp ? v * n.oy * 0.01 : n.oy) - v / 2) * l)), (x += p - (d * h + p * u))),
                  y ? (_ += ", Dx=" + ((d = g / 2) - (d * a + (p = v / 2) * l) + b) + ", Dy=" + (p - (d * h + p * u) + x) + ")") : (_ += ", sizingMethod='auto expand')"),
                  -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? (c.filter = e.replace(N, _)) : (c.filter = _ + " " + e),
                  (0 === t || 1 === t) &&
                    1 === a &&
                    0 === l &&
                    0 === h &&
                    1 === u &&
                    ((y && -1 === _.indexOf("Dx=0, Dy=0")) || (w.test(e) && 100 !== parseFloat(RegExp.$1)) || (-1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter"))),
                  !y)
                ) {
                  var S,
                    C,
                    E,
                    k = 8 > m ? 1 : -1;
                  for (
                    d = n.ieOffsetX || 0,
                      p = n.ieOffsetY || 0,
                      n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + b),
                      n.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > h ? -h : h) * g)) / 2 + x),
                      xt = 0;
                    4 > xt;
                    xt++
                  )
                    (E = (i = -1 !== (S = f[(C = rt[xt])]).indexOf("px") ? parseFloat(S) : J(this.t, C, parseFloat(S), S.replace(T, "")) || 0) !== n[C] ? (2 > xt ? -n.ieOffsetX : -n.ieOffsetY) : 2 > xt ? d - n.ieOffsetX : p - n.ieOffsetY),
                      (c[C] = (n[C] = Math.round(i - E * (0 === xt || 2 === xt ? 1 : k))) + "px");
                }
              }
            },
            qt = (B.set3DTransformRatio = B.setTransformRatio = function (t) {
              var e,
                i,
                n,
                r,
                o,
                s,
                a,
                l,
                h,
                u,
                c,
                f,
                p,
                m,
                g,
                v,
                y,
                _,
                b,
                x,
                T,
                w,
                S,
                C = this.data,
                E = this.t.style,
                k = C.rotation,
                A = C.rotationX,
                D = C.rotationY,
                P = C.scaleX,
                I = C.scaleY,
                O = C.scaleZ,
                N = C.x,
                L = C.y,
                R = C.z,
                z = C.svg,
                j = C.perspective,
                F = C.force3D;
              if (!((((1 !== t && 0 !== t) || "auto" !== F || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && F) || R || j || D || A || 1 !== O) || (Ct && z) || !Pt)
                k || C.skewX || z
                  ? ((k *= M),
                    (w = C.skewX * M),
                    (S = 1e5),
                    (e = Math.cos(k) * P),
                    (r = Math.sin(k) * P),
                    (i = Math.sin(k - w) * -I),
                    (o = Math.cos(k - w) * I),
                    w && "simple" === C.skewType && ((y = Math.tan(w - C.skewY * M)), (i *= y = Math.sqrt(1 + y * y)), (o *= y), C.skewY && ((y = Math.tan(C.skewY * M)), (e *= y = Math.sqrt(1 + y * y)), (r *= y))),
                    z &&
                      ((N += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset),
                      (L += C.yOrigin - (C.xOrigin * r + C.yOrigin * o) + C.yOffset),
                      Ct && (C.xPercent || C.yPercent) && ((m = this.t.getBBox()), (N += 0.01 * C.xPercent * m.width), (L += 0.01 * C.yPercent * m.height)),
                      (m = 1e-6) > N && N > -m && (N = 0),
                      m > L && L > -m && (L = 0)),
                    (b = ((e * S) | 0) / S + "," + ((r * S) | 0) / S + "," + ((i * S) | 0) / S + "," + ((o * S) | 0) / S + "," + N + "," + L + ")"),
                    z && Ct ? this.t.setAttribute("transform", "matrix(" + b) : (E[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + b))
                  : (E[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + I + "," + N + "," + L + ")");
              else {
                if ((d && ((m = 1e-4) > P && P > -m && (P = O = 2e-5), m > I && I > -m && (I = O = 2e-5), !j || C.z || C.rotationX || C.rotationY || (j = 0)), k || C.skewX))
                  (k *= M),
                    (g = e = Math.cos(k)),
                    (v = r = Math.sin(k)),
                    C.skewX &&
                      ((k -= C.skewX * M),
                      (g = Math.cos(k)),
                      (v = Math.sin(k)),
                      "simple" === C.skewType && ((y = Math.tan((C.skewX - C.skewY) * M)), (g *= y = Math.sqrt(1 + y * y)), (v *= y), C.skewY && ((y = Math.tan(C.skewY * M)), (e *= y = Math.sqrt(1 + y * y)), (r *= y)))),
                    (i = -v),
                    (o = g);
                else {
                  if (!(D || A || 1 !== O || j || z))
                    return void (E[kt] =
                      (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + L + "px," + R + "px)" + (1 !== P || 1 !== I ? " scale(" + P + "," + I + ")" : ""));
                  (e = o = 1), (i = r = 0);
                }
                (h = 1),
                  (n = s = a = l = u = c = 0),
                  (f = j ? -1 / j : 0),
                  (p = C.zOrigin),
                  (m = 1e-6),
                  (x = ","),
                  (T = "0"),
                  (k = D * M) && ((g = Math.cos(k)), (a = -(v = Math.sin(k))), (u = f * -v), (n = e * v), (s = r * v), (h = g), (f *= g), (e *= g), (r *= g)),
                  (k = A * M) && ((y = i * (g = Math.cos(k)) + n * (v = Math.sin(k))), (_ = o * g + s * v), (l = h * v), (c = f * v), (n = i * -v + n * g), (s = o * -v + s * g), (h *= g), (f *= g), (i = y), (o = _)),
                  1 !== O && ((n *= O), (s *= O), (h *= O), (f *= O)),
                  1 !== I && ((i *= I), (o *= I), (l *= I), (c *= I)),
                  1 !== P && ((e *= P), (r *= P), (a *= P), (u *= P)),
                  (p || z) &&
                    (p && ((N += n * -p), (L += s * -p), (R += h * -p + p)),
                    z && ((N += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset), (L += C.yOrigin - (C.xOrigin * r + C.yOrigin * o) + C.yOffset)),
                    m > N && N > -m && (N = T),
                    m > L && L > -m && (L = T),
                    m > R && R > -m && (R = 0)),
                  (b = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d("),
                  (b += (m > e && e > -m ? T : e) + x + (m > r && r > -m ? T : r) + x + (m > a && a > -m ? T : a)),
                  (b += x + (m > u && u > -m ? T : u) + x + (m > i && i > -m ? T : i) + x + (m > o && o > -m ? T : o)),
                  A || D || 1 !== O
                    ? ((b += x + (m > l && l > -m ? T : l) + x + (m > c && c > -m ? T : c) + x + (m > n && n > -m ? T : n)), (b += x + (m > s && s > -m ? T : s) + x + (m > h && h > -m ? T : h) + x + (m > f && f > -m ? T : f) + x))
                    : (b += ",0,0,0,0,1,0,"),
                  (b += N + x + L + x + R + x + (j ? 1 + -R / j : 1) + ")"),
                  (E[kt] = b);
              }
            });
          ((h = It.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0),
            (h.scaleX = h.scaleY = h.scaleZ = 1),
            wt(
              "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
              {
                parser: function (t, e, i, n, o, a, l) {
                  if (n._lastParsedTransform === l) return o;
                  var h;
                  (n._lastParsedTransform = l), "function" == typeof l[i] && ((h = l[i]), (l[i] = e));
                  var u,
                    c,
                    f,
                    d,
                    p,
                    m,
                    y,
                    _,
                    b,
                    x = t._gsTransform,
                    T = t.style,
                    w = Et.length,
                    S = l,
                    C = {},
                    E = "transformOrigin",
                    k = Wt(t, r, !0, S.parseTransform),
                    A = S.transform && ("function" == typeof S.transform ? S.transform(v, g) : S.transform);
                  if (((n._transform = k), A && "string" == typeof A && kt))
                    ((c = H.style)[kt] = A),
                      (c.display = "block"),
                      (c.position = "absolute"),
                      F.body.appendChild(H),
                      (u = Wt(H, null, !1)),
                      k.svg &&
                        ((m = k.xOrigin),
                        (y = k.yOrigin),
                        (u.x -= k.xOffset),
                        (u.y -= k.yOffset),
                        (S.transformOrigin || S.svgOrigin) && ((A = {}), Mt(t, st(S.transformOrigin), A, S.svgOrigin, S.smoothOrigin, !0), (m = A.xOrigin), (y = A.yOrigin), (u.x -= A.xOffset - k.xOffset), (u.y -= A.yOffset - k.yOffset)),
                        (m || y) && ((_ = Ft(H, !0)), (u.x -= m - (m * _[0] + y * _[2])), (u.y -= y - (m * _[1] + y * _[3])))),
                      F.body.removeChild(H),
                      u.perspective || (u.perspective = k.perspective),
                      null != S.xPercent && (u.xPercent = lt(S.xPercent, k.xPercent)),
                      null != S.yPercent && (u.yPercent = lt(S.yPercent, k.yPercent));
                  else if ("object" == typeof S) {
                    if (
                      ((u = {
                        scaleX: lt(null != S.scaleX ? S.scaleX : S.scale, k.scaleX),
                        scaleY: lt(null != S.scaleY ? S.scaleY : S.scale, k.scaleY),
                        scaleZ: lt(S.scaleZ, k.scaleZ),
                        x: lt(S.x, k.x),
                        y: lt(S.y, k.y),
                        z: lt(S.z, k.z),
                        xPercent: lt(S.xPercent, k.xPercent),
                        yPercent: lt(S.yPercent, k.yPercent),
                        perspective: lt(S.transformPerspective, k.perspective),
                      }),
                      null != (p = S.directionalRotation))
                    )
                      if ("object" == typeof p) for (c in p) S[c] = p[c];
                      else S.rotation = p;
                    "string" == typeof S.x && -1 !== S.x.indexOf("%") && ((u.x = 0), (u.xPercent = lt(S.x, k.xPercent))),
                      "string" == typeof S.y && -1 !== S.y.indexOf("%") && ((u.y = 0), (u.yPercent = lt(S.y, k.yPercent))),
                      (u.rotation = ht("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : k.rotation - k.skewY, k.rotation - k.skewY, "rotation", C)),
                      Pt &&
                        ((u.rotationX = ht("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", C)),
                        (u.rotationY = ht("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", C))),
                      (u.skewX = ht(S.skewX, k.skewX - k.skewY)),
                      (u.skewY = ht(S.skewY, k.skewY)) && ((u.skewX += u.skewY), (u.rotation += u.skewY));
                  }
                  for (
                    Pt && null != S.force3D && ((k.force3D = S.force3D), (d = !0)),
                      k.skewType = S.skewType || k.skewType || s.defaultSkewType,
                      (f = k.force3D || k.z || k.rotationX || k.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == S.scale || (u.scaleZ = 1);
                    --w > -1;

                  )
                    ((A = u[(b = Et[w])] - k[b]) > 1e-6 || -1e-6 > A || null != S[b] || null != j[b]) && ((d = !0), (o = new yt(k, b, k[b], A, o)), b in C && (o.e = C[b]), (o.xs0 = 0), (o.plugin = a), n._overwriteProps.push(o.n));
                  return (
                    (A = S.transformOrigin),
                    k.svg &&
                      (A || S.svgOrigin) &&
                      ((m = k.xOffset),
                      (y = k.yOffset),
                      Mt(t, st(A), u, S.svgOrigin, S.smoothOrigin),
                      (o = _t(k, "xOrigin", (x ? k : u).xOrigin, u.xOrigin, o, E)),
                      (o = _t(k, "yOrigin", (x ? k : u).yOrigin, u.yOrigin, o, E)),
                      (m !== k.xOffset || y !== k.yOffset) && ((o = _t(k, "xOffset", x ? m : k.xOffset, k.xOffset, o, E)), (o = _t(k, "yOffset", x ? y : k.yOffset, k.yOffset, o, E))),
                      (A = Ct ? null : "0px 0px")),
                    (A || (Pt && f && k.zOrigin)) &&
                      (kt
                        ? ((d = !0),
                          (b = Dt),
                          (A = (A || Z(t, b, r, !1, "50% 50%")) + ""),
                          ((o = new yt(T, b, 0, 0, o, -1, E)).b = T[b]),
                          (o.plugin = a),
                          Pt
                            ? ((c = k.zOrigin),
                              (A = A.split(" ")),
                              (k.zOrigin = (A.length > 2 && (0 === c || "0px" !== A[2]) ? parseFloat(A[2]) : c) || 0),
                              (o.xs0 = o.e = A[0] + " " + (A[1] || "50%") + " 0px"),
                              ((o = new yt(k, "zOrigin", 0, 0, o, -1, o.n)).b = c),
                              (o.xs0 = o.e = k.zOrigin))
                            : (o.xs0 = o.e = A))
                        : st(A + "", k)),
                    d && (n._transformType = (k.svg && Ct) || (!f && 3 !== this._transformType) ? 2 : 3),
                    h && (l[i] = h),
                    o
                  );
                },
                prefix: !0,
              }
            ),
            wt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
            wt("borderRadius", {
              defaultValue: "0px",
              parser: function (t, e, i, o, s, a) {
                e = this.format(e);
                var l,
                  h,
                  u,
                  c,
                  f,
                  d,
                  p,
                  m,
                  g,
                  v,
                  y,
                  _,
                  b,
                  x,
                  T,
                  w,
                  S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                  C = t.style;
                for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++)
                  this.p.indexOf("border") && (S[h] = G(S[h])),
                    -1 !== (f = c = Z(t, S[h], r, !1, "0px")).indexOf(" ") && ((c = f.split(" ")), (f = c[0]), (c = c[1])),
                    (d = u = l[h]),
                    (p = parseFloat(f)),
                    (_ = f.substr((p + "").length)),
                    (b = "=" === d.charAt(1))
                      ? ((m = parseInt(d.charAt(0) + "1", 10)), (d = d.substr(2)), (m *= parseFloat(d)), (y = d.substr((m + "").length - (0 > m ? 1 : 0)) || ""))
                      : ((m = parseFloat(d)), (y = d.substr((m + "").length))),
                    "" === y && (y = n[i] || _),
                    y !== _ &&
                      ((x = J(t, "borderLeft", p, _)),
                      (T = J(t, "borderTop", p, _)),
                      "%" === y ? ((f = (x / g) * 100 + "%"), (c = (T / v) * 100 + "%")) : "em" === y ? ((f = x / (w = J(t, "borderLeft", 1, "em")) + "em"), (c = T / w + "em")) : ((f = x + "px"), (c = T + "px")),
                      b && ((d = parseFloat(f) + m + y), (u = parseFloat(c) + m + y))),
                    (s = bt(C, S[h], f + " " + c, d + " " + u, !1, "0px", s));
                return s;
              },
              prefix: !0,
              formatter: mt("0px 0px 0px 0px", !1, !0),
            }),
            wt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
              defaultValue: "0px",
              parser: function (t, e, i, n, o, s) {
                return bt(t.style, i, this.format(Z(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", o);
              },
              prefix: !0,
              formatter: mt("0px 0px", !1, !0),
            }),
            wt("backgroundPosition", {
              defaultValue: "0 0",
              parser: function (t, e, i, n, o, s) {
                var a,
                  l,
                  h,
                  u,
                  c,
                  f,
                  d = "background-position",
                  p = r || K(t, null),
                  g = this.format((p ? (m ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d)) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                  v = this.format(e);
                if ((-1 !== g.indexOf("%")) != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (f = Z(t, "backgroundImage").replace(D, "")) && "none" !== f) {
                  for (a = g.split(" "), l = v.split(" "), q.setAttribute("src", f), h = 2; --h > -1; )
                    (u = -1 !== (g = a[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) &&
                      ((c = 0 === h ? t.offsetWidth - q.width : t.offsetHeight - q.height), (a[h] = u ? (parseFloat(g) / 100) * c + "px" : (parseFloat(g) / c) * 100 + "%"));
                  g = a.join(" ");
                }
                return this.parseComplex(t.style, g, v, o, s);
              },
              formatter: st,
            }),
            wt("backgroundSize", {
              defaultValue: "0 0",
              formatter: function (t) {
                return st(-1 === (t += "").indexOf(" ") ? t + " " + t : t);
              },
            }),
            wt("perspective", { defaultValue: "0px", prefix: !0 }),
            wt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
            wt("transformStyle", { prefix: !0 }),
            wt("backfaceVisibility", { prefix: !0 }),
            wt("userSelect", { prefix: !0 }),
            wt("margin", { parser: gt("marginTop,marginRight,marginBottom,marginLeft") }),
            wt("padding", { parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
            wt("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function (t, e, i, n, o, s) {
                var a, l, h;
                return (
                  9 > m
                    ? ((l = t.currentStyle), (h = 8 > m ? " " : ","), (a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")"), (e = this.format(e).split(",").join(h)))
                    : ((a = this.format(Z(t, this.p, r, !1, this.dflt))), (e = this.format(e))),
                  this.parseComplex(t.style, a, e, o, s)
                );
              },
            }),
            wt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
            wt("autoRound,strictUnits", {
              parser: function (t, e, i, n, r) {
                return r;
              },
            }),
            wt("border", {
              defaultValue: "0px solid #000",
              parser: function (t, e, i, n, o, s) {
                var a = Z(t, "borderTopWidth", r, !1, "0px"),
                  l = this.format(e).split(" "),
                  h = l[0].replace(T, "");
                return (
                  "px" !== h && (a = parseFloat(a) / J(t, "borderTopWidth", 1, h) + h),
                  this.parseComplex(t.style, this.format(a + " " + Z(t, "borderTopStyle", r, !1, "solid") + " " + Z(t, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
                );
              },
              color: !0,
              formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(pt) || ["#000"])[0];
              },
            }),
            wt("borderWidth", { parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
            wt("float,cssFloat,styleFloat", {
              parser: function (t, e, i, n, r, o) {
                var s = t.style,
                  a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new yt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e);
              },
            });
          var Bt = function (t) {
            var e,
              i = this.t,
              n = i.filter || Z(this.data, "filter") || "",
              r = (this.s + this.c * t) | 0;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), (e = !Z(this.data, "filter"))) : ((i.filter = n.replace(C, "")), (e = !0))),
              e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? (0 === r && this.xn1) || (i.filter = n + " alpha(opacity=" + r + ")") : (i.filter = n.replace(w, "opacity=" + r)));
          };
          wt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (t, e, i, n, o, s) {
              var a = parseFloat(Z(t, "opacity", r, !1, "1")),
                l = t.style,
                h = "autoAlpha" === i;
              return (
                "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                h && 1 === a && "hidden" === Z(t, "visibility", r) && 0 !== e && (a = 0),
                Y
                  ? (o = new yt(l, "opacity", a, e - a, o))
                  : (((o = new yt(l, "opacity", 100 * a, 100 * (e - a), o)).xn1 = h ? 1 : 0),
                    (l.zoom = 1),
                    (o.type = 2),
                    (o.b = "alpha(opacity=" + o.s + ")"),
                    (o.e = "alpha(opacity=" + (o.s + o.c) + ")"),
                    (o.data = t),
                    (o.plugin = s),
                    (o.setRatio = Bt)),
                h && (((o = new yt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit"), n._overwriteProps.push(o.n), n._overwriteProps.push(i)),
                o
              );
            },
          });
          var $t = function (t, e) {
              e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e));
            },
            Yt = function (t) {
              if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; ) e.v ? (i[e.p] = e.v) : $t(i, e.p), (e = e._next);
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
              } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
            };
          wt("className", {
            parser: function (t, e, n, o, s, a, l) {
              var h,
                u,
                c,
                f,
                d,
                p = t.getAttribute("class") || "",
                m = t.style.cssText;
              if ((((s = o._classNamePT = new yt(t, n, 0, 0, s, 2)).setRatio = Yt), (s.pr = -11), (i = !0), (s.b = p), (u = et(t, r)), (c = t._gsClassPT))) {
                for (f = {}, d = c.data; d; ) (f[d.p] = 1), (d = d._next);
                c.setRatio(1);
              }
              return (
                (t._gsClassPT = s),
                (s.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                t.setAttribute("class", s.e),
                (h = it(t, u, et(t), l, f)),
                t.setAttribute("class", p),
                (s.data = h.firstMPT),
                (t.style.cssText = m),
                (s.xfirst = o.parse(t, h.difs, s, a))
              );
            },
          });
          var Ut = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
              var e,
                i,
                n,
                r,
                o,
                s = this.t.style,
                a = l.transform.parse;
              if ("all" === this.e) (s.cssText = ""), (r = !0);
              else for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1; ) (i = e[n]), l[i] && (l[i].parse === a ? (r = !0) : (i = "transformOrigin" === i ? Dt : l[i].p)), $t(s, i);
              r && ($t(s, kt), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
            }
          };
          for (
            wt("clearProps", {
              parser: function (t, e, n, r, o) {
                return ((o = new yt(t, n, 0, 0, o, 2)).setRatio = Ut), (o.e = e), (o.pr = -10), (o.data = r._tween), (i = !0), o;
              },
            }),
              h = "bezier,throwProps,physicsProps,physics2D".split(","),
              xt = h.length;
            xt--;

          )
            St(h[xt]);
          ((h = s.prototype)._firstPT = h._lastParsedTransform = h._transform = null),
            (h._onInitTween = function (t, e, a, h) {
              if (!t.nodeType) return !1;
              (this._target = g = t), (this._tween = a), (this._vars = e), (v = h), (u = e.autoRound), (i = !1), (n = e.suffixMap || s.suffixMap), (r = K(t, "")), (o = this._overwriteProps);
              var d,
                m,
                y,
                _,
                b,
                x,
                T,
                w,
                C,
                E = t.style;
              if (
                (c && "" === E.zIndex && ("auto" === (d = Z(t, "zIndex", r)) || "" === d) && this._addLazySet(E, "zIndex", 0),
                "string" == typeof e && ((_ = E.cssText), (d = et(t, r)), (E.cssText = _ + ";" + e), (d = it(t, d, et(t)).difs), !Y && S.test(e) && (d.opacity = parseFloat(RegExp.$1)), (e = d), (E.cssText = _)),
                e.className ? (this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e)) : (this._firstPT = m = this.parse(t, e, null)),
                this._transformType)
              ) {
                for (
                  C = 3 === this._transformType,
                    kt
                      ? f &&
                        ((c = !0),
                        "" === E.zIndex && ("auto" === (T = Z(t, "zIndex", r)) || "" === T) && this._addLazySet(E, "zIndex", 0),
                        p && this._addLazySet(E, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden")))
                      : (E.zoom = 1),
                    y = m;
                  y && y._next;

                )
                  y = y._next;
                (w = new yt(t, "transform", 0, 0, null, 2)), this._linkCSSP(w, null, y), (w.setRatio = kt ? qt : Ht), (w.data = this._transform || Wt(t, r, !0)), (w.tween = a), (w.pr = -1), o.pop();
              }
              if (i) {
                for (; m; ) {
                  for (x = m._next, y = _; y && y.pr > m.pr; ) y = y._next;
                  (m._prev = y ? y._prev : b) ? (m._prev._next = m) : (_ = m), (m._next = y) ? (y._prev = m) : (b = m), (m = x);
                }
                this._firstPT = _;
              }
              return !0;
            }),
            (h.parse = function (t, e, i, o) {
              var s,
                a,
                h,
                c,
                f,
                d,
                p,
                m,
                y,
                _,
                b = t.style;
              for (s in e)
                "function" == typeof (d = e[s]) && (d = d(v, g)),
                  (a = l[s])
                    ? (i = a.parse(t, d, s, this, i, o, e))
                    : ((f = Z(t, s, r) + ""),
                      (y = "string" == typeof d),
                      "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || (y && E.test(d))
                        ? (y || (d = ((d = ft(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), (i = bt(b, s, f, d, !0, "transparent", i, 0, o)))
                        : y && R.test(d)
                        ? (i = bt(b, s, f, d, !0, null, i, 0, o))
                        : ((p = (h = parseFloat(f)) || 0 === h ? f.substr((h + "").length) : ""),
                          ("" === f || "auto" === f) && ("width" === s || "height" === s ? ((h = ot(t, s, r)), (p = "px")) : "left" === s || "top" === s ? ((h = tt(t, s, r)), (p = "px")) : ((h = "opacity" !== s ? 0 : 1), (p = ""))),
                          (_ = y && "=" === d.charAt(1)) ? ((c = parseInt(d.charAt(0) + "1", 10)), (d = d.substr(2)), (c *= parseFloat(d)), (m = d.replace(T, ""))) : ((c = parseFloat(d)), (m = y ? d.replace(T, "") : "")),
                          "" === m && (m = s in n ? n[s] : p),
                          (d = c || 0 === c ? (_ ? c + h : c) + m : e[s]),
                          p !== m &&
                            "" !== m &&
                            (c || 0 === c) &&
                            h &&
                            ((h = J(t, s, h, p)),
                            "%" === m
                              ? ((h /= J(t, s, 100, "%") / 100), !0 !== e.strictUnits && (f = h + "%"))
                              : "em" === m || "rem" === m || "vw" === m || "vh" === m
                              ? (h /= J(t, s, 1, m))
                              : "px" !== m && ((c = J(t, s, c, m)), (m = "px")),
                            _ && (c || 0 === c) && (d = c + h + m)),
                          _ && (c += h),
                          (!h && 0 !== h) || (!c && 0 !== c)
                            ? void 0 !== b[s] && (d || (d + "" != "NaN" && null != d))
                              ? ((i = new yt(b, s, c || h || 0, 0, i, -1, s, !1, 0, f, d)).xs0 = "none" !== d || ("display" !== s && -1 === s.indexOf("Style")) ? d : f)
                              : X("invalid " + s + " tween value: " + e[s])
                            : ((i = new yt(b, s, h, c - h, i, 0, s, !1 !== u && ("px" === m || "zIndex" === s), 0, f, d)).xs0 = m))),
                  o && i && !i.plugin && (i.plugin = o);
              return i;
            }),
            (h.setRatio = function (t) {
              var e,
                i,
                n,
                r = this._firstPT;
              if (1 !== t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                if (t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                  for (; r; ) {
                    if (((e = r.c * t + r.s), r.r ? (e = Math.round(e)) : 1e-6 > e && e > -1e-6 && (e = 0), r.type))
                      if (1 === r.type)
                        if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                        else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                        else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                        else {
                          for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                          r.t[r.p] = i;
                        }
                      else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(t);
                    else r.t[r.p] = e + r.xs0;
                    r = r._next;
                  }
                else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t), (r = r._next);
              else
                for (; r; ) {
                  if (2 !== r.type)
                    if (r.r && -1 !== r.type)
                      if (((e = Math.round(r.s + r.c)), r.type)) {
                        if (1 === r.type) {
                          for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                          r.t[r.p] = i;
                        }
                      } else r.t[r.p] = e + r.xs0;
                    else r.t[r.p] = r.e;
                  else r.setRatio(t);
                  r = r._next;
                }
            }),
            (h._enableTransforms = function (t) {
              (this._transform = this._transform || Wt(this._target, r, !0)), (this._transformType = (this._transform.svg && Ct) || (!t && 3 !== this._transformType) ? 2 : 3);
            });
          var Xt = function (t) {
            (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
          };
          (h._addLazySet = function (t, e, i) {
            var n = (this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2));
            (n.e = i), (n.setRatio = Xt), (n.data = this);
          }),
            (h._linkCSSP = function (t, e, i, n) {
              return (
                t &&
                  (e && (e._prev = t),
                  t._next && (t._next._prev = t._prev),
                  t._prev ? (t._prev._next = t._next) : this._firstPT === t && ((this._firstPT = t._next), (n = !0)),
                  i ? (i._next = t) : n || null !== this._firstPT || (this._firstPT = t),
                  (t._next = e),
                  (t._prev = i)),
                t
              );
            }),
            (h._mod = function (t) {
              for (var e = this._firstPT; e; ) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), (e = e._next);
            }),
            (h._kill = function (e) {
              var i,
                n,
                r,
                o = e;
              if (e.autoAlpha || e.alpha) {
                for (n in ((o = {}), e)) o[n] = e[n];
                (o.opacity = 1), o.autoAlpha && (o.visibility = 1);
              }
              for (
                e.className &&
                  (i = this._classNamePT) &&
                  ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), (this._classNamePT = null)),
                  i = this._firstPT;
                i;

              )
                i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), (n = i.plugin)), (i = i._next);
              return t.prototype._kill.call(this, o);
            });
          var Vt = function (t, e, i) {
            var n, r, o, s;
            if (t.slice) for (r = t.length; --r > -1; ) Vt(t[r], e, i);
            else for (r = (n = t.childNodes).length; --r > -1; ) (s = (o = n[r]).type), o.style && (e.push(et(o)), i && i.push(o)), (1 !== s && 9 !== s && 11 !== s) || !o.childNodes.length || Vt(o, e, i);
          };
          return (
            (s.cascadeTo = function (t, i, n) {
              var r,
                o,
                s,
                a,
                l = e.to(t, i, n),
                h = [l],
                u = [],
                c = [],
                f = [],
                d = e._internals.reservedProps;
              for (t = l._targets || l.target, Vt(t, u, f), l.render(i, !0, !0), Vt(t, c), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1; )
                if ((o = it(f[r], u[r], c[r])).firstMPT) {
                  for (s in ((o = o.difs), n)) d[s] && (o[s] = n[s]);
                  for (s in ((a = {}), o)) a[s] = u[r][s];
                  h.push(e.fromTo(f[r], i, a, o));
                }
              return h;
            }),
            t.activate([s]),
            s
          );
        },
        !0
      ),
      (function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function (t, e, i) {
              return (this._tween = i), !0;
            },
          }),
          e = function (t) {
            for (; t; ) t.f || t.blob || (t.m = Math.round), (t = t._next);
          },
          i = t.prototype;
        (i._onInitAllProps = function () {
          for (var t, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1; ) a[o[s]] = Math.round;
          for (s = o.length; --s > -1; )
            for (t = o[s], i = r._firstPT; i; )
              (n = i._next),
                i.pg
                  ? i.t._mod(a)
                  : i.n === t &&
                    (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? (i._prev._next = n) : r._firstPT === i && (r._firstPT = n), (i._next = i._prev = null), (r._propLookup[t] = l))),
                (i = n);
          return !1;
        }),
          (i._add = function (t, e, i, n) {
            this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e);
          });
      })(),
      _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.0",
        init: function (t, e, i, n) {
          var r, o;
          if ("function" != typeof t.setAttribute) return !1;
          for (r in e) "function" == typeof (o = e[r]) && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
          return !0;
        },
      }),
      (_gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function (t, e, i, n) {
          "object" != typeof e && (e = { rotation: e }), (this.finals = {});
          var r,
            o,
            s,
            a,
            l,
            h,
            u = !0 === e.useRadians ? 2 * Math.PI : 360;
          for (r in e)
            "useRadians" !== r &&
              ("function" == typeof (a = e[r]) && (a = a(n, t)),
              (o = (h = (a + "").split("_"))[0]),
              (s = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]())),
              (l = (a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - s),
              h.length &&
                (-1 !== (o = h.join("_")).indexOf("short") && (l %= u) !== l % (u / 2) && (l = 0 > l ? l + u : l - u),
                -1 !== o.indexOf("_cw") && 0 > l ? (l = ((l + 9999999999 * u) % u) - ((l / u) | 0) * u) : -1 !== o.indexOf("ccw") && l > 0 && (l = ((l - 9999999999 * u) % u) - ((l / u) | 0) * u)),
              (l > 1e-6 || -1e-6 > l) && (this._addTween(t, r, s, s + l, r), this._overwriteProps.push(r)));
          return !0;
        },
        set: function (t) {
          var e;
          if (1 !== t) this._super.setRatio.call(this, t);
          else for (e = this._firstPT; e; ) e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]), (e = e._next);
        },
      })._autoCSS = !0),
      _gsScope._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function (t) {
          var e,
            i,
            n,
            r = _gsScope.GreenSockGlobals || _gsScope,
            o = r.com.greensock,
            s = 2 * Math.PI,
            a = Math.PI / 2,
            l = o._class,
            h = function (e, i) {
              var n = l("easing." + e, function () {}, !0),
                r = (n.prototype = new t());
              return (r.constructor = n), (r.getRatio = i), n;
            },
            u = t.register || function () {},
            c = function (t, e, i, n, r) {
              var o = l("easing." + t, { easeOut: new e(), easeIn: new i(), easeInOut: new n() }, !0);
              return u(o, t), o;
            },
            f = function (t, e, i) {
              (this.t = t), (this.v = e), i && ((this.next = i), (i.prev = this), (this.c = i.v - e), (this.gap = i.t - t));
            },
            d = function (e, i) {
              var n = l(
                  "easing." + e,
                  function (t) {
                    (this._p1 = t || 0 === t ? t : 1.70158), (this._p2 = 1.525 * this._p1);
                  },
                  !0
                ),
                r = (n.prototype = new t());
              return (
                (r.constructor = n),
                (r.getRatio = i),
                (r.config = function (t) {
                  return new n(t);
                }),
                n
              );
            },
            p = c(
              "Back",
              d("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
              }),
              d("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1);
              }),
              d("BackInOut", function (t) {
                return (t *= 2) < 1 ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
              })
            ),
            m = l(
              "easing.SlowMo",
              function (t, e, i) {
                (e = e || 0 === e ? e : 0.7), null == t ? (t = 0.7) : t > 1 && (t = 1), (this._p = 1 !== t ? e : 0), (this._p1 = (1 - t) / 2), (this._p2 = t), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === i);
              },
              !0
            ),
            g = (m.prototype = new t());
          return (
            (g.constructor = m),
            (g.getRatio = function (t) {
              var e = t + (0.5 - t) * this._p;
              return t < this._p1
                ? this._calcEnd
                  ? 1 - (t = 1 - t / this._p1) * t
                  : e - (t = 1 - t / this._p1) * t * t * t * e
                : t > this._p3
                ? this._calcEnd
                  ? 1 - (t = (t - this._p3) / this._p1) * t
                  : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                : this._calcEnd
                ? 1
                : e;
            }),
            (m.ease = new m(0.7, 0.7)),
            (g.config = m.config = function (t, e, i) {
              return new m(t, e, i);
            }),
            ((g = (e = l(
              "easing.SteppedEase",
              function (t) {
                (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
              },
              !0
            )).prototype = new t()).constructor = e),
            (g.getRatio = function (t) {
              return 0 > t ? (t = 0) : t >= 1 && (t = 0.999999999), ((this._p2 * t) >> 0) * this._p1;
            }),
            (g.config = e.config = function (t) {
              return new e(t);
            }),
            (i = l(
              "easing.RoughEase",
              function (e) {
                for (
                  var i,
                    n,
                    r,
                    o,
                    s,
                    a,
                    l = (e = e || {}).taper || "none",
                    h = [],
                    u = 0,
                    c = 0 | (e.points || 20),
                    d = c,
                    p = !1 !== e.randomize,
                    m = !0 === e.clamp,
                    g = e.template instanceof t ? e.template : null,
                    v = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                  --d > -1;

                )
                  (i = p ? Math.random() : (1 / c) * d),
                    (n = g ? g.getRatio(i) : i),
                    "none" === l ? (r = v) : "out" === l ? (r = (o = 1 - i) * o * v) : "in" === l ? (r = i * i * v) : 0.5 > i ? (r = (o = 2 * i) * o * 0.5 * v) : (r = (o = 2 * (1 - i)) * o * 0.5 * v),
                    p ? (n += Math.random() * r - 0.5 * r) : d % 2 ? (n += 0.5 * r) : (n -= 0.5 * r),
                    m && (n > 1 ? (n = 1) : 0 > n && (n = 0)),
                    (h[u++] = { x: i, y: n });
                for (
                  h.sort(function (t, e) {
                    return t.x - e.x;
                  }),
                    a = new f(1, 1, null),
                    d = c;
                  --d > -1;

                )
                  (s = h[d]), (a = new f(s.x, s.y, a));
                this._prev = new f(0, 0, 0 !== a.t ? a : a.next);
              },
              !0
            )),
            ((g = i.prototype = new t()).constructor = i),
            (g.getRatio = function (t) {
              var e = this._prev;
              if (t > e.t) {
                for (; e.next && t >= e.t; ) e = e.next;
                e = e.prev;
              } else for (; e.prev && t <= e.t; ) e = e.prev;
              return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
            }),
            (g.config = function (t) {
              return new i(t);
            }),
            (i.ease = new i()),
            c(
              "Bounce",
              h("BounceOut", function (t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              }),
              h("BounceIn", function (t) {
                return (t = 1 - t) < 1 / 2.75
                  ? 1 - 7.5625 * t * t
                  : 2 / 2.75 > t
                  ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                  : 2.5 / 2.75 > t
                  ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                  : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
              }),
              h("BounceInOut", function (t) {
                var e = 0.5 > t;
                return (
                  (t =
                    1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1)
                      ? 7.5625 * t * t
                      : 2 / 2.75 > t
                      ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                      : 2.5 / 2.75 > t
                      ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                      : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                  e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                );
              })
            ),
            c(
              "Circ",
              h("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t);
              }),
              h("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
              }),
              h("CircInOut", function (t) {
                return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              })
            ),
            c(
              "Elastic",
              (n = function (e, i, n) {
                var r = l(
                    "easing." + e,
                    function (t, e) {
                      (this._p1 = t >= 1 ? t : 1), (this._p2 = (e || n) / (1 > t ? t : 1)), (this._p3 = (this._p2 / s) * (Math.asin(1 / this._p1) || 0)), (this._p2 = s / this._p2);
                    },
                    !0
                  ),
                  o = (r.prototype = new t());
                return (
                  (o.constructor = r),
                  (o.getRatio = i),
                  (o.config = function (t, e) {
                    return new r(t, e);
                  }),
                  r
                );
              })(
                "ElasticOut",
                function (t) {
                  return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
                },
                0.3
              ),
              n(
                "ElasticIn",
                function (t) {
                  return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2);
                },
                0.3
              ),
              n(
                "ElasticInOut",
                function (t) {
                  return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -0.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * 0.5 + 1;
                },
                0.45
              )
            ),
            c(
              "Expo",
              h("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t);
              }),
              h("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - 0.001;
              }),
              h("ExpoInOut", function (t) {
                return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
              })
            ),
            c(
              "Sine",
              h("SineOut", function (t) {
                return Math.sin(t * a);
              }),
              h("SineIn", function (t) {
                return 1 - Math.cos(t * a);
              }),
              h("SineInOut", function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
              })
            ),
            l(
              "easing.EaseLookup",
              {
                find: function (e) {
                  return t.map[e];
                },
              },
              !0
            ),
            u(r.SlowMo, "SlowMo", "ease,"),
            u(i, "RoughEase", "ease,"),
            u(e, "SteppedEase", "ease,"),
            p
          );
        },
        !0
      );
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (t, e) {
    "use strict";
    var i = {},
      n = (t.GreenSockGlobals = t.GreenSockGlobals || t);
    if (!n.TweenLite) {
      var r,
        o,
        s,
        a,
        l,
        h = function (t) {
          var e,
            i = t.split("."),
            r = n;
          for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
          return r;
        },
        u = h("com.greensock"),
        c = 1e-10,
        f = function (t) {
          var e,
            i = [],
            n = t.length;
          for (e = 0; e !== n; i.push(t[e++]));
          return i;
        },
        d = function () {},
        p = (function () {
          var t = Object.prototype.toString,
            e = t.call([]);
          return function (i) {
            return null != i && (i instanceof Array || ("object" == typeof i && !!i.push && t.call(i) === e));
          };
        })(),
        m = {},
        g = function (r, o, s, a) {
          (this.sc = m[r] ? m[r].sc : []), (m[r] = this), (this.gsClass = null), (this.func = s);
          var l = [];
          (this.check = function (u) {
            for (var c, f, d, p, v, y = o.length, _ = y; --y > -1; ) (c = m[o[y]] || new g(o[y], [])).gsClass ? ((l[y] = c.gsClass), _--) : u && c.sc.push(this);
            if (0 === _ && s) {
              if (((d = (f = ("com.greensock." + r).split(".")).pop()), (p = h(f.join("."))[d] = this.gsClass = s.apply(s, l)), a))
                if (((n[d] = i[d] = p), !(v = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd))
                  define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                    return p;
                  });
                else if (v)
                  if (r === e) for (y in ((module.exports = i[e] = p), i)) p[y] = i[y];
                  else i[e] && (i[e][d] = p);
              for (y = 0; y < this.sc.length; y++) this.sc[y].check();
            }
          }),
            this.check(!0);
        },
        v = (t._gsDefine = function (t, e, i, n) {
          return new g(t, e, i, n);
        }),
        y = (u._class = function (t, e, i) {
          return (
            (e = e || function () {}),
            v(
              t,
              [],
              function () {
                return e;
              },
              i
            ),
            e
          );
        });
      v.globals = n;
      var _ = [0, 0, 1, 1],
        b = y(
          "easing.Ease",
          function (t, e, i, n) {
            (this._func = t), (this._type = i || 0), (this._power = n || 0), (this._params = e ? _.concat(e) : _);
          },
          !0
        ),
        x = (b.map = {}),
        T = (b.register = function (t, e, i, n) {
          for (var r, o, s, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
            for (o = l[h], r = n ? y("easing." + o, null, !0) : u.easing[o] || {}, s = c.length; --s > -1; ) (a = c[s]), (x[o + "." + a] = x[a + o] = r[a] = t.getRatio ? t : t[a] || new t());
        });
      for (
        (s = b.prototype)._calcEnd = !1,
          s.getRatio = function (t) {
            if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
            var e = this._type,
              i = this._power,
              n = 1 === e ? 1 - t : 2 === e ? t : 0.5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? (n *= n) : 2 === i ? (n *= n * n) : 3 === i ? (n *= n * n * n) : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : 0.5 > t ? n / 2 : 1 - n / 2;
          },
          o = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
        --o > -1;

      )
        (s = r[o] + ",Power" + o), T(new b(null, null, 1, o), s, "easeOut", !0), T(new b(null, null, 2, o), s, "easeIn" + (0 === o ? ",easeNone" : "")), T(new b(null, null, 3, o), s, "easeInOut");
      (x.linear = u.easing.Linear.easeIn), (x.swing = u.easing.Quad.easeInOut);
      var w = y("events.EventDispatcher", function (t) {
        (this._listeners = {}), (this._eventTarget = t || this);
      });
      ((s = w.prototype).addEventListener = function (t, e, i, n, r) {
        r = r || 0;
        var o,
          s,
          h = this._listeners[t],
          u = 0;
        for (this !== a || l || a.wake(), null == h && (this._listeners[t] = h = []), s = h.length; --s > -1; ) (o = h[s]).c === e && o.s === i ? h.splice(s, 1) : 0 === u && o.pr < r && (u = s + 1);
        h.splice(u, 0, { c: e, s: i, up: n, pr: r });
      }),
        (s.removeEventListener = function (t, e) {
          var i,
            n = this._listeners[t];
          if (n) for (i = n.length; --i > -1; ) if (n[i].c === e) return void n.splice(i, 1);
        }),
        (s.dispatchEvent = function (t) {
          var e,
            i,
            n,
            r = this._listeners[t];
          if (r) for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1; ) (n = r[e]) && (n.up ? n.c.call(n.s || i, { type: t, target: i }) : n.c.call(n.s || i));
        });
      var S = t.requestAnimationFrame,
        C = t.cancelAnimationFrame,
        E =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        k = E();
      for (o = (r = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !S; ) (S = t[r[o] + "RequestAnimationFrame"]), (C = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"]);
      y("Ticker", function (t, e) {
        var i,
          n,
          r,
          o,
          s,
          h = this,
          u = E(),
          f = !(!1 === e || !S) && "auto",
          p = 500,
          m = 33,
          g = function (t) {
            var e,
              a,
              l = E() - k;
            l > p && (u += l - m), (k += l), (h.time = (k - u) / 1e3), (e = h.time - s), (!i || e > 0 || !0 === t) && (h.frame++, (s += e + (e >= o ? 0.004 : o - e)), (a = !0)), !0 !== t && (r = n(g)), a && h.dispatchEvent("tick");
          };
        w.call(h),
          (h.time = h.frame = 0),
          (h.tick = function () {
            g(!0);
          }),
          (h.lagSmoothing = function (t, e) {
            (p = t || 1 / c), (m = Math.min(e, p, 0));
          }),
          (h.sleep = function () {
            null != r && (f && C ? C(r) : clearTimeout(r), (n = d), (r = null), h === a && (l = !1));
          }),
          (h.wake = function (t) {
            null !== r ? h.sleep() : t ? (u += -k + (k = E())) : h.frame > 10 && (k = E() - p + 5),
              (n =
                0 === i
                  ? d
                  : f && S
                  ? S
                  : function (t) {
                      return setTimeout(t, (1e3 * (s - h.time) + 1) | 0);
                    }),
              h === a && (l = !0),
              g(2);
          }),
          (h.fps = function (t) {
            return arguments.length ? ((o = 1 / ((i = t) || 60)), (s = this.time + o), void h.wake()) : i;
          }),
          (h.useRAF = function (t) {
            return arguments.length ? (h.sleep(), (f = t), void h.fps(i)) : f;
          }),
          h.fps(t),
          setTimeout(function () {
            "auto" === f && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1);
          }, 1500);
      }),
        ((s = u.Ticker.prototype = new u.events.EventDispatcher()).constructor = u.Ticker);
      var A = y("core.Animation", function (t, e) {
        if (
          ((this.vars = e = e || {}),
          (this._duration = this._totalDuration = t || 0),
          (this._delay = Number(e.delay) || 0),
          (this._timeScale = 1),
          (this._active = !0 === e.immediateRender),
          (this.data = e.data),
          (this._reversed = !0 === e.reversed),
          U)
        ) {
          l || a.wake();
          var i = this.vars.useFrames ? Y : U;
          i.add(this, i._time), this.vars.paused && this.paused(!0);
        }
      });
      (a = A.ticker = new u.Ticker()),
        ((s = A.prototype)._dirty = s._gc = s._initted = s._paused = !1),
        (s._totalTime = s._time = 0),
        (s._rawPrevTime = -1),
        (s._next = s._last = s._onUpdate = s._timeline = s.timeline = null),
        (s._paused = !1);
      var D = function () {
        l && E() - k > 2e3 && a.wake(), setTimeout(D, 2e3);
      };
      D(),
        (s.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (s.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (s.resume = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!1);
        }),
        (s.seek = function (t, e) {
          return this.totalTime(Number(t), !1 !== e);
        }),
        (s.restart = function (t, e) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(t ? -this._delay : 0, !1 !== e, !0);
        }),
        (s.reverse = function (t, e) {
          return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
        }),
        (s.render = function (t, e, i) {}),
        (s.invalidate = function () {
          return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (this._gc || !this.timeline) && this._enabled(!0), this;
        }),
        (s.isActive = function () {
          var t,
            e = this._timeline,
            i = this._startTime;
          return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale);
        }),
        (s._enabled = function (t, e) {
          return l || a.wake(), (this._gc = !t), (this._active = this.isActive()), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1;
        }),
        (s._kill = function (t, e) {
          return this._enabled(!1, !1);
        }),
        (s.kill = function (t, e) {
          return this._kill(t, e), this;
        }),
        (s._uncache = function (t) {
          for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
          return this;
        }),
        (s._swapSelfInParams = function (t) {
          for (var e = t.length, i = t.concat(); --e > -1; ) "{self}" === t[e] && (i[e] = this);
          return i;
        }),
        (s._callback = function (t) {
          var e = this.vars,
            i = e[t],
            n = e[t + "Params"],
            r = e[t + "Scope"] || e.callbackScope || this;
          switch (n ? n.length : 0) {
            case 0:
              i.call(r);
              break;
            case 1:
              i.call(r, n[0]);
              break;
            case 2:
              i.call(r, n[0], n[1]);
              break;
            default:
              i.apply(r, n);
          }
        }),
        (s.eventCallback = function (t, e, i, n) {
          if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e ? delete r[t] : ((r[t] = e), (r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (r[t + "Scope"] = n)), "onUpdate" === t && (this._onUpdate = e);
          }
          return this;
        }),
        (s.delay = function (t) {
          return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
        }),
        (s.duration = function (t) {
          return arguments.length
            ? ((this._duration = this._totalDuration = t), this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this)
            : ((this._dirty = !1), this._duration);
        }),
        (s.totalDuration = function (t) {
          return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
        }),
        (s.time = function (t, e) {
          return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
        }),
        (s.totalTime = function (t, e, i) {
          if ((l || a.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if ((0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
              this._dirty && this.totalDuration();
              var n = this._totalDuration,
                r = this._timeline;
              if ((t > n && !i && (t = n), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (N.length && V(), this.render(t, e, !1), N.length && V());
          }
          return this;
        }),
        (s.progress = s.totalProgress = function (t, e) {
          var i = this.duration();
          return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio;
        }),
        (s.startTime = function (t) {
          return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
        }),
        (s.endTime = function (t) {
          return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
        }),
        (s.timeScale = function (t) {
          if (!arguments.length) return this._timeScale;
          if (((t = t || c), this._timeline && this._timeline.smoothChildTiming)) {
            var e = this._pauseTime,
              i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
          }
          return (this._timeScale = t), this._uncache(!1);
        }),
        (s.reversed = function (t) {
          return arguments.length ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
        }),
        (s.paused = function (t) {
          if (!arguments.length) return this._paused;
          var e,
            i,
            n = this._timeline;
          return (
            t != this._paused &&
              n &&
              (l || t || a.wake(),
              (i = (e = n.rawTime()) - this._pauseTime),
              !t && n.smoothChildTiming && ((this._startTime += i), this._uncache(!1)),
              (this._pauseTime = t ? e : null),
              (this._paused = t),
              (this._active = this.isActive()),
              !t && 0 !== i && this._initted && this.duration() && ((e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale), this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
          );
        });
      var P = y("core.SimpleTimeline", function (t) {
        A.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      ((s = P.prototype = new A()).constructor = P),
        (s.kill()._gc = !1),
        (s._first = s._last = s._recent = null),
        (s._sortChildren = !1),
        (s.add = s.insert = function (t, e, i, n) {
          var r, o;
          if (
            ((t._startTime = Number(e || 0) + t._delay),
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            (t.timeline = t._timeline = this),
            t._gc && t._enabled(!0, !0),
            (r = this._last),
            this._sortChildren)
          )
            for (o = t._startTime; r && r._startTime > o; ) r = r._prev;
          return r ? ((t._next = r._next), (r._next = t)) : ((t._next = this._first), (this._first = t)), t._next ? (t._next._prev = t) : (this._last = t), (t._prev = r), (this._recent = t), this._timeline && this._uncache(!0), this;
        }),
        (s._remove = function (t, e) {
          return (
            t.timeline === this &&
              (e || t._enabled(!1, !0),
              t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
              t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
              (t._next = t._prev = t.timeline = null),
              t === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (s.render = function (t, e, i) {
          var n,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            (n = r._next),
              (r._active || (t >= r._startTime && !r._paused)) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
              (r = n);
        }),
        (s.rawTime = function () {
          return l || a.wake(), this._totalTime;
        });
      var I = y(
          "TweenLite",
          function (e, i, n) {
            if ((A.call(this, i, n), (this.render = I.prototype.render), null == e)) throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : I.selector(e) || e;
            var r,
              o,
              s,
              a = e.jquery || (e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
              l = this.vars.overwrite;
            if (((this._overwrite = l = null == l ? $[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : $[l]), (a || e instanceof Array || (e.push && p(e))) && "number" != typeof e[0]))
              for (this._targets = s = f(e), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++)
                (o = s[r])
                  ? "string" != typeof o
                    ? o.length && o !== t && o[0] && (o[0] === t || (o[0].nodeType && o[0].style && !o.nodeType))
                      ? (s.splice(r--, 1), (this._targets = s = s.concat(f(o))))
                      : ((this._siblings[r] = Q(o, this, !1)), 1 === l && this._siblings[r].length > 1 && K(o, this, null, 1, this._siblings[r]))
                    : "string" == typeof (o = s[r--] = I.selector(o)) && s.splice(r + 1, 1)
                  : s.splice(r--, 1);
            else (this._propLookup = {}), (this._siblings = Q(e, this, !1)), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || (0 === i && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -c), this.render(Math.min(0, -this._delay)));
          },
          !0
        ),
        O = function (e) {
          return e && e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType));
        };
      ((s = I.prototype = new A()).constructor = I),
        (s.kill()._gc = !1),
        (s.ratio = 0),
        (s._firstPT = s._targets = s._overwrittenProps = s._startAt = null),
        (s._notifyPluginsOfEnabled = s._lazy = !1),
        (I.version = "1.19.0"),
        (I.defaultEase = s._ease = new b(null, null, 1, 1)),
        (I.defaultOverwrite = "auto"),
        (I.ticker = a),
        (I.autoSleep = 120),
        (I.lagSmoothing = function (t, e) {
          a.lagSmoothing(t, e);
        }),
        (I.selector =
          t.$ ||
          t.jQuery ||
          function (e) {
            var i = t.$ || t.jQuery;
            return i ? ((I.selector = i), i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
          });
      var N = [],
        L = {},
        R = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        M = function (t) {
          for (var e, i = this._firstPT; i; )
            (e = i.blob ? (t ? this.join("") : this.start) : i.c * t + i.s), i.m ? (e = i.m(e, this._target || i.t)) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e), (i = i._next);
        },
        z = function (t, e, i, n) {
          var r,
            o,
            s,
            a,
            l,
            h,
            u,
            c = [t, e],
            f = 0,
            d = "",
            p = 0;
          for (c.start = t, i && (i(c), (t = c[0]), (e = c[1])), c.length = 0, r = t.match(R) || [], o = e.match(R) || [], n && ((n._next = null), (n.blob = 1), (c._firstPT = c._applyPT = n)), l = o.length, a = 0; l > a; a++)
            (u = o[a]),
              (d += (h = e.substr(f, e.indexOf(u, f) - f)) || !a ? h : ","),
              (f += h.length),
              p ? (p = (p + 1) % 5) : "rgba(" === h.substr(-5) && (p = 1),
              u === r[a] || r.length <= a
                ? (d += u)
                : (d && (c.push(d), (d = "")),
                  (s = parseFloat(r[a])),
                  c.push(s),
                  (c._firstPT = { _next: c._firstPT, t: c, p: c.length - 1, s: s, c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0, f: 0, m: p && 4 > p ? Math.round : 0 })),
              (f += u.length);
          return (d += e.substr(f)) && c.push(d), (c.setRatio = M), c;
        },
        j = function (t, e, i, n, r, o, s, a, l) {
          "function" == typeof n && (n = n(l || 0, t));
          var h,
            u = "get" === i ? t[e] : i,
            c = typeof t[e],
            f = "string" == typeof n && "=" === n.charAt(1),
            d = { t: t, p: e, s: u, f: "function" === c, pg: 0, n: r || e, m: o ? ("function" == typeof o ? o : Math.round) : 0, pr: 0, c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0 };
          return (
            "number" !== c &&
              ("function" === c && "get" === i && ((h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)), (d.s = u = s ? t[h](s) : t[h]())),
              "string" == typeof u && (s || isNaN(u))
                ? ((d.fp = s), (d = { t: z(u, n, a || I.defaultStringFilter, d), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || e, pr: 0, m: 0 }))
                : f || ((d.s = parseFloat(u)), (d.c = parseFloat(n) - d.s || 0))),
            d.c ? ((d._next = this._firstPT) && (d._next._prev = d), (this._firstPT = d), d) : void 0
          );
        },
        F = (I._internals = { isArray: p, isSelector: O, lazyTweens: N, blobDif: z }),
        W = (I._plugins = {}),
        H = (F.tweenLookup = {}),
        q = 0,
        B = (F.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1,
        }),
        $ = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
        Y = (A._rootFramesTimeline = new P()),
        U = (A._rootTimeline = new P()),
        X = 30,
        V = (F.lazyRender = function () {
          var t,
            e = N.length;
          for (L = {}; --e > -1; ) (t = N[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
          N.length = 0;
        });
      (U._startTime = a.time),
        (Y._startTime = a.frame),
        (U._active = Y._active = !0),
        setTimeout(V, 1),
        (A._updateRoot = I.render = function () {
          var t, e, i;
          if ((N.length && V(), U.render((a.time - U._startTime) * U._timeScale, !1, !1), Y.render((a.frame - Y._startTime) * Y._timeScale, !1, !1), N.length && V(), a.frame >= X)) {
            for (i in ((X = a.frame + (parseInt(I.autoSleep, 10) || 120)), H)) {
              for (t = (e = H[i].tweens).length; --t > -1; ) e[t]._gc && e.splice(t, 1);
              0 === e.length && delete H[i];
            }
            if ((!(i = U._first) || i._paused) && I.autoSleep && !Y._first && 1 === a._listeners.tick.length) {
              for (; i && i._paused; ) i = i._next;
              i || a.sleep();
            }
          }
        }),
        a.addEventListener("tick", A._updateRoot);
      var Q = function (t, e, i) {
          var n,
            r,
            o = t._gsTweenID;
          if ((H[o || (t._gsTweenID = o = "t" + q++)] || (H[o] = { target: t, tweens: [] }), e && (((n = H[o].tweens)[(r = n.length)] = e), i))) for (; --r > -1; ) n[r] === e && n.splice(r, 1);
          return H[o].tweens;
        },
        G = function (t, e, i, n) {
          var r,
            o,
            s = t.vars.onOverwrite;
          return s && (r = s(t, e, i, n)), (s = I.onOverwrite) && (o = s(t, e, i, n)), !1 !== r && !1 !== o;
        },
        K = function (t, e, i, n, r) {
          var o, s, a, l;
          if (1 === n || n >= 4) {
            for (l = r.length, o = 0; l > o; o++)
              if ((a = r[o]) !== e) a._gc || (a._kill(null, t, e) && (s = !0));
              else if (5 === n) break;
            return s;
          }
          var h,
            u = e._startTime + c,
            f = [],
            d = 0,
            p = 0 === e._duration;
          for (o = r.length; --o > -1; )
            (a = r[o]) === e ||
              a._gc ||
              a._paused ||
              (a._timeline !== e._timeline
                ? ((h = h || Z(e, 0, p)), 0 === Z(a, h, p) && (f[d++] = a))
                : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && (((p || !a._initted) && u - a._startTime <= 2e-10) || (f[d++] = a)));
          for (o = d; --o > -1; )
            if (((a = f[o]), 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || (!a._firstPT && a._initted))) {
              if (2 !== n && !G(a, e)) continue;
              a._enabled(!1, !1) && (s = !0);
            }
          return s;
        },
        Z = function (t, e, i) {
          for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline; ) {
            if (((o += n._startTime), (r *= n._timeScale), n._paused)) return -100;
            n = n._timeline;
          }
          return (o /= r) > e ? o - e : (i && o === e) || (!t._initted && 2 * c > o - e) ? c : (o += t.totalDuration() / t._timeScale / r) > e + c ? 0 : o - e - c;
        };
      (s._init = function () {
        var t,
          e,
          i,
          n,
          r,
          o,
          s = this.vars,
          a = this._overwrittenProps,
          l = this._duration,
          h = !!s.immediateRender,
          u = s.ease;
        if (s.startAt) {
          for (n in (this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (r = {}), s.startAt)) r[n] = s.startAt[n];
          if (((r.overwrite = !1), (r.immediateRender = !0), (r.lazy = h && !1 !== s.lazy), (r.startAt = r.delay = null), (this._startAt = I.to(this.target, 0, r)), h))
            if (this._time > 0) this._startAt = null;
            else if (0 !== l) return;
        } else if (s.runBackwards && 0 !== l)
          if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
          else {
            for (n in (0 !== this._time && (h = !1), (i = {}), s)) (B[n] && "autoCSS" !== n) || (i[n] = s[n]);
            if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = h && !1 !== s.lazy), (i.immediateRender = h), (this._startAt = I.to(this.target, 0, i)), h)) {
              if (0 === this._time) return;
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = u = u ? (u instanceof b ? u : "function" == typeof u ? new b(u, s.easeParams) : x[u] || I.defaultEase) : I.defaultEase),
          s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (o = this._targets.length, t = 0; o > t; t++) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], a ? a[t] : null, t) && (e = !0);
        else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
        if ((e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), s.runBackwards)) for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
        (this._onUpdate = s.onUpdate), (this._initted = !0);
      }),
        (s._initProps = function (e, i, n, r, o) {
          var s, a, l, h, u, c;
          if (null == e) return !1;
          for (s in (L[e._gsTweenID] && V(),
          this.vars.css ||
            (e.style &&
              e !== t &&
              e.nodeType &&
              W.css &&
              !1 !== this.vars.autoCSS &&
              (function (t, e) {
                var i,
                  n = {};
                for (i in t) B[i] || (i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) || !(!W[i] || (W[i] && W[i]._autoCSS)) || ((n[i] = t[i]), delete t[i]);
                t.css = n;
              })(this.vars, e)),
          this.vars))
            if (((c = this.vars[s]), B[s])) c && (c instanceof Array || (c.push && p(c))) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
            else if (W[s] && (h = new W[s]())._onInitTween(e, this.vars[s], this, o)) {
              for (this._firstPT = u = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: s, pg: 1, pr: h._priority, m: 0 }, a = h._overwriteProps.length; --a > -1; ) i[h._overwriteProps[a]] = this._firstPT;
              (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u);
            } else i[s] = j.call(this, e, s, "get", c, s, 0, null, this.vars.stringFilter, o);
          return r && this._kill(r, e)
            ? this._initProps(e, i, n, r, o)
            : this._overwrite > 1 && this._firstPT && n.length > 1 && K(e, this, i, this._overwrite, n)
            ? (this._kill(i, e), this._initProps(e, i, n, r, o))
            : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (L[e._gsTweenID] = !0), l);
        }),
        (s.render = function (t, e, i) {
          var n,
            r,
            o,
            s,
            a = this._time,
            l = this._duration,
            h = this._rawPrevTime;
          if (t >= l - 1e-7)
            (this._totalTime = this._time = l),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed || ((n = !0), (r = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
              0 === l &&
                (this._initted || !this.vars.lazy || i) &&
                (this._startTime === this._timeline._duration && (t = 0),
                (0 > h || (0 >= t && t >= -1e-7) || (h === c && "isPause" !== this.data)) && h !== t && ((i = !0), h > c && (r = "onReverseComplete")),
                (this._rawPrevTime = s = !e || t || h === t ? t : c));
          else if (1e-7 > t)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== a || (0 === l && h > 0)) && ((r = "onReverseComplete"), (n = this._reversed)),
              0 > t && ((this._active = !1), 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== c || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = s = !e || t || h === t ? t : c))),
              this._initted || (i = !0);
          else if (((this._totalTime = this._time = t), this._easeType)) {
            var u = t / l,
              f = this._easeType,
              d = this._easePower;
            (1 === f || (3 === f && u >= 0.5)) && (u = 1 - u),
              3 === f && (u *= 2),
              1 === d ? (u *= u) : 2 === d ? (u *= u * u) : 3 === d ? (u *= u * u * u) : 4 === d && (u *= u * u * u * u),
              (this.ratio = 1 === f ? 1 - u : 2 === f ? u : 0.5 > t / l ? u / 2 : 1 - u / 2);
          } else this.ratio = this._ease.getRatio(t / l);
          if (this._time !== a || i) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration))) return (this._time = this._totalTime = a), (this._rawPrevTime = h), N.push(this), void (this._lazy = [t, e]);
              this._time && !n ? (this.ratio = this._ease.getRatio(this._time / l)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active || (!this._paused && this._time !== a && t >= 0 && (this._active = !0)),
                0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))),
                o = this._firstPT;
              o;

            )
              o.f ? o.t[o.p](o.c * this.ratio + o.s) : (o.t[o.p] = o.c * this.ratio + o.s), (o = o._next);
            this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || ((this._time !== a || n || i) && this._callback("onUpdate"))),
              r &&
                (!this._gc || i) &&
                (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                !e && this.vars[r] && this._callback(r),
                0 === l && this._rawPrevTime === c && s !== c && (this._rawPrevTime = 0));
          }
        }),
        (s._kill = function (t, e, i) {
          if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
          e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
          var n,
            r,
            o,
            s,
            a,
            l,
            h,
            u,
            c,
            f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
          if ((p(e) || O(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1; ) this._kill(t, e[n], i) && (l = !0);
          else {
            if (this._targets) {
              for (n = this._targets.length; --n > -1; )
                if (e === this._targets[n]) {
                  (a = this._propLookup[n] || {}), (this._overwrittenProps = this._overwrittenProps || []), (r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all");
                  break;
                }
            } else {
              if (e !== this.target) return !1;
              (a = this._propLookup), (r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
            }
            if (a) {
              if (((h = t || a), (u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill)), i && (I.onOverwrite || this.vars.onOverwrite))) {
                for (o in h) a[o] && (c || (c = []), c.push(o));
                if ((c || !t) && !G(this, i, e, c)) return !1;
              }
              for (o in h)
                (s = a[o]) &&
                  (f && (s.f ? s.t[s.p](s.s) : (s.t[s.p] = s.s), (l = !0)),
                  s.pg && s.t._kill(h) && (l = !0),
                  (s.pg && 0 !== s.t._overwriteProps.length) || (s._prev ? (s._prev._next = s._next) : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), (s._next = s._prev = null)),
                  delete a[o]),
                  u && (r[o] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return l;
        }),
        (s.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this),
            (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            A.prototype.invalidate.call(this),
            this.vars.immediateRender && ((this._time = -c), this.render(Math.min(0, -this._delay))),
            this
          );
        }),
        (s._enabled = function (t, e) {
          if ((l || a.wake(), t && this._gc)) {
            var i,
              n = this._targets;
            if (n) for (i = n.length; --i > -1; ) this._siblings[i] = Q(n[i], this, !0);
            else this._siblings = Q(this.target, this, !0);
          }
          return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
        }),
        (I.to = function (t, e, i) {
          return new I(t, e, i);
        }),
        (I.from = function (t, e, i) {
          return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new I(t, e, i);
        }),
        (I.fromTo = function (t, e, i, n) {
          return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new I(t, e, n);
        }),
        (I.delayedCall = function (t, e, i, n, r) {
          return new I(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 });
        }),
        (I.set = function (t, e) {
          return new I(t, 0, e);
        }),
        (I.getTweensOf = function (t, e) {
          if (null == t) return [];
          var i, n, r, o;
          if (((t = "string" != typeof t ? t : I.selector(t) || t), (p(t) || O(t)) && "number" != typeof t[0])) {
            for (i = t.length, n = []; --i > -1; ) n = n.concat(I.getTweensOf(t[i], e));
            for (i = n.length; --i > -1; ) for (o = n[i], r = i; --r > -1; ) o === n[r] && n.splice(i, 1);
          } else for (i = (n = Q(t).concat()).length; --i > -1; ) (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
          return n;
        }),
        (I.killTweensOf = I.killDelayedCallsTo = function (t, e, i) {
          "object" == typeof e && ((i = e), (e = !1));
          for (var n = I.getTweensOf(t, e), r = n.length; --r > -1; ) n[r]._kill(i, t);
        });
      var J = y(
        "plugins.TweenPlugin",
        function (t, e) {
          (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = J.prototype);
        },
        !0
      );
      if (
        ((s = J.prototype),
        (J.version = "1.19.0"),
        (J.API = 2),
        (s._firstPT = null),
        (s._addTween = j),
        (s.setRatio = M),
        (s._kill = function (t) {
          var e,
            i = this._overwriteProps,
            n = this._firstPT;
          if (null != t[this._propName]) this._overwriteProps = [];
          else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
          for (; n; ) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? ((n._prev._next = n._next), (n._prev = null)) : this._firstPT === n && (this._firstPT = n._next)), (n = n._next);
          return !1;
        }),
        (s._mod = s._roundProps = function (t) {
          for (var e, i = this._firstPT; i; ) (e = t[this._propName] || (null != i.n && t[i.n.split(this._propName + "_").join("")])) && "function" == typeof e && (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)), (i = i._next);
        }),
        (I._onPluginEvent = function (t, e) {
          var i,
            n,
            r,
            o,
            s,
            a = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; a; ) {
              for (s = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
              (a._prev = n ? n._prev : o) ? (a._prev._next = a) : (r = a), (a._next = n) ? (n._prev = a) : (o = a), (a = s);
            }
            a = e._firstPT = r;
          }
          for (; a; ) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), (a = a._next);
          return i;
        }),
        (J.activate = function (t) {
          for (var e = t.length; --e > -1; ) t[e].API === J.API && (W[new t[e]()._propName] = t[e]);
          return !0;
        }),
        (v.plugin = function (t) {
          if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
          var e,
            i = t.propName,
            n = t.priority || 0,
            r = t.overwriteProps,
            o = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
            s = y(
              "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
              function () {
                J.call(this, i, n), (this._overwriteProps = r || []);
              },
              !0 === t.global
            ),
            a = (s.prototype = new J(i));
          for (e in ((a.constructor = s), (s.API = t.API), o)) "function" == typeof t[e] && (a[o[e]] = t[e]);
          return (s.version = t.version), J.activate([s]), s;
        }),
        (r = t._gsQueue))
      ) {
        for (o = 0; o < r.length; o++) r[o]();
        for (s in m) m[s].func || t.console.log("GSAP encountered missing dependency: " + s);
      }
      l = !1;
    }
  })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
  ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t = document.documentElement,
      e = window,
      i = function (i, n) {
        var r = "x" === n ? "Width" : "Height",
          o = "scroll" + r,
          s = "client" + r,
          a = document.body;
        return i === e || i === t || i === a ? Math.max(t[o], a[o]) - (e["inner" + r] || t[s] || a[s]) : i[o] - i["offset" + r];
      },
      n = function (i, n) {
        var r = "scroll" + ("x" === n ? "Left" : "Top");
        return (
          i === e && (null != i.pageXOffset ? (r = "page" + n.toUpperCase() + "Offset") : (i = null != t[r] ? t : document.body)),
          function () {
            return i[r];
          }
        );
      },
      r = function (i, r) {
        var o = (function (t) {
            return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === e || (t.nodeType && t.style) ? t : null;
          })(i).getBoundingClientRect(),
          s = !r || r === e || r === document.body,
          a = (s ? t : r).getBoundingClientRect(),
          l = { x: o.left - a.left, y: o.top - a.top };
        return !s && r && ((l.x += n(r, "x")()), (l.y += n(r, "y")())), l;
      },
      o = function (t, e, n) {
        var o = typeof t;
        return "number" === o || ("string" === o && "=" === t.charAt(1)) ? t : "max" === t ? i(e, n) : Math.min(i(e, n), r(t, e)[n]);
      },
      s = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        version: "1.8.0",
        init: function (t, i, r) {
          return (
            (this._wdw = t === e),
            (this._target = t),
            (this._tween = r),
            "object" != typeof i ? "string" == typeof (i = { y: i }).y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y) : i.nodeType && (i = { y: i, x: i }),
            (this.vars = i),
            (this._autoKill = !1 !== i.autoKill),
            (this.getX = n(t, "x")),
            (this.getY = n(t, "y")),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            null != i.x ? (this._addTween(this, "x", this.x, o(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : (this.skipX = !0),
            null != i.y ? (this._addTween(this, "y", this.y, o(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : (this.skipY = !0),
            !0
          );
        },
        set: function (t) {
          this._super.setRatio.call(this, t);
          var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
            r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
            o = r - this.yPrev,
            a = n - this.xPrev,
            l = s.autoKillThreshold;
          this.x < 0 && (this.x = 0),
            this.y < 0 && (this.y = 0),
            this._autoKill &&
              (!this.skipX && (a > l || -l > a) && n < i(this._target, "x") && (this.skipX = !0),
              !this.skipY && (o > l || -l > o) && r < i(this._target, "y") && (this.skipY = !0),
              this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
            this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)),
            (this.xPrev = this.x),
            (this.yPrev = this.y);
        },
      }),
      a = s.prototype;
    (s.max = i),
      (s.getOffset = r),
      (s.autoKillThreshold = 7),
      (a._kill = function (t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t);
      });
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (t) {
    "use strict";
    var e = function () {
      return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin;
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), (module.exports = e()));
  })(),
  (function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? (module.exports = e(require, exports, module)) : (t.Tether = e());
  })(this, function (t, e, i) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t) {
      var e = t.getBoundingClientRect(),
        i = {};
      for (var n in e) i[n] = e[n];
      if (t.ownerDocument !== document) {
        var o = t.ownerDocument.defaultView.frameElement;
        if (o) {
          var s = r(o);
          (i.top += s.top), (i.bottom += s.top), (i.left += s.left), (i.right += s.left);
        }
      }
      return i;
    }
    function o(t) {
      var e = (getComputedStyle(t) || {}).position,
        i = [];
      if ("fixed" === e) return [t];
      for (var n = t; (n = n.parentNode) && n && 1 === n.nodeType; ) {
        var r = void 0;
        try {
          r = getComputedStyle(n);
        } catch (t) {}
        if (null == r) return i.push(n), i;
        var o = r,
          s = o.overflow,
          a = o.overflowX,
          l = o.overflowY;
        /(auto|scroll)/.test(s + l + a) && ("absolute" !== e || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && i.push(n);
      }
      return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i;
    }
    function s() {
      S && document.body.removeChild(S), (S = null);
    }
    function a(t) {
      var e = void 0;
      t === document ? ((e = document), (t = document.documentElement)) : (e = t.ownerDocument);
      var i = e.documentElement,
        n = r(t),
        o = k();
      return (
        (n.top -= o.top),
        (n.left -= o.left),
        void 0 === n.width && (n.width = document.body.scrollWidth - n.left - n.right),
        void 0 === n.height && (n.height = document.body.scrollHeight - n.top - n.bottom),
        (n.top = n.top - i.clientTop),
        (n.left = n.left - i.clientLeft),
        (n.right = e.body.clientWidth - n.width - n.left),
        (n.bottom = e.body.clientHeight - n.height - n.top),
        n
      );
    }
    function l(t) {
      return t.offsetParent || document.documentElement;
    }
    function h() {
      if (A) return A;
      var t = document.createElement("div");
      (t.style.width = "100%"), (t.style.height = "200px");
      var e = document.createElement("div");
      u(e.style, { position: "absolute", top: 0, left: 0, pointerEvents: "none", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), e.appendChild(t), document.body.appendChild(e);
      var i = t.offsetWidth;
      e.style.overflow = "scroll";
      var n = t.offsetWidth;
      i === n && (n = e.clientWidth), document.body.removeChild(e);
      var r = i - n;
      return (A = { width: r, height: r });
    }
    function u() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = [];
      return (
        Array.prototype.push.apply(e, arguments),
        e.slice(1).forEach(function (e) {
          if (e) for (var i in e) ({}.hasOwnProperty.call(e, i) && (t[i] = e[i]));
        }),
        t
      );
    }
    function c(t, e) {
      if (void 0 !== t.classList)
        e.split(" ").forEach(function (e) {
          e.trim() && t.classList.remove(e);
        });
      else {
        var i = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
          n = p(t).replace(i, " ");
        m(t, n);
      }
    }
    function f(t, e) {
      if (void 0 !== t.classList)
        e.split(" ").forEach(function (e) {
          e.trim() && t.classList.add(e);
        });
      else {
        c(t, e);
        var i = p(t) + " " + e;
        m(t, i);
      }
    }
    function d(t, e) {
      if (void 0 !== t.classList) return t.classList.contains(e);
      var i = p(t);
      return new RegExp("(^| )" + e + "( |$)", "gi").test(i);
    }
    function p(t) {
      return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className;
    }
    function m(t, e) {
      t.setAttribute("class", e);
    }
    function g(t, e, i) {
      i.forEach(function (i) {
        -1 === e.indexOf(i) && d(t, i) && c(t, i);
      }),
        e.forEach(function (e) {
          d(t, e) || f(t, e);
        });
    }
    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function v(t, e) {
      var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
      return t + i >= e && e >= t - i;
    }
    function y() {
      return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date();
    }
    function _() {
      for (var t = { top: 0, left: 0 }, e = arguments.length, i = Array(e), n = 0; e > n; n++) i[n] = arguments[n];
      return (
        i.forEach(function (e) {
          var i = e.top,
            n = e.left;
          "string" == typeof i && (i = parseFloat(i, 10)), "string" == typeof n && (n = parseFloat(n, 10)), (t.top += i), (t.left += n);
        }),
        t
      );
    }
    function b(t, e) {
      return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = (parseFloat(t.left, 10) / 100) * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = (parseFloat(t.top, 10) / 100) * e.height), t;
    }
    function x(t, e) {
      return (
        "scrollParent" === e ? (e = t.scrollParents[0]) : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]),
        e === document && (e = e.documentElement),
        void 0 !== e.nodeType &&
          (function () {
            var t = e,
              i = a(e),
              n = i,
              r = getComputedStyle(e);
            if (((e = [n.left, n.top, i.width + n.left, i.height + n.top]), t.ownerDocument !== document)) {
              var o = t.ownerDocument.defaultView;
              (e[0] += o.pageXOffset), (e[1] += o.pageYOffset), (e[2] += o.pageXOffset), (e[3] += o.pageYOffset);
            }
            U.forEach(function (t, i) {
              "Top" === (t = t[0].toUpperCase() + t.substr(1)) || "Left" === t ? (e[i] += parseFloat(r["border" + t + "Width"])) : (e[i] -= parseFloat(r["border" + t + "Width"]));
            });
          })(),
        e
      );
    }
    var T = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      w = void 0;
    void 0 === w && (w = { modules: [] });
    var S = null,
      C = (function () {
        var t = 0;
        return function () {
          return ++t;
        };
      })(),
      E = {},
      k = function () {
        var t = S;
        t || ((t = document.createElement("div")).setAttribute("data-tether-id", C()), u(t.style, { top: 0, left: 0, position: "absolute" }), document.body.appendChild(t), (S = t));
        var e = t.getAttribute("data-tether-id");
        return (
          void 0 === E[e] &&
            ((E[e] = r(t)),
            P(function () {
              delete E[e];
            })),
          E[e]
        );
      },
      A = null,
      D = [],
      P = function (t) {
        D.push(t);
      },
      I = function () {
        for (var t = void 0; (t = D.pop()); ) t();
      },
      O = (function () {
        function t() {
          n(this, t);
        }
        return (
          T(t, [
            {
              key: "on",
              value: function (t, e, i) {
                var n = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({ handler: e, ctx: i, once: n });
              },
            },
            {
              key: "once",
              value: function (t, e, i) {
                this.on(t, e, i, !0);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                if (void 0 !== this.bindings && void 0 !== this.bindings[t])
                  if (void 0 === e) delete this.bindings[t];
                  else for (var i = 0; i < this.bindings[t].length; ) this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : ++i;
              },
            },
            {
              key: "trigger",
              value: function (t) {
                if (void 0 !== this.bindings && this.bindings[t]) {
                  for (var e = 0, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; i > r; r++) n[r - 1] = arguments[r];
                  for (; e < this.bindings[t].length; ) {
                    var o = this.bindings[t][e],
                      s = o.handler,
                      a = o.ctx,
                      l = o.once,
                      h = a;
                    void 0 === h && (h = this), s.apply(h, n), l ? this.bindings[t].splice(e, 1) : ++e;
                  }
                }
              },
            },
          ]),
          t
        );
      })();
    w.Utils = {
      getActualBoundingClientRect: r,
      getScrollParents: o,
      getBounds: a,
      getOffsetParent: l,
      extend: u,
      addClass: f,
      removeClass: c,
      hasClass: d,
      updateClasses: g,
      defer: P,
      flush: I,
      uniqueId: C,
      Evented: O,
      getScrollBarSize: h,
      removeUtilElements: s,
    };
    var N = (function () {
        return function (t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t))
            return (function (t, e) {
              var i = [],
                n = !0,
                r = !1,
                o = void 0;
              try {
                for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
              } catch (t) {
                (r = !0), (o = t);
              } finally {
                try {
                  !n && a.return && a.return();
                } finally {
                  if (r) throw o;
                }
              }
              return i;
            })(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      })(),
      L =
        ((T = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })()),
        function (t, e, i) {
          for (var n = !0; n; ) {
            var r = t,
              o = e,
              s = i;
            (n = !1), null === r && (r = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(r, o);
            if (void 0 !== a) {
              if ("value" in a) return a.value;
              var l = a.get;
              if (void 0 === l) return;
              return l.call(s);
            }
            var h = Object.getPrototypeOf(r);
            if (null === h) return;
            (t = h), (e = o), (i = s), (n = !0), (a = h = void 0);
          }
        });
    if (void 0 === w) throw new Error("You must include the utils.js file before tether.js");
    var o = (X = w.Utils).getScrollParents,
      l = ((a = X.getBounds), X.getOffsetParent),
      f = ((u = X.extend), X.addClass),
      c = X.removeClass,
      h = ((g = X.updateClasses), (P = X.defer), (I = X.flush), X.getScrollBarSize),
      s = X.removeUtilElements,
      R = (function () {
        if ("undefined" == typeof document) return "";
        for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < e.length; ++i) {
          var n = e[i];
          if (void 0 !== t.style[n]) return n;
        }
      })(),
      M = [],
      z = function () {
        M.forEach(function (t) {
          t.position(!1);
        }),
          I();
      };
    !(function () {
      var t = null,
        e = null,
        i = null,
        n = function n() {
          return void 0 !== e && e > 16 ? ((e = Math.min(e - 16, 250)), void (i = setTimeout(n, 250))) : void ((void 0 !== t && y() - t < 10) || (null != i && (clearTimeout(i), (i = null)), (t = y()), z(), (e = y() - t)));
        };
      "undefined" != typeof window &&
        void 0 !== window.addEventListener &&
        ["resize", "scroll", "touchmove"].forEach(function (t) {
          window.addEventListener(t, n);
        });
    })();
    var j = { center: "center", left: "right", right: "left" },
      F = { middle: "middle", top: "bottom", bottom: "top" },
      W = { top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%" },
      H = function (t) {
        var e = t.left,
          i = t.top;
        return void 0 !== W[t.left] && (e = W[t.left]), void 0 !== W[t.top] && (i = W[t.top]), { left: e, top: i };
      },
      q = function (t) {
        var e = t.split(" "),
          i = N(e, 2);
        return { top: i[0], left: i[1] };
      },
      B = q,
      $ = (function (t) {
        function e(t) {
          var i = this;
          n(this, e),
            L(Object.getPrototypeOf(e.prototype), "constructor", this).call(this),
            (this.position = this.position.bind(this)),
            M.push(this),
            (this.history = []),
            this.setOptions(t, !1),
            w.modules.forEach(function (t) {
              void 0 !== t.initialize && t.initialize.call(i);
            }),
            this.position();
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          })(e, O),
          T(e, [
            {
              key: "getClass",
              value: function () {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                  e = this.options.classes;
                return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
              },
            },
            {
              key: "setOptions",
              value: function (t) {
                var e = this,
                  i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                this.options = u({ offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether" }, t);
                var n = this.options,
                  r = n.element,
                  s = n.target,
                  a = n.targetModifier;
                if (
                  ((this.element = r),
                  (this.target = s),
                  (this.targetModifier = a),
                  "viewport" === this.target ? ((this.target = document.body), (this.targetModifier = "visible")) : "scroll-handle" === this.target && ((this.target = document.body), (this.targetModifier = "scroll-handle")),
                  ["element", "target"].forEach(function (t) {
                    if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
                    void 0 !== e[t].jquery ? (e[t] = e[t][0]) : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
                  }),
                  f(this.element, this.getClass("element")),
                  !1 !== this.options.addTargetClasses && f(this.target, this.getClass("target")),
                  !this.options.attachment)
                )
                  throw new Error("Tether Error: You must provide an attachment");
                (this.targetAttachment = B(this.options.targetAttachment)),
                  (this.attachment = B(this.options.attachment)),
                  (this.offset = q(this.options.offset)),
                  (this.targetOffset = q(this.options.targetOffset)),
                  void 0 !== this.scrollParents && this.disable(),
                  "scroll-handle" === this.targetModifier ? (this.scrollParents = [this.target]) : (this.scrollParents = o(this.target)),
                  !1 !== this.options.enabled && this.enable(i);
              },
            },
            {
              key: "getTargetBounds",
              value: function () {
                if (void 0 === this.targetModifier) return a(this.target);
                if ("visible" === this.targetModifier)
                  return this.target === document.body
                    ? { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth }
                    : (((o = { height: (t = a(this.target)).height, width: t.width, top: t.top, left: t.left }).height = Math.min(o.height, t.height - (pageYOffset - t.top))),
                      (o.height = Math.min(o.height, t.height - (t.top + t.height - (pageYOffset + innerHeight)))),
                      (o.height = Math.min(innerHeight, o.height)),
                      (o.height -= 2),
                      (o.width = Math.min(o.width, t.width - (pageXOffset - t.left))),
                      (o.width = Math.min(o.width, t.width - (t.left + t.width - (pageXOffset + innerWidth)))),
                      (o.width = Math.min(innerWidth, o.width)),
                      (o.width -= 2),
                      o.top < pageYOffset && (o.top = pageYOffset),
                      o.left < pageXOffset && (o.left = pageXOffset),
                      o);
                if ("scroll-handle" === this.targetModifier) {
                  var t = void 0,
                    e = this.target;
                  e === document.body ? ((e = document.documentElement), (t = { left: pageXOffset, top: pageYOffset, height: innerHeight, width: innerWidth })) : (t = a(e));
                  var i = getComputedStyle(e),
                    n = 0;
                  (e.scrollWidth > e.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body) && (n = 15);
                  var r = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - n,
                    o = { width: 15, height: 0.975 * r * (r / e.scrollHeight), left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15 },
                    s = 0;
                  408 > r && this.target === document.body && (s = -11e-5 * Math.pow(r, 2) - 0.00727 * r + 22.58), this.target !== document.body && (o.height = Math.max(o.height, 24));
                  var l = this.target.scrollTop / (e.scrollHeight - r);
                  return (o.top = l * (r - o.height - s) + t.top + parseFloat(i.borderTopWidth)), this.target === document.body && (o.height = Math.max(o.height, 24)), o;
                }
              },
            },
            {
              key: "clearCache",
              value: function () {
                this._cache = {};
              },
            },
            {
              key: "cache",
              value: function (t, e) {
                return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
              },
            },
            {
              key: "enable",
              value: function () {
                var t = this,
                  e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                !1 !== this.options.addTargetClasses && f(this.target, this.getClass("enabled")),
                  f(this.element, this.getClass("enabled")),
                  (this.enabled = !0),
                  this.scrollParents.forEach(function (e) {
                    e !== t.target.ownerDocument && e.addEventListener("scroll", t.position);
                  }),
                  e && this.position();
              },
            },
            {
              key: "disable",
              value: function () {
                var t = this;
                c(this.target, this.getClass("enabled")),
                  c(this.element, this.getClass("enabled")),
                  (this.enabled = !1),
                  void 0 !== this.scrollParents &&
                    this.scrollParents.forEach(function (e) {
                      e.removeEventListener("scroll", t.position);
                    });
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = this;
                this.disable(),
                  M.forEach(function (e, i) {
                    e === t && M.splice(i, 1);
                  }),
                  0 === M.length && s();
              },
            },
            {
              key: "updateAttachClasses",
              value: function (t, e) {
                var i = this;
                (t = t || this.attachment), (e = e || this.targetAttachment);
                void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                var n = this._addAttachClasses;
                t.top && n.push(this.getClass("element-attached") + "-" + t.top),
                  t.left && n.push(this.getClass("element-attached") + "-" + t.left),
                  e.top && n.push(this.getClass("target-attached") + "-" + e.top),
                  e.left && n.push(this.getClass("target-attached") + "-" + e.left);
                var r = [];
                ["left", "top", "bottom", "right", "middle", "center"].forEach(function (t) {
                  r.push(i.getClass("element-attached") + "-" + t), r.push(i.getClass("target-attached") + "-" + t);
                }),
                  P(function () {
                    void 0 !== i._addAttachClasses && (g(i.element, i._addAttachClasses, r), !1 !== i.options.addTargetClasses && g(i.target, i._addAttachClasses, r), delete i._addAttachClasses);
                  });
              },
            },
            {
              key: "position",
              value: function () {
                var t = this,
                  e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                if (this.enabled) {
                  this.clearCache();
                  var i = (function (t, e) {
                    var i = t.left,
                      n = t.top;
                    return "auto" === i && (i = j[e.left]), "auto" === n && (n = F[e.top]), { left: i, top: n };
                  })(this.targetAttachment, this.attachment);
                  this.updateAttachClasses(this.attachment, i);
                  var n = this.cache("element-bounds", function () {
                      return a(t.element);
                    }),
                    r = n.width,
                    o = n.height;
                  if (0 === r && 0 === o && void 0 !== this.lastSize) {
                    var s = this.lastSize;
                    (r = s.width), (o = s.height);
                  } else this.lastSize = { width: r, height: o };
                  var u = this.cache("target-bounds", function () {
                      return t.getTargetBounds();
                    }),
                    c = u,
                    f = b(H(this.attachment), { width: r, height: o }),
                    d = b(H(i), c),
                    p = b(this.offset, { width: r, height: o }),
                    m = b(this.targetOffset, c);
                  (f = _(f, p)), (d = _(d, m));
                  for (var g = u.left + d.left - f.left, v = u.top + d.top - f.top, y = 0; y < w.modules.length; ++y) {
                    var x = w.modules[y].position.call(this, {
                      left: g,
                      top: v,
                      targetAttachment: i,
                      targetPos: u,
                      elementPos: n,
                      offset: f,
                      targetOffset: d,
                      manualOffset: p,
                      manualTargetOffset: m,
                      scrollbarSize: E,
                      attachment: this.attachment,
                    });
                    if (!1 === x) return !1;
                    void 0 !== x && "object" == typeof x && ((v = x.top), (g = x.left));
                  }
                  var T = { page: { top: v, left: g }, viewport: { top: v - pageYOffset, bottom: pageYOffset - v - o + innerHeight, left: g - pageXOffset, right: pageXOffset - g - r + innerWidth } },
                    S = this.target.ownerDocument,
                    C = S.defaultView,
                    E = void 0;
                  return (
                    C.innerHeight > S.documentElement.clientHeight && ((E = this.cache("scrollbar-size", h)), (T.viewport.bottom -= E.height)),
                    C.innerWidth > S.documentElement.clientWidth && ((E = this.cache("scrollbar-size", h)), (T.viewport.right -= E.width)),
                    (-1 === ["", "static"].indexOf(S.body.style.position) || -1 === ["", "static"].indexOf(S.body.parentElement.style.position)) &&
                      ((T.page.bottom = S.body.scrollHeight - v - o), (T.page.right = S.body.scrollWidth - g - r)),
                    void 0 !== this.options.optimizations &&
                      !1 !== this.options.optimizations.moveElement &&
                      void 0 === this.targetModifier &&
                      (function () {
                        var e = t.cache("target-offsetparent", function () {
                            return l(t.target);
                          }),
                          i = t.cache("target-offsetparent-bounds", function () {
                            return a(e);
                          }),
                          n = getComputedStyle(e),
                          r = i,
                          o = {};
                        if (
                          (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
                            o[t.toLowerCase()] = parseFloat(n["border" + t + "Width"]);
                          }),
                          (i.right = S.body.scrollWidth - i.left - r.width + o.right),
                          (i.bottom = S.body.scrollHeight - i.top - r.height + o.bottom),
                          T.page.top >= i.top + o.top && T.page.bottom >= i.bottom && T.page.left >= i.left + o.left && T.page.right >= i.right)
                        ) {
                          var s = e.scrollTop,
                            h = e.scrollLeft;
                          T.offset = { top: T.page.top - i.top + s - o.top, left: T.page.left - i.left + h - o.left };
                        }
                      })(),
                    this.move(T),
                    this.history.unshift(T),
                    this.history.length > 3 && this.history.pop(),
                    e && I(),
                    !0
                  );
                }
              },
            },
            {
              key: "move",
              value: function (t) {
                var e = this;
                if (void 0 !== this.element.parentNode) {
                  var i = {};
                  for (var n in t)
                    for (var r in ((i[n] = {}), t[n])) {
                      for (var o = !1, s = 0; s < this.history.length; ++s) {
                        var a = this.history[s];
                        if (void 0 !== a[n] && !v(a[n][r], t[n][r])) {
                          o = !0;
                          break;
                        }
                      }
                      o || (i[n][r] = !0);
                    }
                  var h = { top: "", left: "", right: "", bottom: "" },
                    c = function (t, i) {
                      if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                        var n = void 0,
                          r = void 0;
                        if ((t.top ? ((h.top = 0), (n = i.top)) : ((h.bottom = 0), (n = -i.bottom)), t.left ? ((h.left = 0), (r = i.left)) : ((h.right = 0), (r = -i.right)), window.matchMedia))
                          window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || ((r = Math.round(r)), (n = Math.round(n)));
                        (h[R] = "translateX(" + r + "px) translateY(" + n + "px)"), "msTransform" !== R && (h[R] += " translateZ(0)");
                      } else t.top ? (h.top = i.top + "px") : (h.bottom = i.bottom + "px"), t.left ? (h.left = i.left + "px") : (h.right = i.right + "px");
                    },
                    f = !1;
                  if (
                    ((i.page.top || i.page.bottom) && (i.page.left || i.page.right)
                      ? ((h.position = "absolute"), c(i.page, t.page))
                      : (i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right)
                      ? ((h.position = "fixed"), c(i.viewport, t.viewport))
                      : void 0 !== i.offset && i.offset.top && i.offset.left
                      ? (function () {
                          h.position = "absolute";
                          var n = e.cache("target-offsetparent", function () {
                            return l(e.target);
                          });
                          l(e.element) !== n &&
                            P(function () {
                              e.element.parentNode.removeChild(e.element), n.appendChild(e.element);
                            }),
                            c(i.offset, t.offset),
                            (f = !0);
                        })()
                      : ((h.position = "absolute"), c({ top: !0, left: !0 }, t.page)),
                    !f)
                  ) {
                    for (var d = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName; ) {
                      if ("static" !== getComputedStyle(p).position) {
                        d = !1;
                        break;
                      }
                      p = p.parentNode;
                    }
                    d || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element));
                  }
                  var m = {},
                    g = !1;
                  for (var r in h) {
                    var y = h[r];
                    this.element.style[r] !== y && ((g = !0), (m[r] = y));
                  }
                  g &&
                    P(function () {
                      u(e.element.style, m), e.trigger("repositioned");
                    });
                }
              },
            },
          ]),
          e
        );
      })();
    ($.modules = []), (w.position = z);
    var Y = u($, w),
      u =
        ((N = (function () {
          return function (t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t))
              return (function (t, e) {
                var i = [],
                  n = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                } catch (t) {
                  (r = !0), (o = t);
                } finally {
                  try {
                    !n && a.return && a.return();
                  } finally {
                    if (r) throw o;
                  }
                }
                return i;
              })(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })()),
        (a = (X = w.Utils).getBounds),
        X.extend),
      U = ((g = X.updateClasses), (P = X.defer), ["left", "top", "right", "bottom"]);
    w.modules.push({
      position: function (t) {
        var e = this,
          i = t.top,
          n = t.left,
          r = t.targetAttachment;
        if (!this.options.constraints) return !0;
        var o = this.cache("element-bounds", function () {
            return a(e.element);
          }),
          s = o.height,
          l = o.width;
        if (0 === l && 0 === s && void 0 !== this.lastSize) {
          var h = this.lastSize;
          (l = h.width), (s = h.height);
        }
        var c = this.cache("target-bounds", function () {
            return e.getTargetBounds();
          }),
          f = c.height,
          d = c.width,
          p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
        this.options.constraints.forEach(function (t) {
          var e = t.outOfBoundsClass,
            i = t.pinnedClass;
          e && p.push(e), i && p.push(i);
        }),
          p.forEach(function (t) {
            ["left", "top", "right", "bottom"].forEach(function (e) {
              p.push(t + "-" + e);
            });
          });
        var m = [],
          v = u({}, r),
          y = u({}, this.attachment);
        return (
          this.options.constraints.forEach(function (t) {
            var o = t.to,
              a = t.attachment,
              h = t.pin;
            void 0 === a && (a = "");
            var u = void 0,
              c = void 0;
            if (a.indexOf(" ") >= 0) {
              var p = a.split(" "),
                g = N(p, 2);
              (c = g[0]), (u = g[1]);
            } else u = c = a;
            var _ = x(e, o);
            ("target" === c || "both" === c) && (i < _[1] && "top" === v.top && ((i += f), (v.top = "bottom")), i + s > _[3] && "bottom" === v.top && ((i -= f), (v.top = "top"))),
              "together" === c &&
                ("top" === v.top &&
                  ("bottom" === y.top && i < _[1] ? ((i += f), (v.top = "bottom"), (i += s), (y.top = "top")) : "top" === y.top && i + s > _[3] && i - (s - f) >= _[1] && ((i -= s - f), (v.top = "bottom"), (y.top = "bottom"))),
                "bottom" === v.top &&
                  ("top" === y.top && i + s > _[3] ? ((i -= f), (v.top = "top"), (i -= s), (y.top = "bottom")) : "bottom" === y.top && i < _[1] && i + (2 * s - f) <= _[3] && ((i += s - f), (v.top = "top"), (y.top = "top"))),
                "middle" === v.top && (i + s > _[3] && "top" === y.top ? ((i -= s), (y.top = "bottom")) : i < _[1] && "bottom" === y.top && ((i += s), (y.top = "top")))),
              ("target" === u || "both" === u) && (n < _[0] && "left" === v.left && ((n += d), (v.left = "right")), n + l > _[2] && "right" === v.left && ((n -= d), (v.left = "left"))),
              "together" === u &&
                (n < _[0] && "left" === v.left
                  ? "right" === y.left
                    ? ((n += d), (v.left = "right"), (n += l), (y.left = "left"))
                    : "left" === y.left && ((n += d), (v.left = "right"), (n -= l), (y.left = "right"))
                  : n + l > _[2] && "right" === v.left
                  ? "left" === y.left
                    ? ((n -= d), (v.left = "left"), (n -= l), (y.left = "right"))
                    : "right" === y.left && ((n -= d), (v.left = "left"), (n += l), (y.left = "left"))
                  : "center" === v.left && (n + l > _[2] && "left" === y.left ? ((n -= l), (y.left = "right")) : n < _[0] && "right" === y.left && ((n += l), (y.left = "left")))),
              ("element" === c || "both" === c) && (i < _[1] && "bottom" === y.top && ((i += s), (y.top = "top")), i + s > _[3] && "top" === y.top && ((i -= s), (y.top = "bottom"))),
              ("element" === u || "both" === u) &&
                (n < _[0] && ("right" === y.left ? ((n += l), (y.left = "left")) : "center" === y.left && ((n += l / 2), (y.left = "left"))),
                n + l > _[2] && ("left" === y.left ? ((n -= l), (y.left = "right")) : "center" === y.left && ((n -= l / 2), (y.left = "right")))),
              "string" == typeof h
                ? (h = h.split(",").map(function (t) {
                    return t.trim();
                  }))
                : !0 === h && (h = ["top", "left", "right", "bottom"]),
              (h = h || []);
            var b = [],
              T = [];
            i < _[1] && (h.indexOf("top") >= 0 ? ((i = _[1]), b.push("top")) : T.push("top")),
              i + s > _[3] && (h.indexOf("bottom") >= 0 ? ((i = _[3] - s), b.push("bottom")) : T.push("bottom")),
              n < _[0] && (h.indexOf("left") >= 0 ? ((n = _[0]), b.push("left")) : T.push("left")),
              n + l > _[2] && (h.indexOf("right") >= 0 ? ((n = _[2] - l), b.push("right")) : T.push("right")),
              b.length &&
                (function () {
                  var t;
                  (t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned")),
                    m.push(t),
                    b.forEach(function (e) {
                      m.push(t + "-" + e);
                    });
                })(),
              T.length &&
                (function () {
                  var t;
                  (t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds")),
                    m.push(t),
                    T.forEach(function (e) {
                      m.push(t + "-" + e);
                    });
                })(),
              (b.indexOf("left") >= 0 || b.indexOf("right") >= 0) && (y.left = v.left = !1),
              (b.indexOf("top") >= 0 || b.indexOf("bottom") >= 0) && (y.top = v.top = !1),
              (v.top !== r.top || v.left !== r.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && (e.updateAttachClasses(y, v), e.trigger("update", { attachment: y, targetAttachment: v }));
          }),
          P(function () {
            !1 !== e.options.addTargetClasses && g(e.target, m, p), g(e.element, m, p);
          }),
          { top: i, left: n }
        );
      },
    });
    var X,
      a = (X = w.Utils).getBounds,
      g = X.updateClasses;
    P = X.defer;
    w.modules.push({
      position: function (t) {
        var e = this,
          i = t.top,
          n = t.left,
          r = this.cache("element-bounds", function () {
            return a(e.element);
          }),
          o = r.height,
          s = r.width,
          l = this.getTargetBounds(),
          h = i + o,
          u = n + s,
          c = [];
        i <= l.bottom &&
          h >= l.top &&
          ["left", "right"].forEach(function (t) {
            var e = l[t];
            (e === n || e === u) && c.push(t);
          }),
          n <= l.right &&
            u >= l.left &&
            ["top", "bottom"].forEach(function (t) {
              var e = l[t];
              (e === i || e === h) && c.push(t);
            });
        var f = [],
          d = [];
        return (
          f.push(this.getClass("abutted")),
          ["left", "top", "right", "bottom"].forEach(function (t) {
            f.push(e.getClass("abutted") + "-" + t);
          }),
          c.length && d.push(this.getClass("abutted")),
          c.forEach(function (t) {
            d.push(e.getClass("abutted") + "-" + t);
          }),
          P(function () {
            !1 !== e.options.addTargetClasses && g(e.target, d, f), g(e.element, d, f);
          }),
          !0
        );
      },
    });
    N = (function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t))
          return (function (t, e) {
            var i = [],
              n = !0,
              r = !1,
              o = void 0;
            try {
              for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
            } catch (t) {
              (r = !0), (o = t);
            } finally {
              try {
                !n && a.return && a.return();
              } finally {
                if (r) throw o;
              }
            }
            return i;
          })(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    })();
    return (
      w.modules.push({
        position: function (t) {
          var e = t.top,
            i = t.left;
          if (this.options.shift) {
            var n = this.options.shift;
            "function" == typeof this.options.shift && (n = this.options.shift.call(this, { top: e, left: i }));
            var r = void 0,
              o = void 0;
            if ("string" == typeof n) {
              (n = n.split(" "))[1] = n[1] || n[0];
              var s = N(n, 2);
              (r = s[0]), (o = s[1]), (r = parseFloat(r, 10)), (o = parseFloat(o, 10));
            } else (r = n.top), (o = n.left);
            return { top: (e += r), left: (i += o) };
          }
        },
      }),
      Y
    );
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
!(function (t) {
  var e = jQuery.fn.jquery.split(" ")[0].split(".");
  if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1) || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
})(),
  (function () {
    function t(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    var e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            },
      i = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      n = (function (t) {
        function e(t) {
          return {}.toString
            .call(t)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase();
        }
        function i(t) {
          return (t[0] || t).nodeType;
        }
        function n(e) {
          var i = this,
            n = !1;
          return (
            t(this).one(s.TRANSITION_END, function () {
              n = !0;
            }),
            setTimeout(function () {
              n || s.triggerTransitionEnd(i);
            }, e),
            this
          );
        }
        var r = !1,
          o = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
          s = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (t) {
              do {
                t += ~~(1e6 * Math.random());
              } while (document.getElementById(t));
              return t;
            },
            getSelectorFromElement: function (t) {
              var e = t.getAttribute("data-target");
              return e || ((e = t.getAttribute("href") || ""), (e = /^#[a-z]/i.test(e) ? e : null)), e;
            },
            reflow: function (t) {
              return t.offsetHeight;
            },
            triggerTransitionEnd: function (e) {
              t(e).trigger(r.end);
            },
            supportsTransitionEnd: function () {
              return Boolean(r);
            },
            typeCheckConfig: function (t, n, r) {
              for (var o in r)
                if (r.hasOwnProperty(o)) {
                  var s,
                    a = r[o],
                    l = n[o];
                  if (((s = l && i(l) ? "element" : e(l)), !new RegExp(a).test(s))) throw new Error(t.toUpperCase() + ': Option "' + o + '" provided type "' + s + '" but expected type "' + a + '".');
                }
            },
          };
        return (
          (r = (function () {
            if (window.QUnit) return !1;
            var t = document.createElement("bootstrap");
            for (var e in o) if (void 0 !== t.style[e]) return { end: o[e] };
            return !1;
          })()),
          (t.fn.emulateTransitionEnd = n),
          s.supportsTransitionEnd() &&
            (t.event.special[s.TRANSITION_END] = {
              bindType: r.end,
              delegateType: r.end,
              handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
              },
            }),
          s
        );
      })(jQuery),
      r =
        ((function (e) {
          var r = "alert",
            o = "bs.alert",
            s = "." + o,
            a = e.fn[r],
            l = { CLOSE: "close" + s, CLOSED: "closed" + s, CLICK_DATA_API: "click" + s + ".data-api" },
            h = "alert",
            u = "fade",
            c = "active",
            f = (function () {
              function r(e) {
                t(this, r), (this._element = e);
              }
              return (
                (r.prototype.close = function (t) {
                  t = t || this._element;
                  var e = this._getRootElement(t);
                  this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                }),
                (r.prototype.dispose = function () {
                  e.removeData(this._element, o), (this._element = null);
                }),
                (r.prototype._getRootElement = function (t) {
                  var i = n.getSelectorFromElement(t),
                    r = !1;
                  return i && (r = e(i)[0]), r || (r = e(t).closest("." + h)[0]), r;
                }),
                (r.prototype._triggerCloseEvent = function (t) {
                  var i = e.Event(l.CLOSE);
                  return e(t).trigger(i), i;
                }),
                (r.prototype._removeElement = function (t) {
                  var i = this;
                  return (
                    e(t).removeClass(c),
                    n.supportsTransitionEnd() && e(t).hasClass(u)
                      ? void e(t)
                          .one(n.TRANSITION_END, function (e) {
                            return i._destroyElement(t, e);
                          })
                          .emulateTransitionEnd(150)
                      : void this._destroyElement(t)
                  );
                }),
                (r.prototype._destroyElement = function (t) {
                  e(t).detach().trigger(l.CLOSED).remove();
                }),
                (r._jQueryInterface = function (t) {
                  return this.each(function () {
                    var i = e(this),
                      n = i.data(o);
                    n || ((n = new r(this)), i.data(o, n)), "close" === t && n[t](this);
                  });
                }),
                (r._handleDismiss = function (t) {
                  return function (e) {
                    e && e.preventDefault(), t.close(this);
                  };
                }),
                i(r, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-alpha.5";
                    },
                  },
                ]),
                r
              );
            })();
          e(document).on(l.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f())),
            (e.fn[r] = f._jQueryInterface),
            (e.fn[r].Constructor = f),
            (e.fn[r].noConflict = function () {
              return (e.fn[r] = a), f._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          var n = "button",
            r = "bs.button",
            o = "." + r,
            s = ".data-api",
            a = e.fn[n],
            l = "active",
            h = "btn",
            u = "focus",
            c = '[data-toggle^="button"]',
            f = '[data-toggle="buttons"]',
            d = "input",
            p = ".active",
            m = ".btn",
            g = { CLICK_DATA_API: "click" + o + s, FOCUS_BLUR_DATA_API: "focus" + o + s + " blur" + o + s },
            v = (function () {
              function n(e) {
                t(this, n), (this._element = e);
              }
              return (
                (n.prototype.toggle = function () {
                  var t = !0,
                    i = e(this._element).closest(f)[0];
                  if (i) {
                    var n = e(this._element).find(d)[0];
                    if (n) {
                      if ("radio" === n.type)
                        if (n.checked && e(this._element).hasClass(l)) t = !1;
                        else {
                          var r = e(i).find(p)[0];
                          r && e(r).removeClass(l);
                        }
                      t && ((n.checked = !e(this._element).hasClass(l)), e(this._element).trigger("change")), n.focus();
                    }
                  } else this._element.setAttribute("aria-pressed", !e(this._element).hasClass(l));
                  t && e(this._element).toggleClass(l);
                }),
                (n.prototype.dispose = function () {
                  e.removeData(this._element, r), (this._element = null);
                }),
                (n._jQueryInterface = function (t) {
                  return this.each(function () {
                    var i = e(this).data(r);
                    i || ((i = new n(this)), e(this).data(r, i)), "toggle" === t && i[t]();
                  });
                }),
                i(n, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-alpha.5";
                    },
                  },
                ]),
                n
              );
            })();
          e(document)
            .on(g.CLICK_DATA_API, c, function (t) {
              t.preventDefault();
              var i = t.target;
              e(i).hasClass(h) || (i = e(i).closest(m)), v._jQueryInterface.call(e(i), "toggle");
            })
            .on(g.FOCUS_BLUR_DATA_API, c, function (t) {
              var i = e(t.target).closest(m)[0];
              e(i).toggleClass(u, /^focus(in)?$/.test(t.type));
            }),
            (e.fn[n] = v._jQueryInterface),
            (e.fn[n].Constructor = v),
            (e.fn[n].noConflict = function () {
              return (e.fn[n] = a), v._jQueryInterface;
            });
        })(jQuery),
        (function (r) {
          var o = "carousel",
            s = "bs.carousel",
            a = "." + s,
            l = ".data-api",
            h = r.fn[o],
            u = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
            c = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
            f = "next",
            d = "prev",
            p = { SLIDE: "slide" + a, SLID: "slid" + a, KEYDOWN: "keydown" + a, MOUSEENTER: "mouseenter" + a, MOUSELEAVE: "mouseleave" + a, LOAD_DATA_API: "load" + a + l, CLICK_DATA_API: "click" + a + l },
            m = "carousel",
            g = "active",
            v = "slide",
            y = "right",
            _ = "left",
            b = {
              ACTIVE: ".active",
              ACTIVE_ITEM: ".active.carousel-item",
              ITEM: ".carousel-item",
              NEXT_PREV: ".next, .prev",
              INDICATORS: ".carousel-indicators",
              DATA_SLIDE: "[data-slide], [data-slide-to]",
              DATA_RIDE: '[data-ride="carousel"]',
            },
            x = (function () {
              function l(e, i) {
                t(this, l),
                  (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this._config = this._getConfig(i)),
                  (this._element = r(e)[0]),
                  (this._indicatorsElement = r(this._element).find(b.INDICATORS)[0]),
                  this._addEventListeners();
              }
              return (
                (l.prototype.next = function () {
                  this._isSliding || this._slide(f);
                }),
                (l.prototype.nextWhenVisible = function () {
                  document.hidden || this.next();
                }),
                (l.prototype.prev = function () {
                  this._isSliding || this._slide(d);
                }),
                (l.prototype.pause = function (t) {
                  t || (this._isPaused = !0), r(this._element).find(b.NEXT_PREV)[0] && n.supportsTransitionEnd() && (n.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                }),
                (l.prototype.cycle = function (t) {
                  t || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval), (this._interval = null)),
                    this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                }),
                (l.prototype.to = function (t) {
                  var e = this;
                  this._activeElement = r(this._element).find(b.ACTIVE_ITEM)[0];
                  var i = this._getItemIndex(this._activeElement);
                  if (!(t > this._items.length - 1 || t < 0)) {
                    if (this._isSliding)
                      return void r(this._element).one(p.SLID, function () {
                        return e.to(t);
                      });
                    if (i === t) return this.pause(), void this.cycle();
                    var n = t > i ? f : d;
                    this._slide(n, this._items[t]);
                  }
                }),
                (l.prototype.dispose = function () {
                  r(this._element).off(a),
                    r.removeData(this._element, s),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
                }),
                (l.prototype._getConfig = function (t) {
                  return (t = r.extend({}, u, t)), n.typeCheckConfig(o, t, c), t;
                }),
                (l.prototype._addEventListeners = function () {
                  var t = this;
                  this._config.keyboard &&
                    r(this._element).on(p.KEYDOWN, function (e) {
                      return t._keydown(e);
                    }),
                    "hover" !== this._config.pause ||
                      "ontouchstart" in document.documentElement ||
                      r(this._element)
                        .on(p.MOUSEENTER, function (e) {
                          return t.pause(e);
                        })
                        .on(p.MOUSELEAVE, function (e) {
                          return t.cycle(e);
                        });
                }),
                (l.prototype._keydown = function (t) {
                  if ((t.preventDefault(), !/input|textarea/i.test(t.target.tagName)))
                    switch (t.which) {
                      case 37:
                        this.prev();
                        break;
                      case 39:
                        this.next();
                        break;
                      default:
                        return;
                    }
                }),
                (l.prototype._getItemIndex = function (t) {
                  return (this._items = r.makeArray(r(t).parent().find(b.ITEM))), this._items.indexOf(t);
                }),
                (l.prototype._getItemByDirection = function (t, e) {
                  var i = t === f,
                    n = t === d,
                    r = this._getItemIndex(e),
                    o = this._items.length - 1;
                  if (((n && 0 === r) || (i && r === o)) && !this._config.wrap) return e;
                  var s = (r + (t === d ? -1 : 1)) % this._items.length;
                  return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                }),
                (l.prototype._triggerSlideEvent = function (t, e) {
                  var i = r.Event(p.SLIDE, { relatedTarget: t, direction: e });
                  return r(this._element).trigger(i), i;
                }),
                (l.prototype._setActiveIndicatorElement = function (t) {
                  if (this._indicatorsElement) {
                    r(this._indicatorsElement).find(b.ACTIVE).removeClass(g);
                    var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && r(e).addClass(g);
                  }
                }),
                (l.prototype._slide = function (t, e) {
                  var i = this,
                    o = r(this._element).find(b.ACTIVE_ITEM)[0],
                    s = e || (o && this._getItemByDirection(t, o)),
                    a = Boolean(this._interval),
                    l = t === f ? _ : y;
                  if (s && r(s).hasClass(g)) this._isSliding = !1;
                  else if (!this._triggerSlideEvent(s, l).isDefaultPrevented() && o && s) {
                    (this._isSliding = !0), a && this.pause(), this._setActiveIndicatorElement(s);
                    var h = r.Event(p.SLID, { relatedTarget: s, direction: l });
                    n.supportsTransitionEnd() && r(this._element).hasClass(v)
                      ? (r(s).addClass(t),
                        n.reflow(s),
                        r(o).addClass(l),
                        r(s).addClass(l),
                        r(o)
                          .one(n.TRANSITION_END, function () {
                            r(s).removeClass(l).removeClass(t),
                              r(s).addClass(g),
                              r(o).removeClass(g).removeClass(t).removeClass(l),
                              (i._isSliding = !1),
                              setTimeout(function () {
                                return r(i._element).trigger(h);
                              }, 0);
                          })
                          .emulateTransitionEnd(600))
                      : (r(o).removeClass(g), r(s).addClass(g), (this._isSliding = !1), r(this._element).trigger(h)),
                      a && this.cycle();
                  }
                }),
                (l._jQueryInterface = function (t) {
                  return this.each(function () {
                    var i = r(this).data(s),
                      n = r.extend({}, u, r(this).data());
                    "object" === (void 0 === t ? "undefined" : e(t)) && r.extend(n, t);
                    var o = "string" == typeof t ? t : n.slide;
                    if ((i || ((i = new l(this, n)), r(this).data(s, i)), "number" == typeof t)) i.to(t);
                    else if ("string" == typeof o) {
                      if (void 0 === i[o]) throw new Error('No method named "' + o + '"');
                      i[o]();
                    } else n.interval && (i.pause(), i.cycle());
                  });
                }),
                (l._dataApiClickHandler = function (t) {
                  var e = n.getSelectorFromElement(this);
                  if (e) {
                    var i = r(e)[0];
                    if (i && r(i).hasClass(m)) {
                      var o = r.extend({}, r(i).data(), r(this).data()),
                        a = this.getAttribute("data-slide-to");
                      a && (o.interval = !1), l._jQueryInterface.call(r(i), o), a && r(i).data(s).to(a), t.preventDefault();
                    }
                  }
                }),
                i(l, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-alpha.5";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return u;
                    },
                  },
                ]),
                l
              );
            })();
          r(document).on(p.CLICK_DATA_API, b.DATA_SLIDE, x._dataApiClickHandler),
            r(window).on(p.LOAD_DATA_API, function () {
              r(b.DATA_RIDE).each(function () {
                var t = r(this);
                x._jQueryInterface.call(t, t.data());
              });
            }),
            (r.fn[o] = x._jQueryInterface),
            (r.fn[o].Constructor = x),
            (r.fn[o].noConflict = function () {
              return (r.fn[o] = h), x._jQueryInterface;
            });
        })(jQuery),
        (function (r) {
          var o = "collapse",
            s = "bs.collapse",
            a = "." + s,
            l = r.fn[o],
            h = { toggle: !0, parent: "" },
            u = { toggle: "boolean", parent: "string" },
            c = { SHOW: "show" + a, SHOWN: "shown" + a, HIDE: "hide" + a, HIDDEN: "hidden" + a, CLICK_DATA_API: "click" + a + ".data-api" },
            f = "active",
            d = "collapse",
            p = "collapsing",
            m = "collapsed",
            g = "width",
            v = "height",
            y = ".card > .active, .card > .collapsing",
            _ = '[data-toggle="collapse"]',
            b = (function () {
              function a(e, i) {
                t(this, a),
                  (this._isTransitioning = !1),
                  (this._element = e),
                  (this._config = this._getConfig(i)),
                  (this._triggerArray = r.makeArray(r('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'))),
                  (this._parent = this._config.parent ? this._getParent() : null),
                  this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                  this._config.toggle && this.toggle();
              }
              return (
                (a.prototype.toggle = function () {
                  r(this._element).hasClass(f) ? this.hide() : this.show();
                }),
                (a.prototype.show = function () {
                  var t = this;
                  if (!this._isTransitioning && !r(this._element).hasClass(f)) {
                    var e = void 0,
                      i = void 0;
                    if ((this._parent && ((e = r.makeArray(r(this._parent).find(y))).length || (e = null)), !(e && ((i = r(e).data(s)), i && i._isTransitioning)))) {
                      var o = r.Event(c.SHOW);
                      if ((r(this._element).trigger(o), !o.isDefaultPrevented())) {
                        e && (a._jQueryInterface.call(r(e), "hide"), i || r(e).data(s, null));
                        var l = this._getDimension();
                        r(this._element).removeClass(d).addClass(p),
                          (this._element.style[l] = 0),
                          this._element.setAttribute("aria-expanded", !0),
                          this._triggerArray.length && r(this._triggerArray).removeClass(m).attr("aria-expanded", !0),
                          this.setTransitioning(!0);
                        var h = function () {
                          r(t._element).removeClass(p).addClass(d).addClass(f), (t._element.style[l] = ""), t.setTransitioning(!1), r(t._element).trigger(c.SHOWN);
                        };
                        if (!n.supportsTransitionEnd()) return void h();
                        var u = "scroll" + (l[0].toUpperCase() + l.slice(1));
                        r(this._element).one(n.TRANSITION_END, h).emulateTransitionEnd(600), (this._element.style[l] = this._element[u] + "px");
                      }
                    }
                  }
                }),
                (a.prototype.hide = function () {
                  var t = this;
                  if (!this._isTransitioning && r(this._element).hasClass(f)) {
                    var e = r.Event(c.HIDE);
                    if ((r(this._element).trigger(e), !e.isDefaultPrevented())) {
                      var i = this._getDimension(),
                        o = i === g ? "offsetWidth" : "offsetHeight";
                      (this._element.style[i] = this._element[o] + "px"),
                        n.reflow(this._element),
                        r(this._element).addClass(p).removeClass(d).removeClass(f),
                        this._element.setAttribute("aria-expanded", !1),
                        this._triggerArray.length && r(this._triggerArray).addClass(m).attr("aria-expanded", !1),
                        this.setTransitioning(!0);
                      var s = function () {
                        t.setTransitioning(!1), r(t._element).removeClass(p).addClass(d).trigger(c.HIDDEN);
                      };
                      return (this._element.style[i] = ""), n.supportsTransitionEnd() ? void r(this._element).one(n.TRANSITION_END, s).emulateTransitionEnd(600) : void s();
                    }
                  }
                }),
                (a.prototype.setTransitioning = function (t) {
                  this._isTransitioning = t;
                }),
                (a.prototype.dispose = function () {
                  r.removeData(this._element, s), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                }),
                (a.prototype._getConfig = function (t) {
                  return ((t = r.extend({}, h, t)).toggle = Boolean(t.toggle)), n.typeCheckConfig(o, t, u), t;
                }),
                (a.prototype._getDimension = function () {
                  return r(this._element).hasClass(g) ? g : v;
                }),
                (a.prototype._getParent = function () {
                  var t = this,
                    e = r(this._config.parent)[0],
                    i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                  return (
                    r(e)
                      .find(i)
                      .each(function (e, i) {
                        t._addAriaAndCollapsedClass(a._getTargetFromElement(i), [i]);
                      }),
                    e
                  );
                }),
                (a.prototype._addAriaAndCollapsedClass = function (t, e) {
                  if (t) {
                    var i = r(t).hasClass(f);
                    t.setAttribute("aria-expanded", i), e.length && r(e).toggleClass(m, !i).attr("aria-expanded", i);
                  }
                }),
                (a._getTargetFromElement = function (t) {
                  var e = n.getSelectorFromElement(t);
                  return e ? r(e)[0] : null;
                }),
                (a._jQueryInterface = function (t) {
                  return this.each(function () {
                    var i = r(this),
                      n = i.data(s),
                      o = r.extend({}, h, i.data(), "object" === (void 0 === t ? "undefined" : e(t)) && t);
                    if ((!n && o.toggle && /show|hide/.test(t) && (o.toggle = !1), n || ((n = new a(this, o)), i.data(s, n)), "string" == typeof t)) {
                      if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                i(a, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-alpha.5";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return h;
                    },
                  },
                ]),
                a
              );
            })();
          r(document).on(c.CLICK_DATA_API, _, function (t) {
            t.preventDefault();
            var e = b._getTargetFromElement(this),
              i = r(e).data(s) ? "toggle" : r(this).data();
            b._jQueryInterface.call(r(e), i);
          }),
            (r.fn[o] = b._jQueryInterface),
            (r.fn[o].Constructor = b),
            (r.fn[o].noConflict = function () {
              return (r.fn[o] = l), b._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          var r = "dropdown",
            o = "bs.dropdown",
            s = "." + o,
            a = ".data-api",
            l = e.fn[r],
            h = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, CLICK: "click" + s, CLICK_DATA_API: "click" + s + a, KEYDOWN_DATA_API: "keydown" + s + a },
            u = "dropdown-backdrop",
            c = "disabled",
            f = "active",
            d = ".dropdown-backdrop",
            p = '[data-toggle="dropdown"]',
            m = ".dropdown form",
            g = '[role="menu"]',
            v = '[role="listbox"]',
            y = ".navbar-nav",
            _ = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a',
            b = (function () {
              function r(e) {
                t(this, r), (this._element = e), this._addEventListeners();
              }
              return (
                (r.prototype.toggle = function () {
                  if (this.disabled || e(this).hasClass(c)) return !1;
                  var t = r._getParentFromElement(this),
                    i = e(t).hasClass(f);
                  if ((r._clearMenus(), i)) return !1;
                  if ("ontouchstart" in document.documentElement && !e(t).closest(y).length) {
                    var n = document.createElement("div");
                    (n.className = u), e(n).insertBefore(this), e(n).on("click", r._clearMenus);
                  }
                  var o = { relatedTarget: this },
                    s = e.Event(h.SHOW, o);
                  return e(t).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), e(t).toggleClass(f), e(t).trigger(e.Event(h.SHOWN, o)), !1);
                }),
                (r.prototype.dispose = function () {
                  e.removeData(this._element, o), e(this._element).off(s), (this._element = null);
                }),
                (r.prototype._addEventListeners = function () {
                  e(this._element).on(h.CLICK, this.toggle);
                }),
                (r._jQueryInterface = function (t) {
                  return this.each(function () {
                    var i = e(this).data(o);
                    if ((i || e(this).data(o, (i = new r(this))), "string" == typeof t)) {
                      if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                      i[t].call(this);
                    }
                  });
                }),
                (r._clearMenus = function (t) {
                  if (!t || 3 !== t.which) {
                    var i = e(d)[0];
                    i && i.parentNode.removeChild(i);
                    for (var n = e.makeArray(e(p)), o = 0; o < n.length; o++) {
                      var s = r._getParentFromElement(n[o]),
                        a = { relatedTarget: n[o] };
                      if (e(s).hasClass(f) && !(t && "click" === t.type && /input|textarea/i.test(t.target.tagName) && e.contains(s, t.target))) {
                        var l = e.Event(h.HIDE, a);
                        e(s).trigger(l), l.isDefaultPrevented() || (n[o].setAttribute("aria-expanded", "false"), e(s).removeClass(f).trigger(e.Event(h.HIDDEN, a)));
                      }
                    }
                  }
                }),
                (r._getParentFromElement = function (t) {
                  var i = void 0,
                    r = n.getSelectorFromElement(t);
                  return r && (i = e(r)[0]), i || t.parentNode;
                }),
                (r._dataApiKeydownHandler = function (t) {
                  if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(c))) {
                    var i = r._getParentFromElement(this),
                      n = e(i).hasClass(f);
                    if ((!n && 27 !== t.which) || (n && 27 === t.which)) {
                      if (27 === t.which) {
                        var o = e(i).find(p)[0];
                        e(o).trigger("focus");
                      }
                      return void e(this).trigger("click");
                    }
                    var s = e.makeArray(e(_));
                    if (
                      (s = s.filter(function (t) {
                        return t.offsetWidth || t.offsetHeight;
                      })).length
                    ) {
                      var a = s.indexOf(t.target);
                      38 === t.which && a > 0 && a--, 40 === t.which && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus();
                    }
                  }
                }),
                i(r, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-alpha.5";
                    },
                  },
                ]),
                r
              );
            })();
          e(document)
            .on(h.KEYDOWN_DATA_API, p, b._dataApiKeydownHandler)
            .on(h.KEYDOWN_DATA_API, g, b._dataApiKeydownHandler)
            .on(h.KEYDOWN_DATA_API, v, b._dataApiKeydownHandler)
            .on(h.CLICK_DATA_API, b._clearMenus)
            .on(h.CLICK_DATA_API, p, b.prototype.toggle)
            .on(h.CLICK_DATA_API, m, function (t) {
              t.stopPropagation();
            }),
            (e.fn[r] = b._jQueryInterface),
            (e.fn[r].Constructor = b),
            (e.fn[r].noConflict = function () {
              return (e.fn[r] = l), b._jQueryInterface;
            });
        })(jQuery),
        (function (r) {
          var o = "modal",
            s = "bs.modal",
            a = "." + s,
            l = r.fn[o],
            h = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            u = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            c = {
              HIDE: "hide" + a,
              HIDDEN: "hidden" + a,
              SHOW: "show" + a,
              SHOWN: "shown" + a,
              FOCUSIN: "focusin" + a,
              RESIZE: "resize" + a,
              CLICK_DISMISS: "click.dismiss" + a,
              KEYDOWN_DISMISS: "keydown.dismiss" + a,
              MOUSEUP_DISMISS: "mouseup.dismiss" + a,
              MOUSEDOWN_DISMISS: "mousedown.dismiss" + a,
              CLICK_DATA_API: "click" + a + ".data-api",
            },
            f = "modal-scrollbar-measure",
            d = "modal-backdrop",
            p = "modal-open",
            m = "fade",
            g = "active",
            v = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed" },
            y = (function () {
              function l(e, i) {
                t(this, l),
                  (this._config = this._getConfig(i)),
                  (this._element = e),
                  (this._dialog = r(e).find(v.DIALOG)[0]),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._originalBodyPadding = 0),
                  (this._scrollbarWidth = 0);
              }
              return (
                (l.prototype.toggle = function (t) {
                  return this._isShown ? this.hide() : this.show(t);
                }),
                (l.prototype.show = function (t) {
                  var e = this,
                    i = r.Event(c.SHOW, { relatedTarget: t });
                  r(this._element).trigger(i),
                    this._isShown ||
                      i.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      r(document.body).addClass(p),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      r(this._element).on(c.CLICK_DISMISS, v.DATA_DISMISS, function (t) {
                        return e.hide(t);
                      }),
                      r(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                        r(e._element).one(c.MOUSEUP_DISMISS, function (t) {
                          r(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function () {
                        return e._showElement(t);
                      }));
                }),
                (l.prototype.hide = function (t) {
                  var e = this;
                  t && t.preventDefault();
                  var i = r.Event(c.HIDE);
                  r(this._element).trigger(i),
                    this._isShown &&
                      !i.isDefaultPrevented() &&
                      ((this._isShown = !1),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      r(document).off(c.FOCUSIN),
                      r(this._element).removeClass(g),
                      r(this._element).off(c.CLICK_DISMISS),
                      r(this._dialog).off(c.MOUSEDOWN_DISMISS),
                      n.supportsTransitionEnd() && r(this._element).hasClass(m)
                        ? r(this._element)
                            .one(n.TRANSITION_END, function (t) {
                              return e._hideModal(t);
                            })
                            .emulateTransitionEnd(300)
                        : this._hideModal());
                }),
                (l.prototype.dispose = function () {
                  r.removeData(this._element, s),
                    r(window).off(a),
                    r(document).off(a),
                    r(this._element).off(a),
                    r(this._backdrop).off(a),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._originalBodyPadding = null),
                    (this._scrollbarWidth = null);
                }),
                (l.prototype._getConfig = function (t) {
                  return (t = r.extend({}, h, t)), n.typeCheckConfig(o, t, u), t;
                }),
                (l.prototype._showElement = function (t) {
                  var e = this,
                    i = n.supportsTransitionEnd() && r(this._element).hasClass(m);
                  (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    (this._element.scrollTop = 0),
                    i && n.reflow(this._element),
                    r(this._element).addClass(g),
                    this._config.focus && this._enforceFocus();
                  var o = r.Event(c.SHOWN, { relatedTarget: t }),
                    s = function () {
                      e._config.focus && e._element.focus(), r(e._element).trigger(o);
                    };
                  i ? r(this._dialog).one(n.TRANSITION_END, s).emulateTransitionEnd(300) : s();
                }),
                (l.prototype._enforceFocus = function () {
                  var t = this;
                  r(document)
                    .off(c.FOCUSIN)
                    .on(c.FOCUSIN, function (e) {
                      document === e.target || t._element === e.target || r(t._element).has(e.target).length || t._element.focus();
                    });
                }),
                (l.prototype._setEscapeEvent = function () {
                  var t = this;
                  this._isShown && this._config.keyboard
                    ? r(this._element).on(c.KEYDOWN_DISMISS, function (e) {
                        27 === e.which && t.hide();
                      })
                    : this._isShown || r(this._element).off(c.KEYDOWN_DISMISS);
                }),
                (l.prototype._setResizeEvent = function () {
                  var t = this;
                  this._isShown
                    ? r(window).on(c.RESIZE, function (e) {
                        return t._handleUpdate(e);
                      })
                    : r(window).off(c.RESIZE);
                }),
                (l.prototype._hideModal = function () {
                  var t = this;
                  (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", "true"),
                    this._showBackdrop(function () {
                      r(document.body).removeClass(p), t._resetAdjustments(), t._resetScrollbar(), r(t._element).trigger(c.HIDDEN);
                    });
                }),
                (l.prototype._removeBackdrop = function () {
                  this._backdrop && (r(this._backdrop).remove(), (this._backdrop = null));
                }),
                (l.prototype._showBackdrop = function (t) {
                  var e = this,
                    i = r(this._element).hasClass(m) ? m : "";
                  if (this._isShown && this._config.backdrop) {
                    var o = n.supportsTransitionEnd() && i;
                    if (
                      ((this._backdrop = document.createElement("div")),
                      (this._backdrop.className = d),
                      i && r(this._backdrop).addClass(i),
                      r(this._backdrop).appendTo(document.body),
                      r(this._element).on(c.CLICK_DISMISS, function (t) {
                        return e._ignoreBackdropClick ? void (e._ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()));
                      }),
                      o && n.reflow(this._backdrop),
                      r(this._backdrop).addClass(g),
                      !t)
                    )
                      return;
                    if (!o) return void t();
                    r(this._backdrop).one(n.TRANSITION_END, t).emulateTransitionEnd(150);
                  } else if (!this._isShown && this._backdrop) {
                    r(this._backdrop).removeClass(g);
                    var s = function () {
                      e._removeBackdrop(), t && t();
                    };
                    n.supportsTransitionEnd() && r(this._element).hasClass(m) ? r(this._backdrop).one(n.TRANSITION_END, s).emulateTransitionEnd(150) : s();
                  } else t && t();
                }),
                (l.prototype._handleUpdate = function () {
                  this._adjustDialog();
                }),
                (l.prototype._adjustDialog = function () {
                  var t = this._element.scrollHeight > document.documentElement.clientHeight;
                  !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                }),
                (l.prototype._resetAdjustments = function () {
                  (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }),
                (l.prototype._checkScrollbar = function () {
                  (this._isBodyOverflowing = document.body.clientWidth < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (l.prototype._setScrollbar = function () {
                  var t = parseInt(r(v.FIXED_CONTENT).css("padding-right") || 0, 10);
                  (this._originalBodyPadding = document.body.style.paddingRight || ""), this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px");
                }),
                (l.prototype._resetScrollbar = function () {
                  document.body.style.paddingRight = this._originalBodyPadding;
                }),
                (l.prototype._getScrollbarWidth = function () {
                  var t = document.createElement("div");
                  (t.className = f), document.body.appendChild(t);
                  var e = t.offsetWidth - t.clientWidth;
                  return document.body.removeChild(t), e;
                }),
                (l._jQueryInterface = function (t, i) {
                  return this.each(function () {
                    var n = r(this).data(s),
                      o = r.extend({}, l.Default, r(this).data(), "object" === (void 0 === t ? "undefined" : e(t)) && t);
                    if ((n || ((n = new l(this, o)), r(this).data(s, n)), "string" == typeof t)) {
                      if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                      n[t](i);
                    } else o.show && n.show(i);
                  });
                }),
                i(l, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-alpha.5";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return h;
                    },
                  },
                ]),
                l
              );
            })();
          r(document).on(c.CLICK_DATA_API, v.DATA_TOGGLE, function (t) {
            var e = this,
              i = void 0,
              o = n.getSelectorFromElement(this);
            o && (i = r(o)[0]);
            var a = r(i).data(s) ? "toggle" : r.extend({}, r(i).data(), r(this).data());
            "A" === this.tagName && t.preventDefault();
            var l = r(i).one(c.SHOW, function (t) {
              t.isDefaultPrevented() ||
                l.one(c.HIDDEN, function () {
                  r(e).is(":visible") && e.focus();
                });
            });
            y._jQueryInterface.call(r(i), a, this);
          }),
            (r.fn[o] = y._jQueryInterface),
            (r.fn[o].Constructor = y),
            (r.fn[o].noConflict = function () {
              return (r.fn[o] = l), y._jQueryInterface;
            });
        })(jQuery),
        (function (r) {
          var o = "scrollspy",
            s = "bs.scrollspy",
            a = "." + s,
            l = r.fn[o],
            h = { offset: 10, method: "auto", target: "" },
            u = { offset: "number", method: "string", target: "(string|element)" },
            c = { ACTIVATE: "activate" + a, SCROLL: "scroll" + a, LOAD_DATA_API: "load" + a + ".data-api" },
            f = "dropdown-item",
            d = "active",
            p = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: ".active",
              LIST_ITEM: ".list-item",
              LI: "li",
              LI_DROPDOWN: "li.dropdown",
              NAV_LINKS: ".nav-link",
              DROPDOWN: ".dropdown",
              DROPDOWN_ITEMS: ".dropdown-item",
              DROPDOWN_TOGGLE: ".dropdown-toggle",
            },
            m = "offset",
            g = "position",
            v = (function () {
              function l(e, i) {
                var n = this;
                t(this, l),
                  (this._element = e),
                  (this._scrollElement = "BODY" === e.tagName ? window : e),
                  (this._config = this._getConfig(i)),
                  (this._selector = this._config.target + " " + p.NAV_LINKS + "," + this._config.target + " " + p.DROPDOWN_ITEMS),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  r(this._scrollElement).on(c.SCROLL, function (t) {
                    return n._process(t);
                  }),
                  this.refresh(),
                  this._process();
              }
              return (
                (l.prototype.refresh = function () {
                  var t = this,
                    e = this._scrollElement !== this._scrollElement.window ? g : m,
                    i = "auto" === this._config.method ? e : this._config.method,
                    o = i === g ? this._getScrollTop() : 0;
                  (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight()),
                    r
                      .makeArray(r(this._selector))
                      .map(function (t) {
                        var e = void 0,
                          s = n.getSelectorFromElement(t);
                        return s && (e = r(s)[0]), e && (e.offsetWidth || e.offsetHeight) ? [r(e)[i]().top + o, s] : null;
                      })
                      .filter(function (t) {
                        return t;
                      })
                      .sort(function (t, e) {
                        return t[0] - e[0];
                      })
                      .forEach(function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1]);
                      });
                }),
                (l.prototype.dispose = function () {
                  r.removeData(this._element, s),
                    r(this._scrollElement).off(a),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
                }),
                (l.prototype._getConfig = function (t) {
                  if ("string" != typeof (t = r.extend({}, h, t)).target) {
                    var e = r(t.target).attr("id");
                    e || ((e = n.getUID(o)), r(t.target).attr("id", e)), (t.target = "#" + e);
                  }
                  return n.typeCheckConfig(o, t, u), t;
                }),
                (l.prototype._getScrollTop = function () {
                  return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;
                }),
                (l.prototype._getScrollHeight = function () {
                  return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }),
                (l.prototype._process = function () {
                  var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    i = this._config.offset + e - this._scrollElement.offsetHeight;
                  if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n);
                  }
                  if (this._activeTarget && t < this._offsets[0]) return (this._activeTarget = null), void this._clear();
                  for (var r = this._offsets.length; r--; ) {
                    this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
                  }
                }),
                (l.prototype._activate = function (t) {
                  (this._activeTarget = t), this._clear();
                  var e = this._selector.split(",");
                  e = e.map(function (e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                  });
                  var i = r(e.join(","));
                  i.hasClass(f) ? (i.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(d), i.addClass(d)) : i.parents(p.LI).find(p.NAV_LINKS).addClass(d), r(this._scrollElement).trigger(c.ACTIVATE, { relatedTarget: t });
                }),
                (l.prototype._clear = function () {
                  r(this._selector).filter(p.ACTIVE).removeClass(d);
                }),
                (l._jQueryInterface = function (t) {
                  return this.each(function () {
                    var i = r(this).data(s),
                      n = ("object" === (void 0 === t ? "undefined" : e(t)) && t) || null;
                    if ((i || ((i = new l(this, n)), r(this).data(s, i)), "string" == typeof t)) {
                      if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                      i[t]();
                    }
                  });
                }),
                i(l, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-alpha.5";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return h;
                    },
                  },
                ]),
                l
              );
            })();
          r(window).on(c.LOAD_DATA_API, function () {
            for (var t = r.makeArray(r(p.DATA_SPY)), e = t.length; e--; ) {
              var i = r(t[e]);
              v._jQueryInterface.call(i, i.data());
            }
          }),
            (r.fn[o] = v._jQueryInterface),
            (r.fn[o].Constructor = v),
            (r.fn[o].noConflict = function () {
              return (r.fn[o] = l), v._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          var r = "tab",
            o = "bs.tab",
            s = "." + o,
            a = e.fn[r],
            l = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, CLICK_DATA_API: "click" + s + ".data-api" },
            h = "dropdown-menu",
            u = "active",
            c = "fade",
            f = "in",
            d = ".dropdown",
            p = "ul:not(.dropdown-menu), ol:not(.dropdown-menu)",
            m = "> .nav-item .fade, > .fade",
            g = ".active",
            v = "> .nav-item > .active, > .active",
            y = '[data-toggle="tab"], [data-toggle="pill"]',
            _ = ".dropdown-toggle",
            b = "> .dropdown-menu .active",
            x = (function () {
              function r(e) {
                t(this, r), (this._element = e);
              }
              return (
                (r.prototype.show = function () {
                  var t = this;
                  if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !e(this._element).hasClass(u)) {
                    var i = void 0,
                      r = void 0,
                      o = e(this._element).closest(p)[0],
                      s = n.getSelectorFromElement(this._element);
                    o && (r = (r = e.makeArray(e(o).find(g)))[r.length - 1]);
                    var a = e.Event(l.HIDE, { relatedTarget: this._element }),
                      h = e.Event(l.SHOW, { relatedTarget: r });
                    if ((r && e(r).trigger(a), e(this._element).trigger(h), !h.isDefaultPrevented() && !a.isDefaultPrevented())) {
                      s && (i = e(s)[0]), this._activate(this._element, o);
                      var c = function () {
                        var i = e.Event(l.HIDDEN, { relatedTarget: t._element }),
                          n = e.Event(l.SHOWN, { relatedTarget: r });
                        e(r).trigger(i), e(t._element).trigger(n);
                      };
                      i ? this._activate(i, i.parentNode, c) : c();
                    }
                  }
                }),
                (r.prototype.dispose = function () {
                  e.removeClass(this._element, o), (this._element = null);
                }),
                (r.prototype._activate = function (t, i, r) {
                  var o = this,
                    s = e(i).find(v)[0],
                    a = r && n.supportsTransitionEnd() && ((s && e(s).hasClass(c)) || Boolean(e(i).find(m)[0])),
                    l = function () {
                      return o._transitionComplete(t, s, a, r);
                    };
                  s && a ? e(s).one(n.TRANSITION_END, l).emulateTransitionEnd(150) : l(), s && e(s).removeClass(f);
                }),
                (r.prototype._transitionComplete = function (t, i, r, o) {
                  if (i) {
                    e(i).removeClass(u);
                    var s = e(i).find(b)[0];
                    s && e(s).removeClass(u), i.setAttribute("aria-expanded", !1);
                  }
                  if ((e(t).addClass(u), t.setAttribute("aria-expanded", !0), r ? (n.reflow(t), e(t).addClass(f)) : e(t).removeClass(c), t.parentNode && e(t.parentNode).hasClass(h))) {
                    var a = e(t).closest(d)[0];
                    a && e(a).find(_).addClass(u), t.setAttribute("aria-expanded", !0);
                  }
                  o && o();
                }),
                (r._jQueryInterface = function (t) {
                  return this.each(function () {
                    var i = e(this),
                      n = i.data(o);
                    if ((n || ((n = n = new r(this)), i.data(o, n)), "string" == typeof t)) {
                      if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                i(r, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-alpha.5";
                    },
                  },
                ]),
                r
              );
            })();
          e(document).on(l.CLICK_DATA_API, y, function (t) {
            t.preventDefault(), x._jQueryInterface.call(e(this), "show");
          }),
            (e.fn[r] = x._jQueryInterface),
            (e.fn[r].Constructor = x),
            (e.fn[r].noConflict = function () {
              return (e.fn[r] = a), x._jQueryInterface;
            });
        })(jQuery),
        (function (r) {
          if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
          var o = "tooltip",
            s = "bs.tooltip",
            a = "." + s,
            l = r.fn[o],
            h = {
              animation: !0,
              template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: "0 0",
              constraints: [],
            },
            u = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "string",
              constraints: "array",
            },
            c = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
            f = "active",
            d = "out",
            p = {
              HIDE: "hide" + a,
              HIDDEN: "hidden" + a,
              SHOW: "show" + a,
              SHOWN: "shown" + a,
              INSERTED: "inserted" + a,
              CLICK: "click" + a,
              FOCUSIN: "focusin" + a,
              FOCUSOUT: "focusout" + a,
              MOUSEENTER: "mouseenter" + a,
              MOUSELEAVE: "mouseleave" + a,
            },
            m = "fade",
            g = "active",
            v = ".tooltip-inner",
            y = { element: !1, enabled: !1 },
            _ = "hover",
            b = "focus",
            x = "manual",
            T = (function () {
              function l(e, i) {
                t(this, l),
                  (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ""),
                  (this._activeTrigger = {}),
                  (this._tether = null),
                  (this.element = e),
                  (this.config = this._getConfig(i)),
                  (this.tip = null),
                  this._setListeners();
              }
              return (
                (l.prototype.enable = function () {
                  this._isEnabled = !0;
                }),
                (l.prototype.disable = function () {
                  this._isEnabled = !1;
                }),
                (l.prototype.toggleEnabled = function () {
                  this._isEnabled = !this._isEnabled;
                }),
                (l.prototype.toggle = function (t) {
                  if (t) {
                    var e = this.constructor.DATA_KEY,
                      i = r(t.currentTarget).data(e);
                    i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), r(t.currentTarget).data(e, i)),
                      (i._activeTrigger.click = !i._activeTrigger.click),
                      i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                  } else {
                    if (r(this.getTipElement()).hasClass(g)) return void this._leave(null, this);
                    this._enter(null, this);
                  }
                }),
                (l.prototype.dispose = function () {
                  clearTimeout(this._timeout),
                    this.cleanupTether(),
                    r.removeData(this.element, this.constructor.DATA_KEY),
                    r(this.element).off(this.constructor.EVENT_KEY),
                    this.tip && r(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    (this._tether = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
                }),
                (l.prototype.show = function () {
                  var t = this;
                  if ("none" === r(this.element).css("display")) throw new Error("Please use show on visible elements");
                  var e = r.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                    r(this.element).trigger(e);
                    var i = r.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                      s = n.getUID(this.constructor.NAME);
                    o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && r(o).addClass(m);
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                      h = this._getAttachment(a);
                    r(o).data(this.constructor.DATA_KEY, this).appendTo(document.body),
                      r(this.element).trigger(this.constructor.Event.INSERTED),
                      (this._tether = new Tether({ attachment: h, element: o, target: this.element, classes: y, classPrefix: "bs-tether", offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 })),
                      n.reflow(o),
                      this._tether.position(),
                      r(o).addClass(g);
                    var u = function () {
                      var e = t._hoverState;
                      (t._hoverState = null), r(t.element).trigger(t.constructor.Event.SHOWN), e === d && t._leave(null, t);
                    };
                    if (n.supportsTransitionEnd() && r(this.tip).hasClass(m)) return void r(this.tip).one(n.TRANSITION_END, u).emulateTransitionEnd(l._TRANSITION_DURATION);
                    u();
                  }
                }),
                (l.prototype.hide = function (t) {
                  var e = this,
                    i = this.getTipElement(),
                    o = r.Event(this.constructor.Event.HIDE),
                    s = function () {
                      e._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), e.element.removeAttribute("aria-describedby"), r(e.element).trigger(e.constructor.Event.HIDDEN), e.cleanupTether(), t && t();
                    };
                  r(this.element).trigger(o), o.isDefaultPrevented() || (r(i).removeClass(g), n.supportsTransitionEnd() && r(this.tip).hasClass(m) ? r(i).one(n.TRANSITION_END, s).emulateTransitionEnd(150) : s(), (this._hoverState = ""));
                }),
                (l.prototype.isWithContent = function () {
                  return Boolean(this.getTitle());
                }),
                (l.prototype.getTipElement = function () {
                  return (this.tip = this.tip || r(this.config.template)[0]);
                }),
                (l.prototype.setContent = function () {
                  var t = r(this.getTipElement());
                  this.setElementContent(t.find(v), this.getTitle()), t.removeClass(m).removeClass(g), this.cleanupTether();
                }),
                (l.prototype.setElementContent = function (t, i) {
                  var n = this.config.html;
                  "object" === (void 0 === i ? "undefined" : e(i)) && (i.nodeType || i.jquery) ? (n ? r(i).parent().is(t) || t.empty().append(i) : t.text(r(i).text())) : t[n ? "html" : "text"](i);
                }),
                (l.prototype.getTitle = function () {
                  var t = this.element.getAttribute("data-original-title");
                  return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                }),
                (l.prototype.cleanupTether = function () {
                  this._tether && this._tether.destroy();
                }),
                (l.prototype._getAttachment = function (t) {
                  return c[t.toUpperCase()];
                }),
                (l.prototype._setListeners = function () {
                  var t = this;
                  this.config.trigger.split(" ").forEach(function (e) {
                    if ("click" === e)
                      r(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                        return t.toggle(e);
                      });
                    else if (e !== x) {
                      var i = e === _ ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                        n = e === _ ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                      r(t.element)
                        .on(i, t.config.selector, function (e) {
                          return t._enter(e);
                        })
                        .on(n, t.config.selector, function (e) {
                          return t._leave(e);
                        });
                    }
                  }),
                    this.config.selector ? (this.config = r.extend({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                }),
                (l.prototype._fixTitle = function () {
                  var t = e(this.element.getAttribute("data-original-title"));
                  (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                }),
                (l.prototype._enter = function (t, e) {
                  var i = this.constructor.DATA_KEY;
                  return (
                    (e = e || r(t.currentTarget).data(i)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), r(t.currentTarget).data(i, e)),
                    t && (e._activeTrigger["focusin" === t.type ? b : _] = !0),
                    r(e.getTipElement()).hasClass(g) || e._hoverState === f
                      ? void (e._hoverState = f)
                      : (clearTimeout(e._timeout),
                        (e._hoverState = f),
                        e.config.delay && e.config.delay.show
                          ? void (e._timeout = setTimeout(function () {
                              e._hoverState === f && e.show();
                            }, e.config.delay.show))
                          : void e.show())
                  );
                }),
                (l.prototype._leave = function (t, e) {
                  var i = this.constructor.DATA_KEY;
                  if (
                    ((e = e || r(t.currentTarget).data(i)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), r(t.currentTarget).data(i, e)),
                    t && (e._activeTrigger["focusout" === t.type ? b : _] = !1),
                    !e._isWithActiveTrigger())
                  )
                    return (
                      clearTimeout(e._timeout),
                      (e._hoverState = d),
                      e.config.delay && e.config.delay.hide
                        ? void (e._timeout = setTimeout(function () {
                            e._hoverState === d && e.hide();
                          }, e.config.delay.hide))
                        : void e.hide()
                    );
                }),
                (l.prototype._isWithActiveTrigger = function () {
                  for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                  return !1;
                }),
                (l.prototype._getConfig = function (t) {
                  return (t = r.extend({}, this.constructor.Default, r(this.element).data(), t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), n.typeCheckConfig(o, t, this.constructor.DefaultType), t;
                }),
                (l.prototype._getDelegateConfig = function () {
                  var t = {};
                  if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                  return t;
                }),
                (l._jQueryInterface = function (t) {
                  return this.each(function () {
                    var i = r(this).data(s),
                      n = "object" === (void 0 === t ? "undefined" : e(t)) ? t : null;
                    if ((i || !/dispose|hide/.test(t)) && (i || ((i = new l(this, n)), r(this).data(s, i)), "string" == typeof t)) {
                      if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                      i[t]();
                    }
                  });
                }),
                i(l, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-alpha.5";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return h;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return o;
                    },
                  },
                  {
                    key: "DATA_KEY",
                    get: function () {
                      return s;
                    },
                  },
                  {
                    key: "Event",
                    get: function () {
                      return p;
                    },
                  },
                  {
                    key: "EVENT_KEY",
                    get: function () {
                      return a;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return u;
                    },
                  },
                ]),
                l
              );
            })();
          return (
            (r.fn[o] = T._jQueryInterface),
            (r.fn[o].Constructor = T),
            (r.fn[o].noConflict = function () {
              return (r.fn[o] = l), T._jQueryInterface;
            }),
            T
          );
        })(jQuery));
    !(function (n) {
      var o = "popover",
        s = "bs.popover",
        a = "." + s,
        l = n.fn[o],
        h = n.extend({}, r.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }),
        u = n.extend({}, r.DefaultType, { content: "(string|element|function)" }),
        c = "fade",
        f = "active",
        d = ".popover-title",
        p = ".popover-content",
        m = {
          HIDE: "hide" + a,
          HIDDEN: "hidden" + a,
          SHOW: "show" + a,
          SHOWN: "shown" + a,
          INSERTED: "inserted" + a,
          CLICK: "click" + a,
          FOCUSIN: "focusin" + a,
          FOCUSOUT: "focusout" + a,
          MOUSEENTER: "mouseenter" + a,
          MOUSELEAVE: "mouseleave" + a,
        },
        g = (function (r) {
          function l() {
            return (
              t(this, l),
              (function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
              })(this, r.apply(this, arguments))
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
              (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
            })(l, r),
            (l.prototype.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (l.prototype.getTipElement = function () {
              return (this.tip = this.tip || n(this.config.template)[0]);
            }),
            (l.prototype.setContent = function () {
              var t = n(this.getTipElement());
              this.setElementContent(t.find(d), this.getTitle()), this.setElementContent(t.find(p), this._getContent()), t.removeClass(c).removeClass(f), this.cleanupTether();
            }),
            (l.prototype._getContent = function () {
              return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
            }),
            (l._jQueryInterface = function (t) {
              return this.each(function () {
                var i = n(this).data(s),
                  r = "object" === (void 0 === t ? "undefined" : e(t)) ? t : null;
                if ((i || !/destroy|hide/.test(t)) && (i || ((i = new l(this, r)), n(this).data(s, i)), "string" == typeof t)) {
                  if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                  i[t]();
                }
              });
            }),
            i(l, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-alpha.5";
                },
              },
              {
                key: "Default",
                get: function () {
                  return h;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return o;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return s;
                },
              },
              {
                key: "Event",
                get: function () {
                  return m;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return a;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return u;
                },
              },
            ]),
            l
          );
        })(r);
      (n.fn[o] = g._jQueryInterface),
        (n.fn[o].Constructor = g),
        (n.fn[o].noConflict = function () {
          return (n.fn[o] = l), g._jQueryInterface;
        });
    })(jQuery);
  })(),
  (function (t) {
    "use strict";
    function e() {
      (r = t.innerWidth || document.documentElement.clientWidth), (o = t.innerHeight || document.documentElement.clientHeight);
    }
    function i(t, e, i) {
      t.addEventListener
        ? t.addEventListener(e, i)
        : t.attachEvent("on" + e, function () {
            i.call(t);
          });
    }
    function n(i) {
      t.requestAnimationFrame(function () {
        "scroll" !== i.type && e();
        for (var t = 0, n = p.length; t < n; t++) "scroll" !== i.type && (p[t].coverImage(), p[t].clipContainer()), p[t].onScroll();
      });
    }
    Date.now ||
      (Date.now = function () {
        return new Date().getTime();
      }),
      t.requestAnimationFrame ||
        (function () {
          for (var e = ["webkit", "moz"], i = 0; i < e.length && !t.requestAnimationFrame; ++i) {
            var n = e[i];
            (t.requestAnimationFrame = t[n + "RequestAnimationFrame"]), (t.cancelAnimationFrame = t[n + "CancelAnimationFrame"] || t[n + "CancelRequestAnimationFrame"]);
          }
          if (/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent) || !t.requestAnimationFrame || !t.cancelAnimationFrame) {
            var r = 0;
            (t.requestAnimationFrame = function (t) {
              var e = Date.now(),
                i = Math.max(r + 16, e);
              return setTimeout(function () {
                t((r = i));
              }, i - e);
            }),
              (t.cancelAnimationFrame = clearTimeout);
          }
        })();
    var r,
      o,
      s = (function () {
        if (!t.getComputedStyle) return !1;
        var e,
          i = document.createElement("p"),
          n = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
        for (var r in ((document.body || document.documentElement).insertBefore(i, null), n)) void 0 !== i.style[r] && ((i.style[r] = "translate3d(1px,1px,1px)"), (e = t.getComputedStyle(i).getPropertyValue(n[r])));
        return (document.body || document.documentElement).removeChild(i), void 0 !== e && e.length > 0 && "none" !== e;
      })(),
      a = navigator.userAgent.toLowerCase().indexOf("android") > -1,
      l = /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream,
      h = !!t.opera,
      u = /Edge\/\d+/.test(navigator.userAgent),
      c = /Trident.*rv[ :]*11\./.test(navigator.userAgent),
      f = !!Function("/*@cc_on return document.documentMode===10@*/")(),
      d = document.all && !t.atob;
    e();
    var p = [],
      m = (function () {
        var t = 0;
        return function (e, i) {
          var n,
            r = this;
          if (
            ((r.$item = e),
            (r.defaults = {
              type: "scroll",
              speed: 0.5,
              imgSrc: null,
              imgWidth: null,
              imgHeight: null,
              enableTransform: !0,
              elementInViewport: null,
              zIndex: -100,
              noAndroid: !1,
              noIos: !0,
              onScroll: null,
              onInit: null,
              onDestroy: null,
              onCoverImage: null,
            }),
            (n = JSON.parse(r.$item.getAttribute("data-jarallax") || "{}")),
            (r.options = r.extend({}, r.defaults, n, i)),
            !((a && r.options.noAndroid) || (l && r.options.noIos)))
          ) {
            r.options.speed = Math.min(2, Math.max(-1, parseFloat(r.options.speed)));
            var o = r.options.elementInViewport;
            o && "object" == typeof o && void 0 !== o.length && (o = o[0]),
              !o instanceof Element && (o = null),
              (r.options.elementInViewport = o),
              (r.instanceID = t++),
              (r.image = { src: r.options.imgSrc || null, $container: null, $item: null, width: r.options.imgWidth || null, height: r.options.imgHeight || null, useImgTag: l || a || h || c || f || u }),
              r.initImg() && r.init();
          }
        };
      })();
    (m.prototype.css = function (e, i) {
      if ("string" == typeof i) return t.getComputedStyle ? t.getComputedStyle(e).getPropertyValue(i) : e.style[i];
      for (var n in (i.transform && (i.WebkitTransform = i.MozTransform = i.transform), i)) e.style[n] = i[n];
      return e;
    }),
      (m.prototype.extend = function (t) {
        t = t || {};
        for (var e = 1; e < arguments.length; e++) if (arguments[e]) for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
        return t;
      }),
      (m.prototype.initImg = function () {
        var t = this;
        return (
          null === t.image.src &&
            (t.image.src = t
              .css(t.$item, "background-image")
              .replace(/^url\(['"]?/g, "")
              .replace(/['"]?\)$/g, "")),
          !(!t.image.src || "none" === t.image.src)
        );
      }),
      (m.prototype.init = function () {
        function t() {
          e.coverImage(),
            e.clipContainer(),
            e.onScroll(!0),
            e.$item.setAttribute("data-jarallax-original-styles", e.$item.getAttribute("style")),
            e.options.onInit && e.options.onInit.call(e),
            setTimeout(function () {
              e.$item && e.css(e.$item, { "background-image": "none", "background-attachment": "scroll", "background-size": "auto" });
            }, 0);
        }
        var e = this,
          i = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" },
          n = { position: "fixed" };
        (e.image.$container = document.createElement("div")),
          e.css(e.image.$container, i),
          e.css(e.image.$container, { visibility: "hidden", "z-index": e.options.zIndex }),
          e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID),
          e.$item.appendChild(e.image.$container),
          e.image.useImgTag && s && e.options.enableTransform
            ? ((e.image.$item = document.createElement("img")), e.image.$item.setAttribute("src", e.image.src), (n = e.extend({ "max-width": "none" }, i, n)))
            : ((e.image.$item = document.createElement("div")),
              (n = e.extend({ "background-position": "50% 50%", "background-size": "100% auto", "background-repeat": "no-repeat no-repeat", "background-image": 'url("' + e.image.src + '")' }, i, n))),
          d && (n.backgroundAttachment = "fixed"),
          (e.parentWithTransform = 0);
        for (var r = e.$item; null !== r && r !== document && 0 === e.parentWithTransform; ) {
          var o = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform");
          o && "none" !== o && ((e.parentWithTransform = 1), e.css(e.image.$container, { transform: "translateX(0) translateY(0)" })), (r = r.parentNode);
        }
        e.css(e.image.$item, n),
          e.image.$container.appendChild(e.image.$item),
          e.image.width && e.image.height
            ? t()
            : e.getImageSize(e.image.src, function (i, n) {
                (e.image.width = i), (e.image.height = n), t();
              }),
          p.push(e);
      }),
      (m.prototype.destroy = function () {
        for (var t = this, e = 0, i = p.length; e < i; e++)
          if (p[e].instanceID === t.instanceID) {
            p.splice(e, 1);
            break;
          }
        var n = t.$item.getAttribute("data-jarallax-original-styles");
        for (var r in (t.$item.removeAttribute("data-jarallax-original-styles"),
        "null" === n ? t.$item.removeAttribute("style") : t.$item.setAttribute("style", n),
        t.$clipStyles && t.$clipStyles.parentNode.removeChild(t.$clipStyles),
        t.image.$container.parentNode.removeChild(t.image.$container),
        t.options.onDestroy && t.options.onDestroy.call(t),
        delete t.$item.jarallax,
        t))
          delete t[r];
      }),
      (m.prototype.getImageSize = function (t, e) {
        if (t && e) {
          var i = new Image();
          (i.onload = function () {
            e(i.width, i.height);
          }),
            (i.src = t);
        }
      }),
      (m.prototype.clipContainer = function () {
        if (!d) {
          var t = this,
            e = t.image.$container.getBoundingClientRect(),
            i = e.width,
            n = e.height;
          if (!t.$clipStyles)
            (t.$clipStyles = document.createElement("style")),
              t.$clipStyles.setAttribute("type", "text/css"),
              t.$clipStyles.setAttribute("id", "#jarallax-clip-" + t.instanceID),
              (document.head || document.getElementsByTagName("head")[0]).appendChild(t.$clipStyles);
          var r = ["#jarallax-container-" + t.instanceID + " {", "   clip: rect(0 " + i + "px " + n + "px 0);", "   clip: rect(0, " + i + "px, " + n + "px, 0);", "}"].join("\n");
          t.$clipStyles.styleSheet ? (t.$clipStyles.styleSheet.cssText = r) : (t.$clipStyles.innerHTML = r);
        }
      }),
      (m.prototype.coverImage = function () {
        var t = this;
        if (t.image.width && t.image.height) {
          var e = t.image.$container.getBoundingClientRect(),
            i = e.width,
            n = e.height,
            r = e.left,
            a = t.image.width,
            l = t.image.height,
            h = t.options.speed,
            u = "scroll" === t.options.type || "scroll-opacity" === t.options.type,
            c = 0,
            f = 0,
            d = n,
            p = 0,
            m = 0;
          u && ((c = (h * (n + o)) / 2), (h < 0 || h > 1) && (c = (h * Math.max(n, o)) / 2), h < 0 || h > 1 ? (d = Math.max(n, o) + 2 * Math.abs(c)) : (d += Math.abs(o - n) * (1 - h))),
            (f = (d * a) / l) < i && (d = ((f = i) * l) / a),
            (t.bgPosVerticalCenter = 0),
            !(u && d < o) || (s && t.options.enableTransform) || ((t.bgPosVerticalCenter = (o - d) / 2), (d = o)),
            u ? ((p = r + (i - f) / 2), (m = (o - d) / 2)) : ((p = (i - f) / 2), (m = (n - d) / 2)),
            s && t.options.enableTransform && t.parentWithTransform && (p -= r),
            (t.parallaxScrollDistance = c),
            t.css(t.image.$item, { width: f + "px", height: d + "px", marginLeft: p + "px", marginTop: m + "px" }),
            t.options.onCoverImage && t.options.onCoverImage.call(t);
        }
      }),
      (m.prototype.isVisible = function () {
        return this.isElementInViewport || !1;
      }),
      (m.prototype.onScroll = function (t) {
        var e = this;
        if (e.image.width && e.image.height) {
          var i = e.$item.getBoundingClientRect(),
            n = i.top,
            a = i.height,
            l = { position: "absolute", visibility: "visible", backgroundPosition: "50% 50%" },
            h = i;
          if ((e.options.elementInViewport && (h = e.options.elementInViewport.getBoundingClientRect()), (e.isElementInViewport = h.bottom >= 0 && h.right >= 0 && h.top <= o && h.left <= r), t || e.isElementInViewport)) {
            var u = Math.max(0, n),
              c = Math.max(0, a + n),
              f = Math.max(0, -n),
              p = Math.max(0, n + a - o),
              m = Math.max(0, a - (n + a - o)),
              g = Math.max(0, -n + o - a),
              v = 1 - (2 * (o - n)) / (o + a),
              y = 1;
            if (
              (a < o ? (y = 1 - (f || p) / a) : c <= o ? (y = c / o) : m <= o && (y = m / o),
              ("opacity" !== e.options.type && "scale-opacity" !== e.options.type && "scroll-opacity" !== e.options.type) || ((l.transform = "translate3d(0, 0, 0)"), (l.opacity = y)),
              "scale" === e.options.type || "scale-opacity" === e.options.type)
            ) {
              var _ = 1;
              e.options.speed < 0 ? (_ -= e.options.speed * y) : (_ += e.options.speed * (1 - y)), (l.transform = "scale(" + _ + ") translate3d(0, 0, 0)");
            }
            if ("scroll" === e.options.type || "scroll-opacity" === e.options.type) {
              var b = e.parallaxScrollDistance * v;
              s && e.options.enableTransform
                ? (e.parentWithTransform && (b -= n), (l.transform = "translate3d(0, " + b + "px, 0)"))
                : e.image.useImgTag
                ? (l.top = b + "px")
                : (e.bgPosVerticalCenter && (b += e.bgPosVerticalCenter), (l.backgroundPosition = "50% " + b + "px")),
                (l.position = d ? "absolute" : "fixed");
            }
            e.css(e.image.$item, l),
              e.options.onScroll && e.options.onScroll.call(e, { section: i, beforeTop: u, beforeTopEnd: c, afterTop: f, beforeBottom: p, beforeBottomEnd: m, afterBottom: g, visiblePercent: y, fromViewportCenter: v });
          }
        }
      }),
      i(t, "scroll", n),
      i(t, "resize", n),
      i(t, "orientationchange", n),
      i(t, "load", n);
    var g = function (t) {
      ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
      for (var e, i = arguments[1], n = Array.prototype.slice.call(arguments, 2), r = t.length, o = 0; o < r; o++)
        if (("object" == typeof i || void 0 === i ? t[o].jarallax || (t[o].jarallax = new m(t[o], i)) : t[o].jarallax && (e = t[o].jarallax[i].apply(t[o].jarallax, n)), void 0 !== e)) return e;
      return t;
    };
    g.constructor = m;
    var v = t.jarallax;
    if (
      ((t.jarallax = g),
      (t.jarallax.noConflict = function () {
        return (t.jarallax = v), this;
      }),
      "undefined" != typeof jQuery)
    ) {
      var y = function () {
        var e = arguments || [];
        Array.prototype.unshift.call(e, this);
        var i = g.apply(t, e);
        return "object" != typeof i ? i : this;
      };
      y.constructor = m;
      var _ = jQuery.fn.jarallax;
      (jQuery.fn.jarallax = y),
        (jQuery.fn.jarallax.noConflict = function () {
          return (jQuery.fn.jarallax = _), this;
        });
    }
    i(t, "DOMContentLoaded", function () {
      g(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"));
    });
  })(window),
  (function (t) {
    "use strict";
    function e() {
      (this._done = []), (this._fail = []);
    }
    function i(t, e, i) {
      t.addEventListener
        ? t.addEventListener(e, i)
        : t.attachEvent("on" + e, function () {
            i.call(t);
          });
    }
    e.prototype = {
      execute: function (t, e) {
        var i = t.length;
        for (e = Array.prototype.slice.call(e); i--; ) t[i].apply(null, e);
      },
      resolve: function () {
        this.execute(this._done, arguments);
      },
      reject: function () {
        this.execute(this._fail, arguments);
      },
      done: function (t) {
        this._done.push(t);
      },
      fail: function (t) {
        this._fail.push(t);
      },
    };
    var n = (function () {
      var t = 0;
      return function (e, i) {
        var n = this;
        (n.url = e),
          (n.options_default = { autoplay: 1, loop: 1, mute: 1, controls: 0, startTime: 0, endTime: 0 }),
          (n.options = (function (t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++) if (arguments[e]) for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t;
          })({}, n.options_default, i)),
          (n.videoID = n.parseURL(e)),
          n.videoID && ((n.ID = t++), n.loadAPI(), n.init());
      };
    })();
    (n.prototype.parseURL = function (t) {
      var e = (function (t) {
          var e = t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
          return !(!e || 11 !== e[1].length) && e[1];
        })(t),
        i = (function (t) {
          var e = t.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
          return !(!e || !e[3]) && e[3];
        })(t),
        n = (function (t) {
          for (var e = t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), i = {}, n = 0, r = 0; r < e.length; r++) {
            var o = e[r].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
            o && o[1] && o[2] && ((i["ogv" === o[1] ? "ogg" : o[1]] = o[2]), (n = 1));
          }
          return !!n && i;
        })(t);
      return e ? ((this.type = "youtube"), e) : i ? ((this.type = "vimeo"), i) : !!n && ((this.type = "local"), n);
    }),
      (n.prototype.isValid = function () {
        return !!this.videoID;
      }),
      (n.prototype.on = function (t, e) {
        (this.userEventsList = this.userEventsList || []), (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e);
      }),
      (n.prototype.off = function (t, e) {
        if (this.userEventsList && this.userEventsList[t])
          if (e) for (var i = 0; i < this.userEventsList[t].length; i++) this.userEventsList[t][i] === e && (this.userEventsList[t][i] = !1);
          else delete this.userEventsList[t];
      }),
      (n.prototype.fire = function (t) {
        var e = [].slice.call(arguments, 1);
        if (this.userEventsList && void 0 !== this.userEventsList[t]) for (var i in this.userEventsList[t]) this.userEventsList[t][i] && this.userEventsList[t][i].apply(this, e);
      });
    var r = 0;
    (n.prototype.play = function (t) {
      var e = this;
      e.player &&
        ("youtube" === e.type && e.player.playVideo && (void 0 !== t && e.player.seekTo(t || 0), e.player.playVideo()),
        "vimeo" !== e.type ||
          r ||
          (void 0 !== t
            ? ((r = 1),
              e.player.setCurrentTime(t || 0).then(function () {
                e.player.play(), (r = 0);
              }))
            : e.player.play()),
        "local" === e.type && (void 0 !== t && (e.player.currentTime = t), e.player.play()));
    }),
      (n.prototype.pause = function () {
        this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause());
      }),
      (n.prototype.getImageURL = function (t) {
        var e = this;
        if (e.videoImage) t(e.videoImage);
        else {
          if ("youtube" === e.type) {
            var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
              n = 0,
              r = new Image();
            (r.onload = function () {
              120 !== (this.naturalWidth || this.width) || n === i.length - 1
                ? ((e.videoImage = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg"), t(e.videoImage))
                : (n++, (this.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg"));
            }),
              (r.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg");
          }
          if ("vimeo" === e.type) {
            var o = new XMLHttpRequest();
            o.open("GET", "https://vimeo.com/api/v2/video/" + e.videoID + ".json", !0),
              (o.onreadystatechange = function () {
                if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                  var i = JSON.parse(this.responseText);
                  (e.videoImage = i[0].thumbnail_large), t(e.videoImage);
                }
              }),
              o.send(),
              (o = null);
          }
        }
      }),
      (n.prototype.getIframe = function (e) {
        var n = this;
        return n.$iframe
          ? void e(n.$iframe)
          : void n.onAPIready(function () {
              function r(t, e, i) {
                var n = document.createElement("source");
                (n.src = e), (n.type = i), t.appendChild(n);
              }
              var o, s;
              if ((n.$iframe || ((o = document.createElement("div")).style.display = "none"), "youtube" === n.type)) {
                var a, l;
                (n.playerOptions = {}),
                  (n.playerOptions.videoId = n.videoID),
                  (n.playerOptions.width = t.innerWidth || document.documentElement.clientWidth),
                  (n.playerOptions.playerVars = { autohide: 1, rel: 0, autoplay: 0 }),
                  n.options.controls ||
                    ((n.playerOptions.playerVars.iv_load_policy = 3),
                    (n.playerOptions.playerVars.modestbranding = 1),
                    (n.playerOptions.playerVars.controls = 0),
                    (n.playerOptions.playerVars.showinfo = 0),
                    (n.playerOptions.playerVars.disablekb = 1)),
                  (n.playerOptions.events = {
                    onReady: function (t) {
                      n.options.mute && t.target.mute(), n.options.autoplay && n.play(n.options.startTime), n.fire("ready", t);
                    },
                    onStateChange: function (t) {
                      n.options.loop && t.data === YT.PlayerState.ENDED && n.play(n.options.startTime),
                        a || t.data !== YT.PlayerState.PLAYING || ((a = 1), n.fire("started", t)),
                        t.data === YT.PlayerState.PLAYING && n.fire("play", t),
                        t.data === YT.PlayerState.PAUSED && n.fire("pause", t),
                        t.data === YT.PlayerState.ENDED && n.fire("end", t),
                        n.options.endTime &&
                          (t.data === YT.PlayerState.PLAYING
                            ? (l = setInterval(function () {
                                n.options.endTime && n.player.getCurrentTime() >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause());
                              }, 150))
                            : clearInterval(l));
                    },
                  });
                var h = !n.$iframe;
                if (h) {
                  var u = document.createElement("div");
                  u.setAttribute("id", n.playerID), o.appendChild(u), document.body.appendChild(o);
                }
                (n.player = n.player || new t.YT.Player(n.playerID, n.playerOptions)), h && (n.$iframe = document.getElementById(n.playerID));
              }
              "vimeo" === n.type &&
                ((n.playerOptions = ""),
                (n.playerOptions += "player_id=" + n.playerID),
                (n.playerOptions += "&autopause=0"),
                n.options.controls || (n.playerOptions += "&badge=0&byline=0&portrait=0&title=0"),
                (n.playerOptions += "&autoplay=0"),
                (n.playerOptions += "&loop=" + (n.options.loop ? 1 : 0)),
                n.$iframe ||
                  ((n.$iframe = document.createElement("iframe")),
                  n.$iframe.setAttribute("id", n.playerID),
                  n.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + n.videoID + "?" + n.playerOptions),
                  n.$iframe.setAttribute("frameborder", "0"),
                  o.appendChild(n.$iframe),
                  document.body.appendChild(o)),
                (n.player = n.player || new Vimeo.Player(n.$iframe)),
                n.player.setVolume(n.options.mute ? 0 : 100),
                n.options.autoplay && n.play(n.options.startTime),
                n.player.on("timeupdate", function (t) {
                  s || n.fire("started", t), (s = 1), n.options.endTime && n.options.endTime && t.seconds >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause());
                }),
                n.player.on("play", function (t) {
                  n.fire("play", t);
                }),
                n.player.on("pause", function (t) {
                  n.fire("pause", t);
                }),
                n.player.on("ended", function (t) {
                  n.fire("end", t);
                }),
                n.player.on("loaded", function (t) {
                  n.fire("ready", t);
                }));
              if ("local" === n.type) {
                if (!n.$iframe)
                  for (var c in ((n.$iframe = document.createElement("video")),
                  n.options.mute && n.$iframe.setAttribute("mute", "on"),
                  n.options.loop && n.$iframe.setAttribute("loop", "on"),
                  n.$iframe.setAttribute("id", n.playerID),
                  o.appendChild(n.$iframe),
                  document.body.appendChild(o),
                  n.videoID))
                    r(n.$iframe, n.videoID[c], "video/" + c);
                var f;
                (n.player = n.player || n.$iframe),
                  i(n.player, "playing", function (t) {
                    f || n.fire("started", t), (f = 1);
                  }),
                  i(n.player, "timeupdate", function () {
                    n.options.endTime && n.options.endTime && this.currentTime >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause());
                  }),
                  i(n.player, "play", function (t) {
                    n.fire("play", t);
                  }),
                  i(n.player, "pause", function (t) {
                    n.fire("pause", t);
                  }),
                  i(n.player, "ended", function (t) {
                    n.fire("end", t);
                  }),
                  i(n.player, "loadedmetadata", function () {
                    n.fire("ready"), n.options.autoplay && n.play(n.options.startTime);
                  });
              }
              e(n.$iframe);
            });
      }),
      (n.prototype.init = function () {
        this.playerID = "VideoWorker-" + this.ID;
      });
    var o = 0,
      s = 0;
    n.prototype.loadAPI = function () {
      if (!o || !s) {
        var e = "";
        if (("youtube" !== this.type || o || ((o = 1), (e = "//www.youtube.com/iframe_api")), "vimeo" !== this.type || s || ((s = 1), (e = "//player.vimeo.com/api/player.js")), e)) {
          "file://" === t.location.origin && (e = "http:" + e);
          var i = document.createElement("script"),
            n = document.getElementsByTagName("head")[0];
          (i.src = e), n.appendChild(i), (n = null), (i = null);
        }
      }
    };
    var a = 0,
      l = 0,
      h = new e(),
      u = new e();
    (n.prototype.onAPIready = function (e) {
      var i = this;
      if (
        ("youtube" === i.type &&
          (("undefined" != typeof YT && 0 !== YT.loaded) || a
            ? "object" == typeof YT && 1 === YT.loaded
              ? e()
              : h.done(function () {
                  e();
                })
            : ((a = 1),
              (t.onYouTubeIframeAPIReady = function () {
                (t.onYouTubeIframeAPIReady = null), h.resolve("done"), e();
              }))),
        "vimeo" === i.type)
      )
        if ("undefined" != typeof Vimeo || l)
          "undefined" != typeof Vimeo
            ? e()
            : u.done(function () {
                e();
              });
        else {
          l = 1;
          var n = setInterval(function () {
            "undefined" != typeof Vimeo && (clearInterval(n), u.resolve("done"), e());
          }, 20);
        }
      "local" === i.type && e();
    }),
      (t.VideoWorker = n);
  })(window),
  (function () {
    "use strict";
    if ("undefined" != typeof jarallax) {
      var t = jarallax.constructor,
        e = t.prototype.init;
      t.prototype.init = function () {
        var t = this;
        e.apply(t),
          t.video &&
            t.video.getIframe(function (e) {
              var i = e.parentNode;
              t.css(e, { position: "fixed", top: "0px", left: "0px", right: "0px", bottom: "0px", width: "100%", height: "100%", visibility: "visible", zIndex: -1 }),
                (t.$video = e),
                t.image.$container.appendChild(e),
                i.parentNode.removeChild(i);
            });
      };
      var i = t.prototype.coverImage;
      t.prototype.coverImage = function () {
        var t = this;
        i.apply(t), t.video && "IFRAME" === t.image.$item.nodeName && t.css(t.image.$item, { height: t.image.$item.getBoundingClientRect().height + 400 + "px", marginTop: -200 + parseFloat(t.css(t.image.$item, "margin-top")) + "px" });
      };
      var n = t.prototype.initImg;
      t.prototype.initImg = function () {
        var t = this;
        if ((t.options.videoSrc || (t.options.videoSrc = t.$item.getAttribute("data-jarallax-video") || !1), t.options.videoSrc)) {
          var e = new VideoWorker(t.options.videoSrc, { startTime: t.options.videoStartTime || 0, endTime: t.options.videoEndTime || 0 });
          if (
            (e.isValid() &&
              ((t.image.useImgTag = !0),
              e.on("ready", function () {
                var i = t.onScroll;
                t.onScroll = function () {
                  i.apply(t), t.isVisible() ? e.play() : e.pause();
                };
              }),
              e.on("started", function () {
                (t.image.$default_item = t.image.$item),
                  (t.image.$item = t.$video),
                  (t.image.width = t.options.imgWidth = t.image.width || 1280),
                  (t.image.height = t.options.imgHeight = t.image.height || 720),
                  t.coverImage(),
                  t.clipContainer(),
                  t.onScroll(),
                  t.image.$default_item && (t.image.$default_item.style.display = "none");
              }),
              (t.video = e),
              "local" !== e.type &&
                e.getImageURL(function (e) {
                  (t.image.src = e), t.init();
                })),
            "local" !== e.type)
          )
            return !1;
        }
        return n.apply(t);
      };
      var r = t.prototype.destroy;
      t.prototype.destroy = function () {
        r.apply(this);
      };
    }
  })(),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function (t, e) {
    "use strict";
    function i(i, o, a) {
      (a = a || e || t.jQuery) &&
        (o.prototype.option ||
          (o.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          return "string" == typeof t
            ? (function (t, e, n) {
                var r,
                  o = "$()." + i + '("' + e + '")';
                return (
                  t.each(function (t, l) {
                    var h = a.data(l, i);
                    if (h) {
                      var u = h[e];
                      if (u && "_" != e.charAt(0)) {
                        var c = u.apply(h, n);
                        r = void 0 === r ? c : r;
                      } else s(o + " is not a valid method");
                    } else s(i + " not initialized. Cannot call methods, i.e. " + o);
                  }),
                  void 0 !== r ? r : t
                );
              })(this, t, r.call(arguments, 1))
            : ((function (t, e) {
                t.each(function (t, n) {
                  var r = a.data(n, i);
                  r ? (r.option(e), r._init()) : ((r = new o(n, e)), a.data(n, i, r));
                });
              })(this, t),
              this);
        }),
        n(a));
    }
    function n(t) {
      !t || (t && t.bridget) || (t.bridget = i);
    }
    var r = Array.prototype.slice,
      o = t.console,
      s =
        void 0 === o
          ? function () {}
          : function (t) {
              o.error(t);
            };
    return n(e || t.jQuery), i;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            r = i[n];
          e = e || [];
          for (var o = this._onceEvents && this._onceEvents[t]; r; ) {
            var s = o && o[r];
            s && (this.off(t, r), delete o[r]), r.apply(this, e), (r = i[(n += s ? 0 : 1)]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function e(t) {
      var e = getComputedStyle(t);
      return e || o("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
    }
    function i() {
      if (!l) {
        l = !0;
        var i = document.createElement("div");
        (i.style.width = "200px"), (i.style.padding = "1px 2px 3px 4px"), (i.style.borderStyle = "solid"), (i.style.borderWidth = "1px 2px 3px 4px"), (i.style.boxSizing = "border-box");
        var o = document.body || document.documentElement;
        o.appendChild(i);
        var s = e(i);
        (n.isBoxSizeOuter = r = 200 == t(s.width)), o.removeChild(i);
      }
    }
    function n(n) {
      if ((i(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType)) {
        var o = e(n);
        if ("none" == o.display)
          return (function () {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < a; e++) t[s[e]] = 0;
            return t;
          })();
        var l = {};
        (l.width = n.offsetWidth), (l.height = n.offsetHeight);
        for (var h = (l.isBorderBox = "border-box" == o.boxSizing), u = 0; u < a; u++) {
          var c = s[u],
            f = o[c],
            d = parseFloat(f);
          l[c] = isNaN(d) ? 0 : d;
        }
        var p = l.paddingLeft + l.paddingRight,
          m = l.paddingTop + l.paddingBottom,
          g = l.marginLeft + l.marginRight,
          v = l.marginTop + l.marginBottom,
          y = l.borderLeftWidth + l.borderRightWidth,
          _ = l.borderTopWidth + l.borderBottomWidth,
          b = h && r,
          x = t(o.width);
        !1 !== x && (l.width = x + (b ? 0 : p + y));
        var T = t(o.height);
        return !1 !== T && (l.height = T + (b ? 0 : m + _)), (l.innerWidth = l.width - (p + y)), (l.innerHeight = l.height - (m + _)), (l.outerWidth = l.width + g), (l.outerHeight = l.height + v), l;
      }
    }
    var r,
      o =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      a = s.length,
      l = !1;
    return n;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
        makeArray: function (t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if (t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
          else e.push(t);
          return e;
        },
        removeFrom: function (t, e) {
          var i = t.indexOf(e);
          -1 != i && t.splice(i, 1);
        },
        getParent: function (t, i) {
          for (; t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
        },
        getQueryElement: function (t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        },
        handleEvent: function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        },
        filterFindElements: function (t, n) {
          t = i.makeArray(t);
          var r = [];
          return (
            t.forEach(function (t) {
              if (t instanceof HTMLElement) {
                if (!n) return void r.push(t);
                e(t, n) && r.push(t);
                for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) r.push(i[o]);
              }
            }),
            r
          );
        },
        debounceMethod: function (t, e, i) {
          var n = t.prototype[e],
            r = e + "Timeout";
          t.prototype[e] = function () {
            var t = this[r];
            t && clearTimeout(t);
            var e = arguments,
              o = this;
            this[r] = setTimeout(function () {
              n.apply(o, e), delete o[r];
            }, i || 100);
          };
        },
        docReady: function (t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
        },
        toDashed: function (t) {
          return t
            .replace(/(.)([A-Z])/g, function (t, e, i) {
              return e + "-" + i;
            })
            .toLowerCase();
        },
      },
      n = t.console;
    return (
      (i.htmlInit = function (e, r) {
        i.docReady(function () {
          var o = i.toDashed(r),
            s = "data-" + o,
            a = document.querySelectorAll("[" + s + "]"),
            l = document.querySelectorAll(".js-" + o),
            h = i.makeArray(a).concat(i.makeArray(l)),
            u = s + "-options",
            c = t.jQuery;
          h.forEach(function (t) {
            var i,
              o = t.getAttribute(s) || t.getAttribute(u);
            try {
              i = o && JSON.parse(o);
            } catch (e) {
              return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + e));
            }
            var a = new e(t, i);
            c && c.data(t, r, a);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("get-size")))
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = e(t, t.getSize)));
  })(window, function (t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function () {
        (this.element.style.position = "absolute"), (this.x = 0), (this.shift = 0);
      }),
      (n.destroy = function () {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = "";
      }),
      (n.getSize = function () {
        this.size = e(this.element);
      }),
      (n.setPosition = function (t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget = function () {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
      }),
      (n.renderPosition = function (t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
      }),
      (n.wrapShift = function (t) {
        (this.shift = t), this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function () {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? (module.exports = e()) : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function () {
    "use strict";
    function t(t) {
      (this.parent = t), (this.isOriginLeft = "left" == t.originSide), (this.cells = []), (this.outerWidth = 0), (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function (t) {
        if ((this.cells.push(t), (this.outerWidth += t.size.outerWidth), (this.height = Math.max(t.size.outerHeight, this.height)), 1 == this.cells.length)) {
          this.x = t.x;
          var e = this.isOriginLeft ? "marginLeft" : "marginRight";
          this.firstMargin = t.size[e];
        }
      }),
      (e.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (e.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function () {
        this.changeSelectedClass("add");
      }),
      (e.unselect = function () {
        this.changeSelectedClass("remove");
      }),
      (e.changeSelectedClass = function (t) {
        this.cells.forEach(function (e) {
          e.element.classList[t]("is-selected");
        });
      }),
      (e.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("fizzy-ui-utils")))
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)));
  })(window, function (t, e) {
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
      n = 0;
    i ||
      (i = function (t) {
        var e = new Date().getTime(),
          i = Math.max(0, 16 - (e - n)),
          r = setTimeout(t, i);
        return (n = e + i), r;
      });
    var r = {
        startAnimation: function () {
          this.isAnimating || ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
        },
        animate: function () {
          this.applyDragForce(), this.applySelectedAttraction();
          var t = this.x;
          if ((this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating)) {
            var e = this;
            i(function () {
              e.animate();
            });
          }
        },
      },
      o = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
    return (
      (r.positionSlider = function () {
        var t = this.x;
        this.options.wrapAround && this.cells.length > 1 && ((t = e.modulo(t, this.slideableWidth)), (t -= this.slideableWidth), this.shiftWrapCells(t)), (t += this.cursorPosition), (t = this.options.rightToLeft && o ? -t : t);
        var i = this.getPositionValue(t);
        this.slider.style[o] = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
        var n = this.slides[0];
        if (n) {
          var r = -this.x - n.target,
            s = r / this.slidesWidth;
          this.dispatchEvent("scroll", null, [s, r]);
        }
      }),
      (r.positionSliderAtSelected = function () {
        this.cells.length && ((this.x = -this.selectedSlide.target), this.positionSlider());
      }),
      (r.getPositionValue = function (t) {
        return this.options.percentPosition ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%" : Math.round(t) + "px";
      }),
      (r.settle = function (t) {
        this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && ((this.isAnimating = !1), delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle"));
      }),
      (r.shiftWrapCells = function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      }),
      (r._shiftCells = function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            o = e > 0 ? i : 0;
          r.wrapShift(o), (e -= r.size.outerWidth);
        }
      }),
      (r._unshiftCells = function (t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      }),
      (r.integratePhysics = function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      }),
      (r.applyForce = function (t) {
        this.velocity += t;
      }),
      (r.getFrictionFactor = function () {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
      }),
      (r.getRestingPosition = function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      }),
      (r.applyDragForce = function () {
        if (this.isPointerDown) {
          var t = this.dragX - this.x - this.velocity;
          this.applyForce(t);
        }
      }),
      (r.applySelectedAttraction = function () {
        if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
          var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
          this.applyForce(t);
        }
      }),
      r
    );
  }),
  (function (t, e) {
    if ("function" == typeof define && define.amd)
      define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (i, n, r, o, s, a) {
        return e(t, i, n, r, o, s, a);
      });
    else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
      var i = t.Flickity;
      t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype);
    }
  })(window, function (t, e, i, n, r, o, s) {
    function a(t, e) {
      for (t = n.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    function l(t, e) {
      var i = n.getQueryElement(t);
      if (i) {
        if (((this.element = i), this.element.flickityGUID)) {
          var r = d[this.element.flickityGUID];
          return r.option(e), r;
        }
        h && (this.$element = h(this.element)), (this.options = n.extend({}, this.constructor.defaults)), this.option(e), this._create();
      } else c && c.error("Bad element for Flickity: " + (i || t));
    }
    var h = t.jQuery,
      u = t.getComputedStyle,
      c = t.console,
      f = 0,
      d = {};
    (l.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: 0.075, friction: 0.28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: 0.025, setGallerySize: !0 }), (l.createMethods = []);
    var p = l.prototype;
    n.extend(p, e.prototype),
      (p._create = function () {
        var e = (this.guid = ++f);
        (this.element.flickityGUID = e),
          (d[e] = this),
          (this.selectedIndex = 0),
          (this.restingFrames = 0),
          (this.x = 0),
          (this.velocity = 0),
          (this.originSide = this.options.rightToLeft ? "right" : "left"),
          (this.viewport = document.createElement("div")),
          (this.viewport.className = "flickity-viewport"),
          this._createSlider(),
          (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this),
          l.createMethods.forEach(function (t) {
            this[t]();
          }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (p.option = function (t) {
        n.extend(this.options, t);
      }),
      (p.activate = function () {
        if (!this.isActive) {
          (this.isActive = !0),
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
            this.getSize(),
            a(this._filterFindCellElements(this.element.children), this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility && ((this.element.tabIndex = 0), this.element.addEventListener("keydown", this)),
            this.emitEvent("activate");
          var t,
            e = this.options.initialIndex;
          (t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0), this.select(t, !1, !0), (this.isInitActivated = !0);
        }
      }),
      (p._createSlider = function () {
        var t = document.createElement("div");
        (t.className = "flickity-slider"), (t.style[this.originSide] = 0), (this.slider = t);
      }),
      (p._filterFindCellElements = function (t) {
        return n.filterFindElements(t, this.options.cellSelector);
      }),
      (p.reloadCells = function () {
        (this.cells = this._makeCells(this.slider.children)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
      }),
      (p._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
          return new r(t, this);
        }, this);
      }),
      (p.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (p.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }),
      (p.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (p._positionCells = function (t) {
        (t = t || 0), (this.maxCellHeight = (t && this.maxCellHeight) || 0);
        var e = 0;
        if (t > 0) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, r = t; r < n; r++) {
          var o = this.cells[r];
          o.setPosition(e), (e += o.size.outerWidth), (this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight));
        }
        (this.slideableWidth = e), this.updateSlides(), this._containSlides(), (this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0);
      }),
      (p._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize();
        });
      }),
      (p.updateSlides = function () {
        if (((this.slides = []), this.cells.length)) {
          var t = new o(this);
          this.slides.push(t);
          var e = "left" == this.originSide ? "marginRight" : "marginLeft",
            i = this._getCanCellFit();
          this.cells.forEach(function (n, r) {
            if (t.cells.length) {
              var s = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
              i.call(this, r, s) ? t.addCell(n) : (t.updateTarget(), (t = new o(this)), this.slides.push(t), t.addCell(n));
            } else t.addCell(n);
          }, this),
            t.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (p._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t)
          return function () {
            return !1;
          };
        if ("number" == typeof t) {
          var e = parseInt(t, 10);
          return function (t) {
            return t % e != 0;
          };
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      }),
      (p._init = p.reposition = function () {
        this.positionCells(), this.positionSliderAtSelected();
      }),
      (p.getSize = function () {
        (this.size = i(this.element)), this.setCellAlign(), (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var m = { center: { left: 0.5, right: 0.5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };
    return (
      (p.setCellAlign = function () {
        var t = m[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (p.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
          this.viewport.style.height = t + "px";
        }
      }),
      (p._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
          var t = this.cursorPosition,
            e = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t, e, -1)), (t = this.size.innerWidth - this.cursorPosition), (this.afterShiftCells = this._getGapCells(t, 0, 1));
        }
      }),
      (p._getGapCells = function (t, e, i) {
        for (var n = []; t > 0; ) {
          var r = this.cells[e];
          if (!r) break;
          n.push(r), (e += i), (t -= r.size.outerWidth);
        }
        return n;
      }),
      (p._containSlides = function () {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
          var t = this.options.rightToLeft,
            e = t ? "marginRight" : "marginLeft",
            i = t ? "marginLeft" : "marginRight",
            n = this.slideableWidth - this.getLastCell().size[i],
            r = n < this.size.innerWidth,
            o = this.cursorPosition + this.cells[0].size[e],
            s = n - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function (t) {
            r ? (t.target = n * this.cellAlign) : ((t.target = Math.max(t.target, o)), (t.target = Math.min(t.target, s)));
          }, this);
        }
      }),
      (p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), h && this.$element)) {
          var r = (t += this.options.namespaceJQueryEvents ? ".flickity" : "");
          if (e) {
            var o = h.Event(e);
            (o.type = t), (r = o);
          }
          this.$element.trigger(r, i);
        }
      }),
      (p.select = function (t, e, i) {
        this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)),
          this.slides[t] &&
            ((this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select"),
            this.dispatchEvent("cellSelect")));
      }),
      (p._wrapSelect = function (t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && e > 1)) return t;
        var i = n.modulo(t, e),
          r = Math.abs(i - this.selectedIndex),
          o = Math.abs(i + e - this.selectedIndex),
          s = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && o < r ? (t += e) : !this.isDragSelect && s < r && (t -= e), t < 0 ? (this.x -= this.slideableWidth) : t >= e && (this.x += this.slideableWidth);
      }),
      (p.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e);
      }),
      (p.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e);
      }),
      (p.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t),
          t.select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (p.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (p.selectCell = function (t, e, i) {
        var n;
        "number" == typeof t ? (n = this.cells[t]) : ("string" == typeof t && (t = this.element.querySelector(t)), (n = this.getCell(t)));
        for (var r = 0; n && r < this.slides.length; r++) {
          if (-1 != this.slides[r].cells.indexOf(n)) return void this.select(r, e, i);
        }
      }),
      (p.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (p.getCells = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getCell(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (p.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      (p.getParentCell = function (t) {
        var e = this.getCell(t);
        return e || ((t = n.getParent(t, ".flickity-slider > *")), this.getCell(t));
      }),
      (p.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i) return this.getCellElements();
        for (var r = [], o = e - t; o <= e + t; o++) {
          var s = this.options.wrapAround ? n.modulo(o, i) : o,
            a = this.slides[s];
          a && (r = r.concat(a.getCellElements()));
        }
        return r;
      }),
      (p.uiChange = function () {
        this.emitEvent("uiChange");
      }),
      (p.childUIPointerDown = function (t) {
        this.emitEvent("childUIPointerDown", [t]);
      }),
      (p.onresize = function () {
        this.watchCSS(), this.resize();
      }),
      n.debounceMethod(l, "onresize", 150),
      (p.resize = function () {
        if (this.isActive) {
          this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
          var t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }
      }),
      (p.watchCSS = function () {
        this.options.watchCSS && (-1 != u(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
      }),
      (p.onkeydown = function (t) {
        if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
          if (37 == t.keyCode) {
            var e = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[e]();
          } else if (39 == t.keyCode) {
            var i = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[i]();
          }
      }),
      (p.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove("flickity-enabled"),
          this.element.classList.remove("flickity-rtl"),
          this.cells.forEach(function (t) {
            t.destroy();
          }),
          this.unselectSelectedSlide(),
          this.element.removeChild(this.viewport),
          a(this.slider.children, this.element),
          this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)),
          (this.isActive = !1),
          this.emitEvent("deactivate"));
      }),
      (p.destroy = function () {
        this.deactivate(), t.removeEventListener("resize", this), this.emitEvent("destroy"), h && this.$element && h.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete d[this.guid];
      }),
      n.extend(p, s),
      (l.data = function (t) {
        var e = (t = n.getQueryElement(t)) && t.flickityGUID;
        return e && d[e];
      }),
      n.htmlInit(l, "flickity"),
      h && h.bridget && h.bridget("flickity", l),
      (l.Cell = r),
      l
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.Unipointer = e(t, t.EvEmitter));
  })(window, function (t, e) {
    function i() {}
    var n = (i.prototype = Object.create(e.prototype));
    (n.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0);
    }),
      (n.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1);
      }),
      (n._bindStartEvent = function (e, i) {
        var n = (i = void 0 === i || !!i) ? "addEventListener" : "removeEventListener";
        t.navigator.pointerEnabled ? e[n]("pointerdown", this) : t.navigator.msPointerEnabled ? e[n]("MSPointerDown", this) : (e[n]("mousedown", this), e[n]("touchstart", this));
      }),
      (n.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (n.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (n.onmousedown = function (t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (n.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (n.onMSPointerDown = n.onpointerdown = function (t) {
        this._pointerDown(t, t);
      }),
      (n._pointerDown = function (t, e) {
        this.isPointerDown || ((this.isPointerDown = !0), (this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier), this.pointerDown(t, e));
      }),
      (n.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
      });
    var r = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"], MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"] };
    return (
      (n._bindPostStartEvents = function (e) {
        if (e) {
          var i = r[e.type];
          i.forEach(function (e) {
            t.addEventListener(e, this);
          }, this),
            (this._boundPointerEvents = i);
        }
      }),
      (n._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (e) {
            t.removeEventListener(e, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (n.onmousemove = function (t) {
        this._pointerMove(t, t);
      }),
      (n.onMSPointerMove = n.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
      }),
      (n.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (n._pointerMove = function (t, e) {
        this.pointerMove(t, e);
      }),
      (n.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e]);
      }),
      (n.onmouseup = function (t) {
        this._pointerUp(t, t);
      }),
      (n.onMSPointerUp = n.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
      }),
      (n.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (n._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (n.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]);
      }),
      (n._pointerDone = function () {
        (this.isPointerDown = !1), delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone();
      }),
      (n.pointerDone = function () {}),
      (n.onMSPointerCancel = n.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
      }),
      (n.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (n._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (n.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e]);
      }),
      (i.getPointerPoint = function (t) {
        return { x: t.pageX, y: t.pageY };
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("unidragger/unidragger", ["unipointer/unipointer"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("unipointer")))
      : (t.Unidragger = e(t, t.Unipointer));
  })(window, function (t, e) {
    function i() {}
    function n() {}
    var r = (n.prototype = Object.create(e.prototype));
    (r.bindHandles = function () {
      this._bindHandles(!0);
    }),
      (r.unbindHandles = function () {
        this._bindHandles(!1);
      });
    var o = t.navigator;
    return (
      (r._bindHandles = function (t) {
        var e;
        (t = void 0 === t || !!t),
          (e = o.pointerEnabled
            ? function (e) {
                e.style.touchAction = t ? "none" : "";
              }
            : o.msPointerEnabled
            ? function (e) {
                e.style.msTouchAction = t ? "none" : "";
              }
            : i);
        for (var n = t ? "addEventListener" : "removeEventListener", r = 0; r < this.handles.length; r++) {
          var s = this.handles[r];
          this._bindStartEvent(s, t), e(s), s[n]("click", this);
        }
      }),
      (r.pointerDown = function (t, e) {
        if ("INPUT" == t.target.nodeName && "range" == t.target.type) return (this.isPointerDown = !1), void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
      }),
      (r._dragPointerDown = function (t, i) {
        (this.pointerDownPoint = e.getPointerPoint(i)), this.canPreventDefaultOnPointerDown(t, i) && t.preventDefault();
      }),
      (r.canPreventDefaultOnPointerDown = function (t) {
        return "SELECT" != t.target.nodeName;
      }),
      (r.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
      }),
      (r._dragPointerMove = function (t, i) {
        var n = e.getPointerPoint(i),
          r = { x: n.x - this.pointerDownPoint.x, y: n.y - this.pointerDownPoint.y };
        return !this.isDragging && this.hasDragStarted(r) && this._dragStart(t, i), r;
      }),
      (r.hasDragStarted = function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      }),
      (r.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
      }),
      (r._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (r._dragStart = function (t, i) {
        (this.isDragging = !0), (this.dragStartPoint = e.getPointerPoint(i)), (this.isPreventingClicks = !0), this.dragStart(t, i);
      }),
      (r.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e]);
      }),
      (r._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (r.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
      }),
      (r._dragEnd = function (t, e) {
        (this.isDragging = !1),
          setTimeout(
            function () {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (r.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e]);
      }),
      (r.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (r._staticClick = function (t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
          var i = t.target.nodeName;
          ("INPUT" != i && "TEXTAREA" != i) || t.target.focus(),
            this.staticClick(t, e),
            "mouseup" != t.type &&
              ((this.isIgnoringMouseUp = !0),
              setTimeout(
                function () {
                  delete this.isIgnoringMouseUp;
                }.bind(this),
                400
              ));
        }
      }),
      (r.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e]);
      }),
      (n.getPointerPoint = e.getPointerPoint),
      n
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (i, n, r) {
          return e(t, i, n, r);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")))
      : (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
  })(window, function (t, e, i, n) {
    function r() {
      return { x: t.pageXOffset, y: t.pageYOffset };
    }
    n.extend(e.defaults, { draggable: !0, dragThreshold: 3 }), e.createMethods.push("_createDrag");
    var o = e.prototype;
    n.extend(o, i.prototype);
    var s = "createTouch" in document,
      a = !1;
    (o._createDrag = function () {
      this.on("activate", this.bindDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("childUIPointerDown", this._childUIPointerDownDrag),
        this.on("deactivate", this.unbindDrag),
        s && !a && (t.addEventListener("touchmove", function () {}), (a = !0));
    }),
      (o.bindDrag = function () {
        this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"), (this.handles = [this.viewport]), this.bindHandles(), (this.isDragBound = !0));
      }),
      (o.unbindDrag = function () {
        this.isDragBound && (this.element.classList.remove("is-draggable"), this.unbindHandles(), delete this.isDragBound);
      }),
      (o._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (o._childUIPointerDownDrag = function (t) {
        t.preventDefault(), this.pointerDownFocus(t);
      });
    var l = { TEXTAREA: !0, INPUT: !0, OPTION: !0 },
      h = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };
    o.pointerDown = function (e, i) {
      if (l[e.target.nodeName] && !h[e.target.type]) return (this.isPointerDown = !1), void delete this.pointerIdentifier;
      this._dragPointerDown(e, i);
      var n = document.activeElement;
      n && n.blur && n != this.element && n != document.body && n.blur(),
        this.pointerDownFocus(e),
        (this.dragX = this.x),
        this.viewport.classList.add("is-pointer-down"),
        this._bindPostStartEvents(e),
        (this.pointerDownScroll = r()),
        t.addEventListener("scroll", this),
        this.dispatchEvent("pointerDown", e, [i]);
    };
    var u = { touchstart: !0, MSPointerDown: !0 },
      c = { INPUT: !0, SELECT: !0 };
    return (
      (o.pointerDownFocus = function (e) {
        if (this.options.accessibility && !u[e.type] && !c[e.target.nodeName]) {
          var i = t.pageYOffset;
          this.element.focus(), t.pageYOffset != i && t.scrollTo(t.pageXOffset, i);
        }
      }),
      (o.canPreventDefaultOnPointerDown = function (t) {
        var e = "touchstart" == t.type,
          i = t.target.nodeName;
        return !e && "SELECT" != i;
      }),
      (o.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (o.pointerUp = function (t, e) {
        delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e);
      }),
      (o.pointerDone = function () {
        t.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (o.dragStart = function (e, i) {
        (this.dragStartPosition = this.x), this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]);
      }),
      (o.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
      }),
      (o.dragMove = function (t, e, i) {
        t.preventDefault(), (this.previousDragX = this.dragX);
        var n = this.options.rightToLeft ? -1 : 1,
          r = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.slides.length) {
          var o = Math.max(-this.slides[0].target, this.dragStartPosition);
          r = r > o ? 0.5 * (r + o) : r;
          var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
          r = r < s ? 0.5 * (r + s) : r;
        }
        (this.dragX = r), (this.dragMoveTime = new Date()), this.dispatchEvent("dragMove", t, [e, i]);
      }),
      (o.dragEnd = function (t, e) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
          var n = this.getRestingPosition();
          this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
        } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
        delete this.previousDragX, (this.isDragSelect = this.options.wrapAround), this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]);
      }),
      (o.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index;
      }),
      (o._getClosestResting = function (t, e, i) {
        for (
          var n = this.selectedIndex,
            r = 1 / 0,
            o =
              this.options.contain && !this.options.wrapAround
                ? function (t, e) {
                    return t <= e;
                  }
                : function (t, e) {
                    return t < e;
                  };
          o(e, r) && ((n += i), (r = e), null !== (e = this.getSlideDistance(-t, n)));

        )
          e = Math.abs(e);
        return { distance: r, index: n - i };
      }),
      (o.getSlideDistance = function (t, e) {
        var i = this.slides.length,
          r = this.options.wrapAround && i > 1,
          o = r ? n.modulo(e, i) : e,
          s = this.slides[o];
        if (!s) return null;
        var a = r ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (s.target + a);
      }),
      (o.dragEndBoostSelect = function () {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (o.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          r = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, r]);
      }),
      (o.onscroll = function () {
        var t = r(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone();
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("unipointer")))
      : (t.TapListener = e(t, t.Unipointer));
  })(window, function (t, e) {
    function i(t) {
      this.bindTap(t);
    }
    var n = (i.prototype = Object.create(e.prototype));
    return (
      (n.bindTap = function (t) {
        t && (this.unbindTap(), (this.tapElement = t), this._bindStartEvent(t, !0));
      }),
      (n.unbindTap = function () {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
      }),
      (n.pointerUp = function (i, n) {
        if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
          var r = e.getPointerPoint(n),
            o = this.tapElement.getBoundingClientRect(),
            s = t.pageXOffset,
            a = t.pageYOffset;
          if ((r.x >= o.left + s && r.x <= o.right + s && r.y >= o.top + a && r.y <= o.bottom + a && this.emitEvent("tap", [i, n]), "mouseup" != i.type)) {
            this.isIgnoringMouseUp = !0;
            var l = this;
            setTimeout(function () {
              delete l.isIgnoringMouseUp;
            }, 400);
          }
        }
      }),
      (n.destroy = function () {
        this.pointerDone(), this.unbindTap();
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, r) {
          return e(t, i, n, r);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")))
      : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    "use strict";
    function r(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    var o = "http://www.w3.org/2000/svg";
    (r.prototype = new i()),
      (r.prototype._create = function () {
        (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = (this.element = document.createElement("button"));
        (e.className = "flickity-prev-next-button"), (e.className += this.isPrevious ? " previous" : " next"), e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
        var i = this.createSVG();
        e.appendChild(i), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
      }),
      (r.prototype.activate = function () {
        this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
      }),
      (r.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), this.element.removeEventListener("click", this);
      }),
      (r.prototype.createSVG = function () {
        var t = document.createElementNS(o, "svg");
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(o, "path"),
          i = (function (t) {
            return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
          })(this.parent.options.arrowShape);
        return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t;
      }),
      (r.prototype.onTap = function () {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t = this.isPrevious ? "previous" : "next";
          this.parent[t]();
        }
      }),
      (r.prototype.handleEvent = n.handleEvent),
      (r.prototype.onclick = function () {
        var t = document.activeElement;
        t && t == this.element && this.onTap();
      }),
      (r.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (r.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (r.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1) this.enable();
        else {
          var e = t.length ? t.length - 1 : 0,
            i = this.isPrevious ? 0 : e;
          this[this.parent.selectedIndex == i ? "disable" : "enable"]();
        }
      }),
      (r.prototype.destroy = function () {
        this.deactivate();
      }),
      n.extend(e.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }),
      e.createMethods.push("_createPrevNextButtons");
    var s = e.prototype;
    return (
      (s._createPrevNextButtons = function () {
        this.options.prevNextButtons && ((this.prevButton = new r(-1, this)), (this.nextButton = new r(1, this)), this.on("activate", this.activatePrevNextButtons));
      }),
      (s.activatePrevNextButtons = function () {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (s.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = r),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, r) {
          return e(t, i, n, r);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")))
      : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    function r(t) {
      (this.parent = t), this._create();
    }
    (r.prototype = new i()),
      (r.prototype._create = function () {
        (this.holder = document.createElement("ol")), (this.holder.className = "flickity-page-dots"), (this.dots = []), this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
      }),
      (r.prototype.activate = function () {
        this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder);
      }),
      (r.prototype.deactivate = function () {
        this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this);
      }),
      (r.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (r.prototype.addDots = function (t) {
        for (var e = document.createDocumentFragment(), i = []; t; ) {
          var n = document.createElement("li");
          (n.className = "dot"), e.appendChild(n), i.push(n), t--;
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (r.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (r.prototype.updateSelected = function () {
        this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && ((this.selectedDot = this.dots[this.parent.selectedIndex]), (this.selectedDot.className = "dot is-selected"));
      }),
      (r.prototype.onTap = function (t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
          this.parent.uiChange();
          var i = this.dots.indexOf(e);
          this.parent.select(i);
        }
      }),
      (r.prototype.destroy = function () {
        this.deactivate();
      }),
      (e.PageDots = r),
      n.extend(e.defaults, { pageDots: !0 }),
      e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return (
      (o._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new r(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      }),
      (o.activatePageDots = function () {
        this.pageDots.activate();
      }),
      (o.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      }),
      (o.updatePageDots = function () {
        this.pageDots.setDots();
      }),
      (o.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }),
      (e.PageDots = r),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, i, n) {
          return e(t, i, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")))
      : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function (t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = "stopped"),
        o &&
          ((this.onVisibilityChange = function () {
            this.visibilityChange();
          }.bind(this)),
          (this.onVisibilityPlay = function () {
            this.visibilityPlay();
          }.bind(this)));
    }
    var r, o;
    "hidden" in document ? ((r = "hidden"), (o = "visibilitychange")) : "webkitHidden" in document && ((r = "webkitHidden"), (o = "webkitvisibilitychange")),
      (n.prototype = Object.create(t.prototype)),
      (n.prototype.play = function () {
        if ("playing" != this.state) {
          var t = document[r];
          if (o && t) return void document.addEventListener(o, this.onVisibilityPlay);
          (this.state = "playing"), o && document.addEventListener(o, this.onVisibilityChange), this.tick();
        }
      }),
      (n.prototype.tick = function () {
        if ("playing" == this.state) {
          var t = this.parent.options.autoPlay;
          t = "number" == typeof t ? t : 3e3;
          var e = this;
          this.clear(),
            (this.timeout = setTimeout(function () {
              e.parent.next(!0), e.tick();
            }, t));
        }
      }),
      (n.prototype.stop = function () {
        (this.state = "stopped"), this.clear(), o && document.removeEventListener(o, this.onVisibilityChange);
      }),
      (n.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function () {
        "playing" == this.state && ((this.state = "paused"), this.clear());
      }),
      (n.prototype.unpause = function () {
        "paused" == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function () {
        this[document[r] ? "pause" : "unpause"]();
      }),
      (n.prototype.visibilityPlay = function () {
        this.play(), document.removeEventListener(o, this.onVisibilityPlay);
      }),
      e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
      i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return (
      (s._createPlayer = function () {
        (this.player = new n(this)), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
      }),
      (s.activatePlayer = function () {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
      }),
      (s.playPlayer = function () {
        this.player.play();
      }),
      (s.stopPlayer = function () {
        this.player.stop();
      }),
      (s.pausePlayer = function () {
        this.player.pause();
      }),
      (s.unpausePlayer = function () {
        this.player.unpause();
      }),
      (s.deactivatePlayer = function () {
        this.player.stop(), this.element.removeEventListener("mouseenter", this);
      }),
      (s.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
      }),
      (s.onmouseleave = function () {
        this.player.unpause(), this.element.removeEventListener("mouseleave", this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
          return e(t, i, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")))
      : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function (t, e, i) {
    var n = e.prototype;
    return (
      (n.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
          var n = this.cells.length;
          e = void 0 === e ? n : e;
          var r = (function (t) {
              var e = document.createDocumentFragment();
              return (
                t.forEach(function (t) {
                  e.appendChild(t.element);
                }),
                e
              );
            })(i),
            o = e == n;
          if (o) this.slider.appendChild(r);
          else {
            var s = this.cells[e].element;
            this.slider.insertBefore(r, s);
          }
          if (0 === e) this.cells = i.concat(this.cells);
          else if (o) this.cells = this.cells.concat(i);
          else {
            var a = this.cells.splice(e, n - e);
            this.cells = this.cells.concat(i).concat(a);
          }
          this._sizeCells(i);
          var l = e > this.selectedIndex ? 0 : i.length;
          this._cellAddedRemoved(e, l);
        }
      }),
      (n.append = function (t) {
        this.insert(t, this.cells.length);
      }),
      (n.prepend = function (t) {
        this.insert(t, 0);
      }),
      (n.remove = function (t) {
        var e,
          n,
          r = this.getCells(t),
          o = 0,
          s = r.length;
        for (e = 0; e < s; e++) {
          (n = r[e]), (o -= this.cells.indexOf(n) < this.selectedIndex ? 1 : 0);
        }
        for (e = 0; e < s; e++) (n = r[e]).remove(), i.removeFrom(this.cells, n);
        r.length && this._cellAddedRemoved(0, o);
      }),
      (n._cellAddedRemoved = function (t, e) {
        (e = e || 0), (this.selectedIndex += e), (this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex))), this.cellChange(t, !0), this.emitEvent("cellAddedRemoved", [t, e]);
      }),
      (n.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
          e.getSize();
          var i = this.cells.indexOf(e);
          this.cellChange(i);
        }
      }),
      (n.cellChange = function (t, e) {
        var i = this.slideableWidth;
        if ((this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("cellChange", [t]), this.options.freeScroll)) {
          var n = i - this.slideableWidth;
          (this.x += n * this.cellAlign), this.positionSlider();
        } else e && this.positionSliderAtSelected(), this.select(this.selectedIndex);
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
          return e(t, i, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")))
      : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function (t, e, i) {
    "use strict";
    function n(t) {
      if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload")) return [t];
      var e = t.querySelectorAll("img[data-flickity-lazyload]");
      return i.makeArray(e);
    }
    function r(t, e) {
      (this.img = t), (this.flickity = e), this.load();
    }
    e.createMethods.push("_createLazyload");
    var o = e.prototype;
    return (
      (o._createLazyload = function () {
        this.on("select", this.lazyLoad);
      }),
      (o.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (t) {
          var e = "number" == typeof t ? t : 0,
            i = this.getAdjacentCellElements(e),
            o = [];
          i.forEach(function (t) {
            var e = n(t);
            o = o.concat(e);
          }),
            o.forEach(function (t) {
              new r(t, this);
            }, this);
        }
      }),
      (r.prototype.handleEvent = i.handleEvent),
      (r.prototype.load = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.img.getAttribute("data-flickity-lazyload")), this.img.removeAttribute("data-flickity-lazyload");
      }),
      (r.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded");
      }),
      (r.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror");
      }),
      (r.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
          n = i && i.element;
        this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n);
      }),
      (e.LazyLoader = r),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e)
      : "object" == typeof module &&
        module.exports &&
        (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
  })(window, function (t) {
    return t;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
      : (t.Flickity = e(t.Flickity, t.fizzyUIUtils));
  })(window, function (t, e) {
    t.createMethods.push("_createAsNavFor");
    var i = t.prototype;
    return (
      (i._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
          var e = this;
          setTimeout(function () {
            e.setNavCompanion(t);
          });
        }
      }),
      (i.setNavCompanion = function (i) {
        i = e.getQueryElement(i);
        var n = t.data(i);
        if (n && n != this) {
          this.navCompanion = n;
          var r = this;
          (this.onNavCompanionSelect = function () {
            r.navCompanionSelect();
          }),
            n.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0);
        }
      }),
      (i.navCompanionSelect = function (t) {
        if (this.navCompanion) {
          var e = this.navCompanion.selectedCells[0],
            i = this.navCompanion.cells.indexOf(e),
            n = i + this.navCompanion.selectedCells.length - 1,
            r = Math.floor(
              (function (t, e, i) {
                return (e - t) * i + t;
              })(i, n, this.navCompanion.cellAlign)
            );
          if ((this.selectCell(r, !1, t), this.removeNavSelectedElements(), !(r >= this.cells.length))) {
            var o = this.cells.slice(i, n + 1);
            (this.navSelectedElements = o.map(function (t) {
              return t.element;
            })),
              this.changeNavSelectedClass("add");
          }
        }
      }),
      (i.changeNavSelectedClass = function (t) {
        this.navSelectedElements.forEach(function (e) {
          e.classList[t]("is-nav-selected");
        });
      }),
      (i.activateAsNavFor = function () {
        this.navCompanionSelect(!0);
      }),
      (i.removeNavSelectedElements = function () {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
      }),
      (i.onNavStaticClick = function (t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n);
      }),
      (i.deactivateAsNavFor = function () {
        this.removeNavSelectedElements();
      }),
      (i.destroyAsNavFor = function () {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })(window, function (t, e) {
    function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function n(t, e, r) {
      return this instanceof n
        ? ("string" == typeof t && (t = document.querySelectorAll(t)),
          (this.elements = (function (t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e;
          })(t)),
          (this.options = i({}, this.options)),
          "function" == typeof e ? (r = e) : i(this.options, e),
          r && this.on("always", r),
          this.getImages(),
          s && (this.jqDeferred = new s.Deferred()),
          void setTimeout(
            function () {
              this.check();
            }.bind(this)
          ))
        : new n(t, e, r);
    }
    function r(t) {
      this.img = t;
    }
    function o(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    var s = t.jQuery,
      a = t.console;
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.options = {}),
      (n.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (n.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && l[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var r = i[n];
            this.addImage(r);
          }
          if ("string" == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (n = 0; n < o.length; n++) {
              var s = o[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var l = { 1: !0, 9: !0, 11: !0 };
    return (
      (n.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
            var r = n && n[2];
            r && this.addBackground(r, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (n.prototype.addImage = function (t) {
        var e = new r(t);
        this.images.push(e);
      }),
      (n.prototype.addBackground = function (t, e) {
        var i = new o(t, e);
        this.images.push(i);
      }),
      (n.prototype.check = function () {
        function t(t, i, n) {
          setTimeout(function () {
            e.progress(t, i, n);
          });
        }
        var e = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (e) {
                e.once("progress", t), e.check();
              })
            : void this.complete()
        );
      }),
      (n.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, t, e);
      }),
      (n.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (((this.isComplete = !0), this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (r.prototype = Object.create(e.prototype)),
      (r.prototype.check = function () {
        return this.getIsImageComplete()
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (r.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      }),
      (o.prototype = Object.create(r.prototype)),
      (o.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url), this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
      }),
      (o.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      }),
      (o.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
      }),
      (n.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) &&
          ((s = e).fn.imagesLoaded = function (t, e) {
            return new n(this, t, e).jqDeferred.promise(s(this));
          });
      }),
      n.makeJQueryPlugin(),
      n
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (i, n) {
          return e(t, i, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("flickity"), require("imagesloaded")))
      : (t.Flickity = e(t, t.Flickity, t.imagesLoaded));
  })(window, function (t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return (
      (n._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded);
      }),
      (n.imagesLoaded = function () {
        if (this.options.imagesLoaded) {
          var t = this;
          i(this.slider).on("progress", function (e, i) {
            var n = t.getParentCell(i.img);
            t.cellSizeChange(n && n.element), t.options.freeScroll || t.positionSliderAtSelected();
          });
        }
      }),
      e
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
          e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function (t, e) {
    "use strict";
    function i(i, o, a) {
      (a = a || e || t.jQuery) &&
        (o.prototype.option ||
          (o.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          return "string" == typeof t
            ? (function (t, e, n) {
                var r,
                  o = "$()." + i + '("' + e + '")';
                return (
                  t.each(function (t, l) {
                    var h = a.data(l, i);
                    if (h) {
                      var u = h[e];
                      if (u && "_" != e.charAt(0)) {
                        var c = u.apply(h, n);
                        r = void 0 === r ? c : r;
                      } else s(o + " is not a valid method");
                    } else s(i + " not initialized. Cannot call methods, i.e. " + o);
                  }),
                  void 0 !== r ? r : t
                );
              })(this, t, r.call(arguments, 1))
            : ((function (t, e) {
                t.each(function (t, n) {
                  var r = a.data(n, i);
                  r ? (r.option(e), r._init()) : ((r = new o(n, e)), a.data(n, i, r));
                });
              })(this, t),
              this);
        }),
        n(a));
    }
    function n(t) {
      !t || (t && t.bridget) || (t.bridget = i);
    }
    var r = Array.prototype.slice,
      o = t.console,
      s =
        void 0 === o
          ? function () {}
          : function (t) {
              o.error(t);
            };
    return n(e || t.jQuery), i;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            r = i[n];
          e = e || [];
          for (var o = this._onceEvents && this._onceEvents[t]; r; ) {
            var s = o && o[r];
            s && (this.off(t, r), delete o[r]), r.apply(this, e), (r = i[(n += s ? 0 : 1)]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function e(t) {
      var e = getComputedStyle(t);
      return e || o("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
    }
    function i() {
      if (!l) {
        l = !0;
        var i = document.createElement("div");
        (i.style.width = "200px"), (i.style.padding = "1px 2px 3px 4px"), (i.style.borderStyle = "solid"), (i.style.borderWidth = "1px 2px 3px 4px"), (i.style.boxSizing = "border-box");
        var o = document.body || document.documentElement;
        o.appendChild(i);
        var s = e(i);
        (n.isBoxSizeOuter = r = 200 == t(s.width)), o.removeChild(i);
      }
    }
    function n(n) {
      if ((i(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType)) {
        var o = e(n);
        if ("none" == o.display)
          return (function () {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; a > e; e++) t[s[e]] = 0;
            return t;
          })();
        var l = {};
        (l.width = n.offsetWidth), (l.height = n.offsetHeight);
        for (var h = (l.isBorderBox = "border-box" == o.boxSizing), u = 0; a > u; u++) {
          var c = s[u],
            f = o[c],
            d = parseFloat(f);
          l[c] = isNaN(d) ? 0 : d;
        }
        var p = l.paddingLeft + l.paddingRight,
          m = l.paddingTop + l.paddingBottom,
          g = l.marginLeft + l.marginRight,
          v = l.marginTop + l.marginBottom,
          y = l.borderLeftWidth + l.borderRightWidth,
          _ = l.borderTopWidth + l.borderBottomWidth,
          b = h && r,
          x = t(o.width);
        !1 !== x && (l.width = x + (b ? 0 : p + y));
        var T = t(o.height);
        return !1 !== T && (l.height = T + (b ? 0 : m + _)), (l.innerWidth = l.width - (p + y)), (l.innerHeight = l.height - (m + _)), (l.outerWidth = l.width + g), (l.outerHeight = l.height + v), l;
      }
    }
    var r,
      o =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      a = s.length,
      l = !1;
    return n;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
        makeArray: function (t) {
          var e = [];
          if (Array.isArray(t)) e = t;
          else if (t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
          else e.push(t);
          return e;
        },
        removeFrom: function (t, e) {
          var i = t.indexOf(e);
          -1 != i && t.splice(i, 1);
        },
        getParent: function (t, i) {
          for (; t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
        },
        getQueryElement: function (t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        },
        handleEvent: function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        },
        filterFindElements: function (t, n) {
          t = i.makeArray(t);
          var r = [];
          return (
            t.forEach(function (t) {
              if (t instanceof HTMLElement) {
                if (!n) return void r.push(t);
                e(t, n) && r.push(t);
                for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) r.push(i[o]);
              }
            }),
            r
          );
        },
        debounceMethod: function (t, e, i) {
          var n = t.prototype[e],
            r = e + "Timeout";
          t.prototype[e] = function () {
            var t = this[r];
            t && clearTimeout(t);
            var e = arguments,
              o = this;
            this[r] = setTimeout(function () {
              n.apply(o, e), delete o[r];
            }, i || 100);
          };
        },
        docReady: function (t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t);
        },
        toDashed: function (t) {
          return t
            .replace(/(.)([A-Z])/g, function (t, e, i) {
              return e + "-" + i;
            })
            .toLowerCase();
        },
      },
      n = t.console;
    return (
      (i.htmlInit = function (e, r) {
        i.docReady(function () {
          var o = i.toDashed(r),
            s = "data-" + o,
            a = document.querySelectorAll("[" + s + "]"),
            l = document.querySelectorAll(".js-" + o),
            h = i.makeArray(a).concat(i.makeArray(l)),
            u = s + "-options",
            c = t.jQuery;
          h.forEach(function (t) {
            var i,
              o = t.getAttribute(s) || t.getAttribute(u);
            try {
              i = o && JSON.parse(o);
            } catch (e) {
              return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + e));
            }
            var a = new e(t, i);
            c && c.data(t, r, a);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t, e) {
      t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
    }
    var n = document.documentElement.style,
      r = "string" == typeof n.transition ? "transition" : "WebkitTransition",
      o = "string" == typeof n.transform ? "transform" : "WebkitTransform",
      s = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
      a = { transform: o, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
      l = (i.prototype = Object.create(t.prototype));
    (l.constructor = i),
      (l._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
      }),
      (l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (l.getSize = function () {
        this.size = e(this.element);
      }),
      (l.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          e[a[i] || i] = t[i];
        }
      }),
      (l.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          r = t[i ? "top" : "bottom"],
          o = this.layout.size,
          s = -1 != n.indexOf("%") ? (parseFloat(n) / 100) * o.width : parseInt(n, 10),
          a = -1 != r.indexOf("%") ? (parseFloat(r) / 100) * o.height : parseInt(r, 10);
        (s = isNaN(s) ? 0 : s), (a = isNaN(a) ? 0 : a), (s -= e ? o.paddingLeft : o.paddingRight), (a -= i ? o.paddingTop : o.paddingBottom), (this.position.x = s), (this.position.y = a);
      }),
      (l.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          r = i ? "paddingLeft" : "paddingRight",
          o = i ? "left" : "right",
          s = i ? "right" : "left",
          a = this.position.x + t[r];
        (e[o] = this.getXValue(a)), (e[s] = "");
        var l = n ? "paddingTop" : "paddingBottom",
          h = n ? "top" : "bottom",
          u = n ? "bottom" : "top",
          c = this.position.y + t[l];
        (e[h] = this.getYValue(c)), (e[u] = ""), this.css(e), this.emitEvent("layout", [this]);
      }),
      (l.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
      }),
      (l.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
      }),
      (l._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          r = parseInt(t, 10),
          o = parseInt(e, 10),
          s = r === this.position.x && o === this.position.y;
        if ((this.setPosition(t, e), !s || this.isTransitioning)) {
          var a = t - i,
            l = e - n,
            h = {};
          (h.transform = this.getTranslate(a, l)), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
        } else this.layoutPosition();
      }),
      (l.getTranslate = function (t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
      }),
      (l.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (l.moveTo = l._transitionTo),
      (l.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)), (this.position.y = parseInt(e, 10));
      }),
      (l._nonTransition = function (t) {
        for (var e in (this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd)) t.onTransitionEnd[e].call(this);
      }),
      (l.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            null;
          }
          this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var h =
      "opacity," +
      (function (t) {
        return t.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      })(o);
    (l.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: h, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(s, this, !1);
      }
    }),
      (l.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (l.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var u = { "-webkit-transform": "transform" };
    (l.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          i = u[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[i],
          (function (t) {
            for (var e in t) return !1;
            return !0;
          })(e.ingProperties) && this.disableTransition(),
          i in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
          i in e.onEnd)
        )
          e.onEnd[i].call(this), delete e.onEnd[i];
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (l.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), (this.isTransitioning = !1);
      }),
      (l._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
    return (
      (l.removeTransitionStyles = function () {
        this.css(c);
      }),
      (l.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (l.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
      }),
      (l.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (l.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
      }),
      (l.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (l.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (l.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
      }),
      (l.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (l.destroy = function () {
        this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
      }),
      i
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, r, o) {
          return e(t, i, n, r, o);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
      : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
  })(window, function (t, e, i, n, r) {
    "use strict";
    function o(t, e) {
      var i = n.getQueryElement(t);
      if (i) {
        (this.element = i), l && (this.$element = l(this.element)), (this.options = n.extend({}, this.constructor.defaults)), this.option(e);
        var r = ++u;
        (this.element.outlayerGUID = r), (c[r] = this), this._create(), this._getOption("initLayout") && this.layout();
      } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
    }
    function s(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
    }
    var a = t.console,
      l = t.jQuery,
      h = function () {},
      u = 0,
      c = {};
    (o.namespace = "outlayer"),
      (o.Item = r),
      (o.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var f = o.prototype;
    n.extend(f, e.prototype),
      (f.option = function (t) {
        n.extend(this.options, t);
      }),
      (f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
      }),
      (o.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }),
      (f._create = function () {
        this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0; r < e.length; r++) {
          var o = new i(e[r], this);
          n.push(o);
        }
        return n;
      }),
      (f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize();
      }),
      (f.getSize = function () {
        this.size = i(this.element);
      }),
      (f._getMeasurement = function (t, e) {
        var n,
          r = this.options[t];
        r ? ("string" == typeof r ? (n = this.element.querySelector(r)) : r instanceof HTMLElement && (n = r), (this[t] = n ? i(n)[e] : r)) : (this[t] = 0);
      }),
      (f.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
      }),
      (f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function () {
        var t = this.options.stagger;
        return null == t
          ? void (this.stagger = 0)
          : ((this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
              return i.length ? (i = parseFloat(i)) * (d[n] || 1) : 0;
            })(t)),
            this.stagger);
      }),
      (f._positionItem = function (t, e, i, n, r) {
        n ? t.goTo(e, i) : (t.stagger(r * this.stagger), t.moveTo(e, i));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
        }
      }),
      (f._getContainerSize = h),
      (f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (f._emitCompleteOnItems = function (t, e) {
        function i() {
          r.dispatchEvent(t + "Complete", null, [e]);
        }
        function n() {
          ++s == o && i();
        }
        var r = this,
          o = e.length;
        if (e && o) {
          var s = 0;
          e.forEach(function (e) {
            e.once(t, n);
          });
        } else i();
      }),
      (f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), l))
          if (((this.$element = this.$element || l(this.element)), e)) {
            var r = l.Event(e);
            (r.type = t), this.$element.trigger(r, i);
          } else this.$element.trigger(t, i);
      }),
      (f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (f.stamp = function (t) {
        (t = this._find(t)) && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (f.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (f._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), (t = n.makeArray(t))) : void 0;
      }),
      (f._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (f._manageStamp = h),
      (f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          r = i(t);
        return { left: e.left - n.left - r.marginLeft, top: e.top - n.top - r.marginTop, right: n.right - e.right - r.marginRight, bottom: n.bottom - e.bottom - r.marginBottom };
      }),
      (f.handleEvent = n.handleEvent),
      (f.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(o, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
        }
      }),
      (f.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (f.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (f.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace);
      }),
      (o.data = function (t) {
        var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return e && c[e];
      }),
      (o.create = function (t, e) {
        var i = s(o);
        return (
          (i.defaults = n.extend({}, o.defaults)), n.extend(i.defaults, e), (i.compatOptions = n.extend({}, o.compatOptions)), (i.namespace = t), (i.data = o.data), (i.Item = s(r)), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        );
      });
    var d = { ms: 1, s: 1e3 };
    return (o.Item = r), o;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      n = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), n.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var n = e[i];
            this.sortData[i] = n(this.element, this);
          }
        }
      });
    var r = i.destroy;
    return (
      (i.destroy = function () {
        r.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t), t && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
    }
    var n = i.prototype;
    return (
      ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
        n[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (n.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (n.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (n.getSegmentSize = function (t, e) {
        var i = t + e,
          n = "outer" + e;
        if ((this._getMeasurement(i, n), !this[i])) {
          var r = this.getFirstItemSize();
          this[i] = (r && r[n]) || this.isotope.size["inner" + e];
        }
      }),
      (n.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (n.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function r() {
          i.apply(this, arguments);
        }
        return (r.prototype = Object.create(n)), (r.prototype.constructor = r), e && (r.options = e), (r.prototype.namespace = t), (i.modes[t] = r), r;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    return (
      (i.compatOptions.fitWidth = "isFitWidth"),
      (i.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0;
      }),
      (i.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          r = this.containerWidth + this.gutter,
          o = r / n,
          s = n - (r % n);
        (o = Math[s && 1 > s ? "round" : "floor"](o)), (this.cols = Math.max(o, 1));
      }),
      (i.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
          i = e(t);
        this.containerWidth = i && i.innerWidth;
      }),
      (i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this._getColGroup(i), r = Math.min.apply(Math, n), o = n.indexOf(r), s = { x: this.columnWidth * o, y: r }, a = r + t.size.outerHeight, l = this.cols + 1 - n.length, h = 0; l > h; h++) this.colYs[o + h] = a;
        return s;
      }),
      (i.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
          var r = this.colYs.slice(n, n + t);
          e[n] = Math.max.apply(Math, r);
        }
        return e;
      }),
      (i.prototype._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          r = this._getOption("originLeft") ? n.left : n.right,
          o = r + i.outerWidth,
          s = Math.floor(r / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(o / this.columnWidth);
        (a -= o % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
        for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, h = s; a >= h; h++) this.colYs[h] = Math.max(l, this.colYs[h]);
      }),
      (i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
      }),
      (i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      n = i.prototype,
      r = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var o in e.prototype) r[o] || (n[o] = e.prototype[o]);
    var s = n.measureColumns;
    n.measureColumns = function () {
      (this.items = this.isotope.filteredItems), s.call(this);
    };
    var a = n._getOption;
    return (
      (n._getOption = function (t) {
        return "fitWidth" == t ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var n = { x: this.x, y: this.y };
        return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), n;
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define([
          "outlayer/outlayer",
          "get-size/get-size",
          "desandro-matches-selector/matches-selector",
          "fizzy-ui-utils/utils",
          "isotope/js/item",
          "isotope/js/layout-mode",
          "isotope/js/layout-modes/masonry",
          "isotope/js/layout-modes/fit-rows",
          "isotope/js/layout-modes/vertical",
        ], function (i, n, r, o, s, a) {
          return e(t, i, n, r, o, s, a);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope/js/item"),
          require("isotope/js/layout-mode"),
          require("isotope/js/layout-modes/masonry"),
          require("isotope/js/layout-modes/fit-rows"),
          require("isotope/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode));
  })(window, function (t, e, i, n, r, o, s) {
    var a = t.jQuery,
      l = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      h = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
    (h.Item = o), (h.LayoutMode = s);
    var u = h.prototype;
    (u._create = function () {
      for (var t in ((this.itemGUID = 0), (this._sorters = {}), this._getSorters(), e.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]), s.modes))
        this._initLayoutMode(t);
    }),
      (u.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (u._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
          t[i].id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (u._initLayoutMode = function (t) {
        var e = s.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? r.extend(e.options, i) : i), (this.modes[t] = new e(this));
      }),
      (u.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
      }),
      (u._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
      }),
      (u.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
      }),
      (u._init = u.arrange),
      (u._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (u._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (u._bindArrangeComplete = function () {
        function t() {
          e && i && n && r.dispatchEvent("arrangeComplete", null, [r.filteredItems]);
        }
        var e,
          i,
          n,
          r = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (n = !0), t();
          });
      }),
      (u._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], r = [], o = this._getFilterTest(e), s = 0; s < t.length; s++) {
          var a = t[s];
          if (!a.isIgnored) {
            var l = o(a);
            l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || r.push(a);
          }
        }
        return { matches: i, needReveal: n, needHide: r };
      }),
      (u._getFilterTest = function (t) {
        return a && this.options.isJQueryFiltering
          ? function (e) {
              return a(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return n(e.element, t);
            };
      }),
      (u.updateSortData = function (t) {
        var e;
        t ? ((t = r.makeArray(t)), (e = this.getItems(t))) : (e = this.items), this._getSorters(), this._updateItemsSortData(e);
      }),
      (u._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = c(i);
        }
      }),
      (u._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
          t[i].updateSortData();
        }
      });
    var c = (function () {
      return function (t) {
        if ("string" != typeof t) return t;
        var e = l(t).split(" "),
          i = e[0],
          n = i.match(/^\[(.+)\]$/),
          r = (function (t, e) {
            return t
              ? function (e) {
                  return e.getAttribute(t);
                }
              : function (t) {
                  var i = t.querySelector(e);
                  return i && i.textContent;
                };
          })(n && n[1], i),
          o = h.sortDataParsers[e[1]];
        return o
          ? function (t) {
              return t && o(r(t));
            }
          : function (t) {
              return t && r(t);
            };
      };
    })();
    (h.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (u._sort = function () {
        var t = this.options.sortBy;
        if (t) {
          var e = (function (t, e) {
            return function (i, n) {
              for (var r = 0; r < t.length; r++) {
                var o = t[r],
                  s = i.sortData[o],
                  a = n.sortData[o];
                if (s > a || a > s) return (s > a ? 1 : -1) * ((void 0 !== e[o] ? e[o] : e) ? 1 : -1);
              }
              return 0;
            };
          })([].concat.apply(t, this.sortHistory), this.options.sortAscending);
          this.filteredItems.sort(e), t != this.sortHistory[0] && this.sortHistory.unshift(t);
        }
      }),
      (u._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (u._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (u._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (u._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (u._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (u.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (u.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (u.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems), (this.filteredItems = i.concat(this.filteredItems)), (this.items = e.concat(this.items));
        }
      }),
      (u._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
      }),
      (u.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            n,
            r = e.length;
          for (i = 0; r > i; i++) (n = e[i]), this.element.appendChild(n.element);
          var o = this._filter(e).matches;
          for (i = 0; r > i; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; r > i; i++) delete e[i].isLayoutInstant;
          this.reveal(o);
        }
      });
    var f = u.remove;
    return (
      (u.remove = function (t) {
        t = r.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
          var o = e[n];
          r.removeFrom(this.filteredItems, o);
        }
      }),
      (u.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          this.items[t].sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (u._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return (this.options.transitionDuration = i), n;
      }),
      (u.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      h
    );
  }),
  (function (t, e, i, n) {
    "use strict";
    function r(t, e, i) {
      return setTimeout(h(t, i), e);
    }
    function o(t, e, i) {
      return !!Array.isArray(t) && (s(t, i[e], i), !0);
    }
    function s(t, e, i) {
      var r;
      if (t)
        if (t.forEach) t.forEach(e, i);
        else if (t.length !== n) for (r = 0; r < t.length; ) e.call(i, t[r], r, t), r++;
        else for (r in t) t.hasOwnProperty(r) && e.call(i, t[r], r, t);
    }
    function a(e, i, n) {
      var r = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
      return function () {
        var i = new Error("get-stack-trace"),
          n =
            i && i.stack
              ? i.stack
                  .replace(/^[^\(]+?[\n$]/gm, "")
                  .replace(/^\s+at\s+/gm, "")
                  .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
              : "Unknown Stack Trace",
          o = t.console && (t.console.warn || t.console.log);
        return o && o.call(t.console, r, n), e.apply(this, arguments);
      };
    }
    function l(t, e, i) {
      var n,
        r = e.prototype;
      ((n = t.prototype = Object.create(r)).constructor = t), (n._super = r), i && J(n, i);
    }
    function h(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    function u(t, e) {
      return typeof t == it ? t.apply((e && e[0]) || n, e) : t;
    }
    function c(t, e) {
      return t === n ? e : t;
    }
    function f(t, e, i) {
      s(g(e), function (e) {
        t.addEventListener(e, i, !1);
      });
    }
    function d(t, e, i) {
      s(g(e), function (e) {
        t.removeEventListener(e, i, !1);
      });
    }
    function p(t, e) {
      for (; t; ) {
        if (t == e) return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function m(t, e) {
      return t.indexOf(e) > -1;
    }
    function g(t) {
      return t.trim().split(/\s+/g);
    }
    function v(t, e, i) {
      if (t.indexOf && !i) return t.indexOf(e);
      for (var n = 0; n < t.length; ) {
        if ((i && t[n][i] == e) || (!i && t[n] === e)) return n;
        n++;
      }
      return -1;
    }
    function y(t) {
      return Array.prototype.slice.call(t, 0);
    }
    function _(t, e, i) {
      for (var n = [], r = [], o = 0; o < t.length; ) {
        var s = e ? t[o][e] : t[o];
        v(r, s) < 0 && n.push(t[o]), (r[o] = s), o++;
      }
      return (
        i &&
          (n = e
            ? n.sort(function (t, i) {
                return t[e] > i[e];
              })
            : n.sort()),
        n
      );
    }
    function b(t, e) {
      for (var i, r, o = e[0].toUpperCase() + e.slice(1), s = 0; s < tt.length; ) {
        if ((r = (i = tt[s]) ? i + o : e) in t) return r;
        s++;
      }
      return n;
    }
    function x(e) {
      var i = e.ownerDocument || e;
      return i.defaultView || i.parentWindow || t;
    }
    function T(t, e) {
      var i = this;
      (this.manager = t),
        (this.callback = e),
        (this.element = t.element),
        (this.target = t.options.inputTarget),
        (this.domHandler = function (e) {
          u(t.options.enable, [t]) && i.handler(e);
        }),
        this.init();
    }
    function w(t, e, i) {
      var n = i.pointers.length,
        r = i.changedPointers.length,
        o = e & mt && n - r == 0,
        s = e & (vt | yt) && n - r == 0;
      (i.isFirst = !!o),
        (i.isFinal = !!s),
        o && (t.session = {}),
        (i.eventType = e),
        (function (t, e) {
          var i = t.session,
            n = e.pointers,
            r = n.length;
          i.firstInput || (i.firstInput = C(e)), r > 1 && !i.firstMultiple ? (i.firstMultiple = C(e)) : 1 === r && (i.firstMultiple = !1);
          var o = i.firstInput,
            s = i.firstMultiple,
            a = s ? s.center : o.center,
            l = (e.center = E(n));
          (e.timeStamp = ot()),
            (e.deltaTime = e.timeStamp - o.timeStamp),
            (e.angle = P(a, l)),
            (e.distance = D(a, l)),
            (function (t, e) {
              var i = e.center,
                n = t.offsetDelta || {},
                r = t.prevDelta || {},
                o = t.prevInput || {};
              (e.eventType !== mt && o.eventType !== vt) || ((r = t.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }), (n = t.offsetDelta = { x: i.x, y: i.y })), (e.deltaX = r.x + (i.x - n.x)), (e.deltaY = r.y + (i.y - n.y));
            })(i, e),
            (e.offsetDirection = A(e.deltaX, e.deltaY));
          var h = k(e.deltaTime, e.deltaX, e.deltaY);
          (e.overallVelocityX = h.x),
            (e.overallVelocityY = h.y),
            (e.overallVelocity = rt(h.x) > rt(h.y) ? h.x : h.y),
            (e.scale = s
              ? (function (t, e) {
                  return D(e[0], e[1], At) / D(t[0], t[1], At);
                })(s.pointers, n)
              : 1),
            (e.rotation = s
              ? (function (t, e) {
                  return P(e[1], e[0], At) + P(t[1], t[0], At);
                })(s.pointers, n)
              : 0),
            (e.maxPointers = i.prevInput ? (e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers) : e.pointers.length),
            S(i, e);
          var u = t.element;
          p(e.srcEvent.target, u) && (u = e.srcEvent.target), (e.target = u);
        })(t, i),
        t.emit("hammer.input", i),
        t.recognize(i),
        (t.session.prevInput = i);
    }
    function S(t, e) {
      var i,
        r,
        o,
        s,
        a = t.lastInterval || e,
        l = e.timeStamp - a.timeStamp;
      if (e.eventType != yt && (l > pt || a.velocity === n)) {
        var h = e.deltaX - a.deltaX,
          u = e.deltaY - a.deltaY,
          c = k(l, h, u);
        (r = c.x), (o = c.y), (i = rt(c.x) > rt(c.y) ? c.x : c.y), (s = A(h, u)), (t.lastInterval = e);
      } else (i = a.velocity), (r = a.velocityX), (o = a.velocityY), (s = a.direction);
      (e.velocity = i), (e.velocityX = r), (e.velocityY = o), (e.direction = s);
    }
    function C(t) {
      for (var e = [], i = 0; i < t.pointers.length; ) (e[i] = { clientX: nt(t.pointers[i].clientX), clientY: nt(t.pointers[i].clientY) }), i++;
      return { timeStamp: ot(), pointers: e, center: E(e), deltaX: t.deltaX, deltaY: t.deltaY };
    }
    function E(t) {
      var e = t.length;
      if (1 === e) return { x: nt(t[0].clientX), y: nt(t[0].clientY) };
      for (var i = 0, n = 0, r = 0; e > r; ) (i += t[r].clientX), (n += t[r].clientY), r++;
      return { x: nt(i / e), y: nt(n / e) };
    }
    function k(t, e, i) {
      return { x: e / t || 0, y: i / t || 0 };
    }
    function A(t, e) {
      return t === e ? _t : rt(t) >= rt(e) ? (0 > t ? bt : xt) : 0 > e ? Tt : wt;
    }
    function D(t, e, i) {
      i || (i = kt);
      var n = e[i[0]] - t[i[0]],
        r = e[i[1]] - t[i[1]];
      return Math.sqrt(n * n + r * r);
    }
    function P(t, e, i) {
      i || (i = kt);
      var n = e[i[0]] - t[i[0]],
        r = e[i[1]] - t[i[1]];
      return (180 * Math.atan2(r, n)) / Math.PI;
    }
    function I() {
      (this.evEl = Pt), (this.evWin = It), (this.pressed = !1), T.apply(this, arguments);
    }
    function O() {
      (this.evEl = Lt), (this.evWin = Rt), T.apply(this, arguments), (this.store = this.manager.session.pointerEvents = []);
    }
    function N() {
      (this.evTarget = zt), (this.evWin = jt), (this.started = !1), T.apply(this, arguments);
    }
    function L() {
      (this.evTarget = Wt), (this.targetIds = {}), T.apply(this, arguments);
    }
    function R() {
      T.apply(this, arguments);
      var t = h(this.handler, this);
      (this.touch = new L(this.manager, t)), (this.mouse = new I(this.manager, t)), (this.primaryTouch = null), (this.lastTouches = []);
    }
    function M(t) {
      var e = t.changedPointers[0];
      if (e.identifier === this.primaryTouch) {
        var i = { x: e.clientX, y: e.clientY };
        this.lastTouches.push(i);
        var n = this.lastTouches;
        setTimeout(function () {
          var t = n.indexOf(i);
          t > -1 && n.splice(t, 1);
        }, Ht);
      }
    }
    function z(t, e) {
      (this.manager = t), this.set(e);
    }
    function j(t) {
      (this.options = J({}, this.defaults, t || {})), (this.id = lt++), (this.manager = null), (this.options.enable = c(this.options.enable, !0)), (this.state = Zt), (this.simultaneous = {}), (this.requireFail = []);
    }
    function F(t) {
      return t & ne ? "cancel" : t & ee ? "end" : t & te ? "move" : t & Jt ? "start" : "";
    }
    function W(t) {
      return t == wt ? "down" : t == Tt ? "up" : t == bt ? "left" : t == xt ? "right" : "";
    }
    function H(t, e) {
      var i = e.manager;
      return i ? i.get(t) : t;
    }
    function q() {
      j.apply(this, arguments);
    }
    function B() {
      q.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function $() {
      q.apply(this, arguments);
    }
    function Y() {
      j.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function U() {
      q.apply(this, arguments);
    }
    function X() {
      q.apply(this, arguments);
    }
    function V() {
      j.apply(this, arguments), (this.pTime = !1), (this.pCenter = !1), (this._timer = null), (this._input = null), (this.count = 0);
    }
    function Q(t, e) {
      return ((e = e || {}).recognizers = c(e.recognizers, Q.defaults.preset)), new G(t, e);
    }
    function G(t, e) {
      (this.options = J({}, Q.defaults, e || {})),
        (this.options.inputTarget = this.options.inputTarget || t),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.oldCssProps = {}),
        (this.element = t),
        (this.input = (function (t) {
          var e = t.options.inputClass;
          return new (e || (ut ? O : ct ? L : ht ? R : I))(t, w);
        })(this)),
        (this.touchAction = new z(this, this.options.touchAction)),
        K(this, !0),
        s(
          this.options.recognizers,
          function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
          },
          this
        );
    }
    function K(t, e) {
      var i,
        n = t.element;
      n.style &&
        (s(t.options.cssProps, function (r, o) {
          (i = b(n.style, o)), e ? ((t.oldCssProps[i] = n.style[i]), (n.style[i] = r)) : (n.style[i] = t.oldCssProps[i] || "");
        }),
        e || (t.oldCssProps = {}));
    }
    function Z(t, i) {
      var n = e.createEvent("Event");
      n.initEvent(t, !0, !0), (n.gesture = i), i.target.dispatchEvent(n);
    }
    var J,
      tt = ["", "webkit", "Moz", "MS", "ms", "o"],
      et = e.createElement("div"),
      it = "function",
      nt = Math.round,
      rt = Math.abs,
      ot = Date.now;
    J =
      "function" != typeof Object.assign
        ? function (t) {
            if (t === n || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
              var r = arguments[i];
              if (r !== n && null !== r) for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o]);
            }
            return e;
          }
        : Object.assign;
    var st = a(
        function (t, e, i) {
          for (var r = Object.keys(e), o = 0; o < r.length; ) (!i || (i && t[r[o]] === n)) && (t[r[o]] = e[r[o]]), o++;
          return t;
        },
        "extend",
        "Use `assign`."
      ),
      at = a(
        function (t, e) {
          return st(t, e, !0);
        },
        "merge",
        "Use `assign`."
      ),
      lt = 1,
      ht = "ontouchstart" in t,
      ut = b(t, "PointerEvent") !== n,
      ct = ht && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
      ft = "touch",
      dt = "mouse",
      pt = 25,
      mt = 1,
      gt = 2,
      vt = 4,
      yt = 8,
      _t = 1,
      bt = 2,
      xt = 4,
      Tt = 8,
      wt = 16,
      St = bt | xt,
      Ct = Tt | wt,
      Et = St | Ct,
      kt = ["x", "y"],
      At = ["clientX", "clientY"];
    T.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(x(this.element), this.evWin, this.domHandler);
      },
      destroy: function () {
        this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(x(this.element), this.evWin, this.domHandler);
      },
    };
    var Dt = { mousedown: mt, mousemove: gt, mouseup: vt },
      Pt = "mousedown",
      It = "mousemove mouseup";
    l(I, T, {
      handler: function (t) {
        var e = Dt[t.type];
        e & mt && 0 === t.button && (this.pressed = !0),
          e & gt && 1 !== t.which && (e = vt),
          this.pressed && (e & vt && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: dt, srcEvent: t }));
      },
    });
    var Ot = { pointerdown: mt, pointermove: gt, pointerup: vt, pointercancel: yt, pointerout: yt },
      Nt = { 2: ft, 3: "pen", 4: dt, 5: "kinect" },
      Lt = "pointerdown",
      Rt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && ((Lt = "MSPointerDown"), (Rt = "MSPointerMove MSPointerUp MSPointerCancel")),
      l(O, T, {
        handler: function (t) {
          var e = this.store,
            i = !1,
            n = t.type.toLowerCase().replace("ms", ""),
            r = Ot[n],
            o = Nt[t.pointerType] || t.pointerType,
            s = o == ft,
            a = v(e, t.pointerId, "pointerId");
          r & mt && (0 === t.button || s) ? 0 > a && (e.push(t), (a = e.length - 1)) : r & (vt | yt) && (i = !0),
            0 > a || ((e[a] = t), this.callback(this.manager, r, { pointers: e, changedPointers: [t], pointerType: o, srcEvent: t }), i && e.splice(a, 1));
        },
      });
    var Mt = { touchstart: mt, touchmove: gt, touchend: vt, touchcancel: yt },
      zt = "touchstart",
      jt = "touchstart touchmove touchend touchcancel";
    l(N, T, {
      handler: function (t) {
        var e = Mt[t.type];
        if ((e === mt && (this.started = !0), this.started)) {
          var i = function (t, e) {
            var i = y(t.touches),
              n = y(t.changedTouches);
            return e & (vt | yt) && (i = _(i.concat(n), "identifier", !0)), [i, n];
          }.call(this, t, e);
          e & (vt | yt) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: ft, srcEvent: t });
        }
      },
    });
    var Ft = { touchstart: mt, touchmove: gt, touchend: vt, touchcancel: yt },
      Wt = "touchstart touchmove touchend touchcancel";
    l(L, T, {
      handler: function (t) {
        var e = Ft[t.type],
          i = function (t, e) {
            var i = y(t.touches),
              n = this.targetIds;
            if (e & (mt | gt) && 1 === i.length) return (n[i[0].identifier] = !0), [i, i];
            var r,
              o,
              s = y(t.changedTouches),
              a = [],
              l = this.target;
            if (
              ((o = i.filter(function (t) {
                return p(t.target, l);
              })),
              e === mt)
            )
              for (r = 0; r < o.length; ) (n[o[r].identifier] = !0), r++;
            for (r = 0; r < s.length; ) n[s[r].identifier] && a.push(s[r]), e & (vt | yt) && delete n[s[r].identifier], r++;
            return a.length ? [_(o.concat(a), "identifier", !0), a] : void 0;
          }.call(this, t, e);
        i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: ft, srcEvent: t });
      },
    });
    var Ht = 2500,
      qt = 25;
    l(R, T, {
      handler: function (t, e, i) {
        var n = i.pointerType == ft,
          r = i.pointerType == dt;
        if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
          if (n)
            (function (t, e) {
              t & mt ? ((this.primaryTouch = e.changedPointers[0].identifier), M.call(this, e)) : t & (vt | yt) && M.call(this, e);
            }.call(this, e, i));
          else if (
            r &&
            function (t) {
              for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                var r = this.lastTouches[n],
                  o = Math.abs(e - r.x),
                  s = Math.abs(i - r.y);
                if (qt >= o && qt >= s) return !0;
              }
              return !1;
            }.call(this, i)
          )
            return;
          this.callback(t, e, i);
        }
      },
      destroy: function () {
        this.touch.destroy(), this.mouse.destroy();
      },
    });
    var Bt = b(et.style, "touchAction"),
      $t = Bt !== n,
      Yt = "compute",
      Ut = "auto",
      Xt = "manipulation",
      Vt = "none",
      Qt = "pan-x",
      Gt = "pan-y",
      Kt = (function () {
        if (!$t) return !1;
        var e = {},
          i = t.CSS && t.CSS.supports;
        return (
          ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
            e[n] = !i || t.CSS.supports("touch-action", n);
          }),
          e
        );
      })();
    z.prototype = {
      set: function (t) {
        t == Yt && (t = this.compute()), $t && this.manager.element.style && Kt[t] && (this.manager.element.style[Bt] = t), (this.actions = t.toLowerCase().trim());
      },
      update: function () {
        this.set(this.manager.options.touchAction);
      },
      compute: function () {
        var t = [];
        return (
          s(this.manager.recognizers, function (e) {
            u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
          }),
          (function (t) {
            if (m(t, Vt)) return Vt;
            var e = m(t, Qt),
              i = m(t, Gt);
            return e && i ? Vt : e || i ? (e ? Qt : Gt) : m(t, Xt) ? Xt : Ut;
          })(t.join(" "))
        );
      },
      preventDefaults: function (t) {
        var e = t.srcEvent,
          i = t.offsetDirection;
        if (!this.manager.session.prevented) {
          var n = this.actions,
            r = m(n, Vt) && !Kt[Vt],
            o = m(n, Gt) && !Kt[Gt],
            s = m(n, Qt) && !Kt[Qt];
          if (r) {
            var a = 1 === t.pointers.length,
              l = t.distance < 2,
              h = t.deltaTime < 250;
            if (a && l && h) return;
          }
          return s && o ? void 0 : r || (o && i & St) || (s && i & Ct) ? this.preventSrc(e) : void 0;
        }
        e.preventDefault();
      },
      preventSrc: function (t) {
        (this.manager.session.prevented = !0), t.preventDefault();
      },
    };
    var Zt = 1,
      Jt = 2,
      te = 4,
      ee = 8,
      ie = ee,
      ne = 16;
    (j.prototype = {
      defaults: {},
      set: function (t) {
        return J(this.options, t), this.manager && this.manager.touchAction.update(), this;
      },
      recognizeWith: function (t) {
        if (o(t, "recognizeWith", this)) return this;
        var e = this.simultaneous;
        return e[(t = H(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this;
      },
      dropRecognizeWith: function (t) {
        return o(t, "dropRecognizeWith", this) ? this : ((t = H(t, this)), delete this.simultaneous[t.id], this);
      },
      requireFailure: function (t) {
        if (o(t, "requireFailure", this)) return this;
        var e = this.requireFail;
        return -1 === v(e, (t = H(t, this))) && (e.push(t), t.requireFailure(this)), this;
      },
      dropRequireFailure: function (t) {
        if (o(t, "dropRequireFailure", this)) return this;
        t = H(t, this);
        var e = v(this.requireFail, t);
        return e > -1 && this.requireFail.splice(e, 1), this;
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function (t) {
        return !!this.simultaneous[t.id];
      },
      emit: function (t) {
        function e(e) {
          i.manager.emit(e, t);
        }
        var i = this,
          n = this.state;
        ee > n && e(i.options.event + F(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ee && e(i.options.event + F(n));
      },
      tryEmit: function (t) {
        return this.canEmit() ? this.emit(t) : void (this.state = 32);
      },
      canEmit: function () {
        for (var t = 0; t < this.requireFail.length; ) {
          if (!(this.requireFail[t].state & (32 | Zt))) return !1;
          t++;
        }
        return !0;
      },
      recognize: function (t) {
        var e = J({}, t);
        return u(this.options.enable, [this, e]) ? (this.state & (ie | ne | 32) && (this.state = Zt), (this.state = this.process(e)), void (this.state & (Jt | te | ee | ne) && this.tryEmit(e))) : (this.reset(), void (this.state = 32));
      },
      process: function (t) {},
      getTouchAction: function () {},
      reset: function () {},
    }),
      l(q, j, {
        defaults: { pointers: 1 },
        attrTest: function (t) {
          var e = this.options.pointers;
          return 0 === e || t.pointers.length === e;
        },
        process: function (t) {
          var e = this.state,
            i = t.eventType,
            n = e & (Jt | te),
            r = this.attrTest(t);
          return n && (i & yt || !r) ? e | ne : n || r ? (i & vt ? e | ee : e & Jt ? e | te : Jt) : 32;
        },
      }),
      l(B, q, {
        defaults: { event: "pan", threshold: 10, pointers: 1, direction: Et },
        getTouchAction: function () {
          var t = this.options.direction,
            e = [];
          return t & St && e.push(Gt), t & Ct && e.push(Qt), e;
        },
        directionTest: function (t) {
          var e = this.options,
            i = !0,
            n = t.distance,
            r = t.direction,
            o = t.deltaX,
            s = t.deltaY;
          return (
            r & e.direction || (e.direction & St ? ((r = 0 === o ? _t : 0 > o ? bt : xt), (i = o != this.pX), (n = Math.abs(t.deltaX))) : ((r = 0 === s ? _t : 0 > s ? Tt : wt), (i = s != this.pY), (n = Math.abs(t.deltaY)))),
            (t.direction = r),
            i && n > e.threshold && r & e.direction
          );
        },
        attrTest: function (t) {
          return q.prototype.attrTest.call(this, t) && (this.state & Jt || (!(this.state & Jt) && this.directionTest(t)));
        },
        emit: function (t) {
          (this.pX = t.deltaX), (this.pY = t.deltaY);
          var e = W(t.direction);
          e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
        },
      }),
      l($, q, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [Vt];
        },
        attrTest: function (t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Jt);
        },
        emit: function (t) {
          if (1 !== t.scale) {
            var e = t.scale < 1 ? "in" : "out";
            t.additionalEvent = this.options.event + e;
          }
          this._super.emit.call(this, t);
        },
      }),
      l(Y, j, {
        defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
        getTouchAction: function () {
          return [Ut];
        },
        process: function (t) {
          var e = this.options,
            i = t.pointers.length === e.pointers,
            n = t.distance < e.threshold,
            o = t.deltaTime > e.time;
          if (((this._input = t), !n || !i || (t.eventType & (vt | yt) && !o))) this.reset();
          else if (t.eventType & mt)
            this.reset(),
              (this._timer = r(
                function () {
                  (this.state = ie), this.tryEmit();
                },
                e.time,
                this
              ));
          else if (t.eventType & vt) return ie;
          return 32;
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function (t) {
          this.state === ie && (t && t.eventType & vt ? this.manager.emit(this.options.event + "up", t) : ((this._input.timeStamp = ot()), this.manager.emit(this.options.event, this._input)));
        },
      }),
      l(U, q, {
        defaults: { event: "rotate", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [Vt];
        },
        attrTest: function (t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Jt);
        },
      }),
      l(X, q, {
        defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: St | Ct, pointers: 1 },
        getTouchAction: function () {
          return B.prototype.getTouchAction.call(this);
        },
        attrTest: function (t) {
          var e,
            i = this.options.direction;
          return (
            i & (St | Ct) ? (e = t.overallVelocity) : i & St ? (e = t.overallVelocityX) : i & Ct && (e = t.overallVelocityY),
            this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && rt(e) > this.options.velocity && t.eventType & vt
          );
        },
        emit: function (t) {
          var e = W(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
        },
      }),
      l(V, j, {
        defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 },
        getTouchAction: function () {
          return [Xt];
        },
        process: function (t) {
          var e = this.options,
            i = t.pointers.length === e.pointers,
            n = t.distance < e.threshold,
            o = t.deltaTime < e.time;
          if ((this.reset(), t.eventType & mt && 0 === this.count)) return this.failTimeout();
          if (n && o && i) {
            if (t.eventType != vt) return this.failTimeout();
            var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
              a = !this.pCenter || D(this.pCenter, t.center) < e.posThreshold;
            if (((this.pTime = t.timeStamp), (this.pCenter = t.center), a && s ? (this.count += 1) : (this.count = 1), (this._input = t), 0 === this.count % e.taps))
              return this.hasRequireFailures()
                ? ((this._timer = r(
                    function () {
                      (this.state = ie), this.tryEmit();
                    },
                    e.interval,
                    this
                  )),
                  Jt)
                : ie;
          }
          return 32;
        },
        failTimeout: function () {
          return (
            (this._timer = r(
              function () {
                this.state = 32;
              },
              this.options.interval,
              this
            )),
            32
          );
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function () {
          this.state == ie && ((this._input.tapCount = this.count), this.manager.emit(this.options.event, this._input));
        },
      }),
      (Q.VERSION = "2.0.7"),
      (Q.defaults = {
        domEvents: !1,
        touchAction: Yt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[U, { enable: !1 }], [$, { enable: !1 }, ["rotate"]], [X, { direction: St }], [B, { direction: St }, ["swipe"]], [V], [V, { event: "doubletap", taps: 2 }, ["tap"]], [Y]],
        cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" },
      });
    (G.prototype = {
      set: function (t) {
        return J(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), (this.input.target = t.inputTarget), this.input.init()), this;
      },
      stop: function (t) {
        this.session.stopped = t ? 2 : 1;
      },
      recognize: function (t) {
        var e = this.session;
        if (!e.stopped) {
          this.touchAction.preventDefaults(t);
          var i,
            n = this.recognizers,
            r = e.curRecognizer;
          (!r || (r && r.state & ie)) && (r = e.curRecognizer = null);
          for (var o = 0; o < n.length; ) (i = n[o]), 2 === e.stopped || (r && i != r && !i.canRecognizeWith(r)) ? i.reset() : i.recognize(t), !r && i.state & (Jt | te | ee) && (r = e.curRecognizer = i), o++;
        }
      },
      get: function (t) {
        if (t instanceof j) return t;
        for (var e = this.recognizers, i = 0; i < e.length; i++) if (e[i].options.event == t) return e[i];
        return null;
      },
      add: function (t) {
        if (o(t, "add", this)) return this;
        var e = this.get(t.options.event);
        return e && this.remove(e), this.recognizers.push(t), (t.manager = this), this.touchAction.update(), t;
      },
      remove: function (t) {
        if (o(t, "remove", this)) return this;
        if ((t = this.get(t))) {
          var e = this.recognizers,
            i = v(e, t);
          -1 !== i && (e.splice(i, 1), this.touchAction.update());
        }
        return this;
      },
      on: function (t, e) {
        if (t !== n && e !== n) {
          var i = this.handlers;
          return (
            s(g(t), function (t) {
              (i[t] = i[t] || []), i[t].push(e);
            }),
            this
          );
        }
      },
      off: function (t, e) {
        if (t !== n) {
          var i = this.handlers;
          return (
            s(g(t), function (t) {
              e ? i[t] && i[t].splice(v(i[t], e), 1) : delete i[t];
            }),
            this
          );
        }
      },
      emit: function (t, e) {
        this.options.domEvents && Z(t, e);
        var i = this.handlers[t] && this.handlers[t].slice();
        if (i && i.length) {
          (e.type = t),
            (e.preventDefault = function () {
              e.srcEvent.preventDefault();
            });
          for (var n = 0; n < i.length; ) i[n](e), n++;
        }
      },
      destroy: function () {
        this.element && K(this, !1), (this.handlers = {}), (this.session = {}), this.input.destroy(), (this.element = null);
      },
    }),
      J(Q, {
        INPUT_START: mt,
        INPUT_MOVE: gt,
        INPUT_END: vt,
        INPUT_CANCEL: yt,
        STATE_POSSIBLE: Zt,
        STATE_BEGAN: Jt,
        STATE_CHANGED: te,
        STATE_ENDED: ee,
        STATE_RECOGNIZED: ie,
        STATE_CANCELLED: ne,
        STATE_FAILED: 32,
        DIRECTION_NONE: _t,
        DIRECTION_LEFT: bt,
        DIRECTION_RIGHT: xt,
        DIRECTION_UP: Tt,
        DIRECTION_DOWN: wt,
        DIRECTION_HORIZONTAL: St,
        DIRECTION_VERTICAL: Ct,
        DIRECTION_ALL: Et,
        Manager: G,
        Input: T,
        TouchAction: z,
        TouchInput: L,
        MouseInput: I,
        PointerEventInput: O,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: j,
        AttrRecognizer: q,
        Tap: V,
        Pan: B,
        Swipe: X,
        Pinch: $,
        Rotate: U,
        Press: Y,
        on: f,
        off: d,
        each: s,
        merge: at,
        extend: st,
        assign: J,
        inherit: l,
        bindFn: h,
        prefixed: b,
      }),
      ((void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = Q),
      "function" == typeof define && define.amd
        ? define(function () {
            return Q;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = Q)
        : (t.Hammer = Q);
  })(window, document),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window, document);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery"), window, document))
      : t(jQuery, window, document);
  })(function (t, e, i) {
    "use strict";
    var n, r, o, s, a, l, h, u, c, f, d, p, m, g, v, y, _, b, x, T, w, S, C, E, k;
    (b = {
      paneClass: "nano-pane",
      sliderClass: "nano-slider",
      contentClass: "nano-content",
      iOSNativeScrolling: !1,
      preventPageScrolling: !1,
      disableResize: !1,
      alwaysVisible: !1,
      flashDelay: 1500,
      sliderMinHeight: 20,
      sliderMaxHeight: null,
      documentContext: null,
      windowContext: null,
    }),
      (g = "scroll"),
      (h = "mousedown"),
      (u = "mouseenter"),
      (c = "mousemove"),
      (d = "mousewheel"),
      (f = "mouseup"),
      (m = "resize"),
      (a = "drag"),
      (l = "enter"),
      (y = "up"),
      (o = "DOMMouseScroll"),
      (s = "down"),
      (v = "touchmove"),
      (n = "Microsoft Internet Explorer" === e.navigator.appName && /msie 7./i.test(e.navigator.appVersion) && e.ActiveXObject),
      (r = null),
      (S = e.requestAnimationFrame),
      (_ = e.cancelAnimationFrame),
      (E = i.createElement("div").style),
      (k = (function () {
        var t, e, i, n;
        for (t = i = 0, n = (e = ["t", "webkitT", "MozT", "msT", "OT"]).length; n > i; t = ++i) if ((e[t], e[t] + "ransform" in E)) return e[t].substr(0, e[t].length - 1);
        return !1;
      })()),
      (C = (function (t) {
        return !1 !== k && ("" === k ? t : k + t.charAt(0).toUpperCase() + t.substr(1));
      })("transform")),
      (T = !1 !== C),
      (x = function () {
        var t, e, n;
        return (
          ((e = (t = i.createElement("div")).style).position = "absolute"),
          (e.width = "100px"),
          (e.height = "100px"),
          (e.overflow = g),
          (e.top = "-9999px"),
          i.body.appendChild(t),
          (n = t.offsetWidth - t.clientWidth),
          i.body.removeChild(t),
          n
        );
      }),
      (w = function () {
        var t, i, n;
        return (i = e.navigator.userAgent), !!(t = /(?=.+Mac OS X)(?=.+Firefox)/.test(i)) && ((n = /Firefox\/\d{2}\./.exec(i)) && (n = n[0].replace(/\D+/g, "")), t && +n > 23);
      }),
      (p = (function () {
        function p(n, o) {
          (this.el = n),
            (this.options = o),
            r || (r = x()),
            (this.$el = t(this.el)),
            (this.doc = t(this.options.documentContext || i)),
            (this.win = t(this.options.windowContext || e)),
            (this.body = this.doc.find("body")),
            (this.$content = this.$el.children("." + this.options.contentClass)),
            this.$content.attr("tabindex", this.options.tabIndex || 0),
            (this.content = this.$content[0]),
            (this.previousPosition = 0),
            this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(),
            this.createEvents(),
            this.addEvents(),
            this.reset();
        }
        return (
          (p.prototype.preventScrolling = function (t, e) {
            if (this.isActive)
              if (t.type === o) ((e === s && t.originalEvent.detail > 0) || (e === y && t.originalEvent.detail < 0)) && t.preventDefault();
              else if (t.type === d) {
                if (!t.originalEvent || !t.originalEvent.wheelDelta) return;
                ((e === s && t.originalEvent.wheelDelta < 0) || (e === y && t.originalEvent.wheelDelta > 0)) && t.preventDefault();
              }
          }),
          (p.prototype.nativeScrolling = function () {
            this.$content.css({ WebkitOverflowScrolling: "touch" }), (this.iOSNativeScrolling = !0), (this.isActive = !0);
          }),
          (p.prototype.updateScrollValues = function () {
            var t, e;
            (t = this.content),
              (this.maxScrollTop = t.scrollHeight - t.clientHeight),
              (this.prevScrollTop = this.contentScrollTop || 0),
              (this.contentScrollTop = t.scrollTop),
              (e = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same"),
              (this.previousPosition = this.contentScrollTop),
              "same" !== e && this.$el.trigger("update", { position: this.contentScrollTop, maximum: this.maxScrollTop, direction: e }),
              this.iOSNativeScrolling || ((this.maxSliderTop = this.paneHeight - this.sliderHeight), (this.sliderTop = 0 === this.maxScrollTop ? 0 : (this.contentScrollTop * this.maxSliderTop) / this.maxScrollTop));
          }),
          (p.prototype.setOnScrollStyles = function () {
            var t, e;
            T ? ((t = {})[C] = "translate(0, " + this.sliderTop + "px)") : (t = { top: this.sliderTop }),
              S
                ? (_ && this.scrollRAF && _(this.scrollRAF),
                  (this.scrollRAF = S(
                    ((e = this),
                    function () {
                      return (e.scrollRAF = null), e.slider.css(t);
                    })
                  )))
                : this.slider.css(t);
          }),
          (p.prototype.createEvents = function () {
            var t;
            this.events = {
              down:
                ((t = this),
                function (e) {
                  return (
                    (t.isBeingDragged = !0),
                    (t.offsetY = e.pageY - t.slider.offset().top),
                    t.slider.is(e.target) || (t.offsetY = 0),
                    t.pane.addClass("active"),
                    t.doc.bind(c, t.events[a]).bind(f, t.events.up),
                    t.body.bind(u, t.events[l]),
                    !1
                  );
                }),
              drag: (function (t) {
                return function (e) {
                  return (
                    (t.sliderY = e.pageY - t.$el.offset().top - t.paneTop - (t.offsetY || 0.5 * t.sliderHeight)),
                    t.scroll(),
                    t.contentScrollTop >= t.maxScrollTop && t.prevScrollTop !== t.maxScrollTop ? t.$el.trigger("scrollend") : 0 === t.contentScrollTop && 0 !== t.prevScrollTop && t.$el.trigger("scrolltop"),
                    !1
                  );
                };
              })(this),
              up: (function (t) {
                return function (e) {
                  return (t.isBeingDragged = !1), t.pane.removeClass("active"), t.doc.unbind(c, t.events[a]).unbind(f, t.events.up), t.body.unbind(u, t.events[l]), !1;
                };
              })(this),
              resize: (function (t) {
                return function (e) {
                  t.reset();
                };
              })(this),
              panedown: (function (t) {
                return function (e) {
                  return (t.sliderY = (e.offsetY || e.originalEvent.layerY) - 0.5 * t.sliderHeight), t.scroll(), t.events.down(e), !1;
                };
              })(this),
              scroll: (function (t) {
                return function (e) {
                  t.updateScrollValues(),
                    t.isBeingDragged ||
                      (t.iOSNativeScrolling || ((t.sliderY = t.sliderTop), t.setOnScrollStyles()),
                      null != e &&
                        (t.contentScrollTop >= t.maxScrollTop
                          ? (t.options.preventPageScrolling && t.preventScrolling(e, s), t.prevScrollTop !== t.maxScrollTop && t.$el.trigger("scrollend"))
                          : 0 === t.contentScrollTop && (t.options.preventPageScrolling && t.preventScrolling(e, y), 0 !== t.prevScrollTop && t.$el.trigger("scrolltop"))));
                };
              })(this),
              wheel: (function (t) {
                return function (e) {
                  var i;
                  if (null != e) return (i = e.delta || e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail || (e.originalEvent && -e.originalEvent.detail)) && (t.sliderY += -i / 3), t.scroll(), !1;
                };
              })(this),
              enter: (function (t) {
                return function (e) {
                  var i;
                  if (t.isBeingDragged) return 1 !== (e.buttons || e.which) ? (i = t.events).up.apply(i, arguments) : void 0;
                };
              })(this),
            };
          }),
          (p.prototype.addEvents = function () {
            var t;
            this.removeEvents(),
              (t = this.events),
              this.options.disableResize || this.win.bind(m, t[m]),
              this.iOSNativeScrolling || (this.slider.bind(h, t[s]), this.pane.bind(h, t.panedown).bind(d + " " + o, t.wheel)),
              this.$content.bind(g + " " + d + " " + o + " " + v, t[g]);
          }),
          (p.prototype.removeEvents = function () {
            var t;
            (t = this.events), this.win.unbind(m, t[m]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind(g + " " + d + " " + o + " " + v, t[g]);
          }),
          (p.prototype.generate = function () {
            var t, i, n, o, s;
            return (
              (o = (i = this.options).paneClass),
              (s = i.sliderClass),
              i.contentClass,
              (n = this.$el.children("." + o)).length || n.children("." + s).length || this.$el.append('<div class="' + o + '"><div class="' + s + '" /></div>'),
              (this.pane = this.$el.children("." + o)),
              (this.slider = this.pane.find("." + s)),
              0 === r && w()
                ? (t = {
                    right: -14,
                    paddingRight:
                      +e
                        .getComputedStyle(this.content, null)
                        .getPropertyValue("padding-right")
                        .replace(/[^0-9.]+/g, "") + 14,
                  })
                : r && ((t = { right: -r }), this.$el.addClass("has-scrollbar")),
              null != t && this.$content.css(t),
              this
            );
          }),
          (p.prototype.restore = function () {
            (this.stopped = !1), this.iOSNativeScrolling || this.pane.show(), this.addEvents();
          }),
          (p.prototype.reset = function () {
            var t, e, i, o, s, a, l, h, u, c, f;
            return this.iOSNativeScrolling
              ? void (this.contentHeight = this.content.scrollHeight)
              : (this.$el.find("." + this.options.paneClass).length || this.generate().stop(),
                this.stopped && this.restore(),
                (s = (o = (t = this.content).style).overflowY),
                n && this.$content.css({ height: this.$content.height() }),
                (e = t.scrollHeight + r),
                (u = parseInt(this.$el.css("max-height"), 10)) > 0 && (this.$el.height(""), this.$el.height(t.scrollHeight > u ? u : t.scrollHeight)),
                (l = (a = this.pane.outerHeight(!1)) + (h = parseInt(this.pane.css("top"), 10)) + parseInt(this.pane.css("bottom"), 10)),
                (f = Math.round((l / e) * a)) < this.options.sliderMinHeight ? (f = this.options.sliderMinHeight) : null != this.options.sliderMaxHeight && f > this.options.sliderMaxHeight && (f = this.options.sliderMaxHeight),
                s === g && o.overflowX !== g && (f += r),
                (this.maxSliderTop = l - f),
                (this.contentHeight = e),
                (this.paneHeight = a),
                (this.paneOuterHeight = l),
                (this.sliderHeight = f),
                (this.paneTop = h),
                this.slider.height(f),
                this.events.scroll(),
                this.pane.show(),
                (this.isActive = !0),
                t.scrollHeight === t.clientHeight || (this.pane.outerHeight(!0) >= t.scrollHeight && s !== g)
                  ? (this.pane.hide(), (this.isActive = !1))
                  : this.el.clientHeight === t.scrollHeight && s === g
                  ? this.slider.hide()
                  : this.slider.show(),
                this.pane.css({ opacity: this.options.alwaysVisible ? 1 : "", visibility: this.options.alwaysVisible ? "visible" : "" }),
                ("static" === (i = this.$content.css("position")) || "relative" === i) && (c = parseInt(this.$content.css("right"), 10)) && this.$content.css({ right: "", marginRight: c }),
                this);
          }),
          (p.prototype.scroll = function () {
            return this.isActive
              ? ((this.sliderY = Math.max(0, this.sliderY)),
                (this.sliderY = Math.min(this.maxSliderTop, this.sliderY)),
                this.$content.scrollTop((this.maxScrollTop * this.sliderY) / this.maxSliderTop),
                this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()),
                this)
              : void 0;
          }),
          (p.prototype.scrollBottom = function (t) {
            return this.isActive ? (this.$content.scrollTop(this.contentHeight - this.$content.height() - t).trigger(d), this.stop().restore(), this) : void 0;
          }),
          (p.prototype.scrollTop = function (t) {
            return this.isActive ? (this.$content.scrollTop(+t).trigger(d), this.stop().restore(), this) : void 0;
          }),
          (p.prototype.scrollTo = function (t) {
            return this.isActive ? (this.scrollTop(this.$el.find(t).get(0).offsetTop), this) : void 0;
          }),
          (p.prototype.stop = function () {
            return _ && this.scrollRAF && (_(this.scrollRAF), (this.scrollRAF = null)), (this.stopped = !0), this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this;
          }),
          (p.prototype.destroy = function () {
            return (
              this.stopped || this.stop(),
              !this.iOSNativeScrolling && this.pane.length && this.pane.remove(),
              n && this.$content.height(""),
              this.$content.removeAttr("tabindex"),
              this.$el.hasClass("has-scrollbar") && (this.$el.removeClass("has-scrollbar"), this.$content.css({ right: "" })),
              this
            );
          }),
          (p.prototype.flash = function () {
            return !this.iOSNativeScrolling && this.isActive
              ? (this.reset(),
                this.pane.addClass("flashed"),
                setTimeout(
                  ((t = this),
                  function () {
                    t.pane.removeClass("flashed");
                  }),
                  this.options.flashDelay
                ),
                this)
              : void 0;
            var t;
          }),
          p
        );
      })()),
      (t.fn.nanoScroller = function (e) {
        return this.each(function () {
          var i, n;
          if (((n = this.nanoscroller) || ((i = t.extend({}, b, e)), (this.nanoscroller = n = new p(this, i))), e && "object" == typeof e)) {
            if ((t.extend(n.options, e), null != e.scrollBottom)) return n.scrollBottom(e.scrollBottom);
            if (null != e.scrollTop) return n.scrollTop(e.scrollTop);
            if (e.scrollTo) return n.scrollTo(e.scrollTo);
            if ("bottom" === e.scroll) return n.scrollBottom(0);
            if ("top" === e.scroll) return n.scrollTop(0);
            if (e.scroll && e.scroll instanceof t) return n.scrollTo(e.scroll);
            if (e.stop) return n.stop();
            if (e.destroy) return n.destroy();
            if (e.flash) return n.flash();
          }
          return n.reset();
        });
      }),
      (t.fn.nanoScroller.Constructor = p);
  }),
  (function () {
    "use strict";
    function t() {
      (p = c.width()), (m = c.height()), (g = f.height());
    }
    function e(t) {
      "function" == typeof t ? v.push(t) : window.dispatchEvent(new Event("resize"));
    }
    function i() {
      var t = c.scrollTop(),
        e = "";
      for (var i in ((e = t > x ? "down" : t < x ? "up" : "none"), 0 === t ? (e = "start") : t >= g - m && (e = "end"), _)) "function" == typeof _[i] && _[i](e, t, x, c);
      x = t;
    }
    function n() {
      var t = window.innerWidth;
      if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left);
      }
      (w = d[0].clientWidth < t),
        (S = (function () {
          var t = document.createElement("div");
          (t.className = "nk-body-scrollbar-measure"), d[0].appendChild(t);
          var e = t.offsetWidth - t.clientWidth;
          return d[0].removeChild(t), e;
        })());
    }
    function r(t) {
      t && !T
        ? ((T = 1), n(), void 0 === C && (C = d.css("padding-right") || ""), w && d.add(E).css("paddingRight", S + "px"), d.css("overflow", "hidden"))
        : !t && T && ((T = 0), d.css("overflow", ""), d.css("paddingRight", C), E.css("paddingRight", ""));
    }
    function o() {
      function t() {
        c.scrollTop() >= o ? (n.addClass("nk-navbar-fixed"), s.show()) : (n.removeClass("nk-navbar-fixed"), s.hide());
      }
      function e(t) {
        t.length && (t.removeClass("open"), h.to(t.children(".dropdown"), 0.3, { opacity: 0, display: "none" }), c.trigger("nk-closed-submenu", [t]));
      }
      function i(t) {
        t.hasClass("open") ||
          ((function (t) {
            if (t.parent().is(".nk-nav")) {
              var e = t.children(".dropdown"),
                i = t.parents(".nk-navbar:eq(0)"),
                n = "auto" !== e.css("right"),
                r = { marginLeft: "", marginRight: "", marginTop: 0, display: "block" };
              e.css(r);
              var o = e[0].getBoundingClientRect(),
                s = t[0].getBoundingClientRect();
              o.left < 0 ? (r.marginLeft = -o.left) : o.right > p && (r.marginLeft = p - o.right);
              var a = o.left + (r.marginLeft || 0);
              a > s.left && (r.marginLeft = (r.marginLeft || 0) - (a - s.left)),
                n && ((r.marginRight = -1 * r.marginLeft), (r.marginLeft = "")),
                (r.marginTop = i.innerHeight() - e.offset().top + i.offset().top),
                (r.display = "none"),
                e.css(r);
            }
          })(t),
          h.to(t.children(".dropdown"), 0.3, { opacity: 1, display: "block" }),
          t.addClass("open"),
          c.trigger("nk-opened-submenu", [t]));
      }
      var n = l(".nk-navbar-top"),
        r = l("[data-nav-mobile]");
      r.length &&
        r.each(function () {
          var t = l(l(this).html());
          l(l(this).attr("data-nav-mobile")).find(".nk-navbar-mobile-content > ul.nk-nav").append(t);
        });
      var o = n.length ? n.offset().top : 0,
        s = l("<div>").hide();
      n.hasClass("nk-navbar-sticky") &&
        (c.on("scroll resize", t),
        t(),
        n.after(s),
        this.debounceResize(function () {
          s.height(n.innerHeight());
        }));
      var a = void 0;
      n
        .on("mouseenter", "li.nk-drop-item", function () {
          var t = l(this),
            n = t
              .siblings(".open")
              .add(t.siblings().find(".open"))
              .add(t.parents(".nk-nav:eq(0)").siblings().find(".open"))
              .add(t.parents(".nk-nav:eq(0)").siblings(".open"))
              .add(t.parents(".nk-nav:eq(0)").parent().siblings().find(".open"));
          clearTimeout(a), e(n), i(t);
        })
        .on("mouseleave", "li.nk-drop-item", function () {
          var t = l(this);
          clearTimeout(a),
            (a = setTimeout(function () {
              e(t);
            }, 200));
        }),
        n.on("mouseleave", function () {
          clearTimeout(a),
            (a = setTimeout(function () {
              e(n.find(".open"));
            }, 400));
        }),
        n.filter(".nk-navbar-autohide"),
        this.throttleScroll(function (t, e) {
          n.hasClass("nk-navbar-transparent") && n.hasClass("nk-navbar-sticky") && n[(e > 70 ? "add" : "remove") + "Class"]("nk-navbar-solid");
        });
    }
    function s() {
      function t() {
        for (var t = 0; t < r.length; t++) {
          var e = r[t],
            i = 0,
            n = m;
          e.$block.length && ((i = e.$block.offset().top), (n = e.$block.innerHeight())), (e.activate = i - m / 2), (e.deactivate = i + n - m / 2);
        }
      }
      function e(t, e) {
        for (var i = 0; i < r.length; i++) {
          var n = r[i],
            o = e >= n.activate && e < n.deactivate;
          n.$item[o ? "addClass" : "removeClass"]("active");
        }
      }
      var i = this;
      f.on("click", ".nk-navbar a, a.nk-header-title-scroll-down", function (t) {
        var e = this.hash,
          n = this.baseURI === window.location.href;
        if (e && n) {
          var r = l(e),
            o = e.replace(/^#/, "");
          (r.length || "top" === o || "bottom" === o) &&
            (i.closeFullscreenNavbar(), r.length && !l(this).hasClass("nk-header-title-scroll-down") && (r.attr("id", ""), (document.location.hash = o), r.attr("id", o)), i.scrollTo(r.length ? r : o), t.preventDefault());
        }
      });
      var n = l('.nk-navbar .nk-nav > li > a[href*="#"]'),
        r = [];
      n.each(function () {
        var t = this.hash.replace(/^#/, "");
        if (t) {
          var e = l(this).parent(),
            i = l("#" + t);
          if ((t && i.length) || "top" === t) {
            var n = (function (t) {
              for (var e = 0; e < r.length; e++) if (r[e].hash === t) return e;
              return !1;
            })(t);
            !1 === n ? r.push({ hash: t, $item: e, $block: i }) : (r[n].$item = r[n].$item.add(e));
          }
        }
      }),
        r.length && (t(), e(0, c.scrollTop()), i.throttleScroll(e), i.debounceResize(t));
    }
    var a = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      l = jQuery,
      h = window.TweenMax,
      u = (/iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream, /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera));
    "ontouchstart" in window || (window.DocumentTouch && (document, DocumentTouch)), l("html").addClass(u ? "is-mobile" : "is-desktop");
    var c = l(window),
      f = l(document),
      d = l("body"),
      p = 0,
      m = 0,
      g = 0;
    t(), c.on("resize load orientationchange", t);
    var v = [],
      y = void 0;
    c.on("load resize orientationchange", function (t) {
      v.length &&
        (clearTimeout(y),
        (y = setTimeout(function () {
          for (var e = 0; e < v.length; e++) v[e](t);
        }, 50)));
    });
    var _ = [],
      b = void 0,
      x = 0;
    c.on("scroll load resize orientationchange", function () {
      _.length && (b = !0);
    }),
      setInterval(function () {
        b && ((b = !1), window.requestAnimationFrame(i));
      }, 250);
    var T = void 0,
      w = void 0,
      S = void 0,
      C = void 0,
      E = l(".nk-navbar-full"),
      k = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        return (
          a(t, [
            {
              key: "init",
              value: function () {
                var t = this;
                return t.initNavbar(), t.initNavbarFullscreen(), t.initNavbarDropEffect1(), t.initAnchors(), t.initPluginNano(), t.initPluginJarallax(), t.initPluginFlickity(), t.initPluginIsotope(), t;
              },
            },
            {
              key: "debounceResize",
              value: function (t) {
                return e.call(this, t);
              },
            },
            {
              key: "throttleScroll",
              value: function (t) {
                return function (t) {
                  _.push(t);
                }.call(this, t);
              },
            },
            {
              key: "bodyOverflow",
              value: function (t) {
                return r.call(this, t);
              },
            },
            {
              key: "scrollTo",
              value: function (t, e) {
                return function (t, e) {
                  var i;
                  !1 !== (i = "top" === t ? 0 : "bottom" === t ? Math.max(0, g - m) : "number" == typeof t ? t : !!t.offset && t.offset().top) && c.scrollTop() !== i
                    ? (h.to(c, 0.7, { scrollTo: { y: i, autoKill: !0 }, ease: Power2.easeOut, autoKill: !0, overwrite: 5 }), e && h.delayedCall(0.7, e))
                    : "function" == typeof e && e();
                }.call(this, t, e);
              },
            },
            {
              key: "initNavbar",
              value: function () {
                return o.call(this);
              },
            },
            {
              key: "initNavbarFullscreen",
              value: function () {
                return function () {
                  var t = this,
                    e = l(".nk-navbar-full"),
                    i = (l(".nk-navbar-top"), e.find(".nk-nav-social")),
                    n = void 0;
                  (t.fullscreenNavbarIsOpened = function () {
                    return n;
                  }),
                    (t.toggleFullscreenNavbar = function () {
                      t[n ? "closeFullscreenNavbar" : "openFullscreenNavbar"]();
                    }),
                    (t.openFullscreenNavbar = function () {
                      if (!n && e.length) {
                        n = 1;
                        var r = e.find(".nk-nav .nk-drop-item.open > .dropdown:not(.closed) > li > a");
                        r.length || (r = e.find(".nk-nav > li > a")),
                          l(".nk-navbar-full-toggle").addClass("active"),
                          h.set(r, { opacity: 0, force3D: !0 }),
                          h.set(i, { opacity: 0, force3D: !0 }),
                          h.to(e, 0.5, {
                            opacity: 1,
                            force3D: !0,
                            display: "block",
                            onComplete: function () {
                              t.initPluginNano(e);
                            },
                          }),
                          h.staggerTo(r, 0.3, { y: 0, opacity: 1, delay: 0.2 }, 0.05),
                          h.to(i, 0.3, { y: 0, opacity: 1, delay: 0.4 }),
                          e.addClass("open"),
                          t.bodyOverflow(1),
                          c.trigger("nk-open-full-navbar", [e]);
                      }
                    }),
                    (t.closeFullscreenNavbar = function (i) {
                      n &&
                        e.length &&
                        ((n = 0),
                        l(".nk-navbar-full-toggle").removeClass("active"),
                        h.to(e, 0.5, {
                          opacity: 0,
                          force3D: !0,
                          display: "none",
                          onComplete: function () {
                            i || t.bodyOverflow(0);
                          },
                        }),
                        e.removeClass("open"),
                        c.trigger("nk-close-full-navbar", [e]));
                    }),
                    f.on("click", ".nk-navbar-full-toggle", function (e) {
                      t.toggleFullscreenNavbar(), e.preventDefault();
                    });
                }.call(this);
              },
            },
            {
              key: "initNavbarDropEffect1",
              value: function () {
                return function () {
                  function t(t) {
                    var e = t.parents(".nk-navbar:eq(0)"),
                      n = e.find(".nk-nav"),
                      r = e.find(".nk-drop-item.open > .dropdown:not(.closed)"),
                      o = r.parents(".dropdown.closed:eq(0)"),
                      s = t.parents(".nano:eq(0)"),
                      a = s.children(".nano-content"),
                      u = t.parents(".nk-nav-row:eq(0)"),
                      c = u.siblings(".nk-nav-row");
                    if (r.length) {
                      var f = r.innerHeight();
                      u.hasClass("nk-nav-row-center") &&
                        (function () {
                          r.css({ top: 0 });
                          var t = s.innerHeight(),
                            e = t,
                            i = s.offset().top,
                            n = r.offset().top;
                          c.length &&
                            c.each(function () {
                              e -= l(this).innerHeight();
                            });
                          var h = 0;
                          f < e ? ((h = i - n - a.scrollTop()), (h += (t - f) / 2)) : (h = -parseFloat(o.css("top")) || 0), r.css({ top: h });
                        })(),
                        n.css("height", f),
                        i.initPluginNano(e),
                        h.to(a, 0.3, { scrollTo: { y: 0 }, delay: 0.2 });
                    } else n.css("height", "");
                    i.initPluginNano(e);
                  }
                  function e(t, e) {
                    var i = e.find("> .dropdown > li > a"),
                      n = e.parent().find("> li > a");
                    if (t) e.addClass("open").parent().addClass("closed");
                    else {
                      e.removeClass("open").parent().removeClass("closed");
                      var r = i;
                      (i = n), (n = r);
                    }
                    h.set(i, { x: t ? "15%" : "-15%", opacity: 0, display: "block" }, 0.1),
                      h.staggerTo(i, 0.2, { x: "0%", opacity: 1, delay: 0.1 }, 0.03),
                      h.staggerTo(n, 0.2, { x: t ? "-15%" : "15%", opacity: 0 }, 0.03, function () {
                        n.css("display", "none");
                      });
                  }
                  var i = this,
                    n = l(".nk-navbar-full");
                  n.find(".dropdown").prepend('<li class="bropdown-back"><a href="#">Back</a></li>'),
                    n.on("click", ".nk-drop-item > a", function (i) {
                      e(!0, l(this).parent()), t(l(this)), i.preventDefault();
                    }),
                    n.on("click", ".bropdown-back > a", function (i) {
                      e(!1, l(this).parent().parent().parent()), t(l(this)), i.preventDefault();
                    });
                }.call(this);
              },
            },
            {
              key: "initAnchors",
              value: function () {
                return s.call(this);
              },
            },
            {
              key: "initPluginNano",
              value: function (t) {
                return function (t) {
                  void 0 !== l.fn.nanoScroller && (t || f).find(".nano").nanoScroller();
                }.call(this, t);
              },
            },
            {
              key: "initPluginJarallax",
              value: function (t) {
                return function () {
                  void 0 !== l.fn.jarallax && l(".bg-image-parallax").jarallax({ speed: 0.8 });
                }.call(this, t);
              },
            },
            {
              key: "initPluginFlickity",
              value: function (t) {
                return function () {
                  function t(t) {
                    t.on("dragStart", function () {
                      l(this).find(".flickity-viewport").addClass("is-dragging");
                    }),
                      t.on("dragEnd", function () {
                        l(this).find(".flickity-viewport").removeClass("is-dragging");
                      });
                  }
                  if (void 0 !== window.Flickity) {
                    var e = l(".nk-carousel");
                    e.length &&
                      (e.children(".nk-carousel-inner").each(function () {
                        l(this).flickity({ pageDots: "true" === l(this).parent().attr("data-dots") || !1, autoPlay: parseFloat(l(this).parent().attr("data-autoplay")) || !1, prevNextButtons: !1, wrapAround: !0, cellAlign: "center" });
                      }),
                      t(e.children(".nk-carousel-inner"))),
                      l(".nk-carousel-2 > .nk-carousel-inner").each(function () {
                        l(this).flickity({
                          pageDots: "true" === l(this).parent().attr("data-dots") || !1,
                          autoPlay: parseFloat(l(this).parent().attr("data-autoplay")) || !1,
                          prevNextButtons: !1,
                          wrapAround: !0,
                          imagesLoaded: !0,
                          cellAlign: "center",
                        }),
                          t(l(this));
                      });
                  }
                }.call(this, t);
              },
            },
            {
              key: "initPluginIsotope",
              value: function (t) {
                return function () {
                  if (void 0 !== window.Isotope) {
                    var t = this;
                    l(".nk-isotope").each(function () {
                      var e = l(this),
                        i = e.isotope({ itemSelector: ".nk-isotope-item" });
                      i.imagesLoaded().progress(function () {
                        i.isotope("layout");
                      }),
                        i.on("arrangeComplete", function () {
                          t.debounceResize();
                        });
                      var n = [];
                      (n = e.parent().hasClass("nk-portfolio-list") ? e.parent().prev(".nk-isotope-filter") : e.prev(".nk-isotope-filter")).length &&
                        n.on("click", "[data-filter]", function (t) {
                          t.preventDefault();
                          var e = l(this).attr("data-filter");
                          l(this).addClass("active").siblings().removeClass("active"), i.isotope({ filter: "*" === e ? "" : "[data-filter*=" + e + "]" });
                        });
                    }),
                      d.on("click", '[href="#nk-toggle-filter"]:not(.busy)', function (t) {
                        var i = l(this).parent(".nk-pagination"),
                          n = i.next(".nk-isotope-filter"),
                          r = n.hasClass("nk-isotope-filter-active");
                        if (i.length && n.length)
                          if ((t.preventDefault(), t.stopPropagation(), i.addClass("busy"), r))
                            h.staggerTo(n.children(), 0.2, { y: -10, opacity: 0 }, 0.04, function () {
                              h.to(n, 0.4, {
                                height: 0,
                                marginBottom: 0,
                                marginTop: 0,
                                force3D: !0,
                                display: "none",
                                onComplete: function () {
                                  i.removeClass("nk-isotope-filter-active"), n.removeClass("nk-isotope-filter-active"), i.removeClass("busy"), e();
                                },
                              });
                            });
                          else {
                            n.css("height", "auto");
                            var o = n.height();
                            n.css("height", 0),
                              h.set(n.children(), { y: -10, opacity: 0 }),
                              h.to(n, 0.4, {
                                height: o,
                                marginBottom: 30,
                                marginTop: -23,
                                force3D: !0,
                                display: "block",
                                onComplete: function () {
                                  h.staggerTo(n.children(), 0.2, { y: 0, opacity: 1 }, 0.04, function () {
                                    i.addClass("nk-isotope-filter-active"), n.addClass("nk-isotope-filter-active"), i.removeClass("busy"), e();
                                  });
                                },
                              });
                          }
                      });
                  }
                }.call(this, t);
              },
            },
          ]),
          t
        );
      })();
    (window.Snow = new k()), window.Snow.init();
  })(),
  $(".panel-collapse").on("show.bs.collapse", function () {
    $(this).siblings(".panel-heading").addClass("active");
  }),
  $(".panel-collapse").on("hide.bs.collapse", function () {
    $(this).siblings(".panel-heading").removeClass("active");
  }),
  $(document).ready(function () {
    $(".overlay a").on("click", function (t) {
      if ("" !== this.hash) {
        t.preventDefault();
        var e = this.hash;
        $("html, body").animate({ scrollTop: $(e).offset().top }, 800, function () {
          window.location.hash = e;
        });
      }
    });
  });
document.addEventListener("adobe_dc_view_sdk.ready", function () {
  var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view" });
  adobeDCView.previewFile({
    content: { location: { url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf" } },
    metaData: { fileName: "Bodea Brochure.pdf" },
  });
});


var one = document.getElementById("nk-pagination-prev");
var two = document.getElementById("nk-pagination-next");
  style = window.getComputedStyle(one);
  wdt = style.getPropertyValue('width');
  two.style.width = wdt;

  jQuery(function($){
   var windowWidth = $(window).width();
   var windowHeight = $(window).height();
 
   $(window).resize(function() {
     if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
       location.reload();
       return;
     }
   });
 });
