import db from "../database/conexion.js";

class CursosController {
  constructor() {

  }
  consultar(req, res) {
    try {
      db.query(`SELECT * FROM cursos`, [], (err, data) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).json(data);
      })
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  consultarDetalle(req, res) {
    try {
      const id = Number(req.params.id);
      db.query(`SELECT * FROM cursos WHERE id=?`, [id], (err, data) => {
        if (err) {
          res.status(400).send(err.message);
        }
        else if (data.length === 0) {
          res.status(404).json({ msg: `No se encontró el ID ${id}` });
        } else {
          res.status(200).json(data);
        }

      })

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  ingresar(req, res) {
    try {
      const { nombre, descripcion, profesor_id } = req.body
      db.query(`INSERT INTO cursos (nombre,descripcion,profesor_id) VALUES(?,?,?)`, [nombre, descripcion, profesor_id], (err, data) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(201).json({ msg: `Un nuevo curso se creo con éxito con el ID: ${data.insertId}` });
      })

    } catch (error) {
      res.status(500).send(error.message);
    }

  }
  actualizar(req, res) {
    try {
      const id = Number(req.params.id);
      const { nombre, descripcion, profesor_id } = req.body
      // Consulta para verificar si el ID existe
      db.query('SELECT * FROM cursos WHERE id = ?', [id], (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        if (result.length === 0) {
          return res.status(404).send(`Curso no encontrado - ID:${id} no existe`);
        } else {
          //recién actualizo
          db.query(`UPDATE cursos SET nombre = ?, descripcion = ?, profesor_id = ? WHERE id = ?;`, [nombre, descripcion, profesor_id, id], (err, data) => {
            if (err) {
              res.status(400).send(err.message);
            }
            res.status(200).json({ msg: `Se actualizo con éxito el curso con el ID: ${id}`, data });
          })
        }
      })
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  borrar(req, res) {
    try {
      const id = Number(req.params.id);
      // Consulta para verificar si el ID existe
      db.query('SELECT * FROM cursos WHERE id = ?', [id], (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        if (result.length === 0) {
          return res.status(404).send(`curso no encontrado - ID:${id} no existe`);
        } else {
          //si existe recién borro
          db.query(`DELETE FROM cursos WHERE id=?`, [id], (err, data) => {
            if (err) {
              res.status(400).send(err.message);
            }
            res.status(200).json({ msg: `Se elimino con éxito el curso con el ID: ${id}`, data });
          })
        }
      })
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  asociarEstudiantes(req, res) {
    try {
      const { curso_id, estudiante_id } = req.body
      db.query(`INSERT INTO cursos_estudiantes (curso_id,estudiante_id) VALUES(?,?)`, [curso_id, estudiante_id], (err, data) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(201).json({ msg: `Se registro al estudiante (ID:${estudiante_id}) con éxito en el curso ID: ${curso_id}` });
      })
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}


export default new CursosController();