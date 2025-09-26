const mysql=require('mysql12');
const config=require('./config.json');


const connection=mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
});


connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con la BD: ', err);
        return;
    }
    console.log('Conectado a la base de datos "${config.db.database}');


});
MediaSourceHandle.exports=connection;
