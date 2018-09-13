export class MathemathicHelper {

    static costGrowUp(XP){
        let constA = 8.7;
        constB = -40;
        constC = 111;
        return Math.max( Math.floor( constA * Math.log( XP + constC ) + constB ), 1 )
    }
    
    static countHpPercent(hp, fullHp) {
        return (hp / fullHp).toFixed(2) * 100;
    }

}