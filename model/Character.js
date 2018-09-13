class Character {
    constructor() {
        this._name = "Player";
        this._coins = 50;
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

    get weapon() {
        return this._weapon;
    }

    set name(value) {
        this._name = value;
    }

    set atk(value) {
        this._atk = value;
    }

    set coins(value) {
        this._coins = value;
    }
}
export let character = new Character();
