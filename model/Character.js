export class Character {
    constructor() {
        this._name = "Player";
        this._coins = 0;
        this._weapon = {weaponName: "fist", atk: 1};
    }

    get name() {
        return this._name;
    }

    get atk() {
        return this._weapon["atk"];
    }

    get weaponName() {
        return this._weapon["weaponName"];
    }

    get coins() {
        return this._coins;
    }

    get weapon() {
        return this._weapon;
    }

    set name(value) {
        this._name = value;
    }

    set atk(value) {
        this._weapon["atk"] = value;
    }

    set weaponName(value){
        this._weapon["weaponName"] = value;
    }

    set coins(value) {
        this._coins = value;
    }
}
