const axios = require('axios').default;
const api = 'pk.eyJ1IjoicG9tbWVwb21tZSIsImEiOiJja2F4eXNtMmkwYjNmMndxcWVpa3hiaXZkIn0.CMFy5-5BH2iNnE1d-1Q-dg'

const geocode = (adress, callback) => {
    const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + adress +'.json?access_token=' + api
    axios.get(mapBoxURL)
        .then((response) => {
            if(response.data.features.length === 0){
                callback('on ne trouve pas cette localisation', undefined)
            }else{
                callback(undefined, {
                    latitude: response.data.features[0].center[1],
                    longitude: response.data.features[0].center[0],
                    location: response.data.features[0].place_name
                })
            }
            })
        .catch((error) => {
            // handle error
            callback('le service geocode n\'est pas disponible', undefined);
        });
}

module.exports = geocode