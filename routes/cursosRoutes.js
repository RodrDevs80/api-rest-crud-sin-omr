import express from 'express';
import cursosControllers from '../controllers/cursosController.js';
const router = express.Router();
router.route('/registrarEstudiantes')
    .post(cursosControllers.asociarEstudiantes)
router.route('/')
    .get(cursosControllers.consultar)
    .post(cursosControllers.ingresar)

router.route('/:id')
    .get(cursosControllers.consultarDetalle)
    .put(cursosControllers.actualizar)
    .delete(cursosControllers.borrar)

export default router;