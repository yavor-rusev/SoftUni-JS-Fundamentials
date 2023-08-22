function specialNumbers(n) {
    for (let currNum = 1; currNum <= n; currNum++) {
        let currNumAsString = currNum.toString();
        let sumDigits = 0;
        let isSpecial = "False";

        for (index = 0; index < currNumAsString.length; index++) {
            sumDigits += Number(currNumAsString[index]);

        }

        if (sumDigits === 5 || sumDigits === 7 || sumDigits === 11) {
            isSpecial = "True";

        }

        console.log(`${currNum} -> ${isSpecial}`);
    }

}

specialNumbers(15);