function sumOfOddNumbers(input) {
    let n = Number(input);
    let totalSum = 0;

    for (i = 1; i <= n; i++) {
        let currNum = i + (i - 1);
        totalSum += currNum;
        console.log(currNum);

    }

    console.log(`Sum: ${totalSum}`);

}

sumOfOddNumbers(3);