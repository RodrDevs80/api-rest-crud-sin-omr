import db from "../database/conexion.js";

class EstudiantesController {
  constructor() {

  }
  consultar(req, res) {
    try {
      db.query(`SELECT * FROM estudiantes`, [], (err, data) => {
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
      db.query(`SELECT * FROM estudiantes WHERE id=?`, [id], (err, data) => {
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
      const { dni, nombre, apellido, email } = req.body
      db.query(`INSERT INTO estudiantes (dni,nombre,apellido,email) VALUES(?,?,?,?)`, [dni, nombre, apellido, email], (err, data) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(201).json({ msg: `Un nuevo estudiante se creo con éxito con el ID: ${data.insertId}` });
      })


    } catch (error) {
      res.status(500).send(error.message);
    }

  }
  actualizar(req, res) {
    try {
      const id = Number(req.params.id);
      // Consulta para verificar si el ID existe
      db.query('SELECT * FROM estudiantes WHERE id = ?', [id], (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        if (result.length === 0) {
          return res.status(404).send(`Estudiante no encontrado - ID:${id} no existe`);
        } else {
          //recién actualizo
          const { dni, nombre, apellido, email } = req.body
          db.query(`UPDATE estudiantes SET dni = ?, nombre = ?, apellido = ?, email = ? WHERE (id = ?);`, [dni, nombre, apellido, email, id], (err, data) => {
            if (err) {
              res.status(400).send(err.message);
            }
            res.status(200).json({ msg: `Se actualizo con éxito el estudiante con el ID: ${id}`, data });
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
      db.query('SELECT * FROM estudiantes WHERE id = ?', [id], (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        if (result.length === 0) {
          return res.status(404).send(`Estudiante no encontrado - ID:${id} no existe`);
        } else {
          //si existe recién borro
          db.query(`DELETE FROM estudiantes WHERE id=?`, [id], (err, data) => {
            if (err) {
              res.status(400).send(err.message);
            }
            res.status(200).json({ msg: `Se elimino con éxito el estudiante con el ID: ${id}`, data });
          })
        }
      })
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
export default new EstudiantesController();