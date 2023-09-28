function distinctArray(arr) {
    let resultArray = [];

    for (let index = 0; index < arr.length; index++) {
        let currentNumber = arr[index];

        if (!resultArray.includes(currentNumber)) {
            resultArray.push(currentNumber);

        }
    }

    console.log(resultArray.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);