const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');
const { verificarToken, soloDueño } = require('../middlewares/auth');

router.post('/empleados', verificarToken, soloDueño, async (req, res) => {
    const { 
        nombre, 
        paterno, 
        materno, 
        telefono, 
        horario, 
        estado, 
        especialidad, 
        usuario, 
        contrasena 
    } = req.body;

    await db.query(
    `INSERT INTO Empleados 
    (nombre, paterno, materno, telefono, horario, estado, especialidad, usuario, contrasena) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [nombre, paterno, materno, telefono, horario, estado, especialidad, usuario, contrasena]
);

    res.json({ success: true });
});

// LISTAR
router.get('/empleados', verificarToken, async (req, res) => {
    const [rows] = await db.query("SELECT * FROM Empleados");
    res.json(rows);
});

// ELIMINAR
router.delete('/empleados/:id', verificarToken, soloDueño, async (req, res) => {
    await db.query("DELETE FROM Empleados WHERE idEmpleados=?", [req.params.id]);
    res.json({ success: true });
});

// 🔵 OBTENER SOLO BARBEROS
router.get('/barberos', verificarToken, async (req, res) => {
    const [rows] = await db.query(
        "SELECT idEmpleados, nombre FROM Empleados WHERE LOWER(especialidad)='barbero'"
    );
    res.json(rows);
});

module.exports = router;
