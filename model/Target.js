export class Target {
    
    constructor() {
        this._fullHp;
        this._hp;
        this._grave;
        this.observers = [];
        
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
        let hPercent = this.countHpPercent();
        
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

    countHpPercent() {
        return (this._hp / this._fullHp).toFixed(2) * 100;
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.slice(index, 1);
        }
    }
    
    notifyAll() {
        for (let obs of this.observers) {
            obs.update();
        }
    }
}