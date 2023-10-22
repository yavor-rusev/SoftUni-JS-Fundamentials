function lastKNumbersSequence(n, k) {
    let sequence = [1];

    while (sequence.length < n) {
        let sumKElements = 0;
        let kArr = sequence.slice(-k);

        for (let i = 0; i < kArr.length; i++) {
            sumKElements += kArr[i];

        }

        sequence.push(sumKElements);
    }

    console.log(sequence.join(" "));
}

lastKNumbersSequence(6, 3);