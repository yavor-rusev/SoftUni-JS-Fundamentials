function printNthElement(array) {
    let arrayLength = array.length;
    let step = Number(array[arrayLength - 1]);
    let printArray = [];

    for (let index = 0; index < arrayLength - 1; index += step) {

        printArray[printArray.length] = array[index];

    }

    console.log(printArray.join(" "));
}

printNthElement(['dsa', 'asd', 'test', 'test', '2']);