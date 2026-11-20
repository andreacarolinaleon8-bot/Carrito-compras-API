
import express from 'express';
import routes from './routes/index.routes';
import pool from './config/database';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/conexion', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT NOW()');

        res.json({
            mensaje: 'Conexión con PostgreSQL exitosa',
            fecha: resultado.rows[0]
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            mensaje: 'Error al conectar con PostgreSQL',
            detalle: error instanceof Error ? error.message : String(error)
        });
    }
});

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Carrito de Compras funcionando'
    });
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});