
# API Carrito de Compras

## Descripción
API REST desarrollada con Node.js, Express, TypeScript y PostgreSQL para administrar productos y carritos de compras.

## Tecnologías utilizadas
- Node.js
- Express
- TypeScript
- PostgreSQL
- Postman

## Funcionalidades

### Productos
- Consultar productos.
- Crear productos.
- Actualizar productos.
- Eliminar productos.

### Carritos
- Crear carritos.
- Consultar carritos.
- Agregar productos al carrito.
- Consultar productos del carrito.
- Actualizar cantidades.
- Eliminar productos del carrito.

## Instalación

1. Clonar el repositorio.
2. Instalar dependencias:

npm install

3. Crear el archivo .env con las siguientes variables:


```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=carrito_compras
```

4. Crear la base de datos en PostgreSQL y ejecutar el archivo database.sql.

## Ejecutar el proyecto

Modo desarrollo:
```bash
npm run dev
```

Compilar:

```bash
npm run build
```

Iniciar:

```bash
npm start
```

## Puerto

http://localhost:3000