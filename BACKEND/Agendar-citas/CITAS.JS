const express = require('express');
const router = express.Router();
const db = require('../db');
const { verificarToken } = require('../middlewares/auth');

// CREAR
router.post('/citas', verificarToken, async (req, res) => {
    const { cliente, telefono, servicio, barbero, fecha, hora } = req.body;

    await db.query(
        `INSERT INTO Citas 
        (cliente, telefono, servicio, barbero, fecha, hora, estado)
        VALUES (?, ?, ?, ?, ?, ?, 'Activa')`,
        [cliente, telefono, servicio, barbero, fecha, hora]
    );

    res.json({ success: true });
});

router.get('/citas', verificarToken, async (req, res) => {
    const [rows] = await db.query("SELECT * FROM Citas");
    res.json(rows);
});

module.exports = router;
