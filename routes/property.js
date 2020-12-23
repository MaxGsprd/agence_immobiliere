const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const property_controller = require('../controllers/property.controller');

router.get('/', auth(), property_controller.list_property);
router.get('/:id',auth(), property_controller.detail_property);
router.post('/', auth(), property_controller.add_property);
router.put('/:id', auth(), property_controller.edit_property);
router.delete('/:id', auth(), property_controller.delete_property);

module.exports = router;