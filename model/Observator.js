class Observator{
    constructor(){
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.slice(index, 1);
        }
    }
    
    notifyAll(data) {
        for (let obs of this.observers) {
            obs.update(data);
        }
    }
}

export let targetObservator = new Observator();
export let itemObservator = new Observator();