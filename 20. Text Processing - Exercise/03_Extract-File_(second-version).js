function extractFile(input) {
    let nameAndExtensionStr = input.split("\\").pop();
    let nameAndExtensionAsArray = nameAndExtensionStr.split(".")
    
    let extension = nameAndExtensionAsArray.pop();
    let name = nameAndExtensionAsArray.join(".");

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');