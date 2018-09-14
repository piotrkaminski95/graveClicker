export class GamePanelView{
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }

    render(){
        return `<div class="transparent-border">
                    <button class="tablink tablink1 btn" name="companions">Companions</button>
                    <button class="tablink tablink2 btn" type="button" disabled>Shop</button>
                    <button class="tablink tablink3 btn" name="inventory">Inventory</button> 
                    <button class="tablink tablink4 btn" type="button"  disabled>Passives</button>
                    <div class="panelContent"><div>
</div>`;
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