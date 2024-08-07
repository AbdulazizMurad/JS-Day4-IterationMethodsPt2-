const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];
let greater25 = temperatures.filter((temp) => temp >= 25);
console.log("output1:", greater25);
//task2
let less20 = temperatures.filter((temp) => temp <= 20);
console.log("output2:", less20);
//task3
let FahrenheitToC = temperatures.map((temp) => temp * (5 / 9) + 32);
console.log("celsius to Fahrenheit is:", FahrenheitToC);
//task4
let label = temperatures.map((temp) => {
  if (temp >= 25) {
    return "Warm";
  } else if (temp >= 20 && temp <= 24) {
    return "Mild";
  } else if (temp < 20) {
    return "Cool";
  }
});
console.log(label);
//task5
let currentMax = temperatures[0];
temperatures.forEach((temp) => {
  if (temp > currentMax) {
    currentMax = temp;
  }
});
console.log("current max is:", currentMax);
let currentMin = temperatures[0];
temperatures.forEach((temp) => {
  if (temp < currentMin) {
    currentMin = temp;
  }
});
console.log("current Min is:", currentMin);

// let highest = temperatures.find((number) => );
// console.log(highest);
