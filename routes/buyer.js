const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const buyer_controller = require('../controllers/buyer.controller');

router.get('/', auth(), buyer_controller.list_buyer);
router.get('/:id', auth(), buyer_controller.detail_buyer);
router.post('/', auth(), buyer_controller.add_buyer);
router.put('/:id', auth(), buyer_controller.edit_buyer);
router.delete('/:id', auth(), buyer_controller.delete_buyer);

module.exports = router;