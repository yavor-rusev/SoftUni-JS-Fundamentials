function mathPower(number, power) {
    let sum = 1;

    if (power === 0) {
        sum = sum;

    } else if (power > 0) {

        for (let index = 1; index <= power; index++) {
            sum *= number;

        }

    } else if (power < 0) {

        for (let index = -1; index >= power; index--) {
            sum *= (1 / number);

        }
    }

    console.log(sum);
}

mathPower(2, 2);