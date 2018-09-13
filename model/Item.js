export class Item {
    constructor(){
        this._type = null;
        this._id = null;
        this._name = null;
        this._cost = null;
        this._bonus = null;
        this._lvl = 0;
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

    get cost() {
        return this._cost;
    }

    get bonus() {
        return this._bonus;
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

    set cost(value) {
        this._cost = value;
    }

    set bonus(value) {
        this._bonus = value;
    }

    set lvl(value){
        this._lvl = value;
    }

    lvlUp(){
        this._lvl++;
    }
}