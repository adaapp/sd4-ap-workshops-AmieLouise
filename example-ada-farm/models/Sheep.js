class Sheep extends Animal {

    constructor(field, x, y, health = 10, lifespan = 350) {
        super(field, x, y, health, lifespan)
        console.log('creating new cow')
        this.image = loadImage('./images/sheep.png')
    }

}