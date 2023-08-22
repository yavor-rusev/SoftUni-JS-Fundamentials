function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let typeSum = sum % 1 === 0 ? "Integer" : "Float";

    console.log(`${sum} - ${typeSum}`);

}

integerAndFloat(9, 100, 1.1);