console.log('111111111111111111 HR HR HR HR HR HR HR HR HR HR HR HR HR HR HR ')

import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import document from "document"; 

export let hrm = new HeartRateSensor();
export let hrEle = document.getElementById("hr");


export function drawHrm() { 
    let hrmRate = hrm.heartRate;
    console.log(hrmRate);
    if (hrmRate && display.on) {
        hrEle.text = `HR ${hrmRate}`;  
  }
}

drawHrm()
hrm.onreading = drawHrm;
hrm.start();

console.log('HR HR HR HR HR HR HR HR HR HR HR HR HR HR HR ')