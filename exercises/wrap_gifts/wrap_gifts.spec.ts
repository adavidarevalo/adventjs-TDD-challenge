import wrapGifts from "."

describe('Wrap Gifts', () => {
    it('the result is ****, *📷*, *⚽️*, ****', () => {
        const girts = ["📷", "⚽️"]

        const result = [ '****', '*📷*', '*⚽️*', '****']

        expect(wrapGifts(girts)).toEqual(result)
    }),
    it('the result is ******, *🏈🎸*, *🎮🧸*, ******', () => {
        const girts = ["🏈🎸", "🎮🧸"]

        const result = [ '******', '*🏈🎸*', '*🎮🧸*', '******']

        expect(wrapGifts(girts)).toEqual(result)
    }),
    it('the result is ****, *📷*, ****', () => {
        const girts = ["📷"]

        const result = [ '****', '*📷*', '****']

        expect(wrapGifts(girts)).toEqual(result)
    }),
    it('the result is []', () => {
        expect(wrapGifts([])).toEqual([])
    })
})