import {MathemathicHelper} from "./MathemathicHelper";

export class Item {
    constructor(){
        this._type = null;
        this._id = null;
        this._name = null;
        this._cost = null;
        this._currentBonus = null;
        this._lvl = 0;
        this._previousBonus = 0;
    }

    static createFromObject(obj){
        let item = new Item();
        Object.assign(item, obj);
        return item;
    }

    get previousBonus() {
        return this._previousBonus;
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

    get currentBonus() {
        return this._currentBonus;
    }

    get lvl(){
        return this._lvl;
    }

    set previousBonus(value) {
        this._previousBonus = value;
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

    set currentBonus(value) {
        this._currentBonus = value;
    }

    set lvl(value){
        this._lvl = value;
    }

    lvlUp(){
        this._lvl++;
    }

    costGrow(){
        this.cost = MathemathicHelper.costGrowUp(cost);
        console.log(cost);
    }

    atkGrow(){
        this.currentBonus = MathemathicHelper.costGrowUp(this.currentBonus);
        cosnole.log(this.currentBonus);
    }
}