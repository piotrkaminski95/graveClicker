export class TargetView {
    
    constructor(controller) {
        this.controller = controller;
        this.controller.target.subscribe(this);
        this.element = this.createElement();
        this.registerEventListeners();
    }
    
    // static img - change to dynamic
    render() {
        return `<div class="board">
                    <div class="target-gravestone" id="gravestone">
                    <div class"hpBar" style="border: red 2px solid;">
                        <div class"hpValue" style="height: 14px; width: 100%; background-color: red;">
                        </div>
                    </div>
                    <img id="gravestone-img" src="./img/gravestone.png">
                    </div>
                    <div class="target-grave" id="target">
                        <img id="grave-img" src="./img/grave1.png">
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
    
    update() {
        console.log(this.controller.target.targetName + "  " + this.controller.target.targetImg);
        let elem = document.getElementsByClassName("board")[0];
        console.log(elem);
//        elem.getElementsByClassName("targetName")[0].innerHTML = this.controller.target.targetName;
        elem.getElementsByTagName("img")[1].setAttribute("src", this.controller.target.targetImg);
        elem.firstElementChild.firstElementChild.firstElementChild.setAttribute("style", "height: 24px; width: " + this.controller.target.countHpPercent() + "%; background-color: red;");
    }
}