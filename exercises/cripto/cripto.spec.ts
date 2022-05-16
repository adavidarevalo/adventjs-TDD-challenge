import maxProfit from ".";

describe('Cripto profit per day', () => {
    it('valid cart, have the correct parenthesis correctly', () => {
        const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
        const result = '16 (compra a 18, vende a 34)'

        expect(maxProfit(pricesBtc)).toEqual(result)
    })
    it('valid cart, have the correct parenthesis correctly', () => {
        const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
        const result = '60 (compra a 10, vende a 70)'

        expect(maxProfit(pricesEth)).toEqual(result)
    })
    it('valid cart, have the correct parenthesis correctly', () => {
        const pricesDoge = [18, 15, 12, 11, 9, 7]
        const result = '-1 (no hay ganancia posible)'

        expect(maxProfit(pricesDoge)).toEqual(result)
    })
    it('valid cart, have the correct parenthesis correctly', () => {
        const pricesAda = [3, 3, 3, 3, 3]
        const result = '-1 (no hay ganancia posible)'

        expect(maxProfit(pricesAda)).toEqual(result)
    })
})