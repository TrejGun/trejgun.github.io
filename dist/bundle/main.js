!(function(e) {
  function t(t) {
    for (var r, l, s = t[0], i = t[1], c = t[2], m = 0, p = []; m < s.length; m++)
      (l = s[m]), Object.prototype.hasOwnProperty.call(o, l) && o[l] && p.push(o[l][0]), (o[l] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (u && u(t); p.length; ) p.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
        var i = n[s];
        0 !== o[i] && (r = !1);
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
    (l.p = "/dist/bundle/");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    i = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var u = i;
  a.push([22, 1]), n();
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
      a = n(2),
      l = n(1),
      s = n(9);
    function i() {
      return (i =
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
    var u = r.forwardRef(function(e, t) {
        var n = e.to,
          o = c(e, ["to"]);
        return r.createElement(s.b, i({innerRef: t, to: n}, o));
      }),
      m = Object(l.makeStyles)(
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
          l.AppBar,
          {className: e.appbar, position: "fixed"},
          r.createElement(
            l.Toolbar,
            {className: e.toolbar},
            r.createElement(
              l.Link,
              {className: e.title, component: u, to: "/"},
              r.createElement(l.Hidden, {smDown: !0}, "TrejGun`s blog"),
            ),
            r.createElement("div", {className: e.grow}),
          ),
        );
      },
      h = Object(l.makeStyles)(
        function(e) {
          return {
            root: {overflowY: "auto", overflowX: "hidden", display: "flex", minHeight: "100vh", position: "relative"},
            container: e.mixins.gutters({paddingTop: e.spacing(10)}),
          };
        },
        {name: "Layout"},
      ),
      d = function(e) {
        var t = e.children,
          n = h();
        return r.createElement(
          "div",
          {className: n.root},
          r.createElement(p, null),
          r.createElement(l.Container, {className: n.container, maxWidth: "md"}, t),
        );
      },
      f = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(l.Typography, {component: "h2", variant: "h4"}, "Hello! I`m TrejGun and this is my blog :)"),
          r.createElement(
            "ul",
            null,
            r.createElement(
              "li",
              null,
              r.createElement(
                l.Link,
                {component: u, to: "/articles/ethereum-server-for-nestjs"},
                "Ethereum Server for Nest.js",
              ),
            ),
            r.createElement(
              "li",
              null,
              r.createElement(l.Link, {component: u, to: "/articles/nestjs-authorization"}, "Authorization in Nest.js"),
            ),
            r.createElement(
              "li",
              null,
              r.createElement(
                l.Link,
                {component: u, to: "/articles/custom-transport-for-nestjs"},
                "Custom Transport for Nest.js",
              ),
            ),
          ),
        );
      };
    function b() {
      return (b =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var v = r.forwardRef(function(e, t) {
        var n = b({}, e);
        return r.createElement(l.Link, b({innerRef: t, rel: "noopener noreferrer nofollow", target: "_blank"}, n));
      }),
      g = Object(l.makeStyles)(
        function() {
          return {date: {float: "right", color: "#c0c0c0"}};
        },
        {name: "MyDate"},
      ),
      y = function(e) {
        var t = e.date,
          n = g();
        return r.createElement("div", {className: n.date}, new Date(t).toISOString().split("T")[0]);
      },
      E = n(223),
      k = n(222);
    function w() {
      return (w =
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
    var O,
      T = function(e) {
        var t = e.children,
          n = j(e, ["children"]);
        return r.createElement(E.a, w({style: k.a}, n), t);
      },
      S = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(y, {date: "2019-10-25T17:42:20.324Z"}),
          r.createElement(l.Typography, {component: "h2", variant: "h4"}, "Custom Transport for Nest.js"),
          r.createElement(
            "p",
            null,
            "I really like ",
            r.createElement(v, {href: "https://nestjs.com/"}, "Nest.js"),
            ", but the lack of documentation sometimes drives me crazy so I decided to create it myself. Once I already had blog about coding, so I decided to make second attempt, and post here some tutorials and gotchas",
          ),
          r.createElement(
            "p",
            null,
            "Yesterday I tried to implement ",
            r.createElement("em", null, "CustomTransportStrategy"),
            " for Nest.js and after googling for half an hour I realize there are only examples for RabbitMQ like this",
            " ",
            r.createElement(v, {href: "https://github.com/AlariCode/nestjs-rmq"}, "nestjs-rmq"),
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
            T,
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
            T,
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
            T,
            {language: "typescript"},
            'import {Controller} from "@nestjs/common";\nimport {MessagePattern} from "@nestjs/microservices";\n\n@Controller()\nexport class TickerController {\n  @MessagePattern("TICK")\n  public ticker(data: number): Promise<number> {\n    return Promise.resolve(data);\n  }\n}\n',
          ),
          r.createElement("p", null, "This is all for today, good luck with your code!"),
        );
      },
      x = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(y, {date: "2019-10-26T14:08:19.626Z"}),
          r.createElement(l.Typography, {component: "h2", variant: "h4"}, "Session based authorization for Nest.js"),
          r.createElement(
            "p",
            null,
            "I wrote this code some time ago and then made an example repo out of it because was going to write an article and publish it somewhere on medium or habr, but changed my plans and started this blog, where I don`t need to have positive karma or any other kind rating to publish articles.",
          ),
          r.createElement(l.Typography, {component: "h3", variant: "h5"}, "Problem"),
          r.createElement(
            "p",
            null,
            "Me and as appeared a lot of other users want to have an application which includes such features",
          ),
          r.createElement(
            "ul",
            null,
            r.createElement("li", null, "Authorization with login/password"),
            r.createElement("li", null, "Authorization with social networks"),
            r.createElement("li", null, "Private/Public areas (controllers/routes)"),
            r.createElement("li", null, "Role based ACL"),
            r.createElement("li", null, "Persisted sessions"),
          ),
          r.createElement(
            "p",
            null,
            "But unfortunately there were no good docs covering this part of framework. I mean there are, couple of pages in official documentation ",
            r.createElement(v, {href: "https://docs.nestjs.com/guards"}, "Guards"),
            ",",
            " ",
            r.createElement(v, {href: "https://docs.nestjs.com/techniques/authentication"}, "Authentication"),
            ";",
            " ",
            r.createElement(
              v,
              {href: "https://dev.to/nestjs/authentication-and-sessions-for-mvc-apps-with-nestjs-55a4"},
              "one good article",
            ),
            " ",
            "from @johnbiundo about local authorization; several closed issues and a few outdated articles. And all these links does not give you whole picture of how authorizations should be build.",
          ),
          r.createElement(l.Typography, {component: "h3", variant: "h5"}, "Solution"),
          r.createElement(
            "p",
            null,
            "This example is a fully functional",
            " ",
            r.createElement(v, {href: "https://github.com/TrejGun/nestjs-authorization"}, "boilerplate"),
            " ",
            "with all features mentioned above. It also includes some very basic tests, typeorm, migrations and utils. I also tried to make it simple, so you you have adjust it for your own needs",
          ),
        );
      },
      P = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(y, {date: "2019-10-27T10:11:34.152Z"}),
          r.createElement(l.Typography, {component: "h2", variant: "h4"}, "Ethereum Server for Nest.js"),
          r.createElement(
            "p",
            null,
            "This is the second article about custom transports for Nest.js, you can find first one",
            " ",
            r.createElement(l.Link, {component: u, to: "/articles/custom-transport-for-nestjs"}, "here"),
          ),
          r.createElement(
            "p",
            null,
            "Nets.js microservice can subscribe to events from any source, why not use a blockchain. In this example I will use Ethereum, but all other blockchains integration can be done easily using this pattern.",
          ),
          r.createElement(
            "p",
            null,
            "Basic building block of any blockchain is a Block (deduction, man!) that is what server will listen to",
          ),
          r.createElement(
            T,
            {language: "typescript"},
            'import {EMPTY, Observable} from "rxjs";\nimport {CustomTransportStrategy, MessageHandler, Server} from "@nestjs/microservices";\nimport Web3 from "web3";\nimport {Block, BlockHeader} from "web3/eth/types";\n\n\nexport class EthereumServer extends Server implements CustomTransportStrategy {\n  private subscription: any;\n\n  public listen(callback: () => void): void {\n    this.listenToBlocks();\n    callback();\n  }\n\n  private listenToBlocks(): void {\n    const web3: Web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.SOCKET_ADDRESS));\n    this.subscription = web3.eth.subscribe("newBlockHeaders", (error: Error, blockHeader: BlockHeader) => {\n      if (error) {\n        console.error(error);\n        return;\n      }\n\n      web3.eth.getBlock(blockHeader.number).then(async (block: Block) => {\n        return this.call("BLOCK", block).then(observable => {\n          observable.subscribe(console.log);\n        });\n      });\n    });\n  }\n\n  private call(pattern: string, data: Block): Promise<Observable<any>> {\n    const handler: MessageHandler | undefined = this.messageHandlers.get(pattern);\n\n    if (!handler) {\n      return Promise.resolve(EMPTY);\n    }\n\n    return handler(data);\n  }\n\n  public close(): void {\n    this.subscription.unsubscribe();\n  }\n}\n',
          ),
          r.createElement(
            "p",
            null,
            "Block has a list of transaction`s ids. This mean in the real life you probably want to get full information about those transactions and process it somehow, but in this example controller just returns a list of transactions back. There is no actual need to return information about processed transactions because fully processed Block is not going to be removed from blockchain, but it is useful for logging",
          ),
          r.createElement(
            T,
            {language: "typescript"},
            'import {Observable} from "rxjs";\nimport {Controller} from "@nestjs/common";\nimport {MessagePattern} from "@nestjs/microservices";\nimport {Block} from "web3/eth/types";\n\nimport {EthereumService} from "./ethereum.service";\n\n@Controller()\nexport class EthereumController {\n  constructor(private readonly ethereumService: EthereumService) {}\n\n  @MessagePattern("BLOCK")\n  public block(block: Block): Observable<object> {\n    return from(block.transactions);\n  }\n}\n',
          ),
        );
      },
      I = function() {
        return r.createElement(
          a.d,
          null,
          r.createElement(a.b, {component: S, path: "/articles/custom-transport-for-nestjs", exact: !0}),
          r.createElement(a.b, {component: x, path: "/articles/nestjs-authorization", exact: !0}),
          r.createElement(a.b, {component: P, path: "/articles/ethereum-server-for-nestjs", exact: !0}),
          r.createElement(a.a, {to: "/page-not-found"}),
        );
      },
      C = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(l.Typography, {component: "h2", variant: "h4"}, "Page Not Found"),
        );
      },
      B = Object(o.hot)(function() {
        return r.createElement(
          d,
          null,
          r.createElement(
            a.d,
            null,
            r.createElement(a.b, {path: "/", component: f, exact: !0}),
            r.createElement(a.b, {path: "/articles", component: I}),
            r.createElement(a.b, {path: "/page-not-found", component: C}),
            r.createElement(a.a, {to: "/page-not-found"}),
          ),
        );
      }),
      M = n(21);
    (O = B),
      M.hydrate(
        r.createElement(
          l.MuiThemeProvider,
          {theme: Object(l.createMuiTheme)({typography: {fontSize: 16}})},
          r.createElement(l.CssBaseline, null),
          r.createElement(s.a, null, r.createElement(O, null)),
        ),
        document.getElementById("app"),
      );
  },
  22: function(e, t, n) {
    e.exports = n(219);
  },
});
//# sourceMappingURL=main.js.map
