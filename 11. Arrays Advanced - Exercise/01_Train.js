function train(arr) {
    let wagons = arr[0].split(" ").map(Number);
    let wagonsCapacity = Number(arr[1]);

    for (let index = 2; index < arr.length; index++) {
        let currentCommand = arr[index].split(" ");
        let passengers = 0;

        if (currentCommand[0] === 'Add') {
            passengers = Number(currentCommand[1]);
            wagons.push(passengers);

        } else {
            passengers = Number(currentCommand[0]);

            for (let j = 0; j < wagons.length; j++) {
                if (wagonsCapacity - wagons[j] >= passengers) {
                    wagons[j] += passengers;
                    break;

                }
            }
        }
    }

    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);