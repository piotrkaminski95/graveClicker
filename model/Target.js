export class Target {
    
    constructor() {
        this._hp;
        this._grave;
    }
    
    set grave(grave) {
        this._grave = grave;
    }
    
    getTargetImg() {
        return this._grave.img;
    }
    
    getTargetName() {
        return this._grave.name;
    }
    
    set hp(hp) {
        this._hp = hp;
    }
    
    get hp() {
        return this._hp;
    }
    
    getHit(power) {
        if (this.isDiged() !== true) {
            console.log("target hp - " + power);
            this._hp = this._hp - power;            
            console.log("target hp: " + this._hp);
        } else {
            console.log("target dead!!!")
    
        }
    }
    
    isDiged() {
        console.log("chacking if is smaller");
        if (this._hp <= 0) {
            return true;
        } else {
            return false;
        }
    }
}