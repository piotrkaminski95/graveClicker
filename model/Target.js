import {MathemathicHelper} from "../model/MathemathicHelper.js";

export class Target {
    
    constructor() {
        this._fullHp;
        this._hp;
        this._grave;
        this._level = 0;        
    }
    
    static get BASE_HP() {
        return 10;
    }
    
    get level() {
        return this._level;
    }
    
    set grave(grave) {
        this._grave = grave;
    }
    
    get grave() {
        return this._grave;
    }
    
    get targetImg() {
        return this._grave.img;
    }
    
    get targetName() {
        return this._grave.name;
    }

    set fullHp(hp) {
        this._hp = hp;
        this._fullHp = hp;
    }
    
    get fullHp() {
        return this._fullHp;
    }
    
    set hp(hp) {
        this._hp = hp;
    }
    
    get hp() {
        return this._hp;
    }
    
    getHit(power) {
        if (this.isDiged() !== true) {
            this._hp = this._hp - power;            
        } else {
            console.log("target dead!!!")
        }
    }
    
    isDiged() {
        if (this._hp <= 0) {
            return true;
        } else {
            return false;
        }
    }
    
    changeTargetImg() {
        let hPercent = MathemathicHelper.countHpPercent(this.hp, this.fullHp);
        
        if (hPercent < 25) {
            this.grave._imgIndex = 0;
        } else if (hPercent < 50) {
            this.grave._imgIndex = 2;
        } else if (hPercent < 75) {
            this.grave._imgIndex = 1;
        } else {
            this.grave._imgIndex = 0
        }
    }
    
    levelUp() {
        this._level++;
    }
}