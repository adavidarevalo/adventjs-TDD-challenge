import fixFiles from "."

describe('Fix Files', () => {
    it('', () => {
        const files = ['photo', 'postcard', 'photo', 'photo', 'video']
        const result = ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
        expect(fixFiles(files)).toEqual(result)
    })
    it('', () => {
        const files = ['file', 'file', 'file', 'game', 'game']
        const result = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
        expect(fixFiles(files)).toEqual(result)
    })
    it('', () => {
        const files = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
        const result = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
        expect(fixFiles(files)).toEqual(result)
    })
})