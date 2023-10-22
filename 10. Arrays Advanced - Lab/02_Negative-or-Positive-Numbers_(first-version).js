function negativeOrPositiveNumbers(arr) {
    let newArray = [];

    for (let el of arr) {
        if (el < 0) {
            newArray.unshift(el);

        } else {
            newArray.push(el);

        }
    }

    for (let el of newArray) {
        console.log(el);

    }
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);