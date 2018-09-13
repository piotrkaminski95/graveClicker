export class MathemathicHelper {
    
    static costGrowUp(level, startValue){
        
        let q = 2.8;
        console.log(level + " level");
        console.log(startValue + " startValue");
        console.log((startValue * Math.pow(q, (level+1))) + " cost");
        return Math.round(startValue * Math.pow(q, (level+1)));
    }

    static bonusGrowUp(level, startValue){
        let q = 1.3;
        // console.log(level + " level");
        // console.log(startValue + " startValue");
        // console.log((startValue * Math.pow(q, (level-1))) + " bonius");
        return Math.round(startValue * Math.pow(q, (level+1)));
    }

}
