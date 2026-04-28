const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 RUTA PRINCIPAL
app.get('/', (req, res) => {
    res.send('🔥 API Barbería funcionando');
});

// 🔥 IMPORTAR TODAS LAS RUTAS
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/empleados'));
app.use('/api', require('./routes/clientes'));
app.use('/api', require('./routes/citas'));
app.use('/api', require('./routes/pagos'));
app.use('/api', require('./routes/promociones')); // 👈 ESTA AQUÍ

// 🚀 INICIAR SERVIDOR (SIEMPRE AL FINAL)
app.listen(3000, () => {
    console.log("🔥 API PRO corriendo en http://localhost:3000");
});
