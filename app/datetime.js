import document from "document";
import { locale } from "user-settings";
import { getWeekdays } from "./translations.js";

let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let dateEle = document.getElementById("date");


function pad0(str) {
    return ("0" + str).slice(-2)
}

function getWeekday(currentDate) {
    var day = currentDate.getDay();
    var loc = locale.language;
    var weekdays = getWeekdays()
    if (loc.indexOf('de') == 0) {
        weekdays = weekdays['de'];
    } else {
        weekdays = weekdays['en'];
    }
    return weekdays[day];

}

export function drawDateTime(currentDate) {
    hour.text = pad0(currentDate.getHours());
    min.text = pad0(currentDate.getMinutes());
    sec.text = pad0(currentDate.getSeconds());
    console.log('###########');
    console.log(getWeekday(currentDate));
    var dateString = getWeekday(currentDate) + ".";
    dateString += " " + pad0(currentDate.getUTCDate());
    dateString += "." + pad0(currentDate.getMonth());
    dateString += " " + currentDate.getUTCFullYear();
    dateEle.text = dateString;
}