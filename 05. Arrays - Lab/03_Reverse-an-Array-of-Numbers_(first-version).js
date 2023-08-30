function reverseAnArrayOfNumbers(n, array) {
    let arrayReversed = [];

    for (let i = n - 1; i >= 0; i--) {
        let currElement = array[i];
        arrayReversed.push(currElement);

    }

    console.log(arrayReversed.join(" "));

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
console.log("----------");
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
console.log("----------");
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
