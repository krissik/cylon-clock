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