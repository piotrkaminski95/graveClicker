export class GamePanelView{
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }

    render(){
        return `<div class="panel-game"><button class="tablink" name="companions">Companions</button>
                    <button class="tablink" name="shop">Shop</button>
                    <button class="tablink" name="inventory">Inventory</button> 
                    <button class="tablink" name="passive">Passives</button></div>`;
    }

    createElement() {   
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners() {
        for(let i = 0; i < this.element.getElementsByClassName('tablink').length; i ++)
            this.element.getElementsByClassName('tablink')[i].addEventListener('click', this.controller.openContent.bind(this.element));
    }
}