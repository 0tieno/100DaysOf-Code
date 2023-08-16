'use strict'

function showTime(){
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let timeOfTheDay = 'AM';


if(hour == 0){
    hour = 12; //12 hour format
}

if(hour > 12){
    hour = hour - 12; //12hour format
    timeOfTheDay = 'PM'
}

// if(hour<10){
//     hour = '0' + hour;
// }

// if(minutes<10){
//     minutes = '0' + minutes
// }

// if(seconds<10){
//     seconds = '0' + seconds
// }

hour = (hour<10)? '0'+ hour : hour
minutes = (minutes<10)? '0'+ minutes : minutes
seconds = (seconds<10)? '0'+ seconds : seconds

document.getElementById('DigitalClock').innerHTML = hour + ':' + minutes + ':' + seconds + timeOfTheDay;

setTimeout(showTime, 1000);

};

showTime();