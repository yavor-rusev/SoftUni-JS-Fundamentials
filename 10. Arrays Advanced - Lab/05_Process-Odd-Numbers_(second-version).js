function processOddNumbers(arr) {
    return arr.filter((el, index) => index % 2 !== 0)
        .map(el => el * 2)
        .reverse()
        .join(" ");

}

console.log(processOddNumbers([10, 15, 20, 25]));