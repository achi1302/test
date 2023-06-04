require('./database')
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Congifurgaciones
app.set('port', 3000)
app.set('json spaces', 2)
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//rutas
app.use('/api/libros',require('./routes/rutaslibros'));
app.use('/api/grupos',require('./routes/rutasgrupos'));
app.use('/api/autores',require('./routes/rutasautores'));
app.use('/api/usuarios',require('./routes/rutasusuarios'));



//Empzando el servidor
app.listen(app.get('port'));
console.log("mi primer servidor ajua");
``