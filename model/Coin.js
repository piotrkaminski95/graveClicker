import {targetObservator} from "../model/Observator.js";
import {character} from "../model/Character.js";
import {Target} from "../model/Target.js";
import {MathemathicHelper} from "../model/MathemathicHelper.js";

export class Coin {
    
    constructor() {
        targetObservator.subscribe(this);
    }
    
    update(data) {
        console.log("adding coins");
        target = data["target"];
        
        if (data["status"] === "hit") {
            character.coins += Math.ceil(MathemathicHelper.countPercent(target.fullHp, 1));
            console.log("add " + character.coins + " coin");
        }
        
        if (data["status"] === "digged") {
            character.coins += Math.ceil(MathemathicHelper.countPercent(target.fullHp, 10));
            console.log("add " + character.coins + " coin");
        }
        
        if (data["status"] === "timerHit") {
            character.coins += data["power"];
        }
    }
}