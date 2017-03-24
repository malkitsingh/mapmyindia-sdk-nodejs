/**
 * Created by msb on 24-03-2017.
 */
'use strict';
var config = require('./config');
var Client = require('node-rest-client').Client;
var client = new Client();
var Promise = require('bluebird');

// var api_key = exports.api_key = '';

var reverseGeoCodeGivenLatiLongi = exports.reverseGeoCodeGivenLatiLongi = function (api_key, lati, longi) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!lati) {
            throw new Error('You must provide latitude.');
        }
        if (!longi) {
            throw new Error('You must provide longitude.');
        }
        client.get(config.App_Base_URI + api_key + '/rev_geocode?lat=' + lati + '&lng=' + longi, function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}

var geoCodeGivenAddressString = exports.geoCodeGivenAddressString = function (api_key, address) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!address) {
            throw new Error('You must provide address.');
        }

        client.get(config.App_Base_URI + api_key + '/geo_code?addr=' + address , function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}

var autoSuggest = exports.autoSuggest = function (api_key, candidateString) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!candidateString) {
            throw new Error('You must provide candidate query.');
        }

        client.get(config.App_Base_URI + api_key + '/autosuggest?q=' + candidateString , function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}

var getRoute = exports.getRoute = function (api_key, startingPointLatitude, startingPointLongitude, endingPointLatitude, endgingPointLongitude) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!startingPointLatitude) {
            throw new Error('You must provide starting point latitude.');
        }
        if (!startingPointLongitude) {
            throw new Error('You must provide starting point longitude.');
        }

        if (!endingPointLatitude) {
            throw new Error('You must provide ending point latitude.');
        }

        if (!endgingPointLongitude) {
            throw new Error('You must provide ending point longitude.');
        }

        client.get(config.App_Base_URI + api_key + '/route?start=' + startingPointLatitude+','+startingPointLongitude+'&destination='+endingPointLatitude+','+endgingPointLongitude+'&alternatives=true&with_advices=1' , function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}









