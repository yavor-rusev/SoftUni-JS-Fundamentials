function smallestTwoNumbers(arr) {
    let sortedInAscendingArray = arr.sort((a, b) => a - b);
    let smallestTwoNumbersArray = sortedInAscendingArray.slice(0, 2);

    console.log(smallestTwoNumbersArray.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);