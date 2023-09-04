const daily_learning_route = require('./src/routes/daily_learning.route');


const loadRoutes = (app) => {
    app.use("/v1/daily_learning", daily_learning_route);
}

module.exports = { loadRoutes };