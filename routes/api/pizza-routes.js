const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');

// GET and POST requests
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

    //set up all requests that need id
    router.route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

    module.exports = router;