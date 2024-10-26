

try {
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
    const additionalPlantCount = 100;
    const additionalWeeksSpace = 10;
    let extendedPlantCount = additionalPlantCount;

    for(let j = 1; j <= additionalWeeksSpace; j++) {
        extendedPlantCount *= 2;
        // console.log(additionalPlantCount)
    }

    const requiredArea = extendedPlantCount * spacePerPlant;
    // console.log(requiredArea);
    const expandedRadius = Math.sqrt(requiredArea / PI);
    console.log(`Additional space required after ${additionalWeeksSpace} weeks with 100 starting plants: ${requiredArea.toFixed(2)} square meters`);
    console.log(`Radius of expanded garden needed to fit all plants: ${expandedRadius.toFixed(2)} meters`);


    // Part 3: Errors in Judgement
    const initScientistPlantCount = 100;
    let scientistPlantCount = initScientistPlantCount;

    for(let l = 1; l <= additionalWeeksSpace; l++) {
        scientistPlantCount *= 2;
    }

    const requiredScientistSpace = scientistPlantCount * spacePerPlant;
    // console.log(requiredScientistSpace);
    if(requiredScientistSpace > area) {
        throw new Error(
            `Error: Required space of ${requiredScientistSpace} square meters over space ${area} square meters.`
        )
    } else {
        console.log(
            `No error: Sufficient amout of space for ${scientistPlantCount} plants.`
        )
    }
} catch (error) {
    console.error(error.message)
}