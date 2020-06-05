const axios = require('axios').default;
const api = 'pk.eyJ1IjoicG9tbWVwb21tZSIsImEiOiJja2F4eXNtMmkwYjNmMndxcWVpa3hiaXZkIn0.CMFy5-5BH2iNnE1d-1Q-dg'

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + longitude + ',' + latitude + '.json?access_token=' + api
    axios.get(url)
        .then((response) => {
            if(response.data.features.length === 0){
                callback('on ne trouve pas cette localisation', undefined)
            }else{
                callback(undefined, {
                    location: response.data.features[0].place_name
                })
            }

            })
        .catch((error) => {
            // handle error
            callback('le service Geocode est actuellement inaccessible', undefined);
        });
}

module.exports = forecast