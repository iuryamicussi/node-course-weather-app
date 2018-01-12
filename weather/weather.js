const request = require('request');

// const geocode = require('../geocode/geocode');

// var getWeather = (address, callback) => {
//     geocode.geocodeAddress(address, (errorMessage,results)=>{
//         if(errorMessage){
//             callback(errorMessage);
//             console.log('erro no geoCode!');
//         }else{
//             console.log('sucesso no geoCode!');
//             request({
//                 url: `https://api.darksky.net/forecast/95e5836390f4b402b670c1747eee088f/${results.latitude},${results.longitude}?lang=pt&units=si`,
//                 json: true
//             }, (error, response, body) => {
//                 if (!error && response.statusCode === 200) {
//                     console.log('sucesso no weather!');
//                     callback(undefined,{
//                         temperature : body.currently.temperature,
//                         apparentTemperature: body.currently.apparentTemperature
//                     }); 
//                 }
//                 else {
//                     console.log('erro no weather!');
//                     callback('Unable to fetch weather');
//                 }
//             })
//         }});
// };

var getWeather = (lat,lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/95e5836390f4b402b670c1747eee088f/${lat},${lng}?lang=pt&units=si`,
        json: true
    }, (error, response, body) => {
        
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else {
            callback('Unable to fetch weather');
        }
    })
};

module.exports.getWeather = getWeather;