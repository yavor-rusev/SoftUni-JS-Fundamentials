function reverseAnArrayOfNumbers(n, array) {
    let arrayN = [];

    for (let i = 0; i < n; i++) {
        let currElement = array[i];
        arrayN.push(currElement);

    }

    let arrayNReversed = arrayN.reverse();

    console.log(arrayNReversed.join(" "));

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
console.log("----------");
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
console.log("----------");
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
