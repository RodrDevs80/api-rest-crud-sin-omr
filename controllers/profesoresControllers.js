import db from "../database/conexion.js";

class ProfesoresController {
  constructor() {

  }
  consultar(req, res) {
    try {
      db.query(`SELECT * FROM profesores`, [], (err, data) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).json(data);
      })
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  consultarEnDetalle(req, res) {
    try {
      const id = Number(req.params.id);
      db.query(`SELECT * FROM profesores WHERE id=?`, [id], (err, data) => {
        if (err) {
          res.status(400).send(err.message);
        }
        else if (data.length === 0) {
          res.status(404).json({ msg: `No se encontró el ID ${id}` });
        }
        else {
          res.status(200).json(data);
        }
      })

    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  ingresar(req, res) {
    try {
      const { dni, nombre, apellido, email, profesion, telefono } = req.body
      db.query(`INSERT INTO profesores (dni,nombre,apellido,email,profesion, 
        telefono) VALUES(?,?,?,?,?,?)`, [dni, nombre, apellido, email, profesion, telefono],
        (err, data) => {
          if (err) {
            res.status(400).send(err.message);
          }
          res.status(201).json({ msg: `Un nuevo profesor se creo con éxito con el ID: ${data.insertId}` });
        })


    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  actualizar(req, res) {
    try {
      const id = Number(req.params.id);
      const { dni, nombre, apellido, email, profesion, telefono } = req.body
      // Consulta para verificar si el ID existe
      db.query('SELECT * FROM profesores WHERE id = ?', [id], (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        if (result.length === 0) {
          return res.status(404).send(`Profesor no encontrado - ID: ${id} no existe`);
        } else {
          //Si existe recien actualizo 
          db.query(`UPDATE profesores SET dni = ?, nombre = ?, apellido = ?, email = ?, profesion = ?, telefono = ?  WHERE id = ?;`,
            [dni, nombre, apellido, email, profesion, telefono, id], (err, data) => {

              if (err) {
                res.status(400).send(err.message);
              }
              res.status(200).json({ msg: `Se actualizo con éxito el profesor con el ID: ${id}`, data });
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
      db.query('SELECT * FROM profesores WHERE id = ?', [id], (err, result) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        if (result.length === 0) {
          return res.status(404).send(`Profesor no encontrado - ID: ${id} no existe`);
        }
        else {
          //Si existe recién borro
          db.query(`DELETE FROM profesores WHERE id=?`, [id], (err, data) => {
            if (err) {
              res.status(400).send(err.message);
            }
            res.status(200).json({ msg: `Se elimino con éxito el profesor con el ID: ${id}`, data });
          })
        }
      })


    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}


export default new ProfesoresController();