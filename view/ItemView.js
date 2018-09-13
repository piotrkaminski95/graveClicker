import {itemObservator} from "../model/Observator.js";

export class ItemView{
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
        itemObservator.subscribe(this);
    }


    render(){
        return `<div class="tabcontent ${this.controller.item.type}" id=${this.controller.item.id}>
        <hr /> ${this.renderP()} <hr /></div>
        `
    }
    createElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    renderP(){
        return `<p>${this.controller.item.name} 
        LVL: ${this.controller.item.lvl}  
        COST: ${this.controller.item.cost}
        <button class="btn buy">buyme</button> </p>`

    }
    
    
    registerEventListeners(){
        this.element.getElementsByClassName('buy')[0].addEventListener('click',this.controller.changeStatisticObject.bind(this.controller));
    }

    update(data) {
        console.log("this update");
        console.log(this.controller.item.id);
        
        let element = document.getElementById(this.controller.item.id);

        element.innerHTML = this.render();


    }
}