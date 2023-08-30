function evenAndOddSubtraction(array) {
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;

    for (let element of array) {
        let currNum = Number(element);

        if (currNum % 2 === 0) {
            sumEvenNumbers += currNum;

        } else {
            sumOddNumbers += currNum;

        }
    }

    console.log(sumEvenNumbers - sumOddNumbers);

}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
console.log("----------");
evenAndOddSubtraction([3, 5, 7, 9]);
console.log("----------");
evenAndOddSubtraction([2, 4, 6, 8, 10]);