!(function(e) {
  function t(t) {
    for (var r, l, i = t[0], c = t[1], u = t[2], p = 0, s = []; p < i.length; p++)
      (l = i[p]), Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), (o[l] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (f && f(t); s.length; ) s.shift()();
    return a.push.apply(a, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== o[c] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {0: 0},
    a = [];
  function l(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = {i: t, l: !1, exports: {}});
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = r),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n});
    }),
    (l.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}),
        Object.defineProperty(e, "__esModule", {value: !0});
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((l.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: e}), 2 & t && "string" != typeof e))
        for (var r in e)
          l.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r),
          );
      return n;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = "/bundle/");
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var u = 0; u < i.length; u++) t(i[u]);
  var f = c;
  a.push([18, 1]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  17: function(e, t) {
    e.exports = ReactDOM;
  },
  18: function(e, t, n) {
    e.exports = n(24);
  },
  2: function(e, t) {
    e.exports = MaterialUI;
  },
  24: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n(16),
      a = n(5),
      l = n(2),
      i = n(9);
    function c() {
      return (c =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function u(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
      }
      return o;
    }
    var f,
      p = r.forwardRef(function(e, t) {
        var n = e.to,
          o = u(e, ["to"]);
        return r.createElement(i.b, c({innerRef: t, to: n}, o));
      }),
      s = Object(l.makeStyles)(
        function(e) {
          return {
            appbar: {backgroundColor: "#3C75E6"},
            toolbar: {minHeight: 64},
            grow: {flexGrow: 1},
            title: {
              color: e.palette.common.white,
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 36,
              "&:hover": {textDecoration: "none"},
            },
            logo: {display: "inline-block", verticalAlign: "middle", height: 40, width: 62, marginRight: e.spacing(1)},
          };
        },
        {name: "Header"},
      ),
      m = function() {
        var e = s();
        return r.createElement(
          l.AppBar,
          {className: e.appbar, position: "fixed"},
          r.createElement(
            l.Toolbar,
            {className: e.toolbar},
            r.createElement(
              l.Link,
              {className: e.title, component: p, to: "/"},
              r.createElement(l.Hidden, {smDown: !0}, "TrejGun`s blog"),
            ),
            r.createElement("div", {className: e.grow}),
          ),
        );
      },
      d = Object(l.makeStyles)(
        function(e) {
          return {
            root: {overflowY: "auto", overflowX: "hidden", display: "flex", minHeight: "100vh", position: "relative"},
            container: e.mixins.gutters({paddingTop: e.spacing(8)}),
          };
        },
        {name: "Layout"},
      ),
      b = function(e) {
        var t = e.children,
          n = d();
        return r.createElement(
          "div",
          {className: n.root},
          r.createElement(m, null),
          r.createElement(l.Container, {className: n.container, maxWidth: "md"}, t),
        );
      },
      h = function() {
        return r.createElement("div", null, "I`m TrejGun and this is my blog!");
      },
      v = Object(o.hot)(function() {
        return r.createElement(
          b,
          null,
          r.createElement(a.c, null, r.createElement(a.a, {path: "/", component: h, exact: !0})),
        );
      }),
      g = n(17);
    (f = v),
      g.hydrate(
        r.createElement(
          l.MuiThemeProvider,
          {theme: Object(l.createMuiTheme)()},
          r.createElement(l.CssBaseline, null),
          r.createElement(i.a, null, r.createElement(f, null)),
        ),
        document.getElementById("app"),
      );
  },
});
//# sourceMappingURL=main.js.map
