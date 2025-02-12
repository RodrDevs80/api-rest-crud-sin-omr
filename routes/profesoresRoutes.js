import express from 'express';
import profesoresControllers from '../controllers/profesoresControllers.js';
const router = express.Router();

router.route('/')
    .get(profesoresControllers.consultar)
    .post(profesoresControllers.ingresar)
router.route('/:id')
    .get(profesoresControllers.consultarEnDetalle)
    .put(profesoresControllers.actualizar)
    .delete(profesoresControllers.borrar)

export default router;