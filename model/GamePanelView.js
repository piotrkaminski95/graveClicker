export class GamePanelView{
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }

    render(){
        return `<div><button class="tablink">Companions</button>
                    <button class="tablink">Shop</button>
                    <button class="tablink">Inventory</button> 
                    <button class="tablink">Passives</button></div>`;
    }

    createElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }


    //TO DO, add items as parametr;
    registerEventListeners() {
        this.element.getElementsByClassName('tablink')[0].addEventListener('onclick', this.controller.openContent.bind("sss"));
    }
}