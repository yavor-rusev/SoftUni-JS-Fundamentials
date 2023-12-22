function schoolRegister(lastYearRegisterArray) {
    let newYearRegisterArray = [];

    for (let studentInfoString of lastYearRegisterArray) {
        let studentStringPropertiesArray = studentInfoString.split(", ");

        let studentNamePropertyArray = studentStringPropertiesArray[0].split("Student ")[1].split(": ");
        let studentGradePropertyArray = studentStringPropertiesArray[1].split(": ");
        let studentScorePropertyArray = studentStringPropertiesArray[2].split(": ");

        let studentPropertyMatrix = [];

        studentPropertyMatrix.push(studentGradePropertyArray);
        studentPropertyMatrix.push(studentNamePropertyArray);
        studentPropertyMatrix.push(studentScorePropertyArray);

        let studentObject = Object.fromEntries(studentPropertyMatrix);

        if (Number(studentObject['Graduated with an average score']) >= 3) {
            studentObject.Grade = Number(studentObject.Grade) + 1;
            studentObject['Graduated with an average score'] = Number(studentObject['Graduated with an average score']);

            newYearRegisterArray.push(studentObject);
        }
    }

    newYearRegisterArray.sort((a, b) => a.Grade - b.Grade);

    for (let index = newYearRegisterArray[0].Grade; index <= 12; index++) {

        let currentGradeArray = newYearRegisterArray.filter(a => a.Grade === index);

        let listOfStudentsNames = "";
        let sumLastYearAnnualScore = 0;
        let newYearStudentCount = 0;

        for (let student of currentGradeArray) {
            listOfStudentsNames += `${student.name} `;
            sumLastYearAnnualScore += student['Graduated with an average score'];
            newYearStudentCount++;
        }

        let listOfStudentsNamesArray = listOfStudentsNames.split(" ");
        listOfStudentsNamesArray.pop();

        let lastYeaAverageAnnualScore = sumLastYearAnnualScore / newYearStudentCount;

        if (currentGradeArray.length > 0) {
            console.log(`${index} Grade`);
            console.log(`List of students: ${listOfStudentsNamesArray.join(", ")}`);
            console.log(`Average annual score from last year: ${lastYeaAverageAnnualScore.toFixed(2)}`);
            console.log(``);
        }
    }
}

schoolRegister([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]);