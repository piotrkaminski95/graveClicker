export class TargetView {
    
    constructor(controller) {
        this.controller = controller;
        this.controller.target.subscribe(this);
        this.element = this.createElement();
        this.registerEventListeners();
    }
    
    render() {
        return `<div class="target">
                    <p class="targetName">${this.controller.target.getTargetName()}</p>
                    <img src="${this.controller.target.getTargetImg()}" alt="grave" id="graveImg" style="height: 50px">
                    <div class="lifeBar" style="border: red 2px solid">
                        <div class="lifeValue" value="${this.controller.target.hp}" style="height: 24px; width: 100%; background-color: red"></div>
                    </div>
                </div>`;
    }
    
    createElement() {
        let elem = document.createElement("template");
        elem.innerHTML = this.render();
        return elem.content.firstChild;
    }
    
    registerEventListeners() {
        this.element.getElementsByTagName("img")[0].addEventListener('click', this.controller.handleClick.bind(this.controller));
    }
    
    update() {
        let elem = document.getElementsByClassName("target")[0];
        elem.getElementsByClassName("targetName")[0].innerHTML = this.controller.target.getTargetName();
        elem.getElementsByTagName("img")[0].setAttribute("src", this.controller.target.getTargetImg());
        elem.getElementsByClassName("lifeValue")[0].setAttribute("value", this.controller.target.hp);
    }
}