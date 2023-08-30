function condenseArrayToNumber(array) {
    while (array.length > 1) {
        let condensedArray = [];

        for (let i = 0; i < array.length - 1; i++) {
            let currNum = Number(array[i]);
            let nextNum = Number(array[i + 1]);

            let condensedNum = currNum + nextNum;
            condensedArray.push(condensedNum);

        }

        array = condensedArray;

    }

    let finalSingleNum = array;

    console.log(`${finalSingleNum}`);

}

condenseArrayToNumber([2, 10, 3]);

console.log("---------------");

condenseArrayToNumber([5, 0, 4, 1, 2]);

console.log("---------------");

condenseArrayToNumber([1]);
