const Compra = require('../models/Compra');

// Obtener todas las compras
const getCompras = async (req, res) => {
  try {
    const compras = await Compra.find();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener compras', error });
  }
};

// Obtener una compra por ID
const getCompraById = async (req, res) => {
  try {
    const compra = await Compra.findById(req.params.id);
    if (!compra) return res.status(404).json({ mensaje: 'Compra no encontrada' });
    res.json(compra);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener compra', error });
  }
};

// Crear una compra
const createCompra = async (req, res) => {
  try {
    const compra = new Compra(req.body);
    await compra.save();
    res.status(201).json(compra);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear compra', error });
  }
};

// Actualizar una compra
const updateCompra = async (req, res) => {
  try {
    const compra = await Compra.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!compra) return res.status(404).json({ mensaje: 'Compra no encontrada' });
    res.json(compra);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar compra', error });
  }
};

// Eliminar una compra
const deleteCompra = async (req, res) => {
  try {
    const compra = await Compra.findByIdAndDelete(req.params.id);
    if (!compra) return res.status(404).json({ mensaje: 'Compra no encontrada' });
    res.json({ mensaje: 'Compra eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar compra', error });
  }
};

module.exports = { getCompras, getCompraById, createCompra, updateCompra, deleteCompra };