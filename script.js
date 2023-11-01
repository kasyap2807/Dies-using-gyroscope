
var threshold = 15; // Adjust this value according to your requirements

function isShaking(acceleration) {
  return Math.abs(acceleration.x) > threshold ||
         Math.abs(acceleration.y) > threshold ||
         Math.abs(acceleration.z) > threshold;
}

function handleMotion(event) {
  var acceleration = event.accelerationIncludingGravity;
  var num = Math.floor(Math.random()*6)+1;
document.querySelector(".dice1").innerHTML = num;
window.addEventListener('devicemotion', handleMotion, true);


  if (isShaking(acceleration)) {
    shakeResultElement.textContent = 'Device Shaken!';
  } else {
    shakeResultElement.textContent = 'Shake your device!';
  }
}
