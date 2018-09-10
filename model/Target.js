export class Target {
    
    constructor() {
        this.hp;
        this.grave;
    }
    
    set grave(grave) {
        this.grave = grave;
    }
    
    get targetImg() {
        return this.grave.img;
    }
    
    get targetName() {
        return this.grave.name;
    }
    
    set hp(hp) {
        this.hp = hp;
    }
    
    get hp() {
        return this.hp;
    }
    
    getHit(power) {
        if (!this.isDiged) {
            this.hp = hp - power;            
        }
    }
    
    isDiged() {
        return hp <= 0;
    }
}