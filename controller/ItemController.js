import {storage} from "../storage/Storage.js"
import {character} from "../model/Character.js";
import {itemObservator} from "../model/Observator.js";



export class ItemController{
    constructor(item){
        this.item = item;
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
            
            character.coins -= this.item.cost;
            character.atk += (this.item.currentBonus - this.item.previousBonus);
            this.item.previousBonus = this.item.currentBonus;
            
            this.item.lvlUp();
            this.item.costGrow();
            this.item.atkGrow();

        }
        itemObservator.notifyAll(this.item);
    }
    
}