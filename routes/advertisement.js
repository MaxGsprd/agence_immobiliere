const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const advertisement_controller = require('../controllers/advertisement.controller');

router.get('/', advertisement_controller.list_advertisement);
router.get('/:id',advertisement_controller.detail_advertisement);
router.post('/', auth(), advertisement_controller.add_advertisement);
router.put('/:id', auth(),advertisement_controller.edit_advertisement);
router.delete('/:id', auth(),advertisement_controller.delete_advertisement);

module.exports = router;