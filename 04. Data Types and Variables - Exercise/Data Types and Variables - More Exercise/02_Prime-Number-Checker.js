function primeNumberChecker(input) {
    let num = Number(input);
    let isPrime = true;

    for (let devider = 2; devider < num; devider++) {
        if (num % devider === 0) {
            isPrime = false;

        }
    }

    console.log(isPrime);
}

primeNumberChecker(11);