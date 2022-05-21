import canCarry from "."

describe('Can Carry', () => {
    it('', () => {
        const travel = [[2, 5, 8], [3, 6, 10]]
        expect(canCarry(4, travel)).toBeFalsy()
    })
    it('', () => {
        const travel = [[1, 1, 5], [2, 2, 10]]
        expect(canCarry(3,travel )).toBeTruthy()
    })
    it('', () => {
        const travel = [[2, 1, 5],[3, 5, 7]]
        expect(canCarry(3, travel)).toBeTruthy()
    })
    it('', () => {
        const travel = [[2, 3, 8],[2, 5, 7]]
        expect(canCarry(4, travel)).toBeTruthy()
    })
    it('', () => {
        const travel = [[2, 3, 8]]
        expect(canCarry(1, travel)).toBeFalsy()
    })
    it('', () => {
        const travel = [[1, 2, 4], [2, 3, 8]]
        expect(canCarry(2, travel)).toBeFalsy()
    })
})