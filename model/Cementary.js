export class cementary {
    constructor() {
        this.index = 6;
        this.graveyard = [];
        this.addGraves();
    }
    
    addGraves() {
        for (let i = 1; i < 5; i++) {
            this.graveyard.push(Grave.createGrave("testGrave" + i, this.getImgs()));
        }
    }
    
    next() {
        if (this.index >= this.graveyard.length) {this.index = 0;}
        return this.graveyard[this.index++];
    }
    
    getImgs() {
        let arr = [];
        for (let i = 1; i <= 4; i++) {
            arr.push("./img/square" + i + ".png");
        }
        return arr;
    }
}
