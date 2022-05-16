import {createXmasTree} from '.'

describe('Christmas tree', () => {
    it('its a correct tree 5 levels', () => {

        const result = `____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____\n`
        expect(createXmasTree(5)).toEqual(result)
    })
    it('its a correct tree, 3 levels', () => {

        const result = `__*__\n_***_\n*****\n__#__\n__#__\n`
        expect(createXmasTree(3)).toEqual(result)
    })
})