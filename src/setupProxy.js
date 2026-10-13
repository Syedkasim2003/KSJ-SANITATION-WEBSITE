const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/enterprises',
    createProxyMiddleware({
      target: 'https://ksjenterprises.netlify.app',
      changeOrigin: true,
    })
  );
};
