function meetings(stringArray) {
    let meetingCalendar = {};

    for (let string of stringArray) {
        let [day, person] = string.split(" ");

        if (meetingCalendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);

        } else {
            meetingCalendar[day] = person;
            console.log(`Scheduled for ${day}`);

        }
    }

    for (let meeting in meetingCalendar) {
        console.log(`${meeting} -> ${meetingCalendar[meeting]}`);

    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);