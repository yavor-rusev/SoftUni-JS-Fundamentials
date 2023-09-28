function searchForANumber(numbers, commandNumbers) {
    let numbersToTake = commandNumbers[0];
    let numbersToDelete = commandNumbers[1];
    let numberToSearsh = commandNumbers[2];

    let searchedNumberCount = numbers.slice(0, numbersToTake)
        .splice(numbersToDelete)
        .filter(a => a === numberToSearsh)
        .length;

    console.log(`Number ${numberToSearsh} occurs ${searchedNumberCount} times.`);
}

searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);