const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const realtor_controller = require('../controllers/realtor.controller');

router.get('/', auth(), realtor_controller.realtor_list);
router.post('/register', realtor_controller.realtor_register);
router.post('/login', realtor_controller.realtor_login);
// router.get('/:id',realtor_controller.detail_realtor);
// router.post('/',realtor_controller.add_realtor);
// router.put('/:id',realtor_controller.edit_realtor);
// router.delete('/:id',realtor_controller.delete_realtor);

module.exports = router;