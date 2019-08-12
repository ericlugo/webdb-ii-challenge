const express = require('express');
const {
  addCar,
  getCar,
  getCars,
  updateCar,
  deleteCar,
} = require('../controllers/carsController.js');

const router = express.Router();

router.post('/', addCar);
router.get('/', getCars);
router.get('/:id', getCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

module.exports = router;
