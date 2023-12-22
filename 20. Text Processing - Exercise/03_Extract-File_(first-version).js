function extractFile(input) {
    let indexOfLastDoubleSlash = input.lastIndexOf(`\\`);
    let indexOfLastFullStop = input.lastIndexOf(`.`);

    let name = input.substring(indexOfLastDoubleSlash + 1, indexOfLastFullStop);
    let extension = input.substring(indexOfLastFullStop + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');