const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

function verificarToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).json({ error: "Sin token" });

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(401).json({ error: "Token inválido" });

        req.user = decoded;
        next();
    });
}

function soloDueño(req, res, next) {
    if (req.user.rol !== "Dueño") {
        return res.status(403).json({ error: "Acceso denegado" });
    }
    next();
}

module.exports = { verificarToken, soloDueño };
