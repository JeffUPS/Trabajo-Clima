const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;
const axios = require('axios');
const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');

let temp1;
let temp2;
let temp3;
let temp4;



app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


const getQuito = async(ciudad) => {
    try {
        let ciu = await ubicacion.getCiudadLatLong(ciudad);
        let temp1 = await clima.getClima(ciu.lat, ciu.lon);
        return temp1
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${ciudad}`);
    }
};
getQuito("Quito").then(res => {
    temp1 = res;
}).catch(err => console.log(err));

const getGuayaquil = async(ciudad) => {
    try {
        let ciu = await ubicacion.getCiudadLatLong(ciudad);
        let temp2 = await clima.getClima(ciu.lat, ciu.lon);
        return temp2
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${ciudad}`);
    }
};
getGuayaquil("Guayaquil").then(res => {
    temp2 = res;
}).catch(err => console.log(err));

const getMadrid = async(ciudad) => {
    try {
        let ciu = await ubicacion.getCiudadLatLong(ciudad);
        let temp3 = await clima.getClima(ciu.lat, ciu.lon);
        return temp3
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${ciudad}`);
    }
};
getMadrid("Madrid").then(res => {
    temp3 = res;
}).catch(err => console.log(err));

const getParis = async(ciudad) => {
    try {
        let ciu = await ubicacion.getCiudadLatLong(ciudad);
        let temp4 = await clima.getClima(ciu.lat, ciu.lon);
        return temp4
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${ciudad}`);
    }
};
getParis("Paris").then(res => {
    temp4 = res;
}).catch(err => console.log(err));


app.get('/', function(req, res) {
    res.render('home', {
        ciudad: "Quito",
        temp1,
        ciudad1: "Guayaquil",
        temp2
    });
});
app.get('/world', function(req, res) {
    res.render('world', {
        ciudad2: "Madrid",
        temp3,
        ciudad3: "Paris",
        temp4
    });
});
app.listen(port, () => {
    console.log("Escrucnahdo peticion en el puerto 3000");
});