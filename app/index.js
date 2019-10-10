import document from "document";
import clock from "clock";

import * as simpleSettings from "./device-settings.js";
import * as hr from "./hr.js"
import * as battery from "./battery"

clock.granularity = "seconds"


let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let dateEle = document.getElementById("date");


function pad0(str) {
    return ("0" + str).slice(-2)
}

clock.ontick = function(evt) {
    //console.log(evt.date.toString());

    var currentDate = evt.date;
    hour.text = pad0(currentDate.getHours());
    min.text = pad0(currentDate.getMinutes());
    sec.text = pad0(currentDate.getSeconds());
    var dateString = pad0(currentDate.getUTCDate());
    dateString += "." + pad0(currentDate.getMonth());
    dateString += " " + currentDate.getUTCFullYear();
    dateEle.text = dateString;

    battery.drawBat();  
}

hr.drawHrm()

import { display } from "display";
let interval_id;
let dot = document.getElementById("dot");

function start_animation(){
    interval_id = setInterval(function() {
        console.log(`in interval ${interval_id}`)
        if (display.on === true){
            dot.animate("enable");
            console.log('animation');
        }
    }, 2800);
    dot.animate("enable");
}

function stop_animation(){
    console.log(`stop interval ${interval_id}`)
    clearInterval(interval_id)
}

display.onchange =function(this, evt){
    if (display.on === true) {
        start_animation();
    } else {
        stop_animation();
    }
}

start_animation();

function settingsCallback(data) {
    if (!data) {
      return;
    }
    var secsEle = document.getElementById('sec');
    if (!data.showSecs) {
        secsEle.style.display = 'none';
        clock.granularity = "minutes";
    } else {
        secsEle.style.display = 'inline';
        clock.granularity = "seconds";
    }
  }

simpleSettings.initialize(settingsCallback);

