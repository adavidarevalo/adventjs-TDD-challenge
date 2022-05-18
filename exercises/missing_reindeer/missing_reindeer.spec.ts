import missingReindeer from "."

describe('Missing Reindeer', () => {
    it('The missing reindeer result is: 1', () => {
        const reindeers = [0, 2, 3]

        expect(missingReindeer(reindeers)).toEqual(1);
    }),
    it('The missing reindeer result is: 4', () => {
        const reindeers = [5, 6, 1, 2, 3, 7, 0]
        expect(missingReindeer(reindeers)).toEqual(4)
    })
    it('The missing reindeer result is: 2', () => {
        const reindeers = [0, 1]
        expect(missingReindeer(reindeers)).toEqual(2)
    }),
    it('The missing reindeer result is: 2', () => {
        const reindeers = [3, 0, 1]
        expect(missingReindeer(reindeers)).toEqual(2)
    }),
    it('The missing reindeer result is: 8', () => {
        const reindeers = [9, 2, 3, 5, 6, 4, 7, 0, 1]
        expect(missingReindeer(reindeers)).toEqual(8)
    }),
    it('The missing reindeer result is: 1', () => {
        const reindeers = [0]
        expect(missingReindeer(reindeers)).toEqual(1)
    })
})