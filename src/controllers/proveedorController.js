const Proveedor = require('../models/Proveedor');

// Obtener todos los proveedores
const getProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener proveedores', error });
  }
};

// Obtener un proveedor por ID
const getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (!proveedor) return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener proveedor', error });
  }
};

// Crear un proveedor
const createProveedor = async (req, res) => {
  try {
    const proveedor = new Proveedor(req.body);
    await proveedor.save();
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear proveedor', error });
  }
};

// Actualizar un proveedor
const updateProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!proveedor) return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar proveedor', error });
  }
};

// Eliminar un proveedor
const deleteProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndDelete(req.params.id);
    if (!proveedor) return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    res.json({ mensaje: 'Proveedor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar proveedor', error });
  }
};

module.exports = { getProveedores, getProveedorById, createProveedor, updateProveedor, deleteProveedor };