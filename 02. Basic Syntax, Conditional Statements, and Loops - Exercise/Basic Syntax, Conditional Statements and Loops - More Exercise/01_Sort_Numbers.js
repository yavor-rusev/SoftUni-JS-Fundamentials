function sortNumbers(a, b, c) {

    let num1 = '';
    let num2 = '';
    let num3 = '';

    if (a > b && a > c) {
        num1 = a;

        if (b > c) {
            num2 = b;
            num3 = c;

        } else {
            num2 = c;
            num3 = b;

        }
    } else if (b > a && b > c) {
        num1 = b;

        if (a > c) {
            num2 = a;
            num3 = c;

        } else {
            num2 = c;
            num3 = a;

        }

    } else {
        num1 = c;

        if (b > a) {
            num2 = b;
            num3 = a;

        } else {
            num2 = a;
            num3 = b;

        }
    }

    console.log(num1);
    console.log(num2);
    console.log(num3);

}

sortNumbers(0, 0, 2);