const http = require('http');

const routerMaps = {};
const routerAvailableMethods = { GET: true, POST: true };

const ALARM_MEESAGES = {
  EXIST_ROUTER: '해당 path, method에 등록된 라우터가 이미 존재합니다.',
  INVALID_ROUTER_METHOD: '허용되지 않은 method 입니다.',
};

function existRouter(url, method) {
  return routerMaps[url] && routerMaps[url][method];
}


async function serverListener(req, res) {
  try {
    const { method, url } = req;
    console.log('Receive Request!', method, url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, Cache-Control, Pragma, Expires');

    if (method === 'OPTIONS') { return res.end(); }

    const methodRouter = existRouter(url, method);

    if (methodRouter) {
      // console.log('methodrouter:', methodRouter);
      const routerResult = await methodRouter(req, res);
      res.end(routerResult);
    } else {
      req.pipe(res);
    }
  } catch(e) {
    res.statusCode = 500;
    res.end('500 Internal Server Error');
  }
}

const httpServer = http.createServer(serverListener);
httpServer.timeout = 5000;

const DEFAULT_PORT = 8000;
const HttpServer = {
  on(port) {
    Object.freeze(routerMaps); // freeze all router.

    const listenPort = port || DEFAULT_PORT;
    httpServer.listen(listenPort, () => {
      console.log(`Server is Running on ${listenPort}`);
      // console.log('routerMaps:', routerMaps);
    });
  },
  onRouter(path, method, router) {
    if (!routerAvailableMethods[method]) throw new Error(`(path: ${path}, method: ${method}) ${ALARM_MEESAGES.INVALID_ROUTER_METHOD}`);
    if (!routerMaps[path]) routerMaps[path] = {};
    if (routerMaps[path][method]) throw new Error(`(path: ${path}, method: ${method}) ${ALARM_MEESAGES.EXIST_ROUTER}`);
    routerMaps[path][method] = router;
  },
};

module.exports = {
  HttpServer,
};
