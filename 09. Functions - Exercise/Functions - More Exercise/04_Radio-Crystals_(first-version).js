function radioCrystals(array) {
    let finalThickness = Number(array[0]);

    for (let index = 1; index < array.length; index++) {

        let lastProcessName = "";
        let counter = 0;

        let currentCrystalThickness = Number(array[index]);

        if (currentCrystalThickness < finalThickness - 1) {
            continue;
        }

        console.log(`Processing chunk ${currentCrystalThickness} microns`);       

        let bestProcessName = '';
        let bestValue = currentCrystalThickness;

        while (currentCrystalThickness !== finalThickness) {
            let processesResultsArray = [];

            if (currentCrystalThickness > finalThickness) {
                let cutResult = cut(currentCrystalThickness);
                let lapResult = lap(currentCrystalThickness);
                let grindResult = grind(currentCrystalThickness);
                let etchResult = etch(currentCrystalThickness);

                processesResultsArray = [["Cut", cutResult], ["Lap", lapResult], ["Grind", grindResult], ["Etch", etchResult]];
                [bestProcessName, bestValue] = bestProcess(finalThickness, lastProcessName, processesResultsArray);

                currentCrystalThickness = bestValue;
            }

            if (bestProcessName !== lastProcessName && lastProcessName !== "") {
                console.log(`${lastProcessName} x${counter}`);

                currentCrystalThickness = Math.trunc(currentCrystalThickness);
                console.log(`Transporting and washing`);

                counter = 0;
            }

            switch (bestProcessName) {
                case "Cut":
                    counter++;
                    lastProcessName = "Cut"; break;

                case "Lap":
                    counter++;
                    lastProcessName = "Lap"; break;

                case "Grind":
                    counter++;
                    lastProcessName = "Grind"; break;

                case "Etch":
                    counter++;
                    lastProcessName = "Etch"; break;
            }

            if (currentCrystalThickness === finalThickness) {
                console.log(`${lastProcessName} x${counter}`);
                console.log(`Transporting and washing`);
            }

            if (currentCrystalThickness < finalThickness && currentCrystalThickness >= finalThickness - 1) {

                if (lastProcessName !== "") {
                    console.log(`${lastProcessName} x${counter}`);
                    console.log(`Transporting and washing`);
                }

                if (currentCrystalThickness !== finalThickness - 1) {
                    currentCrystalThickness = Math.trunc(currentCrystalThickness);
                    console.log(`Transporting and washing`);
                }

                currentCrystalThickness = xRay(currentCrystalThickness);
                console.log(`X-ray x1`);
            }

            if (currentCrystalThickness - finalThickness > 0 && currentCrystalThickness - finalThickness < 1) {
                console.log(`${lastProcessName} x${counter}`);

                currentCrystalThickness = transportingAndWashing(currentCrystalThickness);
                console.log(`Transporting and washing`);
            }
        }

        console.log(`Finished crystal ${finalThickness} microns`);
    }

    function cut(currentCrystalThickness) {
        currentCrystalThickness *= 0.25;
        return currentCrystalThickness;
    }

    function lap(currentCrystalThickness) {
        currentCrystalThickness *= 0.80;
        return currentCrystalThickness;
    }

    function grind(currentCrystalThickness) {
        currentCrystalThickness -= 20;
        return currentCrystalThickness;
    }

    function etch(currentCrystalThickness) {
        currentCrystalThickness -= 2;
        return currentCrystalThickness;
    }

    function transportingAndWashing(currentCrystalThickness) {
        Math.floor(currentCrystalThickness);
        return currentCrystalThickness;
    }

    function xRay(currentCrystalThickness) {
        currentCrystalThickness += 1;
        return currentCrystalThickness;
    }

    function bestProcess(goalThickness, lastProcess, resultsArray) {
        let targetThickness = goalThickness;
        let lastProcessName = lastProcess;

        let array = resultsArray;

        let properValues = [];

        if (array.filter(a => a[1] === targetThickness).length !== 0) {
            properValues = array.filter(a => a[1] === targetThickness);

        } else if (array.filter(a => a[1] > targetThickness && a[1] < targetThickness + 1).length !== 0) {
            properValues = array.filter(a => a[1] > targetThickness && a[1] < targetThickness + 1);

        } else if (array.filter(a => a[1] >= targetThickness - 1 && a[1] < targetThickness).length !== 0) {
            properValues = array.filter(a => a[1] >= targetThickness - 1 && a[1] < targetThickness);

        } else if (array.filter(a => a[1] >= targetThickness + 1).length !== 0) {
            properValues = array.filter(a => a[1] >= targetThickness + 1);

        }

        let sortedProperValues = properValues.sort((a, b) => a[1] - b[1]);

        let bestProcessName = sortedProperValues[0][0];
        let bestValue = sortedProperValues[0][1];

        for (let index = 0; index < sortedProperValues.length; index++) {
            let currentProcessName = sortedProperValues[index][0];

            if (currentProcessName === lastProcessName) {
                let currentProcessValue = sortedProperValues[index][1];

                if (currentProcessValue === bestValue) {
                    bestProcessName = currentProcessName;
                }
            }
        }

        return [bestProcessName, bestValue];
    }
}

radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);
// radioCrystals([1375, 1374.5]);