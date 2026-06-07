const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  cliente_id: String,
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

module.exports = mongoose.model('Venta', ventaSchema);