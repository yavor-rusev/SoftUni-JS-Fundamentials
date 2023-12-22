function companyUsers(input) {
    let companies = {};

    input.forEach(line => {
        let [company, employeeID] = line.split(" -> ");

        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set;
        }

        companies[company].add(employeeID);
    });

    let companiesMatrixSorted = Object.entries(companies).sort(([a, aSet], [b, bSet]) => a.localeCompare(b));

    for (let currentCompany of companiesMatrixSorted) {
        let companyName = currentCompany[0];
        let employeesSet = currentCompany[1];

        console.log(companyName);
        employeesSet.forEach(employee => console.log(`-- ${employee}`));
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);