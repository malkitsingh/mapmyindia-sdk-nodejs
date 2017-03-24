MapMyIndia SDK for NodeJS
=================
This is unofficial SDK and covers basic APIs. As this is open source project, contributions and suggestions are welcome.

Installation
=================
```
npm i mapmyindia-sdk-nodejs -S
```

Usage
=================
create a file example.js and put the below code

***example.js***
```js

var mapsdk = require('mapmyindia-sdk-nodejs');

// testing reverse geocoding
// Parameters are API_KEY, Latitude, Longitude
// this function returns promise which can be used to handle success or failure response accrodingly.
 mapsdk.reverseGeoCodeGivenLatiLongi('YOUR-API-KEY',26.5645,85.9914).then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
 });
 
//testing geocoding
// Parameters are API_KEY, Address to geocode (It doesn't have to be exact address ;) )
// this function returns promise which can be used to handle success or failure response accrodingly.
 mapsdk.geoCodeGivenAddressString('YOUR-API-KEY','68, okhla phase 3, delhi').then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
 });
 
//testing auto Suggestions
// Parameters are API_KEY, any valid string (in this example I was trying to get suggestions of Lovely Professional University, Punjab, India. Yes I am alumni of this lovely university :D )
// this function returns promise which can be used to handle success or failure response accrodingly.
 mapsdk.autoSuggest('YOUR-API-KEY','lovely professional').then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
});

//testing routes
// Parameters are API_KEY, Starting point latitude, Starting point longitude, Ending point latitude, Ending point longitude
// this function returns promise which can be used to handle success or failure response accrodingly.
mapsdk.getRoute('YOUR-API-KEY',28.111,77.111,28.22,77.22).then(function(res)
{
    console.log(JSON.stringify(res));
}).catch(function(ex){
    console.log('came in catch');
    console.log(ex);
});

```

Change the "YOUR-API-KEY" with your API key. To get your api key you need to signup/register on [MapMyIndia](http://www.mapmyindia.com/api/)
And to see things in action, just run this command from same directory where your "example.js" file lives
```
node example.js
```


