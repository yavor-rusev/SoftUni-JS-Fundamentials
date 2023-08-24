function sumDigits(num) {
    let numAsString = num.toString();
    let sumOfDigits = 0;

    for (let index = 0; index < numAsString.length; index++) {
        let currDigit = Number(numAsString[index]);
        sumOfDigits += currDigit;
        
    }
    console.log(sumOfDigits);

}

sumDigits(245678);