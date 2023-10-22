function employees(names) {
    for (let name of names) {
        let employee = {
            name,
            personalNumber: name.length
        }

        console.log(`Name: ${employee['name']} -- Personal Number: ${employee.personalNumber}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]); 