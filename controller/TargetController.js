import {Target} from "../model/Target.js";
import {Grave} from "../model/Grave.js";
import {TargetView} from "../view/TargetView.js"


export class TargetController {
    
    constructor(target) {
        this._target = target;
        this._counter = 1;
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
        if (this._target.isDiged()) {
            console.log("change target")
            this.changeTarget();
        }
    }
    
    changeTarget() {
        this._counter++;
        let grave = new Grave();
        grave.setNameAndImage("testTarget" + this._counter, "./img/square2");
        this._target.grave = grave;
        this._target.hp = 100;
        TargetView.updateTarget(this.target);
    }
    
    countHpPercent(hp, fullHp) {
        console.log("" + (fullHp / hp))
        return ((fullHp * hp) / 100).toFixed(2) * 100;
    }
}