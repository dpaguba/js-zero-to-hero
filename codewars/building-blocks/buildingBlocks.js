class Block{

    constructor(data){
        this.width = data[0]
        this.length = data[1]
        this.height = data[2]
    }
    
    getWidth(){
        return this.width
    }

    getLength(){
        return this.length
    }

    getHeight(){
        return this.height
    }

    getVolume(){
        return this.getHeight() * this.getLength() * this.getWidth()
    }

    getSurfaceArea(){
        return 2 * this.getWidth() * this.getLength() + 2 * this.getHeight() * this.getLength() + 2 * this.getHeight() * this.getWidth() 
    }
}
