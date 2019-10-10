import document from "document"; 
import { battery } from "power";

export let bat_low = document.getElementById("bat-image-2");

export let root = document.getElementById('root')
export const screenHeight = root.height //250 - Ionic, 300 - Versa
export const screenWidth = root.width

export function drawBat() {
  let level = battery.chargeLevel;
  let batteryPercentage = Math.floor(level);
  bat_low.style.opacity = 1 - batteryPercentage/100;
}
