import getMinJump from "."

describe('Get min jump', () => {
    it('the response is 4', () => {
        const obstacles = [5, 3, 6, 7, 9];
        expect(getMinJump(obstacles)).toEqual(4)
    })
    it('the response is 7', () => {
        const obstacles = [2, 4, 6, 8, 10]
        expect(getMinJump(obstacles)).toEqual(7)
    })
})