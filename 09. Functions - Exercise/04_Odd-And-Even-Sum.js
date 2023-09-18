function oddAndEvenSum(number) {
    let numberAsString = number.toString();
    let numberAsStringLength = numberAsString.length;

    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < numberAsStringLength; index++) {

        let currentDigit = Number(numberAsString[index]);

        if (currentDigit % 2 !== 0) {
            oddSum += currentDigit;

        } else {
            evenSum += currentDigit;

        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));