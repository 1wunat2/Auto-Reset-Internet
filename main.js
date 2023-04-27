//Will ping the website to check if there is a connection

//var website = 'google.com';
const b = require('bonescript');

function OnOff(){
    if(window.navigator.onLine){
        console.log('ON');
        ledOn("USR0");
        ledOff("USR1");
    } else{
        console.log('OFF');
        ledOn("USR1");
        ledOff("USR0");
    }
}

setInterval(OnOff(), 1000);


function ledOn(usr){
    b.pinMode(usr, b.HIGH);
}
function ledOff(usr){
    b.pinMode(usr, b.LOW);
}