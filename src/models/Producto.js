const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  tipo: String
});

module.exports = mongoose.model('Producto', productoSchema);