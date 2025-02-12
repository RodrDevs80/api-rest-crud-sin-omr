import express from 'express';
import estudiantesControllers from '../controllers/estudiantesControllers.js';
const router = express.Router();
router.route('/')
    .get(estudiantesControllers.consultar)
    .post(estudiantesControllers.ingresar)
router.route('/:id')
    .get(estudiantesControllers.consultarDetalle)
    .put(estudiantesControllers.actualizar)
    .delete(estudiantesControllers.borrar)

export default router;