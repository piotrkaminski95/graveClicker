export class TargetController {
    
    constructor(target) {
        this._target = target;
    }
    
    get target() {
        return this._target;
    }
    
    set target(t) {
        this._target = t;
    }
    
    handleClick(e) {
        let lifeBar = document.getElementsByClassName("lifeValue")[0];
        this._target.getHit(1);
        let hpLeft = this.countHpPercent(this.target.hp, parseInt(lifeBar.getAttribute("value")));
        console.log("" + hpLeft);
        lifeBar.setAttribute("style", "height: 24px; width: " + hpLeft + "%; background-color: red;");
        console.log("hit-" + hpLeft);
    }
    
    countHpPercent(hp, fullHp) {
        console.log("" + (fullHp / hp))
        return ((fullHp * hp) / 100).toFixed(2) * 100;
    }
}