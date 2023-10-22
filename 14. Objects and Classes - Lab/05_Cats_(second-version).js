function cats(arrayOfStrings) {
    class Cats {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }

        sayMeow() {
            console.log(`${this.name}, age ${this.age} says Meow`);

        }
    }

    for (let catString of arrayOfStrings) {
        let [catName, catAge] = catString.split(" ");

        let currentCatObj = new Cats(catName, catAge);
        currentCatObj.sayMeow();
    }
}

cats([
    'Candy 1',
    'Poppy 3',
    'Nyx 2'
]);