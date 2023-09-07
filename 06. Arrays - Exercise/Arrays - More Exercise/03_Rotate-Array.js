function rotateArray(array) {
    let rotations = Number(array.pop());

    for (let index = 0; index < rotations; index++) {

        let currentElement = array.pop();
        array.unshift(currentElement);

    }

    console.log(array.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);