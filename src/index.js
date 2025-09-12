/*'use strict';
const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});
server.listen(5000);

//para lanzar el server: node index.js

const express = require('express'); //require es como un import de librerias
const app = express(); //constructor de express
const port = 3000;
//objeto app tiene metodos para manejar las peticiones http(get, post, put, delete), se pone parentesis porque es una funcion con parametros, '/' es la ruta, funcion flecha con parametros req y res (la peticion y la respuesta), dentro de las llaves va el codigo que se ejecuta cuando se hace una peticion a esa ruta
//utilizamos request si queremos obtener datos del cliente, y response si queremos enviar datos al cliente
app.get('/', (req, res) => {
  res.send('Hello World \n My first Express server is MONDONGUERO');
});

app.get('/sable', (req, res) => {
  res.send('05/08/2024  - Joselu Mato 88,90+1');
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto:${port}`);
});

//para lanzar el server: node index.js
*/
const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const animalRoutes = require("./routes/animal");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON//Gestión de las rutas usando el middleware
app.use("/api", animalRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose
 .connect(process.env.MONGODB_URI)
 .then(() => console.log("Conexión exitosa"))
 .catch((error) => console.log(error));
//Conexión al puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
