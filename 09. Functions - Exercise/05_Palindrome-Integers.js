function palindromeIntegers(array) {
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {

        let numIsPalindrome = true;
        let currentNumAsString = array[i].toString();

        for (let j = 0; j < currentNumAsString.length / 2; j++) {

            let leftSideDigit = Number(currentNumAsString[j]);
            let rigthSideDigit = Number(currentNumAsString[currentNumAsString.length - 1 - j]);

            if (leftSideDigit !== rigthSideDigit) {
                numIsPalindrome = false;
                break;

            }
        }

        console.log(`${numIsPalindrome}`);
    }
}

palindromeIntegers([123, 323, 421, 121]);