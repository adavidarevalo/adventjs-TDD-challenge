import checkSledJump from ".";

describe('Missing Reindeer', () => {
    it('The result is true', () => {
        const heights = [1, 2, 3, 2, 1]

        expect(checkSledJump(heights)).toBeTruthy();
    }),
    it('The result is true', () => {
        const heights = [0, 1, 0]

        expect(checkSledJump(heights)).toBeTruthy();
    }),
    it('The result is true', () => {
        const heights = [0, 3, 2, 1]

        expect(checkSledJump(heights)).toBeTruthy();
    }),
    it('The result is true', () => {
        const heights = [0, 1000, 1]

        expect(checkSledJump(heights)).toBeTruthy();
    }),
    it('The result is false', () => {
        const heights = [2, 4, 4, 6, 2]

        expect(checkSledJump(heights)).toBeFalsy();
    }),
    it('The result is false', () => {
        const heights = [1, 2, 3]

        expect(checkSledJump(heights)).toBeFalsy();
    })
    it('The result is false', () => {
        const heights = [1, 2, 3, 2, 1, 2, 3]

        expect(checkSledJump(heights)).toBeFalsy();
    })
})