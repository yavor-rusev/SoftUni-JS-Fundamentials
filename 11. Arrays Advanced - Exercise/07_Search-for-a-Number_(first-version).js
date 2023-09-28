function searchForANumber(numbers, commandNumbers) {
    let numbersToTake = commandNumbers[0];
    let numbersToDelete = commandNumbers[1];
    let numberToSearsh = commandNumbers[2];

    let newArray = numbers.slice(0, numbersToTake);
    let cutNewArray = newArray.splice(numbersToDelete);
    let searchedNumberArray = cutNewArray.filter(a => a === numberToSearsh);
    let searchedNumberCount = searchedNumberArray.length;

    console.log(`Number ${numberToSearsh} occurs ${searchedNumberCount} times.`);
}

searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);