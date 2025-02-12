# API REST CRUD sin ORM

Este proyecto es una API REST CRUD desarrollada sin el uso de un ORM, permitiendo una gestión directa de la base de datos mediante consultas SQL manuales.

## Características

- CRUD completo (Crear, Leer, Actualizar, Eliminar).
- Uso de Express.js como framework para el servidor.
- Conexión a base de datos mediante un cliente SQL.
- Rutas estructuradas para operaciones sobre los datos.
- Manejo de errores básico.

## Requisitos

Asegúrate de tener instalados los siguientes elementos:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MySQL](https://www.mysql.com/) u otro gestor de bases de datos compatible
- Un cliente API como [Postman](https://www.postman.com/) o [cURL](https://curl.se/) para realizar pruebas

## Instalación

1. Clona este repositorio:
   ```sh
   git clone https://github.com/RodrDevs80/api-rest-crud-sin-omr.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd api-rest-crud-sin-omr
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Configura la conexión a la base de datos en el archivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=nombre_de_la_base_de_datos
   ```

## Uso

Para iniciar el servidor, ejecuta:

```sh
npm start
```

Por defecto, la API estará disponible en `http://localhost:3000`.

### Rutas disponibles

#### Obtener todos los registros

```http
GET /api/items
```

#### Obtener un registro por ID

```http
GET /api/items/:id
```

#### Crear un nuevo registro

```http
POST /api/items
Content-Type: application/json
{
  "campo1": "valor1",
  "campo2": "valor2"
}
```

#### Actualizar un registro

```http
PUT /api/items/:id
Content-Type: application/json
{
  "campo1": "nuevo_valor"
}
```

#### Eliminar un registro

```http
DELETE /api/items/:id
```

## Contribución

Si deseas contribuir, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

### Autor

Desarrollado por [RodrDevs80](https://github.com/RodrDevs80).
