import {Item} from "../model/Item.js";

class Storage {
    constructor(){
        this.itemSet = new Set();
        this.load();
    }

    add(item){
        this.itemSet.add(item);
        this.save();
    }

    remove(item){
        this.itemSet.delete(item);
        this.save();
    }

    save(){
        localStorage.setItem('itemSet', JSON.stringify([...this.itemSet]));
    }

    load(){
        let itemSet = JSON.parse(localStorage.getItem('itemSet'));
        if(itemSet !== null){
            for(let item of itemSet){
                this.itemSet.add(Item.createFromObject(item));
            }
        }
    }
}

export let storage = new Storage();