function addressBook(stringArray) {
    let adressBookAsAssociatedArray = {};

    for (let string in stringArray) {
        let personInfo = stringArray[string].split(":");
        let name = personInfo[0];
        let adress = personInfo[1];
        adressBookAsAssociatedArray[name] = adress;
    }

    let adressBookSortedMatrix = Object.entries(adressBookAsAssociatedArray);
    adressBookSortedMatrix.sort((personA, personB) => personA[0].localeCompare(personB[0]));

    for (let [name, adress] of adressBookSortedMatrix) {
        console.log(`${name} -> ${adress}`);
    }
}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);