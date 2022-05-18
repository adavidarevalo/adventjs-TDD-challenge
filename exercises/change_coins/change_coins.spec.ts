import getCoins from "."

describe('change_coins', () => {
    it('Validate change', () => {
        const result = [1, 0, 0, 0, 0, 1]

        expect(getCoins(51)).toEqual(result)
    }),
    it('Validate change', () => {
        const result = [1, 1, 0, 0, 0, 0]
        expect(getCoins(3)).toEqual(result)
    }),
    it('Validate change', () => {
        const result = [0, 0, 1, 0, 0, 0]
        expect(getCoins(5)).toEqual(result)
    }),
    it('Validate change', () => {
        const result = [1, 0, 1, 1, 0, 0]
        expect(getCoins(16)).toEqual(result)
    }),
    it('Validate change', () => {
        const result = [0, 0, 0, 0, 0, 2]
        expect(getCoins(100)).toEqual(result)
    })
})