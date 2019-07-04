class Animal {
    constructor(field, x, y, health, lifespan) {
        this.field = field
        this.x = x
        this.y = y
        this.health = health
        this.lifespan = lifespan
        this.birthstamp = millis() / 1000
        this.hunger = 4 // hunger can go up to ten
    }

    getAge() {
        // return the amount of time it's been alive
        return millis() / 1000 - this.birthstamp
    }

    draw() {

        var width = 30;
        var height = 30;

        image(
            this.image,
            this.x,
            this.y,
            width,
            height
        )
    }

}