function amazingNumbers(num) {
    let numAsString = num.toString();
    let sum = 0;

    for (i = 0; i < numAsString.length; i++) {
        let currDigit = Number(numAsString[i]);
        sum += currDigit;

    }

    let result = sum.toString().includes("9");

    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

}

amazingNumbers(12349);