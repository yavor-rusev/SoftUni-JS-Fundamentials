function piccolo(carsArray) {
    let parkingLot = new Set;

    carsArray.forEach(carInfo => {
        let [direction, carNumber] = carInfo.split(', ');

        if (direction === 'IN') {
            parkingLot.add(carNumber);

        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);

        }
    })

    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");

    } else {
        let carNumbersSorted = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));

        for (let number of carNumbersSorted) {
            console.log(number);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);