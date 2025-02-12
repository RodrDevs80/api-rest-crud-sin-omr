import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Sertec2580$",
    database: "cursos",
})

db.connect((err) => {
    if (err) throw err;
    console.log('La conexión fue exitosa...')
});

export default db;