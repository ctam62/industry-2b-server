const router = require("express").Router();
const serviceController = require("../controllers/service-controller")

router
    .route('/api/services')
    .post(serviceController.createService)
    .get(serviceController.getAllServices);

router
    .route('/api/services/:id')
    .get(serviceController.getServiceById)
    .put(serviceController.updateService)
    .delete(serviceController.deleteService);

module.exports = router;