
exports.setRoutes = app => {
  app.use('/', require('./routers/answer-generator-api'));
  app.use('/', require('./routers/compare-number-api'));
  app.use('/', require('./routers/game-api'));
};

