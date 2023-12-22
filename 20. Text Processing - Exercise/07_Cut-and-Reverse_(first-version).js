function cutAndReverse(text) {
    let firstHalf = "";
    let secondHalf = "";

    for (let i = text.length - 1; i >= 0; i--) {
        let char = text[i];

        if (i >= text.length / 2) {
            secondHalf += char;

        } else {
            firstHalf += char;

        }
    }

    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')