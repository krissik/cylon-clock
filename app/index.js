import document from "document";
import clock from "clock";

import * as simpleSettings from "./device-settings.js";
import * as datetime from "./datetime.js";
import * as hr from "./hr.js"
import * as battery from "./battery.js"
import * as steps from "./steps.js"

clock.granularity = "seconds"


clock.ontick = function(evt) {
    var currentDate = evt.date;
    datetime.drawDateTime(currentDate);
    battery.drawBat();  
    steps.drawSteps();
}

hr.drawHrm()

import { display } from "display";
import { stepsText } from './steps.js';
let interval_id;
let dot = document.getElementById("dot");

function start_animation(){
    interval_id = setInterval(function() {
        if (display.on === true){
            dot.animate("enable");
        }
    }, 2800);
    dot.animate("enable");
}

function stop_animation(){
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

