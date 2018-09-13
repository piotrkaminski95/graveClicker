export class MathemathicHelper {

    static costGrowUp(level, cost){
        
        let exponent = 1.5
        return Math.floor(cost * Math.pow(level,exponent))
    }

    static bonusGrowUp(){
        
    }

}
