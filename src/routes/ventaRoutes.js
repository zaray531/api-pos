const express = require('express');
const router = express.Router();
const { getVentas, getVentaById, createVenta, updateVenta, deleteVenta } = require('../controllers/ventaController');

router.get('/', getVentas);
router.get('/:id', getVentaById);
router.post('/', createVenta);
router.put('/:id', updateVenta);
router.delete('/:id', deleteVenta);

module.exports = router;