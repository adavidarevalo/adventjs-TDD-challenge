import {isValid} from '.'

describe('validate cart', () => {
    it('valid cart, have the correct parenthesis correctly', () => {
        const cart = 'bici coche (balón) bici coche peluche'
        console.log(isValid(cart));
        
        expect(isValid(cart)).toBeTruthy()
    })
    it('valid cart, have the correct parenthesis correctly', () => {
        const cart = '(muñeca) consola bici'
        expect(isValid(cart)).toBeTruthy()
    })
    it('invalid cart, does not contain closing parentheses ")"', () => {
        const cart = 'bici coche (balón bici coche'
        expect(isValid(cart)).not.toBeTruthy()
    })
    it('invalid cart, contain a "["', () => {
        const cart = 'peluche (bici [coche) bici coche balón'
        expect(isValid(cart)).not.toBeTruthy()
    })
    it('invalid cart, contain a "{"', () => {
        const cart = '(peluche {) bici'
        expect(isValid(cart)).not.toBeTruthy()
    })
    it('invalid cart, parenthesis is empty', () => {
        const cart = '() bici'
        expect(isValid(cart)).not.toBeTruthy()
    })
})