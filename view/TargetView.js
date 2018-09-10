export class TargetView {
    
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }
    
    render() {
        return `<div class="target">
                    <img src="${this.controller.target.getTargetImg()}" alt="grave" id="graveImg">
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
        this.element.addEventListener('click', this.controller.handleClick.bind(this.controller));
    }
}