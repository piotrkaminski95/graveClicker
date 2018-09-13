import {Grave} from "../model/Grave.js";

export class cementary {
    constructor() {
        this.index = 6;
        this.gravestones = this.collectGravestones();
        this.graveyard = [];
        this.addGraves();
        console.log("---" + this.gravestones[0] + "/" + this.gravestones[1]);
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
            arr.push("./img/grave" + i + ".png");
        }
        return arr;
    }
    
    getGravestoneImg() {
        let randInt = Math.floor((Math.random() * 3) + 1);
        
        console.log("random --- " + randInt);
        if (randInt < 0 || randInt >= this.gravestones.length) {
            return this.gravestones[0];
        } else {
            return this.gravestones[randInt];
        }
    }
    
    collectGravestones() {
        let arr = [];
        for (let i = 1; i <= 1; i++) {
            arr.push("./img/gravestone" + i + ".png");
        }
        return arr;
        
    }
}
