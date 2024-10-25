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
    // console.log(`week: ${i}, plant count: ${plantCount}`);
    if(plantCount > eightyPercentCapacity) {
        console.log(`prune, plant count is greater than 80% of the maximum capacity of the garden`);
    } else if(plantCount >= fiftyPercentCapacity) {
        console.log(`monitor, plant count is between 50% and 80% of the maximum capacity of the garden`);
    } else {
        console.log(`plant, plant count is less than 50% of the maximum capacity of the garden`);
    }
}

// Part 2: Thinking Bigger
let additionalPlantCount = 100;

for(let j = 1; j <= 10; j++) {
    additionalPlantCount *= 2;
}