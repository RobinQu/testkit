# Testkit

Testing toolkit and micro frameworks

## Componets

### Web


#### testkit.web.createHttpServer([secured], [handler])

Create a http(s) server. If `handler` is not given, it will respond to any requests with  a simple string of `http` or `https` depends if it's secured or not.

#### testkit.web.createWebsocketServer(secured)

Create a websocket server.

#### testkit.web.createServerGroup(type, num, [secured])

Create a group of servers

* `type` is one of `ws` or `http`
* `num` is the total number of server to be created

#### testkit.web.listen(servers, startPort, [callback])

* `servers` is an array of http(s) or websocket servers
* `startPort` is the port that the first server in the array will listen on; the second server will listen on the port of `startPort` plus one, and so on.

#### testkit.web.close(servers, [callback])

* `servers` is an array of servers to be closed

#### testkit.web.attack(url, num, [callback])

Concurrently initiated requests against an URL.

* `url` is the target URL
* `num` is the total number of requests to be created
* `callback` is fired everytime a request is finished and response is got. As it uses `mikeal/request` under the hood, see the docs of [request](https://github.com/mikeal/request) to get more information about the callback

## License

MIT