function valueOfAString(array) {
    let text = array[0];
    let textLength = text.length;
    let letterCase = array[1];

    let sumASCIIValues = 0;

    for (let i = 0; i < textLength; i++) {
        if (letterCase === "UPPERCASE" && text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
            sumASCIIValues += text.charCodeAt(i);
        }

        if (letterCase === "LOWERCASE" && text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
            sumASCIIValues += text.charCodeAt(i);
        }
    }

    console.log(`The total sum is: ${sumASCIIValues}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);