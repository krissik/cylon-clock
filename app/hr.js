import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import document from "document"; 

export let hrm = new HeartRateSensor();
export let hrEle = document.getElementById("hr-text");


export function drawHrm() { 
    let hrmRate = hrm.heartRate;
    console.log(hrmRate);
    if (hrmRate && display.on) {
        hrEle.text = `${hrmRate}`;  
  }
}

drawHrm()
hrm.onreading = drawHrm;
hrm.start();