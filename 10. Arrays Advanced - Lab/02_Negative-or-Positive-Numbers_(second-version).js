function negativeOrPositiveNumbers(arr) {
    let newArray = [];

    for (let el of arr) {
        el < 0? newArray.unshift(el) : newArray.push(el);
        
    }

    console.log(newArray.join("\n"));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);