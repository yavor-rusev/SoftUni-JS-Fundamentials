function cone(param1, param2) {
    let radius = Number(param1);
    let height = Number(param2);

    let volume = 1 / 3 * Math.PI * Math.pow(radius, 2) * height;

    let slantHeight = Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2));
    let area = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}

cone(3.3, 7.8);