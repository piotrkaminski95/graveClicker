export class Item {
    constructor(){
        this._type = null;
        this._id = null;
        this._name = null;
        this._startCost = null;
        this._startBonus = null;
        this._lvl = 1;
    }

    static createFromObject(obj){
        let item = new Item();
        Object.assign(item, obj);
        return item;
    }

    get type() {
        return this._type;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get startCost() {
        return this._startCost;
    }

    get startBonus() {
        return this._startBonus;
    }

    get lvl(){
        return this._lvl;
    }

    set type(value){
        this._type = value;
    }

    set id(value) {
        this._id = value;
    }

    set name(value) {
        this._name = value;
    }

    set startCost(value) {
        this._startCost = value;
    }

    set startBonus(value) {
        this._startBonus = value;
    }

    set lvl(value){
        this._lvl = value;
    }
}