function classlaptop() {
    class Laptop {
        constructor(info, quality) {
            this.info = info;
            this.producer = this.info.producer;
            this.age = Number(this.info.age);
            this.brand = this.info.brand;
            this.isOn = false;
            this.quality = Number(quality);
        }

        turnOn = function () {
            this.quality = this.quality - 1;
            this.isOn = true;
        }

        turnOff = function () {
            this.quality = this.quality - 1;
            this.isOn = false;
        }

        showInfo() {
            return JSON.stringify(this.info);
        }

        get price() {
            return Number(800 - (this.age * 2) + (this.quality * 0.5));
        }
    }


    let info = {
        producer: "Dell",
        age: 2, brand: "XPS"
    }

    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)
}

classlaptop();