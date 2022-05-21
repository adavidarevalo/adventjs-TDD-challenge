import decodeNumber from ".";

describe('Decode Number', () => {
    it('The missing reindeer result is: 1', () => {
        expect(decodeNumber('...')).toEqual(3);
    }),
    it('The missing reindeer result is: 4', () => {
        expect(decodeNumber('.,')).toEqual(4)
    })
    it('The missing reindeer result is: 2', () => {
        expect(decodeNumber(',.')).toEqual(6)
    }),
    it('The missing reindeer result is: 2', () => {
        expect(decodeNumber(',...')).toEqual(8)
    }),
    it('The missing reindeer result is: 8', () => {
        expect(decodeNumber('.........!')).toEqual(107)
    }),
    it('The missing reindeer result is: 1', () => {
        expect(decodeNumber('.;')).toEqual(49)
    })
    it('The missing reindeer result is: 1', () => {
        expect(decodeNumber('..,')).toEqual(5)
    })
    it('The missing reindeer result is: 1', () => {
        expect(decodeNumber('..,!')).toEqual(95)
    })
    it('The missing reindeer result is: 1', () => {
        expect(decodeNumber('.;!')).toEqual(49)
    })
    it('The missing reindeer result is: 1', () => {
        expect(decodeNumber('!!!')).toEqual(300)
    })
    it('The missing reindeer result is: 1', () => {
        expect(decodeNumber(';!')).toEqual(50)
    })
    it('The missing reindeer result is: 1', () => {
        expect(decodeNumber(';.W')).toEqual(NaN)
    })
})