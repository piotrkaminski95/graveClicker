export class MathemathicHelper {
    
    static costGrowUp(startValue, level){
        
        let q = 2.8;
        return Math.round(startValue * Math.pow(q, (level+1)));
    }

    static bonusGrowUp(startValue, level){
        let q = 1.3;
        return Math.round(startValue * Math.pow(q, (level+1)));
    }

}
