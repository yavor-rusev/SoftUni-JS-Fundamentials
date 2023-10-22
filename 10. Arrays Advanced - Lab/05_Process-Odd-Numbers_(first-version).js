function processOddNumbers(arr) {
    let oddPositions = [];
    let reversedDoubledOddPositions = [];

    for (let index = 0; index < arr.length; index++) {
        if (index % 2 !== 0) {
            oddPositions.push(arr[index]);

        }
    }

    for (let el of oddPositions) {
        el *= 2;
        reversedDoubledOddPositions.unshift(el);

    }

    console.log(reversedDoubledOddPositions.join(" "));
}

processOddNumbers([10, 15, 20, 25]);