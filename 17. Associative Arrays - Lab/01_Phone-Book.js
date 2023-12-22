function phoneBook(stringArray) {
    let telephoneBook = {};

    for (let string of stringArray) {
        let [name, number] = string.split(" ");
        telephoneBook[name] = number;
    }

    for (let person in telephoneBook) {
        console.log(`${person} -> ${telephoneBook[person]}`);
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);