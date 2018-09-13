import {coinObservator} from "../model/Observator.js";
import {character} from "../model/Character.js";
import {MathemathicHelper} from "../model/MathemathicHelper.js";

export class CoinView {
    constructor(controller) {
        this.controller = controller;
        this.element = document.getElementsByClassName("score")[0].firstElementChild;
        this.element.textContent = "$" + character.coins;
        coinObservator.subscribe(this);
    }
    
    update(data) {
        this.element.textContent = MathemathicHelper.shortFormatNumber(character.coins);
    }
}