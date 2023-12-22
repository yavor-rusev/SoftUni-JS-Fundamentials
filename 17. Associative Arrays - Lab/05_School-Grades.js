function schoolGrades(stringArray) {
    let studentsObj = {};

    for (let string of stringArray) {
        let studentInfo = string.split(" ");
        let studentName = studentInfo.shift();
        let gradesArray = studentInfo.map(Number);

        if (!studentsObj.hasOwnProperty(studentName)) {
            studentsObj[studentName] = gradesArray;

        } else {
            while (gradesArray.length > 0) {
                let currentGrade = gradesArray.shift();
                studentsObj[studentName].push(currentGrade);
            }
        }
    }

    for (let [name, gradesArray] of Object.entries(studentsObj)) {

        let currentSumGrades = 0;
        let summingGrades = gradesArray.map(grade => {
            currentSumGrades += grade;
            return currentSumGrades;
        })

        let finalSumGrades = summingGrades[summingGrades.length - 1];
        let gradesCount = gradesArray.length;
        let averageGrade = (finalSumGrades / gradesCount).toFixed(2);

        studentsObj[name] = averageGrade;
    }

    let studentsSorted = Object.entries(studentsObj);
    studentsSorted.sort(([nameA, arrayA], [nameB, arrayB]) => nameA.localeCompare(nameB));

    for (let [name, averageGrade] of studentsSorted) {
        console.log(`${name}: ${averageGrade}`);
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);