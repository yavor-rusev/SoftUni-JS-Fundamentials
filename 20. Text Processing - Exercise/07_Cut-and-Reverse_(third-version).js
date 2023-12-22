function cutAndReverse(text) {
    let firstHalf = text
        .substring(0, text.length / 2)
        .split("")
        .reverse()
        .join("");

    console.log(firstHalf);

    let secondHalf = text
        .substring(text.length / 2)
        .split("")
        .reverse()
        .join("");

    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')