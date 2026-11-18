// Q5: Weather Activity Planner

const temperature = 22;
const isRaining = false;
const windSpeed = 12;

let suggestion;

if (isRaining) {
    suggestion = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    suggestion = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    suggestion = "Too cold and windy — stay home.";
} else {
    suggestion = "Perfect day for a walk.";
}

console.log(`Temperature: ${temperature}°C`);
console.log(`Is it raining? ${isRaining}`);
console.log(`Wind speed: ${windSpeed} km/h`);
console.log(suggestion);
