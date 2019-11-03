!(function(e) {
  function t(t) {
    for (var r, s, l = t[0], i = t[1], c = t[2], m = 0, p = []; m < l.length; m++)
      (s = l[m]), Object.prototype.hasOwnProperty.call(o, s) && o[s] && p.push(o[s][0]), (o[s] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (u && u(t); p.length; ) p.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, l = 1; l < n.length; l++) {
        var i = n[l];
        0 !== o[i] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = {0: 0},
    a = [];
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = {i: t, l: !1, exports: {}});
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = r),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n});
    }),
    (s.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}),
        Object.defineProperty(e, "__esModule", {value: !0});
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((s.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: e}), 2 & t && "string" != typeof e))
        for (var r in e)
          s.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r),
          );
      return n;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/dist/bundle/");
  var l = (window.webpackJsonp = window.webpackJsonp || []),
    i = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var c = 0; c < l.length; c++) t(l[c]);
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
      s = n(1),
      l = n(9);
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
        return r.createElement(l.b, i({innerRef: t, to: n}, o));
      }),
      m = Object(s.makeStyles)(
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
          s.AppBar,
          {className: e.appbar, position: "fixed"},
          r.createElement(
            s.Toolbar,
            {className: e.toolbar},
            r.createElement(
              s.Link,
              {className: e.title, component: u, to: "/"},
              r.createElement(s.Hidden, {smDown: !0}, "TrejGun`s blog"),
            ),
            r.createElement("div", {className: e.grow}),
          ),
        );
      },
      d = Object(s.makeStyles)(
        function(e) {
          return {
            root: {overflowY: "auto", overflowX: "hidden", display: "flex", minHeight: "100vh", position: "relative"},
            container: e.mixins.gutters({paddingTop: e.spacing(10)}),
          };
        },
        {name: "Layout"},
      ),
      h = function(e) {
        var t = e.children,
          n = d();
        return r.createElement(
          "div",
          {className: n.root},
          r.createElement(p, null),
          r.createElement(s.Container, {className: n.container, maxWidth: "md"}, t),
        );
      },
      f = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Hello! I`m TrejGun and this is my blog :)"),
          r.createElement(
            "ul",
            null,
            r.createElement(
              "li",
              null,
              r.createElement(
                s.Link,
                {component: u, to: "/articles/jwt-based-authorization-for-nestjs"},
                "JWT based authorization for Nest.js",
              ),
            ),
            r.createElement(
              "li",
              null,
              r.createElement(
                s.Link,
                {component: u, to: "/articles/ethereum-server-for-nestjs"},
                "Ethereum Server for Nest.js",
              ),
            ),
            r.createElement(
              "li",
              null,
              r.createElement(
                s.Link,
                {component: u, to: "/articles/session-based-authorization-for-nestjs"},
                "Session based authorization for Nest.js",
              ),
            ),
            r.createElement(
              "li",
              null,
              r.createElement(
                s.Link,
                {component: u, to: "/articles/custom-transport-for-nestjs"},
                "Custom Transport for Nest.js",
              ),
            ),
            r.createElement(
              "li",
              null,
              r.createElement(s.Link, {component: u, to: "/articles/introduction"}, "Introduction"),
            ),
          ),
        );
      },
      b = Object(s.makeStyles)(
        function() {
          return {date: {float: "right", color: "#c0c0c0"}};
        },
        {name: "MyDate"},
      ),
      v = function(e) {
        var t = e.date,
          n = b();
        return r.createElement("div", {className: n.date}, new Date(t).toISOString().split("T")[0]);
      };
    function g() {
      return (g =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var E = r.forwardRef(function(e, t) {
        var n = g({}, e);
        return r.createElement(s.Link, g({innerRef: t, rel: "noopener noreferrer nofollow", target: "_blank"}, n));
      }),
      y = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-11-03T15:25:20.324Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Introduction"),
          r.createElement(
            "p",
            null,
            "I used to code js for pretty long time, and was quite tired of doing same stuff over and over again. At some point I even thought server side js have faced some stagnation. An then someone, some where mentioned",
            r.createElement(E, {href: "https://nestjs.com/"}, "Nest.js"),
            ", one month later I tried it and felt in love. Unfortunately it looks like the documentation is not as great as framework itself, so I decided to to add my 2 cents to popularization on this awesome framework. Once I already had blog about coding and other related stuff, so I decided to make second attempt, and post here some tutorials and gotchas",
          ),
        );
      },
      k = n(223),
      w = n(222);
    function j() {
      return (j =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function T(e, t) {
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
      S = function(e) {
        var t = e.children,
          n = T(e, ["children"]);
        return r.createElement(k.a, j({style: w.a}, n), t);
      },
      x = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-10-25T17:42:20.324Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Custom Transport for Nest.js"),
          r.createElement(
            "p",
            null,
            "Yesterday I tried to implement ",
            r.createElement("em", null, "CustomTransportStrategy"),
            " for Nest.js and after googling for half an hour I realize there are only examples for RabbitMQ like this",
            " ",
            r.createElement(E, {href: "https://github.com/AlariCode/nestjs-rmq"}, "nestjs-rmq"),
            ", which is already included in ",
            r.createElement("em", null, "@nestjs/microservice"),
            " package. But there were nothing simple where one can see a logic related only to Nest.js itself until now",
          ),
          r.createElement(
            "p",
            null,
            "For this example I will implement simple ",
            r.createElement("em", null, "EventEmitter"),
            " using setInterval, which emits timestamp each second, but in real life it could be anything like TCP calls, queue in any kind of SQL/NOSQL database, ZeroMQ, AWS SQS or Google pub/sub",
          ),
          r.createElement(
            S,
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
            S,
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
            S,
            {language: "typescript"},
            'import {Controller} from "@nestjs/common";\nimport {MessagePattern} from "@nestjs/microservices";\n\n@Controller()\nexport class TickerController {\n  @MessagePattern("TICK")\n  public ticker(data: number): Promise<number> {\n    return Promise.resolve(data);\n  }\n}\n',
          ),
          r.createElement("p", null, "This is all for today, good luck with your code!"),
        );
      },
      I = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-10-26T14:08:19.626Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Session based authorization for Nest.js"),
          r.createElement(
            "p",
            null,
            "I wrote this code some time ago and then made an example repo out of it because was going to write an article and publish it somewhere on medium or habr, but changed my plans and started this blog, where I don`t need to have positive karma or any other kind of rating to publish articles.",
          ),
          r.createElement(s.Typography, {component: "h3", variant: "h5"}, "Problem"),
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
            r.createElement(E, {href: "https://docs.nestjs.com/guards"}, "Guards"),
            ",",
            " ",
            r.createElement(E, {href: "https://docs.nestjs.com/techniques/authentication"}, "Authentication"),
            ";",
            " ",
            r.createElement(
              E,
              {href: "https://dev.to/nestjs/authentication-and-sessions-for-mvc-apps-with-nestjs-55a4"},
              "one good article with code samples",
            ),
            " ",
            "from @johnbiundo about local authorization; several closed issues and a few outdated blog posts. All these links did not give me a whole picture of how authorizations should be build.",
          ),
          r.createElement(s.Typography, {component: "h3", variant: "h5"}, "Solution"),
          r.createElement(
            "p",
            null,
            "This example is a fully functional",
            " ",
            r.createElement(
              E,
              {href: "https://github.com/TrejGun/session-based-authorization-for-nestjs"},
              "boilerplate",
            ),
            " ",
            "with all features mentioned above. It also includes some very basic tests, typeorm, migrations and utils. I tried to make it simple, so you can adjust it for your own needs",
          ),
        );
      },
      P = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-10-27T10:11:34.152Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Ethereum Server for Nest.js"),
          r.createElement(
            "p",
            null,
            "This is the second article about custom transports for Nest.js, you can find first one",
            " ",
            r.createElement(s.Link, {component: u, to: "/articles/custom-transport-for-nestjs"}, "here"),
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
            S,
            {language: "typescript"},
            'import {EMPTY, Observable} from "rxjs";\nimport {CustomTransportStrategy, MessageHandler, Server} from "@nestjs/microservices";\nimport Web3 from "web3";\nimport {Block, BlockHeader} from "web3/eth/types";\n\n\nexport class EthereumServer extends Server implements CustomTransportStrategy {\n  private subscription: any;\n\n  public listen(callback: () => void): void {\n    this.listenToBlocks();\n    callback();\n  }\n\n  private listenToBlocks(): void {\n    const web3: Web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.SOCKET_ADDRESS));\n    this.subscription = web3.eth.subscribe("newBlockHeaders", (error: Error, blockHeader: BlockHeader) => {\n      if (error) {\n        console.error(error);\n        return;\n      }\n\n      web3.eth.getBlock(blockHeader.number).then(async (block: Block) => {\n        return this.call("BLOCK", block).then(observable => {\n          observable.subscribe(console.log);\n        });\n      });\n    });\n  }\n\n  private call(pattern: string, data: Block): Promise<Observable<any>> {\n    const handler: MessageHandler | undefined = this.messageHandlers.get(pattern);\n\n    if (!handler) {\n      return Promise.resolve(EMPTY);\n    }\n\n    return handler(data);\n  }\n\n  public close(): void {\n    this.subscription.unsubscribe();\n  }\n}\n',
          ),
          r.createElement(
            "p",
            null,
            "Block has a list of transaction`s ids. This mean in the real life you probably want to get full information about those transactions and process it somehow, but in this example controller just returns a list of transactions back. There is no actual need to return information about processed transactions because fully processed Block is not going to be removed from blockchain, but it is useful for logging",
          ),
          r.createElement(
            S,
            {language: "typescript"},
            'import {Observable} from "rxjs";\nimport {Controller} from "@nestjs/common";\nimport {MessagePattern} from "@nestjs/microservices";\nimport {Block} from "web3/eth/types";\n\nimport {EthereumService} from "./ethereum.service";\n\n@Controller()\nexport class EthereumController {\n  constructor(private readonly ethereumService: EthereumService) {}\n\n  @MessagePattern("BLOCK")\n  public block(block: Block): Observable<object> {\n    return from(block.transactions);\n  }\n}\n',
          ),
        );
      },
      C = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-11-03T14:18:19.626Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "JWT based authorization for Nest.js"),
          r.createElement(
            "p",
            null,
            "In my previous article I discussed",
            r.createElement(
              s.Link,
              {component: u, to: "/articles/session-based-authorization-for-nestjs"},
              "session based authorization",
            ),
            "Today I`m going to publish solution which uses JWT. The main difference between these approaches is: Sessions are good for client-to-server communication, where you can store session id in cookies and get user specific data based on this id. JSON Web Token is good for server-to-server communication where there are no cookies and state could be retrieved from request itself",
          ),
          r.createElement(
            "p",
            null,
            "I tried to make this code as much as possible similar to previous one so you can compare it and even use both approaches at the same time. For this I also added facebook support and redis session storage. As always you can find code in my",
            r.createElement(E, {href: "https://github.com/TrejGun/jwt-based-authorization-for-nestjs"}, "github repo"),
          ),
        );
      },
      N = function() {
        return r.createElement(
          a.d,
          null,
          r.createElement(a.b, {component: y, path: "/articles/introduction", exact: !0}),
          r.createElement(a.b, {component: x, path: "/articles/custom-transport-for-nestjs", exact: !0}),
          r.createElement(a.b, {component: I, path: "/articles/session-based-authorization-for-nestjs", exact: !0}),
          r.createElement(a.b, {component: P, path: "/articles/ethereum-server-for-nestjs", exact: !0}),
          r.createElement(a.b, {component: C, path: "/articles/jwt-based-authorization-for-nestjs", exact: !0}),
          r.createElement(a.a, {to: "/page-not-found"}),
        );
      },
      B = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Page Not Found"),
        );
      },
      M = Object(o.hot)(function() {
        return r.createElement(
          h,
          null,
          r.createElement(
            a.d,
            null,
            r.createElement(a.b, {path: "/", component: f, exact: !0}),
            r.createElement(a.b, {path: "/articles", component: N}),
            r.createElement(a.b, {path: "/page-not-found", component: B}),
            r.createElement(a.a, {to: "/page-not-found"}),
          ),
        );
      }),
      z = n(21);
    (O = M),
      z.hydrate(
        r.createElement(
          s.MuiThemeProvider,
          {theme: Object(s.createMuiTheme)({typography: {fontSize: 16}})},
          r.createElement(s.CssBaseline, null),
          r.createElement(l.a, null, r.createElement(O, null)),
        ),
        document.getElementById("app"),
      );
  },
  22: function(e, t, n) {
    e.exports = n(219);
  },
});
//# sourceMappingURL=main.js.map
