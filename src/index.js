const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch((err) => console.error('❌ Error al conectar:', err));

// Rutas
app.use('/api/proveedores', require('./routes/proveedorRoutes'));
app.use('/api/clientes', require('./routes/clienteRoutes'));
app.use('/api/productos', require('./routes/productoRoutes'));
app.use('/api/compras', require('./routes/compraRoutes'));
app.use('/api/ventas', require('./routes/ventaRoutes'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: '🚀 API POS funcionando correctamente' });
});

// Puerto

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});