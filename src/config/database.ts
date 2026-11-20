import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

console.log('¿Se leyó la contraseña?:', Boolean(process.env.DB_PASSWORD));

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default pool;
