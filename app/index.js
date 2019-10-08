import document from "document";
import clock from "clock";

import * as hr from "./hr.js"

clock.granularity = "seconds"


let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

clock.ontick = function(evt) {
    //console.log(evt.date.toString());

    hour.text =  ("0" + evt.date.getHours()).slice(-2);
    min.text  =  ("0" + evt.date.getMinutes()).slice(-2);
    sec.text  =  ("0" + evt.date.getSeconds()).slice(-2);
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
    }, 3500);
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