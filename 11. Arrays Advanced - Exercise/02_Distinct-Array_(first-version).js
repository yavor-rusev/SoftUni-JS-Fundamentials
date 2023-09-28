function distinctArray(arr) {
    for (let index = 0; index < arr.length; index++) {
        let currentNumber = arr[index];
        let isRepeated = arr.includes(currentNumber, index + 1);

        while (isRepeated) {
            let indexOfRepeatedNumber = arr.indexOf(currentNumber, index + 1);

            if (indexOfRepeatedNumber === -1) {
                break;
            }

            arr.splice(indexOfRepeatedNumber, 1);
        }
    }

    console.log(arr.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);