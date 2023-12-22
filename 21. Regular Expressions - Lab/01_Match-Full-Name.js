function matchFullName(text) {
    let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNamesArray = [];

    let validName = regex.exec(text);

    while (validName) {
        validNamesArray.push(validName[0]);
        validName = regex.exec(text);
    }

    console.log(validNamesArray.join(" "));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov");