const axios = require('axios');

const getCiudadLatLong = async(nombre) => {
    const ciudad = encodeURI(nombre);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'X-RapidAPI-Key': '772af73a55msh2250d30a166284dp19192fjsn38e9435277c6' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${nombre}`);
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;



    return {
        name,
        lat,
        lon
    }
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     }).catch(err => {
    //         console.log("Error: ", err);
    //     });
}

module.exports = {
    getCiudadLatLong
}