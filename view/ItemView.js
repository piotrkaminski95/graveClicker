export class ItemView{
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        // this.registerEventListeners();
    }

    render(){
        return `<div class="tabcontent ${this.controller.item.type}">
        <hr /><p>${this.controller.item.name} LVL: ${this.controller.item.lvl} <button class="btn">buyme</button>  </p><hr /></div>
        `
    }
    createElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }
    
    //TODO
    registerEventListeners(){

    }
}