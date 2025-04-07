function hello(name){
    return(`hello ${name}`);
}
function squareFeetToAcres(squareFeet) {
    const acres = squareFeet / 43560;
    return acres;
}

function mowingTime(width, length, cutRate) {
    const area = width * length;
    const time = area / cutRate;
    return time;
}
function getAirQualityCategory(aqi) {
    if (aqi >= 0 && aqi <= 50) return "Good";
    else if (aqi <= 100) return "Moderate";
    else if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    else if (aqi <= 200) return "Unhealthy";
    else if (aqi <= 300) return "Very Unhealthy";
    else return "Hazardous";
}
function yee_ha(number) {
    const divisibleBy3 = number % 3 === 0;
    const divisibleBy7 = number % 7 === 0;

    if (divisibleBy3 && divisibleBy7) return "Yee Ha";
    else if (divisibleBy3) return "Yee";
    else if (divisibleBy7) return "Ha";
    else return "Nada";
}
function calculateSlope(x1, y1, x2, y2) {
    const rise = y2 - y1;
    const run = x2 - x1;
    return rise / run;
}

export {hello, squareFeetToAcres, mowingTime, getAirQualityCategory, yee_ha, calculateSlope}