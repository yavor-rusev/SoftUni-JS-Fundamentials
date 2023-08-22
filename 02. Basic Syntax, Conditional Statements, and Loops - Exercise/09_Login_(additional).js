function login(input) {
    let username = String(input[0]);

    let correctPass = '';
    let charIndex = username.length - 1;

    while (charIndex >= 0) {
        correctPass += username[charIndex];
        charIndex--;

    }

    let passAttempt = 0;
    let index = 1;
    let receivedPass = input[index];

    while (receivedPass !== correctPass) {
        passAttempt++;

        if (passAttempt > 3) {
            console.log(`User ${username} blocked!`);
            return;

        }

        console.log("Incorrect password. Try again.");
        receivedPass = input[++index];

    }

    console.log(`User ${username} logged in.`);

}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);