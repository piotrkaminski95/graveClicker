import {Target} from "../model/Target.js";
import {Grave} from "../model/Grave.js";
import {TargetView} from "../view/TargetView.js"
import {cementary} from "../model/Cementary.js";
import {targetObservator} from "../model/Observator.js";
import {MathemathicHelper} from "../model/MathemathicHelper.js";
import {character} from "../model/Character.js";

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
        let hpLeft = MathemathicHelper.countHpPercent(this.target.hp, this.target.fullHp);
        console.log(hpLeft + "% left");
        this.target.changeTargetImg();
        if (this._target.isDiged()) {
            console.log("change target");
            this.target.levelUp();
            this.changeTarget();
        } else {
            targetObservator.notifyAll({status:"hit", target:this._target});
        }
    }
    
    changeTarget() {
        this._target.grave = this.cementary.next();
        this._target.fullHp = Target.BASE_HP * this.target.level;
        targetObservator.notifyAll({status:"digged", target:this._target});
    }
    
    update(data) {
        let power = character.companionsAtk;
        console.log("tctrl -- " + power);
        if (data["status"] === "timerHit") {
            this.target.getHit(power);
            if (this._target.isDiged()) {
                console.log("change target");
                this.target.levelUp();
                this.changeTarget();
            } else {
                targetObservator.notifyAll({status:data["status"], target:this._target, power: power});
        
            }
        }
    }

}