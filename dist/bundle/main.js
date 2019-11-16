!(function(e) {
  function t(t) {
    for (var r, s, i = t[0], l = t[1], c = t[2], m = 0, p = []; m < i.length; m++)
      (s = i[m]), Object.prototype.hasOwnProperty.call(o, s) && o[s] && p.push(o[s][0]), (o[s] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    for (u && u(t); p.length; ) p.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, i = 1; i < n.length; i++) {
        var l = n[i];
        0 !== o[l] && (r = !1);
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
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var c = 0; c < i.length; c++) t(i[c]);
  var u = l;
  a.push([45, 1]), n();
})({
  0: function(e, t) {
    e.exports = React;
  },
  1: function(e, t) {
    e.exports = MaterialUI;
  },
  20: function(e, t) {
    e.exports = ReactDOM;
  },
  273: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n(44),
      a = n(4),
      s = n(1),
      i = n(25);
    function l() {
      return (l =
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
        return r.createElement(i.b, l({innerRef: t, to: n}, o));
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
      h = Object(s.makeStyles)(
        function(e) {
          return {
            root: {overflowY: "auto", overflowX: "hidden", display: "flex", minHeight: "100vh", position: "relative"},
            container: e.mixins.gutters({paddingTop: e.spacing(10), "& p": {"& *": {paddingLeft: 5, paddingRight: 5}}}),
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
                {component: u, to: "/articles/how-to-convert-http-exception-to-rpc-exception"},
                "How to convert HttpException to RpcException",
              ),
            ),
            r.createElement(
              "li",
              null,
              r.createElement(
                s.Link,
                {component: u, to: "/articles/collecting-data-from-workers-in-nestjs"},
                "Collecting data from workers in Nest.js",
              ),
            ),
            r.createElement(
              "li",
              null,
              r.createElement(
                s.Link,
                {component: u, to: "/articles/nova-poshta-google-maps-widget"},
                "Nova Poshta Google Maps widget",
              ),
            ),
            r.createElement(
              "li",
              null,
              r.createElement(
                s.Link,
                {component: u, to: "/articles/graphql-based-authorization-for-nestjs"},
                "GraphQL based authorization for Nest.js",
              ),
            ),
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
              r.createElement(s.Link, {component: u, to: "/terms-and-conditions"}, "Terms and Conditions"),
            ),
            r.createElement("li", null, r.createElement(s.Link, {component: u, to: "/about"}, "About this site")),
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
    var g = r.forwardRef(function(e, t) {
        var n = b({}, e);
        return r.createElement(s.Link, b({innerRef: t, rel: "noopener noreferrer nofollow", target: "_blank"}, n));
      }),
      y = Object(s.makeStyles)(
        function() {
          return {date: {float: "right", color: "#c0c0c0"}};
        },
        {name: "MyDate"},
      ),
      v = function(e) {
        var t = e.date,
          n = y();
        return r.createElement("div", {className: n.date}, new Date(t).toISOString().split("T")[0]);
      },
      E = n(279),
      w = n(277);
    function k() {
      return (k =
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
    var T = function(e) {
        var t = e.children,
          n = j(e, ["children"]);
        return r.createElement(E.a, k({style: w.a}, n), t);
      },
      x = n(34),
      S = function(e) {
        var t = e.slug;
        return "ReactSnap" === navigator.userAgent
          ? null
          : r.createElement(
              x.FacebookProvider,
              {appId: "471903663420767"},
              r.createElement(x.Comments, {href: "https://trejgun.github.io/articles/".concat(t)}),
            );
      },
      O = function() {
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
            r.createElement(g, {href: "https://github.com/AlariCode/nestjs-rmq"}, "nestjs-rmq"),
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
          r.createElement(S, {slug: "custom-transport-for-nestjs"}),
        );
      },
      P = function() {
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
            r.createElement(g, {href: "https://docs.nestjs.com/guards"}, "Guards"),
            ",",
            r.createElement(g, {href: "https://docs.nestjs.com/techniques/authentication"}, "Authentication"),
            ";",
            r.createElement(
              g,
              {href: "https://dev.to/nestjs/authentication-and-sessions-for-mvc-apps-with-nestjs-55a4"},
              "one good article with code samples",
            ),
            "from @johnbiundo about local authorization; several closed issues and a few outdated blog posts. All these links did not give me a whole picture of how authorizations should be build.",
          ),
          r.createElement(s.Typography, {component: "h3", variant: "h5"}, "Solution"),
          r.createElement(
            "p",
            null,
            "This example is a fully functional",
            r.createElement(
              g,
              {href: "https://github.com/TrejGun/session-based-authorization-for-nestjs"},
              "boilerplate",
            ),
            "with all features mentioned above. It also includes some very basic tests, typeorm, migrations and utils. I tried to make it simple, so you can adjust it for your own needs",
          ),
          r.createElement(S, {slug: "session-based-authorization-for-nestjs"}),
        );
      },
      I = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-10-27T10:11:34.152Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Ethereum Server for Nest.js"),
          r.createElement(
            "p",
            null,
            "This is the second article about custom transports for Nest.js, you can find first one",
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
          r.createElement(S, {slug: "ethereum-server-for-nestjs"}),
        );
      },
      R = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-11-03T14:18:19.626Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "JWT based authorization for Nest.js"),
          r.createElement(
            "p",
            null,
            "In my previous article I showed hot to implement",
            r.createElement(
              s.Link,
              {component: u, to: "/articles/session-based-authorization-for-nestjs"},
              "session based authorization",
            ),
            "Today I`m going to publish solution which uses JWT. The main difference between these approaches is: Sessions are good for client-to-server communication, where you can store session id in cookies and get user specific data based on this id. JSON Web Token is good for server-to-server communication where there are no cookies and state could be retrieved from request itself",
          ),
          r.createElement("p", null, "This is how controller with authorization looks like"),
          r.createElement(
            T,
            {language: "typescript"},
            'import {Controller, Get} from "@nestjs/common";\n\nimport {UserEntity} from "./user.entity";\nimport {Roles, User} from "../common/decorators";\nimport {UserRole} from "./interfaces";\nimport {UserService} from "./user.service";\n\n\n@Controller("users")\nexport class UserController {\n  constructor(private readonly userService: UserService) {}\n\n  @Get("profile")\n  getGloballyProtectedProfile(@User() user: UserEntity): UserEntity {\n    return user;\n  }\n\n  @Get("/list")\n  @Roles(UserRole.Admin)\n  public findAll(): Promise<{list: UserEntity[]; count: number}> {\n    return this.userService.findAndCount().then(([list, count]) => ({list, count}));\n  }\n}\n',
          ),
          r.createElement("p", null, "And the bootstrap function is pretty simple too"),
          r.createElement(
            T,
            {language: "typescript"},
            'import passport from "passport";\nimport {NestFactory, Reflector} from "@nestjs/core";\n\nimport {ApplicationModule} from "./app.module";\nimport {JwtGuard, RolesGuard} from "./common/guards";\n\n\nasync function bootstrap(): Promise<void> {\n  const app = await NestFactory.create(ApplicationModule);\n\n  app.use(passport.initialize());\n\n  const reflector = app.get(Reflector);\n  app.useGlobalGuards(new JwtGuard(reflector));\n  app.useGlobalGuards(new RolesGuard(reflector));\n\n  await app.listen(3000);\n}\n\nbootstrap();\n',
          ),
          r.createElement(
            "p",
            null,
            "I tried to make this code as much as possible similar to previous one so you can compare it and even use both approaches at the same time. For this I also added facebook support and redis session storage.",
          ),
          r.createElement(
            "p",
            null,
            "As always you can find code in my",
            r.createElement(g, {href: "https://github.com/TrejGun/jwt-based-authorization-for-nestjs"}, "github repo"),
          ),
          r.createElement(S, {slug: "jwt-based-authorization-for-nestjs"}),
        );
      },
      C = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-11-03T14:56:19.626Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "GraphQL based authorization for Nest.js"),
          r.createElement(
            "p",
            null,
            "This is already third article in a row about authorization in Nest.js. It is still the same codebase but instead of @Controllers it uses @Resolvers, all other stuff is pretty straight forward.",
          ),
          r.createElement(
            T,
            {language: "typescript"},
            'import {Query, Resolver} from "@nestjs/graphql";\n\nimport {User, Roles} from "../common/decorators";\nimport {UserRole} from "./interfaces";\nimport {UserEntity} from "./user.entity";\nimport {UserService} from "./user.service";\nimport {UserListType} from "./types";\n\n\n@Resolver(() => UserEntity)\nexport class UserResolver {\n  constructor(private readonly userService: UserService) {}\n\n  @Query(_returns => UserEntity)\n  public profile(@User() user: UserEntity): UserEntity {\n    return user;\n  }\n\n  @Roles(UserRole.Admin)\n  @Query(_returns => UserListType)\n  public listUsers(): Promise<UserListType> {\n    return this.userService.findAndCount().then(([list, count]) => ({list, count}));\n  }\n\n}\n',
          ),
          r.createElement(
            "p",
            null,
            "User has to call GraphQL mutation using his email and password to obtain JWT accessToken and refreshToken.",
          ),
          r.createElement(
            T,
            {language: "graphql"},
            'mutation {\n  login(\n    email: "trejgun@gmail.com",\n    password: "My5up3r5tr0ngP@55w0rd"\n  ) {\n    accessToken\n    refreshToken\n    accessTokenExpiry\n    refreshTokenExpiry\n  }\n}\n',
          ),
          r.createElement(
            "p",
            null,
            "Then he has to put accessToken in Bearer authentication header which will be processed by passport.js and resolved back into user. This user would be available in all Queries/Mutations using @User decorator. See first code sample.",
          ),
          r.createElement(
            "p",
            null,
            "Decorators and Guards are implemented a little bit different for GraphQL but works in the same way so you would not even notice a difference in coding.",
          ),
          r.createElement(
            "p",
            null,
            "As always you can find code in my",
            r.createElement(
              g,
              {href: "https://github.com/TrejGun/graphql-based-authorization-for-nestjs"},
              "github repo",
            ),
          ),
          r.createElement(S, {slug: "graphql-based-authorization-for-nestjs"}),
        );
      },
      N = n(278),
      A = Object(s.makeStyles)(
        function() {
          return {
            map: {width: 600, height: 400, backgroundColor: "#c0c0c0", position: "relative"},
            spinner: {top: "50%", left: "50%", position: "absolute", marginTop: -20, marginLeft: -20},
            input: {width: 600, display: "block"},
          };
        },
        {name: "NovaPoshta"},
      ),
      M = function(e) {
        var t = e.setWarehouse,
          n = e.googleMapsApiKey,
          o = e.novaPoshtaApiKey,
          a = A();
        return n && o
          ? "ReactSnap" === navigator.userAgent
            ? null
            : r.createElement(
                N.a,
                {
                  onError: console.error.bind(console),
                  googleMapsApiKey: n,
                  novaPoshtaApiKey: o,
                  className: a.map,
                  onSelect: t,
                  getCoordinates: function(e, t) {
                    e({lat: 50.45466, lng: 30.5238}),
                      window.navigator.geolocation.getCurrentPosition(function(t) {
                        e({lat: t.coords.latitude, lng: t.coords.longitude});
                      }, t);
                  },
                  options: {zoomControlOptions: {position: "RIGHT_CENTER"}},
                },
                r.createElement(s.CircularProgress, {className: a.spinner}),
              )
          : null;
      };
    function U(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
          var n = [],
            r = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var s, i = e[Symbol.iterator]();
              !(r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              r || null == i.return || i.return();
            } finally {
              if (o) throw a;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        })()
      );
    }
    var G,
      z,
      L = function() {
        var e = A(),
          t = U(r.useState(null), 2),
          n = t[0],
          o = t[1],
          a = U(r.useState(""), 2),
          i = a[0],
          l = a[1],
          c = U(r.useState(""), 2),
          u = c[0],
          m = c[1];
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-11-10T13:20:19.556Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Nova Poshta Google Maps widget"),
          r.createElement(
            "p",
            null,
            "I`m working not only with Nest.js and server side JS in my practice, so today let me show you dead simple widget for selecting Nova Poshta warehouse on Google map, which obviously should have been written by Nova Poshta itself, but obviously had not been.",
          ),
          r.createElement("p", null, "You can play with example but have to enter your valid API keys."),
          r.createElement(s.Input, {
            className: e.input,
            placeholder: "Google Maps API key",
            onChange: function(e) {
              return l(e.target.value);
            },
          }),
          r.createElement(s.Input, {
            className: e.input,
            placeholder: "Nova Poshta API key",
            onChange: function(e) {
              return m(e.target.value);
            },
          }),
          r.createElement("br", null),
          r.createElement(M, {setWarehouse: o, googleMapsApiKey: i, novaPoshtaApiKey: u}),
          r.createElement("p", null, "Selected: ", n ? n.Description : "N/A"),
          r.createElement(
            "p",
            null,
            "This widget loads all warehouses of Nova Poshta which is about 13.5 Mb of data and renders about 5900 markers on the map. This is quite a lot and can cause significant performance degradation of you site, you were warned!",
          ),
          r.createElement(
            "p",
            null,
            "As always you can find code in my",
            r.createElement(g, {href: "https://github.com/TrejGun/trejgun-nova-poshta-google-maps"}, "github repo"),
          ),
          r.createElement(S, {slug: "nova-poshta-google-maps-widget"}),
        );
      },
      H = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-11-14T18:40:19.556Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Collecting data from workers in Nest.js"),
          r.createElement(
            "p",
            null,
            "In Nest.js request to microcervice worker returns an Observable object, but the request to database usually return promise. How to deal with situation when you have to combine result from several workers and each result can be an array with 0+ elements?",
          ),
          r.createElement(
            "p",
            null,
            "For this promise result should be converted to Observable and elements emitted one by one",
          ),
          r.createElement(
            T,
            {language: "typescript"},
            'import {FindConditions} from "typeorm";\nimport {Observable, from} from "rxjs";\nimport {mergeMap} from "rxjs/operators";\nimport {Controller} from "@nestjs/common";\nimport {MessagePattern, Payload} from "@nestjs/microservices";\n\nimport {WorkerService} from "./worker.service";\nimport {WorkerEntity} from "./worker.entity";\n\n\n@Controller()\nexport class WorkerController {\n  constructor(private readonly workerService: WorkerService) {}\n\n  @MessagePattern("GET_RESULT")\n  public getResult(@Payload() payload: FindConditions<WorkerEntity>): Observable<WorkerEntity> {\n    return from(this.workerService.getResult(payload)).pipe(mergeMap(e => e));\n  }\n}\n',
          ),
          r.createElement(
            T,
            {language: "typescript"},
            'import {FindConditions, Repository} from "typeorm";\nimport {Injectable, NotFoundException} from "@nestjs/common";\nimport {InjectRepository} from "@nestjs/typeorm";\n\nimport {WorkerEntity} from "./worker.entity";\n\n\n@Injectable()\nexport class WorkerService {\n  constructor(\n    @InjectRepository(WorkerEntity)\n    private readonly workerEntityRepository: Repository<WorkerEntity>,\n  ) {}\n\n  public getResult(where: FindConditions<WorkerEntity>): Promise<Array<WorkerEntity>> {\n    if (Math.random() < .01) {\n      throw new NotFoundException()\n    }\n    return this.workerEntityRepository.find(where);\n  }\n}\n',
          ),
          r.createElement(
            "p",
            null,
            "On the other side orchestrator will create (two) connections to such workers and receive stream of results from each of them. These streams has to be merged into one.Then combined stream drained and all elements returned to the frontend as an array",
          ),
          r.createElement(
            T,
            {language: "typescript"},
            'import {Args, Query, Resolver} from "@nestjs/graphql";\n\nimport {ResultType} from "./orchestrator.type";\nimport {OrchestratorService} from "./orchestrator.service";\n\n\n@Resolver()\nexport class OrchestratorResolver {\n  constructor(private readonly orchestratorService: OrchestratorService) {}\n\n  @Query(_returns => [ResultType])\n  async getOrchestrator(\n    @Args({name: "param1", type: () => String}) param1: string,\n    @Args({name: "param2", type: () => String}) param2: string,\n  ): Promise<Array<IResult>> {\n    return this.orchestratorService.getCombinedResult({param1, param2});\n  }\n}\n',
          ),
          r.createElement(
            T,
            {language: "typescript"},
            'import {EMPTY, merge} from "rxjs";\nimport {catchError, reduce, timeout} from "rxjs/operators";\nimport {Injectable} from "@nestjs/common";\nimport {Client, ClientProxy, Transport} from "@nestjs/microservices";\n\n\n@Injectable()\nexport class OrchestratorService {\n  @Client({\n    transport: Transport.RMQ,\n    options: {\n      urls: [process.env.RMQ_URL],\n      query: "first",\n    },\n  })\n  client1: ClientProxy;\n\n  @Client({\n    transport: Transport.RMQ,\n    options: {\n      urls: [process.env.RMQ_URL],\n      query: "second",\n    },\n  })\n  client2: ClientProxy;\n\n\n  public async getCombinedResult(params: any): Promise<Array<IResult>> {\n    const seed: Array<IResult> = [];\n    return merge(\n      ...[this.client1, this.client2].map(client =>\n        client.send<IResult | Error>("GET_BALANCE", params)\n          .pipe(timeout(1000), catchError(error => {\n            console.error(error);\n            return EMPTY;\n          })),\n      ),\n    )\n      .pipe(reduce((memo, result: IResult) => memo.concat(result), seed))\n      .toPromise();\n  }\n}\n',
          ),
          r.createElement(
            "p",
            null,
            "In comparison to promise based solution, this method is faster and more stable, because it allows you to end stream by timeout even if not all elements were received.",
          ),
          r.createElement(S, {slug: "collecting-data-from-workers-in-nestjs"}),
        );
      },
      W = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-11-16T14:31:19.556Z"}),
          r.createElement(
            s.Typography,
            {component: "h2", variant: "h4"},
            "How to convert HttpException to RpcException",
          ),
          r.createElement(
            "p",
            null,
            "It really easy to return erroneous http response in Nest.js application, you just have to throw",
            r.createElement("em", null, "HttpException"),
            " or one of its implementations like ",
            r.createElement("em", null, "UnauthorizedException"),
            ",",
            r.createElement("em", null, "NotFoundException"),
            " or ",
            r.createElement("em", null, "BadRequestException"),
            ". It is meaningful and you dont have to reinvent the wheel each time. But What about microservices? Potentially you can throw the same ",
            r.createElement("em", null, "Exception"),
            " from there too but on the other side you will receive",
            r.createElement("em", null, "Internal Server Error"),
            " Which is not meaningfull at all, so to use build in exceptions they has to be converted to ",
            r.createElement("em", null, "RpcException"),
            " first. To do this I wrote this simple filter.",
          ),
          r.createElement(
            T,
            {language: "typescript"},
            'import {Observable, throwError} from "rxjs";\nimport {Catch, RpcExceptionFilter, HttpException} from "@nestjs/common";\nimport {RpcException} from "@nestjs/microservices";\n\n\n@Catch(HttpException)\nexport class HttpToRpcExceptionConverter implements RpcExceptionFilter<HttpException> {\n  catch(exception: HttpException): Observable<any> {\n    return throwError(new RpcException(exception.message.error));\n  }\n}\n',
          ),
          r.createElement(S, {slug: "how-to-convert-http-exception-to-rpc-exception"}),
        );
      },
      B = function() {
        return r.createElement(
          a.d,
          null,
          r.createElement(a.b, {component: O, path: "/articles/custom-transport-for-nestjs", exact: !0}),
          r.createElement(a.b, {component: P, path: "/articles/session-based-authorization-for-nestjs", exact: !0}),
          r.createElement(a.b, {component: I, path: "/articles/ethereum-server-for-nestjs", exact: !0}),
          r.createElement(a.b, {component: R, path: "/articles/jwt-based-authorization-for-nestjs", exact: !0}),
          r.createElement(a.b, {component: C, path: "/articles/graphql-based-authorization-for-nestjs", exact: !0}),
          r.createElement(a.b, {component: L, path: "/articles/nova-poshta-google-maps-widget", exact: !0}),
          r.createElement(a.b, {component: H, path: "/articles/collecting-data-from-workers-in-nestjs", exact: !0}),
          r.createElement(a.b, {
            component: W,
            path: "/articles/how-to-convert-http-exception-to-rpc-exception",
            exact: !0,
          }),
          r.createElement(a.a, {to: "/page-not-found"}),
        );
      },
      q = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(v, {date: "2019-11-03T15:25:20.324Z"}),
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "About this site"),
          r.createElement(
            "p",
            null,
            "I used to code js for pretty long time, and was quite tired of doing same stuff over and over again. At some point I even thought server side js have faced some stagnation. An then someone, some where mentioned",
            r.createElement(g, {href: "https://nestjs.com/"}, "Nest.js"),
            ", one month later I tried it and felt in love. Unfortunately it looks like the documentation is not as great as framework itself, so I decided to add my 2 cents to popularization on this awesome framework. Once I already had blog about coding and other related stuff, so I decided to make second attempt, and post here some tutorials and gotchas.",
          ),
        );
      },
      Q = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Page Not Found"),
        );
      },
      F = function() {
        return r.createElement(
          "div",
          null,
          r.createElement(s.Typography, {component: "h2", variant: "h4"}, "Terms and conditions"),
          r.createElement(
            "p",
            null,
            "This is a static website with",
            r.createElement(g, {href: "https://github.com/TrejGun/trejgun.github.io"}, "open source code"),
            ". It is not using cookies and/or not collecting any personal data by itself. All articles and source code of this site are available for education purposes under MIT license",
          ),
          r.createElement(
            "p",
            null,
            "Site also uses facebook`s comments, so facebook will track you, collect your data and use it for advertising purposes. This page exists only to fulfill facebook`s requirements.",
          ),
        );
      },
      _ = Object(o.hot)(function() {
        return r.createElement(
          d,
          null,
          r.createElement(
            a.d,
            null,
            r.createElement(a.b, {path: "/", component: f, exact: !0}),
            r.createElement(a.b, {path: "/articles", component: B}),
            r.createElement(a.b, {path: "/about", component: q}),
            r.createElement(a.b, {path: "/terms-and-conditions", component: F}),
            r.createElement(a.b, {path: "/page-not-found", component: Q}),
            r.createElement(a.a, {to: "/page-not-found"}),
          ),
        );
      }),
      K = n(20);
    (G = _),
      (z = document.getElementById("app")) &&
        K[z.hasChildNodes() ? "hydrate" : "render"](
          r.createElement(
            s.MuiThemeProvider,
            {theme: Object(s.createMuiTheme)({typography: {fontSize: 16}})},
            r.createElement(s.CssBaseline, null),
            r.createElement(i.a, null, r.createElement(G, null)),
          ),
          z,
        );
  },
  45: function(e, t, n) {
    e.exports = n(273);
  },
});
//# sourceMappingURL=main.js.map
