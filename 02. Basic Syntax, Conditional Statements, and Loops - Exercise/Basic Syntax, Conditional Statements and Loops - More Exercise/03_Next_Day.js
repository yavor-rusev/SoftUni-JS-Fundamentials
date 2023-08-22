// Грешка в Judge - Test #3 подава за вход 1 година, а на изхода очаква 1901 година!

function nextDay(year, month, day) {
    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;

    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            if (day === 29) {
                nextDay = 1;
                nextMonth = month + 1;

            }

        } else {
            if (day === 28) {
                nextDay = 1;
                nextMonth = month + 1;

            }
        }
    }

    if (day === 30) {
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            nextDay = 1;
            nextMonth = month + 1;

        }
    }

    if (day === 31) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
                nextDay = 1;
                nextMonth = month + 1; break;
            case 12:
                nextDay = 1;
                nextMonth = 1;
                nextYear = year + 1; break;
        }
    }

    console.log(`${nextYear}-${nextMonth}-${nextDay}`);

}

nextDay(1901, 1, 1);