// Part 1: Growing Pains
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
// console.log(area)
const spacePerPlant = 0.8;
const initPlantCount = 20;
const maxCapacity = Math.floor(area / spacePerPlant);
// console.log(maxCapacity)
const fiftyPercentCapacity = maxCapacity * 0.5;
const eightyPercentCapacity = maxCapacity * 0.8;
// console.log(fiftyPercentCapacity, eightyPercentCapacity)
let plantCount = initPlantCount;

for(let i = 1; i <= 3; i++) {
    plantCount *= 2;
    console.log(`week: ${i}, plant count: ${plantCount}`);
}
