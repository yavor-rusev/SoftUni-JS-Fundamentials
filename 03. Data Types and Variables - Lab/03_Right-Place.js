function rightPlace(str, char, correctStr) {
    let result = str.replace("_", char);
    let output = result === correctStr ? "Matched" : "Not Matched";

    console.log(output);
}

rightPlace('Str_ng', 'i', 'Strong');