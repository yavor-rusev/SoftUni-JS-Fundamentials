function garage(input) {
    let garages = {};

    input.forEach((string) => {
        let currentCarArray = string.split(' - ');
        let garageNumber = currentCarArray.shift();

        if (!garages.hasOwnProperty(`Garage № ${garageNumber}`)) {
            garages[`Garage № ${garageNumber}`] = new Set;
        }

        let carInfoString = currentCarArray.join(" ");
        garages[`Garage № ${garageNumber}`].add(carInfoString);
    })

    for (let properties of Object.entries(garages)) {
        let currentGarage = properties[0];
        let cars = properties[1];

        console.log(currentGarage);

        cars.forEach(carArray => {
            let printLineString = carArray.toString();

            while (printLineString.includes(": ")) {
                printLineString = printLineString.replace(": ", " - ");
            }

            console.log(`--- ${printLineString}`);
        })
    }
}

garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);