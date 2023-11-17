const router = require('express').Router();
const controller = require('../controllers/titles-controller');

router
    .route('/')
    .get(controller.getAllTitles)
    .post(controller.createTitle);

router
    .route('/:id')
    .get(controller.getTitleById)
    .delete(controller.deleteTitle)
    .put(controller.updateTitle);

router
    .route('/:numTitles')    
    .get(controller.getTopPopular);

module.exports = router;