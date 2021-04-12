const router = require('express').Router();
const hotelCtrl = require('../controllers/hotelCtrl');

router.route('/hotel')
    .get(hotelCtrl.getHotel)
    .post(hotelCtrl.createHotel)

router.route('/hotel/:id')
    .delete(hotelCtrl.deleteHotel)
    .put(hotelCtrl.updateHotel)

module.exports = router