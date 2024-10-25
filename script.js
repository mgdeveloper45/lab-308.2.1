/** 

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
    // console.log(additionalPlantCount)
}

const requiredArea = additionalPlantCount * spacePerPlant;
// console.log(requiredArea);
const additionalSpace = requiredArea - area;
// console.log(`space needed after 10 weeks, ${additionalSpace}, square meters`);
const expandedRadius = Math.sqrt(additionalSpace / PI + radius * radius);
// console.log(`new radius for garden, ${expandedRadius}, meters`);

**/

// Part 3: Errors in Judgement
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePerPlant = 0.8;
const initPlantCount = 20;
const maxCapacity = Math.floor(area / spacePerPlant);
let weeks = 10;

let plantCount = initPlantCount;