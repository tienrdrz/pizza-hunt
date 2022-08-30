const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//add prefix of /pizzas to routes createed in pizzaroutes
router.use('/pizzas', pizzaRoutes)

module.exports = router;