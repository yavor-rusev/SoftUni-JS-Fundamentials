function cutAndReverse(text) {
    let charsArray = text.split("");
    let charsArrayLength = charsArray.length;

    let result = [];

    for (let i = 0; i < charsArrayLength; i++) {
        let char = charsArray[i];
        result.unshift(char);

        if (i === (charsArrayLength / 2) - 1 || i === charsArrayLength - 1) {
            console.log(result.join(""));
            result = [];
        }
    }
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')