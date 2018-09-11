import {Target} from "../model/Target.js";
import {Grave} from "../model/Grave.js";
import {TargetView} from "../view/TargetView.js"


export class TargetController {
    
    constructor(target) {
        this.cementary = new cementary();
        this._target = target;
    }
    
    get target() {
        return this._target;
    }
    
    set target(t) {
        this._target = t;
    }
    
    handleClick(e) {
        console.log(this._target.hp + "/" + this.target.fullHp);
        this._target.getHit(1);
        let hpLeft = this.target.countHpPercent();
        console.log(hpLeft + "% left");
        this.target.changeTargetImg();
        if (this._target.isDiged()) {
            console.log("change target")
            this.changeTarget();
        } else {
            this.target.notifyAll();
        }
    }
    
    changeTarget() {
        this._target.grave = this.cementary.next();
        this._target.fullHp = 10;
        this._target.notifyAll();
    }
}

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