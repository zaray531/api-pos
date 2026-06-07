const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  correo: String,
  telefono: String,
  direccion: String,
  compras: [
    {
      compra_id: String,
      fecha: Date,
      total: Number,
      productos_servicios: [
        {
          producto_servicio_id: String,
          nombre: String,
          precio: Number
        }
      ]
    }
  ]
});

module.exports = mongoose.model('Proveedor', proveedorSchema);