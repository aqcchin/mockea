const express = require('express');
const router = express.Router()
const controller = require('./controller.js')

router.route('/product')
  .get(controller.getProduct)
  .post(controller.postProduct)
  .put(controller.updateProduct)
  .delete(controller.deleteProduct)


router.route('/designer')
  .get(controller.getDesigner)
  .post(controller.postDesigner)
  .put(controller.updateDesigner)
  .delete(controller.deleteDesigner)

module.exports = router;