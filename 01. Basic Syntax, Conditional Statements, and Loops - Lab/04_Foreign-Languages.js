function foreignLanguages(input) {
    let country = input;

    if (country === "England" || country === "USA") {
        console.log("English");

    } else if (country === "Spain" || country === "Argentina" || country === "Mexico") {
        console.log("Spanish");

    } else {
        console.log("unknown");

    }
}

foreignLanguages("Spain");