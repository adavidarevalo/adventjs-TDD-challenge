import pangram from "."

describe('Pangram', () => {
    it('', () => {
        const cart = 'Extraño pan de col y kiwi se quemó bajo fugaz vaho'

        expect(pangram(cart)).toBeTruthy()
    })
    it('', () => {
        const cart = 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'

        expect(pangram(cart)).toBeTruthy()
    })
    it('', () => {
        const cart = 'Esto es una frase larga pero no tiene todas las letras del abecedario'

        expect(pangram(cart)).toBeFalsy()
    })
    it('', () => {
        const cart = 'De la a a la z, nos faltan letras'

        expect(pangram(cart)).toBeFalsy()
    })
})