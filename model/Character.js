import {coinObservator} from "../model/Observator.js";

class Character {
    constructor() {
        this._name = "Player";
        this._coins = 0;
        this._atk = 4;
    }

    get name() {
        return this._name;
    }

    get atk() {
        return this._atk;
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
}
export let character = new Character();
