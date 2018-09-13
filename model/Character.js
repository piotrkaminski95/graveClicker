import {coinObservator} from "../model/Observator.js";
import {itemObservator} from "../model/Observator.js";
import {storage} from "../storage/Storage.js";
import {Item} from "../model/Item.js";

class Character {
    constructor() {
        this._name = "Player";
        this._coins = 0;
        this._atk = 4;
        this._companionsAtk = 0;
        itemObservator.subscribe(this);
    }

    get name() {
        return this._name;
    }

    get atk() {
        return this._atk;
    }
    
    get companionsAtk() {
        return this._companionsAtk;
    }

    get coins() {
        return this._coins;
    }

    set name(value) {
        this._name = value;
    }

    set atk(value) {
        this._atk = value;
    }

    set coins(value) {
        this._coins = value;
        coinObservator.notifyAll("");
        console.log("coins added");
    }
    
    sumCompanionsAtk() {
        let atk = 0;
        for(let item of storage.itemSet) {
            if (item.type === "companions") {
                atk += item.currentBonus; 
            }   
        }
        this._companionsAtk = atk;
    }
    
    update(data) {
        this.sumCompanionsAtk();
    }
}
export let character = new Character();
