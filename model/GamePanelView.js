export class GamePanelView{
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }

    render(){
        return `<div class="panel-game"><button class="tablink">Companions</button>
                    <button class="tablink">Shop</button>
                    <button class="tablink">Inventory</button> 
                    <button class="tablink">Passives</button></div>`;
    }

    createElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners() {
        for(let i = 0; i < this.element.getElementsByClassName('tablink').length; i ++)
            this.element.getElementsByClassName('tablink')[i].addEventListener('onclick', this.controller.openContent.bind(this.controller));
    }
}