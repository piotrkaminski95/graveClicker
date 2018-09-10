export class TargetView {
    
    constructor(controller, target) {
        this.controller = controller;
        this.element = createElement(target);
        this.registerEventListners();
    }
    
    render(target) {
        return `<div class="target">
                    <img src="${target.targetImg}" alt="grave" id="graveImg">
                    <div class="lifeBar" style="border: red 2px solid">
                        <div class="lifeValue" value="${target.hp}" style="height: 24px; width: 100%; background-color: red"></div>
                    </div>
                </div>`;
    }
    
    createElement(target) {
        let elem = document.createElement("template");
        elem.innerHTML = this.render(target);
        return elem.content.firstChild;
    }
    
    registerEventListeners() {
        this.element.addEventListener('click', this.controller.handleClick.bind(this.controller));
    }
}