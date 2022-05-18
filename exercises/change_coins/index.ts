export default function getCoins(change: number) {
    let valueTotal = change;

    const coinsValue = [ 50, 20, 10, 5, 2, 1 ]

    const result = coinsValue.map((value) => {
        if(valueTotal >= value) {    

            const coinValue = Math.floor(valueTotal/value)
            valueTotal = valueTotal % value
            
            return coinValue
        } 
        return 0
    })   
    
    return result.reverse()
}