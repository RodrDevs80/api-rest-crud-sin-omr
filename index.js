import express from "express";
import cors from "cors";
import estudiantesRoutes from "./routes/estudiantesRoutes.js";
import profesoresRoutes from "./routes/profesoresRoutes.js";
import cursosRoutes from "./routes/cursosRoutes.js"

const app = express();
app.use(express.json());
app.use(cors());
//aquí uno las rutas con el index
app.use('/cursos', cursosRoutes);
app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`La app esta corriendo en http://localhost:${port}`)
})