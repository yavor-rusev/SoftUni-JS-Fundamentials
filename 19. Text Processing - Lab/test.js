let arr = [1, 2, 3, 4]

let str = arr.join("")
    .split("2")
    .join("")
    .split("")
    .map(Number)

console.log(str);
console.log(typeof str);