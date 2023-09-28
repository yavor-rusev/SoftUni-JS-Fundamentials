function bombNumbers(numbers, bomb) {
    let bombNumber = Number(bomb[0]);
    let bombPowerToLeft = Number(bomb[1]);
    let bombPowerToRight = Number(bomb[1]);

    let foundBomb = false;

    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = numbers[index];
        let foundBomb = false;

        if (currentNumber === bombNumber) {
            for (let j = 1; j <= 3; j++) {

                foundBomb = true;
                let indexOfDetonation = index - bombPowerToLeft;

                if (j === 1) {

                    if (indexOfDetonation < 0) {
                        bombPowerToLeft += index - bombPowerToLeft;
                        indexOfDetonation = index - bombPowerToLeft;
                    }

                    numbers.splice(indexOfDetonation, bombPowerToLeft);

                } else if (j === 2) {
                    numbers.splice(indexOfDetonation, 1);

                } else {
                    numbers.splice(indexOfDetonation, bombPowerToRight);

                }
            }
        }

        if (foundBomb) {
            index = -1;
            bombPowerToLeft = Number(bomb[1]);
        }
    }

    let sumFinalNumbers = 0;

    for (let number of numbers) {
        sumFinalNumbers += number;

    }

    console.log(sumFinalNumbers);
}

bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);