import {daysToXmas} from '.'

describe('Christmas tree', () => {
    it('its a correct date, return a number', () => {
        const date: Date = new Date('Dec 1, 2021')

        expect(typeof daysToXmas(date)).toBe('number')
    })
    it('its a correct date', () => {

        const date: Date = new Date('Dec 24, 2021 00:00:01')

        const dateNow: number = new Date('').getTime();

        const rest = dateNow - date.getTime()

        expect(daysToXmas(date)).toEqual(rest/(1000*60*60*24) )
    })
})