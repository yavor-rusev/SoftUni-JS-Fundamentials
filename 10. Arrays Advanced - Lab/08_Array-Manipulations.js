function arrayManipulations(input) {
    let elementsAsString = input.shift();
    let elementsAsArray = elementsAsString.split(" ");
    let resultArray = [];

    for (let i = 0; i < input.length; i++) {

        let currentElementSplited = input[i].split(" ");
        let command = currentElementSplited[0];

        switch (command) {
            case 'Add':
                let numberToAdd = currentElementSplited[1];
                elementsAsArray.push(numberToAdd);
                break;

            case 'Remove':
                let numberToRemove = currentElementSplited[1];
                elementsAsArray = elementsAsArray.filter((el) => el !== numberToRemove);
                break;

            case 'RemoveAt':
                let indexToRemove = currentElementSplited[1];
                elementsAsArray.splice(indexToRemove, 1);
                break;

            case 'Insert':
                let numberToInsert = currentElementSplited[1];
                let indexToInsert = currentElementSplited[2];
                elementsAsArray.splice(indexToInsert, 0, numberToInsert);
                break;

        }
    }

    console.log(elementsAsArray.join(" "));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);