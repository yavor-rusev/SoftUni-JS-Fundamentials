function companyUsers(input) {
    let companies = {};

    input.forEach(line => {
        let [company, employeeID] = line.split(" -> ");

        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set;
        }

        companies[company].add(employeeID);
    });

    let companiesMatrixSorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let currentCompany of companiesMatrixSorted) {
        let companyName = currentCompany[0];
        let employeesSet = currentCompany[1]

        console.log(companyName);

        for (let employee of employeesSet) {
            console.log(`-- ${employee}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);