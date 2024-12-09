// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) return "Ok";
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) return "License Suspended";
    else return `Points: ${points}`;
  }
}

console.log(checkSpeed(50)); // Ok
console.log(checkSpeed(70)); // Ok
console.log(checkSpeed(71)); // Ok
console.log(checkSpeed(75)); // Points: 1
console.log(checkSpeed(77)); // Points: 1
console.log(checkSpeed(80)); // Points: 2
console.log(checkSpeed(130)); // License Suspended
console.log(checkSpeed(180)); // License Suspended
