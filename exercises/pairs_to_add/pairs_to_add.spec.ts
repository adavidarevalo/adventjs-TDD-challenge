import sumPairs from '.'

describe('Pairs to add', () => {
    it('Found the first sum', () => {
        expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7])
    })
    it('There are no numbers that added together give the desired result.', () => {
        expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull()
    })
    it('Found the first sum', () => {
        expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2])
    })
    it('Found the first sum', () => {
        expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2])
    })
    it('Found the first sum', () => {
        expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5])
    })
})