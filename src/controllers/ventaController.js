const Venta = require('../models/Venta');

// Obtener todas las ventas
const getVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener ventas', error });
  }
};

// Obtener una venta por ID
const getVentaById = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    if (!venta) return res.status(404).json({ mensaje: 'Venta no encontrada' });
    res.json(venta);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener venta', error });
  }
};

// Crear una venta
const createVenta = async (req, res) => {
  try {
    const venta = new Venta(req.body);
    await venta.save();
    res.status(201).json(venta);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear venta', error });
  }
};

// Actualizar una venta
const updateVenta = async (req, res) => {
  try {
    const venta = await Venta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!venta) return res.status(404).json({ mensaje: 'Venta no encontrada' });
    res.json(venta);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar venta', error });
  }
};

// Eliminar una venta
const deleteVenta = async (req, res) => {
  try {
    const venta = await Venta.findByIdAndDelete(req.params.id);
    if (!venta) return res.status(404).json({ mensaje: 'Venta no encontrada' });
    res.json({ mensaje: 'Venta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar venta', error });
  }
};

module.exports = { getVentas, getVentaById, createVenta, updateVenta, deleteVenta };