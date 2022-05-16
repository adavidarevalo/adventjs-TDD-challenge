export default function maxProfit(prices: number[]) {
    let min = prices[0];
    let max = 0;
    prices.forEach((price, index) => {
        if(
            price > prices[index + 1] && 
            min > prices[index + 1] &&
            index + 2 !== prices.length
            ) {
            min = prices[index + 1]
        } 
        if(price > prices[index - 1]) max = price
    })
    
    const profit = max - min

    if(profit > 0) return `${profit} (compra a ${min}, vende a ${max})`

    return '-1 (no hay ganancia posible)'
}