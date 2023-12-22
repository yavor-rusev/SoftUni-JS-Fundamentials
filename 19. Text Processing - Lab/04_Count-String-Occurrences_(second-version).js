function countStringOccurrences(sentence, word) {
    let arr = sentence.split(" ");
    let lengthArr = arr.length;

    let newArr = arr.filter(a => a !== word);
    let lengthNewArr = newArr.length;

    let count = lengthArr - lengthNewArr;
    console.log(count);
}

countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
);

countStringOccurrences(
    'softuni is great place for learning new programming languages',
    'softuni'
);