function commonElements(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        let firstArrayElement = firstArray[i];

        for (let j = 0; j < secondArray.length; j++) {
            let secondArrayElement = secondArray[j];

            if (firstArrayElement === secondArrayElement) {
                console.log(firstArrayElement);

            }
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);