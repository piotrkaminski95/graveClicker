import {storage} from "../storage/Storage.js"
import {character} from "../model/Character.js";
import {itemObservator} from "../model/Observator.js";



export class ItemController{
    constructor(item){
        this._item = item;
        storage.add(this.item);
    }

    get item(){
        return this._item;
    }

    set item(value){
        this._item = value;
    }

    changeStatisticObject(e) {
        if(character.coins > this.item.cost){
            this.item.lvlUp();
            character.coins -= this.item.cost;
        }
        itemObservator.notifyAll(this.item);
        console.log(this.item.lvl);
    }
    
}