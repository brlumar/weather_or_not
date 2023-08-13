var currentDay = $('#currentDay'); //variable that points to the day in the DOM
var currentTime = $('#currentTime'); //variable that points to the time in the DOM

var gpsButton = $('#use-location'); //points to the gps icon in the DOM
let inputButton = $('#input-btn') //points to the input (SEARCH) botton in the DOM

var currentHour = dayjs().hour(); //gets the current hour

const apiKey = 'd76c91059df9d7069e6671bf4641cd06'; //api key for open weather map api


//Function that sets the current time. 
setInterval(function () {
    var dateInterval = dayjs(); //js constructor to create a new date object.
    currentTime.text(dateInterval.format('MMM,DD YYYY hh:mm:ss a'));
}, 1000);

$(gpsButton).on('click', function(){
    getWeatherData();
    console.log('button clicked');
});

$(inputButton).on('click', function(){
    getWeatherData();
    console.log('input entered');
});


function getWeatherData() { //function that gets weather data from open weather man api
    navigator.geolocation.getCurrentPosition((success) => { 
        let { latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`).then(res=>res.json()).then(data=>{
            console.log(data)
        })

    })
}


