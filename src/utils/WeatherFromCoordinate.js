const axios = require('axios').default;
const api = '7c4fcd9e21cade1bea8c6e42779f80ab'

const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + api + '&query=' + latitude + ',' + longitude + '&units=m'
    axios.get(url)
        .then((response) => {
            const temperature = response.data.current.temperature
            const precipitation = response.data.current.precip
            callback(undefined, 'It is currently ' + temperature + ' degrees out. There is a ' + precipitation + '% chance of rain')
        })
        .catch((error) => {
            // handle error
            callback('le service est indispobible où la ville demandée n\'existe pas', undefined);
        });
}

module.exports = weather