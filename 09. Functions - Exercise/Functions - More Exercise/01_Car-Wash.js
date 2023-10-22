function carWash(commandArray) {
    let commandArrayLength = commandArray.length;
    let carCleanlinessPercent = 0;

    for (let index = 0; index < commandArrayLength; index++) {
        let currentCommand = commandArray[index];

        switch (currentCommand) {
            case 'soap': carCleanlinessPercent += 10; break;
            case 'water': carCleanlinessPercent *= 1.20; break;
            case 'vacuum cleaner': carCleanlinessPercent *= 1.25; break;
            case 'mud': carCleanlinessPercent *= 0.90; break;
        }
    }

    console.log(`The car is ${carCleanlinessPercent.toFixed(2)}% clean.`);

}

carWash([
    "soap",
    "water",
    "mud",
    "mud",
    "water",
    "mud",
    "vacuum cleaner"
]);