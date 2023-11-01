var threshold = 5; // Adjust this value according to your requirements
var hasRolled = false; // Variable to track whether the dice has been rolled

function isShaking(acceleration) {
    return Math.abs(acceleration.x) > threshold ||
           Math.abs(acceleration.y) > threshold ||
           Math.abs(acceleration.z) > threshold;
}

function handleMotion(event) {
    var acceleration = event.accelerationIncludingGravity;

    if (isShaking(acceleration) && !hasRolled) {
        var num = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice1").innerHTML = num;
        hasRolled = true; // Set hasRolled to true to prevent rolling the dice again during the same shake event
    } else if (!isShaking(acceleration)) {
        hasRolled = false; // Reset hasRolled when the device is not shaking
    }
}

window.addEventListener('devicemotion', handleMotion, true);
