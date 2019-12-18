const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=421428feb0ff67ff701c8ea7170e7f22&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}