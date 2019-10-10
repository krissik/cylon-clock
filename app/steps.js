import document from "document"; 
import { today } from "user-activity";
import { locale} from "user-settings";

export let stepsText = document.getElementById("steps-text");

export let root = document.getElementById('root')

export function drawSteps() {
  let goaltype = 'steps';
  let stepsToday =  (today.local[goaltype] || 0);
  stepsToday = stepsToday.toLocaleString(locale.language);
  if (locale.language.indexOf('de') == 0) {
      //toLocalString is not working
      stepsToday = stepsToday.replace(',', '.');
  }
  stepsText.text = stepsToday;
}