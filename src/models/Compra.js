const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
  proveedor_id: String,
  fecha: Date,
  total: Number,
  productos_servicios: [
    {
      producto_servicio_id: String,
      nombre: String,
      precio: Number
    }
  ]
});

module.exports = mongoose.model('Compra', compraSchema);