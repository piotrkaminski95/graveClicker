import {MathemathicHelper} from "./MathemathicHelper.js";

export class Item {
    constructor(){
        this._type = null;
        this._id = null;
        this._name = null;
        this._cost = null;
        this._currentBonus = null;
        this._lvl = 1;
        this._previousBonus = 0;
        this._startCost = null;
        this._startBonus = null;
    }

    static createFromObject(obj){
        let item = new Item();
        Object.assign(item, obj);
        return item;
    }

    get previousBonus() {
        return this._previousBonus;
    }

    get startCost() {
        return this._startCost;
    }

    get startBonus(){
        return this._startBonus;
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

    set currentBonus(value) {
        this._currentBonus = value;
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

    set lvl(value){
        this._lvl = value;
    }

    set startCost(value) {
        this._startCost = value;
    }

    set startBonus(value) {
        this._startBonus = value;
    }

    lvlUp(){
        this._lvl++;
    }

    costGrow(){
        this._cost = MathemathicHelper.costGrowUp(this._startCost, this._lvl);
    }

    atkGrow(){
        this._currentBonus = MathemathicHelper.bonusGrowUp(this._startBonus, this._lvl);
    }
}