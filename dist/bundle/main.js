!(function(e) {
  function t(t) {
    for (var r, a, i = t[0], s = t[1], c = t[2], m = 0, p = []; m < i.length; m++)
      (a = i[m]), Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]), (o[a] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (u && u(t); p.length; ) p.shift()();
    return l.push.apply(l, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, i = 1; i < n.length; i++) {
        var s = n[i];
        0 !== o[s] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {0: 0},
    l = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = {i: t, l: !1, exports: {}});
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n});
    }),
    (a.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}),
        Object.defineProperty(e, "__esModule", {value: !0});
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((a.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: e}), 2 & t && "string" != typeof e))
        for (var r in e)
          a.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r),
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "/dist/bundle/");
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    s = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var u = s;
  l.push([22, 1]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  1: function(e, t) {
    e.exports = MaterialUI;
  },
  21: function(e, t) {
    e.exports = ReactDOM;
  },
  219: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n(20),
      l = n(3),
      a = n(1),
      i = n(9);
    function s() {
      return (s =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function c(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
      }
      return o;
    }
    var u = r.forwardRef(function(e, t) {
        var n = e.to,
          o = c(e, ["to"]);
        return r.createElement(i.b, s({innerRef: t, to: n}, o));
      }),
      m = Object(a.makeStyles)(
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
      p = function() {
        var e = m();
        return r.createElement(
          a.AppBar,
          {className: e.appbar, position: "fixed"},
          r.createElement(
            a.Toolbar,
            {className: e.toolbar},
            r.createElement(
              a.Link,
              {className: e.title, component: u, to: "/"},
              r.createElement(a.Hidden, {smDown: !0}, "TrejGun`s blog"),
            ),
            r.createElement("div", {className: e.grow}),
          ),
        );
      },
      d = Object(a.makeStyles)(
        function(e) {
          return {
            root: {overflowY: "auto", overflowX: "hidden", display: "flex", minHeight: "100vh", position: "relative"},
            container: e.mixins.gutters({paddingTop: e.spacing(10)}),
          };
        },
        {name: "Layout"},
      ),
      f = function(e) {
        var t = e.children,
          n = d();
        return r.createElement(
          "div",
          {className: n.root},
          r.createElement(p, null),
          r.createElement(a.Container, {className: n.container, maxWidth: "md"}, t),
        );
      },
      h = function() {
        return r.createElement(
          "div",
          null,
          r.createElement("h2", null, "Hello! I`m TrejGun and this is my blog :)"),
          r.createElement(
            "ul",
            null,
            r.createElement(
              "li",
              null,
              r.createElement(
                a.Link,
                {component: u, to: "/articles/tutorial-custom-transport-for-nestjs"},
                "Tutorial: Custom Transport for Nest.js",
              ),
            ),
          ),
        );
      };
    function v() {
      return (v =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var b = r.forwardRef(function(e, t) {
        var n = v({}, e);
        return r.createElement(a.Link, v({innerRef: t, rel: "noopener noreferrer nofollow", target: "_blank"}, n));
      }),
      g = n(223),
      y = n(222);
    function E() {
      return (E =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function j(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
      }
      return o;
    }
    var O,
      w = function(e) {
        var t = e.children,
          n = j(e, ["children"]);
        return r.createElement(g.a, E({style: y.a}, n), t);
      },
      k = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(a.Typography, {component: "h2", variant: "h4"}, "Tutorial: Custom Transport for Nest.js"),
          r.createElement(
            "p",
            null,
            "I really like ",
            r.createElement(b, {href: "https://nestjs.com/"}, "Nest.js"),
            ", but the lack of documentation sometimes drives me crazy so I decided to create it myself. Once I already had blog about coding, so I decided to make second attempt, and post here some tutorials and gotchas",
          ),
          r.createElement(
            "p",
            null,
            "Yesterday I tried to implement ",
            r.createElement("em", null, "CustomTransportStrategy"),
            " for Nest.js and after googling for half an hour I realize there are only examples for RabbitMQ like this ",
            r.createElement(b, {href: "https://github.com/AlariCode/nestjs-rmq"}, "nestjs-rmq"),
            ", which is already included in ",
            r.createElement("em", null, "@nestjs/microservice"),
            " package. But there were nothing simple where one can see a logic related only to nestjs itself untill now",
          ),
          r.createElement(
            "p",
            null,
            "For this example I will implement simple ",
            r.createElement("em", null, "EventEmitter"),
            " using setInterval, which emits timestamp each second, but in real life it could be anything like TCP calls, queue in any kind of SQL/NOSQL database, AWS SQS or Google pub/sub",
          ),
          r.createElement(
            w,
            {language: "typescript"},
            'import {EventEmitter} from "events";\n\n\nexport class Ticker extends EventEmitter {\n  private intervalId: NodeJS.Timeout | null = null;\n\n  start(): void {\n    this.intervalId = setInterval(() => {\n      this.emit("data", Date.now());\n    }, 1000);\n  }\n\n  stop(): void {\n    if (this.intervalId) {\n      clearInterval(this.intervalId);\n    }\n  }\n}\n',
          ),
          r.createElement(
            "p",
            null,
            "Now a listener should be attached to listen to this ",
            r.createElement("em", null, "Ticker"),
            " events (timestamp) and pass them to corresponding handler. For this I have to implement only two methods ",
            r.createElement("em", null, "listen"),
            " and ",
            r.createElement("em", null, "close"),
            ".",
          ),
          r.createElement(
            w,
            {language: "typescript"},
            'import {Server, CustomTransportStrategy, MessageHandler} from "@nestjs/microservices";\nimport {Ticker} from "./ticker";\n\n\nexport class TickerServer extends Server implements CustomTransportStrategy {\n  private ticker: Ticker;\n\n  public listen(callback: () => void): void {\n    this.ticker = new Ticker();\n    this.ticker.start();\n    this.ticker.on("data", (e: number) => {\n      this.listener(e);\n    });\n    callback();\n  }\n\n  public async listener(e: number): Promise<void> {\n    const handler: MessageHandler | undefined = this.messageHandlers.get("TICK");\n    if (!handler) {\n      return;\n    }\n    const result = await handler(e);\n    console.log(result);\n  }\n\n  public close(): void {\n    this.ticker.stop();\n  }\n}\n',
          ),
          r.createElement(
            "p",
            null,
            "But the docs are silent about how to path event to controller. Event listeners of all controllers are stored in",
            r.createElement("em", null, "messageHandlers"),
            " property. It also looks like it makes no sense to path object as event pattern because it is just stringified.",
          ),
          r.createElement(
            "p",
            null,
            "Finally here is a controller to handle ",
            r.createElement("em", null, "TICK"),
            " message, it is dead simple. The value returned from controller can be used to remove message from queue.",
          ),
          r.createElement(
            w,
            {language: "typescript"},
            'import {Controller} from "@nestjs/common";\nimport {MessagePattern} from "@nestjs/microservices";\n\n@Controller()\nexport class TickerController {\n  @MessagePattern("TICK")\n  public ticker(data: number): Promise<number> {\n    return Promise.resolve(data);\n  }\n}\n',
          ),
          r.createElement("p", null, "This is all for today, good luck with your code!"),
        );
      },
      T = function() {
        return r.createElement(
          l.d,
          null,
          r.createElement(l.b, {path: "/articles/tutorial-custom-transport-for-nestjs", component: k, exact: !0}),
          r.createElement(l.a, {to: "/error/page-not-found"}),
        );
      },
      x = Object(o.hot)(function() {
        return r.createElement(
          f,
          null,
          r.createElement(
            l.d,
            null,
            r.createElement(l.b, {path: "/", component: h, exact: !0}),
            r.createElement(l.b, {path: "/articles", component: T}),
          ),
        );
      }),
      S = n(21);
    (O = x),
      S.hydrate(
        r.createElement(
          a.MuiThemeProvider,
          {theme: Object(a.createMuiTheme)({typography: {fontSize: 16}})},
          r.createElement(a.CssBaseline, null),
          r.createElement(i.a, null, r.createElement(O, null)),
        ),
        document.getElementById("app"),
      );
  },
  22: function(e, t, n) {
    e.exports = n(219);
  },
});
//# sourceMappingURL=main.js.map
