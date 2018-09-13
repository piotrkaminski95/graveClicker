export class Grave {
    
    constructor() {
        this._name;
        this._imgArr;
        this._imgIndex = 0;
    }
    
    static createGrave(name, imgSrc) {
        let grave = new Grave();
        grave._name = name;
        grave._imgArr = imgSrc;
        return grave;
    }
    
    static createFromObj(obj) {
        let grave = new Grave();
        Object.assign(grave, obj);
        return grave;
    }
    
    get name() {
        return this._name;
    }
    
    set name(name) {
        this._name = name;
    }
    
    get img() {
        return this._imgArr[this._imgIndex];
    }
    
    set imgArr(imgArr) {
        this._imgArr = imgArr;
    }
    
    set imgIndex(index) {
        if (index >= this._imgArr.length || index < 0) {
            this._imgIndex = 0;
        } else {
            this._imgIndex = index;            
        }
    }
}