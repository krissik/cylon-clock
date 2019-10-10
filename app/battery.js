import document from "document"; 
import { battery } from "power";

export let bat_high = document.getElementById("bat-line");
export let bat_low = document.getElementById("bat-line-2");

export let root = document.getElementById('root')
export const screenHeight = root.height //250 - Ionic, 300 - Versa
export const screenWidth = root.width

export function drawBat() {
  let level = battery.chargeLevel;
  let batteryPercentage = Math.floor(level);
  console.log('battery:');
  console.log(batteryPercentage);
  bat_high.style.opacity = batteryPercentage/100;
  bat_low.style.opacity = 1 - batteryPercentage/100;
}
