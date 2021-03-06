import {targetObservator} from "../model/Observator.js";
import {MathemathicHelper} from "../model/MathemathicHelper.js";

export class TargetView {
    
    constructor(controller) {
        this.controller = controller;
        targetObservator.subscribe(this);
        this.element = this.createElement();
        this.registerEventListeners();
    }
    
    render() {
        return `<div class="board">
                    <div class="target-gravestone" id="gravestone">
                    <div class="hpBar" style="border: red 2px solid;">
                        <div class="hpValue" style="height: 14px; width: 100%; background-color: red;">
                        </div>
                    </div>
                    <img id="gravestone-img" src="../resources/img/gravestone1.png">
                    </div>
                    <div class="target-grave" id="target">
                        <img id="grave-img" src="../resources/img/grave1.png">
                    </div>
                </div>`
    }
    
    createElement() {
        let elem = document.createElement("template");
        elem.innerHTML = this.render();
        return elem.content.firstChild;
    }
    
    registerEventListeners() {
        this.element.getElementsByClassName("target-grave")[0].addEventListener('click', this.controller.handleClick.bind(this.controller));
    }
    
    update(data) {
        console.log(this.controller.target.targetName + "  " + this.controller.target.targetImg);
        let elem = document.getElementsByClassName("board")[0];
        console.log("--------- " + this.controller.target.grave.gravestone)
        // change gravestone img
        elem.getElementsByTagName("img")[0].setAttribute("src", this.controller.target.grave.gravestone);

        // change grave img
        elem.getElementsByTagName("img")[1].setAttribute("src", this.controller.target.targetImg);
        
        // update life bar
        elem.firstElementChild.firstElementChild.firstElementChild.setAttribute("style", `height: 24px; width: ${MathemathicHelper.countHpPercent(this.controller.target.hp, this.controller.target.fullHp)}%; background-color: red;`);
    }
}