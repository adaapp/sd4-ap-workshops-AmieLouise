class Cow extends Animal {

    constructor(field, x, y, health = 10, lifespan = 350) {
        super(field, x, y, health, lifespan)
        console.log('creating new cow')
        this.image = loadImage('./images/cow.png')
        this.graze()

        setInterval( ()  => {
            this.graze();
        }, 6000);

        setInterval(() => {
            this.hunger++;
            console.log(this.hunger)
        }, 1000);

    }

    graze = () => {
        let random = Math.floor(Math.random() * 16) +0 
        let possibleCrop = this.field.crops[random]
        console.log(random)
        if (possibleCrop) {
            this.hunger = 0
            this.field.crops.splice(random, 1)
        }
        else {
            this.hunger++ 
        }
    }

}