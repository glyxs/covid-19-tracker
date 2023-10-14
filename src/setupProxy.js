const createProxyMiddleware = require("http-proxy-middleware");

const INTERNAL_API = process.env.REACT_PROXY_API;

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: INTERNAL_API,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
  );
};
