var currentDay = $('#currentDay'); //variable that points to the day in the DOM
var currentTime = $('#currentTime'); //variable that points to the time in the DOM

var gpsButton = $('#iconLink');

var currentHour = dayjs().hour(); //gets the current hour

const apiKey = 'd76c91059df9d7069e6671bf4641cd06'; //api key for open weather map api


//Function that sets the current time. 
setInterval(function () {
    var dateInterval = dayjs(); //js constructor to create a new date object.
    currentTime.text(dateInterval.format('MMM,DD YYYY hh:mm:ss a'));
}, 1000);

$('#gpsButton').on('click', function(){
    console.log('button clicked');
});


function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`).then(res=>res.json()).then(data=>{
            console.log(data)
        })

    })
}
getWeatherData();