function amazingNumbers(num) {
    let numAsString = num.toString();
    let sum = 0;

    for (i = 0; i < numAsString.length; i++) {
        let currDigit = Number(numAsString[i]);
        sum += currDigit;

    }

    let sumAsString = sum.toString();

    let isAmazing = sumAsString.includes("9") ? "True" : "False";

    console.log(`${num} Amazing? ${isAmazing}`);

}

amazingNumbers(1234);