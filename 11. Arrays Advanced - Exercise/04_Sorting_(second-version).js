function sorting(arr) {
    let resultArray = [];
    let sortedDescendingArray = arr.sort((a, b) => b - a);
    let sortedDescendingArrayLength = sortedDescendingArray.length;

    for (let index = 0; index < sortedDescendingArrayLength / 2; index++) {
        let currentBiggestNumber = sortedDescendingArray.shift();
        let currentSmallestNumber = sortedDescendingArray.pop();

        resultArray.push(currentBiggestNumber, currentSmallestNumber);

    }

    console.log(resultArray.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);