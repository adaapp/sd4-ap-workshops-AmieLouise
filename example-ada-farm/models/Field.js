class Field {
    constructor(name, health, x, y, width, height) {
        this._name = name
        this._health = health
        this._x = x
        this._y = y
        this._width = width
        this._height = height
        this._crops = []
    }

    // GETTERS AND SETTERS //

    getXPos(){
        return this._x;
    }
    getYPos() {
        return this._y;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    getCrops(){
        return this._crops;
    }
    getName(){
        return this._name;
    }

    addCrops(cropType, field, x, y){
        this._crops.push(new Crop(cropType, field, x, y))
    }

    
    // OTHER FUNCTIONS // 

    draw() {
        stroke('#7c4011')
        strokeWeight(10)
        fill('#b58969')
        const cropsArray = this.getCrops();
        rect(this.getXPos(), this.getYPos(), this.getWidth(), this.getHeight(), 10)
        for (var crop of cropsArray) {
            crop.draw()
        }
    }


    plant(x, y) {
        console.log('new plant')
        // Get the crop name from the field name
        var cropName = this.getName().split(' ') // => e.g. "Wheat"
        // Add a new crop to the field's list of crops
        this.addCrops(cropName[0], this, x, y)
        // this.crops.push(new Crop(cropName[0], this, x, y))
    }

    containsPoint(x, y) {
        var top = this.getYPos();
        var bottom = this.getYPos() + this.getHeight();
        var left = this.getXPos();
        var right = this.getXPos() + this.getWidth();

        var isInVerticalRange = y > top && y < bottom
        var isInHorizontalRange = x > left && x < right

        return isInHorizontalRange && isInVerticalRange
    }
}
