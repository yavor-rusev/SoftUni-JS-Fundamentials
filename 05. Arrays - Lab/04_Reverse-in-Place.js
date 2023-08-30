function reverseInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let leftSideElement = array[i];
        let rightSideElement = array[array.length - 1 - i];

        array[i] = rightSideElement;
        array[array.length - 1 - i] = leftSideElement;

    }

    let printLine = "";

    for (let i = 0; i < array.length; i++) {
        let currElement = array[i];
        printLine += `${currElement} `

    }

    console.log(printLine);

}



reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
console.log("----------");
reverseInPlace(['33', '123', '0', 'dd']);