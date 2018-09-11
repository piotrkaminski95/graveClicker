export class ItemView{
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        // this.registerEventListeners();
    }

    render(){
        return `<div class="tabcontent" id="companions">
        ddd
      </div>
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