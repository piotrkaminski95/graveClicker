export class MathemathicHelper {

    static costGrowUp(XP){
        let constA = 8.7;
        let constB = -40;
        let constC = 111;
        return Math.max( Math.floor( constA * Math.log( XP + constC ) + constB ), 1 )
    }
    
    static countHpPercent(hp, fullHp) {
        return (hp / fullHp).toFixed(2) * 100;
    }

    static countPercent(num, percent) {
        return (num/100) * percent;
    }
}