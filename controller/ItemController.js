import {storage} from "../storage/Storage.js"

export class ItemController{
    constructor(item){
        this.item = item;
        storage.add(this.item)   
    }
    
}