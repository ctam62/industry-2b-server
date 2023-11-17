const router = require('express').Router();
const controller = require('../controllers/titles-controller');

router
    .route('/')
    .get(controller.getAllTitles)
    .post(controller.addTitle);

router
    .route('/:id')
    .get(controller.getSingleTitle)
    .delete(controller.deleteTitle)
    .put(controller.updateTitle);

module.exports = router;