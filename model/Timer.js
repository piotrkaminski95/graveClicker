import {timerObservator} from "../model/Observator.js";

class Timer {
    constructor() {
        this.time = 1000;
        this.start();
    }
    
    start() {
        setInterval(() => {timerObservator.notifyAll({status: "timerHit"}); clearInterval()}, this.time);
    }
}

export let timer = new Timer();