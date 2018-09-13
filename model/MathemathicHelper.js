export class MathemathicHelper {
    
    static costGrowUp(startValue, level){
        
        let q = 2.8;
        return Math.round(startValue * Math.pow(q, (level+1)));
    }

    static bonusGrowUp(startValue, level){
        let q = 1.3;
        return Math.round(startValue * Math.pow(q, (level+1)));
    }
    
    static countHpPercent(hp, fullHp) {
        return (hp / fullHp).toFixed(2) * 100;
    }

    static countPercent(num, percent) {
        return (num/100) * percent;
    }

    static shortFormatNumber(num) {        
        let suffix = ['', 'k', 'm', 'g', 't', 'p', 'e', 'z', 'y'];
        let base = 10;
        let power = 0;
        
        for (let i = 0; i < suffix.length; i++) {
            let next3power;
            
            power += 3;
            next3power = Math.pow(base, power);
            
            if (num < next3power) {
                return "$ " + `${(num / Math.pow(base, power - 3)).toFixed(1).replace(/\.0+$/, '')}${suffix[i]}`;
            }
        }
    }
}
